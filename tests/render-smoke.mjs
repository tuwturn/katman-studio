import {createRequire} from 'node:module';
import assert from 'node:assert/strict';
import {mkdir} from 'node:fs/promises';
const require=createRequire(import.meta.url);
const {chromium}=require(process.env.PLAYWRIGHT_PATH || 'C:/Users/tuwturn/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const browser=await chromium.launch({channel:'chrome',headless:true,args:['--enable-unsafe-swiftshader']});
try{
 const page=await browser.newPage({viewport:{width:1460,height:960}});
 await page.goto('http://127.0.0.1:8787');await page.locator('#file').setInputFiles('tests/fixture.svg');await page.waitForFunction(()=>document.querySelector('#region-count').textContent!=='—'&&!document.querySelector('#vectorize').disabled);
 assert.equal(await page.locator('#height-slider,.height-presets,[data-height]').count(),0);
 const view=page.locator('#viewport');const r=await view.boundingBox();await page.mouse.move(r.x+r.width*.5,r.y+r.height*.5);await page.mouse.wheel(0,-280);await page.waitForTimeout(600);
 await mkdir('test-results',{recursive:true});await view.screenshot({path:`test-results/surface-${process.env.RENDER_TAG||'check'}.png`});
 console.log('Preview captured.');
}finally{await browser.close();}
