import Module from './manifold/manifold.js';
import {editPart,splitPart} from './mesh-ops.js';
let runtime;
self.onmessage=async({data})=>{
 try{runtime??=Module({locateFile:()=>new URL('./manifold/manifold.wasm',import.meta.url).href}).then(m=>{m.setup();return m;});const wasm=await runtime;
  self.postMessage({parts:data.mode==='split'?splitPart(wasm,data.part):[editPart(wasm,data.part,data.areas,data.mode)]});
 }catch(e){self.postMessage({error:e.message||String(e)});}
};
