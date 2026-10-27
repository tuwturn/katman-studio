#!/bin/bash
set -e
cd -- "$(dirname -- "$0")"
katman_arch="mac"
if [ "$(uname -m)" = "arm64" ]; then katman_arch="mac-arm64"; fi
for katman_app in "dist/$katman_arch/Katman Studio.app"; do
  if [ -d "$katman_app" ]; then
    open "$katman_app"
    exit 0
  fi
done
if [ -x "node_modules/electron/dist/Electron.app/Contents/MacOS/Electron" ]; then
  exec "node_modules/electron/dist/Electron.app/Contents/MacOS/Electron" "$PWD"
fi
echo "Mac paketi bulunamadi. Kaynak koddan calistirmak icin npm ci, npm run build ve npm start komutlarini kullanin."
echo "Hazir Mac paketini GitHub Releases bolumunden indirebilirsiniz."
read -r -p "Kapatmak icin Enter tusuna basin..."
