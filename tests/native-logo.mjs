import {createRequire} from 'node:module';
import path from 'node:path';
import assert from 'node:assert/strict';
const require=createRequire(import.meta.url);
const {_electron}=require(process.env.PLAYWRIGHT_PATH||'C:/Users/tuwturn/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const app=await _electron.launch({executablePath:path.resolve('Masaustu/Katman Studio/Katman Studio.exe'),env:{...process.env,KATMAN_TEST:'1'},args:['--enable-unsafe-swiftshader']});
try{
 const page=await app.firstWindow(),errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.locator('#empty-state').waitFor();assert.match(await page.title(),/2\.7/);
 await page.locator('#file').setInputFiles(process.env.TEST_IMAGE||'C:/Users/tuwturn/Downloads/Gemini_Generated_Image_11pqmw11pqmw11pq.jpg');
 await page.waitForFunction(()=>!document.querySelector('#vectorize').disabled&&document.querySelector('#palette-count').textContent==='3',null,{timeout:60000});
 await page.locator('#view-top').click();await page.waitForTimeout(700);
 await page.screenshot({path:'test-results/desktop-logo-2.7.png'});
 const box=await page.locator('#viewport').boundingBox();await page.mouse.move(box.x+box.width/2,box.y+box.height/2);await page.mouse.wheel(0,-100);await page.waitForTimeout(900);
 await page.locator('#viewport').screenshot({path:'test-results/desktop-logo-3d-detail-2.7.png'});
 assert.deepEqual(errors,[]);console.log('Native 2.7: original logo, 3 colors, 3D close-up captured without runtime errors.');
}finally{await app.close();}
