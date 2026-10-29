import Module from './manifold/manifold.js';
import {editPart,splitPart} from './mesh-ops.js';
import {editSurface,sameSurface} from './mesh-surface-ops.js';
let runtime;
self.onmessage=async({data})=>{
 try{runtime??=Module({locateFile:()=>new URL('./manifold/manifold.wasm',import.meta.url).href}).then(m=>{m.setup();return m;});const wasm=await runtime;
  const progress=progress=>self.postMessage({progress});progress('Geometri kontrol ediliyor…');let parts,warning;
  try{parts=data.mode==='split'?splitPart(wasm,data.part):[editPart(wasm,data.part,data.areas,data.mode)].filter(Boolean);}
  catch(e){if(data.mode==='split'||!e.message.includes('kapalı ve tutarlı'))throw e;progress('Kaynak ağ kusurlu. Seçili bölge yüzey üzerinden düzenleniyor…');parts=[editSurface(data.part,data.areas,data.mode,progress)].filter(Boolean);warning='Kaynak dosyada açık/çakışan yüzeyler var. Yüzey işlemi uygulandı; sonuç kapalı katı olarak doğrulanamadı. Yazdırmadan önce dilimleyicide ağ kontrolü yapın.';}
  if(data.mode!=='split'&&parts.length===1&&sameSurface(data.part,parts[0]))throw new Error('Model değişmedi: seçili hacim kaldırılacak yüzeyle kesişmiyor. Referansı, yönü ve işlem derinliğini kontrol edin.');
  self.postMessage({parts,warning});
 }catch(e){self.postMessage({error:e.message||String(e)});}
};
