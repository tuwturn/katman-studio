import {createRequire} from 'node:module';
import {readFile} from 'node:fs/promises';
import assert from 'node:assert/strict';
import {unzipSync,strFromU8} from 'fflate';
const require=createRequire(import.meta.url);
const {chromium}=require(process.env.PLAYWRIGHT_PATH||'C:/Users/tuwturn/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const browser=await chromium.launch({channel:'chrome',headless:true,args:['--enable-unsafe-swiftshader']});
try{
 const page=await browser.newPage({viewport:{width:1460,height:1000},acceptDownloads:true}),errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto('http://127.0.0.1:8787');assert.equal(await page.locator('#remove-background').isDisabled(),true);
 await page.locator('#file').setInputFiles(process.env.TEST_IMAGE||'C:/Users/tuwturn/Downloads/Gemini_Generated_Image_11pqmw11pqmw11pq.jpg');
 await page.waitForFunction(()=>!document.querySelector('#vectorize').disabled&&document.querySelector('#palette-count').textContent==='3',null,{timeout:60000});
 const save=async(name,button)=>{const pending=page.waitForEvent('download');await page.locator(button).click();const dl=await pending;await dl.saveAs('test-results/'+name);return readFile('test-results/'+name);};
 const before=JSON.parse(await save('background-before.katman','#save-project'));assert.equal(before.removeBackground,false);
 await page.locator('#remove-background').check();assert.equal(await page.locator('#region-count').textContent(),String(before.regions.length-1));
 await page.locator('#view-2d').click();assert.equal(await page.locator('#workspace-canvas').evaluate(c=>c.getContext('2d').getImageData(c.width/2,1,1,1).data[3]),0);
 const removed=JSON.parse(await save('background-on.katman','#save-project'));assert.equal(removed.removeBackground,true);assert.deepEqual(removed.labels,before.labels);assert.deepEqual(removed.regions,before.regions);
 await page.locator('#format').selectOption('svg');const svg=(await save('background-removed.svg','#export')).toString();assert.equal((svg.match(/<path /g)||[]).length,before.regions.length-1);assert.match(svg,/fill="#fdfdfd"/i,'white lettering remains');
 await page.locator('#format').selectOption('3mf');const model=strFromU8(unzipSync(new Uint8Array(await save('background-removed.3mf','#export')))['3D/3dmodel.model']);assert.ok([...model.matchAll(/ x="([-\d.]+)"/g)].every(m=>Math.abs(Number(m[1]))<49),'rectangular base must be removed too');
 for(const format of ['stl','obj']){await page.locator('#format').selectOption(format);await save('background-removed.'+(format==='obj'?'zip':format),'#export');}
 await page.locator('#view-perspective').click();await page.waitForTimeout(500);await page.screenshot({path:'test-results/background-removed-2.7.png'});
 await page.locator('#remove-background').uncheck();assert.equal(await page.locator('#region-count').textContent(),String(before.regions.length));
 await page.locator('#project-file').setInputFiles('test-results/background-on.katman');await page.waitForFunction(()=>!document.querySelector('#vectorize').disabled&&document.querySelector('#remove-background').checked);assert.equal(await page.locator('#region-count').textContent(),String(before.regions.length-1));
 assert.deepEqual(errors,[]);console.log('Background toggle OK: exterior removed, white text retained, no rectangular base, four exports, reversible heights, project restore.');
}finally{await browser.close();}
