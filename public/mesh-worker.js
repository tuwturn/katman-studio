import Om from"./manifold/manifold.js";function or(o){if(!Array.isArray(o)||o.length<3||o.some(i=>i.length!==2||i.some(r=>!Number.isFinite(r))))throw new Error("En az \xFC\xE7 ge\xE7erli nokta se\xE7in.");let t=(i,r,s)=>(r[0]-i[0])*(s[1]-i[1])-(r[1]-i[1])*(s[0]-i[0]),e=(i,r,s)=>Math.abs(t(i,r,s))<1e-8&&s.every((a,c)=>a>=Math.min(i[c],r[c])-1e-8&&a<=Math.max(i[c],r[c])+1e-8);for(let i=0;i<o.length;i++){let r=o[i],s=o[(i+1)%o.length];if(Math.hypot(r[0]-s[0],r[1]-s[1])<1e-6)throw new Error("Ayn\u0131 noktay\u0131 art arda se\xE7meyin.");for(let a=i+2;a<o.length;a++){if(i===0&&a===o.length-1)continue;let c=o[a],f=o[(a+1)%o.length];if(t(r,s,c)*t(r,s,f)<0&&t(c,f,r)*t(c,f,s)<0||e(r,s,c)||e(r,s,f)||e(c,f,r)||e(c,f,s))throw new Error("Se\xE7im \xE7izgileri kesi\u015Fiyor. Son noktay\u0131 geri al\u0131p yeniden se\xE7in.")}}let n=o.reduce((i,r,s)=>{let a=o[(s+1)%o.length];return i+r[0]*a[1]-a[0]*r[1]},0);if(Math.abs(n)<1e-7)throw new Error("Se\xE7im alan\u0131 \xE7ok k\xFC\xE7\xFCk veya noktalar ayn\u0131 \xE7izgide.");return n>0?o.map(i=>[...i]):o.map(i=>[...i]).reverse()}function ec(o,t){let e=(r,s,a)=>(s[0]-r[0])*(a[1]-r[1])-(s[1]-r[1])*(a[0]-r[0]),n=(r,s,a)=>Math.abs(e(r,s,a))<1e-7&&a.every((c,f)=>c>=Math.min(r[f],s[f])-1e-7&&c<=Math.max(r[f],s[f])+1e-7),i=(r,s)=>{let a=!1;for(let c=0,f=r.length-1;c<r.length;f=c++){let u=r[c],d=r[f];if(n(u,d,s))return!0;u[1]>s[1]!=d[1]>s[1]&&s[0]<(d[0]-u[0])*(s[1]-u[1])/(d[1]-u[1])+u[0]&&(a=!a)}return a};return o.some(r=>i(t,r))||t.some(r=>i(o,r))?!0:o.some((r,s)=>t.some((a,c)=>{let f=o[(s+1)%o.length],u=t[(c+1)%t.length];return e(r,f,a)*e(r,f,u)<0&&e(a,u,r)*e(a,u,f)<0||n(r,f,a)||n(r,f,u)||n(a,u,r)||n(a,u,f)}))}function nc(o,t){let e=[];for(let i=0;i<t.vertices.length;i++)e.push(...t.vertices[i],...t.colors?.[i]||[.48,.63,.85]);let n=new o.Mesh({numProp:6,vertProperties:Float32Array.from(e),triVerts:Uint32Array.from(t.triangles.flat())});n.merge();try{return o.Manifold.ofMesh(n)}catch{throw new Error("Bu a\u011F kapal\u0131 ve tutarl\u0131 bir kat\u0131 de\u011Fil. A\xE7\u0131k/bozuk y\xFCzeyleri olan modeli \xF6nce a\u011F onar\u0131m\u0131ndan ge\xE7irin.")}}function ic(o,t={}){let e=o.getMesh(),n=[],i=[],r=[];for(let s=0;s<e.vertProperties.length;s+=e.numProp)n.push(Array.from(e.vertProperties.slice(s,s+3))),i.push(e.numProp>=6?Array.from(e.vertProperties.slice(s+3,s+6)):[.48,.63,.85]);for(let s=0;s<e.triVerts.length;s+=3)r.push(Array.from(e.triVerts.slice(s,s+3)));return{...t,vertices:n,colors:i,triangles:r}}function zh(o,t,e,n=[.48,.63,.85]){let{u:i,v:r,n:s,center:a,width:c,height:f,depth:u,offset:d=0,shape:m="box"}=t;if(![c,f,u].every(p=>Number.isFinite(p)&&p>0))throw new Error("Alan ve i\u015Flem derinli\u011Fi s\u0131f\u0131rdan b\xFCy\xFCk olmal\u0131.");if(![i,r,s,a].every(p=>p?.length===3&&p.every(Number.isFinite)))throw new Error("\xD6nce d\xFCzeltilecek y\xFCzeyden referans se\xE7in.");let g=e==="fill"?d-u:d,x=m==="polygon"?o.Manifold.extrude([or(t.points)],u):m==="circle"?o.Manifold.cylinder(u,c/2,c/2,64,!1):o.Manifold.cube([c,f,u],!0),M=m==="box"?x.translate([0,0,u/2]):x;M!==x&&x.delete();let b=[...i,0,...r,0,...s,0,...a.map((p,l)=>p+s[l]*g),1],A=M.transform(b),E=A.setProperties(3,p=>{for(let l=0;l<3;l++)p[l]=n[l]});return M.delete(),A.delete(),E}function rc(o,t,e,n){let i=nc(o,t);try{for(let r of e){let s=r;if(n==="cut"){let f=1/0,u=-1/0;for(let m of t.vertices){let g=m.reduce((x,M,b)=>x+(M-r.center[b])*r.n[b],0);f=Math.min(f,g),u=Math.max(u,g)}let d=Math.max(.01,(u-f)*1e-5);s={...r,offset:f-d,depth:u-f+d*2}}let a=zh(o,s,n,t.colors?.[0]),c=n==="fill"?i.add(a):i.subtract(a);a.delete(),i.delete(),i=c}if(i.status()!=="NoError")throw new Error("Kat\u0131 i\u015Flemi tamamlanamad\u0131: "+i.status());if(i.isEmpty()){if(n==="cut")return null;throw new Error("Se\xE7ilen alan modelin tamam\u0131n\u0131 kald\u0131r\u0131yor. Alan\u0131 veya derinli\u011Fi k\xFC\xE7\xFClt\xFCn.")}return ic(i,t)}finally{i.delete()}}function sc(o,t){let e=nc(o,t),n=[];try{return n=e.decompose(),n.map((i,r)=>ic(i,{...t,name:`${t.name} \xB7 ${r+1}`}))}finally{n.forEach(i=>i.delete()),e.delete()}}var cn=0,jr=1,Oi=2;var yo=1;var Mo=100;var So=204,bo=205;var ko=0,Ho=1,Go=2,bi=3,Wo=4,Xo=5,qo=6,Yo=7,Ec=0;var Zo=300;var wo=1e3,_i=1001,To=1002;var Ac=1006;var Cc=1008;var Rc=1009;var Ic=1015;var Pc=1023;var wi=2300,Ir=2301,Cr=2302,Eo=2400,Ao=2401,Co=2402;var $o="",ue="srgb",Ro="srgb-linear",Io="linear",Rr="srgb";var on=7680;var Po=519;var Do=35044;var vi=2e3,Lo=2001;var ln=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,t);t.target=null}}},Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Hm=Math.PI/180,Vh=180/Math.PI;function Gn(){let o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Gt[o&255]+Gt[o>>8&255]+Gt[o>>16&255]+Gt[o>>24&255]+"-"+Gt[t&255]+Gt[t>>8&255]+"-"+Gt[t>>16&15|64]+Gt[t>>24&255]+"-"+Gt[e&63|128]+Gt[e>>8&255]+"-"+Gt[e>>16&255]+Gt[e>>24&255]+Gt[n&255]+Gt[n>>8&255]+Gt[n>>16&255]+Gt[n>>24&255]).toLowerCase()}function ot(o,t,e){return Math.max(t,Math.min(e,o))}function kh(o,t){return(o%t+t)%t}function Ys(o,t,e){return(1-e)*o+e*t}function di(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function $t(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}var G=class o{constructor(t=0,e=0){o.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ot(this.x,t.x,e.x),this.y=ot(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ot(this.x,t,e),this.y=ot(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ot(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,s=this.y-t.y;return this.x=r*n-s*i+t.x,this.y=r*i+s*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ue=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,s,a){let c=n[i+0],f=n[i+1],u=n[i+2],d=n[i+3],m=r[s+0],g=r[s+1],x=r[s+2],M=r[s+3];if(a===0){t[e+0]=c,t[e+1]=f,t[e+2]=u,t[e+3]=d;return}if(a===1){t[e+0]=m,t[e+1]=g,t[e+2]=x,t[e+3]=M;return}if(d!==M||c!==m||f!==g||u!==x){let b=1-a,A=c*m+f*g+u*x+d*M,E=A>=0?1:-1,p=1-A*A;if(p>Number.EPSILON){let _=Math.sqrt(p),h=Math.atan2(_,A*E);b=Math.sin(b*h)/_,a=Math.sin(a*h)/_}let l=a*E;if(c=c*b+m*l,f=f*b+g*l,u=u*b+x*l,d=d*b+M*l,b===1-a){let _=1/Math.sqrt(c*c+f*f+u*u+d*d);c*=_,f*=_,u*=_,d*=_}}t[e]=c,t[e+1]=f,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,s){let a=n[i],c=n[i+1],f=n[i+2],u=n[i+3],d=r[s],m=r[s+1],g=r[s+2],x=r[s+3];return t[e]=a*x+u*d+c*g-f*m,t[e+1]=c*x+u*m+f*d-a*g,t[e+2]=f*x+u*g+a*m-c*d,t[e+3]=u*x-a*d-c*m-f*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,s=t._order,a=Math.cos,c=Math.sin,f=a(n/2),u=a(i/2),d=a(r/2),m=c(n/2),g=c(i/2),x=c(r/2);switch(s){case"XYZ":this._x=m*u*d+f*g*x,this._y=f*g*d-m*u*x,this._z=f*u*x+m*g*d,this._w=f*u*d-m*g*x;break;case"YXZ":this._x=m*u*d+f*g*x,this._y=f*g*d-m*u*x,this._z=f*u*x-m*g*d,this._w=f*u*d+m*g*x;break;case"ZXY":this._x=m*u*d-f*g*x,this._y=f*g*d+m*u*x,this._z=f*u*x+m*g*d,this._w=f*u*d-m*g*x;break;case"ZYX":this._x=m*u*d-f*g*x,this._y=f*g*d+m*u*x,this._z=f*u*x-m*g*d,this._w=f*u*d+m*g*x;break;case"YZX":this._x=m*u*d+f*g*x,this._y=f*g*d+m*u*x,this._z=f*u*x-m*g*d,this._w=f*u*d-m*g*x;break;case"XZY":this._x=m*u*d-f*g*x,this._y=f*g*d-m*u*x,this._z=f*u*x+m*g*d,this._w=f*u*d+m*g*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],c=e[9],f=e[2],u=e[6],d=e[10],m=n+a+d;if(m>0){let g=.5/Math.sqrt(m+1);this._w=.25/g,this._x=(u-c)*g,this._y=(r-f)*g,this._z=(s-i)*g}else if(n>a&&n>d){let g=2*Math.sqrt(1+n-a-d);this._w=(u-c)/g,this._x=.25*g,this._y=(i+s)/g,this._z=(r+f)/g}else if(a>d){let g=2*Math.sqrt(1+a-n-d);this._w=(r-f)/g,this._x=(i+s)/g,this._y=.25*g,this._z=(c+u)/g}else{let g=2*Math.sqrt(1+d-n-a);this._w=(s-i)/g,this._x=(r+f)/g,this._y=(c+u)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ot(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,s=t._w,a=e._x,c=e._y,f=e._z,u=e._w;return this._x=n*u+s*a+i*f-r*c,this._y=i*u+s*c+r*a-n*f,this._z=r*u+s*f+n*c-i*a,this._w=s*u-n*a-i*c-r*f,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,s=this._w,a=s*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=s,this._x=n,this._y=i,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let g=1-e;return this._w=g*s+e*this._w,this._x=g*n+e*this._x,this._y=g*i+e*this._y,this._z=g*r+e*this._z,this.normalize(),this}let f=Math.sqrt(c),u=Math.atan2(f,a),d=Math.sin((1-e)*u)/f,m=Math.sin(e*u)/f;return this._w=s*d+this._w*m,this._x=n*d+this._x*m,this._y=i*d+this._y*m,this._z=r*d+this._z*m,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class o{constructor(t=0,e=0,n=0){o.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(oc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(oc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,s=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*s,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*s,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*s,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,s=t.y,a=t.z,c=t.w,f=2*(s*i-a*n),u=2*(a*e-r*i),d=2*(r*n-s*e);return this.x=e+c*f+s*d-a*u,this.y=n+c*u+a*f-r*d,this.z=i+c*d+r*u-s*f,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ot(this.x,t.x,e.x),this.y=ot(this.y,t.y,e.y),this.z=ot(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ot(this.x,t,e),this.y=ot(this.y,t,e),this.z=ot(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,s=e.x,a=e.y,c=e.z;return this.x=i*c-r*a,this.y=r*s-n*c,this.z=n*a-i*s,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Zs.copy(this).projectOnVector(t),this.sub(Zs)}reflect(t){return this.sub(Zs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ot(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Zs=new I,oc=new Ue,at=class o{constructor(t,e,n,i,r,s,a,c,f){o.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,s,a,c,f)}set(t,e,n,i,r,s,a,c,f){let u=this.elements;return u[0]=t,u[1]=i,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=s,u[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,s=n[0],a=n[3],c=n[6],f=n[1],u=n[4],d=n[7],m=n[2],g=n[5],x=n[8],M=i[0],b=i[3],A=i[6],E=i[1],p=i[4],l=i[7],_=i[2],h=i[5],R=i[8];return r[0]=s*M+a*E+c*_,r[3]=s*b+a*p+c*h,r[6]=s*A+a*l+c*R,r[1]=f*M+u*E+d*_,r[4]=f*b+u*p+d*h,r[7]=f*A+u*l+d*R,r[2]=m*M+g*E+x*_,r[5]=m*b+g*p+x*h,r[8]=m*A+g*l+x*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],s=t[4],a=t[5],c=t[6],f=t[7],u=t[8];return e*s*u-e*a*f-n*r*u+n*a*c+i*r*f-i*s*c}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],s=t[4],a=t[5],c=t[6],f=t[7],u=t[8],d=u*s-a*f,m=a*c-u*r,g=f*r-s*c,x=e*d+n*m+i*g;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/x;return t[0]=d*M,t[1]=(i*f-u*n)*M,t[2]=(a*n-i*s)*M,t[3]=m*M,t[4]=(u*e-i*c)*M,t[5]=(i*r-a*e)*M,t[6]=g*M,t[7]=(n*c-f*e)*M,t[8]=(s*e-n*r)*M,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,s,a){let c=Math.cos(r),f=Math.sin(r);return this.set(n*c,n*f,-n*(c*s+f*a)+s+t,-i*f,i*c,-i*(-f*s+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply($s.makeScale(t,e)),this}rotate(t){return this.premultiply($s.makeRotation(-t)),this}translate(t,e){return this.premultiply($s.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},$s=new at;function Dc(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Uo(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}var ac={};function No(o){o in ac||(ac[o]=!0,console.warn(o))}var cc=new at().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),lc=new at().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Hh(){let o={enabled:!0,workingColorSpace:Ro,spaces:{},convert:function(i,r,s){return this.enabled===!1||r===s||!r||!s||(this.spaces[r].transfer===Rr&&(i.r=Le(i.r),i.g=Le(i.g),i.b=Le(i.b)),this.spaces[r].primaries!==this.spaces[s].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===Rr&&(i.r=Fn(i.r),i.g=Fn(i.g),i.b=Fn(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===$o?Io:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,s){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return No("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return No("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return o.define({[Ro]:{primaries:t,whitePoint:n,transfer:Io,toXYZ:cc,fromXYZ:lc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ue},outputColorSpaceConfig:{drawingBufferColorSpace:ue}},[ue]:{primaries:t,whitePoint:n,transfer:Rr,toXYZ:cc,fromXYZ:lc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ue}}}),o}var he=Hh();function Le(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Fn(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}var wn,Pr=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{wn===void 0&&(wn=Uo("canvas")),wn.width=t.width,wn.height=t.height;let i=wn.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=wn}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Uo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let s=0;s<r.length;s++)r[s]=Le(r[s]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Le(e[n]/255)*255):e[n]=Le(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Gh=0,Dr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gh++}),this.uuid=Gn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let s=0,a=i.length;s<a;s++)i[s].isDataTexture?r.push(Js(i[s].image)):r.push(Js(i[s]))}else r=Js(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function Js(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Pr.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Wh=0,Ks=new I,Bn=class o extends ln{constructor(t=o.DEFAULT_IMAGE,e=o.DEFAULT_MAPPING,n=_i,i=_i,r=Ac,s=Cc,a=Pc,c=Rc,f=o.DEFAULT_ANISOTROPY,u=$o){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wh++}),this.uuid=Gn(),this.name="",this.source=new Dr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=s,this.anisotropy=f,this.format=a,this.internalFormat=null,this.type=c,this.offset=new G(0,0),this.repeat=new G(1,1),this.center=new G(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ks).x}get height(){return this.source.getSize(Ks).y}get depth(){return this.source.getSize(Ks).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Zo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case wo:t.x=t.x-Math.floor(t.x);break;case _i:t.x=t.x<0?0:1;break;case To:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case wo:t.y=t.y-Math.floor(t.y);break;case _i:t.y=t.y<0?0:1;break;case To:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=Zo;Bn.DEFAULT_ANISOTROPY=1;var te=class o{constructor(t=0,e=0,n=0,i=1){o.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i+s[12]*r,this.y=s[1]*e+s[5]*n+s[9]*i+s[13]*r,this.z=s[2]*e+s[6]*n+s[10]*i+s[14]*r,this.w=s[3]*e+s[7]*n+s[11]*i+s[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,c=t.elements,f=c[0],u=c[4],d=c[8],m=c[1],g=c[5],x=c[9],M=c[2],b=c[6],A=c[10];if(Math.abs(u-m)<.01&&Math.abs(d-M)<.01&&Math.abs(x-b)<.01){if(Math.abs(u+m)<.1&&Math.abs(d+M)<.1&&Math.abs(x+b)<.1&&Math.abs(f+g+A-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let p=(f+1)/2,l=(g+1)/2,_=(A+1)/2,h=(u+m)/4,R=(d+M)/4,w=(x+b)/4;return p>l&&p>_?p<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(p),i=h/n,r=R/n):l>_?l<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(l),n=h/i,r=w/i):_<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(_),n=R/r,i=w/r),this.set(n,i,r,e),this}let E=Math.sqrt((b-x)*(b-x)+(d-M)*(d-M)+(m-u)*(m-u));return Math.abs(E)<.001&&(E=1),this.x=(b-x)/E,this.y=(d-M)/E,this.z=(m-u)/E,this.w=Math.acos((f+g+A-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ot(this.x,t.x,e.x),this.y=ot(this.y,t.y,e.y),this.z=ot(this.z,t.z,e.z),this.w=ot(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ot(this.x,t,e),this.y=ot(this.y,t,e),this.z=ot(this.z,t,e),this.w=ot(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};var It=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(de.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(de.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=de.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let s=0,a=r.count;s<a;s++)t.isMesh===!0?t.getVertexPosition(s,de):de.fromBufferAttribute(r,s),de.applyMatrix4(t.matrixWorld),this.expandByPoint(de);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ar.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ar.copy(n.boundingBox)),ar.applyMatrix4(t.matrixWorld),this.union(ar)}let i=t.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,de),de.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(pi),cr.subVectors(this.max,pi),Tn.subVectors(t.a,pi),En.subVectors(t.b,pi),An.subVectors(t.c,pi),ke.subVectors(En,Tn),He.subVectors(An,En),nn.subVectors(Tn,An);let e=[0,-ke.z,ke.y,0,-He.z,He.y,0,-nn.z,nn.y,ke.z,0,-ke.x,He.z,0,-He.x,nn.z,0,-nn.x,-ke.y,ke.x,0,-He.y,He.x,0,-nn.y,nn.x,0];return!Qs(e,Tn,En,An,cr)||(e=[1,0,0,0,1,0,0,0,1],!Qs(e,Tn,En,An,cr))?!1:(lr.crossVectors(ke,He),e=[lr.x,lr.y,lr.z],Qs(e,Tn,En,An,cr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,de).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(de).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ce[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ce[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ce[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ce[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ce[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ce[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ce[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ce[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ce),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ce=[new I,new I,new I,new I,new I,new I,new I,new I],de=new I,ar=new It,Tn=new I,En=new I,An=new I,ke=new I,He=new I,nn=new I,pi=new I,cr=new I,lr=new I,rn=new I;function Qs(o,t,e,n,i){for(let r=0,s=o.length-3;r<=s;r+=3){rn.fromArray(o,r);let a=i.x*Math.abs(rn.x)+i.y*Math.abs(rn.y)+i.z*Math.abs(rn.z),c=t.dot(rn),f=e.dot(rn),u=n.dot(rn);if(Math.max(-Math.max(c,f,u),Math.min(c,f,u))>a)return!1}return!0}var Xh=new It,mi=new I,js=new I,On=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Xh.setFromPoints(t).getCenter(n);let i=0;for(let r=0,s=t.length;r<s;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;mi.subVectors(t,this.center);let e=mi.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(mi,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(js.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(mi.copy(t.center).add(js)),this.expandByPoint(mi.copy(t.center).sub(js))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Re=new I,to=new I,hr=new I,Ge=new I,eo=new I,ur=new I,no=new I,we=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Re)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Re.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Re.copy(this.origin).addScaledVector(this.direction,e),Re.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){to.copy(t).add(e).multiplyScalar(.5),hr.copy(e).sub(t).normalize(),Ge.copy(this.origin).sub(to);let r=t.distanceTo(e)*.5,s=-this.direction.dot(hr),a=Ge.dot(this.direction),c=-Ge.dot(hr),f=Ge.lengthSq(),u=Math.abs(1-s*s),d,m,g,x;if(u>0)if(d=s*c-a,m=s*a-c,x=r*u,d>=0)if(m>=-x)if(m<=x){let M=1/u;d*=M,m*=M,g=d*(d+s*m+2*a)+m*(s*d+m+2*c)+f}else m=r,d=Math.max(0,-(s*m+a)),g=-d*d+m*(m+2*c)+f;else m=-r,d=Math.max(0,-(s*m+a)),g=-d*d+m*(m+2*c)+f;else m<=-x?(d=Math.max(0,-(-s*r+a)),m=d>0?-r:Math.min(Math.max(-r,-c),r),g=-d*d+m*(m+2*c)+f):m<=x?(d=0,m=Math.min(Math.max(-r,-c),r),g=m*(m+2*c)+f):(d=Math.max(0,-(s*r+a)),m=d>0?r:Math.min(Math.max(-r,-c),r),g=-d*d+m*(m+2*c)+f);else m=s>0?-r:r,d=Math.max(0,-(s*m+a)),g=-d*d+m*(m+2*c)+f;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(to).addScaledVector(hr,m),g}intersectSphere(t,e){Re.subVectors(t.center,this.origin);let n=Re.dot(this.direction),i=Re.dot(Re)-n*n,r=t.radius*t.radius;if(i>r)return null;let s=Math.sqrt(r-i),a=n-s,c=n+s;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,s,a,c,f=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,m=this.origin;return f>=0?(n=(t.min.x-m.x)*f,i=(t.max.x-m.x)*f):(n=(t.max.x-m.x)*f,i=(t.min.x-m.x)*f),u>=0?(r=(t.min.y-m.y)*u,s=(t.max.y-m.y)*u):(r=(t.max.y-m.y)*u,s=(t.min.y-m.y)*u),n>s||r>i||((r>n||isNaN(n))&&(n=r),(s<i||isNaN(i))&&(i=s),d>=0?(a=(t.min.z-m.z)*d,c=(t.max.z-m.z)*d):(a=(t.max.z-m.z)*d,c=(t.min.z-m.z)*d),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Re)!==null}intersectTriangle(t,e,n,i,r){eo.subVectors(e,t),ur.subVectors(n,t),no.crossVectors(eo,ur);let s=this.direction.dot(no),a;if(s>0){if(i)return null;a=1}else if(s<0)a=-1,s=-s;else return null;Ge.subVectors(this.origin,t);let c=a*this.direction.dot(ur.crossVectors(Ge,ur));if(c<0)return null;let f=a*this.direction.dot(eo.cross(Ge));if(f<0||c+f>s)return null;let u=-a*Ge.dot(no);return u<0?null:this.at(u/s,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},dt=class o{constructor(t,e,n,i,r,s,a,c,f,u,d,m,g,x,M,b){o.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,s,a,c,f,u,d,m,g,x,M,b)}set(t,e,n,i,r,s,a,c,f,u,d,m,g,x,M,b){let A=this.elements;return A[0]=t,A[4]=e,A[8]=n,A[12]=i,A[1]=r,A[5]=s,A[9]=a,A[13]=c,A[2]=f,A[6]=u,A[10]=d,A[14]=m,A[3]=g,A[7]=x,A[11]=M,A[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new o().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/Cn.setFromMatrixColumn(t,0).length(),r=1/Cn.setFromMatrixColumn(t,1).length(),s=1/Cn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*s,e[9]=n[9]*s,e[10]=n[10]*s,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,s=Math.cos(n),a=Math.sin(n),c=Math.cos(i),f=Math.sin(i),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let m=s*u,g=s*d,x=a*u,M=a*d;e[0]=c*u,e[4]=-c*d,e[8]=f,e[1]=g+x*f,e[5]=m-M*f,e[9]=-a*c,e[2]=M-m*f,e[6]=x+g*f,e[10]=s*c}else if(t.order==="YXZ"){let m=c*u,g=c*d,x=f*u,M=f*d;e[0]=m+M*a,e[4]=x*a-g,e[8]=s*f,e[1]=s*d,e[5]=s*u,e[9]=-a,e[2]=g*a-x,e[6]=M+m*a,e[10]=s*c}else if(t.order==="ZXY"){let m=c*u,g=c*d,x=f*u,M=f*d;e[0]=m-M*a,e[4]=-s*d,e[8]=x+g*a,e[1]=g+x*a,e[5]=s*u,e[9]=M-m*a,e[2]=-s*f,e[6]=a,e[10]=s*c}else if(t.order==="ZYX"){let m=s*u,g=s*d,x=a*u,M=a*d;e[0]=c*u,e[4]=x*f-g,e[8]=m*f+M,e[1]=c*d,e[5]=M*f+m,e[9]=g*f-x,e[2]=-f,e[6]=a*c,e[10]=s*c}else if(t.order==="YZX"){let m=s*c,g=s*f,x=a*c,M=a*f;e[0]=c*u,e[4]=M-m*d,e[8]=x*d+g,e[1]=d,e[5]=s*u,e[9]=-a*u,e[2]=-f*u,e[6]=g*d+x,e[10]=m-M*d}else if(t.order==="XZY"){let m=s*c,g=s*f,x=a*c,M=a*f;e[0]=c*u,e[4]=-d,e[8]=f*u,e[1]=m*d+M,e[5]=s*u,e[9]=g*d-x,e[2]=x*d-g,e[6]=a*u,e[10]=M*d+m}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(qh,t,Yh)}lookAt(t,e,n){let i=this.elements;return Qt.subVectors(t,e),Qt.lengthSq()===0&&(Qt.z=1),Qt.normalize(),We.crossVectors(n,Qt),We.lengthSq()===0&&(Math.abs(n.z)===1?Qt.x+=1e-4:Qt.z+=1e-4,Qt.normalize(),We.crossVectors(n,Qt)),We.normalize(),fr.crossVectors(Qt,We),i[0]=We.x,i[4]=fr.x,i[8]=Qt.x,i[1]=We.y,i[5]=fr.y,i[9]=Qt.y,i[2]=We.z,i[6]=fr.z,i[10]=Qt.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,s=n[0],a=n[4],c=n[8],f=n[12],u=n[1],d=n[5],m=n[9],g=n[13],x=n[2],M=n[6],b=n[10],A=n[14],E=n[3],p=n[7],l=n[11],_=n[15],h=i[0],R=i[4],w=i[8],y=i[12],v=i[1],S=i[5],T=i[9],C=i[13],P=i[2],D=i[6],L=i[10],U=i[14],B=i[3],F=i[7],$=i[11],V=i[15];return r[0]=s*h+a*v+c*P+f*B,r[4]=s*R+a*S+c*D+f*F,r[8]=s*w+a*T+c*L+f*$,r[12]=s*y+a*C+c*U+f*V,r[1]=u*h+d*v+m*P+g*B,r[5]=u*R+d*S+m*D+g*F,r[9]=u*w+d*T+m*L+g*$,r[13]=u*y+d*C+m*U+g*V,r[2]=x*h+M*v+b*P+A*B,r[6]=x*R+M*S+b*D+A*F,r[10]=x*w+M*T+b*L+A*$,r[14]=x*y+M*C+b*U+A*V,r[3]=E*h+p*v+l*P+_*B,r[7]=E*R+p*S+l*D+_*F,r[11]=E*w+p*T+l*L+_*$,r[15]=E*y+p*C+l*U+_*V,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],s=t[1],a=t[5],c=t[9],f=t[13],u=t[2],d=t[6],m=t[10],g=t[14],x=t[3],M=t[7],b=t[11],A=t[15];return x*(+r*c*d-i*f*d-r*a*m+n*f*m+i*a*g-n*c*g)+M*(+e*c*g-e*f*m+r*s*m-i*s*g+i*f*u-r*c*u)+b*(+e*f*d-e*a*g-r*s*d+n*s*g+r*a*u-n*f*u)+A*(-i*a*u-e*c*d+e*a*m+i*s*d-n*s*m+n*c*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],s=t[4],a=t[5],c=t[6],f=t[7],u=t[8],d=t[9],m=t[10],g=t[11],x=t[12],M=t[13],b=t[14],A=t[15],E=d*b*f-M*m*f+M*c*g-a*b*g-d*c*A+a*m*A,p=x*m*f-u*b*f-x*c*g+s*b*g+u*c*A-s*m*A,l=u*M*f-x*d*f+x*a*g-s*M*g-u*a*A+s*d*A,_=x*d*c-u*M*c-x*a*m+s*M*m+u*a*b-s*d*b,h=e*E+n*p+i*l+r*_;if(h===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/h;return t[0]=E*R,t[1]=(M*m*r-d*b*r-M*i*g+n*b*g+d*i*A-n*m*A)*R,t[2]=(a*b*r-M*c*r+M*i*f-n*b*f-a*i*A+n*c*A)*R,t[3]=(d*c*r-a*m*r-d*i*f+n*m*f+a*i*g-n*c*g)*R,t[4]=p*R,t[5]=(u*b*r-x*m*r+x*i*g-e*b*g-u*i*A+e*m*A)*R,t[6]=(x*c*r-s*b*r-x*i*f+e*b*f+s*i*A-e*c*A)*R,t[7]=(s*m*r-u*c*r+u*i*f-e*m*f-s*i*g+e*c*g)*R,t[8]=l*R,t[9]=(x*d*r-u*M*r-x*n*g+e*M*g+u*n*A-e*d*A)*R,t[10]=(s*M*r-x*a*r+x*n*f-e*M*f-s*n*A+e*a*A)*R,t[11]=(u*a*r-s*d*r-u*n*f+e*d*f+s*n*g-e*a*g)*R,t[12]=_*R,t[13]=(u*M*i-x*d*i+x*n*m-e*M*m-u*n*b+e*d*b)*R,t[14]=(x*a*i-s*M*i-x*n*c+e*M*c+s*n*b-e*a*b)*R,t[15]=(s*d*i-u*a*i+u*n*c-e*d*c-s*n*m+e*a*m)*R,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,s=t.x,a=t.y,c=t.z,f=r*s,u=r*a;return this.set(f*s+n,f*a-i*c,f*c+i*a,0,f*a+i*c,u*a+n,u*c-i*s,0,f*c-i*a,u*c+i*s,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,s){return this.set(1,n,r,0,t,1,s,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,s=e._y,a=e._z,c=e._w,f=r+r,u=s+s,d=a+a,m=r*f,g=r*u,x=r*d,M=s*u,b=s*d,A=a*d,E=c*f,p=c*u,l=c*d,_=n.x,h=n.y,R=n.z;return i[0]=(1-(M+A))*_,i[1]=(g+l)*_,i[2]=(x-p)*_,i[3]=0,i[4]=(g-l)*h,i[5]=(1-(m+A))*h,i[6]=(b+E)*h,i[7]=0,i[8]=(x+p)*R,i[9]=(b-E)*R,i[10]=(1-(m+M))*R,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=Cn.set(i[0],i[1],i[2]).length(),s=Cn.set(i[4],i[5],i[6]).length(),a=Cn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],pe.copy(this);let f=1/r,u=1/s,d=1/a;return pe.elements[0]*=f,pe.elements[1]*=f,pe.elements[2]*=f,pe.elements[4]*=u,pe.elements[5]*=u,pe.elements[6]*=u,pe.elements[8]*=d,pe.elements[9]*=d,pe.elements[10]*=d,e.setFromRotationMatrix(pe),n.x=r,n.y=s,n.z=a,this}makePerspective(t,e,n,i,r,s,a=vi,c=!1){let f=this.elements,u=2*r/(e-t),d=2*r/(n-i),m=(e+t)/(e-t),g=(n+i)/(n-i),x,M;if(c)x=r/(s-r),M=s*r/(s-r);else if(a===vi)x=-(s+r)/(s-r),M=-2*s*r/(s-r);else if(a===Lo)x=-s/(s-r),M=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return f[0]=u,f[4]=0,f[8]=m,f[12]=0,f[1]=0,f[5]=d,f[9]=g,f[13]=0,f[2]=0,f[6]=0,f[10]=x,f[14]=M,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(t,e,n,i,r,s,a=vi,c=!1){let f=this.elements,u=2/(e-t),d=2/(n-i),m=-(e+t)/(e-t),g=-(n+i)/(n-i),x,M;if(c)x=1/(s-r),M=s/(s-r);else if(a===vi)x=-2/(s-r),M=-(s+r)/(s-r);else if(a===Lo)x=-1/(s-r),M=-r/(s-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return f[0]=u,f[4]=0,f[8]=0,f[12]=m,f[1]=0,f[5]=d,f[9]=0,f[13]=g,f[2]=0,f[6]=0,f[10]=x,f[14]=M,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Cn=new I,pe=new dt,qh=new I(0,0,0),Yh=new I(1,1,1),We=new I,fr=new I,Qt=new I,hc=new dt,uc=new Ue,zn=class o{constructor(t=0,e=0,n=0,i=o.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],s=i[4],a=i[8],c=i[1],f=i[5],u=i[9],d=i[2],m=i[6],g=i[10];switch(e){case"XYZ":this._y=Math.asin(ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,g),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(m,f),this._z=0);break;case"YXZ":this._x=Math.asin(-ot(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(c,f)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ot(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-s,f)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ot(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(m,g),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-s,f));break;case"YZX":this._z=Math.asin(ot(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,f),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-ot(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(m,f),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return hc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(hc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return uc.setFromEuler(this),this.setFromQuaternion(uc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};zn.DEFAULT_ORDER="XYZ";var Lr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Zh=0,fc=new I,Rn=new Ue,Ie=new dt,dr=new I,gi=new I,$h=new I,Jh=new Ue,dc=new I(1,0,0),pc=new I(0,1,0),mc=new I(0,0,1),gc={type:"added"},Kh={type:"removed"},In={type:"childadded",child:null},io={type:"childremoved",child:null},qe=class o extends ln{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zh++}),this.uuid=Gn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=o.DEFAULT_UP.clone();let t=new I,e=new zn,n=new Ue,i=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function s(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new dt},normalMatrix:{value:new at}}),this.matrix=new dt,this.matrixWorld=new dt,this.matrixAutoUpdate=o.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=o.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Rn.setFromAxisAngle(t,e),this.quaternion.multiply(Rn),this}rotateOnWorldAxis(t,e){return Rn.setFromAxisAngle(t,e),this.quaternion.premultiply(Rn),this}rotateX(t){return this.rotateOnAxis(dc,t)}rotateY(t){return this.rotateOnAxis(pc,t)}rotateZ(t){return this.rotateOnAxis(mc,t)}translateOnAxis(t,e){return fc.copy(t).applyQuaternion(this.quaternion),this.position.add(fc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(dc,t)}translateY(t){return this.translateOnAxis(pc,t)}translateZ(t){return this.translateOnAxis(mc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ie.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?dr.copy(t):dr.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),gi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ie.lookAt(gi,dr,this.up):Ie.lookAt(dr,gi,this.up),this.quaternion.setFromRotationMatrix(Ie),i&&(Ie.extractRotation(i.matrixWorld),Rn.setFromRotationMatrix(Ie),this.quaternion.premultiply(Rn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(gc),In.child=t,this.dispatchEvent(In),In.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Kh),io.child=t,this.dispatchEvent(io),io.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ie.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ie.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ie),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(gc),In.child=t,this.dispatchEvent(In),In.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let s=this.children[n].getObjectByProperty(t,e);if(s!==void 0)return s}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gi,t,$h),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gi,Jh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let f=0,u=c.length;f<u;f++){let d=c[f];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,f=this.material.length;c<f;c++)a.push(r(t.materials,this.material[c]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];i.animations.push(r(t.animations,c))}}if(e){let a=s(t.geometries),c=s(t.materials),f=s(t.textures),u=s(t.images),d=s(t.shapes),m=s(t.skeletons),g=s(t.animations),x=s(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),f.length>0&&(n.textures=f),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),m.length>0&&(n.skeletons=m),g.length>0&&(n.animations=g),x.length>0&&(n.nodes=x)}return n.object=i,n;function s(a){let c=[];for(let f in a){let u=a[f];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};qe.DEFAULT_UP=new I(0,1,0);qe.DEFAULT_MATRIX_AUTO_UPDATE=!0;qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var me=new I,Pe=new I,ro=new I,De=new I,Pn=new I,Dn=new I,xc=new I,so=new I,oo=new I,ao=new I,co=new te,lo=new te,ho=new te,Et=class o{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),me.subVectors(t,e),i.cross(me);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){me.subVectors(i,e),Pe.subVectors(n,e),ro.subVectors(t,e);let s=me.dot(me),a=me.dot(Pe),c=me.dot(ro),f=Pe.dot(Pe),u=Pe.dot(ro),d=s*f-a*a;if(d===0)return r.set(0,0,0),null;let m=1/d,g=(f*c-a*u)*m,x=(s*u-a*c)*m;return r.set(1-g-x,x,g)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,De)===null?!1:De.x>=0&&De.y>=0&&De.x+De.y<=1}static getInterpolation(t,e,n,i,r,s,a,c){return this.getBarycoord(t,e,n,i,De)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,De.x),c.addScaledVector(s,De.y),c.addScaledVector(a,De.z),c)}static getInterpolatedAttribute(t,e,n,i,r,s){return co.setScalar(0),lo.setScalar(0),ho.setScalar(0),co.fromBufferAttribute(t,e),lo.fromBufferAttribute(t,n),ho.fromBufferAttribute(t,i),s.setScalar(0),s.addScaledVector(co,r.x),s.addScaledVector(lo,r.y),s.addScaledVector(ho,r.z),s}static isFrontFacing(t,e,n,i){return me.subVectors(n,e),Pe.subVectors(t,e),me.cross(Pe).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return me.subVectors(this.c,this.b),Pe.subVectors(this.a,this.b),me.cross(Pe).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return o.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return o.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return o.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return o.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return o.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,s,a;Pn.subVectors(i,n),Dn.subVectors(r,n),so.subVectors(t,n);let c=Pn.dot(so),f=Dn.dot(so);if(c<=0&&f<=0)return e.copy(n);oo.subVectors(t,i);let u=Pn.dot(oo),d=Dn.dot(oo);if(u>=0&&d<=u)return e.copy(i);let m=c*d-u*f;if(m<=0&&c>=0&&u<=0)return s=c/(c-u),e.copy(n).addScaledVector(Pn,s);ao.subVectors(t,r);let g=Pn.dot(ao),x=Dn.dot(ao);if(x>=0&&g<=x)return e.copy(r);let M=g*f-c*x;if(M<=0&&f>=0&&x<=0)return a=f/(f-x),e.copy(n).addScaledVector(Dn,a);let b=u*x-g*d;if(b<=0&&d-u>=0&&g-x>=0)return xc.subVectors(r,i),a=(d-u)/(d-u+(g-x)),e.copy(i).addScaledVector(xc,a);let A=1/(b+M+m);return s=M*A,a=m*A,e.copy(n).addScaledVector(Pn,s).addScaledVector(Dn,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Lc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xe={h:0,s:0,l:0},pr={h:0,s:0,l:0};function uo(o,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?o+(t-o)*6*e:e<1/2?t:e<2/3?o+(t-o)*6*(2/3-e):o}var Dt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ue){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=he.workingColorSpace){return this.r=t,this.g=e,this.b=n,he.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=he.workingColorSpace){if(t=kh(t,1),e=ot(e,0,1),n=ot(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,s=2*n-r;this.r=uo(s,r,t+1/3),this.g=uo(s,r,t),this.b=uo(s,r,t-1/3)}return he.colorSpaceToWorking(this,i),this}setStyle(t,e=ue){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,s=i[1],a=i[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(s===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ue){let n=Lc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Le(t.r),this.g=Le(t.g),this.b=Le(t.b),this}copyLinearToSRGB(t){return this.r=Fn(t.r),this.g=Fn(t.g),this.b=Fn(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ue){return he.workingToColorSpace(Wt.copy(this),t),Math.round(ot(Wt.r*255,0,255))*65536+Math.round(ot(Wt.g*255,0,255))*256+Math.round(ot(Wt.b*255,0,255))}getHexString(t=ue){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.workingToColorSpace(Wt.copy(this),e);let n=Wt.r,i=Wt.g,r=Wt.b,s=Math.max(n,i,r),a=Math.min(n,i,r),c,f,u=(a+s)/2;if(a===s)c=0,f=0;else{let d=s-a;switch(f=u<=.5?d/(s+a):d/(2-s-a),s){case n:c=(i-r)/d+(i<r?6:0);break;case i:c=(r-n)/d+2;break;case r:c=(n-i)/d+4;break}c/=6}return t.h=c,t.s=f,t.l=u,t}getRGB(t,e=he.workingColorSpace){return he.workingToColorSpace(Wt.copy(this),e),t.r=Wt.r,t.g=Wt.g,t.b=Wt.b,t}getStyle(t=ue){he.workingToColorSpace(Wt.copy(this),t);let e=Wt.r,n=Wt.g,i=Wt.b;return t!==ue?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Xe),this.setHSL(Xe.h+t,Xe.s+e,Xe.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Xe),t.getHSL(pr);let n=Ys(Xe.h,pr.h,e),i=Ys(Xe.s,pr.s,e),r=Ys(Xe.l,pr.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Wt=new Dt;Dt.NAMES=Lc;var Qh=0,Ur=class extends ln{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qh++}),this.uuid=Gn(),this.name="",this.type="Material",this.blending=yo,this.side=cn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=So,this.blendDst=bo,this.blendEquation=Mo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Dt(0,0,0),this.blendAlpha=0,this.depthFunc=bi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Po,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=on,this.stencilZFail=on,this.stencilZPass=on,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==yo&&(n.blending=this.blending),this.side!==cn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==So&&(n.blendSrc=this.blendSrc),this.blendDst!==bo&&(n.blendDst=this.blendDst),this.blendEquation!==Mo&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==bi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Po&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==on&&(n.stencilFail=this.stencilFail),this.stencilZFail!==on&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==on&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let s=[];for(let a in r){let c=r[a];delete c.metadata,s.push(c)}return s}if(e){let r=i(t.textures),s=i(t.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Nr=class extends Ur{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=Ec,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Bt=new I,mr=new G,jh=0,zt=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:jh++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Do,this.updateRanges=[],this.gpuType=Ic,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)mr.fromBufferAttribute(this,e),mr.applyMatrix3(t),this.setXY(e,mr.x,mr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Bt.fromBufferAttribute(this,e),Bt.applyMatrix3(t),this.setXYZ(e,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Bt.fromBufferAttribute(this,e),Bt.applyMatrix4(t),this.setXYZ(e,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Bt.fromBufferAttribute(this,e),Bt.applyNormalMatrix(t),this.setXYZ(e,Bt.x,Bt.y,Bt.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Bt.fromBufferAttribute(this,e),Bt.transformDirection(t),this.setXYZ(e,Bt.x,Bt.y,Bt.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=di(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=$t(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=di(e,this.array)),e}setX(t,e){return this.normalized&&(e=$t(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=di(e,this.array)),e}setY(t,e){return this.normalized&&(e=$t(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=di(e,this.array)),e}setZ(t,e){return this.normalized&&(e=$t(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=di(e,this.array)),e}setW(t,e){return this.normalized&&(e=$t(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array),i=$t(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array),i=$t(i,this.array),r=$t(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Do&&(t.usage=this.usage),t}};var Fr=class extends zt{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Br=class extends zt{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Xt=class extends zt{constructor(t,e,n){super(new Float32Array(t),e,n)}},tu=0,le=new dt,fo=new qe,Ln=new I,jt=new It,xi=new It,Vt=new I,ge=class o extends ln{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tu++}),this.uuid=Gn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Dc(t)?Br:Fr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new at().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return le.makeRotationFromQuaternion(t),this.applyMatrix4(le),this}rotateX(t){return le.makeRotationX(t),this.applyMatrix4(le),this}rotateY(t){return le.makeRotationY(t),this.applyMatrix4(le),this}rotateZ(t){return le.makeRotationZ(t),this.applyMatrix4(le),this}translate(t,e,n){return le.makeTranslation(t,e,n),this.applyMatrix4(le),this}scale(t,e,n){return le.makeScale(t,e,n),this.applyMatrix4(le),this}lookAt(t){return fo.lookAt(t),fo.updateMatrix(),this.applyMatrix4(fo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ln).negate(),this.translate(Ln.x,Ln.y,Ln.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let s=t[i];n.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Xt(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new It);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];jt.setFromBufferAttribute(r),this.morphTargetsRelative?(Vt.addVectors(this.boundingBox.min,jt.min),this.boundingBox.expandByPoint(Vt),Vt.addVectors(this.boundingBox.max,jt.max),this.boundingBox.expandByPoint(Vt)):(this.boundingBox.expandByPoint(jt.min),this.boundingBox.expandByPoint(jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new On);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let n=this.boundingSphere.center;if(jt.setFromBufferAttribute(t),e)for(let r=0,s=e.length;r<s;r++){let a=e[r];xi.setFromBufferAttribute(a),this.morphTargetsRelative?(Vt.addVectors(jt.min,xi.min),jt.expandByPoint(Vt),Vt.addVectors(jt.max,xi.max),jt.expandByPoint(Vt)):(jt.expandByPoint(xi.min),jt.expandByPoint(xi.max))}jt.getCenter(n);let i=0;for(let r=0,s=t.count;r<s;r++)Vt.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Vt));if(e)for(let r=0,s=e.length;r<s;r++){let a=e[r],c=this.morphTargetsRelative;for(let f=0,u=a.count;f<u;f++)Vt.fromBufferAttribute(a,f),c&&(Ln.fromBufferAttribute(t,f),Vt.add(Ln)),i=Math.max(i,n.distanceToSquared(Vt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zt(new Float32Array(4*n.count),4));let s=this.getAttribute("tangent"),a=[],c=[];for(let w=0;w<n.count;w++)a[w]=new I,c[w]=new I;let f=new I,u=new I,d=new I,m=new G,g=new G,x=new G,M=new I,b=new I;function A(w,y,v){f.fromBufferAttribute(n,w),u.fromBufferAttribute(n,y),d.fromBufferAttribute(n,v),m.fromBufferAttribute(r,w),g.fromBufferAttribute(r,y),x.fromBufferAttribute(r,v),u.sub(f),d.sub(f),g.sub(m),x.sub(m);let S=1/(g.x*x.y-x.x*g.y);isFinite(S)&&(M.copy(u).multiplyScalar(x.y).addScaledVector(d,-g.y).multiplyScalar(S),b.copy(d).multiplyScalar(g.x).addScaledVector(u,-x.x).multiplyScalar(S),a[w].add(M),a[y].add(M),a[v].add(M),c[w].add(b),c[y].add(b),c[v].add(b))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let w=0,y=E.length;w<y;++w){let v=E[w],S=v.start,T=v.count;for(let C=S,P=S+T;C<P;C+=3)A(t.getX(C+0),t.getX(C+1),t.getX(C+2))}let p=new I,l=new I,_=new I,h=new I;function R(w){_.fromBufferAttribute(i,w),h.copy(_);let y=a[w];p.copy(y),p.sub(_.multiplyScalar(_.dot(y))).normalize(),l.crossVectors(h,y);let S=l.dot(c[w])<0?-1:1;s.setXYZW(w,p.x,p.y,p.z,S)}for(let w=0,y=E.length;w<y;++w){let v=E[w],S=v.start,T=v.count;for(let C=S,P=S+T;C<P;C+=3)R(t.getX(C+0)),R(t.getX(C+1)),R(t.getX(C+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new zt(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let m=0,g=n.count;m<g;m++)n.setXYZ(m,0,0,0);let i=new I,r=new I,s=new I,a=new I,c=new I,f=new I,u=new I,d=new I;if(t)for(let m=0,g=t.count;m<g;m+=3){let x=t.getX(m+0),M=t.getX(m+1),b=t.getX(m+2);i.fromBufferAttribute(e,x),r.fromBufferAttribute(e,M),s.fromBufferAttribute(e,b),u.subVectors(s,r),d.subVectors(i,r),u.cross(d),a.fromBufferAttribute(n,x),c.fromBufferAttribute(n,M),f.fromBufferAttribute(n,b),a.add(u),c.add(u),f.add(u),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(M,c.x,c.y,c.z),n.setXYZ(b,f.x,f.y,f.z)}else for(let m=0,g=e.count;m<g;m+=3)i.fromBufferAttribute(e,m+0),r.fromBufferAttribute(e,m+1),s.fromBufferAttribute(e,m+2),u.subVectors(s,r),d.subVectors(i,r),u.cross(d),n.setXYZ(m+0,u.x,u.y,u.z),n.setXYZ(m+1,u.x,u.y,u.z),n.setXYZ(m+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Vt.fromBufferAttribute(t,e),Vt.normalize(),t.setXYZ(e,Vt.x,Vt.y,Vt.z)}toNonIndexed(){function t(a,c){let f=a.array,u=a.itemSize,d=a.normalized,m=new f.constructor(c.length*u),g=0,x=0;for(let M=0,b=c.length;M<b;M++){a.isInterleavedBufferAttribute?g=c[M]*a.data.stride+a.offset:g=c[M]*u;for(let A=0;A<u;A++)m[x++]=f[g++]}return new zt(m,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new o,n=this.index.array,i=this.attributes;for(let a in i){let c=i[a],f=t(c,n);e.setAttribute(a,f)}let r=this.morphAttributes;for(let a in r){let c=[],f=r[a];for(let u=0,d=f.length;u<d;u++){let m=f[u],g=t(m,n);c.push(g)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let a=0,c=s.length;a<c;a++){let f=s[a];e.addGroup(f.start,f.count,f.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let f in c)c[f]!==void 0&&(t[f]=c[f]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let f=n[c];t.data.attributes[c]=f.toJSON(t.data)}let i={},r=!1;for(let c in this.morphAttributes){let f=this.morphAttributes[c],u=[];for(let d=0,m=f.length;d<m;d++){let g=f[d];u.push(g.toJSON(t.data))}u.length>0&&(i[c]=u,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let f in i){let u=i[f];this.setAttribute(f,u.clone(e))}let r=t.morphAttributes;for(let f in r){let u=[],d=r[f];for(let m=0,g=d.length;m<g;m++)u.push(d[m].clone(e));this.morphAttributes[f]=u}this.morphTargetsRelative=t.morphTargetsRelative;let s=t.groups;for(let f=0,u=s.length;f<u;f++){let d=s[f];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},_c=new dt,sn=new we,gr=new On,vc=new I,xr=new I,_r=new I,vr=new I,po=new I,yr=new I,yc=new I,Mr=new I,Ti=class extends qe{constructor(t=new ge,e=new Nr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,s=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){yr.set(0,0,0);for(let c=0,f=r.length;c<f;c++){let u=a[c],d=r[c];u!==0&&(po.fromBufferAttribute(d,t),s?yr.addScaledVector(po,u):yr.addScaledVector(po.sub(e),u))}e.add(yr)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),gr.copy(n.boundingSphere),gr.applyMatrix4(r),sn.copy(t.ray).recast(t.near),!(gr.containsPoint(sn.origin)===!1&&(sn.intersectSphere(gr,vc)===null||sn.origin.distanceToSquared(vc)>(t.far-t.near)**2))&&(_c.copy(r).invert(),sn.copy(t.ray).applyMatrix4(_c),!(n.boundingBox!==null&&sn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,sn)))}_computeIntersections(t,e,n){let i,r=this.geometry,s=this.material,a=r.index,c=r.attributes.position,f=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,m=r.groups,g=r.drawRange;if(a!==null)if(Array.isArray(s))for(let x=0,M=m.length;x<M;x++){let b=m[x],A=s[b.materialIndex],E=Math.max(b.start,g.start),p=Math.min(a.count,Math.min(b.start+b.count,g.start+g.count));for(let l=E,_=p;l<_;l+=3){let h=a.getX(l),R=a.getX(l+1),w=a.getX(l+2);i=Sr(this,A,t,n,f,u,d,h,R,w),i&&(i.faceIndex=Math.floor(l/3),i.face.materialIndex=b.materialIndex,e.push(i))}}else{let x=Math.max(0,g.start),M=Math.min(a.count,g.start+g.count);for(let b=x,A=M;b<A;b+=3){let E=a.getX(b),p=a.getX(b+1),l=a.getX(b+2);i=Sr(this,s,t,n,f,u,d,E,p,l),i&&(i.faceIndex=Math.floor(b/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(s))for(let x=0,M=m.length;x<M;x++){let b=m[x],A=s[b.materialIndex],E=Math.max(b.start,g.start),p=Math.min(c.count,Math.min(b.start+b.count,g.start+g.count));for(let l=E,_=p;l<_;l+=3){let h=l,R=l+1,w=l+2;i=Sr(this,A,t,n,f,u,d,h,R,w),i&&(i.faceIndex=Math.floor(l/3),i.face.materialIndex=b.materialIndex,e.push(i))}}else{let x=Math.max(0,g.start),M=Math.min(c.count,g.start+g.count);for(let b=x,A=M;b<A;b+=3){let E=b,p=b+1,l=b+2;i=Sr(this,s,t,n,f,u,d,E,p,l),i&&(i.faceIndex=Math.floor(b/3),e.push(i))}}}};function eu(o,t,e,n,i,r,s,a){let c;if(t.side===jr?c=n.intersectTriangle(s,r,i,!0,a):c=n.intersectTriangle(i,r,s,t.side===cn,a),c===null)return null;Mr.copy(a),Mr.applyMatrix4(o.matrixWorld);let f=e.ray.origin.distanceTo(Mr);return f<e.near||f>e.far?null:{distance:f,point:Mr.clone(),object:o}}function Sr(o,t,e,n,i,r,s,a,c,f){o.getVertexPosition(a,xr),o.getVertexPosition(c,_r),o.getVertexPosition(f,vr);let u=eu(o,t,e,n,xr,_r,vr,yc);if(u){let d=new I;Et.getBarycoord(yc,xr,_r,vr,d),i&&(u.uv=Et.getInterpolatedAttribute(i,a,c,f,d,new G)),r&&(u.uv1=Et.getInterpolatedAttribute(r,a,c,f,d,new G)),s&&(u.normal=Et.getInterpolatedAttribute(s,a,c,f,d,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let m={a,b:c,c:f,normal:new I,materialIndex:0};Et.getNormal(xr,_r,vr,m.normal),u.face=m,u.barycoord=d}return u}var Ei=class o extends ge{constructor(t=1,e=1,n=1,i=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:s};let a=this;i=Math.floor(i),r=Math.floor(r),s=Math.floor(s);let c=[],f=[],u=[],d=[],m=0,g=0;x("z","y","x",-1,-1,n,e,t,s,r,0),x("z","y","x",1,-1,n,e,-t,s,r,1),x("x","z","y",1,1,t,n,e,i,s,2),x("x","z","y",1,-1,t,n,-e,i,s,3),x("x","y","z",1,-1,t,e,n,i,r,4),x("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Xt(f,3)),this.setAttribute("normal",new Xt(u,3)),this.setAttribute("uv",new Xt(d,2));function x(M,b,A,E,p,l,_,h,R,w,y){let v=l/R,S=_/w,T=l/2,C=_/2,P=h/2,D=R+1,L=w+1,U=0,B=0,F=new I;for(let $=0;$<L;$++){let V=$*S-C;for(let W=0;W<D;W++){let H=W*v-T;F[M]=H*E,F[b]=V*p,F[A]=P,f.push(F.x,F.y,F.z),F[M]=0,F[b]=0,F[A]=h>0?1:-1,u.push(F.x,F.y,F.z),d.push(W/R),d.push(1-$/w),U+=1}}for(let $=0;$<w;$++)for(let V=0;V<R;V++){let W=m+V+D*$,H=m+V+D*($+1),X=m+(V+1)+D*($+1),Y=m+(V+1)+D*$;c.push(W,H,Y),c.push(H,X,Y),B+=6}a.addGroup(g,B,y),g+=B,m+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new o(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Uc(o){let t={};for(let e in o){t[e]={};for(let n in o[e]){let i=o[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Yt(o){let t={};for(let e=0;e<o.length;e++){let n=Uc(o[e]);for(let i in n)t[i]=n[i]}return t}var mo=new I,nu=new I,iu=new at,xe=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=mo.subVectors(n,e).cross(nu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(mo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||iu.getNormalMatrix(t),i=this.coplanarPoint(mo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}};var Ai=class o extends ge{constructor(t=1,e=1,n=1,i=32,r=1,s=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:c};let f=this;i=Math.floor(i),r=Math.floor(r);let u=[],d=[],m=[],g=[],x=0,M=[],b=n/2,A=0;E(),s===!1&&(t>0&&p(!0),e>0&&p(!1)),this.setIndex(u),this.setAttribute("position",new Xt(d,3)),this.setAttribute("normal",new Xt(m,3)),this.setAttribute("uv",new Xt(g,2));function E(){let l=new I,_=new I,h=0,R=(e-t)/n;for(let w=0;w<=r;w++){let y=[],v=w/r,S=v*(e-t)+t;for(let T=0;T<=i;T++){let C=T/i,P=C*c+a,D=Math.sin(P),L=Math.cos(P);_.x=S*D,_.y=-v*n+b,_.z=S*L,d.push(_.x,_.y,_.z),l.set(D,R,L).normalize(),m.push(l.x,l.y,l.z),g.push(C,1-v),y.push(x++)}M.push(y)}for(let w=0;w<i;w++)for(let y=0;y<r;y++){let v=M[y][w],S=M[y+1][w],T=M[y+1][w+1],C=M[y][w+1];(t>0||y!==0)&&(u.push(v,S,C),h+=3),(e>0||y!==r-1)&&(u.push(S,T,C),h+=3)}f.addGroup(A,h,0),A+=h}function p(l){let _=x,h=new G,R=new I,w=0,y=l===!0?t:e,v=l===!0?1:-1;for(let T=1;T<=i;T++)d.push(0,b*v,0),m.push(0,v,0),g.push(.5,.5),x++;let S=x;for(let T=0;T<=i;T++){let P=T/i*c+a,D=Math.cos(P),L=Math.sin(P);R.x=y*L,R.y=b*v,R.z=y*D,d.push(R.x,R.y,R.z),m.push(0,v,0),h.x=D*.5+.5,h.y=L*.5*v+.5,g.push(h.x,h.y),x++}for(let T=0;T<i;T++){let C=_+T,P=S+T;l===!0?u.push(P,P+1,C):u.push(P+1,P,C),w+=3}f.addGroup(A,w,l===!0?1:2),A+=w}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new o(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var ee=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let s=1;s<=t;s++)n=this.getPoint(s/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,r=n.length,s;e?s=e:s=t*n[r-1];let a=0,c=r-1,f;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),f=n[i]-s,f<0)a=i+1;else if(f>0)c=i-1;else{c=i;break}if(i=c,n[i]===s)return i/(r-1);let u=n[i],m=n[i+1]-u,g=(s-u)/m;return(i+g)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let s=this.getPoint(i),a=this.getPoint(r),c=e||(s.isVector2?new G:new I);return c.copy(a).sub(s).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new I,i=[],r=[],s=[],a=new I,c=new dt;for(let g=0;g<=t;g++){let x=g/t;i[g]=this.getTangentAt(x,new I)}r[0]=new I,s[0]=new I;let f=Number.MAX_VALUE,u=Math.abs(i[0].x),d=Math.abs(i[0].y),m=Math.abs(i[0].z);u<=f&&(f=u,n.set(1,0,0)),d<=f&&(f=d,n.set(0,1,0)),m<=f&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),s[0].crossVectors(i[0],r[0]);for(let g=1;g<=t;g++){if(r[g]=r[g-1].clone(),s[g]=s[g-1].clone(),a.crossVectors(i[g-1],i[g]),a.length()>Number.EPSILON){a.normalize();let x=Math.acos(ot(i[g-1].dot(i[g]),-1,1));r[g].applyMatrix4(c.makeRotationAxis(a,x))}s[g].crossVectors(i[g],r[g])}if(e===!0){let g=Math.acos(ot(r[0].dot(r[t]),-1,1));g/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(g=-g);for(let x=1;x<=t;x++)r[x].applyMatrix4(c.makeRotationAxis(i[x],g*x)),s[x].crossVectors(i[x],r[x])}return{tangents:i,normals:r,binormals:s}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Vn=class extends ee{constructor(t=0,e=0,n=1,i=1,r=0,s=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=s,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new G){let n=e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,s=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(s?r=0:r=i),this.aClockwise===!0&&!s&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),f=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),m=c-this.aX,g=f-this.aY;c=m*u-g*d+this.aX,f=m*d+g*u+this.aY}return n.set(c,f)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Or=class extends Vn{constructor(t,e,n,i,r,s){super(t,e,n,n,i,r,s),this.isArcCurve=!0,this.type="ArcCurve"}};function Jo(){let o=0,t=0,e=0,n=0;function i(r,s,a,c){o=r,t=a,e=-3*r+3*s-2*a-c,n=2*r-2*s+a+c}return{initCatmullRom:function(r,s,a,c,f){i(s,a,f*(a-r),f*(c-s))},initNonuniformCatmullRom:function(r,s,a,c,f,u,d){let m=(s-r)/f-(a-r)/(f+u)+(a-s)/u,g=(a-s)/u-(c-s)/(u+d)+(c-a)/d;m*=u,g*=u,i(s,a,m,g)},calc:function(r){let s=r*r,a=s*r;return o+t*r+e*s+n*a}}}var br=new I,go=new Jo,xo=new Jo,_o=new Jo,zr=class extends ee{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new I){let n=e,i=this.points,r=i.length,s=(r-(this.closed?0:1))*t,a=Math.floor(s),c=s-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let f,u;this.closed||a>0?f=i[(a-1)%r]:(br.subVectors(i[0],i[1]).add(i[0]),f=br);let d=i[a%r],m=i[(a+1)%r];if(this.closed||a+2<r?u=i[(a+2)%r]:(br.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=br),this.curveType==="centripetal"||this.curveType==="chordal"){let g=this.curveType==="chordal"?.5:.25,x=Math.pow(f.distanceToSquared(d),g),M=Math.pow(d.distanceToSquared(m),g),b=Math.pow(m.distanceToSquared(u),g);M<1e-4&&(M=1),x<1e-4&&(x=M),b<1e-4&&(b=M),go.initNonuniformCatmullRom(f.x,d.x,m.x,u.x,x,M,b),xo.initNonuniformCatmullRom(f.y,d.y,m.y,u.y,x,M,b),_o.initNonuniformCatmullRom(f.z,d.z,m.z,u.z,x,M,b)}else this.curveType==="catmullrom"&&(go.initCatmullRom(f.x,d.x,m.x,u.x,this.tension),xo.initCatmullRom(f.y,d.y,m.y,u.y,this.tension),_o.initCatmullRom(f.z,d.z,m.z,u.z,this.tension));return n.set(go.calc(c),xo.calc(c),_o.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new I().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Mc(o,t,e,n,i){let r=(n-t)*.5,s=(i-e)*.5,a=o*o,c=o*a;return(2*e-2*n+r+s)*c+(-3*e+3*n-2*r-s)*a+r*o+e}function ru(o,t){let e=1-o;return e*e*t}function su(o,t){return 2*(1-o)*o*t}function ou(o,t){return o*o*t}function Mi(o,t,e,n){return ru(o,t)+su(o,e)+ou(o,n)}function au(o,t){let e=1-o;return e*e*e*t}function cu(o,t){let e=1-o;return 3*e*e*o*t}function lu(o,t){return 3*(1-o)*o*o*t}function hu(o,t){return o*o*o*t}function Si(o,t,e,n,i){return au(o,t)+cu(o,e)+lu(o,n)+hu(o,i)}var Ci=class extends ee{constructor(t=new G,e=new G,n=new G,i=new G){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new G){let n=e,i=this.v0,r=this.v1,s=this.v2,a=this.v3;return n.set(Si(t,i.x,r.x,s.x,a.x),Si(t,i.y,r.y,s.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Vr=class extends ee{constructor(t=new I,e=new I,n=new I,i=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new I){let n=e,i=this.v0,r=this.v1,s=this.v2,a=this.v3;return n.set(Si(t,i.x,r.x,s.x,a.x),Si(t,i.y,r.y,s.y,a.y),Si(t,i.z,r.z,s.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ri=class extends ee{constructor(t=new G,e=new G){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new G){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new G){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},kr=class extends ee{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ii=class extends ee{constructor(t=new G,e=new G,n=new G){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new G){let n=e,i=this.v0,r=this.v1,s=this.v2;return n.set(Mi(t,i.x,r.x,s.x),Mi(t,i.y,r.y,s.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Hr=class extends ee{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){let n=e,i=this.v0,r=this.v1,s=this.v2;return n.set(Mi(t,i.x,r.x,s.x),Mi(t,i.y,r.y,s.y),Mi(t,i.z,r.z,s.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Pi=class extends ee{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new G){let n=e,i=this.points,r=(i.length-1)*t,s=Math.floor(r),a=r-s,c=i[s===0?s:s-1],f=i[s],u=i[s>i.length-2?i.length-1:s+1],d=i[s>i.length-3?i.length-1:s+2];return n.set(Mc(a,c.x,f.x,u.x,d.x),Mc(a,c.y,f.y,u.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new G().fromArray(i))}return this}},Fo=Object.freeze({__proto__:null,ArcCurve:Or,CatmullRomCurve3:zr,CubicBezierCurve:Ci,CubicBezierCurve3:Vr,EllipseCurve:Vn,LineCurve:Ri,LineCurve3:kr,QuadraticBezierCurve:Ii,QuadraticBezierCurve3:Hr,SplineCurve:Pi}),Gr=class extends ee{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Fo[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let s=i[r]-n,a=this.curves[r],c=a.getLength(),f=c===0?0:1-s/c;return a.getPointAt(f,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let s=r[i],a=s.isEllipseCurve?t*2:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?t*s.points.length:t,c=s.getPoints(a);for(let f=0;f<c.length;f++){let u=c[f];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new Fo[i.type]().fromJSON(i))}return this}},Di=class extends Gr{constructor(t){super(),this.type="Path",this.currentPoint=new G,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Ri(this.currentPoint.clone(),new G(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new Ii(this.currentPoint.clone(),new G(t,e),new G(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,s){let a=new Ci(this.currentPoint.clone(),new G(t,e),new G(n,i),new G(r,s));return this.curves.push(a),this.currentPoint.set(r,s),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Pi(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,s){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,i,r,s),this}absarc(t,e,n,i,r,s){return this.absellipse(t,e,n,n,i,r,s),this}ellipse(t,e,n,i,r,s,a,c){let f=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+f,e+u,n,i,r,s,a,c),this}absellipse(t,e,n,i,r,s,a,c){let f=new Vn(t,e,n,i,r,s,a,c);if(this.curves.length>0){let d=f.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(f);let u=f.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},kn=class extends Di{constructor(t){super(t),this.uuid=Gn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new Di().fromJSON(i))}return this}};function uu(o,t,e=2){let n=t&&t.length,i=n?t[0]*e:o.length,r=Nc(o,0,i,e,!0),s=[];if(!r||r.next===r.prev)return s;let a,c,f;if(n&&(r=gu(o,t,r,e)),o.length>80*e){a=1/0,c=1/0;let u=-1/0,d=-1/0;for(let m=e;m<i;m+=e){let g=o[m],x=o[m+1];g<a&&(a=g),x<c&&(c=x),g>u&&(u=g),x>d&&(d=x)}f=Math.max(u-a,d-c),f=f!==0?32767/f:0}return Li(r,s,e,a,c,f,0),s}function Nc(o,t,e,n,i){let r;if(i===Au(o,t,e,n)>0)for(let s=t;s<e;s+=n)r=Sc(s/n|0,o[s],o[s+1],r);else for(let s=e-n;s>=t;s-=n)r=Sc(s/n|0,o[s],o[s+1],r);return r&&Hn(r,r.next)&&(Ni(r),r=r.next),r}function hn(o,t){if(!o)return o;t||(t=o);let e=o,n;do if(n=!1,!e.steiner&&(Hn(e,e.next)||Pt(e.prev,e,e.next)===0)){if(Ni(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Li(o,t,e,n,i,r,s){if(!o)return;!s&&r&&Mu(o,n,i,r);let a=o;for(;o.prev!==o.next;){let c=o.prev,f=o.next;if(r?du(o,n,i,r):fu(o)){t.push(c.i,o.i,f.i),Ni(o),o=f.next,a=f.next;continue}if(o=f,o===a){s?s===1?(o=pu(hn(o),t),Li(o,t,e,n,i,r,2)):s===2&&mu(o,t,e,n,i,r):Li(hn(o),t,e,n,i,r,1);break}}}function fu(o){let t=o.prev,e=o,n=o.next;if(Pt(t,e,n)>=0)return!1;let i=t.x,r=e.x,s=n.x,a=t.y,c=e.y,f=n.y,u=Math.min(i,r,s),d=Math.min(a,c,f),m=Math.max(i,r,s),g=Math.max(a,c,f),x=n.next;for(;x!==t;){if(x.x>=u&&x.x<=m&&x.y>=d&&x.y<=g&&yi(i,a,r,c,s,f,x.x,x.y)&&Pt(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function du(o,t,e,n){let i=o.prev,r=o,s=o.next;if(Pt(i,r,s)>=0)return!1;let a=i.x,c=r.x,f=s.x,u=i.y,d=r.y,m=s.y,g=Math.min(a,c,f),x=Math.min(u,d,m),M=Math.max(a,c,f),b=Math.max(u,d,m),A=Bo(g,x,t,e,n),E=Bo(M,b,t,e,n),p=o.prevZ,l=o.nextZ;for(;p&&p.z>=A&&l&&l.z<=E;){if(p.x>=g&&p.x<=M&&p.y>=x&&p.y<=b&&p!==i&&p!==s&&yi(a,u,c,d,f,m,p.x,p.y)&&Pt(p.prev,p,p.next)>=0||(p=p.prevZ,l.x>=g&&l.x<=M&&l.y>=x&&l.y<=b&&l!==i&&l!==s&&yi(a,u,c,d,f,m,l.x,l.y)&&Pt(l.prev,l,l.next)>=0))return!1;l=l.nextZ}for(;p&&p.z>=A;){if(p.x>=g&&p.x<=M&&p.y>=x&&p.y<=b&&p!==i&&p!==s&&yi(a,u,c,d,f,m,p.x,p.y)&&Pt(p.prev,p,p.next)>=0)return!1;p=p.prevZ}for(;l&&l.z<=E;){if(l.x>=g&&l.x<=M&&l.y>=x&&l.y<=b&&l!==i&&l!==s&&yi(a,u,c,d,f,m,l.x,l.y)&&Pt(l.prev,l,l.next)>=0)return!1;l=l.nextZ}return!0}function pu(o,t){let e=o;do{let n=e.prev,i=e.next.next;!Hn(n,i)&&Bc(n,e,e.next,i)&&Ui(n,i)&&Ui(i,n)&&(t.push(n.i,e.i,i.i),Ni(e),Ni(e.next),e=o=i),e=e.next}while(e!==o);return hn(e)}function mu(o,t,e,n,i,r){let s=o;do{let a=s.next.next;for(;a!==s.prev;){if(s.i!==a.i&&wu(s,a)){let c=Oc(s,a);s=hn(s,s.next),c=hn(c,c.next),Li(s,t,e,n,i,r,0),Li(c,t,e,n,i,r,0);return}a=a.next}s=s.next}while(s!==o)}function gu(o,t,e,n){let i=[];for(let r=0,s=t.length;r<s;r++){let a=t[r]*n,c=r<s-1?t[r+1]*n:o.length,f=Nc(o,a,c,n,!1);f===f.next&&(f.steiner=!0),i.push(bu(f))}i.sort(xu);for(let r=0;r<i.length;r++)e=_u(i[r],e);return e}function xu(o,t){let e=o.x-t.x;if(e===0&&(e=o.y-t.y,e===0)){let n=(o.next.y-o.y)/(o.next.x-o.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function _u(o,t){let e=vu(o,t);if(!e)return t;let n=Oc(e,o);return hn(n,n.next),hn(e,e.next)}function vu(o,t){let e=t,n=o.x,i=o.y,r=-1/0,s;if(Hn(o,e))return e;do{if(Hn(o,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){let d=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,s=e.x<e.next.x?e:e.next,d===n))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,c=s.x,f=s.y,u=1/0;e=s;do{if(n>=e.x&&e.x>=c&&n!==e.x&&Fc(i<f?n:r,i,c,f,i<f?r:n,i,e.x,e.y)){let d=Math.abs(i-e.y)/(n-e.x);Ui(e,o)&&(d<u||d===u&&(e.x>s.x||e.x===s.x&&yu(s,e)))&&(s=e,u=d)}e=e.next}while(e!==a);return s}function yu(o,t){return Pt(o.prev,o,t.prev)<0&&Pt(t.next,o,o.next)<0}function Mu(o,t,e,n){let i=o;do i.z===0&&(i.z=Bo(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==o);i.prevZ.nextZ=null,i.prevZ=null,Su(i)}function Su(o){let t,e=1;do{let n=o,i;o=null;let r=null;for(t=0;n;){t++;let s=n,a=0;for(let f=0;f<e&&(a++,s=s.nextZ,!!s);f++);let c=e;for(;a>0||c>0&&s;)a!==0&&(c===0||!s||n.z<=s.z)?(i=n,n=n.nextZ,a--):(i=s,s=s.nextZ,c--),r?r.nextZ=i:o=i,i.prevZ=r,r=i;n=s}r.nextZ=null,e*=2}while(t>1);return o}function Bo(o,t,e,n,i){return o=(o-e)*i|0,t=(t-n)*i|0,o=(o|o<<8)&16711935,o=(o|o<<4)&252645135,o=(o|o<<2)&858993459,o=(o|o<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,o|t<<1}function bu(o){let t=o,e=o;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==o);return e}function Fc(o,t,e,n,i,r,s,a){return(i-s)*(t-a)>=(o-s)*(r-a)&&(o-s)*(n-a)>=(e-s)*(t-a)&&(e-s)*(r-a)>=(i-s)*(n-a)}function yi(o,t,e,n,i,r,s,a){return!(o===s&&t===a)&&Fc(o,t,e,n,i,r,s,a)}function wu(o,t){return o.next.i!==t.i&&o.prev.i!==t.i&&!Tu(o,t)&&(Ui(o,t)&&Ui(t,o)&&Eu(o,t)&&(Pt(o.prev,o,t.prev)||Pt(o,t.prev,t))||Hn(o,t)&&Pt(o.prev,o,o.next)>0&&Pt(t.prev,t,t.next)>0)}function Pt(o,t,e){return(t.y-o.y)*(e.x-t.x)-(t.x-o.x)*(e.y-t.y)}function Hn(o,t){return o.x===t.x&&o.y===t.y}function Bc(o,t,e,n){let i=Tr(Pt(o,t,e)),r=Tr(Pt(o,t,n)),s=Tr(Pt(e,n,o)),a=Tr(Pt(e,n,t));return!!(i!==r&&s!==a||i===0&&wr(o,e,t)||r===0&&wr(o,n,t)||s===0&&wr(e,o,n)||a===0&&wr(e,t,n))}function wr(o,t,e){return t.x<=Math.max(o.x,e.x)&&t.x>=Math.min(o.x,e.x)&&t.y<=Math.max(o.y,e.y)&&t.y>=Math.min(o.y,e.y)}function Tr(o){return o>0?1:o<0?-1:0}function Tu(o,t){let e=o;do{if(e.i!==o.i&&e.next.i!==o.i&&e.i!==t.i&&e.next.i!==t.i&&Bc(e,e.next,o,t))return!0;e=e.next}while(e!==o);return!1}function Ui(o,t){return Pt(o.prev,o,o.next)<0?Pt(o,t,o.next)>=0&&Pt(o,o.prev,t)>=0:Pt(o,t,o.prev)<0||Pt(o,o.next,t)<0}function Eu(o,t){let e=o,n=!1,i=(o.x+t.x)/2,r=(o.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==o);return n}function Oc(o,t){let e=Oo(o.i,o.x,o.y),n=Oo(t.i,t.x,t.y),i=o.next,r=t.prev;return o.next=t,t.prev=o,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Sc(o,t,e,n){let i=Oo(o,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Ni(o){o.next.prev=o.prev,o.prev.next=o.next,o.prevZ&&(o.prevZ.nextZ=o.nextZ),o.nextZ&&(o.nextZ.prevZ=o.prevZ)}function Oo(o,t,e){return{i:o,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Au(o,t,e,n){let i=0;for(let r=t,s=e-n;r<e;r+=n)i+=(o[s]-o[r])*(o[r+1]+o[s+1]),s=r;return i}var zo=class{static triangulate(t,e,n=2){return uu(t,e,n)}},an=class o{static area(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return o.area(t)<0}static triangulateShape(t,e){let n=[],i=[],r=[];bc(t),wc(n,t);let s=t.length;e.forEach(bc);for(let c=0;c<e.length;c++)i.push(s),s+=e[c].length,wc(n,e[c]);let a=zo.triangulate(n,i);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function bc(o){let t=o.length;t>2&&o[t-1].equals(o[0])&&o.pop()}function wc(o,t){for(let e=0;e<t.length;e++)o.push(t[e].x),o.push(t[e].y)}var Fi=class o extends ge{constructor(t=new kn([new G(.5,.5),new G(-.5,.5),new G(-.5,-.5),new G(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],r=[];for(let a=0,c=t.length;a<c;a++){let f=t[a];s(f)}this.setAttribute("position",new Xt(i,3)),this.setAttribute("uv",new Xt(r,2)),this.computeVertexNormals();function s(a){let c=[],f=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,m=e.bevelEnabled!==void 0?e.bevelEnabled:!0,g=e.bevelThickness!==void 0?e.bevelThickness:.2,x=e.bevelSize!==void 0?e.bevelSize:g-.1,M=e.bevelOffset!==void 0?e.bevelOffset:0,b=e.bevelSegments!==void 0?e.bevelSegments:3,A=e.extrudePath,E=e.UVGenerator!==void 0?e.UVGenerator:Cu,p,l=!1,_,h,R,w;A&&(p=A.getSpacedPoints(u),l=!0,m=!1,_=A.computeFrenetFrames(u,!1),h=new I,R=new I,w=new I),m||(b=0,g=0,x=0,M=0);let y=a.extractPoints(f),v=y.shape,S=y.holes;if(!an.isClockWise(v)){v=v.reverse();for(let N=0,O=S.length;N<O;N++){let z=S[N];an.isClockWise(z)&&(S[N]=z.reverse())}}function C(N){let z=10000000000000001e-36,k=N[0];for(let J=1;J<=N.length;J++){let K=J%N.length,Z=N[K],j=Z.x-k.x,tt=Z.y-k.y,rt=j*j+tt*tt,Ot=Math.max(Math.abs(Z.x),Math.abs(Z.y),Math.abs(k.x),Math.abs(k.y)),mt=z*Ot*Ot;if(rt<=mt){N.splice(K,1),J--;continue}k=Z}}C(v),S.forEach(C);let P=S.length,D=v;for(let N=0;N<P;N++){let O=S[N];v=v.concat(O)}function L(N,O,z){return O||console.error("THREE.ExtrudeGeometry: vec does not exist"),N.clone().addScaledVector(O,z)}let U=v.length;function B(N,O,z){let k,J,K,Z=N.x-O.x,j=N.y-O.y,tt=z.x-N.x,rt=z.y-N.y,Ot=Z*Z+j*j,mt=Z*rt-j*tt;if(Math.abs(mt)>Number.EPSILON){let ht=Math.sqrt(Ot),bt=Math.sqrt(tt*tt+rt*rt),wt=O.x-j/ht,Tt=O.y+Z/ht,Xs=z.x-rt/bt,qs=z.y+tt/bt,fi=((Xs-wt)*rt-(qs-Tt)*tt)/(Z*rt-j*tt);k=wt+Z*fi-N.x,J=Tt+j*fi-N.y;let tc=k*k+J*J;if(tc<=2)return new G(k,J);K=Math.sqrt(tc/2)}else{let ht=!1;Z>Number.EPSILON?tt>Number.EPSILON&&(ht=!0):Z<-Number.EPSILON?tt<-Number.EPSILON&&(ht=!0):Math.sign(j)===Math.sign(rt)&&(ht=!0),ht?(k=-j,J=Z,K=Math.sqrt(Ot)):(k=Z,J=j,K=Math.sqrt(Ot/2))}return new G(k/K,J/K)}let F=[];for(let N=0,O=D.length,z=O-1,k=N+1;N<O;N++,z++,k++)z===O&&(z=0),k===O&&(k=0),F[N]=B(D[N],D[z],D[k]);let $=[],V,W=F.concat();for(let N=0,O=P;N<O;N++){let z=S[N];V=[];for(let k=0,J=z.length,K=J-1,Z=k+1;k<J;k++,K++,Z++)K===J&&(K=0),Z===J&&(Z=0),V[k]=B(z[k],z[K],z[Z]);$.push(V),W=W.concat(V)}let H;if(b===0)H=an.triangulateShape(D,S);else{let N=[],O=[];for(let z=0;z<b;z++){let k=z/b,J=g*Math.cos(k*Math.PI/2),K=x*Math.sin(k*Math.PI/2)+M;for(let Z=0,j=D.length;Z<j;Z++){let tt=L(D[Z],F[Z],K);Q(tt.x,tt.y,-J),k===0&&N.push(tt)}for(let Z=0,j=P;Z<j;Z++){let tt=S[Z];V=$[Z];let rt=[];for(let Ot=0,mt=tt.length;Ot<mt;Ot++){let ht=L(tt[Ot],V[Ot],K);Q(ht.x,ht.y,-J),k===0&&rt.push(ht)}k===0&&O.push(rt)}}H=an.triangulateShape(N,O)}let X=H.length,Y=x+M;for(let N=0;N<U;N++){let O=m?L(v[N],W[N],Y):v[N];l?(R.copy(_.normals[0]).multiplyScalar(O.x),h.copy(_.binormals[0]).multiplyScalar(O.y),w.copy(p[0]).add(R).add(h),Q(w.x,w.y,w.z)):Q(O.x,O.y,0)}for(let N=1;N<=u;N++)for(let O=0;O<U;O++){let z=m?L(v[O],W[O],Y):v[O];l?(R.copy(_.normals[N]).multiplyScalar(z.x),h.copy(_.binormals[N]).multiplyScalar(z.y),w.copy(p[N]).add(R).add(h),Q(w.x,w.y,w.z)):Q(z.x,z.y,d/u*N)}for(let N=b-1;N>=0;N--){let O=N/b,z=g*Math.cos(O*Math.PI/2),k=x*Math.sin(O*Math.PI/2)+M;for(let J=0,K=D.length;J<K;J++){let Z=L(D[J],F[J],k);Q(Z.x,Z.y,d+z)}for(let J=0,K=S.length;J<K;J++){let Z=S[J];V=$[J];for(let j=0,tt=Z.length;j<tt;j++){let rt=L(Z[j],V[j],k);l?Q(rt.x,rt.y+p[u-1].y,p[u-1].x+z):Q(rt.x,rt.y,d+z)}}}ct(),et();function ct(){let N=i.length/3;if(m){let O=0,z=U*O;for(let k=0;k<X;k++){let J=H[k];it(J[2]+z,J[1]+z,J[0]+z)}O=u+b*2,z=U*O;for(let k=0;k<X;k++){let J=H[k];it(J[0]+z,J[1]+z,J[2]+z)}}else{for(let O=0;O<X;O++){let z=H[O];it(z[2],z[1],z[0])}for(let O=0;O<X;O++){let z=H[O];it(z[0]+U*u,z[1]+U*u,z[2]+U*u)}}n.addGroup(N,i.length/3-N,0)}function et(){let N=i.length/3,O=0;nt(D,O),O+=D.length;for(let z=0,k=S.length;z<k;z++){let J=S[z];nt(J,O),O+=J.length}n.addGroup(N,i.length/3-N,1)}function nt(N,O){let z=N.length;for(;--z>=0;){let k=z,J=z-1;J<0&&(J=N.length-1);for(let K=0,Z=u+b*2;K<Z;K++){let j=U*K,tt=U*(K+1),rt=O+k+j,Ot=O+J+j,mt=O+J+tt,ht=O+k+tt;lt(rt,Ot,mt,ht)}}}function Q(N,O,z){c.push(N),c.push(O),c.push(z)}function it(N,O,z){yt(N),yt(O),yt(z);let k=i.length/3,J=E.generateTopUV(n,i,k-3,k-2,k-1);st(J[0]),st(J[1]),st(J[2])}function lt(N,O,z,k){yt(N),yt(O),yt(k),yt(O),yt(z),yt(k);let J=i.length/3,K=E.generateSideWallUV(n,i,J-6,J-3,J-2,J-1);st(K[0]),st(K[1]),st(K[3]),st(K[1]),st(K[2]),st(K[3])}function yt(N){i.push(c[N*3+0]),i.push(c[N*3+1]),i.push(c[N*3+2])}function st(N){r.push(N.x),r.push(N.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Ru(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,s=t.shapes.length;r<s;r++){let a=e[t.shapes[r]];n.push(a)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Fo[i.type]().fromJSON(i)),new o(n,t.options)}},Cu={generateTopUV:function(o,t,e,n,i){let r=t[e*3],s=t[e*3+1],a=t[n*3],c=t[n*3+1],f=t[i*3],u=t[i*3+1];return[new G(r,s),new G(a,c),new G(f,u)]},generateSideWallUV:function(o,t,e,n,i,r){let s=t[e*3],a=t[e*3+1],c=t[e*3+2],f=t[n*3],u=t[n*3+1],d=t[n*3+2],m=t[i*3],g=t[i*3+1],x=t[i*3+2],M=t[r*3],b=t[r*3+1],A=t[r*3+2];return Math.abs(a-u)<Math.abs(s-f)?[new G(s,1-c),new G(f,1-d),new G(m,1-x),new G(M,1-A)]:[new G(a,1-c),new G(u,1-d),new G(g,1-x),new G(b,1-A)]}};function Ru(o,t,e){if(e.shapes=[],Array.isArray(o))for(let n=0,i=o.length;n<i;n++){let r=o[n];e.shapes.push(r.uuid)}else e.shapes.push(o.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}function Er(o,t){return!o||o.constructor===t?o:typeof t.BYTES_PER_ELEMENT=="number"?new t(o):Array.prototype.slice.call(o)}function Iu(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}var un=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let s;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}s=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=e[--n-1],t>=r)break t}s=n,n=0;break e}break n}for(;n<s;){let a=n+s>>>1;t<e[a]?s=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let s=0;s!==i;++s)e[s]=n[r+s];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Wr=class extends un{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Eo,endingEnd:Eo}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,s=t+1,a=i[r],c=i[s];if(a===void 0)switch(this.getSettings_().endingStart){case Ao:r=t,a=2*e-n;break;case Co:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Ao:s=t,c=2*n-e;break;case Co:s=1,c=n+i[1]-i[0];break;default:s=t-1,c=e}let f=(n-e)*.5,u=this.valueSize;this._weightPrev=f/(e-a),this._weightNext=f/(c-n),this._offsetPrev=r*u,this._offsetNext=s*u}interpolate_(t,e,n,i){let r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,c=t*a,f=c-a,u=this._offsetPrev,d=this._offsetNext,m=this._weightPrev,g=this._weightNext,x=(n-e)/(i-e),M=x*x,b=M*x,A=-m*b+2*m*M-m*x,E=(1+m)*b+(-1.5-2*m)*M+(-.5+m)*x+1,p=(-1-g)*b+(1.5+g)*M+.5*x,l=g*b-g*M;for(let _=0;_!==a;++_)r[_]=A*s[u+_]+E*s[f+_]+p*s[c+_]+l*s[d+_];return r}},Xr=class extends un{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,c=t*a,f=c-a,u=(n-e)/(i-e),d=1-u;for(let m=0;m!==a;++m)r[m]=s[f+m]*d+s[c+m]*u;return r}},qr=class extends un{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},ne=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Er(e,this.TimeBufferType),this.values=Er(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Er(t.times,Array),values:Er(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new qr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Xr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Wr(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case wi:e=this.InterpolantFactoryMethodDiscrete;break;case Ir:e=this.InterpolantFactoryMethodLinear;break;case Cr:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return wi;case this.InterpolantFactoryMethodLinear:return Ir;case this.InterpolantFactoryMethodSmooth:return Cr}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,s=i-1;for(;r!==i&&n[r]<t;)++r;for(;s!==-1&&n[s]>e;)--s;if(++s,r!==0||s!==i){r>=s&&(s=Math.max(s,1),r=s-1);let a=this.getValueSize();this.times=n.slice(r,s),this.values=this.values.slice(r*a,s*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let s=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(s!==null&&s>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,s),t=!1;break}s=c}if(i!==void 0&&Iu(i))for(let a=0,c=i.length;a!==c;++a){let f=i[a];if(isNaN(f)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,f),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Cr,r=t.length-1,s=1;for(let a=1;a<r;++a){let c=!1,f=t[a],u=t[a+1];if(f!==u&&(a!==1||f!==t[0]))if(i)c=!0;else{let d=a*n,m=d-n,g=d+n;for(let x=0;x!==n;++x){let M=e[d+x];if(M!==e[m+x]||M!==e[g+x]){c=!0;break}}}if(c){if(a!==s){t[s]=t[a];let d=a*n,m=s*n;for(let g=0;g!==n;++g)e[m+g]=e[d+g]}++s}}if(r>0){t[s]=t[r];for(let a=r*n,c=s*n,f=0;f!==n;++f)e[c+f]=e[a+f];++s}return s!==t.length?(this.times=t.slice(0,s),this.values=e.slice(0,s*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};ne.prototype.ValueTypeName="";ne.prototype.TimeBufferType=Float32Array;ne.prototype.ValueBufferType=Float32Array;ne.prototype.DefaultInterpolation=Ir;var Ye=class extends ne{constructor(t,e,n){super(t,e,n)}};Ye.prototype.ValueTypeName="bool";Ye.prototype.ValueBufferType=Array;Ye.prototype.DefaultInterpolation=wi;Ye.prototype.InterpolantFactoryMethodLinear=void 0;Ye.prototype.InterpolantFactoryMethodSmooth=void 0;var Yr=class extends ne{constructor(t,e,n,i){super(t,e,n,i)}};Yr.prototype.ValueTypeName="color";var Zr=class extends ne{constructor(t,e,n,i){super(t,e,n,i)}};Zr.prototype.ValueTypeName="number";var $r=class extends un{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,c=(n-e)/(i-e),f=t*a;for(let u=f+a;f!==u;f+=4)Ue.slerpFlat(r,0,s,f-a,s,f,c);return r}},Bi=class extends ne{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new $r(this.times,this.values,this.getValueSize(),t)}};Bi.prototype.ValueTypeName="quaternion";Bi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ze=class extends ne{constructor(t,e,n){super(t,e,n)}};Ze.prototype.ValueTypeName="string";Ze.prototype.ValueBufferType=Array;Ze.prototype.DefaultInterpolation=wi;Ze.prototype.InterpolantFactoryMethodLinear=void 0;Ze.prototype.InterpolantFactoryMethodSmooth=void 0;var Jr=class extends ne{constructor(t,e,n,i){super(t,e,n,i)}};Jr.prototype.ValueTypeName="vector";var Kr=class{constructor(t,e,n){let i=this,r=!1,s=0,a=0,c,f=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,s,a),r=!0},this.itemEnd=function(u){s++,i.onProgress!==void 0&&i.onProgress(u,s,a),s===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return f.push(u,d),this},this.removeHandler=function(u){let d=f.indexOf(u);return d!==-1&&f.splice(d,2),this},this.getHandler=function(u){for(let d=0,m=f.length;d<m;d+=2){let g=f[d],x=f[d+1];if(g.global&&(g.lastIndex=0),g.test(u))return x}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},zc=new Kr,Qr=class{constructor(t){this.manager=t!==void 0?t:zc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Qr.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ko="\\[\\]\\.:\\/",Pu=new RegExp("["+Ko+"]","g"),Qo="[^"+Ko+"]",Du="[^"+Ko.replace("\\.","")+"]",Lu=/((?:WC+[\/:])*)/.source.replace("WC",Qo),Uu=/(WCOD+)?/.source.replace("WCOD",Du),Nu=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Qo),Fu=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Qo),Bu=new RegExp("^"+Lu+Uu+Nu+Fu+"$"),Ou=["material","materials","bones","map"],Vo=class{constructor(t,e,n){let i=n||Rt.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Rt=class o{constructor(t,e,n){this.path=e,this.parsedPath=n||o.parseTrackName(e),this.node=o.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new o.Composite(t,e,n):new o(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Pu,"")}static parseTrackName(t){let e=Bu.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Ou.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let s=0;s<r.length;s++){let a=r[s];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=o.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let f=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===f){f=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(f!==void 0){if(t[f]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[f]}}let s=t[i];if(s===void 0){let f=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+f+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else s.fromArray!==void 0&&s.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(c=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Rt.Composite=Vo;Rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Rt.prototype.GetterByBindingType=[Rt.prototype._getValue_direct,Rt.prototype._getValue_array,Rt.prototype._getValue_arrayElement,Rt.prototype._getValue_toArray];Rt.prototype.SetterByBindingTypeAndVersioning=[[Rt.prototype._setValue_direct,Rt.prototype._setValue_direct_setNeedsUpdate,Rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_array,Rt.prototype._setValue_array_setNeedsUpdate,Rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_arrayElement,Rt.prototype._setValue_arrayElement_setNeedsUpdate,Rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_fromArray,Rt.prototype._setValue_fromArray_setNeedsUpdate,Rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Gm=new Float32Array(1);var Tc=new I,Ar=new I,Un=new I,Nn=new I,vo=new I,zu=new I,Vu=new I,Mt=class{constructor(t=new I,e=new I){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Tc.subVectors(t,this.start),Ar.subVectors(this.end,this.start);let n=Ar.dot(Ar),r=Ar.dot(Tc)/n;return e&&(r=ot(r,0,1)),r}closestPointToPoint(t,e,n){let i=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(i).add(this.start)}distanceSqToLine3(t,e=zu,n=Vu){let i=10000000000000001e-32,r,s,a=this.start,c=t.start,f=this.end,u=t.end;Un.subVectors(f,a),Nn.subVectors(u,c),vo.subVectors(a,c);let d=Un.dot(Un),m=Nn.dot(Nn),g=Nn.dot(vo);if(d<=i&&m<=i)return e.copy(a),n.copy(c),e.sub(n),e.dot(e);if(d<=i)r=0,s=g/m,s=ot(s,0,1);else{let x=Un.dot(vo);if(m<=i)s=0,r=ot(-x/d,0,1);else{let M=Un.dot(Nn),b=d*m-M*M;b!==0?r=ot((M*g-x*m)/b,0,1):r=0,s=(M*r+g)/m,s<0?(s=0,r=ot(-x/d,0,1)):s>1&&(s=1,r=ot((M-x)/d,0,1))}}return e.copy(a).add(Un.multiplyScalar(r)),n.copy(c).add(Nn.multiplyScalar(s)),e.sub(n),e.dot(e)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");var ku=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hu=`#ifdef USE_ALPHAHASH
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
#endif`,Gu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yu=`#ifdef USE_AOMAP
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
#endif`,Zu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$u=`#ifdef USE_BATCHING
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
#endif`,Ju=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ku=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ju=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,tf=`#ifdef USE_IRIDESCENCE
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
#endif`,ef=`#ifdef USE_BUMPMAP
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
#endif`,nf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,rf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,of=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,af=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,hf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,uf=`#define PI 3.141592653589793
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
} // validated`,ff=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,df=`vec3 transformedNormal = objectNormal;
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
#endif`,pf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_f="gl_FragColor = linearToOutputTexel( gl_FragColor );",vf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yf=`#ifdef USE_ENVMAP
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
#endif`,Mf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Sf=`#ifdef USE_ENVMAP
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
#endif`,bf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wf=`#ifdef USE_ENVMAP
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
#endif`,Tf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ef=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Af=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rf=`#ifdef USE_GRADIENTMAP
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
}`,If=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Pf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Df=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Lf=`uniform bool receiveShadow;
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
#endif`,Uf=`#ifdef USE_ENVMAP
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
#endif`,Nf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ff=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Of=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zf=`PhysicalMaterial material;
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
#endif`,Vf=`struct PhysicalMaterial {
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
}`,kf=`
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
#endif`,Hf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Gf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$f=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Kf=`#if defined( USE_POINTS_UV )
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
#endif`,Qf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,td=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ed=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,id=`#ifdef USE_MORPHTARGETS
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
#endif`,rd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,od=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ad=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ld=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hd=`#ifdef USE_NORMALMAP
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
#endif`,ud=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,md=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,xd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_d=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Md=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Td=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ed=`float getShadowMask() {
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
}`,Ad=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cd=`#ifdef USE_SKINNING
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
#endif`,Rd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Id=`#ifdef USE_SKINNING
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
#endif`,Pd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ld=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ud=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Nd=`#ifdef USE_TRANSMISSION
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
#endif`,Fd=`#ifdef USE_TRANSMISSION
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
#endif`,Bd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Od=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,kd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hd=`uniform sampler2D t2D;
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
}`,Gd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Xd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yd=`#include <common>
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
}`,Zd=`#if DEPTH_PACKING == 3200
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
}`,$d=`#define DISTANCE
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
}`,Jd=`#define DISTANCE
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
}`,Kd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jd=`uniform float scale;
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
}`,tp=`uniform vec3 diffuse;
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
}`,ep=`#include <common>
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
}`,np=`uniform vec3 diffuse;
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
}`,ip=`#define LAMBERT
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
}`,rp=`#define LAMBERT
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
}`,sp=`#define MATCAP
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
}`,op=`#define MATCAP
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
}`,ap=`#define NORMAL
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
}`,cp=`#define NORMAL
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
}`,lp=`#define PHONG
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
}`,hp=`#define PHONG
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
}`,up=`#define STANDARD
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
}`,fp=`#define STANDARD
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
}`,dp=`#define TOON
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
}`,pp=`#define TOON
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
}`,mp=`uniform float size;
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
}`,gp=`uniform vec3 diffuse;
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
}`,xp=`#include <common>
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
}`,_p=`uniform vec3 color;
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
}`,vp=`uniform float rotation;
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
}`,yp=`uniform vec3 diffuse;
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
}`,ft={alphahash_fragment:ku,alphahash_pars_fragment:Hu,alphamap_fragment:Gu,alphamap_pars_fragment:Wu,alphatest_fragment:Xu,alphatest_pars_fragment:qu,aomap_fragment:Yu,aomap_pars_fragment:Zu,batching_pars_vertex:$u,batching_vertex:Ju,begin_vertex:Ku,beginnormal_vertex:Qu,bsdfs:ju,iridescence_fragment:tf,bumpmap_pars_fragment:ef,clipping_planes_fragment:nf,clipping_planes_pars_fragment:rf,clipping_planes_pars_vertex:sf,clipping_planes_vertex:of,color_fragment:af,color_pars_fragment:cf,color_pars_vertex:lf,color_vertex:hf,common:uf,cube_uv_reflection_fragment:ff,defaultnormal_vertex:df,displacementmap_pars_vertex:pf,displacementmap_vertex:mf,emissivemap_fragment:gf,emissivemap_pars_fragment:xf,colorspace_fragment:_f,colorspace_pars_fragment:vf,envmap_fragment:yf,envmap_common_pars_fragment:Mf,envmap_pars_fragment:Sf,envmap_pars_vertex:bf,envmap_physical_pars_fragment:Uf,envmap_vertex:wf,fog_vertex:Tf,fog_pars_vertex:Ef,fog_fragment:Af,fog_pars_fragment:Cf,gradientmap_pars_fragment:Rf,lightmap_pars_fragment:If,lights_lambert_fragment:Pf,lights_lambert_pars_fragment:Df,lights_pars_begin:Lf,lights_toon_fragment:Nf,lights_toon_pars_fragment:Ff,lights_phong_fragment:Bf,lights_phong_pars_fragment:Of,lights_physical_fragment:zf,lights_physical_pars_fragment:Vf,lights_fragment_begin:kf,lights_fragment_maps:Hf,lights_fragment_end:Gf,logdepthbuf_fragment:Wf,logdepthbuf_pars_fragment:Xf,logdepthbuf_pars_vertex:qf,logdepthbuf_vertex:Yf,map_fragment:Zf,map_pars_fragment:$f,map_particle_fragment:Jf,map_particle_pars_fragment:Kf,metalnessmap_fragment:Qf,metalnessmap_pars_fragment:jf,morphinstance_vertex:td,morphcolor_vertex:ed,morphnormal_vertex:nd,morphtarget_pars_vertex:id,morphtarget_vertex:rd,normal_fragment_begin:sd,normal_fragment_maps:od,normal_pars_fragment:ad,normal_pars_vertex:cd,normal_vertex:ld,normalmap_pars_fragment:hd,clearcoat_normal_fragment_begin:ud,clearcoat_normal_fragment_maps:fd,clearcoat_pars_fragment:dd,iridescence_pars_fragment:pd,opaque_fragment:md,packing:gd,premultiplied_alpha_fragment:xd,project_vertex:_d,dithering_fragment:vd,dithering_pars_fragment:yd,roughnessmap_fragment:Md,roughnessmap_pars_fragment:Sd,shadowmap_pars_fragment:bd,shadowmap_pars_vertex:wd,shadowmap_vertex:Td,shadowmask_pars_fragment:Ed,skinbase_vertex:Ad,skinning_pars_vertex:Cd,skinning_vertex:Rd,skinnormal_vertex:Id,specularmap_fragment:Pd,specularmap_pars_fragment:Dd,tonemapping_fragment:Ld,tonemapping_pars_fragment:Ud,transmission_fragment:Nd,transmission_pars_fragment:Fd,uv_pars_fragment:Bd,uv_pars_vertex:Od,uv_vertex:zd,worldpos_vertex:Vd,background_vert:kd,background_frag:Hd,backgroundCube_vert:Gd,backgroundCube_frag:Wd,cube_vert:Xd,cube_frag:qd,depth_vert:Yd,depth_frag:Zd,distanceRGBA_vert:$d,distanceRGBA_frag:Jd,equirect_vert:Kd,equirect_frag:Qd,linedashed_vert:jd,linedashed_frag:tp,meshbasic_vert:ep,meshbasic_frag:np,meshlambert_vert:ip,meshlambert_frag:rp,meshmatcap_vert:sp,meshmatcap_frag:op,meshnormal_vert:ap,meshnormal_frag:cp,meshphong_vert:lp,meshphong_frag:hp,meshphysical_vert:up,meshphysical_frag:fp,meshtoon_vert:dp,meshtoon_frag:pp,points_vert:mp,points_frag:gp,shadow_vert:xp,shadow_frag:_p,sprite_vert:vp,sprite_frag:yp},q={common:{diffuse:{value:new Dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},envMapRotation:{value:new at},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new G(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new Dt(16777215)},opacity:{value:1},center:{value:new G(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},Vc={basic:{uniforms:Yt([q.common,q.specularmap,q.envmap,q.aomap,q.lightmap,q.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:Yt([q.common,q.specularmap,q.envmap,q.aomap,q.lightmap,q.emissivemap,q.bumpmap,q.normalmap,q.displacementmap,q.fog,q.lights,{emissive:{value:new Dt(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:Yt([q.common,q.specularmap,q.envmap,q.aomap,q.lightmap,q.emissivemap,q.bumpmap,q.normalmap,q.displacementmap,q.fog,q.lights,{emissive:{value:new Dt(0)},specular:{value:new Dt(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:Yt([q.common,q.envmap,q.aomap,q.lightmap,q.emissivemap,q.bumpmap,q.normalmap,q.displacementmap,q.roughnessmap,q.metalnessmap,q.fog,q.lights,{emissive:{value:new Dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:Yt([q.common,q.aomap,q.lightmap,q.emissivemap,q.bumpmap,q.normalmap,q.displacementmap,q.gradientmap,q.fog,q.lights,{emissive:{value:new Dt(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:Yt([q.common,q.bumpmap,q.normalmap,q.displacementmap,q.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:Yt([q.points,q.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:Yt([q.common,q.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:Yt([q.common,q.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:Yt([q.common,q.bumpmap,q.normalmap,q.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:Yt([q.sprite,q.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new at}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distanceRGBA:{uniforms:Yt([q.common,q.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distanceRGBA_vert,fragmentShader:ft.distanceRGBA_frag},shadow:{uniforms:Yt([q.lights,q.fog,{color:{value:new Dt(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};Vc.physical={uniforms:Yt([Vc.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new G(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new Dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new G},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new Dt(0)},specularColor:{value:new Dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new G},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};var fn=(1+Math.sqrt(5))/2,Wn=1/fn,Fy=[new I(-fn,Wn,0),new I(fn,Wn,0),new I(-Wn,0,fn),new I(Wn,0,fn),new I(0,fn,-Wn),new I(0,fn,Wn),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];var By=new Float32Array(16),Oy=new Float32Array(9),zy=new Float32Array(4);var Vy={[ko]:Ho,[Go]:qo,[Wo]:Yo,[bi]:Xo,[Ho]:ko,[qo]:Go,[Yo]:Wo,[Xo]:bi};var Xn=Math.pow(2,-24),zi=Symbol("SKIP_GENERATION"),ts={strategy:0,maxDepth:40,targetLeafSize:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null,[zi]:!1};function At(o,t,e){return e.min.x=t[o],e.min.y=t[o+1],e.min.z=t[o+2],e.max.x=t[o+3],e.max.y=t[o+4],e.max.z=t[o+5],e}function Vi(o){let t=-1,e=-1/0;for(let n=0;n<3;n++){let i=o[n+3]-o[n];i>e&&(e=i,t=n)}return t}function ta(o,t,e){for(let n=0;n<3;n++){let i=t[o+2*n],r=t[o+2*n+1],s=i-r,a=i+r;s<e[n]&&(e[n]=s),a>e[n+3]&&(e[n+3]=a)}}function es(o){let t=o[3]-o[0],e=o[4]-o[1],n=o[5]-o[2];return 2*(t*e+e*n+n*t)}function pt(o,t){return t[o+15]===65535}function vt(o,t){return t[o+6]}function St(o,t){return t[o+14]}function gt(o){return o+8}function xt(o,t){let e=t[o+6];return o+e*8}function qn(o,t){return t[o+7]}function ns(o,t,e,n,i){let r=1/0,s=1/0,a=1/0,c=-1/0,f=-1/0,u=-1/0,d=1/0,m=1/0,g=1/0,x=-1/0,M=-1/0,b=-1/0,A=o.offset||0;for(let E=(t-A)*6,p=(t+e-A)*6;E<p;E+=6){let l=o[E+0],_=o[E+1],h=l-_,R=l+_;h<r&&(r=h),R>c&&(c=R),l<d&&(d=l),l>x&&(x=l);let w=o[E+2],y=o[E+3],v=w-y,S=w+y;v<s&&(s=v),S>f&&(f=S),w<m&&(m=w),w>M&&(M=w);let T=o[E+4],C=o[E+5],P=T-C,D=T+C;P<a&&(a=P),D>u&&(u=D),T<g&&(g=T),T>b&&(b=T)}n[0]=r,n[1]=s,n[2]=a,n[3]=c,n[4]=f,n[5]=u,i[0]=d,i[1]=m,i[2]=g,i[3]=x,i[4]=M,i[5]=b}var Ee=8,na=8,ea=new Int32Array(Ee),Te=new Float32Array(Ee*6),Yn=new Float32Array(Ee*6),_e=new Float32Array(6),is=new Float32Array(6),$e=new Int32Array(na),Gc=new Float32Array(na*6);function bp(o,t,e,n){for(let i=0;i<3;i++){let r=t[o+2*i],s=t[o+2*i+1],a=r-s,c=r+s;a<e[n+i]&&(e[n+i]=a),c>e[n+i+3]&&(e[n+i+3]=c)}}function Wc(o,t){let e=o[t+3]-o[t],n=o[t+4]-o[t+1],i=o[t+5]-o[t+2];return 2*(e*n+n*i+i*e)}function Xc(o,t,e,n,i,r){let s=-1,a=0;if(r===0)s=Vi(t),s!==-1&&(a=(t[s]+t[s+3])/2);else if(r===1)s=Vi(o),s!==-1&&(a=wp(e,n,i,s));else if(r===2){let c=es(o),f=1.25*i,u=e.offset||0,d=(n-u)*6,m=(n+i-u)*6;for(let g=0;g<3;g++){let x=t[g],A=(t[g+3]-x)/Ee;if(i<na){for(let E=0;E<i;E++){let p=d+E*6,l=e[p+2*g],_=E;for(;_>0&&e[$e[_-1]+2*g]>l;)$e[_]=$e[_-1],_--;$e[_]=p}for(let E=0;E<3;E++)_e[E]=1/0,_e[E+3]=-1/0,is[E]=1/0,is[E+3]=-1/0;for(let E=i-1;E>=0;E--)ta($e[E],e,is),Gc.set(is,E*6);for(let E=0;E<i-1;E++){ta($e[E],e,_e);let p=e[$e[E+1]+2*g];if(e[$e[E]+2*g]===p)continue;let l=E+1,_=i-l,h=es(_e)/c,R=Wc(Gc,l*6)/c,w=1+1.25*(h*l+R*_);w<f&&(s=g,f=w,a=p)}}else{for(let l=0;l<Ee;l++){ea[l]=0;for(let _=0;_<3;_++)Te[l*6+_]=1/0,Te[l*6+_+3]=-1/0}for(let l=d;l<m;l+=6){let R=~~((e[l+2*g]-x)/A);R>=Ee&&(R=Ee-1),ea[R]++,bp(l,e,Te,R*6)}let E=(Ee-1)*6;for(let l=0;l<6;l++)Yn[E+l]=Te[E+l];for(let l=Ee-2;l>=0;l--){let _=l*6,h=_+6;for(let R=0;R<3;R++)Yn[_+R]=Math.min(Te[_+R],Yn[h+R]),Yn[_+R+3]=Math.max(Te[_+R+3],Yn[h+R+3])}let p=0;for(let l=0;l<Ee-1;l++){let _=l*6,h=ea[l];if(h!==0)for(let S=0;S<3;S++)p===0?(_e[S]=Te[_+S],_e[S+3]=Te[_+S+3]):(_e[S]=Math.min(_e[S],Te[_+S]),_e[S+3]=Math.max(_e[S+3],Te[_+S+3]));p+=h;let R=0,w=0;p!==0&&(R=es(_e)/c);let y=i-p;y!==0&&(w=Wc(Yn,_+6)/c);let v=1+1.25*(R*p+w*y);v<f&&(s=g,f=v,a=x+A+l*A)}}}}else console.warn(`BVH: Invalid build strategy value ${r} used.`);return{axis:s,pos:a}}function wp(o,t,e,n){let i=0,r=o.offset;for(let s=t,a=t+e;s<a;s++)i+=o[(s-r)*6+n*2];return i/e}function qc(o,t,e,n,i,r){let s=n,a=n+i-1,c=r.pos,f=r.axis*2,u=e.offset||0;for(;;){for(;s<=a&&e[(s-u)*6+f]<c;)s++;for(;s<=a&&e[(a-u)*6+f]>=c;)a--;if(s<a){for(let d=0;d<t;d++){let m=o[s*t+d];o[s*t+d]=o[a*t+d],o[a*t+d]=m}for(let d=0;d<6;d++){let m=s-u,g=a-u,x=e[m*6+d];e[m*6+d]=e[g*6+d],e[g*6+d]=x}s++,a--}else return s}}var Tp=Math.pow(2,32),Zn=new Float32Array(6),rs=new Float32Array(6);function Ep(o,t,e,n,i,r){let{maxDepth:s,verbose:a,targetLeafSize:c,_strictLeafSize:f=1/0,strategy:u,onProgress:d,useSharedArrayBuffer:m=!1}=i,g=o.primitiveBuffer,x=o.primitiveBufferStride,M=m?SharedArrayBuffer:ArrayBuffer,b=new M(32*Math.max(1,2*Math.ceil(n)-1)),A=new Float32Array(b),E=new Uint32Array(b),p=new Uint16Array(b),l=0,_=!1;return ns(t,e,n,Zn,rs),w(e,n,0),b.slice(0,l*32);function h(y){d&&d((y-r.offset)/r.count)}function R(y,v,S){let T=y*2;E[y+6]=v,p[T+14]=S,p[T+15]=65535,h(v+S)}function w(y,v,S){let T=l++,C=T*8;A.set(Zn,C),!_&&S>=s&&(_=!0,a&&console.warn(`BVH: Max depth of ${s} reached when generating BVH. Consider increasing maxDepth.`));let P=v>f;if(v<=c&&!P||S>=s){R(C,y,v);return}let D=Xc(Zn,rs,t,y,v,u),L=D.axis===-1?-1:qc(g,x,t,y,v,D);if(D.axis===-1||L===y||L===y+v){if(!P){R(C,y,v);return}D.axis=Math.max(0,Vi(Zn)),L=y+Math.max(1,Math.floor(v/2))}E[C+7]=D.axis;let U=L-y;ns(t,y,U,Zn,rs),w(y,U,S+1);let B=l-T;if(B>Tp)throw new Error("MeshBVH: Cannot store relative child node offset greater than 32 bits.");E[C+6]=B;let F=v-U;ns(t,L,F,Zn,rs),w(L,F,S+1)}}function Yc(o,t){let e=o.getRootRanges(t.range),n=e[0],i=e[e.length-1],r={offset:n.offset,count:i.offset+i.count-n.offset},s=new Float32Array(6*r.count);s.offset=r.offset,o.computePrimitiveBounds(r.offset,r.count,s),o._roots=e.map(a=>Ep(o,s,a.offset,a.count,t,r))}var Je=class{constructor(t){this._getNewPrimitive=t,this._primitives=[]}getPrimitive(){let t=this._primitives;return t.length===0?this._getNewPrimitive():t.pop()}releasePrimitive(t){this._primitives.push(t)}};var ia=class{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;let t=[],e=null;this.setBuffer=n=>{e&&t.push(e),e=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{e=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,t.length!==0&&this.setBuffer(t.pop())}}},ut=new ia;var Ke,Jn,$n=[],ss=new Je(()=>new It);function Zc(o,t,e,n,i,r){Ke=ss.getPrimitive(),Jn=ss.getPrimitive(),$n.push(Ke,Jn),ut.setBuffer(o._roots[t]);let s=ra(0,o.geometry,e,n,i,r);ut.clearBuffer(),ss.releasePrimitive(Ke),ss.releasePrimitive(Jn),$n.pop(),$n.pop();let a=$n.length;return a>0&&(Jn=$n[a-1],Ke=$n[a-2]),s}function ra(o,t,e,n,i=null,r=0,s=0){let{float32Array:a,uint16Array:c,uint32Array:f}=ut,u=o*2;if(pt(u,c)){let m=vt(o,f),g=St(u,c);return At(o,a,Ke),n(m,g,!1,s,r+o/8,Ke)}else{let v=function(T){let{uint16Array:C,uint32Array:P}=ut,D=T*2;for(;!pt(D,C);)T=gt(T),D=T*2;return vt(T,P)},S=function(T){let{uint16Array:C,uint32Array:P}=ut,D=T*2;for(;!pt(D,C);)T=xt(T,P),D=T*2;return vt(T,P)+St(D,C)},m=gt(o),g=xt(o,f),x=m,M=g,b,A,E,p;if(i&&(E=Ke,p=Jn,At(x,a,E),At(M,a,p),b=i(E),A=i(p),A<b)){x=g,M=m;let T=b;b=A,A=T,E=p}E||(E=Ke,At(x,a,E));let l=pt(x*2,c),_=e(E,l,b,s+1,r+x/8),h;if(_===2){let T=v(x),P=S(x)-T;h=n(T,P,!0,s+1,r+x/8,E)}else h=_&&ra(x,t,e,n,i,r,s+1);if(h)return!0;p=Jn,At(M,a,p);let R=pt(M*2,c),w=e(p,R,A,s+1,r+M/8),y;if(w===2){let T=v(M),P=S(M)-T;y=n(T,P,!0,s+1,r+M/8,p)}else y=w&&ra(M,t,e,n,i,r,s+1);return!!y}}var ki=new ut.constructor,os=new ut.constructor,Qe=new Je(()=>new It),Kn=new It,Qn=new It,oa=new It,aa=new It,ca=!1;function $c(o,t,e,n){if(ca)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");ca=!0;let i=o._roots,r=t._roots,s,a=0,c=0,f=new dt().copy(e).invert();for(let u=0,d=i.length;u<d;u++){ki.setBuffer(i[u]),c=0;let m=Qe.getPrimitive();At(0,ki.float32Array,m),m.applyMatrix4(f);for(let g=0,x=r.length;g<x&&(os.setBuffer(r[g]),s=ve(0,0,e,f,n,a,c,0,0,m),os.clearBuffer(),c+=r[g].byteLength/32,!s);g++);if(Qe.releasePrimitive(m),ki.clearBuffer(),a+=i[u].byteLength/32,s)break}return ca=!1,s}function ve(o,t,e,n,i,r=0,s=0,a=0,c=0,f=null,u=!1){let d,m;u?(d=os,m=ki):(d=ki,m=os);let g=d.float32Array,x=d.uint32Array,M=d.uint16Array,b=m.float32Array,A=m.uint32Array,E=m.uint16Array,p=o*2,l=t*2,_=pt(p,M),h=pt(l,E),R=!1;if(h&&_)u?R=i(vt(t,A),St(t*2,E),vt(o,x),St(o*2,M),c,s+t/8,a,r+o/8):R=i(vt(o,x),St(o*2,M),vt(t,A),St(t*2,E),a,r+o/8,c,s+t/8);else if(h){let w=Qe.getPrimitive();At(t,b,w),w.applyMatrix4(e);let y=gt(o),v=xt(o,x);At(y,g,Kn),At(v,g,Qn);let S=w.intersectsBox(Kn),T=w.intersectsBox(Qn);R=S&&ve(t,y,n,e,i,s,r,c,a+1,w,!u)||T&&ve(t,v,n,e,i,s,r,c,a+1,w,!u),Qe.releasePrimitive(w)}else{let w=gt(t),y=xt(t,A);At(w,b,oa),At(y,b,aa);let v=f.intersectsBox(oa),S=f.intersectsBox(aa);if(v&&S)R=ve(o,w,e,n,i,r,s,a,c+1,f,u)||ve(o,y,e,n,i,r,s,a,c+1,f,u);else if(v)if(_)R=ve(o,w,e,n,i,r,s,a,c+1,f,u);else{let T=Qe.getPrimitive();T.copy(oa).applyMatrix4(e);let C=gt(o),P=xt(o,x);At(C,g,Kn),At(P,g,Qn);let D=T.intersectsBox(Kn),L=T.intersectsBox(Qn);R=D&&ve(w,C,n,e,i,s,r,c,a+1,T,!u)||L&&ve(w,P,n,e,i,s,r,c,a+1,T,!u),Qe.releasePrimitive(T)}else if(S)if(_)R=ve(o,y,e,n,i,r,s,a,c+1,f,u);else{let T=Qe.getPrimitive();T.copy(aa).applyMatrix4(e);let C=gt(o),P=xt(o,x);At(C,g,Kn),At(P,g,Qn);let D=T.intersectsBox(Kn),L=T.intersectsBox(Qn);R=D&&ve(y,C,n,e,i,s,r,c,a+1,T,!u)||L&&ve(y,P,n,e,i,s,r,c,a+1,T,!u),Qe.releasePrimitive(T)}}return R}var as=new class{constructor(){let o=null,t=null,e=null,n=!1;this.root=null,this.buffer=null,this.uint32Array=null,this.uint16Array=null,this.setBVH=(r,s)=>{if(n)throw new Error("BVHTraversalHelper: cannot call setBVH during an active traversal.");this.root=s,this.buffer=o=r._roots[s],this.uint16Array=e=new Uint16Array(o),this.uint32Array=t=new Uint32Array(o)},this.reset=()=>{this.root=null,this.buffer=o=null,this.uint16Array=e=null,this.uint32Array=t=null},this.getRangeStart=r=>{let s=r*2;for(;!pt(s,e);)r=gt(r),s=r*2;return vt(r,t)},this.getRangeEnd=r=>{let s=r*2;for(;!pt(s,e);)r=xt(r,t),s=r*2;return vt(r,t)+St(s,e)};let i=(r,s,a)=>{let c=s*2,f=pt(c,e);if(!r(a,f,s)&&!f){let d=gt(s),m=xt(s,t);i(r,d,a+1),i(r,m,a+1)}};this.traverseBuffer=r=>{if(n)throw new Error("BVHTraversalHelper: cannot start a traversal during an active traversal.");n=!0;try{i(r,0,0)}finally{n=!1}},this.traverse=r=>{this.traverseBuffer((s,a,c)=>{if(a){let f=c*2,u=t[c+6],d=e[f+14];return r(s,a,new Float32Array(o,c*4,6),u,d)}else{let f=qn(c,t);return r(s,a,new Float32Array(o,c*4,6),f)}})}}};var Jc=new It,jn=new Float32Array(6),cs=class{constructor(){this._roots=null,this.primitiveBuffer=null,this.primitiveBufferStride=null}init(t){t={...ts,...t},"maxLeafSize"in t&&(console.warn('BVH: "maxLeafSize" option has been deprecated. Use "targetLeafSize", instead.'),t={...t,targetLeafSize:t.maxLeafSize}),Yc(this,t)}getRootRanges(){throw new Error("BVH: getRootRanges() not implemented")}writePrimitiveBounds(){throw new Error("BVH: writePrimitiveBounds() not implemented")}writePrimitiveRangeBounds(t,e,n,i){let r=1/0,s=1/0,a=1/0,c=-1/0,f=-1/0,u=-1/0;for(let d=t,m=t+e;d<m;d++){this.writePrimitiveBounds(d,jn,0);let[g,x,M,b,A,E]=jn;g<r&&(r=g),b>c&&(c=b),x<s&&(s=x),A>f&&(f=A),M<a&&(a=M),E>u&&(u=E)}return n[i+0]=r,n[i+1]=s,n[i+2]=a,n[i+3]=c,n[i+4]=f,n[i+5]=u,n}computePrimitiveBounds(t,e,n){let i=n.offset||0;for(let r=t,s=t+e;r<s;r++){this.writePrimitiveBounds(r,jn,0);let[a,c,f,u,d,m]=jn,g=(a+u)/2,x=(c+d)/2,M=(f+m)/2,b=(u-a)/2,A=(d-c)/2,E=(m-f)/2,p=(r-i)*6;n[p+0]=g,n[p+1]=b+(Math.abs(g)+b)*Xn,n[p+2]=x,n[p+3]=A+(Math.abs(x)+A)*Xn,n[p+4]=M,n[p+5]=E+(Math.abs(M)+E)*Xn}return n}shiftPrimitiveOffsets(t){let e=this._indirectBuffer;if(e)for(let n=0,i=e.length;n<i;n++)e[n]+=t;else{let n=this._roots;for(let i=0;i<n.length;i++){let r=n[i],s=new Uint32Array(r),a=new Uint16Array(r),c=r.byteLength/32;for(let f=0;f<c;f++){let u=8*f,d=2*u;pt(d,a)&&(s[u+6]+=t)}}}}traverse(t,e=0){as.setBVH(this,e),as.traverse(t),as.reset()}refit(){let t=this._roots;for(let e=0,n=t.length;e<n;e++){let i=t[e],r=new Uint32Array(i),s=new Uint16Array(i),a=new Float32Array(i),c=i.byteLength/32;for(let f=c-1;f>=0;f--){let u=f*8,d=u*2;if(pt(d,s)){let g=vt(u,r),x=St(d,s);this.writePrimitiveRangeBounds(g,x,jn,0),a.set(jn,u)}else{let g=gt(u),x=xt(u,r);for(let M=0;M<3;M++){let b=a[g+M],A=a[g+M+3],E=a[x+M],p=a[x+M+3];a[u+M]=b<E?b:E,a[u+M+3]=A>p?A:p}}}}}getBoundingBox(t){return t.makeEmpty(),this._roots.forEach(n=>{At(0,new Float32Array(n),Jc),t.union(Jc)}),t}shapecast(t){let{boundsTraverseOrder:e,intersectsBounds:n,intersectsRange:i,intersectsPrimitive:r,scratchPrimitive:s,iterate:a}=t;if(i&&r){let d=i;i=(m,g,x,M,b)=>d(m,g,x,M,b)?!0:a(m,g,this,r,x,M,s)}else i||(r?i=(d,m,g,x)=>a(d,m,this,r,g,x,s):i=(d,m,g)=>g);let c=!1,f=0,u=this._roots;for(let d=0,m=u.length;d<m;d++){let g=u[d];if(c=Zc(this,d,n,i,e,f),c)break;f+=g.byteLength/32}return c}bvhcast(t,e,n){let{intersectsRanges:i}=n;return $c(this,t,e,i)}};function Kc(){return typeof SharedArrayBuffer<"u"}function la(o){return o.index?o.index.count:o.attributes.position.count}function je(o){return la(o)/3}function Cp(o,t=ArrayBuffer){return o>65535?new Uint32Array(new t(4*o)):new Uint16Array(new t(2*o))}function Qc(o,t){if(!o.index){let e=o.attributes.position.count,n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,i=Cp(e,n);o.setIndex(new zt(i,1));for(let r=0;r<e;r++)i[r]=r}}function Rp(o,t,e){let n=la(o)/e,i=t||o.drawRange,r=i.start/e,s=(i.start+i.count)/e,a=Math.max(0,r),c=Math.min(n,s)-a;return{offset:Math.floor(a),count:Math.floor(c)}}function Ip(o,t){return o.groups.map(e=>({offset:e.start/t,count:e.count/t}))}function ha(o,t,e){let n=Rp(o,t,e),i=Ip(o,e);if(!i.length)return[n];let r=[],s=n.offset,a=n.offset+n.count,c=la(o)/e,f=[];for(let m of i){let{offset:g,count:x}=m,M=g,b=isFinite(x)?x:c-g,A=g+b;M<a&&A>s&&(f.push({pos:Math.max(s,M),isStart:!0}),f.push({pos:Math.min(a,A),isStart:!1}))}f.sort((m,g)=>m.pos!==g.pos?m.pos-g.pos:m.type==="end"?-1:1);let u=0,d=null;for(let m of f){let g=m.pos;u!==0&&g!==d&&r.push({offset:d,count:g-d}),u+=m.isStart?1:-1,d=g}return r}function Pp(o,t){let e=o[o.length-1],n=e.offset+e.count>2**16,i=o.reduce((f,u)=>f+u.count,0),r=n?4:2,s=t?new SharedArrayBuffer(i*r):new ArrayBuffer(i*r),a=n?new Uint32Array(s):new Uint16Array(s),c=0;for(let f=0;f<o.length;f++){let{offset:u,count:d}=o[f];for(let m=0;m<d;m++)a[c+m]=u+m;c+=d}return a}var ls=class extends cs{get indirect(){return!!this._indirectBuffer}get primitiveStride(){return null}get primitiveBufferStride(){return this.indirect?1:this.primitiveStride}set primitiveBufferStride(t){}get primitiveBuffer(){return this.indirect?this._indirectBuffer:this.geometry.index.array}set primitiveBuffer(t){}constructor(t,e={}){if(t.isBufferGeometry){if(t.index&&t.index.isInterleavedBufferAttribute)throw new Error("BVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("BVH: Only BufferGeometries are supported.");if(e.useSharedArrayBuffer&&!Kc())throw new Error("BVH: SharedArrayBuffer is not available.");super(),this.geometry=t,this.resolvePrimitiveIndex=e.indirect?n=>this._indirectBuffer[n]:n=>n,this.primitiveBuffer=null,this.primitiveBufferStride=null,this._indirectBuffer=null,e={...ts,...e},e[zi]||this.init(e)}init(t){let{geometry:e,primitiveStride:n}=this;if(t.indirect){let i=ha(e,t.range,n),r=Pp(i,t.useSharedArrayBuffer);this._indirectBuffer=r}else Qc(e,t);super.init(t),!e.boundingBox&&t.setBoundingBox&&(e.boundingBox=this.getBoundingBox(new It))}getRootRanges(t){return this.indirect?[{offset:0,count:this._indirectBuffer.length}]:ha(this.geometry,t,this.primitiveStride)}raycastObject3D(){throw new Error("BVH: raycastObject3D() not implemented")}};var re=class{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(t,e){let n=1/0,i=-1/0;for(let r=0,s=t.length;r<s;r++){let c=t[r][e];n=c<n?c:n,i=c>i?c:i}this.min=n,this.max=i}setFromPoints(t,e){let n=1/0,i=-1/0;for(let r=0,s=e.length;r<s;r++){let a=e[r],c=t.dot(a);n=c<n?c:n,i=c>i?c:i}this.min=n,this.max=i}isSeparated(t){return this.min>t.max||t.min>this.max}};re.prototype.setFromBox=(function(){let o=new I;return function(e,n){let i=n.min,r=n.max,s=1/0,a=-1/0;for(let c=0;c<=1;c++)for(let f=0;f<=1;f++)for(let u=0;u<=1;u++){o.x=i.x*c+r.x*(1-c),o.y=i.y*f+r.y*(1-f),o.z=i.z*u+r.z*(1-u);let d=e.dot(o);s=Math.min(d,s),a=Math.max(d,a)}this.min=s,this.max=a}})();var Dp=(function(){let o=new I,t=new I,e=new I;return function(i,r,s){let a=i.start,c=o,f=r.start,u=t;e.subVectors(a,f),o.subVectors(i.end,i.start),t.subVectors(r.end,r.start);let d=e.dot(u),m=u.dot(c),g=u.dot(u),x=e.dot(c),b=c.dot(c)*g-m*m,A,E;b!==0?A=(d*m-x*g)/b:A=0,E=(d+A*m)/g,s.x=A,s.y=E}})(),Hi=(function(){let o=new G,t=new I,e=new I;return function(i,r,s,a){Dp(i,r,o);let c=o.x,f=o.y;if(c>=0&&c<=1&&f>=0&&f<=1){i.at(c,s),r.at(f,a);return}else if(c>=0&&c<=1){f<0?r.at(0,a):r.at(1,a),i.closestPointToPoint(a,!0,s);return}else if(f>=0&&f<=1){c<0?i.at(0,s):i.at(1,s),r.closestPointToPoint(s,!0,a);return}else{let u;c<0?u=i.start:u=i.end;let d;f<0?d=r.start:d=r.end;let m=t,g=e;if(i.closestPointToPoint(d,!0,t),r.closestPointToPoint(u,!0,e),m.distanceToSquared(d)<=g.distanceToSquared(u)){s.copy(m),a.copy(d);return}else{s.copy(u),a.copy(g);return}}}})(),jc=(function(){let o=new I,t=new I,e=new xe,n=new Mt;return function(r,s){let{radius:a,center:c}=r,{a:f,b:u,c:d}=s;if(n.start=f,n.end=u,n.closestPointToPoint(c,!0,o).distanceTo(c)<=a||(n.start=f,n.end=d,n.closestPointToPoint(c,!0,o).distanceTo(c)<=a)||(n.start=u,n.end=d,n.closestPointToPoint(c,!0,o).distanceTo(c)<=a))return!0;let M=s.getPlane(e);if(Math.abs(M.distanceToPoint(c))<=a){let A=M.projectPoint(c,t);if(s.containsPoint(A))return!0}return!1}})();var Lp=["x","y","z"],Ne=1e-15,tl=Ne*Ne;function fe(o){return Math.abs(o)<Ne}var Lt=class extends Et{constructor(...t){super(...t),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new I),this.satBounds=new Array(4).fill().map(()=>new re),this.points=[this.a,this.b,this.c],this.plane=new xe,this.isDegenerateIntoSegment=!1,this.isDegenerateIntoPoint=!1,this.degenerateSegment=new Mt,this.needsUpdate=!0}intersectsSphere(t){return jc(t,this)}update(){let t=this.a,e=this.b,n=this.c,i=this.points,r=this.satAxes,s=this.satBounds,a=r[0],c=s[0];this.getNormal(a),c.setFromPoints(a,i);let f=r[1],u=s[1];f.subVectors(t,e),u.setFromPoints(f,i);let d=r[2],m=s[2];d.subVectors(e,n),m.setFromPoints(d,i);let g=r[3],x=s[3];g.subVectors(n,t),x.setFromPoints(g,i);let M=f.length(),b=d.length(),A=g.length();this.isDegenerateIntoPoint=!1,this.isDegenerateIntoSegment=!1,M<Ne?b<Ne||A<Ne?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(t),this.degenerateSegment.end.copy(n)):b<Ne?A<Ne?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(e),this.degenerateSegment.end.copy(t)):A<Ne&&(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(n),this.degenerateSegment.end.copy(e)),this.plane.setFromNormalAndCoplanarPoint(a,t),this.needsUpdate=!1}};Lt.prototype.closestPointToSegment=(function(){let o=new I,t=new I,e=new Mt;return function(i,r=null,s=null){this.needsUpdate&&this.update();let{start:a,end:c}=i,f=this.points,u,d=1/0,m=this.plane.distanceToPoint(a),g=this.plane.distanceToPoint(c);if(m*g<0&&this.plane.intersectLine(i,o)!==null&&this.containsPoint(o))return r&&r.copy(o),s&&s.copy(o),0;for(let x=0;x<3;x++){let M=(x+1)%3;e.start.copy(f[x]),e.end.copy(f[M]),Hi(e,i,o,t),u=o.distanceToSquared(t),u<d&&(d=u,r&&r.copy(o),s&&s.copy(t))}return this.closestPointToPoint(a,o),u=a.distanceToSquared(o),u<d&&(d=u,r&&r.copy(o),s&&s.copy(a)),this.closestPointToPoint(c,o),u=c.distanceToSquared(o),u<d&&(d=u,r&&r.copy(o),s&&s.copy(c)),Math.sqrt(d)}})();Lt.prototype.intersectsTriangle=(function(){let o=new Lt,t=new re,e=new re,n=new I,i=new I,r=new I,s=new I,a=new Mt,c=new Mt,f=new I,u=new G,d=new G;function m(p,l,_,h){let R=n;!p.isDegenerateIntoPoint&&!p.isDegenerateIntoSegment?R.copy(p.plane.normal):R.copy(l.plane.normal);let w=p.satBounds,y=p.satAxes;for(let T=1;T<4;T++){let C=w[T],P=y[T];if(t.setFromPoints(P,l.points),C.isSeparated(t)||(s.copy(R).cross(P),t.setFromPoints(s,p.points),e.setFromPoints(s,l.points),t.isSeparated(e)))return!1}let v=l.satBounds,S=l.satAxes;for(let T=1;T<4;T++){let C=v[T],P=S[T];if(t.setFromPoints(P,p.points),C.isSeparated(t)||(s.crossVectors(R,P),t.setFromPoints(s,p.points),e.setFromPoints(s,l.points),t.isSeparated(e)))return!1}return _&&(h||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),_.start.set(0,0,0),_.end.set(0,0,0)),!0}function g(p,l,_,h,R,w,y,v,S,T,C){let P=y/(y-v);T.x=h+(R-h)*P,C.start.subVectors(l,p).multiplyScalar(P).add(p),P=y/(y-S),T.y=h+(w-h)*P,C.end.subVectors(_,p).multiplyScalar(P).add(p)}function x(p,l,_,h,R,w,y,v,S,T,C){if(R>0)g(p.c,p.a,p.b,h,l,_,S,y,v,T,C);else if(w>0)g(p.b,p.a,p.c,_,l,h,v,y,S,T,C);else if(v*S>0||y!=0)g(p.a,p.b,p.c,l,_,h,y,v,S,T,C);else if(v!=0)g(p.b,p.a,p.c,_,l,h,v,y,S,T,C);else if(S!=0)g(p.c,p.a,p.b,h,l,_,S,y,v,T,C);else return!0;return!1}function M(p,l,_,h){let R=l.degenerateSegment,w=p.plane.distanceToPoint(R.start),y=p.plane.distanceToPoint(R.end);return fe(w)?fe(y)?m(p,l,_,h):(_&&(_.start.copy(R.start),_.end.copy(R.start)),p.containsPoint(R.start)):fe(y)?(_&&(_.start.copy(R.end),_.end.copy(R.end)),p.containsPoint(R.end)):p.plane.intersectLine(R,n)!=null?(_&&(_.start.copy(n),_.end.copy(n)),p.containsPoint(n)):!1}function b(p,l,_){let h=l.a;return fe(p.plane.distanceToPoint(h))&&p.containsPoint(h)?(_&&(_.start.copy(h),_.end.copy(h)),!0):!1}function A(p,l,_){let h=p.degenerateSegment,R=l.a;return h.closestPointToPoint(R,!0,n),R.distanceToSquared(n)<tl?(_&&(_.start.copy(R),_.end.copy(R)),!0):!1}function E(p,l,_,h){if(p.isDegenerateIntoSegment)if(l.isDegenerateIntoSegment){let R=p.degenerateSegment,w=l.degenerateSegment,y=i,v=r;R.delta(y),w.delta(v);let S=n.subVectors(w.start,R.start),T=y.x*v.y-y.y*v.x;if(fe(T))return!1;let C=(S.x*v.y-S.y*v.x)/T,P=-(y.x*S.y-y.y*S.x)/T;if(C<0||C>1||P<0||P>1)return!1;let D=R.start.z+y.z*C,L=w.start.z+v.z*P;return fe(D-L)?(_&&(_.start.copy(R.start).addScaledVector(y,C),_.end.copy(R.start).addScaledVector(y,C)),!0):!1}else return l.isDegenerateIntoPoint?A(p,l,_):M(l,p,_,h);else{if(p.isDegenerateIntoPoint)return l.isDegenerateIntoPoint?l.a.distanceToSquared(p.a)<tl?(_&&(_.start.copy(p.a),_.end.copy(p.a)),!0):!1:l.isDegenerateIntoSegment?A(l,p,_):b(l,p,_);if(l.isDegenerateIntoPoint)return b(p,l,_);if(l.isDegenerateIntoSegment)return M(p,l,_,h)}}return function(l,_=null,h=!1){this.needsUpdate&&this.update(),l.isExtendedTriangle?l.needsUpdate&&l.update():(o.copy(l),o.update(),l=o);let R=E(this,l,_,h);if(R!==void 0)return R;let w=this.plane,y=l.plane,v=y.distanceToPoint(this.a),S=y.distanceToPoint(this.b),T=y.distanceToPoint(this.c);fe(v)&&(v=0),fe(S)&&(S=0),fe(T)&&(T=0);let C=v*S,P=v*T;if(C>0&&P>0)return!1;let D=w.distanceToPoint(l.a),L=w.distanceToPoint(l.b),U=w.distanceToPoint(l.c);fe(D)&&(D=0),fe(L)&&(L=0),fe(U)&&(U=0);let B=D*L,F=D*U;if(B>0&&F>0)return!1;i.copy(w.normal),r.copy(y.normal);let $=i.cross(r),V=0,W=Math.abs($.x),H=Math.abs($.y);H>W&&(W=H,V=1),Math.abs($.z)>W&&(V=2);let Y=Lp[V],ct=this.a[Y],et=this.b[Y],nt=this.c[Y],Q=l.a[Y],it=l.b[Y],lt=l.c[Y];if(x(this,ct,et,nt,C,P,v,S,T,u,a))return m(this,l,_,h);if(x(l,Q,it,lt,B,F,D,L,U,d,c))return m(this,l,_,h);if(u.y<u.x){let yt=u.y;u.y=u.x,u.x=yt,f.copy(a.start),a.start.copy(a.end),a.end.copy(f)}if(d.y<d.x){let yt=d.y;d.y=d.x,d.x=yt,f.copy(c.start),c.start.copy(c.end),c.end.copy(f)}return u.y<d.x||d.y<u.x?!1:(_&&(d.x>u.x?_.start.copy(c.start):_.start.copy(a.start),d.y<u.y?_.end.copy(c.end):_.end.copy(a.end)),!0)}})();Lt.prototype.distanceToPoint=(function(){let o=new I;return function(e){return this.closestPointToPoint(e,o),e.distanceTo(o)}})();Lt.prototype.distanceToTriangle=(function(){let o=new I,t=new I,e=["a","b","c"],n=new Mt,i=new Mt;return function(s,a=null,c=null){let f=a||c?n:null;if(this.intersectsTriangle(s,f,!0))return(a||c)&&(a&&f.getCenter(a),c&&f.getCenter(c)),0;let u=1/0;for(let d=0;d<3;d++){let m,g=e[d],x=s[g];this.closestPointToPoint(x,o),m=x.distanceToSquared(o),m<u&&(u=m,a&&a.copy(o),c&&c.copy(x));let M=this[g];s.closestPointToPoint(M,o),m=M.distanceToSquared(o),m<u&&(u=m,a&&a.copy(M),c&&c.copy(o))}for(let d=0;d<3;d++){let m=e[d],g=e[(d+1)%3];n.set(this[m],this[g]);for(let x=0;x<3;x++){let M=e[x],b=e[(x+1)%3];i.set(s[M],s[b]),Hi(n,i,o,t);let A=o.distanceToSquared(t);A<u&&(u=A,a&&a.copy(o),c&&c.copy(t))}}return Math.sqrt(u)}})();var Ut=class{constructor(t,e,n){this.isOrientedBox=!0,this.min=new I,this.max=new I,this.matrix=new dt,this.invMatrix=new dt,this.points=new Array(8).fill().map(()=>new I),this.satAxes=new Array(3).fill().map(()=>new I),this.satBounds=new Array(3).fill().map(()=>new re),this.alignedSatBounds=new Array(3).fill().map(()=>new re),this.needsUpdate=!1,t&&this.min.copy(t),e&&this.max.copy(e),n&&this.matrix.copy(n)}set(t,e,n){this.min.copy(t),this.max.copy(e),this.matrix.copy(n),this.needsUpdate=!0}copy(t){this.min.copy(t.min),this.max.copy(t.max),this.matrix.copy(t.matrix),this.needsUpdate=!0}};Ut.prototype.update=(function(){return function(){let t=this.matrix,e=this.min,n=this.max,i=this.points;for(let f=0;f<=1;f++)for(let u=0;u<=1;u++)for(let d=0;d<=1;d++){let m=1*f|2*u|4*d,g=i[m];g.x=f?n.x:e.x,g.y=u?n.y:e.y,g.z=d?n.z:e.z,g.applyMatrix4(t)}let r=this.satBounds,s=this.satAxes,a=i[0];for(let f=0;f<3;f++){let u=s[f],d=r[f],m=1<<f,g=i[m];u.subVectors(a,g),d.setFromPoints(u,i)}let c=this.alignedSatBounds;c[0].setFromPointsField(i,"x"),c[1].setFromPointsField(i,"y"),c[2].setFromPointsField(i,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}})();Ut.prototype.intersectsBox=(function(){let o=new re;return function(e){this.needsUpdate&&this.update();let n=e.min,i=e.max,r=this.satBounds,s=this.satAxes,a=this.alignedSatBounds;if(o.min=n.x,o.max=i.x,a[0].isSeparated(o)||(o.min=n.y,o.max=i.y,a[1].isSeparated(o))||(o.min=n.z,o.max=i.z,a[2].isSeparated(o)))return!1;for(let c=0;c<3;c++){let f=s[c],u=r[c];if(o.setFromBox(f,e),u.isSeparated(o))return!1}return!0}})();Ut.prototype.intersectsTriangle=(function(){let o=new Lt,t=new Array(3),e=new re,n=new re,i=new I;return function(s){this.needsUpdate&&this.update(),s.isExtendedTriangle?s.needsUpdate&&s.update():(o.copy(s),o.update(),s=o);let a=this.satBounds,c=this.satAxes;t[0]=s.a,t[1]=s.b,t[2]=s.c;for(let m=0;m<3;m++){let g=a[m],x=c[m];if(e.setFromPoints(x,t),g.isSeparated(e))return!1}let f=s.satBounds,u=s.satAxes,d=this.points;for(let m=0;m<3;m++){let g=f[m],x=u[m];if(e.setFromPoints(x,d),g.isSeparated(e))return!1}for(let m=0;m<3;m++){let g=c[m];for(let x=0;x<4;x++){let M=u[x];if(i.crossVectors(g,M),e.setFromPoints(i,t),n.setFromPoints(i,d),e.isSeparated(n))return!1}}return!0}})();Ut.prototype.closestPointToPoint=(function(){return function(t,e){return this.needsUpdate&&this.update(),e.copy(t).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),e}})();Ut.prototype.distanceToPoint=(function(){let o=new I;return function(e){return this.closestPointToPoint(e,o),e.distanceTo(o)}})();Ut.prototype.distanceToBox=(function(){let o=["x","y","z"],t=new Array(12).fill().map(()=>new Mt),e=new Array(12).fill().map(()=>new Mt),n=new I,i=new I;return function(s,a=0,c=null,f=null){if(this.needsUpdate&&this.update(),this.intersectsBox(s))return(c||f)&&(s.getCenter(i),this.closestPointToPoint(i,n),s.closestPointToPoint(n,i),c&&c.copy(n),f&&f.copy(i)),0;let u=a*a,d=s.min,m=s.max,g=this.points,x=1/0;for(let b=0;b<8;b++){let A=g[b];i.copy(A).clamp(d,m);let E=A.distanceToSquared(i);if(E<x&&(x=E,c&&c.copy(A),f&&f.copy(i),E<u))return Math.sqrt(E)}let M=0;for(let b=0;b<3;b++)for(let A=0;A<=1;A++)for(let E=0;E<=1;E++){let p=(b+1)%3,l=(b+2)%3,_=A<<p|E<<l,h=1<<b|A<<p|E<<l,R=g[_],w=g[h];t[M].set(R,w);let v=o[b],S=o[p],T=o[l],C=e[M],P=C.start,D=C.end;P[v]=d[v],P[S]=A?d[S]:m[S],P[T]=E?d[T]:m[T],D[v]=m[v],D[S]=A?d[S]:m[S],D[T]=E?d[T]:m[T],M++}for(let b=0;b<=1;b++)for(let A=0;A<=1;A++)for(let E=0;E<=1;E++){i.x=b?m.x:d.x,i.y=A?m.y:d.y,i.z=E?m.z:d.z,this.closestPointToPoint(i,n);let p=i.distanceToSquared(n);if(p<x&&(x=p,c&&c.copy(n),f&&f.copy(i),p<u))return Math.sqrt(p)}for(let b=0;b<12;b++){let A=t[b];for(let E=0;E<12;E++){let p=e[E];Hi(A,p,n,i);let l=n.distanceToSquared(i);if(l<x&&(x=l,c&&c.copy(n),f&&f.copy(i),l<u))return Math.sqrt(l)}}return Math.sqrt(x)}})();var ua=class extends Je{constructor(){super(()=>new Lt)}},Zt=new ua;var Gi=new I,fa=new I;function el(o,t,e={},n=0,i=1/0){let r=n*n,s=i*i,a=1/0,c=null;if(o.shapecast({boundsTraverseOrder:u=>(Gi.copy(t).clamp(u.min,u.max),Gi.distanceToSquared(t)),intersectsBounds:(u,d,m)=>m<a&&m<s,intersectsTriangle:(u,d)=>{u.closestPointToPoint(t,Gi);let m=t.distanceToSquared(Gi);return m<a&&(fa.copy(Gi),a=m,c=d),m<r}}),a===1/0)return null;let f=Math.sqrt(a);return e.point?e.point.copy(fa):e.point=fa.clone(),e.distance=f,e.faceIndex=c,e}var hs=parseInt("180")>=169,Up=parseInt("180")<=161,dn=new I,pn=new I,mn=new I,us=new G,fs=new G,ds=new G,nl=new I,il=new I,rl=new I,Wi=new I;function Np(o,t,e,n,i,r,s,a){let c;if(r===jr?c=o.intersectTriangle(n,e,t,!0,i):c=o.intersectTriangle(t,e,n,r!==Oi,i),c===null)return null;let f=o.origin.distanceTo(i);return f<s||f>a?null:{distance:f,point:i.clone()}}function sl(o,t,e,n,i,r,s,a,c,f,u){dn.fromBufferAttribute(t,r),pn.fromBufferAttribute(t,s),mn.fromBufferAttribute(t,a);let d=Np(o,dn,pn,mn,Wi,c,f,u);if(d){if(n){us.fromBufferAttribute(n,r),fs.fromBufferAttribute(n,s),ds.fromBufferAttribute(n,a),d.uv=new G;let g=Et.getInterpolation(Wi,dn,pn,mn,us,fs,ds,d.uv);hs||(d.uv=g)}if(i){us.fromBufferAttribute(i,r),fs.fromBufferAttribute(i,s),ds.fromBufferAttribute(i,a),d.uv1=new G;let g=Et.getInterpolation(Wi,dn,pn,mn,us,fs,ds,d.uv1);hs||(d.uv1=g),Up&&(d.uv2=d.uv1)}if(e){nl.fromBufferAttribute(e,r),il.fromBufferAttribute(e,s),rl.fromBufferAttribute(e,a),d.normal=new I;let g=Et.getInterpolation(Wi,dn,pn,mn,nl,il,rl,d.normal);d.normal.dot(o.direction)>0&&d.normal.multiplyScalar(-1),hs||(d.normal=g)}let m={a:r,b:s,c:a,normal:new I,materialIndex:0};if(Et.getNormal(dn,pn,mn,m.normal),d.face=m,d.faceIndex=r,hs){let g=new I;Et.getBarycoord(Wi,dn,pn,mn,g),d.barycoord=g}}return d}function ol(o){return o&&o.isMaterial?o.side:o}function ti(o,t,e,n,i,r,s){let a=n*3,c=a+0,f=a+1,u=a+2,{index:d,groups:m}=o;o.index&&(c=d.getX(c),f=d.getX(f),u=d.getX(u));let{position:g,normal:x,uv:M,uv1:b}=o.attributes;if(Array.isArray(t)){let A=n*3;for(let E=0,p=m.length;E<p;E++){let{start:l,count:_,materialIndex:h}=m[E];if(A>=l&&A<l+_){let R=ol(t[h]),w=sl(e,g,x,M,b,c,f,u,R,r,s);if(w)if(w.faceIndex=n,w.face.materialIndex=h,i)i.push(w);else return w}}}else{let A=ol(t),E=sl(e,g,x,M,b,c,f,u,A,r,s);if(E)if(E.faceIndex=n,E.face.materialIndex=0,i)i.push(E);else return E}return null}function Ct(o,t,e,n){let i=o.a,r=o.b,s=o.c,a=t,c=t+1,f=t+2;e&&(a=e.getX(a),c=e.getX(c),f=e.getX(f)),i.x=n.getX(a),i.y=n.getY(a),i.z=n.getZ(a),r.x=n.getX(c),r.y=n.getY(c),r.z=n.getZ(c),s.x=n.getX(f),s.y=n.getY(f),s.z=n.getZ(f)}function al(o,t,e,n,i,r,s,a){let{geometry:c,_indirectBuffer:f}=o;for(let u=n,d=n+i;u<d;u++)ti(c,t,e,u,r,s,a)}function cl(o,t,e,n,i,r,s){let{geometry:a,_indirectBuffer:c}=o,f=1/0,u=null;for(let d=n,m=n+i;d<m;d++){let g;g=ti(a,t,e,d,null,r,s),g&&g.distance<f&&(u=g,f=g.distance)}return u}function ll(o,t,e,n,i,r,s){let{geometry:a}=e,{index:c}=a,f=a.attributes.position;for(let u=o,d=t+o;u<d;u++){let m;if(m=u,Ct(s,m*3,c,f),s.needsUpdate=!0,n(s,m,i,r))return!0}return!1}function hl(o,t=null){t&&Array.isArray(t)&&(t=new Set(t));let e=o.geometry,n=e.index?e.index.array:null,i=e.attributes.position,r,s,a,c,f=0,u=o._roots;for(let m=0,g=u.length;m<g;m++)r=u[m],s=new Uint32Array(r),a=new Uint16Array(r),c=new Float32Array(r),d(0,f),f+=r.byteLength;function d(m,g,x=!1){let M=m*2;if(pt(M,a)){let b=vt(m,s),A=St(M,a),E=1/0,p=1/0,l=1/0,_=-1/0,h=-1/0,R=-1/0;for(let w=3*b,y=3*(b+A);w<y;w++){let v=n[w],S=i.getX(v),T=i.getY(v),C=i.getZ(v);S<E&&(E=S),S>_&&(_=S),T<p&&(p=T),T>h&&(h=T),C<l&&(l=C),C>R&&(R=C)}return c[m+0]!==E||c[m+1]!==p||c[m+2]!==l||c[m+3]!==_||c[m+4]!==h||c[m+5]!==R?(c[m+0]=E,c[m+1]=p,c[m+2]=l,c[m+3]=_,c[m+4]=h,c[m+5]=R,!0):!1}else{let b=gt(m),A=xt(m,s),E=x,p=!1,l=!1;if(t){if(!E){let v=b/8+g/32,S=A/8+g/32;p=t.has(v),l=t.has(S),E=!p&&!l}}else p=!0,l=!0;let _=E||p,h=E||l,R=!1;_&&(R=d(b,g,E));let w=!1;h&&(w=d(A,g,E));let y=R||w;if(y)for(let v=0;v<3;v++){let S=b+v,T=A+v,C=c[S],P=c[S+3],D=c[T],L=c[T+3];c[m+v]=C<D?C:D,c[m+v+3]=P>L?P:L}return y}}}function qt(o,t,e,n,i){let r,s,a,c,f,u,d=1/e.direction.x,m=1/e.direction.y,g=1/e.direction.z,x=e.origin.x,M=e.origin.y,b=e.origin.z,A=t[o],E=t[o+3],p=t[o+1],l=t[o+3+1],_=t[o+2],h=t[o+3+2];return d>=0?(r=(A-x)*d,s=(E-x)*d):(r=(E-x)*d,s=(A-x)*d),m>=0?(a=(p-M)*m,c=(l-M)*m):(a=(l-M)*m,c=(p-M)*m),r>c||a>s||((a>r||isNaN(r))&&(r=a),(c<s||isNaN(s))&&(s=c),g>=0?(f=(_-b)*g,u=(h-b)*g):(f=(h-b)*g,u=(_-b)*g),r>u||f>s)?!1:((f>r||r!==r)&&(r=f),(u<s||s!==s)&&(s=u),r<=i&&s>=n)}function ul(o,t,e,n,i,r,s,a){let{geometry:c,_indirectBuffer:f}=o;for(let u=n,d=n+i;u<d;u++){let m=f?f[u]:u;ti(c,t,e,m,r,s,a)}}function fl(o,t,e,n,i,r,s){let{geometry:a,_indirectBuffer:c}=o,f=1/0,u=null;for(let d=n,m=n+i;d<m;d++){let g;g=ti(a,t,e,c?c[d]:d,null,r,s),g&&g.distance<f&&(u=g,f=g.distance)}return u}function dl(o,t,e,n,i,r,s){let{geometry:a}=e,{index:c}=a,f=a.attributes.position;for(let u=o,d=t+o;u<d;u++){let m;if(m=e.resolveTriangleIndex(u),Ct(s,m*3,c,f),s.needsUpdate=!0,n(s,m,i,r))return!0}return!1}function pl(o,t,e,n,i,r,s){ut.setBuffer(o._roots[t]),qt(0,ut.float32Array,n,r,s)&&da(0,o,e,n,i,r,s),ut.clearBuffer()}function da(o,t,e,n,i,r,s){let{float32Array:a,uint16Array:c,uint32Array:f}=ut,u=o*2;if(pt(u,c)){let m=vt(o,f),g=St(u,c);al(t,e,n,m,g,i,r,s)}else{let m=gt(o);qt(m,a,n,r,s)&&da(m,t,e,n,i,r,s);let g=xt(o,f);qt(g,a,n,r,s)&&da(g,t,e,n,i,r,s)}}var Fp=["x","y","z"];function ml(o,t,e,n,i,r){ut.setBuffer(o._roots[t]);let s=null;return qt(0,ut.float32Array,n,i,r)&&(s=pa(0,o,e,n,i,r)),ut.clearBuffer(),s}function pa(o,t,e,n,i,r){let{float32Array:s,uint16Array:a,uint32Array:c}=ut,f=o*2;if(pt(f,a)){let d=vt(o,c),m=St(f,a);return cl(t,e,n,d,m,i,r)}else{let d=qn(o,c),m=Fp[d],x=n.direction[m]>=0,M,b;x?(M=gt(o),b=xt(o,c)):(M=xt(o,c),b=gt(o));let E=qt(M,s,n,i,r)?pa(M,t,e,n,i,r):null;if(E){let _=E.point[m];if(x?_<=s[b+d]:_>=s[b+d+3])return E}let l=qt(b,s,n,i,r)?pa(b,t,e,n,i,r):null;return E&&l?E.distance<=l.distance?E:l:E||l||null}}var ps=new It,ei=new Lt,ni=new Lt,Xi=new dt,gl=new Ut,ms=new Ut;function xl(o,t,e,n){ut.setBuffer(o._roots[t]);let i=ma(0,o,e,n);return ut.clearBuffer(),i}function ma(o,t,e,n,i=null){let{float32Array:r,uint16Array:s,uint32Array:a}=ut,c=o*2;if(i===null&&(e.boundingBox||e.computeBoundingBox(),gl.set(e.boundingBox.min,e.boundingBox.max,n),i=gl),pt(c,s)){let u=t.geometry,d=u.index,m=u.attributes.position,g=e.index,x=e.attributes.position,M=vt(o,a),b=St(c,s);if(Xi.copy(n).invert(),e.boundsTree)return At(o,r,ms),ms.matrix.copy(Xi),ms.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:E=>ms.intersectsBox(E),intersectsTriangle:E=>{E.a.applyMatrix4(n),E.b.applyMatrix4(n),E.c.applyMatrix4(n),E.needsUpdate=!0;for(let p=M*3,l=(b+M)*3;p<l;p+=3)if(Ct(ni,p,d,m),ni.needsUpdate=!0,E.intersectsTriangle(ni))return!0;return!1}});{let A=je(e);for(let E=M*3,p=(b+M)*3;E<p;E+=3){Ct(ei,E,d,m),ei.a.applyMatrix4(Xi),ei.b.applyMatrix4(Xi),ei.c.applyMatrix4(Xi),ei.needsUpdate=!0;for(let l=0,_=A*3;l<_;l+=3)if(Ct(ni,l,g,x),ni.needsUpdate=!0,ei.intersectsTriangle(ni))return!0}}}else{let u=gt(o),d=xt(o,a);return At(u,r,ps),!!(i.intersectsBox(ps)&&ma(u,t,e,n,i)||(At(d,r,ps),i.intersectsBox(ps)&&ma(d,t,e,n,i)))}}var gs=new dt,ga=new Ut,qi=new Ut,Bp=new I,Op=new I,zp=new I,Vp=new I;function _l(o,t,e,n={},i={},r=0,s=1/0){t.boundingBox||t.computeBoundingBox(),ga.set(t.boundingBox.min,t.boundingBox.max,e),ga.needsUpdate=!0;let a=o.geometry,c=a.attributes.position,f=a.index,u=t.attributes.position,d=t.index,m=Zt.getPrimitive(),g=Zt.getPrimitive(),x=Bp,M=Op,b=null,A=null;i&&(b=zp,A=Vp);let E=1/0,p=null,l=null;return gs.copy(e).invert(),qi.matrix.copy(gs),o.shapecast({boundsTraverseOrder:_=>ga.distanceToBox(_),intersectsBounds:(_,h,R)=>R<E&&R<s?(h&&(qi.min.copy(_.min),qi.max.copy(_.max),qi.needsUpdate=!0),!0):!1,intersectsRange:(_,h)=>{if(t.boundsTree)return t.boundsTree.shapecast({boundsTraverseOrder:w=>qi.distanceToBox(w),intersectsBounds:(w,y,v)=>v<E&&v<s,intersectsRange:(w,y)=>{for(let v=w,S=w+y;v<S;v++){Ct(g,3*v,d,u),g.a.applyMatrix4(e),g.b.applyMatrix4(e),g.c.applyMatrix4(e),g.needsUpdate=!0;for(let T=_,C=_+h;T<C;T++){Ct(m,3*T,f,c),m.needsUpdate=!0;let P=m.distanceToTriangle(g,x,b);if(P<E&&(M.copy(x),A&&A.copy(b),E=P,p=T,l=v),P<r)return!0}}}});{let R=je(t);for(let w=0,y=R;w<y;w++){Ct(g,3*w,d,u),g.a.applyMatrix4(e),g.b.applyMatrix4(e),g.c.applyMatrix4(e),g.needsUpdate=!0;for(let v=_,S=_+h;v<S;v++){Ct(m,3*v,f,c),m.needsUpdate=!0;let T=m.distanceToTriangle(g,x,b);if(T<E&&(M.copy(x),A&&A.copy(b),E=T,p=v,l=w),T<r)return!0}}}}}),Zt.releasePrimitive(m),Zt.releasePrimitive(g),E===1/0?null:(n.point?n.point.copy(M):n.point=M.clone(),n.distance=E,n.faceIndex=p,i&&(i.point?i.point.copy(A):i.point=A.clone(),i.point.applyMatrix4(gs),M.applyMatrix4(gs),i.distance=M.sub(i.point).length(),i.faceIndex=l),n)}function vl(o,t=null){t&&Array.isArray(t)&&(t=new Set(t));let e=o.geometry,n=e.index?e.index.array:null,i=e.attributes.position,r,s,a,c,f=0,u=o._roots;for(let m=0,g=u.length;m<g;m++)r=u[m],s=new Uint32Array(r),a=new Uint16Array(r),c=new Float32Array(r),d(0,f),f+=r.byteLength;function d(m,g,x=!1){let M=m*2;if(pt(M,a)){let b=vt(m,s),A=St(M,a),E=1/0,p=1/0,l=1/0,_=-1/0,h=-1/0,R=-1/0;for(let w=b,y=b+A;w<y;w++){let v=3*o.resolveTriangleIndex(w);for(let S=0;S<3;S++){let T=v+S;T=n?n[T]:T;let C=i.getX(T),P=i.getY(T),D=i.getZ(T);C<E&&(E=C),C>_&&(_=C),P<p&&(p=P),P>h&&(h=P),D<l&&(l=D),D>R&&(R=D)}}return c[m+0]!==E||c[m+1]!==p||c[m+2]!==l||c[m+3]!==_||c[m+4]!==h||c[m+5]!==R?(c[m+0]=E,c[m+1]=p,c[m+2]=l,c[m+3]=_,c[m+4]=h,c[m+5]=R,!0):!1}else{let b=gt(m),A=xt(m,s),E=x,p=!1,l=!1;if(t){if(!E){let v=b/8+g/32,S=A/8+g/32;p=t.has(v),l=t.has(S),E=!p&&!l}}else p=!0,l=!0;let _=E||p,h=E||l,R=!1;_&&(R=d(b,g,E));let w=!1;h&&(w=d(A,g,E));let y=R||w;if(y)for(let v=0;v<3;v++){let S=b+v,T=A+v,C=c[S],P=c[S+3],D=c[T],L=c[T+3];c[m+v]=C<D?C:D,c[m+v+3]=P>L?P:L}return y}}}function yl(o,t,e,n,i,r,s){ut.setBuffer(o._roots[t]),qt(0,ut.float32Array,n,r,s)&&xa(0,o,e,n,i,r,s),ut.clearBuffer()}function xa(o,t,e,n,i,r,s){let{float32Array:a,uint16Array:c,uint32Array:f}=ut,u=o*2;if(pt(u,c)){let m=vt(o,f),g=St(u,c);ul(t,e,n,m,g,i,r,s)}else{let m=gt(o);qt(m,a,n,r,s)&&xa(m,t,e,n,i,r,s);let g=xt(o,f);qt(g,a,n,r,s)&&xa(g,t,e,n,i,r,s)}}var kp=["x","y","z"];function Ml(o,t,e,n,i,r){ut.setBuffer(o._roots[t]);let s=null;return qt(0,ut.float32Array,n,i,r)&&(s=_a(0,o,e,n,i,r)),ut.clearBuffer(),s}function _a(o,t,e,n,i,r){let{float32Array:s,uint16Array:a,uint32Array:c}=ut,f=o*2;if(pt(f,a)){let d=vt(o,c),m=St(f,a);return fl(t,e,n,d,m,i,r)}else{let d=qn(o,c),m=kp[d],x=n.direction[m]>=0,M,b;x?(M=gt(o),b=xt(o,c)):(M=xt(o,c),b=gt(o));let E=qt(M,s,n,i,r)?_a(M,t,e,n,i,r):null;if(E){let _=E.point[m];if(x?_<=s[b+d]:_>=s[b+d+3])return E}let l=qt(b,s,n,i,r)?_a(b,t,e,n,i,r):null;return E&&l?E.distance<=l.distance?E:l:E||l||null}}var xs=new It,ii=new Lt,ri=new Lt,Yi=new dt,Sl=new Ut,_s=new Ut;function bl(o,t,e,n){ut.setBuffer(o._roots[t]);let i=va(0,o,e,n);return ut.clearBuffer(),i}function va(o,t,e,n,i=null){let{float32Array:r,uint16Array:s,uint32Array:a}=ut,c=o*2;if(i===null&&(e.boundingBox||e.computeBoundingBox(),Sl.set(e.boundingBox.min,e.boundingBox.max,n),i=Sl),pt(c,s)){let u=t.geometry,d=u.index,m=u.attributes.position,g=e.index,x=e.attributes.position,M=vt(o,a),b=St(c,s);if(Yi.copy(n).invert(),e.boundsTree)return At(o,r,_s),_s.matrix.copy(Yi),_s.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:E=>_s.intersectsBox(E),intersectsTriangle:E=>{E.a.applyMatrix4(n),E.b.applyMatrix4(n),E.c.applyMatrix4(n),E.needsUpdate=!0;for(let p=M,l=b+M;p<l;p++)if(Ct(ri,3*t.resolveTriangleIndex(p),d,m),ri.needsUpdate=!0,E.intersectsTriangle(ri))return!0;return!1}});{let A=je(e);for(let E=M,p=b+M;E<p;E++){let l=t.resolveTriangleIndex(E);Ct(ii,3*l,d,m),ii.a.applyMatrix4(Yi),ii.b.applyMatrix4(Yi),ii.c.applyMatrix4(Yi),ii.needsUpdate=!0;for(let _=0,h=A*3;_<h;_+=3)if(Ct(ri,_,g,x),ri.needsUpdate=!0,ii.intersectsTriangle(ri))return!0}}}else{let u=gt(o),d=xt(o,a);return At(u,r,xs),!!(i.intersectsBox(xs)&&va(u,t,e,n,i)||(At(d,r,xs),i.intersectsBox(xs)&&va(d,t,e,n,i)))}}var vs=new dt,ya=new Ut,Zi=new Ut,Hp=new I,Gp=new I,Wp=new I,Xp=new I;function wl(o,t,e,n={},i={},r=0,s=1/0){t.boundingBox||t.computeBoundingBox(),ya.set(t.boundingBox.min,t.boundingBox.max,e),ya.needsUpdate=!0;let a=o.geometry,c=a.attributes.position,f=a.index,u=t.attributes.position,d=t.index,m=Zt.getPrimitive(),g=Zt.getPrimitive(),x=Hp,M=Gp,b=null,A=null;i&&(b=Wp,A=Xp);let E=1/0,p=null,l=null;return vs.copy(e).invert(),Zi.matrix.copy(vs),o.shapecast({boundsTraverseOrder:_=>ya.distanceToBox(_),intersectsBounds:(_,h,R)=>R<E&&R<s?(h&&(Zi.min.copy(_.min),Zi.max.copy(_.max),Zi.needsUpdate=!0),!0):!1,intersectsRange:(_,h)=>{if(t.boundsTree){let R=t.boundsTree;return R.shapecast({boundsTraverseOrder:w=>Zi.distanceToBox(w),intersectsBounds:(w,y,v)=>v<E&&v<s,intersectsRange:(w,y)=>{for(let v=w,S=w+y;v<S;v++){let T=R.resolveTriangleIndex(v);Ct(g,3*T,d,u),g.a.applyMatrix4(e),g.b.applyMatrix4(e),g.c.applyMatrix4(e),g.needsUpdate=!0;for(let C=_,P=_+h;C<P;C++){let D=o.resolveTriangleIndex(C);Ct(m,3*D,f,c),m.needsUpdate=!0;let L=m.distanceToTriangle(g,x,b);if(L<E&&(M.copy(x),A&&A.copy(b),E=L,p=C,l=v),L<r)return!0}}}})}else{let R=je(t);for(let w=0,y=R;w<y;w++){Ct(g,3*w,d,u),g.a.applyMatrix4(e),g.b.applyMatrix4(e),g.c.applyMatrix4(e),g.needsUpdate=!0;for(let v=_,S=_+h;v<S;v++){let T=o.resolveTriangleIndex(v);Ct(m,3*T,f,c),m.needsUpdate=!0;let C=m.distanceToTriangle(g,x,b);if(C<E&&(M.copy(x),A&&A.copy(b),E=C,p=v,l=w),C<r)return!0}}}}}),Zt.releasePrimitive(m),Zt.releasePrimitive(g),E===1/0?null:(n.point?n.point.copy(M):n.point=M.clone(),n.distance=E,n.faceIndex=p,i&&(i.point?i.point.copy(A):i.point=A.clone(),i.point.applyMatrix4(vs),M.applyMatrix4(vs),i.distance=M.sub(i.point).length(),i.faceIndex=l),n)}function Ma(o,t,e){return o===null?null:(o.point.applyMatrix4(t.matrixWorld),o.distance=o.point.distanceTo(e.ray.origin),o.object=t,o)}var ys=new Ut,Ms=new we,Tl=new I,El=new dt,Al=new I,Sa=["getX","getY","getZ"],gn=class o extends ls{static serialize(t,e={}){e={cloneBuffers:!0,...e};let n=t.geometry,i=t._roots,r=t._indirectBuffer,s=n.getIndex(),a={version:1,roots:null,index:null,indirectBuffer:null};return e.cloneBuffers?(a.roots=i.map(c=>c.slice()),a.index=s?s.array.slice():null,a.indirectBuffer=r?r.slice():null):(a.roots=i,a.index=s?s.array:null,a.indirectBuffer=r),a}static deserialize(t,e,n={}){n={setIndex:!0,indirect:!!t.indirectBuffer,...n};let{index:i,roots:r,indirectBuffer:s}=t;t.version||(console.warn("MeshBVH.deserialize: Serialization format has been changed and will be fixed up. It is recommended to regenerate any stored serialized data."),c(r));let a=new o(e,{...n,[zi]:!0});if(a._roots=r,a._indirectBuffer=s||null,n.setIndex){let f=e.getIndex();if(f===null){let u=new zt(t.index,1,!1);e.setIndex(u)}else f.array!==i&&(f.array.set(i),f.needsUpdate=!0)}return a;function c(f){for(let u=0;u<f.length;u++){let d=f[u],m=new Uint32Array(d),g=new Uint16Array(d);for(let x=0,M=d.byteLength/32;x<M;x++){let b=8*x,A=2*b;pt(A,g)||(m[b+6]=m[b+6]/8-x)}}}}get primitiveStride(){return 3}get resolveTriangleIndex(){return this.resolvePrimitiveIndex}constructor(t,e={}){e.maxLeafTris&&(console.warn('MeshBVH: "maxLeafTris" option has been deprecated. Use "targetLeafSize", instead.'),e={...e,targetLeafSize:e.maxLeafTris}),super(t,e)}shiftTriangleOffsets(t){return super.shiftPrimitiveOffsets(t)}writePrimitiveBounds(t,e,n){let i=this.geometry,r=this._indirectBuffer,s=i.attributes.position,a=i.index?i.index.array:null,f=(r?r[t]:t)*3,u=f+0,d=f+1,m=f+2;a&&(u=a[u],d=a[d],m=a[m]);for(let g=0;g<3;g++){let x=s[Sa[g]](u),M=s[Sa[g]](d),b=s[Sa[g]](m),A=x;M<A&&(A=M),b<A&&(A=b);let E=x;M>E&&(E=M),b>E&&(E=b),e[n+g]=A,e[n+g+3]=E}return e}computePrimitiveBounds(t,e,n){let i=this.geometry,r=this._indirectBuffer,s=i.attributes.position,a=i.index?i.index.array:null,c=s.normalized;if(t<0||e+t-n.offset>n.length/6)throw new Error("MeshBVH: compute triangle bounds range is invalid.");let f=s.array,u=s.offset||0,d=3;s.isInterleavedBufferAttribute&&(d=s.data.stride);let m=["getX","getY","getZ"],g=n.offset;for(let x=t,M=t+e;x<M;x++){let A=(r?r[x]:x)*3,E=(x-g)*6,p=A+0,l=A+1,_=A+2;a&&(p=a[p],l=a[l],_=a[_]),c||(p=p*d+u,l=l*d+u,_=_*d+u);for(let h=0;h<3;h++){let R,w,y;c?(R=s[m[h]](p),w=s[m[h]](l),y=s[m[h]](_)):(R=f[p+h],w=f[l+h],y=f[_+h]);let v=R;w<v&&(v=w),y<v&&(v=y);let S=R;w>S&&(S=w),y>S&&(S=y);let T=(S-v)/2,C=h*2;n[E+C+0]=v+T,n[E+C+1]=T+(Math.abs(v)+T)*Xn}}return n}raycastObject3D(t,e,n=[]){let{material:i}=t;if(i===void 0)return;El.copy(t.matrixWorld).invert(),Ms.copy(e.ray).applyMatrix4(El),Al.setFromMatrixScale(t.matrixWorld),Tl.copy(Ms.direction).multiply(Al);let r=Tl.length(),s=e.near/r,a=e.far/r;if(e.firstHitOnly===!0){let c=this.raycastFirst(Ms,i,s,a);c=Ma(c,t,e),c&&n.push(c)}else{let c=this.raycast(Ms,i,s,a);for(let f=0,u=c.length;f<u;f++){let d=Ma(c[f],t,e);d&&n.push(d)}}return n}refit(t=null){return(this.indirect?vl:hl)(this,t)}raycast(t,e=cn,n=0,i=1/0){let r=this._roots,s=[],a=this.indirect?yl:pl;for(let c=0,f=r.length;c<f;c++)a(this,c,e,t,s,n,i);return s}raycastFirst(t,e=cn,n=0,i=1/0){let r=this._roots,s=null,a=this.indirect?Ml:ml;for(let c=0,f=r.length;c<f;c++){let u=a(this,c,e,t,n,i);u!=null&&(s==null||u.distance<s.distance)&&(s=u)}return s}intersectsGeometry(t,e){let n=!1,i=this._roots,r=this.indirect?bl:xl;for(let s=0,a=i.length;s<a&&(n=r(this,s,t,e),!n);s++);return n}shapecast(t){let e=Zt.getPrimitive(),n=super.shapecast({...t,intersectsPrimitive:t.intersectsTriangle,scratchPrimitive:e,iterate:this.indirect?dl:ll});return Zt.releasePrimitive(e),n}bvhcast(t,e,n){let{intersectsRanges:i,intersectsTriangles:r}=n,s=Zt.getPrimitive(),a=this.geometry.index,c=this.geometry.attributes.position,f=this.indirect?x=>{let M=this.resolveTriangleIndex(x);Ct(s,M*3,a,c)}:x=>{Ct(s,x*3,a,c)},u=Zt.getPrimitive(),d=t.geometry.index,m=t.geometry.attributes.position,g=t.indirect?x=>{let M=t.resolveTriangleIndex(x);Ct(u,M*3,d,m)}:x=>{Ct(u,x*3,d,m)};if(r){if(!(t instanceof o))throw new Error('MeshBVH: "intersectsTriangles" callback can only be used with another MeshBVH.');let x=(M,b,A,E,p,l,_,h)=>{for(let R=A,w=A+E;R<w;R++){g(R),u.a.applyMatrix4(e),u.b.applyMatrix4(e),u.c.applyMatrix4(e),u.needsUpdate=!0;for(let y=M,v=M+b;y<v;y++)if(f(y),s.needsUpdate=!0,r(s,u,y,R,p,l,_,h))return!0}return!1};if(i){let M=i;i=function(b,A,E,p,l,_,h,R){return M(b,A,E,p,l,_,h,R)?!0:x(b,A,E,p,l,_,h,R)}}else i=x}return super.bvhcast(t,e,{intersectsRanges:i})}intersectsBox(t,e){return ys.set(t.min,t.max,e),ys.needsUpdate=!0,this.shapecast({intersectsBounds:n=>ys.intersectsBox(n),intersectsTriangle:n=>ys.intersectsTriangle(n)})}intersectsSphere(t){return this.shapecast({intersectsBounds:e=>t.intersectsBox(e),intersectsTriangle:e=>e.intersectsSphere(t)})}closestPointToGeometry(t,e,n={},i={},r=0,s=1/0){return(this.indirect?wl:_l)(this,t,e,n,i,r,s)}closestPointToPoint(t,e={},n=0,i=1/0){return el(this,t,e,n,i)}};var Cl=Math.pow(10,-Math.log10(1e-6)),qp=5e-7*Cl;function ye(o){return~~(o*Cl+qp)}function Rl(o){return`${ye(o.x)},${ye(o.y)}`}function ba(o){return`${ye(o.x)},${ye(o.y)},${ye(o.z)}`}function Il(o){return`${ye(o.x)},${ye(o.y)},${ye(o.z)},${ye(o.w)}`}function Pl(o,t,e){e.direction.subVectors(t,o).normalize();let n=o.dot(e.direction);return e.origin.copy(o).addScaledVector(e.direction,-n),e}function Ss(){return typeof SharedArrayBuffer<"u"}function Dl(o){if(o.buffer instanceof SharedArrayBuffer)return o;let t=o.constructor,e=o.buffer,n=new SharedArrayBuffer(e.byteLength),i=new Uint8Array(e);return new Uint8Array(n).set(i,0),new t(n)}function Yp(o){return o.index?o.index.count:o.attributes.position.count}function si(o){return Yp(o)/3}var Zp=1e-8,$p=new I;function Ul(o){return~~(o/3)}function Nl(o){return o%3}function Ll(o,t){return o.start-t.start}function wa(o,t){return $p.subVectors(t,o.origin).dot(o.direction)}function Fl(o,t,e,n=Zp){o.sort(Ll),t.sort(Ll);for(let a=0;a<o.length;a++){let c=o[a];for(let f=0;f<t.length;f++){let u=t[f];if(!(u.start>c.end)){if(c.end<u.start||u.end<c.start)continue;if(c.start<=u.start&&c.end>=u.end)r(u.end,c.end)||o.splice(a+1,0,{start:u.end,end:c.end,index:c.index}),c.end=u.start,u.start=0,u.end=0;else if(c.start>=u.start&&c.end<=u.end)r(c.end,u.end)||t.splice(f+1,0,{start:c.end,end:u.end,index:u.index}),u.end=c.start,c.start=0,c.end=0;else if(c.start<=u.start&&c.end<=u.end){let d=c.end;c.end=u.start,u.start=d}else if(c.start>=u.start&&c.end>=u.end){let d=u.end;u.end=c.start,c.start=d}else throw new Error}if(e.has(c.index)||e.set(c.index,[]),e.has(u.index)||e.set(u.index,[]),e.get(c.index).push(u.index),e.get(u.index).push(c.index),s(u)&&(t.splice(f,1),f--),s(c)){o.splice(a,1),a--;break}}}i(o),i(t);function i(a){for(let c=0;c<a.length;c++)s(a[c])&&(a.splice(c,1),c--)}function r(a,c){return Math.abs(c-a)<n}function s(a){return Math.abs(a.end-a.start)<n}}var bs=class{constructor(){this._rays=[]}addRay(t){this._rays.push(t)}findClosestRay(t){let e=this._rays,n=t.clone();n.direction.multiplyScalar(-1);let i=1/0,r=null;for(let c=0,f=e.length;c<f;c++){let u=e[c];if(s(u,t)&&s(u,n))continue;let d=a(u,t),m=a(u,n),g=Math.min(d,m);g<i&&(i=g,r=u)}return r;function s(c,f){let u=c.origin.distanceTo(f.origin)>1e-5;return c.direction.angleTo(f.direction)>1e-4||u}function a(c,f){let u=c.origin.distanceTo(f.origin),d=c.direction.angleTo(f.direction);return u/1e-5+d/1e-4}}};var Ta=new I,Ea=new I,ws=new we;function Bl(o,t,e){let n=o.attributes,i=o.index,r=n.position,s=new Map,a=new Map,c=Array.from(t),f=new bs;for(let u=0,d=c.length;u<d;u++){let m=c[u],g=Ul(m),x=Nl(m),M=3*g+x,b=3*g+(x+1)%3;i&&(M=i.getX(M),b=i.getX(b)),Ta.fromBufferAttribute(r,M),Ea.fromBufferAttribute(r,b),Pl(Ta,Ea,ws);let A,E=f.findClosestRay(ws);E===null&&(E=ws.clone(),f.addRay(E)),a.has(E)||a.set(E,{forward:[],reverse:[],ray:E}),A=a.get(E);let p=wa(E,Ta),l=wa(E,Ea);p>l&&([p,l]=[l,p]),ws.direction.dot(E.direction)<0?A.reverse.push({start:p,end:l,index:m}):A.forward.push({start:p,end:l,index:m})}return a.forEach(({forward:u,reverse:d},m)=>{Fl(u,d,s,e),u.length===0&&d.length===0&&a.delete(m)}),{disjointConnectivityMap:s,fragmentMap:a}}var Jp=new G,Aa=new I,Kp=new te,Ca=["","",""],Ts=class{constructor(){this.data=null,this.disjointConnections=null,this.unmatchedDisjointEdges=null,this.unmatchedEdges=-1,this.matchedEdges=-1,this.useDrawRange=!0,this.useAllAttributes=!1,this.matchDisjointEdges=!1,this.degenerateEpsilon=1e-8}getSiblingTriangleIndex(t,e){let n=this.data[t*3+e];return n===-1?-1:~~(n/3)}getSiblingEdgeIndex(t,e){let n=this.data[t*3+e];return n===-1?-1:n%3}getDisjointSiblingTriangleIndices(t,e){let n=t*3+e,i=this.disjointConnections.get(n);return i?i.map(r=>~~(r/3)):[]}getDisjointSiblingEdgeIndices(t,e){let n=t*3+e,i=this.disjointConnections.get(n);return i?i.map(r=>r%3):[]}isFullyConnected(){return this.unmatchedEdges===0}updateFrom(t){let{useAllAttributes:e,useDrawRange:n,matchDisjointEdges:i,degenerateEpsilon:r}=this,s=e?p:E,a=new Map,{attributes:c}=t,f=e?Object.keys(c):null,u=t.index,d=c.position,m=si(t),g=m,x=0;n&&(x=t.drawRange.start,t.drawRange.count!==1/0&&(m=~~(t.drawRange.count/3)));let M=this.data;(!M||M.length<3*g)&&(M=new Int32Array(3*g)),M.fill(-1);let b=0,A=new Set;for(let l=x,_=m*3+x;l<_;l+=3){let h=l;for(let R=0;R<3;R++){let w=h+R;u&&(w=u.getX(w)),Ca[R]=s(w)}for(let R=0;R<3;R++){let w=(R+1)%3,y=Ca[R],v=Ca[w],S=`${v}_${y}`;if(a.has(S)){let T=h+R,C=a.get(S);M[T]=C,M[C]=T,a.delete(S),b+=2,A.delete(C)}else{let T=`${y}_${v}`,C=h+R;a.set(T,C),A.add(C)}}}if(i){let{fragmentMap:l,disjointConnectivityMap:_}=Bl(t,A,r);A.clear(),l.forEach(({forward:h,reverse:R})=>{h.forEach(({index:w})=>A.add(w)),R.forEach(({index:w})=>A.add(w))}),this.unmatchedDisjointEdges=l,this.disjointConnections=_,b=m*3-A.size}this.matchedEdges=b,this.unmatchedEdges=A.size,this.data=M;function E(l){return Aa.fromBufferAttribute(d,l),ba(Aa)}function p(l){let _="";for(let h=0,R=f.length;h<R;h++){let w=c[f[h]],y;switch(w.itemSize){case 1:y=ye(w.getX(l));break;case 2:y=Rl(Jp.fromBufferAttribute(w,l));break;case 3:y=ba(Aa.fromBufferAttribute(w,l));break;case 4:y=Il(Kp.fromBufferAttribute(w,l));break}_!==""&&(_+="|"),_+=y}return _}}};var xn=class extends Ti{constructor(...t){super(...t),this.isBrush=!0,this._previousMatrix=new dt,this._previousMatrix.elements.fill(0),this._halfEdges=null,this._boundsTree=null,this._groupIndices=null,this._hash=null}markUpdated(){this._previousMatrix.copy(this.matrix)}isDirty(){let{matrix:t,_previousMatrix:e}=this,n=t.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!0;return!1}prepareGeometry(){let t=this.geometry,e=t.attributes,n=Ss(),i=t.index,r=t.attributes.position,s=i?`${i.uuid}_${i.count}_${i.version}`:"-1_-1_-1",a=`${r.uuid}_${r.count}_${r.version}`,c=`${t.uuid}_${s}_${a}`;if(this._hash===c)return;if(this._hash=c,n)for(let m in e){let g=e[m];if(g.isInterleavedBufferAttribute)throw new Error("Brush: InterleavedBufferAttributes are not supported.");g.array=Dl(g.array)}t.boundsTree=new gn(t,{maxLeafSize:3,indirect:!0,useSharedArrayBuffer:n}),t.halfEdges||(t.halfEdges=new Ts),t.halfEdges.updateFrom(t);let f=si(t);(!t.groupIndices||t.groupIndices.length!==f)&&(t.groupIndices=new Uint16Array(f));let u=t.groupIndices,d=t.groups;for(let m=0,g=d.length;m<g;m++){let{start:x,count:M}=d[m];for(let b=x/3,A=(x+M)/3;b<A;b++)u[b]=m}}disposeCacheData(){let{geometry:t}=this;t.halfEdges=null,t.boundsTree=null,t.groupIndices=null}};var Qp=Object.getOwnPropertyNames,se=(o,t)=>function(){return t||(0,o[Qp(o)[0]])((t={exports:{}}).exports,t),t.exports},Es=se({"node_modules/binary-search-bounds/search-bounds.js"(o,t){"use strict";function e(c,f,u,d,m){for(var g=m+1;d<=m;){var x=d+m>>>1,M=c[x],b=u!==void 0?u(M,f):M-f;b>=0?(g=x,m=x-1):d=x+1}return g}function n(c,f,u,d,m){for(var g=m+1;d<=m;){var x=d+m>>>1,M=c[x],b=u!==void 0?u(M,f):M-f;b>0?(g=x,m=x-1):d=x+1}return g}function i(c,f,u,d,m){for(var g=d-1;d<=m;){var x=d+m>>>1,M=c[x],b=u!==void 0?u(M,f):M-f;b<0?(g=x,d=x+1):m=x-1}return g}function r(c,f,u,d,m){for(var g=d-1;d<=m;){var x=d+m>>>1,M=c[x],b=u!==void 0?u(M,f):M-f;b<=0?(g=x,d=x+1):m=x-1}return g}function s(c,f,u,d,m){for(;d<=m;){var g=d+m>>>1,x=c[g],M=u!==void 0?u(x,f):x-f;if(M===0)return g;M<=0?d=g+1:m=g-1}return-1}function a(c,f,u,d,m,g){return typeof u=="function"?g(c,f,u,d===void 0?0:d|0,m===void 0?c.length-1:m|0):g(c,f,void 0,u===void 0?0:u|0,d===void 0?c.length-1:d|0)}t.exports={ge:function(c,f,u,d,m){return a(c,f,u,d,m,e)},gt:function(c,f,u,d,m){return a(c,f,u,d,m,n)},lt:function(c,f,u,d,m){return a(c,f,u,d,m,i)},le:function(c,f,u,d,m){return a(c,f,u,d,m,r)},eq:function(c,f,u,d,m){return a(c,f,u,d,m,s)}}}}),Ra=se({"node_modules/two-product/two-product.js"(o,t){"use strict";t.exports=n;var e=+(Math.pow(2,27)+1);function n(i,r,s){var a=i*r,c=e*i,f=c-i,u=c-f,d=i-u,m=e*r,g=m-r,x=m-g,M=r-x,b=a-u*x,A=b-d*x,E=A-u*M,p=d*M-E;return s?(s[0]=p,s[1]=a,s):[p,a]}}}),Ol=se({"node_modules/robust-sum/robust-sum.js"(o,t){"use strict";t.exports=n;function e(i,r){var s=i+r,a=s-i,c=s-a,f=r-a,u=i-c,d=u+f;return d?[d,s]:[s]}function n(i,r){var s=i.length|0,a=r.length|0;if(s===1&&a===1)return e(i[0],r[0]);var c=s+a,f=new Array(c),u=0,d=0,m=0,g=Math.abs,x=i[d],M=g(x),b=r[m],A=g(b),E,p;M<A?(p=x,d+=1,d<s&&(x=i[d],M=g(x))):(p=b,m+=1,m<a&&(b=r[m],A=g(b))),d<s&&M<A||m>=a?(E=x,d+=1,d<s&&(x=i[d],M=g(x))):(E=b,m+=1,m<a&&(b=r[m],A=g(b)));for(var l=E+p,_=l-E,h=p-_,R=h,w=l,y,v,S,T,C;d<s&&m<a;)M<A?(E=x,d+=1,d<s&&(x=i[d],M=g(x))):(E=b,m+=1,m<a&&(b=r[m],A=g(b))),p=R,l=E+p,_=l-E,h=p-_,h&&(f[u++]=h),y=w+l,v=y-w,S=y-v,T=l-v,C=w-S,R=C+T,w=y;for(;d<s;)E=x,p=R,l=E+p,_=l-E,h=p-_,h&&(f[u++]=h),y=w+l,v=y-w,S=y-v,T=l-v,C=w-S,R=C+T,w=y,d+=1,d<s&&(x=i[d]);for(;m<a;)E=b,p=R,l=E+p,_=l-E,h=p-_,h&&(f[u++]=h),y=w+l,v=y-w,S=y-v,T=l-v,C=w-S,R=C+T,w=y,m+=1,m<a&&(b=r[m]);return R&&(f[u++]=R),w&&(f[u++]=w),u||(f[u++]=0),f.length=u,f}}}),jp=se({"node_modules/two-sum/two-sum.js"(o,t){"use strict";t.exports=e;function e(n,i,r){var s=n+i,a=s-n,c=s-a,f=i-a,u=n-c;return r?(r[0]=u+f,r[1]=s,r):[u+f,s]}}}),zl=se({"node_modules/robust-scale/robust-scale.js"(o,t){"use strict";var e=Ra(),n=jp();t.exports=i;function i(r,s){var a=r.length;if(a===1){var c=e(r[0],s);return c[0]?c:[c[1]]}var f=new Array(2*a),u=[.1,.1],d=[.1,.1],m=0;e(r[0],s,u),u[0]&&(f[m++]=u[0]);for(var g=1;g<a;++g){e(r[g],s,d);var x=u[1];n(x,d[0],u),u[0]&&(f[m++]=u[0]);var M=d[1],b=u[1],A=M+b,E=A-M,p=b-E;u[1]=A,p&&(f[m++]=p)}return u[1]&&(f[m++]=u[1]),m===0&&(f[m++]=0),f.length=m,f}}}),Vl=se({"node_modules/robust-subtract/robust-diff.js"(o,t){"use strict";t.exports=n;function e(i,r){var s=i+r,a=s-i,c=s-a,f=r-a,u=i-c,d=u+f;return d?[d,s]:[s]}function n(i,r){var s=i.length|0,a=r.length|0;if(s===1&&a===1)return e(i[0],-r[0]);var c=s+a,f=new Array(c),u=0,d=0,m=0,g=Math.abs,x=i[d],M=g(x),b=-r[m],A=g(b),E,p;M<A?(p=x,d+=1,d<s&&(x=i[d],M=g(x))):(p=b,m+=1,m<a&&(b=-r[m],A=g(b))),d<s&&M<A||m>=a?(E=x,d+=1,d<s&&(x=i[d],M=g(x))):(E=b,m+=1,m<a&&(b=-r[m],A=g(b)));for(var l=E+p,_=l-E,h=p-_,R=h,w=l,y,v,S,T,C;d<s&&m<a;)M<A?(E=x,d+=1,d<s&&(x=i[d],M=g(x))):(E=b,m+=1,m<a&&(b=-r[m],A=g(b))),p=R,l=E+p,_=l-E,h=p-_,h&&(f[u++]=h),y=w+l,v=y-w,S=y-v,T=l-v,C=w-S,R=C+T,w=y;for(;d<s;)E=x,p=R,l=E+p,_=l-E,h=p-_,h&&(f[u++]=h),y=w+l,v=y-w,S=y-v,T=l-v,C=w-S,R=C+T,w=y,d+=1,d<s&&(x=i[d]);for(;m<a;)E=b,p=R,l=E+p,_=l-E,h=p-_,h&&(f[u++]=h),y=w+l,v=y-w,S=y-v,T=l-v,C=w-S,R=C+T,w=y,m+=1,m<a&&(b=-r[m]);return R&&(f[u++]=R),w&&(f[u++]=w),u||(f[u++]=0),f.length=u,f}}}),tm=se({"node_modules/robust-orientation/orientation.js"(o,t){"use strict";var e=Ra(),n=Ol(),i=zl(),r=Vl(),s=5,a=11102230246251565e-32,c=(3+16*a)*a,f=(7+56*a)*a;function u(l,_,h,R){return function(y,v,S){var T=l(l(_(v[1],S[0]),_(-S[1],v[0])),l(_(y[1],v[0]),_(-v[1],y[0]))),C=l(_(y[1],S[0]),_(-S[1],y[0])),P=R(T,C);return P[P.length-1]}}function d(l,_,h,R){return function(y,v,S,T){var C=l(l(h(l(_(S[1],T[0]),_(-T[1],S[0])),v[2]),l(h(l(_(v[1],T[0]),_(-T[1],v[0])),-S[2]),h(l(_(v[1],S[0]),_(-S[1],v[0])),T[2]))),l(h(l(_(v[1],T[0]),_(-T[1],v[0])),y[2]),l(h(l(_(y[1],T[0]),_(-T[1],y[0])),-v[2]),h(l(_(y[1],v[0]),_(-v[1],y[0])),T[2])))),P=l(l(h(l(_(S[1],T[0]),_(-T[1],S[0])),y[2]),l(h(l(_(y[1],T[0]),_(-T[1],y[0])),-S[2]),h(l(_(y[1],S[0]),_(-S[1],y[0])),T[2]))),l(h(l(_(v[1],S[0]),_(-S[1],v[0])),y[2]),l(h(l(_(y[1],S[0]),_(-S[1],y[0])),-v[2]),h(l(_(y[1],v[0]),_(-v[1],y[0])),S[2])))),D=R(C,P);return D[D.length-1]}}function m(l,_,h,R){return function(y,v,S,T,C){var P=l(l(l(h(l(h(l(_(T[1],C[0]),_(-C[1],T[0])),S[2]),l(h(l(_(S[1],C[0]),_(-C[1],S[0])),-T[2]),h(l(_(S[1],T[0]),_(-T[1],S[0])),C[2]))),v[3]),l(h(l(h(l(_(T[1],C[0]),_(-C[1],T[0])),v[2]),l(h(l(_(v[1],C[0]),_(-C[1],v[0])),-T[2]),h(l(_(v[1],T[0]),_(-T[1],v[0])),C[2]))),-S[3]),h(l(h(l(_(S[1],C[0]),_(-C[1],S[0])),v[2]),l(h(l(_(v[1],C[0]),_(-C[1],v[0])),-S[2]),h(l(_(v[1],S[0]),_(-S[1],v[0])),C[2]))),T[3]))),l(h(l(h(l(_(S[1],T[0]),_(-T[1],S[0])),v[2]),l(h(l(_(v[1],T[0]),_(-T[1],v[0])),-S[2]),h(l(_(v[1],S[0]),_(-S[1],v[0])),T[2]))),-C[3]),l(h(l(h(l(_(T[1],C[0]),_(-C[1],T[0])),v[2]),l(h(l(_(v[1],C[0]),_(-C[1],v[0])),-T[2]),h(l(_(v[1],T[0]),_(-T[1],v[0])),C[2]))),y[3]),h(l(h(l(_(T[1],C[0]),_(-C[1],T[0])),y[2]),l(h(l(_(y[1],C[0]),_(-C[1],y[0])),-T[2]),h(l(_(y[1],T[0]),_(-T[1],y[0])),C[2]))),-v[3])))),l(l(h(l(h(l(_(v[1],C[0]),_(-C[1],v[0])),y[2]),l(h(l(_(y[1],C[0]),_(-C[1],y[0])),-v[2]),h(l(_(y[1],v[0]),_(-v[1],y[0])),C[2]))),T[3]),l(h(l(h(l(_(v[1],T[0]),_(-T[1],v[0])),y[2]),l(h(l(_(y[1],T[0]),_(-T[1],y[0])),-v[2]),h(l(_(y[1],v[0]),_(-v[1],y[0])),T[2]))),-C[3]),h(l(h(l(_(S[1],T[0]),_(-T[1],S[0])),v[2]),l(h(l(_(v[1],T[0]),_(-T[1],v[0])),-S[2]),h(l(_(v[1],S[0]),_(-S[1],v[0])),T[2]))),y[3]))),l(h(l(h(l(_(S[1],T[0]),_(-T[1],S[0])),y[2]),l(h(l(_(y[1],T[0]),_(-T[1],y[0])),-S[2]),h(l(_(y[1],S[0]),_(-S[1],y[0])),T[2]))),-v[3]),l(h(l(h(l(_(v[1],T[0]),_(-T[1],v[0])),y[2]),l(h(l(_(y[1],T[0]),_(-T[1],y[0])),-v[2]),h(l(_(y[1],v[0]),_(-v[1],y[0])),T[2]))),S[3]),h(l(h(l(_(v[1],S[0]),_(-S[1],v[0])),y[2]),l(h(l(_(y[1],S[0]),_(-S[1],y[0])),-v[2]),h(l(_(y[1],v[0]),_(-v[1],y[0])),S[2]))),-T[3]))))),D=l(l(l(h(l(h(l(_(T[1],C[0]),_(-C[1],T[0])),S[2]),l(h(l(_(S[1],C[0]),_(-C[1],S[0])),-T[2]),h(l(_(S[1],T[0]),_(-T[1],S[0])),C[2]))),y[3]),h(l(h(l(_(T[1],C[0]),_(-C[1],T[0])),y[2]),l(h(l(_(y[1],C[0]),_(-C[1],y[0])),-T[2]),h(l(_(y[1],T[0]),_(-T[1],y[0])),C[2]))),-S[3])),l(h(l(h(l(_(S[1],C[0]),_(-C[1],S[0])),y[2]),l(h(l(_(y[1],C[0]),_(-C[1],y[0])),-S[2]),h(l(_(y[1],S[0]),_(-S[1],y[0])),C[2]))),T[3]),h(l(h(l(_(S[1],T[0]),_(-T[1],S[0])),y[2]),l(h(l(_(y[1],T[0]),_(-T[1],y[0])),-S[2]),h(l(_(y[1],S[0]),_(-S[1],y[0])),T[2]))),-C[3]))),l(l(h(l(h(l(_(S[1],C[0]),_(-C[1],S[0])),v[2]),l(h(l(_(v[1],C[0]),_(-C[1],v[0])),-S[2]),h(l(_(v[1],S[0]),_(-S[1],v[0])),C[2]))),y[3]),h(l(h(l(_(S[1],C[0]),_(-C[1],S[0])),y[2]),l(h(l(_(y[1],C[0]),_(-C[1],y[0])),-S[2]),h(l(_(y[1],S[0]),_(-S[1],y[0])),C[2]))),-v[3])),l(h(l(h(l(_(v[1],C[0]),_(-C[1],v[0])),y[2]),l(h(l(_(y[1],C[0]),_(-C[1],y[0])),-v[2]),h(l(_(y[1],v[0]),_(-v[1],y[0])),C[2]))),S[3]),h(l(h(l(_(v[1],S[0]),_(-S[1],v[0])),y[2]),l(h(l(_(y[1],S[0]),_(-S[1],y[0])),-v[2]),h(l(_(y[1],v[0]),_(-v[1],y[0])),S[2]))),-C[3])))),L=R(P,D);return L[L.length-1]}}function g(l){var _=l===3?u:l===4?d:m;return _(n,e,i,r)}var x=g(3),M=g(4),b=[function(){return 0},function(){return 0},function(_,h){return h[0]-_[0]},function(_,h,R){var w=(_[1]-R[1])*(h[0]-R[0]),y=(_[0]-R[0])*(h[1]-R[1]),v=w-y,S;if(w>0){if(y<=0)return v;S=w+y}else if(w<0){if(y>=0)return v;S=-(w+y)}else return v;var T=c*S;return v>=T||v<=-T?v:x(_,h,R)},function(_,h,R,w){var y=_[0]-w[0],v=h[0]-w[0],S=R[0]-w[0],T=_[1]-w[1],C=h[1]-w[1],P=R[1]-w[1],D=_[2]-w[2],L=h[2]-w[2],U=R[2]-w[2],B=v*P,F=S*C,$=S*T,V=y*P,W=y*C,H=v*T,X=D*(B-F)+L*($-V)+U*(W-H),Y=(Math.abs(B)+Math.abs(F))*Math.abs(D)+(Math.abs($)+Math.abs(V))*Math.abs(L)+(Math.abs(W)+Math.abs(H))*Math.abs(U),ct=f*Y;return X>ct||-X>ct?X:M(_,h,R,w)}];function A(l){var _=b[l.length];return _||(_=b[l.length]=g(l.length)),_.apply(void 0,l)}function E(l,_,h,R,w,y,v){return function(T,C,P,D,L){switch(arguments.length){case 0:case 1:return 0;case 2:return R(T,C);case 3:return w(T,C,P);case 4:return y(T,C,P,D);case 5:return v(T,C,P,D,L)}for(var U=new Array(arguments.length),B=0;B<arguments.length;++B)U[B]=arguments[B];return l(U)}}function p(){for(;b.length<=s;)b.push(g(b.length));t.exports=E.apply(void 0,[A].concat(b));for(var l=0;l<=s;++l)t.exports[l]=b[l]}p()}}),em=se({"node_modules/cdt2d/lib/monotone.js"(o,t){"use strict";var e=Es(),n=tm()[3],i=0,r=1,s=2;t.exports=M;function a(b,A,E,p,l){this.a=b,this.b=A,this.idx=E,this.lowerIds=p,this.upperIds=l}function c(b,A,E,p){this.a=b,this.b=A,this.type=E,this.idx=p}function f(b,A){var E=b.a[0]-A.a[0]||b.a[1]-A.a[1]||b.type-A.type;return E||b.type!==i&&(E=n(b.a,b.b,A.b),E)?E:b.idx-A.idx}function u(b,A){return n(b.a,b.b,A)}function d(b,A,E,p,l){for(var _=e.lt(A,p,u),h=e.gt(A,p,u),R=_;R<h;++R){for(var w=A[R],y=w.lowerIds,S=y.length;S>1&&n(E[y[S-2]],E[y[S-1]],p)>0;)b.push([y[S-1],y[S-2],l]),S-=1;y.length=S,y.push(l);for(var v=w.upperIds,S=v.length;S>1&&n(E[v[S-2]],E[v[S-1]],p)<0;)b.push([v[S-2],v[S-1],l]),S-=1;v.length=S,v.push(l)}}function m(b,A){var E;return b.a[0]<A.a[0]?E=n(b.a,b.b,A.a):E=n(A.b,A.a,b.a),E||(A.b[0]<b.b[0]?E=n(b.a,b.b,A.b):E=n(A.b,A.a,b.b),E||b.idx-A.idx)}function g(b,A,E){var p=e.le(b,E,m),l=b[p],_=l.upperIds,h=_[_.length-1];l.upperIds=[h],b.splice(p+1,0,new a(E.a,E.b,E.idx,[h],_))}function x(b,A,E){var p=E.a;E.a=E.b,E.b=p;var l=e.eq(b,E,m),_=b[l],h=b[l-1];h.upperIds=_.upperIds,b.splice(l,1)}function M(b,A){for(var E=b.length,p=A.length,l=[],_=0;_<E;++_)l.push(new c(b[_],null,i,_));for(var _=0;_<p;++_){var h=A[_],R=b[h[0]],w=b[h[1]];R[0]<w[0]?l.push(new c(R,w,s,_),new c(w,R,r,_)):R[0]>w[0]&&l.push(new c(w,R,s,_),new c(R,w,r,_))}l.sort(f);for(var y=l[0].a[0]-(1+Math.abs(l[0].a[0]))*Math.pow(2,-52),v=[new a([y,1],[y,0],-1,[],[],[],[])],S=[],_=0,T=l.length;_<T;++_){var C=l[_],P=C.type;P===i?d(S,v,b,C.a,C.idx):P===s?g(v,b,C):x(v,b,C)}return S}}}),nm=se({"node_modules/cdt2d/lib/triangulation.js"(o,t){"use strict";var e=Es();t.exports=s;function n(a,c){this.stars=a,this.edges=c}var i=n.prototype;function r(a,c,f){for(var u=1,d=a.length;u<d;u+=2)if(a[u-1]===c&&a[u]===f){a[u-1]=a[d-2],a[u]=a[d-1],a.length=d-2;return}}i.isConstraint=(function(){var a=[0,0];function c(f,u){return f[0]-u[0]||f[1]-u[1]}return function(f,u){return a[0]=Math.min(f,u),a[1]=Math.max(f,u),e.eq(this.edges,a,c)>=0}})(),i.removeTriangle=function(a,c,f){var u=this.stars;r(u[a],c,f),r(u[c],f,a),r(u[f],a,c)},i.addTriangle=function(a,c,f){var u=this.stars;u[a].push(c,f),u[c].push(f,a),u[f].push(a,c)},i.opposite=function(a,c){for(var f=this.stars[c],u=1,d=f.length;u<d;u+=2)if(f[u]===a)return f[u-1];return-1},i.flip=function(a,c){var f=this.opposite(a,c),u=this.opposite(c,a);this.removeTriangle(a,c,f),this.removeTriangle(c,a,u),this.addTriangle(a,u,f),this.addTriangle(c,f,u)},i.edges=function(){for(var a=this.stars,c=[],f=0,u=a.length;f<u;++f)for(var d=a[f],m=0,g=d.length;m<g;m+=2)c.push([d[m],d[m+1]]);return c},i.cells=function(){for(var a=this.stars,c=[],f=0,u=a.length;f<u;++f)for(var d=a[f],m=0,g=d.length;m<g;m+=2){var x=d[m],M=d[m+1];f<Math.min(x,M)&&c.push([f,x,M])}return c};function s(a,c){for(var f=new Array(a),u=0;u<a;++u)f[u]=[];return new n(f,c)}}}),im=se({"node_modules/robust-in-sphere/in-sphere.js"(o,t){"use strict";var e=Ra(),n=Ol(),i=Vl(),r=zl(),s=6;function a(p){var l=p===3?d:p===4?m:p===5?g:x;return l(n,i,e,r)}function c(){return 0}function f(){return 0}function u(){return 0}function d(p,l,_,h){function R(w,y,v){var S=_(w[0],w[0]),T=h(S,y[0]),C=h(S,v[0]),P=_(y[0],y[0]),D=h(P,w[0]),L=h(P,v[0]),U=_(v[0],v[0]),B=h(U,w[0]),F=h(U,y[0]),$=p(l(F,L),l(D,T)),V=l(B,C),W=l($,V);return W[W.length-1]}return R}function m(p,l,_,h){function R(w,y,v,S){var T=p(_(w[0],w[0]),_(w[1],w[1])),C=h(T,y[0]),P=h(T,v[0]),D=h(T,S[0]),L=p(_(y[0],y[0]),_(y[1],y[1])),U=h(L,w[0]),B=h(L,v[0]),F=h(L,S[0]),$=p(_(v[0],v[0]),_(v[1],v[1])),V=h($,w[0]),W=h($,y[0]),H=h($,S[0]),X=p(_(S[0],S[0]),_(S[1],S[1])),Y=h(X,w[0]),ct=h(X,y[0]),et=h(X,v[0]),nt=p(p(h(l(et,H),y[1]),p(h(l(ct,F),-v[1]),h(l(W,B),S[1]))),p(h(l(ct,F),w[1]),p(h(l(Y,D),-y[1]),h(l(U,C),S[1])))),Q=p(p(h(l(et,H),w[1]),p(h(l(Y,D),-v[1]),h(l(V,P),S[1]))),p(h(l(W,B),w[1]),p(h(l(V,P),-y[1]),h(l(U,C),v[1])))),it=l(nt,Q);return it[it.length-1]}return R}function g(p,l,_,h){function R(w,y,v,S,T){var C=p(_(w[0],w[0]),p(_(w[1],w[1]),_(w[2],w[2]))),P=h(C,y[0]),D=h(C,v[0]),L=h(C,S[0]),U=h(C,T[0]),B=p(_(y[0],y[0]),p(_(y[1],y[1]),_(y[2],y[2]))),F=h(B,w[0]),$=h(B,v[0]),V=h(B,S[0]),W=h(B,T[0]),H=p(_(v[0],v[0]),p(_(v[1],v[1]),_(v[2],v[2]))),X=h(H,w[0]),Y=h(H,y[0]),ct=h(H,S[0]),et=h(H,T[0]),nt=p(_(S[0],S[0]),p(_(S[1],S[1]),_(S[2],S[2]))),Q=h(nt,w[0]),it=h(nt,y[0]),lt=h(nt,v[0]),yt=h(nt,T[0]),st=p(_(T[0],T[0]),p(_(T[1],T[1]),_(T[2],T[2]))),N=h(st,w[0]),O=h(st,y[0]),z=h(st,v[0]),k=h(st,S[0]),J=p(p(p(h(p(h(l(k,yt),v[1]),p(h(l(z,et),-S[1]),h(l(lt,ct),T[1]))),y[2]),p(h(p(h(l(k,yt),y[1]),p(h(l(O,W),-S[1]),h(l(it,V),T[1]))),-v[2]),h(p(h(l(z,et),y[1]),p(h(l(O,W),-v[1]),h(l(Y,$),T[1]))),S[2]))),p(h(p(h(l(lt,ct),y[1]),p(h(l(it,V),-v[1]),h(l(Y,$),S[1]))),-T[2]),p(h(p(h(l(k,yt),y[1]),p(h(l(O,W),-S[1]),h(l(it,V),T[1]))),w[2]),h(p(h(l(k,yt),w[1]),p(h(l(N,U),-S[1]),h(l(Q,L),T[1]))),-y[2])))),p(p(h(p(h(l(O,W),w[1]),p(h(l(N,U),-y[1]),h(l(F,P),T[1]))),S[2]),p(h(p(h(l(it,V),w[1]),p(h(l(Q,L),-y[1]),h(l(F,P),S[1]))),-T[2]),h(p(h(l(lt,ct),y[1]),p(h(l(it,V),-v[1]),h(l(Y,$),S[1]))),w[2]))),p(h(p(h(l(lt,ct),w[1]),p(h(l(Q,L),-v[1]),h(l(X,D),S[1]))),-y[2]),p(h(p(h(l(it,V),w[1]),p(h(l(Q,L),-y[1]),h(l(F,P),S[1]))),v[2]),h(p(h(l(Y,$),w[1]),p(h(l(X,D),-y[1]),h(l(F,P),v[1]))),-S[2]))))),K=p(p(p(h(p(h(l(k,yt),v[1]),p(h(l(z,et),-S[1]),h(l(lt,ct),T[1]))),w[2]),h(p(h(l(k,yt),w[1]),p(h(l(N,U),-S[1]),h(l(Q,L),T[1]))),-v[2])),p(h(p(h(l(z,et),w[1]),p(h(l(N,U),-v[1]),h(l(X,D),T[1]))),S[2]),h(p(h(l(lt,ct),w[1]),p(h(l(Q,L),-v[1]),h(l(X,D),S[1]))),-T[2]))),p(p(h(p(h(l(z,et),y[1]),p(h(l(O,W),-v[1]),h(l(Y,$),T[1]))),w[2]),h(p(h(l(z,et),w[1]),p(h(l(N,U),-v[1]),h(l(X,D),T[1]))),-y[2])),p(h(p(h(l(O,W),w[1]),p(h(l(N,U),-y[1]),h(l(F,P),T[1]))),v[2]),h(p(h(l(Y,$),w[1]),p(h(l(X,D),-y[1]),h(l(F,P),v[1]))),-T[2])))),Z=l(J,K);return Z[Z.length-1]}return R}function x(p,l,_,h){function R(w,y,v,S,T,C){var P=p(p(_(w[0],w[0]),_(w[1],w[1])),p(_(w[2],w[2]),_(w[3],w[3]))),D=h(P,y[0]),L=h(P,v[0]),U=h(P,S[0]),B=h(P,T[0]),F=h(P,C[0]),$=p(p(_(y[0],y[0]),_(y[1],y[1])),p(_(y[2],y[2]),_(y[3],y[3]))),V=h($,w[0]),W=h($,v[0]),H=h($,S[0]),X=h($,T[0]),Y=h($,C[0]),ct=p(p(_(v[0],v[0]),_(v[1],v[1])),p(_(v[2],v[2]),_(v[3],v[3]))),et=h(ct,w[0]),nt=h(ct,y[0]),Q=h(ct,S[0]),it=h(ct,T[0]),lt=h(ct,C[0]),yt=p(p(_(S[0],S[0]),_(S[1],S[1])),p(_(S[2],S[2]),_(S[3],S[3]))),st=h(yt,w[0]),N=h(yt,y[0]),O=h(yt,v[0]),z=h(yt,T[0]),k=h(yt,C[0]),J=p(p(_(T[0],T[0]),_(T[1],T[1])),p(_(T[2],T[2]),_(T[3],T[3]))),K=h(J,w[0]),Z=h(J,y[0]),j=h(J,v[0]),tt=h(J,S[0]),rt=h(J,C[0]),Ot=p(p(_(C[0],C[0]),_(C[1],C[1])),p(_(C[2],C[2]),_(C[3],C[3]))),mt=h(Ot,w[0]),ht=h(Ot,y[0]),bt=h(Ot,v[0]),wt=h(Ot,S[0]),Tt=h(Ot,T[0]),Xs=p(p(p(h(p(p(h(p(h(l(Tt,rt),S[1]),p(h(l(wt,k),-T[1]),h(l(tt,z),C[1]))),v[2]),h(p(h(l(Tt,rt),v[1]),p(h(l(bt,lt),-T[1]),h(l(j,it),C[1]))),-S[2])),p(h(p(h(l(wt,k),v[1]),p(h(l(bt,lt),-S[1]),h(l(O,Q),C[1]))),T[2]),h(p(h(l(tt,z),v[1]),p(h(l(j,it),-S[1]),h(l(O,Q),T[1]))),-C[2]))),y[3]),p(h(p(p(h(p(h(l(Tt,rt),S[1]),p(h(l(wt,k),-T[1]),h(l(tt,z),C[1]))),y[2]),h(p(h(l(Tt,rt),y[1]),p(h(l(ht,Y),-T[1]),h(l(Z,X),C[1]))),-S[2])),p(h(p(h(l(wt,k),y[1]),p(h(l(ht,Y),-S[1]),h(l(N,H),C[1]))),T[2]),h(p(h(l(tt,z),y[1]),p(h(l(Z,X),-S[1]),h(l(N,H),T[1]))),-C[2]))),-v[3]),h(p(p(h(p(h(l(Tt,rt),v[1]),p(h(l(bt,lt),-T[1]),h(l(j,it),C[1]))),y[2]),h(p(h(l(Tt,rt),y[1]),p(h(l(ht,Y),-T[1]),h(l(Z,X),C[1]))),-v[2])),p(h(p(h(l(bt,lt),y[1]),p(h(l(ht,Y),-v[1]),h(l(nt,W),C[1]))),T[2]),h(p(h(l(j,it),y[1]),p(h(l(Z,X),-v[1]),h(l(nt,W),T[1]))),-C[2]))),S[3]))),p(p(h(p(p(h(p(h(l(wt,k),v[1]),p(h(l(bt,lt),-S[1]),h(l(O,Q),C[1]))),y[2]),h(p(h(l(wt,k),y[1]),p(h(l(ht,Y),-S[1]),h(l(N,H),C[1]))),-v[2])),p(h(p(h(l(bt,lt),y[1]),p(h(l(ht,Y),-v[1]),h(l(nt,W),C[1]))),S[2]),h(p(h(l(O,Q),y[1]),p(h(l(N,H),-v[1]),h(l(nt,W),S[1]))),-C[2]))),-T[3]),h(p(p(h(p(h(l(tt,z),v[1]),p(h(l(j,it),-S[1]),h(l(O,Q),T[1]))),y[2]),h(p(h(l(tt,z),y[1]),p(h(l(Z,X),-S[1]),h(l(N,H),T[1]))),-v[2])),p(h(p(h(l(j,it),y[1]),p(h(l(Z,X),-v[1]),h(l(nt,W),T[1]))),S[2]),h(p(h(l(O,Q),y[1]),p(h(l(N,H),-v[1]),h(l(nt,W),S[1]))),-T[2]))),C[3])),p(h(p(p(h(p(h(l(Tt,rt),S[1]),p(h(l(wt,k),-T[1]),h(l(tt,z),C[1]))),y[2]),h(p(h(l(Tt,rt),y[1]),p(h(l(ht,Y),-T[1]),h(l(Z,X),C[1]))),-S[2])),p(h(p(h(l(wt,k),y[1]),p(h(l(ht,Y),-S[1]),h(l(N,H),C[1]))),T[2]),h(p(h(l(tt,z),y[1]),p(h(l(Z,X),-S[1]),h(l(N,H),T[1]))),-C[2]))),w[3]),h(p(p(h(p(h(l(Tt,rt),S[1]),p(h(l(wt,k),-T[1]),h(l(tt,z),C[1]))),w[2]),h(p(h(l(Tt,rt),w[1]),p(h(l(mt,F),-T[1]),h(l(K,B),C[1]))),-S[2])),p(h(p(h(l(wt,k),w[1]),p(h(l(mt,F),-S[1]),h(l(st,U),C[1]))),T[2]),h(p(h(l(tt,z),w[1]),p(h(l(K,B),-S[1]),h(l(st,U),T[1]))),-C[2]))),-y[3])))),p(p(p(h(p(p(h(p(h(l(Tt,rt),y[1]),p(h(l(ht,Y),-T[1]),h(l(Z,X),C[1]))),w[2]),h(p(h(l(Tt,rt),w[1]),p(h(l(mt,F),-T[1]),h(l(K,B),C[1]))),-y[2])),p(h(p(h(l(ht,Y),w[1]),p(h(l(mt,F),-y[1]),h(l(V,D),C[1]))),T[2]),h(p(h(l(Z,X),w[1]),p(h(l(K,B),-y[1]),h(l(V,D),T[1]))),-C[2]))),S[3]),h(p(p(h(p(h(l(wt,k),y[1]),p(h(l(ht,Y),-S[1]),h(l(N,H),C[1]))),w[2]),h(p(h(l(wt,k),w[1]),p(h(l(mt,F),-S[1]),h(l(st,U),C[1]))),-y[2])),p(h(p(h(l(ht,Y),w[1]),p(h(l(mt,F),-y[1]),h(l(V,D),C[1]))),S[2]),h(p(h(l(N,H),w[1]),p(h(l(st,U),-y[1]),h(l(V,D),S[1]))),-C[2]))),-T[3])),p(h(p(p(h(p(h(l(tt,z),y[1]),p(h(l(Z,X),-S[1]),h(l(N,H),T[1]))),w[2]),h(p(h(l(tt,z),w[1]),p(h(l(K,B),-S[1]),h(l(st,U),T[1]))),-y[2])),p(h(p(h(l(Z,X),w[1]),p(h(l(K,B),-y[1]),h(l(V,D),T[1]))),S[2]),h(p(h(l(N,H),w[1]),p(h(l(st,U),-y[1]),h(l(V,D),S[1]))),-T[2]))),C[3]),h(p(p(h(p(h(l(wt,k),v[1]),p(h(l(bt,lt),-S[1]),h(l(O,Q),C[1]))),y[2]),h(p(h(l(wt,k),y[1]),p(h(l(ht,Y),-S[1]),h(l(N,H),C[1]))),-v[2])),p(h(p(h(l(bt,lt),y[1]),p(h(l(ht,Y),-v[1]),h(l(nt,W),C[1]))),S[2]),h(p(h(l(O,Q),y[1]),p(h(l(N,H),-v[1]),h(l(nt,W),S[1]))),-C[2]))),w[3]))),p(p(h(p(p(h(p(h(l(wt,k),v[1]),p(h(l(bt,lt),-S[1]),h(l(O,Q),C[1]))),w[2]),h(p(h(l(wt,k),w[1]),p(h(l(mt,F),-S[1]),h(l(st,U),C[1]))),-v[2])),p(h(p(h(l(bt,lt),w[1]),p(h(l(mt,F),-v[1]),h(l(et,L),C[1]))),S[2]),h(p(h(l(O,Q),w[1]),p(h(l(st,U),-v[1]),h(l(et,L),S[1]))),-C[2]))),-y[3]),h(p(p(h(p(h(l(wt,k),y[1]),p(h(l(ht,Y),-S[1]),h(l(N,H),C[1]))),w[2]),h(p(h(l(wt,k),w[1]),p(h(l(mt,F),-S[1]),h(l(st,U),C[1]))),-y[2])),p(h(p(h(l(ht,Y),w[1]),p(h(l(mt,F),-y[1]),h(l(V,D),C[1]))),S[2]),h(p(h(l(N,H),w[1]),p(h(l(st,U),-y[1]),h(l(V,D),S[1]))),-C[2]))),v[3])),p(h(p(p(h(p(h(l(bt,lt),y[1]),p(h(l(ht,Y),-v[1]),h(l(nt,W),C[1]))),w[2]),h(p(h(l(bt,lt),w[1]),p(h(l(mt,F),-v[1]),h(l(et,L),C[1]))),-y[2])),p(h(p(h(l(ht,Y),w[1]),p(h(l(mt,F),-y[1]),h(l(V,D),C[1]))),v[2]),h(p(h(l(nt,W),w[1]),p(h(l(et,L),-y[1]),h(l(V,D),v[1]))),-C[2]))),-S[3]),h(p(p(h(p(h(l(O,Q),y[1]),p(h(l(N,H),-v[1]),h(l(nt,W),S[1]))),w[2]),h(p(h(l(O,Q),w[1]),p(h(l(st,U),-v[1]),h(l(et,L),S[1]))),-y[2])),p(h(p(h(l(N,H),w[1]),p(h(l(st,U),-y[1]),h(l(V,D),S[1]))),v[2]),h(p(h(l(nt,W),w[1]),p(h(l(et,L),-y[1]),h(l(V,D),v[1]))),-S[2]))),C[3]))))),qs=p(p(p(h(p(p(h(p(h(l(Tt,rt),S[1]),p(h(l(wt,k),-T[1]),h(l(tt,z),C[1]))),v[2]),h(p(h(l(Tt,rt),v[1]),p(h(l(bt,lt),-T[1]),h(l(j,it),C[1]))),-S[2])),p(h(p(h(l(wt,k),v[1]),p(h(l(bt,lt),-S[1]),h(l(O,Q),C[1]))),T[2]),h(p(h(l(tt,z),v[1]),p(h(l(j,it),-S[1]),h(l(O,Q),T[1]))),-C[2]))),w[3]),p(h(p(p(h(p(h(l(Tt,rt),S[1]),p(h(l(wt,k),-T[1]),h(l(tt,z),C[1]))),w[2]),h(p(h(l(Tt,rt),w[1]),p(h(l(mt,F),-T[1]),h(l(K,B),C[1]))),-S[2])),p(h(p(h(l(wt,k),w[1]),p(h(l(mt,F),-S[1]),h(l(st,U),C[1]))),T[2]),h(p(h(l(tt,z),w[1]),p(h(l(K,B),-S[1]),h(l(st,U),T[1]))),-C[2]))),-v[3]),h(p(p(h(p(h(l(Tt,rt),v[1]),p(h(l(bt,lt),-T[1]),h(l(j,it),C[1]))),w[2]),h(p(h(l(Tt,rt),w[1]),p(h(l(mt,F),-T[1]),h(l(K,B),C[1]))),-v[2])),p(h(p(h(l(bt,lt),w[1]),p(h(l(mt,F),-v[1]),h(l(et,L),C[1]))),T[2]),h(p(h(l(j,it),w[1]),p(h(l(K,B),-v[1]),h(l(et,L),T[1]))),-C[2]))),S[3]))),p(p(h(p(p(h(p(h(l(wt,k),v[1]),p(h(l(bt,lt),-S[1]),h(l(O,Q),C[1]))),w[2]),h(p(h(l(wt,k),w[1]),p(h(l(mt,F),-S[1]),h(l(st,U),C[1]))),-v[2])),p(h(p(h(l(bt,lt),w[1]),p(h(l(mt,F),-v[1]),h(l(et,L),C[1]))),S[2]),h(p(h(l(O,Q),w[1]),p(h(l(st,U),-v[1]),h(l(et,L),S[1]))),-C[2]))),-T[3]),h(p(p(h(p(h(l(tt,z),v[1]),p(h(l(j,it),-S[1]),h(l(O,Q),T[1]))),w[2]),h(p(h(l(tt,z),w[1]),p(h(l(K,B),-S[1]),h(l(st,U),T[1]))),-v[2])),p(h(p(h(l(j,it),w[1]),p(h(l(K,B),-v[1]),h(l(et,L),T[1]))),S[2]),h(p(h(l(O,Q),w[1]),p(h(l(st,U),-v[1]),h(l(et,L),S[1]))),-T[2]))),C[3])),p(h(p(p(h(p(h(l(Tt,rt),v[1]),p(h(l(bt,lt),-T[1]),h(l(j,it),C[1]))),y[2]),h(p(h(l(Tt,rt),y[1]),p(h(l(ht,Y),-T[1]),h(l(Z,X),C[1]))),-v[2])),p(h(p(h(l(bt,lt),y[1]),p(h(l(ht,Y),-v[1]),h(l(nt,W),C[1]))),T[2]),h(p(h(l(j,it),y[1]),p(h(l(Z,X),-v[1]),h(l(nt,W),T[1]))),-C[2]))),w[3]),h(p(p(h(p(h(l(Tt,rt),v[1]),p(h(l(bt,lt),-T[1]),h(l(j,it),C[1]))),w[2]),h(p(h(l(Tt,rt),w[1]),p(h(l(mt,F),-T[1]),h(l(K,B),C[1]))),-v[2])),p(h(p(h(l(bt,lt),w[1]),p(h(l(mt,F),-v[1]),h(l(et,L),C[1]))),T[2]),h(p(h(l(j,it),w[1]),p(h(l(K,B),-v[1]),h(l(et,L),T[1]))),-C[2]))),-y[3])))),p(p(p(h(p(p(h(p(h(l(Tt,rt),y[1]),p(h(l(ht,Y),-T[1]),h(l(Z,X),C[1]))),w[2]),h(p(h(l(Tt,rt),w[1]),p(h(l(mt,F),-T[1]),h(l(K,B),C[1]))),-y[2])),p(h(p(h(l(ht,Y),w[1]),p(h(l(mt,F),-y[1]),h(l(V,D),C[1]))),T[2]),h(p(h(l(Z,X),w[1]),p(h(l(K,B),-y[1]),h(l(V,D),T[1]))),-C[2]))),v[3]),h(p(p(h(p(h(l(bt,lt),y[1]),p(h(l(ht,Y),-v[1]),h(l(nt,W),C[1]))),w[2]),h(p(h(l(bt,lt),w[1]),p(h(l(mt,F),-v[1]),h(l(et,L),C[1]))),-y[2])),p(h(p(h(l(ht,Y),w[1]),p(h(l(mt,F),-y[1]),h(l(V,D),C[1]))),v[2]),h(p(h(l(nt,W),w[1]),p(h(l(et,L),-y[1]),h(l(V,D),v[1]))),-C[2]))),-T[3])),p(h(p(p(h(p(h(l(j,it),y[1]),p(h(l(Z,X),-v[1]),h(l(nt,W),T[1]))),w[2]),h(p(h(l(j,it),w[1]),p(h(l(K,B),-v[1]),h(l(et,L),T[1]))),-y[2])),p(h(p(h(l(Z,X),w[1]),p(h(l(K,B),-y[1]),h(l(V,D),T[1]))),v[2]),h(p(h(l(nt,W),w[1]),p(h(l(et,L),-y[1]),h(l(V,D),v[1]))),-T[2]))),C[3]),h(p(p(h(p(h(l(tt,z),v[1]),p(h(l(j,it),-S[1]),h(l(O,Q),T[1]))),y[2]),h(p(h(l(tt,z),y[1]),p(h(l(Z,X),-S[1]),h(l(N,H),T[1]))),-v[2])),p(h(p(h(l(j,it),y[1]),p(h(l(Z,X),-v[1]),h(l(nt,W),T[1]))),S[2]),h(p(h(l(O,Q),y[1]),p(h(l(N,H),-v[1]),h(l(nt,W),S[1]))),-T[2]))),w[3]))),p(p(h(p(p(h(p(h(l(tt,z),v[1]),p(h(l(j,it),-S[1]),h(l(O,Q),T[1]))),w[2]),h(p(h(l(tt,z),w[1]),p(h(l(K,B),-S[1]),h(l(st,U),T[1]))),-v[2])),p(h(p(h(l(j,it),w[1]),p(h(l(K,B),-v[1]),h(l(et,L),T[1]))),S[2]),h(p(h(l(O,Q),w[1]),p(h(l(st,U),-v[1]),h(l(et,L),S[1]))),-T[2]))),-y[3]),h(p(p(h(p(h(l(tt,z),y[1]),p(h(l(Z,X),-S[1]),h(l(N,H),T[1]))),w[2]),h(p(h(l(tt,z),w[1]),p(h(l(K,B),-S[1]),h(l(st,U),T[1]))),-y[2])),p(h(p(h(l(Z,X),w[1]),p(h(l(K,B),-y[1]),h(l(V,D),T[1]))),S[2]),h(p(h(l(N,H),w[1]),p(h(l(st,U),-y[1]),h(l(V,D),S[1]))),-T[2]))),v[3])),p(h(p(p(h(p(h(l(j,it),y[1]),p(h(l(Z,X),-v[1]),h(l(nt,W),T[1]))),w[2]),h(p(h(l(j,it),w[1]),p(h(l(K,B),-v[1]),h(l(et,L),T[1]))),-y[2])),p(h(p(h(l(Z,X),w[1]),p(h(l(K,B),-y[1]),h(l(V,D),T[1]))),v[2]),h(p(h(l(nt,W),w[1]),p(h(l(et,L),-y[1]),h(l(V,D),v[1]))),-T[2]))),-S[3]),h(p(p(h(p(h(l(O,Q),y[1]),p(h(l(N,H),-v[1]),h(l(nt,W),S[1]))),w[2]),h(p(h(l(O,Q),w[1]),p(h(l(st,U),-v[1]),h(l(et,L),S[1]))),-y[2])),p(h(p(h(l(N,H),w[1]),p(h(l(st,U),-y[1]),h(l(V,D),S[1]))),v[2]),h(p(h(l(nt,W),w[1]),p(h(l(et,L),-y[1]),h(l(V,D),v[1]))),-S[2]))),T[3]))))),fi=l(Xs,qs);return fi[fi.length-1]}return R}var M=[c,f,u];function b(p){var l=M[p.length];return l||(l=M[p.length]=a(p.length)),l.apply(void 0,p)}function A(p,l,_,h,R,w,y,v){function S(T,C,P,D,L,U){switch(arguments.length){case 0:case 1:return 0;case 2:return h(T,C);case 3:return R(T,C,P);case 4:return w(T,C,P,D);case 5:return y(T,C,P,D,L);case 6:return v(T,C,P,D,L,U)}for(var B=new Array(arguments.length),F=0;F<arguments.length;++F)B[F]=arguments[F];return p(B)}return S}function E(){for(;M.length<=s;)M.push(a(M.length));t.exports=A.apply(void 0,[b].concat(M));for(var p=0;p<=s;++p)t.exports[p]=M[p]}E()}}),rm=se({"node_modules/cdt2d/lib/delaunay.js"(o,t){"use strict";var e=im()[4],n=Es();t.exports=r;function i(s,a,c,f,u,d){var m=a.opposite(f,u);if(!(m<0)){if(u<f){var g=f;f=u,u=g,g=d,d=m,m=g}a.isConstraint(f,u)||e(s[f],s[u],s[d],s[m])<0&&c.push(f,u)}}function r(s,a){for(var c=[],f=s.length,u=a.stars,d=0;d<f;++d)for(var m=u[d],g=1;g<m.length;g+=2){var x=m[g];if(!(x<d)&&!a.isConstraint(d,x)){for(var M=m[g-1],b=-1,A=1;A<m.length;A+=2)if(m[A-1]===x){b=m[A];break}b<0||e(s[d],s[x],s[M],s[b])<0&&c.push(d,x)}}for(;c.length>0;){for(var x=c.pop(),d=c.pop(),M=-1,b=-1,m=u[d],E=1;E<m.length;E+=2){var p=m[E-1],l=m[E];p===x?b=l:l===x&&(M=p)}M<0||b<0||e(s[d],s[x],s[M],s[b])>=0||(a.flip(d,x),i(s,a,c,M,d,b),i(s,a,c,d,b,M),i(s,a,c,b,x,M),i(s,a,c,x,M,b))}}}}),sm=se({"node_modules/cdt2d/lib/filter.js"(o,t){"use strict";var e=Es();t.exports=c;function n(f,u,d,m,g,x,M){this.cells=f,this.neighbor=u,this.flags=m,this.constraint=d,this.active=g,this.next=x,this.boundary=M}var i=n.prototype;function r(f,u){return f[0]-u[0]||f[1]-u[1]||f[2]-u[2]}i.locate=(function(){var f=[0,0,0];return function(u,d,m){var g=u,x=d,M=m;return d<m?d<u&&(g=d,x=m,M=u):m<u&&(g=m,x=u,M=d),g<0?-1:(f[0]=g,f[1]=x,f[2]=M,e.eq(this.cells,f,r))}})();function s(f,u){for(var d=f.cells(),m=d.length,g=0;g<m;++g){var x=d[g],M=x[0],b=x[1],A=x[2];b<A?b<M&&(x[0]=b,x[1]=A,x[2]=M):A<M&&(x[0]=A,x[1]=M,x[2]=b)}d.sort(r);for(var E=new Array(m),g=0;g<E.length;++g)E[g]=0;var p=[],l=[],_=new Array(3*m),h=new Array(3*m),R=null;u&&(R=[]);for(var w=new n(d,_,h,E,p,l,R),g=0;g<m;++g)for(var x=d[g],y=0;y<3;++y){var M=x[y],b=x[(y+1)%3],v=_[3*g+y]=w.locate(b,M,f.opposite(b,M)),S=h[3*g+y]=f.isConstraint(M,b);v<0&&(S?l.push(g):(p.push(g),E[g]=1),u&&R.push([b,M,-1]))}return w}function a(f,u,d){for(var m=0,g=0;g<f.length;++g)u[g]===d&&(f[m++]=f[g]);return f.length=m,f}function c(f,u,d){var m=s(f,d);if(u===0)return d?m.cells.concat(m.boundary):m.cells;for(var g=1,x=m.active,M=m.next,b=m.flags,A=m.cells,E=m.constraint,p=m.neighbor;x.length>0||M.length>0;){for(;x.length>0;){var l=x.pop();if(b[l]!==-g){b[l]=g;for(var _=A[l],h=0;h<3;++h){var R=p[3*l+h];R>=0&&b[R]===0&&(E[3*l+h]?M.push(R):(x.push(R),b[R]=g))}}}var w=M;M=x,x=w,M.length=0,g=-g}var y=a(A,b,u);return d?y.concat(m.boundary):y}}}),om=se({"node_modules/cdt2d/cdt2d.js"(o,t){var e=em(),n=nm(),i=rm(),r=sm();t.exports=u;function s(d){return[Math.min(d[0],d[1]),Math.max(d[0],d[1])]}function a(d,m){return d[0]-m[0]||d[1]-m[1]}function c(d){return d.map(s).sort(a)}function f(d,m,g){return m in d?d[m]:g}function u(d,m,g){Array.isArray(m)?(g=g||{},m=m||[]):(g=m||{},m=[]);var x=!!f(g,"delaunay",!0),M=!!f(g,"interior",!0),b=!!f(g,"exterior",!0),A=!!f(g,"infinity",!1);if(!M&&!b||d.length===0)return[];var E=e(d,m);if(x||M!==b||A){for(var p=n(d.length,c(m)),l=0;l<E.length;++l){var _=E[l];p.addTriangle(_[0],_[1],_[2])}return x&&i(d,p),b?M?A?r(p,0,A):p.cells():r(p,1,A):r(p,-1)}else return E}}}),kl=om();var oe=class{constructor(t){this.createFn=t,this._pool=[],this._index=0}getInstance(){return this._index>=this._pool.length&&this._pool.push(this.createFn()),this._pool[this._index++]}clear(){this._index=0}reset(){this._pool.length=0,this._index=0}};var Hl=1e-16,am=1e-16,_n=new I,Gl=new I,Wl=new oe(()=>({param:0,index:0})),cm=new oe(()=>new I);function lm(o,t,e,n){Wl.clear(),t.length=0,e.length=0;for(let f=0,u=o.length;f<u;f++){let d=o[f];c(d.start),c(d.end)}for(let f=0,u=o.length;f<u;f++){let d=o[f];for(let m=f+1;m<u;m++){let g=o[m];d.distanceSqToLine3(g,_n,Gl)<Hl*n&&c(Gl)}}let i=[];for(let f=0,u=o.length;f<u;f++){i.length=0;let d=o[f];for(let m=0,g=t.length;m<g;m++){let x=t[m],M=d.closestPointToPointParameter(x,!0);if(d.at(M,_n),x.distanceToSquared(_n)<Hl*n){let b=Wl.getInstance();b.param=M,b.index=m,i.push(b)}}i.sort(a);for(let m=0,g=i.length-1;m<g;m++){let x=i[m].index,M=i[m+1].index;x!==M&&e.push([x,M])}}let r=new Set,s=0;for(let f=0,u=e.length;f<u;f++){let d=e[f],m=Math.min(d[0],d[1]),g=Math.max(d[0],d[1]),x=m+","+g;r.has(x)||(r.add(x),e[s++]=d)}e.length=s;function a(f,u){return f.param-u.param}function c(f){for(let u=0;u<t.length;u++){let d=t[u];if(f===d||f.distanceToSquared(d)<am*n)return u}return t.push(cm.getInstance().copy(f)),t.length-1}}var $i=class{constructor(){this.trianglePool=new oe(()=>new Lt),this.linePool=new oe(()=>new Mt),this.triangles=[],this.triangleIndices=[],this.constrainedEdges=[],this.triangleConnectivity=[],this.normal=new I,this.projOrigin=new I,this.projU=new I,this.projV=new I,this.baseTri=new Lt,this.baseIndices=new Array(3)}initialize(t,e=null,n=null,i=null){this.reset();let{normal:r,baseTri:s,projU:a,projV:c,projOrigin:f,constrainedEdges:u,linePool:d,baseIndices:m}=this;t.getNormal(r),s.copy(t),s.update(),m[0]=e,m[1]=n,m[2]=i,u.length=0;let g=d.getInstance();g.start.copy(s.a),g.end.copy(s.b);let x=d.getInstance();x.start.copy(s.b),x.end.copy(s.c);let M=d.getInstance();M.start.copy(s.c),M.end.copy(s.a),u.push(g,x,M),f.copy(s.a),a.subVectors(s.b,s.a).normalize(),c.crossVectors(r,a).normalize()}addConstraintEdge(t){let{constrainedEdges:e,linePool:n}=this,i=n.getInstance().copy(t);e.push(i)}_to2D(t,e){let{projOrigin:n,projU:i,projV:r}=this;return _n.subVectors(t,n),e.set(_n.dot(i),_n.dot(r),0)}_from2D(t,e,n){let{projOrigin:i,projU:r,projV:s}=this;return n.copy(i).addScaledVector(r,t).addScaledVector(s,e),n}triangulate(){let{triangles:t,trianglePool:e,triangleConnectivity:n,triangleIndices:i,linePool:r,baseTri:s,constrainedEdges:a,baseIndices:c}=this;t.length=0,e.clear();let f=[];for(let A=0,E=a.length;A<E;A++){let p=a[A],l=r.getInstance();this._to2D(p.start,l.start),this._to2D(p.end,l.end),f.push(l)}let u=0;for(let A=0;A<3;A++){let E=this._to2D(s.points[A],_n);u=Math.max(u,Math.abs(E.x),Math.abs(E.y))}let d=[],m=[];lm(f,d,m,u);let g=[];for(let A=0,E=d.length;A<E;A++){let p=d[A];g.push([p.x,p.y])}let x=kl(g,m,{exterior:!1}),M=new Map;for(let A=0,E=m.length;A<E;A++){let p=m[A];M.set(`${p[0]}_${p[1]}`,-1),M.set(`${p[1]}_${p[0]}`,-1)}let b=`${c[0]}_${c[1]}_${c[2]}_`;for(let A=0,E=x.length;A<E;A++){let p=x[A],[l,_,h]=p,R=e.getInstance();this._from2D(g[l][0],g[l][1],R.a),this._from2D(g[_][0],g[_][1],R.b),this._from2D(g[h][0],g[h][1],R.c),t.push(R);let w=[];n.push(w);let y=[];i.push(y);for(let v=0;v<3;v++){let S=p[v];y.push(S<3?c[S]:b+S);let T=p[(v+1)%3],C=`${S}_${T}`;if(M.has(C)){let P=M.get(C);P!==-1&&(w.push(P),n[P].push(A))}else{let P=`${T}_${S}`;M.set(P,A)}}}}reset(){this.trianglePool.clear(),this.linePool.clear(),this.triangles.length=0,this.triangleIndices.length=0,this.triangleConnectivity.length=0,this.constrainedEdges.length=0}};var hm=1e-14,Ia=new I,Xl=new I,ql=new I;function Me(o,t=hm){Ia.subVectors(o.b,o.a),Xl.subVectors(o.c,o.a),ql.subVectors(o.b,o.c);let e=Ia.angleTo(Xl),n=Ia.angleTo(ql),i=Math.PI-e-n;return Math.abs(e)<t||Math.abs(n)<t||Math.abs(i)<t||o.a.distanceToSquared(o.b)<t||o.a.distanceToSquared(o.c)<t||o.b.distanceToSquared(o.c)<t}var Pa=1e-10,Ji=1e-10,Fe=new Mt,Ft=new Mt,Be=new I,Yl=new I,Zl=new I,As=new xe,Da=new Lt,Ki=class{constructor(){this.trianglePool=new oe(()=>new Et),this.triangles=[],this.normal=new I}initialize(t){this.reset();let{triangles:e,trianglePool:n,normal:i}=this;if(Array.isArray(t))for(let r=0,s=t.length;r<s;r++){let a=t[r];if(r===0)a.getNormal(i);else if(Math.abs(1-a.getNormal(Be).dot(i))>Pa)throw new Error("Triangle Splitter: Cannot initialize with triangles that have different normals.");let c=n.getInstance();c.copy(a),e.push(c)}else{t.getNormal(i);let r=n.getInstance();r.copy(t),e.push(r)}}splitByTriangle(t,e){let{triangles:n}=this;if(e){for(let r=0,s=n.length;r<s;r++){let a=n[r];a.coplanarCount=0}let i=[t.a,t.b,t.c];for(let r=0;r<3;r++){let s=(r+1)%3,a=i[r],c=i[s];t.getNormal(Yl).normalize(),Be.subVectors(c,a).normalize(),Zl.crossVectors(Yl,Be),As.setFromNormalAndCoplanarPoint(Zl,a),this.splitByPlane(As,t)}}else t.getPlane(As),this.splitByPlane(As,t)}splitByPlane(t,e){let{triangles:n,trianglePool:i}=this;Da.copy(e),Da.needsUpdate=!0;for(let r=0,s=n.length;r<s;r++){let a=n[r];if(!Da.intersectsTriangle(a,Fe,!0))continue;let{a:c,b:f,c:u}=a,d=0,m=-1,g=!1,x=[],M=[],b=[c,f,u];for(let A=0;A<3;A++){let E=(A+1)%3;Fe.start.copy(b[A]),Fe.end.copy(b[E]);let p=t.distanceToPoint(Fe.start),l=t.distanceToPoint(Fe.end);if(Math.abs(p)<Ji&&Math.abs(l)<Ji){g=!0;break}if(p>0?x.push(A):M.push(A),Math.abs(p)<Ji)continue;let _=!!t.intersectLine(Fe,Be);!_&&Math.abs(l)<Ji&&(Be.copy(Fe.end),_=!0),_&&!(Be.distanceTo(Fe.start)<Pa)&&(Be.distanceTo(Fe.end)<Pa&&(m=A),d===0?Ft.start.copy(Be):Ft.end.copy(Be),d++)}if(!g&&d===2&&Ft.distance()>Ji)if(m!==-1){m=(m+1)%3;let A=0;A===m&&(A=(A+1)%3);let E=A+1;E===m&&(E=(E+1)%3);let p=i.getInstance();p.a.copy(b[E]),p.b.copy(Ft.end),p.c.copy(Ft.start),Me(p)||n.push(p),a.a.copy(b[A]),a.b.copy(Ft.start),a.c.copy(Ft.end),Me(a)&&(n.splice(r,1),r--,s--)}else{let A=x.length>=2?M[0]:x[0];if(A===0){let h=Ft.start;Ft.start=Ft.end,Ft.end=h}let E=(A+1)%3,p=(A+2)%3,l=i.getInstance(),_=i.getInstance();b[E].distanceToSquared(Ft.start)<b[p].distanceToSquared(Ft.end)?(l.a.copy(b[E]),l.b.copy(Ft.start),l.c.copy(Ft.end),_.a.copy(b[E]),_.b.copy(b[p]),_.c.copy(Ft.start)):(l.a.copy(b[p]),l.b.copy(Ft.start),l.c.copy(Ft.end),_.a.copy(b[E]),_.b.copy(b[p]),_.c.copy(Ft.end)),a.a.copy(b[A]),a.b.copy(Ft.end),a.c.copy(Ft.start),Me(l)||n.push(l),Me(_)||n.push(_),Me(a)&&(n.splice(r,1),r--,s--)}else d===3&&console.warn("TriangleClipper: Coplanar clip not handled")}}reset(){this.triangles.length=0,this.trianglePool.clear()}};var Qi=class{constructor(){this.coplanarSet=new Map,this.intersectionSet=new Map,this.edgeSet=new Map,this.ids=[]}add(t,e,n=!1){let{intersectionSet:i,coplanarSet:r,ids:s}=this;i.has(t)||(i.set(t,[]),s.push(t)),i.get(t).push(e),n&&(r.has(t)||r.set(t,new Set),r.get(t).add(e))}addIntersectionEdge(t,e){let{edgeSet:n}=this;n.has(t)||n.set(t,new Set),n.get(t).add(e)}getIntersectionEdges(t){return this.edgeSet.get(t)||null}};var La=1e-10,um=1e-15,fm=1e-10,dm=1e-10,$l=new Mt,oi=new Mt,Jl=new I,Kl=new I,Ql=new I,Ua=new xe,ai=new I,Cs=new I;function th(o,t){o.getNormal(ai),t.getNormal(Cs);let e=ai.dot(Cs);if(Math.abs(1-Math.abs(e))>=fm)return!1;let n=ai.dot(o.a),i=ai.dot(t.a);return Math.abs(n-i)<dm}function jl(o,t,e,n){let i=0,r=1;o.delta(Jl);let s=[t.a,t.b,t.c];for(let a=0;a<3;a++){let c=s[a],f=s[(a+1)%3];Kl.subVectors(f,c),Ql.crossVectors(e,Kl),Ua.setFromNormalAndCoplanarPoint(Ql,c);let u=Ua.distanceToPoint(o.start),d=Ua.normal.dot(Jl);if(Math.abs(d)<um){if(u<-La)return null;continue}let m=-u/d;if(d>0?i=Math.max(i,m):r=Math.min(r,m),i>r+La)return null}return r-i<La?null:(o.at(i,n.start),o.at(r,n.end),n)}function Na(o,t,e){let n=0;o.getNormal(ai),t.getNormal(Cs);let i=[t.a,t.b,t.c];for(let s=0;s<3;s++){oi.start.copy(i[s]),oi.end.copy(i[(s+1)%3]);let a=jl(oi,o,ai,$l);a!==null&&(n>=e.length&&e.push(new Mt),e[n].copy(a),n++)}let r=[o.a,o.b,o.c];for(let s=0;s<3;s++){oi.start.copy(r[s]),oi.end.copy(r[(s+1)%3]);let a=jl(oi,t,Cs,$l);a!==null&&(n>=e.length&&e.push(new Mt),e[n].copy(a),n++)}return n}var ci=new we,eh=new dt,Rs=new Mt,Fa=[],Is=new oe(()=>new Mt),li=-1,hi=1,ji=-2,tr=2,ui=0,vn=1,Ds=2,Ps=null;function Ba(o){Ps=o}function Oa(o,t,e=null){o.getMidpoint(ci.origin),o.getNormal(ci.direction),e&&(ci.origin.applyMatrix4(e),ci.direction.transformDirection(e));let n=t.raycastFirst(ci,Oi);return!!(n&&ci.direction.dot(n.face.normal)>0)?li:hi}function rh(o,t){let e=new Qi,n=new Qi;return Is.clear(),eh.copy(o.matrixWorld).invert().multiply(t.matrixWorld),o.geometry.boundsTree.bvhcast(t.geometry.boundsTree,eh,{intersectsTriangles(i,r,s,a){if(!Me(i)&&!Me(r)){let f=(th(i,r)?Na(i,r,Fa):0)>2;if(f||i.intersectsTriangle(r,Rs,!0)){let d=o.geometry.boundsTree.resolveTriangleIndex(s),m=t.geometry.boundsTree.resolveTriangleIndex(a);if(e.add(d,m,f),n.add(m,d,f),f){let g=Na(i,r,Fa);for(let x=0;x<g;x++){let M=Is.getInstance().copy(Fa[x]);e.addIntersectionEdge(d,M),n.addIntersectionEdge(m,M)}}else{let g=Is.getInstance().copy(Rs),x=Is.getInstance().copy(Rs);e.addIntersectionEdge(d,g),n.addIntersectionEdge(m,x)}Ps&&(Ps.addEdge(Rs),Ps.addIntersectingTriangles(s,i,a,r))}}return!1}}),{aIntersections:e,bIntersections:n}}function za(o,t,e=!1){switch(o){case 0:if(t===hi||t===tr&&!e)return vn;break;case 1:if(e){if(t===li)return ui}else if(t===hi||t===ji)return vn;break;case 2:if(e){if(t===hi||t===ji)return vn}else if(t===li)return ui;break;case 4:if(t===li)return ui;if(t===hi)return vn;break;case 3:if(t===li||t===tr&&!e)return vn;break;case 5:if(!e&&(t===hi||t===ji))return vn;break;case 6:if(!e&&(t===li||t===tr))return vn;break;default:throw new Error(`Unrecognized CSG operation enum "${o}".`)}return Ds}var Va=class{constructor(t){this.triangle=new Et().copy(t),this.intersects={}}addTriangle(t,e){this.intersects[t]=new Et().copy(e)}getIntersectArray(){let t=[],{intersects:e}=this;for(let n in e)t.push(e[n]);return t}},Ls=class{constructor(){this.data={}}addTriangleIntersection(t,e,n,i){let{data:r}=this;r[t]||(r[t]=new Va(e)),r[t].addTriangle(n,i)}getTrianglesAsArray(t=null){let{data:e}=this,n=[];if(t!==null)t in e&&n.push(e[t].triangle);else for(let i in e)n.push(e[i].triangle);return n}getTriangleIndices(){return Object.keys(this.data).map(t=>parseInt(t))}getIntersectionIndices(t){let{data:e}=this;return e[t]?Object.keys(e[t].intersects).map(n=>parseInt(n)):[]}getIntersectionsAsArray(t=null,e=null){let{data:n}=this,i=new Set,r=[],s=a=>{if(n[a])if(e!==null)n[a].intersects[e]&&r.push(n[a].intersects[e]);else{let c=n[a].intersects;for(let f in c)i.has(f)||(i.add(f),r.push(c[f]))}};if(t!==null)s(t);else for(let a in n)s(a);return r}reset(){this.data={}}},Us=class{constructor(){this.enabled=!1,this.triangleIntersectsA=new Ls,this.triangleIntersectsB=new Ls,this.intersectionEdges=[]}addIntersectingTriangles(t,e,n,i){let{triangleIntersectsA:r,triangleIntersectsB:s}=this;r.addTriangleIntersection(t,e,n,i),s.addTriangleIntersection(n,i,t,e)}addEdge(t){this.intersectionEdges.push(t.clone())}reset(){this.triangleIntersectsA.reset(),this.triangleIntersectsB.reset(),this.intersectionEdges=[]}init(){this.enabled&&(this.reset(),Ba(this))}complete(){this.enabled&&Ba(null)}};var ae=new dt,yn=new dt,Jt=new dt,en=new at,Se=new Et,Mn=new Et,be=new Et,tn=new Et,Sn=[],Ae=[],Ns=new Set,sh=new I,oh=new I,ah=new oe(()=>new Et),ch=new I,Fs=[];function uh(o,t,e,n,i,r={}){let{useGroups:s=!0}=r,{aIntersections:a,bIntersections:c}=rh(o,t),f=[],u=null,d;return d=s?0:-1,hh(o,t,a,e,!1,i,d),lh(o,t,a,e,!1,n,i,d),e.findIndex(g=>g!==6&&g!==5)!==-1&&(i.forEach(g=>g.clearIndexMap()),d=s?o.geometry.groups.length||1:-1,hh(t,o,c,e,!0,i,d),lh(t,o,c,e,!0,n,i,d)),i.forEach(g=>g.clearIndexMap()),Sn.length=0,{groups:f,materials:u}}function lh(o,t,e,n,i,r,s,a=0){ae.copy(t.matrixWorld).invert().multiply(o.matrixWorld),yn.copy(ae).invert(),i?Jt.copy(ae):Jt.identity();let c=Jt.determinant()<0;en.getNormalMatrix(Jt).multiplyScalar(c?-1:1);let f=o.geometry.groupIndices,u=o.geometry.index,d=o.geometry.attributes.position,m=t.geometry.boundsTree,g=t.geometry.index,x=t.geometry.attributes.position,M=e.ids;for(let b=0,A=M.length;b<A;b++){let E=M[b],p=a===-1?0:f[E]+a,l=3*E,_=l+0,h=l+1,R=l+2;u&&(_=u.getX(_),h=u.getX(h),R=u.getX(R)),Se.a.fromBufferAttribute(d,_),Se.b.fromBufferAttribute(d,h),Se.c.fromBufferAttribute(d,R),i&&(Se.a.applyMatrix4(ae),Se.b.applyMatrix4(ae),Se.c.applyMatrix4(ae)),r.reset(),r.initialize(Se,_,h,R),Fs.length=0,ah.clear(),Se.getNormal(oh);let w=e.coplanarSet.get(E);if(w)for(let T of w){let C=3*T,P=C+0,D=C+1,L=C+2;g&&(P=g.getX(P),D=g.getX(D),L=g.getX(L));let U=ah.getInstance();U.a.fromBufferAttribute(x,P),U.b.fromBufferAttribute(x,D),U.c.fromBufferAttribute(x,L),i||(U.a.applyMatrix4(yn),U.b.applyMatrix4(yn),U.c.applyMatrix4(yn)),Fs.push(U)}if(r.addConstraintEdge){let T=e.getIntersectionEdges(E);if(T)for(let C of T)r.addConstraintEdge(C);r.triangulate()}else{let C=e.intersectionSet.get(E);for(let P=0,D=C.length;P<D;P++){let L=C[P],U=w&&w.has(L),B=3*L,F=B+0,$=B+1,V=B+2;g&&(F=g.getX(F),$=g.getX($),V=g.getX(V)),Mn.a.fromBufferAttribute(x,F),Mn.b.fromBufferAttribute(x,$),Mn.c.fromBufferAttribute(x,V),i||(Mn.a.applyMatrix4(yn),Mn.b.applyMatrix4(yn),Mn.c.applyMatrix4(yn)),r.splitByTriangle(Mn,U)}}let{triangles:y,triangleIndices:v=[],triangleConnectivity:S=[]}=r;for(let T=0,C=s.length;T<C;T++)s[T].initInterpolatedAttributeData(o.geometry,Jt,en,_,h,R);Ns.clear();for(let T=0,C=y.length;T<C;T++){if(Ns.has(T))continue;let P=y[T],D=i?null:ae,L=null;P.getMidpoint(sh);for(let U=0,B=Fs.length;U<B;U++){let F=Fs[U];if(F.containsPoint(sh)){F.getNormal(ch),L=oh.dot(ch)>0?tr:ji;break}}L===null&&(L=Oa(P,m,D)),Sn.length=0,Ae.length=0;for(let U=0,B=n.length;U<B;U++){let F=za(n[U],L,i);F!==Ds&&(Sn.push(F),Ae.push(s[U]))}if(Ae.length!==0){let U=[T];for(;U.length>0;){let B=U.pop();if(Ns.has(B))continue;Ns.add(B);let F=v[B],$=null,V=null,W=null;F&&($=F[0],V=F[1],W=F[2]);let H=y[B];Se.getBarycoord(H.a,tn.a),Se.getBarycoord(H.b,tn.b),Se.getBarycoord(H.c,tn.c);for(let X=0,Y=Ae.length;X<Y;X++){let ct=Ae[X],nt=Sn[X]===ui,Q=c!==nt;ct.appendInterpolatedAttributeData(p,tn.a,$,Q),Q?(ct.appendInterpolatedAttributeData(p,tn.c,W,Q),ct.appendInterpolatedAttributeData(p,tn.b,V,Q)):(ct.appendInterpolatedAttributeData(p,tn.b,V,Q),ct.appendInterpolatedAttributeData(p,tn.c,W,Q))}}}}}return M.length}function hh(o,t,e,n,i,r,s=0){ae.copy(t.matrixWorld).invert().multiply(o.matrixWorld),i?Jt.copy(ae):Jt.identity();let a=Jt.determinant()<0;en.getNormalMatrix(Jt).multiplyScalar(a?-1:1);let c=t.geometry.boundsTree,f=o.geometry.groupIndices,u=o.geometry.index,m=o.geometry.attributes.position,g=[],x=o.geometry.halfEdges,M=new Set(e.ids),b=si(o.geometry);for(let A=0;A<b&&M.size!==b;A++){if(M.has(A))continue;M.add(A),g.push(A);let E=3*A,p=E+0,l=E+1,_=E+2;u&&(p=u.getX(p),l=u.getX(l),_=u.getX(_)),be.a.fromBufferAttribute(m,p),be.b.fromBufferAttribute(m,l),be.c.fromBufferAttribute(m,_),i&&(be.a.applyMatrix4(ae),be.b.applyMatrix4(ae),be.c.applyMatrix4(ae));let h=Oa(be,c,i?null:ae);Sn.length=0,Ae.length=0;for(let R=0,w=n.length;R<w;R++){let y=za(n[R],h,i);y!==Ds&&(Sn.push(y),Ae.push(r[R]))}for(;g.length>0;){let R=g.pop();for(let w=0;w<3;w++){let y=x.getSiblingTriangleIndex(R,w);y!==-1&&!M.has(y)&&(g.push(y),M.add(y))}if(Ae.length!==0){let w=3*R,y=w+0,v=w+1,S=w+2;u&&(y=u.getX(y),v=u.getX(v),S=u.getX(S));let T=s===-1?0:f[R]+s;if(be.a.fromBufferAttribute(m,y),be.b.fromBufferAttribute(m,v),be.c.fromBufferAttribute(m,S),!Me(be))for(let C=0,P=Ae.length;C<P;C++){let D=Ae[C],B=Sn[C]===ui!==a;D.appendIndexFromGeometry(o.geometry,Jt,en,T,y,B),B?(D.appendIndexFromGeometry(o.geometry,Jt,en,T,S,B),D.appendIndexFromGeometry(o.geometry,Jt,en,T,v,B)):(D.appendIndexFromGeometry(o.geometry,Jt,en,T,v,B),D.appendIndexFromGeometry(o.geometry,Jt,en,T,S,B))}}}}}function gm(o){return o=~~o,o+4-o%4}var Bs=class{constructor(t,e=500){this.expansionFactor=1.5,this.type=t,this.length=0,this.array=null,this.setSize(e)}setType(t){if(t===this.type)return;if(this.length!==0)throw new Error("TypeBackedArray: Cannot change the type while there is used data in the buffer.");let e=this.array.buffer;this.array=new t(e),this.type=t}setSize(t){if(this.array&&t===this.array.length)return;let e=this.type,n=Ss()?SharedArrayBuffer:ArrayBuffer,i=new e(new n(gm(t*e.BYTES_PER_ELEMENT)));this.array&&i.set(this.array,0),this.array=i}expand(){let{array:t,expansionFactor:e}=this;this.setSize(t.length*e)}push(...t){let{array:e,length:n}=this;n+t.length>e.length&&(this.expand(),e=this.array);for(let i=0,r=t.length;i<r;i++)e[n+i]=t[i];this.length+=t.length}clear(){this.length=0}};var Kt=new I,ka=new I,Ha=new I,Ga=new I,Os=new te,xm=new te,_m=new te,vm=new te;function ym(o,t,e,n,i,r=!1,s=!1){return i.set(0,0,0,0).addScaledVector(o,n.x).addScaledVector(t,n.y).addScaledVector(e,n.z),r&&i.normalize(),s&&i.multiplyScalar(-1),i}function fh(o,t,e){switch(t){case 1:e.push(o.x);break;case 2:e.push(o.x,o.y);break;case 3:e.push(o.x,o.y,o.z);break;case 4:e.push(o.x,o.y,o.z,o.w);break}}var er=class extends Bs{get count(){return this.length/this.itemSize}constructor(...t){super(...t),this.itemSize=1,this.normalized=!1}},zs=class{constructor(){this.attributeData={},this.groupIndices=[],this.forwardIndexMap=new Map,this.invertedIndexMap=new Map,this.interpolatedFields={}}initFromGeometry(t,e){this.clear();let{attributeData:n}=this,i=t.attributes;for(let r=0,s=e.length;r<s;r++){let a=e[r],c=i[a],f=c.array.constructor;n[a]||(n[a]=new er(f)),n[a].setType(f),n[a].itemSize=c.itemSize,n[a].normalized=c.normalized}for(let r in n.attributes)e.includes(r)||n.delete(r)}initInterpolatedAttributeData(t,e,n,i,r,s){let{attributeData:a,interpolatedFields:c}=this,{attributes:f}=t;for(let u in a){let d=f[u];if(!d)throw new Error(`CSG Operations: Attribute ${u} not available on geometry.`);let m,g,x;if(u==="position"?(m=ka.fromBufferAttribute(d,i).applyMatrix4(e),g=Ha.fromBufferAttribute(d,r).applyMatrix4(e),x=Ga.fromBufferAttribute(d,s).applyMatrix4(e)):u==="normal"?(m=ka.fromBufferAttribute(d,i).applyNormalMatrix(n),g=Ha.fromBufferAttribute(d,r).applyNormalMatrix(n),x=Ga.fromBufferAttribute(d,s).applyNormalMatrix(n)):u==="tangent"?(m=ka.fromBufferAttribute(d,i).transformDirection(e),g=Ha.fromBufferAttribute(d,r).transformDirection(e),x=Ga.fromBufferAttribute(d,s).transformDirection(e)):(m=xm.fromBufferAttribute(d,i),g=_m.fromBufferAttribute(d,r),x=vm.fromBufferAttribute(d,s)),!c[u])c[u]=[m.clone(),g.clone(),x.clone()];else{let M=c[u];M[0].copy(m),M[1].copy(g),M[2].copy(x)}}}appendInterpolatedAttributeData(t,e,n=null,i=!1){let{groupIndices:r,attributeData:s,interpolatedFields:a,forwardIndexMap:c,invertedIndexMap:f}=this;for(;r.length<=t;)r.push(new er(Uint32Array));let u=i?f:c,d=r[t];if(n!==null&&u.has(n))d.push(u.get(n));else{u.set(n,s.position.count),d.push(s.position.count);for(let m in a){let g=s[m],x=m==="normal"||m==="tangent",M=i&&x,b=g.itemSize,[A,E,p]=a[m];ym(A,E,p,e,Os,x,M),fh(Os,b,g)}}}appendIndexFromGeometry(t,e,n,i,r,s=!1){let{groupIndices:a,attributeData:c,forwardIndexMap:f,invertedIndexMap:u}=this;for(;a.length<=i;)a.push(new er(Uint32Array));let d=s?u:f,m=a[i];if(r!==null&&d.has(r))m.push(d.get(r));else{d.set(r,c.position.count),m.push(c.position.count);let{attributes:g}=t;for(let x in c){let M=c[x],b=g[x];if(!b)throw new Error(`CSG Operations: Attribute ${x} not available on geometry.`);let A=b.itemSize;x==="position"?(Kt.fromBufferAttribute(b,r).applyMatrix4(e),M.push(Kt.x,Kt.y,Kt.z)):x==="normal"?(Kt.fromBufferAttribute(b,r).applyNormalMatrix(n),s&&Kt.multiplyScalar(-1),M.push(Kt.x,Kt.y,Kt.z)):x==="tangent"?(Kt.fromBufferAttribute(b,r).transformDirection(e),s&&Kt.multiplyScalar(-1),M.push(Kt.x,Kt.y,Kt.z)):(Os.fromBufferAttribute(b,r),fh(Os,A,M))}}}buildGeometry(t,e){let n=!1,{groupIndices:i,attributeData:r}=this,{attributes:s,index:a}=t;for(let u in r){let d=r[u],{type:m,itemSize:g,normalized:x,length:M,count:b}=d,A=d.array.buffer,E=s[u];(!E||E.count<b||E.array.type!==m)&&(E=new zt(new m(M),g,x),t.setAttribute(u,E),n=!0),E.array.set(new m(A,0,M),0),E.needsUpdate=!0}let c=i.reduce((u,d)=>d.count+u,0);(!t.index||a.count<c||a.array.type!==Uint32Array)&&(t.setIndex(new zt(new Uint32Array(c),1)),n=!0),t.clearGroups();let f=0;for(let u=0,d=Math.min(e.length,i.length);u<d;u++){let{index:m,materialIndex:g}=e[u],{count:x}=i[m],M=i[m].array.buffer;x!==0&&(t.index.array.set(new Uint32Array(M,0,x),f),t.addGroup(f,x,g),f+=x)}t.setDrawRange(0,f),t.boundsTree=null,t.boundingBox=null,t.boundingSphere=null,n&&t.dispose()}clearIndexMap(){this.forwardIndexMap.clear(),this.invertedIndexMap.clear()}clear(){let{groupIndices:t,attributeData:e}=this;this.interpolatedFields={};for(let n in e)e[n].clear();t.forEach(n=>{n.clear()}),this.clearIndexMap()}};function dh(o,t){for(let e in o.attributes)t.includes(e)||(o.deleteAttribute(e),o.dispose());return o}function ph(o,t){let e=[];for(let n=0,i=o.length;n<i;n++){let r=o[n],s=t[r.materialIndex];e.push({...r,materialIndex:t.indexOf(s)})}return e}function mh(o,t){let e=[],n=new Map;for(let i=0,r=o.length;i<r;i++){let s=o[i];n.has(s.materialIndex)||(n.set(s.materialIndex,e.length),e.push(t[s.materialIndex])),s.materialIndex=n.get(s.materialIndex)}return e}function gh(o){for(let t=0;t<o.length-1;t++){let e=o[t],n=o[t+1];if(e.materialIndex===n.materialIndex){let i=e.start,r=n.start+n.count;n.start=i,n.count=r-i,o.splice(t,1),t--}}}function Wa(o,t){let e=t;return Array.isArray(t)||(e=[],o.forEach(n=>{e[n.materialIndex]=t})),e}var Vs=class{get useCDTClipping(){return this.triangleSplitter instanceof $i}set useCDTClipping(t){t!==this.useCDTClipping&&(this.triangleSplitter=t?new $i:new Ki)}constructor(){this.triangleSplitter=new Ki,this.geometryBuilders=[],this.attributes=["position","uv","normal"],this.useGroups=!0,this.consolidateGroups=!0,this.removeUnusedMaterials=!0,this.debug=new Us}getGroupRanges(t){return!this.useGroups||t.groups.length===0?[{start:0,count:1/0,materialIndex:0}]:t.groups.map(n=>({...n}))}evaluate(t,e,n,i=new xn){let r=!0;if(Array.isArray(n)||(n=[n]),Array.isArray(i)||(i=[i],r=!1),i.length!==n.length)throw new Error("Evaluator: operations and target array passed as different sizes.");t.prepareGeometry(),e.prepareGeometry();let{triangleSplitter:s,geometryBuilders:a,attributes:c,useGroups:f,consolidateGroups:u,removeUnusedMaterials:d,debug:m}=this;for(;a.length<i.length;)a.push(new zs);i.forEach((p,l)=>{a[l].initFromGeometry(t.geometry,c),dh(p.geometry,c)}),m.init(),uh(t,e,n,s,a,{useGroups:f}),m.complete();let g=this.getGroupRanges(t.geometry),x=Wa(g,t.material),M=this.getGroupRanges(e.geometry),b=Wa(M,e.material);M.forEach(p=>p.materialIndex+=x.length);let A=[...x,...b],E=[...g,...M].map((p,l)=>({...p,index:l}));return f?f&&u&&(E=ph(E,A),E.sort((p,l)=>p.materialIndex-l.materialIndex)):E=[{start:0,count:1/0,index:0,materialIndex:0}],i.forEach((p,l)=>{let _=p.geometry;a[l].buildGeometry(_,E),t.matrixWorld.decompose(p.position,p.quaternion,p.scale),p.updateMatrix(),p.matrixWorld.copy(t.matrixWorld),f?(p.material=A,u&&gh(_.groups),d&&(p.material=mh(_.groups,A))):p.material=A[0]}),r?i:i[0]}evaluateHierarchy(t,e=new xn){t.updateMatrixWorld(!0);let n=(r,s)=>{let a=r.children;for(let c=0,f=a.length;c<f;c++){let u=a[c];u.isOperationGroup?n(u,s):s(u)}},i=r=>{let s=r.children,a=!1;for(let f=0,u=s.length;f<u;f++){let d=s[f];a=i(d)||a}let c=r.isDirty();if(c&&r.markUpdated(),a&&!r.isOperationGroup){let f;return n(r,u=>{f?f=this.evaluate(f,u,u.operation):f=this.evaluate(r,u,u.operation)}),r._cachedGeometry=f.geometry,r._cachedMaterials=f.material,!0}else return a||c};return i(t),e.geometry=t._cachedGeometry,e.material=t._cachedMaterials,e}reset(){this.triangleSplitter.reset()}};function xh(o,t,e,n=()=>{}){let i=new Set,r=d=>(i.add(d),d);function s(d,m){r(d),d.getAttribute("normal")||d.computeVertexNormals(),d.getAttribute("color")||d.setAttribute("color",new Xt(Array.from({length:d.getAttribute("position").count},()=>m).flat(),3));let g=new xn(d);return g.updateMatrixWorld(!0),g}let a=r(new ge);a.setAttribute("position",new Xt(o.vertices.flat(),3)),a.setIndex(o.triangles.flat()),a.setAttribute("color",new Xt((o.colors||o.vertices.map(()=>[.48,.63,.85])).flat(),3));let c=new Vs;c.attributes=["position","normal","color"],c.useGroups=!1;let f=s(a),u=[];try{for(let v=0;v<t.length;v++){n(`Y\xFCzey kesimi: ${v+1} / ${t.length} alan\u2026`);let S=t[v],{u:T,v:C,n:P,center:D,width:L,height:U,shape:B}=S,{depth:F,offset:$=0}=S;if(![L,U,F].every(H=>Number.isFinite(H)&&H>0))throw new Error("Alan ve i\u015Flem derinli\u011Fi s\u0131f\u0131rdan b\xFCy\xFCk olmal\u0131.");if(e==="cut"){let H=1/0,X=-1/0;for(let Y of o.vertices){let ct=Y.reduce((et,nt,Q)=>et+(nt-D[Q])*P[Q],0);H=Math.min(H,ct),X=Math.max(X,ct)}$=H-.01,F=X-H+.02}u.push({...S,depth:F,offset:$});let V;if(B==="polygon"){let H=new kn(or(S.points).map(X=>new G(...X)));V=new Fi(H,{depth:F,bevelEnabled:!1,steps:1}).translate(0,0,-F/2)}else V=B==="circle"?new Ai(L/2,L/2,F,64).rotateX(Math.PI/2):new Ei(L,U,F);let W=s(V,o.colors?.[0]||[.48,.63,.85]);W.matrixAutoUpdate=!1,W.matrix.makeBasis(new I(...T),new I(...C),new I(...P)),W.matrix.setPosition(...D.map((H,X)=>H+P[X]*((e==="fill"?$-F:$)+F/2))),W.updateMatrixWorld(!0),f=c.evaluate(f,W,e==="fill"?0:1),r(f.geometry)}let d=f.geometry.getAttribute("position"),m=f.geometry.getAttribute("color"),g=f.geometry.index,x=[],M=[],b=[];for(let v=0;v<d.count;v++)x.push([d.getX(v),d.getY(v),d.getZ(v)]),M.push([m.getX(v),m.getY(v),m.getZ(v)]);let A=Math.min(g?g.count:d.count,f.geometry.drawRange.count);for(let v=0;v<A;v+=3)b.push([0,1,2].map(S=>g?g.getX(v+S):v+S));let E=(v,S)=>{let T=v.map(L=>L.map((U,B)=>U-S.center[B])),C=[S.u,S.v,S.n].map(L=>T.map(U=>U.reduce((B,F,$)=>B+F*L[$],0))),P=[-S.width/2,-S.height/2,e==="fill"?S.offset-S.depth:S.offset],D=[S.width/2,S.height/2,e==="fill"?S.offset:S.offset+S.depth];return C.some((L,U)=>Math.max(...L)<P[U]-1e-5||Math.min(...L)>D[U]+1e-5)?!0:S.shape==="polygon"&&!ec(S.points,v.map((L,U)=>[C[0][U],C[1][U]]))},p=v=>u.every(S=>E(v,S)),l=b.filter(v=>!p(v.map(S=>x[S]))),_=x.length;for(let v=0;v<o.vertices.length;v++)x.push(o.vertices[v]),M.push(o.colors?.[v]||[.48,.63,.85]);for(let v of o.triangles)p(v.map(S=>o.vertices[S]))&&l.push(v.map(S=>S+_));if(!l.length){if(e==="cut")return null;throw new Error("Se\xE7im modelin tamam\u0131n\u0131 kald\u0131r\u0131yor. Alan\u0131 k\xFC\xE7\xFClt\xFCn.")}let h=new Map,R=[],w=[],y=l.map(v=>v.map(S=>(h.has(S)||(h.set(S,R.length),R.push(x[S]),w.push(M[S])),h.get(S))));return{...o,vertices:R,colors:w,triangles:y}}finally{for(let d of i)d.boundsTree=null,d.dispose()}}function _h(o,t){if(!t||o.triangles.length!==t.triangles.length)return!1;let e=(i,r)=>r.map(s=>i.vertices[s].map(Math.fround).join(",")).sort().join("|"),n=new Map;for(let i of o.triangles){let r=e(o,i);n.set(r,(n.get(r)||0)+1)}for(let i of t.triangles){let r=e(t,i),s=n.get(r)||0;if(!s)return!1;s===1?n.delete(r):n.set(r,s-1)}return!n.size}var Ht=Uint8Array,ce=Uint16Array,Ja=Int32Array,Ka=new Ht([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Qa=new Ht([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),vh=new Ht([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Th=function(o,t){for(var e=new ce(31),n=0;n<31;++n)e[n]=t+=1<<o[n-1];for(var i=new Ja(e[30]),n=1;n<30;++n)for(var r=e[n];r<e[n+1];++r)i[r]=r-e[n]<<5|n;return{b:e,r:i}},Eh=Th(Ka,2),Sm=Eh.b,qa=Eh.r;Sm[28]=258,qa[258]=28;var Ah=Th(Qa,0),jb=Ah.b,yh=Ah.r,Ya=new ce(32768);for(_t=0;_t<32768;++_t)Oe=(_t&43690)>>1|(_t&21845)<<1,Oe=(Oe&52428)>>2|(Oe&13107)<<2,Oe=(Oe&61680)>>4|(Oe&3855)<<4,Ya[_t]=((Oe&65280)>>8|(Oe&255)<<8)>>1;var Oe,_t,rr=(function(o,t,e){for(var n=o.length,i=0,r=new ce(t);i<n;++i)o[i]&&++r[o[i]-1];var s=new ce(t);for(i=1;i<t;++i)s[i]=s[i-1]+r[i-1]<<1;var a;if(e){a=new ce(1<<t);var c=15-t;for(i=0;i<n;++i)if(o[i])for(var f=i<<4|o[i],u=t-o[i],d=s[o[i]-1]++<<u,m=d|(1<<u)-1;d<=m;++d)a[Ya[d]>>c]=f}else for(a=new ce(n),i=0;i<n;++i)o[i]&&(a[i]=Ya[s[o[i]-1]++]>>15-o[i]);return a}),bn=new Ht(288);for(_t=0;_t<144;++_t)bn[_t]=8;var _t;for(_t=144;_t<256;++_t)bn[_t]=9;var _t;for(_t=256;_t<280;++_t)bn[_t]=7;var _t;for(_t=280;_t<288;++_t)bn[_t]=8;var _t,ks=new Ht(32);for(_t=0;_t<32;++_t)ks[_t]=5;var _t,bm=rr(bn,9,0);var wm=rr(ks,5,0);var Ch=function(o){return(o+7)/8|0},Rh=function(o,t,e){return(t==null||t<0)&&(t=0),(e==null||e>o.length)&&(e=o.length),new Ht(o.subarray(t,e))};var Tm=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Hs=function(o,t,e){var n=new Error(t||Tm[o]);if(n.code=o,Error.captureStackTrace&&Error.captureStackTrace(n,Hs),!e)throw n;return n};var ze=function(o,t,e){e<<=t&7;var n=t/8|0;o[n]|=e,o[n+1]|=e>>8},nr=function(o,t,e){e<<=t&7;var n=t/8|0;o[n]|=e,o[n+1]|=e>>8,o[n+2]|=e>>16},Xa=function(o,t){for(var e=[],n=0;n<o.length;++n)o[n]&&e.push({s:n,f:o[n]});var i=e.length,r=e.slice();if(!i)return{t:Ph,l:0};if(i==1){var s=new Ht(e[0].s+1);return s[e[0].s]=1,{t:s,l:1}}e.sort(function(_,h){return _.f-h.f}),e.push({s:-1,f:25001});var a=e[0],c=e[1],f=0,u=1,d=2;for(e[0]={s:-1,f:a.f+c.f,l:a,r:c};u!=i-1;)a=e[e[f].f<e[d].f?f++:d++],c=e[f!=u&&e[f].f<e[d].f?f++:d++],e[u++]={s:-1,f:a.f+c.f,l:a,r:c};for(var m=r[0].s,n=1;n<i;++n)r[n].s>m&&(m=r[n].s);var g=new ce(m+1),x=Za(e[u-1],g,0);if(x>t){var n=0,M=0,b=x-t,A=1<<b;for(r.sort(function(h,R){return g[R.s]-g[h.s]||h.f-R.f});n<i;++n){var E=r[n].s;if(g[E]>t)M+=A-(1<<x-g[E]),g[E]=t;else break}for(M>>=b;M>0;){var p=r[n].s;g[p]<t?M-=1<<t-g[p]++-1:++n}for(;n>=0&&M;--n){var l=r[n].s;g[l]==t&&(--g[l],++M)}x=t}return{t:new Ht(g),l:x}},Za=function(o,t,e){return o.s==-1?Math.max(Za(o.l,t,e+1),Za(o.r,t,e+1)):t[o.s]=e},Mh=function(o){for(var t=o.length;t&&!o[--t];);for(var e=new ce(++t),n=0,i=o[0],r=1,s=function(c){e[n++]=c},a=1;a<=t;++a)if(o[a]==i&&a!=t)++r;else{if(!i&&r>2){for(;r>138;r-=138)s(32754);r>2&&(s(r>10?r-11<<5|28690:r-3<<5|12305),r=0)}else if(r>3){for(s(i),--r;r>6;r-=6)s(8304);r>2&&(s(r-3<<5|8208),r=0)}for(;r--;)s(i);r=1,i=o[a]}return{c:e.subarray(0,n),n:t}},ir=function(o,t){for(var e=0,n=0;n<t.length;++n)e+=o[n]*t[n];return e},Ih=function(o,t,e){var n=e.length,i=Ch(t+2);o[i]=n&255,o[i+1]=n>>8,o[i+2]=o[i]^255,o[i+3]=o[i+1]^255;for(var r=0;r<n;++r)o[i+r+4]=e[r];return(i+4+n)*8},Sh=function(o,t,e,n,i,r,s,a,c,f,u){ze(t,u++,e),++i[256];for(var d=Xa(i,15),m=d.t,g=d.l,x=Xa(r,15),M=x.t,b=x.l,A=Mh(m),E=A.c,p=A.n,l=Mh(M),_=l.c,h=l.n,R=new ce(19),w=0;w<E.length;++w)++R[E[w]&31];for(var w=0;w<_.length;++w)++R[_[w]&31];for(var y=Xa(R,7),v=y.t,S=y.l,T=19;T>4&&!v[vh[T-1]];--T);var C=f+5<<3,P=ir(i,bn)+ir(r,ks)+s,D=ir(i,m)+ir(r,M)+s+14+3*T+ir(R,v)+2*R[16]+3*R[17]+7*R[18];if(c>=0&&C<=P&&C<=D)return Ih(t,u,o.subarray(c,c+f));var L,U,B,F;if(ze(t,u,1+(D<P)),u+=2,D<P){L=rr(m,g,0),U=m,B=rr(M,b,0),F=M;var $=rr(v,S,0);ze(t,u,p-257),ze(t,u+5,h-1),ze(t,u+10,T-4),u+=14;for(var w=0;w<T;++w)ze(t,u+3*w,v[vh[w]]);u+=3*T;for(var V=[E,_],W=0;W<2;++W)for(var H=V[W],w=0;w<H.length;++w){var X=H[w]&31;ze(t,u,$[X]),u+=v[X],X>15&&(ze(t,u,H[w]>>5&127),u+=H[w]>>12)}}else L=bm,U=bn,B=wm,F=ks;for(var w=0;w<a;++w){var Y=n[w];if(Y>255){var X=Y>>18&31;nr(t,u,L[X+257]),u+=U[X+257],X>7&&(ze(t,u,Y>>23&31),u+=Ka[X]);var ct=Y&31;nr(t,u,B[ct]),u+=F[ct],ct>3&&(nr(t,u,Y>>5&8191),u+=Qa[ct])}else nr(t,u,L[Y]),u+=U[Y]}return nr(t,u,L[256]),u+U[256]},Em=new Ja([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),Ph=new Ht(0),Am=function(o,t,e,n,i,r){var s=r.z||o.length,a=new Ht(n+s+5*(1+Math.ceil(s/7e3))+i),c=a.subarray(n,a.length-i),f=r.l,u=(r.r||0)&7;if(t){u&&(c[0]=r.r>>3);for(var d=Em[t-1],m=d>>13,g=d&8191,x=(1<<e)-1,M=r.p||new ce(32768),b=r.h||new ce(x+1),A=Math.ceil(e/3),E=2*A,p=function(N){return(o[N]^o[N+1]<<A^o[N+2]<<E)&x},l=new Ja(25e3),_=new ce(288),h=new ce(32),R=0,w=0,y=r.i||0,v=0,S=r.w||0,T=0;y+2<s;++y){var C=p(y),P=y&32767,D=b[C];if(M[P]=D,b[C]=P,S<=y){var L=s-y;if((R>7e3||v>24576)&&(L>423||!f)){u=Sh(o,c,0,l,_,h,w,v,T,y-T,u),v=R=w=0,T=y;for(var U=0;U<286;++U)_[U]=0;for(var U=0;U<30;++U)h[U]=0}var B=2,F=0,$=g,V=P-D&32767;if(L>2&&C==p(y-V))for(var W=Math.min(m,L)-1,H=Math.min(32767,y),X=Math.min(258,L);V<=H&&--$&&P!=D;){if(o[y+B]==o[y+B-V]){for(var Y=0;Y<X&&o[y+Y]==o[y+Y-V];++Y);if(Y>B){if(B=Y,F=V,Y>W)break;for(var ct=Math.min(V,Y-2),et=0,U=0;U<ct;++U){var nt=y-V+U&32767,Q=M[nt],it=nt-Q&32767;it>et&&(et=it,D=nt)}}}P=D,D=M[P],V+=P-D&32767}if(F){l[v++]=268435456|qa[B]<<18|yh[F];var lt=qa[B]&31,yt=yh[F]&31;w+=Ka[lt]+Qa[yt],++_[257+lt],++h[yt],S=y+B,++R}else l[v++]=o[y],++_[o[y]]}}for(y=Math.max(y,S);y<s;++y)l[v++]=o[y],++_[o[y]];u=Sh(o,c,f,l,_,h,w,v,T,y-T,u),f||(r.r=u&7|c[u/8|0]<<3,u-=7,r.h=b,r.p=M,r.i=y,r.w=S)}else{for(var y=r.w||0;y<s+f;y+=65535){var st=y+65535;st>=s&&(c[u/8|0]=f,st=s),u=Ih(c,u+1,o.subarray(y,st))}r.i=s}return Rh(a,0,n+Ch(u)+i)},Cm=(function(){for(var o=new Int32Array(256),t=0;t<256;++t){for(var e=t,n=9;--n;)e=(e&1&&-306674912)^e>>>1;o[t]=e}return o})(),Rm=function(){var o=-1;return{p:function(t){for(var e=o,n=0;n<t.length;++n)e=Cm[e&255^t[n]]^e>>>8;o=e},d:function(){return~o}}};var Im=function(o,t,e,n,i){if(!i&&(i={l:1},t.dictionary)){var r=t.dictionary.subarray(-32768),s=new Ht(r.length+o.length);s.set(r),s.set(o,r.length),o=s,i.w=r.length}return Am(o,t.level==null?6:t.level,t.mem==null?i.l?Math.ceil(Math.max(8,Math.min(13,Math.log(o.length)))*1.5):20:12+t.mem,e,n,i)},Dh=function(o,t){var e={};for(var n in o)e[n]=o[n];for(var n in t)e[n]=t[n];return e};var kt=function(o,t,e){for(;e;++t)o[t]=e,e>>>=8};function Pm(o,t){return Im(o,t||{},0,0)}var Lh=function(o,t,e,n){for(var i in o){var r=o[i],s=t+i,a=n;Array.isArray(r)&&(a=Dh(n,r[1]),r=r[0]),r instanceof Ht?e[s]=[r,a]:(e[s+="/"]=[new Ht(0),a],Lh(r,s,e,n))}},bh=typeof TextEncoder<"u"&&new TextEncoder,Dm=typeof TextDecoder<"u"&&new TextDecoder,Lm=0;try{Dm.decode(Ph,{stream:!0}),Lm=1}catch{}function Ve(o,t){if(t){for(var e=new Ht(o.length),n=0;n<o.length;++n)e[n]=o.charCodeAt(n);return e}if(bh)return bh.encode(o);for(var i=o.length,r=new Ht(o.length+(o.length>>1)),s=0,a=function(u){r[s++]=u},n=0;n<i;++n){if(s+5>r.length){var c=new Ht(s+8+(i-n<<1));c.set(r),r=c}var f=o.charCodeAt(n);f<128||t?a(f):f<2048?(a(192|f>>6),a(128|f&63)):f>55295&&f<57344?(f=65536+(f&1047552)|o.charCodeAt(++n)&1023,a(240|f>>18),a(128|f>>12&63),a(128|f>>6&63),a(128|f&63)):(a(224|f>>12),a(128|f>>6&63),a(128|f&63))}return Rh(r,0,s)}var $a=function(o){var t=0;if(o)for(var e in o){var n=o[e].length;n>65535&&Hs(9),t+=n+4}return t},wh=function(o,t,e,n,i,r,s,a){var c=n.length,f=e.extra,u=a&&a.length,d=$a(f);kt(o,t,s!=null?33639248:67324752),t+=4,s!=null&&(o[t++]=20,o[t++]=e.os),o[t]=20,t+=2,o[t++]=e.flag<<1|(r<0&&8),o[t++]=i&&8,o[t++]=e.compression&255,o[t++]=e.compression>>8;var m=new Date(e.mtime==null?Date.now():e.mtime),g=m.getFullYear()-1980;if((g<0||g>119)&&Hs(10),kt(o,t,g<<25|m.getMonth()+1<<21|m.getDate()<<16|m.getHours()<<11|m.getMinutes()<<5|m.getSeconds()>>1),t+=4,r!=-1&&(kt(o,t,e.crc),kt(o,t+4,r<0?-r-2:r),kt(o,t+8,e.size)),kt(o,t+12,c),kt(o,t+14,d),t+=16,s!=null&&(kt(o,t,u),kt(o,t+6,e.attrs),kt(o,t+10,s),t+=14),o.set(n,t),t+=c,d)for(var x in f){var M=f[x],b=M.length;kt(o,t,+x),kt(o,t+2,b),o.set(M,t+4),t+=4+b}return u&&(o.set(a,t),t+=u),t},Um=function(o,t,e,n,i){kt(o,t,101010256),kt(o,t+8,e),kt(o,t+10,e),kt(o,t+12,n),kt(o,t+16,i)};function ja(o,t){t||(t={});var e={},n=[];Lh(o,"",e,t);var i=0,r=0;for(var s in e){var a=e[s],c=a[0],f=a[1],u=f.level==0?0:8,d=Ve(s),m=d.length,g=f.comment,x=g&&Ve(g),M=x&&x.length,b=$a(f.extra);m>65535&&Hs(11);var A=u?Pm(c,f):c,E=A.length,p=Rm();p.p(c),n.push(Dh(f,{size:c.length,crc:p.d(),c:A,f:d,m:x,u:m!=s.length||x&&g.length!=M,o:i,compression:u})),i+=30+m+b+E,r+=76+2*(m+b)+(M||0)+E}for(var l=new Ht(r+22),_=i,h=r-i,R=0;R<n.length;++R){var d=n[R];wh(l,d.o,d,d.f,d.u,d.c.length);var w=30+d.f.length+$a(d.extra);l.set(d.c,d.o+w),wh(l,i,d,d.f,d.u,d.c.length,d.o,d.m),i+=16+w+(d.m?d.m.length:0)}return Um(l,i,n.length,h,_),l}var fw=Object.freeze([0,.02,.04,.08,.16,.32,.64,1.28,2.56,5.12,10.24,20.48,40.96,81.92,163.84,250]);var Bm=o=>String(o).replace(/[<>&"']/g,t=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;","'":"&apos;"})[t]),sr=o=>Number(o.toFixed(6));function Uh(o){let t=[...new Set(o.flatMap(s=>[s.color,...s.vertexColors||[]]))],e=new Map(t.map((s,a)=>[s,a])),n=o.map((s,a)=>`<object id="${a+3}" type="model" name="${Bm(s.name)}" pid="1" pindex="${e.get(s.color)}"><mesh><vertices>${s.vertices.map(c=>`<vertex x="${sr(c[0])}" y="${sr(c[1])}" z="${sr(c[2])}"/>`).join("")}</vertices><triangles>${s.triangles.map(c=>`<triangle v1="${c[0]}" v2="${c[1]}" v3="${c[2]}" pid="2" p1="${e.get(s.vertexColors?.[c[0]]||s.color)}" p2="${e.get(s.vertexColors?.[c[1]]||s.color)}" p3="${e.get(s.vertexColors?.[c[2]]||s.color)}"/>`).join("")}</triangles></mesh></object>`).join(""),i=o.length+3,r=`<?xml version="1.0" encoding="UTF-8"?><model unit="millimeter" xml:lang="tr-TR" xmlns="http://schemas.microsoft.com/3dmanufacturing/core/2015/02" xmlns:m="http://schemas.microsoft.com/3dmanufacturing/material/2015/02"><metadata name="Application">Katman</metadata><resources><basematerials id="1">${t.map((s,a)=>`<base name="Renk ${a+1} ${s}" displaycolor="${s}FF"/>`).join("")}</basematerials><m:colorgroup id="2">${t.map(s=>`<m:color color="${s}FF"/>`).join("")}</m:colorgroup>${n}<object id="${i}" type="model" name="Katman model"><components>${o.map((s,a)=>`<component objectid="${a+3}"/>`).join("")}</components></object></resources><build><item objectid="${i}"/></build></model>`;return ja({"[Content_Types].xml":Ve('<?xml version="1.0" encoding="UTF-8"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="model" ContentType="application/vnd.ms-package.3dmanufacturing-3dmodel+xml"/></Types>'),"_rels/.rels":Ve('<?xml version="1.0" encoding="UTF-8"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Target="/3D/3dmodel.model" Id="rel0" Type="http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel"/></Relationships>'),"3D/3dmodel.model":Ve(r)},{level:6})}function Nh(o){let t=o.reduce((r,s)=>r+s.triangles.length,0),e=new ArrayBuffer(84+t*50),n=new DataView(e);new Uint8Array(e).set(Ve("Katman | millimeters | binary STL")),n.setUint32(80,t,!0);let i=84;for(let r of o)for(let s of r.triangles){let[a,c,f]=s.map(x=>r.vertices[x]),u=c.map((x,M)=>x-a[M]),d=f.map((x,M)=>x-a[M]),m=[u[1]*d[2]-u[2]*d[1],u[2]*d[0]-u[0]*d[2],u[0]*d[1]-u[1]*d[0]],g=Math.hypot(...m)||1;for(let x of[...m.map(M=>M/g),...a,...c,...f])n.setFloat32(i,x,!0),i+=4;i+=2}return new Uint8Array(e)}function Fh(o){let t=`# Katman \u2014 units: millimeters
mtllib model.mtl
`,e=1,n="";return o.forEach((i,r)=>{t+=`o part_${r}
usemtl color_${r}
`,t+=i.vertices.map((a,c)=>`v ${a.map(sr).join(" ")}${i.vertexColors?.[c]?" "+i.vertexColors[c].match(/\w\w/g).map(f=>sr(parseInt(f,16)/255)).join(" "):""}
`).join(""),t+=i.triangles.map(a=>`f ${a.map(c=>c+e).join(" ")}
`).join(""),e+=i.vertices.length;let s=i.vertexColors?[1,1,1]:i.color.match(/\w\w/g).map(a=>parseInt(a,16)/255);n+=`newmtl color_${r}
Kd ${s.join(" ")}
d 1

`}),ja({"model.obj":Ve(t),"model.mtl":Ve(n)})}function Bh(o,t){if(t==="stl")return Nh(o);let e=new Map,n=r=>{let s=r.join(",");return e.has(s)||e.set(s,"#"+new Dt(...r).getHexString()),e.get(s)},i=o.map(r=>{let s=r.color||n(r.colors?.[0]||[.48,.63,.85]),a=r.colors?.map(n);return{...r,color:s,vertexColors:a?.some(c=>c!==s)?a:void 0}});if(t==="3mf")return Uh(i);if(t==="obj")return Fh(i);throw new Error("Desteklenmeyen \xE7\u0131kt\u0131 bi\xE7imi.")}function Gs(o){let t=new Float32Array(o.vertices.length*3),e=new Float32Array(t.length),n=new Uint32Array(o.triangles.length*3);for(let a=0;a<o.vertices.length;a++)t.set(o.vertices[a],a*3),e.set(o.colors?.[a]||[.48,.63,.85],a*3);for(let a=0;a<o.triangles.length;a++)n.set(o.triangles[a],a*3);let i=new ge;i.setAttribute("position",new zt(t,3)),i.setIndex(new zt(n,1)),i.computeBoundingBox(),i.computeBoundingSphere();let r=o.triangles.length>5e3?gn.serialize(new gn(i,{indirect:!0}),{cloneBuffers:!1}):null,s={position:t,color:e,index:n,bvh:r,box:[i.boundingBox.min.toArray(),i.boundingBox.max.toArray()],sphere:[i.boundingSphere.center.toArray(),i.boundingSphere.radius]};return i.dispose(),s}function Ws(o){let t=new Set;for(let e of o){for(let n of[e.position,e.color,e.index,e.bvh?.index,e.bvh?.indirectBuffer])n&&t.add(n.buffer);for(let n of e.bvh?.roots||[])t.add(n)}return[...t]}var Oh;self.onmessage=async({data:o})=>{try{if(o.mode==="export"){let s=Bh(o.parts,o.type);self.postMessage({payload:s},[s.buffer]);return}if(o.mode==="prepare"){let s=o.parts.map(Gs);self.postMessage({displays:s},Ws(s));return}if(o.mode==="ground"){let s=o.parts.map(c=>({...c,vertices:c.vertices.map(f=>f.map((u,d)=>u+o.offset[d]))})),a=s.map(Gs);self.postMessage({parts:s,displays:a},Ws(a));return}Oh??=Om({locateFile:()=>new URL("./manifold/manifold.wasm",import.meta.url).href}).then(s=>(s.setup(),s));let t=await Oh,e=s=>self.postMessage({progress:s});e("Geometri kontrol ediliyor\u2026");let n,i;try{n=o.mode==="split"?sc(t,o.part):[rc(t,o.part,o.areas,o.mode)].filter(Boolean)}catch(s){if(o.mode==="split"||!s.message.includes("kapal\u0131 ve tutarl\u0131"))throw s;e("Kaynak a\u011F kusurlu. Se\xE7ili b\xF6lge y\xFCzey \xFCzerinden d\xFCzenleniyor\u2026"),n=[xh(o.part,o.areas,o.mode,e)].filter(Boolean),i="Kaynak dosyada a\xE7\u0131k/\xE7ak\u0131\u015Fan y\xFCzeyler var. Y\xFCzey i\u015Flemi uyguland\u0131; sonu\xE7 kapal\u0131 kat\u0131 olarak do\u011Frulanamad\u0131. Yazd\u0131rmadan \xF6nce dilimleyicide a\u011F kontrol\xFC yap\u0131n."}if(o.mode!=="split"&&n.length===1&&_h(o.part,n[0]))throw new Error("Model de\u011Fi\u015Fmedi: se\xE7ili hacim kald\u0131r\u0131lacak y\xFCzeyle kesi\u015Fmiyor. Referans\u0131, y\xF6n\xFC ve i\u015Flem derinli\u011Fini kontrol edin.");e("G\xF6r\xFCn\xFCm ve se\xE7im verileri haz\u0131rlan\u0131yor\u2026");let r=n.map(Gs);self.postMessage({parts:n,warning:i,displays:r},Ws(r))}catch(t){self.postMessage({error:t.message||String(t)})}};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
