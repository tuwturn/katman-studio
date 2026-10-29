import Dp from"./manifold/manifold.js";function Yi(a){if(!Array.isArray(a)||a.length<3||a.some(i=>i.length!==2||i.some(r=>!Number.isFinite(r))))throw new Error("En az \xFC\xE7 ge\xE7erli nokta se\xE7in.");let t=(i,r,s)=>(r[0]-i[0])*(s[1]-i[1])-(r[1]-i[1])*(s[0]-i[0]),e=(i,r,s)=>Math.abs(t(i,r,s))<1e-8&&s.every((o,h)=>o>=Math.min(i[h],r[h])-1e-8&&o<=Math.max(i[h],r[h])+1e-8);for(let i=0;i<a.length;i++){let r=a[i],s=a[(i+1)%a.length];if(Math.hypot(r[0]-s[0],r[1]-s[1])<1e-6)throw new Error("Ayn\u0131 noktay\u0131 art arda se\xE7meyin.");for(let o=i+2;o<a.length;o++){if(i===0&&o===a.length-1)continue;let h=a[o],u=a[(o+1)%a.length];if(t(r,s,h)*t(r,s,u)<0&&t(h,u,r)*t(h,u,s)<0||e(r,s,h)||e(r,s,u)||e(h,u,r)||e(h,u,s))throw new Error("Se\xE7im \xE7izgileri kesi\u015Fiyor. Son noktay\u0131 geri al\u0131p yeniden se\xE7in.")}}let n=a.reduce((i,r,s)=>{let o=a[(s+1)%a.length];return i+r[0]*o[1]-o[0]*r[1]},0);if(Math.abs(n)<1e-7)throw new Error("Se\xE7im alan\u0131 \xE7ok k\xFC\xE7\xFCk veya noktalar ayn\u0131 \xE7izgide.");return n>0?a.map(i=>[...i]):a.map(i=>[...i]).reverse()}function Ia(a,t){let e=(r,s,o)=>(s[0]-r[0])*(o[1]-r[1])-(s[1]-r[1])*(o[0]-r[0]),n=(r,s,o)=>Math.abs(e(r,s,o))<1e-7&&o.every((h,u)=>h>=Math.min(r[u],s[u])-1e-7&&h<=Math.max(r[u],s[u])+1e-7),i=(r,s)=>{let o=!1;for(let h=0,u=r.length-1;h<r.length;u=h++){let f=r[h],p=r[u];if(n(f,p,s))return!0;f[1]>s[1]!=p[1]>s[1]&&s[0]<(p[0]-f[0])*(s[1]-f[1])/(p[1]-f[1])+f[0]&&(o=!o)}return o};return a.some(r=>i(t,r))||t.some(r=>i(a,r))?!0:a.some((r,s)=>t.some((o,h)=>{let u=a[(s+1)%a.length],f=t[(h+1)%t.length];return e(r,u,o)*e(r,u,f)<0&&e(o,f,r)*e(o,f,u)<0||n(r,u,o)||n(r,u,f)||n(o,f,r)||n(o,f,u)}))}function Pa(a,t){let e=[];for(let i=0;i<t.vertices.length;i++)e.push(...t.vertices[i],...t.colors?.[i]||[.48,.63,.85]);let n=new a.Mesh({numProp:6,vertProperties:Float32Array.from(e),triVerts:Uint32Array.from(t.triangles.flat())});n.merge();try{return a.Manifold.ofMesh(n)}catch{throw new Error("Bu a\u011F kapal\u0131 ve tutarl\u0131 bir kat\u0131 de\u011Fil. A\xE7\u0131k/bozuk y\xFCzeyleri olan modeli \xF6nce a\u011F onar\u0131m\u0131ndan ge\xE7irin.")}}function Da(a,t={}){let e=a.getMesh(),n=[],i=[],r=[];for(let s=0;s<e.vertProperties.length;s+=e.numProp)n.push(Array.from(e.vertProperties.slice(s,s+3))),i.push(e.numProp>=6?Array.from(e.vertProperties.slice(s+3,s+6)):[.48,.63,.85]);for(let s=0;s<e.triVerts.length;s+=3)r.push(Array.from(e.triVerts.slice(s,s+3)));return{...t,vertices:n,colors:i,triangles:r}}function Zl(a,t,e,n=[.48,.63,.85]){let{u:i,v:r,n:s,center:o,width:h,height:u,depth:f,offset:p=0,shape:m="box"}=t;if(![h,u,f].every(d=>Number.isFinite(d)&&d>0))throw new Error("Alan ve i\u015Flem derinli\u011Fi s\u0131f\u0131rdan b\xFCy\xFCk olmal\u0131.");if(![i,r,s,o].every(d=>d?.length===3&&d.every(Number.isFinite)))throw new Error("\xD6nce d\xFCzeltilecek y\xFCzeyden referans se\xE7in.");let g=e==="fill"?p-f:p,_=m==="polygon"?a.Manifold.extrude([Yi(t.points)],f):m==="circle"?a.Manifold.cylinder(f,h/2,h/2,64,!1):a.Manifold.cube([h,u,f],!0),S=m==="box"?_.translate([0,0,f/2]):_;S!==_&&_.delete();let b=[...i,0,...r,0,...s,0,...o.map((d,c)=>d+s[c]*g),1],A=S.transform(b),E=A.setProperties(3,d=>{for(let c=0;c<3;c++)d[c]=n[c]});return S.delete(),A.delete(),E}function La(a,t,e,n){let i=Pa(a,t);try{for(let r of e){let s=r;if(n==="cut"){let u=1/0,f=-1/0;for(let m of t.vertices){let g=m.reduce((_,S,b)=>_+(S-r.center[b])*r.n[b],0);u=Math.min(u,g),f=Math.max(f,g)}let p=Math.max(.01,(f-u)*1e-5);s={...r,offset:u-p,depth:f-u+p*2}}let o=Zl(a,s,n,t.colors?.[0]),h=n==="fill"?i.add(o):i.subtract(o);o.delete(),i.delete(),i=h}if(i.status()!=="NoError")throw new Error("Kat\u0131 i\u015Flemi tamamlanamad\u0131: "+i.status());if(i.isEmpty()){if(n==="cut")return null;throw new Error("Se\xE7ilen alan modelin tamam\u0131n\u0131 kald\u0131r\u0131yor. Alan\u0131 veya derinli\u011Fi k\xFC\xE7\xFClt\xFCn.")}return Da(i,t)}finally{i.delete()}}function Na(a,t){let e=Pa(a,t),n=[];try{return n=e.decompose(),n.map((i,r)=>Da(i,{...t,name:`${t.name} \xB7 ${r+1}`}))}finally{n.forEach(i=>i.delete()),e.delete()}}var tn=0,Vr=1,Ri=2;var io=1;var ro=100;var so=204,oo=205;var wo=0,Eo=1,Ao=2,di=3,Co=4,Ro=5,Io=6,Po=7,ec=0;var Do=300;var ao=1e3,ci=1001,co=1002;var nc=1006;var ic=1008;var rc=1009;var sc=1015;var oc=1023;var pi=2300,_r=2301,mr=2302,lo=2400,ho=2401,uo=2402;var Lo="",ae="srgb",fo="srgb-linear",po="linear",gr="srgb";var Qe=7680;var mo=519;var go=35044;var li=2e3,_o=2001;var en=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,t);t.target=null}}},zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Fp=Math.PI/180,$l=180/Math.PI;function Ln(){let a=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(zt[a&255]+zt[a>>8&255]+zt[a>>16&255]+zt[a>>24&255]+"-"+zt[t&255]+zt[t>>8&255]+"-"+zt[t>>16&15|64]+zt[t>>24&255]+"-"+zt[e&63|128]+zt[e>>8&255]+"-"+zt[e>>16&255]+zt[e>>24&255]+zt[n&255]+zt[n>>8&255]+zt[n>>16&255]+zt[n>>24&255]).toLowerCase()}function nt(a,t,e){return Math.max(t,Math.min(e,a))}function Jl(a,t){return(a%t+t)%t}function Ps(a,t,e){return(1-e)*a+e*t}function ii(a,t){switch(t.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function qt(a,t){switch(t.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}var H=class a{constructor(t=0,e=0){a.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=nt(this.x,t.x,e.x),this.y=nt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=nt(this.x,t,e),this.y=nt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(nt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,s=this.y-t.y;return this.x=r*n-s*i+t.x,this.y=r*i+s*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Re=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,s,o){let h=n[i+0],u=n[i+1],f=n[i+2],p=n[i+3],m=r[s+0],g=r[s+1],_=r[s+2],S=r[s+3];if(o===0){t[e+0]=h,t[e+1]=u,t[e+2]=f,t[e+3]=p;return}if(o===1){t[e+0]=m,t[e+1]=g,t[e+2]=_,t[e+3]=S;return}if(p!==S||h!==m||u!==g||f!==_){let b=1-o,A=h*m+u*g+f*_+p*S,E=A>=0?1:-1,d=1-A*A;if(d>Number.EPSILON){let x=Math.sqrt(d),l=Math.atan2(x,A*E);b=Math.sin(b*l)/x,o=Math.sin(o*l)/x}let c=o*E;if(h=h*b+m*c,u=u*b+g*c,f=f*b+_*c,p=p*b+S*c,b===1-o){let x=1/Math.sqrt(h*h+u*u+f*f+p*p);h*=x,u*=x,f*=x,p*=x}}t[e]=h,t[e+1]=u,t[e+2]=f,t[e+3]=p}static multiplyQuaternionsFlat(t,e,n,i,r,s){let o=n[i],h=n[i+1],u=n[i+2],f=n[i+3],p=r[s],m=r[s+1],g=r[s+2],_=r[s+3];return t[e]=o*_+f*p+h*g-u*m,t[e+1]=h*_+f*m+u*p-o*g,t[e+2]=u*_+f*g+o*m-h*p,t[e+3]=f*_-o*p-h*m-u*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,s=t._order,o=Math.cos,h=Math.sin,u=o(n/2),f=o(i/2),p=o(r/2),m=h(n/2),g=h(i/2),_=h(r/2);switch(s){case"XYZ":this._x=m*f*p+u*g*_,this._y=u*g*p-m*f*_,this._z=u*f*_+m*g*p,this._w=u*f*p-m*g*_;break;case"YXZ":this._x=m*f*p+u*g*_,this._y=u*g*p-m*f*_,this._z=u*f*_-m*g*p,this._w=u*f*p+m*g*_;break;case"ZXY":this._x=m*f*p-u*g*_,this._y=u*g*p+m*f*_,this._z=u*f*_+m*g*p,this._w=u*f*p-m*g*_;break;case"ZYX":this._x=m*f*p-u*g*_,this._y=u*g*p+m*f*_,this._z=u*f*_-m*g*p,this._w=u*f*p+m*g*_;break;case"YZX":this._x=m*f*p+u*g*_,this._y=u*g*p+m*f*_,this._z=u*f*_-m*g*p,this._w=u*f*p-m*g*_;break;case"XZY":this._x=m*f*p-u*g*_,this._y=u*g*p-m*f*_,this._z=u*f*_+m*g*p,this._w=u*f*p+m*g*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],s=e[1],o=e[5],h=e[9],u=e[2],f=e[6],p=e[10],m=n+o+p;if(m>0){let g=.5/Math.sqrt(m+1);this._w=.25/g,this._x=(f-h)*g,this._y=(r-u)*g,this._z=(s-i)*g}else if(n>o&&n>p){let g=2*Math.sqrt(1+n-o-p);this._w=(f-h)/g,this._x=.25*g,this._y=(i+s)/g,this._z=(r+u)/g}else if(o>p){let g=2*Math.sqrt(1+o-n-p);this._w=(r-u)/g,this._x=(i+s)/g,this._y=.25*g,this._z=(h+f)/g}else{let g=2*Math.sqrt(1+p-n-o);this._w=(s-i)/g,this._x=(r+u)/g,this._y=(h+f)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(nt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,s=t._w,o=e._x,h=e._y,u=e._z,f=e._w;return this._x=n*f+s*o+i*u-r*h,this._y=i*f+s*h+r*o-n*u,this._z=r*f+s*u+n*h-i*o,this._w=s*f-n*o-i*h-r*u,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,s=this._w,o=s*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=s,this._x=n,this._y=i,this._z=r,this;let h=1-o*o;if(h<=Number.EPSILON){let g=1-e;return this._w=g*s+e*this._w,this._x=g*n+e*this._x,this._y=g*i+e*this._y,this._z=g*r+e*this._z,this.normalize(),this}let u=Math.sqrt(h),f=Math.atan2(u,o),p=Math.sin((1-e)*f)/u,m=Math.sin(e*f)/u;return this._w=s*p+this._w*m,this._x=n*p+this._x*m,this._y=i*p+this._y*m,this._z=r*p+this._z*m,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class a{constructor(t=0,e=0,n=0){a.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ua.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ua.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,s=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*s,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*s,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*s,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,s=t.y,o=t.z,h=t.w,u=2*(s*i-o*n),f=2*(o*e-r*i),p=2*(r*n-s*e);return this.x=e+h*u+s*p-o*f,this.y=n+h*f+o*u-r*p,this.z=i+h*p+r*f-s*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=nt(this.x,t.x,e.x),this.y=nt(this.y,t.y,e.y),this.z=nt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=nt(this.x,t,e),this.y=nt(this.y,t,e),this.z=nt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,s=e.x,o=e.y,h=e.z;return this.x=i*h-r*o,this.y=r*s-n*h,this.z=n*o-i*s,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ds.copy(this).projectOnVector(t),this.sub(Ds)}reflect(t){return this.sub(Ds.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(nt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ds=new I,Ua=new Re,it=class a{constructor(t,e,n,i,r,s,o,h,u){a.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,s,o,h,u)}set(t,e,n,i,r,s,o,h,u){let f=this.elements;return f[0]=t,f[1]=i,f[2]=o,f[3]=e,f[4]=r,f[5]=h,f[6]=n,f[7]=s,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,s=n[0],o=n[3],h=n[6],u=n[1],f=n[4],p=n[7],m=n[2],g=n[5],_=n[8],S=i[0],b=i[3],A=i[6],E=i[1],d=i[4],c=i[7],x=i[2],l=i[5],R=i[8];return r[0]=s*S+o*E+h*x,r[3]=s*b+o*d+h*l,r[6]=s*A+o*c+h*R,r[1]=u*S+f*E+p*x,r[4]=u*b+f*d+p*l,r[7]=u*A+f*c+p*R,r[2]=m*S+g*E+_*x,r[5]=m*b+g*d+_*l,r[8]=m*A+g*c+_*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],s=t[4],o=t[5],h=t[6],u=t[7],f=t[8];return e*s*f-e*o*u-n*r*f+n*o*h+i*r*u-i*s*h}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],s=t[4],o=t[5],h=t[6],u=t[7],f=t[8],p=f*s-o*u,m=o*h-f*r,g=u*r-s*h,_=e*p+n*m+i*g;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/_;return t[0]=p*S,t[1]=(i*u-f*n)*S,t[2]=(o*n-i*s)*S,t[3]=m*S,t[4]=(f*e-i*h)*S,t[5]=(i*r-o*e)*S,t[6]=g*S,t[7]=(n*h-u*e)*S,t[8]=(s*e-n*r)*S,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,s,o){let h=Math.cos(r),u=Math.sin(r);return this.set(n*h,n*u,-n*(h*s+u*o)+s+t,-i*u,i*h,-i*(-u*s+h*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ls.makeScale(t,e)),this}rotate(t){return this.premultiply(Ls.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ls.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ls=new it;function ac(a){for(let t=a.length-1;t>=0;--t)if(a[t]>=65535)return!0;return!1}function xo(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}var Fa={};function yo(a){a in Fa||(Fa[a]=!0,console.warn(a))}var Ba=new it().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Oa=new it().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Kl(){let a={enabled:!0,workingColorSpace:fo,spaces:{},convert:function(i,r,s){return this.enabled===!1||r===s||!r||!s||(this.spaces[r].transfer===gr&&(i.r=Ce(i.r),i.g=Ce(i.g),i.b=Ce(i.b)),this.spaces[r].primaries!==this.spaces[s].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===gr&&(i.r=An(i.r),i.g=An(i.g),i.b=An(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Lo?po:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,s){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return yo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return yo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return a.define({[fo]:{primaries:t,whitePoint:n,transfer:po,toXYZ:Ba,fromXYZ:Oa,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ae},outputColorSpaceConfig:{drawingBufferColorSpace:ae}},[ae]:{primaries:t,whitePoint:n,transfer:gr,toXYZ:Ba,fromXYZ:Oa,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ae}}}),a}var oe=Kl();function Ce(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function An(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}var mn,xr=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{mn===void 0&&(mn=xo("canvas")),mn.width=t.width,mn.height=t.height;let i=mn.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=mn}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=xo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let s=0;s<r.length;s++)r[s]=Ce(r[s]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ce(e[n]/255)*255):e[n]=Ce(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Ql=0,yr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ql++}),this.uuid=Ln(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let s=0,o=i.length;s<o;s++)i[s].isDataTexture?r.push(Ns(i[s].image)):r.push(Ns(i[s]))}else r=Ns(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function Ns(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?xr.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var jl=0,Us=new I,Cn=class a extends en{constructor(t=a.DEFAULT_IMAGE,e=a.DEFAULT_MAPPING,n=ci,i=ci,r=nc,s=ic,o=oc,h=rc,u=a.DEFAULT_ANISOTROPY,f=Lo){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jl++}),this.uuid=Ln(),this.name="",this.source=new yr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=s,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=h,this.offset=new H(0,0),this.repeat=new H(1,1),this.center=new H(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Us).x}get height(){return this.source.getSize(Us).y}get depth(){return this.source.getSize(Us).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Do)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ao:t.x=t.x-Math.floor(t.x);break;case ci:t.x=t.x<0?0:1;break;case co:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ao:t.y=t.y-Math.floor(t.y);break;case ci:t.y=t.y<0?0:1;break;case co:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Cn.DEFAULT_IMAGE=null;Cn.DEFAULT_MAPPING=Do;Cn.DEFAULT_ANISOTROPY=1;var Kt=class a{constructor(t=0,e=0,n=0,i=1){a.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i+s[12]*r,this.y=s[1]*e+s[5]*n+s[9]*i+s[13]*r,this.z=s[2]*e+s[6]*n+s[10]*i+s[14]*r,this.w=s[3]*e+s[7]*n+s[11]*i+s[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,h=t.elements,u=h[0],f=h[4],p=h[8],m=h[1],g=h[5],_=h[9],S=h[2],b=h[6],A=h[10];if(Math.abs(f-m)<.01&&Math.abs(p-S)<.01&&Math.abs(_-b)<.01){if(Math.abs(f+m)<.1&&Math.abs(p+S)<.1&&Math.abs(_+b)<.1&&Math.abs(u+g+A-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let d=(u+1)/2,c=(g+1)/2,x=(A+1)/2,l=(f+m)/4,R=(p+S)/4,w=(_+b)/4;return d>c&&d>x?d<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(d),i=l/n,r=R/n):c>x?c<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(c),n=l/i,r=w/i):x<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(x),n=R/r,i=w/r),this.set(n,i,r,e),this}let E=Math.sqrt((b-_)*(b-_)+(p-S)*(p-S)+(m-f)*(m-f));return Math.abs(E)<.001&&(E=1),this.x=(b-_)/E,this.y=(p-S)/E,this.z=(m-f)/E,this.w=Math.acos((u+g+A-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=nt(this.x,t.x,e.x),this.y=nt(this.y,t.y,e.y),this.z=nt(this.z,t.z,e.z),this.w=nt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=nt(this.x,t,e),this.y=nt(this.y,t,e),this.z=nt(this.z,t,e),this.w=nt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};var Rt=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(le.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(le.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=le.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let s=0,o=r.count;s<o;s++)t.isMesh===!0?t.getVertexPosition(s,le):le.fromBufferAttribute(r,s),le.applyMatrix4(t.matrixWorld),this.expandByPoint(le);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Zi.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Zi.copy(n.boundingBox)),Zi.applyMatrix4(t.matrixWorld),this.union(Zi)}let i=t.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,le),le.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ri),$i.subVectors(this.max,ri),gn.subVectors(t.a,ri),_n.subVectors(t.b,ri),xn.subVectors(t.c,ri),Ne.subVectors(_n,gn),Ue.subVectors(xn,_n),$e.subVectors(gn,xn);let e=[0,-Ne.z,Ne.y,0,-Ue.z,Ue.y,0,-$e.z,$e.y,Ne.z,0,-Ne.x,Ue.z,0,-Ue.x,$e.z,0,-$e.x,-Ne.y,Ne.x,0,-Ue.y,Ue.x,0,-$e.y,$e.x,0];return!Fs(e,gn,_n,xn,$i)||(e=[1,0,0,0,1,0,0,0,1],!Fs(e,gn,_n,xn,$i))?!1:(Ji.crossVectors(Ne,Ue),e=[Ji.x,Ji.y,Ji.z],Fs(e,gn,_n,xn,$i))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,le).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(le).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(be[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),be[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),be[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),be[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),be[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),be[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),be[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),be[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(be),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},be=[new I,new I,new I,new I,new I,new I,new I,new I],le=new I,Zi=new Rt,gn=new I,_n=new I,xn=new I,Ne=new I,Ue=new I,$e=new I,ri=new I,$i=new I,Ji=new I,Je=new I;function Fs(a,t,e,n,i){for(let r=0,s=a.length-3;r<=s;r+=3){Je.fromArray(a,r);let o=i.x*Math.abs(Je.x)+i.y*Math.abs(Je.y)+i.z*Math.abs(Je.z),h=t.dot(Je),u=e.dot(Je),f=n.dot(Je);if(Math.max(-Math.max(h,u,f),Math.min(h,u,f))>o)return!1}return!0}var th=new Rt,si=new I,Bs=new I,mi=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):th.setFromPoints(t).getCenter(n);let i=0;for(let r=0,s=t.length;r<s;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;si.subVectors(t,this.center);let e=si.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(si,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Bs.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(si.copy(t.center).add(Bs)),this.expandByPoint(si.copy(t.center).sub(Bs))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Te=new I,Os=new I,Ki=new I,Fe=new I,zs=new I,Qi=new I,Vs=new I,ye=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Te)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Te.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Te.copy(this.origin).addScaledVector(this.direction,e),Te.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Os.copy(t).add(e).multiplyScalar(.5),Ki.copy(e).sub(t).normalize(),Fe.copy(this.origin).sub(Os);let r=t.distanceTo(e)*.5,s=-this.direction.dot(Ki),o=Fe.dot(this.direction),h=-Fe.dot(Ki),u=Fe.lengthSq(),f=Math.abs(1-s*s),p,m,g,_;if(f>0)if(p=s*h-o,m=s*o-h,_=r*f,p>=0)if(m>=-_)if(m<=_){let S=1/f;p*=S,m*=S,g=p*(p+s*m+2*o)+m*(s*p+m+2*h)+u}else m=r,p=Math.max(0,-(s*m+o)),g=-p*p+m*(m+2*h)+u;else m=-r,p=Math.max(0,-(s*m+o)),g=-p*p+m*(m+2*h)+u;else m<=-_?(p=Math.max(0,-(-s*r+o)),m=p>0?-r:Math.min(Math.max(-r,-h),r),g=-p*p+m*(m+2*h)+u):m<=_?(p=0,m=Math.min(Math.max(-r,-h),r),g=m*(m+2*h)+u):(p=Math.max(0,-(s*r+o)),m=p>0?r:Math.min(Math.max(-r,-h),r),g=-p*p+m*(m+2*h)+u);else m=s>0?-r:r,p=Math.max(0,-(s*m+o)),g=-p*p+m*(m+2*h)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,p),i&&i.copy(Os).addScaledVector(Ki,m),g}intersectSphere(t,e){Te.subVectors(t.center,this.origin);let n=Te.dot(this.direction),i=Te.dot(Te)-n*n,r=t.radius*t.radius;if(i>r)return null;let s=Math.sqrt(r-i),o=n-s,h=n+s;return h<0?null:o<0?this.at(h,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,s,o,h,u=1/this.direction.x,f=1/this.direction.y,p=1/this.direction.z,m=this.origin;return u>=0?(n=(t.min.x-m.x)*u,i=(t.max.x-m.x)*u):(n=(t.max.x-m.x)*u,i=(t.min.x-m.x)*u),f>=0?(r=(t.min.y-m.y)*f,s=(t.max.y-m.y)*f):(r=(t.max.y-m.y)*f,s=(t.min.y-m.y)*f),n>s||r>i||((r>n||isNaN(n))&&(n=r),(s<i||isNaN(i))&&(i=s),p>=0?(o=(t.min.z-m.z)*p,h=(t.max.z-m.z)*p):(o=(t.max.z-m.z)*p,h=(t.min.z-m.z)*p),n>h||o>i)||((o>n||n!==n)&&(n=o),(h<i||i!==i)&&(i=h),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Te)!==null}intersectTriangle(t,e,n,i,r){zs.subVectors(e,t),Qi.subVectors(n,t),Vs.crossVectors(zs,Qi);let s=this.direction.dot(Vs),o;if(s>0){if(i)return null;o=1}else if(s<0)o=-1,s=-s;else return null;Fe.subVectors(this.origin,t);let h=o*this.direction.dot(Qi.crossVectors(Fe,Qi));if(h<0)return null;let u=o*this.direction.dot(zs.cross(Fe));if(u<0||h+u>s)return null;let f=-o*Fe.dot(Vs);return f<0?null:this.at(f/s,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ft=class a{constructor(t,e,n,i,r,s,o,h,u,f,p,m,g,_,S,b){a.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,s,o,h,u,f,p,m,g,_,S,b)}set(t,e,n,i,r,s,o,h,u,f,p,m,g,_,S,b){let A=this.elements;return A[0]=t,A[4]=e,A[8]=n,A[12]=i,A[1]=r,A[5]=s,A[9]=o,A[13]=h,A[2]=u,A[6]=f,A[10]=p,A[14]=m,A[3]=g,A[7]=_,A[11]=S,A[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new a().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/yn.setFromMatrixColumn(t,0).length(),r=1/yn.setFromMatrixColumn(t,1).length(),s=1/yn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*s,e[9]=n[9]*s,e[10]=n[10]*s,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,s=Math.cos(n),o=Math.sin(n),h=Math.cos(i),u=Math.sin(i),f=Math.cos(r),p=Math.sin(r);if(t.order==="XYZ"){let m=s*f,g=s*p,_=o*f,S=o*p;e[0]=h*f,e[4]=-h*p,e[8]=u,e[1]=g+_*u,e[5]=m-S*u,e[9]=-o*h,e[2]=S-m*u,e[6]=_+g*u,e[10]=s*h}else if(t.order==="YXZ"){let m=h*f,g=h*p,_=u*f,S=u*p;e[0]=m+S*o,e[4]=_*o-g,e[8]=s*u,e[1]=s*p,e[5]=s*f,e[9]=-o,e[2]=g*o-_,e[6]=S+m*o,e[10]=s*h}else if(t.order==="ZXY"){let m=h*f,g=h*p,_=u*f,S=u*p;e[0]=m-S*o,e[4]=-s*p,e[8]=_+g*o,e[1]=g+_*o,e[5]=s*f,e[9]=S-m*o,e[2]=-s*u,e[6]=o,e[10]=s*h}else if(t.order==="ZYX"){let m=s*f,g=s*p,_=o*f,S=o*p;e[0]=h*f,e[4]=_*u-g,e[8]=m*u+S,e[1]=h*p,e[5]=S*u+m,e[9]=g*u-_,e[2]=-u,e[6]=o*h,e[10]=s*h}else if(t.order==="YZX"){let m=s*h,g=s*u,_=o*h,S=o*u;e[0]=h*f,e[4]=S-m*p,e[8]=_*p+g,e[1]=p,e[5]=s*f,e[9]=-o*f,e[2]=-u*f,e[6]=g*p+_,e[10]=m-S*p}else if(t.order==="XZY"){let m=s*h,g=s*u,_=o*h,S=o*u;e[0]=h*f,e[4]=-p,e[8]=u*f,e[1]=m*p+S,e[5]=s*f,e[9]=g*p-_,e[2]=_*p-g,e[6]=o*f,e[10]=S*p+m}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(eh,t,nh)}lookAt(t,e,n){let i=this.elements;return $t.subVectors(t,e),$t.lengthSq()===0&&($t.z=1),$t.normalize(),Be.crossVectors(n,$t),Be.lengthSq()===0&&(Math.abs(n.z)===1?$t.x+=1e-4:$t.z+=1e-4,$t.normalize(),Be.crossVectors(n,$t)),Be.normalize(),ji.crossVectors($t,Be),i[0]=Be.x,i[4]=ji.x,i[8]=$t.x,i[1]=Be.y,i[5]=ji.y,i[9]=$t.y,i[2]=Be.z,i[6]=ji.z,i[10]=$t.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,s=n[0],o=n[4],h=n[8],u=n[12],f=n[1],p=n[5],m=n[9],g=n[13],_=n[2],S=n[6],b=n[10],A=n[14],E=n[3],d=n[7],c=n[11],x=n[15],l=i[0],R=i[4],w=i[8],M=i[12],y=i[1],v=i[5],T=i[9],C=i[13],P=i[2],D=i[6],L=i[10],N=i[14],z=i[3],F=i[7],Z=i[11],k=i[15];return r[0]=s*l+o*y+h*P+u*z,r[4]=s*R+o*v+h*D+u*F,r[8]=s*w+o*T+h*L+u*Z,r[12]=s*M+o*C+h*N+u*k,r[1]=f*l+p*y+m*P+g*z,r[5]=f*R+p*v+m*D+g*F,r[9]=f*w+p*T+m*L+g*Z,r[13]=f*M+p*C+m*N+g*k,r[2]=_*l+S*y+b*P+A*z,r[6]=_*R+S*v+b*D+A*F,r[10]=_*w+S*T+b*L+A*Z,r[14]=_*M+S*C+b*N+A*k,r[3]=E*l+d*y+c*P+x*z,r[7]=E*R+d*v+c*D+x*F,r[11]=E*w+d*T+c*L+x*Z,r[15]=E*M+d*C+c*N+x*k,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],s=t[1],o=t[5],h=t[9],u=t[13],f=t[2],p=t[6],m=t[10],g=t[14],_=t[3],S=t[7],b=t[11],A=t[15];return _*(+r*h*p-i*u*p-r*o*m+n*u*m+i*o*g-n*h*g)+S*(+e*h*g-e*u*m+r*s*m-i*s*g+i*u*f-r*h*f)+b*(+e*u*p-e*o*g-r*s*p+n*s*g+r*o*f-n*u*f)+A*(-i*o*f-e*h*p+e*o*m+i*s*p-n*s*m+n*h*f)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],s=t[4],o=t[5],h=t[6],u=t[7],f=t[8],p=t[9],m=t[10],g=t[11],_=t[12],S=t[13],b=t[14],A=t[15],E=p*b*u-S*m*u+S*h*g-o*b*g-p*h*A+o*m*A,d=_*m*u-f*b*u-_*h*g+s*b*g+f*h*A-s*m*A,c=f*S*u-_*p*u+_*o*g-s*S*g-f*o*A+s*p*A,x=_*p*h-f*S*h-_*o*m+s*S*m+f*o*b-s*p*b,l=e*E+n*d+i*c+r*x;if(l===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/l;return t[0]=E*R,t[1]=(S*m*r-p*b*r-S*i*g+n*b*g+p*i*A-n*m*A)*R,t[2]=(o*b*r-S*h*r+S*i*u-n*b*u-o*i*A+n*h*A)*R,t[3]=(p*h*r-o*m*r-p*i*u+n*m*u+o*i*g-n*h*g)*R,t[4]=d*R,t[5]=(f*b*r-_*m*r+_*i*g-e*b*g-f*i*A+e*m*A)*R,t[6]=(_*h*r-s*b*r-_*i*u+e*b*u+s*i*A-e*h*A)*R,t[7]=(s*m*r-f*h*r+f*i*u-e*m*u-s*i*g+e*h*g)*R,t[8]=c*R,t[9]=(_*p*r-f*S*r-_*n*g+e*S*g+f*n*A-e*p*A)*R,t[10]=(s*S*r-_*o*r+_*n*u-e*S*u-s*n*A+e*o*A)*R,t[11]=(f*o*r-s*p*r-f*n*u+e*p*u+s*n*g-e*o*g)*R,t[12]=x*R,t[13]=(f*S*i-_*p*i+_*n*m-e*S*m-f*n*b+e*p*b)*R,t[14]=(_*o*i-s*S*i-_*n*h+e*S*h+s*n*b-e*o*b)*R,t[15]=(s*p*i-f*o*i+f*n*h-e*p*h-s*n*m+e*o*m)*R,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,s=t.x,o=t.y,h=t.z,u=r*s,f=r*o;return this.set(u*s+n,u*o-i*h,u*h+i*o,0,u*o+i*h,f*o+n,f*h-i*s,0,u*h-i*o,f*h+i*s,r*h*h+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,s){return this.set(1,n,r,0,t,1,s,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,s=e._y,o=e._z,h=e._w,u=r+r,f=s+s,p=o+o,m=r*u,g=r*f,_=r*p,S=s*f,b=s*p,A=o*p,E=h*u,d=h*f,c=h*p,x=n.x,l=n.y,R=n.z;return i[0]=(1-(S+A))*x,i[1]=(g+c)*x,i[2]=(_-d)*x,i[3]=0,i[4]=(g-c)*l,i[5]=(1-(m+A))*l,i[6]=(b+E)*l,i[7]=0,i[8]=(_+d)*R,i[9]=(b-E)*R,i[10]=(1-(m+S))*R,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=yn.set(i[0],i[1],i[2]).length(),s=yn.set(i[4],i[5],i[6]).length(),o=yn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],he.copy(this);let u=1/r,f=1/s,p=1/o;return he.elements[0]*=u,he.elements[1]*=u,he.elements[2]*=u,he.elements[4]*=f,he.elements[5]*=f,he.elements[6]*=f,he.elements[8]*=p,he.elements[9]*=p,he.elements[10]*=p,e.setFromRotationMatrix(he),n.x=r,n.y=s,n.z=o,this}makePerspective(t,e,n,i,r,s,o=li,h=!1){let u=this.elements,f=2*r/(e-t),p=2*r/(n-i),m=(e+t)/(e-t),g=(n+i)/(n-i),_,S;if(h)_=r/(s-r),S=s*r/(s-r);else if(o===li)_=-(s+r)/(s-r),S=-2*s*r/(s-r);else if(o===_o)_=-s/(s-r),S=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=f,u[4]=0,u[8]=m,u[12]=0,u[1]=0,u[5]=p,u[9]=g,u[13]=0,u[2]=0,u[6]=0,u[10]=_,u[14]=S,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(t,e,n,i,r,s,o=li,h=!1){let u=this.elements,f=2/(e-t),p=2/(n-i),m=-(e+t)/(e-t),g=-(n+i)/(n-i),_,S;if(h)_=1/(s-r),S=s/(s-r);else if(o===li)_=-2/(s-r),S=-(s+r)/(s-r);else if(o===_o)_=-1/(s-r),S=-r/(s-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=f,u[4]=0,u[8]=0,u[12]=m,u[1]=0,u[5]=p,u[9]=0,u[13]=g,u[2]=0,u[6]=0,u[10]=_,u[14]=S,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},yn=new I,he=new ft,eh=new I(0,0,0),nh=new I(1,1,1),Be=new I,ji=new I,$t=new I,za=new ft,Va=new Re,Rn=class a{constructor(t=0,e=0,n=0,i=a.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],s=i[4],o=i[8],h=i[1],u=i[5],f=i[9],p=i[2],m=i[6],g=i[10];switch(e){case"XYZ":this._y=Math.asin(nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,g),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(m,u),this._z=0);break;case"YXZ":this._x=Math.asin(-nt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(h,u)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(nt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-p,g),this._z=Math.atan2(-s,u)):(this._y=0,this._z=Math.atan2(h,r));break;case"ZYX":this._y=Math.asin(-nt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(m,g),this._z=Math.atan2(h,r)):(this._x=0,this._z=Math.atan2(-s,u));break;case"YZX":this._z=Math.asin(nt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-nt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(m,u),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-f,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return za.makeRotationFromQuaternion(t),this.setFromRotationMatrix(za,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Va.setFromEuler(this),this.setFromQuaternion(Va,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Rn.DEFAULT_ORDER="XYZ";var vr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},ih=0,ka=new I,vn=new Re,we=new ft,tr=new I,oi=new I,rh=new I,sh=new Re,Ha=new I(1,0,0),Ga=new I(0,1,0),Wa=new I(0,0,1),Xa={type:"added"},oh={type:"removed"},Mn={type:"childadded",child:null},ks={type:"childremoved",child:null},ze=class a extends en{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ih++}),this.uuid=Ln(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=a.DEFAULT_UP.clone();let t=new I,e=new Rn,n=new Re,i=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function s(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ft},normalMatrix:{value:new it}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=a.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=a.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return vn.setFromAxisAngle(t,e),this.quaternion.multiply(vn),this}rotateOnWorldAxis(t,e){return vn.setFromAxisAngle(t,e),this.quaternion.premultiply(vn),this}rotateX(t){return this.rotateOnAxis(Ha,t)}rotateY(t){return this.rotateOnAxis(Ga,t)}rotateZ(t){return this.rotateOnAxis(Wa,t)}translateOnAxis(t,e){return ka.copy(t).applyQuaternion(this.quaternion),this.position.add(ka.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ha,t)}translateY(t){return this.translateOnAxis(Ga,t)}translateZ(t){return this.translateOnAxis(Wa,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(we.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?tr.copy(t):tr.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),oi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?we.lookAt(oi,tr,this.up):we.lookAt(tr,oi,this.up),this.quaternion.setFromRotationMatrix(we),i&&(we.extractRotation(i.matrixWorld),vn.setFromRotationMatrix(we),this.quaternion.premultiply(vn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Xa),Mn.child=t,this.dispatchEvent(Mn),Mn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(oh),ks.child=t,this.dispatchEvent(ks),ks.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),we.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),we.multiply(t.parent.matrixWorld)),t.applyMatrix4(we),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Xa),Mn.child=t,this.dispatchEvent(Mn),Mn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let s=this.children[n].getObjectByProperty(t,e);if(s!==void 0)return s}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oi,t,rh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oi,sh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,h){return o[h.uuid]===void 0&&(o[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let h=o.shapes;if(Array.isArray(h))for(let u=0,f=h.length;u<f;u++){let p=h[u];r(t.shapes,p)}else r(t.shapes,h)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let h=0,u=this.material.length;h<u;h++)o.push(r(t.materials,this.material[h]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let h=this.animations[o];i.animations.push(r(t.animations,h))}}if(e){let o=s(t.geometries),h=s(t.materials),u=s(t.textures),f=s(t.images),p=s(t.shapes),m=s(t.skeletons),g=s(t.animations),_=s(t.nodes);o.length>0&&(n.geometries=o),h.length>0&&(n.materials=h),u.length>0&&(n.textures=u),f.length>0&&(n.images=f),p.length>0&&(n.shapes=p),m.length>0&&(n.skeletons=m),g.length>0&&(n.animations=g),_.length>0&&(n.nodes=_)}return n.object=i,n;function s(o){let h=[];for(let u in o){let f=o[u];delete f.metadata,h.push(f)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};ze.DEFAULT_UP=new I(0,1,0);ze.DEFAULT_MATRIX_AUTO_UPDATE=!0;ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ue=new I,Ee=new I,Hs=new I,Ae=new I,Sn=new I,bn=new I,qa=new I,Gs=new I,Ws=new I,Xs=new I,qs=new Kt,Ys=new Kt,Zs=new Kt,Tt=class a{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),ue.subVectors(t,e),i.cross(ue);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){ue.subVectors(i,e),Ee.subVectors(n,e),Hs.subVectors(t,e);let s=ue.dot(ue),o=ue.dot(Ee),h=ue.dot(Hs),u=Ee.dot(Ee),f=Ee.dot(Hs),p=s*u-o*o;if(p===0)return r.set(0,0,0),null;let m=1/p,g=(u*h-o*f)*m,_=(s*f-o*h)*m;return r.set(1-g-_,_,g)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Ae)===null?!1:Ae.x>=0&&Ae.y>=0&&Ae.x+Ae.y<=1}static getInterpolation(t,e,n,i,r,s,o,h){return this.getBarycoord(t,e,n,i,Ae)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(r,Ae.x),h.addScaledVector(s,Ae.y),h.addScaledVector(o,Ae.z),h)}static getInterpolatedAttribute(t,e,n,i,r,s){return qs.setScalar(0),Ys.setScalar(0),Zs.setScalar(0),qs.fromBufferAttribute(t,e),Ys.fromBufferAttribute(t,n),Zs.fromBufferAttribute(t,i),s.setScalar(0),s.addScaledVector(qs,r.x),s.addScaledVector(Ys,r.y),s.addScaledVector(Zs,r.z),s}static isFrontFacing(t,e,n,i){return ue.subVectors(n,e),Ee.subVectors(t,e),ue.cross(Ee).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ue.subVectors(this.c,this.b),Ee.subVectors(this.a,this.b),ue.cross(Ee).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return a.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return a.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return a.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return a.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return a.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,s,o;Sn.subVectors(i,n),bn.subVectors(r,n),Gs.subVectors(t,n);let h=Sn.dot(Gs),u=bn.dot(Gs);if(h<=0&&u<=0)return e.copy(n);Ws.subVectors(t,i);let f=Sn.dot(Ws),p=bn.dot(Ws);if(f>=0&&p<=f)return e.copy(i);let m=h*p-f*u;if(m<=0&&h>=0&&f<=0)return s=h/(h-f),e.copy(n).addScaledVector(Sn,s);Xs.subVectors(t,r);let g=Sn.dot(Xs),_=bn.dot(Xs);if(_>=0&&g<=_)return e.copy(r);let S=g*u-h*_;if(S<=0&&u>=0&&_<=0)return o=u/(u-_),e.copy(n).addScaledVector(bn,o);let b=f*_-g*p;if(b<=0&&p-f>=0&&g-_>=0)return qa.subVectors(r,i),o=(p-f)/(p-f+(g-_)),e.copy(i).addScaledVector(qa,o);let A=1/(b+S+m);return s=S*A,o=m*A,e.copy(n).addScaledVector(Sn,s).addScaledVector(bn,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},cc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Oe={h:0,s:0,l:0},er={h:0,s:0,l:0};function $s(a,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?a+(t-a)*6*e:e<1/2?t:e<2/3?a+(t-a)*6*(2/3-e):a}var Ft=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ae){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=oe.workingColorSpace){return this.r=t,this.g=e,this.b=n,oe.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=oe.workingColorSpace){if(t=Jl(t,1),e=nt(e,0,1),n=nt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,s=2*n-r;this.r=$s(s,r,t+1/3),this.g=$s(s,r,t),this.b=$s(s,r,t-1/3)}return oe.colorSpaceToWorking(this,i),this}setStyle(t,e=ae){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,s=i[1],o=i[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(s===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ae){let n=cc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ce(t.r),this.g=Ce(t.g),this.b=Ce(t.b),this}copyLinearToSRGB(t){return this.r=An(t.r),this.g=An(t.g),this.b=An(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ae){return oe.workingToColorSpace(Vt.copy(this),t),Math.round(nt(Vt.r*255,0,255))*65536+Math.round(nt(Vt.g*255,0,255))*256+Math.round(nt(Vt.b*255,0,255))}getHexString(t=ae){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.workingToColorSpace(Vt.copy(this),e);let n=Vt.r,i=Vt.g,r=Vt.b,s=Math.max(n,i,r),o=Math.min(n,i,r),h,u,f=(o+s)/2;if(o===s)h=0,u=0;else{let p=s-o;switch(u=f<=.5?p/(s+o):p/(2-s-o),s){case n:h=(i-r)/p+(i<r?6:0);break;case i:h=(r-n)/p+2;break;case r:h=(n-i)/p+4;break}h/=6}return t.h=h,t.s=u,t.l=f,t}getRGB(t,e=oe.workingColorSpace){return oe.workingToColorSpace(Vt.copy(this),e),t.r=Vt.r,t.g=Vt.g,t.b=Vt.b,t}getStyle(t=ae){oe.workingToColorSpace(Vt.copy(this),t);let e=Vt.r,n=Vt.g,i=Vt.b;return t!==ae?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Oe),this.setHSL(Oe.h+t,Oe.s+e,Oe.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Oe),t.getHSL(er);let n=Ps(Oe.h,er.h,e),i=Ps(Oe.s,er.s,e),r=Ps(Oe.l,er.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Vt=new Ft;Ft.NAMES=cc;var ah=0,Mr=class extends en{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ah++}),this.uuid=Ln(),this.name="",this.type="Material",this.blending=io,this.side=tn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=so,this.blendDst=oo,this.blendEquation=ro,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ft(0,0,0),this.blendAlpha=0,this.depthFunc=di,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qe,this.stencilZFail=Qe,this.stencilZPass=Qe,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==io&&(n.blending=this.blending),this.side!==tn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==so&&(n.blendSrc=this.blendSrc),this.blendDst!==oo&&(n.blendDst=this.blendDst),this.blendEquation!==ro&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==di&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qe&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Qe&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Qe&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let s=[];for(let o in r){let h=r[o];delete h.metadata,s.push(h)}return s}if(e){let r=i(t.textures),s=i(t.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Sr=class extends Mr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=ec,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ut=new I,nr=new H,ch=0,kt=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ch++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=go,this.updateRanges=[],this.gpuType=sc,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)nr.fromBufferAttribute(this,e),nr.applyMatrix3(t),this.setXY(e,nr.x,nr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ut.fromBufferAttribute(this,e),Ut.applyMatrix3(t),this.setXYZ(e,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ut.fromBufferAttribute(this,e),Ut.applyMatrix4(t),this.setXYZ(e,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ut.fromBufferAttribute(this,e),Ut.applyNormalMatrix(t),this.setXYZ(e,Ut.x,Ut.y,Ut.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ut.fromBufferAttribute(this,e),Ut.transformDirection(t),this.setXYZ(e,Ut.x,Ut.y,Ut.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ii(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=qt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ii(e,this.array)),e}setX(t,e){return this.normalized&&(e=qt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ii(e,this.array)),e}setY(t,e){return this.normalized&&(e=qt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ii(e,this.array)),e}setZ(t,e){return this.normalized&&(e=qt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ii(e,this.array)),e}setW(t,e){return this.normalized&&(e=qt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=qt(e,this.array),n=qt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=qt(e,this.array),n=qt(n,this.array),i=qt(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=qt(e,this.array),n=qt(n,this.array),i=qt(i,this.array),r=qt(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==go&&(t.usage=this.usage),t}};var br=class extends kt{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Tr=class extends kt{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Ht=class extends kt{constructor(t,e,n){super(new Float32Array(t),e,n)}},lh=0,se=new ft,Js=new ze,Tn=new I,Jt=new Rt,ai=new Rt,Ot=new I,Ie=class a extends en{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lh++}),this.uuid=Ln(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ac(t)?Tr:br)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new it().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return se.makeRotationFromQuaternion(t),this.applyMatrix4(se),this}rotateX(t){return se.makeRotationX(t),this.applyMatrix4(se),this}rotateY(t){return se.makeRotationY(t),this.applyMatrix4(se),this}rotateZ(t){return se.makeRotationZ(t),this.applyMatrix4(se),this}translate(t,e,n){return se.makeTranslation(t,e,n),this.applyMatrix4(se),this}scale(t,e,n){return se.makeScale(t,e,n),this.applyMatrix4(se),this}lookAt(t){return Js.lookAt(t),Js.updateMatrix(),this.applyMatrix4(Js.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Tn).negate(),this.translate(Tn.x,Tn.y,Tn.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let s=t[i];n.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Ht(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rt);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];Jt.setFromBufferAttribute(r),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,Jt.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,Jt.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(Jt.min),this.boundingBox.expandByPoint(Jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let n=this.boundingSphere.center;if(Jt.setFromBufferAttribute(t),e)for(let r=0,s=e.length;r<s;r++){let o=e[r];ai.setFromBufferAttribute(o),this.morphTargetsRelative?(Ot.addVectors(Jt.min,ai.min),Jt.expandByPoint(Ot),Ot.addVectors(Jt.max,ai.max),Jt.expandByPoint(Ot)):(Jt.expandByPoint(ai.min),Jt.expandByPoint(ai.max))}Jt.getCenter(n);let i=0;for(let r=0,s=t.count;r<s;r++)Ot.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Ot));if(e)for(let r=0,s=e.length;r<s;r++){let o=e[r],h=this.morphTargetsRelative;for(let u=0,f=o.count;u<f;u++)Ot.fromBufferAttribute(o,u),h&&(Tn.fromBufferAttribute(t,u),Ot.add(Tn)),i=Math.max(i,n.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kt(new Float32Array(4*n.count),4));let s=this.getAttribute("tangent"),o=[],h=[];for(let w=0;w<n.count;w++)o[w]=new I,h[w]=new I;let u=new I,f=new I,p=new I,m=new H,g=new H,_=new H,S=new I,b=new I;function A(w,M,y){u.fromBufferAttribute(n,w),f.fromBufferAttribute(n,M),p.fromBufferAttribute(n,y),m.fromBufferAttribute(r,w),g.fromBufferAttribute(r,M),_.fromBufferAttribute(r,y),f.sub(u),p.sub(u),g.sub(m),_.sub(m);let v=1/(g.x*_.y-_.x*g.y);isFinite(v)&&(S.copy(f).multiplyScalar(_.y).addScaledVector(p,-g.y).multiplyScalar(v),b.copy(p).multiplyScalar(g.x).addScaledVector(f,-_.x).multiplyScalar(v),o[w].add(S),o[M].add(S),o[y].add(S),h[w].add(b),h[M].add(b),h[y].add(b))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let w=0,M=E.length;w<M;++w){let y=E[w],v=y.start,T=y.count;for(let C=v,P=v+T;C<P;C+=3)A(t.getX(C+0),t.getX(C+1),t.getX(C+2))}let d=new I,c=new I,x=new I,l=new I;function R(w){x.fromBufferAttribute(i,w),l.copy(x);let M=o[w];d.copy(M),d.sub(x.multiplyScalar(x.dot(M))).normalize(),c.crossVectors(l,M);let v=c.dot(h[w])<0?-1:1;s.setXYZW(w,d.x,d.y,d.z,v)}for(let w=0,M=E.length;w<M;++w){let y=E[w],v=y.start,T=y.count;for(let C=v,P=v+T;C<P;C+=3)R(t.getX(C+0)),R(t.getX(C+1)),R(t.getX(C+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new kt(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let m=0,g=n.count;m<g;m++)n.setXYZ(m,0,0,0);let i=new I,r=new I,s=new I,o=new I,h=new I,u=new I,f=new I,p=new I;if(t)for(let m=0,g=t.count;m<g;m+=3){let _=t.getX(m+0),S=t.getX(m+1),b=t.getX(m+2);i.fromBufferAttribute(e,_),r.fromBufferAttribute(e,S),s.fromBufferAttribute(e,b),f.subVectors(s,r),p.subVectors(i,r),f.cross(p),o.fromBufferAttribute(n,_),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,b),o.add(f),h.add(f),u.add(f),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(S,h.x,h.y,h.z),n.setXYZ(b,u.x,u.y,u.z)}else for(let m=0,g=e.count;m<g;m+=3)i.fromBufferAttribute(e,m+0),r.fromBufferAttribute(e,m+1),s.fromBufferAttribute(e,m+2),f.subVectors(s,r),p.subVectors(i,r),f.cross(p),n.setXYZ(m+0,f.x,f.y,f.z),n.setXYZ(m+1,f.x,f.y,f.z),n.setXYZ(m+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ot.fromBufferAttribute(t,e),Ot.normalize(),t.setXYZ(e,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function t(o,h){let u=o.array,f=o.itemSize,p=o.normalized,m=new u.constructor(h.length*f),g=0,_=0;for(let S=0,b=h.length;S<b;S++){o.isInterleavedBufferAttribute?g=h[S]*o.data.stride+o.offset:g=h[S]*f;for(let A=0;A<f;A++)m[_++]=u[g++]}return new kt(m,f,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new a,n=this.index.array,i=this.attributes;for(let o in i){let h=i[o],u=t(h,n);e.setAttribute(o,u)}let r=this.morphAttributes;for(let o in r){let h=[],u=r[o];for(let f=0,p=u.length;f<p;f++){let m=u[f],g=t(m,n);h.push(g)}e.morphAttributes[o]=h}e.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,h=s.length;o<h;o++){let u=s[o];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let h=this.parameters;for(let u in h)h[u]!==void 0&&(t[u]=h[u]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let h in n){let u=n[h];t.data.attributes[h]=u.toJSON(t.data)}let i={},r=!1;for(let h in this.morphAttributes){let u=this.morphAttributes[h],f=[];for(let p=0,m=u.length;p<m;p++){let g=u[p];f.push(g.toJSON(t.data))}f.length>0&&(i[h]=f,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let u in i){let f=i[u];this.setAttribute(u,f.clone(e))}let r=t.morphAttributes;for(let u in r){let f=[],p=r[u];for(let m=0,g=p.length;m<g;m++)f.push(p[m].clone(e));this.morphAttributes[u]=f}this.morphTargetsRelative=t.morphTargetsRelative;let s=t.groups;for(let u=0,f=s.length;u<f;u++){let p=s[u];this.addGroup(p.start,p.count,p.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ya=new ft,Ke=new ye,ir=new mi,Za=new I,rr=new I,sr=new I,or=new I,Ks=new I,ar=new I,$a=new I,cr=new I,gi=class extends ze{constructor(t=new Ie,e=new Sr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,s=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let o=this.morphTargetInfluences;if(r&&o){ar.set(0,0,0);for(let h=0,u=r.length;h<u;h++){let f=o[h],p=r[h];f!==0&&(Ks.fromBufferAttribute(p,t),s?ar.addScaledVector(Ks,f):ar.addScaledVector(Ks.sub(e),f))}e.add(ar)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ir.copy(n.boundingSphere),ir.applyMatrix4(r),Ke.copy(t.ray).recast(t.near),!(ir.containsPoint(Ke.origin)===!1&&(Ke.intersectSphere(ir,Za)===null||Ke.origin.distanceToSquared(Za)>(t.far-t.near)**2))&&(Ya.copy(r).invert(),Ke.copy(t.ray).applyMatrix4(Ya),!(n.boundingBox!==null&&Ke.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ke)))}_computeIntersections(t,e,n){let i,r=this.geometry,s=this.material,o=r.index,h=r.attributes.position,u=r.attributes.uv,f=r.attributes.uv1,p=r.attributes.normal,m=r.groups,g=r.drawRange;if(o!==null)if(Array.isArray(s))for(let _=0,S=m.length;_<S;_++){let b=m[_],A=s[b.materialIndex],E=Math.max(b.start,g.start),d=Math.min(o.count,Math.min(b.start+b.count,g.start+g.count));for(let c=E,x=d;c<x;c+=3){let l=o.getX(c),R=o.getX(c+1),w=o.getX(c+2);i=lr(this,A,t,n,u,f,p,l,R,w),i&&(i.faceIndex=Math.floor(c/3),i.face.materialIndex=b.materialIndex,e.push(i))}}else{let _=Math.max(0,g.start),S=Math.min(o.count,g.start+g.count);for(let b=_,A=S;b<A;b+=3){let E=o.getX(b),d=o.getX(b+1),c=o.getX(b+2);i=lr(this,s,t,n,u,f,p,E,d,c),i&&(i.faceIndex=Math.floor(b/3),e.push(i))}}else if(h!==void 0)if(Array.isArray(s))for(let _=0,S=m.length;_<S;_++){let b=m[_],A=s[b.materialIndex],E=Math.max(b.start,g.start),d=Math.min(h.count,Math.min(b.start+b.count,g.start+g.count));for(let c=E,x=d;c<x;c+=3){let l=c,R=c+1,w=c+2;i=lr(this,A,t,n,u,f,p,l,R,w),i&&(i.faceIndex=Math.floor(c/3),i.face.materialIndex=b.materialIndex,e.push(i))}}else{let _=Math.max(0,g.start),S=Math.min(h.count,g.start+g.count);for(let b=_,A=S;b<A;b+=3){let E=b,d=b+1,c=b+2;i=lr(this,s,t,n,u,f,p,E,d,c),i&&(i.faceIndex=Math.floor(b/3),e.push(i))}}}};function hh(a,t,e,n,i,r,s,o){let h;if(t.side===Vr?h=n.intersectTriangle(s,r,i,!0,o):h=n.intersectTriangle(i,r,s,t.side===tn,o),h===null)return null;cr.copy(o),cr.applyMatrix4(a.matrixWorld);let u=e.ray.origin.distanceTo(cr);return u<e.near||u>e.far?null:{distance:u,point:cr.clone(),object:a}}function lr(a,t,e,n,i,r,s,o,h,u){a.getVertexPosition(o,rr),a.getVertexPosition(h,sr),a.getVertexPosition(u,or);let f=hh(a,t,e,n,rr,sr,or,$a);if(f){let p=new I;Tt.getBarycoord($a,rr,sr,or,p),i&&(f.uv=Tt.getInterpolatedAttribute(i,o,h,u,p,new H)),r&&(f.uv1=Tt.getInterpolatedAttribute(r,o,h,u,p,new H)),s&&(f.normal=Tt.getInterpolatedAttribute(s,o,h,u,p,new I),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));let m={a:o,b:h,c:u,normal:new I,materialIndex:0};Tt.getNormal(rr,sr,or,m.normal),f.face=m,f.barycoord=p}return f}var _i=class a extends Ie{constructor(t=1,e=1,n=1,i=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:s};let o=this;i=Math.floor(i),r=Math.floor(r),s=Math.floor(s);let h=[],u=[],f=[],p=[],m=0,g=0;_("z","y","x",-1,-1,n,e,t,s,r,0),_("z","y","x",1,-1,n,e,-t,s,r,1),_("x","z","y",1,1,t,n,e,i,s,2),_("x","z","y",1,-1,t,n,-e,i,s,3),_("x","y","z",1,-1,t,e,n,i,r,4),_("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(h),this.setAttribute("position",new Ht(u,3)),this.setAttribute("normal",new Ht(f,3)),this.setAttribute("uv",new Ht(p,2));function _(S,b,A,E,d,c,x,l,R,w,M){let y=c/R,v=x/w,T=c/2,C=x/2,P=l/2,D=R+1,L=w+1,N=0,z=0,F=new I;for(let Z=0;Z<L;Z++){let k=Z*v-C;for(let q=0;q<D;q++){let W=q*y-T;F[S]=W*E,F[b]=k*d,F[A]=P,u.push(F.x,F.y,F.z),F[S]=0,F[b]=0,F[A]=l>0?1:-1,f.push(F.x,F.y,F.z),p.push(q/R),p.push(1-Z/w),N+=1}}for(let Z=0;Z<w;Z++)for(let k=0;k<R;k++){let q=m+k+D*Z,W=m+k+D*(Z+1),$=m+(k+1)+D*(Z+1),Q=m+(k+1)+D*Z;h.push(q,W,Q),h.push(W,$,Q),z+=6}o.addGroup(g,z,M),g+=z,m+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new a(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function lc(a){let t={};for(let e in a){t[e]={};for(let n in a[e]){let i=a[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Wt(a){let t={};for(let e=0;e<a.length;e++){let n=lc(a[e]);for(let i in n)t[i]=n[i]}return t}var Qs=new I,uh=new I,fh=new it,fe=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Qs.subVectors(n,e).cross(uh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Qs),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||fh.getNormalMatrix(t),i=this.coplanarPoint(Qs).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}};var xi=class a extends Ie{constructor(t=1,e=1,n=1,i=32,r=1,s=!1,o=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:h};let u=this;i=Math.floor(i),r=Math.floor(r);let f=[],p=[],m=[],g=[],_=0,S=[],b=n/2,A=0;E(),s===!1&&(t>0&&d(!0),e>0&&d(!1)),this.setIndex(f),this.setAttribute("position",new Ht(p,3)),this.setAttribute("normal",new Ht(m,3)),this.setAttribute("uv",new Ht(g,2));function E(){let c=new I,x=new I,l=0,R=(e-t)/n;for(let w=0;w<=r;w++){let M=[],y=w/r,v=y*(e-t)+t;for(let T=0;T<=i;T++){let C=T/i,P=C*h+o,D=Math.sin(P),L=Math.cos(P);x.x=v*D,x.y=-y*n+b,x.z=v*L,p.push(x.x,x.y,x.z),c.set(D,R,L).normalize(),m.push(c.x,c.y,c.z),g.push(C,1-y),M.push(_++)}S.push(M)}for(let w=0;w<i;w++)for(let M=0;M<r;M++){let y=S[M][w],v=S[M+1][w],T=S[M+1][w+1],C=S[M][w+1];(t>0||M!==0)&&(f.push(y,v,C),l+=3),(e>0||M!==r-1)&&(f.push(v,T,C),l+=3)}u.addGroup(A,l,0),A+=l}function d(c){let x=_,l=new H,R=new I,w=0,M=c===!0?t:e,y=c===!0?1:-1;for(let T=1;T<=i;T++)p.push(0,b*y,0),m.push(0,y,0),g.push(.5,.5),_++;let v=_;for(let T=0;T<=i;T++){let P=T/i*h+o,D=Math.cos(P),L=Math.sin(P);R.x=M*L,R.y=b*y,R.z=M*D,p.push(R.x,R.y,R.z),m.push(0,y,0),l.x=D*.5+.5,l.y=L*.5*y+.5,g.push(l.x,l.y),_++}for(let T=0;T<i;T++){let C=x+T,P=v+T;c===!0?f.push(P,P+1,C):f.push(P+1,P,C),w+=3}u.addGroup(A,w,c===!0?1:2),A+=w}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new a(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Qt=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let s=1;s<=t;s++)n=this.getPoint(s/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,r=n.length,s;e?s=e:s=t*n[r-1];let o=0,h=r-1,u;for(;o<=h;)if(i=Math.floor(o+(h-o)/2),u=n[i]-s,u<0)o=i+1;else if(u>0)h=i-1;else{h=i;break}if(i=h,n[i]===s)return i/(r-1);let f=n[i],m=n[i+1]-f,g=(s-f)/m;return(i+g)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let s=this.getPoint(i),o=this.getPoint(r),h=e||(s.isVector2?new H:new I);return h.copy(o).sub(s).normalize(),h}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new I,i=[],r=[],s=[],o=new I,h=new ft;for(let g=0;g<=t;g++){let _=g/t;i[g]=this.getTangentAt(_,new I)}r[0]=new I,s[0]=new I;let u=Number.MAX_VALUE,f=Math.abs(i[0].x),p=Math.abs(i[0].y),m=Math.abs(i[0].z);f<=u&&(u=f,n.set(1,0,0)),p<=u&&(u=p,n.set(0,1,0)),m<=u&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),s[0].crossVectors(i[0],r[0]);for(let g=1;g<=t;g++){if(r[g]=r[g-1].clone(),s[g]=s[g-1].clone(),o.crossVectors(i[g-1],i[g]),o.length()>Number.EPSILON){o.normalize();let _=Math.acos(nt(i[g-1].dot(i[g]),-1,1));r[g].applyMatrix4(h.makeRotationAxis(o,_))}s[g].crossVectors(i[g],r[g])}if(e===!0){let g=Math.acos(nt(r[0].dot(r[t]),-1,1));g/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(g=-g);for(let _=1;_<=t;_++)r[_].applyMatrix4(h.makeRotationAxis(i[_],g*_)),s[_].crossVectors(i[_],r[_])}return{tangents:i,normals:r,binormals:s}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},In=class extends Qt{constructor(t=0,e=0,n=1,i=1,r=0,s=Math.PI*2,o=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=s,this.aClockwise=o,this.aRotation=h}getPoint(t,e=new H){let n=e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,s=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(s?r=0:r=i),this.aClockwise===!0&&!s&&(r===i?r=-i:r=r-i);let o=this.aStartAngle+t*r,h=this.aX+this.xRadius*Math.cos(o),u=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let f=Math.cos(this.aRotation),p=Math.sin(this.aRotation),m=h-this.aX,g=u-this.aY;h=m*f-g*p+this.aX,u=m*p+g*f+this.aY}return n.set(h,u)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},wr=class extends In{constructor(t,e,n,i,r,s){super(t,e,n,n,i,r,s),this.isArcCurve=!0,this.type="ArcCurve"}};function No(){let a=0,t=0,e=0,n=0;function i(r,s,o,h){a=r,t=o,e=-3*r+3*s-2*o-h,n=2*r-2*s+o+h}return{initCatmullRom:function(r,s,o,h,u){i(s,o,u*(o-r),u*(h-s))},initNonuniformCatmullRom:function(r,s,o,h,u,f,p){let m=(s-r)/u-(o-r)/(u+f)+(o-s)/f,g=(o-s)/f-(h-s)/(f+p)+(h-o)/p;m*=f,g*=f,i(s,o,m,g)},calc:function(r){let s=r*r,o=s*r;return a+t*r+e*s+n*o}}}var hr=new I,js=new No,to=new No,eo=new No,Er=class extends Qt{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new I){let n=e,i=this.points,r=i.length,s=(r-(this.closed?0:1))*t,o=Math.floor(s),h=s-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:h===0&&o===r-1&&(o=r-2,h=1);let u,f;this.closed||o>0?u=i[(o-1)%r]:(hr.subVectors(i[0],i[1]).add(i[0]),u=hr);let p=i[o%r],m=i[(o+1)%r];if(this.closed||o+2<r?f=i[(o+2)%r]:(hr.subVectors(i[r-1],i[r-2]).add(i[r-1]),f=hr),this.curveType==="centripetal"||this.curveType==="chordal"){let g=this.curveType==="chordal"?.5:.25,_=Math.pow(u.distanceToSquared(p),g),S=Math.pow(p.distanceToSquared(m),g),b=Math.pow(m.distanceToSquared(f),g);S<1e-4&&(S=1),_<1e-4&&(_=S),b<1e-4&&(b=S),js.initNonuniformCatmullRom(u.x,p.x,m.x,f.x,_,S,b),to.initNonuniformCatmullRom(u.y,p.y,m.y,f.y,_,S,b),eo.initNonuniformCatmullRom(u.z,p.z,m.z,f.z,_,S,b)}else this.curveType==="catmullrom"&&(js.initCatmullRom(u.x,p.x,m.x,f.x,this.tension),to.initCatmullRom(u.y,p.y,m.y,f.y,this.tension),eo.initCatmullRom(u.z,p.z,m.z,f.z,this.tension));return n.set(js.calc(h),to.calc(h),eo.calc(h)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new I().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Ja(a,t,e,n,i){let r=(n-t)*.5,s=(i-e)*.5,o=a*a,h=a*o;return(2*e-2*n+r+s)*h+(-3*e+3*n-2*r-s)*o+r*a+e}function dh(a,t){let e=1-a;return e*e*t}function ph(a,t){return 2*(1-a)*a*t}function mh(a,t){return a*a*t}function ui(a,t,e,n){return dh(a,t)+ph(a,e)+mh(a,n)}function gh(a,t){let e=1-a;return e*e*e*t}function _h(a,t){let e=1-a;return 3*e*e*a*t}function xh(a,t){return 3*(1-a)*a*a*t}function yh(a,t){return a*a*a*t}function fi(a,t,e,n,i){return gh(a,t)+_h(a,e)+xh(a,n)+yh(a,i)}var yi=class extends Qt{constructor(t=new H,e=new H,n=new H,i=new H){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new H){let n=e,i=this.v0,r=this.v1,s=this.v2,o=this.v3;return n.set(fi(t,i.x,r.x,s.x,o.x),fi(t,i.y,r.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ar=class extends Qt{constructor(t=new I,e=new I,n=new I,i=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new I){let n=e,i=this.v0,r=this.v1,s=this.v2,o=this.v3;return n.set(fi(t,i.x,r.x,s.x,o.x),fi(t,i.y,r.y,s.y,o.y),fi(t,i.z,r.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},vi=class extends Qt{constructor(t=new H,e=new H){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new H){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new H){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Cr=class extends Qt{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Mi=class extends Qt{constructor(t=new H,e=new H,n=new H){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new H){let n=e,i=this.v0,r=this.v1,s=this.v2;return n.set(ui(t,i.x,r.x,s.x),ui(t,i.y,r.y,s.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Rr=class extends Qt{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){let n=e,i=this.v0,r=this.v1,s=this.v2;return n.set(ui(t,i.x,r.x,s.x),ui(t,i.y,r.y,s.y),ui(t,i.z,r.z,s.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Si=class extends Qt{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new H){let n=e,i=this.points,r=(i.length-1)*t,s=Math.floor(r),o=r-s,h=i[s===0?s:s-1],u=i[s],f=i[s>i.length-2?i.length-1:s+1],p=i[s>i.length-3?i.length-1:s+2];return n.set(Ja(o,h.x,u.x,f.x,p.x),Ja(o,h.y,u.y,f.y,p.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new H().fromArray(i))}return this}},vo=Object.freeze({__proto__:null,ArcCurve:wr,CatmullRomCurve3:Er,CubicBezierCurve:yi,CubicBezierCurve3:Ar,EllipseCurve:In,LineCurve:vi,LineCurve3:Cr,QuadraticBezierCurve:Mi,QuadraticBezierCurve3:Rr,SplineCurve:Si}),Ir=class extends Qt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new vo[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let s=i[r]-n,o=this.curves[r],h=o.getLength(),u=h===0?0:1-s/h;return o.getPointAt(u,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let s=r[i],o=s.isEllipseCurve?t*2:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?t*s.points.length:t,h=s.getPoints(o);for(let u=0;u<h.length;u++){let f=h[u];n&&n.equals(f)||(e.push(f),n=f)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new vo[i.type]().fromJSON(i))}return this}},bi=class extends Ir{constructor(t){super(),this.type="Path",this.currentPoint=new H,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new vi(this.currentPoint.clone(),new H(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new Mi(this.currentPoint.clone(),new H(t,e),new H(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,s){let o=new yi(this.currentPoint.clone(),new H(t,e),new H(n,i),new H(r,s));return this.curves.push(o),this.currentPoint.set(r,s),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Si(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,s){let o=this.currentPoint.x,h=this.currentPoint.y;return this.absarc(t+o,e+h,n,i,r,s),this}absarc(t,e,n,i,r,s){return this.absellipse(t,e,n,n,i,r,s),this}ellipse(t,e,n,i,r,s,o,h){let u=this.currentPoint.x,f=this.currentPoint.y;return this.absellipse(t+u,e+f,n,i,r,s,o,h),this}absellipse(t,e,n,i,r,s,o,h){let u=new In(t,e,n,i,r,s,o,h);if(this.curves.length>0){let p=u.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(u);let f=u.getPoint(1);return this.currentPoint.copy(f),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Pn=class extends bi{constructor(t){super(t),this.uuid=Ln(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new bi().fromJSON(i))}return this}};function vh(a,t,e=2){let n=t&&t.length,i=n?t[0]*e:a.length,r=hc(a,0,i,e,!0),s=[];if(!r||r.next===r.prev)return s;let o,h,u;if(n&&(r=wh(a,t,r,e)),a.length>80*e){o=1/0,h=1/0;let f=-1/0,p=-1/0;for(let m=e;m<i;m+=e){let g=a[m],_=a[m+1];g<o&&(o=g),_<h&&(h=_),g>f&&(f=g),_>p&&(p=_)}u=Math.max(f-o,p-h),u=u!==0?32767/u:0}return Ti(r,s,e,o,h,u,0),s}function hc(a,t,e,n,i){let r;if(i===Fh(a,t,e,n)>0)for(let s=t;s<e;s+=n)r=Ka(s/n|0,a[s],a[s+1],r);else for(let s=e-n;s>=t;s-=n)r=Ka(s/n|0,a[s],a[s+1],r);return r&&Dn(r,r.next)&&(Ei(r),r=r.next),r}function nn(a,t){if(!a)return a;t||(t=a);let e=a,n;do if(n=!1,!e.steiner&&(Dn(e,e.next)||It(e.prev,e,e.next)===0)){if(Ei(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ti(a,t,e,n,i,r,s){if(!a)return;!s&&r&&Ih(a,n,i,r);let o=a;for(;a.prev!==a.next;){let h=a.prev,u=a.next;if(r?Sh(a,n,i,r):Mh(a)){t.push(h.i,a.i,u.i),Ei(a),a=u.next,o=u.next;continue}if(a=u,a===o){s?s===1?(a=bh(nn(a),t),Ti(a,t,e,n,i,r,2)):s===2&&Th(a,t,e,n,i,r):Ti(nn(a),t,e,n,i,r,1);break}}}function Mh(a){let t=a.prev,e=a,n=a.next;if(It(t,e,n)>=0)return!1;let i=t.x,r=e.x,s=n.x,o=t.y,h=e.y,u=n.y,f=Math.min(i,r,s),p=Math.min(o,h,u),m=Math.max(i,r,s),g=Math.max(o,h,u),_=n.next;for(;_!==t;){if(_.x>=f&&_.x<=m&&_.y>=p&&_.y<=g&&hi(i,o,r,h,s,u,_.x,_.y)&&It(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function Sh(a,t,e,n){let i=a.prev,r=a,s=a.next;if(It(i,r,s)>=0)return!1;let o=i.x,h=r.x,u=s.x,f=i.y,p=r.y,m=s.y,g=Math.min(o,h,u),_=Math.min(f,p,m),S=Math.max(o,h,u),b=Math.max(f,p,m),A=Mo(g,_,t,e,n),E=Mo(S,b,t,e,n),d=a.prevZ,c=a.nextZ;for(;d&&d.z>=A&&c&&c.z<=E;){if(d.x>=g&&d.x<=S&&d.y>=_&&d.y<=b&&d!==i&&d!==s&&hi(o,f,h,p,u,m,d.x,d.y)&&It(d.prev,d,d.next)>=0||(d=d.prevZ,c.x>=g&&c.x<=S&&c.y>=_&&c.y<=b&&c!==i&&c!==s&&hi(o,f,h,p,u,m,c.x,c.y)&&It(c.prev,c,c.next)>=0))return!1;c=c.nextZ}for(;d&&d.z>=A;){if(d.x>=g&&d.x<=S&&d.y>=_&&d.y<=b&&d!==i&&d!==s&&hi(o,f,h,p,u,m,d.x,d.y)&&It(d.prev,d,d.next)>=0)return!1;d=d.prevZ}for(;c&&c.z<=E;){if(c.x>=g&&c.x<=S&&c.y>=_&&c.y<=b&&c!==i&&c!==s&&hi(o,f,h,p,u,m,c.x,c.y)&&It(c.prev,c,c.next)>=0)return!1;c=c.nextZ}return!0}function bh(a,t){let e=a;do{let n=e.prev,i=e.next.next;!Dn(n,i)&&fc(n,e,e.next,i)&&wi(n,i)&&wi(i,n)&&(t.push(n.i,e.i,i.i),Ei(e),Ei(e.next),e=a=i),e=e.next}while(e!==a);return nn(e)}function Th(a,t,e,n,i,r){let s=a;do{let o=s.next.next;for(;o!==s.prev;){if(s.i!==o.i&&Lh(s,o)){let h=dc(s,o);s=nn(s,s.next),h=nn(h,h.next),Ti(s,t,e,n,i,r,0),Ti(h,t,e,n,i,r,0);return}o=o.next}s=s.next}while(s!==a)}function wh(a,t,e,n){let i=[];for(let r=0,s=t.length;r<s;r++){let o=t[r]*n,h=r<s-1?t[r+1]*n:a.length,u=hc(a,o,h,n,!1);u===u.next&&(u.steiner=!0),i.push(Dh(u))}i.sort(Eh);for(let r=0;r<i.length;r++)e=Ah(i[r],e);return e}function Eh(a,t){let e=a.x-t.x;if(e===0&&(e=a.y-t.y,e===0)){let n=(a.next.y-a.y)/(a.next.x-a.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function Ah(a,t){let e=Ch(a,t);if(!e)return t;let n=dc(e,a);return nn(n,n.next),nn(e,e.next)}function Ch(a,t){let e=t,n=a.x,i=a.y,r=-1/0,s;if(Dn(a,e))return e;do{if(Dn(a,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){let p=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(p<=n&&p>r&&(r=p,s=e.x<e.next.x?e:e.next,p===n))return s}e=e.next}while(e!==t);if(!s)return null;let o=s,h=s.x,u=s.y,f=1/0;e=s;do{if(n>=e.x&&e.x>=h&&n!==e.x&&uc(i<u?n:r,i,h,u,i<u?r:n,i,e.x,e.y)){let p=Math.abs(i-e.y)/(n-e.x);wi(e,a)&&(p<f||p===f&&(e.x>s.x||e.x===s.x&&Rh(s,e)))&&(s=e,f=p)}e=e.next}while(e!==o);return s}function Rh(a,t){return It(a.prev,a,t.prev)<0&&It(t.next,a,a.next)<0}function Ih(a,t,e,n){let i=a;do i.z===0&&(i.z=Mo(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==a);i.prevZ.nextZ=null,i.prevZ=null,Ph(i)}function Ph(a){let t,e=1;do{let n=a,i;a=null;let r=null;for(t=0;n;){t++;let s=n,o=0;for(let u=0;u<e&&(o++,s=s.nextZ,!!s);u++);let h=e;for(;o>0||h>0&&s;)o!==0&&(h===0||!s||n.z<=s.z)?(i=n,n=n.nextZ,o--):(i=s,s=s.nextZ,h--),r?r.nextZ=i:a=i,i.prevZ=r,r=i;n=s}r.nextZ=null,e*=2}while(t>1);return a}function Mo(a,t,e,n,i){return a=(a-e)*i|0,t=(t-n)*i|0,a=(a|a<<8)&16711935,a=(a|a<<4)&252645135,a=(a|a<<2)&858993459,a=(a|a<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,a|t<<1}function Dh(a){let t=a,e=a;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==a);return e}function uc(a,t,e,n,i,r,s,o){return(i-s)*(t-o)>=(a-s)*(r-o)&&(a-s)*(n-o)>=(e-s)*(t-o)&&(e-s)*(r-o)>=(i-s)*(n-o)}function hi(a,t,e,n,i,r,s,o){return!(a===s&&t===o)&&uc(a,t,e,n,i,r,s,o)}function Lh(a,t){return a.next.i!==t.i&&a.prev.i!==t.i&&!Nh(a,t)&&(wi(a,t)&&wi(t,a)&&Uh(a,t)&&(It(a.prev,a,t.prev)||It(a,t.prev,t))||Dn(a,t)&&It(a.prev,a,a.next)>0&&It(t.prev,t,t.next)>0)}function It(a,t,e){return(t.y-a.y)*(e.x-t.x)-(t.x-a.x)*(e.y-t.y)}function Dn(a,t){return a.x===t.x&&a.y===t.y}function fc(a,t,e,n){let i=fr(It(a,t,e)),r=fr(It(a,t,n)),s=fr(It(e,n,a)),o=fr(It(e,n,t));return!!(i!==r&&s!==o||i===0&&ur(a,e,t)||r===0&&ur(a,n,t)||s===0&&ur(e,a,n)||o===0&&ur(e,t,n))}function ur(a,t,e){return t.x<=Math.max(a.x,e.x)&&t.x>=Math.min(a.x,e.x)&&t.y<=Math.max(a.y,e.y)&&t.y>=Math.min(a.y,e.y)}function fr(a){return a>0?1:a<0?-1:0}function Nh(a,t){let e=a;do{if(e.i!==a.i&&e.next.i!==a.i&&e.i!==t.i&&e.next.i!==t.i&&fc(e,e.next,a,t))return!0;e=e.next}while(e!==a);return!1}function wi(a,t){return It(a.prev,a,a.next)<0?It(a,t,a.next)>=0&&It(a,a.prev,t)>=0:It(a,t,a.prev)<0||It(a,a.next,t)<0}function Uh(a,t){let e=a,n=!1,i=(a.x+t.x)/2,r=(a.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==a);return n}function dc(a,t){let e=So(a.i,a.x,a.y),n=So(t.i,t.x,t.y),i=a.next,r=t.prev;return a.next=t,t.prev=a,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Ka(a,t,e,n){let i=So(a,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Ei(a){a.next.prev=a.prev,a.prev.next=a.next,a.prevZ&&(a.prevZ.nextZ=a.nextZ),a.nextZ&&(a.nextZ.prevZ=a.prevZ)}function So(a,t,e){return{i:a,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Fh(a,t,e,n){let i=0;for(let r=t,s=e-n;r<e;r+=n)i+=(a[s]-a[r])*(a[r+1]+a[s+1]),s=r;return i}var bo=class{static triangulate(t,e,n=2){return vh(t,e,n)}},je=class a{static area(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return a.area(t)<0}static triangulateShape(t,e){let n=[],i=[],r=[];Qa(t),ja(n,t);let s=t.length;e.forEach(Qa);for(let h=0;h<e.length;h++)i.push(s),s+=e[h].length,ja(n,e[h]);let o=bo.triangulate(n,i);for(let h=0;h<o.length;h+=3)r.push(o.slice(h,h+3));return r}};function Qa(a){let t=a.length;t>2&&a[t-1].equals(a[0])&&a.pop()}function ja(a,t){for(let e=0;e<t.length;e++)a.push(t[e].x),a.push(t[e].y)}var Ai=class a extends Ie{constructor(t=new Pn([new H(.5,.5),new H(-.5,.5),new H(-.5,-.5),new H(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],r=[];for(let o=0,h=t.length;o<h;o++){let u=t[o];s(u)}this.setAttribute("position",new Ht(i,3)),this.setAttribute("uv",new Ht(r,2)),this.computeVertexNormals();function s(o){let h=[],u=e.curveSegments!==void 0?e.curveSegments:12,f=e.steps!==void 0?e.steps:1,p=e.depth!==void 0?e.depth:1,m=e.bevelEnabled!==void 0?e.bevelEnabled:!0,g=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:g-.1,S=e.bevelOffset!==void 0?e.bevelOffset:0,b=e.bevelSegments!==void 0?e.bevelSegments:3,A=e.extrudePath,E=e.UVGenerator!==void 0?e.UVGenerator:Bh,d,c=!1,x,l,R,w;A&&(d=A.getSpacedPoints(f),c=!0,m=!1,x=A.computeFrenetFrames(f,!1),l=new I,R=new I,w=new I),m||(b=0,g=0,_=0,S=0);let M=o.extractPoints(u),y=M.shape,v=M.holes;if(!je.isClockWise(y)){y=y.reverse();for(let U=0,B=v.length;U<B;U++){let O=v[U];je.isClockWise(O)&&(v[U]=O.reverse())}}function C(U){let O=10000000000000001e-36,V=U[0];for(let Y=1;Y<=U.length;Y++){let J=Y%U.length,X=U[J],j=X.x-V.x,tt=X.y-V.y,et=j*j+tt*tt,Bt=Math.max(Math.abs(X.x),Math.abs(X.y),Math.abs(V.x),Math.abs(V.y)),pt=O*Bt*Bt;if(et<=pt){U.splice(J,1),Y--;continue}V=X}}C(y),v.forEach(C);let P=v.length,D=y;for(let U=0;U<P;U++){let B=v[U];y=y.concat(B)}function L(U,B,O){return B||console.error("THREE.ExtrudeGeometry: vec does not exist"),U.clone().addScaledVector(B,O)}let N=y.length;function z(U,B,O){let V,Y,J,X=U.x-B.x,j=U.y-B.y,tt=O.x-U.x,et=O.y-U.y,Bt=X*X+j*j,pt=X*et-j*tt;if(Math.abs(pt)>Number.EPSILON){let ct=Math.sqrt(Bt),Mt=Math.sqrt(tt*tt+et*et),St=B.x-j/ct,bt=B.y+X/ct,Rs=O.x-et/Mt,Is=O.y+tt/Mt,ni=((Rs-St)*et-(Is-bt)*tt)/(X*et-j*tt);V=St+X*ni-U.x,Y=bt+j*ni-U.y;let Ra=V*V+Y*Y;if(Ra<=2)return new H(V,Y);J=Math.sqrt(Ra/2)}else{let ct=!1;X>Number.EPSILON?tt>Number.EPSILON&&(ct=!0):X<-Number.EPSILON?tt<-Number.EPSILON&&(ct=!0):Math.sign(j)===Math.sign(et)&&(ct=!0),ct?(V=-j,Y=X,J=Math.sqrt(Bt)):(V=X,Y=j,J=Math.sqrt(Bt/2))}return new H(V/J,Y/J)}let F=[];for(let U=0,B=D.length,O=B-1,V=U+1;U<B;U++,O++,V++)O===B&&(O=0),V===B&&(V=0),F[U]=z(D[U],D[O],D[V]);let Z=[],k,q=F.concat();for(let U=0,B=P;U<B;U++){let O=v[U];k=[];for(let V=0,Y=O.length,J=Y-1,X=V+1;V<Y;V++,J++,X++)J===Y&&(J=0),X===Y&&(X=0),k[V]=z(O[V],O[J],O[X]);Z.push(k),q=q.concat(k)}let W;if(b===0)W=je.triangulateShape(D,v);else{let U=[],B=[];for(let O=0;O<b;O++){let V=O/b,Y=g*Math.cos(V*Math.PI/2),J=_*Math.sin(V*Math.PI/2)+S;for(let X=0,j=D.length;X<j;X++){let tt=L(D[X],F[X],J);K(tt.x,tt.y,-Y),V===0&&U.push(tt)}for(let X=0,j=P;X<j;X++){let tt=v[X];k=Z[X];let et=[];for(let Bt=0,pt=tt.length;Bt<pt;Bt++){let ct=L(tt[Bt],k[Bt],J);K(ct.x,ct.y,-Y),V===0&&et.push(ct)}V===0&&B.push(et)}}W=je.triangulateShape(U,B)}let $=W.length,Q=_+S;for(let U=0;U<N;U++){let B=m?L(y[U],q[U],Q):y[U];c?(R.copy(x.normals[0]).multiplyScalar(B.x),l.copy(x.binormals[0]).multiplyScalar(B.y),w.copy(d[0]).add(R).add(l),K(w.x,w.y,w.z)):K(B.x,B.y,0)}for(let U=1;U<=f;U++)for(let B=0;B<N;B++){let O=m?L(y[B],q[B],Q):y[B];c?(R.copy(x.normals[U]).multiplyScalar(O.x),l.copy(x.binormals[U]).multiplyScalar(O.y),w.copy(d[U]).add(R).add(l),K(w.x,w.y,w.z)):K(O.x,O.y,p/f*U)}for(let U=b-1;U>=0;U--){let B=U/b,O=g*Math.cos(B*Math.PI/2),V=_*Math.sin(B*Math.PI/2)+S;for(let Y=0,J=D.length;Y<J;Y++){let X=L(D[Y],F[Y],V);K(X.x,X.y,p+O)}for(let Y=0,J=v.length;Y<J;Y++){let X=v[Y];k=Z[Y];for(let j=0,tt=X.length;j<tt;j++){let et=L(X[j],k[j],V);c?K(et.x,et.y+d[f-1].y,d[f-1].x+O):K(et.x,et.y,p+O)}}}mt(),rt();function mt(){let U=i.length/3;if(m){let B=0,O=N*B;for(let V=0;V<$;V++){let Y=W[V];st(Y[2]+O,Y[1]+O,Y[0]+O)}B=f+b*2,O=N*B;for(let V=0;V<$;V++){let Y=W[V];st(Y[0]+O,Y[1]+O,Y[2]+O)}}else{for(let B=0;B<$;B++){let O=W[B];st(O[2],O[1],O[0])}for(let B=0;B<$;B++){let O=W[B];st(O[0]+N*f,O[1]+N*f,O[2]+N*f)}}n.addGroup(U,i.length/3-U,0)}function rt(){let U=i.length/3,B=0;ot(D,B),B+=D.length;for(let O=0,V=v.length;O<V;O++){let Y=v[O];ot(Y,B),B+=Y.length}n.addGroup(U,i.length/3-U,1)}function ot(U,B){let O=U.length;for(;--O>=0;){let V=O,Y=O-1;Y<0&&(Y=U.length-1);for(let J=0,X=f+b*2;J<X;J++){let j=N*J,tt=N*(J+1),et=B+V+j,Bt=B+Y+j,pt=B+Y+tt,ct=B+V+tt;ut(et,Bt,pt,ct)}}}function K(U,B,O){h.push(U),h.push(B),h.push(O)}function st(U,B,O){At(U),At(B),At(O);let V=i.length/3,Y=E.generateTopUV(n,i,V-3,V-2,V-1);at(Y[0]),at(Y[1]),at(Y[2])}function ut(U,B,O,V){At(U),At(B),At(V),At(B),At(O),At(V);let Y=i.length/3,J=E.generateSideWallUV(n,i,Y-6,Y-3,Y-2,Y-1);at(J[0]),at(J[1]),at(J[3]),at(J[1]),at(J[2]),at(J[3])}function At(U){i.push(h[U*3+0]),i.push(h[U*3+1]),i.push(h[U*3+2])}function at(U){r.push(U.x),r.push(U.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Oh(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,s=t.shapes.length;r<s;r++){let o=e[t.shapes[r]];n.push(o)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new vo[i.type]().fromJSON(i)),new a(n,t.options)}},Bh={generateTopUV:function(a,t,e,n,i){let r=t[e*3],s=t[e*3+1],o=t[n*3],h=t[n*3+1],u=t[i*3],f=t[i*3+1];return[new H(r,s),new H(o,h),new H(u,f)]},generateSideWallUV:function(a,t,e,n,i,r){let s=t[e*3],o=t[e*3+1],h=t[e*3+2],u=t[n*3],f=t[n*3+1],p=t[n*3+2],m=t[i*3],g=t[i*3+1],_=t[i*3+2],S=t[r*3],b=t[r*3+1],A=t[r*3+2];return Math.abs(o-f)<Math.abs(s-u)?[new H(s,1-h),new H(u,1-p),new H(m,1-_),new H(S,1-A)]:[new H(o,1-h),new H(f,1-p),new H(g,1-_),new H(b,1-A)]}};function Oh(a,t,e){if(e.shapes=[],Array.isArray(a))for(let n=0,i=a.length;n<i;n++){let r=a[n];e.shapes.push(r.uuid)}else e.shapes.push(a.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}function dr(a,t){return!a||a.constructor===t?a:typeof t.BYTES_PER_ELEMENT=="number"?new t(a):Array.prototype.slice.call(a)}function zh(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView)}var rn=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let s;e:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=e[++n],t<i)break t}s=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let h=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===h)break;if(i=r,r=e[--n-1],t>=r)break t}s=n,n=0;break e}break n}for(;n<s;){let o=n+s>>>1;t<e[o]?s=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let s=0;s!==i;++s)e[s]=n[r+s];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Pr=class extends rn{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:lo,endingEnd:lo}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,s=t+1,o=i[r],h=i[s];if(o===void 0)switch(this.getSettings_().endingStart){case ho:r=t,o=2*e-n;break;case uo:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(h===void 0)switch(this.getSettings_().endingEnd){case ho:s=t,h=2*n-e;break;case uo:s=1,h=n+i[1]-i[0];break;default:s=t-1,h=e}let u=(n-e)*.5,f=this.valueSize;this._weightPrev=u/(e-o),this._weightNext=u/(h-n),this._offsetPrev=r*f,this._offsetNext=s*f}interpolate_(t,e,n,i){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,h=t*o,u=h-o,f=this._offsetPrev,p=this._offsetNext,m=this._weightPrev,g=this._weightNext,_=(n-e)/(i-e),S=_*_,b=S*_,A=-m*b+2*m*S-m*_,E=(1+m)*b+(-1.5-2*m)*S+(-.5+m)*_+1,d=(-1-g)*b+(1.5+g)*S+.5*_,c=g*b-g*S;for(let x=0;x!==o;++x)r[x]=A*s[f+x]+E*s[u+x]+d*s[h+x]+c*s[p+x];return r}},Dr=class extends rn{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,h=t*o,u=h-o,f=(n-e)/(i-e),p=1-f;for(let m=0;m!==o;++m)r[m]=s[u+m]*p+s[h+m]*f;return r}},Lr=class extends rn{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},jt=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=dr(e,this.TimeBufferType),this.values=dr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:dr(t.times,Array),values:dr(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Lr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Dr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Pr(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case pi:e=this.InterpolantFactoryMethodDiscrete;break;case _r:e=this.InterpolantFactoryMethodLinear;break;case mr:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return pi;case this.InterpolantFactoryMethodLinear:return _r;case this.InterpolantFactoryMethodSmooth:return mr}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,s=i-1;for(;r!==i&&n[r]<t;)++r;for(;s!==-1&&n[s]>e;)--s;if(++s,r!==0||s!==i){r>=s&&(s=Math.max(s,1),r=s-1);let o=this.getValueSize();this.times=n.slice(r,s),this.values=this.values.slice(r*o,s*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let s=null;for(let o=0;o!==r;o++){let h=n[o];if(typeof h=="number"&&isNaN(h)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,h),t=!1;break}if(s!==null&&s>h){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,h,s),t=!1;break}s=h}if(i!==void 0&&zh(i))for(let o=0,h=i.length;o!==h;++o){let u=i[o];if(isNaN(u)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,u),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===mr,r=t.length-1,s=1;for(let o=1;o<r;++o){let h=!1,u=t[o],f=t[o+1];if(u!==f&&(o!==1||u!==t[0]))if(i)h=!0;else{let p=o*n,m=p-n,g=p+n;for(let _=0;_!==n;++_){let S=e[p+_];if(S!==e[m+_]||S!==e[g+_]){h=!0;break}}}if(h){if(o!==s){t[s]=t[o];let p=o*n,m=s*n;for(let g=0;g!==n;++g)e[m+g]=e[p+g]}++s}}if(r>0){t[s]=t[r];for(let o=r*n,h=s*n,u=0;u!==n;++u)e[h+u]=e[o+u];++s}return s!==t.length?(this.times=t.slice(0,s),this.values=e.slice(0,s*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};jt.prototype.ValueTypeName="";jt.prototype.TimeBufferType=Float32Array;jt.prototype.ValueBufferType=Float32Array;jt.prototype.DefaultInterpolation=_r;var Ve=class extends jt{constructor(t,e,n){super(t,e,n)}};Ve.prototype.ValueTypeName="bool";Ve.prototype.ValueBufferType=Array;Ve.prototype.DefaultInterpolation=pi;Ve.prototype.InterpolantFactoryMethodLinear=void 0;Ve.prototype.InterpolantFactoryMethodSmooth=void 0;var Nr=class extends jt{constructor(t,e,n,i){super(t,e,n,i)}};Nr.prototype.ValueTypeName="color";var Ur=class extends jt{constructor(t,e,n,i){super(t,e,n,i)}};Ur.prototype.ValueTypeName="number";var Fr=class extends rn{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,h=(n-e)/(i-e),u=t*o;for(let f=u+o;u!==f;u+=4)Re.slerpFlat(r,0,s,u-o,s,u,h);return r}},Ci=class extends jt{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new Fr(this.times,this.values,this.getValueSize(),t)}};Ci.prototype.ValueTypeName="quaternion";Ci.prototype.InterpolantFactoryMethodSmooth=void 0;var ke=class extends jt{constructor(t,e,n){super(t,e,n)}};ke.prototype.ValueTypeName="string";ke.prototype.ValueBufferType=Array;ke.prototype.DefaultInterpolation=pi;ke.prototype.InterpolantFactoryMethodLinear=void 0;ke.prototype.InterpolantFactoryMethodSmooth=void 0;var Br=class extends jt{constructor(t,e,n,i){super(t,e,n,i)}};Br.prototype.ValueTypeName="vector";var Or=class{constructor(t,e,n){let i=this,r=!1,s=0,o=0,h,u=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(f){o++,r===!1&&i.onStart!==void 0&&i.onStart(f,s,o),r=!0},this.itemEnd=function(f){s++,i.onProgress!==void 0&&i.onProgress(f,s,o),s===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(f){i.onError!==void 0&&i.onError(f)},this.resolveURL=function(f){return h?h(f):f},this.setURLModifier=function(f){return h=f,this},this.addHandler=function(f,p){return u.push(f,p),this},this.removeHandler=function(f){let p=u.indexOf(f);return p!==-1&&u.splice(p,2),this},this.getHandler=function(f){for(let p=0,m=u.length;p<m;p+=2){let g=u[p],_=u[p+1];if(g.global&&(g.lastIndex=0),g.test(f))return _}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},pc=new Or,zr=class{constructor(t){this.manager=t!==void 0?t:pc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};zr.DEFAULT_MATERIAL_NAME="__DEFAULT";var Uo="\\[\\]\\.:\\/",Vh=new RegExp("["+Uo+"]","g"),Fo="[^"+Uo+"]",kh="[^"+Uo.replace("\\.","")+"]",Hh=/((?:WC+[\/:])*)/.source.replace("WC",Fo),Gh=/(WCOD+)?/.source.replace("WCOD",kh),Wh=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Fo),Xh=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Fo),qh=new RegExp("^"+Hh+Gh+Wh+Xh+"$"),Yh=["material","materials","bones","map"],To=class{constructor(t,e,n){let i=n||Ct.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ct=class a{constructor(t,e,n){this.path=e,this.parsedPath=n||a.parseTrackName(e),this.node=a.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new a.Composite(t,e,n):new a(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Vh,"")}static parseTrackName(t){let e=qh.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Yh.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let s=0;s<r.length;s++){let o=r[s];if(o.name===e||o.uuid===e)return o;let h=n(o.children);if(h)return h}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=a.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let f=0;f<t.length;f++)if(t[f].name===u){u=f;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(u!==void 0){if(t[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let s=t[i];if(s===void 0){let u=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let h=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}h=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else s.fromArray!==void 0&&s.toArray!==void 0?(h=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(h=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=i;this.getValue=this.GetterByBindingType[h],this.setValue=this.SetterByBindingTypeAndVersioning[h][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ct.Composite=To;Ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ct.prototype.GetterByBindingType=[Ct.prototype._getValue_direct,Ct.prototype._getValue_array,Ct.prototype._getValue_arrayElement,Ct.prototype._getValue_toArray];Ct.prototype.SetterByBindingTypeAndVersioning=[[Ct.prototype._setValue_direct,Ct.prototype._setValue_direct_setNeedsUpdate,Ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_array,Ct.prototype._setValue_array_setNeedsUpdate,Ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_arrayElement,Ct.prototype._setValue_arrayElement_setNeedsUpdate,Ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_fromArray,Ct.prototype._setValue_fromArray_setNeedsUpdate,Ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Bp=new Float32Array(1);var tc=new I,pr=new I,wn=new I,En=new I,no=new I,Zh=new I,$h=new I,yt=class{constructor(t=new I,e=new I){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){tc.subVectors(t,this.start),pr.subVectors(this.end,this.start);let n=pr.dot(pr),r=pr.dot(tc)/n;return e&&(r=nt(r,0,1)),r}closestPointToPoint(t,e,n){let i=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(i).add(this.start)}distanceSqToLine3(t,e=Zh,n=$h){let i=10000000000000001e-32,r,s,o=this.start,h=t.start,u=this.end,f=t.end;wn.subVectors(u,o),En.subVectors(f,h),no.subVectors(o,h);let p=wn.dot(wn),m=En.dot(En),g=En.dot(no);if(p<=i&&m<=i)return e.copy(o),n.copy(h),e.sub(n),e.dot(e);if(p<=i)r=0,s=g/m,s=nt(s,0,1);else{let _=wn.dot(no);if(m<=i)s=0,r=nt(-_/p,0,1);else{let S=wn.dot(En),b=p*m-S*S;b!==0?r=nt((S*g-_*m)/b,0,1):r=0,s=(S*r+g)/m,s<0?(s=0,r=nt(-_/p,0,1)):s>1&&(s=1,r=nt((S-_)/p,0,1))}}return e.copy(o).add(wn.multiplyScalar(r)),n.copy(h).add(En.multiplyScalar(s)),e.sub(n),e.dot(e)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");var Jh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Kh=`#ifdef USE_ALPHAHASH
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
#endif`,Qh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,eu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nu=`#ifdef USE_AOMAP
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
#endif`,iu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ru=`#ifdef USE_BATCHING
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
#endif`,su=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ou=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,au=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,lu=`#ifdef USE_IRIDESCENCE
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
#endif`,hu=`#ifdef USE_BUMPMAP
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
#endif`,uu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,du=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_u=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,xu=`#if defined( USE_COLOR_ALPHA )
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
#endif`,yu=`#define PI 3.141592653589793
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
} // validated`,vu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Mu=`vec3 transformedNormal = objectNormal;
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
#endif`,Su=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Tu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Eu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Au=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cu=`#ifdef USE_ENVMAP
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
#endif`,Ru=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Iu=`#ifdef USE_ENVMAP
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
#endif`,Pu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Du=`#ifdef USE_ENVMAP
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
#endif`,Lu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Nu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Uu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bu=`#ifdef USE_GRADIENTMAP
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
}`,Ou=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ku=`uniform bool receiveShadow;
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
#endif`,Hu=`#ifdef USE_ENVMAP
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
#endif`,Gu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yu=`PhysicalMaterial material;
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
#endif`,Zu=`struct PhysicalMaterial {
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
}`,$u=`
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
#endif`,Ju=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ku=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ju=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ef=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,nf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,of=`#if defined( USE_POINTS_UV )
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
#endif`,af=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,uf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ff=`#ifdef USE_MORPHTARGETS
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
#endif`,df=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,mf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,gf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_f=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yf=`#ifdef USE_NORMALMAP
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
#endif`,vf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Tf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ef=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Af=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,If=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Df=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Lf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Nf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Uf=`float getShadowMask() {
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
}`,Ff=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bf=`#ifdef USE_SKINNING
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
#endif`,Of=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zf=`#ifdef USE_SKINNING
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
#endif`,Vf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wf=`#ifdef USE_TRANSMISSION
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
#endif`,Xf=`#ifdef USE_TRANSMISSION
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
#endif`,qf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$f=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Jf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Kf=`uniform sampler2D t2D;
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
}`,Qf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,td=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ed=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nd=`#include <common>
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
}`,id=`#if DEPTH_PACKING == 3200
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
}`,rd=`#define DISTANCE
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
}`,sd=`#define DISTANCE
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
}`,od=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ad=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cd=`uniform float scale;
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
}`,ld=`uniform vec3 diffuse;
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
}`,hd=`#include <common>
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
}`,ud=`uniform vec3 diffuse;
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
}`,fd=`#define LAMBERT
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
}`,dd=`#define LAMBERT
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
}`,pd=`#define MATCAP
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
}`,md=`#define MATCAP
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
}`,gd=`#define NORMAL
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
}`,_d=`#define NORMAL
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
}`,xd=`#define PHONG
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
}`,yd=`#define PHONG
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
}`,vd=`#define STANDARD
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
}`,Md=`#define STANDARD
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
}`,Sd=`#define TOON
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
}`,bd=`#define TOON
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
}`,Td=`uniform float size;
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
}`,wd=`uniform vec3 diffuse;
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
}`,Ed=`#include <common>
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
}`,Ad=`uniform vec3 color;
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
}`,Cd=`uniform float rotation;
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
}`,Rd=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:Jh,alphahash_pars_fragment:Kh,alphamap_fragment:Qh,alphamap_pars_fragment:jh,alphatest_fragment:tu,alphatest_pars_fragment:eu,aomap_fragment:nu,aomap_pars_fragment:iu,batching_pars_vertex:ru,batching_vertex:su,begin_vertex:ou,beginnormal_vertex:au,bsdfs:cu,iridescence_fragment:lu,bumpmap_pars_fragment:hu,clipping_planes_fragment:uu,clipping_planes_pars_fragment:fu,clipping_planes_pars_vertex:du,clipping_planes_vertex:pu,color_fragment:mu,color_pars_fragment:gu,color_pars_vertex:_u,color_vertex:xu,common:yu,cube_uv_reflection_fragment:vu,defaultnormal_vertex:Mu,displacementmap_pars_vertex:Su,displacementmap_vertex:bu,emissivemap_fragment:Tu,emissivemap_pars_fragment:wu,colorspace_fragment:Eu,colorspace_pars_fragment:Au,envmap_fragment:Cu,envmap_common_pars_fragment:Ru,envmap_pars_fragment:Iu,envmap_pars_vertex:Pu,envmap_physical_pars_fragment:Hu,envmap_vertex:Du,fog_vertex:Lu,fog_pars_vertex:Nu,fog_fragment:Uu,fog_pars_fragment:Fu,gradientmap_pars_fragment:Bu,lightmap_pars_fragment:Ou,lights_lambert_fragment:zu,lights_lambert_pars_fragment:Vu,lights_pars_begin:ku,lights_toon_fragment:Gu,lights_toon_pars_fragment:Wu,lights_phong_fragment:Xu,lights_phong_pars_fragment:qu,lights_physical_fragment:Yu,lights_physical_pars_fragment:Zu,lights_fragment_begin:$u,lights_fragment_maps:Ju,lights_fragment_end:Ku,logdepthbuf_fragment:Qu,logdepthbuf_pars_fragment:ju,logdepthbuf_pars_vertex:tf,logdepthbuf_vertex:ef,map_fragment:nf,map_pars_fragment:rf,map_particle_fragment:sf,map_particle_pars_fragment:of,metalnessmap_fragment:af,metalnessmap_pars_fragment:cf,morphinstance_vertex:lf,morphcolor_vertex:hf,morphnormal_vertex:uf,morphtarget_pars_vertex:ff,morphtarget_vertex:df,normal_fragment_begin:pf,normal_fragment_maps:mf,normal_pars_fragment:gf,normal_pars_vertex:_f,normal_vertex:xf,normalmap_pars_fragment:yf,clearcoat_normal_fragment_begin:vf,clearcoat_normal_fragment_maps:Mf,clearcoat_pars_fragment:Sf,iridescence_pars_fragment:bf,opaque_fragment:Tf,packing:wf,premultiplied_alpha_fragment:Ef,project_vertex:Af,dithering_fragment:Cf,dithering_pars_fragment:Rf,roughnessmap_fragment:If,roughnessmap_pars_fragment:Pf,shadowmap_pars_fragment:Df,shadowmap_pars_vertex:Lf,shadowmap_vertex:Nf,shadowmask_pars_fragment:Uf,skinbase_vertex:Ff,skinning_pars_vertex:Bf,skinning_vertex:Of,skinnormal_vertex:zf,specularmap_fragment:Vf,specularmap_pars_fragment:kf,tonemapping_fragment:Hf,tonemapping_pars_fragment:Gf,transmission_fragment:Wf,transmission_pars_fragment:Xf,uv_pars_fragment:qf,uv_pars_vertex:Yf,uv_vertex:Zf,worldpos_vertex:$f,background_vert:Jf,background_frag:Kf,backgroundCube_vert:Qf,backgroundCube_frag:jf,cube_vert:td,cube_frag:ed,depth_vert:nd,depth_frag:id,distanceRGBA_vert:rd,distanceRGBA_frag:sd,equirect_vert:od,equirect_frag:ad,linedashed_vert:cd,linedashed_frag:ld,meshbasic_vert:hd,meshbasic_frag:ud,meshlambert_vert:fd,meshlambert_frag:dd,meshmatcap_vert:pd,meshmatcap_frag:md,meshnormal_vert:gd,meshnormal_frag:_d,meshphong_vert:xd,meshphong_frag:yd,meshphysical_vert:vd,meshphysical_frag:Md,meshtoon_vert:Sd,meshtoon_frag:bd,points_vert:Td,points_frag:wd,shadow_vert:Ed,shadow_frag:Ad,sprite_vert:Cd,sprite_frag:Rd},G={common:{diffuse:{value:new Ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},envMapRotation:{value:new it},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new H(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new Ft(16777215)},opacity:{value:1},center:{value:new H(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},mc={basic:{uniforms:Wt([G.common,G.specularmap,G.envmap,G.aomap,G.lightmap,G.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:Wt([G.common,G.specularmap,G.envmap,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.fog,G.lights,{emissive:{value:new Ft(0)}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:Wt([G.common,G.specularmap,G.envmap,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.fog,G.lights,{emissive:{value:new Ft(0)},specular:{value:new Ft(1118481)},shininess:{value:30}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:Wt([G.common,G.envmap,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.roughnessmap,G.metalnessmap,G.fog,G.lights,{emissive:{value:new Ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:Wt([G.common,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.gradientmap,G.fog,G.lights,{emissive:{value:new Ft(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:Wt([G.common,G.bumpmap,G.normalmap,G.displacementmap,G.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:Wt([G.points,G.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:Wt([G.common,G.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:Wt([G.common,G.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:Wt([G.common,G.bumpmap,G.normalmap,G.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:Wt([G.sprite,G.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new it}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distanceRGBA:{uniforms:Wt([G.common,G.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distanceRGBA_vert,fragmentShader:ht.distanceRGBA_frag},shadow:{uniforms:Wt([G.lights,G.fog,{color:{value:new Ft(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};mc.physical={uniforms:Wt([mc.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new H(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new Ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new H},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new Ft(0)},specularColor:{value:new Ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new H},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};var sn=(1+Math.sqrt(5))/2,Nn=1/sn,Iy=[new I(-sn,Nn,0),new I(sn,Nn,0),new I(-Nn,0,sn),new I(Nn,0,sn),new I(0,sn,-Nn),new I(0,sn,Nn),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];var Py=new Float32Array(16),Dy=new Float32Array(9),Ly=new Float32Array(4);var Ny={[wo]:Eo,[Ao]:Io,[Co]:Po,[di]:Ro,[Eo]:wo,[Io]:Ao,[Po]:Co,[Ro]:di};var Un=Math.pow(2,-24),Ii=Symbol("SKIP_GENERATION"),kr={strategy:0,maxDepth:40,targetLeafSize:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null,[Ii]:!1};function wt(a,t,e){return e.min.x=t[a],e.min.y=t[a+1],e.min.z=t[a+2],e.max.x=t[a+3],e.max.y=t[a+4],e.max.z=t[a+5],e}function Pi(a){let t=-1,e=-1/0;for(let n=0;n<3;n++){let i=a[n+3]-a[n];i>e&&(e=i,t=n)}return t}function Oo(a,t,e){for(let n=0;n<3;n++){let i=t[a+2*n],r=t[a+2*n+1],s=i-r,o=i+r;s<e[n]&&(e[n]=s),o>e[n+3]&&(e[n+3]=o)}}function Hr(a){let t=a[3]-a[0],e=a[4]-a[1],n=a[5]-a[2];return 2*(t*e+e*n+n*t)}function dt(a,t){return t[a+15]===65535}function xt(a,t){return t[a+6]}function vt(a,t){return t[a+14]}function gt(a){return a+8}function _t(a,t){let e=t[a+6];return a+e*8}function Fn(a,t){return t[a+7]}function Gr(a,t,e,n,i){let r=1/0,s=1/0,o=1/0,h=-1/0,u=-1/0,f=-1/0,p=1/0,m=1/0,g=1/0,_=-1/0,S=-1/0,b=-1/0,A=a.offset||0;for(let E=(t-A)*6,d=(t+e-A)*6;E<d;E+=6){let c=a[E+0],x=a[E+1],l=c-x,R=c+x;l<r&&(r=l),R>h&&(h=R),c<p&&(p=c),c>_&&(_=c);let w=a[E+2],M=a[E+3],y=w-M,v=w+M;y<s&&(s=y),v>u&&(u=v),w<m&&(m=w),w>S&&(S=w);let T=a[E+4],C=a[E+5],P=T-C,D=T+C;P<o&&(o=P),D>f&&(f=D),T<g&&(g=T),T>b&&(b=T)}n[0]=r,n[1]=s,n[2]=o,n[3]=h,n[4]=u,n[5]=f,i[0]=p,i[1]=m,i[2]=g,i[3]=_,i[4]=S,i[5]=b}var Me=8,Vo=8,zo=new Int32Array(Me),ve=new Float32Array(Me*6),Bn=new Float32Array(Me*6),de=new Float32Array(6),Wr=new Float32Array(6),He=new Int32Array(Vo),_c=new Float32Array(Vo*6);function Ld(a,t,e,n){for(let i=0;i<3;i++){let r=t[a+2*i],s=t[a+2*i+1],o=r-s,h=r+s;o<e[n+i]&&(e[n+i]=o),h>e[n+i+3]&&(e[n+i+3]=h)}}function xc(a,t){let e=a[t+3]-a[t],n=a[t+4]-a[t+1],i=a[t+5]-a[t+2];return 2*(e*n+n*i+i*e)}function yc(a,t,e,n,i,r){let s=-1,o=0;if(r===0)s=Pi(t),s!==-1&&(o=(t[s]+t[s+3])/2);else if(r===1)s=Pi(a),s!==-1&&(o=Nd(e,n,i,s));else if(r===2){let h=Hr(a),u=1.25*i,f=e.offset||0,p=(n-f)*6,m=(n+i-f)*6;for(let g=0;g<3;g++){let _=t[g],A=(t[g+3]-_)/Me;if(i<Vo){for(let E=0;E<i;E++){let d=p+E*6,c=e[d+2*g],x=E;for(;x>0&&e[He[x-1]+2*g]>c;)He[x]=He[x-1],x--;He[x]=d}for(let E=0;E<3;E++)de[E]=1/0,de[E+3]=-1/0,Wr[E]=1/0,Wr[E+3]=-1/0;for(let E=i-1;E>=0;E--)Oo(He[E],e,Wr),_c.set(Wr,E*6);for(let E=0;E<i-1;E++){Oo(He[E],e,de);let d=e[He[E+1]+2*g];if(e[He[E]+2*g]===d)continue;let c=E+1,x=i-c,l=Hr(de)/h,R=xc(_c,c*6)/h,w=1+1.25*(l*c+R*x);w<u&&(s=g,u=w,o=d)}}else{for(let c=0;c<Me;c++){zo[c]=0;for(let x=0;x<3;x++)ve[c*6+x]=1/0,ve[c*6+x+3]=-1/0}for(let c=p;c<m;c+=6){let R=~~((e[c+2*g]-_)/A);R>=Me&&(R=Me-1),zo[R]++,Ld(c,e,ve,R*6)}let E=(Me-1)*6;for(let c=0;c<6;c++)Bn[E+c]=ve[E+c];for(let c=Me-2;c>=0;c--){let x=c*6,l=x+6;for(let R=0;R<3;R++)Bn[x+R]=Math.min(ve[x+R],Bn[l+R]),Bn[x+R+3]=Math.max(ve[x+R+3],Bn[l+R+3])}let d=0;for(let c=0;c<Me-1;c++){let x=c*6,l=zo[c];if(l!==0)for(let v=0;v<3;v++)d===0?(de[v]=ve[x+v],de[v+3]=ve[x+v+3]):(de[v]=Math.min(de[v],ve[x+v]),de[v+3]=Math.max(de[v+3],ve[x+v+3]));d+=l;let R=0,w=0;d!==0&&(R=Hr(de)/h);let M=i-d;M!==0&&(w=xc(Bn,x+6)/h);let y=1+1.25*(R*d+w*M);y<u&&(s=g,u=y,o=_+A+c*A)}}}}else console.warn(`BVH: Invalid build strategy value ${r} used.`);return{axis:s,pos:o}}function Nd(a,t,e,n){let i=0,r=a.offset;for(let s=t,o=t+e;s<o;s++)i+=a[(s-r)*6+n*2];return i/e}function vc(a,t,e,n,i,r){let s=n,o=n+i-1,h=r.pos,u=r.axis*2,f=e.offset||0;for(;;){for(;s<=o&&e[(s-f)*6+u]<h;)s++;for(;s<=o&&e[(o-f)*6+u]>=h;)o--;if(s<o){for(let p=0;p<t;p++){let m=a[s*t+p];a[s*t+p]=a[o*t+p],a[o*t+p]=m}for(let p=0;p<6;p++){let m=s-f,g=o-f,_=e[m*6+p];e[m*6+p]=e[g*6+p],e[g*6+p]=_}s++,o--}else return s}}var Ud=Math.pow(2,32),On=new Float32Array(6),Xr=new Float32Array(6);function Fd(a,t,e,n,i,r){let{maxDepth:s,verbose:o,targetLeafSize:h,_strictLeafSize:u=1/0,strategy:f,onProgress:p,useSharedArrayBuffer:m=!1}=i,g=a.primitiveBuffer,_=a.primitiveBufferStride,S=m?SharedArrayBuffer:ArrayBuffer,b=new S(32*Math.max(1,2*Math.ceil(n)-1)),A=new Float32Array(b),E=new Uint32Array(b),d=new Uint16Array(b),c=0,x=!1;return Gr(t,e,n,On,Xr),w(e,n,0),b.slice(0,c*32);function l(M){p&&p((M-r.offset)/r.count)}function R(M,y,v){let T=M*2;E[M+6]=y,d[T+14]=v,d[T+15]=65535,l(y+v)}function w(M,y,v){let T=c++,C=T*8;A.set(On,C),!x&&v>=s&&(x=!0,o&&console.warn(`BVH: Max depth of ${s} reached when generating BVH. Consider increasing maxDepth.`));let P=y>u;if(y<=h&&!P||v>=s){R(C,M,y);return}let D=yc(On,Xr,t,M,y,f),L=D.axis===-1?-1:vc(g,_,t,M,y,D);if(D.axis===-1||L===M||L===M+y){if(!P){R(C,M,y);return}D.axis=Math.max(0,Pi(On)),L=M+Math.max(1,Math.floor(y/2))}E[C+7]=D.axis;let N=L-M;Gr(t,M,N,On,Xr),w(M,N,v+1);let z=c-T;if(z>Ud)throw new Error("MeshBVH: Cannot store relative child node offset greater than 32 bits.");E[C+6]=z;let F=y-N;Gr(t,L,F,On,Xr),w(L,F,v+1)}}function Mc(a,t){let e=a.getRootRanges(t.range),n=e[0],i=e[e.length-1],r={offset:n.offset,count:i.offset+i.count-n.offset},s=new Float32Array(6*r.count);s.offset=r.offset,a.computePrimitiveBounds(r.offset,r.count,s),a._roots=e.map(o=>Fd(a,s,o.offset,o.count,t,r))}var Ge=class{constructor(t){this._getNewPrimitive=t,this._primitives=[]}getPrimitive(){let t=this._primitives;return t.length===0?this._getNewPrimitive():t.pop()}releasePrimitive(t){this._primitives.push(t)}};var ko=class{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;let t=[],e=null;this.setBuffer=n=>{e&&t.push(e),e=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{e=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,t.length!==0&&this.setBuffer(t.pop())}}},lt=new ko;var We,Vn,zn=[],qr=new Ge(()=>new Rt);function Sc(a,t,e,n,i,r){We=qr.getPrimitive(),Vn=qr.getPrimitive(),zn.push(We,Vn),lt.setBuffer(a._roots[t]);let s=Ho(0,a.geometry,e,n,i,r);lt.clearBuffer(),qr.releasePrimitive(We),qr.releasePrimitive(Vn),zn.pop(),zn.pop();let o=zn.length;return o>0&&(Vn=zn[o-1],We=zn[o-2]),s}function Ho(a,t,e,n,i=null,r=0,s=0){let{float32Array:o,uint16Array:h,uint32Array:u}=lt,f=a*2;if(dt(f,h)){let m=xt(a,u),g=vt(f,h);return wt(a,o,We),n(m,g,!1,s,r+a/8,We)}else{let y=function(T){let{uint16Array:C,uint32Array:P}=lt,D=T*2;for(;!dt(D,C);)T=gt(T),D=T*2;return xt(T,P)},v=function(T){let{uint16Array:C,uint32Array:P}=lt,D=T*2;for(;!dt(D,C);)T=_t(T,P),D=T*2;return xt(T,P)+vt(D,C)},m=gt(a),g=_t(a,u),_=m,S=g,b,A,E,d;if(i&&(E=We,d=Vn,wt(_,o,E),wt(S,o,d),b=i(E),A=i(d),A<b)){_=g,S=m;let T=b;b=A,A=T,E=d}E||(E=We,wt(_,o,E));let c=dt(_*2,h),x=e(E,c,b,s+1,r+_/8),l;if(x===2){let T=y(_),P=v(_)-T;l=n(T,P,!0,s+1,r+_/8,E)}else l=x&&Ho(_,t,e,n,i,r,s+1);if(l)return!0;d=Vn,wt(S,o,d);let R=dt(S*2,h),w=e(d,R,A,s+1,r+S/8),M;if(w===2){let T=y(S),P=v(S)-T;M=n(T,P,!0,s+1,r+S/8,d)}else M=w&&Ho(S,t,e,n,i,r,s+1);return!!M}}var Di=new lt.constructor,Yr=new lt.constructor,Xe=new Ge(()=>new Rt),kn=new Rt,Hn=new Rt,Wo=new Rt,Xo=new Rt,qo=!1;function bc(a,t,e,n){if(qo)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");qo=!0;let i=a._roots,r=t._roots,s,o=0,h=0,u=new ft().copy(e).invert();for(let f=0,p=i.length;f<p;f++){Di.setBuffer(i[f]),h=0;let m=Xe.getPrimitive();wt(0,Di.float32Array,m),m.applyMatrix4(u);for(let g=0,_=r.length;g<_&&(Yr.setBuffer(r[g]),s=pe(0,0,e,u,n,o,h,0,0,m),Yr.clearBuffer(),h+=r[g].byteLength/32,!s);g++);if(Xe.releasePrimitive(m),Di.clearBuffer(),o+=i[f].byteLength/32,s)break}return qo=!1,s}function pe(a,t,e,n,i,r=0,s=0,o=0,h=0,u=null,f=!1){let p,m;f?(p=Yr,m=Di):(p=Di,m=Yr);let g=p.float32Array,_=p.uint32Array,S=p.uint16Array,b=m.float32Array,A=m.uint32Array,E=m.uint16Array,d=a*2,c=t*2,x=dt(d,S),l=dt(c,E),R=!1;if(l&&x)f?R=i(xt(t,A),vt(t*2,E),xt(a,_),vt(a*2,S),h,s+t/8,o,r+a/8):R=i(xt(a,_),vt(a*2,S),xt(t,A),vt(t*2,E),o,r+a/8,h,s+t/8);else if(l){let w=Xe.getPrimitive();wt(t,b,w),w.applyMatrix4(e);let M=gt(a),y=_t(a,_);wt(M,g,kn),wt(y,g,Hn);let v=w.intersectsBox(kn),T=w.intersectsBox(Hn);R=v&&pe(t,M,n,e,i,s,r,h,o+1,w,!f)||T&&pe(t,y,n,e,i,s,r,h,o+1,w,!f),Xe.releasePrimitive(w)}else{let w=gt(t),M=_t(t,A);wt(w,b,Wo),wt(M,b,Xo);let y=u.intersectsBox(Wo),v=u.intersectsBox(Xo);if(y&&v)R=pe(a,w,e,n,i,r,s,o,h+1,u,f)||pe(a,M,e,n,i,r,s,o,h+1,u,f);else if(y)if(x)R=pe(a,w,e,n,i,r,s,o,h+1,u,f);else{let T=Xe.getPrimitive();T.copy(Wo).applyMatrix4(e);let C=gt(a),P=_t(a,_);wt(C,g,kn),wt(P,g,Hn);let D=T.intersectsBox(kn),L=T.intersectsBox(Hn);R=D&&pe(w,C,n,e,i,s,r,h,o+1,T,!f)||L&&pe(w,P,n,e,i,s,r,h,o+1,T,!f),Xe.releasePrimitive(T)}else if(v)if(x)R=pe(a,M,e,n,i,r,s,o,h+1,u,f);else{let T=Xe.getPrimitive();T.copy(Xo).applyMatrix4(e);let C=gt(a),P=_t(a,_);wt(C,g,kn),wt(P,g,Hn);let D=T.intersectsBox(kn),L=T.intersectsBox(Hn);R=D&&pe(M,C,n,e,i,s,r,h,o+1,T,!f)||L&&pe(M,P,n,e,i,s,r,h,o+1,T,!f),Xe.releasePrimitive(T)}}return R}var Zr=new class{constructor(){let a=null,t=null,e=null,n=!1;this.root=null,this.buffer=null,this.uint32Array=null,this.uint16Array=null,this.setBVH=(r,s)=>{if(n)throw new Error("BVHTraversalHelper: cannot call setBVH during an active traversal.");this.root=s,this.buffer=a=r._roots[s],this.uint16Array=e=new Uint16Array(a),this.uint32Array=t=new Uint32Array(a)},this.reset=()=>{this.root=null,this.buffer=a=null,this.uint16Array=e=null,this.uint32Array=t=null},this.getRangeStart=r=>{let s=r*2;for(;!dt(s,e);)r=gt(r),s=r*2;return xt(r,t)},this.getRangeEnd=r=>{let s=r*2;for(;!dt(s,e);)r=_t(r,t),s=r*2;return xt(r,t)+vt(s,e)};let i=(r,s,o)=>{let h=s*2,u=dt(h,e);if(!r(o,u,s)&&!u){let p=gt(s),m=_t(s,t);i(r,p,o+1),i(r,m,o+1)}};this.traverseBuffer=r=>{if(n)throw new Error("BVHTraversalHelper: cannot start a traversal during an active traversal.");n=!0;try{i(r,0,0)}finally{n=!1}},this.traverse=r=>{this.traverseBuffer((s,o,h)=>{if(o){let u=h*2,f=t[h+6],p=e[u+14];return r(s,o,new Float32Array(a,h*4,6),f,p)}else{let u=Fn(h,t);return r(s,o,new Float32Array(a,h*4,6),u)}})}}};var Tc=new Rt,Gn=new Float32Array(6),$r=class{constructor(){this._roots=null,this.primitiveBuffer=null,this.primitiveBufferStride=null}init(t){t={...kr,...t},"maxLeafSize"in t&&(console.warn('BVH: "maxLeafSize" option has been deprecated. Use "targetLeafSize", instead.'),t={...t,targetLeafSize:t.maxLeafSize}),Mc(this,t)}getRootRanges(){throw new Error("BVH: getRootRanges() not implemented")}writePrimitiveBounds(){throw new Error("BVH: writePrimitiveBounds() not implemented")}writePrimitiveRangeBounds(t,e,n,i){let r=1/0,s=1/0,o=1/0,h=-1/0,u=-1/0,f=-1/0;for(let p=t,m=t+e;p<m;p++){this.writePrimitiveBounds(p,Gn,0);let[g,_,S,b,A,E]=Gn;g<r&&(r=g),b>h&&(h=b),_<s&&(s=_),A>u&&(u=A),S<o&&(o=S),E>f&&(f=E)}return n[i+0]=r,n[i+1]=s,n[i+2]=o,n[i+3]=h,n[i+4]=u,n[i+5]=f,n}computePrimitiveBounds(t,e,n){let i=n.offset||0;for(let r=t,s=t+e;r<s;r++){this.writePrimitiveBounds(r,Gn,0);let[o,h,u,f,p,m]=Gn,g=(o+f)/2,_=(h+p)/2,S=(u+m)/2,b=(f-o)/2,A=(p-h)/2,E=(m-u)/2,d=(r-i)*6;n[d+0]=g,n[d+1]=b+(Math.abs(g)+b)*Un,n[d+2]=_,n[d+3]=A+(Math.abs(_)+A)*Un,n[d+4]=S,n[d+5]=E+(Math.abs(S)+E)*Un}return n}shiftPrimitiveOffsets(t){let e=this._indirectBuffer;if(e)for(let n=0,i=e.length;n<i;n++)e[n]+=t;else{let n=this._roots;for(let i=0;i<n.length;i++){let r=n[i],s=new Uint32Array(r),o=new Uint16Array(r),h=r.byteLength/32;for(let u=0;u<h;u++){let f=8*u,p=2*f;dt(p,o)&&(s[f+6]+=t)}}}}traverse(t,e=0){Zr.setBVH(this,e),Zr.traverse(t),Zr.reset()}refit(){let t=this._roots;for(let e=0,n=t.length;e<n;e++){let i=t[e],r=new Uint32Array(i),s=new Uint16Array(i),o=new Float32Array(i),h=i.byteLength/32;for(let u=h-1;u>=0;u--){let f=u*8,p=f*2;if(dt(p,s)){let g=xt(f,r),_=vt(p,s);this.writePrimitiveRangeBounds(g,_,Gn,0),o.set(Gn,f)}else{let g=gt(f),_=_t(f,r);for(let S=0;S<3;S++){let b=o[g+S],A=o[g+S+3],E=o[_+S],d=o[_+S+3];o[f+S]=b<E?b:E,o[f+S+3]=A>d?A:d}}}}}getBoundingBox(t){return t.makeEmpty(),this._roots.forEach(n=>{wt(0,new Float32Array(n),Tc),t.union(Tc)}),t}shapecast(t){let{boundsTraverseOrder:e,intersectsBounds:n,intersectsRange:i,intersectsPrimitive:r,scratchPrimitive:s,iterate:o}=t;if(i&&r){let p=i;i=(m,g,_,S,b)=>p(m,g,_,S,b)?!0:o(m,g,this,r,_,S,s)}else i||(r?i=(p,m,g,_)=>o(p,m,this,r,g,_,s):i=(p,m,g)=>g);let h=!1,u=0,f=this._roots;for(let p=0,m=f.length;p<m;p++){let g=f[p];if(h=Sc(this,p,n,i,e,u),h)break;u+=g.byteLength/32}return h}bvhcast(t,e,n){let{intersectsRanges:i}=n;return bc(this,t,e,i)}};function wc(){return typeof SharedArrayBuffer<"u"}function Yo(a){return a.index?a.index.count:a.attributes.position.count}function qe(a){return Yo(a)/3}function Od(a,t=ArrayBuffer){return a>65535?new Uint32Array(new t(4*a)):new Uint16Array(new t(2*a))}function Ec(a,t){if(!a.index){let e=a.attributes.position.count,n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,i=Od(e,n);a.setIndex(new kt(i,1));for(let r=0;r<e;r++)i[r]=r}}function zd(a,t,e){let n=Yo(a)/e,i=t||a.drawRange,r=i.start/e,s=(i.start+i.count)/e,o=Math.max(0,r),h=Math.min(n,s)-o;return{offset:Math.floor(o),count:Math.floor(h)}}function Vd(a,t){return a.groups.map(e=>({offset:e.start/t,count:e.count/t}))}function Zo(a,t,e){let n=zd(a,t,e),i=Vd(a,e);if(!i.length)return[n];let r=[],s=n.offset,o=n.offset+n.count,h=Yo(a)/e,u=[];for(let m of i){let{offset:g,count:_}=m,S=g,b=isFinite(_)?_:h-g,A=g+b;S<o&&A>s&&(u.push({pos:Math.max(s,S),isStart:!0}),u.push({pos:Math.min(o,A),isStart:!1}))}u.sort((m,g)=>m.pos!==g.pos?m.pos-g.pos:m.type==="end"?-1:1);let f=0,p=null;for(let m of u){let g=m.pos;f!==0&&g!==p&&r.push({offset:p,count:g-p}),f+=m.isStart?1:-1,p=g}return r}function kd(a,t){let e=a[a.length-1],n=e.offset+e.count>2**16,i=a.reduce((u,f)=>u+f.count,0),r=n?4:2,s=t?new SharedArrayBuffer(i*r):new ArrayBuffer(i*r),o=n?new Uint32Array(s):new Uint16Array(s),h=0;for(let u=0;u<a.length;u++){let{offset:f,count:p}=a[u];for(let m=0;m<p;m++)o[h+m]=f+m;h+=p}return o}var Jr=class extends $r{get indirect(){return!!this._indirectBuffer}get primitiveStride(){return null}get primitiveBufferStride(){return this.indirect?1:this.primitiveStride}set primitiveBufferStride(t){}get primitiveBuffer(){return this.indirect?this._indirectBuffer:this.geometry.index.array}set primitiveBuffer(t){}constructor(t,e={}){if(t.isBufferGeometry){if(t.index&&t.index.isInterleavedBufferAttribute)throw new Error("BVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("BVH: Only BufferGeometries are supported.");if(e.useSharedArrayBuffer&&!wc())throw new Error("BVH: SharedArrayBuffer is not available.");super(),this.geometry=t,this.resolvePrimitiveIndex=e.indirect?n=>this._indirectBuffer[n]:n=>n,this.primitiveBuffer=null,this.primitiveBufferStride=null,this._indirectBuffer=null,e={...kr,...e},e[Ii]||this.init(e)}init(t){let{geometry:e,primitiveStride:n}=this;if(t.indirect){let i=Zo(e,t.range,n),r=kd(i,t.useSharedArrayBuffer);this._indirectBuffer=r}else Ec(e,t);super.init(t),!e.boundingBox&&t.setBoundingBox&&(e.boundingBox=this.getBoundingBox(new Rt))}getRootRanges(t){return this.indirect?[{offset:0,count:this._indirectBuffer.length}]:Zo(this.geometry,t,this.primitiveStride)}raycastObject3D(){throw new Error("BVH: raycastObject3D() not implemented")}};var ee=class{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(t,e){let n=1/0,i=-1/0;for(let r=0,s=t.length;r<s;r++){let h=t[r][e];n=h<n?h:n,i=h>i?h:i}this.min=n,this.max=i}setFromPoints(t,e){let n=1/0,i=-1/0;for(let r=0,s=e.length;r<s;r++){let o=e[r],h=t.dot(o);n=h<n?h:n,i=h>i?h:i}this.min=n,this.max=i}isSeparated(t){return this.min>t.max||t.min>this.max}};ee.prototype.setFromBox=(function(){let a=new I;return function(e,n){let i=n.min,r=n.max,s=1/0,o=-1/0;for(let h=0;h<=1;h++)for(let u=0;u<=1;u++)for(let f=0;f<=1;f++){a.x=i.x*h+r.x*(1-h),a.y=i.y*u+r.y*(1-u),a.z=i.z*f+r.z*(1-f);let p=e.dot(a);s=Math.min(p,s),o=Math.max(p,o)}this.min=s,this.max=o}})();var Hd=(function(){let a=new I,t=new I,e=new I;return function(i,r,s){let o=i.start,h=a,u=r.start,f=t;e.subVectors(o,u),a.subVectors(i.end,i.start),t.subVectors(r.end,r.start);let p=e.dot(f),m=f.dot(h),g=f.dot(f),_=e.dot(h),b=h.dot(h)*g-m*m,A,E;b!==0?A=(p*m-_*g)/b:A=0,E=(p+A*m)/g,s.x=A,s.y=E}})(),Li=(function(){let a=new H,t=new I,e=new I;return function(i,r,s,o){Hd(i,r,a);let h=a.x,u=a.y;if(h>=0&&h<=1&&u>=0&&u<=1){i.at(h,s),r.at(u,o);return}else if(h>=0&&h<=1){u<0?r.at(0,o):r.at(1,o),i.closestPointToPoint(o,!0,s);return}else if(u>=0&&u<=1){h<0?i.at(0,s):i.at(1,s),r.closestPointToPoint(s,!0,o);return}else{let f;h<0?f=i.start:f=i.end;let p;u<0?p=r.start:p=r.end;let m=t,g=e;if(i.closestPointToPoint(p,!0,t),r.closestPointToPoint(f,!0,e),m.distanceToSquared(p)<=g.distanceToSquared(f)){s.copy(m),o.copy(p);return}else{s.copy(f),o.copy(g);return}}}})(),Ac=(function(){let a=new I,t=new I,e=new fe,n=new yt;return function(r,s){let{radius:o,center:h}=r,{a:u,b:f,c:p}=s;if(n.start=u,n.end=f,n.closestPointToPoint(h,!0,a).distanceTo(h)<=o||(n.start=u,n.end=p,n.closestPointToPoint(h,!0,a).distanceTo(h)<=o)||(n.start=f,n.end=p,n.closestPointToPoint(h,!0,a).distanceTo(h)<=o))return!0;let S=s.getPlane(e);if(Math.abs(S.distanceToPoint(h))<=o){let A=S.projectPoint(h,t);if(s.containsPoint(A))return!0}return!1}})();var Gd=["x","y","z"],Pe=1e-15,Cc=Pe*Pe;function ce(a){return Math.abs(a)<Pe}var Pt=class extends Tt{constructor(...t){super(...t),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new I),this.satBounds=new Array(4).fill().map(()=>new ee),this.points=[this.a,this.b,this.c],this.plane=new fe,this.isDegenerateIntoSegment=!1,this.isDegenerateIntoPoint=!1,this.degenerateSegment=new yt,this.needsUpdate=!0}intersectsSphere(t){return Ac(t,this)}update(){let t=this.a,e=this.b,n=this.c,i=this.points,r=this.satAxes,s=this.satBounds,o=r[0],h=s[0];this.getNormal(o),h.setFromPoints(o,i);let u=r[1],f=s[1];u.subVectors(t,e),f.setFromPoints(u,i);let p=r[2],m=s[2];p.subVectors(e,n),m.setFromPoints(p,i);let g=r[3],_=s[3];g.subVectors(n,t),_.setFromPoints(g,i);let S=u.length(),b=p.length(),A=g.length();this.isDegenerateIntoPoint=!1,this.isDegenerateIntoSegment=!1,S<Pe?b<Pe||A<Pe?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(t),this.degenerateSegment.end.copy(n)):b<Pe?A<Pe?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(e),this.degenerateSegment.end.copy(t)):A<Pe&&(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(n),this.degenerateSegment.end.copy(e)),this.plane.setFromNormalAndCoplanarPoint(o,t),this.needsUpdate=!1}};Pt.prototype.closestPointToSegment=(function(){let a=new I,t=new I,e=new yt;return function(i,r=null,s=null){this.needsUpdate&&this.update();let{start:o,end:h}=i,u=this.points,f,p=1/0,m=this.plane.distanceToPoint(o),g=this.plane.distanceToPoint(h);if(m*g<0&&this.plane.intersectLine(i,a)!==null&&this.containsPoint(a))return r&&r.copy(a),s&&s.copy(a),0;for(let _=0;_<3;_++){let S=(_+1)%3;e.start.copy(u[_]),e.end.copy(u[S]),Li(e,i,a,t),f=a.distanceToSquared(t),f<p&&(p=f,r&&r.copy(a),s&&s.copy(t))}return this.closestPointToPoint(o,a),f=o.distanceToSquared(a),f<p&&(p=f,r&&r.copy(a),s&&s.copy(o)),this.closestPointToPoint(h,a),f=h.distanceToSquared(a),f<p&&(p=f,r&&r.copy(a),s&&s.copy(h)),Math.sqrt(p)}})();Pt.prototype.intersectsTriangle=(function(){let a=new Pt,t=new ee,e=new ee,n=new I,i=new I,r=new I,s=new I,o=new yt,h=new yt,u=new I,f=new H,p=new H;function m(d,c,x,l){let R=n;!d.isDegenerateIntoPoint&&!d.isDegenerateIntoSegment?R.copy(d.plane.normal):R.copy(c.plane.normal);let w=d.satBounds,M=d.satAxes;for(let T=1;T<4;T++){let C=w[T],P=M[T];if(t.setFromPoints(P,c.points),C.isSeparated(t)||(s.copy(R).cross(P),t.setFromPoints(s,d.points),e.setFromPoints(s,c.points),t.isSeparated(e)))return!1}let y=c.satBounds,v=c.satAxes;for(let T=1;T<4;T++){let C=y[T],P=v[T];if(t.setFromPoints(P,d.points),C.isSeparated(t)||(s.crossVectors(R,P),t.setFromPoints(s,d.points),e.setFromPoints(s,c.points),t.isSeparated(e)))return!1}return x&&(l||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),x.start.set(0,0,0),x.end.set(0,0,0)),!0}function g(d,c,x,l,R,w,M,y,v,T,C){let P=M/(M-y);T.x=l+(R-l)*P,C.start.subVectors(c,d).multiplyScalar(P).add(d),P=M/(M-v),T.y=l+(w-l)*P,C.end.subVectors(x,d).multiplyScalar(P).add(d)}function _(d,c,x,l,R,w,M,y,v,T,C){if(R>0)g(d.c,d.a,d.b,l,c,x,v,M,y,T,C);else if(w>0)g(d.b,d.a,d.c,x,c,l,y,M,v,T,C);else if(y*v>0||M!=0)g(d.a,d.b,d.c,c,x,l,M,y,v,T,C);else if(y!=0)g(d.b,d.a,d.c,x,c,l,y,M,v,T,C);else if(v!=0)g(d.c,d.a,d.b,l,c,x,v,M,y,T,C);else return!0;return!1}function S(d,c,x,l){let R=c.degenerateSegment,w=d.plane.distanceToPoint(R.start),M=d.plane.distanceToPoint(R.end);return ce(w)?ce(M)?m(d,c,x,l):(x&&(x.start.copy(R.start),x.end.copy(R.start)),d.containsPoint(R.start)):ce(M)?(x&&(x.start.copy(R.end),x.end.copy(R.end)),d.containsPoint(R.end)):d.plane.intersectLine(R,n)!=null?(x&&(x.start.copy(n),x.end.copy(n)),d.containsPoint(n)):!1}function b(d,c,x){let l=c.a;return ce(d.plane.distanceToPoint(l))&&d.containsPoint(l)?(x&&(x.start.copy(l),x.end.copy(l)),!0):!1}function A(d,c,x){let l=d.degenerateSegment,R=c.a;return l.closestPointToPoint(R,!0,n),R.distanceToSquared(n)<Cc?(x&&(x.start.copy(R),x.end.copy(R)),!0):!1}function E(d,c,x,l){if(d.isDegenerateIntoSegment)if(c.isDegenerateIntoSegment){let R=d.degenerateSegment,w=c.degenerateSegment,M=i,y=r;R.delta(M),w.delta(y);let v=n.subVectors(w.start,R.start),T=M.x*y.y-M.y*y.x;if(ce(T))return!1;let C=(v.x*y.y-v.y*y.x)/T,P=-(M.x*v.y-M.y*v.x)/T;if(C<0||C>1||P<0||P>1)return!1;let D=R.start.z+M.z*C,L=w.start.z+y.z*P;return ce(D-L)?(x&&(x.start.copy(R.start).addScaledVector(M,C),x.end.copy(R.start).addScaledVector(M,C)),!0):!1}else return c.isDegenerateIntoPoint?A(d,c,x):S(c,d,x,l);else{if(d.isDegenerateIntoPoint)return c.isDegenerateIntoPoint?c.a.distanceToSquared(d.a)<Cc?(x&&(x.start.copy(d.a),x.end.copy(d.a)),!0):!1:c.isDegenerateIntoSegment?A(c,d,x):b(c,d,x);if(c.isDegenerateIntoPoint)return b(d,c,x);if(c.isDegenerateIntoSegment)return S(d,c,x,l)}}return function(c,x=null,l=!1){this.needsUpdate&&this.update(),c.isExtendedTriangle?c.needsUpdate&&c.update():(a.copy(c),a.update(),c=a);let R=E(this,c,x,l);if(R!==void 0)return R;let w=this.plane,M=c.plane,y=M.distanceToPoint(this.a),v=M.distanceToPoint(this.b),T=M.distanceToPoint(this.c);ce(y)&&(y=0),ce(v)&&(v=0),ce(T)&&(T=0);let C=y*v,P=y*T;if(C>0&&P>0)return!1;let D=w.distanceToPoint(c.a),L=w.distanceToPoint(c.b),N=w.distanceToPoint(c.c);ce(D)&&(D=0),ce(L)&&(L=0),ce(N)&&(N=0);let z=D*L,F=D*N;if(z>0&&F>0)return!1;i.copy(w.normal),r.copy(M.normal);let Z=i.cross(r),k=0,q=Math.abs(Z.x),W=Math.abs(Z.y);W>q&&(q=W,k=1),Math.abs(Z.z)>q&&(k=2);let Q=Gd[k],mt=this.a[Q],rt=this.b[Q],ot=this.c[Q],K=c.a[Q],st=c.b[Q],ut=c.c[Q];if(_(this,mt,rt,ot,C,P,y,v,T,f,o))return m(this,c,x,l);if(_(c,K,st,ut,z,F,D,L,N,p,h))return m(this,c,x,l);if(f.y<f.x){let At=f.y;f.y=f.x,f.x=At,u.copy(o.start),o.start.copy(o.end),o.end.copy(u)}if(p.y<p.x){let At=p.y;p.y=p.x,p.x=At,u.copy(h.start),h.start.copy(h.end),h.end.copy(u)}return f.y<p.x||p.y<f.x?!1:(x&&(p.x>f.x?x.start.copy(h.start):x.start.copy(o.start),p.y<f.y?x.end.copy(h.end):x.end.copy(o.end)),!0)}})();Pt.prototype.distanceToPoint=(function(){let a=new I;return function(e){return this.closestPointToPoint(e,a),e.distanceTo(a)}})();Pt.prototype.distanceToTriangle=(function(){let a=new I,t=new I,e=["a","b","c"],n=new yt,i=new yt;return function(s,o=null,h=null){let u=o||h?n:null;if(this.intersectsTriangle(s,u,!0))return(o||h)&&(o&&u.getCenter(o),h&&u.getCenter(h)),0;let f=1/0;for(let p=0;p<3;p++){let m,g=e[p],_=s[g];this.closestPointToPoint(_,a),m=_.distanceToSquared(a),m<f&&(f=m,o&&o.copy(a),h&&h.copy(_));let S=this[g];s.closestPointToPoint(S,a),m=S.distanceToSquared(a),m<f&&(f=m,o&&o.copy(S),h&&h.copy(a))}for(let p=0;p<3;p++){let m=e[p],g=e[(p+1)%3];n.set(this[m],this[g]);for(let _=0;_<3;_++){let S=e[_],b=e[(_+1)%3];i.set(s[S],s[b]),Li(n,i,a,t);let A=a.distanceToSquared(t);A<f&&(f=A,o&&o.copy(a),h&&h.copy(t))}}return Math.sqrt(f)}})();var Dt=class{constructor(t,e,n){this.isOrientedBox=!0,this.min=new I,this.max=new I,this.matrix=new ft,this.invMatrix=new ft,this.points=new Array(8).fill().map(()=>new I),this.satAxes=new Array(3).fill().map(()=>new I),this.satBounds=new Array(3).fill().map(()=>new ee),this.alignedSatBounds=new Array(3).fill().map(()=>new ee),this.needsUpdate=!1,t&&this.min.copy(t),e&&this.max.copy(e),n&&this.matrix.copy(n)}set(t,e,n){this.min.copy(t),this.max.copy(e),this.matrix.copy(n),this.needsUpdate=!0}copy(t){this.min.copy(t.min),this.max.copy(t.max),this.matrix.copy(t.matrix),this.needsUpdate=!0}};Dt.prototype.update=(function(){return function(){let t=this.matrix,e=this.min,n=this.max,i=this.points;for(let u=0;u<=1;u++)for(let f=0;f<=1;f++)for(let p=0;p<=1;p++){let m=1*u|2*f|4*p,g=i[m];g.x=u?n.x:e.x,g.y=f?n.y:e.y,g.z=p?n.z:e.z,g.applyMatrix4(t)}let r=this.satBounds,s=this.satAxes,o=i[0];for(let u=0;u<3;u++){let f=s[u],p=r[u],m=1<<u,g=i[m];f.subVectors(o,g),p.setFromPoints(f,i)}let h=this.alignedSatBounds;h[0].setFromPointsField(i,"x"),h[1].setFromPointsField(i,"y"),h[2].setFromPointsField(i,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}})();Dt.prototype.intersectsBox=(function(){let a=new ee;return function(e){this.needsUpdate&&this.update();let n=e.min,i=e.max,r=this.satBounds,s=this.satAxes,o=this.alignedSatBounds;if(a.min=n.x,a.max=i.x,o[0].isSeparated(a)||(a.min=n.y,a.max=i.y,o[1].isSeparated(a))||(a.min=n.z,a.max=i.z,o[2].isSeparated(a)))return!1;for(let h=0;h<3;h++){let u=s[h],f=r[h];if(a.setFromBox(u,e),f.isSeparated(a))return!1}return!0}})();Dt.prototype.intersectsTriangle=(function(){let a=new Pt,t=new Array(3),e=new ee,n=new ee,i=new I;return function(s){this.needsUpdate&&this.update(),s.isExtendedTriangle?s.needsUpdate&&s.update():(a.copy(s),a.update(),s=a);let o=this.satBounds,h=this.satAxes;t[0]=s.a,t[1]=s.b,t[2]=s.c;for(let m=0;m<3;m++){let g=o[m],_=h[m];if(e.setFromPoints(_,t),g.isSeparated(e))return!1}let u=s.satBounds,f=s.satAxes,p=this.points;for(let m=0;m<3;m++){let g=u[m],_=f[m];if(e.setFromPoints(_,p),g.isSeparated(e))return!1}for(let m=0;m<3;m++){let g=h[m];for(let _=0;_<4;_++){let S=f[_];if(i.crossVectors(g,S),e.setFromPoints(i,t),n.setFromPoints(i,p),e.isSeparated(n))return!1}}return!0}})();Dt.prototype.closestPointToPoint=(function(){return function(t,e){return this.needsUpdate&&this.update(),e.copy(t).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),e}})();Dt.prototype.distanceToPoint=(function(){let a=new I;return function(e){return this.closestPointToPoint(e,a),e.distanceTo(a)}})();Dt.prototype.distanceToBox=(function(){let a=["x","y","z"],t=new Array(12).fill().map(()=>new yt),e=new Array(12).fill().map(()=>new yt),n=new I,i=new I;return function(s,o=0,h=null,u=null){if(this.needsUpdate&&this.update(),this.intersectsBox(s))return(h||u)&&(s.getCenter(i),this.closestPointToPoint(i,n),s.closestPointToPoint(n,i),h&&h.copy(n),u&&u.copy(i)),0;let f=o*o,p=s.min,m=s.max,g=this.points,_=1/0;for(let b=0;b<8;b++){let A=g[b];i.copy(A).clamp(p,m);let E=A.distanceToSquared(i);if(E<_&&(_=E,h&&h.copy(A),u&&u.copy(i),E<f))return Math.sqrt(E)}let S=0;for(let b=0;b<3;b++)for(let A=0;A<=1;A++)for(let E=0;E<=1;E++){let d=(b+1)%3,c=(b+2)%3,x=A<<d|E<<c,l=1<<b|A<<d|E<<c,R=g[x],w=g[l];t[S].set(R,w);let y=a[b],v=a[d],T=a[c],C=e[S],P=C.start,D=C.end;P[y]=p[y],P[v]=A?p[v]:m[v],P[T]=E?p[T]:m[T],D[y]=m[y],D[v]=A?p[v]:m[v],D[T]=E?p[T]:m[T],S++}for(let b=0;b<=1;b++)for(let A=0;A<=1;A++)for(let E=0;E<=1;E++){i.x=b?m.x:p.x,i.y=A?m.y:p.y,i.z=E?m.z:p.z,this.closestPointToPoint(i,n);let d=i.distanceToSquared(n);if(d<_&&(_=d,h&&h.copy(n),u&&u.copy(i),d<f))return Math.sqrt(d)}for(let b=0;b<12;b++){let A=t[b];for(let E=0;E<12;E++){let d=e[E];Li(A,d,n,i);let c=n.distanceToSquared(i);if(c<_&&(_=c,h&&h.copy(n),u&&u.copy(i),c<f))return Math.sqrt(c)}}return Math.sqrt(_)}})();var $o=class extends Ge{constructor(){super(()=>new Pt)}},Xt=new $o;var Ni=new I,Jo=new I;function Rc(a,t,e={},n=0,i=1/0){let r=n*n,s=i*i,o=1/0,h=null;if(a.shapecast({boundsTraverseOrder:f=>(Ni.copy(t).clamp(f.min,f.max),Ni.distanceToSquared(t)),intersectsBounds:(f,p,m)=>m<o&&m<s,intersectsTriangle:(f,p)=>{f.closestPointToPoint(t,Ni);let m=t.distanceToSquared(Ni);return m<o&&(Jo.copy(Ni),o=m,h=p),m<r}}),o===1/0)return null;let u=Math.sqrt(o);return e.point?e.point.copy(Jo):e.point=Jo.clone(),e.distance=u,e.faceIndex=h,e}var Kr=parseInt("180")>=169,Wd=parseInt("180")<=161,on=new I,an=new I,cn=new I,Qr=new H,jr=new H,ts=new H,Ic=new I,Pc=new I,Dc=new I,Ui=new I;function Xd(a,t,e,n,i,r,s,o){let h;if(r===Vr?h=a.intersectTriangle(n,e,t,!0,i):h=a.intersectTriangle(t,e,n,r!==Ri,i),h===null)return null;let u=a.origin.distanceTo(i);return u<s||u>o?null:{distance:u,point:i.clone()}}function Lc(a,t,e,n,i,r,s,o,h,u,f){on.fromBufferAttribute(t,r),an.fromBufferAttribute(t,s),cn.fromBufferAttribute(t,o);let p=Xd(a,on,an,cn,Ui,h,u,f);if(p){if(n){Qr.fromBufferAttribute(n,r),jr.fromBufferAttribute(n,s),ts.fromBufferAttribute(n,o),p.uv=new H;let g=Tt.getInterpolation(Ui,on,an,cn,Qr,jr,ts,p.uv);Kr||(p.uv=g)}if(i){Qr.fromBufferAttribute(i,r),jr.fromBufferAttribute(i,s),ts.fromBufferAttribute(i,o),p.uv1=new H;let g=Tt.getInterpolation(Ui,on,an,cn,Qr,jr,ts,p.uv1);Kr||(p.uv1=g),Wd&&(p.uv2=p.uv1)}if(e){Ic.fromBufferAttribute(e,r),Pc.fromBufferAttribute(e,s),Dc.fromBufferAttribute(e,o),p.normal=new I;let g=Tt.getInterpolation(Ui,on,an,cn,Ic,Pc,Dc,p.normal);p.normal.dot(a.direction)>0&&p.normal.multiplyScalar(-1),Kr||(p.normal=g)}let m={a:r,b:s,c:o,normal:new I,materialIndex:0};if(Tt.getNormal(on,an,cn,m.normal),p.face=m,p.faceIndex=r,Kr){let g=new I;Tt.getBarycoord(Ui,on,an,cn,g),p.barycoord=g}}return p}function Nc(a){return a&&a.isMaterial?a.side:a}function Wn(a,t,e,n,i,r,s){let o=n*3,h=o+0,u=o+1,f=o+2,{index:p,groups:m}=a;a.index&&(h=p.getX(h),u=p.getX(u),f=p.getX(f));let{position:g,normal:_,uv:S,uv1:b}=a.attributes;if(Array.isArray(t)){let A=n*3;for(let E=0,d=m.length;E<d;E++){let{start:c,count:x,materialIndex:l}=m[E];if(A>=c&&A<c+x){let R=Nc(t[l]),w=Lc(e,g,_,S,b,h,u,f,R,r,s);if(w)if(w.faceIndex=n,w.face.materialIndex=l,i)i.push(w);else return w}}}else{let A=Nc(t),E=Lc(e,g,_,S,b,h,u,f,A,r,s);if(E)if(E.faceIndex=n,E.face.materialIndex=0,i)i.push(E);else return E}return null}function Et(a,t,e,n){let i=a.a,r=a.b,s=a.c,o=t,h=t+1,u=t+2;e&&(o=e.getX(o),h=e.getX(h),u=e.getX(u)),i.x=n.getX(o),i.y=n.getY(o),i.z=n.getZ(o),r.x=n.getX(h),r.y=n.getY(h),r.z=n.getZ(h),s.x=n.getX(u),s.y=n.getY(u),s.z=n.getZ(u)}function Uc(a,t,e,n,i,r,s,o){let{geometry:h,_indirectBuffer:u}=a;for(let f=n,p=n+i;f<p;f++)Wn(h,t,e,f,r,s,o)}function Fc(a,t,e,n,i,r,s){let{geometry:o,_indirectBuffer:h}=a,u=1/0,f=null;for(let p=n,m=n+i;p<m;p++){let g;g=Wn(o,t,e,p,null,r,s),g&&g.distance<u&&(f=g,u=g.distance)}return f}function Bc(a,t,e,n,i,r,s){let{geometry:o}=e,{index:h}=o,u=o.attributes.position;for(let f=a,p=t+a;f<p;f++){let m;if(m=f,Et(s,m*3,h,u),s.needsUpdate=!0,n(s,m,i,r))return!0}return!1}function Oc(a,t=null){t&&Array.isArray(t)&&(t=new Set(t));let e=a.geometry,n=e.index?e.index.array:null,i=e.attributes.position,r,s,o,h,u=0,f=a._roots;for(let m=0,g=f.length;m<g;m++)r=f[m],s=new Uint32Array(r),o=new Uint16Array(r),h=new Float32Array(r),p(0,u),u+=r.byteLength;function p(m,g,_=!1){let S=m*2;if(dt(S,o)){let b=xt(m,s),A=vt(S,o),E=1/0,d=1/0,c=1/0,x=-1/0,l=-1/0,R=-1/0;for(let w=3*b,M=3*(b+A);w<M;w++){let y=n[w],v=i.getX(y),T=i.getY(y),C=i.getZ(y);v<E&&(E=v),v>x&&(x=v),T<d&&(d=T),T>l&&(l=T),C<c&&(c=C),C>R&&(R=C)}return h[m+0]!==E||h[m+1]!==d||h[m+2]!==c||h[m+3]!==x||h[m+4]!==l||h[m+5]!==R?(h[m+0]=E,h[m+1]=d,h[m+2]=c,h[m+3]=x,h[m+4]=l,h[m+5]=R,!0):!1}else{let b=gt(m),A=_t(m,s),E=_,d=!1,c=!1;if(t){if(!E){let y=b/8+g/32,v=A/8+g/32;d=t.has(y),c=t.has(v),E=!d&&!c}}else d=!0,c=!0;let x=E||d,l=E||c,R=!1;x&&(R=p(b,g,E));let w=!1;l&&(w=p(A,g,E));let M=R||w;if(M)for(let y=0;y<3;y++){let v=b+y,T=A+y,C=h[v],P=h[v+3],D=h[T],L=h[T+3];h[m+y]=C<D?C:D,h[m+y+3]=P>L?P:L}return M}}}function Gt(a,t,e,n,i){let r,s,o,h,u,f,p=1/e.direction.x,m=1/e.direction.y,g=1/e.direction.z,_=e.origin.x,S=e.origin.y,b=e.origin.z,A=t[a],E=t[a+3],d=t[a+1],c=t[a+3+1],x=t[a+2],l=t[a+3+2];return p>=0?(r=(A-_)*p,s=(E-_)*p):(r=(E-_)*p,s=(A-_)*p),m>=0?(o=(d-S)*m,h=(c-S)*m):(o=(c-S)*m,h=(d-S)*m),r>h||o>s||((o>r||isNaN(r))&&(r=o),(h<s||isNaN(s))&&(s=h),g>=0?(u=(x-b)*g,f=(l-b)*g):(u=(l-b)*g,f=(x-b)*g),r>f||u>s)?!1:((u>r||r!==r)&&(r=u),(f<s||s!==s)&&(s=f),r<=i&&s>=n)}function zc(a,t,e,n,i,r,s,o){let{geometry:h,_indirectBuffer:u}=a;for(let f=n,p=n+i;f<p;f++){let m=u?u[f]:f;Wn(h,t,e,m,r,s,o)}}function Vc(a,t,e,n,i,r,s){let{geometry:o,_indirectBuffer:h}=a,u=1/0,f=null;for(let p=n,m=n+i;p<m;p++){let g;g=Wn(o,t,e,h?h[p]:p,null,r,s),g&&g.distance<u&&(f=g,u=g.distance)}return f}function kc(a,t,e,n,i,r,s){let{geometry:o}=e,{index:h}=o,u=o.attributes.position;for(let f=a,p=t+a;f<p;f++){let m;if(m=e.resolveTriangleIndex(f),Et(s,m*3,h,u),s.needsUpdate=!0,n(s,m,i,r))return!0}return!1}function Hc(a,t,e,n,i,r,s){lt.setBuffer(a._roots[t]),Gt(0,lt.float32Array,n,r,s)&&Ko(0,a,e,n,i,r,s),lt.clearBuffer()}function Ko(a,t,e,n,i,r,s){let{float32Array:o,uint16Array:h,uint32Array:u}=lt,f=a*2;if(dt(f,h)){let m=xt(a,u),g=vt(f,h);Uc(t,e,n,m,g,i,r,s)}else{let m=gt(a);Gt(m,o,n,r,s)&&Ko(m,t,e,n,i,r,s);let g=_t(a,u);Gt(g,o,n,r,s)&&Ko(g,t,e,n,i,r,s)}}var qd=["x","y","z"];function Gc(a,t,e,n,i,r){lt.setBuffer(a._roots[t]);let s=null;return Gt(0,lt.float32Array,n,i,r)&&(s=Qo(0,a,e,n,i,r)),lt.clearBuffer(),s}function Qo(a,t,e,n,i,r){let{float32Array:s,uint16Array:o,uint32Array:h}=lt,u=a*2;if(dt(u,o)){let p=xt(a,h),m=vt(u,o);return Fc(t,e,n,p,m,i,r)}else{let p=Fn(a,h),m=qd[p],_=n.direction[m]>=0,S,b;_?(S=gt(a),b=_t(a,h)):(S=_t(a,h),b=gt(a));let E=Gt(S,s,n,i,r)?Qo(S,t,e,n,i,r):null;if(E){let x=E.point[m];if(_?x<=s[b+p]:x>=s[b+p+3])return E}let c=Gt(b,s,n,i,r)?Qo(b,t,e,n,i,r):null;return E&&c?E.distance<=c.distance?E:c:E||c||null}}var es=new Rt,Xn=new Pt,qn=new Pt,Fi=new ft,Wc=new Dt,ns=new Dt;function Xc(a,t,e,n){lt.setBuffer(a._roots[t]);let i=jo(0,a,e,n);return lt.clearBuffer(),i}function jo(a,t,e,n,i=null){let{float32Array:r,uint16Array:s,uint32Array:o}=lt,h=a*2;if(i===null&&(e.boundingBox||e.computeBoundingBox(),Wc.set(e.boundingBox.min,e.boundingBox.max,n),i=Wc),dt(h,s)){let f=t.geometry,p=f.index,m=f.attributes.position,g=e.index,_=e.attributes.position,S=xt(a,o),b=vt(h,s);if(Fi.copy(n).invert(),e.boundsTree)return wt(a,r,ns),ns.matrix.copy(Fi),ns.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:E=>ns.intersectsBox(E),intersectsTriangle:E=>{E.a.applyMatrix4(n),E.b.applyMatrix4(n),E.c.applyMatrix4(n),E.needsUpdate=!0;for(let d=S*3,c=(b+S)*3;d<c;d+=3)if(Et(qn,d,p,m),qn.needsUpdate=!0,E.intersectsTriangle(qn))return!0;return!1}});{let A=qe(e);for(let E=S*3,d=(b+S)*3;E<d;E+=3){Et(Xn,E,p,m),Xn.a.applyMatrix4(Fi),Xn.b.applyMatrix4(Fi),Xn.c.applyMatrix4(Fi),Xn.needsUpdate=!0;for(let c=0,x=A*3;c<x;c+=3)if(Et(qn,c,g,_),qn.needsUpdate=!0,Xn.intersectsTriangle(qn))return!0}}}else{let f=gt(a),p=_t(a,o);return wt(f,r,es),!!(i.intersectsBox(es)&&jo(f,t,e,n,i)||(wt(p,r,es),i.intersectsBox(es)&&jo(p,t,e,n,i)))}}var is=new ft,ta=new Dt,Bi=new Dt,Yd=new I,Zd=new I,$d=new I,Jd=new I;function qc(a,t,e,n={},i={},r=0,s=1/0){t.boundingBox||t.computeBoundingBox(),ta.set(t.boundingBox.min,t.boundingBox.max,e),ta.needsUpdate=!0;let o=a.geometry,h=o.attributes.position,u=o.index,f=t.attributes.position,p=t.index,m=Xt.getPrimitive(),g=Xt.getPrimitive(),_=Yd,S=Zd,b=null,A=null;i&&(b=$d,A=Jd);let E=1/0,d=null,c=null;return is.copy(e).invert(),Bi.matrix.copy(is),a.shapecast({boundsTraverseOrder:x=>ta.distanceToBox(x),intersectsBounds:(x,l,R)=>R<E&&R<s?(l&&(Bi.min.copy(x.min),Bi.max.copy(x.max),Bi.needsUpdate=!0),!0):!1,intersectsRange:(x,l)=>{if(t.boundsTree)return t.boundsTree.shapecast({boundsTraverseOrder:w=>Bi.distanceToBox(w),intersectsBounds:(w,M,y)=>y<E&&y<s,intersectsRange:(w,M)=>{for(let y=w,v=w+M;y<v;y++){Et(g,3*y,p,f),g.a.applyMatrix4(e),g.b.applyMatrix4(e),g.c.applyMatrix4(e),g.needsUpdate=!0;for(let T=x,C=x+l;T<C;T++){Et(m,3*T,u,h),m.needsUpdate=!0;let P=m.distanceToTriangle(g,_,b);if(P<E&&(S.copy(_),A&&A.copy(b),E=P,d=T,c=y),P<r)return!0}}}});{let R=qe(t);for(let w=0,M=R;w<M;w++){Et(g,3*w,p,f),g.a.applyMatrix4(e),g.b.applyMatrix4(e),g.c.applyMatrix4(e),g.needsUpdate=!0;for(let y=x,v=x+l;y<v;y++){Et(m,3*y,u,h),m.needsUpdate=!0;let T=m.distanceToTriangle(g,_,b);if(T<E&&(S.copy(_),A&&A.copy(b),E=T,d=y,c=w),T<r)return!0}}}}}),Xt.releasePrimitive(m),Xt.releasePrimitive(g),E===1/0?null:(n.point?n.point.copy(S):n.point=S.clone(),n.distance=E,n.faceIndex=d,i&&(i.point?i.point.copy(A):i.point=A.clone(),i.point.applyMatrix4(is),S.applyMatrix4(is),i.distance=S.sub(i.point).length(),i.faceIndex=c),n)}function Yc(a,t=null){t&&Array.isArray(t)&&(t=new Set(t));let e=a.geometry,n=e.index?e.index.array:null,i=e.attributes.position,r,s,o,h,u=0,f=a._roots;for(let m=0,g=f.length;m<g;m++)r=f[m],s=new Uint32Array(r),o=new Uint16Array(r),h=new Float32Array(r),p(0,u),u+=r.byteLength;function p(m,g,_=!1){let S=m*2;if(dt(S,o)){let b=xt(m,s),A=vt(S,o),E=1/0,d=1/0,c=1/0,x=-1/0,l=-1/0,R=-1/0;for(let w=b,M=b+A;w<M;w++){let y=3*a.resolveTriangleIndex(w);for(let v=0;v<3;v++){let T=y+v;T=n?n[T]:T;let C=i.getX(T),P=i.getY(T),D=i.getZ(T);C<E&&(E=C),C>x&&(x=C),P<d&&(d=P),P>l&&(l=P),D<c&&(c=D),D>R&&(R=D)}}return h[m+0]!==E||h[m+1]!==d||h[m+2]!==c||h[m+3]!==x||h[m+4]!==l||h[m+5]!==R?(h[m+0]=E,h[m+1]=d,h[m+2]=c,h[m+3]=x,h[m+4]=l,h[m+5]=R,!0):!1}else{let b=gt(m),A=_t(m,s),E=_,d=!1,c=!1;if(t){if(!E){let y=b/8+g/32,v=A/8+g/32;d=t.has(y),c=t.has(v),E=!d&&!c}}else d=!0,c=!0;let x=E||d,l=E||c,R=!1;x&&(R=p(b,g,E));let w=!1;l&&(w=p(A,g,E));let M=R||w;if(M)for(let y=0;y<3;y++){let v=b+y,T=A+y,C=h[v],P=h[v+3],D=h[T],L=h[T+3];h[m+y]=C<D?C:D,h[m+y+3]=P>L?P:L}return M}}}function Zc(a,t,e,n,i,r,s){lt.setBuffer(a._roots[t]),Gt(0,lt.float32Array,n,r,s)&&ea(0,a,e,n,i,r,s),lt.clearBuffer()}function ea(a,t,e,n,i,r,s){let{float32Array:o,uint16Array:h,uint32Array:u}=lt,f=a*2;if(dt(f,h)){let m=xt(a,u),g=vt(f,h);zc(t,e,n,m,g,i,r,s)}else{let m=gt(a);Gt(m,o,n,r,s)&&ea(m,t,e,n,i,r,s);let g=_t(a,u);Gt(g,o,n,r,s)&&ea(g,t,e,n,i,r,s)}}var Kd=["x","y","z"];function $c(a,t,e,n,i,r){lt.setBuffer(a._roots[t]);let s=null;return Gt(0,lt.float32Array,n,i,r)&&(s=na(0,a,e,n,i,r)),lt.clearBuffer(),s}function na(a,t,e,n,i,r){let{float32Array:s,uint16Array:o,uint32Array:h}=lt,u=a*2;if(dt(u,o)){let p=xt(a,h),m=vt(u,o);return Vc(t,e,n,p,m,i,r)}else{let p=Fn(a,h),m=Kd[p],_=n.direction[m]>=0,S,b;_?(S=gt(a),b=_t(a,h)):(S=_t(a,h),b=gt(a));let E=Gt(S,s,n,i,r)?na(S,t,e,n,i,r):null;if(E){let x=E.point[m];if(_?x<=s[b+p]:x>=s[b+p+3])return E}let c=Gt(b,s,n,i,r)?na(b,t,e,n,i,r):null;return E&&c?E.distance<=c.distance?E:c:E||c||null}}var rs=new Rt,Yn=new Pt,Zn=new Pt,Oi=new ft,Jc=new Dt,ss=new Dt;function Kc(a,t,e,n){lt.setBuffer(a._roots[t]);let i=ia(0,a,e,n);return lt.clearBuffer(),i}function ia(a,t,e,n,i=null){let{float32Array:r,uint16Array:s,uint32Array:o}=lt,h=a*2;if(i===null&&(e.boundingBox||e.computeBoundingBox(),Jc.set(e.boundingBox.min,e.boundingBox.max,n),i=Jc),dt(h,s)){let f=t.geometry,p=f.index,m=f.attributes.position,g=e.index,_=e.attributes.position,S=xt(a,o),b=vt(h,s);if(Oi.copy(n).invert(),e.boundsTree)return wt(a,r,ss),ss.matrix.copy(Oi),ss.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:E=>ss.intersectsBox(E),intersectsTriangle:E=>{E.a.applyMatrix4(n),E.b.applyMatrix4(n),E.c.applyMatrix4(n),E.needsUpdate=!0;for(let d=S,c=b+S;d<c;d++)if(Et(Zn,3*t.resolveTriangleIndex(d),p,m),Zn.needsUpdate=!0,E.intersectsTriangle(Zn))return!0;return!1}});{let A=qe(e);for(let E=S,d=b+S;E<d;E++){let c=t.resolveTriangleIndex(E);Et(Yn,3*c,p,m),Yn.a.applyMatrix4(Oi),Yn.b.applyMatrix4(Oi),Yn.c.applyMatrix4(Oi),Yn.needsUpdate=!0;for(let x=0,l=A*3;x<l;x+=3)if(Et(Zn,x,g,_),Zn.needsUpdate=!0,Yn.intersectsTriangle(Zn))return!0}}}else{let f=gt(a),p=_t(a,o);return wt(f,r,rs),!!(i.intersectsBox(rs)&&ia(f,t,e,n,i)||(wt(p,r,rs),i.intersectsBox(rs)&&ia(p,t,e,n,i)))}}var os=new ft,ra=new Dt,zi=new Dt,Qd=new I,jd=new I,tp=new I,ep=new I;function Qc(a,t,e,n={},i={},r=0,s=1/0){t.boundingBox||t.computeBoundingBox(),ra.set(t.boundingBox.min,t.boundingBox.max,e),ra.needsUpdate=!0;let o=a.geometry,h=o.attributes.position,u=o.index,f=t.attributes.position,p=t.index,m=Xt.getPrimitive(),g=Xt.getPrimitive(),_=Qd,S=jd,b=null,A=null;i&&(b=tp,A=ep);let E=1/0,d=null,c=null;return os.copy(e).invert(),zi.matrix.copy(os),a.shapecast({boundsTraverseOrder:x=>ra.distanceToBox(x),intersectsBounds:(x,l,R)=>R<E&&R<s?(l&&(zi.min.copy(x.min),zi.max.copy(x.max),zi.needsUpdate=!0),!0):!1,intersectsRange:(x,l)=>{if(t.boundsTree){let R=t.boundsTree;return R.shapecast({boundsTraverseOrder:w=>zi.distanceToBox(w),intersectsBounds:(w,M,y)=>y<E&&y<s,intersectsRange:(w,M)=>{for(let y=w,v=w+M;y<v;y++){let T=R.resolveTriangleIndex(y);Et(g,3*T,p,f),g.a.applyMatrix4(e),g.b.applyMatrix4(e),g.c.applyMatrix4(e),g.needsUpdate=!0;for(let C=x,P=x+l;C<P;C++){let D=a.resolveTriangleIndex(C);Et(m,3*D,u,h),m.needsUpdate=!0;let L=m.distanceToTriangle(g,_,b);if(L<E&&(S.copy(_),A&&A.copy(b),E=L,d=C,c=y),L<r)return!0}}}})}else{let R=qe(t);for(let w=0,M=R;w<M;w++){Et(g,3*w,p,f),g.a.applyMatrix4(e),g.b.applyMatrix4(e),g.c.applyMatrix4(e),g.needsUpdate=!0;for(let y=x,v=x+l;y<v;y++){let T=a.resolveTriangleIndex(y);Et(m,3*T,u,h),m.needsUpdate=!0;let C=m.distanceToTriangle(g,_,b);if(C<E&&(S.copy(_),A&&A.copy(b),E=C,d=y,c=w),C<r)return!0}}}}}),Xt.releasePrimitive(m),Xt.releasePrimitive(g),E===1/0?null:(n.point?n.point.copy(S):n.point=S.clone(),n.distance=E,n.faceIndex=d,i&&(i.point?i.point.copy(A):i.point=A.clone(),i.point.applyMatrix4(os),S.applyMatrix4(os),i.distance=S.sub(i.point).length(),i.faceIndex=c),n)}function sa(a,t,e){return a===null?null:(a.point.applyMatrix4(t.matrixWorld),a.distance=a.point.distanceTo(e.ray.origin),a.object=t,a)}var as=new Dt,cs=new ye,jc=new I,tl=new ft,el=new I,oa=["getX","getY","getZ"],ls=class a extends Jr{static serialize(t,e={}){e={cloneBuffers:!0,...e};let n=t.geometry,i=t._roots,r=t._indirectBuffer,s=n.getIndex(),o={version:1,roots:null,index:null,indirectBuffer:null};return e.cloneBuffers?(o.roots=i.map(h=>h.slice()),o.index=s?s.array.slice():null,o.indirectBuffer=r?r.slice():null):(o.roots=i,o.index=s?s.array:null,o.indirectBuffer=r),o}static deserialize(t,e,n={}){n={setIndex:!0,indirect:!!t.indirectBuffer,...n};let{index:i,roots:r,indirectBuffer:s}=t;t.version||(console.warn("MeshBVH.deserialize: Serialization format has been changed and will be fixed up. It is recommended to regenerate any stored serialized data."),h(r));let o=new a(e,{...n,[Ii]:!0});if(o._roots=r,o._indirectBuffer=s||null,n.setIndex){let u=e.getIndex();if(u===null){let f=new kt(t.index,1,!1);e.setIndex(f)}else u.array!==i&&(u.array.set(i),u.needsUpdate=!0)}return o;function h(u){for(let f=0;f<u.length;f++){let p=u[f],m=new Uint32Array(p),g=new Uint16Array(p);for(let _=0,S=p.byteLength/32;_<S;_++){let b=8*_,A=2*b;dt(A,g)||(m[b+6]=m[b+6]/8-_)}}}}get primitiveStride(){return 3}get resolveTriangleIndex(){return this.resolvePrimitiveIndex}constructor(t,e={}){e.maxLeafTris&&(console.warn('MeshBVH: "maxLeafTris" option has been deprecated. Use "targetLeafSize", instead.'),e={...e,targetLeafSize:e.maxLeafTris}),super(t,e)}shiftTriangleOffsets(t){return super.shiftPrimitiveOffsets(t)}writePrimitiveBounds(t,e,n){let i=this.geometry,r=this._indirectBuffer,s=i.attributes.position,o=i.index?i.index.array:null,u=(r?r[t]:t)*3,f=u+0,p=u+1,m=u+2;o&&(f=o[f],p=o[p],m=o[m]);for(let g=0;g<3;g++){let _=s[oa[g]](f),S=s[oa[g]](p),b=s[oa[g]](m),A=_;S<A&&(A=S),b<A&&(A=b);let E=_;S>E&&(E=S),b>E&&(E=b),e[n+g]=A,e[n+g+3]=E}return e}computePrimitiveBounds(t,e,n){let i=this.geometry,r=this._indirectBuffer,s=i.attributes.position,o=i.index?i.index.array:null,h=s.normalized;if(t<0||e+t-n.offset>n.length/6)throw new Error("MeshBVH: compute triangle bounds range is invalid.");let u=s.array,f=s.offset||0,p=3;s.isInterleavedBufferAttribute&&(p=s.data.stride);let m=["getX","getY","getZ"],g=n.offset;for(let _=t,S=t+e;_<S;_++){let A=(r?r[_]:_)*3,E=(_-g)*6,d=A+0,c=A+1,x=A+2;o&&(d=o[d],c=o[c],x=o[x]),h||(d=d*p+f,c=c*p+f,x=x*p+f);for(let l=0;l<3;l++){let R,w,M;h?(R=s[m[l]](d),w=s[m[l]](c),M=s[m[l]](x)):(R=u[d+l],w=u[c+l],M=u[x+l]);let y=R;w<y&&(y=w),M<y&&(y=M);let v=R;w>v&&(v=w),M>v&&(v=M);let T=(v-y)/2,C=l*2;n[E+C+0]=y+T,n[E+C+1]=T+(Math.abs(y)+T)*Un}}return n}raycastObject3D(t,e,n=[]){let{material:i}=t;if(i===void 0)return;tl.copy(t.matrixWorld).invert(),cs.copy(e.ray).applyMatrix4(tl),el.setFromMatrixScale(t.matrixWorld),jc.copy(cs.direction).multiply(el);let r=jc.length(),s=e.near/r,o=e.far/r;if(e.firstHitOnly===!0){let h=this.raycastFirst(cs,i,s,o);h=sa(h,t,e),h&&n.push(h)}else{let h=this.raycast(cs,i,s,o);for(let u=0,f=h.length;u<f;u++){let p=sa(h[u],t,e);p&&n.push(p)}}return n}refit(t=null){return(this.indirect?Yc:Oc)(this,t)}raycast(t,e=tn,n=0,i=1/0){let r=this._roots,s=[],o=this.indirect?Zc:Hc;for(let h=0,u=r.length;h<u;h++)o(this,h,e,t,s,n,i);return s}raycastFirst(t,e=tn,n=0,i=1/0){let r=this._roots,s=null,o=this.indirect?$c:Gc;for(let h=0,u=r.length;h<u;h++){let f=o(this,h,e,t,n,i);f!=null&&(s==null||f.distance<s.distance)&&(s=f)}return s}intersectsGeometry(t,e){let n=!1,i=this._roots,r=this.indirect?Kc:Xc;for(let s=0,o=i.length;s<o&&(n=r(this,s,t,e),!n);s++);return n}shapecast(t){let e=Xt.getPrimitive(),n=super.shapecast({...t,intersectsPrimitive:t.intersectsTriangle,scratchPrimitive:e,iterate:this.indirect?kc:Bc});return Xt.releasePrimitive(e),n}bvhcast(t,e,n){let{intersectsRanges:i,intersectsTriangles:r}=n,s=Xt.getPrimitive(),o=this.geometry.index,h=this.geometry.attributes.position,u=this.indirect?_=>{let S=this.resolveTriangleIndex(_);Et(s,S*3,o,h)}:_=>{Et(s,_*3,o,h)},f=Xt.getPrimitive(),p=t.geometry.index,m=t.geometry.attributes.position,g=t.indirect?_=>{let S=t.resolveTriangleIndex(_);Et(f,S*3,p,m)}:_=>{Et(f,_*3,p,m)};if(r){if(!(t instanceof a))throw new Error('MeshBVH: "intersectsTriangles" callback can only be used with another MeshBVH.');let _=(S,b,A,E,d,c,x,l)=>{for(let R=A,w=A+E;R<w;R++){g(R),f.a.applyMatrix4(e),f.b.applyMatrix4(e),f.c.applyMatrix4(e),f.needsUpdate=!0;for(let M=S,y=S+b;M<y;M++)if(u(M),s.needsUpdate=!0,r(s,f,M,R,d,c,x,l))return!0}return!1};if(i){let S=i;i=function(b,A,E,d,c,x,l,R){return S(b,A,E,d,c,x,l,R)?!0:_(b,A,E,d,c,x,l,R)}}else i=_}return super.bvhcast(t,e,{intersectsRanges:i})}intersectsBox(t,e){return as.set(t.min,t.max,e),as.needsUpdate=!0,this.shapecast({intersectsBounds:n=>as.intersectsBox(n),intersectsTriangle:n=>as.intersectsTriangle(n)})}intersectsSphere(t){return this.shapecast({intersectsBounds:e=>t.intersectsBox(e),intersectsTriangle:e=>e.intersectsSphere(t)})}closestPointToGeometry(t,e,n={},i={},r=0,s=1/0){return(this.indirect?Qc:qc)(this,t,e,n,i,r,s)}closestPointToPoint(t,e={},n=0,i=1/0){return Rc(this,t,e,n,i)}};var nl=Math.pow(10,-Math.log10(1e-6)),np=5e-7*nl;function me(a){return~~(a*nl+np)}function il(a){return`${me(a.x)},${me(a.y)}`}function aa(a){return`${me(a.x)},${me(a.y)},${me(a.z)}`}function rl(a){return`${me(a.x)},${me(a.y)},${me(a.z)},${me(a.w)}`}function sl(a,t,e){e.direction.subVectors(t,a).normalize();let n=a.dot(e.direction);return e.origin.copy(a).addScaledVector(e.direction,-n),e}function hs(){return typeof SharedArrayBuffer<"u"}function ol(a){if(a.buffer instanceof SharedArrayBuffer)return a;let t=a.constructor,e=a.buffer,n=new SharedArrayBuffer(e.byteLength),i=new Uint8Array(e);return new Uint8Array(n).set(i,0),new t(n)}function ip(a){return a.index?a.index.count:a.attributes.position.count}function $n(a){return ip(a)/3}var rp=1e-8,sp=new I;function cl(a){return~~(a/3)}function ll(a){return a%3}function al(a,t){return a.start-t.start}function ca(a,t){return sp.subVectors(t,a.origin).dot(a.direction)}function hl(a,t,e,n=rp){a.sort(al),t.sort(al);for(let o=0;o<a.length;o++){let h=a[o];for(let u=0;u<t.length;u++){let f=t[u];if(!(f.start>h.end)){if(h.end<f.start||f.end<h.start)continue;if(h.start<=f.start&&h.end>=f.end)r(f.end,h.end)||a.splice(o+1,0,{start:f.end,end:h.end,index:h.index}),h.end=f.start,f.start=0,f.end=0;else if(h.start>=f.start&&h.end<=f.end)r(h.end,f.end)||t.splice(u+1,0,{start:h.end,end:f.end,index:f.index}),f.end=h.start,h.start=0,h.end=0;else if(h.start<=f.start&&h.end<=f.end){let p=h.end;h.end=f.start,f.start=p}else if(h.start>=f.start&&h.end>=f.end){let p=f.end;f.end=h.start,h.start=p}else throw new Error}if(e.has(h.index)||e.set(h.index,[]),e.has(f.index)||e.set(f.index,[]),e.get(h.index).push(f.index),e.get(f.index).push(h.index),s(f)&&(t.splice(u,1),u--),s(h)){a.splice(o,1),o--;break}}}i(a),i(t);function i(o){for(let h=0;h<o.length;h++)s(o[h])&&(o.splice(h,1),h--)}function r(o,h){return Math.abs(h-o)<n}function s(o){return Math.abs(o.end-o.start)<n}}var us=class{constructor(){this._rays=[]}addRay(t){this._rays.push(t)}findClosestRay(t){let e=this._rays,n=t.clone();n.direction.multiplyScalar(-1);let i=1/0,r=null;for(let h=0,u=e.length;h<u;h++){let f=e[h];if(s(f,t)&&s(f,n))continue;let p=o(f,t),m=o(f,n),g=Math.min(p,m);g<i&&(i=g,r=f)}return r;function s(h,u){let f=h.origin.distanceTo(u.origin)>1e-5;return h.direction.angleTo(u.direction)>1e-4||f}function o(h,u){let f=h.origin.distanceTo(u.origin),p=h.direction.angleTo(u.direction);return f/1e-5+p/1e-4}}};var la=new I,ha=new I,fs=new ye;function ul(a,t,e){let n=a.attributes,i=a.index,r=n.position,s=new Map,o=new Map,h=Array.from(t),u=new us;for(let f=0,p=h.length;f<p;f++){let m=h[f],g=cl(m),_=ll(m),S=3*g+_,b=3*g+(_+1)%3;i&&(S=i.getX(S),b=i.getX(b)),la.fromBufferAttribute(r,S),ha.fromBufferAttribute(r,b),sl(la,ha,fs);let A,E=u.findClosestRay(fs);E===null&&(E=fs.clone(),u.addRay(E)),o.has(E)||o.set(E,{forward:[],reverse:[],ray:E}),A=o.get(E);let d=ca(E,la),c=ca(E,ha);d>c&&([d,c]=[c,d]),fs.direction.dot(E.direction)<0?A.reverse.push({start:d,end:c,index:m}):A.forward.push({start:d,end:c,index:m})}return o.forEach(({forward:f,reverse:p},m)=>{hl(f,p,s,e),f.length===0&&p.length===0&&o.delete(m)}),{disjointConnectivityMap:s,fragmentMap:o}}var op=new H,ua=new I,ap=new Kt,fa=["","",""],ds=class{constructor(){this.data=null,this.disjointConnections=null,this.unmatchedDisjointEdges=null,this.unmatchedEdges=-1,this.matchedEdges=-1,this.useDrawRange=!0,this.useAllAttributes=!1,this.matchDisjointEdges=!1,this.degenerateEpsilon=1e-8}getSiblingTriangleIndex(t,e){let n=this.data[t*3+e];return n===-1?-1:~~(n/3)}getSiblingEdgeIndex(t,e){let n=this.data[t*3+e];return n===-1?-1:n%3}getDisjointSiblingTriangleIndices(t,e){let n=t*3+e,i=this.disjointConnections.get(n);return i?i.map(r=>~~(r/3)):[]}getDisjointSiblingEdgeIndices(t,e){let n=t*3+e,i=this.disjointConnections.get(n);return i?i.map(r=>r%3):[]}isFullyConnected(){return this.unmatchedEdges===0}updateFrom(t){let{useAllAttributes:e,useDrawRange:n,matchDisjointEdges:i,degenerateEpsilon:r}=this,s=e?d:E,o=new Map,{attributes:h}=t,u=e?Object.keys(h):null,f=t.index,p=h.position,m=$n(t),g=m,_=0;n&&(_=t.drawRange.start,t.drawRange.count!==1/0&&(m=~~(t.drawRange.count/3)));let S=this.data;(!S||S.length<3*g)&&(S=new Int32Array(3*g)),S.fill(-1);let b=0,A=new Set;for(let c=_,x=m*3+_;c<x;c+=3){let l=c;for(let R=0;R<3;R++){let w=l+R;f&&(w=f.getX(w)),fa[R]=s(w)}for(let R=0;R<3;R++){let w=(R+1)%3,M=fa[R],y=fa[w],v=`${y}_${M}`;if(o.has(v)){let T=l+R,C=o.get(v);S[T]=C,S[C]=T,o.delete(v),b+=2,A.delete(C)}else{let T=`${M}_${y}`,C=l+R;o.set(T,C),A.add(C)}}}if(i){let{fragmentMap:c,disjointConnectivityMap:x}=ul(t,A,r);A.clear(),c.forEach(({forward:l,reverse:R})=>{l.forEach(({index:w})=>A.add(w)),R.forEach(({index:w})=>A.add(w))}),this.unmatchedDisjointEdges=c,this.disjointConnections=x,b=m*3-A.size}this.matchedEdges=b,this.unmatchedEdges=A.size,this.data=S;function E(c){return ua.fromBufferAttribute(p,c),aa(ua)}function d(c){let x="";for(let l=0,R=u.length;l<R;l++){let w=h[u[l]],M;switch(w.itemSize){case 1:M=me(w.getX(c));break;case 2:M=il(op.fromBufferAttribute(w,c));break;case 3:M=aa(ua.fromBufferAttribute(w,c));break;case 4:M=rl(ap.fromBufferAttribute(w,c));break}x!==""&&(x+="|"),x+=M}return x}}};var ln=class extends gi{constructor(...t){super(...t),this.isBrush=!0,this._previousMatrix=new ft,this._previousMatrix.elements.fill(0),this._halfEdges=null,this._boundsTree=null,this._groupIndices=null,this._hash=null}markUpdated(){this._previousMatrix.copy(this.matrix)}isDirty(){let{matrix:t,_previousMatrix:e}=this,n=t.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!0;return!1}prepareGeometry(){let t=this.geometry,e=t.attributes,n=hs(),i=t.index,r=t.attributes.position,s=i?`${i.uuid}_${i.count}_${i.version}`:"-1_-1_-1",o=`${r.uuid}_${r.count}_${r.version}`,h=`${t.uuid}_${s}_${o}`;if(this._hash===h)return;if(this._hash=h,n)for(let m in e){let g=e[m];if(g.isInterleavedBufferAttribute)throw new Error("Brush: InterleavedBufferAttributes are not supported.");g.array=ol(g.array)}t.boundsTree=new ls(t,{maxLeafSize:3,indirect:!0,useSharedArrayBuffer:n}),t.halfEdges||(t.halfEdges=new ds),t.halfEdges.updateFrom(t);let u=$n(t);(!t.groupIndices||t.groupIndices.length!==u)&&(t.groupIndices=new Uint16Array(u));let f=t.groupIndices,p=t.groups;for(let m=0,g=p.length;m<g;m++){let{start:_,count:S}=p[m];for(let b=_/3,A=(_+S)/3;b<A;b++)f[b]=m}}disposeCacheData(){let{geometry:t}=this;t.halfEdges=null,t.boundsTree=null,t.groupIndices=null}};var cp=Object.getOwnPropertyNames,ne=(a,t)=>function(){return t||(0,a[cp(a)[0]])((t={exports:{}}).exports,t),t.exports},ps=ne({"node_modules/binary-search-bounds/search-bounds.js"(a,t){"use strict";function e(h,u,f,p,m){for(var g=m+1;p<=m;){var _=p+m>>>1,S=h[_],b=f!==void 0?f(S,u):S-u;b>=0?(g=_,m=_-1):p=_+1}return g}function n(h,u,f,p,m){for(var g=m+1;p<=m;){var _=p+m>>>1,S=h[_],b=f!==void 0?f(S,u):S-u;b>0?(g=_,m=_-1):p=_+1}return g}function i(h,u,f,p,m){for(var g=p-1;p<=m;){var _=p+m>>>1,S=h[_],b=f!==void 0?f(S,u):S-u;b<0?(g=_,p=_+1):m=_-1}return g}function r(h,u,f,p,m){for(var g=p-1;p<=m;){var _=p+m>>>1,S=h[_],b=f!==void 0?f(S,u):S-u;b<=0?(g=_,p=_+1):m=_-1}return g}function s(h,u,f,p,m){for(;p<=m;){var g=p+m>>>1,_=h[g],S=f!==void 0?f(_,u):_-u;if(S===0)return g;S<=0?p=g+1:m=g-1}return-1}function o(h,u,f,p,m,g){return typeof f=="function"?g(h,u,f,p===void 0?0:p|0,m===void 0?h.length-1:m|0):g(h,u,void 0,f===void 0?0:f|0,p===void 0?h.length-1:p|0)}t.exports={ge:function(h,u,f,p,m){return o(h,u,f,p,m,e)},gt:function(h,u,f,p,m){return o(h,u,f,p,m,n)},lt:function(h,u,f,p,m){return o(h,u,f,p,m,i)},le:function(h,u,f,p,m){return o(h,u,f,p,m,r)},eq:function(h,u,f,p,m){return o(h,u,f,p,m,s)}}}}),da=ne({"node_modules/two-product/two-product.js"(a,t){"use strict";t.exports=n;var e=+(Math.pow(2,27)+1);function n(i,r,s){var o=i*r,h=e*i,u=h-i,f=h-u,p=i-f,m=e*r,g=m-r,_=m-g,S=r-_,b=o-f*_,A=b-p*_,E=A-f*S,d=p*S-E;return s?(s[0]=d,s[1]=o,s):[d,o]}}}),fl=ne({"node_modules/robust-sum/robust-sum.js"(a,t){"use strict";t.exports=n;function e(i,r){var s=i+r,o=s-i,h=s-o,u=r-o,f=i-h,p=f+u;return p?[p,s]:[s]}function n(i,r){var s=i.length|0,o=r.length|0;if(s===1&&o===1)return e(i[0],r[0]);var h=s+o,u=new Array(h),f=0,p=0,m=0,g=Math.abs,_=i[p],S=g(_),b=r[m],A=g(b),E,d;S<A?(d=_,p+=1,p<s&&(_=i[p],S=g(_))):(d=b,m+=1,m<o&&(b=r[m],A=g(b))),p<s&&S<A||m>=o?(E=_,p+=1,p<s&&(_=i[p],S=g(_))):(E=b,m+=1,m<o&&(b=r[m],A=g(b)));for(var c=E+d,x=c-E,l=d-x,R=l,w=c,M,y,v,T,C;p<s&&m<o;)S<A?(E=_,p+=1,p<s&&(_=i[p],S=g(_))):(E=b,m+=1,m<o&&(b=r[m],A=g(b))),d=R,c=E+d,x=c-E,l=d-x,l&&(u[f++]=l),M=w+c,y=M-w,v=M-y,T=c-y,C=w-v,R=C+T,w=M;for(;p<s;)E=_,d=R,c=E+d,x=c-E,l=d-x,l&&(u[f++]=l),M=w+c,y=M-w,v=M-y,T=c-y,C=w-v,R=C+T,w=M,p+=1,p<s&&(_=i[p]);for(;m<o;)E=b,d=R,c=E+d,x=c-E,l=d-x,l&&(u[f++]=l),M=w+c,y=M-w,v=M-y,T=c-y,C=w-v,R=C+T,w=M,m+=1,m<o&&(b=r[m]);return R&&(u[f++]=R),w&&(u[f++]=w),f||(u[f++]=0),u.length=f,u}}}),lp=ne({"node_modules/two-sum/two-sum.js"(a,t){"use strict";t.exports=e;function e(n,i,r){var s=n+i,o=s-n,h=s-o,u=i-o,f=n-h;return r?(r[0]=f+u,r[1]=s,r):[f+u,s]}}}),dl=ne({"node_modules/robust-scale/robust-scale.js"(a,t){"use strict";var e=da(),n=lp();t.exports=i;function i(r,s){var o=r.length;if(o===1){var h=e(r[0],s);return h[0]?h:[h[1]]}var u=new Array(2*o),f=[.1,.1],p=[.1,.1],m=0;e(r[0],s,f),f[0]&&(u[m++]=f[0]);for(var g=1;g<o;++g){e(r[g],s,p);var _=f[1];n(_,p[0],f),f[0]&&(u[m++]=f[0]);var S=p[1],b=f[1],A=S+b,E=A-S,d=b-E;f[1]=A,d&&(u[m++]=d)}return f[1]&&(u[m++]=f[1]),m===0&&(u[m++]=0),u.length=m,u}}}),pl=ne({"node_modules/robust-subtract/robust-diff.js"(a,t){"use strict";t.exports=n;function e(i,r){var s=i+r,o=s-i,h=s-o,u=r-o,f=i-h,p=f+u;return p?[p,s]:[s]}function n(i,r){var s=i.length|0,o=r.length|0;if(s===1&&o===1)return e(i[0],-r[0]);var h=s+o,u=new Array(h),f=0,p=0,m=0,g=Math.abs,_=i[p],S=g(_),b=-r[m],A=g(b),E,d;S<A?(d=_,p+=1,p<s&&(_=i[p],S=g(_))):(d=b,m+=1,m<o&&(b=-r[m],A=g(b))),p<s&&S<A||m>=o?(E=_,p+=1,p<s&&(_=i[p],S=g(_))):(E=b,m+=1,m<o&&(b=-r[m],A=g(b)));for(var c=E+d,x=c-E,l=d-x,R=l,w=c,M,y,v,T,C;p<s&&m<o;)S<A?(E=_,p+=1,p<s&&(_=i[p],S=g(_))):(E=b,m+=1,m<o&&(b=-r[m],A=g(b))),d=R,c=E+d,x=c-E,l=d-x,l&&(u[f++]=l),M=w+c,y=M-w,v=M-y,T=c-y,C=w-v,R=C+T,w=M;for(;p<s;)E=_,d=R,c=E+d,x=c-E,l=d-x,l&&(u[f++]=l),M=w+c,y=M-w,v=M-y,T=c-y,C=w-v,R=C+T,w=M,p+=1,p<s&&(_=i[p]);for(;m<o;)E=b,d=R,c=E+d,x=c-E,l=d-x,l&&(u[f++]=l),M=w+c,y=M-w,v=M-y,T=c-y,C=w-v,R=C+T,w=M,m+=1,m<o&&(b=-r[m]);return R&&(u[f++]=R),w&&(u[f++]=w),f||(u[f++]=0),u.length=f,u}}}),hp=ne({"node_modules/robust-orientation/orientation.js"(a,t){"use strict";var e=da(),n=fl(),i=dl(),r=pl(),s=5,o=11102230246251565e-32,h=(3+16*o)*o,u=(7+56*o)*o;function f(c,x,l,R){return function(M,y,v){var T=c(c(x(y[1],v[0]),x(-v[1],y[0])),c(x(M[1],y[0]),x(-y[1],M[0]))),C=c(x(M[1],v[0]),x(-v[1],M[0])),P=R(T,C);return P[P.length-1]}}function p(c,x,l,R){return function(M,y,v,T){var C=c(c(l(c(x(v[1],T[0]),x(-T[1],v[0])),y[2]),c(l(c(x(y[1],T[0]),x(-T[1],y[0])),-v[2]),l(c(x(y[1],v[0]),x(-v[1],y[0])),T[2]))),c(l(c(x(y[1],T[0]),x(-T[1],y[0])),M[2]),c(l(c(x(M[1],T[0]),x(-T[1],M[0])),-y[2]),l(c(x(M[1],y[0]),x(-y[1],M[0])),T[2])))),P=c(c(l(c(x(v[1],T[0]),x(-T[1],v[0])),M[2]),c(l(c(x(M[1],T[0]),x(-T[1],M[0])),-v[2]),l(c(x(M[1],v[0]),x(-v[1],M[0])),T[2]))),c(l(c(x(y[1],v[0]),x(-v[1],y[0])),M[2]),c(l(c(x(M[1],v[0]),x(-v[1],M[0])),-y[2]),l(c(x(M[1],y[0]),x(-y[1],M[0])),v[2])))),D=R(C,P);return D[D.length-1]}}function m(c,x,l,R){return function(M,y,v,T,C){var P=c(c(c(l(c(l(c(x(T[1],C[0]),x(-C[1],T[0])),v[2]),c(l(c(x(v[1],C[0]),x(-C[1],v[0])),-T[2]),l(c(x(v[1],T[0]),x(-T[1],v[0])),C[2]))),y[3]),c(l(c(l(c(x(T[1],C[0]),x(-C[1],T[0])),y[2]),c(l(c(x(y[1],C[0]),x(-C[1],y[0])),-T[2]),l(c(x(y[1],T[0]),x(-T[1],y[0])),C[2]))),-v[3]),l(c(l(c(x(v[1],C[0]),x(-C[1],v[0])),y[2]),c(l(c(x(y[1],C[0]),x(-C[1],y[0])),-v[2]),l(c(x(y[1],v[0]),x(-v[1],y[0])),C[2]))),T[3]))),c(l(c(l(c(x(v[1],T[0]),x(-T[1],v[0])),y[2]),c(l(c(x(y[1],T[0]),x(-T[1],y[0])),-v[2]),l(c(x(y[1],v[0]),x(-v[1],y[0])),T[2]))),-C[3]),c(l(c(l(c(x(T[1],C[0]),x(-C[1],T[0])),y[2]),c(l(c(x(y[1],C[0]),x(-C[1],y[0])),-T[2]),l(c(x(y[1],T[0]),x(-T[1],y[0])),C[2]))),M[3]),l(c(l(c(x(T[1],C[0]),x(-C[1],T[0])),M[2]),c(l(c(x(M[1],C[0]),x(-C[1],M[0])),-T[2]),l(c(x(M[1],T[0]),x(-T[1],M[0])),C[2]))),-y[3])))),c(c(l(c(l(c(x(y[1],C[0]),x(-C[1],y[0])),M[2]),c(l(c(x(M[1],C[0]),x(-C[1],M[0])),-y[2]),l(c(x(M[1],y[0]),x(-y[1],M[0])),C[2]))),T[3]),c(l(c(l(c(x(y[1],T[0]),x(-T[1],y[0])),M[2]),c(l(c(x(M[1],T[0]),x(-T[1],M[0])),-y[2]),l(c(x(M[1],y[0]),x(-y[1],M[0])),T[2]))),-C[3]),l(c(l(c(x(v[1],T[0]),x(-T[1],v[0])),y[2]),c(l(c(x(y[1],T[0]),x(-T[1],y[0])),-v[2]),l(c(x(y[1],v[0]),x(-v[1],y[0])),T[2]))),M[3]))),c(l(c(l(c(x(v[1],T[0]),x(-T[1],v[0])),M[2]),c(l(c(x(M[1],T[0]),x(-T[1],M[0])),-v[2]),l(c(x(M[1],v[0]),x(-v[1],M[0])),T[2]))),-y[3]),c(l(c(l(c(x(y[1],T[0]),x(-T[1],y[0])),M[2]),c(l(c(x(M[1],T[0]),x(-T[1],M[0])),-y[2]),l(c(x(M[1],y[0]),x(-y[1],M[0])),T[2]))),v[3]),l(c(l(c(x(y[1],v[0]),x(-v[1],y[0])),M[2]),c(l(c(x(M[1],v[0]),x(-v[1],M[0])),-y[2]),l(c(x(M[1],y[0]),x(-y[1],M[0])),v[2]))),-T[3]))))),D=c(c(c(l(c(l(c(x(T[1],C[0]),x(-C[1],T[0])),v[2]),c(l(c(x(v[1],C[0]),x(-C[1],v[0])),-T[2]),l(c(x(v[1],T[0]),x(-T[1],v[0])),C[2]))),M[3]),l(c(l(c(x(T[1],C[0]),x(-C[1],T[0])),M[2]),c(l(c(x(M[1],C[0]),x(-C[1],M[0])),-T[2]),l(c(x(M[1],T[0]),x(-T[1],M[0])),C[2]))),-v[3])),c(l(c(l(c(x(v[1],C[0]),x(-C[1],v[0])),M[2]),c(l(c(x(M[1],C[0]),x(-C[1],M[0])),-v[2]),l(c(x(M[1],v[0]),x(-v[1],M[0])),C[2]))),T[3]),l(c(l(c(x(v[1],T[0]),x(-T[1],v[0])),M[2]),c(l(c(x(M[1],T[0]),x(-T[1],M[0])),-v[2]),l(c(x(M[1],v[0]),x(-v[1],M[0])),T[2]))),-C[3]))),c(c(l(c(l(c(x(v[1],C[0]),x(-C[1],v[0])),y[2]),c(l(c(x(y[1],C[0]),x(-C[1],y[0])),-v[2]),l(c(x(y[1],v[0]),x(-v[1],y[0])),C[2]))),M[3]),l(c(l(c(x(v[1],C[0]),x(-C[1],v[0])),M[2]),c(l(c(x(M[1],C[0]),x(-C[1],M[0])),-v[2]),l(c(x(M[1],v[0]),x(-v[1],M[0])),C[2]))),-y[3])),c(l(c(l(c(x(y[1],C[0]),x(-C[1],y[0])),M[2]),c(l(c(x(M[1],C[0]),x(-C[1],M[0])),-y[2]),l(c(x(M[1],y[0]),x(-y[1],M[0])),C[2]))),v[3]),l(c(l(c(x(y[1],v[0]),x(-v[1],y[0])),M[2]),c(l(c(x(M[1],v[0]),x(-v[1],M[0])),-y[2]),l(c(x(M[1],y[0]),x(-y[1],M[0])),v[2]))),-C[3])))),L=R(P,D);return L[L.length-1]}}function g(c){var x=c===3?f:c===4?p:m;return x(n,e,i,r)}var _=g(3),S=g(4),b=[function(){return 0},function(){return 0},function(x,l){return l[0]-x[0]},function(x,l,R){var w=(x[1]-R[1])*(l[0]-R[0]),M=(x[0]-R[0])*(l[1]-R[1]),y=w-M,v;if(w>0){if(M<=0)return y;v=w+M}else if(w<0){if(M>=0)return y;v=-(w+M)}else return y;var T=h*v;return y>=T||y<=-T?y:_(x,l,R)},function(x,l,R,w){var M=x[0]-w[0],y=l[0]-w[0],v=R[0]-w[0],T=x[1]-w[1],C=l[1]-w[1],P=R[1]-w[1],D=x[2]-w[2],L=l[2]-w[2],N=R[2]-w[2],z=y*P,F=v*C,Z=v*T,k=M*P,q=M*C,W=y*T,$=D*(z-F)+L*(Z-k)+N*(q-W),Q=(Math.abs(z)+Math.abs(F))*Math.abs(D)+(Math.abs(Z)+Math.abs(k))*Math.abs(L)+(Math.abs(q)+Math.abs(W))*Math.abs(N),mt=u*Q;return $>mt||-$>mt?$:S(x,l,R,w)}];function A(c){var x=b[c.length];return x||(x=b[c.length]=g(c.length)),x.apply(void 0,c)}function E(c,x,l,R,w,M,y){return function(T,C,P,D,L){switch(arguments.length){case 0:case 1:return 0;case 2:return R(T,C);case 3:return w(T,C,P);case 4:return M(T,C,P,D);case 5:return y(T,C,P,D,L)}for(var N=new Array(arguments.length),z=0;z<arguments.length;++z)N[z]=arguments[z];return c(N)}}function d(){for(;b.length<=s;)b.push(g(b.length));t.exports=E.apply(void 0,[A].concat(b));for(var c=0;c<=s;++c)t.exports[c]=b[c]}d()}}),up=ne({"node_modules/cdt2d/lib/monotone.js"(a,t){"use strict";var e=ps(),n=hp()[3],i=0,r=1,s=2;t.exports=S;function o(b,A,E,d,c){this.a=b,this.b=A,this.idx=E,this.lowerIds=d,this.upperIds=c}function h(b,A,E,d){this.a=b,this.b=A,this.type=E,this.idx=d}function u(b,A){var E=b.a[0]-A.a[0]||b.a[1]-A.a[1]||b.type-A.type;return E||b.type!==i&&(E=n(b.a,b.b,A.b),E)?E:b.idx-A.idx}function f(b,A){return n(b.a,b.b,A)}function p(b,A,E,d,c){for(var x=e.lt(A,d,f),l=e.gt(A,d,f),R=x;R<l;++R){for(var w=A[R],M=w.lowerIds,v=M.length;v>1&&n(E[M[v-2]],E[M[v-1]],d)>0;)b.push([M[v-1],M[v-2],c]),v-=1;M.length=v,M.push(c);for(var y=w.upperIds,v=y.length;v>1&&n(E[y[v-2]],E[y[v-1]],d)<0;)b.push([y[v-2],y[v-1],c]),v-=1;y.length=v,y.push(c)}}function m(b,A){var E;return b.a[0]<A.a[0]?E=n(b.a,b.b,A.a):E=n(A.b,A.a,b.a),E||(A.b[0]<b.b[0]?E=n(b.a,b.b,A.b):E=n(A.b,A.a,b.b),E||b.idx-A.idx)}function g(b,A,E){var d=e.le(b,E,m),c=b[d],x=c.upperIds,l=x[x.length-1];c.upperIds=[l],b.splice(d+1,0,new o(E.a,E.b,E.idx,[l],x))}function _(b,A,E){var d=E.a;E.a=E.b,E.b=d;var c=e.eq(b,E,m),x=b[c],l=b[c-1];l.upperIds=x.upperIds,b.splice(c,1)}function S(b,A){for(var E=b.length,d=A.length,c=[],x=0;x<E;++x)c.push(new h(b[x],null,i,x));for(var x=0;x<d;++x){var l=A[x],R=b[l[0]],w=b[l[1]];R[0]<w[0]?c.push(new h(R,w,s,x),new h(w,R,r,x)):R[0]>w[0]&&c.push(new h(w,R,s,x),new h(R,w,r,x))}c.sort(u);for(var M=c[0].a[0]-(1+Math.abs(c[0].a[0]))*Math.pow(2,-52),y=[new o([M,1],[M,0],-1,[],[],[],[])],v=[],x=0,T=c.length;x<T;++x){var C=c[x],P=C.type;P===i?p(v,y,b,C.a,C.idx):P===s?g(y,b,C):_(y,b,C)}return v}}}),fp=ne({"node_modules/cdt2d/lib/triangulation.js"(a,t){"use strict";var e=ps();t.exports=s;function n(o,h){this.stars=o,this.edges=h}var i=n.prototype;function r(o,h,u){for(var f=1,p=o.length;f<p;f+=2)if(o[f-1]===h&&o[f]===u){o[f-1]=o[p-2],o[f]=o[p-1],o.length=p-2;return}}i.isConstraint=(function(){var o=[0,0];function h(u,f){return u[0]-f[0]||u[1]-f[1]}return function(u,f){return o[0]=Math.min(u,f),o[1]=Math.max(u,f),e.eq(this.edges,o,h)>=0}})(),i.removeTriangle=function(o,h,u){var f=this.stars;r(f[o],h,u),r(f[h],u,o),r(f[u],o,h)},i.addTriangle=function(o,h,u){var f=this.stars;f[o].push(h,u),f[h].push(u,o),f[u].push(o,h)},i.opposite=function(o,h){for(var u=this.stars[h],f=1,p=u.length;f<p;f+=2)if(u[f]===o)return u[f-1];return-1},i.flip=function(o,h){var u=this.opposite(o,h),f=this.opposite(h,o);this.removeTriangle(o,h,u),this.removeTriangle(h,o,f),this.addTriangle(o,f,u),this.addTriangle(h,u,f)},i.edges=function(){for(var o=this.stars,h=[],u=0,f=o.length;u<f;++u)for(var p=o[u],m=0,g=p.length;m<g;m+=2)h.push([p[m],p[m+1]]);return h},i.cells=function(){for(var o=this.stars,h=[],u=0,f=o.length;u<f;++u)for(var p=o[u],m=0,g=p.length;m<g;m+=2){var _=p[m],S=p[m+1];u<Math.min(_,S)&&h.push([u,_,S])}return h};function s(o,h){for(var u=new Array(o),f=0;f<o;++f)u[f]=[];return new n(u,h)}}}),dp=ne({"node_modules/robust-in-sphere/in-sphere.js"(a,t){"use strict";var e=da(),n=fl(),i=pl(),r=dl(),s=6;function o(d){var c=d===3?p:d===4?m:d===5?g:_;return c(n,i,e,r)}function h(){return 0}function u(){return 0}function f(){return 0}function p(d,c,x,l){function R(w,M,y){var v=x(w[0],w[0]),T=l(v,M[0]),C=l(v,y[0]),P=x(M[0],M[0]),D=l(P,w[0]),L=l(P,y[0]),N=x(y[0],y[0]),z=l(N,w[0]),F=l(N,M[0]),Z=d(c(F,L),c(D,T)),k=c(z,C),q=c(Z,k);return q[q.length-1]}return R}function m(d,c,x,l){function R(w,M,y,v){var T=d(x(w[0],w[0]),x(w[1],w[1])),C=l(T,M[0]),P=l(T,y[0]),D=l(T,v[0]),L=d(x(M[0],M[0]),x(M[1],M[1])),N=l(L,w[0]),z=l(L,y[0]),F=l(L,v[0]),Z=d(x(y[0],y[0]),x(y[1],y[1])),k=l(Z,w[0]),q=l(Z,M[0]),W=l(Z,v[0]),$=d(x(v[0],v[0]),x(v[1],v[1])),Q=l($,w[0]),mt=l($,M[0]),rt=l($,y[0]),ot=d(d(l(c(rt,W),M[1]),d(l(c(mt,F),-y[1]),l(c(q,z),v[1]))),d(l(c(mt,F),w[1]),d(l(c(Q,D),-M[1]),l(c(N,C),v[1])))),K=d(d(l(c(rt,W),w[1]),d(l(c(Q,D),-y[1]),l(c(k,P),v[1]))),d(l(c(q,z),w[1]),d(l(c(k,P),-M[1]),l(c(N,C),y[1])))),st=c(ot,K);return st[st.length-1]}return R}function g(d,c,x,l){function R(w,M,y,v,T){var C=d(x(w[0],w[0]),d(x(w[1],w[1]),x(w[2],w[2]))),P=l(C,M[0]),D=l(C,y[0]),L=l(C,v[0]),N=l(C,T[0]),z=d(x(M[0],M[0]),d(x(M[1],M[1]),x(M[2],M[2]))),F=l(z,w[0]),Z=l(z,y[0]),k=l(z,v[0]),q=l(z,T[0]),W=d(x(y[0],y[0]),d(x(y[1],y[1]),x(y[2],y[2]))),$=l(W,w[0]),Q=l(W,M[0]),mt=l(W,v[0]),rt=l(W,T[0]),ot=d(x(v[0],v[0]),d(x(v[1],v[1]),x(v[2],v[2]))),K=l(ot,w[0]),st=l(ot,M[0]),ut=l(ot,y[0]),At=l(ot,T[0]),at=d(x(T[0],T[0]),d(x(T[1],T[1]),x(T[2],T[2]))),U=l(at,w[0]),B=l(at,M[0]),O=l(at,y[0]),V=l(at,v[0]),Y=d(d(d(l(d(l(c(V,At),y[1]),d(l(c(O,rt),-v[1]),l(c(ut,mt),T[1]))),M[2]),d(l(d(l(c(V,At),M[1]),d(l(c(B,q),-v[1]),l(c(st,k),T[1]))),-y[2]),l(d(l(c(O,rt),M[1]),d(l(c(B,q),-y[1]),l(c(Q,Z),T[1]))),v[2]))),d(l(d(l(c(ut,mt),M[1]),d(l(c(st,k),-y[1]),l(c(Q,Z),v[1]))),-T[2]),d(l(d(l(c(V,At),M[1]),d(l(c(B,q),-v[1]),l(c(st,k),T[1]))),w[2]),l(d(l(c(V,At),w[1]),d(l(c(U,N),-v[1]),l(c(K,L),T[1]))),-M[2])))),d(d(l(d(l(c(B,q),w[1]),d(l(c(U,N),-M[1]),l(c(F,P),T[1]))),v[2]),d(l(d(l(c(st,k),w[1]),d(l(c(K,L),-M[1]),l(c(F,P),v[1]))),-T[2]),l(d(l(c(ut,mt),M[1]),d(l(c(st,k),-y[1]),l(c(Q,Z),v[1]))),w[2]))),d(l(d(l(c(ut,mt),w[1]),d(l(c(K,L),-y[1]),l(c($,D),v[1]))),-M[2]),d(l(d(l(c(st,k),w[1]),d(l(c(K,L),-M[1]),l(c(F,P),v[1]))),y[2]),l(d(l(c(Q,Z),w[1]),d(l(c($,D),-M[1]),l(c(F,P),y[1]))),-v[2]))))),J=d(d(d(l(d(l(c(V,At),y[1]),d(l(c(O,rt),-v[1]),l(c(ut,mt),T[1]))),w[2]),l(d(l(c(V,At),w[1]),d(l(c(U,N),-v[1]),l(c(K,L),T[1]))),-y[2])),d(l(d(l(c(O,rt),w[1]),d(l(c(U,N),-y[1]),l(c($,D),T[1]))),v[2]),l(d(l(c(ut,mt),w[1]),d(l(c(K,L),-y[1]),l(c($,D),v[1]))),-T[2]))),d(d(l(d(l(c(O,rt),M[1]),d(l(c(B,q),-y[1]),l(c(Q,Z),T[1]))),w[2]),l(d(l(c(O,rt),w[1]),d(l(c(U,N),-y[1]),l(c($,D),T[1]))),-M[2])),d(l(d(l(c(B,q),w[1]),d(l(c(U,N),-M[1]),l(c(F,P),T[1]))),y[2]),l(d(l(c(Q,Z),w[1]),d(l(c($,D),-M[1]),l(c(F,P),y[1]))),-T[2])))),X=c(Y,J);return X[X.length-1]}return R}function _(d,c,x,l){function R(w,M,y,v,T,C){var P=d(d(x(w[0],w[0]),x(w[1],w[1])),d(x(w[2],w[2]),x(w[3],w[3]))),D=l(P,M[0]),L=l(P,y[0]),N=l(P,v[0]),z=l(P,T[0]),F=l(P,C[0]),Z=d(d(x(M[0],M[0]),x(M[1],M[1])),d(x(M[2],M[2]),x(M[3],M[3]))),k=l(Z,w[0]),q=l(Z,y[0]),W=l(Z,v[0]),$=l(Z,T[0]),Q=l(Z,C[0]),mt=d(d(x(y[0],y[0]),x(y[1],y[1])),d(x(y[2],y[2]),x(y[3],y[3]))),rt=l(mt,w[0]),ot=l(mt,M[0]),K=l(mt,v[0]),st=l(mt,T[0]),ut=l(mt,C[0]),At=d(d(x(v[0],v[0]),x(v[1],v[1])),d(x(v[2],v[2]),x(v[3],v[3]))),at=l(At,w[0]),U=l(At,M[0]),B=l(At,y[0]),O=l(At,T[0]),V=l(At,C[0]),Y=d(d(x(T[0],T[0]),x(T[1],T[1])),d(x(T[2],T[2]),x(T[3],T[3]))),J=l(Y,w[0]),X=l(Y,M[0]),j=l(Y,y[0]),tt=l(Y,v[0]),et=l(Y,C[0]),Bt=d(d(x(C[0],C[0]),x(C[1],C[1])),d(x(C[2],C[2]),x(C[3],C[3]))),pt=l(Bt,w[0]),ct=l(Bt,M[0]),Mt=l(Bt,y[0]),St=l(Bt,v[0]),bt=l(Bt,T[0]),Rs=d(d(d(l(d(d(l(d(l(c(bt,et),v[1]),d(l(c(St,V),-T[1]),l(c(tt,O),C[1]))),y[2]),l(d(l(c(bt,et),y[1]),d(l(c(Mt,ut),-T[1]),l(c(j,st),C[1]))),-v[2])),d(l(d(l(c(St,V),y[1]),d(l(c(Mt,ut),-v[1]),l(c(B,K),C[1]))),T[2]),l(d(l(c(tt,O),y[1]),d(l(c(j,st),-v[1]),l(c(B,K),T[1]))),-C[2]))),M[3]),d(l(d(d(l(d(l(c(bt,et),v[1]),d(l(c(St,V),-T[1]),l(c(tt,O),C[1]))),M[2]),l(d(l(c(bt,et),M[1]),d(l(c(ct,Q),-T[1]),l(c(X,$),C[1]))),-v[2])),d(l(d(l(c(St,V),M[1]),d(l(c(ct,Q),-v[1]),l(c(U,W),C[1]))),T[2]),l(d(l(c(tt,O),M[1]),d(l(c(X,$),-v[1]),l(c(U,W),T[1]))),-C[2]))),-y[3]),l(d(d(l(d(l(c(bt,et),y[1]),d(l(c(Mt,ut),-T[1]),l(c(j,st),C[1]))),M[2]),l(d(l(c(bt,et),M[1]),d(l(c(ct,Q),-T[1]),l(c(X,$),C[1]))),-y[2])),d(l(d(l(c(Mt,ut),M[1]),d(l(c(ct,Q),-y[1]),l(c(ot,q),C[1]))),T[2]),l(d(l(c(j,st),M[1]),d(l(c(X,$),-y[1]),l(c(ot,q),T[1]))),-C[2]))),v[3]))),d(d(l(d(d(l(d(l(c(St,V),y[1]),d(l(c(Mt,ut),-v[1]),l(c(B,K),C[1]))),M[2]),l(d(l(c(St,V),M[1]),d(l(c(ct,Q),-v[1]),l(c(U,W),C[1]))),-y[2])),d(l(d(l(c(Mt,ut),M[1]),d(l(c(ct,Q),-y[1]),l(c(ot,q),C[1]))),v[2]),l(d(l(c(B,K),M[1]),d(l(c(U,W),-y[1]),l(c(ot,q),v[1]))),-C[2]))),-T[3]),l(d(d(l(d(l(c(tt,O),y[1]),d(l(c(j,st),-v[1]),l(c(B,K),T[1]))),M[2]),l(d(l(c(tt,O),M[1]),d(l(c(X,$),-v[1]),l(c(U,W),T[1]))),-y[2])),d(l(d(l(c(j,st),M[1]),d(l(c(X,$),-y[1]),l(c(ot,q),T[1]))),v[2]),l(d(l(c(B,K),M[1]),d(l(c(U,W),-y[1]),l(c(ot,q),v[1]))),-T[2]))),C[3])),d(l(d(d(l(d(l(c(bt,et),v[1]),d(l(c(St,V),-T[1]),l(c(tt,O),C[1]))),M[2]),l(d(l(c(bt,et),M[1]),d(l(c(ct,Q),-T[1]),l(c(X,$),C[1]))),-v[2])),d(l(d(l(c(St,V),M[1]),d(l(c(ct,Q),-v[1]),l(c(U,W),C[1]))),T[2]),l(d(l(c(tt,O),M[1]),d(l(c(X,$),-v[1]),l(c(U,W),T[1]))),-C[2]))),w[3]),l(d(d(l(d(l(c(bt,et),v[1]),d(l(c(St,V),-T[1]),l(c(tt,O),C[1]))),w[2]),l(d(l(c(bt,et),w[1]),d(l(c(pt,F),-T[1]),l(c(J,z),C[1]))),-v[2])),d(l(d(l(c(St,V),w[1]),d(l(c(pt,F),-v[1]),l(c(at,N),C[1]))),T[2]),l(d(l(c(tt,O),w[1]),d(l(c(J,z),-v[1]),l(c(at,N),T[1]))),-C[2]))),-M[3])))),d(d(d(l(d(d(l(d(l(c(bt,et),M[1]),d(l(c(ct,Q),-T[1]),l(c(X,$),C[1]))),w[2]),l(d(l(c(bt,et),w[1]),d(l(c(pt,F),-T[1]),l(c(J,z),C[1]))),-M[2])),d(l(d(l(c(ct,Q),w[1]),d(l(c(pt,F),-M[1]),l(c(k,D),C[1]))),T[2]),l(d(l(c(X,$),w[1]),d(l(c(J,z),-M[1]),l(c(k,D),T[1]))),-C[2]))),v[3]),l(d(d(l(d(l(c(St,V),M[1]),d(l(c(ct,Q),-v[1]),l(c(U,W),C[1]))),w[2]),l(d(l(c(St,V),w[1]),d(l(c(pt,F),-v[1]),l(c(at,N),C[1]))),-M[2])),d(l(d(l(c(ct,Q),w[1]),d(l(c(pt,F),-M[1]),l(c(k,D),C[1]))),v[2]),l(d(l(c(U,W),w[1]),d(l(c(at,N),-M[1]),l(c(k,D),v[1]))),-C[2]))),-T[3])),d(l(d(d(l(d(l(c(tt,O),M[1]),d(l(c(X,$),-v[1]),l(c(U,W),T[1]))),w[2]),l(d(l(c(tt,O),w[1]),d(l(c(J,z),-v[1]),l(c(at,N),T[1]))),-M[2])),d(l(d(l(c(X,$),w[1]),d(l(c(J,z),-M[1]),l(c(k,D),T[1]))),v[2]),l(d(l(c(U,W),w[1]),d(l(c(at,N),-M[1]),l(c(k,D),v[1]))),-T[2]))),C[3]),l(d(d(l(d(l(c(St,V),y[1]),d(l(c(Mt,ut),-v[1]),l(c(B,K),C[1]))),M[2]),l(d(l(c(St,V),M[1]),d(l(c(ct,Q),-v[1]),l(c(U,W),C[1]))),-y[2])),d(l(d(l(c(Mt,ut),M[1]),d(l(c(ct,Q),-y[1]),l(c(ot,q),C[1]))),v[2]),l(d(l(c(B,K),M[1]),d(l(c(U,W),-y[1]),l(c(ot,q),v[1]))),-C[2]))),w[3]))),d(d(l(d(d(l(d(l(c(St,V),y[1]),d(l(c(Mt,ut),-v[1]),l(c(B,K),C[1]))),w[2]),l(d(l(c(St,V),w[1]),d(l(c(pt,F),-v[1]),l(c(at,N),C[1]))),-y[2])),d(l(d(l(c(Mt,ut),w[1]),d(l(c(pt,F),-y[1]),l(c(rt,L),C[1]))),v[2]),l(d(l(c(B,K),w[1]),d(l(c(at,N),-y[1]),l(c(rt,L),v[1]))),-C[2]))),-M[3]),l(d(d(l(d(l(c(St,V),M[1]),d(l(c(ct,Q),-v[1]),l(c(U,W),C[1]))),w[2]),l(d(l(c(St,V),w[1]),d(l(c(pt,F),-v[1]),l(c(at,N),C[1]))),-M[2])),d(l(d(l(c(ct,Q),w[1]),d(l(c(pt,F),-M[1]),l(c(k,D),C[1]))),v[2]),l(d(l(c(U,W),w[1]),d(l(c(at,N),-M[1]),l(c(k,D),v[1]))),-C[2]))),y[3])),d(l(d(d(l(d(l(c(Mt,ut),M[1]),d(l(c(ct,Q),-y[1]),l(c(ot,q),C[1]))),w[2]),l(d(l(c(Mt,ut),w[1]),d(l(c(pt,F),-y[1]),l(c(rt,L),C[1]))),-M[2])),d(l(d(l(c(ct,Q),w[1]),d(l(c(pt,F),-M[1]),l(c(k,D),C[1]))),y[2]),l(d(l(c(ot,q),w[1]),d(l(c(rt,L),-M[1]),l(c(k,D),y[1]))),-C[2]))),-v[3]),l(d(d(l(d(l(c(B,K),M[1]),d(l(c(U,W),-y[1]),l(c(ot,q),v[1]))),w[2]),l(d(l(c(B,K),w[1]),d(l(c(at,N),-y[1]),l(c(rt,L),v[1]))),-M[2])),d(l(d(l(c(U,W),w[1]),d(l(c(at,N),-M[1]),l(c(k,D),v[1]))),y[2]),l(d(l(c(ot,q),w[1]),d(l(c(rt,L),-M[1]),l(c(k,D),y[1]))),-v[2]))),C[3]))))),Is=d(d(d(l(d(d(l(d(l(c(bt,et),v[1]),d(l(c(St,V),-T[1]),l(c(tt,O),C[1]))),y[2]),l(d(l(c(bt,et),y[1]),d(l(c(Mt,ut),-T[1]),l(c(j,st),C[1]))),-v[2])),d(l(d(l(c(St,V),y[1]),d(l(c(Mt,ut),-v[1]),l(c(B,K),C[1]))),T[2]),l(d(l(c(tt,O),y[1]),d(l(c(j,st),-v[1]),l(c(B,K),T[1]))),-C[2]))),w[3]),d(l(d(d(l(d(l(c(bt,et),v[1]),d(l(c(St,V),-T[1]),l(c(tt,O),C[1]))),w[2]),l(d(l(c(bt,et),w[1]),d(l(c(pt,F),-T[1]),l(c(J,z),C[1]))),-v[2])),d(l(d(l(c(St,V),w[1]),d(l(c(pt,F),-v[1]),l(c(at,N),C[1]))),T[2]),l(d(l(c(tt,O),w[1]),d(l(c(J,z),-v[1]),l(c(at,N),T[1]))),-C[2]))),-y[3]),l(d(d(l(d(l(c(bt,et),y[1]),d(l(c(Mt,ut),-T[1]),l(c(j,st),C[1]))),w[2]),l(d(l(c(bt,et),w[1]),d(l(c(pt,F),-T[1]),l(c(J,z),C[1]))),-y[2])),d(l(d(l(c(Mt,ut),w[1]),d(l(c(pt,F),-y[1]),l(c(rt,L),C[1]))),T[2]),l(d(l(c(j,st),w[1]),d(l(c(J,z),-y[1]),l(c(rt,L),T[1]))),-C[2]))),v[3]))),d(d(l(d(d(l(d(l(c(St,V),y[1]),d(l(c(Mt,ut),-v[1]),l(c(B,K),C[1]))),w[2]),l(d(l(c(St,V),w[1]),d(l(c(pt,F),-v[1]),l(c(at,N),C[1]))),-y[2])),d(l(d(l(c(Mt,ut),w[1]),d(l(c(pt,F),-y[1]),l(c(rt,L),C[1]))),v[2]),l(d(l(c(B,K),w[1]),d(l(c(at,N),-y[1]),l(c(rt,L),v[1]))),-C[2]))),-T[3]),l(d(d(l(d(l(c(tt,O),y[1]),d(l(c(j,st),-v[1]),l(c(B,K),T[1]))),w[2]),l(d(l(c(tt,O),w[1]),d(l(c(J,z),-v[1]),l(c(at,N),T[1]))),-y[2])),d(l(d(l(c(j,st),w[1]),d(l(c(J,z),-y[1]),l(c(rt,L),T[1]))),v[2]),l(d(l(c(B,K),w[1]),d(l(c(at,N),-y[1]),l(c(rt,L),v[1]))),-T[2]))),C[3])),d(l(d(d(l(d(l(c(bt,et),y[1]),d(l(c(Mt,ut),-T[1]),l(c(j,st),C[1]))),M[2]),l(d(l(c(bt,et),M[1]),d(l(c(ct,Q),-T[1]),l(c(X,$),C[1]))),-y[2])),d(l(d(l(c(Mt,ut),M[1]),d(l(c(ct,Q),-y[1]),l(c(ot,q),C[1]))),T[2]),l(d(l(c(j,st),M[1]),d(l(c(X,$),-y[1]),l(c(ot,q),T[1]))),-C[2]))),w[3]),l(d(d(l(d(l(c(bt,et),y[1]),d(l(c(Mt,ut),-T[1]),l(c(j,st),C[1]))),w[2]),l(d(l(c(bt,et),w[1]),d(l(c(pt,F),-T[1]),l(c(J,z),C[1]))),-y[2])),d(l(d(l(c(Mt,ut),w[1]),d(l(c(pt,F),-y[1]),l(c(rt,L),C[1]))),T[2]),l(d(l(c(j,st),w[1]),d(l(c(J,z),-y[1]),l(c(rt,L),T[1]))),-C[2]))),-M[3])))),d(d(d(l(d(d(l(d(l(c(bt,et),M[1]),d(l(c(ct,Q),-T[1]),l(c(X,$),C[1]))),w[2]),l(d(l(c(bt,et),w[1]),d(l(c(pt,F),-T[1]),l(c(J,z),C[1]))),-M[2])),d(l(d(l(c(ct,Q),w[1]),d(l(c(pt,F),-M[1]),l(c(k,D),C[1]))),T[2]),l(d(l(c(X,$),w[1]),d(l(c(J,z),-M[1]),l(c(k,D),T[1]))),-C[2]))),y[3]),l(d(d(l(d(l(c(Mt,ut),M[1]),d(l(c(ct,Q),-y[1]),l(c(ot,q),C[1]))),w[2]),l(d(l(c(Mt,ut),w[1]),d(l(c(pt,F),-y[1]),l(c(rt,L),C[1]))),-M[2])),d(l(d(l(c(ct,Q),w[1]),d(l(c(pt,F),-M[1]),l(c(k,D),C[1]))),y[2]),l(d(l(c(ot,q),w[1]),d(l(c(rt,L),-M[1]),l(c(k,D),y[1]))),-C[2]))),-T[3])),d(l(d(d(l(d(l(c(j,st),M[1]),d(l(c(X,$),-y[1]),l(c(ot,q),T[1]))),w[2]),l(d(l(c(j,st),w[1]),d(l(c(J,z),-y[1]),l(c(rt,L),T[1]))),-M[2])),d(l(d(l(c(X,$),w[1]),d(l(c(J,z),-M[1]),l(c(k,D),T[1]))),y[2]),l(d(l(c(ot,q),w[1]),d(l(c(rt,L),-M[1]),l(c(k,D),y[1]))),-T[2]))),C[3]),l(d(d(l(d(l(c(tt,O),y[1]),d(l(c(j,st),-v[1]),l(c(B,K),T[1]))),M[2]),l(d(l(c(tt,O),M[1]),d(l(c(X,$),-v[1]),l(c(U,W),T[1]))),-y[2])),d(l(d(l(c(j,st),M[1]),d(l(c(X,$),-y[1]),l(c(ot,q),T[1]))),v[2]),l(d(l(c(B,K),M[1]),d(l(c(U,W),-y[1]),l(c(ot,q),v[1]))),-T[2]))),w[3]))),d(d(l(d(d(l(d(l(c(tt,O),y[1]),d(l(c(j,st),-v[1]),l(c(B,K),T[1]))),w[2]),l(d(l(c(tt,O),w[1]),d(l(c(J,z),-v[1]),l(c(at,N),T[1]))),-y[2])),d(l(d(l(c(j,st),w[1]),d(l(c(J,z),-y[1]),l(c(rt,L),T[1]))),v[2]),l(d(l(c(B,K),w[1]),d(l(c(at,N),-y[1]),l(c(rt,L),v[1]))),-T[2]))),-M[3]),l(d(d(l(d(l(c(tt,O),M[1]),d(l(c(X,$),-v[1]),l(c(U,W),T[1]))),w[2]),l(d(l(c(tt,O),w[1]),d(l(c(J,z),-v[1]),l(c(at,N),T[1]))),-M[2])),d(l(d(l(c(X,$),w[1]),d(l(c(J,z),-M[1]),l(c(k,D),T[1]))),v[2]),l(d(l(c(U,W),w[1]),d(l(c(at,N),-M[1]),l(c(k,D),v[1]))),-T[2]))),y[3])),d(l(d(d(l(d(l(c(j,st),M[1]),d(l(c(X,$),-y[1]),l(c(ot,q),T[1]))),w[2]),l(d(l(c(j,st),w[1]),d(l(c(J,z),-y[1]),l(c(rt,L),T[1]))),-M[2])),d(l(d(l(c(X,$),w[1]),d(l(c(J,z),-M[1]),l(c(k,D),T[1]))),y[2]),l(d(l(c(ot,q),w[1]),d(l(c(rt,L),-M[1]),l(c(k,D),y[1]))),-T[2]))),-v[3]),l(d(d(l(d(l(c(B,K),M[1]),d(l(c(U,W),-y[1]),l(c(ot,q),v[1]))),w[2]),l(d(l(c(B,K),w[1]),d(l(c(at,N),-y[1]),l(c(rt,L),v[1]))),-M[2])),d(l(d(l(c(U,W),w[1]),d(l(c(at,N),-M[1]),l(c(k,D),v[1]))),y[2]),l(d(l(c(ot,q),w[1]),d(l(c(rt,L),-M[1]),l(c(k,D),y[1]))),-v[2]))),T[3]))))),ni=c(Rs,Is);return ni[ni.length-1]}return R}var S=[h,u,f];function b(d){var c=S[d.length];return c||(c=S[d.length]=o(d.length)),c.apply(void 0,d)}function A(d,c,x,l,R,w,M,y){function v(T,C,P,D,L,N){switch(arguments.length){case 0:case 1:return 0;case 2:return l(T,C);case 3:return R(T,C,P);case 4:return w(T,C,P,D);case 5:return M(T,C,P,D,L);case 6:return y(T,C,P,D,L,N)}for(var z=new Array(arguments.length),F=0;F<arguments.length;++F)z[F]=arguments[F];return d(z)}return v}function E(){for(;S.length<=s;)S.push(o(S.length));t.exports=A.apply(void 0,[b].concat(S));for(var d=0;d<=s;++d)t.exports[d]=S[d]}E()}}),pp=ne({"node_modules/cdt2d/lib/delaunay.js"(a,t){"use strict";var e=dp()[4],n=ps();t.exports=r;function i(s,o,h,u,f,p){var m=o.opposite(u,f);if(!(m<0)){if(f<u){var g=u;u=f,f=g,g=p,p=m,m=g}o.isConstraint(u,f)||e(s[u],s[f],s[p],s[m])<0&&h.push(u,f)}}function r(s,o){for(var h=[],u=s.length,f=o.stars,p=0;p<u;++p)for(var m=f[p],g=1;g<m.length;g+=2){var _=m[g];if(!(_<p)&&!o.isConstraint(p,_)){for(var S=m[g-1],b=-1,A=1;A<m.length;A+=2)if(m[A-1]===_){b=m[A];break}b<0||e(s[p],s[_],s[S],s[b])<0&&h.push(p,_)}}for(;h.length>0;){for(var _=h.pop(),p=h.pop(),S=-1,b=-1,m=f[p],E=1;E<m.length;E+=2){var d=m[E-1],c=m[E];d===_?b=c:c===_&&(S=d)}S<0||b<0||e(s[p],s[_],s[S],s[b])>=0||(o.flip(p,_),i(s,o,h,S,p,b),i(s,o,h,p,b,S),i(s,o,h,b,_,S),i(s,o,h,_,S,b))}}}}),mp=ne({"node_modules/cdt2d/lib/filter.js"(a,t){"use strict";var e=ps();t.exports=h;function n(u,f,p,m,g,_,S){this.cells=u,this.neighbor=f,this.flags=m,this.constraint=p,this.active=g,this.next=_,this.boundary=S}var i=n.prototype;function r(u,f){return u[0]-f[0]||u[1]-f[1]||u[2]-f[2]}i.locate=(function(){var u=[0,0,0];return function(f,p,m){var g=f,_=p,S=m;return p<m?p<f&&(g=p,_=m,S=f):m<f&&(g=m,_=f,S=p),g<0?-1:(u[0]=g,u[1]=_,u[2]=S,e.eq(this.cells,u,r))}})();function s(u,f){for(var p=u.cells(),m=p.length,g=0;g<m;++g){var _=p[g],S=_[0],b=_[1],A=_[2];b<A?b<S&&(_[0]=b,_[1]=A,_[2]=S):A<S&&(_[0]=A,_[1]=S,_[2]=b)}p.sort(r);for(var E=new Array(m),g=0;g<E.length;++g)E[g]=0;var d=[],c=[],x=new Array(3*m),l=new Array(3*m),R=null;f&&(R=[]);for(var w=new n(p,x,l,E,d,c,R),g=0;g<m;++g)for(var _=p[g],M=0;M<3;++M){var S=_[M],b=_[(M+1)%3],y=x[3*g+M]=w.locate(b,S,u.opposite(b,S)),v=l[3*g+M]=u.isConstraint(S,b);y<0&&(v?c.push(g):(d.push(g),E[g]=1),f&&R.push([b,S,-1]))}return w}function o(u,f,p){for(var m=0,g=0;g<u.length;++g)f[g]===p&&(u[m++]=u[g]);return u.length=m,u}function h(u,f,p){var m=s(u,p);if(f===0)return p?m.cells.concat(m.boundary):m.cells;for(var g=1,_=m.active,S=m.next,b=m.flags,A=m.cells,E=m.constraint,d=m.neighbor;_.length>0||S.length>0;){for(;_.length>0;){var c=_.pop();if(b[c]!==-g){b[c]=g;for(var x=A[c],l=0;l<3;++l){var R=d[3*c+l];R>=0&&b[R]===0&&(E[3*c+l]?S.push(R):(_.push(R),b[R]=g))}}}var w=S;S=_,_=w,S.length=0,g=-g}var M=o(A,b,f);return p?M.concat(m.boundary):M}}}),gp=ne({"node_modules/cdt2d/cdt2d.js"(a,t){var e=up(),n=fp(),i=pp(),r=mp();t.exports=f;function s(p){return[Math.min(p[0],p[1]),Math.max(p[0],p[1])]}function o(p,m){return p[0]-m[0]||p[1]-m[1]}function h(p){return p.map(s).sort(o)}function u(p,m,g){return m in p?p[m]:g}function f(p,m,g){Array.isArray(m)?(g=g||{},m=m||[]):(g=m||{},m=[]);var _=!!u(g,"delaunay",!0),S=!!u(g,"interior",!0),b=!!u(g,"exterior",!0),A=!!u(g,"infinity",!1);if(!S&&!b||p.length===0)return[];var E=e(p,m);if(_||S!==b||A){for(var d=n(p.length,h(m)),c=0;c<E.length;++c){var x=E[c];d.addTriangle(x[0],x[1],x[2])}return _&&i(p,d),b?S?A?r(d,0,A):d.cells():r(d,1,A):r(d,-1)}else return E}}}),ml=gp();var ie=class{constructor(t){this.createFn=t,this._pool=[],this._index=0}getInstance(){return this._index>=this._pool.length&&this._pool.push(this.createFn()),this._pool[this._index++]}clear(){this._index=0}reset(){this._pool.length=0,this._index=0}};var gl=1e-16,_p=1e-16,hn=new I,_l=new I,xl=new ie(()=>({param:0,index:0})),xp=new ie(()=>new I);function yp(a,t,e,n){xl.clear(),t.length=0,e.length=0;for(let u=0,f=a.length;u<f;u++){let p=a[u];h(p.start),h(p.end)}for(let u=0,f=a.length;u<f;u++){let p=a[u];for(let m=u+1;m<f;m++){let g=a[m];p.distanceSqToLine3(g,hn,_l)<gl*n&&h(_l)}}let i=[];for(let u=0,f=a.length;u<f;u++){i.length=0;let p=a[u];for(let m=0,g=t.length;m<g;m++){let _=t[m],S=p.closestPointToPointParameter(_,!0);if(p.at(S,hn),_.distanceToSquared(hn)<gl*n){let b=xl.getInstance();b.param=S,b.index=m,i.push(b)}}i.sort(o);for(let m=0,g=i.length-1;m<g;m++){let _=i[m].index,S=i[m+1].index;_!==S&&e.push([_,S])}}let r=new Set,s=0;for(let u=0,f=e.length;u<f;u++){let p=e[u],m=Math.min(p[0],p[1]),g=Math.max(p[0],p[1]),_=m+","+g;r.has(_)||(r.add(_),e[s++]=p)}e.length=s;function o(u,f){return u.param-f.param}function h(u){for(let f=0;f<t.length;f++){let p=t[f];if(u===p||u.distanceToSquared(p)<_p*n)return f}return t.push(xp.getInstance().copy(u)),t.length-1}}var Vi=class{constructor(){this.trianglePool=new ie(()=>new Pt),this.linePool=new ie(()=>new yt),this.triangles=[],this.triangleIndices=[],this.constrainedEdges=[],this.triangleConnectivity=[],this.normal=new I,this.projOrigin=new I,this.projU=new I,this.projV=new I,this.baseTri=new Pt,this.baseIndices=new Array(3)}initialize(t,e=null,n=null,i=null){this.reset();let{normal:r,baseTri:s,projU:o,projV:h,projOrigin:u,constrainedEdges:f,linePool:p,baseIndices:m}=this;t.getNormal(r),s.copy(t),s.update(),m[0]=e,m[1]=n,m[2]=i,f.length=0;let g=p.getInstance();g.start.copy(s.a),g.end.copy(s.b);let _=p.getInstance();_.start.copy(s.b),_.end.copy(s.c);let S=p.getInstance();S.start.copy(s.c),S.end.copy(s.a),f.push(g,_,S),u.copy(s.a),o.subVectors(s.b,s.a).normalize(),h.crossVectors(r,o).normalize()}addConstraintEdge(t){let{constrainedEdges:e,linePool:n}=this,i=n.getInstance().copy(t);e.push(i)}_to2D(t,e){let{projOrigin:n,projU:i,projV:r}=this;return hn.subVectors(t,n),e.set(hn.dot(i),hn.dot(r),0)}_from2D(t,e,n){let{projOrigin:i,projU:r,projV:s}=this;return n.copy(i).addScaledVector(r,t).addScaledVector(s,e),n}triangulate(){let{triangles:t,trianglePool:e,triangleConnectivity:n,triangleIndices:i,linePool:r,baseTri:s,constrainedEdges:o,baseIndices:h}=this;t.length=0,e.clear();let u=[];for(let A=0,E=o.length;A<E;A++){let d=o[A],c=r.getInstance();this._to2D(d.start,c.start),this._to2D(d.end,c.end),u.push(c)}let f=0;for(let A=0;A<3;A++){let E=this._to2D(s.points[A],hn);f=Math.max(f,Math.abs(E.x),Math.abs(E.y))}let p=[],m=[];yp(u,p,m,f);let g=[];for(let A=0,E=p.length;A<E;A++){let d=p[A];g.push([d.x,d.y])}let _=ml(g,m,{exterior:!1}),S=new Map;for(let A=0,E=m.length;A<E;A++){let d=m[A];S.set(`${d[0]}_${d[1]}`,-1),S.set(`${d[1]}_${d[0]}`,-1)}let b=`${h[0]}_${h[1]}_${h[2]}_`;for(let A=0,E=_.length;A<E;A++){let d=_[A],[c,x,l]=d,R=e.getInstance();this._from2D(g[c][0],g[c][1],R.a),this._from2D(g[x][0],g[x][1],R.b),this._from2D(g[l][0],g[l][1],R.c),t.push(R);let w=[];n.push(w);let M=[];i.push(M);for(let y=0;y<3;y++){let v=d[y];M.push(v<3?h[v]:b+v);let T=d[(y+1)%3],C=`${v}_${T}`;if(S.has(C)){let P=S.get(C);P!==-1&&(w.push(P),n[P].push(A))}else{let P=`${T}_${v}`;S.set(P,A)}}}}reset(){this.trianglePool.clear(),this.linePool.clear(),this.triangles.length=0,this.triangleIndices.length=0,this.triangleConnectivity.length=0,this.constrainedEdges.length=0}};var vp=1e-14,pa=new I,yl=new I,vl=new I;function ge(a,t=vp){pa.subVectors(a.b,a.a),yl.subVectors(a.c,a.a),vl.subVectors(a.b,a.c);let e=pa.angleTo(yl),n=pa.angleTo(vl),i=Math.PI-e-n;return Math.abs(e)<t||Math.abs(n)<t||Math.abs(i)<t||a.a.distanceToSquared(a.b)<t||a.a.distanceToSquared(a.c)<t||a.b.distanceToSquared(a.c)<t}var ma=1e-10,ki=1e-10,De=new yt,Nt=new yt,Le=new I,Ml=new I,Sl=new I,ms=new fe,ga=new Pt,Hi=class{constructor(){this.trianglePool=new ie(()=>new Tt),this.triangles=[],this.normal=new I}initialize(t){this.reset();let{triangles:e,trianglePool:n,normal:i}=this;if(Array.isArray(t))for(let r=0,s=t.length;r<s;r++){let o=t[r];if(r===0)o.getNormal(i);else if(Math.abs(1-o.getNormal(Le).dot(i))>ma)throw new Error("Triangle Splitter: Cannot initialize with triangles that have different normals.");let h=n.getInstance();h.copy(o),e.push(h)}else{t.getNormal(i);let r=n.getInstance();r.copy(t),e.push(r)}}splitByTriangle(t,e){let{triangles:n}=this;if(e){for(let r=0,s=n.length;r<s;r++){let o=n[r];o.coplanarCount=0}let i=[t.a,t.b,t.c];for(let r=0;r<3;r++){let s=(r+1)%3,o=i[r],h=i[s];t.getNormal(Ml).normalize(),Le.subVectors(h,o).normalize(),Sl.crossVectors(Ml,Le),ms.setFromNormalAndCoplanarPoint(Sl,o),this.splitByPlane(ms,t)}}else t.getPlane(ms),this.splitByPlane(ms,t)}splitByPlane(t,e){let{triangles:n,trianglePool:i}=this;ga.copy(e),ga.needsUpdate=!0;for(let r=0,s=n.length;r<s;r++){let o=n[r];if(!ga.intersectsTriangle(o,De,!0))continue;let{a:h,b:u,c:f}=o,p=0,m=-1,g=!1,_=[],S=[],b=[h,u,f];for(let A=0;A<3;A++){let E=(A+1)%3;De.start.copy(b[A]),De.end.copy(b[E]);let d=t.distanceToPoint(De.start),c=t.distanceToPoint(De.end);if(Math.abs(d)<ki&&Math.abs(c)<ki){g=!0;break}if(d>0?_.push(A):S.push(A),Math.abs(d)<ki)continue;let x=!!t.intersectLine(De,Le);!x&&Math.abs(c)<ki&&(Le.copy(De.end),x=!0),x&&!(Le.distanceTo(De.start)<ma)&&(Le.distanceTo(De.end)<ma&&(m=A),p===0?Nt.start.copy(Le):Nt.end.copy(Le),p++)}if(!g&&p===2&&Nt.distance()>ki)if(m!==-1){m=(m+1)%3;let A=0;A===m&&(A=(A+1)%3);let E=A+1;E===m&&(E=(E+1)%3);let d=i.getInstance();d.a.copy(b[E]),d.b.copy(Nt.end),d.c.copy(Nt.start),ge(d)||n.push(d),o.a.copy(b[A]),o.b.copy(Nt.start),o.c.copy(Nt.end),ge(o)&&(n.splice(r,1),r--,s--)}else{let A=_.length>=2?S[0]:_[0];if(A===0){let l=Nt.start;Nt.start=Nt.end,Nt.end=l}let E=(A+1)%3,d=(A+2)%3,c=i.getInstance(),x=i.getInstance();b[E].distanceToSquared(Nt.start)<b[d].distanceToSquared(Nt.end)?(c.a.copy(b[E]),c.b.copy(Nt.start),c.c.copy(Nt.end),x.a.copy(b[E]),x.b.copy(b[d]),x.c.copy(Nt.start)):(c.a.copy(b[d]),c.b.copy(Nt.start),c.c.copy(Nt.end),x.a.copy(b[E]),x.b.copy(b[d]),x.c.copy(Nt.end)),o.a.copy(b[A]),o.b.copy(Nt.end),o.c.copy(Nt.start),ge(c)||n.push(c),ge(x)||n.push(x),ge(o)&&(n.splice(r,1),r--,s--)}else p===3&&console.warn("TriangleClipper: Coplanar clip not handled")}}reset(){this.triangles.length=0,this.trianglePool.clear()}};var Gi=class{constructor(){this.coplanarSet=new Map,this.intersectionSet=new Map,this.edgeSet=new Map,this.ids=[]}add(t,e,n=!1){let{intersectionSet:i,coplanarSet:r,ids:s}=this;i.has(t)||(i.set(t,[]),s.push(t)),i.get(t).push(e),n&&(r.has(t)||r.set(t,new Set),r.get(t).add(e))}addIntersectionEdge(t,e){let{edgeSet:n}=this;n.has(t)||n.set(t,new Set),n.get(t).add(e)}getIntersectionEdges(t){return this.edgeSet.get(t)||null}};var _a=1e-10,Mp=1e-15,Sp=1e-10,bp=1e-10,bl=new yt,Jn=new yt,Tl=new I,wl=new I,El=new I,xa=new fe,Kn=new I,gs=new I;function Cl(a,t){a.getNormal(Kn),t.getNormal(gs);let e=Kn.dot(gs);if(Math.abs(1-Math.abs(e))>=Sp)return!1;let n=Kn.dot(a.a),i=Kn.dot(t.a);return Math.abs(n-i)<bp}function Al(a,t,e,n){let i=0,r=1;a.delta(Tl);let s=[t.a,t.b,t.c];for(let o=0;o<3;o++){let h=s[o],u=s[(o+1)%3];wl.subVectors(u,h),El.crossVectors(e,wl),xa.setFromNormalAndCoplanarPoint(El,h);let f=xa.distanceToPoint(a.start),p=xa.normal.dot(Tl);if(Math.abs(p)<Mp){if(f<-_a)return null;continue}let m=-f/p;if(p>0?i=Math.max(i,m):r=Math.min(r,m),i>r+_a)return null}return r-i<_a?null:(a.at(i,n.start),a.at(r,n.end),n)}function ya(a,t,e){let n=0;a.getNormal(Kn),t.getNormal(gs);let i=[t.a,t.b,t.c];for(let s=0;s<3;s++){Jn.start.copy(i[s]),Jn.end.copy(i[(s+1)%3]);let o=Al(Jn,a,Kn,bl);o!==null&&(n>=e.length&&e.push(new yt),e[n].copy(o),n++)}let r=[a.a,a.b,a.c];for(let s=0;s<3;s++){Jn.start.copy(r[s]),Jn.end.copy(r[(s+1)%3]);let o=Al(Jn,t,gs,bl);o!==null&&(n>=e.length&&e.push(new yt),e[n].copy(o),n++)}return n}var Qn=new ye,Rl=new ft,_s=new yt,va=[],xs=new ie(()=>new yt),jn=-1,ti=1,Wi=-2,Xi=2,ei=0,un=1,vs=2,ys=null;function Ma(a){ys=a}function Sa(a,t,e=null){a.getMidpoint(Qn.origin),a.getNormal(Qn.direction),e&&(Qn.origin.applyMatrix4(e),Qn.direction.transformDirection(e));let n=t.raycastFirst(Qn,Ri);return!!(n&&Qn.direction.dot(n.face.normal)>0)?jn:ti}function Dl(a,t){let e=new Gi,n=new Gi;return xs.clear(),Rl.copy(a.matrixWorld).invert().multiply(t.matrixWorld),a.geometry.boundsTree.bvhcast(t.geometry.boundsTree,Rl,{intersectsTriangles(i,r,s,o){if(!ge(i)&&!ge(r)){let u=(Cl(i,r)?ya(i,r,va):0)>2;if(u||i.intersectsTriangle(r,_s,!0)){let p=a.geometry.boundsTree.resolveTriangleIndex(s),m=t.geometry.boundsTree.resolveTriangleIndex(o);if(e.add(p,m,u),n.add(m,p,u),u){let g=ya(i,r,va);for(let _=0;_<g;_++){let S=xs.getInstance().copy(va[_]);e.addIntersectionEdge(p,S),n.addIntersectionEdge(m,S)}}else{let g=xs.getInstance().copy(_s),_=xs.getInstance().copy(_s);e.addIntersectionEdge(p,g),n.addIntersectionEdge(m,_)}ys&&(ys.addEdge(_s),ys.addIntersectingTriangles(s,i,o,r))}}return!1}}),{aIntersections:e,bIntersections:n}}function ba(a,t,e=!1){switch(a){case 0:if(t===ti||t===Xi&&!e)return un;break;case 1:if(e){if(t===jn)return ei}else if(t===ti||t===Wi)return un;break;case 2:if(e){if(t===ti||t===Wi)return un}else if(t===jn)return ei;break;case 4:if(t===jn)return ei;if(t===ti)return un;break;case 3:if(t===jn||t===Xi&&!e)return un;break;case 5:if(!e&&(t===ti||t===Wi))return un;break;case 6:if(!e&&(t===jn||t===Xi))return un;break;default:throw new Error(`Unrecognized CSG operation enum "${a}".`)}return vs}var Ta=class{constructor(t){this.triangle=new Tt().copy(t),this.intersects={}}addTriangle(t,e){this.intersects[t]=new Tt().copy(e)}getIntersectArray(){let t=[],{intersects:e}=this;for(let n in e)t.push(e[n]);return t}},Ms=class{constructor(){this.data={}}addTriangleIntersection(t,e,n,i){let{data:r}=this;r[t]||(r[t]=new Ta(e)),r[t].addTriangle(n,i)}getTrianglesAsArray(t=null){let{data:e}=this,n=[];if(t!==null)t in e&&n.push(e[t].triangle);else for(let i in e)n.push(e[i].triangle);return n}getTriangleIndices(){return Object.keys(this.data).map(t=>parseInt(t))}getIntersectionIndices(t){let{data:e}=this;return e[t]?Object.keys(e[t].intersects).map(n=>parseInt(n)):[]}getIntersectionsAsArray(t=null,e=null){let{data:n}=this,i=new Set,r=[],s=o=>{if(n[o])if(e!==null)n[o].intersects[e]&&r.push(n[o].intersects[e]);else{let h=n[o].intersects;for(let u in h)i.has(u)||(i.add(u),r.push(h[u]))}};if(t!==null)s(t);else for(let o in n)s(o);return r}reset(){this.data={}}},Ss=class{constructor(){this.enabled=!1,this.triangleIntersectsA=new Ms,this.triangleIntersectsB=new Ms,this.intersectionEdges=[]}addIntersectingTriangles(t,e,n,i){let{triangleIntersectsA:r,triangleIntersectsB:s}=this;r.addTriangleIntersection(t,e,n,i),s.addTriangleIntersection(n,i,t,e)}addEdge(t){this.intersectionEdges.push(t.clone())}reset(){this.triangleIntersectsA.reset(),this.triangleIntersectsB.reset(),this.intersectionEdges=[]}init(){this.enabled&&(this.reset(),Ma(this))}complete(){this.enabled&&Ma(null)}};var re=new ft,fn=new ft,Yt=new ft,Ze=new it,_e=new Tt,dn=new Tt,xe=new Tt,Ye=new Tt,pn=[],Se=[],bs=new Set,Ll=new I,Nl=new I,Ul=new ie(()=>new Tt),Fl=new I,Ts=[];function zl(a,t,e,n,i,r={}){let{useGroups:s=!0}=r,{aIntersections:o,bIntersections:h}=Dl(a,t),u=[],f=null,p;return p=s?0:-1,Ol(a,t,o,e,!1,i,p),Bl(a,t,o,e,!1,n,i,p),e.findIndex(g=>g!==6&&g!==5)!==-1&&(i.forEach(g=>g.clearIndexMap()),p=s?a.geometry.groups.length||1:-1,Ol(t,a,h,e,!0,i,p),Bl(t,a,h,e,!0,n,i,p)),i.forEach(g=>g.clearIndexMap()),pn.length=0,{groups:u,materials:f}}function Bl(a,t,e,n,i,r,s,o=0){re.copy(t.matrixWorld).invert().multiply(a.matrixWorld),fn.copy(re).invert(),i?Yt.copy(re):Yt.identity();let h=Yt.determinant()<0;Ze.getNormalMatrix(Yt).multiplyScalar(h?-1:1);let u=a.geometry.groupIndices,f=a.geometry.index,p=a.geometry.attributes.position,m=t.geometry.boundsTree,g=t.geometry.index,_=t.geometry.attributes.position,S=e.ids;for(let b=0,A=S.length;b<A;b++){let E=S[b],d=o===-1?0:u[E]+o,c=3*E,x=c+0,l=c+1,R=c+2;f&&(x=f.getX(x),l=f.getX(l),R=f.getX(R)),_e.a.fromBufferAttribute(p,x),_e.b.fromBufferAttribute(p,l),_e.c.fromBufferAttribute(p,R),i&&(_e.a.applyMatrix4(re),_e.b.applyMatrix4(re),_e.c.applyMatrix4(re)),r.reset(),r.initialize(_e,x,l,R),Ts.length=0,Ul.clear(),_e.getNormal(Nl);let w=e.coplanarSet.get(E);if(w)for(let T of w){let C=3*T,P=C+0,D=C+1,L=C+2;g&&(P=g.getX(P),D=g.getX(D),L=g.getX(L));let N=Ul.getInstance();N.a.fromBufferAttribute(_,P),N.b.fromBufferAttribute(_,D),N.c.fromBufferAttribute(_,L),i||(N.a.applyMatrix4(fn),N.b.applyMatrix4(fn),N.c.applyMatrix4(fn)),Ts.push(N)}if(r.addConstraintEdge){let T=e.getIntersectionEdges(E);if(T)for(let C of T)r.addConstraintEdge(C);r.triangulate()}else{let C=e.intersectionSet.get(E);for(let P=0,D=C.length;P<D;P++){let L=C[P],N=w&&w.has(L),z=3*L,F=z+0,Z=z+1,k=z+2;g&&(F=g.getX(F),Z=g.getX(Z),k=g.getX(k)),dn.a.fromBufferAttribute(_,F),dn.b.fromBufferAttribute(_,Z),dn.c.fromBufferAttribute(_,k),i||(dn.a.applyMatrix4(fn),dn.b.applyMatrix4(fn),dn.c.applyMatrix4(fn)),r.splitByTriangle(dn,N)}}let{triangles:M,triangleIndices:y=[],triangleConnectivity:v=[]}=r;for(let T=0,C=s.length;T<C;T++)s[T].initInterpolatedAttributeData(a.geometry,Yt,Ze,x,l,R);bs.clear();for(let T=0,C=M.length;T<C;T++){if(bs.has(T))continue;let P=M[T],D=i?null:re,L=null;P.getMidpoint(Ll);for(let N=0,z=Ts.length;N<z;N++){let F=Ts[N];if(F.containsPoint(Ll)){F.getNormal(Fl),L=Nl.dot(Fl)>0?Xi:Wi;break}}L===null&&(L=Sa(P,m,D)),pn.length=0,Se.length=0;for(let N=0,z=n.length;N<z;N++){let F=ba(n[N],L,i);F!==vs&&(pn.push(F),Se.push(s[N]))}if(Se.length!==0){let N=[T];for(;N.length>0;){let z=N.pop();if(bs.has(z))continue;bs.add(z);let F=y[z],Z=null,k=null,q=null;F&&(Z=F[0],k=F[1],q=F[2]);let W=M[z];_e.getBarycoord(W.a,Ye.a),_e.getBarycoord(W.b,Ye.b),_e.getBarycoord(W.c,Ye.c);for(let $=0,Q=Se.length;$<Q;$++){let mt=Se[$],ot=pn[$]===ei,K=h!==ot;mt.appendInterpolatedAttributeData(d,Ye.a,Z,K),K?(mt.appendInterpolatedAttributeData(d,Ye.c,q,K),mt.appendInterpolatedAttributeData(d,Ye.b,k,K)):(mt.appendInterpolatedAttributeData(d,Ye.b,k,K),mt.appendInterpolatedAttributeData(d,Ye.c,q,K))}}}}}return S.length}function Ol(a,t,e,n,i,r,s=0){re.copy(t.matrixWorld).invert().multiply(a.matrixWorld),i?Yt.copy(re):Yt.identity();let o=Yt.determinant()<0;Ze.getNormalMatrix(Yt).multiplyScalar(o?-1:1);let h=t.geometry.boundsTree,u=a.geometry.groupIndices,f=a.geometry.index,m=a.geometry.attributes.position,g=[],_=a.geometry.halfEdges,S=new Set(e.ids),b=$n(a.geometry);for(let A=0;A<b&&S.size!==b;A++){if(S.has(A))continue;S.add(A),g.push(A);let E=3*A,d=E+0,c=E+1,x=E+2;f&&(d=f.getX(d),c=f.getX(c),x=f.getX(x)),xe.a.fromBufferAttribute(m,d),xe.b.fromBufferAttribute(m,c),xe.c.fromBufferAttribute(m,x),i&&(xe.a.applyMatrix4(re),xe.b.applyMatrix4(re),xe.c.applyMatrix4(re));let l=Sa(xe,h,i?null:re);pn.length=0,Se.length=0;for(let R=0,w=n.length;R<w;R++){let M=ba(n[R],l,i);M!==vs&&(pn.push(M),Se.push(r[R]))}for(;g.length>0;){let R=g.pop();for(let w=0;w<3;w++){let M=_.getSiblingTriangleIndex(R,w);M!==-1&&!S.has(M)&&(g.push(M),S.add(M))}if(Se.length!==0){let w=3*R,M=w+0,y=w+1,v=w+2;f&&(M=f.getX(M),y=f.getX(y),v=f.getX(v));let T=s===-1?0:u[R]+s;if(xe.a.fromBufferAttribute(m,M),xe.b.fromBufferAttribute(m,y),xe.c.fromBufferAttribute(m,v),!ge(xe))for(let C=0,P=Se.length;C<P;C++){let D=Se[C],z=pn[C]===ei!==o;D.appendIndexFromGeometry(a.geometry,Yt,Ze,T,M,z),z?(D.appendIndexFromGeometry(a.geometry,Yt,Ze,T,v,z),D.appendIndexFromGeometry(a.geometry,Yt,Ze,T,y,z)):(D.appendIndexFromGeometry(a.geometry,Yt,Ze,T,y,z),D.appendIndexFromGeometry(a.geometry,Yt,Ze,T,v,z))}}}}}function Ep(a){return a=~~a,a+4-a%4}var ws=class{constructor(t,e=500){this.expansionFactor=1.5,this.type=t,this.length=0,this.array=null,this.setSize(e)}setType(t){if(t===this.type)return;if(this.length!==0)throw new Error("TypeBackedArray: Cannot change the type while there is used data in the buffer.");let e=this.array.buffer;this.array=new t(e),this.type=t}setSize(t){if(this.array&&t===this.array.length)return;let e=this.type,n=hs()?SharedArrayBuffer:ArrayBuffer,i=new e(new n(Ep(t*e.BYTES_PER_ELEMENT)));this.array&&i.set(this.array,0),this.array=i}expand(){let{array:t,expansionFactor:e}=this;this.setSize(t.length*e)}push(...t){let{array:e,length:n}=this;n+t.length>e.length&&(this.expand(),e=this.array);for(let i=0,r=t.length;i<r;i++)e[n+i]=t[i];this.length+=t.length}clear(){this.length=0}};var Zt=new I,wa=new I,Ea=new I,Aa=new I,Es=new Kt,Ap=new Kt,Cp=new Kt,Rp=new Kt;function Ip(a,t,e,n,i,r=!1,s=!1){return i.set(0,0,0,0).addScaledVector(a,n.x).addScaledVector(t,n.y).addScaledVector(e,n.z),r&&i.normalize(),s&&i.multiplyScalar(-1),i}function Vl(a,t,e){switch(t){case 1:e.push(a.x);break;case 2:e.push(a.x,a.y);break;case 3:e.push(a.x,a.y,a.z);break;case 4:e.push(a.x,a.y,a.z,a.w);break}}var qi=class extends ws{get count(){return this.length/this.itemSize}constructor(...t){super(...t),this.itemSize=1,this.normalized=!1}},As=class{constructor(){this.attributeData={},this.groupIndices=[],this.forwardIndexMap=new Map,this.invertedIndexMap=new Map,this.interpolatedFields={}}initFromGeometry(t,e){this.clear();let{attributeData:n}=this,i=t.attributes;for(let r=0,s=e.length;r<s;r++){let o=e[r],h=i[o],u=h.array.constructor;n[o]||(n[o]=new qi(u)),n[o].setType(u),n[o].itemSize=h.itemSize,n[o].normalized=h.normalized}for(let r in n.attributes)e.includes(r)||n.delete(r)}initInterpolatedAttributeData(t,e,n,i,r,s){let{attributeData:o,interpolatedFields:h}=this,{attributes:u}=t;for(let f in o){let p=u[f];if(!p)throw new Error(`CSG Operations: Attribute ${f} not available on geometry.`);let m,g,_;if(f==="position"?(m=wa.fromBufferAttribute(p,i).applyMatrix4(e),g=Ea.fromBufferAttribute(p,r).applyMatrix4(e),_=Aa.fromBufferAttribute(p,s).applyMatrix4(e)):f==="normal"?(m=wa.fromBufferAttribute(p,i).applyNormalMatrix(n),g=Ea.fromBufferAttribute(p,r).applyNormalMatrix(n),_=Aa.fromBufferAttribute(p,s).applyNormalMatrix(n)):f==="tangent"?(m=wa.fromBufferAttribute(p,i).transformDirection(e),g=Ea.fromBufferAttribute(p,r).transformDirection(e),_=Aa.fromBufferAttribute(p,s).transformDirection(e)):(m=Ap.fromBufferAttribute(p,i),g=Cp.fromBufferAttribute(p,r),_=Rp.fromBufferAttribute(p,s)),!h[f])h[f]=[m.clone(),g.clone(),_.clone()];else{let S=h[f];S[0].copy(m),S[1].copy(g),S[2].copy(_)}}}appendInterpolatedAttributeData(t,e,n=null,i=!1){let{groupIndices:r,attributeData:s,interpolatedFields:o,forwardIndexMap:h,invertedIndexMap:u}=this;for(;r.length<=t;)r.push(new qi(Uint32Array));let f=i?u:h,p=r[t];if(n!==null&&f.has(n))p.push(f.get(n));else{f.set(n,s.position.count),p.push(s.position.count);for(let m in o){let g=s[m],_=m==="normal"||m==="tangent",S=i&&_,b=g.itemSize,[A,E,d]=o[m];Ip(A,E,d,e,Es,_,S),Vl(Es,b,g)}}}appendIndexFromGeometry(t,e,n,i,r,s=!1){let{groupIndices:o,attributeData:h,forwardIndexMap:u,invertedIndexMap:f}=this;for(;o.length<=i;)o.push(new qi(Uint32Array));let p=s?f:u,m=o[i];if(r!==null&&p.has(r))m.push(p.get(r));else{p.set(r,h.position.count),m.push(h.position.count);let{attributes:g}=t;for(let _ in h){let S=h[_],b=g[_];if(!b)throw new Error(`CSG Operations: Attribute ${_} not available on geometry.`);let A=b.itemSize;_==="position"?(Zt.fromBufferAttribute(b,r).applyMatrix4(e),S.push(Zt.x,Zt.y,Zt.z)):_==="normal"?(Zt.fromBufferAttribute(b,r).applyNormalMatrix(n),s&&Zt.multiplyScalar(-1),S.push(Zt.x,Zt.y,Zt.z)):_==="tangent"?(Zt.fromBufferAttribute(b,r).transformDirection(e),s&&Zt.multiplyScalar(-1),S.push(Zt.x,Zt.y,Zt.z)):(Es.fromBufferAttribute(b,r),Vl(Es,A,S))}}}buildGeometry(t,e){let n=!1,{groupIndices:i,attributeData:r}=this,{attributes:s,index:o}=t;for(let f in r){let p=r[f],{type:m,itemSize:g,normalized:_,length:S,count:b}=p,A=p.array.buffer,E=s[f];(!E||E.count<b||E.array.type!==m)&&(E=new kt(new m(S),g,_),t.setAttribute(f,E),n=!0),E.array.set(new m(A,0,S),0),E.needsUpdate=!0}let h=i.reduce((f,p)=>p.count+f,0);(!t.index||o.count<h||o.array.type!==Uint32Array)&&(t.setIndex(new kt(new Uint32Array(h),1)),n=!0),t.clearGroups();let u=0;for(let f=0,p=Math.min(e.length,i.length);f<p;f++){let{index:m,materialIndex:g}=e[f],{count:_}=i[m],S=i[m].array.buffer;_!==0&&(t.index.array.set(new Uint32Array(S,0,_),u),t.addGroup(u,_,g),u+=_)}t.setDrawRange(0,u),t.boundsTree=null,t.boundingBox=null,t.boundingSphere=null,n&&t.dispose()}clearIndexMap(){this.forwardIndexMap.clear(),this.invertedIndexMap.clear()}clear(){let{groupIndices:t,attributeData:e}=this;this.interpolatedFields={};for(let n in e)e[n].clear();t.forEach(n=>{n.clear()}),this.clearIndexMap()}};function kl(a,t){for(let e in a.attributes)t.includes(e)||(a.deleteAttribute(e),a.dispose());return a}function Hl(a,t){let e=[];for(let n=0,i=a.length;n<i;n++){let r=a[n],s=t[r.materialIndex];e.push({...r,materialIndex:t.indexOf(s)})}return e}function Gl(a,t){let e=[],n=new Map;for(let i=0,r=a.length;i<r;i++){let s=a[i];n.has(s.materialIndex)||(n.set(s.materialIndex,e.length),e.push(t[s.materialIndex])),s.materialIndex=n.get(s.materialIndex)}return e}function Wl(a){for(let t=0;t<a.length-1;t++){let e=a[t],n=a[t+1];if(e.materialIndex===n.materialIndex){let i=e.start,r=n.start+n.count;n.start=i,n.count=r-i,a.splice(t,1),t--}}}function Ca(a,t){let e=t;return Array.isArray(t)||(e=[],a.forEach(n=>{e[n.materialIndex]=t})),e}var Cs=class{get useCDTClipping(){return this.triangleSplitter instanceof Vi}set useCDTClipping(t){t!==this.useCDTClipping&&(this.triangleSplitter=t?new Vi:new Hi)}constructor(){this.triangleSplitter=new Hi,this.geometryBuilders=[],this.attributes=["position","uv","normal"],this.useGroups=!0,this.consolidateGroups=!0,this.removeUnusedMaterials=!0,this.debug=new Ss}getGroupRanges(t){return!this.useGroups||t.groups.length===0?[{start:0,count:1/0,materialIndex:0}]:t.groups.map(n=>({...n}))}evaluate(t,e,n,i=new ln){let r=!0;if(Array.isArray(n)||(n=[n]),Array.isArray(i)||(i=[i],r=!1),i.length!==n.length)throw new Error("Evaluator: operations and target array passed as different sizes.");t.prepareGeometry(),e.prepareGeometry();let{triangleSplitter:s,geometryBuilders:o,attributes:h,useGroups:u,consolidateGroups:f,removeUnusedMaterials:p,debug:m}=this;for(;o.length<i.length;)o.push(new As);i.forEach((d,c)=>{o[c].initFromGeometry(t.geometry,h),kl(d.geometry,h)}),m.init(),zl(t,e,n,s,o,{useGroups:u}),m.complete();let g=this.getGroupRanges(t.geometry),_=Ca(g,t.material),S=this.getGroupRanges(e.geometry),b=Ca(S,e.material);S.forEach(d=>d.materialIndex+=_.length);let A=[..._,...b],E=[...g,...S].map((d,c)=>({...d,index:c}));return u?u&&f&&(E=Hl(E,A),E.sort((d,c)=>d.materialIndex-c.materialIndex)):E=[{start:0,count:1/0,index:0,materialIndex:0}],i.forEach((d,c)=>{let x=d.geometry;o[c].buildGeometry(x,E),t.matrixWorld.decompose(d.position,d.quaternion,d.scale),d.updateMatrix(),d.matrixWorld.copy(t.matrixWorld),u?(d.material=A,f&&Wl(x.groups),p&&(d.material=Gl(x.groups,A))):d.material=A[0]}),r?i:i[0]}evaluateHierarchy(t,e=new ln){t.updateMatrixWorld(!0);let n=(r,s)=>{let o=r.children;for(let h=0,u=o.length;h<u;h++){let f=o[h];f.isOperationGroup?n(f,s):s(f)}},i=r=>{let s=r.children,o=!1;for(let u=0,f=s.length;u<f;u++){let p=s[u];o=i(p)||o}let h=r.isDirty();if(h&&r.markUpdated(),o&&!r.isOperationGroup){let u;return n(r,f=>{u?u=this.evaluate(u,f,f.operation):u=this.evaluate(r,f,f.operation)}),r._cachedGeometry=u.geometry,r._cachedMaterials=u.material,!0}else return o||h};return i(t),e.geometry=t._cachedGeometry,e.material=t._cachedMaterials,e}reset(){this.triangleSplitter.reset()}};function Xl(a,t,e,n=()=>{}){let i=new Set,r=p=>(i.add(p),p);function s(p,m){r(p),p.getAttribute("normal")||p.computeVertexNormals(),p.getAttribute("color")||p.setAttribute("color",new Ht(Array.from({length:p.getAttribute("position").count},()=>m).flat(),3));let g=new ln(p);return g.updateMatrixWorld(!0),g}let o=r(new Ie);o.setAttribute("position",new Ht(a.vertices.flat(),3)),o.setIndex(a.triangles.flat()),o.setAttribute("color",new Ht((a.colors||a.vertices.map(()=>[.48,.63,.85])).flat(),3));let h=new Cs;h.attributes=["position","normal","color"],h.useGroups=!1;let u=s(o),f=[];try{for(let y=0;y<t.length;y++){n(`Y\xFCzey kesimi: ${y+1} / ${t.length} alan\u2026`);let v=t[y],{u:T,v:C,n:P,center:D,width:L,height:N,shape:z}=v,{depth:F,offset:Z=0}=v;if(![L,N,F].every(W=>Number.isFinite(W)&&W>0))throw new Error("Alan ve i\u015Flem derinli\u011Fi s\u0131f\u0131rdan b\xFCy\xFCk olmal\u0131.");if(e==="cut"){let W=1/0,$=-1/0;for(let Q of a.vertices){let mt=Q.reduce((rt,ot,K)=>rt+(ot-D[K])*P[K],0);W=Math.min(W,mt),$=Math.max($,mt)}Z=W-.01,F=$-W+.02}f.push({...v,depth:F,offset:Z});let k;if(z==="polygon"){let W=new Pn(Yi(v.points).map($=>new H(...$)));k=new Ai(W,{depth:F,bevelEnabled:!1,steps:1}).translate(0,0,-F/2)}else k=z==="circle"?new xi(L/2,L/2,F,64).rotateX(Math.PI/2):new _i(L,N,F);let q=s(k,a.colors?.[0]||[.48,.63,.85]);q.matrixAutoUpdate=!1,q.matrix.makeBasis(new I(...T),new I(...C),new I(...P)),q.matrix.setPosition(...D.map((W,$)=>W+P[$]*((e==="fill"?Z-F:Z)+F/2))),q.updateMatrixWorld(!0),u=h.evaluate(u,q,e==="fill"?0:1),r(u.geometry)}let p=u.geometry.getAttribute("position"),m=u.geometry.getAttribute("color"),g=u.geometry.index,_=[],S=[],b=[];for(let y=0;y<p.count;y++)_.push([p.getX(y),p.getY(y),p.getZ(y)]),S.push([m.getX(y),m.getY(y),m.getZ(y)]);let A=Math.min(g?g.count:p.count,u.geometry.drawRange.count);for(let y=0;y<A;y+=3)b.push([0,1,2].map(v=>g?g.getX(y+v):y+v));let E=(y,v)=>{let T=y.map(L=>L.map((N,z)=>N-v.center[z])),C=[v.u,v.v,v.n].map(L=>T.map(N=>N.reduce((z,F,Z)=>z+F*L[Z],0))),P=[-v.width/2,-v.height/2,e==="fill"?v.offset-v.depth:v.offset],D=[v.width/2,v.height/2,e==="fill"?v.offset:v.offset+v.depth];return C.some((L,N)=>Math.max(...L)<P[N]-1e-5||Math.min(...L)>D[N]+1e-5)?!0:v.shape==="polygon"&&!Ia(v.points,y.map((L,N)=>[C[0][N],C[1][N]]))},d=y=>f.every(v=>E(y,v)),c=b.filter(y=>!d(y.map(v=>_[v]))),x=_.length;for(let y=0;y<a.vertices.length;y++)_.push(a.vertices[y]),S.push(a.colors?.[y]||[.48,.63,.85]);for(let y of a.triangles)d(y.map(v=>a.vertices[v]))&&c.push(y.map(v=>v+x));if(!c.length){if(e==="cut")return null;throw new Error("Se\xE7im modelin tamam\u0131n\u0131 kald\u0131r\u0131yor. Alan\u0131 k\xFC\xE7\xFClt\xFCn.")}let l=new Map,R=[],w=[],M=c.map(y=>y.map(v=>(l.has(v)||(l.set(v,R.length),R.push(_[v]),w.push(S[v])),l.get(v))));return{...a,vertices:R,colors:w,triangles:M}}finally{for(let p of i)p.boundsTree=null,p.dispose()}}function ql(a,t){if(!t||a.triangles.length!==t.triangles.length)return!1;let e=(i,r)=>r.map(s=>i.vertices[s].map(Math.fround).join(",")).sort().join("|"),n=new Map;for(let i of a.triangles){let r=e(a,i);n.set(r,(n.get(r)||0)+1)}for(let i of t.triangles){let r=e(t,i),s=n.get(r)||0;if(!s)return!1;s===1?n.delete(r):n.set(r,s-1)}return!n.size}var Yl;self.onmessage=async({data:a})=>{try{Yl??=Dp({locateFile:()=>new URL("./manifold/manifold.wasm",import.meta.url).href}).then(r=>(r.setup(),r));let t=await Yl,e=r=>self.postMessage({progress:r});e("Geometri kontrol ediliyor\u2026");let n,i;try{n=a.mode==="split"?Na(t,a.part):[La(t,a.part,a.areas,a.mode)].filter(Boolean)}catch(r){if(a.mode==="split"||!r.message.includes("kapal\u0131 ve tutarl\u0131"))throw r;e("Kaynak a\u011F kusurlu. Se\xE7ili b\xF6lge y\xFCzey \xFCzerinden d\xFCzenleniyor\u2026"),n=[Xl(a.part,a.areas,a.mode,e)].filter(Boolean),i="Kaynak dosyada a\xE7\u0131k/\xE7ak\u0131\u015Fan y\xFCzeyler var. Y\xFCzey i\u015Flemi uyguland\u0131; sonu\xE7 kapal\u0131 kat\u0131 olarak do\u011Frulanamad\u0131. Yazd\u0131rmadan \xF6nce dilimleyicide a\u011F kontrol\xFC yap\u0131n."}if(a.mode!=="split"&&n.length===1&&ql(a.part,n[0]))throw new Error("Model de\u011Fi\u015Fmedi: se\xE7ili hacim kald\u0131r\u0131lacak y\xFCzeyle kesi\u015Fmiyor. Referans\u0131, y\xF6n\xFC ve i\u015Flem derinli\u011Fini kontrol edin.");self.postMessage({parts:n,warning:i})}catch(t){self.postMessage({error:t.message||String(t)})}};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
