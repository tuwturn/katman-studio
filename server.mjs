import http from 'node:http';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
const root = path.resolve(fileURLToPath(new URL('./public/', import.meta.url)));
const types = {'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.svg':'image/svg+xml'};
const server = http.createServer(async (req, res) => {
  try {
    const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    const file = path.resolve(root, '.' + (pathname === '/' ? '/index.html' : pathname));
    if (!file.startsWith(root + path.sep)) { res.writeHead(403).end(); return; }
    const body = await readFile(file);
    res.writeHead(200, {'Content-Type':types[path.extname(file)] || 'application/octet-stream','Cache-Control':'no-cache','X-Content-Type-Options':'nosniff'}).end(body);
  } catch { res.writeHead(404).end('Dosya bulunamadı'); }
});
server.on('error', e => { console.error(e.code === 'EADDRINUSE' ? '8787 portu kullanılıyor. Açık uygulama: http://127.0.0.1:8787' : e); process.exitCode = 1; });
server.listen(8787, '127.0.0.1', () => console.log('Katman hazır: http://127.0.0.1:8787\nKapatmak için Ctrl+C. Görseller bilgisayarınızdan çıkmaz.'));
