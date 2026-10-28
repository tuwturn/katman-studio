@echo off
setlocal
cd /d "%~dp0"
title Katman Studio - Yerel Ag Web Sunucusu
if not exist "Katman Studio.exe" (
  echo Katman Studio.exe bulunamadi. Bu dosyayi uygulama klasorunden acin.
  pause
  exit /b 1
)
set "ELECTRON_RUN_AS_NODE=1"
"Katman Studio.exe" "resources\app\server.mjs" --lan --open %*
echo.
echo Web sunucusu kapandi.
pause
