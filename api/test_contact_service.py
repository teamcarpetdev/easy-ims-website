"""Contact service: required fields + valid email, honeypot answered OK but never saved, every valid request saved
to the file before the email is tried, an email failure does not lose it, and the per-IP limit."""
import json
import os
import tempfile
import threading
import urllib.error
import urllib.request
from http.server import ThreadingHTTPServer

os.environ["CONTACT_DATA"] = os.path.join(tempfile.mkdtemp(), "contact.jsonl")
os.environ["CONTACT_LIMIT_PER_HOUR"] = "3"
import contact_service as cs  # noqa: E402

srv = ThreadingHTTPServer(("127.0.0.1", 0), cs.Handler)
threading.Thread(target=srv.serve_forever, daemon=True).start()
URL = f"http://127.0.0.1:{srv.server_port}/api/contact"


def post(body, ip="1.1.1.1"):
    req = urllib.request.Request(URL, data=json.dumps(body).encode(), method="POST",
                                 headers={"Content-Type": "application/json", "X-Forwarded-For": ip})
    try:
        with urllib.request.urlopen(req) as r:
            return r.status, json.loads(r.read())
    except urllib.error.HTTPError as e:
        return e.code, json.loads(e.read())


def saved():
    p = os.environ["CONTACT_DATA"]
    return [json.loads(l) for l in open(p, encoding="utf-8")] if os.path.exists(p) else []


GOOD = {"name": "Ana Ejemplo", "company": "Ferretería Ejemplo", "email": "ana@example.com", "phone": "809-000-0000",
        "employees": "1-10", "message": "Quiero una demo", "lang": "es"}


def test_validation_and_honeypot():
    assert post({**GOOD, "email": "no-es-correo"}, ip="2.2.2.2")[0] == 400
    assert post({**GOOD, "company": ""}, ip="2.2.2.2")[0] == 400
    assert post({**GOOD, "website": "http://spam"}, ip="2.2.2.2") == (200, {"ok": True})
    assert all(r.get("company") for r in saved())          # nothing invalid or spam was saved


def test_saved_even_when_the_email_cannot_be_sent(monkeypatch):
    sent = []
    monkeypatch.setattr(cs, "send_mail", lambda d: sent.append(d["email"]) or False)
    before = len(saved())
    assert post(GOOD, ip="3.3.3.3") == (200, {"ok": True})
    rows = saved()
    assert len(rows) == before + 1 and rows[-1]["company"] == "Ferretería Ejemplo" and sent == ["ana@example.com"]


def test_rate_limit_per_ip(monkeypatch):
    monkeypatch.setattr(cs, "send_mail", lambda d: True)
    codes = [post(GOOD, ip="4.4.4.4")[0] for _ in range(4)]
    assert codes == [200, 200, 200, 429]
