const {app, BrowserWindow, Menu, protocol, net, nativeTheme} = require('electron');
const path = require('node:path');
const {pathToFileURL} = require('node:url');
protocol.registerSchemesAsPrivileged([{scheme:'katman',privileges:{standard:true,secure:true,supportFetchAPI:true,corsEnabled:true}}]);
nativeTheme.themeSource='dark';
app.setName('Katman Studio');
app.setAppUserModelId('com.katman.studio');
let window;
const action = name => window?.webContents.send('katman:action',name);
app.whenReady().then(async()=>{
  const root=path.resolve(__dirname,'../public');
  protocol.handle('katman', request => {
    const url=new URL(request.url);
    if(url.host!=='app')return new Response('Forbidden',{status:403});
    const file=path.resolve(root,'.'+decodeURIComponent(url.pathname==='/'?'/index.html':url.pathname));
    if(!file.startsWith(root+path.sep))return new Response('Forbidden',{status:403});
    return net.fetch(pathToFileURL(file).toString());
  });
  window=new BrowserWindow({width:1460,height:960,minWidth:1060,minHeight:700,show:false,backgroundColor:'#101216',title:'Katman Studio 2.7',icon:path.join(root,'icon.png'),titleBarStyle:'hidden',titleBarOverlay:{color:'#121419',symbolColor:'#9baac4',height:37},webPreferences:{preload:path.join(__dirname,'preload.cjs'),contextIsolation:true,nodeIntegration:false,sandbox:true}});
  const menu=Menu.buildFromTemplate([
    {label:'Dosya',submenu:[{label:'Görsel ekle…',accelerator:'CmdOrCtrl+O',click:()=>action('image')},{label:'Proje aç…',accelerator:'CmdOrCtrl+Shift+O',click:()=>action('open')},{label:'Projeyi kaydet…',accelerator:'CmdOrCtrl+S',click:()=>action('save')},{type:'separator'},{label:'Dışa aktar…',accelerator:'CmdOrCtrl+E',click:()=>action('export')},{type:'separator'},{role:'quit',label:'Çıkış'}]},
    {label:'Görünüm',submenu:[{role:'reload',label:'Yenile'},{role:'togglefullscreen',label:'Tam ekran'}]},
    {label:'Yardım',submenu:[{label:'Kullanım rehberi',click:()=>action('help')}]}]);
  Menu.setApplicationMenu(menu);window.setMenuBarVisibility(false);
  window.webContents.setWindowOpenHandler(()=>({action:'deny'}));
  window.webContents.on('will-navigate',(event,url)=>{if(!url.startsWith('katman://app/'))event.preventDefault();});
  window.webContents.session.setPermissionRequestHandler((_contents,_permission,callback)=>callback(false));
  window.webContents.session.on('will-download',(_event,item)=>item.setSaveDialogOptions({title:'Katman Studio — Dosyayı kaydet',defaultPath:path.join(app.getPath('documents'),item.getFilename())}));
  window.once('ready-to-show',()=>{if(!process.env.KATMAN_TEST)window.show();});
  await window.loadURL('katman://app/index.html');
});
app.on('window-all-closed',()=>app.quit());
