import {createRequire} from 'node:module';
import {mkdir} from 'node:fs/promises';
import assert from 'node:assert/strict';
const require=createRequire(import.meta.url);
const {chromium}=require(process.env.PLAYWRIGHT_PATH || 'C:/Users/tuwturn/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
await mkdir('test-results',{recursive:true});
const browser=await chromium.launch({channel:'chrome',headless:true,args:['--enable-unsafe-swiftshader']});
try{
  const page=await browser.newPage({viewport:{width:1440,height:940},acceptDownloads:true});const errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.goto(process.env.KATMAN_URL||'http://127.0.0.1:8787');await page.locator('#empty-state').waitFor();assert.equal(await page.locator('.layer,#demo').count(),0);assert.equal(await page.locator('#export').isDisabled(),true);await page.screenshot({path:'test-results/empty-start.png'});await page.locator('#file').setInputFiles('tests/fixture.svg');await page.waitForFunction(()=>!document.querySelector('#vectorize').disabled&&document.querySelector('#region-count').textContent==='3');
  assert.equal(await page.evaluate(()=>document.documentElement.scrollHeight>innerHeight),false);await page.screenshot({path:'test-results/desktop.png',fullPage:true});
  await page.locator('#mode-region').click();await page.locator('.layer').nth(1).click();await page.locator('#selection-height').fill('0.16');await page.locator('#apply-height').click();assert.match(await page.locator('.layer').nth(1).innerText(),/0,16/);
  await page.locator('#same-color').click();assert.match(await page.locator('#selection-count').textContent(),/[2-9]/);
  await page.locator('#selection-height').fill('0.04');await page.locator('#apply-height').click();
  let downloadPromise=page.waitForEvent('download');await page.locator('#save-project').click();const projectFile=await downloadPromise;await projectFile.saveAs('test-results/roundtrip.katman');
  await page.locator('#file').setInputFiles('tests/fixture.svg');await page.waitForFunction(()=>!document.querySelector('#vectorize').disabled);await page.locator('#project-file').setInputFiles('test-results/roundtrip.katman');await page.waitForFunction(()=>!document.querySelector('#vectorize').disabled);await page.locator('#mode-region').click();assert.match(await page.locator('.layer').nth(1).innerText(),/0,04/);
  for(const format of ['3mf','stl','obj','svg']){await page.locator('#format').selectOption(format);downloadPromise=page.waitForEvent('download');await page.locator('#export').click();const dl=await downloadPromise;await dl.saveAs('test-results/'+dl.suggestedFilename());}
  await page.locator('#help').click();await page.locator('#close-help').click();
  await page.setViewportSize({width:390,height:844});await page.screenshot({path:'test-results/mobile.png',fullPage:true});assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);
  await page.locator('#file').setInputFiles('tests/fixture.svg');await page.waitForFunction(()=>document.querySelector('#model-name').textContent==='fixture'&&!document.querySelector('#vectorize').disabled);assert.equal(await page.locator('#region-count').textContent(),'3');
  await page.locator('#mode-region').click();await page.locator('.layer').nth(0).click();await page.locator('#selection-height').fill('0.03');await page.locator('#apply-height').click();assert.match(await page.locator('.layer').nth(0).innerText(),/0,04/);assert.match(await page.locator('.layer').nth(1).innerText(),/0,08mm/);
  await page.locator('#same-color').click();assert.equal(await page.locator('#selection-count').textContent(),'2 bölge seçildi');await page.locator('#selection-height').fill('0.28');await page.locator('#apply-height').click();assert.match(await page.locator('.layer').nth(0).innerText(),/0,28/);assert.match(await page.locator('.layer').nth(1).innerText(),/0,28/);
  await page.locator('#mode-color').click();await page.locator('.layer').nth(0).click();await page.locator('#selection-height').fill('0');await page.locator('#apply-height').click();await page.locator('#base-height').fill('0');await page.locator('#base-height').dispatchEvent('change');await page.locator('#format').selectOption('3mf');downloadPromise=page.waitForEvent('download');await page.locator('#export').click();await (await downloadPromise).saveAs('test-results/transparent-hole.3mf');
  assert.deepEqual(errors,[]);console.log('UI OK: region heights, same-color selection, project roundtrip, 4 exports, mobile layout, no runtime errors.');
}finally{await browser.close();}
