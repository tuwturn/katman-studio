// Explicit opt-in integration run with genuine installed weights. No test meshes.
// --concept "any free prompt" [--en] | --mesh <approved-reference-uuid>
import {createRequire} from 'node:module';
import {mkdir,writeFile} from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';
import assert from 'node:assert/strict';
const require=createRequire(import.meta.url),{LocalAI}=require('../desktop/local-ai.cjs');
const base=process.platform==='win32'?process.env.APPDATA:process.platform==='darwin'?path.join(os.homedir(),'Library/Application Support'):process.env.XDG_CONFIG_HOME||path.join(os.homedir(),'.config');
const engine=new LocalAI({home:process.env.KATMAN_AI_HOME||path.join(base,'Katman Studio/Yerel-YZ'),scripts:path.resolve('local-ai')});
const args=process.argv.slice(2),concept=args[0]==='--concept';
if(!['--concept','--mesh'].includes(args[0])||!args[1])throw new Error('Use --concept "free prompt" [--en], inspect its PNG, then --mesh <reference UUID>.');
assert.equal(engine.ready(),true,'Install the real v2 engine first.');
const started=Date.now();let previous='';
process.once('SIGINT',()=>engine.cancel());
await engine.request(concept?'concept':'generate',concept?{prompt:args[1],language:args.includes('--en')?'en':'tr',seed:42,quality:'draft',height:100}:{referenceId:args[1],seed:42,height:100,quality:'draft'});
while(engine.status().busy){const message=engine.status().job.message;if(message!==previous){console.log(message);previous=message;}await new Promise(r=>setTimeout(r,2000));}
const job=engine.status().job;assert.equal(job.state,'succeeded',job.message);
await mkdir('test-results',{recursive:true});
const report={job,elapsedSeconds:(Date.now()-started)/1000};
if(concept){const result=await engine.conceptResult(job.id),file=path.resolve('test-results',job.id+'.png');await writeFile(file,Buffer.from(result.image.split(',')[1],'base64'));report.image=file;}
else{const result=await engine.result(job.id),zs=result.vertices.map(v=>v[2]);assert(result.triangles.length>100);let min=Infinity,max=-Infinity;for(const z of zs){min=Math.min(min,z);max=Math.max(max,z);}assert(Math.abs(max-min-100)<.00001);report.vertices=result.vertices.length;report.triangles=result.triangles.length;}
await writeFile(path.resolve('test-results',job.id+'-report.json'),JSON.stringify(report,null,2));console.log(JSON.stringify(report,null,2));
