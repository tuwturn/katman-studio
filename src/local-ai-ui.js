const $=id=>document.getElementById(id);
export function initLocalAI({onEdit,onModelReady}){
 let active=false,timer,pending=false,preparing=false,part=null,loadedId=null,resultId=null,frameReady=false,queued=null,lastReady=false,localError=null,reportedJobId=null,reference=null,referenceId=null,lastBusy=false,allowResults=false,ignoredReference=null,lastServerReference=null;
 const frame=$('ai-preview-frame');
 async function bridge(action,data){
  if(window.katmanDesktop?.localAI)return window.katmanDesktop.localAI(action,data);
  const read=['status','result','concept-result'].includes(action),response=await fetch('/api/local-ai/'+action+(action.endsWith('result')?'?id='+encodeURIComponent(data.id):''),{method:read?'GET':'POST',headers:read?{}:{'Content-Type':'application/json'},...(read?{}:{body:JSON.stringify(data||{})})});
  const value=await response.json();if(!response.ok||value.error)throw new Error(value.error||'Yerel motora ulaşılamadı.');return value;
 }
 function error(value){localError=value.message||String(value);$('ai-state').textContent=localError;$('ai-state').classList.add('ai-state-error');}
 function view(model){$('ai-concept-view').hidden=model;frame.hidden=!model;$('ai-show-concept').classList.toggle('active',!model);$('ai-show-model').classList.toggle('active',model);}
 $('ai-show-concept').onclick=()=>view(false);$('ai-show-model').onclick=()=>view(true);
 function sendPreview(){if(frameReady&&queued){frame.contentWindow.postMessage({type:'katman-generated-model',parts:[queued.part],name:queued.name,token:queued.id},location.origin);queued=null;}}
 frame.addEventListener('load',()=>{frameReady=true;sendPreview();});
 window.addEventListener('message',event=>{
  if(event.source!==frame.contentWindow||event.origin!==location.origin)return;
  if(event.data?.type==='katman-reference-file'){upload(event.data.file);return;}
  if(event.data?.type!=='katman-generated-loaded'||event.data.token!==resultId)return;
  if(event.data.error){error(new Error(event.data.error));return;}
  loadedId=event.data.token;$('ai-result').textContent=part?`${part.vertices.length.toLocaleString('tr-TR')} köşe · ${part.triangles.length.toLocaleString('tr-TR')} üçgen`:'';
  $('ai-state').textContent='3D model hazır. Kontrol görseliyle karşılaştırıp kaydedebilirsiniz.';updateButtons(lastBusy,lastReady);
 });
 function approved(){return reference&&(reference.source==='upload'?!$('ai-prompt').value.trim():$('ai-prompt').value.trim()===reference.prompt&&$('ai-language').value===reference.language&&($('ai-image-engine').value==='auto'||$('ai-image-engine').value===(reference.imageEngine||'turbo')));}
 function updateButtons(busy,ready){
  busy=busy||preparing;
  lastBusy=busy;$('ai-generate').disabled=busy||!ready;$('ai-build').disabled=busy||!ready||!approved();$('ai-install').disabled=busy;$('ai-install-gpu').disabled=busy||!ready;$('ai-install-quality').disabled=busy||!ready;$('ai-install-image-xl').disabled=busy||!ready;$('ai-cancel').hidden=!busy;
  for(const id of ['ai-edit','ai-export'])$(id).disabled=busy||!part||!loadedId;
  for(const id of ['ai-prompt','ai-language','ai-height','ai-quality','ai-seed','ai-remove-background','ai-compute','ai-precision','ai-image-engine'])$(id).disabled=busy;
  $('ai-upload').disabled=busy||!ready;$('ai-image-file').disabled=busy||!ready;
  onModelReady?.(!!part&&!!loadedId&&!busy);
 }
 for(const id of ['ai-prompt','ai-language','ai-image-engine'])$(id).addEventListener('input',()=>updateButtons(lastBusy,lastReady));
 async function poll(){
  clearTimeout(timer);
  try{
   const state=await bridge('status');lastReady=state.ready;$('ai-engine-state').textContent=state.ready?'Yerel motor hazır · '+(state.gpu?.name||'İşlemci'):'Yeni yerel motor kurulumu gerekli';$('ai-install').hidden=!!state.ready;$('ai-setup-note').hidden=!!state.ready;$('ai-optional-models').hidden=!!state.qualityReady&&!!state.imageXLReady;$('ai-install-image-xl').hidden=!!state.imageXLReady;$('ai-image-engine').querySelector('[value="xl"]').disabled=!state.imageXLReady;$('ai-install-gpu').hidden=!!state.gpu||!state.gpuInstallSupported;$('ai-install-gpu').textContent=state.gpu?'GPU kurulumunu doğrula':'Donanıma uygun GPU motorunu kur';$('ai-compute').querySelector('[value="gpu"]').disabled=!state.gpu;$('ai-quality').querySelector('[value="fidelity"]').disabled=!state.qualityReady;$('ai-install-quality').hidden=!!state.qualityReady;$('ai-device').textContent=(state.job?.state==='running'&&state.job?.device?'Çalışan aygıt: '+state.job.device:state.gpu?'Otomatik seçim ekran kartını kullanır.':'Otomatik seçim işlemciyi kullanır.')+(state.job?.fallback?' GPU işlemi başarısız oldu; işlemciye dönüldü.':'');if(state.hardware){const h=state.hardware;$('ai-hardware').textContent='Üretim bilgisayarı: '+h.cpu+' · '+h.ramGB+' GB RAM ('+h.freeGB+' GB boş) · '+(state.busy&&state.job?.threads||h.threads)+' iş parçacığı · '+({low:'Bellek tasarrufu',balanced:'Dengeli',high:'Yüksek bellek'}[h.memoryMode]||h.memoryMode)+(state.gpu?.memoryGB?' · '+state.gpu.memoryGB+' GB GPU':'');}updateButtons(state.busy||pending,state.ready);
   const job=allowResults||state.job?.kind?.startsWith('install')?state.job:null;lastServerReference=state.reference?.id;
   if(job?.id!==reportedJobId){reportedJobId=job?.id;localError=null;}
   if(job&&!localError){
    $('ai-state').classList.toggle('ai-state-error',job.state==='failed');$('ai-state').textContent=job.message+(job.imageEngine?' · '+(job.imageEngine==='xl'?'SDXL-Turbo':'SD-Turbo'):'');if(job.imagePrompt){$('ai-prompt-details').hidden=false;$('ai-effective-prompt').textContent=job.imagePrompt;}
    $('ai-elapsed').textContent=job.state==='running'?`${Math.floor((Date.now()-job.started)/1000)} sn · uygulamayı kullanmaya devam edebilirsiniz.`:'';
    if(job.progress!==undefined&&(job.kind.startsWith('install')||['concept','sample'].includes(job.phase)))$('ai-progress').value=job.progress;else $('ai-progress').removeAttribute('value');$('ai-progress').hidden=!state.busy;
    if(job.translated)$('ai-translated').textContent='Yerel çeviri: '+job.translated;
   }
   if(allowResults&&state.reference&&state.reference.id!==ignoredReference&&referenceId!==state.reference.id){
    const value=await bridge('concept-result',{id:state.reference.id});reference=value;referenceId=value.id;$('ai-image-engine-used').textContent='Kaynak: '+(value.source==='upload'?'Yüklenen görsel':value.imageEngine==='xl'?'SDXL-Turbo':'SD-Turbo');$('ai-prompt-details').hidden=value.source==='upload'||!value.imagePrompt;$('ai-effective-prompt').textContent=value.imagePrompt||'';
    if(part){part=null;loadedId=null;resultId=null;queued=null;frameReady=false;frame.src='mesh-editor.html?preview=1';view(false);$('ai-result').textContent='Henüz 3D model üretilmedi.';}
    $('ai-concept-image').src=value.image;$('ai-concept-image').hidden=false;$('ai-concept-empty').hidden=true;$('ai-concept-note').hidden=false;
    $('ai-preview-name').textContent=value.prompt;
    if(value.source==='upload'){$('ai-prompt').value='';$('ai-upload-name').textContent='Yüklenen görsel: '+value.prompt;$('ai-translated').textContent='Yüklediğin görsel kullanılıyor; yazıdan yeni görsel üretilmedi.';}
    else{$('ai-upload-name').textContent='';if(!$('ai-prompt').value.trim()){$('ai-prompt').value=value.prompt;$('ai-language').value=value.language;$('ai-seed').value=value.seed;}}
    updateButtons(state.busy||pending,state.ready);
   }
   if(reference&&!part&&!state.busy&&!localError&&(!job||job.state==='succeeded')){
    $('ai-state').textContent=approved()?'Kontrol görseli hazır. Doğruysa onaylayıp 3D üretin.':'Tarif değişti. Bu tarif için yeni bir kontrol görseli üretin.';
    if(reference.translated)$('ai-translated').textContent='Yerel çeviri: '+reference.translated;
   }
   if(job?.kind==='generate'&&job.state==='succeeded'&&job.referenceId===referenceId&&resultId!==job.id){
    resultId=job.id;
    try{const generated=await bridge('result',{id:job.id});part=generated;loadedId=null;queued={part:generated,name:job.prompt,id:job.id};$('ai-preview-name').textContent=job.prompt;$('ai-state').textContent='3D model önizlemeye yükleniyor…';view(true);sendPreview();}catch(e){resultId=null;throw e;}
   }
  }catch(e){error(e);}finally{if(active||pending)timer=setTimeout(poll,1500);}
 }
 async function run(action,data){
  if(pending)return;if(action==='concept'||action==='import-image'){allowResults=true;ignoredReference=lastServerReference;reference=null;referenceId=null;}pending=true;localError=null;updateButtons(true,false);$('ai-state').classList.remove('ai-state-error');$('ai-state').textContent='İşlem başlatılıyor…';
  try{const result=await bridge(action,data);if(action==='concept'||action==='import-image'){part=null;loadedId=null;resultId=null;queued=null;frameReady=false;frame.src='mesh-editor.html?preview=1';view(false);$('ai-result').textContent='Henüz 3D model üretilmedi.';}}
  catch(e){pending=false;updateButtons(false,lastReady);error(e);return;}finally{pending=false;}
  await poll();
 }
 function options(){const rawSeed=$('ai-seed').value;return{imageEngine:$('ai-image-engine').value,compute:$('ai-compute').value,precision:$('ai-precision').value,prompt:$('ai-prompt').value.trim(),language:$('ai-language').value,height:Number($('ai-height').value),quality:$('ai-quality').value,seed:rawSeed===''?undefined:Number(rawSeed)};}
 $('ai-install').onclick=()=>run('install');$('ai-install-gpu').onclick=()=>run('install-gpu');$('ai-install-quality').onclick=()=>run('install-quality');$('ai-install-image-xl').onclick=()=>run('install-image-xl');$('ai-cancel').onclick=async()=>{try{await bridge('cancel');await poll();}catch(e){error(e);}};
 $('ai-generate').onclick=()=>{const data=options();if(!data.prompt)return error(new Error('Önce üretilecek nesneyi tarif edin.'));run('concept',data);};
 async function upload(file){
  if(!file||lastBusy||pending||preparing||!lastReady)return;
  preparing=true;localError=null;updateButtons(true,lastReady);$('ai-state').classList.remove('ai-state-error');$('ai-state').textContent='Görsel yüklemeye hazırlanıyor…';
  try{
   if(!['image/png','image/jpeg','image/webp'].includes(file.type))throw new Error('PNG, JPG veya WEBP görseli seçin.');
   if(file.size>25*1024*1024)throw new Error('Görsel en fazla 25 MB olabilir.');
   const bitmap=await createImageBitmap(file);try{if(bitmap.width*bitmap.height>25_000_000)throw new Error('Görsel en fazla 25 milyon piksel olabilir.');const scale=Math.min(1,((navigator.deviceMemory||8)<=4?1024:2048)/Math.max(bitmap.width,bitmap.height)),canvas=document.createElement('canvas');canvas.width=Math.max(1,Math.round(bitmap.width*scale));canvas.height=Math.max(1,Math.round(bitmap.height*scale));canvas.getContext('2d').drawImage(bitmap,0,0,canvas.width,canvas.height);let image=canvas.toDataURL('image/png');while(image.length>10*1024*1024&&canvas.width>256&&canvas.height>256){const smaller=document.createElement('canvas');smaller.width=Math.max(1,Math.round(canvas.width*.8));smaller.height=Math.max(1,Math.round(canvas.height*.8));smaller.getContext('2d').drawImage(canvas,0,0,smaller.width,smaller.height);canvas.width=smaller.width;canvas.height=smaller.height;canvas.getContext('2d').drawImage(smaller,0,0);image=canvas.toDataURL('image/png');}preparing=false;await run('import-image',{...options(),name:file.name,image,removeBackground:$('ai-remove-background').checked});}finally{bitmap.close();}
  }catch(e){error(e);}finally{preparing=false;$('ai-image-file').value='';await poll();}
 }
 $('ai-upload').onclick=()=>$('ai-image-file').click();$('ai-image-file').onchange=e=>upload(e.target.files[0]);
 $('local-ai-host').ondragover=e=>{e.preventDefault();};$('local-ai-host').ondrop=e=>{e.preventDefault();upload(e.dataTransfer.files[0]);};
 $('ai-build').onclick=()=>{if(approved())run('generate',{...options(),referenceId:reference.id});};
 $('ai-edit').onclick=()=>{if(part&&loadedId)onEdit(part,$('ai-preview-name').textContent);};
 $('ai-export').onclick=()=>{if(part&&loadedId)frame.contentWindow.postMessage({type:'katman-editor-action',action:'export',format:$('ai-format').value},location.origin);};
 return{show(){active=true;if(!frame.getAttribute('src'))frame.src='mesh-editor.html?preview=1';poll();},hide(){active=false;clearTimeout(timer);},action(action){if(action==='save'||action==='export')$('ai-export').click();else if(action==='help')$('ai-help').open=true;else if(action==='open'||action==='image')$('ai-upload').click();}};
}
