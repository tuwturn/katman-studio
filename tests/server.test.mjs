import {test} from 'node:test';
import assert from 'node:assert/strict';
import {networkAddresses,startWebServer} from '../server.mjs';
const close=server=>new Promise(resolve=>server.close(resolve));
test('LAN server binds all interfaces, serves application only and rejects writes',async()=>{
 const {server,port}=await startWebServer({lan:true,port:0,open:false});
 try{
  assert.equal(server.address().address,'0.0.0.0');const base=`http://127.0.0.1:${port}`;
  const page=await fetch(base);assert.equal(page.status,200);assert.match(await page.text(),/Katman Studio/);
  const worker=await fetch(base+'/worker.js');assert.match(worker.headers.get('content-type'),/javascript/);
  const head=await fetch(base+'/index.html',{method:'HEAD'});assert.equal(head.status,200);assert.equal(await head.text(),'');
  assert.equal((await fetch(base+'/..%2fpackage.json')).status,403);
  assert.equal((await fetch(base+'/desktop/main.cjs')).status,404);
  assert.equal((await fetch(base,{method:'POST',body:'data'})).status,405);
 }finally{await close(server);}
});
test('busy default port moves to the next port, explicit port fails clearly',async()=>{
 const first=await startWebServer({port:0});let next;
 try{
  next=await startWebServer({port:first.port,retry:true});assert.ok(next.port>first.port);
  await assert.rejects(startWebServer({port:first.port,retry:false}),{code:'EADDRINUSE'});
 }finally{if(next)await close(next.server);await close(first.server);}
});
test('network address list excludes loopback and unconfigured links',()=>{
 assert.deepEqual(networkAddresses({a:[{address:'127.0.0.1',family:'IPv4',internal:true},{address:'169.254.1.1',family:'IPv4',internal:false},{address:'::1',family:'IPv6',internal:true},{address:'192.168.1.12',family:'IPv4',internal:false},{address:'192.168.1.12',family:'IPv4',internal:false}]}),['192.168.1.12']);
});
