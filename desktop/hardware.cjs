const os=require('node:os');
const {execFile}=require('node:child_process');
function policy({total=os.totalmem(),free=os.freemem(),cores=os.availableParallelism?.()||os.cpus().length}={}){
 const gib=1024**3,low=total<12*gib||free<4*gib,high=total>=32*gib&&free>=12*gib;
 return{ramGB:Math.round(total/gib*10)/10,freeGB:Math.round(free/gib*10)/10,cores,threads:Math.max(1,Math.min(low?2:high?12:6,Math.floor(cores/2))),memoryMode:low?'low':high?'high':'balanced',attentionMB:low?16:high?128:64,decodeChunks:low?512:high?4096:2048};
}
function backendFor(adapters,platform=process.platform){
 if(!['win32','linux'].includes(platform))return null;
 if(adapters.some(a=>/nvidia/i.test(a.name)))return'cuda';
 return platform==='win32'&&adapters.some(a=>/radeon|amd.*graphics/i.test(a.name))?'rocm':null;
}
const inventory=new Map();
function detectAdapters(platform=process.platform){
 if(!inventory.has(platform))inventory.set(platform,readAdapters(platform));
 return inventory.get(platform);
}
async function readAdapters(platform){
 const command=platform==='win32'?'powershell.exe':'nvidia-smi';
 const args=platform==='win32'?['-NoProfile','-NonInteractive','-Command',"[Console]::OutputEncoding=[Text.UTF8Encoding]::new(); @(Get-CimInstance Win32_VideoController | Select-Object @{n='name';e={$_.Name}}) | ConvertTo-Json -Compress"]:['--query-gpu=name','--format=csv,noheader'];
 if(!['win32','linux'].includes(platform))return[];
 try{const output=await new Promise((resolve,reject)=>execFile(command,args,{windowsHide:true,timeout:10000,encoding:'utf8'},(e,out)=>e?reject(e):resolve(out)));return platform==='win32'?[JSON.parse(output)].flat().filter(a=>a?.name):output.trim().split('\n').filter(Boolean).map(name=>({name:name.trim()}));}catch{return[];}
}
function imageEngineFor({requested='auto',installed=false,gpu=null,resources=policy(),precision='auto'}={}){
 if(!['auto','turbo','xl'].includes(requested))throw new Error('Geçersiz görsel motoru.');
 const gpuFits=gpu&&resources.ramGB>=15&&resources.freeGB>=2&&(gpu.memoryGB??8)>=4&&precision!=='float32';
 const cpuFits=resources.ramGB>=23.5&&resources.freeGB>=16;
 if(requested==='turbo')return'turbo';
 if(requested==='auto')return installed&&((gpuFits&&(gpu.memoryGB??8)>=8)||cpuFits)?'xl':'turbo';
 if(!installed)throw new Error('Önce SDXL görsel motorunu kurun.');
 if(!gpuFits&&!cpuFits)throw new Error('SDXL için GPU ile en az 16 GB RAM / 4 GB VRAM; işlemci veya tam hassasiyette en az 24 GB RAM ve 16 GB boş bellek gerekli. Hafif motoru seçebilirsiniz.');
 return'xl';
}
function precisionRetry(input,resources=policy()){
 const retry={...input,precision:'float32',precisionFallback:true};
 if(input.imageEngine==='xl'&&input.imageMode==='auto'&&resources.ramGB<23.5){retry.imageEngine='turbo';retry.imageFallback=true;}
 return retry;
}
module.exports={policy,backendFor,detectAdapters,imageEngineFor,precisionRetry};
