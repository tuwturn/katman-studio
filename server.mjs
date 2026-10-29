import http from 'node:http';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import os from 'node:os';
import {spawn} from 'node:child_process';
import {pathToFileURL} from 'node:url';
const root = path.resolve(fileURLToPath(new URL('./public/', import.meta.url)));
const types = {'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.svg':'image/svg+xml','.wasm':'application/wasm','.png':'image/png','.ico':'image/x-icon','.txt':'text/plain; charset=utf-8'};
export function networkAddresses(interfaces=os.networkInterfaces()){
  const candidates=Object.entries(interfaces).flatMap(([name,addresses])=>(addresses||[]).filter(a=>a&&!a.internal&&(a.family==='IPv4'||a.family===4)&&!a.address.startsWith('169.254.')).map(a=>({address:a.address,score:Number(/^(192\.168\.|10\.)/.test(a.address))*2-Number(/virtual|vmware|vbox|vethernet|wsl|docker|tailscale|zerotier/i.test(name)||/^0[8a]:00:27:/i.test(a.mac||''))*10})));
  return [...new Set(candidates.sort((a,b)=>b.score-a.score).map(a=>a.address))];
}
export function createWebServer(){return http.createServer(async (req, res) => {
  try {
    if(!['GET','HEAD'].includes(req.method)){res.writeHead(405,{'Allow':'GET, HEAD'}).end();return;}
    const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    const file = path.resolve(root, '.' + (pathname === '/' ? '/index.html' : pathname));
    if (!file.startsWith(root + path.sep)) { res.writeHead(403).end(); return; }
    const body = await readFile(file);
    res.writeHead(200, {'Content-Type':types[path.extname(file)] || 'application/octet-stream','Cache-Control':'no-cache','X-Content-Type-Options':'nosniff'}).end(req.method==='HEAD'?undefined:body);
  } catch { res.writeHead(404).end('Dosya bulunamadı'); }
});}
export function openBrowser(url){
  const [command,args]=process.platform==='win32'?['rundll32.exe',['url.dll,FileProtocolHandler',url]]:process.platform==='darwin'?['open',[url]]:['xdg-open',[url]];
  const child=spawn(command,args,{stdio:'ignore',windowsHide:true,detached:true});child.on('error',()=>console.log('Tarayicida acin: '+url));child.unref();
}
export async function startWebServer({lan=false,port=8787,open=false,retry=true}={}){
  if(!Number.isInteger(port)||port<0||port>65535)throw new Error('Port 0-65535 arasinda olmali.');
  const server=createWebServer(),host=lan?'0.0.0.0':'127.0.0.1';
  for(let attempt=0;;attempt++){
    try{await new Promise((resolve,reject)=>{const failed=e=>{server.off('listening',ready);reject(e);},ready=()=>{server.off('error',failed);resolve();};server.once('error',failed);server.once('listening',ready);server.listen(port,host);});break;}
    catch(e){if(e.code==='EADDRINUSE'&&retry&&attempt<10&&port<65535){port++;continue;}throw e;}
  }
  const actual=server.address().port,local=`http://127.0.0.1:${actual}/`,urls=lan?networkAddresses().map(ip=>`http://${ip}:${actual}/`):[];
  console.log('\nKATMAN STUDIO - WEB SUNUCUSU\n\nBu bilgisayar: '+local);
  if(lan){console.log('\nAyni agdaki diger bilgisayarlarda su adresi acin:');for(const url of urls)console.log('  '+url);if(!urls.length)console.log('  Ag adresi bulunamadi. Wi-Fi veya Ethernet baglantisini kontrol edin.');}
  console.log('\nSunucu acik kaldigi surece erisilebilir. Durdurmak icin Ctrl+C.\nGorseller tarayicida islenir; sunucuya yuklenmez.\n');
  if(open)openBrowser(urls[0]||local);
  return {server,port:actual,local,urls};
}
if(process.argv[1]&&import.meta.url===pathToFileURL(path.resolve(process.argv[1])).href){
  const args=process.argv.slice(2),index=args.indexOf('--port'),explicit=index>=0||process.env.PORT!==undefined;
  startWebServer({lan:args.includes('--lan'),open:args.includes('--open'),port:Number(index>=0?args[index+1]:process.env.PORT??8787),retry:!explicit}).catch(e=>{console.error(e.code==='EADDRINUSE'?'Secilen port kullaniliyor. Baska bir --port degeri secin.':e.message);process.exitCode=1;});
}
