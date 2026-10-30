import {test} from 'node:test';
import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
import {createWebServer} from '../server.mjs';
const require=createRequire(import.meta.url),{validatePrompt,validateImage,LocalAI}=require('../desktop/local-ai.cjs');
test('height changes retain the reference variation and fidelity requires a separate installed model',async()=>{
 const engine=new LocalAI({home:process.cwd()+'/test-results/not-installed-ai',scripts:process.cwd()+'/local-ai'});engine.ready=()=>true;engine.gpu=()=>null;engine.reference={id:'12345678-abcd-1234-abcd-123456789012',prompt:'Approved teapot',seed:42,language:'en'};
 let input;engine.launch=(_kind,_python,_args,value)=>input=value;
 await engine.generate({referenceId:engine.reference.id,height:150});assert.equal(input.seed,42);assert.equal(input.height,150);
 engine.job={kind:'generate',referenceId:engine.reference.id,seed:43};await engine.generate({referenceId:engine.reference.id,height:75});assert.equal(input.seed,43);
 await assert.rejects(engine.generate({referenceId:engine.reference.id,quality:'fidelity'}),/Mini motorunu kurun/);
 engine.qualityReady=()=>true;await engine.generate({referenceId:engine.reference.id,quality:'fidelity',seed:44});assert.equal(input.quality,'fidelity');assert.equal(input.seed,44);
});
test('automatic precision retries the same GPU at float32 before CPU fallback',async()=>{
 const {mkdtemp,writeFile,readFile,rm}=await import('node:fs/promises'),{tmpdir}=await import('node:os'),path=await import('node:path');const folder=await mkdtemp(path.join(tmpdir(),'katman-precision-'));
 try{
  const file=path.join(folder,'gpu.cjs'),log=path.join(folder,'attempts.jsonl');
  await writeFile(file,"let data='';process.stdin.on('data',c=>data+=c);process.stdin.on('end',()=>{const job=JSON.parse(data);require('fs').appendFileSync(process.argv[2],JSON.stringify(job)+'\\n');if(job.precision==='auto')process.exit(1);console.log(JSON.stringify({precision:'float32'}));})");
  const engine=new LocalAI({home:folder,scripts:folder});engine.launch('benchmark',process.execPath,[file,log],{action:'generate',backend:'cuda',precision:'auto',compute:'auto',seed:42,height:100,referenceId:'exact-reference'});
  const start=Date.now();while(engine.child){assert(Date.now()-start<10000);await new Promise(r=>setTimeout(r,20));}
  const attempts=(await readFile(log,'utf8')).trim().split('\n').map(JSON.parse);assert.equal(attempts.length,2);assert.equal(attempts[1].backend,'cuda');assert.equal(attempts[1].precision,'float32');assert.equal(attempts[1].seed,42);assert.equal(attempts[1].referenceId,'exact-reference');assert.equal(engine.job.state,'succeeded');
 }finally{await rm(folder,{recursive:true,force:true});}
});
test('GPU selection defaults to verified adapter, supports CPU override and rejects unavailable GPU',async()=>{
 const engine=new LocalAI({home:process.cwd()+'/test-results/not-installed-ai',scripts:process.cwd()+'/local-ai'});engine.ready=()=>true;engine.gpu=()=>null;
 assert.equal(engine.compute({}).backend,'cpu');assert.throws(()=>engine.compute({compute:'gpu'}),/kurun/);assert.throws(()=>engine.compute({compute:'bogus'}),/Geçersiz/);
 engine.gpu=()=>({backend:'rocm',name:'Test adapter'});assert.equal(engine.compute({}).backend,'rocm');assert.equal(engine.compute({compute:'cpu'}).backend,'cpu');
 let launched;engine.launch=(kind,python,args,input)=>launched={kind,python,input};await engine.generate({prompt:'teapot',seed:42},'concept');assert.equal(launched.python,engine.gpuPython());assert.equal(launched.input.backend,'rocm');
 await engine.generate({prompt:'teapot',seed:42,compute:'cpu'},'concept');assert.equal(launched.python,engine.python());assert.equal(launched.input.backend,'cpu');
 engine.gpu=()=>({backend:'cuda',name:'NVIDIA test adapter'});await engine.generate({prompt:'teapot',seed:42},'concept');assert.equal(launched.input.backend,'cuda');assert.equal(launched.python,engine.gpuPython('cuda'));assert(launched.input.resources.threads>=1);assert.equal(launched.input.steps,64);
});
test('automatic GPU failure retries the exact input once on CPU; forced GPU and cancellation do not retry',async()=>{
 const {mkdtemp,writeFile,rm}=await import('node:fs/promises'),{tmpdir}=await import('node:os'),path=await import('node:path');const folder=await mkdtemp(path.join(tmpdir(),'katman-gpu-'));
 try{
  await writeFile(path.join(folder,'generate_v2.py'),"process.stdin.resume();process.stdin.on('end',()=>console.log(JSON.stringify({message:'CPU completed',device:'İşlemci'})))");
 for(const mode of ['auto','gpu','cancel','cuda']){
   const engine=new LocalAI({home:folder,scripts:folder});engine.python=()=>process.execPath;
   engine.launch('benchmark',process.execPath,['-e',"process.stdin.resume();setTimeout(()=>{console.log(JSON.stringify({error:true,message:'GPU memory test failure'}));console.error('GPU memory test failure');process.exit(1)},100)"],{backend:mode==='cuda'?'cuda':'rocm',compute:['cancel','cuda'].includes(mode)?'auto':mode,action:'generate',seed:42,referenceId:'approved-reference',height:100});
   if(mode==='cancel')engine.job.state='cancelled';
   const start=Date.now();while(engine.child){assert(Date.now()-start<10000);await new Promise(r=>setTimeout(r,20));}
   if(['auto','cuda'].includes(mode)){assert.equal(engine.job.state,'succeeded');assert.equal(engine.job.backend,'cpu');assert.equal(engine.job.seed,42);assert.equal(engine.job.referenceId,'approved-reference');assert.match(engine.job.fallback,/GPU memory/);assert.match(engine.job.message,/işlemci/);}
   else assert.equal(engine.job.state,mode==='cancel'?'cancelled':'failed');
  }
 }finally{await rm(folder,{recursive:true,force:true});}
});
test('image uploads accept only bounded image data and bypass text-to-image generation',async()=>{
 const image='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQIHWP4z8DwHwAFgAI/ScLttAAAAABJRU5ErkJggg==';
 assert.equal(validateImage({image,name:'C:\\fakepath\\My image.png'}).prompt,'My image');
 for(const value of [{image:'https://example.com/image.png'},{image:'data:image/png;base64,YWJjZA=='},{image:'data:text/html;base64,YWJjZA=='},{image:'data:image/png;base64,'+'A'.repeat(13*1024*1024)}])assert.throws(()=>validateImage(value));
 const engine=new LocalAI({home:process.cwd()+'/test-results/not-installed-ai',scripts:process.cwd()+'/local-ai'});engine.ready=()=>true;let launched;engine.launch=(kind,_python,_args,input)=>launched={kind,input};
 await engine.request('import-image',{image,name:'Photo.png',removeBackground:false,seed:1});assert.equal(launched.kind,'concept');assert.equal(launched.input.action,'upload');assert.equal(launched.input.source,'upload');assert.equal(launched.input.prompt,'Photo');assert.equal(launched.input.removeBackground,false);assert(!launched.input.image.startsWith('data:'));
});
test('LAN image transport accepts image-sized JSON while ordinary commands keep their small limit',async()=>{
 let received;const ai={request:async(action,data)=>{assert.equal(action,'import-image');received=data;return{ready:true};}},server=createWebServer({ai});await new Promise(r=>server.listen(0,'127.0.0.1',r));const origin='http://127.0.0.1:'+server.address().port,body=JSON.stringify({image:'x'.repeat(6000),name:'Transport fixture'});
 try{const response=await fetch(origin+'/api/local-ai/import-image',{method:'POST',headers:{'Content-Type':'application/json',Origin:origin},body});assert.equal(response.status,200);assert.equal(received.image.length,6000);assert.equal((await fetch(origin+'/api/local-ai/concept',{method:'POST',headers:{'Content-Type':'application/json',Origin:origin},body})).status,400);}finally{await new Promise(r=>server.close(r));}
});
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
