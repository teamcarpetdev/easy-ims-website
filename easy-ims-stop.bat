@echo off
title Easy-IMS Local Server - Stop
color 0C

echo.
echo  ============================================
echo    Easy-IMS.com  ^|  Stopping Local Server
echo  ============================================
echo.

call :killport 8080 "Easy-IMS server"

echo.
pause
exit /b 0

:killport
set "_port=%~1"
set "_name=%~2"
set "_found=0"
for /f "tokens=5" %%P in ('netstat -ano ^| findstr ":%_port%" ^| findstr LISTENING') do (
    echo   stopping %_name% ^(port %_port%, PID %%P^)...
    taskkill /PID %%P /F >nul 2>&1
    set "_found=1"
)
if "%_found%"=="0" echo   %_name% ^(port %_port%^) was not running.
exit /b 0
