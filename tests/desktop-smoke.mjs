import {capture} from './capture.mjs';
import {createRequire} from 'node:module';
import {mkdir,readFile} from 'node:fs/promises';
import path from 'node:path';
import assert from 'node:assert/strict';
import {unzipSync,strFromU8} from 'fflate';
const require=createRequire(import.meta.url);
let driver;if(process.env.PLAYWRIGHT_PATH)driver=require(process.env.PLAYWRIGHT_PATH);else{try{driver=require('playwright');}catch{driver=require('C:/Users/tuwturn/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');}}
const {_electron}=driver;
const executablePath=process.env.KATMAN_EXECUTABLE||path.resolve(process.platform==='darwin'?`dist/${process.arch==='arm64'?'mac-arm64':'mac'}/Katman Studio.app/Contents/MacOS/Katman Studio`:'Masaustu/Katman Studio/Katman Studio.exe');
await mkdir('test-results',{recursive:true});
const electronApp=await _electron.launch({executablePath,env:{...process.env,KATMAN_TEST:'1'},args:['--enable-unsafe-swiftshader']});
try{
 const page=await electronApp.firstWindow(),errors=[];page.setDefaultTimeout(30000);page.on('pageerror',e=>errors.push(e.message));
 await page.waitForLoadState('load');await page.locator('#empty-state').waitFor();assert.equal(await page.locator('.layer,#demo').count(),0);assert.equal(await page.locator('#region-count').textContent(),'0');assert.equal(await page.locator('#export').isDisabled(),true);
 assert.match(page.url(),/^katman:\/\/app\//);assert.equal(await page.evaluate(()=>typeof window.require),'undefined');
 await page.locator('#file').setInputFiles('tests/fixture.svg');await page.waitForFunction(()=>document.querySelector('#model-name').textContent==='fixture'&&!document.querySelector('#vectorize').disabled);
 assert.equal(await page.locator('.height-explainer,#height-slider,.height-presets,[data-height]').count(),0);assert.equal(await page.locator('#selection-height').getAttribute('max'),'250');
 await page.locator('#view-2d').click();
 const imagePoint=async(x,y)=>page.locator('#workspace-canvas').evaluate((canvas,{x,y})=>{const r=canvas.getBoundingClientRect(),w=Number(canvas.dataset.vectorWidth),h=Number(canvas.dataset.vectorHeight),scale=Math.min(r.width/w,r.height/h);return {x:r.left+(r.width-w*scale)/2+x*scale,y:r.top+(r.height-h*scale)/2+y*scale};},{x,y});
 const clickPoint=async(x,y)=>{const p=await imagePoint(x,y);await page.mouse.click(p.x,p.y);};
 const save=async(name,button='#export')=>{const file=path.resolve('test-results',name);await electronApp.evaluate(({BrowserWindow},file)=>{globalThis.__katmanDownload=new Promise(resolve=>BrowserWindow.getAllWindows()[0].webContents.session.once('will-download',(_e,item)=>{item.setSavePath(file);item.once('done',(_e,state)=>resolve(state));}));},file);if(button==='shortcut')await electronApp.evaluate(({Menu})=>{const item=Menu.getApplicationMenu().items.find(i=>i.label==='Dosya').submenu.items.find(i=>i.accelerator==='CmdOrCtrl+S');if(!item)throw new Error('Native save accelerator missing');item.click();});else await page.locator(button).click();assert.equal(await electronApp.evaluate(()=>Promise.race([globalThis.__katmanDownload,new Promise((_,reject)=>setTimeout(()=>reject(new Error('Download timed out')),30000))])),'completed');return file;};
 await clickPoint(8,8);assert.equal(await page.locator('#selection-count').textContent(),'1 bölge seçildi');assert.match(await page.locator('#mode-color').getAttribute('class'),/active/);
 await page.locator('#selection-height').fill('250');await page.locator('#apply-height').click();assert.equal(await page.locator('#selection-height').inputValue(),'250');
 let state=JSON.parse(await readFile(await save('native-250.katman','#save-project'),'utf8'));assert.equal(state.regions[0].height,250);assert.equal(state.regions[1].height,.08);
 await page.locator('#workspace-scope').selectOption('color');await clickPoint(8,8);assert.equal(await page.locator('#selection-count').textContent(),'2 bölge seçildi');
 await page.locator('#selection-height').fill('42.36');await page.locator('#apply-height').click();assert.equal(await page.locator('#selection-height').inputValue(),'42.36');
 state=JSON.parse(await readFile(await save('native-free-height.katman','#save-project'),'utf8'));assert.equal(state.regions[0].height,42.36);assert.equal(state.regions[1].height,42.36);assert.equal(state.regions[2].height,.08);
 await page.locator('#workspace-scope').selectOption('range');await clickPoint(8,8);await page.locator('#color-tolerance').fill('100');assert.equal(await page.locator('#selection-count').textContent(),'3 bölge seçildi');await page.locator('#color-tolerance').fill('0');assert.equal(await page.locator('#selection-count').textContent(),'2 bölge seçildi');
 await page.locator('#workspace-scope').selectOption('region');const a=await imagePoint(64,4),b=await imagePoint(116,76);await page.mouse.move(a.x,a.y);await page.mouse.down();await page.mouse.move(b.x,b.y,{steps:12});await page.mouse.up();assert.equal(await page.locator('#selection-count').textContent(),'2 bölge seçildi');
 await page.locator('#selection-height').fill('250');await page.locator('#apply-height').click();await page.locator('#view-perspective').click();await capture(page,electronApp,{path:'test-results/desktop-native.png'});
 const model=strFromU8(unzipSync(new Uint8Array(await readFile(await save('desktop-250mm.3mf'))))['3D/3dmodel.model']);assert.equal(Math.max(...[...model.matchAll(/ z="([\d.]+)"/g)].map(m=>Number(m[1]))),250.04);
 await page.locator('#selection-height').fill('300');await page.locator('#apply-height').click();assert.equal(await page.locator('#selection-height').inputValue(),'250');
 await page.locator('#project-file').setInputFiles('test-results/native-250.katman');await page.waitForFunction(()=>!document.querySelector('#vectorize').disabled);await page.locator('#view-2d').click();await clickPoint(8,8);assert.equal(await page.locator('#selection-height').inputValue(),'250');
 await save('native-shortcut.katman','shortcut');
 if(process.platform==='darwin'){
   assert.equal(await page.evaluate(()=>document.body.classList.contains('mac')),true);
   assert.match(await page.locator('kbd').first().textContent(),/⌘/);
   // macOS closes windows asynchronously. Wait for actual destruction before
   // checking Dock behavior rather than checking immediately after close().
   await electronApp.evaluate(({BrowserWindow})=>Promise.all(BrowserWindow.getAllWindows().map(w=>new Promise(resolve=>{w.once('closed',resolve);w.close();}))));
   assert.equal(await electronApp.evaluate(({BrowserWindow})=>BrowserWindow.getAllWindows().length),0);
   const reopened=electronApp.waitForEvent('window');
   await electronApp.evaluate(({app})=>app.emit('activate'));
   const next=await reopened;await next.locator('#empty-state').waitFor();
 }
 assert.deepEqual(errors,[]);console.log('Desktop EXE OK: free 250mm heights, separate same-color islands, direct workspace color/tolerance selection, live tolerance, rectangle selection without right tabs, project roundtrip and true-scale 3MF.');
}finally{await electronApp.close();}
