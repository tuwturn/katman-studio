import {build} from 'esbuild';
import {mkdir,copyFile} from 'node:fs/promises';
await build({entryPoints:['src/app.js','src/worker.js'],bundle:true,minify:true,outdir:'public'});
await build({entryPoints:['src/mesh-editor.js'],bundle:true,minify:true,format:'esm',outfile:'public/mesh-editor.js'});
await build({entryPoints:['src/mesh-worker.js'],bundle:true,minify:true,format:'esm',external:['./manifold/manifold.js'],outfile:'public/mesh-worker.js'});
await mkdir('public/manifold',{recursive:true});
for(const file of ['manifold.js','manifold.wasm'])await copyFile('node_modules/manifold-3d/'+file,'public/manifold/'+file);
await copyFile('node_modules/manifold-3d/LICENSE','public/licenses/Manifold.txt');
for(const name of ['three-bvh-csg','three-mesh-bvh'])await copyFile(`node_modules/${name}/LICENSE`,`public/licenses/${name}.txt`);
