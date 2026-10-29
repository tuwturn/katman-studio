const {app, BrowserWindow, Menu, protocol, net, nativeTheme, session} = require('electron');
const path = require('node:path');
const {pathToFileURL} = require('node:url');
protocol.registerSchemesAsPrivileged([{scheme:'katman',privileges:{standard:true,secure:true,supportFetchAPI:true,corsEnabled:true}}]);
nativeTheme.themeSource='dark';
app.setName('Katman Studio');
const isMac=process.platform==='darwin';
if(process.platform==='win32')app.setAppUserModelId('com.katman.studio');
let window;
const root=path.resolve(__dirname,'../public');
const action = async name => {if(!window)await createWindow();window?.webContents.send('katman:action',name);};
async function createWindow(){
  const win=new BrowserWindow({width:1460,height:960,minWidth:1060,minHeight:700,show:false,backgroundColor:'#101216',title:'Katman Studio 3.0',icon:path.join(root,'icon.png'),titleBarStyle:'hidden',...(isMac?{trafficLightPosition:{x:14,y:12}}:{titleBarOverlay:{color:'#121419',symbolColor:'#9baac4',height:37}}),webPreferences:{preload:path.join(__dirname,'preload.cjs'),contextIsolation:true,nodeIntegration:false,sandbox:true}});
  window=win;
  if(!isMac)win.setMenuBarVisibility(false);
  win.webContents.setWindowOpenHandler(()=>({action:'deny'}));
  win.webContents.on('will-navigate',(event,url)=>{if(!url.startsWith('katman://app/'))event.preventDefault();});
  win.once('ready-to-show',()=>{if(!process.env.KATMAN_TEST)win.show();});
  win.on('closed',()=>{if(window===win)window=null;});
  await win.loadURL('katman://app/index.html');
}
app.whenReady().then(async()=>{
  protocol.handle('katman', request => {
    const url=new URL(request.url);
    if(url.host!=='app')return new Response('Forbidden',{status:403});
    const file=path.resolve(root,'.'+decodeURIComponent(url.pathname==='/'?'/index.html':url.pathname));
    if(!file.startsWith(root+path.sep))return new Response('Forbidden',{status:403});
    return net.fetch(pathToFileURL(file).toString());
  });
  const menu=Menu.buildFromTemplate([
    ...(isMac?[{label:'Katman Studio',submenu:[{role:'about',label:'Katman Studio Hakkında'},{type:'separator'},{role:'services',label:'Servisler'},{type:'separator'},{role:'hide',label:'Katman Studio’yu Gizle'},{role:'hideOthers',label:'Diğerlerini Gizle'},{role:'unhide',label:'Tümünü Göster'},{type:'separator'},{role:'quit',label:'Katman Studio’dan Çık'}]}]:[]),
    {label:'Dosya',submenu:[{label:'Görsel ekle…',accelerator:'CmdOrCtrl+O',click:()=>action('image')},{label:'Proje aç…',accelerator:'CmdOrCtrl+Shift+O',click:()=>action('open')},{label:'Projeyi kaydet…',accelerator:'CmdOrCtrl+S',click:()=>action('save')},{type:'separator'},{label:'Dışa aktar…',accelerator:'CmdOrCtrl+E',click:()=>action('export')},{type:'separator'},isMac?{role:'close',label:'Pencereyi Kapat'}:{role:'quit',label:'Çıkış'}]},
    {label:'Düzen',submenu:[{role:'undo',label:'Geri Al'},{role:'redo',label:'Yinele'},{type:'separator'},{role:'cut',label:'Kes'},{role:'copy',label:'Kopyala'},{role:'paste',label:'Yapıştır'},{role:'selectAll',label:'Tümünü Seç'}]},
    {label:'Görünüm',submenu:[{role:'reload',label:'Yenile'},{role:'togglefullscreen',label:'Tam ekran'}]},
    ...(isMac?[{role:'windowMenu',label:'Pencere'}]:[]),
    {label:'Yardım',submenu:[{label:'Kullanım rehberi',click:()=>action('help')}]}]);
  Menu.setApplicationMenu(menu);
  session.defaultSession.setPermissionRequestHandler((_contents,_permission,callback)=>callback(false));
  session.defaultSession.on('will-download',(_event,item)=>item.setSaveDialogOptions({title:'Katman Studio — Dosyayı kaydet',defaultPath:path.join(app.getPath('documents'),item.getFilename())}));
  await createWindow();
  app.on('activate',()=>{if(BrowserWindow.getAllWindows().length===0)createWindow();else window?.show();});
});
app.on('window-all-closed',()=>{if(!isMac)app.quit();});
