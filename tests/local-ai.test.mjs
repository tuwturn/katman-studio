import {test} from 'node:test';
import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
import {createWebServer} from '../server.mjs';
const require=createRequire(import.meta.url),{validatePrompt,LocalAI}=require('../desktop/local-ai.cjs');
test('local prompts validate size, height, variation and quality without shell interpolation',()=>{
 const value=validatePrompt({prompt:'Şapka takan ördek',height:100,seed:42,quality:'draft'});assert.equal(value.steps,32);assert.equal(value.language,'tr');assert.equal(validatePrompt({prompt:'duck',language:'en',height:250,seed:1}).steps,64);for(const input of [{prompt:''},{prompt:'x'.repeat(601)},{prompt:'duck',height:0},{prompt:'duck',height:251},{prompt:'duck',seed:-1},{prompt:'duck',seed:1.5}])assert.throws(()=>validatePrompt(input));
});
test('unconfigured local generation fails clearly instead of returning a demo model',async()=>{
 const engine=new LocalAI({home:process.cwd()+'/test-results/not-installed-ai',scripts:process.cwd()+'/local-ai'});assert.equal(engine.status().ready,false);await assert.rejects(engine.generate({prompt:'duck'}),/kurun/);await assert.rejects(engine.result('../outside'),/Geçersiz/);assert.equal(engine.status().job,null);
});
test('free text is forwarded without a preset and 3D requires the exact approved reference',async()=>{
 const engine=new LocalAI({home:process.cwd()+'/test-results/not-installed-ai',scripts:process.cwd()+'/local-ai'});engine.ready=()=>true;
 let launched;engine.launch=(kind,_python,_args,input)=>{launched={kind,input};return launched;};
 for(const prompt of ['Cam gövdeli bir masa lambası','A red teapot with a curved handle','Üç katlı bir uzay istasyonu']){await engine.request('concept',{prompt,seed:5});assert.equal(launched.kind,'concept');assert.equal(launched.input.prompt,prompt);assert.equal(launched.input.action,'concept');}
 await assert.rejects(engine.generate({prompt:'anything'}),/görseli/);
 engine.reference={id:'12345678-abcd-1234-abcd-123456789012',prompt:'Approved lamp',language:'en'};
 await assert.rejects(engine.generate({referenceId:'../outside'}),/görseli/);
 await engine.generate({referenceId:engine.reference.id,prompt:'Injected different prompt',height:75,seed:8});assert.equal(launched.input.prompt,'Approved lamp');assert.equal(launched.input.referenceId,engine.reference.id);assert.equal(launched.input.height,75);
});
test('LAN API accepts local JSON requests and rejects cross-origin writes and arbitrary actions',async()=>{
 let called=0;const ai={request:async(action,data)=>{called++;if(action==='status')return{ready:true,busy:false};if(action==='generate'){assert.equal(data.prompt,'ördek');return{job:{state:'running'}};}throw new Error('Bilinmeyen işlem');}},server=createWebServer({ai});await new Promise(r=>server.listen(0,'127.0.0.1',r));const origin='http://127.0.0.1:'+server.address().port;
 try{assert.equal((await(await fetch(origin+'/api/local-ai/status')).json()).ready,true);let response=await fetch(origin+'/api/local-ai/generate',{method:'POST',headers:{'Content-Type':'application/json',Origin:origin},body:JSON.stringify({prompt:'ördek'})});assert.equal(response.status,200);const before=called;response=await fetch(origin+'/api/local-ai/generate',{method:'POST',headers:{'Content-Type':'application/json',Origin:'https://example.com'},body:'{}'});assert.equal(response.status,403);assert.equal(called,before);assert.equal((await fetch(origin+'/api/local-ai/install')).status,400);assert.equal((await fetch(origin+'/api/local-ai/generate',{method:'POST',body:'{}'})).status,400);assert.equal((await fetch(origin+'/api/local-ai/unknown')).status,400);}finally{await new Promise(r=>server.close(r));}
});
