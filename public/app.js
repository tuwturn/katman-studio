(()=>{function Cf({memoryGB:n=8,cores:e=8,software:t=!1}={}){let i=t||n<=4||e<=4;return{pixelRatio:i?1:2,shadowSize:i?1024:2048}}function Lc(n,e=globalThis.navigator){let t=n.getContext(),i=t.getExtension("WEBGL_debug_renderer_info"),s=i?String(t.getParameter(i.UNMASKED_RENDERER_WEBGL)):"";return Cf({memoryGB:e?.deviceMemory||8,cores:e?.hardwareConcurrency||4,software:/swiftshader|llvmpipe|software rasterizer|basic render driver|warp/i.test(s)})}var Z=n=>document.getElementById(n),Uc=n=>({base:"SDXL Base \xB7 genel kalite",realistic:"RealVisXL \xB7 ger\xE7ek\xE7i kalite",xl:"SDXL-Turbo",turbo:"SD-Turbo"})[n]||"SD-Turbo",Rf=n=>({auto:"Tarifteki tarz",realistic:"Ger\xE7ek\xE7i",caricature:"Karikat\xFCr",cartoon:"3D \xE7izgi film",illustration:"2D \xE7izgi film",anime:"Anime",clay:"Kil / heykel",sketch:"Kalem \xE7izimi"})[n]||"Tarifteki tarz";function Nc({onEdit:n,onModelReady:e}){let t=!1,i,s=!1,r=!1,a=null,o=null,c=null,l=!1,h=null,u=!1,d=null,m=null,g=null,_=null,p=!1,f=!1,w=null,M=null,v=Z("ai-preview-frame");async function A(T,U){if(window.katmanDesktop?.localAI)return window.katmanDesktop.localAI(T,U);let V=["status","result","concept-result"].includes(T),k=await fetch("/api/local-ai/"+T+(T.endsWith("result")?"?id="+encodeURIComponent(U.id):""),{method:V?"GET":"POST",headers:V?{}:{"Content-Type":"application/json"},...V?{}:{body:JSON.stringify(U||{})}}),te=await k.json();if(!k.ok||te.error)throw new Error(te.error||"Yerel motora ula\u015F\u0131lamad\u0131.");return te}function C(T){d=T.message||String(T),Z("ai-state").textContent=d,Z("ai-state").classList.add("ai-state-error")}function I(T){Z("ai-concept-view").hidden=T,v.hidden=!T,Z("ai-show-concept").classList.toggle("active",!T),Z("ai-show-model").classList.toggle("active",T)}Z("ai-show-concept").onclick=()=>I(!1),Z("ai-show-model").onclick=()=>I(!0);function P(){l&&h&&(v.contentWindow.postMessage({type:"katman-generated-model",parts:[h.part],name:h.name,token:h.id},location.origin),h=null)}v.addEventListener("load",()=>{l=!0,P()}),window.addEventListener("message",T=>{if(!(T.source!==v.contentWindow||T.origin!==location.origin)){if(T.data?.type==="katman-reference-file"){Y(T.data.file);return}if(!(T.data?.type!=="katman-generated-loaded"||T.data.token!==c)){if(T.data.error){C(new Error(T.data.error));return}o=T.data.token,Z("ai-result").textContent=a?`${a.vertices.length.toLocaleString("tr-TR")} k\xF6\u015Fe \xB7 ${a.triangles.length.toLocaleString("tr-TR")} \xFC\xE7gen`:"",Z("ai-state").textContent="3D model haz\u0131r. Kontrol g\xF6rseliyle kar\u015F\u0131la\u015Ft\u0131r\u0131p kaydedebilirsiniz.",b(p,u)}}});function y(){return g&&(g.source==="upload"?!Z("ai-prompt").value.trim():Z("ai-prompt").value.trim()===g.prompt&&Z("ai-language").value===g.language&&Z("ai-image-style").value===(g.imageStyle||"auto")&&Z("ai-single-subject").checked===(g.singleSubject!==!1)&&(Z("ai-image-engine").value==="auto"||Z("ai-image-engine").value===(g.imageEngine||"turbo")))}function b(T,U){T=T||r,p=T,Z("ai-generate").disabled=T||!U,Z("ai-build").disabled=T||!U||!y(),Z("ai-install").disabled=T,Z("ai-install-gpu").disabled=T||!U,Z("ai-install-quality").disabled=T||!U,Z("ai-install-image-xl").disabled=T||!U,Z("ai-install-realistic").disabled=T||!U,Z("ai-install-base").disabled=T||!U,Z("ai-cancel").hidden=!T;for(let V of["ai-edit","ai-export"])Z(V).disabled=T||!a||!o;for(let V of["ai-prompt","ai-language","ai-height","ai-quality","ai-seed","ai-remove-background","ai-compute","ai-precision","ai-image-engine","ai-image-style","ai-single-subject"])Z(V).disabled=T;Z("ai-upload").disabled=T||!U,Z("ai-image-file").disabled=T||!U,e?.(!!a&&!!o&&!T)}for(let T of["ai-prompt","ai-language","ai-image-engine","ai-image-style","ai-single-subject"])Z(T).addEventListener("input",()=>b(p,u));Z("ai-image-style").addEventListener("change",()=>{Z("ai-image-engine").value==="realistic"&&Z("ai-image-style").value!=="realistic"&&(Z("ai-image-engine").value="auto"),b(p,u)});async function D(){clearTimeout(i);try{let T=await A("status");if(u=T.ready,Z("ai-engine-state").textContent=T.ready?"Yerel motor haz\u0131r \xB7 "+(T.gpu?.name||"\u0130\u015Flemci"):"Yeni yerel motor kurulumu gerekli",Z("ai-install").hidden=!!T.ready,Z("ai-setup-note").hidden=!!T.ready,Z("ai-optional-models").hidden=!!T.qualityReady&&!!T.imageXLReady&&!!T.realisticReady&&!!T.baseReady,Z("ai-install-base").hidden=!!T.baseReady,Z("ai-image-engine").querySelector('[value="base"]').disabled=!T.baseReady,Z("ai-install-realistic").hidden=!!T.realisticReady,Z("ai-image-engine").querySelector('[value="realistic"]').disabled=!T.realisticReady,Z("ai-install-image-xl").hidden=!!T.imageXLReady,Z("ai-image-engine").querySelector('[value="xl"]').disabled=!T.imageXLReady,Z("ai-install-gpu").hidden=!!T.gpu||!T.gpuInstallSupported,Z("ai-install-gpu").textContent=T.gpu?"GPU kurulumunu do\u011Frula":"Donan\u0131ma uygun GPU motorunu kur",Z("ai-compute").querySelector('[value="gpu"]').disabled=!T.gpu,Z("ai-quality").querySelector('[value="fidelity"]').disabled=!T.qualityReady,Z("ai-install-quality").hidden=!!T.qualityReady,Z("ai-device").textContent=(T.job?.state==="running"&&T.job?.device?"\xC7al\u0131\u015Fan ayg\u0131t: "+T.job.device:T.gpu?"Otomatik se\xE7im ekran kart\u0131n\u0131 kullan\u0131r.":"Otomatik se\xE7im i\u015Flemciyi kullan\u0131r.")+(T.job?.fallback?" GPU i\u015Flemi ba\u015Far\u0131s\u0131z oldu; i\u015Flemciye d\xF6n\xFCld\xFC.":""),T.hardware){let V=T.hardware;Z("ai-hardware").textContent="\xDCretim bilgisayar\u0131: "+V.cpu+" \xB7 "+V.ramGB+" GB RAM ("+V.freeGB+" GB bo\u015F) \xB7 "+(T.busy&&T.job?.threads||V.threads)+" i\u015F par\xE7ac\u0131\u011F\u0131 \xB7 "+({low:"Bellek tasarrufu",balanced:"Dengeli",high:"Y\xFCksek bellek"}[V.memoryMode]||V.memoryMode)+(T.gpu?.memoryGB?" \xB7 "+T.gpu.memoryGB+" GB GPU":"")}b(T.busy||s,T.ready);let U=f||T.job?.kind?.startsWith("install")?T.job:null;if(M=T.reference?.id,U?.id!==m&&(m=U?.id,d=null),U&&!d&&(Z("ai-state").classList.toggle("ai-state-error",U.state==="failed"),Z("ai-state").textContent=U.message+(U.imageEngine?" \xB7 "+Uc(U.imageEngine):""),U.imagePrompt&&(Z("ai-prompt-details").hidden=!1,Z("ai-effective-prompt").textContent=U.imagePrompt),Z("ai-elapsed").textContent=U.state==="running"?`${Math.floor((Date.now()-U.started)/1e3)} sn \xB7 uygulamay\u0131 kullanmaya devam edebilirsiniz.`:"",U.progress!==void 0&&(U.kind.startsWith("install")||["concept","sample"].includes(U.phase))?Z("ai-progress").value=U.progress:Z("ai-progress").removeAttribute("value"),Z("ai-progress").hidden=!T.busy,U.translated&&(Z("ai-translated").textContent="Yerel \xE7eviri: "+U.translated)),f&&T.reference&&T.reference.id!==w&&_!==T.reference.id){let V=await A("concept-result",{id:T.reference.id});g=V,_=V.id,Z("ai-image-engine-used").textContent="Kaynak: "+(V.source==="upload"?"Y\xFCklenen g\xF6rsel":Uc(V.imageEngine)),Z("ai-prompt-details").hidden=V.source==="upload"||!V.imagePrompt,Z("ai-effective-prompt").textContent=V.imagePrompt||"",a&&(a=null,o=null,c=null,h=null,l=!1,v.src="mesh-editor.html?preview=1",I(!1),Z("ai-result").textContent="Hen\xFCz 3D model \xFCretilmedi."),Z("ai-concept-image").src=V.image,Z("ai-concept-image").hidden=!1,Z("ai-concept-empty").hidden=!0,Z("ai-concept-note").hidden=!1,Z("ai-concept-note").textContent=V.source==="upload"?"Bu 2D kontrol g\xF6rselidir. 3D \xFCretimi onay\u0131n\u0131 bekler.":"2D kontrol g\xF6rseli \xB7 "+Rf(V.imageStyle)+(V.singleSubject!==!1?" \xB7 Tek ana konu":" \xB7 Serbest konu adedi")+". Do\u011Fruysa 3D \xFCretimini onayla.",Z("ai-preview-name").textContent=V.prompt,V.source==="upload"?(Z("ai-prompt").value="",Z("ai-upload-name").textContent="Y\xFCklenen g\xF6rsel: "+V.prompt,Z("ai-translated").textContent="Y\xFCkledi\u011Fin g\xF6rsel kullan\u0131l\u0131yor; yaz\u0131dan yeni g\xF6rsel \xFCretilmedi."):(Z("ai-upload-name").textContent="",Z("ai-prompt").value.trim()||(Z("ai-prompt").value=V.prompt,Z("ai-language").value=V.language,Z("ai-seed").value=V.seed)),b(T.busy||s,T.ready)}if(g&&!a&&!T.busy&&!d&&(!U||U.state==="succeeded")&&(Z("ai-state").textContent=y()?"Kontrol g\xF6rseli haz\u0131r. Do\u011Fruysa onaylay\u0131p 3D \xFCretin."+(g.imageFallback?" Otomatik mod hafif g\xF6rsel motoruna d\xF6nd\xFC.":""):"Tarif de\u011Fi\u015Fti. Bu tarif i\xE7in yeni bir kontrol g\xF6rseli \xFCretin.",g.translated&&(Z("ai-translated").textContent="Yerel \xE7eviri: "+g.translated)),U?.kind==="generate"&&U.state==="succeeded"&&U.referenceId===_&&c!==U.id){c=U.id;try{let V=await A("result",{id:U.id});a=V,o=null,h={part:V,name:U.prompt,id:U.id},Z("ai-preview-name").textContent=U.prompt,Z("ai-state").textContent="3D model \xF6nizlemeye y\xFCkleniyor\u2026",I(!0),P()}catch(V){throw c=null,V}}}catch(T){C(T)}finally{(t||s)&&(i=setTimeout(D,1500))}}async function O(T,U){if(!s){(T==="concept"||T==="import-image")&&(f=!0,w=M,g=null,_=null),s=!0,d=null,b(!0,!1),Z("ai-state").classList.remove("ai-state-error"),Z("ai-state").textContent="\u0130\u015Flem ba\u015Flat\u0131l\u0131yor\u2026";try{let V=await A(T,U);(T==="concept"||T==="import-image")&&(a=null,o=null,c=null,h=null,l=!1,v.src="mesh-editor.html?preview=1",I(!1),Z("ai-result").textContent="Hen\xFCz 3D model \xFCretilmedi.",Z("ai-concept-image").hidden=!0,Z("ai-concept-empty").hidden=!1,Z("ai-concept-empty").textContent="Yeni kontrol g\xF6rseli haz\u0131rlan\u0131yor\u2026",Z("ai-concept-note").hidden=!0,Z("ai-preview-name").textContent=U?.prompt||"Yeni g\xF6rsel",Z("ai-image-engine-used").textContent="\xDCRET\u0130L\u0130YOR")}catch(V){s=!1,b(!1,u),C(V);return}finally{s=!1}await D()}}function H(){let T=Z("ai-seed").value;return{imageStyle:Z("ai-image-style").value,singleSubject:Z("ai-single-subject").checked,imageEngine:Z("ai-image-engine").value,compute:Z("ai-compute").value,precision:Z("ai-precision").value,prompt:Z("ai-prompt").value.trim(),language:Z("ai-language").value,height:Number(Z("ai-height").value),quality:Z("ai-quality").value,seed:T===""?void 0:Number(T)}}Z("ai-install").onclick=()=>O("install"),Z("ai-install-gpu").onclick=()=>O("install-gpu"),Z("ai-install-quality").onclick=()=>O("install-quality"),Z("ai-install-image-xl").onclick=()=>O("install-image-xl"),Z("ai-install-realistic").onclick=()=>O("install-realistic"),Z("ai-install-base").onclick=()=>O("install-base-image"),Z("ai-cancel").onclick=async()=>{try{await A("cancel"),await D()}catch(T){C(T)}},Z("ai-generate").onclick=()=>{let T=H();if(!T.prompt)return C(new Error("\xD6nce \xFCretilecek nesneyi tarif edin."));O("concept",T)};async function Y(T){if(!(!T||p||s||r||!u)){r=!0,d=null,b(!0,u),Z("ai-state").classList.remove("ai-state-error"),Z("ai-state").textContent="G\xF6rsel y\xFCklemeye haz\u0131rlan\u0131yor\u2026";try{if(!["image/png","image/jpeg","image/webp"].includes(T.type))throw new Error("PNG, JPG veya WEBP g\xF6rseli se\xE7in.");if(T.size>25*1024*1024)throw new Error("G\xF6rsel en fazla 25 MB olabilir.");let U=await createImageBitmap(T);try{if(U.width*U.height>25e6)throw new Error("G\xF6rsel en fazla 25 milyon piksel olabilir.");let V=Math.min(1,((navigator.deviceMemory||8)<=4?1024:2048)/Math.max(U.width,U.height)),k=document.createElement("canvas");k.width=Math.max(1,Math.round(U.width*V)),k.height=Math.max(1,Math.round(U.height*V)),k.getContext("2d").drawImage(U,0,0,k.width,k.height);let te=k.toDataURL("image/png");for(;te.length>10*1024*1024&&k.width>256&&k.height>256;){let oe=document.createElement("canvas");oe.width=Math.max(1,Math.round(k.width*.8)),oe.height=Math.max(1,Math.round(k.height*.8)),oe.getContext("2d").drawImage(k,0,0,oe.width,oe.height),k.width=oe.width,k.height=oe.height,k.getContext("2d").drawImage(oe,0,0),te=k.toDataURL("image/png")}r=!1,await O("import-image",{...H(),name:T.name,image:te,removeBackground:Z("ai-remove-background").checked})}finally{U.close()}}catch(U){C(U)}finally{r=!1,Z("ai-image-file").value="",await D()}}}return Z("ai-upload").onclick=()=>Z("ai-image-file").click(),Z("ai-image-file").onchange=T=>Y(T.target.files[0]),Z("local-ai-host").ondragover=T=>{T.preventDefault()},Z("local-ai-host").ondrop=T=>{T.preventDefault(),Y(T.dataTransfer.files[0])},Z("ai-build").onclick=()=>{y()&&O("generate",{...H(),referenceId:g.id})},Z("ai-edit").onclick=()=>{a&&o&&n(a,Z("ai-preview-name").textContent)},Z("ai-export").onclick=()=>{a&&o&&v.contentWindow.postMessage({type:"katman-editor-action",action:"export",format:Z("ai-format").value},location.origin)},{show(){t=!0,v.getAttribute("src")||(v.src="mesh-editor.html?preview=1"),D()},hide(){t=!1,clearTimeout(i)},action(T){T==="save"||T==="export"?Z("ai-export").click():T==="help"?Z("ai-help").open=!0:(T==="open"||T==="image")&&Z("ai-upload").click()}}}function zo(n){return!!n&&(n.isContentEditable||n.tagName==="TEXTAREA"||n.tagName==="INPUT"&&!["button","checkbox","radio","file","range","submit","reset"].includes(n.type))}function Fc(n){if(!(n.ctrlKey||n.metaKey)||n.altKey)return null;let e=n.key.toLowerCase();return e==="z"?n.shiftKey?"redo":"undo":e==="y"?"redo":null}function Oc({render:n,update:e=()=>!1,visible:t=()=>!0,requestFrame:i=requestAnimationFrame}){let s=!1,r=!1;function a(){if(s=!1,!t())return;let c=r;r=!1;let l=e();(c||l)&&n(),l&&o()}function o(){r=!0,!s&&t()&&(s=!0,i(a))}return o}var Dt=(n,e)=>!!(n.removeBackground&&n.backgroundIds?.includes(e.id)),Jt=(n,e)=>e.visible&&!Dt(n,e);var pn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},si={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},hh=0,vl=1,uh=2;var yl=1,wa=2,Mn=3,Nn=0,Ft=1,Sn=2,Fn=0,vi=1,Ml=2,Sl=3,bl=4,fh=5,Qn=100,dh=101,ph=102,mh=103,gh=104,_h=200,xh=201,vh=202,yh=203,jr=204,Qr=205,Mh=206,Sh=207,bh=208,wh=209,Eh=210,Th=211,Ah=212,Ch=213,Rh=214,Ea=0,Ta=1,Aa=2,yi=3,Ca=4,Ra=5,Ia=6,Pa=7,wl=0,Ih=1,Ph=2,On=0,Dh=1,Lh=2,Uh=3,Da=4,Nh=5,Fh=6,Oh=7;var El=300,Ti=301,Ai=302,La=303,Ua=304,nr=306,ea=1e3,jn=1001,ta=1002,en=1003,Bh=1004;var ir=1005;var un=1006,Na=1007;var ri=1008;var mn=1009,Tl=1010,Al=1011,hs=1012,Fa=1013,ai=1014,bn=1015,us=1016,Oa=1017,Ba=1018,fs=1020,Cl=35902,Rl=35899,Il=1021,Pl=1022,sn=1023,es=1026,ds=1027,Dl=1028,ka=1029,Ll=1030,za=1031;var Va=1033,sr=33776,rr=33777,ar=33778,or=33779,Ha=35840,Ga=35841,Wa=35842,Xa=35843,qa=36196,Ya=37492,Za=37496,$a=37808,Ka=37809,Ja=37810,ja=37811,Qa=37812,eo=37813,to=37814,no=37815,io=37816,so=37817,ro=37818,ao=37819,oo=37820,lo=37821,co=36492,ho=36494,uo=36495,fo=36283,po=36284,mo=36285,go=36286;var Ls=2300,na=2301,Jr=2302,hl=2400,ul=2401,fl=2402;var kh=3200,zh=3201;var Ul=0,Vh=1,Bn="",Ut="srgb",Mi="srgb-linear",Us="linear",Qe="srgb";var xi=7680;var dl=519,Hh=512,Gh=513,Wh=514,Nl=515,Xh=516,qh=517,Yh=518,Zh=519,pl=35044;var Fl="300 es",hn=2e3,Ns=2001;var xn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Tt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bc=1234567,Ps=Math.PI/180,ts=180/Math.PI;function ps(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Tt[n&255]+Tt[n>>8&255]+Tt[n>>16&255]+Tt[n>>24&255]+"-"+Tt[e&255]+Tt[e>>8&255]+"-"+Tt[e>>16&15|64]+Tt[e>>24&255]+"-"+Tt[t&63|128]+Tt[t>>8&255]+"-"+Tt[t>>16&255]+Tt[t>>24&255]+Tt[i&255]+Tt[i>>8&255]+Tt[i>>16&255]+Tt[i>>24&255]).toLowerCase()}function Ge(n,e,t){return Math.max(e,Math.min(t,n))}function Ol(n,e){return(n%e+e)%e}function If(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Pf(n,e,t){return n!==e?(t-n)/(e-n):0}function Ds(n,e,t){return(1-t)*n+t*e}function Df(n,e,t,i){return Ds(n,e,1-Math.exp(-t*i))}function Lf(n,e=1){return e-Math.abs(Ol(n,e*2)-e)}function Uf(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Nf(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Ff(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Of(n,e){return n+Math.random()*(e-n)}function Bf(n){return n*(.5-Math.random())}function kf(n){n!==void 0&&(Bc=n);let e=Bc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function zf(n){return n*Ps}function Vf(n){return n*ts}function Hf(n){return(n&n-1)===0&&n!==0}function Gf(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Wf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Xf(n,e,t,i,s){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+i)/2),h=a((e+i)/2),u=r((e-i)/2),d=a((e-i)/2),m=r((i-e)/2),g=a((i-e)/2);switch(s){case"XYX":n.set(o*h,c*u,c*d,o*l);break;case"YZY":n.set(c*d,o*h,c*u,o*l);break;case"ZXZ":n.set(c*u,c*d,o*h,o*l);break;case"XZX":n.set(o*h,c*g,c*m,o*l);break;case"YXY":n.set(c*m,o*h,c*g,o*l);break;case"ZYZ":n.set(c*g,c*m,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ji(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Lt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Bl={DEG2RAD:Ps,RAD2DEG:ts,generateUUID:ps,clamp:Ge,euclideanModulo:Ol,mapLinear:If,inverseLerp:Pf,lerp:Ds,damp:Df,pingpong:Lf,smoothstep:Uf,smootherstep:Nf,randInt:Ff,randFloat:Of,randFloatSpread:Bf,seededRandom:kf,degToRad:zf,radToDeg:Vf,isPowerOfTwo:Hf,ceilPowerOfTwo:Gf,floorPowerOfTwo:Wf,setQuaternionFromProperEuler:Xf,normalize:Lt,denormalize:ji},Ue=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ge(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ge(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},tn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let c=i[s+0],l=i[s+1],h=i[s+2],u=i[s+3],d=r[a+0],m=r[a+1],g=r[a+2],_=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(u!==_||c!==d||l!==m||h!==g){let p=1-o,f=c*d+l*m+h*g+u*_,w=f>=0?1:-1,M=1-f*f;if(M>Number.EPSILON){let A=Math.sqrt(M),C=Math.atan2(A,f*w);p=Math.sin(p*C)/A,o=Math.sin(o*C)/A}let v=o*w;if(c=c*p+d*v,l=l*p+m*v,h=h*p+g*v,u=u*p+_*v,p===1-o){let A=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=A,l*=A,h*=A,u*=A}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],c=i[s+1],l=i[s+2],h=i[s+3],u=r[a],d=r[a+1],m=r[a+2],g=r[a+3];return e[t]=o*g+h*u+c*m-l*d,e[t+1]=c*g+h*d+l*u-o*m,e[t+2]=l*g+h*m+o*d-c*u,e[t+3]=h*g-o*u-c*d-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(s/2),u=o(r/2),d=c(i/2),m=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*m*g,this._y=l*m*u-d*h*g,this._z=l*h*g+d*m*u,this._w=l*h*u-d*m*g;break;case"YXZ":this._x=d*h*u+l*m*g,this._y=l*m*u-d*h*g,this._z=l*h*g-d*m*u,this._w=l*h*u+d*m*g;break;case"ZXY":this._x=d*h*u-l*m*g,this._y=l*m*u+d*h*g,this._z=l*h*g+d*m*u,this._w=l*h*u-d*m*g;break;case"ZYX":this._x=d*h*u-l*m*g,this._y=l*m*u+d*h*g,this._z=l*h*g-d*m*u,this._w=l*h*u+d*m*g;break;case"YZX":this._x=d*h*u+l*m*g,this._y=l*m*u+d*h*g,this._z=l*h*g-d*m*u,this._w=l*h*u-d*m*g;break;case"XZY":this._x=d*h*u-l*m*g,this._y=l*m*u-d*h*g,this._z=l*h*g+d*m*u,this._w=l*h*u+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-c)*m,this._y=(r-l)*m,this._z=(a-s)*m}else if(i>o&&i>u){let m=2*Math.sqrt(1+i-o-u);this._w=(h-c)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+l)/m}else if(o>u){let m=2*Math.sqrt(1+o-i-u);this._w=(r-l)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(c+h)/m}else{let m=2*Math.sqrt(1+u-i-o);this._w=(a-s)/m,this._x=(r+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ge(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-i*l,this._z=r*h+a*l+i*c-s*o,this._w=a*h-i*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},B=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(kc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(kc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*i),h=2*(o*t-r*s),u=2*(r*i-a*t);return this.x=t+c*l+a*u-o*h,this.y=i+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this.z=Ge(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this.z=Ge(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ge(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Vo.copy(this).projectOnVector(e),this.sub(Vo)}reflect(e){return this.sub(Vo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ge(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Vo=new B,kc=new tn,Be=class n{constructor(e,t,i,s,r,a,o,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,l)}set(e,t,i,s,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],u=i[7],d=i[2],m=i[5],g=i[8],_=s[0],p=s[3],f=s[6],w=s[1],M=s[4],v=s[7],A=s[2],C=s[5],I=s[8];return r[0]=a*_+o*w+c*A,r[3]=a*p+o*M+c*C,r[6]=a*f+o*v+c*I,r[1]=l*_+h*w+u*A,r[4]=l*p+h*M+u*C,r[7]=l*f+h*v+u*I,r[2]=d*_+m*w+g*A,r[5]=d*p+m*M+g*C,r[8]=d*f+m*v+g*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-i*r*h+i*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*r,m=l*r-a*c,g=t*u+i*d+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=u*_,e[1]=(s*l-h*i)*_,e[2]=(o*i-s*a)*_,e[3]=d*_,e[4]=(h*t-s*c)*_,e[5]=(s*r-o*t)*_,e[6]=m*_,e[7]=(i*c-l*t)*_,e[8]=(a*t-i*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ho.makeScale(e,t)),this}rotate(e){return this.premultiply(Ho.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ho.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ho=new Be;function kl(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Fs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function $h(){let n=Fs("canvas");return n.style.display="block",n}var zc={};function ns(n){n in zc||(zc[n]=!0,console.warn(n))}function Kh(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var Vc=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hc=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qf(){let n={enabled:!0,workingColorSpace:Mi,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Qe&&(s.r=Un(s.r),s.g=Un(s.g),s.b=Un(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Qe&&(s.r=Qi(s.r),s.g=Qi(s.g),s.b=Qi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Bn?Us:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ns("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ns("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Mi]:{primaries:e,whitePoint:i,transfer:Us,toXYZ:Vc,fromXYZ:Hc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ut},outputColorSpaceConfig:{drawingBufferColorSpace:Ut}},[Ut]:{primaries:e,whitePoint:i,transfer:Qe,toXYZ:Vc,fromXYZ:Hc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ut}}}),n}var Ze=qf();function Un(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Qi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var zi,ia=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{zi===void 0&&(zi=Fs("canvas")),zi.width=e.width,zi.height=e.height;let s=zi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=zi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Fs("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Un(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Un(t[i]/255)*255):t[i]=Un(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Yf=0,is=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Yf++}),this.uuid=ps(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Go(s[a].image)):r.push(Go(s[a]))}else r=Go(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Go(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ia.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Zf=0,Wo=new B,qt=class n extends xn{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=jn,s=jn,r=un,a=ri,o=sn,c=mn,l=n.DEFAULT_ANISOTROPY,h=Bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zf++}),this.uuid=ps(),this.name="",this.source=new is(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Wo).x}get height(){return this.source.getSize(Wo).y}get depth(){return this.source.getSize(Wo).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==El)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ea:e.x=e.x-Math.floor(e.x);break;case jn:e.x=e.x<0?0:1;break;case ta:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ea:e.y=e.y-Math.floor(e.y);break;case jn:e.y=e.y<0?0:1;break;case ta:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};qt.DEFAULT_IMAGE=null;qt.DEFAULT_MAPPING=El;qt.DEFAULT_ANISOTROPY=1;var ut=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],m=c[5],g=c[9],_=c[2],p=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(l+1)/2,v=(m+1)/2,A=(f+1)/2,C=(h+d)/4,I=(u+_)/4,P=(g+p)/4;return M>v&&M>A?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=C/i,r=I/i):v>A?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=C/s,r=P/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=I/r,s=P/r),this.set(i,s,r,t),this}let w=Math.sqrt((p-g)*(p-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(w)<.001&&(w=1),this.x=(p-g)/w,this.y=(u-_)/w,this.z=(d-h)/w,this.w=Math.acos((l+m+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this.z=Ge(this.z,e.z,t.z),this.w=Ge(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this.z=Ge(this.z,e,t),this.w=Ge(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ge(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},sa=class extends xn{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t);let s={width:e,height:t,depth:i.depth},r=new qt(s);this.textures=[];let a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:un,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new is(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},vn=class extends sa{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Os=class extends qt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ra=class extends qt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ei=class{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(on.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(on.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=on.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,on):on.fromBufferAttribute(r,a),on.applyMatrix4(e.matrixWorld),this.expandByPoint(on);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Pr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Pr.copy(i.boundingBox)),Pr.applyMatrix4(e.matrixWorld),this.union(Pr)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,on),on.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ts),Dr.subVectors(this.max,Ts),Vi.subVectors(e.a,Ts),Hi.subVectors(e.b,Ts),Gi.subVectors(e.c,Ts),Xn.subVectors(Hi,Vi),qn.subVectors(Gi,Hi),pi.subVectors(Vi,Gi);let t=[0,-Xn.z,Xn.y,0,-qn.z,qn.y,0,-pi.z,pi.y,Xn.z,0,-Xn.x,qn.z,0,-qn.x,pi.z,0,-pi.x,-Xn.y,Xn.x,0,-qn.y,qn.x,0,-pi.y,pi.x,0];return!Xo(t,Vi,Hi,Gi,Dr)||(t=[1,0,0,0,1,0,0,0,1],!Xo(t,Vi,Hi,Gi,Dr))?!1:(Lr.crossVectors(Xn,qn),t=[Lr.x,Lr.y,Lr.z],Xo(t,Vi,Hi,Gi,Dr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,on).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(on).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Cn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Cn=[new B,new B,new B,new B,new B,new B,new B,new B],on=new B,Pr=new ei,Vi=new B,Hi=new B,Gi=new B,Xn=new B,qn=new B,pi=new B,Ts=new B,Dr=new B,Lr=new B,mi=new B;function Xo(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){mi.fromArray(n,r);let o=s.x*Math.abs(mi.x)+s.y*Math.abs(mi.y)+s.z*Math.abs(mi.z),c=e.dot(mi),l=t.dot(mi),h=i.dot(mi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var $f=new ei,As=new B,qo=new B,Si=class{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):$f.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;As.subVectors(e,this.center);let t=As.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(As,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(As.copy(e.center).add(qo)),this.expandByPoint(As.copy(e.center).sub(qo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Rn=new B,Yo=new B,Ur=new B,Yn=new B,Zo=new B,Nr=new B,$o=new B,ti=class{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Rn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Rn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Rn.copy(this.origin).addScaledVector(this.direction,t),Rn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Yo.copy(e).add(t).multiplyScalar(.5),Ur.copy(t).sub(e).normalize(),Yn.copy(this.origin).sub(Yo);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Ur),o=Yn.dot(this.direction),c=-Yn.dot(Ur),l=Yn.lengthSq(),h=Math.abs(1-a*a),u,d,m,g;if(h>0)if(u=a*c-o,d=a*o-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let _=1/h;u*=_,d*=_,m=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),m=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),m=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),m=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Yo).addScaledVector(Ur,d),m}intersectSphere(e,t){Rn.subVectors(e.center,this.origin);let i=Rn.dot(this.direction),s=Rn.dot(Rn)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Rn)!==null}intersectTriangle(e,t,i,s,r){Zo.subVectors(t,e),Nr.subVectors(i,e),$o.crossVectors(Zo,Nr);let a=this.direction.dot($o),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Yn.subVectors(this.origin,e);let c=o*this.direction.dot(Nr.crossVectors(Yn,Nr));if(c<0)return null;let l=o*this.direction.dot(Zo.cross(Yn));if(l<0||c+l>a)return null;let h=-o*Yn.dot($o);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ht=class n{constructor(e,t,i,s,r,a,o,c,l,h,u,d,m,g,_,p){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,l,h,u,d,m,g,_,p)}set(e,t,i,s,r,a,o,c,l,h,u,d,m,g,_,p){let f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=m,f[7]=g,f[11]=_,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/Wi.setFromMatrixColumn(e,0).length(),r=1/Wi.setFromMatrixColumn(e,1).length(),a=1/Wi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,m=a*u,g=o*h,_=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=m+g*l,t[5]=d-_*l,t[9]=-o*c,t[2]=_-d*l,t[6]=g+m*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,m=c*u,g=l*h,_=l*u;t[0]=d+_*o,t[4]=g*o-m,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=m*o-g,t[6]=_+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,m=c*u,g=l*h,_=l*u;t[0]=d-_*o,t[4]=-a*u,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*h,t[9]=_-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,m=a*u,g=o*h,_=o*u;t[0]=c*h,t[4]=g*l-m,t[8]=d*l+_,t[1]=c*u,t[5]=_*l+d,t[9]=m*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,m=a*l,g=o*c,_=o*l;t[0]=c*h,t[4]=_-d*u,t[8]=g*u+m,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=m*u+g,t[10]=d-_*u}else if(e.order==="XZY"){let d=a*c,m=a*l,g=o*c,_=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+_,t[5]=a*h,t[9]=m*u-g,t[2]=g*u-m,t[6]=o*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Kf,e,Jf)}lookAt(e,t,i){let s=this.elements;return Gt.subVectors(e,t),Gt.lengthSq()===0&&(Gt.z=1),Gt.normalize(),Zn.crossVectors(i,Gt),Zn.lengthSq()===0&&(Math.abs(i.z)===1?Gt.x+=1e-4:Gt.z+=1e-4,Gt.normalize(),Zn.crossVectors(i,Gt)),Zn.normalize(),Fr.crossVectors(Gt,Zn),s[0]=Zn.x,s[4]=Fr.x,s[8]=Gt.x,s[1]=Zn.y,s[5]=Fr.y,s[9]=Gt.y,s[2]=Zn.z,s[6]=Fr.z,s[10]=Gt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],u=i[5],d=i[9],m=i[13],g=i[2],_=i[6],p=i[10],f=i[14],w=i[3],M=i[7],v=i[11],A=i[15],C=s[0],I=s[4],P=s[8],y=s[12],b=s[1],D=s[5],O=s[9],H=s[13],Y=s[2],T=s[6],U=s[10],V=s[14],k=s[3],te=s[7],oe=s[11],de=s[15];return r[0]=a*C+o*b+c*Y+l*k,r[4]=a*I+o*D+c*T+l*te,r[8]=a*P+o*O+c*U+l*oe,r[12]=a*y+o*H+c*V+l*de,r[1]=h*C+u*b+d*Y+m*k,r[5]=h*I+u*D+d*T+m*te,r[9]=h*P+u*O+d*U+m*oe,r[13]=h*y+u*H+d*V+m*de,r[2]=g*C+_*b+p*Y+f*k,r[6]=g*I+_*D+p*T+f*te,r[10]=g*P+_*O+p*U+f*oe,r[14]=g*y+_*H+p*V+f*de,r[3]=w*C+M*b+v*Y+A*k,r[7]=w*I+M*D+v*T+A*te,r[11]=w*P+M*O+v*U+A*oe,r[15]=w*y+M*H+v*V+A*de,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],m=e[14],g=e[3],_=e[7],p=e[11],f=e[15];return g*(+r*c*u-s*l*u-r*o*d+i*l*d+s*o*m-i*c*m)+_*(+t*c*m-t*l*d+r*a*d-s*a*m+s*l*h-r*c*h)+p*(+t*l*u-t*o*m-r*a*u+i*a*m+r*o*h-i*l*h)+f*(-s*o*h-t*c*u+t*o*d+s*a*u-i*a*d+i*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],m=e[11],g=e[12],_=e[13],p=e[14],f=e[15],w=u*p*l-_*d*l+_*c*m-o*p*m-u*c*f+o*d*f,M=g*d*l-h*p*l-g*c*m+a*p*m+h*c*f-a*d*f,v=h*_*l-g*u*l+g*o*m-a*_*m-h*o*f+a*u*f,A=g*u*c-h*_*c-g*o*d+a*_*d+h*o*p-a*u*p,C=t*w+i*M+s*v+r*A;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/C;return e[0]=w*I,e[1]=(_*d*r-u*p*r-_*s*m+i*p*m+u*s*f-i*d*f)*I,e[2]=(o*p*r-_*c*r+_*s*l-i*p*l-o*s*f+i*c*f)*I,e[3]=(u*c*r-o*d*r-u*s*l+i*d*l+o*s*m-i*c*m)*I,e[4]=M*I,e[5]=(h*p*r-g*d*r+g*s*m-t*p*m-h*s*f+t*d*f)*I,e[6]=(g*c*r-a*p*r-g*s*l+t*p*l+a*s*f-t*c*f)*I,e[7]=(a*d*r-h*c*r+h*s*l-t*d*l-a*s*m+t*c*m)*I,e[8]=v*I,e[9]=(g*u*r-h*_*r-g*i*m+t*_*m+h*i*f-t*u*f)*I,e[10]=(a*_*r-g*o*r+g*i*l-t*_*l-a*i*f+t*o*f)*I,e[11]=(h*o*r-a*u*r-h*i*l+t*u*l+a*i*m-t*o*m)*I,e[12]=A*I,e[13]=(h*_*s-g*u*s+g*i*d-t*_*d-h*i*p+t*u*p)*I,e[14]=(g*o*s-a*_*s-g*i*c+t*_*c+a*i*p-t*o*p)*I,e[15]=(a*u*s-h*o*s+h*i*c-t*u*c-a*i*d+t*o*d)*I,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+i,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+i,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,d=r*l,m=r*h,g=r*u,_=a*h,p=a*u,f=o*u,w=c*l,M=c*h,v=c*u,A=i.x,C=i.y,I=i.z;return s[0]=(1-(_+f))*A,s[1]=(m+v)*A,s[2]=(g-M)*A,s[3]=0,s[4]=(m-v)*C,s[5]=(1-(d+f))*C,s[6]=(p+w)*C,s[7]=0,s[8]=(g+M)*I,s[9]=(p-w)*I,s[10]=(1-(d+_))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=Wi.set(s[0],s[1],s[2]).length(),a=Wi.set(s[4],s[5],s[6]).length(),o=Wi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],ln.copy(this);let l=1/r,h=1/a,u=1/o;return ln.elements[0]*=l,ln.elements[1]*=l,ln.elements[2]*=l,ln.elements[4]*=h,ln.elements[5]*=h,ln.elements[6]*=h,ln.elements[8]*=u,ln.elements[9]*=u,ln.elements[10]*=u,t.setFromRotationMatrix(ln),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=hn,c=!1){let l=this.elements,h=2*r/(t-e),u=2*r/(i-s),d=(t+e)/(t-e),m=(i+s)/(i-s),g,_;if(c)g=r/(a-r),_=a*r/(a-r);else if(o===hn)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Ns)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=hn,c=!1){let l=this.elements,h=2/(t-e),u=2/(i-s),d=-(t+e)/(t-e),m=-(i+s)/(i-s),g,_;if(c)g=1/(a-r),_=a/(a-r);else if(o===hn)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===Ns)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Wi=new B,ln=new ht,Kf=new B(0,0,0),Jf=new B(1,1,1),Zn=new B,Fr=new B,Gt=new B,Gc=new ht,Wc=new tn,fn=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ge(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ge(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Gc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wc.setFromEuler(this),this.setFromQuaternion(Wc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};fn.DEFAULT_ORDER="XYZ";var ss=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},jf=0,Xc=new B,Xi=new tn,In=new ht,Or=new B,Cs=new B,Qf=new B,ed=new tn,qc=new B(1,0,0),Yc=new B(0,1,0),Zc=new B(0,0,1),$c={type:"added"},td={type:"removed"},qi={type:"childadded",child:null},Ko={type:"childremoved",child:null},bt=class n extends xn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jf++}),this.uuid=ps(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new B,t=new fn,i=new tn,s=new B(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ht},normalMatrix:{value:new Be}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ss,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xi.setFromAxisAngle(e,t),this.quaternion.multiply(Xi),this}rotateOnWorldAxis(e,t){return Xi.setFromAxisAngle(e,t),this.quaternion.premultiply(Xi),this}rotateX(e){return this.rotateOnAxis(qc,e)}rotateY(e){return this.rotateOnAxis(Yc,e)}rotateZ(e){return this.rotateOnAxis(Zc,e)}translateOnAxis(e,t){return Xc.copy(e).applyQuaternion(this.quaternion),this.position.add(Xc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qc,e)}translateY(e){return this.translateOnAxis(Yc,e)}translateZ(e){return this.translateOnAxis(Zc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(In.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Or.copy(e):Or.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?In.lookAt(Cs,Or,this.up):In.lookAt(Or,Cs,this.up),this.quaternion.setFromRotationMatrix(In),s&&(In.extractRotation(s.matrixWorld),Xi.setFromRotationMatrix(In),this.quaternion.premultiply(Xi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($c),qi.child=e,this.dispatchEvent(qi),qi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(td),Ko.child=e,this.dispatchEvent(Ko),Ko.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),In.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),In.multiply(e.parent.matrixWorld)),e.applyMatrix4(In),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($c),qi.child=e,this.dispatchEvent(qi),qi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,e,Qf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,ed,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};bt.DEFAULT_UP=new B(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var cn=new B,Pn=new B,Jo=new B,Dn=new B,Yi=new B,Zi=new B,Kc=new B,jo=new B,Qo=new B,el=new B,tl=new ut,nl=new ut,il=new ut,Jn=class n{constructor(e=new B,t=new B,i=new B){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),cn.subVectors(e,t),s.cross(cn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){cn.subVectors(s,t),Pn.subVectors(i,t),Jo.subVectors(e,t);let a=cn.dot(cn),o=cn.dot(Pn),c=cn.dot(Jo),l=Pn.dot(Pn),h=Pn.dot(Jo),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,m=(l*c-o*h)*d,g=(a*h-o*c)*d;return r.set(1-m-g,g,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Dn)===null?!1:Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getInterpolation(e,t,i,s,r,a,o,c){return this.getBarycoord(e,t,i,s,Dn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Dn.x),c.addScaledVector(a,Dn.y),c.addScaledVector(o,Dn.z),c)}static getInterpolatedAttribute(e,t,i,s,r,a){return tl.setScalar(0),nl.setScalar(0),il.setScalar(0),tl.fromBufferAttribute(e,t),nl.fromBufferAttribute(e,i),il.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(tl,r.x),a.addScaledVector(nl,r.y),a.addScaledVector(il,r.z),a}static isFrontFacing(e,t,i,s){return cn.subVectors(i,t),Pn.subVectors(e,t),cn.cross(Pn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return cn.subVectors(this.c,this.b),Pn.subVectors(this.a,this.b),cn.cross(Pn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;Yi.subVectors(s,i),Zi.subVectors(r,i),jo.subVectors(e,i);let c=Yi.dot(jo),l=Zi.dot(jo);if(c<=0&&l<=0)return t.copy(i);Qo.subVectors(e,s);let h=Yi.dot(Qo),u=Zi.dot(Qo);if(h>=0&&u<=h)return t.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(i).addScaledVector(Yi,a);el.subVectors(e,r);let m=Yi.dot(el),g=Zi.dot(el);if(g>=0&&m<=g)return t.copy(r);let _=m*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(i).addScaledVector(Zi,o);let p=h*g-m*u;if(p<=0&&u-h>=0&&m-g>=0)return Kc.subVectors(r,s),o=(u-h)/(u-h+(m-g)),t.copy(s).addScaledVector(Kc,o);let f=1/(p+_+d);return a=_*f,o=d*f,t.copy(i).addScaledVector(Yi,a).addScaledVector(Zi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Jh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$n={h:0,s:0,l:0},Br={h:0,s:0,l:0};function sl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var He=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ze.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Ze.workingColorSpace){if(e=Ol(e,1),t=Ge(t,0,1),i=Ge(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=sl(a,r,e+1/3),this.g=sl(a,r,e),this.b=sl(a,r,e-1/3)}return Ze.colorSpaceToWorking(this,s),this}setStyle(e,t=Ut){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ut){let i=Jh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Un(e.r),this.g=Un(e.g),this.b=Un(e.b),this}copyLinearToSRGB(e){return this.r=Qi(e.r),this.g=Qi(e.g),this.b=Qi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ut){return Ze.workingToColorSpace(At.copy(this),e),Math.round(Ge(At.r*255,0,255))*65536+Math.round(Ge(At.g*255,0,255))*256+Math.round(Ge(At.b*255,0,255))}getHexString(e=Ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.workingToColorSpace(At.copy(this),t);let i=At.r,s=At.g,r=At.b,a=Math.max(i,s,r),o=Math.min(i,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case i:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-i)/u+2;break;case r:c=(i-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Ze.workingColorSpace){return Ze.workingToColorSpace(At.copy(this),t),e.r=At.r,e.g=At.g,e.b=At.b,e}getStyle(e=Ut){Ze.workingToColorSpace(At.copy(this),e);let t=At.r,i=At.g,s=At.b;return e!==Ut?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL($n),this.setHSL($n.h+e,$n.s+t,$n.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL($n),e.getHSL(Br);let i=Ds($n.h,Br.h,t),s=Ds($n.s,Br.s,t),r=Ds($n.l,Br.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},At=new He;He.NAMES=Jh;var nd=0,yn=class extends xn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nd++}),this.uuid=ps(),this.name="",this.type="Material",this.blending=vi,this.side=Nn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jr,this.blendDst=Qr,this.blendEquation=Qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=yi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xi,this.stencilZFail=xi,this.stencilZPass=xi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==vi&&(i.blending=this.blending),this.side!==Nn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==jr&&(i.blendSrc=this.blendSrc),this.blendDst!==Qr&&(i.blendDst=this.blendDst),this.blendEquation!==Qn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==yi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==dl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==xi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==xi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},bi=class extends yn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.combine=wl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var gt=new B,kr=new Ue,id=0,Xt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:id++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=pl,this.updateRanges=[],this.gpuType=bn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)kr.fromBufferAttribute(this,t),kr.applyMatrix3(e),this.setXY(t,kr.x,kr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ji(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Lt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ji(t,this.array)),t}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ji(t,this.array)),t}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ji(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ji(t,this.array)),t}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array),s=Lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),i=Lt(i,this.array),s=Lt(s,this.array),r=Lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==pl&&(e.usage=this.usage),e}};var Bs=class extends Xt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var ks=class extends Xt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Rt=class extends Xt{constructor(e,t,i){super(new Float32Array(e),t,i)}},sd=0,jt=new ht,rl=new bt,$i=new B,Wt=new ei,Rs=new ei,St=new B,nn=class n extends xn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sd++}),this.uuid=ps(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(kl(e)?ks:Bs)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Be().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jt.makeRotationFromQuaternion(e),this.applyMatrix4(jt),this}rotateX(e){return jt.makeRotationX(e),this.applyMatrix4(jt),this}rotateY(e){return jt.makeRotationY(e),this.applyMatrix4(jt),this}rotateZ(e){return jt.makeRotationZ(e),this.applyMatrix4(jt),this}translate(e,t,i){return jt.makeTranslation(e,t,i),this.applyMatrix4(jt),this}scale(e,t,i){return jt.makeScale(e,t,i),this.applyMatrix4(jt),this}lookAt(e){return rl.lookAt(e),rl.updateMatrix(),this.applyMatrix4(rl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($i).negate(),this.translate($i.x,$i.y,$i.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Rt(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ei);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Wt.setFromBufferAttribute(r),this.morphTargetsRelative?(St.addVectors(this.boundingBox.min,Wt.min),this.boundingBox.expandByPoint(St),St.addVectors(this.boundingBox.max,Wt.max),this.boundingBox.expandByPoint(St)):(this.boundingBox.expandByPoint(Wt.min),this.boundingBox.expandByPoint(Wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Si);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){let i=this.boundingSphere.center;if(Wt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Rs.setFromBufferAttribute(o),this.morphTargetsRelative?(St.addVectors(Wt.min,Rs.min),Wt.expandByPoint(St),St.addVectors(Wt.max,Rs.max),Wt.expandByPoint(St)):(Wt.expandByPoint(Rs.min),Wt.expandByPoint(Rs.max))}Wt.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)St.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(St));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)St.fromBufferAttribute(o,l),c&&($i.fromBufferAttribute(e,l),St.add($i)),s=Math.max(s,i.distanceToSquared(St))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xt(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let P=0;P<i.count;P++)o[P]=new B,c[P]=new B;let l=new B,h=new B,u=new B,d=new Ue,m=new Ue,g=new Ue,_=new B,p=new B;function f(P,y,b){l.fromBufferAttribute(i,P),h.fromBufferAttribute(i,y),u.fromBufferAttribute(i,b),d.fromBufferAttribute(r,P),m.fromBufferAttribute(r,y),g.fromBufferAttribute(r,b),h.sub(l),u.sub(l),m.sub(d),g.sub(d);let D=1/(m.x*g.y-g.x*m.y);isFinite(D)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-m.y).multiplyScalar(D),p.copy(u).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(D),o[P].add(_),o[y].add(_),o[b].add(_),c[P].add(p),c[y].add(p),c[b].add(p))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let P=0,y=w.length;P<y;++P){let b=w[P],D=b.start,O=b.count;for(let H=D,Y=D+O;H<Y;H+=3)f(e.getX(H+0),e.getX(H+1),e.getX(H+2))}let M=new B,v=new B,A=new B,C=new B;function I(P){A.fromBufferAttribute(s,P),C.copy(A);let y=o[P];M.copy(y),M.sub(A.multiplyScalar(A.dot(y))).normalize(),v.crossVectors(C,y);let D=v.dot(c[P])<0?-1:1;a.setXYZW(P,M.x,M.y,M.z,D)}for(let P=0,y=w.length;P<y;++P){let b=w[P],D=b.start,O=b.count;for(let H=D,Y=D+O;H<Y;H+=3)I(e.getX(H+0)),I(e.getX(H+1)),I(e.getX(H+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Xt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);let s=new B,r=new B,a=new B,o=new B,c=new B,l=new B,h=new B,u=new B;if(e)for(let d=0,m=e.count;d<m;d+=3){let g=e.getX(d+0),_=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,p),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,p),o.add(h),c.add(h),l.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,m=t.count;d<m;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)St.fromBufferAttribute(e,t),St.normalize(),e.setXYZ(t,St.x,St.y,St.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),m=0,g=0;for(let _=0,p=c.length;_<p;_++){o.isInterleavedBufferAttribute?m=c[_]*o.data.stride+o.offset:m=c[_]*h;for(let f=0;f<h;f++)d[g++]=l[m++]}return new Xt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,i);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],m=e(d,i);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let m=l[u];h.push(m.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Jc=new ht,gi=new ti,zr=new Si,jc=new B,Vr=new B,Hr=new B,Gr=new B,al=new B,Wr=new B,Qc=new B,Xr=new B,Nt=class extends bt{constructor(e=new nn,t=new bi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Wr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(al.fromBufferAttribute(u,e),a?Wr.addScaledVector(al,h):Wr.addScaledVector(al.sub(t),h))}t.add(Wr)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),zr.copy(i.boundingSphere),zr.applyMatrix4(r),gi.copy(e.ray).recast(e.near),!(zr.containsPoint(gi.origin)===!1&&(gi.intersectSphere(zr,jc)===null||gi.origin.distanceToSquared(jc)>(e.far-e.near)**2))&&(Jc.copy(r).invert(),gi.copy(e.ray).applyMatrix4(Jc),!(i.boundingBox!==null&&gi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,gi)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){let p=d[g],f=a[p.materialIndex],w=Math.max(p.start,m.start),M=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let v=w,A=M;v<A;v+=3){let C=o.getX(v),I=o.getX(v+1),P=o.getX(v+2);s=qr(this,f,e,i,l,h,u,C,I,P),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let p=g,f=_;p<f;p+=3){let w=o.getX(p),M=o.getX(p+1),v=o.getX(p+2);s=qr(this,a,e,i,l,h,u,w,M,v),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){let p=d[g],f=a[p.materialIndex],w=Math.max(p.start,m.start),M=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let v=w,A=M;v<A;v+=3){let C=v,I=v+1,P=v+2;s=qr(this,f,e,i,l,h,u,C,I,P),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,m.start),_=Math.min(c.count,m.start+m.count);for(let p=g,f=_;p<f;p+=3){let w=p,M=p+1,v=p+2;s=qr(this,a,e,i,l,h,u,w,M,v),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function rd(n,e,t,i,s,r,a,o){let c;if(e.side===Ft?c=i.intersectTriangle(a,r,s,!0,o):c=i.intersectTriangle(s,r,a,e.side===Nn,o),c===null)return null;Xr.copy(o),Xr.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Xr);return l<t.near||l>t.far?null:{distance:l,point:Xr.clone(),object:n}}function qr(n,e,t,i,s,r,a,o,c,l){n.getVertexPosition(o,Vr),n.getVertexPosition(c,Hr),n.getVertexPosition(l,Gr);let h=rd(n,e,t,i,Vr,Hr,Gr,Qc);if(h){let u=new B;Jn.getBarycoord(Qc,Vr,Hr,Gr,u),s&&(h.uv=Jn.getInterpolatedAttribute(s,o,c,l,u,new Ue)),r&&(h.uv1=Jn.getInterpolatedAttribute(r,o,c,l,u,new Ue)),a&&(h.normal=Jn.getInterpolatedAttribute(a,o,c,l,u,new B),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new B,materialIndex:0};Jn.getNormal(Vr,Hr,Gr,d.normal),h.face=d,h.barycoord=u}return h}var rs=class n extends nn{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,m=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Rt(l,3)),this.setAttribute("normal",new Rt(h,3)),this.setAttribute("uv",new Rt(u,2));function g(_,p,f,w,M,v,A,C,I,P,y){let b=v/I,D=A/P,O=v/2,H=A/2,Y=C/2,T=I+1,U=P+1,V=0,k=0,te=new B;for(let oe=0;oe<U;oe++){let de=oe*D-H;for(let Ne=0;Ne<T;Ne++){let Ye=Ne*b-O;te[_]=Ye*w,te[p]=de*M,te[f]=Y,l.push(te.x,te.y,te.z),te[_]=0,te[p]=0,te[f]=C>0?1:-1,h.push(te.x,te.y,te.z),u.push(Ne/I),u.push(1-oe/P),V+=1}}for(let oe=0;oe<P;oe++)for(let de=0;de<I;de++){let Ne=d+de+T*oe,Ye=d+de+T*(oe+1),qe=d+(de+1)+T*(oe+1),Ie=d+(de+1)+T*oe;c.push(Ne,Ye,Ie),c.push(Ye,qe,Ie),k+=6}o.addGroup(m,k,y),m+=k,d+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ci(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function It(n){let e={};for(let t=0;t<n.length;t++){let i=Ci(n[t]);for(let s in i)e[s]=i[s]}return e}function ad(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function zl(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}var jh={clone:Ci,merge:It},od=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ld=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,dn=class extends yn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=od,this.fragmentShader=ld,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ci(e.uniforms),this.uniformsGroups=ad(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},zs=class extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=hn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Kn=new B,eh=new Ue,th=new Ue,Ct=class extends zs{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ts*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ps*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ts*2*Math.atan(Math.tan(Ps*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Kn.x,Kn.y).multiplyScalar(-e/Kn.z),Kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Kn.x,Kn.y).multiplyScalar(-e/Kn.z)}getViewSize(e,t){return this.getViewBounds(e,eh,th),t.subVectors(th,eh)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ps*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*i/l,s*=a.width/c,i*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ki=-90,Ji=1,aa=class extends bt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ct(Ki,Ji,e,t);s.layers=this.layers,this.add(s);let r=new Ct(Ki,Ji,e,t);r.layers=this.layers,this.add(r);let a=new Ct(Ki,Ji,e,t);a.layers=this.layers,this.add(a);let o=new Ct(Ki,Ji,e,t);o.layers=this.layers,this.add(o);let c=new Ct(Ki,Ji,e,t);c.layers=this.layers,this.add(c);let l=new Ct(Ki,Ji,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===hn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ns)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,c),e.setRenderTarget(i,4,s),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,d,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Vs=class extends qt{constructor(e=[],t=Ti,i,s,r,a,o,c,l,h){super(e,t,i,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},oa=class extends vn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Vs(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new rs(5,5,5),r=new dn({name:"CubemapFromEquirect",uniforms:Ci(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ft,blending:Fn});r.uniforms.tEquirect.value=t;let a=new Nt(s,r),o=t.minFilter;return t.minFilter===ri&&(t.minFilter=un),new aa(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}},Ln=class extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}},cd={type:"move"},as=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ln,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ln,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ln,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let _ of e.hand.values()){let p=t.getJointPose(_,i),f=this._getHandJoint(l,_);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,g=.005;l.inputState.pinching&&d>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(cd)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Ln;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}};var Hs=class extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fn,this.environmentIntensity=1,this.environmentRotation=new fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var ol=new B,hd=new B,ud=new Be,Qt=class{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=ol.subVectors(i,t).cross(hd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(ol),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||ud.getNormalMatrix(e),s=this.coplanarPoint(ol).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},_i=new Si,fd=new Ue(.5,.5),Yr=new B,os=class{constructor(e=new Qt,t=new Qt,i=new Qt,s=new Qt,r=new Qt,a=new Qt){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=hn,i=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],m=r[7],g=r[8],_=r[9],p=r[10],f=r[11],w=r[12],M=r[13],v=r[14],A=r[15];if(s[0].setComponents(l-a,m-h,f-g,A-w).normalize(),s[1].setComponents(l+a,m+h,f+g,A+w).normalize(),s[2].setComponents(l+o,m+u,f+_,A+M).normalize(),s[3].setComponents(l-o,m-u,f-_,A-M).normalize(),i)s[4].setComponents(c,d,p,v).normalize(),s[5].setComponents(l-c,m-d,f-p,A-v).normalize();else if(s[4].setComponents(l-c,m-d,f-p,A-v).normalize(),t===hn)s[5].setComponents(l+c,m+d,f+p,A+v).normalize();else if(t===Ns)s[5].setComponents(c,d,p,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_i.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_i.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_i)}intersectsSprite(e){_i.center.set(0,0,0);let t=fd.distanceTo(e.center);return _i.radius=.7071067811865476+t,_i.applyMatrix4(e.matrixWorld),this.intersectsSphere(_i)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Yr.x=s.normal.x>0?e.max.x:e.min.x,Yr.y=s.normal.y>0?e.max.y:e.min.y,Yr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Yr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Gs=class extends yn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},la=new B,ca=new B,nh=new ht,Is=new ti,Zr=new Si,ll=new B,ih=new B,ha=class extends bt{constructor(e=new nn,t=new Gs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)la.fromBufferAttribute(t,s-1),ca.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=la.distanceTo(ca);e.setAttribute("lineDistance",new Rt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Zr.copy(i.boundingSphere),Zr.applyMatrix4(s),Zr.radius+=r,e.ray.intersectsSphere(Zr)===!1)return;nh.copy(s).invert(),Is.copy(e.ray).applyMatrix4(nh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){let m=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=m,p=g-1;_<p;_+=l){let f=h.getX(_),w=h.getX(_+1),M=$r(this,e,Is,c,f,w,_);M&&t.push(M)}if(this.isLineLoop){let _=h.getX(g-1),p=h.getX(m),f=$r(this,e,Is,c,_,p,g-1);f&&t.push(f)}}else{let m=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let _=m,p=g-1;_<p;_+=l){let f=$r(this,e,Is,c,_,_+1,_);f&&t.push(f)}if(this.isLineLoop){let _=$r(this,e,Is,c,g-1,m,g-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function $r(n,e,t,i,s,r,a){let o=n.geometry.attributes.position;if(la.fromBufferAttribute(o,s),ca.fromBufferAttribute(o,r),t.distanceSqToSegment(la,ca,ll,ih)>i)return;ll.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(ll);if(!(l<e.near||l>e.far))return{distance:l,point:ih.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}var sh=new B,rh=new B,ua=class extends ha{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)sh.fromBufferAttribute(t,s),rh.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+sh.distanceTo(rh);e.setAttribute("lineDistance",new Rt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Ws=class extends qt{constructor(e,t,i=ai,s,r,a,o=en,c=en,l,h=es,u=1){if(h!==es&&h!==ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,a,o,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new is(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Xs=class extends qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var wi=class n extends nn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),c=Math.floor(s),l=o+1,h=c+1,u=e/o,d=t/c,m=[],g=[],_=[],p=[];for(let f=0;f<h;f++){let w=f*d-a;for(let M=0;M<l;M++){let v=M*u-r;g.push(v,-w,0),_.push(0,0,1),p.push(M/o),p.push(1-f/c)}}for(let f=0;f<c;f++)for(let w=0;w<o;w++){let M=w+l*f,v=w+l*(f+1),A=w+1+l*(f+1),C=w+1+l*f;m.push(M,v,C),m.push(v,A,C)}this.setIndex(m),this.setAttribute("position",new Rt(g,3)),this.setAttribute("normal",new Rt(_,3)),this.setAttribute("uv",new Rt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var qs=class extends yn{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new He(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};var Ys=class extends yn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ul,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var fa=class extends yn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},da=class extends yn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Kr(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function dd(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Ei=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},pa=class extends Ei{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:hl,endingEnd:hl}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case ul:r=e,o=2*t-i;break;case fl:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case ul:a=e,c=2*i-t;break;case fl:a=1,c=i+s[1]-s[0];break;default:a=e-1,c=t}let l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,m=this._weightNext,g=(i-t)/(s-t),_=g*g,p=_*g,f=-d*p+2*d*_-d*g,w=(1+d)*p+(-1.5-2*d)*_+(-.5+d)*g+1,M=(-1-m)*p+(1.5+m)*_+.5*g,v=m*p-m*_;for(let A=0;A!==o;++A)r[A]=f*a[h+A]+w*a[l+A]+M*a[c+A]+v*a[u+A];return r}},ma=class extends Ei{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(i-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}},ga=class extends Ei{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Yt=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Kr(t,this.TimeBufferType),this.values=Kr(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Kr(e.times,Array),values:Kr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new ga(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ma(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new pa(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ls:t=this.InterpolantFactoryMethodDiscrete;break;case na:t=this.InterpolantFactoryMethodLinear;break;case Jr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ls;case this.InterpolantFactoryMethodLinear:return na;case this.InterpolantFactoryMethodSmooth:return Jr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=i[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&dd(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Jr,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{let u=o*i,d=u-i,m=u+i;for(let g=0;g!==i;++g){let _=t[u+g];if(_!==t[d+g]||_!==t[m+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let u=o*i,d=a*i;for(let m=0;m!==i;++m)t[d+m]=t[u+m]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,c=a*i,l=0;l!==i;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Yt.prototype.ValueTypeName="";Yt.prototype.TimeBufferType=Float32Array;Yt.prototype.ValueBufferType=Float32Array;Yt.prototype.DefaultInterpolation=na;var ni=class extends Yt{constructor(e,t,i){super(e,t,i)}};ni.prototype.ValueTypeName="bool";ni.prototype.ValueBufferType=Array;ni.prototype.DefaultInterpolation=Ls;ni.prototype.InterpolantFactoryMethodLinear=void 0;ni.prototype.InterpolantFactoryMethodSmooth=void 0;var _a=class extends Yt{constructor(e,t,i,s){super(e,t,i,s)}};_a.prototype.ValueTypeName="color";var xa=class extends Yt{constructor(e,t,i,s){super(e,t,i,s)}};xa.prototype.ValueTypeName="number";var va=class extends Ei{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-t)/(s-t),l=e*o;for(let h=l+o;l!==h;l+=4)tn.slerpFlat(r,0,a,l-o,a,l,c);return r}},Zs=class extends Yt{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new va(this.times,this.values,this.getValueSize(),e)}};Zs.prototype.ValueTypeName="quaternion";Zs.prototype.InterpolantFactoryMethodSmooth=void 0;var ii=class extends Yt{constructor(e,t,i){super(e,t,i)}};ii.prototype.ValueTypeName="string";ii.prototype.ValueBufferType=Array;ii.prototype.DefaultInterpolation=Ls;ii.prototype.InterpolantFactoryMethodLinear=void 0;ii.prototype.InterpolantFactoryMethodSmooth=void 0;var ya=class extends Yt{constructor(e,t,i,s){super(e,t,i,s)}};ya.prototype.ValueTypeName="vector";var Ma=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let m=l[u],g=l[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Qh=new Ma,Sa=class{constructor(e){this.manager=e!==void 0?e:Qh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Sa.DEFAULT_MATERIAL_NAME="__DEFAULT";var ls=class extends bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},$s=class extends ls{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new He(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},cl=new ht,ah=new B,oh=new B,ml=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ue(512,512),this.mapType=mn,this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new os,this._frameExtents=new Ue(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;ah.setFromMatrixPosition(e.matrixWorld),t.position.copy(ah),oh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(oh),t.updateMatrixWorld(),cl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cl,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(cl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Ks=class extends zs{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},gl=class extends ml{constructor(){super(new Ks(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Js=class extends ls{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.shadow=new gl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},js=class extends ls{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var ba=class extends Ct{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Vl="\\[\\]\\.:\\/",pd=new RegExp("["+Vl+"]","g"),Hl="[^"+Vl+"]",md="[^"+Vl.replace("\\.","")+"]",gd=/((?:WC+[\/:])*)/.source.replace("WC",Hl),_d=/(WCOD+)?/.source.replace("WCOD",md),xd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Hl),vd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Hl),yd=new RegExp("^"+gd+_d+xd+vd+"$"),Md=["material","materials","bones","map"],_l=class{constructor(e,t,i){let s=i||at.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},at=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(pd,"")}static parseTrackName(e){let t=yd.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Md.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=i(o.children);if(c)return c}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};at.Composite=_l;at.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};at.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};at.prototype.GetterByBindingType=[at.prototype._getValue_direct,at.prototype._getValue_array,at.prototype._getValue_arrayElement,at.prototype._getValue_toArray];at.prototype.SetterByBindingTypeAndVersioning=[[at.prototype._setValue_direct,at.prototype._setValue_direct_setNeedsUpdate,at.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[at.prototype._setValue_array,at.prototype._setValue_array_setNeedsUpdate,at.prototype._setValue_array_setMatrixWorldNeedsUpdate],[at.prototype._setValue_arrayElement,at.prototype._setValue_arrayElement_setNeedsUpdate,at.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[at.prototype._setValue_fromArray,at.prototype._setValue_fromArray_setNeedsUpdate,at.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Q_=new Float32Array(1);var lh=new ht,Qs=class{constructor(e,t,i=0,s=1/0){this.ray=new ti(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new ss,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return lh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(lh),this}intersectObject(e,t=!0,i=[]){return xl(e,this,i,t),i.sort(ch),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)xl(e[s],this,i,t);return i.sort(ch),i}};function ch(n,e){return n.distance-e.distance}function xl(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let a=0,o=r.length;a<o;a++)xl(r[a],e,t,!0)}}var cs=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ge(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ge(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var er=class extends ua{constructor(e=10,t=10,i=4473924,s=8947848){i=new He(i),s=new He(s);let r=t/2,a=e/t,o=e/2,c=[],l=[];for(let d=0,m=0,g=-o;d<=t;d++,g+=a){c.push(-o,0,g,o,0,g),c.push(g,0,-o,g,0,o);let _=d===r?i:s;_.toArray(l,m),m+=3,_.toArray(l,m),m+=3,_.toArray(l,m),m+=3,_.toArray(l,m),m+=3}let h=new nn;h.setAttribute("position",new Rt(c,3)),h.setAttribute("color",new Rt(l,3));let u=new Gs({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};var tr=class extends xn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Gl(n,e,t,i){let s=Sd(i);switch(t){case Il:return n*e;case Dl:return n*e/s.components*s.byteLength;case ka:return n*e/s.components*s.byteLength;case Ll:return n*e*2/s.components*s.byteLength;case za:return n*e*2/s.components*s.byteLength;case Pl:return n*e*3/s.components*s.byteLength;case sn:return n*e*4/s.components*s.byteLength;case Va:return n*e*4/s.components*s.byteLength;case sr:case rr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ar:case or:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ga:case Xa:return Math.max(n,16)*Math.max(e,8)/4;case Ha:case Wa:return Math.max(n,8)*Math.max(e,8)/2;case qa:case Ya:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Za:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case $a:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ka:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ja:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ja:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Qa:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case eo:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case to:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case no:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case io:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case so:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ro:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ao:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case oo:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case lo:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case co:case ho:case uo:return Math.ceil(n/4)*Math.ceil(e/4)*16;case fo:case po:return Math.ceil(n/4)*Math.ceil(e/4)*8;case mo:case go:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Sd(n){switch(n){case mn:case Tl:return{byteLength:1,components:1};case hs:case Al:case us:return{byteLength:2,components:1};case Oa:case Ba:return{byteLength:2,components:4};case ai:case Fa:case bn:return{byteLength:4,components:1};case Cl:case Rl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function bu(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function wd(n){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,u=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,h),o.onUploadCallback();let m;if(l instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=n.SHORT;else if(l instanceof Uint32Array)m=n.UNSIGNED_INT;else if(l instanceof Int32Array)m=n.INT;else if(l instanceof Int8Array)m=n.BYTE;else if(l instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,c,l){let h=c.array,u=c.updateRanges;if(n.bindBuffer(l,o),u.length===0)n.bufferSubData(l,0,h);else{u.sort((m,g)=>m.start-g.start);let d=0;for(let m=1;m<u.length;m++){let g=u[d],_=u[m];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let m=0,g=u.length;m<g;m++){let _=u[m];n.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Ed=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Td=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ad=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Id=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Pd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Dd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ld=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ud=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Nd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Fd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Od=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Bd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,kd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,zd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Vd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Xd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Yd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Zd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,$d=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Kd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Jd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ep=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tp="gl_FragColor = linearToOutputTexel( gl_FragColor );",np=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ip=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,sp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ap=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,op=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,lp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,up=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,dp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,_p=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,xp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,bp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,wp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ep=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Tp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ap=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ip=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Pp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Up=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Np=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Op=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Bp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Vp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Gp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Wp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Yp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Zp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$p=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Kp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,em=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,im=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,am=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,om=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,lm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,cm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,hm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,um=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,fm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,pm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_m=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,xm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,vm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Sm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,bm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,wm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Em=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Am=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Im=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Pm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Dm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Lm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Nm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Om=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,km=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Gm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Xm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,qm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ym=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,$m=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Km=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Qm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ng=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ig=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ve={alphahash_fragment:Ed,alphahash_pars_fragment:Td,alphamap_fragment:Ad,alphamap_pars_fragment:Cd,alphatest_fragment:Rd,alphatest_pars_fragment:Id,aomap_fragment:Pd,aomap_pars_fragment:Dd,batching_pars_vertex:Ld,batching_vertex:Ud,begin_vertex:Nd,beginnormal_vertex:Fd,bsdfs:Od,iridescence_fragment:Bd,bumpmap_pars_fragment:kd,clipping_planes_fragment:zd,clipping_planes_pars_fragment:Vd,clipping_planes_pars_vertex:Hd,clipping_planes_vertex:Gd,color_fragment:Wd,color_pars_fragment:Xd,color_pars_vertex:qd,color_vertex:Yd,common:Zd,cube_uv_reflection_fragment:$d,defaultnormal_vertex:Kd,displacementmap_pars_vertex:Jd,displacementmap_vertex:jd,emissivemap_fragment:Qd,emissivemap_pars_fragment:ep,colorspace_fragment:tp,colorspace_pars_fragment:np,envmap_fragment:ip,envmap_common_pars_fragment:sp,envmap_pars_fragment:rp,envmap_pars_vertex:ap,envmap_physical_pars_fragment:_p,envmap_vertex:op,fog_vertex:lp,fog_pars_vertex:cp,fog_fragment:hp,fog_pars_fragment:up,gradientmap_pars_fragment:fp,lightmap_pars_fragment:dp,lights_lambert_fragment:pp,lights_lambert_pars_fragment:mp,lights_pars_begin:gp,lights_toon_fragment:xp,lights_toon_pars_fragment:vp,lights_phong_fragment:yp,lights_phong_pars_fragment:Mp,lights_physical_fragment:Sp,lights_physical_pars_fragment:bp,lights_fragment_begin:wp,lights_fragment_maps:Ep,lights_fragment_end:Tp,logdepthbuf_fragment:Ap,logdepthbuf_pars_fragment:Cp,logdepthbuf_pars_vertex:Rp,logdepthbuf_vertex:Ip,map_fragment:Pp,map_pars_fragment:Dp,map_particle_fragment:Lp,map_particle_pars_fragment:Up,metalnessmap_fragment:Np,metalnessmap_pars_fragment:Fp,morphinstance_vertex:Op,morphcolor_vertex:Bp,morphnormal_vertex:kp,morphtarget_pars_vertex:zp,morphtarget_vertex:Vp,normal_fragment_begin:Hp,normal_fragment_maps:Gp,normal_pars_fragment:Wp,normal_pars_vertex:Xp,normal_vertex:qp,normalmap_pars_fragment:Yp,clearcoat_normal_fragment_begin:Zp,clearcoat_normal_fragment_maps:$p,clearcoat_pars_fragment:Kp,iridescence_pars_fragment:Jp,opaque_fragment:jp,packing:Qp,premultiplied_alpha_fragment:em,project_vertex:tm,dithering_fragment:nm,dithering_pars_fragment:im,roughnessmap_fragment:sm,roughnessmap_pars_fragment:rm,shadowmap_pars_fragment:am,shadowmap_pars_vertex:om,shadowmap_vertex:lm,shadowmask_pars_fragment:cm,skinbase_vertex:hm,skinning_pars_vertex:um,skinning_vertex:fm,skinnormal_vertex:dm,specularmap_fragment:pm,specularmap_pars_fragment:mm,tonemapping_fragment:gm,tonemapping_pars_fragment:_m,transmission_fragment:xm,transmission_pars_fragment:vm,uv_pars_fragment:ym,uv_pars_vertex:Mm,uv_vertex:Sm,worldpos_vertex:bm,background_vert:wm,background_frag:Em,backgroundCube_vert:Tm,backgroundCube_frag:Am,cube_vert:Cm,cube_frag:Rm,depth_vert:Im,depth_frag:Pm,distanceRGBA_vert:Dm,distanceRGBA_frag:Lm,equirect_vert:Um,equirect_frag:Nm,linedashed_vert:Fm,linedashed_frag:Om,meshbasic_vert:Bm,meshbasic_frag:km,meshlambert_vert:zm,meshlambert_frag:Vm,meshmatcap_vert:Hm,meshmatcap_frag:Gm,meshnormal_vert:Wm,meshnormal_frag:Xm,meshphong_vert:qm,meshphong_frag:Ym,meshphysical_vert:Zm,meshphysical_frag:$m,meshtoon_vert:Km,meshtoon_frag:Jm,points_vert:jm,points_frag:Qm,shadow_vert:eg,shadow_frag:tg,sprite_vert:ng,sprite_frag:ig},ce={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},wn={basic:{uniforms:It([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:It([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new He(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:It([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:It([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:It([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new He(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:It([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:It([ce.points,ce.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:It([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:It([ce.common,ce.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:It([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:It([ce.sprite,ce.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:It([ce.common,ce.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:It([ce.lights,ce.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};wn.physical={uniforms:It([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};var _o={r:0,b:0,g:0},Ri=new fn,sg=new ht;function rg(n,e,t,i,s,r,a){let o=new He(0),c=r===!0?0:1,l,h,u=null,d=0,m=null;function g(M){let v=M.isScene===!0?M.background:null;return v&&v.isTexture&&(v=(M.backgroundBlurriness>0?t:e).get(v)),v}function _(M){let v=!1,A=g(M);A===null?f(o,c):A&&A.isColor&&(f(A,1),v=!0);let C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(M,v){let A=g(v);A&&(A.isCubeTexture||A.mapping===nr)?(h===void 0&&(h=new Nt(new rs(1,1,1),new dn({name:"BackgroundCubeMaterial",uniforms:Ci(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:Ft,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,I,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ri.copy(v.backgroundRotation),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(sg.makeRotationFromEuler(Ri)),h.material.toneMapped=Ze.getTransfer(A.colorSpace)!==Qe,(u!==A||d!==A.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,u=A,d=A.version,m=n.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new Nt(new wi(2,2),new dn({name:"BackgroundMaterial",uniforms:Ci(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=Ze.getTransfer(A.colorSpace)!==Qe,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||d!==A.version||m!==n.toneMapping)&&(l.material.needsUpdate=!0,u=A,d=A.version,m=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function f(M,v){M.getRGB(_o,zl(n)),i.buffers.color.setClear(_o.r,_o.g,_o.b,v,a)}function w(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,v=1){o.set(M),c=v,f(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,f(o,c)},render:_,addToRenderList:p,dispose:w}}function ag(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,a=!1;function o(b,D,O,H,Y){let T=!1,U=u(H,O,D);r!==U&&(r=U,l(r.object)),T=m(b,H,O,Y),T&&g(b,H,O,Y),Y!==null&&e.update(Y,n.ELEMENT_ARRAY_BUFFER),(T||a)&&(a=!1,v(b,D,O,H),Y!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function c(){return n.createVertexArray()}function l(b){return n.bindVertexArray(b)}function h(b){return n.deleteVertexArray(b)}function u(b,D,O){let H=O.wireframe===!0,Y=i[b.id];Y===void 0&&(Y={},i[b.id]=Y);let T=Y[D.id];T===void 0&&(T={},Y[D.id]=T);let U=T[H];return U===void 0&&(U=d(c()),T[H]=U),U}function d(b){let D=[],O=[],H=[];for(let Y=0;Y<t;Y++)D[Y]=0,O[Y]=0,H[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:O,attributeDivisors:H,object:b,attributes:{},index:null}}function m(b,D,O,H){let Y=r.attributes,T=D.attributes,U=0,V=O.getAttributes();for(let k in V)if(V[k].location>=0){let oe=Y[k],de=T[k];if(de===void 0&&(k==="instanceMatrix"&&b.instanceMatrix&&(de=b.instanceMatrix),k==="instanceColor"&&b.instanceColor&&(de=b.instanceColor)),oe===void 0||oe.attribute!==de||de&&oe.data!==de.data)return!0;U++}return r.attributesNum!==U||r.index!==H}function g(b,D,O,H){let Y={},T=D.attributes,U=0,V=O.getAttributes();for(let k in V)if(V[k].location>=0){let oe=T[k];oe===void 0&&(k==="instanceMatrix"&&b.instanceMatrix&&(oe=b.instanceMatrix),k==="instanceColor"&&b.instanceColor&&(oe=b.instanceColor));let de={};de.attribute=oe,oe&&oe.data&&(de.data=oe.data),Y[k]=de,U++}r.attributes=Y,r.attributesNum=U,r.index=H}function _(){let b=r.newAttributes;for(let D=0,O=b.length;D<O;D++)b[D]=0}function p(b){f(b,0)}function f(b,D){let O=r.newAttributes,H=r.enabledAttributes,Y=r.attributeDivisors;O[b]=1,H[b]===0&&(n.enableVertexAttribArray(b),H[b]=1),Y[b]!==D&&(n.vertexAttribDivisor(b,D),Y[b]=D)}function w(){let b=r.newAttributes,D=r.enabledAttributes;for(let O=0,H=D.length;O<H;O++)D[O]!==b[O]&&(n.disableVertexAttribArray(O),D[O]=0)}function M(b,D,O,H,Y,T,U){U===!0?n.vertexAttribIPointer(b,D,O,Y,T):n.vertexAttribPointer(b,D,O,H,Y,T)}function v(b,D,O,H){_();let Y=H.attributes,T=O.getAttributes(),U=D.defaultAttributeValues;for(let V in T){let k=T[V];if(k.location>=0){let te=Y[V];if(te===void 0&&(V==="instanceMatrix"&&b.instanceMatrix&&(te=b.instanceMatrix),V==="instanceColor"&&b.instanceColor&&(te=b.instanceColor)),te!==void 0){let oe=te.normalized,de=te.itemSize,Ne=e.get(te);if(Ne===void 0)continue;let Ye=Ne.buffer,qe=Ne.type,Ie=Ne.bytesPerElement,K=qe===n.INT||qe===n.UNSIGNED_INT||te.gpuType===Fa;if(te.isInterleavedBufferAttribute){let Q=te.data,pe=Q.stride,Pe=te.offset;if(Q.isInstancedInterleavedBuffer){for(let Me=0;Me<k.locationSize;Me++)f(k.location+Me,Q.meshPerAttribute);b.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Me=0;Me<k.locationSize;Me++)p(k.location+Me);n.bindBuffer(n.ARRAY_BUFFER,Ye);for(let Me=0;Me<k.locationSize;Me++)M(k.location+Me,de/k.locationSize,qe,oe,pe*Ie,(Pe+de/k.locationSize*Me)*Ie,K)}else{if(te.isInstancedBufferAttribute){for(let Q=0;Q<k.locationSize;Q++)f(k.location+Q,te.meshPerAttribute);b.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Q=0;Q<k.locationSize;Q++)p(k.location+Q);n.bindBuffer(n.ARRAY_BUFFER,Ye);for(let Q=0;Q<k.locationSize;Q++)M(k.location+Q,de/k.locationSize,qe,oe,de*Ie,de/k.locationSize*Q*Ie,K)}}else if(U!==void 0){let oe=U[V];if(oe!==void 0)switch(oe.length){case 2:n.vertexAttrib2fv(k.location,oe);break;case 3:n.vertexAttrib3fv(k.location,oe);break;case 4:n.vertexAttrib4fv(k.location,oe);break;default:n.vertexAttrib1fv(k.location,oe)}}}}w()}function A(){P();for(let b in i){let D=i[b];for(let O in D){let H=D[O];for(let Y in H)h(H[Y].object),delete H[Y];delete D[O]}delete i[b]}}function C(b){if(i[b.id]===void 0)return;let D=i[b.id];for(let O in D){let H=D[O];for(let Y in H)h(H[Y].object),delete H[Y];delete D[O]}delete i[b.id]}function I(b){for(let D in i){let O=i[D];if(O[b.id]===void 0)continue;let H=O[b.id];for(let Y in H)h(H[Y].object),delete H[Y];delete O[b.id]}}function P(){y(),a=!0,r!==s&&(r=s,l(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:y,dispose:A,releaseStatesOfGeometry:C,releaseStatesOfProgram:I,initAttributes:_,enableAttribute:p,disableUnusedAttributes:w}}function og(n,e,t){let i;function s(l){i=l}function r(l,h){n.drawArrays(i,l,h),t.update(h,i,1)}function a(l,h,u){u!==0&&(n.drawArraysInstanced(i,l,h,u),t.update(h,i,u))}function o(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,u);let m=0;for(let g=0;g<u;g++)m+=h[g];t.update(m,i,1)}function c(l,h,u,d){if(u===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<l.length;g++)a(l[g],h[g],d[g]);else{m.multiDrawArraysInstancedWEBGL(i,l,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function lg(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let I=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(I){return!(I!==sn&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(I){let P=I===us&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==mn&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==bn&&!P)}function c(I){if(I==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:w,maxVaryings:M,maxFragmentUniforms:v,vertexTextures:A,maxSamples:C}}function cg(n){let e=this,t=null,i=0,s=!1,r=!1,a=new Qt,o=new Be,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let m=u.length!==0||d||i!==0||s;return s=d,i=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,m){let g=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,f=n.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):l();else{let w=r?0:i,M=w*4,v=f.clippingState||null;c.value=v,v=h(g,d,M,m);for(let A=0;A!==M;++A)v[A]=t[A];f.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,m,g){let _=u!==null?u.length:0,p=null;if(_!==0){if(p=c.value,g!==!0||p===null){let f=m+_*4,w=d.matrixWorldInverse;o.getNormalMatrix(w),(p===null||p.length<f)&&(p=new Float32Array(f));for(let M=0,v=m;M!==_;++M,v+=4)a.copy(u[M]).applyMatrix4(w,o),a.normal.toArray(p,v),p[v+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function hg(n){let e=new WeakMap;function t(a,o){return o===La?a.mapping=Ti:o===Ua&&(a.mapping=Ai),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===La||o===Ua)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new oa(c.height);return l.fromEquirectangularTexture(n,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var gs=4,eu=[.125,.215,.35,.446,.526,.582],Di=20,Wl=new Ks,tu=new He,Xl=null,ql=0,Yl=0,Zl=!1,Pi=(1+Math.sqrt(5))/2,ms=1/Pi,nu=[new B(-Pi,ms,0),new B(Pi,ms,0),new B(-ms,0,Pi),new B(ms,0,Pi),new B(0,Pi,-ms),new B(0,Pi,ms),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)],ug=new B,yo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){let{size:a=256,position:o=ug}=r;Xl=this._renderer.getRenderTarget(),ql=this._renderer.getActiveCubeFace(),Yl=this._renderer.getActiveMipmapLevel(),Zl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ru(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=su(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Xl,ql,Yl),this._renderer.xr.enabled=Zl,e.scissorTest=!1,xo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ti||e.mapping===Ai?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xl=this._renderer.getRenderTarget(),ql=this._renderer.getActiveCubeFace(),Yl=this._renderer.getActiveMipmapLevel(),Zl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:un,minFilter:un,generateMipmaps:!1,type:us,format:sn,colorSpace:Mi,depthBuffer:!1},s=iu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=iu(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=fg(r)),this._blurMaterial=dg(r,e,t)}return s}_compileMaterial(e){let t=new Nt(this._lodPlanes[0],e);this._renderer.compile(t,Wl)}_sceneToCubeUV(e,t,i,s,r){let c=new Ct(90,1,t,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,m=u.toneMapping;u.getClearColor(tu),u.toneMapping=On,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));let _=new bi({name:"PMREM.Background",side:Ft,depthWrite:!1,depthTest:!1}),p=new Nt(new rs,_),f=!1,w=e.background;w?w.isColor&&(_.color.copy(w),e.background=null,f=!0):(_.color.copy(tu),f=!0);for(let M=0;M<6;M++){let v=M%3;v===0?(c.up.set(0,l[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[M],r.y,r.z)):v===1?(c.up.set(0,0,l[M]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[M],r.z)):(c.up.set(0,l[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[M]));let A=this._cubeSize;xo(s,v*A,M>2?A:0,A,A),u.setRenderTarget(s),f&&u.render(p,c),u.render(e,c)}p.geometry.dispose(),p.material.dispose(),u.toneMapping=m,u.autoClear=d,e.background=w}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Ti||e.mapping===Ai;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ru()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=su());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Nt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;xo(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,Wl)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=nu[(s-r-1)%nu.length];this._blur(e,r-1,r,a,o)}t.autoClear=i}_blur(e,t,i,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Nt(this._lodPlanes[s],l),d=l.uniforms,m=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Di-1),_=r/g,p=isFinite(r)?1+Math.floor(h*_):Di;p>Di&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Di}`);let f=[],w=0;for(let I=0;I<Di;++I){let P=I/_,y=Math.exp(-P*P/2);f.push(y),I===0?w+=y:I<p&&(w+=2*y)}for(let I=0;I<f.length;I++)f[I]=f[I]/w;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-i;let v=this._sizeLods[s],A=3*v*(s>M-gs?s-M+gs:0),C=4*(this._cubeSize-v);xo(t,A,C,3*v,2*v),c.setRenderTarget(t),c.render(u,Wl)}};function fg(n){let e=[],t=[],i=[],s=n,r=n-gs+1+eu.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let c=1/o;a>n-gs?c=eu[a-n+gs-1]:a===0&&(c=0),i.push(c);let l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,_=3,p=2,f=1,w=new Float32Array(_*g*m),M=new Float32Array(p*g*m),v=new Float32Array(f*g*m);for(let C=0;C<m;C++){let I=C%3*2/3-1,P=C>2?0:-1,y=[I,P,0,I+2/3,P,0,I+2/3,P+1,0,I,P,0,I+2/3,P+1,0,I,P+1,0];w.set(y,_*g*C),M.set(d,p*g*C);let b=[C,C,C,C,C,C];v.set(b,f*g*C)}let A=new nn;A.setAttribute("position",new Xt(w,_)),A.setAttribute("uv",new Xt(M,p)),A.setAttribute("faceIndex",new Xt(v,f)),e.push(A),s>gs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function iu(n,e,t){let i=new vn(n,e,t);return i.texture.mapping=nr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function xo(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function dg(n,e,t){let i=new Float32Array(Di),s=new B(0,1,0);return new dn({name:"SphericalGaussianBlur",defines:{n:Di,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function su(){return new dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function ru(){return new dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function sc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function pg(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){let c=o.mapping,l=c===La||c===Ua,h=c===Ti||c===Ai;if(l||h){let u=e.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new yo(n)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{let m=o.image;return l&&m&&m.height>0||h&&m&&s(m)?(t===null&&(t=new yo(n)),u=l?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function mg(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&ns("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function gg(n,e,t,i){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete s[d.id];let m=r.get(d);m&&(e.remove(m),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let m in d)e.update(d[m],n.ARRAY_BUFFER)}function l(u){let d=[],m=u.index,g=u.attributes.position,_=0;if(m!==null){let w=m.array;_=m.version;for(let M=0,v=w.length;M<v;M+=3){let A=w[M+0],C=w[M+1],I=w[M+2];d.push(A,C,C,I,I,A)}}else if(g!==void 0){let w=g.array;_=g.version;for(let M=0,v=w.length/3-1;M<v;M+=3){let A=M+0,C=M+1,I=M+2;d.push(A,C,C,I,I,A)}}else return;let p=new(kl(d)?ks:Bs)(d,1);p.version=_;let f=r.get(u);f&&e.remove(f),r.set(u,p)}function h(u){let d=r.get(u);if(d){let m=u.index;m!==null&&d.version<m.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function _g(n,e,t){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,m){n.drawElements(i,m,r,d*a),t.update(m,i,1)}function l(d,m,g){g!==0&&(n.drawElementsInstanced(i,m,r,d*a,g),t.update(m,i,g))}function h(d,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,r,d,0,g);let p=0;for(let f=0;f<g;f++)p+=m[f];t.update(p,i,1)}function u(d,m,g,_){if(g===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<d.length;f++)l(d[f]/a,m[f],_[f]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,r,d,0,_,0,g);let f=0;for(let w=0;w<g;w++)f+=m[w]*_[w];t.update(f,i,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function xg(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function vg(n,e,t){let i=new WeakMap,s=new ut;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(o);if(d===void 0||d.count!==u){let y=function(){I.dispose(),i.delete(o),o.removeEventListener("dispose",y)};d!==void 0&&d.texture.dispose();let m=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],w=o.morphAttributes.color||[],M=0;m===!0&&(M=1),g===!0&&(M=2),_===!0&&(M=3);let v=o.attributes.position.count*M,A=1;v>e.maxTextureSize&&(A=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let C=new Float32Array(v*A*4*u),I=new Os(C,v,A,u);I.type=bn,I.needsUpdate=!0;let P=M*4;for(let b=0;b<u;b++){let D=p[b],O=f[b],H=w[b],Y=v*A*4*b;for(let T=0;T<D.count;T++){let U=T*P;m===!0&&(s.fromBufferAttribute(D,T),C[Y+U+0]=s.x,C[Y+U+1]=s.y,C[Y+U+2]=s.z,C[Y+U+3]=0),g===!0&&(s.fromBufferAttribute(O,T),C[Y+U+4]=s.x,C[Y+U+5]=s.y,C[Y+U+6]=s.z,C[Y+U+7]=0),_===!0&&(s.fromBufferAttribute(H,T),C[Y+U+8]=s.x,C[Y+U+9]=s.y,C[Y+U+10]=s.z,C[Y+U+11]=H.itemSize===4?s.w:1)}}d={count:u,texture:I,size:new Ue(v,A)},i.set(o,d),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let m=0;for(let _=0;_<l.length;_++)m+=l[_];let g=o.morphTargetsRelative?1:1-m;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function yg(n,e,t,i){let s=new WeakMap;function r(c){let l=i.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function a(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}var wu=new qt,au=new Ws(1,1),Eu=new Os,Tu=new ra,Au=new Vs,ou=[],lu=[],cu=new Float32Array(16),hu=new Float32Array(9),uu=new Float32Array(4);function xs(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=ou[s];if(r===void 0&&(r=new Float32Array(s),ou[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function xt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function vt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function So(n,e){let t=lu[e];t===void 0&&(t=new Int32Array(e),lu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Mg(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Sg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;n.uniform2fv(this.addr,e),vt(t,e)}}function bg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xt(t,e))return;n.uniform3fv(this.addr,e),vt(t,e)}}function wg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;n.uniform4fv(this.addr,e),vt(t,e)}}function Eg(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(xt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),vt(t,e)}else{if(xt(t,i))return;uu.set(i),n.uniformMatrix2fv(this.addr,!1,uu),vt(t,i)}}function Tg(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(xt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),vt(t,e)}else{if(xt(t,i))return;hu.set(i),n.uniformMatrix3fv(this.addr,!1,hu),vt(t,i)}}function Ag(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(xt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),vt(t,e)}else{if(xt(t,i))return;cu.set(i),n.uniformMatrix4fv(this.addr,!1,cu),vt(t,i)}}function Cg(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Rg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;n.uniform2iv(this.addr,e),vt(t,e)}}function Ig(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;n.uniform3iv(this.addr,e),vt(t,e)}}function Pg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;n.uniform4iv(this.addr,e),vt(t,e)}}function Dg(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Lg(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;n.uniform2uiv(this.addr,e),vt(t,e)}}function Ug(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;n.uniform3uiv(this.addr,e),vt(t,e)}}function Ng(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;n.uniform4uiv(this.addr,e),vt(t,e)}}function Fg(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(au.compareFunction=Nl,r=au):r=wu,t.setTexture2D(e||r,s)}function Og(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Tu,s)}function Bg(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Au,s)}function kg(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Eu,s)}function zg(n){switch(n){case 5126:return Mg;case 35664:return Sg;case 35665:return bg;case 35666:return wg;case 35674:return Eg;case 35675:return Tg;case 35676:return Ag;case 5124:case 35670:return Cg;case 35667:case 35671:return Rg;case 35668:case 35672:return Ig;case 35669:case 35673:return Pg;case 5125:return Dg;case 36294:return Lg;case 36295:return Ug;case 36296:return Ng;case 35678:case 36198:case 36298:case 36306:case 35682:return Fg;case 35679:case 36299:case 36307:return Og;case 35680:case 36300:case 36308:case 36293:return Bg;case 36289:case 36303:case 36311:case 36292:return kg}}function Vg(n,e){n.uniform1fv(this.addr,e)}function Hg(n,e){let t=xs(e,this.size,2);n.uniform2fv(this.addr,t)}function Gg(n,e){let t=xs(e,this.size,3);n.uniform3fv(this.addr,t)}function Wg(n,e){let t=xs(e,this.size,4);n.uniform4fv(this.addr,t)}function Xg(n,e){let t=xs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function qg(n,e){let t=xs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Yg(n,e){let t=xs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Zg(n,e){n.uniform1iv(this.addr,e)}function $g(n,e){n.uniform2iv(this.addr,e)}function Kg(n,e){n.uniform3iv(this.addr,e)}function Jg(n,e){n.uniform4iv(this.addr,e)}function jg(n,e){n.uniform1uiv(this.addr,e)}function Qg(n,e){n.uniform2uiv(this.addr,e)}function e0(n,e){n.uniform3uiv(this.addr,e)}function t0(n,e){n.uniform4uiv(this.addr,e)}function n0(n,e,t){let i=this.cache,s=e.length,r=So(t,s);xt(i,r)||(n.uniform1iv(this.addr,r),vt(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||wu,r[a])}function i0(n,e,t){let i=this.cache,s=e.length,r=So(t,s);xt(i,r)||(n.uniform1iv(this.addr,r),vt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Tu,r[a])}function s0(n,e,t){let i=this.cache,s=e.length,r=So(t,s);xt(i,r)||(n.uniform1iv(this.addr,r),vt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Au,r[a])}function r0(n,e,t){let i=this.cache,s=e.length,r=So(t,s);xt(i,r)||(n.uniform1iv(this.addr,r),vt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Eu,r[a])}function a0(n){switch(n){case 5126:return Vg;case 35664:return Hg;case 35665:return Gg;case 35666:return Wg;case 35674:return Xg;case 35675:return qg;case 35676:return Yg;case 5124:case 35670:return Zg;case 35667:case 35671:return $g;case 35668:case 35672:return Kg;case 35669:case 35673:return Jg;case 5125:return jg;case 36294:return Qg;case 36295:return e0;case 36296:return t0;case 35678:case 36198:case 36298:case 36306:case 35682:return n0;case 35679:case 36299:case 36307:return i0;case 35680:case 36300:case 36308:case 36293:return s0;case 36289:case 36303:case 36311:case 36292:return r0}}var Kl=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=zg(t.type)}},Jl=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=a0(t.type)}},jl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},$l=/(\w+)(\])?(\[|\.)?/g;function fu(n,e){n.seq.push(e),n.map[e.id]=e}function o0(n,e,t){let i=n.name,s=i.length;for($l.lastIndex=0;;){let r=$l.exec(i),a=$l.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){fu(t,l===void 0?new Kl(o,n,e):new Jl(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new jl(o),fu(t,u)),t=u}}}var _s=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);o0(r,a,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function du(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var l0=37297,c0=0;function h0(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var pu=new Be;function u0(n){Ze._getMatrix(pu,Ze.workingColorSpace,n);let e=`mat3( ${pu.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(n)){case Us:return[e,"LinearTransferOETF"];case Qe:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function mu(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+h0(n.getShaderSource(e),o)}else return r}function f0(n,e){let t=u0(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function d0(n,e){let t;switch(e){case Dh:t="Linear";break;case Lh:t="Reinhard";break;case Uh:t="Cineon";break;case Da:t="ACESFilmic";break;case Fh:t="AgX";break;case Oh:t="Neutral";break;case Nh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var vo=new B;function p0(){Ze.getLuminanceCoefficients(vo);let n=vo.x.toFixed(4),e=vo.y.toFixed(4),t=vo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function m0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(lr).join(`
`)}function g0(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function _0(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function lr(n){return n!==""}function gu(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _u(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var x0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ql(n){return n.replace(x0,y0)}var v0=new Map;function y0(n,e){let t=Ve[e];if(t===void 0){let i=v0.get(e);if(i!==void 0)t=Ve[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ql(t)}var M0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xu(n){return n.replace(M0,S0)}function S0(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function vu(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function b0(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===yl?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===wa?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Mn&&(e="SHADOWMAP_TYPE_VSM"),e}function w0(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ti:case Ai:e="ENVMAP_TYPE_CUBE";break;case nr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function E0(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ai:e="ENVMAP_MODE_REFRACTION";break}return e}function T0(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case wl:e="ENVMAP_BLENDING_MULTIPLY";break;case Ih:e="ENVMAP_BLENDING_MIX";break;case Ph:e="ENVMAP_BLENDING_ADD";break}return e}function A0(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function C0(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=b0(t),l=w0(t),h=E0(t),u=T0(t),d=A0(t),m=m0(t),g=g0(r),_=s.createProgram(),p,f,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(lr).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(lr).join(`
`),f.length>0&&(f+=`
`)):(p=[vu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(lr).join(`
`),f=[vu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==On?"#define TONE_MAPPING":"",t.toneMapping!==On?Ve.tonemapping_pars_fragment:"",t.toneMapping!==On?d0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,f0("linearToOutputTexel",t.outputColorSpace),p0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(lr).join(`
`)),a=Ql(a),a=gu(a,t),a=_u(a,t),o=Ql(o),o=gu(o,t),o=_u(o,t),a=xu(a),o=xu(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",t.glslVersion===Fl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let M=w+p+a,v=w+f+o,A=du(s,s.VERTEX_SHADER,M),C=du(s,s.FRAGMENT_SHADER,v);s.attachShader(_,A),s.attachShader(_,C),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function I(D){if(n.debug.checkShaderErrors){let O=s.getProgramInfoLog(_)||"",H=s.getShaderInfoLog(A)||"",Y=s.getShaderInfoLog(C)||"",T=O.trim(),U=H.trim(),V=Y.trim(),k=!0,te=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(k=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,A,C);else{let oe=mu(s,A,"vertex"),de=mu(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+T+`
`+oe+`
`+de)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(U===""||V==="")&&(te=!1);te&&(D.diagnostics={runnable:k,programLog:T,vertexShader:{log:U,prefix:p},fragmentShader:{log:V,prefix:f}})}s.deleteShader(A),s.deleteShader(C),P=new _s(s,_),y=_0(s,_)}let P;this.getUniforms=function(){return P===void 0&&I(this),P};let y;this.getAttributes=function(){return y===void 0&&I(this),y};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(_,l0)),b},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=c0++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=C,this}var R0=0,ec=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new tc(e),t.set(e,i)),i}},tc=class{constructor(e){this.id=R0++,this.code=e,this.usedTimes=0}};function I0(n,e,t,i,s,r,a){let o=new ss,c=new ec,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,m=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return l.add(y),y===0?"uv":`uv${y}`}function p(y,b,D,O,H){let Y=O.fog,T=H.geometry,U=y.isMeshStandardMaterial?O.environment:null,V=(y.isMeshStandardMaterial?t:e).get(y.envMap||U),k=V&&V.mapping===nr?V.image.height:null,te=g[y.type];y.precision!==null&&(m=s.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));let oe=T.morphAttributes.position||T.morphAttributes.normal||T.morphAttributes.color,de=oe!==void 0?oe.length:0,Ne=0;T.morphAttributes.position!==void 0&&(Ne=1),T.morphAttributes.normal!==void 0&&(Ne=2),T.morphAttributes.color!==void 0&&(Ne=3);let Ye,qe,Ie,K;if(te){let Je=wn[te];Ye=Je.vertexShader,qe=Je.fragmentShader}else Ye=y.vertexShader,qe=y.fragmentShader,c.update(y),Ie=c.getVertexShaderID(y),K=c.getFragmentShaderID(y);let Q=n.getRenderTarget(),pe=n.state.buffers.depth.getReversed(),Pe=H.isInstancedMesh===!0,Me=H.isBatchedMesh===!0,We=!!y.map,_t=!!y.matcap,R=!!V,et=!!y.aoMap,Oe=!!y.lightMap,De=!!y.bumpMap,ve=!!y.normalMap,ot=!!y.displacementMap,ye=!!y.emissiveMap,ze=!!y.metalnessMap,Mt=!!y.roughnessMap,pt=y.anisotropy>0,E=y.clearcoat>0,x=y.dispersion>0,z=y.iridescence>0,J=y.sheen>0,ee=y.transmission>0,$=pt&&!!y.anisotropyMap,Ee=E&&!!y.clearcoatMap,ae=E&&!!y.clearcoatNormalMap,Se=E&&!!y.clearcoatRoughnessMap,be=z&&!!y.iridescenceMap,se=z&&!!y.iridescenceThicknessMap,fe=J&&!!y.sheenColorMap,Re=J&&!!y.sheenRoughnessMap,we=!!y.specularMap,he=!!y.specularColorMap,ke=!!y.specularIntensityMap,L=ee&&!!y.transmissionMap,re=ee&&!!y.thicknessMap,le=!!y.gradientMap,ge=!!y.alphaMap,ne=y.alphaTest>0,j=!!y.alphaHash,xe=!!y.extensions,Fe=On;y.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Fe=n.toneMapping);let st={shaderID:te,shaderType:y.type,shaderName:y.name,vertexShader:Ye,fragmentShader:qe,defines:y.defines,customVertexShaderID:Ie,customFragmentShaderID:K,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:Me,batchingColor:Me&&H._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&H.instanceColor!==null,instancingMorph:Pe&&H.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Q===null?n.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Mi,alphaToCoverage:!!y.alphaToCoverage,map:We,matcap:_t,envMap:R,envMapMode:R&&V.mapping,envMapCubeUVHeight:k,aoMap:et,lightMap:Oe,bumpMap:De,normalMap:ve,displacementMap:d&&ot,emissiveMap:ye,normalMapObjectSpace:ve&&y.normalMapType===Vh,normalMapTangentSpace:ve&&y.normalMapType===Ul,metalnessMap:ze,roughnessMap:Mt,anisotropy:pt,anisotropyMap:$,clearcoat:E,clearcoatMap:Ee,clearcoatNormalMap:ae,clearcoatRoughnessMap:Se,dispersion:x,iridescence:z,iridescenceMap:be,iridescenceThicknessMap:se,sheen:J,sheenColorMap:fe,sheenRoughnessMap:Re,specularMap:we,specularColorMap:he,specularIntensityMap:ke,transmission:ee,transmissionMap:L,thicknessMap:re,gradientMap:le,opaque:y.transparent===!1&&y.blending===vi&&y.alphaToCoverage===!1,alphaMap:ge,alphaTest:ne,alphaHash:j,combine:y.combine,mapUv:We&&_(y.map.channel),aoMapUv:et&&_(y.aoMap.channel),lightMapUv:Oe&&_(y.lightMap.channel),bumpMapUv:De&&_(y.bumpMap.channel),normalMapUv:ve&&_(y.normalMap.channel),displacementMapUv:ot&&_(y.displacementMap.channel),emissiveMapUv:ye&&_(y.emissiveMap.channel),metalnessMapUv:ze&&_(y.metalnessMap.channel),roughnessMapUv:Mt&&_(y.roughnessMap.channel),anisotropyMapUv:$&&_(y.anisotropyMap.channel),clearcoatMapUv:Ee&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:ae&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:se&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:Re&&_(y.sheenRoughnessMap.channel),specularMapUv:we&&_(y.specularMap.channel),specularColorMapUv:he&&_(y.specularColorMap.channel),specularIntensityMapUv:ke&&_(y.specularIntensityMap.channel),transmissionMapUv:L&&_(y.transmissionMap.channel),thicknessMapUv:re&&_(y.thicknessMap.channel),alphaMapUv:ge&&_(y.alphaMap.channel),vertexTangents:!!T.attributes.tangent&&(ve||pt),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!T.attributes.color&&T.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!T.attributes.uv&&(We||ge),fog:!!Y,useFog:y.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:pe,skinning:H.isSkinnedMesh===!0,morphTargets:T.morphAttributes.position!==void 0,morphNormals:T.morphAttributes.normal!==void 0,morphColors:T.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:Ne,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:Fe,decodeVideoTexture:We&&y.map.isVideoTexture===!0&&Ze.getTransfer(y.map.colorSpace)===Qe,decodeVideoTextureEmissive:ye&&y.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(y.emissiveMap.colorSpace)===Qe,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Sn,flipSided:y.side===Ft,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:xe&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&y.extensions.multiDraw===!0||Me)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return st.vertexUv1s=l.has(1),st.vertexUv2s=l.has(2),st.vertexUv3s=l.has(3),l.clear(),st}function f(y){let b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(let D in y.defines)b.push(D),b.push(y.defines[D]);return y.isRawShaderMaterial===!1&&(w(b,y),M(b,y),b.push(n.outputColorSpace)),b.push(y.customProgramCacheKey),b.join()}function w(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.anisotropyMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.numLightProbes),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function M(y,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),b.gradientMap&&o.enable(22),y.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),y.push(o.mask)}function v(y){let b=g[y.type],D;if(b){let O=wn[b];D=jh.clone(O.uniforms)}else D=y.uniforms;return D}function A(y,b){let D;for(let O=0,H=h.length;O<H;O++){let Y=h[O];if(Y.cacheKey===b){D=Y,++D.usedTimes;break}}return D===void 0&&(D=new C0(n,b,y,r),h.push(D)),D}function C(y){if(--y.usedTimes===0){let b=h.indexOf(y);h[b]=h[h.length-1],h.pop(),y.destroy()}}function I(y){c.remove(y)}function P(){c.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:v,acquireProgram:A,releaseProgram:C,releaseShaderCache:I,programs:h,dispose:P}}function P0(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,c){n.get(a)[o]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function D0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function yu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Mu(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(u,d,m,g,_,p){let f=n[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:m,groupOrder:g,renderOrder:u.renderOrder,z:_,group:p},n[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=m,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=p),e++,f}function o(u,d,m,g,_,p){let f=a(u,d,m,g,_,p);m.transmission>0?i.push(f):m.transparent===!0?s.push(f):t.push(f)}function c(u,d,m,g,_,p){let f=a(u,d,m,g,_,p);m.transmission>0?i.unshift(f):m.transparent===!0?s.unshift(f):t.unshift(f)}function l(u,d){t.length>1&&t.sort(u||D0),i.length>1&&i.sort(d||yu),s.length>1&&s.sort(d||yu)}function h(){for(let u=e,d=n.length;u<d;u++){let m=n[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function L0(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new Mu,n.set(i,[a])):s>=r.length?(a=new Mu,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function U0(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new He};break;case"SpotLight":t={position:new B,direction:new B,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new B,halfWidth:new B,halfHeight:new B};break}return n[e.id]=t,t}}}function N0(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var F0=0;function O0(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function B0(n){let e=new U0,t=N0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new B);let s=new B,r=new ht,a=new ht;function o(l){let h=0,u=0,d=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let m=0,g=0,_=0,p=0,f=0,w=0,M=0,v=0,A=0,C=0,I=0;l.sort(O0);for(let y=0,b=l.length;y<b;y++){let D=l[y],O=D.color,H=D.intensity,Y=D.distance,T=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=O.r*H,u+=O.g*H,d+=O.b*H;else if(D.isLightProbe){for(let U=0;U<9;U++)i.probe[U].addScaledVector(D.sh.coefficients[U],H);I++}else if(D.isDirectionalLight){let U=e.get(D);if(U.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let V=D.shadow,k=t.get(D);k.shadowIntensity=V.intensity,k.shadowBias=V.bias,k.shadowNormalBias=V.normalBias,k.shadowRadius=V.radius,k.shadowMapSize=V.mapSize,i.directionalShadow[m]=k,i.directionalShadowMap[m]=T,i.directionalShadowMatrix[m]=D.shadow.matrix,w++}i.directional[m]=U,m++}else if(D.isSpotLight){let U=e.get(D);U.position.setFromMatrixPosition(D.matrixWorld),U.color.copy(O).multiplyScalar(H),U.distance=Y,U.coneCos=Math.cos(D.angle),U.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),U.decay=D.decay,i.spot[_]=U;let V=D.shadow;if(D.map&&(i.spotLightMap[A]=D.map,A++,V.updateMatrices(D),D.castShadow&&C++),i.spotLightMatrix[_]=V.matrix,D.castShadow){let k=t.get(D);k.shadowIntensity=V.intensity,k.shadowBias=V.bias,k.shadowNormalBias=V.normalBias,k.shadowRadius=V.radius,k.shadowMapSize=V.mapSize,i.spotShadow[_]=k,i.spotShadowMap[_]=T,v++}_++}else if(D.isRectAreaLight){let U=e.get(D);U.color.copy(O).multiplyScalar(H),U.halfWidth.set(D.width*.5,0,0),U.halfHeight.set(0,D.height*.5,0),i.rectArea[p]=U,p++}else if(D.isPointLight){let U=e.get(D);if(U.color.copy(D.color).multiplyScalar(D.intensity),U.distance=D.distance,U.decay=D.decay,D.castShadow){let V=D.shadow,k=t.get(D);k.shadowIntensity=V.intensity,k.shadowBias=V.bias,k.shadowNormalBias=V.normalBias,k.shadowRadius=V.radius,k.shadowMapSize=V.mapSize,k.shadowCameraNear=V.camera.near,k.shadowCameraFar=V.camera.far,i.pointShadow[g]=k,i.pointShadowMap[g]=T,i.pointShadowMatrix[g]=D.shadow.matrix,M++}i.point[g]=U,g++}else if(D.isHemisphereLight){let U=e.get(D);U.skyColor.copy(D.color).multiplyScalar(H),U.groundColor.copy(D.groundColor).multiplyScalar(H),i.hemi[f]=U,f++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let P=i.hash;(P.directionalLength!==m||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==p||P.hemiLength!==f||P.numDirectionalShadows!==w||P.numPointShadows!==M||P.numSpotShadows!==v||P.numSpotMaps!==A||P.numLightProbes!==I)&&(i.directional.length=m,i.spot.length=_,i.rectArea.length=p,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=v+A-C,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=I,P.directionalLength=m,P.pointLength=g,P.spotLength=_,P.rectAreaLength=p,P.hemiLength=f,P.numDirectionalShadows=w,P.numPointShadows=M,P.numSpotShadows=v,P.numSpotMaps=A,P.numLightProbes=I,i.version=F0++)}function c(l,h){let u=0,d=0,m=0,g=0,_=0,p=h.matrixWorldInverse;for(let f=0,w=l.length;f<w;f++){let M=l[f];if(M.isDirectionalLight){let v=i.directional[u];v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),u++}else if(M.isSpotLight){let v=i.spot[m];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),m++}else if(M.isRectAreaLight){let v=i.rectArea[g];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(p),a.identity(),r.copy(M.matrixWorld),r.premultiply(p),a.extractRotation(r),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){let v=i.point[d];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(p),d++}else if(M.isHemisphereLight){let v=i.hemi[_];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(p),_++}}}return{setup:o,setupView:c,state:i}}function Su(n){let e=new B0(n),t=[],i=[];function s(h){l.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function a(h){i.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function k0(n){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Su(n),e.set(s,[o])):r>=a.length?(o=new Su(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var z0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,V0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function H0(n,e,t){let i=new os,s=new Ue,r=new Ue,a=new ut,o=new fa({depthPacking:zh}),c=new da,l={},h=t.maxTextureSize,u={[Nn]:Ft,[Ft]:Nn,[Sn]:Sn},d=new dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:z0,fragmentShader:V0}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let g=new nn;g.setAttribute("position",new Xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Nt(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yl;let f=this.type;this.render=function(C,I,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;let y=n.getRenderTarget(),b=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),O=n.state;O.setBlending(Fn),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let H=f!==Mn&&this.type===Mn,Y=f===Mn&&this.type!==Mn;for(let T=0,U=C.length;T<U;T++){let V=C[T],k=V.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let te=k.getFrameExtents();if(s.multiply(te),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/te.x),s.x=r.x*te.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/te.y),s.y=r.y*te.y,k.mapSize.y=r.y)),k.map===null||H===!0||Y===!0){let de=this.type!==Mn?{minFilter:en,magFilter:en}:{};k.map!==null&&k.map.dispose(),k.map=new vn(s.x,s.y,de),k.map.texture.name=V.name+".shadowMap",k.camera.updateProjectionMatrix()}n.setRenderTarget(k.map),n.clear();let oe=k.getViewportCount();for(let de=0;de<oe;de++){let Ne=k.getViewport(de);a.set(r.x*Ne.x,r.y*Ne.y,r.x*Ne.z,r.y*Ne.w),O.viewport(a),k.updateMatrices(V,de),i=k.getFrustum(),v(I,P,k.camera,V,this.type)}k.isPointLightShadow!==!0&&this.type===Mn&&w(k,P),k.needsUpdate=!1}f=this.type,p.needsUpdate=!1,n.setRenderTarget(y,b,D)};function w(C,I){let P=e.update(_);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new vn(s.x,s.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(I,null,P,d,_,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(I,null,P,m,_,null)}function M(C,I,P,y){let b=null,D=P.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(D!==void 0)b=D;else if(b=P.isPointLight===!0?c:o,n.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){let O=b.uuid,H=I.uuid,Y=l[O];Y===void 0&&(Y={},l[O]=Y);let T=Y[H];T===void 0&&(T=b.clone(),Y[H]=T,I.addEventListener("dispose",A)),b=T}if(b.visible=I.visible,b.wireframe=I.wireframe,y===Mn?b.side=I.shadowSide!==null?I.shadowSide:I.side:b.side=I.shadowSide!==null?I.shadowSide:u[I.side],b.alphaMap=I.alphaMap,b.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,b.map=I.map,b.clipShadows=I.clipShadows,b.clippingPlanes=I.clippingPlanes,b.clipIntersection=I.clipIntersection,b.displacementMap=I.displacementMap,b.displacementScale=I.displacementScale,b.displacementBias=I.displacementBias,b.wireframeLinewidth=I.wireframeLinewidth,b.linewidth=I.linewidth,P.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let O=n.properties.get(b);O.light=P}return b}function v(C,I,P,y,b){if(C.visible===!1)return;if(C.layers.test(I.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&b===Mn)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,C.matrixWorld);let H=e.update(C),Y=C.material;if(Array.isArray(Y)){let T=H.groups;for(let U=0,V=T.length;U<V;U++){let k=T[U],te=Y[k.materialIndex];if(te&&te.visible){let oe=M(C,te,y,b);C.onBeforeShadow(n,C,I,P,H,oe,k),n.renderBufferDirect(P,null,H,oe,C,k),C.onAfterShadow(n,C,I,P,H,oe,k)}}}else if(Y.visible){let T=M(C,Y,y,b);C.onBeforeShadow(n,C,I,P,H,T,null),n.renderBufferDirect(P,null,H,T,C,null),C.onAfterShadow(n,C,I,P,H,T,null)}}let O=C.children;for(let H=0,Y=O.length;H<Y;H++)v(O[H],I,P,y,b)}function A(C){C.target.removeEventListener("dispose",A);for(let P in l){let y=l[P],b=C.target.uuid;b in y&&(y[b].dispose(),delete y[b])}}}var G0={[Ea]:Ta,[Aa]:Ia,[Ca]:Pa,[yi]:Ra,[Ta]:Ea,[Ia]:Aa,[Pa]:Ca,[Ra]:yi};function W0(n,e){function t(){let L=!1,re=new ut,le=null,ge=new ut(0,0,0,0);return{setMask:function(ne){le!==ne&&!L&&(n.colorMask(ne,ne,ne,ne),le=ne)},setLocked:function(ne){L=ne},setClear:function(ne,j,xe,Fe,st){st===!0&&(ne*=Fe,j*=Fe,xe*=Fe),re.set(ne,j,xe,Fe),ge.equals(re)===!1&&(n.clearColor(ne,j,xe,Fe),ge.copy(re))},reset:function(){L=!1,le=null,ge.set(-1,0,0,0)}}}function i(){let L=!1,re=!1,le=null,ge=null,ne=null;return{setReversed:function(j){if(re!==j){let xe=e.get("EXT_clip_control");j?xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.ZERO_TO_ONE_EXT):xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.NEGATIVE_ONE_TO_ONE_EXT),re=j;let Fe=ne;ne=null,this.setClear(Fe)}},getReversed:function(){return re},setTest:function(j){j?Q(n.DEPTH_TEST):pe(n.DEPTH_TEST)},setMask:function(j){le!==j&&!L&&(n.depthMask(j),le=j)},setFunc:function(j){if(re&&(j=G0[j]),ge!==j){switch(j){case Ea:n.depthFunc(n.NEVER);break;case Ta:n.depthFunc(n.ALWAYS);break;case Aa:n.depthFunc(n.LESS);break;case yi:n.depthFunc(n.LEQUAL);break;case Ca:n.depthFunc(n.EQUAL);break;case Ra:n.depthFunc(n.GEQUAL);break;case Ia:n.depthFunc(n.GREATER);break;case Pa:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ge=j}},setLocked:function(j){L=j},setClear:function(j){ne!==j&&(re&&(j=1-j),n.clearDepth(j),ne=j)},reset:function(){L=!1,le=null,ge=null,ne=null,re=!1}}}function s(){let L=!1,re=null,le=null,ge=null,ne=null,j=null,xe=null,Fe=null,st=null;return{setTest:function(Je){L||(Je?Q(n.STENCIL_TEST):pe(n.STENCIL_TEST))},setMask:function(Je){re!==Je&&!L&&(n.stencilMask(Je),re=Je)},setFunc:function(Je,An,_n){(le!==Je||ge!==An||ne!==_n)&&(n.stencilFunc(Je,An,_n),le=Je,ge=An,ne=_n)},setOp:function(Je,An,_n){(j!==Je||xe!==An||Fe!==_n)&&(n.stencilOp(Je,An,_n),j=Je,xe=An,Fe=_n)},setLocked:function(Je){L=Je},setClear:function(Je){st!==Je&&(n.clearStencil(Je),st=Je)},reset:function(){L=!1,re=null,le=null,ge=null,ne=null,j=null,xe=null,Fe=null,st=null}}}let r=new t,a=new i,o=new s,c=new WeakMap,l=new WeakMap,h={},u={},d=new WeakMap,m=[],g=null,_=!1,p=null,f=null,w=null,M=null,v=null,A=null,C=null,I=new He(0,0,0),P=0,y=!1,b=null,D=null,O=null,H=null,Y=null,T=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),U=!1,V=0,k=n.getParameter(n.VERSION);k.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(k)[1]),U=V>=1):k.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),U=V>=2);let te=null,oe={},de=n.getParameter(n.SCISSOR_BOX),Ne=n.getParameter(n.VIEWPORT),Ye=new ut().fromArray(de),qe=new ut().fromArray(Ne);function Ie(L,re,le,ge){let ne=new Uint8Array(4),j=n.createTexture();n.bindTexture(L,j),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let xe=0;xe<le;xe++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(re,0,n.RGBA,1,1,ge,0,n.RGBA,n.UNSIGNED_BYTE,ne):n.texImage2D(re+xe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ne);return j}let K={};K[n.TEXTURE_2D]=Ie(n.TEXTURE_2D,n.TEXTURE_2D,1),K[n.TEXTURE_CUBE_MAP]=Ie(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[n.TEXTURE_2D_ARRAY]=Ie(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),K[n.TEXTURE_3D]=Ie(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Q(n.DEPTH_TEST),a.setFunc(yi),De(!1),ve(vl),Q(n.CULL_FACE),et(Fn);function Q(L){h[L]!==!0&&(n.enable(L),h[L]=!0)}function pe(L){h[L]!==!1&&(n.disable(L),h[L]=!1)}function Pe(L,re){return u[L]!==re?(n.bindFramebuffer(L,re),u[L]=re,L===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=re),L===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=re),!0):!1}function Me(L,re){let le=m,ge=!1;if(L){le=d.get(re),le===void 0&&(le=[],d.set(re,le));let ne=L.textures;if(le.length!==ne.length||le[0]!==n.COLOR_ATTACHMENT0){for(let j=0,xe=ne.length;j<xe;j++)le[j]=n.COLOR_ATTACHMENT0+j;le.length=ne.length,ge=!0}}else le[0]!==n.BACK&&(le[0]=n.BACK,ge=!0);ge&&n.drawBuffers(le)}function We(L){return g!==L?(n.useProgram(L),g=L,!0):!1}let _t={[Qn]:n.FUNC_ADD,[dh]:n.FUNC_SUBTRACT,[ph]:n.FUNC_REVERSE_SUBTRACT};_t[mh]=n.MIN,_t[gh]=n.MAX;let R={[_h]:n.ZERO,[xh]:n.ONE,[vh]:n.SRC_COLOR,[jr]:n.SRC_ALPHA,[Eh]:n.SRC_ALPHA_SATURATE,[bh]:n.DST_COLOR,[Mh]:n.DST_ALPHA,[yh]:n.ONE_MINUS_SRC_COLOR,[Qr]:n.ONE_MINUS_SRC_ALPHA,[wh]:n.ONE_MINUS_DST_COLOR,[Sh]:n.ONE_MINUS_DST_ALPHA,[Th]:n.CONSTANT_COLOR,[Ah]:n.ONE_MINUS_CONSTANT_COLOR,[Ch]:n.CONSTANT_ALPHA,[Rh]:n.ONE_MINUS_CONSTANT_ALPHA};function et(L,re,le,ge,ne,j,xe,Fe,st,Je){if(L===Fn){_===!0&&(pe(n.BLEND),_=!1);return}if(_===!1&&(Q(n.BLEND),_=!0),L!==fh){if(L!==p||Je!==y){if((f!==Qn||v!==Qn)&&(n.blendEquation(n.FUNC_ADD),f=Qn,v=Qn),Je)switch(L){case vi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ml:n.blendFunc(n.ONE,n.ONE);break;case Sl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case bl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case vi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ml:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Sl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}w=null,M=null,A=null,C=null,I.set(0,0,0),P=0,p=L,y=Je}return}ne=ne||re,j=j||le,xe=xe||ge,(re!==f||ne!==v)&&(n.blendEquationSeparate(_t[re],_t[ne]),f=re,v=ne),(le!==w||ge!==M||j!==A||xe!==C)&&(n.blendFuncSeparate(R[le],R[ge],R[j],R[xe]),w=le,M=ge,A=j,C=xe),(Fe.equals(I)===!1||st!==P)&&(n.blendColor(Fe.r,Fe.g,Fe.b,st),I.copy(Fe),P=st),p=L,y=!1}function Oe(L,re){L.side===Sn?pe(n.CULL_FACE):Q(n.CULL_FACE);let le=L.side===Ft;re&&(le=!le),De(le),L.blending===vi&&L.transparent===!1?et(Fn):et(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);let ge=L.stencilWrite;o.setTest(ge),ge&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ye(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Q(n.SAMPLE_ALPHA_TO_COVERAGE):pe(n.SAMPLE_ALPHA_TO_COVERAGE)}function De(L){b!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),b=L)}function ve(L){L!==hh?(Q(n.CULL_FACE),L!==D&&(L===vl?n.cullFace(n.BACK):L===uh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):pe(n.CULL_FACE),D=L}function ot(L){L!==O&&(U&&n.lineWidth(L),O=L)}function ye(L,re,le){L?(Q(n.POLYGON_OFFSET_FILL),(H!==re||Y!==le)&&(n.polygonOffset(re,le),H=re,Y=le)):pe(n.POLYGON_OFFSET_FILL)}function ze(L){L?Q(n.SCISSOR_TEST):pe(n.SCISSOR_TEST)}function Mt(L){L===void 0&&(L=n.TEXTURE0+T-1),te!==L&&(n.activeTexture(L),te=L)}function pt(L,re,le){le===void 0&&(te===null?le=n.TEXTURE0+T-1:le=te);let ge=oe[le];ge===void 0&&(ge={type:void 0,texture:void 0},oe[le]=ge),(ge.type!==L||ge.texture!==re)&&(te!==le&&(n.activeTexture(le),te=le),n.bindTexture(L,re||K[L]),ge.type=L,ge.texture=re)}function E(){let L=oe[te];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function x(){try{n.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function z(){try{n.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{n.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ee(){try{n.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(){try{n.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ee(){try{n.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ae(){try{n.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Se(){try{n.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function be(){try{n.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function se(){try{n.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function fe(L){Ye.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),Ye.copy(L))}function Re(L){qe.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),qe.copy(L))}function we(L,re){let le=l.get(re);le===void 0&&(le=new WeakMap,l.set(re,le));let ge=le.get(L);ge===void 0&&(ge=n.getUniformBlockIndex(re,L.name),le.set(L,ge))}function he(L,re){let ge=l.get(re).get(L);c.get(re)!==ge&&(n.uniformBlockBinding(re,ge,L.__bindingPointIndex),c.set(re,ge))}function ke(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},te=null,oe={},u={},d=new WeakMap,m=[],g=null,_=!1,p=null,f=null,w=null,M=null,v=null,A=null,C=null,I=new He(0,0,0),P=0,y=!1,b=null,D=null,O=null,H=null,Y=null,Ye.set(0,0,n.canvas.width,n.canvas.height),qe.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Q,disable:pe,bindFramebuffer:Pe,drawBuffers:Me,useProgram:We,setBlending:et,setMaterial:Oe,setFlipSided:De,setCullFace:ve,setLineWidth:ot,setPolygonOffset:ye,setScissorTest:ze,activeTexture:Mt,bindTexture:pt,unbindTexture:E,compressedTexImage2D:x,compressedTexImage3D:z,texImage2D:be,texImage3D:se,updateUBOMapping:we,uniformBlockBinding:he,texStorage2D:ae,texStorage3D:Se,texSubImage2D:J,texSubImage3D:ee,compressedTexSubImage2D:$,compressedTexSubImage3D:Ee,scissor:fe,viewport:Re,reset:ke}}function X0(n,e,t,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ue,h=new WeakMap,u,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,x){return m?new OffscreenCanvas(E,x):Fs("canvas")}function _(E,x,z){let J=1,ee=pt(E);if((ee.width>z||ee.height>z)&&(J=z/Math.max(ee.width,ee.height)),J<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let $=Math.floor(J*ee.width),Ee=Math.floor(J*ee.height);u===void 0&&(u=g($,Ee));let ae=x?g($,Ee):u;return ae.width=$,ae.height=Ee,ae.getContext("2d").drawImage(E,0,0,$,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+$+"x"+Ee+")."),ae}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),E;return E}function p(E){return E.generateMipmaps}function f(E){n.generateMipmap(E)}function w(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(E,x,z,J,ee=!1){if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let $=x;if(x===n.RED&&(z===n.FLOAT&&($=n.R32F),z===n.HALF_FLOAT&&($=n.R16F),z===n.UNSIGNED_BYTE&&($=n.R8)),x===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&($=n.R8UI),z===n.UNSIGNED_SHORT&&($=n.R16UI),z===n.UNSIGNED_INT&&($=n.R32UI),z===n.BYTE&&($=n.R8I),z===n.SHORT&&($=n.R16I),z===n.INT&&($=n.R32I)),x===n.RG&&(z===n.FLOAT&&($=n.RG32F),z===n.HALF_FLOAT&&($=n.RG16F),z===n.UNSIGNED_BYTE&&($=n.RG8)),x===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&($=n.RG8UI),z===n.UNSIGNED_SHORT&&($=n.RG16UI),z===n.UNSIGNED_INT&&($=n.RG32UI),z===n.BYTE&&($=n.RG8I),z===n.SHORT&&($=n.RG16I),z===n.INT&&($=n.RG32I)),x===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&($=n.RGB8UI),z===n.UNSIGNED_SHORT&&($=n.RGB16UI),z===n.UNSIGNED_INT&&($=n.RGB32UI),z===n.BYTE&&($=n.RGB8I),z===n.SHORT&&($=n.RGB16I),z===n.INT&&($=n.RGB32I)),x===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&($=n.RGBA8UI),z===n.UNSIGNED_SHORT&&($=n.RGBA16UI),z===n.UNSIGNED_INT&&($=n.RGBA32UI),z===n.BYTE&&($=n.RGBA8I),z===n.SHORT&&($=n.RGBA16I),z===n.INT&&($=n.RGBA32I)),x===n.RGB&&(z===n.UNSIGNED_INT_5_9_9_9_REV&&($=n.RGB9_E5),z===n.UNSIGNED_INT_10F_11F_11F_REV&&($=n.R11F_G11F_B10F)),x===n.RGBA){let Ee=ee?Us:Ze.getTransfer(J);z===n.FLOAT&&($=n.RGBA32F),z===n.HALF_FLOAT&&($=n.RGBA16F),z===n.UNSIGNED_BYTE&&($=Ee===Qe?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&($=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&($=n.RGB5_A1)}return($===n.R16F||$===n.R32F||$===n.RG16F||$===n.RG32F||$===n.RGBA16F||$===n.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function v(E,x){let z;return E?x===null||x===ai||x===fs?z=n.DEPTH24_STENCIL8:x===bn?z=n.DEPTH32F_STENCIL8:x===hs&&(z=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===ai||x===fs?z=n.DEPTH_COMPONENT24:x===bn?z=n.DEPTH_COMPONENT32F:x===hs&&(z=n.DEPTH_COMPONENT16),z}function A(E,x){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==en&&E.minFilter!==un?Math.log2(Math.max(x.width,x.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?x.mipmaps.length:1}function C(E){let x=E.target;x.removeEventListener("dispose",C),P(x),x.isVideoTexture&&h.delete(x)}function I(E){let x=E.target;x.removeEventListener("dispose",I),b(x)}function P(E){let x=i.get(E);if(x.__webglInit===void 0)return;let z=E.source,J=d.get(z);if(J){let ee=J[x.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&y(E),Object.keys(J).length===0&&d.delete(z)}i.remove(E)}function y(E){let x=i.get(E);n.deleteTexture(x.__webglTexture);let z=E.source,J=d.get(z);delete J[x.__cacheKey],a.memory.textures--}function b(E){let x=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(x.__webglFramebuffer[J]))for(let ee=0;ee<x.__webglFramebuffer[J].length;ee++)n.deleteFramebuffer(x.__webglFramebuffer[J][ee]);else n.deleteFramebuffer(x.__webglFramebuffer[J]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[J])}else{if(Array.isArray(x.__webglFramebuffer))for(let J=0;J<x.__webglFramebuffer.length;J++)n.deleteFramebuffer(x.__webglFramebuffer[J]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let J=0;J<x.__webglColorRenderbuffer.length;J++)x.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[J]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let z=E.textures;for(let J=0,ee=z.length;J<ee;J++){let $=i.get(z[J]);$.__webglTexture&&(n.deleteTexture($.__webglTexture),a.memory.textures--),i.remove(z[J])}i.remove(E)}let D=0;function O(){D=0}function H(){let E=D;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),D+=1,E}function Y(E){let x=[];return x.push(E.wrapS),x.push(E.wrapT),x.push(E.wrapR||0),x.push(E.magFilter),x.push(E.minFilter),x.push(E.anisotropy),x.push(E.internalFormat),x.push(E.format),x.push(E.type),x.push(E.generateMipmaps),x.push(E.premultiplyAlpha),x.push(E.flipY),x.push(E.unpackAlignment),x.push(E.colorSpace),x.join()}function T(E,x){let z=i.get(E);if(E.isVideoTexture&&ze(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&z.__version!==E.version){let J=E.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(z,E,x);return}}else E.isExternalTexture&&(z.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+x)}function U(E,x){let z=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&z.__version!==E.version){K(z,E,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+x)}function V(E,x){let z=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&z.__version!==E.version){K(z,E,x);return}t.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+x)}function k(E,x){let z=i.get(E);if(E.version>0&&z.__version!==E.version){Q(z,E,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+x)}let te={[ea]:n.REPEAT,[jn]:n.CLAMP_TO_EDGE,[ta]:n.MIRRORED_REPEAT},oe={[en]:n.NEAREST,[Bh]:n.NEAREST_MIPMAP_NEAREST,[ir]:n.NEAREST_MIPMAP_LINEAR,[un]:n.LINEAR,[Na]:n.LINEAR_MIPMAP_NEAREST,[ri]:n.LINEAR_MIPMAP_LINEAR},de={[Hh]:n.NEVER,[Zh]:n.ALWAYS,[Gh]:n.LESS,[Nl]:n.LEQUAL,[Wh]:n.EQUAL,[Yh]:n.GEQUAL,[Xh]:n.GREATER,[qh]:n.NOTEQUAL};function Ne(E,x){if(x.type===bn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===un||x.magFilter===Na||x.magFilter===ir||x.magFilter===ri||x.minFilter===un||x.minFilter===Na||x.minFilter===ir||x.minFilter===ri)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,te[x.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,te[x.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,te[x.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,oe[x.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,oe[x.minFilter]),x.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,de[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===en||x.minFilter!==ir&&x.minFilter!==ri||x.type===bn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){let z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Ye(E,x){let z=!1;E.__webglInit===void 0&&(E.__webglInit=!0,x.addEventListener("dispose",C));let J=x.source,ee=d.get(J);ee===void 0&&(ee={},d.set(J,ee));let $=Y(x);if($!==E.__cacheKey){ee[$]===void 0&&(ee[$]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,z=!0),ee[$].usedTimes++;let Ee=ee[E.__cacheKey];Ee!==void 0&&(ee[E.__cacheKey].usedTimes--,Ee.usedTimes===0&&y(x)),E.__cacheKey=$,E.__webglTexture=ee[$].texture}return z}function qe(E,x,z){return Math.floor(Math.floor(E/z)/x)}function Ie(E,x,z,J){let $=E.updateRanges;if($.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,z,J,x.data);else{$.sort((se,fe)=>se.start-fe.start);let Ee=0;for(let se=1;se<$.length;se++){let fe=$[Ee],Re=$[se],we=fe.start+fe.count,he=qe(Re.start,x.width,4),ke=qe(fe.start,x.width,4);Re.start<=we+1&&he===ke&&qe(Re.start+Re.count-1,x.width,4)===he?fe.count=Math.max(fe.count,Re.start+Re.count-fe.start):(++Ee,$[Ee]=Re)}$.length=Ee+1;let ae=n.getParameter(n.UNPACK_ROW_LENGTH),Se=n.getParameter(n.UNPACK_SKIP_PIXELS),be=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let se=0,fe=$.length;se<fe;se++){let Re=$[se],we=Math.floor(Re.start/4),he=Math.ceil(Re.count/4),ke=we%x.width,L=Math.floor(we/x.width),re=he,le=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,ke),n.pixelStorei(n.UNPACK_SKIP_ROWS,L),t.texSubImage2D(n.TEXTURE_2D,0,ke,L,re,le,z,J,x.data)}E.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ae),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Se),n.pixelStorei(n.UNPACK_SKIP_ROWS,be)}}function K(E,x,z){let J=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(J=n.TEXTURE_3D);let ee=Ye(E,x),$=x.source;t.bindTexture(J,E.__webglTexture,n.TEXTURE0+z);let Ee=i.get($);if($.version!==Ee.__version||ee===!0){t.activeTexture(n.TEXTURE0+z);let ae=Ze.getPrimaries(Ze.workingColorSpace),Se=x.colorSpace===Bn?null:Ze.getPrimaries(x.colorSpace),be=x.colorSpace===Bn||ae===Se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let se=_(x.image,!1,s.maxTextureSize);se=Mt(x,se);let fe=r.convert(x.format,x.colorSpace),Re=r.convert(x.type),we=M(x.internalFormat,fe,Re,x.colorSpace,x.isVideoTexture);Ne(J,x);let he,ke=x.mipmaps,L=x.isVideoTexture!==!0,re=Ee.__version===void 0||ee===!0,le=$.dataReady,ge=A(x,se);if(x.isDepthTexture)we=v(x.format===ds,x.type),re&&(L?t.texStorage2D(n.TEXTURE_2D,1,we,se.width,se.height):t.texImage2D(n.TEXTURE_2D,0,we,se.width,se.height,0,fe,Re,null));else if(x.isDataTexture)if(ke.length>0){L&&re&&t.texStorage2D(n.TEXTURE_2D,ge,we,ke[0].width,ke[0].height);for(let ne=0,j=ke.length;ne<j;ne++)he=ke[ne],L?le&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,he.width,he.height,fe,Re,he.data):t.texImage2D(n.TEXTURE_2D,ne,we,he.width,he.height,0,fe,Re,he.data);x.generateMipmaps=!1}else L?(re&&t.texStorage2D(n.TEXTURE_2D,ge,we,se.width,se.height),le&&Ie(x,se,fe,Re)):t.texImage2D(n.TEXTURE_2D,0,we,se.width,se.height,0,fe,Re,se.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){L&&re&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ge,we,ke[0].width,ke[0].height,se.depth);for(let ne=0,j=ke.length;ne<j;ne++)if(he=ke[ne],x.format!==sn)if(fe!==null)if(L){if(le)if(x.layerUpdates.size>0){let xe=Gl(he.width,he.height,x.format,x.type);for(let Fe of x.layerUpdates){let st=he.data.subarray(Fe*xe/he.data.BYTES_PER_ELEMENT,(Fe+1)*xe/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,Fe,he.width,he.height,1,fe,st)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,he.width,he.height,se.depth,fe,he.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ne,we,he.width,he.height,se.depth,0,he.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?le&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,he.width,he.height,se.depth,fe,Re,he.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ne,we,he.width,he.height,se.depth,0,fe,Re,he.data)}else{L&&re&&t.texStorage2D(n.TEXTURE_2D,ge,we,ke[0].width,ke[0].height);for(let ne=0,j=ke.length;ne<j;ne++)he=ke[ne],x.format!==sn?fe!==null?L?le&&t.compressedTexSubImage2D(n.TEXTURE_2D,ne,0,0,he.width,he.height,fe,he.data):t.compressedTexImage2D(n.TEXTURE_2D,ne,we,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?le&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,he.width,he.height,fe,Re,he.data):t.texImage2D(n.TEXTURE_2D,ne,we,he.width,he.height,0,fe,Re,he.data)}else if(x.isDataArrayTexture)if(L){if(re&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ge,we,se.width,se.height,se.depth),le)if(x.layerUpdates.size>0){let ne=Gl(se.width,se.height,x.format,x.type);for(let j of x.layerUpdates){let xe=se.data.subarray(j*ne/se.data.BYTES_PER_ELEMENT,(j+1)*ne/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,j,se.width,se.height,1,fe,Re,xe)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,fe,Re,se.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,we,se.width,se.height,se.depth,0,fe,Re,se.data);else if(x.isData3DTexture)L?(re&&t.texStorage3D(n.TEXTURE_3D,ge,we,se.width,se.height,se.depth),le&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,fe,Re,se.data)):t.texImage3D(n.TEXTURE_3D,0,we,se.width,se.height,se.depth,0,fe,Re,se.data);else if(x.isFramebufferTexture){if(re)if(L)t.texStorage2D(n.TEXTURE_2D,ge,we,se.width,se.height);else{let ne=se.width,j=se.height;for(let xe=0;xe<ge;xe++)t.texImage2D(n.TEXTURE_2D,xe,we,ne,j,0,fe,Re,null),ne>>=1,j>>=1}}else if(ke.length>0){if(L&&re){let ne=pt(ke[0]);t.texStorage2D(n.TEXTURE_2D,ge,we,ne.width,ne.height)}for(let ne=0,j=ke.length;ne<j;ne++)he=ke[ne],L?le&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,fe,Re,he):t.texImage2D(n.TEXTURE_2D,ne,we,fe,Re,he);x.generateMipmaps=!1}else if(L){if(re){let ne=pt(se);t.texStorage2D(n.TEXTURE_2D,ge,we,ne.width,ne.height)}le&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,fe,Re,se)}else t.texImage2D(n.TEXTURE_2D,0,we,fe,Re,se);p(x)&&f(J),Ee.__version=$.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function Q(E,x,z){if(x.image.length!==6)return;let J=Ye(E,x),ee=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+z);let $=i.get(ee);if(ee.version!==$.__version||J===!0){t.activeTexture(n.TEXTURE0+z);let Ee=Ze.getPrimaries(Ze.workingColorSpace),ae=x.colorSpace===Bn?null:Ze.getPrimaries(x.colorSpace),Se=x.colorSpace===Bn||Ee===ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let be=x.isCompressedTexture||x.image[0].isCompressedTexture,se=x.image[0]&&x.image[0].isDataTexture,fe=[];for(let j=0;j<6;j++)!be&&!se?fe[j]=_(x.image[j],!0,s.maxCubemapSize):fe[j]=se?x.image[j].image:x.image[j],fe[j]=Mt(x,fe[j]);let Re=fe[0],we=r.convert(x.format,x.colorSpace),he=r.convert(x.type),ke=M(x.internalFormat,we,he,x.colorSpace),L=x.isVideoTexture!==!0,re=$.__version===void 0||J===!0,le=ee.dataReady,ge=A(x,Re);Ne(n.TEXTURE_CUBE_MAP,x);let ne;if(be){L&&re&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ge,ke,Re.width,Re.height);for(let j=0;j<6;j++){ne=fe[j].mipmaps;for(let xe=0;xe<ne.length;xe++){let Fe=ne[xe];x.format!==sn?we!==null?L?le&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,xe,0,0,Fe.width,Fe.height,we,Fe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,xe,ke,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,xe,0,0,Fe.width,Fe.height,we,he,Fe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,xe,ke,Fe.width,Fe.height,0,we,he,Fe.data)}}}else{if(ne=x.mipmaps,L&&re){ne.length>0&&ge++;let j=pt(fe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ge,ke,j.width,j.height)}for(let j=0;j<6;j++)if(se){L?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,fe[j].width,fe[j].height,we,he,fe[j].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,ke,fe[j].width,fe[j].height,0,we,he,fe[j].data);for(let xe=0;xe<ne.length;xe++){let st=ne[xe].image[j].image;L?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,xe+1,0,0,st.width,st.height,we,he,st.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,xe+1,ke,st.width,st.height,0,we,he,st.data)}}else{L?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,we,he,fe[j]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,ke,we,he,fe[j]);for(let xe=0;xe<ne.length;xe++){let Fe=ne[xe];L?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,xe+1,0,0,we,he,Fe.image[j]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,xe+1,ke,we,he,Fe.image[j])}}}p(x)&&f(n.TEXTURE_CUBE_MAP),$.__version=ee.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function pe(E,x,z,J,ee,$){let Ee=r.convert(z.format,z.colorSpace),ae=r.convert(z.type),Se=M(z.internalFormat,Ee,ae,z.colorSpace),be=i.get(x),se=i.get(z);if(se.__renderTarget=x,!be.__hasExternalTextures){let fe=Math.max(1,x.width>>$),Re=Math.max(1,x.height>>$);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,$,Se,fe,Re,x.depth,0,Ee,ae,null):t.texImage2D(ee,$,Se,fe,Re,0,Ee,ae,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),ye(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,ee,se.__webglTexture,0,ot(x)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,ee,se.__webglTexture,$),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Pe(E,x,z){if(n.bindRenderbuffer(n.RENDERBUFFER,E),x.depthBuffer){let J=x.depthTexture,ee=J&&J.isDepthTexture?J.type:null,$=v(x.stencilBuffer,ee),Ee=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=ot(x);ye(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ae,$,x.width,x.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,ae,$,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,$,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ee,n.RENDERBUFFER,E)}else{let J=x.textures;for(let ee=0;ee<J.length;ee++){let $=J[ee],Ee=r.convert($.format,$.colorSpace),ae=r.convert($.type),Se=M($.internalFormat,Ee,ae,$.colorSpace),be=ot(x);z&&ye(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,be,Se,x.width,x.height):ye(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,be,Se,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Se,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Me(E,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let J=i.get(x.depthTexture);J.__renderTarget=x,(!J.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),T(x.depthTexture,0);let ee=J.__webglTexture,$=ot(x);if(x.depthTexture.format===es)ye(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0);else if(x.depthTexture.format===ds)ye(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function We(E){let x=i.get(E),z=E.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==E.depthTexture){let J=E.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),J){let ee=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,J.removeEventListener("dispose",ee)};J.addEventListener("dispose",ee),x.__depthDisposeCallback=ee}x.__boundDepthTexture=J}if(E.depthTexture&&!x.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");let J=E.texture.mipmaps;J&&J.length>0?Me(x.__webglFramebuffer[0],E):Me(x.__webglFramebuffer,E)}else if(z){x.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[J]),x.__webglDepthbuffer[J]===void 0)x.__webglDepthbuffer[J]=n.createRenderbuffer(),Pe(x.__webglDepthbuffer[J],E,!1);else{let ee=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=x.__webglDepthbuffer[J];n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,$)}}else{let J=E.texture.mipmaps;if(J&&J.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),Pe(x.__webglDepthbuffer,E,!1);else{let ee=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,$)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function _t(E,x,z){let J=i.get(E);x!==void 0&&pe(J.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&We(E)}function R(E){let x=E.texture,z=i.get(E),J=i.get(x);E.addEventListener("dispose",I);let ee=E.textures,$=E.isWebGLCubeRenderTarget===!0,Ee=ee.length>1;if(Ee||(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=x.version,a.memory.textures++),$){z.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(x.mipmaps&&x.mipmaps.length>0){z.__webglFramebuffer[ae]=[];for(let Se=0;Se<x.mipmaps.length;Se++)z.__webglFramebuffer[ae][Se]=n.createFramebuffer()}else z.__webglFramebuffer[ae]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){z.__webglFramebuffer=[];for(let ae=0;ae<x.mipmaps.length;ae++)z.__webglFramebuffer[ae]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(Ee)for(let ae=0,Se=ee.length;ae<Se;ae++){let be=i.get(ee[ae]);be.__webglTexture===void 0&&(be.__webglTexture=n.createTexture(),a.memory.textures++)}if(E.samples>0&&ye(E)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ae=0;ae<ee.length;ae++){let Se=ee[ae];z.__webglColorRenderbuffer[ae]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[ae]);let be=r.convert(Se.format,Se.colorSpace),se=r.convert(Se.type),fe=M(Se.internalFormat,be,se,Se.colorSpace,E.isXRRenderTarget===!0),Re=ot(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,Re,fe,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,z.__webglColorRenderbuffer[ae])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),Pe(z.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if($){t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),Ne(n.TEXTURE_CUBE_MAP,x);for(let ae=0;ae<6;ae++)if(x.mipmaps&&x.mipmaps.length>0)for(let Se=0;Se<x.mipmaps.length;Se++)pe(z.__webglFramebuffer[ae][Se],E,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Se);else pe(z.__webglFramebuffer[ae],E,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);p(x)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let ae=0,Se=ee.length;ae<Se;ae++){let be=ee[ae],se=i.get(be),fe=n.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(fe=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(fe,se.__webglTexture),Ne(fe,be),pe(z.__webglFramebuffer,E,be,n.COLOR_ATTACHMENT0+ae,fe,0),p(be)&&f(fe)}t.unbindTexture()}else{let ae=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ae=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ae,J.__webglTexture),Ne(ae,x),x.mipmaps&&x.mipmaps.length>0)for(let Se=0;Se<x.mipmaps.length;Se++)pe(z.__webglFramebuffer[Se],E,x,n.COLOR_ATTACHMENT0,ae,Se);else pe(z.__webglFramebuffer,E,x,n.COLOR_ATTACHMENT0,ae,0);p(x)&&f(ae),t.unbindTexture()}E.depthBuffer&&We(E)}function et(E){let x=E.textures;for(let z=0,J=x.length;z<J;z++){let ee=x[z];if(p(ee)){let $=w(E),Ee=i.get(ee).__webglTexture;t.bindTexture($,Ee),f($),t.unbindTexture()}}}let Oe=[],De=[];function ve(E){if(E.samples>0){if(ye(E)===!1){let x=E.textures,z=E.width,J=E.height,ee=n.COLOR_BUFFER_BIT,$=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ee=i.get(E),ae=x.length>1;if(ae)for(let be=0;be<x.length;be++)t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer);let Se=E.texture.mipmaps;Se&&Se.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let be=0;be<x.length;be++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),ae){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ee.__webglColorRenderbuffer[be]);let se=i.get(x[be]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,se,0)}n.blitFramebuffer(0,0,z,J,0,0,z,J,ee,n.NEAREST),c===!0&&(Oe.length=0,De.length=0,Oe.push(n.COLOR_ATTACHMENT0+be),E.depthBuffer&&E.resolveDepthBuffer===!1&&(Oe.push($),De.push($),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,De)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Oe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ae)for(let be=0;be<x.length;be++){t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,Ee.__webglColorRenderbuffer[be]);let se=i.get(x[be]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.TEXTURE_2D,se,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&c){let x=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function ot(E){return Math.min(s.maxSamples,E.samples)}function ye(E){let x=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ze(E){let x=a.render.frame;h.get(E)!==x&&(h.set(E,x),E.update())}function Mt(E,x){let z=E.colorSpace,J=E.format,ee=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||z!==Mi&&z!==Bn&&(Ze.getTransfer(z)===Qe?(J!==sn||ee!==mn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),x}function pt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=O,this.setTexture2D=T,this.setTexture2DArray=U,this.setTexture3D=V,this.setTextureCube=k,this.rebindTextures=_t,this.setupRenderTarget=R,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=ye}function q0(n,e){function t(i,s=Bn){let r,a=Ze.getTransfer(s);if(i===mn)return n.UNSIGNED_BYTE;if(i===Oa)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ba)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Cl)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Rl)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Tl)return n.BYTE;if(i===Al)return n.SHORT;if(i===hs)return n.UNSIGNED_SHORT;if(i===Fa)return n.INT;if(i===ai)return n.UNSIGNED_INT;if(i===bn)return n.FLOAT;if(i===us)return n.HALF_FLOAT;if(i===Il)return n.ALPHA;if(i===Pl)return n.RGB;if(i===sn)return n.RGBA;if(i===es)return n.DEPTH_COMPONENT;if(i===ds)return n.DEPTH_STENCIL;if(i===Dl)return n.RED;if(i===ka)return n.RED_INTEGER;if(i===Ll)return n.RG;if(i===za)return n.RG_INTEGER;if(i===Va)return n.RGBA_INTEGER;if(i===sr||i===rr||i===ar||i===or)if(a===Qe)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===sr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===sr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===rr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ar)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===or)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ha||i===Ga||i===Wa||i===Xa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ha)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ga)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Wa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Xa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===qa||i===Ya||i===Za)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===qa||i===Ya)return a===Qe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Za)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===$a||i===Ka||i===Ja||i===ja||i===Qa||i===eo||i===to||i===no||i===io||i===so||i===ro||i===ao||i===oo||i===lo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===$a)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ka)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ja)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ja)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Qa)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===eo)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===to)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===no)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===io)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===so)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ro)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ao)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===oo)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===lo)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===co||i===ho||i===uo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===co)return a===Qe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ho)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===uo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===fo||i===po||i===mo||i===go)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===fo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===po)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===mo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===go)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===fs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var Y0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Z0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,nc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Xs(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new dn({vertexShader:Y0,fragmentShader:Z0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Nt(new wi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ic=class extends xn{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,m=null,g=null,_=typeof XRWebGLBinding<"u",p=new nc,f={},w=t.getContextAttributes(),M=null,v=null,A=[],C=[],I=new Ue,P=null,y=new Ct;y.viewport=new ut;let b=new Ct;b.viewport=new ut;let D=[y,b],O=new ba,H=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let Q=A[K];return Q===void 0&&(Q=new as,A[K]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(K){let Q=A[K];return Q===void 0&&(Q=new as,A[K]=Q),Q.getGripSpace()},this.getHand=function(K){let Q=A[K];return Q===void 0&&(Q=new as,A[K]=Q),Q.getHandSpace()};function T(K){let Q=C.indexOf(K.inputSource);if(Q===-1)return;let pe=A[Q];pe!==void 0&&(pe.update(K.inputSource,K.frame,l||a),pe.dispatchEvent({type:K.type,data:K.inputSource}))}function U(){s.removeEventListener("select",T),s.removeEventListener("selectstart",T),s.removeEventListener("selectend",T),s.removeEventListener("squeeze",T),s.removeEventListener("squeezestart",T),s.removeEventListener("squeezeend",T),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",V);for(let K=0;K<A.length;K++){let Q=C[K];Q!==null&&(C[K]=null,A[K].disconnect(Q))}H=null,Y=null,p.reset();for(let K in f)delete f[K];e.setRenderTarget(M),m=null,d=null,u=null,s=null,v=null,Ie.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",T),s.addEventListener("selectstart",T),s.addEventListener("selectend",T),s.addEventListener("squeeze",T),s.addEventListener("squeezestart",T),s.addEventListener("squeezeend",T),s.addEventListener("end",U),s.addEventListener("inputsourceschange",V),w.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(I),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,Pe=null,Me=null;w.depth&&(Me=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=w.stencil?ds:es,Pe=w.stencil?fs:ai);let We={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(We),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new vn(d.textureWidth,d.textureHeight,{format:sn,type:mn,depthTexture:new Ws(d.textureWidth,d.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let pe={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,pe),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),v=new vn(m.framebufferWidth,m.framebufferHeight,{format:sn,type:mn,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Ie.setContext(s),Ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function V(K){for(let Q=0;Q<K.removed.length;Q++){let pe=K.removed[Q],Pe=C.indexOf(pe);Pe>=0&&(C[Pe]=null,A[Pe].disconnect(pe))}for(let Q=0;Q<K.added.length;Q++){let pe=K.added[Q],Pe=C.indexOf(pe);if(Pe===-1){for(let We=0;We<A.length;We++)if(We>=C.length){C.push(pe),Pe=We;break}else if(C[We]===null){C[We]=pe,Pe=We;break}if(Pe===-1)break}let Me=A[Pe];Me&&Me.connect(pe)}}let k=new B,te=new B;function oe(K,Q,pe){k.setFromMatrixPosition(Q.matrixWorld),te.setFromMatrixPosition(pe.matrixWorld);let Pe=k.distanceTo(te),Me=Q.projectionMatrix.elements,We=pe.projectionMatrix.elements,_t=Me[14]/(Me[10]-1),R=Me[14]/(Me[10]+1),et=(Me[9]+1)/Me[5],Oe=(Me[9]-1)/Me[5],De=(Me[8]-1)/Me[0],ve=(We[8]+1)/We[0],ot=_t*De,ye=_t*ve,ze=Pe/(-De+ve),Mt=ze*-De;if(Q.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Mt),K.translateZ(ze),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Me[10]===-1)K.projectionMatrix.copy(Q.projectionMatrix),K.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let pt=_t+ze,E=R+ze,x=ot-Mt,z=ye+(Pe-Mt),J=et*R/E*pt,ee=Oe*R/E*pt;K.projectionMatrix.makePerspective(x,z,J,ee,pt,E),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function de(K,Q){Q===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(Q.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let Q=K.near,pe=K.far;p.texture!==null&&(p.depthNear>0&&(Q=p.depthNear),p.depthFar>0&&(pe=p.depthFar)),O.near=b.near=y.near=Q,O.far=b.far=y.far=pe,(H!==O.near||Y!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),H=O.near,Y=O.far),O.layers.mask=K.layers.mask|6,y.layers.mask=O.layers.mask&3,b.layers.mask=O.layers.mask&5;let Pe=K.parent,Me=O.cameras;de(O,Pe);for(let We=0;We<Me.length;We++)de(Me[We],Pe);Me.length===2?oe(O,y,b):O.projectionMatrix.copy(y.projectionMatrix),Ne(K,O,Pe)};function Ne(K,Q,pe){pe===null?K.matrix.copy(Q.matrixWorld):(K.matrix.copy(pe.matrixWorld),K.matrix.invert(),K.matrix.multiply(Q.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(Q.projectionMatrix),K.projectionMatrixInverse.copy(Q.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=ts*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(K){c=K,d!==null&&(d.fixedFoveation=K),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=K)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(O)},this.getCameraTexture=function(K){return f[K]};let Ye=null;function qe(K,Q){if(h=Q.getViewerPose(l||a),g=Q,h!==null){let pe=h.views;m!==null&&(e.setRenderTargetFramebuffer(v,m.framebuffer),e.setRenderTarget(v));let Pe=!1;pe.length!==O.cameras.length&&(O.cameras.length=0,Pe=!0);for(let R=0;R<pe.length;R++){let et=pe[R],Oe=null;if(m!==null)Oe=m.getViewport(et);else{let ve=u.getViewSubImage(d,et);Oe=ve.viewport,R===0&&(e.setRenderTargetTextures(v,ve.colorTexture,ve.depthStencilTexture),e.setRenderTarget(v))}let De=D[R];De===void 0&&(De=new Ct,De.layers.enable(R),De.viewport=new ut,D[R]=De),De.matrix.fromArray(et.transform.matrix),De.matrix.decompose(De.position,De.quaternion,De.scale),De.projectionMatrix.fromArray(et.projectionMatrix),De.projectionMatrixInverse.copy(De.projectionMatrix).invert(),De.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),R===0&&(O.matrix.copy(De.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Pe===!0&&O.cameras.push(De)}let Me=s.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=i.getBinding();let R=u.getDepthInformation(pe[0]);R&&R.isValid&&R.texture&&p.init(R,s.renderState)}if(Me&&Me.includes("camera-access")&&_){e.state.unbindTexture(),u=i.getBinding();for(let R=0;R<pe.length;R++){let et=pe[R].camera;if(et){let Oe=f[et];Oe||(Oe=new Xs,f[et]=Oe);let De=u.getCameraImage(et);Oe.sourceTexture=De}}}}for(let pe=0;pe<A.length;pe++){let Pe=C[pe],Me=A[pe];Pe!==null&&Me!==void 0&&Me.update(Pe,Q,l||a)}Ye&&Ye(K,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),g=null}let Ie=new bu;Ie.setAnimationLoop(qe),this.setAnimationLoop=function(K){Ye=K},this.dispose=function(){}}},Ii=new fn,$0=new ht;function K0(n,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function i(p,f){f.color.getRGB(p.fogColor.value,zl(n)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,w,M,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(p,f):f.isMeshToonMaterial?(r(p,f),u(p,f)):f.isMeshPhongMaterial?(r(p,f),h(p,f)):f.isMeshStandardMaterial?(r(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,v)):f.isMeshMatcapMaterial?(r(p,f),g(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),_(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?c(p,f,w,M):f.isSpriteMaterial?l(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Ft&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Ft&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let w=e.get(f),M=w.envMap,v=w.envMapRotation;M&&(p.envMap.value=M,Ii.copy(v),Ii.x*=-1,Ii.y*=-1,Ii.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ii.y*=-1,Ii.z*=-1),p.envMapRotation.value.setFromMatrix4($0.makeRotationFromEuler(Ii)),p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function c(p,f,w,M){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*w,p.scale.value=M*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function l(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function u(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,w){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ft&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=w.texture,p.transmissionSamplerSize.value.set(w.width,w.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function _(p,f){let w=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(w.matrixWorld),p.nearDistance.value=w.shadow.camera.near,p.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function J0(n,e,t,i){let s={},r={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,M){let v=M.program;i.uniformBlockBinding(w,v)}function l(w,M){let v=s[w.id];v===void 0&&(g(w),v=h(w),s[w.id]=v,w.addEventListener("dispose",p));let A=M.program;i.updateUBOMapping(w,A);let C=e.render.frame;r[w.id]!==C&&(d(w),r[w.id]=C)}function h(w){let M=u();w.__bindingPointIndex=M;let v=n.createBuffer(),A=w.__size,C=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,A,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,v),v}function u(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){let M=s[w.id],v=w.uniforms,A=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let C=0,I=v.length;C<I;C++){let P=Array.isArray(v[C])?v[C]:[v[C]];for(let y=0,b=P.length;y<b;y++){let D=P[y];if(m(D,C,y,A)===!0){let O=D.__offset,H=Array.isArray(D.value)?D.value:[D.value],Y=0;for(let T=0;T<H.length;T++){let U=H[T],V=_(U);typeof U=="number"||typeof U=="boolean"?(D.__data[0]=U,n.bufferSubData(n.UNIFORM_BUFFER,O+Y,D.__data)):U.isMatrix3?(D.__data[0]=U.elements[0],D.__data[1]=U.elements[1],D.__data[2]=U.elements[2],D.__data[3]=0,D.__data[4]=U.elements[3],D.__data[5]=U.elements[4],D.__data[6]=U.elements[5],D.__data[7]=0,D.__data[8]=U.elements[6],D.__data[9]=U.elements[7],D.__data[10]=U.elements[8],D.__data[11]=0):(U.toArray(D.__data,Y),Y+=V.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,O,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(w,M,v,A){let C=w.value,I=M+"_"+v;if(A[I]===void 0)return typeof C=="number"||typeof C=="boolean"?A[I]=C:A[I]=C.clone(),!0;{let P=A[I];if(typeof C=="number"||typeof C=="boolean"){if(P!==C)return A[I]=C,!0}else if(P.equals(C)===!1)return P.copy(C),!0}return!1}function g(w){let M=w.uniforms,v=0,A=16;for(let I=0,P=M.length;I<P;I++){let y=Array.isArray(M[I])?M[I]:[M[I]];for(let b=0,D=y.length;b<D;b++){let O=y[b],H=Array.isArray(O.value)?O.value:[O.value];for(let Y=0,T=H.length;Y<T;Y++){let U=H[Y],V=_(U),k=v%A,te=k%V.boundary,oe=k+te;v+=te,oe!==0&&A-oe<V.storage&&(v+=A-oe),O.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=v,v+=V.storage}}}let C=v%A;return C>0&&(v+=A-C),w.__size=v,w.__cache={},this}function _(w){let M={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(M.boundary=4,M.storage=4):w.isVector2?(M.boundary=8,M.storage=8):w.isVector3||w.isColor?(M.boundary=16,M.storage=12):w.isVector4?(M.boundary=16,M.storage=16):w.isMatrix3?(M.boundary=48,M.storage=48):w.isMatrix4?(M.boundary=64,M.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),M}function p(w){let M=w.target;M.removeEventListener("dispose",p);let v=a.indexOf(M.__bindingPointIndex);a.splice(v,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function f(){for(let w in s)n.deleteBuffer(s[w]);a=[],s={},r={}}return{bind:c,update:l,dispose:f}}var Mo=class{constructor(e={}){let{canvas:t=$h(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;let g=new Uint32Array(4),_=new Int32Array(4),p=null,f=null,w=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=On,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let v=this,A=!1;this._outputColorSpace=Ut;let C=0,I=0,P=null,y=-1,b=null,D=new ut,O=new ut,H=null,Y=new He(0),T=0,U=t.width,V=t.height,k=1,te=null,oe=null,de=new ut(0,0,U,V),Ne=new ut(0,0,U,V),Ye=!1,qe=new os,Ie=!1,K=!1,Q=new ht,pe=new B,Pe=new ut,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},We=!1;function _t(){return P===null?k:1}let R=i;function et(S,N){return t.getContext(S,N)}try{let S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",ge,!1),t.addEventListener("webglcontextcreationerror",ne,!1),R===null){let N="webgl2";if(R=et(N,S),R===null)throw et(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Oe,De,ve,ot,ye,ze,Mt,pt,E,x,z,J,ee,$,Ee,ae,Se,be,se,fe,Re,we,he,ke;function L(){Oe=new mg(R),Oe.init(),we=new q0(R,Oe),De=new lg(R,Oe,e,we),ve=new W0(R,Oe),De.reversedDepthBuffer&&d&&ve.buffers.depth.setReversed(!0),ot=new xg(R),ye=new P0,ze=new X0(R,Oe,ve,ye,De,we,ot),Mt=new hg(v),pt=new pg(v),E=new wd(R),he=new ag(R,E),x=new gg(R,E,ot,he),z=new yg(R,x,E,ot),se=new vg(R,De,ze),ae=new cg(ye),J=new I0(v,Mt,pt,Oe,De,he,ae),ee=new K0(v,ye),$=new L0,Ee=new k0(Oe),be=new rg(v,Mt,pt,ve,z,m,c),Se=new H0(v,z,De),ke=new J0(R,ot,De,ve),fe=new og(R,Oe,ot),Re=new _g(R,Oe,ot),ot.programs=J.programs,v.capabilities=De,v.extensions=Oe,v.properties=ye,v.renderLists=$,v.shadowMap=Se,v.state=ve,v.info=ot}L();let re=new ic(v,R);this.xr=re,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let S=Oe.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=Oe.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(S){S!==void 0&&(k=S,this.setSize(U,V,!1))},this.getSize=function(S){return S.set(U,V)},this.setSize=function(S,N,G=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=S,V=N,t.width=Math.floor(S*k),t.height=Math.floor(N*k),G===!0&&(t.style.width=S+"px",t.style.height=N+"px"),this.setViewport(0,0,S,N)},this.getDrawingBufferSize=function(S){return S.set(U*k,V*k).floor()},this.setDrawingBufferSize=function(S,N,G){U=S,V=N,k=G,t.width=Math.floor(S*G),t.height=Math.floor(N*G),this.setViewport(0,0,S,N)},this.getCurrentViewport=function(S){return S.copy(D)},this.getViewport=function(S){return S.copy(de)},this.setViewport=function(S,N,G,X){S.isVector4?de.set(S.x,S.y,S.z,S.w):de.set(S,N,G,X),ve.viewport(D.copy(de).multiplyScalar(k).round())},this.getScissor=function(S){return S.copy(Ne)},this.setScissor=function(S,N,G,X){S.isVector4?Ne.set(S.x,S.y,S.z,S.w):Ne.set(S,N,G,X),ve.scissor(O.copy(Ne).multiplyScalar(k).round())},this.getScissorTest=function(){return Ye},this.setScissorTest=function(S){ve.setScissorTest(Ye=S)},this.setOpaqueSort=function(S){te=S},this.setTransparentSort=function(S){oe=S},this.getClearColor=function(S){return S.copy(be.getClearColor())},this.setClearColor=function(){be.setClearColor(...arguments)},this.getClearAlpha=function(){return be.getClearAlpha()},this.setClearAlpha=function(){be.setClearAlpha(...arguments)},this.clear=function(S=!0,N=!0,G=!0){let X=0;if(S){let F=!1;if(P!==null){let ie=P.texture.format;F=ie===Va||ie===za||ie===ka}if(F){let ie=P.texture.type,ue=ie===mn||ie===ai||ie===hs||ie===fs||ie===Oa||ie===Ba,_e=be.getClearColor(),me=be.getClearAlpha(),Ce=_e.r,Le=_e.g,Te=_e.b;ue?(g[0]=Ce,g[1]=Le,g[2]=Te,g[3]=me,R.clearBufferuiv(R.COLOR,0,g)):(_[0]=Ce,_[1]=Le,_[2]=Te,_[3]=me,R.clearBufferiv(R.COLOR,0,_))}else X|=R.COLOR_BUFFER_BIT}N&&(X|=R.DEPTH_BUFFER_BIT),G&&(X|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",ge,!1),t.removeEventListener("webglcontextcreationerror",ne,!1),be.dispose(),$.dispose(),Ee.dispose(),ye.dispose(),Mt.dispose(),pt.dispose(),z.dispose(),he.dispose(),ke.dispose(),J.dispose(),re.dispose(),re.removeEventListener("sessionstart",_n),re.removeEventListener("sessionend",Ac),fi.stop()};function le(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let S=ot.autoReset,N=Se.enabled,G=Se.autoUpdate,X=Se.needsUpdate,F=Se.type;L(),ot.autoReset=S,Se.enabled=N,Se.autoUpdate=G,Se.needsUpdate=X,Se.type=F}function ne(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function j(S){let N=S.target;N.removeEventListener("dispose",j),xe(N)}function xe(S){Fe(S),ye.remove(S)}function Fe(S){let N=ye.get(S).programs;N!==void 0&&(N.forEach(function(G){J.releaseProgram(G)}),S.isShaderMaterial&&J.releaseShaderCache(S))}this.renderBufferDirect=function(S,N,G,X,F,ie){N===null&&(N=Me);let ue=F.isMesh&&F.matrixWorld.determinant()<0,_e=Sf(S,N,G,X,F);ve.setMaterial(X,ue);let me=G.index,Ce=1;if(X.wireframe===!0){if(me=x.getWireframeAttribute(G),me===void 0)return;Ce=2}let Le=G.drawRange,Te=G.attributes.position,Xe=Le.start*Ce,tt=(Le.start+Le.count)*Ce;ie!==null&&(Xe=Math.max(Xe,ie.start*Ce),tt=Math.min(tt,(ie.start+ie.count)*Ce)),me!==null?(Xe=Math.max(Xe,0),tt=Math.min(tt,me.count)):Te!=null&&(Xe=Math.max(Xe,0),tt=Math.min(tt,Te.count));let dt=tt-Xe;if(dt<0||dt===1/0)return;he.setup(F,X,_e,G,me);let rt,it=fe;if(me!==null&&(rt=E.get(me),it=Re,it.setIndex(rt)),F.isMesh)X.wireframe===!0?(ve.setLineWidth(X.wireframeLinewidth*_t()),it.setMode(R.LINES)):it.setMode(R.TRIANGLES);else if(F.isLine){let Ae=X.linewidth;Ae===void 0&&(Ae=1),ve.setLineWidth(Ae*_t()),F.isLineSegments?it.setMode(R.LINES):F.isLineLoop?it.setMode(R.LINE_LOOP):it.setMode(R.LINE_STRIP)}else F.isPoints?it.setMode(R.POINTS):F.isSprite&&it.setMode(R.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)ns("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),it.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Oe.get("WEBGL_multi_draw"))it.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{let Ae=F._multiDrawStarts,lt=F._multiDrawCounts,$e=F._multiDrawCount,Vt=me?E.get(me).bytesPerElement:1,ki=ye.get(X).currentProgram.getUniforms();for(let Ht=0;Ht<$e;Ht++)ki.setValue(R,"_gl_DrawID",Ht),it.render(Ae[Ht]/Vt,lt[Ht])}else if(F.isInstancedMesh)it.renderInstances(Xe,dt,F.count);else if(G.isInstancedBufferGeometry){let Ae=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,lt=Math.min(G.instanceCount,Ae);it.renderInstances(Xe,dt,lt)}else it.render(Xe,dt)};function st(S,N,G){S.transparent===!0&&S.side===Sn&&S.forceSinglePass===!1?(S.side=Ft,S.needsUpdate=!0,Ir(S,N,G),S.side=Nn,S.needsUpdate=!0,Ir(S,N,G),S.side=Sn):Ir(S,N,G)}this.compile=function(S,N,G=null){G===null&&(G=S),f=Ee.get(G),f.init(N),M.push(f),G.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),S!==G&&S.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),f.setupLights();let X=new Set;return S.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;let ie=F.material;if(ie)if(Array.isArray(ie))for(let ue=0;ue<ie.length;ue++){let _e=ie[ue];st(_e,G,F),X.add(_e)}else st(ie,G,F),X.add(ie)}),f=M.pop(),X},this.compileAsync=function(S,N,G=null){let X=this.compile(S,N,G);return new Promise(F=>{function ie(){if(X.forEach(function(ue){ye.get(ue).currentProgram.isReady()&&X.delete(ue)}),X.size===0){F(S);return}setTimeout(ie,10)}Oe.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let Je=null;function An(S){Je&&Je(S)}function _n(){fi.stop()}function Ac(){fi.start()}let fi=new bu;fi.setAnimationLoop(An),typeof self<"u"&&fi.setContext(self),this.setAnimationLoop=function(S){Je=S,re.setAnimationLoop(S),S===null?fi.stop():fi.start()},re.addEventListener("sessionstart",_n),re.addEventListener("sessionend",Ac),this.render=function(S,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(N),N=re.getCamera()),S.isScene===!0&&S.onBeforeRender(v,S,N,P),f=Ee.get(S,M.length),f.init(N),M.push(f),Q.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),qe.setFromProjectionMatrix(Q,hn,N.reversedDepth),K=this.localClippingEnabled,Ie=ae.init(this.clippingPlanes,K),p=$.get(S,w.length),p.init(),w.push(p),re.enabled===!0&&re.isPresenting===!0){let ie=v.xr.getDepthSensingMesh();ie!==null&&Bo(ie,N,-1/0,v.sortObjects)}Bo(S,N,0,v.sortObjects),p.finish(),v.sortObjects===!0&&p.sort(te,oe),We=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,We&&be.addToRenderList(p,S),this.info.render.frame++,Ie===!0&&ae.beginShadows();let G=f.state.shadowsArray;Se.render(G,S,N),Ie===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();let X=p.opaque,F=p.transmissive;if(f.setupLights(),N.isArrayCamera){let ie=N.cameras;if(F.length>0)for(let ue=0,_e=ie.length;ue<_e;ue++){let me=ie[ue];Rc(X,F,S,me)}We&&be.render(S);for(let ue=0,_e=ie.length;ue<_e;ue++){let me=ie[ue];Cc(p,S,me,me.viewport)}}else F.length>0&&Rc(X,F,S,N),We&&be.render(S),Cc(p,S,N);P!==null&&I===0&&(ze.updateMultisampleRenderTarget(P),ze.updateRenderTargetMipmap(P)),S.isScene===!0&&S.onAfterRender(v,S,N),he.resetDefaultState(),y=-1,b=null,M.pop(),M.length>0?(f=M[M.length-1],Ie===!0&&ae.setGlobalState(v.clippingPlanes,f.state.camera)):f=null,w.pop(),w.length>0?p=w[w.length-1]:p=null};function Bo(S,N,G,X){if(S.visible===!1)return;if(S.layers.test(N.layers)){if(S.isGroup)G=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(N);else if(S.isLight)f.pushLight(S),S.castShadow&&f.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||qe.intersectsSprite(S)){X&&Pe.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Q);let ue=z.update(S),_e=S.material;_e.visible&&p.push(S,ue,_e,G,Pe.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||qe.intersectsObject(S))){let ue=z.update(S),_e=S.material;if(X&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Pe.copy(S.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),Pe.copy(ue.boundingSphere.center)),Pe.applyMatrix4(S.matrixWorld).applyMatrix4(Q)),Array.isArray(_e)){let me=ue.groups;for(let Ce=0,Le=me.length;Ce<Le;Ce++){let Te=me[Ce],Xe=_e[Te.materialIndex];Xe&&Xe.visible&&p.push(S,ue,Xe,G,Pe.z,Te)}}else _e.visible&&p.push(S,ue,_e,G,Pe.z,null)}}let ie=S.children;for(let ue=0,_e=ie.length;ue<_e;ue++)Bo(ie[ue],N,G,X)}function Cc(S,N,G,X){let F=S.opaque,ie=S.transmissive,ue=S.transparent;f.setupLightsView(G),Ie===!0&&ae.setGlobalState(v.clippingPlanes,G),X&&ve.viewport(D.copy(X)),F.length>0&&Rr(F,N,G),ie.length>0&&Rr(ie,N,G),ue.length>0&&Rr(ue,N,G),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function Rc(S,N,G,X){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[X.id]===void 0&&(f.state.transmissionRenderTarget[X.id]=new vn(1,1,{generateMipmaps:!0,type:Oe.has("EXT_color_buffer_half_float")||Oe.has("EXT_color_buffer_float")?us:mn,minFilter:ri,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));let ie=f.state.transmissionRenderTarget[X.id],ue=X.viewport||D;ie.setSize(ue.z*v.transmissionResolutionScale,ue.w*v.transmissionResolutionScale);let _e=v.getRenderTarget(),me=v.getActiveCubeFace(),Ce=v.getActiveMipmapLevel();v.setRenderTarget(ie),v.getClearColor(Y),T=v.getClearAlpha(),T<1&&v.setClearColor(16777215,.5),v.clear(),We&&be.render(G);let Le=v.toneMapping;v.toneMapping=On;let Te=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),f.setupLightsView(X),Ie===!0&&ae.setGlobalState(v.clippingPlanes,X),Rr(S,G,X),ze.updateMultisampleRenderTarget(ie),ze.updateRenderTargetMipmap(ie),Oe.has("WEBGL_multisampled_render_to_texture")===!1){let Xe=!1;for(let tt=0,dt=N.length;tt<dt;tt++){let rt=N[tt],it=rt.object,Ae=rt.geometry,lt=rt.material,$e=rt.group;if(lt.side===Sn&&it.layers.test(X.layers)){let Vt=lt.side;lt.side=Ft,lt.needsUpdate=!0,Ic(it,G,X,Ae,lt,$e),lt.side=Vt,lt.needsUpdate=!0,Xe=!0}}Xe===!0&&(ze.updateMultisampleRenderTarget(ie),ze.updateRenderTargetMipmap(ie))}v.setRenderTarget(_e,me,Ce),v.setClearColor(Y,T),Te!==void 0&&(X.viewport=Te),v.toneMapping=Le}function Rr(S,N,G){let X=N.isScene===!0?N.overrideMaterial:null;for(let F=0,ie=S.length;F<ie;F++){let ue=S[F],_e=ue.object,me=ue.geometry,Ce=ue.group,Le=ue.material;Le.allowOverride===!0&&X!==null&&(Le=X),_e.layers.test(G.layers)&&Ic(_e,N,G,me,Le,Ce)}}function Ic(S,N,G,X,F,ie){S.onBeforeRender(v,N,G,X,F,ie),S.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),F.onBeforeRender(v,N,G,X,S,ie),F.transparent===!0&&F.side===Sn&&F.forceSinglePass===!1?(F.side=Ft,F.needsUpdate=!0,v.renderBufferDirect(G,N,X,F,S,ie),F.side=Nn,F.needsUpdate=!0,v.renderBufferDirect(G,N,X,F,S,ie),F.side=Sn):v.renderBufferDirect(G,N,X,F,S,ie),S.onAfterRender(v,N,G,X,F,ie)}function Ir(S,N,G){N.isScene!==!0&&(N=Me);let X=ye.get(S),F=f.state.lights,ie=f.state.shadowsArray,ue=F.state.version,_e=J.getParameters(S,F.state,ie,N,G),me=J.getProgramCacheKey(_e),Ce=X.programs;X.environment=S.isMeshStandardMaterial?N.environment:null,X.fog=N.fog,X.envMap=(S.isMeshStandardMaterial?pt:Mt).get(S.envMap||X.environment),X.envMapRotation=X.environment!==null&&S.envMap===null?N.environmentRotation:S.envMapRotation,Ce===void 0&&(S.addEventListener("dispose",j),Ce=new Map,X.programs=Ce);let Le=Ce.get(me);if(Le!==void 0){if(X.currentProgram===Le&&X.lightsStateVersion===ue)return Dc(S,_e),Le}else _e.uniforms=J.getUniforms(S),S.onBeforeCompile(_e,v),Le=J.acquireProgram(_e,me),Ce.set(me,Le),X.uniforms=_e.uniforms;let Te=X.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Te.clippingPlanes=ae.uniform),Dc(S,_e),X.needsLights=wf(S),X.lightsStateVersion=ue,X.needsLights&&(Te.ambientLightColor.value=F.state.ambient,Te.lightProbe.value=F.state.probe,Te.directionalLights.value=F.state.directional,Te.directionalLightShadows.value=F.state.directionalShadow,Te.spotLights.value=F.state.spot,Te.spotLightShadows.value=F.state.spotShadow,Te.rectAreaLights.value=F.state.rectArea,Te.ltc_1.value=F.state.rectAreaLTC1,Te.ltc_2.value=F.state.rectAreaLTC2,Te.pointLights.value=F.state.point,Te.pointLightShadows.value=F.state.pointShadow,Te.hemisphereLights.value=F.state.hemi,Te.directionalShadowMap.value=F.state.directionalShadowMap,Te.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Te.spotShadowMap.value=F.state.spotShadowMap,Te.spotLightMatrix.value=F.state.spotLightMatrix,Te.spotLightMap.value=F.state.spotLightMap,Te.pointShadowMap.value=F.state.pointShadowMap,Te.pointShadowMatrix.value=F.state.pointShadowMatrix),X.currentProgram=Le,X.uniformsList=null,Le}function Pc(S){if(S.uniformsList===null){let N=S.currentProgram.getUniforms();S.uniformsList=_s.seqWithValue(N.seq,S.uniforms)}return S.uniformsList}function Dc(S,N){let G=ye.get(S);G.outputColorSpace=N.outputColorSpace,G.batching=N.batching,G.batchingColor=N.batchingColor,G.instancing=N.instancing,G.instancingColor=N.instancingColor,G.instancingMorph=N.instancingMorph,G.skinning=N.skinning,G.morphTargets=N.morphTargets,G.morphNormals=N.morphNormals,G.morphColors=N.morphColors,G.morphTargetsCount=N.morphTargetsCount,G.numClippingPlanes=N.numClippingPlanes,G.numIntersection=N.numClipIntersection,G.vertexAlphas=N.vertexAlphas,G.vertexTangents=N.vertexTangents,G.toneMapping=N.toneMapping}function Sf(S,N,G,X,F){N.isScene!==!0&&(N=Me),ze.resetTextureUnits();let ie=N.fog,ue=X.isMeshStandardMaterial?N.environment:null,_e=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Mi,me=(X.isMeshStandardMaterial?pt:Mt).get(X.envMap||ue),Ce=X.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Le=!!G.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Te=!!G.morphAttributes.position,Xe=!!G.morphAttributes.normal,tt=!!G.morphAttributes.color,dt=On;X.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(dt=v.toneMapping);let rt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,it=rt!==void 0?rt.length:0,Ae=ye.get(X),lt=f.state.lights;if(Ie===!0&&(K===!0||S!==b)){let Pt=S===b&&X.id===y;ae.setState(X,S,Pt)}let $e=!1;X.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==lt.state.version||Ae.outputColorSpace!==_e||F.isBatchedMesh&&Ae.batching===!1||!F.isBatchedMesh&&Ae.batching===!0||F.isBatchedMesh&&Ae.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Ae.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Ae.instancing===!1||!F.isInstancedMesh&&Ae.instancing===!0||F.isSkinnedMesh&&Ae.skinning===!1||!F.isSkinnedMesh&&Ae.skinning===!0||F.isInstancedMesh&&Ae.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ae.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ae.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ae.instancingMorph===!1&&F.morphTexture!==null||Ae.envMap!==me||X.fog===!0&&Ae.fog!==ie||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==ae.numPlanes||Ae.numIntersection!==ae.numIntersection)||Ae.vertexAlphas!==Ce||Ae.vertexTangents!==Le||Ae.morphTargets!==Te||Ae.morphNormals!==Xe||Ae.morphColors!==tt||Ae.toneMapping!==dt||Ae.morphTargetsCount!==it)&&($e=!0):($e=!0,Ae.__version=X.version);let Vt=Ae.currentProgram;$e===!0&&(Vt=Ir(X,N,F));let ki=!1,Ht=!1,Es=!1,ct=Vt.getUniforms(),$t=Ae.uniforms;if(ve.useProgram(Vt.program)&&(ki=!0,Ht=!0,Es=!0),X.id!==y&&(y=X.id,Ht=!0),ki||b!==S){ve.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),ct.setValue(R,"projectionMatrix",S.projectionMatrix),ct.setValue(R,"viewMatrix",S.matrixWorldInverse);let kt=ct.map.cameraPosition;kt!==void 0&&kt.setValue(R,pe.setFromMatrixPosition(S.matrixWorld)),De.logarithmicDepthBuffer&&ct.setValue(R,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&ct.setValue(R,"isOrthographic",S.isOrthographicCamera===!0),b!==S&&(b=S,Ht=!0,Es=!0)}if(F.isSkinnedMesh){ct.setOptional(R,F,"bindMatrix"),ct.setOptional(R,F,"bindMatrixInverse");let Pt=F.skeleton;Pt&&(Pt.boneTexture===null&&Pt.computeBoneTexture(),ct.setValue(R,"boneTexture",Pt.boneTexture,ze))}F.isBatchedMesh&&(ct.setOptional(R,F,"batchingTexture"),ct.setValue(R,"batchingTexture",F._matricesTexture,ze),ct.setOptional(R,F,"batchingIdTexture"),ct.setValue(R,"batchingIdTexture",F._indirectTexture,ze),ct.setOptional(R,F,"batchingColorTexture"),F._colorsTexture!==null&&ct.setValue(R,"batchingColorTexture",F._colorsTexture,ze));let Kt=G.morphAttributes;if((Kt.position!==void 0||Kt.normal!==void 0||Kt.color!==void 0)&&se.update(F,G,Vt),(Ht||Ae.receiveShadow!==F.receiveShadow)&&(Ae.receiveShadow=F.receiveShadow,ct.setValue(R,"receiveShadow",F.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&($t.envMap.value=me,$t.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&N.environment!==null&&($t.envMapIntensity.value=N.environmentIntensity),Ht&&(ct.setValue(R,"toneMappingExposure",v.toneMappingExposure),Ae.needsLights&&bf($t,Es),ie&&X.fog===!0&&ee.refreshFogUniforms($t,ie),ee.refreshMaterialUniforms($t,X,k,V,f.state.transmissionRenderTarget[S.id]),_s.upload(R,Pc(Ae),$t,ze)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(_s.upload(R,Pc(Ae),$t,ze),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&ct.setValue(R,"center",F.center),ct.setValue(R,"modelViewMatrix",F.modelViewMatrix),ct.setValue(R,"normalMatrix",F.normalMatrix),ct.setValue(R,"modelMatrix",F.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){let Pt=X.uniformsGroups;for(let kt=0,ko=Pt.length;kt<ko;kt++){let di=Pt[kt];ke.update(di,Vt),ke.bind(di,Vt)}}return Vt}function bf(S,N){S.ambientLightColor.needsUpdate=N,S.lightProbe.needsUpdate=N,S.directionalLights.needsUpdate=N,S.directionalLightShadows.needsUpdate=N,S.pointLights.needsUpdate=N,S.pointLightShadows.needsUpdate=N,S.spotLights.needsUpdate=N,S.spotLightShadows.needsUpdate=N,S.rectAreaLights.needsUpdate=N,S.hemisphereLights.needsUpdate=N}function wf(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(S,N,G){let X=ye.get(S);X.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),ye.get(S.texture).__webglTexture=N,ye.get(S.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:G,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,N){let G=ye.get(S);G.__webglFramebuffer=N,G.__useDefaultFramebuffer=N===void 0};let Ef=R.createFramebuffer();this.setRenderTarget=function(S,N=0,G=0){P=S,C=N,I=G;let X=!0,F=null,ie=!1,ue=!1;if(S){let me=ye.get(S);if(me.__useDefaultFramebuffer!==void 0)ve.bindFramebuffer(R.FRAMEBUFFER,null),X=!1;else if(me.__webglFramebuffer===void 0)ze.setupRenderTarget(S);else if(me.__hasExternalTextures)ze.rebindTextures(S,ye.get(S.texture).__webglTexture,ye.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Te=S.depthTexture;if(me.__boundDepthTexture!==Te){if(Te!==null&&ye.has(Te)&&(S.width!==Te.image.width||S.height!==Te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ze.setupDepthRenderbuffer(S)}}let Ce=S.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(ue=!0);let Le=ye.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Le[N])?F=Le[N][G]:F=Le[N],ie=!0):S.samples>0&&ze.useMultisampledRTT(S)===!1?F=ye.get(S).__webglMultisampledFramebuffer:Array.isArray(Le)?F=Le[G]:F=Le,D.copy(S.viewport),O.copy(S.scissor),H=S.scissorTest}else D.copy(de).multiplyScalar(k).floor(),O.copy(Ne).multiplyScalar(k).floor(),H=Ye;if(G!==0&&(F=Ef),ve.bindFramebuffer(R.FRAMEBUFFER,F)&&X&&ve.drawBuffers(S,F),ve.viewport(D),ve.scissor(O),ve.setScissorTest(H),ie){let me=ye.get(S.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+N,me.__webglTexture,G)}else if(ue){let me=N;for(let Ce=0;Ce<S.textures.length;Ce++){let Le=ye.get(S.textures[Ce]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+Ce,Le.__webglTexture,G,me)}}else if(S!==null&&G!==0){let me=ye.get(S.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,me.__webglTexture,G)}y=-1},this.readRenderTargetPixels=function(S,N,G,X,F,ie,ue,_e=0){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let me=ye.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ue!==void 0&&(me=me[ue]),me){ve.bindFramebuffer(R.FRAMEBUFFER,me);try{let Ce=S.textures[_e],Le=Ce.format,Te=Ce.type;if(!De.textureFormatReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!De.textureTypeReadable(Te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=S.width-X&&G>=0&&G<=S.height-F&&(S.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+_e),R.readPixels(N,G,X,F,we.convert(Le),we.convert(Te),ie))}finally{let Ce=P!==null?ye.get(P).__webglFramebuffer:null;ve.bindFramebuffer(R.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(S,N,G,X,F,ie,ue,_e=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let me=ye.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ue!==void 0&&(me=me[ue]),me)if(N>=0&&N<=S.width-X&&G>=0&&G<=S.height-F){ve.bindFramebuffer(R.FRAMEBUFFER,me);let Ce=S.textures[_e],Le=Ce.format,Te=Ce.type;if(!De.textureFormatReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!De.textureTypeReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Xe=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Xe),R.bufferData(R.PIXEL_PACK_BUFFER,ie.byteLength,R.STREAM_READ),S.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+_e),R.readPixels(N,G,X,F,we.convert(Le),we.convert(Te),0);let tt=P!==null?ye.get(P).__webglFramebuffer:null;ve.bindFramebuffer(R.FRAMEBUFFER,tt);let dt=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Kh(R,dt,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Xe),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,ie),R.deleteBuffer(Xe),R.deleteSync(dt),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,N=null,G=0){let X=Math.pow(2,-G),F=Math.floor(S.image.width*X),ie=Math.floor(S.image.height*X),ue=N!==null?N.x:0,_e=N!==null?N.y:0;ze.setTexture2D(S,0),R.copyTexSubImage2D(R.TEXTURE_2D,G,0,0,ue,_e,F,ie),ve.unbindTexture()};let Tf=R.createFramebuffer(),Af=R.createFramebuffer();this.copyTextureToTexture=function(S,N,G=null,X=null,F=0,ie=null){ie===null&&(F!==0?(ns("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ie=F,F=0):ie=0);let ue,_e,me,Ce,Le,Te,Xe,tt,dt,rt=S.isCompressedTexture?S.mipmaps[ie]:S.image;if(G!==null)ue=G.max.x-G.min.x,_e=G.max.y-G.min.y,me=G.isBox3?G.max.z-G.min.z:1,Ce=G.min.x,Le=G.min.y,Te=G.isBox3?G.min.z:0;else{let Kt=Math.pow(2,-F);ue=Math.floor(rt.width*Kt),_e=Math.floor(rt.height*Kt),S.isDataArrayTexture?me=rt.depth:S.isData3DTexture?me=Math.floor(rt.depth*Kt):me=1,Ce=0,Le=0,Te=0}X!==null?(Xe=X.x,tt=X.y,dt=X.z):(Xe=0,tt=0,dt=0);let it=we.convert(N.format),Ae=we.convert(N.type),lt;N.isData3DTexture?(ze.setTexture3D(N,0),lt=R.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(ze.setTexture2DArray(N,0),lt=R.TEXTURE_2D_ARRAY):(ze.setTexture2D(N,0),lt=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,N.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,N.unpackAlignment);let $e=R.getParameter(R.UNPACK_ROW_LENGTH),Vt=R.getParameter(R.UNPACK_IMAGE_HEIGHT),ki=R.getParameter(R.UNPACK_SKIP_PIXELS),Ht=R.getParameter(R.UNPACK_SKIP_ROWS),Es=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,rt.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,rt.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ce),R.pixelStorei(R.UNPACK_SKIP_ROWS,Le),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Te);let ct=S.isDataArrayTexture||S.isData3DTexture,$t=N.isDataArrayTexture||N.isData3DTexture;if(S.isDepthTexture){let Kt=ye.get(S),Pt=ye.get(N),kt=ye.get(Kt.__renderTarget),ko=ye.get(Pt.__renderTarget);ve.bindFramebuffer(R.READ_FRAMEBUFFER,kt.__webglFramebuffer),ve.bindFramebuffer(R.DRAW_FRAMEBUFFER,ko.__webglFramebuffer);for(let di=0;di<me;di++)ct&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,ye.get(S).__webglTexture,F,Te+di),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,ye.get(N).__webglTexture,ie,dt+di)),R.blitFramebuffer(Ce,Le,ue,_e,Xe,tt,ue,_e,R.DEPTH_BUFFER_BIT,R.NEAREST);ve.bindFramebuffer(R.READ_FRAMEBUFFER,null),ve.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(F!==0||S.isRenderTargetTexture||ye.has(S)){let Kt=ye.get(S),Pt=ye.get(N);ve.bindFramebuffer(R.READ_FRAMEBUFFER,Tf),ve.bindFramebuffer(R.DRAW_FRAMEBUFFER,Af);for(let kt=0;kt<me;kt++)ct?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Kt.__webglTexture,F,Te+kt):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Kt.__webglTexture,F),$t?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Pt.__webglTexture,ie,dt+kt):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Pt.__webglTexture,ie),F!==0?R.blitFramebuffer(Ce,Le,ue,_e,Xe,tt,ue,_e,R.COLOR_BUFFER_BIT,R.NEAREST):$t?R.copyTexSubImage3D(lt,ie,Xe,tt,dt+kt,Ce,Le,ue,_e):R.copyTexSubImage2D(lt,ie,Xe,tt,Ce,Le,ue,_e);ve.bindFramebuffer(R.READ_FRAMEBUFFER,null),ve.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else $t?S.isDataTexture||S.isData3DTexture?R.texSubImage3D(lt,ie,Xe,tt,dt,ue,_e,me,it,Ae,rt.data):N.isCompressedArrayTexture?R.compressedTexSubImage3D(lt,ie,Xe,tt,dt,ue,_e,me,it,rt.data):R.texSubImage3D(lt,ie,Xe,tt,dt,ue,_e,me,it,Ae,rt):S.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,ie,Xe,tt,ue,_e,it,Ae,rt.data):S.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,ie,Xe,tt,rt.width,rt.height,it,rt.data):R.texSubImage2D(R.TEXTURE_2D,ie,Xe,tt,ue,_e,it,Ae,rt);R.pixelStorei(R.UNPACK_ROW_LENGTH,$e),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Vt),R.pixelStorei(R.UNPACK_SKIP_PIXELS,ki),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ht),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Es),ie===0&&N.generateMipmaps&&R.generateMipmap(lt),ve.unbindTexture()},this.initRenderTarget=function(S){ye.get(S).__webglFramebuffer===void 0&&ze.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?ze.setTextureCube(S,0):S.isData3DTexture?ze.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?ze.setTexture2DArray(S,0):ze.setTexture2D(S,0),ve.unbindTexture()},this.resetState=function(){C=0,I=0,P=null,ve.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}};var Cu={type:"change"},ac={type:"start"},Iu={type:"end"},bo=new ti,Ru=new Qt,Q0=Math.cos(70*Bl.DEG2RAD),yt=new B,zt=2*Math.PI,nt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},rc=1e-6,wo=class extends tr{constructor(e,t=null){super(e,t),this.state=nt.NONE,this.target=new B,this.cursor=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:pn.ROTATE,MIDDLE:pn.DOLLY,RIGHT:pn.PAN},this.touches={ONE:si.ROTATE,TWO:si.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new B,this._lastQuaternion=new tn,this._lastTargetPosition=new B,this._quat=new tn().setFromUnitVectors(e.up,new B(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new cs,this._sphericalDelta=new cs,this._scale=1,this._panOffset=new B,this._rotateStart=new Ue,this._rotateEnd=new Ue,this._rotateDelta=new Ue,this._panStart=new Ue,this._panEnd=new Ue,this._panDelta=new Ue,this._dollyStart=new Ue,this._dollyEnd=new Ue,this._dollyDelta=new Ue,this._dollyDirection=new B,this._mouse=new Ue,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=t_.bind(this),this._onPointerDown=e_.bind(this),this._onPointerUp=n_.bind(this),this._onContextMenu=c_.bind(this),this._onMouseWheel=r_.bind(this),this._onKeyDown=a_.bind(this),this._onTouchStart=o_.bind(this),this._onTouchMove=l_.bind(this),this._onMouseDown=i_.bind(this),this._onMouseMove=s_.bind(this),this._interceptControlDown=h_.bind(this),this._interceptControlUp=u_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Cu),this.update(),this.state=nt.NONE}update(e=null){let t=this.object.position;yt.copy(t).sub(this.target),yt.applyQuaternion(this._quat),this._spherical.setFromVector3(yt),this.autoRotate&&this.state===nt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=zt:i>Math.PI&&(i-=zt),s<-Math.PI?s+=zt:s>Math.PI&&(s-=zt),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(yt.setFromSpherical(this._spherical),yt.applyQuaternion(this._quatInverse),t.copy(this.target).add(yt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=yt.length();a=this._clampDistance(o*this._scale);let c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let o=new B(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let l=new B(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=yt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(bo.origin.copy(this.object.position),bo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(bo.direction))<Q0?this.object.lookAt(this.target):(Ru.setFromNormalAndCoplanarPoint(this.object.up,this.target),bo.intersectPlane(Ru,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>rc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>rc||this._lastTargetPosition.distanceToSquared(this.target)>rc?(this.dispatchEvent(Cu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?zt/60*this.autoRotateSpeed*e:zt/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){yt.setFromMatrixColumn(t,0),yt.multiplyScalar(-e),this._panOffset.add(yt)}_panUp(e,t){this.screenSpacePanning===!0?yt.setFromMatrixColumn(t,1):(yt.setFromMatrixColumn(t,0),yt.crossVectors(this.object.up,yt)),yt.multiplyScalar(e),this._panOffset.add(yt)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;yt.copy(s).sub(this.target);let r=yt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(zt*this._rotateDelta.x/t.clientHeight),this._rotateUp(zt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(zt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-zt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(zt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-zt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(zt*this._rotateDelta.x/t.clientHeight),this._rotateUp(zt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ue,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function e_(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function t_(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function n_(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Iu),this.state=nt.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function i_(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case pn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=nt.DOLLY;break;case pn.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=nt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=nt.ROTATE}break;case pn.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=nt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=nt.PAN}break;default:this.state=nt.NONE}this.state!==nt.NONE&&this.dispatchEvent(ac)}function s_(n){switch(this.state){case nt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case nt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case nt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function r_(n){this.enabled===!1||this.enableZoom===!1||this.state!==nt.NONE||(n.preventDefault(),this.dispatchEvent(ac),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Iu))}function a_(n){this.enabled!==!1&&this._handleKeyDown(n)}function o_(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case si.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=nt.TOUCH_ROTATE;break;case si.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=nt.TOUCH_PAN;break;default:this.state=nt.NONE}break;case 2:switch(this.touches.TWO){case si.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=nt.TOUCH_DOLLY_PAN;break;case si.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=nt.TOUCH_DOLLY_ROTATE;break;default:this.state=nt.NONE}break;default:this.state=nt.NONE}this.state!==nt.NONE&&this.dispatchEvent(ac)}function l_(n){switch(this._trackPointer(n),this.state){case nt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case nt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case nt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case nt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=nt.NONE}}function c_(n){this.enabled!==!1&&n.preventDefault()}function h_(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function u_(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function cc(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=Du(n,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(i&&(r=g_(n,e,r,t)),n.length>80*t){o=n[0],c=n[1];let h=o,u=c;for(let d=t;d<s;d+=t){let m=n[d],g=n[d+1];m<o&&(o=m),g<c&&(c=g),m>h&&(h=m),g>u&&(u=g)}l=Math.max(h-o,u-c),l=l!==0?32767/l:0}return hr(r,a,t,o,c,l,0),a}function Du(n,e,t,i,s){let r;if(s===A_(n,e,t,i)>0)for(let a=e;a<t;a+=i)r=Pu(a/i|0,n[a],n[a+1],r);else for(let a=t-i;a>=e;a-=i)r=Pu(a/i|0,n[a],n[a+1],r);return r&&vs(r,r.next)&&(fr(r),r=r.next),r}function Li(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(vs(t,t.next)||ft(t.prev,t,t.next)===0)){if(fr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function hr(n,e,t,i,s,r,a){if(!n)return;!a&&r&&M_(n,i,s,r);let o=n;for(;n.prev!==n.next;){let c=n.prev,l=n.next;if(r?d_(n,i,s,r):f_(n)){e.push(c.i,n.i,l.i),fr(n),n=l.next,o=l.next;continue}if(n=l,n===o){a?a===1?(n=p_(Li(n),e),hr(n,e,t,i,s,r,2)):a===2&&m_(n,e,t,i,s,r):hr(Li(n),e,t,i,s,r,1);break}}}function f_(n){let e=n.prev,t=n,i=n.next;if(ft(e,t,i)>=0)return!1;let s=e.x,r=t.x,a=i.x,o=e.y,c=t.y,l=i.y,h=Math.min(s,r,a),u=Math.min(o,c,l),d=Math.max(s,r,a),m=Math.max(o,c,l),g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=m&&cr(s,o,r,c,a,l,g.x,g.y)&&ft(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function d_(n,e,t,i){let s=n.prev,r=n,a=n.next;if(ft(s,r,a)>=0)return!1;let o=s.x,c=r.x,l=a.x,h=s.y,u=r.y,d=a.y,m=Math.min(o,c,l),g=Math.min(h,u,d),_=Math.max(o,c,l),p=Math.max(h,u,d),f=oc(m,g,e,t,i),w=oc(_,p,e,t,i),M=n.prevZ,v=n.nextZ;for(;M&&M.z>=f&&v&&v.z<=w;){if(M.x>=m&&M.x<=_&&M.y>=g&&M.y<=p&&M!==s&&M!==a&&cr(o,h,c,u,l,d,M.x,M.y)&&ft(M.prev,M,M.next)>=0||(M=M.prevZ,v.x>=m&&v.x<=_&&v.y>=g&&v.y<=p&&v!==s&&v!==a&&cr(o,h,c,u,l,d,v.x,v.y)&&ft(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;M&&M.z>=f;){if(M.x>=m&&M.x<=_&&M.y>=g&&M.y<=p&&M!==s&&M!==a&&cr(o,h,c,u,l,d,M.x,M.y)&&ft(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;v&&v.z<=w;){if(v.x>=m&&v.x<=_&&v.y>=g&&v.y<=p&&v!==s&&v!==a&&cr(o,h,c,u,l,d,v.x,v.y)&&ft(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function p_(n,e){let t=n;do{let i=t.prev,s=t.next.next;!vs(i,s)&&Uu(i,t,t.next,s)&&ur(i,s)&&ur(s,i)&&(e.push(i.i,t.i,s.i),fr(t),fr(t.next),t=n=s),t=t.next}while(t!==n);return Li(t)}function m_(n,e,t,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&w_(a,o)){let c=Nu(a,o);a=Li(a,a.next),c=Li(c,c.next),hr(a,e,t,i,s,r,0),hr(c,e,t,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function g_(n,e,t,i){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*i,c=r<a-1?e[r+1]*i:n.length,l=Du(n,o,c,i,!1);l===l.next&&(l.steiner=!0),s.push(b_(l))}s.sort(__);for(let r=0;r<s.length;r++)t=x_(s[r],t);return t}function __(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function x_(n,e){let t=v_(n,e);if(!t)return e;let i=Nu(t,n);return Li(i,i.next),Li(t,t.next)}function v_(n,e){let t=e,i=n.x,s=n.y,r=-1/0,a;if(vs(n,t))return t;do{if(vs(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=i&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===i))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,c=a.x,l=a.y,h=1/0;t=a;do{if(i>=t.x&&t.x>=c&&i!==t.x&&Lu(s<l?i:r,s,c,l,s<l?r:i,s,t.x,t.y)){let u=Math.abs(s-t.y)/(i-t.x);ur(t,n)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&y_(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function y_(n,e){return ft(n.prev,n,e.prev)<0&&ft(e.next,n,n.next)<0}function M_(n,e,t,i){let s=n;do s.z===0&&(s.z=oc(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,S_(s)}function S_(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let a=i,o=0;for(let l=0;l<t&&(o++,a=a.nextZ,!!a);l++);let c=t;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||i.z<=a.z)?(s=i,i=i.nextZ,o--):(s=a,a=a.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=a}r.nextZ=null,t*=2}while(e>1);return n}function oc(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function b_(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Lu(n,e,t,i,s,r,a,o){return(s-a)*(e-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(i-o)}function cr(n,e,t,i,s,r,a,o){return!(n===a&&e===o)&&Lu(n,e,t,i,s,r,a,o)}function w_(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!E_(n,e)&&(ur(n,e)&&ur(e,n)&&T_(n,e)&&(ft(n.prev,n,e.prev)||ft(n,e.prev,e))||vs(n,e)&&ft(n.prev,n,n.next)>0&&ft(e.prev,e,e.next)>0)}function ft(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function vs(n,e){return n.x===e.x&&n.y===e.y}function Uu(n,e,t,i){let s=To(ft(n,e,t)),r=To(ft(n,e,i)),a=To(ft(t,i,n)),o=To(ft(t,i,e));return!!(s!==r&&a!==o||s===0&&Eo(n,t,e)||r===0&&Eo(n,i,e)||a===0&&Eo(t,n,i)||o===0&&Eo(t,e,i))}function Eo(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function To(n){return n>0?1:n<0?-1:0}function E_(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Uu(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function ur(n,e){return ft(n.prev,n,n.next)<0?ft(n,e,n.next)>=0&&ft(n,n.prev,e)>=0:ft(n,e,n.prev)<0||ft(n,n.next,e)<0}function T_(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Nu(n,e){let t=lc(n.i,n.x,n.y),i=lc(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Pu(n,e,t,i){let s=lc(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function fr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function lc(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function A_(n,e,t,i){let s=0;for(let r=e,a=t-i;r<t;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}var Et=Uint8Array,Zt=Uint16Array,mc=Int32Array,gc=new Et([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),_c=new Et([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Fu=new Et([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Hu=function(n,e){for(var t=new Zt(31),i=0;i<31;++i)t[i]=e+=1<<n[i-1];for(var s=new mc(t[30]),i=1;i<30;++i)for(var r=t[i];r<t[i+1];++r)s[r]=r-t[i]<<5|i;return{b:t,r:s}},Gu=Hu(gc,2),C_=Gu.b,uc=Gu.r;C_[28]=258,uc[258]=28;var Wu=Hu(_c,0),SM=Wu.b,Ou=Wu.r,fc=new Zt(32768);for(Ke=0;Ke<32768;++Ke)kn=(Ke&43690)>>1|(Ke&21845)<<1,kn=(kn&52428)>>2|(kn&13107)<<2,kn=(kn&61680)>>4|(kn&3855)<<4,fc[Ke]=((kn&65280)>>8|(kn&255)<<8)>>1;var kn,Ke,mr=(function(n,e,t){for(var i=n.length,s=0,r=new Zt(e);s<i;++s)n[s]&&++r[n[s]-1];var a=new Zt(e);for(s=1;s<e;++s)a[s]=a[s-1]+r[s-1]<<1;var o;if(t){o=new Zt(1<<e);var c=15-e;for(s=0;s<i;++s)if(n[s])for(var l=s<<4|n[s],h=e-n[s],u=a[n[s]-1]++<<h,d=u|(1<<h)-1;u<=d;++u)o[fc[u]>>c]=l}else for(o=new Zt(i),s=0;s<i;++s)n[s]&&(o[s]=fc[a[n[s]-1]++]>>15-n[s]);return o}),Ui=new Et(288);for(Ke=0;Ke<144;++Ke)Ui[Ke]=8;var Ke;for(Ke=144;Ke<256;++Ke)Ui[Ke]=9;var Ke;for(Ke=256;Ke<280;++Ke)Ui[Ke]=7;var Ke;for(Ke=280;Ke<288;++Ke)Ui[Ke]=8;var Ke,Ao=new Et(32);for(Ke=0;Ke<32;++Ke)Ao[Ke]=5;var Ke,R_=mr(Ui,9,0);var I_=mr(Ao,5,0);var Xu=function(n){return(n+7)/8|0},qu=function(n,e,t){return(e==null||e<0)&&(e=0),(t==null||t>n.length)&&(t=n.length),new Et(n.subarray(e,t))};var P_=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Co=function(n,e,t){var i=new Error(e||P_[n]);if(i.code=n,Error.captureStackTrace&&Error.captureStackTrace(i,Co),!t)throw i;return i};var zn=function(n,e,t){t<<=e&7;var i=e/8|0;n[i]|=t,n[i+1]|=t>>8},dr=function(n,e,t){t<<=e&7;var i=e/8|0;n[i]|=t,n[i+1]|=t>>8,n[i+2]|=t>>16},hc=function(n,e){for(var t=[],i=0;i<n.length;++i)n[i]&&t.push({s:i,f:n[i]});var s=t.length,r=t.slice();if(!s)return{t:Zu,l:0};if(s==1){var a=new Et(t[0].s+1);return a[t[0].s]=1,{t:a,l:1}}t.sort(function(A,C){return A.f-C.f}),t.push({s:-1,f:25001});var o=t[0],c=t[1],l=0,h=1,u=2;for(t[0]={s:-1,f:o.f+c.f,l:o,r:c};h!=s-1;)o=t[t[l].f<t[u].f?l++:u++],c=t[l!=h&&t[l].f<t[u].f?l++:u++],t[h++]={s:-1,f:o.f+c.f,l:o,r:c};for(var d=r[0].s,i=1;i<s;++i)r[i].s>d&&(d=r[i].s);var m=new Zt(d+1),g=dc(t[h-1],m,0);if(g>e){var i=0,_=0,p=g-e,f=1<<p;for(r.sort(function(C,I){return m[I.s]-m[C.s]||C.f-I.f});i<s;++i){var w=r[i].s;if(m[w]>e)_+=f-(1<<g-m[w]),m[w]=e;else break}for(_>>=p;_>0;){var M=r[i].s;m[M]<e?_-=1<<e-m[M]++-1:++i}for(;i>=0&&_;--i){var v=r[i].s;m[v]==e&&(--m[v],++_)}g=e}return{t:new Et(m),l:g}},dc=function(n,e,t){return n.s==-1?Math.max(dc(n.l,e,t+1),dc(n.r,e,t+1)):e[n.s]=t},Bu=function(n){for(var e=n.length;e&&!n[--e];);for(var t=new Zt(++e),i=0,s=n[0],r=1,a=function(c){t[i++]=c},o=1;o<=e;++o)if(n[o]==s&&o!=e)++r;else{if(!s&&r>2){for(;r>138;r-=138)a(32754);r>2&&(a(r>10?r-11<<5|28690:r-3<<5|12305),r=0)}else if(r>3){for(a(s),--r;r>6;r-=6)a(8304);r>2&&(a(r-3<<5|8208),r=0)}for(;r--;)a(s);r=1,s=n[o]}return{c:t.subarray(0,i),n:e}},pr=function(n,e){for(var t=0,i=0;i<e.length;++i)t+=n[i]*e[i];return t},Yu=function(n,e,t){var i=t.length,s=Xu(e+2);n[s]=i&255,n[s+1]=i>>8,n[s+2]=n[s]^255,n[s+3]=n[s+1]^255;for(var r=0;r<i;++r)n[s+r+4]=t[r];return(s+4+i)*8},ku=function(n,e,t,i,s,r,a,o,c,l,h){zn(e,h++,t),++s[256];for(var u=hc(s,15),d=u.t,m=u.l,g=hc(r,15),_=g.t,p=g.l,f=Bu(d),w=f.c,M=f.n,v=Bu(_),A=v.c,C=v.n,I=new Zt(19),P=0;P<w.length;++P)++I[w[P]&31];for(var P=0;P<A.length;++P)++I[A[P]&31];for(var y=hc(I,7),b=y.t,D=y.l,O=19;O>4&&!b[Fu[O-1]];--O);var H=l+5<<3,Y=pr(s,Ui)+pr(r,Ao)+a,T=pr(s,d)+pr(r,_)+a+14+3*O+pr(I,b)+2*I[16]+3*I[17]+7*I[18];if(c>=0&&H<=Y&&H<=T)return Yu(e,h,n.subarray(c,c+l));var U,V,k,te;if(zn(e,h,1+(T<Y)),h+=2,T<Y){U=mr(d,m,0),V=d,k=mr(_,p,0),te=_;var oe=mr(b,D,0);zn(e,h,M-257),zn(e,h+5,C-1),zn(e,h+10,O-4),h+=14;for(var P=0;P<O;++P)zn(e,h+3*P,b[Fu[P]]);h+=3*O;for(var de=[w,A],Ne=0;Ne<2;++Ne)for(var Ye=de[Ne],P=0;P<Ye.length;++P){var qe=Ye[P]&31;zn(e,h,oe[qe]),h+=b[qe],qe>15&&(zn(e,h,Ye[P]>>5&127),h+=Ye[P]>>12)}}else U=R_,V=Ui,k=I_,te=Ao;for(var P=0;P<o;++P){var Ie=i[P];if(Ie>255){var qe=Ie>>18&31;dr(e,h,U[qe+257]),h+=V[qe+257],qe>7&&(zn(e,h,Ie>>23&31),h+=gc[qe]);var K=Ie&31;dr(e,h,k[K]),h+=te[K],K>3&&(dr(e,h,Ie>>5&8191),h+=_c[K])}else dr(e,h,U[Ie]),h+=V[Ie]}return dr(e,h,U[256]),h+V[256]},D_=new mc([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),Zu=new Et(0),L_=function(n,e,t,i,s,r){var a=r.z||n.length,o=new Et(i+a+5*(1+Math.ceil(a/7e3))+s),c=o.subarray(i,o.length-s),l=r.l,h=(r.r||0)&7;if(e){h&&(c[0]=r.r>>3);for(var u=D_[e-1],d=u>>13,m=u&8191,g=(1<<t)-1,_=r.p||new Zt(32768),p=r.h||new Zt(g+1),f=Math.ceil(t/3),w=2*f,M=function(et){return(n[et]^n[et+1]<<f^n[et+2]<<w)&g},v=new mc(25e3),A=new Zt(288),C=new Zt(32),I=0,P=0,y=r.i||0,b=0,D=r.w||0,O=0;y+2<a;++y){var H=M(y),Y=y&32767,T=p[H];if(_[Y]=T,p[H]=Y,D<=y){var U=a-y;if((I>7e3||b>24576)&&(U>423||!l)){h=ku(n,c,0,v,A,C,P,b,O,y-O,h),b=I=P=0,O=y;for(var V=0;V<286;++V)A[V]=0;for(var V=0;V<30;++V)C[V]=0}var k=2,te=0,oe=m,de=Y-T&32767;if(U>2&&H==M(y-de))for(var Ne=Math.min(d,U)-1,Ye=Math.min(32767,y),qe=Math.min(258,U);de<=Ye&&--oe&&Y!=T;){if(n[y+k]==n[y+k-de]){for(var Ie=0;Ie<qe&&n[y+Ie]==n[y+Ie-de];++Ie);if(Ie>k){if(k=Ie,te=de,Ie>Ne)break;for(var K=Math.min(de,Ie-2),Q=0,V=0;V<K;++V){var pe=y-de+V&32767,Pe=_[pe],Me=pe-Pe&32767;Me>Q&&(Q=Me,T=pe)}}}Y=T,T=_[Y],de+=Y-T&32767}if(te){v[b++]=268435456|uc[k]<<18|Ou[te];var We=uc[k]&31,_t=Ou[te]&31;P+=gc[We]+_c[_t],++A[257+We],++C[_t],D=y+k,++I}else v[b++]=n[y],++A[n[y]]}}for(y=Math.max(y,D);y<a;++y)v[b++]=n[y],++A[n[y]];h=ku(n,c,l,v,A,C,P,b,O,y-O,h),l||(r.r=h&7|c[h/8|0]<<3,h-=7,r.h=p,r.p=_,r.i=y,r.w=D)}else{for(var y=r.w||0;y<a+l;y+=65535){var R=y+65535;R>=a&&(c[h/8|0]=l,R=a),h=Yu(c,h+1,n.subarray(y,R))}r.i=a}return qu(o,0,i+Xu(h)+s)},U_=(function(){for(var n=new Int32Array(256),e=0;e<256;++e){for(var t=e,i=9;--i;)t=(t&1&&-306674912)^t>>>1;n[e]=t}return n})(),N_=function(){var n=-1;return{p:function(e){for(var t=n,i=0;i<e.length;++i)t=U_[t&255^e[i]]^t>>>8;n=t},d:function(){return~n}}};var F_=function(n,e,t,i,s){if(!s&&(s={l:1},e.dictionary)){var r=e.dictionary.subarray(-32768),a=new Et(r.length+n.length);a.set(r),a.set(n,r.length),n=a,s.w=r.length}return L_(n,e.level==null?6:e.level,e.mem==null?s.l?Math.ceil(Math.max(8,Math.min(13,Math.log(n.length)))*1.5):20:12+e.mem,t,i,s)},$u=function(n,e){var t={};for(var i in n)t[i]=n[i];for(var i in e)t[i]=e[i];return t};var wt=function(n,e,t){for(;t;++e)n[e]=t,t>>>=8};function O_(n,e){return F_(n,e||{},0,0)}var Ku=function(n,e,t,i){for(var s in n){var r=n[s],a=e+s,o=i;Array.isArray(r)&&(o=$u(i,r[1]),r=r[0]),r instanceof Et?t[a]=[r,o]:(t[a+="/"]=[new Et(0),o],Ku(r,a,t,i))}},zu=typeof TextEncoder<"u"&&new TextEncoder,B_=typeof TextDecoder<"u"&&new TextDecoder,k_=0;try{B_.decode(Zu,{stream:!0}),k_=1}catch{}function Vn(n,e){if(e){for(var t=new Et(n.length),i=0;i<n.length;++i)t[i]=n.charCodeAt(i);return t}if(zu)return zu.encode(n);for(var s=n.length,r=new Et(n.length+(n.length>>1)),a=0,o=function(h){r[a++]=h},i=0;i<s;++i){if(a+5>r.length){var c=new Et(a+8+(s-i<<1));c.set(r),r=c}var l=n.charCodeAt(i);l<128||e?o(l):l<2048?(o(192|l>>6),o(128|l&63)):l>55295&&l<57344?(l=65536+(l&1047552)|n.charCodeAt(++i)&1023,o(240|l>>18),o(128|l>>12&63),o(128|l>>6&63),o(128|l&63)):(o(224|l>>12),o(128|l>>6&63),o(128|l&63))}return qu(r,0,a)}var pc=function(n){var e=0;if(n)for(var t in n){var i=n[t].length;i>65535&&Co(9),e+=i+4}return e},Vu=function(n,e,t,i,s,r,a,o){var c=i.length,l=t.extra,h=o&&o.length,u=pc(l);wt(n,e,a!=null?33639248:67324752),e+=4,a!=null&&(n[e++]=20,n[e++]=t.os),n[e]=20,e+=2,n[e++]=t.flag<<1|(r<0&&8),n[e++]=s&&8,n[e++]=t.compression&255,n[e++]=t.compression>>8;var d=new Date(t.mtime==null?Date.now():t.mtime),m=d.getFullYear()-1980;if((m<0||m>119)&&Co(10),wt(n,e,m<<25|d.getMonth()+1<<21|d.getDate()<<16|d.getHours()<<11|d.getMinutes()<<5|d.getSeconds()>>1),e+=4,r!=-1&&(wt(n,e,t.crc),wt(n,e+4,r<0?-r-2:r),wt(n,e+8,t.size)),wt(n,e+12,c),wt(n,e+14,u),e+=16,a!=null&&(wt(n,e,h),wt(n,e+6,t.attrs),wt(n,e+10,a),e+=14),n.set(i,e),e+=c,u)for(var g in l){var _=l[g],p=_.length;wt(n,e,+g),wt(n,e+2,p),n.set(_,e+4),e+=4+p}return h&&(n.set(o,e),e+=h),e},z_=function(n,e,t,i,s){wt(n,e,101010256),wt(n,e+8,t),wt(n,e+10,t),wt(n,e+12,i),wt(n,e+16,s)};function xc(n,e){e||(e={});var t={},i=[];Ku(n,"",t,e);var s=0,r=0;for(var a in t){var o=t[a],c=o[0],l=o[1],h=l.level==0?0:8,u=Vn(a),d=u.length,m=l.comment,g=m&&Vn(m),_=g&&g.length,p=pc(l.extra);d>65535&&Co(11);var f=h?O_(c,l):c,w=f.length,M=N_();M.p(c),i.push($u(l,{size:c.length,crc:M.d(),c:f,f:u,m:g,u:d!=a.length||g&&m.length!=_,o:s,compression:h})),s+=30+d+p+w,r+=76+2*(d+p)+(_||0)+w}for(var v=new Et(r+22),A=s,C=r-s,I=0;I<i.length;++I){var u=i[I];Vu(v,u.o,u,u.f,u.u,u.c.length);var P=30+u.f.length+pc(u.extra);v.set(u.c,u.o+P),Vu(v,s,u,u.f,u.u,u.c.length,u.o,u.m),s+=16+P+(u.m?u.m.length:0)}return z_(v,s,i.length,C,A),v}var Ju=n=>n.reduce((e,t,i)=>{let s=n[(i+1)%n.length];return e+t[0]*s[1]-s[0]*t[1]},0)/2,V_=(n,e)=>{let t=!1;for(let i=0,s=e.length-1;i<e.length;s=i++){let r=e[i],a=e[s];r[1]>n[1]!=a[1]>n[1]&&n[0]<(a[0]-r[0])*(n[1]-r[1])/(a[1]-r[1])+r[0]&&(t=!t)}return t},vc=n=>n.map(e=>Number(e.toFixed(8))).join(","),yc=new WeakMap;function Mc(n){if(yc.has(n))return yc.get(n);let e=[],t=n.filter(s=>Ju(s)>1e-8),i=n.filter(s=>Ju(s)<-1e-8);for(let s of t){let r=[s,...i.filter(_=>V_(_[0],s))],a=[],o=[];for(let _ of r)a.length&&o.push(a.length),a.push(..._);let c=cc(a.flat(),o),l=new Map,h=new Map,u=24;a.forEach((_,p)=>{let f=Math.floor(_[0]/u)+":"+Math.floor(_[1]/u);l.has(f)||l.set(f,[]),l.get(f).push(p)});let d=(_,p)=>{let f=Math.min(_,p)+":"+Math.max(_,p);if(h.has(f)){let y=h.get(f);return _<p?y:y.slice().reverse()}let w=a[_],M=a[p],v=M[0]-w[0],A=M[1]-w[1],C=v*v+A*A,I=[];if(C>1e-16)for(let y=Math.floor(Math.min(w[1],M[1])/u);y<=Math.floor(Math.max(w[1],M[1])/u);y++)for(let b=Math.floor(Math.min(w[0],M[0])/u);b<=Math.floor(Math.max(w[0],M[0])/u);b++)for(let D of l.get(b+":"+y)||[]){if(D===_||D===p)continue;let O=a[D],H=((O[0]-w[0])*v+(O[1]-w[1])*A)/C;H>1e-8&&H<1-1e-8&&Math.abs((O[0]-w[0])*A-(O[1]-w[1])*v)<1e-7&&I.push({i:D,t:H})}I.sort((y,b)=>y.t-b.t);let P=I.filter((y,b)=>!b||Math.abs(y.t-I[b-1].t)>1e-9).map(y=>y.i);return h.set(f,_<p?P:P.slice().reverse()),P},m=[];for(let _=0;_<c.length;_+=3){let p=c.slice(_,_+3),f=[],w=!1;for(let M=0;M<3;M++){let v=p[M],A=p[(M+1)%3];f.push(v);let C=d(v,A);C?.length&&(w=!0,f.push(...C))}if(!w)m.push(p);else{let M=p.reduce((A,C)=>[A[0]+a[C][0]/3,A[1]+a[C][1]/3],[0,0]),v=a.length;a.push(M);for(let A=0;A<f.length;A++)m.push([v,f[A],f[(A+1)%f.length]])}}let g=m.filter(_=>{let[p,f,w]=_.map(M=>a[M]);return Math.abs((f[0]-p[0])*(w[1]-p[1])-(f[1]-p[1])*(w[0]-p[0]))>1e-10});e.push({points:a,triangles:g,rings:r})}return yc.set(n,e),e}function ju(n,e){let{width:t,height:i,modelWidth:s,baseHeight:r,regions:a,chains:o,voidRings:c=[]}=n,l=s/t,h=Math.round(r*50),u=M=>M===-2?0:M===-1?n.removeBackground?0:h:Dt(n,a[M])?0:h+(Jt(n,a[M])?Math.round(e(a[M].height)*50):0),d=[],m=[],g=new Map,_=new Map,p=(M,v)=>{let A=vc(M)+":"+v;if(g.has(A))return g.get(A);let C=d.length;return d.push([(M[0]-t/2)*l,(i/2-M[1])*l,v/50]),g.set(A,C),C},f=(M,v)=>{if(v)for(let A of Mc(M))for(let C of A.triangles){let[I,P,y]=C,[b,D,O]=[I,P,y].map(H=>A.points[H]);(D[0]-b[0])*(O[1]-b[1])-(D[1]-b[1])*(O[0]-b[0])>0&&([P,y]=[y,P]),m.push([I,P,y].map(H=>p(A.points[H],v)),[y,P,I].map(H=>p(A.points[H],0)))}};for(let M of a)f(M.rings,u(M.id));h&&!n.removeBackground&&f(c,h);for(let M of o)for(let v of[M.points[0],M.points.at(-1)]){let A=vc(v);_.has(A)||_.set(A,new Set([0])),_.get(A).add(u(M.right)),_.get(A).add(u(M.left))}for(let M of o){let v=u(M.right),A=u(M.left);if(v===A)continue;let C=Math.min(v,A),I=Math.max(v,A),P=v>A?M.points:M.points.slice().reverse();for(let y=0;y<P.length-1;y++){let b=P[y],D=P[y+1],O=T=>[...new Set([C,I,...[..._.get(vc(T))||[]].filter(U=>U>C&&U<I)])].sort((U,V)=>U-V),H=[...O(b).map(T=>p(b,T)),...O(D).reverse().map(T=>p(D,T))],Y=p([(b[0]+D[0])/2,(b[1]+D[1])/2],(C+I)/2);for(let T=0;T<H.length;T++)m.push([Y,H[T],H[(T+1)%H.length]])}}let w=new Map;for(let M of m)for(let v=0;v<3;v++){let A=M[v],C=M[(v+1)%3],I=Math.min(A,C)+":"+Math.max(A,C);w.set(I,(w.get(I)||0)+1)}return{vertices:d,triangles:m,nonManifoldCorners:[...w.values()].filter(M=>M>2).length}}var _r=n=>Math.round(Math.max(0,Number(n)||0)*50)/50,ef=250,Qu=Object.freeze([0,.02,.04,.08,.16,.32,.64,1.28,2.56,5.12,10.24,20.48,40.96,81.92,163.84,250]);function Hn(n){return Math.min(ef,_r(n))}function Ro(n,e){let t=Hn(n);return e>0?Qu.find(i=>i>t+1e-9)??ef:[...Qu].reverse().find(i=>i<t-1e-9)??0}var Ni=n=>"#"+n.map(e=>Math.round(e).toString(16).padStart(2,"0")).join("");function Sc(n,e,t,i,s,r){let a=[],o=[];for(let c of Mc(n)){let l=c.rings,h=c.points.flatMap(_=>[(_[0]-t/2)*e,(i/2-_[1])*e]),u=a.length,d=h.length/2;for(let _=0;_<d;_++)a.push([h[_*2],h[_*2+1],s]);for(let _=0;_<d;_++)a.push([h[_*2],h[_*2+1],r]);let m=c.triangles.flat();for(let _=0;_<m.length;_+=3){let[p,f,w]=m.slice(_,_+3);(h[f*2]-h[p*2])*(h[w*2+1]-h[p*2+1])-(h[f*2+1]-h[p*2+1])*(h[w*2]-h[p*2])<0&&([f,w]=[w,f]),o.push([u+p+d,u+f+d,u+w+d],[u+w,u+f,u+p])}let g=0;for(let _ of l){for(let p=0;p<_.length;p++){let f=u+g+p,w=u+g+(p+1)%_.length;o.push([f,f+d,w+d],[f,w+d,w])}g+=_.length}}return{vertices:a,triangles:o}}function tf(n){let{regions:e,palette:t,width:i,height:s,modelWidth:r,baseHeight:a,baseColor:o}=n,c=r/i,l=[];if(a>0&&!n.removeBackground&&l.push({...Sc([[[0,0],[i,0],[i,s],[0,s]]],c,i,s,0,a),name:"Taban",color:o,regionId:-1}),a>0&&n.removeBackground)for(let h of e)Dt(n,h)||l.push({...Sc(h.rings,c,i,s,0,a),name:`Taban ${h.id+1}`,color:o,regionId:-1});for(let h of e)Jt(n,h)&&Hn(h.height)>0&&l.push({...Sc(h.rings,c,i,s,a,Number((a+Hn(h.height)).toFixed(6))),name:`B\xF6lge ${h.id+1}`,color:Ni(t[h.color]),regionId:h.id});return l}var H_=n=>String(n).replace(/[<>&"']/g,e=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;","'":"&apos;"})[e]),gr=n=>Number(n.toFixed(6));function nf(n){let e=[...new Set(n.flatMap(a=>[a.color,...a.vertexColors||[]]))],t=new Map(e.map((a,o)=>[a,o])),i=n.map((a,o)=>`<object id="${o+3}" type="model" name="${H_(a.name)}" pid="1" pindex="${t.get(a.color)}"><mesh><vertices>${a.vertices.map(c=>`<vertex x="${gr(c[0])}" y="${gr(c[1])}" z="${gr(c[2])}"/>`).join("")}</vertices><triangles>${a.triangles.map(c=>`<triangle v1="${c[0]}" v2="${c[1]}" v3="${c[2]}" pid="2" p1="${t.get(a.vertexColors?.[c[0]]||a.color)}" p2="${t.get(a.vertexColors?.[c[1]]||a.color)}" p3="${t.get(a.vertexColors?.[c[2]]||a.color)}"/>`).join("")}</triangles></mesh></object>`).join(""),s=n.length+3,r=`<?xml version="1.0" encoding="UTF-8"?><model unit="millimeter" xml:lang="tr-TR" xmlns="http://schemas.microsoft.com/3dmanufacturing/core/2015/02" xmlns:m="http://schemas.microsoft.com/3dmanufacturing/material/2015/02"><metadata name="Application">Katman</metadata><resources><basematerials id="1">${e.map((a,o)=>`<base name="Renk ${o+1} ${a}" displaycolor="${a}FF"/>`).join("")}</basematerials><m:colorgroup id="2">${e.map(a=>`<m:color color="${a}FF"/>`).join("")}</m:colorgroup>${i}<object id="${s}" type="model" name="Katman model"><components>${n.map((a,o)=>`<component objectid="${o+3}"/>`).join("")}</components></object></resources><build><item objectid="${s}"/></build></model>`;return xc({"[Content_Types].xml":Vn('<?xml version="1.0" encoding="UTF-8"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="model" ContentType="application/vnd.ms-package.3dmanufacturing-3dmodel+xml"/></Types>'),"_rels/.rels":Vn('<?xml version="1.0" encoding="UTF-8"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Target="/3D/3dmodel.model" Id="rel0" Type="http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel"/></Relationships>'),"3D/3dmodel.model":Vn(r)},{level:6})}function sf(n){let e=n.reduce((r,a)=>r+a.triangles.length,0),t=new ArrayBuffer(84+e*50),i=new DataView(t);new Uint8Array(t).set(Vn("Katman | millimeters | binary STL")),i.setUint32(80,e,!0);let s=84;for(let r of n)for(let a of r.triangles){let[o,c,l]=a.map(g=>r.vertices[g]),h=c.map((g,_)=>g-o[_]),u=l.map((g,_)=>g-o[_]),d=[h[1]*u[2]-h[2]*u[1],h[2]*u[0]-h[0]*u[2],h[0]*u[1]-h[1]*u[0]],m=Math.hypot(...d)||1;for(let g of[...d.map(_=>_/m),...o,...c,...l])i.setFloat32(s,g,!0),s+=4;s+=2}return new Uint8Array(t)}function rf(n){if(n.chains)return ju(n,Hn);let{width:e,height:t}=n,i=n.modelWidth/e,s=Math.round(n.baseHeight*50),r=new Int32Array(e*t);for(let g=0;g<r.length;g++){let _=n.regions[n.ids[g]];r[g]=n.removeBackground&&(!_||Dt(n,_))?0:s+(_&&Jt(n,_)?Math.round(Hn(_.height)*50):0)}let a=(g,_)=>g<0||_<0||g>=e||_>=t?0:r[_*e+g],o=(g,_)=>[0,a(g-1,_-1),a(g,_-1),a(g-1,_),a(g,_)],c=[],l=[],h=new Map,u=(g,_,p)=>{let f=`${g},${_},${p}`;if(h.has(f))return h.get(f);let w=c.length;return c.push([(g-e/2)*i,(t/2-_)*i,p/50]),h.set(f,w),w},d=(g,_,p,f,w,M)=>{let v=[...new Set([w,M,...o(g,_).filter(P=>P>w&&P<M)])].sort((P,y)=>P-y),A=[...new Set([w,M,...o(p,f).filter(P=>P>w&&P<M)])].sort((P,y)=>y-P),C=[...v.map(P=>u(g,_,P)),...A.map(P=>u(p,f,P))],I=u((g+p)/2,(_+f)/2,(w+M)/2);for(let P=0;P<C.length;P++)l.push([I,C[P],C[(P+1)%C.length]])};for(let g=0;g<t;g++)for(let _=0;_<e;_++){let p=a(_,g);if(!p)continue;let f=[[_,g],[_+1,g],[_+1,g+1],[_,g+1]].map(M=>u(...M,p)),w=[[_,g],[_+1,g],[_+1,g+1],[_,g+1]].map(M=>u(...M,0));l.push([f[0],f[2],f[1]],[f[0],f[3],f[2]],[w[0],w[1],w[2]],[w[0],w[2],w[3]]),a(_,g-1)<p&&d(_,g,_+1,g,a(_,g-1),p),a(_+1,g)<p&&d(_+1,g,_+1,g+1,a(_+1,g),p),a(_,g+1)<p&&d(_+1,g+1,_,g+1,a(_,g+1),p),a(_-1,g)<p&&d(_,g+1,_,g,a(_-1,g),p)}let m=0;for(let g=0;g<=t;g++)for(let _=0;_<=e;_++){let p=a(_-1,g-1),f=a(_,g-1),w=a(_,g),M=a(_-1,g);(Math.min(p,w)>Math.max(f,M)||Math.min(f,M)>Math.max(p,w))&&m++}return{vertices:c,triangles:l,nonManifoldCorners:m}}function af(n){let e=`# Katman \u2014 units: millimeters
mtllib model.mtl
`,t=1,i="";return n.forEach((s,r)=>{e+=`o part_${r}
usemtl color_${r}
`,e+=s.vertices.map((o,c)=>`v ${o.map(gr).join(" ")}${s.vertexColors?.[c]?" "+s.vertexColors[c].match(/\w\w/g).map(l=>gr(parseInt(l,16)/255)).join(" "):""}
`).join(""),e+=s.triangles.map(o=>`f ${o.map(c=>c+t).join(" ")}
`).join(""),t+=s.vertices.length;let a=s.vertexColors?[1,1,1]:s.color.match(/\w\w/g).map(o=>parseInt(o,16)/255);i+=`newmtl color_${r}
Kd ${a.join(" ")}
d 1

`}),xc({"model.obj":Vn(e),"model.mtl":Vn(i)})}function of(n){return`<svg xmlns="http://www.w3.org/2000/svg" width="${n.modelWidth}mm" height="${n.modelWidth*n.height/n.width}mm" viewBox="0 0 ${n.width} ${n.height}">${n.regions.filter(e=>Jt(n,e)).map(e=>`<path id="region-${e.id+1}" fill="${Ni(n.palette[e.color])}" fill-rule="evenodd" data-height-mm="${e.height}" d="${e.path||e.rings.map(t=>"M"+t.map(i=>i.join(",")).join("L")+"Z").join("")}"/>`).join("")}</svg>`}function lf(n,e,t,i=0){let s=n[t];if(!s)return[];let r=e[s.color],a=Math.max(0,i)/100*Math.sqrt(3*255**2),o=new Set(e.map((c,l)=>Math.hypot(...c.map((h,u)=>h-r[u]))<=a+1e-8?l:-1));return n.filter(c=>o.has(c.color)).map(c=>c.id)}function cf(n,e,t){let i=Math.min(e.x,t.x),s=Math.max(e.x,t.x),r=Math.min(e.y,t.y),a=Math.max(e.y,t.y),o=(l,h,u)=>{let d=!1;for(let m of u)for(let g=0,_=m.length-1;g<m.length;_=g++){let p=m[g],f=m[_];p[1]>h!=f[1]>h&&l<(f[0]-p[0])*(h-p[1])/(f[1]-p[1])+p[0]&&(d=!d)}return d},c=(l,h)=>{let u=0,d=1;for(let[m,g]of[[l[0]-i,l[0]-h[0]],[s-l[0],h[0]-l[0]],[l[1]-r,l[1]-h[1]],[a-l[1],h[1]-l[1]]])if(Math.abs(g)<1e-12){if(m<0)return!1}else g>0?d=Math.min(d,m/g):u=Math.max(u,m/g);return u<=d};return n.filter(l=>l.rings.some(h=>h.some((u,d)=>c(u,h[(d+1)%h.length])))||[[i,r],[s,r],[i,a],[s,a]].some(h=>o(...h,l.rings))).map(l=>l.id)}var W=n=>document.getElementById(n),q=null,En=null,je=new Set,ys="color",yr=[],Mr=[],Bi=!1,gn=0,li="Yeni \xE7al\u0131\u015Fma",mt,Gn,Bt,Ot,Sr,rn,Io,ci=!1,hi=!1,Wn=()=>{},hf,br="region",oi=!1,bc=!1,bs=null;function an(n){W("toast").textContent=n,W("toast").classList.add("show"),clearTimeout(hf),hf=setTimeout(()=>W("toast").classList.remove("show"),4500)}function Tr(n){console.error(n),an(n.message||String(n)),W("status").textContent=n.message||"\u0130\u015Flem tamamlanamad\u0131."}function wr(n){Bi=n;for(let e of["file","open-project","import-image","empty-import"])W(e).disabled=n;for(let e of["vectorize","export","save-project","apply-height"])W(e).disabled=n||!q;W("remove-background").disabled=n||!q,W("vectorize").textContent=n?"\u25CC Vekt\xF6rle\u015Ftiriliyor\u2026":"\u21BB Vekt\xF6r\xFC yeniden olu\u015Ftur"}function G_(){try{mt=new Mo({antialias:!0,alpha:!0,logarithmicDepthBuffer:!0,powerPreference:"high-performance"})}catch{W("viewport").insertAdjacentHTML("beforeend",'<p style="padding:100px 35px">3D \xF6nizleme i\xE7in taray\u0131c\u0131n\u0131zda WebGL / donan\u0131m h\u0131zland\u0131rmay\u0131 a\xE7\u0131n. 2D d\xFCzenleme ve d\u0131\u015Fa aktarma kullan\u0131labilir.</p>');return}let n=Lc(mt);mt.setPixelRatio(Math.min(devicePixelRatio,n.pixelRatio)),mt.shadowMap.enabled=!0,mt.shadowMap.type=wa,mt.setClearColor(0,0),mt.outputColorSpace=Ut,mt.toneMapping=Da,mt.toneMappingExposure=1,W("viewport").append(mt.domElement),Gn=new Hs,Bt=new Ct(35,1,.1,1e4),Bt.up.set(0,0,1),Ot=new wo(Bt,mt.domElement),Ot.enableDamping=!0,Ot.mouseButtons.MIDDLE=pn.PAN,Ot.mouseButtons.RIGHT=pn.ROTATE,Ot.maxPolarAngle=Math.PI/2-.025,Ot.minDistance=5,Ot.maxDistance=4e3,Gn.add(new js(16777215,1.4));let e=new Js(16777215,2.2);e.position.set(-80,-60,180),e.castShadow=!0,e.shadow.mapSize.set(n.shadowSize,n.shadowSize),e.shadow.camera.left=-160,e.shadow.camera.right=160,e.shadow.camera.top=160,e.shadow.camera.bottom=-160,e.shadow.camera.far=700,e.shadow.normalBias=.004,Gn.add(e),Gn.add(new $s(16777215,5465993,.8)),Sr=new Ln,Gn.add(Sr),Io=new Nt(new wi(3e3,3e3),new qs({opacity:.13})),Io.position.z=-.08,Io.receiveShadow=!0,Gn.add(Io);let t=null,i=s=>{let r=mt.domElement.getBoundingClientRect(),a=new Ue((s.clientX-r.left)/r.width*2-1,-(s.clientY-r.top)/r.height*2+1),o=new Qs;return o.setFromCamera(a,Bt),o.intersectObjects(Mr).find(c=>c.object.userData.regionId>=0)?.object.userData.regionId};mt.domElement.addEventListener("pointerdown",s=>{if(s.button===0&&(t=[s.clientX,s.clientY],oi)){s.ctrlKey||s.metaKey||s.shiftKey||je.clear();let r=i(s);r!==void 0&&Ss(r,!0,!0),mt.domElement.setPointerCapture(s.pointerId)}}),mt.domElement.addEventListener("pointermove",s=>{if(oi&&t){let r=i(s);r!==void 0&&Ss(r,!0,!0)}}),mt.domElement.addEventListener("pointerup",s=>{let r=t;if(t=null,!r||oi||Math.hypot(s.clientX-r[0],s.clientY-r[1])>5||s.button!==0)return;let a=i(s);a!==void 0&&Ss(a,s.ctrlKey||s.metaKey||s.shiftKey)}),mt.domElement.addEventListener("pointercancel",()=>t=null),new ResizeObserver(()=>{let s=W("viewport").clientWidth,r=W("viewport").clientHeight;!s||!r||(Bt.aspect=s/r,Bt.updateProjectionMatrix(),mt.setSize(s,r),bc&&df(),Wn())}).observe(W("viewport")),Wn=Oc({render:()=>mt.render(Gn,Bt),update:()=>Ot.update(),visible:()=>!ci&&!hi&&!bc&&!document.hidden&&W("viewport").clientWidth>0}),Ot.addEventListener("change",Wn),document.addEventListener("visibilitychange",Wn),Wn()}function Uo(n=!1){if(!Bt||!q)return;let e=q.modelWidth,t=e*q.height/q.width,i=q.baseHeight+q.regions.reduce((c,l)=>Jt(q,l)?Math.max(c,l.height):c,0),s=Math.hypot(e,t,i)/2,r=Math.min(Bt.fov*Math.PI/360,Math.atan(Math.tan(Bt.fov*Math.PI/360)*Bt.aspect)),a=s/Math.sin(r)*1.08;Ot.target.set(0,0,i/2);let o=new B(...n?[0,-1e-5,1]:[.95,-1.25,1.15]).normalize();Bt.position.copy(Ot.target).addScaledVector(o,a),Bt.near=.01,Bt.far=Math.max(5e3,a*5),Ot.maxDistance=Math.max(4e3,a*5),Bt.updateProjectionMatrix(),Ot.update(),W("view-top").classList.toggle("active",n),W("view-perspective").classList.toggle("active",!n)}function ws(n=!1){if(!q)return;if(W("empty-state").hidden=!0,yr=tf(q),Sr){for(let i of Mr)Sr.remove(i),i.geometry.dispose(),(Array.isArray(i.material)?i.material:[i.material]).forEach(s=>s.dispose());Mr=[];for(let i of yr){let s=new nn;s.setAttribute("position",new Rt(i.vertices.flat(),3)),s.setIndex(i.triangles.flat()),s.computeVertexNormals();let r=[new bi({color:i.color,toneMapped:!1}),new Ys({color:i.color,roughness:.82,metalness:0,flatShading:!0})],a=0,o=-1;for(let l=0;l<i.triangles.length;l++){let h=i.triangles[l],u=h.map(m=>i.vertices[m]),d=u.every(m=>Math.abs(m[2]-u[0][2])<1e-8)?0:1;d!==o&&(o>=0&&s.addGroup(a*3,(l-a)*3,o),a=l,o=d)}o>=0&&s.addGroup(a*3,(i.triangles.length-a)*3,o);let c=new Nt(s,r);c.userData.regionId=i.regionId,c.userData.color=i.color,c.castShadow=!0,c.receiveShadow=!0,Sr.add(c),Mr.push(c)}rn&&(Gn.remove(rn),rn.geometry.dispose(),Array.isArray(rn.material)?rn.material.forEach(i=>i.dispose()):rn.material.dispose());let t=Math.ceil(Math.max(q.modelWidth,q.modelWidth*q.height/q.width)*1.9/10)*10;rn=new er(t,Math.min(80,Math.round(t/5)),4216694,3030357),rn.rotation.x=Math.PI/2,rn.position.z=-.12,rn.material.transparent=!0,rn.material.opacity=.6,Gn.add(rn)}No(),Er(),Ar();let e=q.baseHeight+q.regions.reduce((t,i)=>Jt(q,i)?Math.max(t,i.height):t,0);W("dimensions").textContent=`${Ms(q.modelWidth)} \xD7 ${Ms(q.modelWidth*q.height/q.width)} \xD7 ${Ms(e)} mm`,W("region-count").textContent=q.regions.filter(t=>Jt(q,t)).length,W("palette-count").textContent=q.palette.length,W("status").textContent=`${(q.curveCount||0).toLocaleString("tr-TR")} vekt\xF6r e\u011Frisi \xB7 ${q.palette.length} renk \xB7 ${q.regions.length} ba\u011F\u0131ms\u0131z b\xF6lge`,n&&Uo()}var Ms=n=>n.toLocaleString("tr-TR",{maximumFractionDigits:2}),uf=null,Po=new Map;function Do(n){return uf!==q&&(uf=q,Po.clear()),Po.has(n.id)||Po.set(n.id,new Path2D(n.path||n.rings.map(e=>"M"+e.map(t=>t.join(",")).join("L")+"Z").join(""))),Po.get(n.id)}function df(){if(!q)return;let n=W("workspace-canvas"),e=n.getBoundingClientRect(),t=Math.min(devicePixelRatio||1,3),i=Math.max(1,e.width),s=Math.max(1,e.height);n.width=Math.round(i*t),n.height=Math.round(s*t),n.dataset.vectorWidth=q.width,n.dataset.vectorHeight=q.height;let r=n.getContext("2d"),a=Math.min(n.width/q.width,n.height/q.height);r.setTransform(a,0,0,a,(n.width-q.width*a)/2,(n.height-q.height*a)/2);for(let o of q.regions)Dt(q,o)||(r.globalAlpha=o.visible?1:.16,r.fillStyle=Ni(q.palette[o.color]),r.fill(Do(o),"evenodd"));r.globalAlpha=1,r.strokeStyle="#ffffff",r.lineWidth=1.5*t/a,r.setLineDash([5*t/a,3*t/a]);for(let o of je)r.stroke(Do(q.regions[o]))}function No(){if(!q)return;let n=W("source");n.width=q.width,n.height=q.height;let e=n.getContext("2d");En&&e.drawImage(En,0,0,q.width,q.height),e.lineWidth=Math.max(1,q.width/240),e.strokeStyle="#ffffff",e.setLineDash([q.width/80,q.width/120]);for(let t of je)e.stroke(Do(q.regions[t]));df()}function W_(n){let e=W("workspace-canvas").getContext("2d");e.save(),e.resetTransform();let t=-1;for(let i=q.regions.length-1;i>=0;i--)if(!Dt(q,q.regions[i])&&e.isPointInPath(Do(q.regions[i]),n.x,n.y,"evenodd")){t=q.regions[i].id;break}return e.restore(),t}function X_(n){let[e,t,i]=n,s=Math.max(...n),r=Math.min(...n);return s-r<20?s>220?"K\u0131r\u0131k beyaz":s<70?"K\xF6m\xFCr":"Ta\u015F grisi":e>t*1.5&&e>i*1.1?e>190&&t>90?"Terracotta":"Kiremit":t>=e*.93&&t>i*1.08&&e<205?s>180?"Ada\xE7ay\u0131":"Orman ye\u015Fili":i>e&&i>t?"Mavi":e>170&&t>130?"Kum beji":"Toprak tonu"}function Er(){if(!q)return;let n=W("layer-list");n.replaceChildren(),W("list-caption").textContent=ys==="color"?"RENK PALET\u0130":"BA\u011EIMSIZ B\xD6LGELER";let e=ys==="color"?q.palette.map((t,i)=>({rgb:t,regions:q.regions.filter(s=>s.color===i),label:X_(t)})):q.regions.slice(gn*120,(gn+1)*120).map(t=>({rgb:q.palette[t.color],regions:[t],label:`B\xF6lge ${t.id+1}`}));for(let t of e){if(!t.regions.length)continue;let i=t.regions.filter(h=>!Dt(q,h)).map(h=>h.id),s=i.every(h=>je.has(h)),r=i.some(h=>je.has(h)),a=[...new Set(t.regions.map(h=>h.height))],o=document.createElement("div");o.className="layer"+(r?" selected":""),o.tabIndex=0,o.setAttribute("role","button"),o.setAttribute("aria-pressed",String(s)),o.setAttribute("aria-label",`${t.label}, ${t.regions.length} b\xF6lge`);let c=ys==="color"?`${Ni(t.rgb).toUpperCase()} \xB7 ${t.regions.filter(h=>Jt(q,h)).length} b\xF6lge${t.regions.some(h=>!h.visible)?" + gizli":""}`:`${Ni(t.rgb).toUpperCase()} \xB7 ${t.regions[0].area} px${Dt(q,t.regions[0])?" \xB7 Arka plan":t.regions[0].visible?"":" \xB7 Gizli"}`;o.innerHTML=`<span class="swatch" style="background:${Ni(t.rgb)}"></span><span class="layer-info"><strong>${t.label}</strong><small>${c}</small></span><span class="layer-value">${a.length===1?Ms(a[0]):"\xC7e\u015Fitli"}<small>${a.length===1?"mm":""}</small></span><span class="check">${s?"\u2713":r?"\u2212":""}</span>`;let l=h=>{let u=h.ctrlKey||h.metaKey||h.shiftKey;u||je.clear(),u&&s?i.forEach(d=>je.delete(d)):i.forEach(d=>je.add(d)),Ar(!0)};o.onclick=l,o.onkeydown=h=>{(h.key==="Enter"||h.key===" ")&&(h.preventDefault(),l(h))},n.append(o)}if(ys==="region"&&q.regions.length>120){let t=document.createElement("div");t.style.cssText="display:flex;justify-content:space-between;align-items:center;font-size:9px;grid-column:1/-1;padding:8px";let i=document.createElement("button"),s=document.createElement("button");i.textContent="\u2190 \xD6nceki",s.textContent="Sonraki \u2192",i.className=s.className="secondary",i.disabled=gn===0,s.disabled=(gn+1)*120>=q.regions.length,i.onclick=()=>{gn--,Er()},s.onclick=()=>{gn++,Er()},t.append(i,document.createTextNode(`${gn+1} / ${Math.ceil(q.regions.length/120)}`),s),n.append(t)}}function Ar(n=!1){if(Wn(),!q)return;W("selection-count").textContent=je.size?`${je.size} b\xF6lge se\xE7ildi`:"Se\xE7im yok";let e=[...new Set([...je].map(t=>q.regions[t].height))];e.length===1&&(W("selection-height").value=e[0]),W("selected-height-stat").textContent=e.length===1?Ms(e[0])+" mm":e.length>1?"\xC7e\u015Fitli":"\u2014";for(let t of Mr)for(let i of t.material)i.emissive?(i.emissive.set(je.has(t.userData.regionId)?"#375489":"#000000"),i.emissiveIntensity=.13):i.color.set(t.userData.color);n&&(No(),Er())}function pf(n){return Dt(q,q.regions[n])?[]:(br==="region"?[n]:lf(q.regions,q.palette,n,br==="range"?Number(W("color-tolerance").value):0)).filter(e=>!Dt(q,q.regions[e]))}function mf(n,e=!1,t=!1){let i=n.length&&n.every(s=>je.has(s));e||je.clear(),e&&i&&!t?n.forEach(s=>je.delete(s)):n.forEach(s=>je.add(s)),ys==="region"&&n.length&&(gn=Math.floor(n[0]/120)),Ar(!0)}function Ss(n,e,t=!1){q&&(bs=n,mf(pf(n),e,t))}function gf(n){return new Promise((e,t)=>{let i=new Worker("worker.js");i.onmessage=s=>{i.terminate(),s.data.error?t(new Error(s.data.error)):e(s.data)},i.onerror=s=>{i.terminate(),t(new Error(s.message||"Vekt\xF6r i\u015Fleme ba\u015Far\u0131s\u0131z."))},i.postMessage(n)})}async function _f(){if(!(!En||Bi)){wr(!0),W("status").textContent="Renkler ayr\u0131l\u0131yor ve kapal\u0131 vekt\xF6r konturlar\u0131 \xE7\u0131kar\u0131l\u0131yor\u2026";try{let e=Math.min(1,2048/Math.max(En.width,En.height)),t=document.createElement("canvas");t.width=Math.max(1,Math.round(En.width*e)),t.height=Math.max(1,Math.round(En.height*e));let i=t.getContext("2d",{willReadFrequently:!0});i.imageSmoothingQuality="high",i.drawImage(En,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height).data;q={...await gf({pixels:s,width:t.width,height:t.height,count:16,automatic:!0,minArea:1}),removeBackground:W("remove-background").checked,modelWidth:Lo("model-width",5,1e3),baseHeight:_r(Lo("base-height",0,20)),baseColor:W("base-color").value},je.clear(),bs=null,gn=0,ws(!0);let a=q.regions.filter(o=>!o.visible).length;an(`${q.palette.length} renk, ${q.regions.length} ba\u011F\u0131ms\u0131z b\xF6lge${a?` \xB7 ${a} k\xFC\xE7\xFCk b\xF6lge gizlendi`:""}`)}catch(n){Tr(n)}finally{wr(!1)}}}function Lo(n,e,t){let i=W(n),s=Number(i.value);if(!Number.isFinite(s)||s<e||s>t)throw new Error(`${i.closest("label")?.textContent.trim()||n}: ${e}\u2013${t} aral\u0131\u011F\u0131nda bir de\u011Fer girin.`);return s}async function xf(n){if(!n||Bi)return;if(n.size>30*1024*1024){an("En fazla 30 MB bir g\xF6rsel se\xE7in.");return}let e=URL.createObjectURL(n);try{let t=new Image;if(t.src=e,await t.decode(),t.width*t.height>6e7)throw new Error("G\xF6rsel \xE7ok b\xFCy\xFCk. 60 megapikselden k\xFC\xE7\xFCk bir g\xF6rsel kullan\u0131n.");En=t,li=n.name.replace(/\.[^.]+$/,""),W("filename").textContent=n.name,W("model-name").textContent=li,await _f()}catch(t){Tr(new Error("G\xF6rsel a\xE7\u0131lamad\u0131. PNG, JPG, WEBP, BMP veya SVG deneyin. "+t.message))}finally{URL.revokeObjectURL(e),W("file").value=""}}function xr(n,e,t){let i=URL.createObjectURL(new Blob([n],{type:t})),s=document.createElement("a");s.href=i,s.download=e,s.click(),setTimeout(()=>URL.revokeObjectURL(i),3e4)}function q_(){if(!(!q||Bi))try{if(!yr.length&&W("format").value!=="svg")throw new Error("D\u0131\u015Fa aktar\u0131lacak hacim yok. Taban veya b\xF6lge y\xFCksekli\u011Fini art\u0131r\u0131n.");let n="Dosya haz\u0131r; indirme ba\u015Flat\u0131ld\u0131.",e=li.replace(/[^\p{L}\p{N}_-]/gu,"_")||"katman";switch(W("format").value){case"3mf":xr(nf(yr),e+".3mf","model/3mf");break;case"stl":{let i=rf(q);xr(sf([i]),e+".stl","model/stl"),i.nonManifoldCorners&&(n="STL indirildi. K\xF6\u015Feden temas eden alanlar var; dilimleyicide a\u011F onar\u0131m\u0131n\u0131 kontrol edin.");break}case"obj":xr(af(yr),e+"-obj.zip","application/zip");break;case"svg":xr(of(q),e+".svg","image/svg+xml")}an(n)}catch(n){Tr(n)}}function vf(){if(!q)return;let{width:n,height:e,palette:t,modelWidth:i,baseHeight:s,baseColor:r}=q;xr(JSON.stringify({format:"katman",version:5,name:li,width:n,height:e,palette:t,modelWidth:i,baseHeight:s,baseColor:r,removeBackground:!!q.removeBackground,labels:Array.from(q.labels),regions:q.regions.map(({height:a,visible:o})=>({height:a,visible:o}))}),li.replace(/[<>:"/\\|?*]/g,"_")+".katman","application/json"),an("Proje kaydedildi.")}async function Y_(n){if(!(!n||Bi)){wr(!0);try{if(n.size>15e6)throw new Error("Proje dosyas\u0131 en fazla 15 MB olabilir.");let e=JSON.parse(await n.text());if(e.format!=="katman"||![1,2,3,4,5].includes(e.version))throw new Error("Desteklenmeyen proje dosyas\u0131.");if(!Number.isInteger(e.width)||!Number.isInteger(e.height)||e.width<1||e.height<1||e.width>2048||e.height>2048||!Array.isArray(e.labels)||e.labels.length!==e.width*e.height)throw new Error("Proje \xF6l\xE7\xFCleri ge\xE7ersiz.");if(!Array.isArray(e.palette)||e.palette.length<1||e.palette.length>16||!e.palette.every(a=>Array.isArray(a)&&a.length===3&&a.every(o=>Number.isInteger(o)&&o>=0&&o<=255)))throw new Error("Renk paleti ge\xE7ersiz.");if(!e.labels.every(a=>Number.isInteger(a)&&a>=-1&&a<e.palette.length))throw new Error("B\xF6lge verileri ge\xE7ersiz.");if(!Number.isFinite(e.modelWidth)||e.modelWidth<5||e.modelWidth>1e3||!Number.isFinite(e.baseHeight)||e.baseHeight<0||e.baseHeight>20||!/^#[0-9a-f]{6}$/i.test(e.baseColor))throw new Error("Model \xF6l\xE7\xFCleri veya taban rengi ge\xE7ersiz.");let t=await gf({labels:e.labels,palette:e.palette,width:e.width,height:e.height,minArea:1});if(!Array.isArray(e.regions)||e.regions.length!==t.regions.length)throw new Error("B\xF6lge say\u0131s\u0131 tutars\u0131z.");for(let a=0;a<t.regions.length;a++){let o=e.regions[a];if(!Number.isFinite(o.height)||o.height<0||o.height>250||typeof o.visible!="boolean")throw new Error("B\xF6lge y\xFCksekli\u011Fi ge\xE7ersiz.");Object.assign(t.regions[a],{height:Hn(o.height),visible:o.visible})}q={...t,removeBackground:e.removeBackground===!0,modelWidth:e.modelWidth,baseHeight:_r(e.baseHeight),baseColor:e.baseColor},W("remove-background").checked=q.removeBackground,li=String(e.name||"Proje").slice(0,100),W("filename").textContent=li+" \xB7 Kay\u0131tl\u0131 proje",W("model-name").textContent=li,W("model-width").value=q.modelWidth,W("base-height").value=q.baseHeight,W("base-color").value=q.baseColor,je.clear(),bs=null,gn=0,ws(!0);let i=document.createElement("canvas");i.width=e.width,i.height=e.height;let s=i.getContext("2d"),r=s.createImageData(e.width,e.height);e.labels.forEach((a,o)=>{a>=0&&r.data.set([...e.palette[a],255],o*4)}),s.putImageData(r,0,0),En=i,No(),an("Proje a\xE7\u0131ld\u0131. B\xF6lge y\xFCkseklikleri korundu.")}catch(e){Tr(e)}finally{wr(!1),W("project-file").value=""}}}W("remove-background").onchange=()=>{if(!(!q||Bi)){q.removeBackground=W("remove-background").checked;for(let n of je)Dt(q,q.regions[n])&&je.delete(n);bs=null,ws(),an(q.removeBackground?q.backgroundIds.length?"Arka plan kald\u0131r\u0131ld\u0131. \u0130\xE7teki ayn\u0131 renkli ayr\u0131nt\u0131lar korundu.":"Kenara ba\u011Fl\u0131 belirgin bir arka plan bulunamad\u0131. \u015Eeffaf alanlar korunuyor.":"Arka plan geri getirildi.")}};W("file").onchange=n=>xf(n.target.files[0]);W("vectorize").onclick=_f;var Oi=W("dropzone");Oi.onkeydown=n=>{(n.key==="Enter"||n.key===" ")&&(n.preventDefault(),W("file").click())};Oi.ondragover=n=>{n.preventDefault(),Oi.classList.add("drag")};Oi.ondragleave=()=>Oi.classList.remove("drag");Oi.ondrop=n=>{n.preventDefault(),Oi.classList.remove("drag"),xf(n.dataTransfer.files[0])};W("source").onclick=n=>{if(!q)return;let e=W("source").getBoundingClientRect(),t=Math.min(e.width/q.width,e.height/q.height),i=q.width*t,s=q.height*t,r=Math.floor((n.clientX-e.left-(e.width-i)/2)/t),a=Math.floor((n.clientY-e.top-(e.height-s)/2)/t);if(r<0||a<0||r>=q.width||a>=q.height)return;let o=q.ids[a*q.width+r];o>=0&&Ss(o,n.ctrlKey||n.metaKey||n.shiftKey)};for(let n of["color","region"])W("mode-"+n).onclick=()=>{ys=n,gn=0,W("mode-color").classList.toggle("active",n==="color"),W("mode-region").classList.toggle("active",n==="region"),Er()};W("clear-selection").onclick=()=>{je.clear(),Ar(!0)};W("same-color").onclick=()=>{if(!q||!je.size){an("\xD6nce bir b\xF6lge se\xE7in.");return}let n=new Set([...je].map(e=>q.regions[e].color));q.regions.forEach(e=>{n.has(e.color)&&!Dt(q,e)&&je.add(e.id)}),Ar(!0)};function wc(n=!1){if(!q||!je.size){n||an("\xD6nce renk veya b\xF6lge se\xE7in.");return}let e=Number(W("selection-height").value);if(!Number.isFinite(e)){an("Ge\xE7erli bir y\xFCkseklik girin.");return}let t=Hn(e);W("selection-height").value=t;let i=q.regions.reduce((s,r)=>Jt(q,r)?Math.max(s,r.height):s,0);je.forEach(s=>q.regions[s].height=t),ws(Math.abs(i-t)>q.modelWidth*.3),n||an(`${je.size} b\xF6lgeye ${Ms(t)} mm uyguland\u0131.`)}function Fo(n){W("selection-height").value=Hn(n),wc(!0)}W("apply-height").onclick=()=>wc();W("selection-height").onchange=()=>Fo(W("selection-height").value);W("selection-height").onkeydown=n=>{n.key==="Enter"&&wc(),(n.key==="ArrowUp"||n.key==="ArrowDown")&&(n.preventDefault(),Fo(Ro(W("selection-height").value,n.key==="ArrowUp"?1:-1)))};W("height-minus").onclick=()=>Fo(Ro(W("selection-height").value,-1));W("height-plus").onclick=()=>Fo(Ro(W("selection-height").value,1));W("toggle-visible").onclick=()=>{if(!je.size){an("\xD6nce bir b\xF6lge se\xE7in.");return}let n=[...je].some(e=>!q.regions[e].visible);je.forEach(e=>q.regions[e].visible=n),ws()};for(let n of["model-width","base-height","base-color"])W(n).onchange=()=>{if(q)try{let e=Lo("model-width",5,1e3),t=_r(Lo("base-height",0,20));Object.assign(q,{modelWidth:e,baseHeight:t,baseColor:W("base-color").value}),W("base-height").value=t,ws(n==="model-width")}catch(e){Tr(e),W(n).value=n==="model-width"?q.modelWidth:q.baseHeight}};W("view-fit").onclick=()=>Uo();W("view-perspective").onclick=()=>{Ec(!1),Uo()};W("view-top").onclick=()=>{Ec(!1),Uo(!0)};W("export").onclick=q_;var ff={"3mf":["3MF dosyas\u0131n\u0131 kaydet","Renkler ayr\u0131 par\xE7alar olarak korunur. Dilimleyicide filamentleri e\u015Fle\u015Ftirin."],stl:["STL dosyas\u0131n\u0131 kaydet","STL renk i\xE7ermez. \u0130\xE7 duvarlar kald\u0131r\u0131l\u0131r; birle\u015Fik d\u0131\u015F y\xFCzey aktar\u0131l\u0131r."],obj:["OBJ paketini kaydet","ZIP i\xE7indeki OBJ ve MTL dosyalar\u0131n\u0131 ayn\u0131 klas\xF6re \xE7\u0131kar\u0131n. \xD6l\xE7\xFC birimi mm."],svg:["SVG dosyas\u0131n\u0131 kaydet","Kapal\u0131 vekt\xF6r konturlar\u0131 ve b\xF6lge y\xFCkseklikleri SVG i\xE7inde saklan\u0131r."]};W("format").onchange=()=>{W("export").querySelector("span").textContent=ff[W("format").value][0],W("export-note").textContent=ff[W("format").value][1]};W("save-project").onclick=vf;W("open-project").onclick=()=>W("project-file").click();W("project-file").onchange=n=>Y_(n.target.files[0]);W("help").onclick=()=>W("help-dialog").showModal();W("close-help").onclick=()=>W("help-dialog").close();W("import-image").onclick=W("empty-import").onclick=()=>W("file").click();window.katmanDesktop||document.addEventListener("keydown",n=>{if((n.ctrlKey||n.metaKey)&&["o","s"].includes(n.key.toLowerCase())){if(n.preventDefault(),hi){Cr.action(n.key.toLowerCase()==="s"?"save":"open");return}if(ci){Oo(n.key.toLowerCase()==="s"?"save":"open");return}n.key.toLowerCase()==="s"?vf():n.shiftKey?W("project-file").click():W("file").click()}});if(window.katmanDesktop){if(document.body.classList.add("native"),window.katmanDesktop.platform==="darwin"){document.body.classList.add("mac");let n=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);for(let e;e=n.nextNode();)e.parentElement.tagName!=="SCRIPT"&&e.nodeValue.includes("Ctrl")&&(e.nodeValue=e.nodeValue.replaceAll("Ctrl","\u2318"))}window.katmanDesktop.onAction(n=>{if(!ci&&["undo","redo"].includes(n)){zo(document.activeElement)&&document.execCommand(n);return}if(hi){Cr.action(n);return}if(ci){Oo(n);return}let e={image:"file",open:"project-file",save:"save-project",export:"export",help:"help"};e[n]&&W(e[n]).click()})}function Ec(n){bc=n,Wn(),W("workspace-2d").hidden=!n,W("view-2d").classList.toggle("active",n),n&&(W("view-top").classList.remove("active"),W("view-perspective").classList.remove("active"),No())}W("view-2d").onclick=()=>Ec(!0);W("workspace-scope").onchange=()=>{br=W("workspace-scope").value,W("tolerance-wrap").hidden=br!=="range"};W("color-tolerance").oninput=()=>{W("tolerance-value").textContent=W("color-tolerance").value+"%",q&&br==="range"&&bs!==null&&Ss(bs,!1,!0)};W("brush-select").onclick=()=>{oi=!oi,W("brush-select").classList.toggle("active",oi),Ot&&(Ot.enabled=!oi),mt&&(mt.domElement.style.cursor=oi?"crosshair":"grab")};function yf(n,e){let t=n.getBoundingClientRect(),i=Math.min(t.width/q.width,t.height/q.height);return{x:(e.clientX-t.left-(t.width-q.width*i)/2)/i,y:(e.clientY-t.top-(t.height-q.height*i)/2)/i}}var Tn=null,Fi=W("workspace-canvas");Fi.onpointerdown=n=>{if(!q||n.button!==0)return;let e=yf(Fi,n);e.x<0||e.y<0||e.x>=q.width||e.y>=q.height||(Tn={point:e,x:n.clientX,y:n.clientY},Fi.setPointerCapture(n.pointerId),n.preventDefault())};Fi.onpointermove=n=>{if(!Tn)return;let e=W("selection-box"),t=W("workspace-2d").getBoundingClientRect();e.hidden=!1,e.style.left=Math.min(Tn.x,n.clientX)-t.left+"px",e.style.top=Math.min(Tn.y,n.clientY)-t.top+"px",e.style.width=Math.abs(n.clientX-Tn.x)+"px",e.style.height=Math.abs(n.clientY-Tn.y)+"px"};Fi.onpointerup=n=>{if(!Tn)return;let e=Tn;Tn=null,W("selection-box").hidden=!0;let t=yf(Fi,n),i=n.ctrlKey||n.metaKey||n.shiftKey;if(Math.hypot(n.clientX-e.x,n.clientY-e.y)<5){let s=Math.floor(t.x),r=Math.floor(t.y);if(s>=0&&r>=0&&s<q.width&&r<q.height){let a=W_(t);a>=0&&Ss(a,i)}}else{let s=cf(q.regions,e.point,t),r=[...new Set(s.flatMap(pf))];mf(r,i)}};Fi.onpointercancel=()=>{Tn=null,W("selection-box").hidden=!0};G_();wr(!1);var ui=W("mesh-editor-frame");function Oo(n){ui.contentWindow?.postMessage({type:"katman-editor-action",action:n,allowText:document.activeElement===ui},location.origin)}function Tc(n){hi=!1,Cr.hide(),W("local-ai-host").hidden=!0,W("mode-local-ai").classList.remove("active"),W("import-image").hidden=!1,ci=n,Wn(),document.querySelector("main.workspace").hidden=n,W("mesh-editor-host").hidden=!n,W("mode-mesh-editor").classList.toggle("active",n),W("mode-image-editor").classList.toggle("active",!n),n&&!ui.getAttribute("src")&&(ui.src="mesh-editor.html"),W("save-project").disabled=n?!1:Bi||!q,W("import-image").firstChild.textContent=n?"\uFF0B 3D dosyas\u0131 a\xE7 ":"\uFF0B G\xF6rsel ekle ",W("open-project").hidden=n}W("mode-mesh-editor").onclick=()=>Tc(!0);W("mode-image-editor").onclick=()=>Tc(!1);document.addEventListener("click",n=>{if(!ci&&!hi)return;let e=n.target.closest("button"),t={"import-image":"image","open-project":"open","save-project":"save",export:"export",help:"help"};t[e?.id]&&(n.preventDefault(),n.stopImmediatePropagation(),hi?Cr.action(t[e.id]):Oo(t[e.id]))},!0);document.addEventListener("keydown",n=>{if(!ci)return;let e=Fc(n);e&&!zo(n.target)&&(n.preventDefault(),Oo(e))});var vr=null,Cr=Nc({onEdit(n,e){vr={part:n,name:e},Tc(!0),Mf()},onModelReady(n){hi&&(W("save-project").disabled=!n)}});function Mf(){!vr||ui.dataset.ready!=="1"||(ui.contentWindow.postMessage({type:"katman-generated-model",parts:[vr.part],name:vr.name,token:"editor-import"},location.origin),vr=null)}ui.addEventListener("load",()=>{ui.dataset.ready="1",Mf()});W("mode-local-ai").onclick=()=>{hi=!0,ci=!1,Wn(),document.querySelector("main.workspace").hidden=!0,W("mesh-editor-host").hidden=!0,W("local-ai-host").hidden=!1,W("mode-image-editor").classList.remove("active"),W("mode-mesh-editor").classList.remove("active"),W("mode-local-ai").classList.add("active"),W("import-image").hidden=!0,W("open-project").hidden=!0,W("save-project").disabled=!0,Cr.show()};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
