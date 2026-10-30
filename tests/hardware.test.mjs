import {test} from 'node:test';
import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
import {previewProfile} from '../src/performance-profile.js';
const require=createRequire(import.meta.url),{policy,backendFor}=require('../desktop/hardware.cjs');
const gib=1024**3;
test('resource policy adapts to total RAM, available RAM and CPU count without changing geometry quality',()=>{
 const small=policy({total:8*gib,free:2*gib,cores:4}),large=policy({total:64*gib,free:40*gib,cores:32}),pressured=policy({total:64*gib,free:2*gib,cores:32});
 assert.equal(small.memoryMode,'low');assert.equal(small.threads,2);assert.equal(small.decodeChunks,512);
 assert.equal(large.memoryMode,'high');assert.equal(large.threads,12);assert(large.attentionMB>small.attentionMB);
 assert.equal(pressured.memoryMode,'low');assert.equal(pressured.threads,2);
 assert.equal(policy({total:4*gib,free:gib,cores:1}).threads,1);
 assert(!('resolution' in small));assert(!('steps' in small));
});
test('backend selection depends on graphics adapter and platform, independent of CPU manufacturer',()=>{
 assert.equal(backendFor([{name:'NVIDIA GeForce RTX 4060'},{name:'AMD Radeon Graphics'}],'win32'),'cuda');
 assert.equal(backendFor([{name:'AMD Radeon RX 6700 XT'}],'win32'),'rocm');
 assert.equal(backendFor([{name:'Intel UHD Graphics'}],'win32'),null);
 assert.equal(backendFor([{name:'Apple M3'}],'darwin'),null);
 assert.equal(backendFor([{name:'NVIDIA RTX 4090'}],'linux'),'cuda');
 assert.equal(backendFor([{name:'AMD Radeon RX 6700 XT'}],'linux'),null);
});
test('small PCs and software graphics reduce preview cost, while large machines keep detailed shadows',()=>{
 assert.deepEqual(previewProfile({memoryGB:4,cores:4}),{pixelRatio:1,shadowSize:1024});
 assert.deepEqual(previewProfile({memoryGB:32,cores:16}),{pixelRatio:2,shadowSize:2048});
 assert.equal(previewProfile({memoryGB:64,cores:32,software:true}).pixelRatio,1);
});
