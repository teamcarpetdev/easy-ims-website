# easy-ims.com contact form (contact_service.py): Python standard library only.
FROM python:3.12-slim
WORKDIR /app
COPY contact_service.py .
RUN useradd -r -u 10001 web && mkdir -p /data && chown web /data
USER web
EXPOSE 8080
CMD ["python", "-u", "contact_service.py"]
