import {cp,mkdir,readFile,writeFile,rename,access} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.resolve(fileURLToPath(new URL('..',import.meta.url)));
const {version}=JSON.parse(await readFile(path.join(root,'package.json'),'utf8'));
if(process.platform!=='win32')throw new Error('Mac paketi icin npm run package:mac komutunu kullanin.');
const output=path.join(root,'Masaustu','Katman Studio');
await mkdir(output,{recursive:true});
try { await access(path.join(output,'Katman Studio.exe')); } catch {
  await cp(path.join(root,'node_modules/electron/dist'),output,{recursive:true});
  await rename(path.join(output,'electron.exe'),path.join(output,'Katman Studio.exe'));
}
const appRoot=path.join(output,'resources','app');
await mkdir(appRoot,{recursive:true});
await cp(path.join(root,'public'),path.join(appRoot,'public'),{recursive:true});
await cp(path.join(root,'desktop'),path.join(appRoot,'desktop'),{recursive:true});
await cp(path.join(root,'server.mjs'),path.join(appRoot,'server.mjs'));
await cp(path.join(root,'desktop','Web-Sunucusu-Baslat.bat'),path.join(output,'Web-Sunucusu-Baslat.bat'));
await writeFile(path.join(output,'WEB-SUNUCUSU-OKU.txt'),'YEREL AGDAN KULLANIM\r\n\r\nWeb-Sunucusu-Baslat.bat dosyasini acin. Node.js kurulumu gerekmez.\r\nTarayici otomatik acilir. Acilan konsolda yerel ag IP adresi gorunur.\r\nDiger bilgisayarlari ayni Wi-Fi/Ethernet agina baglayip bu adresi tarayicida acin.\r\nOrnek: http://192.168.1.20:8787/\r\nPort mesgulse bir sonraki bos port otomatik secilir; konsoldaki tam adresi kullanin.\r\nSunucu penceresi acik kalmalidir. Durdurmak icin Ctrl+C kullanin.\r\nWindows ag izni sorarsa guvendiginiz ozel yerel ag icin izin verin.\r\nBilgisayarin IP adresi ag degistiginde degisebilir.\r\nHer tarayici kendi calismasini tutar; proje aktarmak icin .katman kaydedip diger cihazda acin.\r\n');
await writeFile(path.join(appRoot,'package.json'),JSON.stringify({name:'katman-studio',productName:'Katman Studio',version,main:'desktop/main.cjs'}));
await writeFile(path.join(root,'Masaustu','BENI OKU.txt'),'KATMAN STUDIO '+version+'\r\n\r\nKatman Studio klasoru icindeki Katman Studio.exe dosyasini acin.\r\nKurulum, Node.js, internet veya tarayici gerekmez.\r\nEXE dosyasini tek basina tasimayin; klasoru tum icerigiyle birlikte tutun.\r\nYukseklik: 0 - 250 mm (25 cm). Desenden tiklayarak veya surukleyerek secim yapin.\r\n');
console.log('Hazır: '+path.join(output,'Katman Studio.exe'));
