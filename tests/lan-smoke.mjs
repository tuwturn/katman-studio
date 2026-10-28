import {createRequire} from 'node:module';
import assert from 'node:assert/strict';
import {networkAddresses} from '../server.mjs';
const require=createRequire(import.meta.url);
const {chromium}=require(process.env.PLAYWRIGHT_PATH||'C:/Users/tuwturn/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const browser=await chromium.launch({channel:'chrome',headless:true,args:['--enable-unsafe-swiftshader']});
try{
 const page=await browser.newPage({acceptDownloads:true}),errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto(process.env.KATMAN_URL||`http://${networkAddresses()[0]||'127.0.0.1'}:8798/`);await page.locator('#empty-state').waitFor();
 await page.locator('#file').setInputFiles('tests/fixture.svg');await page.waitForFunction(()=>!document.querySelector('#vectorize').disabled&&document.querySelector('#region-count').textContent==='3');
 await page.locator('.layer').first().click();await page.locator('#selection-height').fill('0.16');await page.locator('#apply-height').click();
 const pending=page.waitForEvent('download');await page.locator('#export').click();const download=await pending;assert.match(download.suggestedFilename(),/\.3mf$/);assert.equal(await download.failure(),null);
 assert.deepEqual(errors,[]);console.log('LAN browser OK: image worker, region selection, height editing and 3MF download over LAN IP.');
}finally{await browser.close();}
