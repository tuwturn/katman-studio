@echo off
cd /d "%~dp0"
if exist "Masaustu\Katman Studio\Katman Studio.exe" (
  start "" "Masaustu\Katman Studio\Katman Studio.exe"
  exit /b
)
if exist "node_modules\electron\dist\electron.exe" (
  start "" "node_modules\electron\dist\electron.exe" .
  exit /b
)
echo Masaustu paketi bulunamadi. npm install ve npm run package:desktop komutlarini calistirin.
pause
