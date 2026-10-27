const {contextBridge,ipcRenderer}=require('electron');
contextBridge.exposeInMainWorld('katmanDesktop',{
  platform:process.platform,
  onAction:callback=>{if(typeof callback==='function')ipcRenderer.on('katman:action',(_event,action)=>callback(action));}
});
