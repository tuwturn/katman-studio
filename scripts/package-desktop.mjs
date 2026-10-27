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
await writeFile(path.join(appRoot,'package.json'),JSON.stringify({name:'katman-studio',productName:'Katman Studio',version,main:'desktop/main.cjs'}));
await writeFile(path.join(root,'Masaustu','BENI OKU.txt'),'KATMAN STUDIO '+version+'\r\n\r\nKatman Studio klasoru icindeki Katman Studio.exe dosyasini acin.\r\nKurulum, Node.js, internet veya tarayici gerekmez.\r\nEXE dosyasini tek basina tasimayin; klasoru tum icerigiyle birlikte tutun.\r\nYukseklik: 0 - 250 mm (25 cm). Desenden tiklayarak veya surukleyerek secim yapin.\r\n');
console.log('Hazır: '+path.join(output,'Katman Studio.exe'));
