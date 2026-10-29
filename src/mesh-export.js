import {Color} from 'three';
import {export3MF,exportSTL,exportOBJ} from './core.js';
export function exportMesh(parts,type){
 if(type==='stl')return exportSTL(parts);
 const cache=new Map(),hex=c=>{const key=c.join(',');if(!cache.has(key))cache.set(key,'#'+new Color(...c).getHexString());return cache.get(key);};
 const packed=parts.map(p=>{const color=p.color||hex(p.colors?.[0]||[.48,.63,.85]),colors=p.colors?.map(hex);return{...p,color,vertexColors:colors?.some(c=>c!==color)?colors:undefined};});
 if(type==='3mf')return export3MF(packed);if(type==='obj')return exportOBJ(packed);throw new Error('Desteklenmeyen çıktı biçimi.');
}
