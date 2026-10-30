const {contextBridge,ipcRenderer}=require('electron');
contextBridge.exposeInMainWorld('katmanDesktop',{
  platform:process.platform,
  localAI:(action,data)=>ipcRenderer.invoke('katman:local-ai',{action,data}),
  onAction:callback=>{if(typeof callback==='function')ipcRenderer.on('katman:action',(_event,action)=>callback(action));}
});
