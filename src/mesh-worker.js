import Module from './manifold/manifold.js';
import {editPart,splitPart} from './mesh-ops.js';
import {editSurface,sameSurface} from './mesh-surface-ops.js';
import {exportMesh} from './mesh-export.js';
import {displayBuffers,displayTransfers} from './mesh-display.js';
let runtime;
self.onmessage=async({data})=>{
 try{if(data.mode==='export'){const payload=exportMesh(data.parts,data.type);self.postMessage({payload},[payload.buffer]);return;}
  if(data.mode==='prepare'){const displays=data.parts.map(displayBuffers);self.postMessage({displays},displayTransfers(displays));return;}
  if(data.mode==='ground'){const parts=data.parts.map(p=>({...p,vertices:p.vertices.map(v=>v.map((x,i)=>x+data.offset[i]))})),displays=parts.map(displayBuffers);self.postMessage({parts,displays},displayTransfers(displays));return;}
  runtime??=Module({locateFile:()=>new URL('./manifold/manifold.wasm',import.meta.url).href}).then(m=>{m.setup();return m;});const wasm=await runtime;
  const progress=progress=>self.postMessage({progress});progress('Geometri kontrol ediliyor…');let parts,warning;
  try{parts=data.mode==='split'?splitPart(wasm,data.part):[editPart(wasm,data.part,data.areas,data.mode)].filter(Boolean);}
  catch(e){if(data.mode==='split'||!e.message.includes('kapalı ve tutarlı'))throw e;progress('Kaynak ağ kusurlu. Seçili bölge yüzey üzerinden düzenleniyor…');parts=[editSurface(data.part,data.areas,data.mode,progress)].filter(Boolean);warning='Kaynak dosyada açık/çakışan yüzeyler var. Yüzey işlemi uygulandı; sonuç kapalı katı olarak doğrulanamadı. Yazdırmadan önce dilimleyicide ağ kontrolü yapın.';}
  if(data.mode!=='split'&&parts.length===1&&sameSurface(data.part,parts[0]))throw new Error('Model değişmedi: seçili hacim kaldırılacak yüzeyle kesişmiyor. Referansı, yönü ve işlem derinliğini kontrol edin.');
  progress('Görünüm ve seçim verileri hazırlanıyor…');const displays=parts.map(displayBuffers);self.postMessage({parts,warning,displays},displayTransfers(displays));
 }catch(e){self.postMessage({error:e.message||String(e)});}
};
