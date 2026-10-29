import {writeFile} from 'node:fs/promises';
// Hidden native windows need Electron's capture wake-up after demand rendering.
export async function capture(page,electron,options={}){
 if(!electron)return page.screenshot(options);
 const rect=options.clip?Object.fromEntries(['x','y','width','height'].map(k=>[k,Math.round(options.clip[k])])):undefined;
 const base64=await electron.evaluate(async({BrowserWindow},rect)=>(await BrowserWindow.getAllWindows()[0].webContents.capturePage(rect,{stayHidden:true,stayAwake:true})).toPNG().toString('base64'),rect);
 const png=Buffer.from(base64,'base64');if(options.path)await writeFile(options.path,png);return png;
}
