const $=id=>document.getElementById(id);
export function initLocalAI({onEdit,onModelReady}){
 let active=false,timer,pending=false,part=null,loadedId=null,resultId=null,frameReady=false,queued=null,lastReady=false,localError=null,reportedJobId=null,reference=null,referenceId=null,lastBusy=false;
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
  if(event.source!==frame.contentWindow||event.origin!==location.origin||event.data?.type!=='katman-generated-loaded'||event.data.token!==resultId)return;
  if(event.data.error){error(new Error(event.data.error));return;}
  loadedId=event.data.token;$('ai-result').textContent=part?`${part.vertices.length.toLocaleString('tr-TR')} köşe · ${part.triangles.length.toLocaleString('tr-TR')} üçgen`:'';
  $('ai-state').textContent='3D model hazır. Kontrol görseliyle karşılaştırıp kaydedebilirsiniz.';updateButtons(lastBusy,lastReady);
 });
 function approved(){return reference&&$('ai-prompt').value.trim()===reference.prompt&&$('ai-language').value===reference.language;}
 function updateButtons(busy,ready){
  lastBusy=busy;$('ai-generate').disabled=busy||!ready;$('ai-build').disabled=busy||!ready||!approved();$('ai-install').disabled=busy;$('ai-cancel').hidden=!busy;
  for(const id of ['ai-edit','ai-export'])$(id).disabled=busy||!part||!loadedId;
  for(const id of ['ai-prompt','ai-language','ai-height','ai-quality','ai-seed'])$(id).disabled=busy;
  onModelReady?.(!!part&&!!loadedId&&!busy);
 }
 for(const id of ['ai-prompt','ai-language'])$(id).addEventListener('input',()=>updateButtons(lastBusy,lastReady));
 async function poll(){
  clearTimeout(timer);
  try{
   const state=await bridge('status');lastReady=state.ready;$('ai-engine-state').textContent=state.ready?'Yeni yerel motor hazır · İşlemci':'Yeni yerel motor kurulumu gerekli';updateButtons(state.busy||pending,state.ready);
   const job=state.job;
   if(job?.id!==reportedJobId){reportedJobId=job?.id;localError=null;}
   if(job&&!localError){
    $('ai-state').classList.toggle('ai-state-error',job.state==='failed');$('ai-state').textContent=job.message;
    $('ai-elapsed').textContent=job.state==='running'?`${Math.floor((Date.now()-job.started)/1000)} sn · uygulamayı kullanmaya devam edebilirsiniz.`:'';
    if(job.progress!==undefined&&(job.kind==='install'||['concept','sample'].includes(job.phase)))$('ai-progress').value=job.progress;else $('ai-progress').removeAttribute('value');$('ai-progress').hidden=!state.busy;
    if(job.translated)$('ai-translated').textContent='Yerel çeviri: '+job.translated;
   }
   if(state.reference&&referenceId!==state.reference.id){
    const value=await bridge('concept-result',{id:state.reference.id});reference=value;referenceId=value.id;
    if(part){part=null;loadedId=null;resultId=null;queued=null;frameReady=false;frame.src='mesh-editor.html?preview=1';view(false);$('ai-result').textContent='Henüz 3D model üretilmedi.';}
    $('ai-concept-image').src=value.image;$('ai-concept-image').hidden=false;$('ai-concept-empty').hidden=true;$('ai-concept-note').hidden=false;
    $('ai-preview-name').textContent=value.prompt;
    if(!$('ai-prompt').value.trim()){$('ai-prompt').value=value.prompt;$('ai-language').value=value.language;$('ai-seed').value=value.seed;}
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
  if(pending)return;pending=true;localError=null;updateButtons(true,false);$('ai-state').classList.remove('ai-state-error');$('ai-state').textContent='İşlem başlatılıyor…';
  try{await bridge(action,data);if(action==='concept'){part=null;loadedId=null;resultId=null;queued=null;frameReady=false;frame.src='mesh-editor.html?preview=1';view(false);$('ai-result').textContent='Henüz 3D model üretilmedi.';}}
  catch(e){pending=false;updateButtons(false,lastReady);error(e);return;}finally{pending=false;}
  await poll();
 }
 function options(){const rawSeed=$('ai-seed').value;return{prompt:$('ai-prompt').value.trim(),language:$('ai-language').value,height:Number($('ai-height').value),quality:$('ai-quality').value,seed:rawSeed===''?Math.floor(Math.random()*2**31):Number(rawSeed)};}
 $('ai-install').onclick=()=>run('install');$('ai-cancel').onclick=async()=>{try{await bridge('cancel');await poll();}catch(e){error(e);}};
 $('ai-generate').onclick=()=>{const data=options();if(!data.prompt)return error(new Error('Önce üretilecek nesneyi tarif edin.'));run('concept',data);};
 $('ai-build').onclick=()=>{if(approved())run('generate',{...options(),referenceId:reference.id});};
 $('ai-edit').onclick=()=>{if(part&&loadedId)onEdit(part,$('ai-preview-name').textContent);};
 $('ai-export').onclick=()=>{if(part&&loadedId)frame.contentWindow.postMessage({type:'katman-editor-action',action:'export',format:$('ai-format').value},location.origin);};
 return{show(){active=true;if(!frame.getAttribute('src'))frame.src='mesh-editor.html?preview=1';poll();},hide(){active=false;clearTimeout(timer);},action(action){if(action==='save'||action==='export')$('ai-export').click();else if(action==='help')$('ai-help').open=true;else if(action==='open'||action==='image')$('ai-prompt').focus();}};
}
