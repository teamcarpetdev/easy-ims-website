"""easy-ims.com contact form (2026-10-31): POST /api/contact -> saved to a file on the server AND emailed.

Until now the form only showed "thank you" and sent nothing. This tiny service (Python standard library only):
  1. validates the request (required fields, lengths, a valid email, a honeypot field, 5 requests per IP per hour);
  2. appends it to /data/contact_requests.jsonl FIRST -- a request is never lost even if the email fails;
  3. emails it through Resend (domain easy-ims.com, already verified) to CONTACT_TO, Reply-To = the visitor.

Env (written by Ed in /opt/easyims/website-api/.env, never in the repo):
  RESEND_API_KEY   a Resend key with "Sending access" restricted to easy-ims.com
  CONTACT_TO       where requests go (comma-separated)
  CONTACT_FROM     default "Easy-IMS Web <web@easy-ims.com>"
Run: python contact_service.py   (listens on :8080; Caddy routes easy-ims.com/api/contact here)
"""
import html
import json
import os
import re
import threading
import time
import urllib.request
from datetime import datetime, timezone
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer

DATA = os.getenv("CONTACT_DATA", "/data/contact_requests.jsonl")
RESEND_KEY = os.getenv("RESEND_API_KEY", "")
TO = [a.strip() for a in os.getenv("CONTACT_TO", "").split(",") if a.strip()]
FROM = os.getenv("CONTACT_FROM", "Easy-IMS Web <web@easy-ims.com>")
LIMIT_PER_HOUR = int(os.getenv("CONTACT_LIMIT_PER_HOUR", "5"))
EMAIL_RE = re.compile(r"^[^@\s]{1,64}@[^@\s]{1,190}\.[^@\s]{2,24}$")
FIELDS = {"name": 120, "company": 160, "email": 200, "phone": 40, "employees": 20, "message": 3000, "lang": 5}

_hits: dict[str, list[float]] = {}
_lock = threading.Lock()


def _limited(ip: str) -> bool:
    now = time.time()
    with _lock:
        recent = [t for t in _hits.get(ip, []) if now - t < 3600]
        recent.append(now)
        _hits[ip] = recent
        return len(recent) > LIMIT_PER_HOUR


def validate(body: dict) -> tuple[dict | None, str | None]:
    if (body.get("website") or "").strip():          # honeypot: people never fill a hidden field
        return None, "spam"
    data = {k: str(body.get(k) or "").strip()[:n] for k, n in FIELDS.items()}
    if not data["name"] or not data["company"] or not data["email"]:
        return None, "missing"
    if not EMAIL_RE.match(data["email"]):
        return None, "email"
    return data, None


def save(data: dict, ip: str) -> None:
    os.makedirs(os.path.dirname(DATA), exist_ok=True)
    row = {"at": datetime.now(timezone.utc).isoformat(), "ip": ip, **data}
    with _lock, open(DATA, "a", encoding="utf-8") as f:
        f.write(json.dumps(row, ensure_ascii=False) + "\n")


def send_mail(data: dict) -> bool:
    if not RESEND_KEY or not TO:
        return False
    e = {k: html.escape(v) for k, v in data.items()}
    body = f"""<h2>Nueva solicitud de demostración</h2>
<table cellpadding="6" style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px">
<tr><td><b>Nombre</b></td><td>{e['name']}</td></tr><tr><td><b>Empresa</b></td><td>{e['company']}</td></tr>
<tr><td><b>Correo</b></td><td>{e['email']}</td></tr><tr><td><b>Teléfono</b></td><td>{e['phone']}</td></tr>
<tr><td><b>Empleados</b></td><td>{e['employees']}</td></tr><tr><td><b>Idioma</b></td><td>{e['lang']}</td></tr>
<tr><td valign="top"><b>Mensaje</b></td><td>{e['message'].replace(chr(10), '<br>')}</td></tr></table>"""
    req = urllib.request.Request("https://api.resend.com/emails", method="POST", data=json.dumps({
        "from": FROM, "to": TO, "reply_to": data["email"],
        "subject": f"Solicitud de demo: {data['company']} ({data['name']})", "html": body,
    }).encode(), headers={"Authorization": f"Bearer {RESEND_KEY}", "Content-Type": "application/json"})
    try:
        with urllib.request.urlopen(req, timeout=15) as r:
            return 200 <= r.status < 300
    except Exception as ex:   # noqa: BLE001 -- the request is already saved; log and answer OK to the visitor
        print(f"[contact] email failed: {type(ex).__name__}: {ex}", flush=True)
        return False


class Handler(BaseHTTPRequestHandler):
    def _json(self, code: int, obj: dict) -> None:
        raw = json.dumps(obj).encode()
        self.send_response(code)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(raw)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        self.wfile.write(raw)

    def do_POST(self):  # noqa: N802
        if self.path.split("?")[0] != "/api/contact":
            return self._json(404, {"ok": False})
        ip = (self.headers.get("X-Forwarded-For") or self.client_address[0]).split(",")[0].strip()
        if _limited(ip):
            return self._json(429, {"ok": False, "error": "too_many"})
        try:
            n = int(self.headers.get("Content-Length") or 0)
            if n > 20000:
                return self._json(413, {"ok": False, "error": "too_large"})
            body = json.loads(self.rfile.read(n) or b"{}")
        except (ValueError, json.JSONDecodeError):
            return self._json(400, {"ok": False, "error": "bad_request"})
        data, problem = validate(body)
        if problem == "spam":
            return self._json(200, {"ok": True})        # do not tell a bot it was caught
        if problem:
            return self._json(400, {"ok": False, "error": problem})
        save(data, ip)
        sent = send_mail(data)
        print(f"[contact] saved, email {'sent' if sent else 'NOT sent'}", flush=True)
        return self._json(200, {"ok": True})

    def do_GET(self):  # noqa: N802
        return self._json(200, {"ok": True, "service": "easy-ims contact"}) if self.path == "/api/contact/health" \
            else self._json(404, {"ok": False})

    def log_message(self, *a):   # no access log with visitors' data
        pass


if __name__ == "__main__":
    ThreadingHTTPServer(("0.0.0.0", int(os.getenv("PORT", "8080"))), Handler).serve_forever()
