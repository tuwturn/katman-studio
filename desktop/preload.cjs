const {contextBridge,ipcRenderer}=require('electron');
contextBridge.exposeInMainWorld('katmanDesktop',{
  onAction:callback=>{if(typeof callback==='function')ipcRenderer.on('katman:action',(_event,action)=>callback(action));}
});
