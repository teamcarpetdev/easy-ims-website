@echo off
title Easy-IMS Local Server
color 0B

echo.
echo  ============================================
echo    Easy-IMS.com  ^|  Local Development Server
echo  ============================================
echo.
echo  Starting server on http://localhost:8080
echo  Press Ctrl+C to stop the server.
echo.

:: Change to the directory where this batch file lives
cd /d "%~dp0"

:: Open browser after a short delay (1 second)
start "" /b cmd /c "timeout /t 1 /nobreak >nul && start http://localhost:8080"

:: Start Python HTTP server
python -m http.server 8080

:: If Python fails, try python3
if %errorlevel% neq 0 (
    echo.
    echo  Python not found. Trying python3...
    python3 -m http.server 8080
)

if %errorlevel% neq 0 (
    echo.
    echo  ERROR: Python is not installed or not in PATH.
    echo  Install Python from https://python.org
    echo.
    pause
)
