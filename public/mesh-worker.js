import Ag from"./manifold/manifold.js";function Cn(s){if(!Array.isArray(s)||s.length<3||s.some(i=>i.length!==2||i.some(r=>!Number.isFinite(r))))throw new Error("En az \xFC\xE7 ge\xE7erli nokta se\xE7in.");let t=(i,r,o)=>(r[0]-i[0])*(o[1]-i[1])-(r[1]-i[1])*(o[0]-i[0]),e=(i,r,o)=>Math.abs(t(i,r,o))<1e-8&&o.every((a,c)=>a>=Math.min(i[c],r[c])-1e-8&&a<=Math.max(i[c],r[c])+1e-8);for(let i=0;i<s.length;i++){let r=s[i],o=s[(i+1)%s.length];if(Math.hypot(r[0]-o[0],r[1]-o[1])<1e-6)throw new Error("Ayn\u0131 noktay\u0131 art arda se\xE7meyin.");for(let a=i+2;a<s.length;a++){if(i===0&&a===s.length-1)continue;let c=s[a],h=s[(a+1)%s.length];if(t(r,o,c)*t(r,o,h)<0&&t(c,h,r)*t(c,h,o)<0||e(r,o,c)||e(r,o,h)||e(c,h,r)||e(c,h,o))throw new Error("Se\xE7im \xE7izgileri kesi\u015Fiyor. Son noktay\u0131 geri al\u0131p yeniden se\xE7in.")}}let n=s.reduce((i,r,o)=>{let a=s[(o+1)%s.length];return i+r[0]*a[1]-a[0]*r[1]},0);if(Math.abs(n)<1e-7)throw new Error("Se\xE7im alan\u0131 \xE7ok k\xFC\xE7\xFCk veya noktalar ayn\u0131 \xE7izgide.");return n>0?s.map(i=>[...i]):s.map(i=>[...i]).reverse()}function xr(s,t){let e=(r,o,a)=>(o[0]-r[0])*(a[1]-r[1])-(o[1]-r[1])*(a[0]-r[0]),n=(r,o,a)=>Math.abs(e(r,o,a))<1e-7&&a.every((c,h)=>c>=Math.min(r[h],o[h])-1e-7&&c<=Math.max(r[h],o[h])+1e-7),i=(r,o)=>{let a=!1;for(let c=0,h=r.length-1;c<r.length;h=c++){let u=r[c],d=r[h];if(n(u,d,o))return!0;u[1]>o[1]!=d[1]>o[1]&&o[0]<(d[0]-u[0])*(o[1]-u[1])/(d[1]-u[1])+u[0]&&(a=!a)}return a};return s.some(r=>i(t,r))||t.some(r=>i(s,r))?!0:s.some((r,o)=>t.some((a,c)=>{let h=s[(o+1)%s.length],u=t[(c+1)%t.length];return e(r,h,a)*e(r,h,u)<0&&e(a,u,r)*e(a,u,h)<0||n(r,h,a)||n(r,h,u)||n(a,u,r)||n(a,u,h)}))}function _c(s,t){let e=[];for(let i=0;i<t.vertices.length;i++)e.push(...t.vertices[i],...t.colors?.[i]||[.48,.63,.85]);let n=new s.Mesh({numProp:6,vertProperties:Float32Array.from(e),triVerts:Uint32Array.from(t.triangles.flat())});n.merge();try{return s.Manifold.ofMesh(n)}catch{throw new Error("Bu a\u011F kapal\u0131 ve tutarl\u0131 bir kat\u0131 de\u011Fil. A\xE7\u0131k/bozuk y\xFCzeyleri olan modeli \xF6nce a\u011F onar\u0131m\u0131ndan ge\xE7irin.")}}function vc(s,t={}){let e=s.getMesh(),n=[],i=[],r=[];for(let o=0;o<e.vertProperties.length;o+=e.numProp)n.push(Array.from(e.vertProperties.slice(o,o+3))),i.push(e.numProp>=6?Array.from(e.vertProperties.slice(o+3,o+6)):[.48,.63,.85]);for(let o=0;o<e.triVerts.length;o+=3)r.push(Array.from(e.triVerts.slice(o,o+3)));return{...t,vertices:n,colors:i,triangles:r}}function hu(s,t,e,n=[.48,.63,.85]){let{u:i,v:r,n:o,center:a,width:c,height:h,depth:u,offset:d=0,shape:m="box"}=t;if(![c,h,u].every(p=>Number.isFinite(p)&&p>0))throw new Error("Alan ve i\u015Flem derinli\u011Fi s\u0131f\u0131rdan b\xFCy\xFCk olmal\u0131.");if(![i,r,o,a].every(p=>p?.length===3&&p.every(Number.isFinite)))throw new Error("\xD6nce d\xFCzeltilecek y\xFCzeyden referans se\xE7in.");let g=e==="fill"?d-u:d,x=m==="polygon"?s.Manifold.extrude([Cn(t.points)],u):m==="circle"?s.Manifold.cylinder(u,c/2,c/2,64,!1):s.Manifold.cube([c,h,u],!0),v=m==="box"?x.translate([0,0,u/2]):x;v!==x&&x.delete();let S=[...i,0,...r,0,...o,0,...a.map((p,l)=>p+o[l]*g),1],A=v.transform(S),E=A.setProperties(3,p=>{for(let l=0;l<3;l++)p[l]=n[l]});return v.delete(),A.delete(),E}function yc(s,t,e,n){let i=_c(s,t);try{for(let r of e){let o=r;if(n==="cut"){let h=1/0,u=-1/0;for(let m of t.vertices){let g=m.reduce((x,v,S)=>x+(v-r.center[S])*r.n[S],0);h=Math.min(h,g),u=Math.max(u,g)}let d=Math.max(.01,(u-h)*1e-5);o={...r,offset:h-d,depth:u-h+d*2}}let a=hu(s,o,n,t.colors?.[0]),c=n==="fill"?i.add(a):i.subtract(a);a.delete(),i.delete(),i=c}if(i.status()!=="NoError")throw new Error("Kat\u0131 i\u015Flemi tamamlanamad\u0131: "+i.status());if(i.isEmpty()){if(n==="cut")return null;throw new Error("Se\xE7ilen alan modelin tamam\u0131n\u0131 kald\u0131r\u0131yor. Alan\u0131 veya derinli\u011Fi k\xFC\xE7\xFClt\xFCn.")}return vc(i,t)}finally{i.delete()}}function Mc(s,t){let e=_c(s,t),n=[];try{return n=e.decompose(),n.map((i,r)=>vc(i,{...t,name:`${t.name} \xB7 ${r+1}`}))}finally{n.forEach(i=>i.delete()),e.delete()}}var un=0,hs=1,Wi=2;var Uo=1;var No=100;var Fo=204,Bo=205;var ea=0,na=1,ia=2,Ri=3,ra=4,sa=5,oa=6,aa=7,Hc=0;var ca=300;var Oo=1e3,wi=1001,zo=1002;var Gc=1006;var Wc=1008;var Xc=1009;var qc=1015;var Yc=1023;var Ii=2300,kr=2301,zr=2302,Vo=2400,ko=2401,Ho=2402;var la="",fe="srgb",Go="srgb-linear",Wo="linear",Vr="srgb";var ln=7680;var Xo=519;var qo=35044;var Ti=2e3,Yo=2001;var fn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Pg=Math.PI/180,uu=180/Math.PI;function Zn(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Wt[s&255]+Wt[s>>8&255]+Wt[s>>16&255]+Wt[s>>24&255]+"-"+Wt[t&255]+Wt[t>>8&255]+"-"+Wt[t>>16&15|64]+Wt[t>>24&255]+"-"+Wt[e&63|128]+Wt[e>>8&255]+"-"+Wt[e>>16&255]+Wt[e>>24&255]+Wt[n&255]+Wt[n>>8&255]+Wt[n>>16&255]+Wt[n>>24&255]).toLowerCase()}function ot(s,t,e){return Math.max(t,Math.min(e,s))}function fu(s,t){return(s%t+t)%t}function ao(s,t,e){return(1-e)*s+e*t}function vi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Jt(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var G=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ot(this.x,t.x,e.x),this.y=ot(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ot(this.x,t,e),this.y=ot(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ot(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Fe=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let c=n[i+0],h=n[i+1],u=n[i+2],d=n[i+3],m=r[o+0],g=r[o+1],x=r[o+2],v=r[o+3];if(a===0){t[e+0]=c,t[e+1]=h,t[e+2]=u,t[e+3]=d;return}if(a===1){t[e+0]=m,t[e+1]=g,t[e+2]=x,t[e+3]=v;return}if(d!==v||c!==m||h!==g||u!==x){let S=1-a,A=c*m+h*g+u*x+d*v,E=A>=0?1:-1,p=1-A*A;if(p>Number.EPSILON){let _=Math.sqrt(p),f=Math.atan2(_,A*E);S=Math.sin(S*f)/_,a=Math.sin(a*f)/_}let l=a*E;if(c=c*S+m*l,h=h*S+g*l,u=u*S+x*l,d=d*S+v*l,S===1-a){let _=1/Math.sqrt(c*c+h*h+u*u+d*d);c*=_,h*=_,u*=_,d*=_}}t[e]=c,t[e+1]=h,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],c=n[i+1],h=n[i+2],u=n[i+3],d=r[o],m=r[o+1],g=r[o+2],x=r[o+3];return t[e]=a*x+u*d+c*g-h*m,t[e+1]=c*x+u*m+h*d-a*g,t[e+2]=h*x+u*g+a*m-c*d,t[e+3]=u*x-a*d-c*m-h*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,h=a(n/2),u=a(i/2),d=a(r/2),m=c(n/2),g=c(i/2),x=c(r/2);switch(o){case"XYZ":this._x=m*u*d+h*g*x,this._y=h*g*d-m*u*x,this._z=h*u*x+m*g*d,this._w=h*u*d-m*g*x;break;case"YXZ":this._x=m*u*d+h*g*x,this._y=h*g*d-m*u*x,this._z=h*u*x-m*g*d,this._w=h*u*d+m*g*x;break;case"ZXY":this._x=m*u*d-h*g*x,this._y=h*g*d+m*u*x,this._z=h*u*x+m*g*d,this._w=h*u*d-m*g*x;break;case"ZYX":this._x=m*u*d-h*g*x,this._y=h*g*d+m*u*x,this._z=h*u*x-m*g*d,this._w=h*u*d+m*g*x;break;case"YZX":this._x=m*u*d+h*g*x,this._y=h*g*d+m*u*x,this._z=h*u*x-m*g*d,this._w=h*u*d-m*g*x;break;case"XZY":this._x=m*u*d-h*g*x,this._y=h*g*d-m*u*x,this._z=h*u*x+m*g*d,this._w=h*u*d+m*g*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],c=e[9],h=e[2],u=e[6],d=e[10],m=n+a+d;if(m>0){let g=.5/Math.sqrt(m+1);this._w=.25/g,this._x=(u-c)*g,this._y=(r-h)*g,this._z=(o-i)*g}else if(n>a&&n>d){let g=2*Math.sqrt(1+n-a-d);this._w=(u-c)/g,this._x=.25*g,this._y=(i+o)/g,this._z=(r+h)/g}else if(a>d){let g=2*Math.sqrt(1+a-n-d);this._w=(r-h)/g,this._x=(i+o)/g,this._y=.25*g,this._z=(c+u)/g}else{let g=2*Math.sqrt(1+d-n-a);this._w=(o-i)/g,this._x=(r+h)/g,this._y=(c+u)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ot(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,c=e._y,h=e._z,u=e._w;return this._x=n*u+o*a+i*h-r*c,this._y=i*u+o*c+r*a-n*h,this._z=r*u+o*h+n*c-i*a,this._w=o*u-n*a-i*c-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let g=1-e;return this._w=g*o+e*this._w,this._x=g*n+e*this._x,this._y=g*i+e*this._y,this._z=g*r+e*this._z,this.normalize(),this}let h=Math.sqrt(c),u=Math.atan2(h,a),d=Math.sin((1-e)*u)/h,m=Math.sin(e*u)/h;return this._w=o*d+this._w*m,this._x=n*d+this._x*m,this._y=i*d+this._y*m,this._z=r*d+this._z*m,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Sc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Sc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,c=t.w,h=2*(o*i-a*n),u=2*(a*e-r*i),d=2*(r*n-o*e);return this.x=e+c*h+o*d-a*u,this.y=n+c*u+a*h-r*d,this.z=i+c*d+r*u-o*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ot(this.x,t.x,e.x),this.y=ot(this.y,t.y,e.y),this.z=ot(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ot(this.x,t,e),this.y=ot(this.y,t,e),this.z=ot(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return co.copy(this).projectOnVector(t),this.sub(co)}reflect(t){return this.sub(co.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ot(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},co=new I,Sc=new Fe,at=class s{constructor(t,e,n,i,r,o,a,c,h){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,h)}set(t,e,n,i,r,o,a,c,h){let u=this.elements;return u[0]=t,u[1]=i,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],h=n[1],u=n[4],d=n[7],m=n[2],g=n[5],x=n[8],v=i[0],S=i[3],A=i[6],E=i[1],p=i[4],l=i[7],_=i[2],f=i[5],R=i[8];return r[0]=o*v+a*E+c*_,r[3]=o*S+a*p+c*f,r[6]=o*A+a*l+c*R,r[1]=h*v+u*E+d*_,r[4]=h*S+u*p+d*f,r[7]=h*A+u*l+d*R,r[2]=m*v+g*E+x*_,r[5]=m*S+g*p+x*f,r[8]=m*A+g*l+x*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],h=t[7],u=t[8];return e*o*u-e*a*h-n*r*u+n*a*c+i*r*h-i*o*c}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],h=t[7],u=t[8],d=u*o-a*h,m=a*c-u*r,g=h*r-o*c,x=e*d+n*m+i*g;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/x;return t[0]=d*v,t[1]=(i*h-u*n)*v,t[2]=(a*n-i*o)*v,t[3]=m*v,t[4]=(u*e-i*c)*v,t[5]=(i*r-a*e)*v,t[6]=g*v,t[7]=(n*c-h*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let c=Math.cos(r),h=Math.sin(r);return this.set(n*c,n*h,-n*(c*o+h*a)+o+t,-i*h,i*c,-i*(-h*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(lo.makeScale(t,e)),this}rotate(t){return this.premultiply(lo.makeRotation(-t)),this}translate(t,e){return this.premultiply(lo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},lo=new at;function Zc(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Zo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}var bc={};function $o(s){s in bc||(bc[s]=!0,console.warn(s))}var wc=new at().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tc=new at().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function du(){let s={enabled:!0,workingColorSpace:Go,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Vr&&(i.r=Ne(i.r),i.g=Ne(i.g),i.b=Ne(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Vr&&(i.r=kn(i.r),i.g=kn(i.g),i.b=kn(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===la?Wo:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return $o("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return $o("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Go]:{primaries:t,whitePoint:n,transfer:Wo,toXYZ:wc,fromXYZ:Tc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:fe},outputColorSpaceConfig:{drawingBufferColorSpace:fe}},[fe]:{primaries:t,whitePoint:n,transfer:Vr,toXYZ:wc,fromXYZ:Tc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:fe}}}),s}var ue=du();function Ne(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function kn(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Rn,Hr=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Rn===void 0&&(Rn=Zo("canvas")),Rn.width=t.width,Rn.height=t.height;let i=Rn.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Rn}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Zo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Ne(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ne(e[n]/255)*255):e[n]=Ne(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},pu=0,Gr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pu++}),this.uuid=Zn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(ho(i[o].image)):r.push(ho(i[o]))}else r=ho(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function ho(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Hr.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var mu=0,uo=new I,Hn=class s extends fn{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=wi,i=wi,r=Gc,o=Wc,a=Yc,c=Xc,h=s.DEFAULT_ANISOTROPY,u=la){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mu++}),this.uuid=Zn(),this.name="",this.source=new Gr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=c,this.offset=new G(0,0),this.repeat=new G(1,1),this.center=new G(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(uo).x}get height(){return this.source.getSize(uo).y}get depth(){return this.source.getSize(uo).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ca)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Oo:t.x=t.x-Math.floor(t.x);break;case wi:t.x=t.x<0?0:1;break;case zo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Oo:t.y=t.y-Math.floor(t.y);break;case wi:t.y=t.y<0?0:1;break;case zo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=ca;Hn.DEFAULT_ANISOTROPY=1;var ee=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,c=t.elements,h=c[0],u=c[4],d=c[8],m=c[1],g=c[5],x=c[9],v=c[2],S=c[6],A=c[10];if(Math.abs(u-m)<.01&&Math.abs(d-v)<.01&&Math.abs(x-S)<.01){if(Math.abs(u+m)<.1&&Math.abs(d+v)<.1&&Math.abs(x+S)<.1&&Math.abs(h+g+A-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let p=(h+1)/2,l=(g+1)/2,_=(A+1)/2,f=(u+m)/4,R=(d+v)/4,w=(x+S)/4;return p>l&&p>_?p<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(p),i=f/n,r=R/n):l>_?l<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(l),n=f/i,r=w/i):_<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(_),n=R/r,i=w/r),this.set(n,i,r,e),this}let E=Math.sqrt((S-x)*(S-x)+(d-v)*(d-v)+(m-u)*(m-u));return Math.abs(E)<.001&&(E=1),this.x=(S-x)/E,this.y=(d-v)/E,this.z=(m-u)/E,this.w=Math.acos((h+g+A-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ot(this.x,t.x,e.x),this.y=ot(this.y,t.y,e.y),this.z=ot(this.z,t.z,e.z),this.w=ot(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ot(this.x,t,e),this.y=ot(this.y,t,e),this.z=ot(this.z,t,e),this.w=ot(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};var It=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(pe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(pe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=pe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,pe):pe.fromBufferAttribute(r,o),pe.applyMatrix4(t.matrixWorld),this.expandByPoint(pe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),_r.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),_r.copy(n.boundingBox)),_r.applyMatrix4(t.matrixWorld),this.union(_r)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,pe),pe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(yi),vr.subVectors(this.max,yi),In.subVectors(t.a,yi),Pn.subVectors(t.b,yi),Dn.subVectors(t.c,yi),Ge.subVectors(Pn,In),We.subVectors(Dn,Pn),on.subVectors(In,Dn);let e=[0,-Ge.z,Ge.y,0,-We.z,We.y,0,-on.z,on.y,Ge.z,0,-Ge.x,We.z,0,-We.x,on.z,0,-on.x,-Ge.y,Ge.x,0,-We.y,We.x,0,-on.y,on.x,0];return!fo(e,In,Pn,Dn,vr)||(e=[1,0,0,0,1,0,0,0,1],!fo(e,In,Pn,Dn,vr))?!1:(yr.crossVectors(Ge,We),e=[yr.x,yr.y,yr.z],fo(e,In,Pn,Dn,vr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,pe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(pe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ie[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ie[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ie[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ie[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ie[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ie[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ie[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ie[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ie),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ie=[new I,new I,new I,new I,new I,new I,new I,new I],pe=new I,_r=new It,In=new I,Pn=new I,Dn=new I,Ge=new I,We=new I,on=new I,yi=new I,vr=new I,yr=new I,an=new I;function fo(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){an.fromArray(s,r);let a=i.x*Math.abs(an.x)+i.y*Math.abs(an.y)+i.z*Math.abs(an.z),c=t.dot(an),h=e.dot(an),u=n.dot(an);if(Math.max(-Math.max(c,h,u),Math.min(c,h,u))>a)return!1}return!0}var gu=new It,Mi=new I,po=new I,Gn=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):gu.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Mi.subVectors(t,this.center);let e=Mi.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Mi,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(po.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Mi.copy(t.center).add(po)),this.expandByPoint(Mi.copy(t.center).sub(po))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Pe=new I,mo=new I,Mr=new I,Xe=new I,go=new I,Sr=new I,xo=new I,Te=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Pe)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Pe.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Pe.copy(this.origin).addScaledVector(this.direction,e),Pe.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){mo.copy(t).add(e).multiplyScalar(.5),Mr.copy(e).sub(t).normalize(),Xe.copy(this.origin).sub(mo);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Mr),a=Xe.dot(this.direction),c=-Xe.dot(Mr),h=Xe.lengthSq(),u=Math.abs(1-o*o),d,m,g,x;if(u>0)if(d=o*c-a,m=o*a-c,x=r*u,d>=0)if(m>=-x)if(m<=x){let v=1/u;d*=v,m*=v,g=d*(d+o*m+2*a)+m*(o*d+m+2*c)+h}else m=r,d=Math.max(0,-(o*m+a)),g=-d*d+m*(m+2*c)+h;else m=-r,d=Math.max(0,-(o*m+a)),g=-d*d+m*(m+2*c)+h;else m<=-x?(d=Math.max(0,-(-o*r+a)),m=d>0?-r:Math.min(Math.max(-r,-c),r),g=-d*d+m*(m+2*c)+h):m<=x?(d=0,m=Math.min(Math.max(-r,-c),r),g=m*(m+2*c)+h):(d=Math.max(0,-(o*r+a)),m=d>0?r:Math.min(Math.max(-r,-c),r),g=-d*d+m*(m+2*c)+h);else m=o>0?-r:r,d=Math.max(0,-(o*m+a)),g=-d*d+m*(m+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(mo).addScaledVector(Mr,m),g}intersectSphere(t,e){Pe.subVectors(t.center,this.origin);let n=Pe.dot(this.direction),i=Pe.dot(Pe)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,c,h=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,m=this.origin;return h>=0?(n=(t.min.x-m.x)*h,i=(t.max.x-m.x)*h):(n=(t.max.x-m.x)*h,i=(t.min.x-m.x)*h),u>=0?(r=(t.min.y-m.y)*u,o=(t.max.y-m.y)*u):(r=(t.max.y-m.y)*u,o=(t.min.y-m.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-m.z)*d,c=(t.max.z-m.z)*d):(a=(t.max.z-m.z)*d,c=(t.min.z-m.z)*d),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Pe)!==null}intersectTriangle(t,e,n,i,r){go.subVectors(e,t),Sr.subVectors(n,t),xo.crossVectors(go,Sr);let o=this.direction.dot(xo),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Xe.subVectors(this.origin,t);let c=a*this.direction.dot(Sr.crossVectors(Xe,Sr));if(c<0)return null;let h=a*this.direction.dot(go.cross(Xe));if(h<0||c+h>o)return null;let u=-a*Xe.dot(xo);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},dt=class s{constructor(t,e,n,i,r,o,a,c,h,u,d,m,g,x,v,S){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,h,u,d,m,g,x,v,S)}set(t,e,n,i,r,o,a,c,h,u,d,m,g,x,v,S){let A=this.elements;return A[0]=t,A[4]=e,A[8]=n,A[12]=i,A[1]=r,A[5]=o,A[9]=a,A[13]=c,A[2]=h,A[6]=u,A[10]=d,A[14]=m,A[3]=g,A[7]=x,A[11]=v,A[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/Ln.setFromMatrixColumn(t,0).length(),r=1/Ln.setFromMatrixColumn(t,1).length(),o=1/Ln.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),h=Math.sin(i),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let m=o*u,g=o*d,x=a*u,v=a*d;e[0]=c*u,e[4]=-c*d,e[8]=h,e[1]=g+x*h,e[5]=m-v*h,e[9]=-a*c,e[2]=v-m*h,e[6]=x+g*h,e[10]=o*c}else if(t.order==="YXZ"){let m=c*u,g=c*d,x=h*u,v=h*d;e[0]=m+v*a,e[4]=x*a-g,e[8]=o*h,e[1]=o*d,e[5]=o*u,e[9]=-a,e[2]=g*a-x,e[6]=v+m*a,e[10]=o*c}else if(t.order==="ZXY"){let m=c*u,g=c*d,x=h*u,v=h*d;e[0]=m-v*a,e[4]=-o*d,e[8]=x+g*a,e[1]=g+x*a,e[5]=o*u,e[9]=v-m*a,e[2]=-o*h,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let m=o*u,g=o*d,x=a*u,v=a*d;e[0]=c*u,e[4]=x*h-g,e[8]=m*h+v,e[1]=c*d,e[5]=v*h+m,e[9]=g*h-x,e[2]=-h,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let m=o*c,g=o*h,x=a*c,v=a*h;e[0]=c*u,e[4]=v-m*d,e[8]=x*d+g,e[1]=d,e[5]=o*u,e[9]=-a*u,e[2]=-h*u,e[6]=g*d+x,e[10]=m-v*d}else if(t.order==="XZY"){let m=o*c,g=o*h,x=a*c,v=a*h;e[0]=c*u,e[4]=-d,e[8]=h*u,e[1]=m*d+v,e[5]=o*u,e[9]=g*d-x,e[2]=x*d-g,e[6]=a*u,e[10]=v*d+m}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(xu,t,_u)}lookAt(t,e,n){let i=this.elements;return jt.subVectors(t,e),jt.lengthSq()===0&&(jt.z=1),jt.normalize(),qe.crossVectors(n,jt),qe.lengthSq()===0&&(Math.abs(n.z)===1?jt.x+=1e-4:jt.z+=1e-4,jt.normalize(),qe.crossVectors(n,jt)),qe.normalize(),br.crossVectors(jt,qe),i[0]=qe.x,i[4]=br.x,i[8]=jt.x,i[1]=qe.y,i[5]=br.y,i[9]=jt.y,i[2]=qe.z,i[6]=br.z,i[10]=jt.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],h=n[12],u=n[1],d=n[5],m=n[9],g=n[13],x=n[2],v=n[6],S=n[10],A=n[14],E=n[3],p=n[7],l=n[11],_=n[15],f=i[0],R=i[4],w=i[8],M=i[12],y=i[1],b=i[5],T=i[9],C=i[13],P=i[2],D=i[6],L=i[10],U=i[14],B=i[3],F=i[7],$=i[11],V=i[15];return r[0]=o*f+a*y+c*P+h*B,r[4]=o*R+a*b+c*D+h*F,r[8]=o*w+a*T+c*L+h*$,r[12]=o*M+a*C+c*U+h*V,r[1]=u*f+d*y+m*P+g*B,r[5]=u*R+d*b+m*D+g*F,r[9]=u*w+d*T+m*L+g*$,r[13]=u*M+d*C+m*U+g*V,r[2]=x*f+v*y+S*P+A*B,r[6]=x*R+v*b+S*D+A*F,r[10]=x*w+v*T+S*L+A*$,r[14]=x*M+v*C+S*U+A*V,r[3]=E*f+p*y+l*P+_*B,r[7]=E*R+p*b+l*D+_*F,r[11]=E*w+p*T+l*L+_*$,r[15]=E*M+p*C+l*U+_*V,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],c=t[9],h=t[13],u=t[2],d=t[6],m=t[10],g=t[14],x=t[3],v=t[7],S=t[11],A=t[15];return x*(+r*c*d-i*h*d-r*a*m+n*h*m+i*a*g-n*c*g)+v*(+e*c*g-e*h*m+r*o*m-i*o*g+i*h*u-r*c*u)+S*(+e*h*d-e*a*g-r*o*d+n*o*g+r*a*u-n*h*u)+A*(-i*a*u-e*c*d+e*a*m+i*o*d-n*o*m+n*c*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],h=t[7],u=t[8],d=t[9],m=t[10],g=t[11],x=t[12],v=t[13],S=t[14],A=t[15],E=d*S*h-v*m*h+v*c*g-a*S*g-d*c*A+a*m*A,p=x*m*h-u*S*h-x*c*g+o*S*g+u*c*A-o*m*A,l=u*v*h-x*d*h+x*a*g-o*v*g-u*a*A+o*d*A,_=x*d*c-u*v*c-x*a*m+o*v*m+u*a*S-o*d*S,f=e*E+n*p+i*l+r*_;if(f===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/f;return t[0]=E*R,t[1]=(v*m*r-d*S*r-v*i*g+n*S*g+d*i*A-n*m*A)*R,t[2]=(a*S*r-v*c*r+v*i*h-n*S*h-a*i*A+n*c*A)*R,t[3]=(d*c*r-a*m*r-d*i*h+n*m*h+a*i*g-n*c*g)*R,t[4]=p*R,t[5]=(u*S*r-x*m*r+x*i*g-e*S*g-u*i*A+e*m*A)*R,t[6]=(x*c*r-o*S*r-x*i*h+e*S*h+o*i*A-e*c*A)*R,t[7]=(o*m*r-u*c*r+u*i*h-e*m*h-o*i*g+e*c*g)*R,t[8]=l*R,t[9]=(x*d*r-u*v*r-x*n*g+e*v*g+u*n*A-e*d*A)*R,t[10]=(o*v*r-x*a*r+x*n*h-e*v*h-o*n*A+e*a*A)*R,t[11]=(u*a*r-o*d*r-u*n*h+e*d*h+o*n*g-e*a*g)*R,t[12]=_*R,t[13]=(u*v*i-x*d*i+x*n*m-e*v*m-u*n*S+e*d*S)*R,t[14]=(x*a*i-o*v*i-x*n*c+e*v*c+o*n*S-e*a*S)*R,t[15]=(o*d*i-u*a*i+u*n*c-e*d*c-o*n*m+e*a*m)*R,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,h=r*o,u=r*a;return this.set(h*o+n,h*a-i*c,h*c+i*a,0,h*a+i*c,u*a+n,u*c-i*o,0,h*c-i*a,u*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,h=r+r,u=o+o,d=a+a,m=r*h,g=r*u,x=r*d,v=o*u,S=o*d,A=a*d,E=c*h,p=c*u,l=c*d,_=n.x,f=n.y,R=n.z;return i[0]=(1-(v+A))*_,i[1]=(g+l)*_,i[2]=(x-p)*_,i[3]=0,i[4]=(g-l)*f,i[5]=(1-(m+A))*f,i[6]=(S+E)*f,i[7]=0,i[8]=(x+p)*R,i[9]=(S-E)*R,i[10]=(1-(m+v))*R,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=Ln.set(i[0],i[1],i[2]).length(),o=Ln.set(i[4],i[5],i[6]).length(),a=Ln.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],me.copy(this);let h=1/r,u=1/o,d=1/a;return me.elements[0]*=h,me.elements[1]*=h,me.elements[2]*=h,me.elements[4]*=u,me.elements[5]*=u,me.elements[6]*=u,me.elements[8]*=d,me.elements[9]*=d,me.elements[10]*=d,e.setFromRotationMatrix(me),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=Ti,c=!1){let h=this.elements,u=2*r/(e-t),d=2*r/(n-i),m=(e+t)/(e-t),g=(n+i)/(n-i),x,v;if(c)x=r/(o-r),v=o*r/(o-r);else if(a===Ti)x=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===Yo)x=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return h[0]=u,h[4]=0,h[8]=m,h[12]=0,h[1]=0,h[5]=d,h[9]=g,h[13]=0,h[2]=0,h[6]=0,h[10]=x,h[14]=v,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=Ti,c=!1){let h=this.elements,u=2/(e-t),d=2/(n-i),m=-(e+t)/(e-t),g=-(n+i)/(n-i),x,v;if(c)x=1/(o-r),v=o/(o-r);else if(a===Ti)x=-2/(o-r),v=-(o+r)/(o-r);else if(a===Yo)x=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return h[0]=u,h[4]=0,h[8]=0,h[12]=m,h[1]=0,h[5]=d,h[9]=0,h[13]=g,h[2]=0,h[6]=0,h[10]=x,h[14]=v,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ln=new I,me=new dt,xu=new I(0,0,0),_u=new I(1,1,1),qe=new I,br=new I,jt=new I,Ec=new dt,Ac=new Fe,Wn=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],c=i[1],h=i[5],u=i[9],d=i[2],m=i[6],g=i[10];switch(e){case"XYZ":this._y=Math.asin(ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,g),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(m,h),this._z=0);break;case"YXZ":this._x=Math.asin(-ot(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ot(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ot(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(m,g),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(ot(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(m,h),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ec.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ec,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ac.setFromEuler(this),this.setFromQuaternion(Ac,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Wn.DEFAULT_ORDER="XYZ";var Wr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},vu=0,Cc=new I,Un=new Fe,De=new dt,wr=new I,Si=new I,yu=new I,Mu=new Fe,Rc=new I(1,0,0),Ic=new I(0,1,0),Pc=new I(0,0,1),Dc={type:"added"},Su={type:"removed"},Nn={type:"childadded",child:null},_o={type:"childremoved",child:null},Ze=class s extends fn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vu++}),this.uuid=Zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new I,e=new Wn,n=new Fe,i=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new dt},normalMatrix:{value:new at}}),this.matrix=new dt,this.matrixWorld=new dt,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Un.setFromAxisAngle(t,e),this.quaternion.multiply(Un),this}rotateOnWorldAxis(t,e){return Un.setFromAxisAngle(t,e),this.quaternion.premultiply(Un),this}rotateX(t){return this.rotateOnAxis(Rc,t)}rotateY(t){return this.rotateOnAxis(Ic,t)}rotateZ(t){return this.rotateOnAxis(Pc,t)}translateOnAxis(t,e){return Cc.copy(t).applyQuaternion(this.quaternion),this.position.add(Cc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Rc,t)}translateY(t){return this.translateOnAxis(Ic,t)}translateZ(t){return this.translateOnAxis(Pc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(De.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?wr.copy(t):wr.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Si.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?De.lookAt(Si,wr,this.up):De.lookAt(wr,Si,this.up),this.quaternion.setFromRotationMatrix(De),i&&(De.extractRotation(i.matrixWorld),Un.setFromRotationMatrix(De),this.quaternion.premultiply(Un.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Dc),Nn.child=t,this.dispatchEvent(Nn),Nn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Su),_o.child=t,this.dispatchEvent(_o),_o.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),De.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),De.multiply(t.parent.matrixWorld)),t.applyMatrix4(De),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Dc),Nn.child=t,this.dispatchEvent(Nn),Nn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Si,t,yu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Si,Mu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let h=0,u=c.length;h<u;h++){let d=c[h];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,h=this.material.length;c<h;c++)a.push(r(t.materials,this.material[c]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];i.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),h=o(t.textures),u=o(t.images),d=o(t.shapes),m=o(t.skeletons),g=o(t.animations),x=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),m.length>0&&(n.skeletons=m),g.length>0&&(n.animations=g),x.length>0&&(n.nodes=x)}return n.object=i,n;function o(a){let c=[];for(let h in a){let u=a[h];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};Ze.DEFAULT_UP=new I(0,1,0);Ze.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ge=new I,Le=new I,vo=new I,Ue=new I,Fn=new I,Bn=new I,Lc=new I,yo=new I,Mo=new I,So=new I,bo=new ee,wo=new ee,To=new ee,Et=class s{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),ge.subVectors(t,e),i.cross(ge);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){ge.subVectors(i,e),Le.subVectors(n,e),vo.subVectors(t,e);let o=ge.dot(ge),a=ge.dot(Le),c=ge.dot(vo),h=Le.dot(Le),u=Le.dot(vo),d=o*h-a*a;if(d===0)return r.set(0,0,0),null;let m=1/d,g=(h*c-a*u)*m,x=(o*u-a*c)*m;return r.set(1-g-x,x,g)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Ue)===null?!1:Ue.x>=0&&Ue.y>=0&&Ue.x+Ue.y<=1}static getInterpolation(t,e,n,i,r,o,a,c){return this.getBarycoord(t,e,n,i,Ue)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ue.x),c.addScaledVector(o,Ue.y),c.addScaledVector(a,Ue.z),c)}static getInterpolatedAttribute(t,e,n,i,r,o){return bo.setScalar(0),wo.setScalar(0),To.setScalar(0),bo.fromBufferAttribute(t,e),wo.fromBufferAttribute(t,n),To.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(bo,r.x),o.addScaledVector(wo,r.y),o.addScaledVector(To,r.z),o}static isFrontFacing(t,e,n,i){return ge.subVectors(n,e),Le.subVectors(t,e),ge.cross(Le).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ge.subVectors(this.c,this.b),Le.subVectors(this.a,this.b),ge.cross(Le).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;Fn.subVectors(i,n),Bn.subVectors(r,n),yo.subVectors(t,n);let c=Fn.dot(yo),h=Bn.dot(yo);if(c<=0&&h<=0)return e.copy(n);Mo.subVectors(t,i);let u=Fn.dot(Mo),d=Bn.dot(Mo);if(u>=0&&d<=u)return e.copy(i);let m=c*d-u*h;if(m<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(Fn,o);So.subVectors(t,r);let g=Fn.dot(So),x=Bn.dot(So);if(x>=0&&g<=x)return e.copy(r);let v=g*h-c*x;if(v<=0&&h>=0&&x<=0)return a=h/(h-x),e.copy(n).addScaledVector(Bn,a);let S=u*x-g*d;if(S<=0&&d-u>=0&&g-x>=0)return Lc.subVectors(r,i),a=(d-u)/(d-u+(g-x)),e.copy(i).addScaledVector(Lc,a);let A=1/(S+v+m);return o=v*A,a=m*A,e.copy(n).addScaledVector(Fn,o).addScaledVector(Bn,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},$c={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ye={h:0,s:0,l:0},Tr={h:0,s:0,l:0};function Eo(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Lt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=fe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ue.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=ue.workingColorSpace){return this.r=t,this.g=e,this.b=n,ue.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=ue.workingColorSpace){if(t=fu(t,1),e=ot(e,0,1),n=ot(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Eo(o,r,t+1/3),this.g=Eo(o,r,t),this.b=Eo(o,r,t-1/3)}return ue.colorSpaceToWorking(this,i),this}setStyle(t,e=fe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=fe){let n=$c[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ne(t.r),this.g=Ne(t.g),this.b=Ne(t.b),this}copyLinearToSRGB(t){return this.r=kn(t.r),this.g=kn(t.g),this.b=kn(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=fe){return ue.workingToColorSpace(Xt.copy(this),t),Math.round(ot(Xt.r*255,0,255))*65536+Math.round(ot(Xt.g*255,0,255))*256+Math.round(ot(Xt.b*255,0,255))}getHexString(t=fe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ue.workingColorSpace){ue.workingToColorSpace(Xt.copy(this),e);let n=Xt.r,i=Xt.g,r=Xt.b,o=Math.max(n,i,r),a=Math.min(n,i,r),c,h,u=(a+o)/2;if(a===o)c=0,h=0;else{let d=o-a;switch(h=u<=.5?d/(o+a):d/(2-o-a),o){case n:c=(i-r)/d+(i<r?6:0);break;case i:c=(r-n)/d+2;break;case r:c=(n-i)/d+4;break}c/=6}return t.h=c,t.s=h,t.l=u,t}getRGB(t,e=ue.workingColorSpace){return ue.workingToColorSpace(Xt.copy(this),e),t.r=Xt.r,t.g=Xt.g,t.b=Xt.b,t}getStyle(t=fe){ue.workingToColorSpace(Xt.copy(this),t);let e=Xt.r,n=Xt.g,i=Xt.b;return t!==fe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Ye),this.setHSL(Ye.h+t,Ye.s+e,Ye.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ye),t.getHSL(Tr);let n=ao(Ye.h,Tr.h,e),i=ao(Ye.s,Tr.s,e),r=ao(Ye.l,Tr.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Xt=new Lt;Lt.NAMES=$c;var bu=0,Xr=class extends fn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bu++}),this.uuid=Zn(),this.name="",this.type="Material",this.blending=Uo,this.side=un,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fo,this.blendDst=Bo,this.blendEquation=No,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=Ri,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ln,this.stencilZFail=ln,this.stencilZPass=ln,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Uo&&(n.blending=this.blending),this.side!==un&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Fo&&(n.blendSrc=this.blendSrc),this.blendDst!==Bo&&(n.blendDst=this.blendDst),this.blendEquation!==No&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ri&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ln&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ln&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ln&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},qr=class extends Xr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.combine=Hc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ot=new I,Er=new G,wu=0,Vt=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:wu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=qo,this.updateRanges=[],this.gpuType=qc,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Er.fromBufferAttribute(this,e),Er.applyMatrix3(t),this.setXY(e,Er.x,Er.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ot.fromBufferAttribute(this,e),Ot.applyMatrix3(t),this.setXYZ(e,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ot.fromBufferAttribute(this,e),Ot.applyMatrix4(t),this.setXYZ(e,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ot.fromBufferAttribute(this,e),Ot.applyNormalMatrix(t),this.setXYZ(e,Ot.x,Ot.y,Ot.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ot.fromBufferAttribute(this,e),Ot.transformDirection(t),this.setXYZ(e,Ot.x,Ot.y,Ot.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=vi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=vi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=vi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=vi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=vi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),i=Jt(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),i=Jt(i,this.array),r=Jt(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==qo&&(t.usage=this.usage),t}};var Yr=class extends Vt{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Zr=class extends Vt{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var qt=class extends Vt{constructor(t,e,n){super(new Float32Array(t),e,n)}},Tu=0,he=new dt,Ao=new Ze,On=new I,te=new It,bi=new It,kt=new I,xe=class s extends fn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tu++}),this.uuid=Zn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Zc(t)?Zr:Yr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new at().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return he.makeRotationFromQuaternion(t),this.applyMatrix4(he),this}rotateX(t){return he.makeRotationX(t),this.applyMatrix4(he),this}rotateY(t){return he.makeRotationY(t),this.applyMatrix4(he),this}rotateZ(t){return he.makeRotationZ(t),this.applyMatrix4(he),this}translate(t,e,n){return he.makeTranslation(t,e,n),this.applyMatrix4(he),this}scale(t,e,n){return he.makeScale(t,e,n),this.applyMatrix4(he),this}lookAt(t){return Ao.lookAt(t),Ao.updateMatrix(),this.applyMatrix4(Ao.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(On).negate(),this.translate(On.x,On.y,On.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new qt(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new It);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];te.setFromBufferAttribute(r),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,te.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,te.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(te.min),this.boundingBox.expandByPoint(te.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let n=this.boundingSphere.center;if(te.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];bi.setFromBufferAttribute(a),this.morphTargetsRelative?(kt.addVectors(te.min,bi.min),te.expandByPoint(kt),kt.addVectors(te.max,bi.max),te.expandByPoint(kt)):(te.expandByPoint(bi.min),te.expandByPoint(bi.max))}te.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)kt.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(kt));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let h=0,u=a.count;h<u;h++)kt.fromBufferAttribute(a,h),c&&(On.fromBufferAttribute(t,h),kt.add(On)),i=Math.max(i,n.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let w=0;w<n.count;w++)a[w]=new I,c[w]=new I;let h=new I,u=new I,d=new I,m=new G,g=new G,x=new G,v=new I,S=new I;function A(w,M,y){h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,M),d.fromBufferAttribute(n,y),m.fromBufferAttribute(r,w),g.fromBufferAttribute(r,M),x.fromBufferAttribute(r,y),u.sub(h),d.sub(h),g.sub(m),x.sub(m);let b=1/(g.x*x.y-x.x*g.y);isFinite(b)&&(v.copy(u).multiplyScalar(x.y).addScaledVector(d,-g.y).multiplyScalar(b),S.copy(d).multiplyScalar(g.x).addScaledVector(u,-x.x).multiplyScalar(b),a[w].add(v),a[M].add(v),a[y].add(v),c[w].add(S),c[M].add(S),c[y].add(S))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let w=0,M=E.length;w<M;++w){let y=E[w],b=y.start,T=y.count;for(let C=b,P=b+T;C<P;C+=3)A(t.getX(C+0),t.getX(C+1),t.getX(C+2))}let p=new I,l=new I,_=new I,f=new I;function R(w){_.fromBufferAttribute(i,w),f.copy(_);let M=a[w];p.copy(M),p.sub(_.multiplyScalar(_.dot(M))).normalize(),l.crossVectors(f,M);let b=l.dot(c[w])<0?-1:1;o.setXYZW(w,p.x,p.y,p.z,b)}for(let w=0,M=E.length;w<M;++w){let y=E[w],b=y.start,T=y.count;for(let C=b,P=b+T;C<P;C+=3)R(t.getX(C+0)),R(t.getX(C+1)),R(t.getX(C+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Vt(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let m=0,g=n.count;m<g;m++)n.setXYZ(m,0,0,0);let i=new I,r=new I,o=new I,a=new I,c=new I,h=new I,u=new I,d=new I;if(t)for(let m=0,g=t.count;m<g;m+=3){let x=t.getX(m+0),v=t.getX(m+1),S=t.getX(m+2);i.fromBufferAttribute(e,x),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,S),u.subVectors(o,r),d.subVectors(i,r),u.cross(d),a.fromBufferAttribute(n,x),c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,S),a.add(u),c.add(u),h.add(u),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(S,h.x,h.y,h.z)}else for(let m=0,g=e.count;m<g;m+=3)i.fromBufferAttribute(e,m+0),r.fromBufferAttribute(e,m+1),o.fromBufferAttribute(e,m+2),u.subVectors(o,r),d.subVectors(i,r),u.cross(d),n.setXYZ(m+0,u.x,u.y,u.z),n.setXYZ(m+1,u.x,u.y,u.z),n.setXYZ(m+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)kt.fromBufferAttribute(t,e),kt.normalize(),t.setXYZ(e,kt.x,kt.y,kt.z)}toNonIndexed(){function t(a,c){let h=a.array,u=a.itemSize,d=a.normalized,m=new h.constructor(c.length*u),g=0,x=0;for(let v=0,S=c.length;v<S;v++){a.isInterleavedBufferAttribute?g=c[v]*a.data.stride+a.offset:g=c[v]*u;for(let A=0;A<u;A++)m[x++]=h[g++]}return new Vt(m,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let c=i[a],h=t(c,n);e.setAttribute(a,h)}let r=this.morphAttributes;for(let a in r){let c=[],h=r[a];for(let u=0,d=h.length;u<d;u++){let m=h[u],g=t(m,n);c.push(g)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let h=o[a];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let h in c)c[h]!==void 0&&(t[h]=c[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let h=n[c];t.data.attributes[c]=h.toJSON(t.data)}let i={},r=!1;for(let c in this.morphAttributes){let h=this.morphAttributes[c],u=[];for(let d=0,m=h.length;d<m;d++){let g=h[d];u.push(g.toJSON(t.data))}u.length>0&&(i[c]=u,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let h in i){let u=i[h];this.setAttribute(h,u.clone(e))}let r=t.morphAttributes;for(let h in r){let u=[],d=r[h];for(let m=0,g=d.length;m<g;m++)u.push(d[m].clone(e));this.morphAttributes[h]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let h=0,u=o.length;h<u;h++){let d=o[h];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Uc=new dt,cn=new Te,Ar=new Gn,Nc=new I,Cr=new I,Rr=new I,Ir=new I,Co=new I,Pr=new I,Fc=new I,Dr=new I,Pi=class extends Ze{constructor(t=new xe,e=new qr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){Pr.set(0,0,0);for(let c=0,h=r.length;c<h;c++){let u=a[c],d=r[c];u!==0&&(Co.fromBufferAttribute(d,t),o?Pr.addScaledVector(Co,u):Pr.addScaledVector(Co.sub(e),u))}e.add(Pr)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ar.copy(n.boundingSphere),Ar.applyMatrix4(r),cn.copy(t.ray).recast(t.near),!(Ar.containsPoint(cn.origin)===!1&&(cn.intersectSphere(Ar,Nc)===null||cn.origin.distanceToSquared(Nc)>(t.far-t.near)**2))&&(Uc.copy(r).invert(),cn.copy(t.ray).applyMatrix4(Uc),!(n.boundingBox!==null&&cn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,cn)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,h=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,m=r.groups,g=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,v=m.length;x<v;x++){let S=m[x],A=o[S.materialIndex],E=Math.max(S.start,g.start),p=Math.min(a.count,Math.min(S.start+S.count,g.start+g.count));for(let l=E,_=p;l<_;l+=3){let f=a.getX(l),R=a.getX(l+1),w=a.getX(l+2);i=Lr(this,A,t,n,h,u,d,f,R,w),i&&(i.faceIndex=Math.floor(l/3),i.face.materialIndex=S.materialIndex,e.push(i))}}else{let x=Math.max(0,g.start),v=Math.min(a.count,g.start+g.count);for(let S=x,A=v;S<A;S+=3){let E=a.getX(S),p=a.getX(S+1),l=a.getX(S+2);i=Lr(this,o,t,n,h,u,d,E,p,l),i&&(i.faceIndex=Math.floor(S/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let x=0,v=m.length;x<v;x++){let S=m[x],A=o[S.materialIndex],E=Math.max(S.start,g.start),p=Math.min(c.count,Math.min(S.start+S.count,g.start+g.count));for(let l=E,_=p;l<_;l+=3){let f=l,R=l+1,w=l+2;i=Lr(this,A,t,n,h,u,d,f,R,w),i&&(i.faceIndex=Math.floor(l/3),i.face.materialIndex=S.materialIndex,e.push(i))}}else{let x=Math.max(0,g.start),v=Math.min(c.count,g.start+g.count);for(let S=x,A=v;S<A;S+=3){let E=S,p=S+1,l=S+2;i=Lr(this,o,t,n,h,u,d,E,p,l),i&&(i.faceIndex=Math.floor(S/3),e.push(i))}}}};function Eu(s,t,e,n,i,r,o,a){let c;if(t.side===hs?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,t.side===un,a),c===null)return null;Dr.copy(a),Dr.applyMatrix4(s.matrixWorld);let h=e.ray.origin.distanceTo(Dr);return h<e.near||h>e.far?null:{distance:h,point:Dr.clone(),object:s}}function Lr(s,t,e,n,i,r,o,a,c,h){s.getVertexPosition(a,Cr),s.getVertexPosition(c,Rr),s.getVertexPosition(h,Ir);let u=Eu(s,t,e,n,Cr,Rr,Ir,Fc);if(u){let d=new I;Et.getBarycoord(Fc,Cr,Rr,Ir,d),i&&(u.uv=Et.getInterpolatedAttribute(i,a,c,h,d,new G)),r&&(u.uv1=Et.getInterpolatedAttribute(r,a,c,h,d,new G)),o&&(u.normal=Et.getInterpolatedAttribute(o,a,c,h,d,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let m={a,b:c,c:h,normal:new I,materialIndex:0};Et.getNormal(Cr,Rr,Ir,m.normal),u.face=m,u.barycoord=d}return u}var Di=class s extends xe{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let c=[],h=[],u=[],d=[],m=0,g=0;x("z","y","x",-1,-1,n,e,t,o,r,0),x("z","y","x",1,-1,n,e,-t,o,r,1),x("x","z","y",1,1,t,n,e,i,o,2),x("x","z","y",1,-1,t,n,-e,i,o,3),x("x","y","z",1,-1,t,e,n,i,r,4),x("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new qt(h,3)),this.setAttribute("normal",new qt(u,3)),this.setAttribute("uv",new qt(d,2));function x(v,S,A,E,p,l,_,f,R,w,M){let y=l/R,b=_/w,T=l/2,C=_/2,P=f/2,D=R+1,L=w+1,U=0,B=0,F=new I;for(let $=0;$<L;$++){let V=$*b-C;for(let W=0;W<D;W++){let H=W*y-T;F[v]=H*E,F[S]=V*p,F[A]=P,h.push(F.x,F.y,F.z),F[v]=0,F[S]=0,F[A]=f>0?1:-1,u.push(F.x,F.y,F.z),d.push(W/R),d.push(1-$/w),U+=1}}for(let $=0;$<w;$++)for(let V=0;V<R;V++){let W=m+V+D*$,H=m+V+D*($+1),X=m+(V+1)+D*($+1),Y=m+(V+1)+D*$;c.push(W,H,Y),c.push(H,X,Y),B+=6}a.addGroup(g,B,M),g+=B,m+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Jc(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Zt(s){let t={};for(let e=0;e<s.length;e++){let n=Jc(s[e]);for(let i in n)t[i]=n[i]}return t}var Ro=new I,Au=new I,Cu=new at,_e=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Ro.subVectors(n,e).cross(Au.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Ro),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Cu.getNormalMatrix(t),i=this.coplanarPoint(Ro).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}};var Li=class s extends xe{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let h=this;i=Math.floor(i),r=Math.floor(r);let u=[],d=[],m=[],g=[],x=0,v=[],S=n/2,A=0;E(),o===!1&&(t>0&&p(!0),e>0&&p(!1)),this.setIndex(u),this.setAttribute("position",new qt(d,3)),this.setAttribute("normal",new qt(m,3)),this.setAttribute("uv",new qt(g,2));function E(){let l=new I,_=new I,f=0,R=(e-t)/n;for(let w=0;w<=r;w++){let M=[],y=w/r,b=y*(e-t)+t;for(let T=0;T<=i;T++){let C=T/i,P=C*c+a,D=Math.sin(P),L=Math.cos(P);_.x=b*D,_.y=-y*n+S,_.z=b*L,d.push(_.x,_.y,_.z),l.set(D,R,L).normalize(),m.push(l.x,l.y,l.z),g.push(C,1-y),M.push(x++)}v.push(M)}for(let w=0;w<i;w++)for(let M=0;M<r;M++){let y=v[M][w],b=v[M+1][w],T=v[M+1][w+1],C=v[M][w+1];(t>0||M!==0)&&(u.push(y,b,C),f+=3),(e>0||M!==r-1)&&(u.push(b,T,C),f+=3)}h.addGroup(A,f,0),A+=f}function p(l){let _=x,f=new G,R=new I,w=0,M=l===!0?t:e,y=l===!0?1:-1;for(let T=1;T<=i;T++)d.push(0,S*y,0),m.push(0,y,0),g.push(.5,.5),x++;let b=x;for(let T=0;T<=i;T++){let P=T/i*c+a,D=Math.cos(P),L=Math.sin(P);R.x=M*L,R.y=S*y,R.z=M*D,d.push(R.x,R.y,R.z),m.push(0,y,0),f.x=D*.5+.5,f.y=L*.5*y+.5,g.push(f.x,f.y),x++}for(let T=0;T<i;T++){let C=_+T,P=b+T;l===!0?u.push(P,P+1,C):u.push(P+1,P,C),w+=3}h.addGroup(A,w,l===!0?1:2),A+=w}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var ne=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,h;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),h=n[i]-o,h<0)a=i+1;else if(h>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);let u=n[i],m=n[i+1]-u,g=(o-u)/m;return(i+g)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),c=e||(o.isVector2?new G:new I);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new I,i=[],r=[],o=[],a=new I,c=new dt;for(let g=0;g<=t;g++){let x=g/t;i[g]=this.getTangentAt(x,new I)}r[0]=new I,o[0]=new I;let h=Number.MAX_VALUE,u=Math.abs(i[0].x),d=Math.abs(i[0].y),m=Math.abs(i[0].z);u<=h&&(h=u,n.set(1,0,0)),d<=h&&(h=d,n.set(0,1,0)),m<=h&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let g=1;g<=t;g++){if(r[g]=r[g-1].clone(),o[g]=o[g-1].clone(),a.crossVectors(i[g-1],i[g]),a.length()>Number.EPSILON){a.normalize();let x=Math.acos(ot(i[g-1].dot(i[g]),-1,1));r[g].applyMatrix4(c.makeRotationAxis(a,x))}o[g].crossVectors(i[g],r[g])}if(e===!0){let g=Math.acos(ot(r[0].dot(r[t]),-1,1));g/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(g=-g);for(let x=1;x<=t;x++)r[x].applyMatrix4(c.makeRotationAxis(i[x],g*x)),o[x].crossVectors(i[x],r[x])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Xn=class extends ne{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new G){let n=e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),h=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),m=c-this.aX,g=h-this.aY;c=m*u-g*d+this.aX,h=m*d+g*u+this.aY}return n.set(c,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},$r=class extends Xn{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function ha(){let s=0,t=0,e=0,n=0;function i(r,o,a,c){s=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,h){i(o,a,h*(a-r),h*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,h,u,d){let m=(o-r)/h-(a-r)/(h+u)+(a-o)/u,g=(a-o)/u-(c-o)/(u+d)+(c-a)/d;m*=u,g*=u,i(o,a,m,g)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+n*a}}}var Ur=new I,Io=new ha,Po=new ha,Do=new ha,Jr=class extends ne{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new I){let n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let h,u;this.closed||a>0?h=i[(a-1)%r]:(Ur.subVectors(i[0],i[1]).add(i[0]),h=Ur);let d=i[a%r],m=i[(a+1)%r];if(this.closed||a+2<r?u=i[(a+2)%r]:(Ur.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=Ur),this.curveType==="centripetal"||this.curveType==="chordal"){let g=this.curveType==="chordal"?.5:.25,x=Math.pow(h.distanceToSquared(d),g),v=Math.pow(d.distanceToSquared(m),g),S=Math.pow(m.distanceToSquared(u),g);v<1e-4&&(v=1),x<1e-4&&(x=v),S<1e-4&&(S=v),Io.initNonuniformCatmullRom(h.x,d.x,m.x,u.x,x,v,S),Po.initNonuniformCatmullRom(h.y,d.y,m.y,u.y,x,v,S),Do.initNonuniformCatmullRom(h.z,d.z,m.z,u.z,x,v,S)}else this.curveType==="catmullrom"&&(Io.initCatmullRom(h.x,d.x,m.x,u.x,this.tension),Po.initCatmullRom(h.y,d.y,m.y,u.y,this.tension),Do.initCatmullRom(h.z,d.z,m.z,u.z,this.tension));return n.set(Io.calc(c),Po.calc(c),Do.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new I().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Bc(s,t,e,n,i){let r=(n-t)*.5,o=(i-e)*.5,a=s*s,c=s*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*s+e}function Ru(s,t){let e=1-s;return e*e*t}function Iu(s,t){return 2*(1-s)*s*t}function Pu(s,t){return s*s*t}function Ai(s,t,e,n){return Ru(s,t)+Iu(s,e)+Pu(s,n)}function Du(s,t){let e=1-s;return e*e*e*t}function Lu(s,t){let e=1-s;return 3*e*e*s*t}function Uu(s,t){return 3*(1-s)*s*s*t}function Nu(s,t){return s*s*s*t}function Ci(s,t,e,n,i){return Du(s,t)+Lu(s,e)+Uu(s,n)+Nu(s,i)}var Ui=class extends ne{constructor(t=new G,e=new G,n=new G,i=new G){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new G){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ci(t,i.x,r.x,o.x,a.x),Ci(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Kr=class extends ne{constructor(t=new I,e=new I,n=new I,i=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new I){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ci(t,i.x,r.x,o.x,a.x),Ci(t,i.y,r.y,o.y,a.y),Ci(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ni=class extends ne{constructor(t=new G,e=new G){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new G){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new G){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Qr=class extends ne{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Fi=class extends ne{constructor(t=new G,e=new G,n=new G){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new G){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Ai(t,i.x,r.x,o.x),Ai(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},jr=class extends ne{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Ai(t,i.x,r.x,o.x),Ai(t,i.y,r.y,o.y),Ai(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Bi=class extends ne{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new G){let n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],h=i[o],u=i[o>i.length-2?i.length-1:o+1],d=i[o>i.length-3?i.length-1:o+2];return n.set(Bc(a,c.x,h.x,u.x,d.x),Bc(a,c.y,h.y,u.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new G().fromArray(i))}return this}},Jo=Object.freeze({__proto__:null,ArcCurve:$r,CatmullRomCurve3:Jr,CubicBezierCurve:Ui,CubicBezierCurve3:Kr,EllipseCurve:Xn,LineCurve:Ni,LineCurve3:Qr,QuadraticBezierCurve:Fi,QuadraticBezierCurve3:jr,SplineCurve:Bi}),ts=class extends ne{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Jo[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],c=a.getLength(),h=c===0?0:1-o/c;return a.getPointAt(h,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let h=0;h<c.length;h++){let u=c[h];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new Jo[i.type]().fromJSON(i))}return this}},Oi=class extends ts{constructor(t){super(),this.type="Path",this.currentPoint=new G,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Ni(this.currentPoint.clone(),new G(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new Fi(this.currentPoint.clone(),new G(t,e),new G(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){let a=new Ui(this.currentPoint.clone(),new G(t,e),new G(n,i),new G(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Bi(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,c){let h=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+h,e+u,n,i,r,o,a,c),this}absellipse(t,e,n,i,r,o,a,c){let h=new Xn(t,e,n,i,r,o,a,c);if(this.curves.length>0){let d=h.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(h);let u=h.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},qn=class extends Oi{constructor(t){super(t),this.uuid=Zn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new Oi().fromJSON(i))}return this}};function Fu(s,t,e=2){let n=t&&t.length,i=n?t[0]*e:s.length,r=Kc(s,0,i,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,h;if(n&&(r=ku(s,t,r,e)),s.length>80*e){a=1/0,c=1/0;let u=-1/0,d=-1/0;for(let m=e;m<i;m+=e){let g=s[m],x=s[m+1];g<a&&(a=g),x<c&&(c=x),g>u&&(u=g),x>d&&(d=x)}h=Math.max(u-a,d-c),h=h!==0?32767/h:0}return zi(r,o,e,a,c,h,0),o}function Kc(s,t,e,n,i){let r;if(i===Qu(s,t,e,n)>0)for(let o=t;o<e;o+=n)r=Oc(o/n|0,s[o],s[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Oc(o/n|0,s[o],s[o+1],r);return r&&Yn(r,r.next)&&(ki(r),r=r.next),r}function dn(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Yn(e,e.next)||Pt(e.prev,e,e.next)===0)){if(ki(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function zi(s,t,e,n,i,r,o){if(!s)return;!o&&r&&qu(s,n,i,r);let a=s;for(;s.prev!==s.next;){let c=s.prev,h=s.next;if(r?Ou(s,n,i,r):Bu(s)){t.push(c.i,s.i,h.i),ki(s),s=h.next,a=h.next;continue}if(s=h,s===a){o?o===1?(s=zu(dn(s),t),zi(s,t,e,n,i,r,2)):o===2&&Vu(s,t,e,n,i,r):zi(dn(s),t,e,n,i,r,1);break}}}function Bu(s){let t=s.prev,e=s,n=s.next;if(Pt(t,e,n)>=0)return!1;let i=t.x,r=e.x,o=n.x,a=t.y,c=e.y,h=n.y,u=Math.min(i,r,o),d=Math.min(a,c,h),m=Math.max(i,r,o),g=Math.max(a,c,h),x=n.next;for(;x!==t;){if(x.x>=u&&x.x<=m&&x.y>=d&&x.y<=g&&Ei(i,a,r,c,o,h,x.x,x.y)&&Pt(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function Ou(s,t,e,n){let i=s.prev,r=s,o=s.next;if(Pt(i,r,o)>=0)return!1;let a=i.x,c=r.x,h=o.x,u=i.y,d=r.y,m=o.y,g=Math.min(a,c,h),x=Math.min(u,d,m),v=Math.max(a,c,h),S=Math.max(u,d,m),A=Ko(g,x,t,e,n),E=Ko(v,S,t,e,n),p=s.prevZ,l=s.nextZ;for(;p&&p.z>=A&&l&&l.z<=E;){if(p.x>=g&&p.x<=v&&p.y>=x&&p.y<=S&&p!==i&&p!==o&&Ei(a,u,c,d,h,m,p.x,p.y)&&Pt(p.prev,p,p.next)>=0||(p=p.prevZ,l.x>=g&&l.x<=v&&l.y>=x&&l.y<=S&&l!==i&&l!==o&&Ei(a,u,c,d,h,m,l.x,l.y)&&Pt(l.prev,l,l.next)>=0))return!1;l=l.nextZ}for(;p&&p.z>=A;){if(p.x>=g&&p.x<=v&&p.y>=x&&p.y<=S&&p!==i&&p!==o&&Ei(a,u,c,d,h,m,p.x,p.y)&&Pt(p.prev,p,p.next)>=0)return!1;p=p.prevZ}for(;l&&l.z<=E;){if(l.x>=g&&l.x<=v&&l.y>=x&&l.y<=S&&l!==i&&l!==o&&Ei(a,u,c,d,h,m,l.x,l.y)&&Pt(l.prev,l,l.next)>=0)return!1;l=l.nextZ}return!0}function zu(s,t){let e=s;do{let n=e.prev,i=e.next.next;!Yn(n,i)&&jc(n,e,e.next,i)&&Vi(n,i)&&Vi(i,n)&&(t.push(n.i,e.i,i.i),ki(e),ki(e.next),e=s=i),e=e.next}while(e!==s);return dn(e)}function Vu(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&$u(o,a)){let c=tl(o,a);o=dn(o,o.next),c=dn(c,c.next),zi(o,t,e,n,i,r,0),zi(c,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function ku(s,t,e,n){let i=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,c=r<o-1?t[r+1]*n:s.length,h=Kc(s,a,c,n,!1);h===h.next&&(h.steiner=!0),i.push(Zu(h))}i.sort(Hu);for(let r=0;r<i.length;r++)e=Gu(i[r],e);return e}function Hu(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){let n=(s.next.y-s.y)/(s.next.x-s.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function Gu(s,t){let e=Wu(s,t);if(!e)return t;let n=tl(e,s);return dn(n,n.next),dn(e,e.next)}function Wu(s,t){let e=t,n=s.x,i=s.y,r=-1/0,o;if(Yn(s,e))return e;do{if(Yn(s,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){let d=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,o=e.x<e.next.x?e:e.next,d===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,c=o.x,h=o.y,u=1/0;e=o;do{if(n>=e.x&&e.x>=c&&n!==e.x&&Qc(i<h?n:r,i,c,h,i<h?r:n,i,e.x,e.y)){let d=Math.abs(i-e.y)/(n-e.x);Vi(e,s)&&(d<u||d===u&&(e.x>o.x||e.x===o.x&&Xu(o,e)))&&(o=e,u=d)}e=e.next}while(e!==a);return o}function Xu(s,t){return Pt(s.prev,s,t.prev)<0&&Pt(t.next,s,s.next)<0}function qu(s,t,e,n){let i=s;do i.z===0&&(i.z=Ko(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Yu(i)}function Yu(s){let t,e=1;do{let n=s,i;s=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let h=0;h<e&&(a++,o=o.nextZ,!!o);h++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,e*=2}while(t>1);return s}function Ko(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function Zu(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Qc(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function Ei(s,t,e,n,i,r,o,a){return!(s===o&&t===a)&&Qc(s,t,e,n,i,r,o,a)}function $u(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!Ju(s,t)&&(Vi(s,t)&&Vi(t,s)&&Ku(s,t)&&(Pt(s.prev,s,t.prev)||Pt(s,t.prev,t))||Yn(s,t)&&Pt(s.prev,s,s.next)>0&&Pt(t.prev,t,t.next)>0)}function Pt(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Yn(s,t){return s.x===t.x&&s.y===t.y}function jc(s,t,e,n){let i=Fr(Pt(s,t,e)),r=Fr(Pt(s,t,n)),o=Fr(Pt(e,n,s)),a=Fr(Pt(e,n,t));return!!(i!==r&&o!==a||i===0&&Nr(s,e,t)||r===0&&Nr(s,n,t)||o===0&&Nr(e,s,n)||a===0&&Nr(e,t,n))}function Nr(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Fr(s){return s>0?1:s<0?-1:0}function Ju(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&jc(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Vi(s,t){return Pt(s.prev,s,s.next)<0?Pt(s,t,s.next)>=0&&Pt(s,s.prev,t)>=0:Pt(s,t,s.prev)<0||Pt(s,s.next,t)<0}function Ku(s,t){let e=s,n=!1,i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function tl(s,t){let e=Qo(s.i,s.x,s.y),n=Qo(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Oc(s,t,e,n){let i=Qo(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function ki(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Qo(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Qu(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var jo=class{static triangulate(t,e,n=2){return Fu(t,e,n)}},hn=class s{static area(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let n=[],i=[],r=[];zc(t),Vc(n,t);let o=t.length;e.forEach(zc);for(let c=0;c<e.length;c++)i.push(o),o+=e[c].length,Vc(n,e[c]);let a=jo.triangulate(n,i);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function zc(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Vc(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var Hi=class s extends xe{constructor(t=new qn([new G(.5,.5),new G(-.5,.5),new G(-.5,-.5),new G(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],r=[];for(let a=0,c=t.length;a<c;a++){let h=t[a];o(h)}this.setAttribute("position",new qt(i,3)),this.setAttribute("uv",new qt(r,2)),this.computeVertexNormals();function o(a){let c=[],h=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,m=e.bevelEnabled!==void 0?e.bevelEnabled:!0,g=e.bevelThickness!==void 0?e.bevelThickness:.2,x=e.bevelSize!==void 0?e.bevelSize:g-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,S=e.bevelSegments!==void 0?e.bevelSegments:3,A=e.extrudePath,E=e.UVGenerator!==void 0?e.UVGenerator:ju,p,l=!1,_,f,R,w;A&&(p=A.getSpacedPoints(u),l=!0,m=!1,_=A.computeFrenetFrames(u,!1),f=new I,R=new I,w=new I),m||(S=0,g=0,x=0,v=0);let M=a.extractPoints(h),y=M.shape,b=M.holes;if(!hn.isClockWise(y)){y=y.reverse();for(let N=0,O=b.length;N<O;N++){let z=b[N];hn.isClockWise(z)&&(b[N]=z.reverse())}}function C(N){let z=10000000000000001e-36,k=N[0];for(let J=1;J<=N.length;J++){let K=J%N.length,Z=N[K],j=Z.x-k.x,tt=Z.y-k.y,rt=j*j+tt*tt,zt=Math.max(Math.abs(Z.x),Math.abs(Z.y),Math.abs(k.x),Math.abs(k.y)),mt=z*zt*zt;if(rt<=mt){N.splice(K,1),J--;continue}k=Z}}C(y),b.forEach(C);let P=b.length,D=y;for(let N=0;N<P;N++){let O=b[N];y=y.concat(O)}function L(N,O,z){return O||console.error("THREE.ExtrudeGeometry: vec does not exist"),N.clone().addScaledVector(O,z)}let U=y.length;function B(N,O,z){let k,J,K,Z=N.x-O.x,j=N.y-O.y,tt=z.x-N.x,rt=z.y-N.y,zt=Z*Z+j*j,mt=Z*rt-j*tt;if(Math.abs(mt)>Number.EPSILON){let ht=Math.sqrt(zt),bt=Math.sqrt(tt*tt+rt*rt),wt=O.x-j/ht,Tt=O.y+Z/ht,so=z.x-rt/bt,oo=z.y+tt/bt,_i=((so-wt)*rt-(oo-Tt)*tt)/(Z*rt-j*tt);k=wt+Z*_i-N.x,J=Tt+j*_i-N.y;let xc=k*k+J*J;if(xc<=2)return new G(k,J);K=Math.sqrt(xc/2)}else{let ht=!1;Z>Number.EPSILON?tt>Number.EPSILON&&(ht=!0):Z<-Number.EPSILON?tt<-Number.EPSILON&&(ht=!0):Math.sign(j)===Math.sign(rt)&&(ht=!0),ht?(k=-j,J=Z,K=Math.sqrt(zt)):(k=Z,J=j,K=Math.sqrt(zt/2))}return new G(k/K,J/K)}let F=[];for(let N=0,O=D.length,z=O-1,k=N+1;N<O;N++,z++,k++)z===O&&(z=0),k===O&&(k=0),F[N]=B(D[N],D[z],D[k]);let $=[],V,W=F.concat();for(let N=0,O=P;N<O;N++){let z=b[N];V=[];for(let k=0,J=z.length,K=J-1,Z=k+1;k<J;k++,K++,Z++)K===J&&(K=0),Z===J&&(Z=0),V[k]=B(z[k],z[K],z[Z]);$.push(V),W=W.concat(V)}let H;if(S===0)H=hn.triangulateShape(D,b);else{let N=[],O=[];for(let z=0;z<S;z++){let k=z/S,J=g*Math.cos(k*Math.PI/2),K=x*Math.sin(k*Math.PI/2)+v;for(let Z=0,j=D.length;Z<j;Z++){let tt=L(D[Z],F[Z],K);Q(tt.x,tt.y,-J),k===0&&N.push(tt)}for(let Z=0,j=P;Z<j;Z++){let tt=b[Z];V=$[Z];let rt=[];for(let zt=0,mt=tt.length;zt<mt;zt++){let ht=L(tt[zt],V[zt],K);Q(ht.x,ht.y,-J),k===0&&rt.push(ht)}k===0&&O.push(rt)}}H=hn.triangulateShape(N,O)}let X=H.length,Y=x+v;for(let N=0;N<U;N++){let O=m?L(y[N],W[N],Y):y[N];l?(R.copy(_.normals[0]).multiplyScalar(O.x),f.copy(_.binormals[0]).multiplyScalar(O.y),w.copy(p[0]).add(R).add(f),Q(w.x,w.y,w.z)):Q(O.x,O.y,0)}for(let N=1;N<=u;N++)for(let O=0;O<U;O++){let z=m?L(y[O],W[O],Y):y[O];l?(R.copy(_.normals[N]).multiplyScalar(z.x),f.copy(_.binormals[N]).multiplyScalar(z.y),w.copy(p[N]).add(R).add(f),Q(w.x,w.y,w.z)):Q(z.x,z.y,d/u*N)}for(let N=S-1;N>=0;N--){let O=N/S,z=g*Math.cos(O*Math.PI/2),k=x*Math.sin(O*Math.PI/2)+v;for(let J=0,K=D.length;J<K;J++){let Z=L(D[J],F[J],k);Q(Z.x,Z.y,d+z)}for(let J=0,K=b.length;J<K;J++){let Z=b[J];V=$[J];for(let j=0,tt=Z.length;j<tt;j++){let rt=L(Z[j],V[j],k);l?Q(rt.x,rt.y+p[u-1].y,p[u-1].x+z):Q(rt.x,rt.y,d+z)}}}ct(),et();function ct(){let N=i.length/3;if(m){let O=0,z=U*O;for(let k=0;k<X;k++){let J=H[k];it(J[2]+z,J[1]+z,J[0]+z)}O=u+S*2,z=U*O;for(let k=0;k<X;k++){let J=H[k];it(J[0]+z,J[1]+z,J[2]+z)}}else{for(let O=0;O<X;O++){let z=H[O];it(z[2],z[1],z[0])}for(let O=0;O<X;O++){let z=H[O];it(z[0]+U*u,z[1]+U*u,z[2]+U*u)}}n.addGroup(N,i.length/3-N,0)}function et(){let N=i.length/3,O=0;nt(D,O),O+=D.length;for(let z=0,k=b.length;z<k;z++){let J=b[z];nt(J,O),O+=J.length}n.addGroup(N,i.length/3-N,1)}function nt(N,O){let z=N.length;for(;--z>=0;){let k=z,J=z-1;J<0&&(J=N.length-1);for(let K=0,Z=u+S*2;K<Z;K++){let j=U*K,tt=U*(K+1),rt=O+k+j,zt=O+J+j,mt=O+J+tt,ht=O+k+tt;lt(rt,zt,mt,ht)}}}function Q(N,O,z){c.push(N),c.push(O),c.push(z)}function it(N,O,z){yt(N),yt(O),yt(z);let k=i.length/3,J=E.generateTopUV(n,i,k-3,k-2,k-1);st(J[0]),st(J[1]),st(J[2])}function lt(N,O,z,k){yt(N),yt(O),yt(k),yt(O),yt(z),yt(k);let J=i.length/3,K=E.generateSideWallUV(n,i,J-6,J-3,J-2,J-1);st(K[0]),st(K[1]),st(K[3]),st(K[1]),st(K[2]),st(K[3])}function yt(N){i.push(c[N*3+0]),i.push(c[N*3+1]),i.push(c[N*3+2])}function st(N){r.push(N.x),r.push(N.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return tf(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Jo[i.type]().fromJSON(i)),new s(n,t.options)}},ju={generateTopUV:function(s,t,e,n,i){let r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],h=t[i*3],u=t[i*3+1];return[new G(r,o),new G(a,c),new G(h,u)]},generateSideWallUV:function(s,t,e,n,i,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],h=t[n*3],u=t[n*3+1],d=t[n*3+2],m=t[i*3],g=t[i*3+1],x=t[i*3+2],v=t[r*3],S=t[r*3+1],A=t[r*3+2];return Math.abs(a-u)<Math.abs(o-h)?[new G(o,1-c),new G(h,1-d),new G(m,1-x),new G(v,1-A)]:[new G(a,1-c),new G(u,1-d),new G(g,1-x),new G(S,1-A)]}};function tf(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}function Br(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function ef(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var pn=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},es=class extends pn{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Vo,endingEnd:Vo}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case ko:r=t,a=2*e-n;break;case Ho:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ko:o=t,c=2*n-e;break;case Ho:o=1,c=n+i[1]-i[0];break;default:o=t-1,c=e}let h=(n-e)*.5,u=this.valueSize;this._weightPrev=h/(e-a),this._weightNext=h/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,h=c-a,u=this._offsetPrev,d=this._offsetNext,m=this._weightPrev,g=this._weightNext,x=(n-e)/(i-e),v=x*x,S=v*x,A=-m*S+2*m*v-m*x,E=(1+m)*S+(-1.5-2*m)*v+(-.5+m)*x+1,p=(-1-g)*S+(1.5+g)*v+.5*x,l=g*S-g*v;for(let _=0;_!==a;++_)r[_]=A*o[u+_]+E*o[h+_]+p*o[c+_]+l*o[d+_];return r}},ns=class extends pn{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,h=c-a,u=(n-e)/(i-e),d=1-u;for(let m=0;m!==a;++m)r[m]=o[h+m]*d+o[c+m]*u;return r}},is=class extends pn{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},ie=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Br(e,this.TimeBufferType),this.values=Br(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Br(t.times,Array),values:Br(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new is(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ns(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new es(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ii:e=this.InterpolantFactoryMethodDiscrete;break;case kr:e=this.InterpolantFactoryMethodLinear;break;case zr:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ii;case this.InterpolantFactoryMethodLinear:return kr;case this.InterpolantFactoryMethodSmooth:return zr}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(i!==void 0&&ef(i))for(let a=0,c=i.length;a!==c;++a){let h=i[a];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===zr,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,h=t[a],u=t[a+1];if(h!==u&&(a!==1||h!==t[0]))if(i)c=!0;else{let d=a*n,m=d-n,g=d+n;for(let x=0;x!==n;++x){let v=e[d+x];if(v!==e[m+x]||v!==e[g+x]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let d=a*n,m=o*n;for(let g=0;g!==n;++g)e[m+g]=e[d+g]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,h=0;h!==n;++h)e[c+h]=e[a+h];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};ie.prototype.ValueTypeName="";ie.prototype.TimeBufferType=Float32Array;ie.prototype.ValueBufferType=Float32Array;ie.prototype.DefaultInterpolation=kr;var $e=class extends ie{constructor(t,e,n){super(t,e,n)}};$e.prototype.ValueTypeName="bool";$e.prototype.ValueBufferType=Array;$e.prototype.DefaultInterpolation=Ii;$e.prototype.InterpolantFactoryMethodLinear=void 0;$e.prototype.InterpolantFactoryMethodSmooth=void 0;var rs=class extends ie{constructor(t,e,n,i){super(t,e,n,i)}};rs.prototype.ValueTypeName="color";var ss=class extends ie{constructor(t,e,n,i){super(t,e,n,i)}};ss.prototype.ValueTypeName="number";var os=class extends pn{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(i-e),h=t*a;for(let u=h+a;h!==u;h+=4)Fe.slerpFlat(r,0,o,h-a,o,h,c);return r}},Gi=class extends ie{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new os(this.times,this.values,this.getValueSize(),t)}};Gi.prototype.ValueTypeName="quaternion";Gi.prototype.InterpolantFactoryMethodSmooth=void 0;var Je=class extends ie{constructor(t,e,n){super(t,e,n)}};Je.prototype.ValueTypeName="string";Je.prototype.ValueBufferType=Array;Je.prototype.DefaultInterpolation=Ii;Je.prototype.InterpolantFactoryMethodLinear=void 0;Je.prototype.InterpolantFactoryMethodSmooth=void 0;var as=class extends ie{constructor(t,e,n,i){super(t,e,n,i)}};as.prototype.ValueTypeName="vector";var cs=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,c,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return h.push(u,d),this},this.removeHandler=function(u){let d=h.indexOf(u);return d!==-1&&h.splice(d,2),this},this.getHandler=function(u){for(let d=0,m=h.length;d<m;d+=2){let g=h[d],x=h[d+1];if(g.global&&(g.lastIndex=0),g.test(u))return x}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},el=new cs,ls=class{constructor(t){this.manager=t!==void 0?t:el,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};ls.DEFAULT_MATERIAL_NAME="__DEFAULT";var ua="\\[\\]\\.:\\/",nf=new RegExp("["+ua+"]","g"),fa="[^"+ua+"]",rf="[^"+ua.replace("\\.","")+"]",sf=/((?:WC+[\/:])*)/.source.replace("WC",fa),of=/(WCOD+)?/.source.replace("WCOD",rf),af=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fa),cf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fa),lf=new RegExp("^"+sf+of+af+cf+"$"),hf=["material","materials","bones","map"],ta=class{constructor(t,e,n){let i=n||Rt.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Rt=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(nf,"")}static parseTrackName(t){let e=lf.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);hf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===h){h=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(h!==void 0){if(t[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let o=t[i];if(o===void 0){let h=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Rt.Composite=ta;Rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Rt.prototype.GetterByBindingType=[Rt.prototype._getValue_direct,Rt.prototype._getValue_array,Rt.prototype._getValue_arrayElement,Rt.prototype._getValue_toArray];Rt.prototype.SetterByBindingTypeAndVersioning=[[Rt.prototype._setValue_direct,Rt.prototype._setValue_direct_setNeedsUpdate,Rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_array,Rt.prototype._setValue_array_setNeedsUpdate,Rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_arrayElement,Rt.prototype._setValue_arrayElement_setNeedsUpdate,Rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_fromArray,Rt.prototype._setValue_fromArray_setNeedsUpdate,Rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Dg=new Float32Array(1);var kc=new I,Or=new I,zn=new I,Vn=new I,Lo=new I,uf=new I,ff=new I,Mt=class{constructor(t=new I,e=new I){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){kc.subVectors(t,this.start),Or.subVectors(this.end,this.start);let n=Or.dot(Or),r=Or.dot(kc)/n;return e&&(r=ot(r,0,1)),r}closestPointToPoint(t,e,n){let i=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(i).add(this.start)}distanceSqToLine3(t,e=uf,n=ff){let i=10000000000000001e-32,r,o,a=this.start,c=t.start,h=this.end,u=t.end;zn.subVectors(h,a),Vn.subVectors(u,c),Lo.subVectors(a,c);let d=zn.dot(zn),m=Vn.dot(Vn),g=Vn.dot(Lo);if(d<=i&&m<=i)return e.copy(a),n.copy(c),e.sub(n),e.dot(e);if(d<=i)r=0,o=g/m,o=ot(o,0,1);else{let x=zn.dot(Lo);if(m<=i)o=0,r=ot(-x/d,0,1);else{let v=zn.dot(Vn),S=d*m-v*v;S!==0?r=ot((v*g-x*m)/S,0,1):r=0,o=(v*r+g)/m,o<0?(o=0,r=ot(-x/d,0,1)):o>1&&(o=1,r=ot((v-x)/d,0,1))}}return e.copy(a).add(zn.multiplyScalar(r)),n.copy(c).add(Vn.multiplyScalar(o)),e.sub(n),e.dot(e)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");var df=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pf=`#ifdef USE_ALPHAHASH
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
#endif`,mf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_f=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vf=`#ifdef USE_AOMAP
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
#endif`,yf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Mf=`#ifdef USE_BATCHING
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
#endif`,Sf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Tf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ef=`#ifdef USE_IRIDESCENCE
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
#endif`,Af=`#ifdef USE_BUMPMAP
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
#endif`,Cf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Rf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,If=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Df=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Lf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Uf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Nf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Ff=`#define PI 3.141592653589793
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
} // validated`,Bf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Of=`vec3 transformedNormal = objectNormal;
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
#endif`,zf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xf=`#ifdef USE_ENVMAP
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
#endif`,qf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Yf=`#ifdef USE_ENVMAP
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
#endif`,Zf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$f=`#ifdef USE_ENVMAP
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
#endif`,Jf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Kf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,td=`#ifdef USE_GRADIENTMAP
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
}`,ed=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,id=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rd=`uniform bool receiveShadow;
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
#endif`,sd=`#ifdef USE_ENVMAP
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
#endif`,od=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ad=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ld=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hd=`PhysicalMaterial material;
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
#endif`,ud=`struct PhysicalMaterial {
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
}`,fd=`
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
#endif`,dd=`#if defined( RE_IndirectDiffuse )
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
#endif`,pd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,md=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_d=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Md=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Sd=`#if defined( USE_POINTS_UV )
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
#endif`,bd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Td=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ed=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ad=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cd=`#ifdef USE_MORPHTARGETS
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
#endif`,Rd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Id=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Pd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Dd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ld=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ud=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Nd=`#ifdef USE_NORMALMAP
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
#endif`,Fd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Od=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Hd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$d=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Kd=`float getShadowMask() {
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
}`,Qd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jd=`#ifdef USE_SKINNING
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
#endif`,tp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ep=`#ifdef USE_SKINNING
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
#endif`,np=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ip=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,op=`#ifdef USE_TRANSMISSION
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
#endif`,ap=`#ifdef USE_TRANSMISSION
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
#endif`,cp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,up=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,fp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dp=`uniform sampler2D t2D;
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
}`,pp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,gp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_p=`#include <common>
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
}`,vp=`#if DEPTH_PACKING == 3200
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
}`,yp=`#define DISTANCE
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
}`,Mp=`#define DISTANCE
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
}`,Sp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wp=`uniform float scale;
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
}`,Tp=`uniform vec3 diffuse;
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
}`,Ep=`#include <common>
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
}`,Ap=`uniform vec3 diffuse;
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
}`,Cp=`#define LAMBERT
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
}`,Rp=`#define LAMBERT
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
}`,Ip=`#define MATCAP
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
}`,Pp=`#define MATCAP
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
}`,Dp=`#define NORMAL
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
}`,Lp=`#define NORMAL
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
}`,Up=`#define PHONG
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
}`,Np=`#define PHONG
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
}`,Fp=`#define STANDARD
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
}`,Bp=`#define STANDARD
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
}`,Op=`#define TOON
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
}`,zp=`#define TOON
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
}`,Vp=`uniform float size;
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
}`,kp=`uniform vec3 diffuse;
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
}`,Hp=`#include <common>
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
}`,Gp=`uniform vec3 color;
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
}`,Wp=`uniform float rotation;
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
}`,Xp=`uniform vec3 diffuse;
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
}`,ft={alphahash_fragment:df,alphahash_pars_fragment:pf,alphamap_fragment:mf,alphamap_pars_fragment:gf,alphatest_fragment:xf,alphatest_pars_fragment:_f,aomap_fragment:vf,aomap_pars_fragment:yf,batching_pars_vertex:Mf,batching_vertex:Sf,begin_vertex:bf,beginnormal_vertex:wf,bsdfs:Tf,iridescence_fragment:Ef,bumpmap_pars_fragment:Af,clipping_planes_fragment:Cf,clipping_planes_pars_fragment:Rf,clipping_planes_pars_vertex:If,clipping_planes_vertex:Pf,color_fragment:Df,color_pars_fragment:Lf,color_pars_vertex:Uf,color_vertex:Nf,common:Ff,cube_uv_reflection_fragment:Bf,defaultnormal_vertex:Of,displacementmap_pars_vertex:zf,displacementmap_vertex:Vf,emissivemap_fragment:kf,emissivemap_pars_fragment:Hf,colorspace_fragment:Gf,colorspace_pars_fragment:Wf,envmap_fragment:Xf,envmap_common_pars_fragment:qf,envmap_pars_fragment:Yf,envmap_pars_vertex:Zf,envmap_physical_pars_fragment:sd,envmap_vertex:$f,fog_vertex:Jf,fog_pars_vertex:Kf,fog_fragment:Qf,fog_pars_fragment:jf,gradientmap_pars_fragment:td,lightmap_pars_fragment:ed,lights_lambert_fragment:nd,lights_lambert_pars_fragment:id,lights_pars_begin:rd,lights_toon_fragment:od,lights_toon_pars_fragment:ad,lights_phong_fragment:cd,lights_phong_pars_fragment:ld,lights_physical_fragment:hd,lights_physical_pars_fragment:ud,lights_fragment_begin:fd,lights_fragment_maps:dd,lights_fragment_end:pd,logdepthbuf_fragment:md,logdepthbuf_pars_fragment:gd,logdepthbuf_pars_vertex:xd,logdepthbuf_vertex:_d,map_fragment:vd,map_pars_fragment:yd,map_particle_fragment:Md,map_particle_pars_fragment:Sd,metalnessmap_fragment:bd,metalnessmap_pars_fragment:wd,morphinstance_vertex:Td,morphcolor_vertex:Ed,morphnormal_vertex:Ad,morphtarget_pars_vertex:Cd,morphtarget_vertex:Rd,normal_fragment_begin:Id,normal_fragment_maps:Pd,normal_pars_fragment:Dd,normal_pars_vertex:Ld,normal_vertex:Ud,normalmap_pars_fragment:Nd,clearcoat_normal_fragment_begin:Fd,clearcoat_normal_fragment_maps:Bd,clearcoat_pars_fragment:Od,iridescence_pars_fragment:zd,opaque_fragment:Vd,packing:kd,premultiplied_alpha_fragment:Hd,project_vertex:Gd,dithering_fragment:Wd,dithering_pars_fragment:Xd,roughnessmap_fragment:qd,roughnessmap_pars_fragment:Yd,shadowmap_pars_fragment:Zd,shadowmap_pars_vertex:$d,shadowmap_vertex:Jd,shadowmask_pars_fragment:Kd,skinbase_vertex:Qd,skinning_pars_vertex:jd,skinning_vertex:tp,skinnormal_vertex:ep,specularmap_fragment:np,specularmap_pars_fragment:ip,tonemapping_fragment:rp,tonemapping_pars_fragment:sp,transmission_fragment:op,transmission_pars_fragment:ap,uv_pars_fragment:cp,uv_pars_vertex:lp,uv_vertex:hp,worldpos_vertex:up,background_vert:fp,background_frag:dp,backgroundCube_vert:pp,backgroundCube_frag:mp,cube_vert:gp,cube_frag:xp,depth_vert:_p,depth_frag:vp,distanceRGBA_vert:yp,distanceRGBA_frag:Mp,equirect_vert:Sp,equirect_frag:bp,linedashed_vert:wp,linedashed_frag:Tp,meshbasic_vert:Ep,meshbasic_frag:Ap,meshlambert_vert:Cp,meshlambert_frag:Rp,meshmatcap_vert:Ip,meshmatcap_frag:Pp,meshnormal_vert:Dp,meshnormal_frag:Lp,meshphong_vert:Up,meshphong_frag:Np,meshphysical_vert:Fp,meshphysical_frag:Bp,meshtoon_vert:Op,meshtoon_frag:zp,points_vert:Vp,points_frag:kp,shadow_vert:Hp,shadow_frag:Gp,sprite_vert:Wp,sprite_frag:Xp},q={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},envMapRotation:{value:new at},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new G(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new G(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},nl={basic:{uniforms:Zt([q.common,q.specularmap,q.envmap,q.aomap,q.lightmap,q.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:Zt([q.common,q.specularmap,q.envmap,q.aomap,q.lightmap,q.emissivemap,q.bumpmap,q.normalmap,q.displacementmap,q.fog,q.lights,{emissive:{value:new Lt(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:Zt([q.common,q.specularmap,q.envmap,q.aomap,q.lightmap,q.emissivemap,q.bumpmap,q.normalmap,q.displacementmap,q.fog,q.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:Zt([q.common,q.envmap,q.aomap,q.lightmap,q.emissivemap,q.bumpmap,q.normalmap,q.displacementmap,q.roughnessmap,q.metalnessmap,q.fog,q.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:Zt([q.common,q.aomap,q.lightmap,q.emissivemap,q.bumpmap,q.normalmap,q.displacementmap,q.gradientmap,q.fog,q.lights,{emissive:{value:new Lt(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:Zt([q.common,q.bumpmap,q.normalmap,q.displacementmap,q.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:Zt([q.points,q.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:Zt([q.common,q.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:Zt([q.common,q.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:Zt([q.common,q.bumpmap,q.normalmap,q.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:Zt([q.sprite,q.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new at}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distanceRGBA:{uniforms:Zt([q.common,q.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distanceRGBA_vert,fragmentShader:ft.distanceRGBA_frag},shadow:{uniforms:Zt([q.lights,q.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};nl.physical={uniforms:Zt([nl.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new G(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new G},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new G},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};var mn=(1+Math.sqrt(5))/2,$n=1/mn,TM=[new I(-mn,$n,0),new I(mn,$n,0),new I(-$n,0,mn),new I($n,0,mn),new I(0,mn,-$n),new I(0,mn,$n),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];var EM=new Float32Array(16),AM=new Float32Array(9),CM=new Float32Array(4);var RM={[ea]:na,[ia]:oa,[ra]:aa,[Ri]:sa,[na]:ea,[oa]:ia,[aa]:ra,[sa]:Ri};var Jn=Math.pow(2,-24),Xi=Symbol("SKIP_GENERATION"),us={strategy:0,maxDepth:40,targetLeafSize:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null,[Xi]:!1};function At(s,t,e){return e.min.x=t[s],e.min.y=t[s+1],e.min.z=t[s+2],e.max.x=t[s+3],e.max.y=t[s+4],e.max.z=t[s+5],e}function qi(s){let t=-1,e=-1/0;for(let n=0;n<3;n++){let i=s[n+3]-s[n];i>e&&(e=i,t=n)}return t}function pa(s,t,e){for(let n=0;n<3;n++){let i=t[s+2*n],r=t[s+2*n+1],o=i-r,a=i+r;o<e[n]&&(e[n]=o),a>e[n+3]&&(e[n+3]=a)}}function fs(s){let t=s[3]-s[0],e=s[4]-s[1],n=s[5]-s[2];return 2*(t*e+e*n+n*t)}function pt(s,t){return t[s+15]===65535}function vt(s,t){return t[s+6]}function St(s,t){return t[s+14]}function gt(s){return s+8}function xt(s,t){let e=t[s+6];return s+e*8}function Kn(s,t){return t[s+7]}function ds(s,t,e,n,i){let r=1/0,o=1/0,a=1/0,c=-1/0,h=-1/0,u=-1/0,d=1/0,m=1/0,g=1/0,x=-1/0,v=-1/0,S=-1/0,A=s.offset||0;for(let E=(t-A)*6,p=(t+e-A)*6;E<p;E+=6){let l=s[E+0],_=s[E+1],f=l-_,R=l+_;f<r&&(r=f),R>c&&(c=R),l<d&&(d=l),l>x&&(x=l);let w=s[E+2],M=s[E+3],y=w-M,b=w+M;y<o&&(o=y),b>h&&(h=b),w<m&&(m=w),w>v&&(v=w);let T=s[E+4],C=s[E+5],P=T-C,D=T+C;P<a&&(a=P),D>u&&(u=D),T<g&&(g=T),T>S&&(S=T)}n[0]=r,n[1]=o,n[2]=a,n[3]=c,n[4]=h,n[5]=u,i[0]=d,i[1]=m,i[2]=g,i[3]=x,i[4]=v,i[5]=S}var Ae=8,ga=8,ma=new Int32Array(Ae),Ee=new Float32Array(Ae*6),Qn=new Float32Array(Ae*6),ve=new Float32Array(6),ps=new Float32Array(6),Ke=new Int32Array(ga),sl=new Float32Array(ga*6);function Zp(s,t,e,n){for(let i=0;i<3;i++){let r=t[s+2*i],o=t[s+2*i+1],a=r-o,c=r+o;a<e[n+i]&&(e[n+i]=a),c>e[n+i+3]&&(e[n+i+3]=c)}}function ol(s,t){let e=s[t+3]-s[t],n=s[t+4]-s[t+1],i=s[t+5]-s[t+2];return 2*(e*n+n*i+i*e)}function al(s,t,e,n,i,r){let o=-1,a=0;if(r===0)o=qi(t),o!==-1&&(a=(t[o]+t[o+3])/2);else if(r===1)o=qi(s),o!==-1&&(a=$p(e,n,i,o));else if(r===2){let c=fs(s),h=1.25*i,u=e.offset||0,d=(n-u)*6,m=(n+i-u)*6;for(let g=0;g<3;g++){let x=t[g],A=(t[g+3]-x)/Ae;if(i<ga){for(let E=0;E<i;E++){let p=d+E*6,l=e[p+2*g],_=E;for(;_>0&&e[Ke[_-1]+2*g]>l;)Ke[_]=Ke[_-1],_--;Ke[_]=p}for(let E=0;E<3;E++)ve[E]=1/0,ve[E+3]=-1/0,ps[E]=1/0,ps[E+3]=-1/0;for(let E=i-1;E>=0;E--)pa(Ke[E],e,ps),sl.set(ps,E*6);for(let E=0;E<i-1;E++){pa(Ke[E],e,ve);let p=e[Ke[E+1]+2*g];if(e[Ke[E]+2*g]===p)continue;let l=E+1,_=i-l,f=fs(ve)/c,R=ol(sl,l*6)/c,w=1+1.25*(f*l+R*_);w<h&&(o=g,h=w,a=p)}}else{for(let l=0;l<Ae;l++){ma[l]=0;for(let _=0;_<3;_++)Ee[l*6+_]=1/0,Ee[l*6+_+3]=-1/0}for(let l=d;l<m;l+=6){let R=~~((e[l+2*g]-x)/A);R>=Ae&&(R=Ae-1),ma[R]++,Zp(l,e,Ee,R*6)}let E=(Ae-1)*6;for(let l=0;l<6;l++)Qn[E+l]=Ee[E+l];for(let l=Ae-2;l>=0;l--){let _=l*6,f=_+6;for(let R=0;R<3;R++)Qn[_+R]=Math.min(Ee[_+R],Qn[f+R]),Qn[_+R+3]=Math.max(Ee[_+R+3],Qn[f+R+3])}let p=0;for(let l=0;l<Ae-1;l++){let _=l*6,f=ma[l];if(f!==0)for(let b=0;b<3;b++)p===0?(ve[b]=Ee[_+b],ve[b+3]=Ee[_+b+3]):(ve[b]=Math.min(ve[b],Ee[_+b]),ve[b+3]=Math.max(ve[b+3],Ee[_+b+3]));p+=f;let R=0,w=0;p!==0&&(R=fs(ve)/c);let M=i-p;M!==0&&(w=ol(Qn,_+6)/c);let y=1+1.25*(R*p+w*M);y<h&&(o=g,h=y,a=x+A+l*A)}}}}else console.warn(`BVH: Invalid build strategy value ${r} used.`);return{axis:o,pos:a}}function $p(s,t,e,n){let i=0,r=s.offset;for(let o=t,a=t+e;o<a;o++)i+=s[(o-r)*6+n*2];return i/e}function cl(s,t,e,n,i,r){let o=n,a=n+i-1,c=r.pos,h=r.axis*2,u=e.offset||0;for(;;){for(;o<=a&&e[(o-u)*6+h]<c;)o++;for(;o<=a&&e[(a-u)*6+h]>=c;)a--;if(o<a){for(let d=0;d<t;d++){let m=s[o*t+d];s[o*t+d]=s[a*t+d],s[a*t+d]=m}for(let d=0;d<6;d++){let m=o-u,g=a-u,x=e[m*6+d];e[m*6+d]=e[g*6+d],e[g*6+d]=x}o++,a--}else return o}}var Jp=Math.pow(2,32),jn=new Float32Array(6),ms=new Float32Array(6);function Kp(s,t,e,n,i,r){let{maxDepth:o,verbose:a,targetLeafSize:c,_strictLeafSize:h=1/0,strategy:u,onProgress:d,useSharedArrayBuffer:m=!1}=i,g=s.primitiveBuffer,x=s.primitiveBufferStride,v=m?SharedArrayBuffer:ArrayBuffer,S=new v(32*Math.max(1,2*Math.ceil(n)-1)),A=new Float32Array(S),E=new Uint32Array(S),p=new Uint16Array(S),l=0,_=!1;return ds(t,e,n,jn,ms),w(e,n,0),S.slice(0,l*32);function f(M){d&&d((M-r.offset)/r.count)}function R(M,y,b){let T=M*2;E[M+6]=y,p[T+14]=b,p[T+15]=65535,f(y+b)}function w(M,y,b){let T=l++,C=T*8;A.set(jn,C),!_&&b>=o&&(_=!0,a&&console.warn(`BVH: Max depth of ${o} reached when generating BVH. Consider increasing maxDepth.`));let P=y>h;if(y<=c&&!P||b>=o){R(C,M,y);return}let D=al(jn,ms,t,M,y,u),L=D.axis===-1?-1:cl(g,x,t,M,y,D);if(D.axis===-1||L===M||L===M+y){if(!P){R(C,M,y);return}D.axis=Math.max(0,qi(jn)),L=M+Math.max(1,Math.floor(y/2))}E[C+7]=D.axis;let U=L-M;ds(t,M,U,jn,ms),w(M,U,b+1);let B=l-T;if(B>Jp)throw new Error("MeshBVH: Cannot store relative child node offset greater than 32 bits.");E[C+6]=B;let F=y-U;ds(t,L,F,jn,ms),w(L,F,b+1)}}function ll(s,t){let e=s.getRootRanges(t.range),n=e[0],i=e[e.length-1],r={offset:n.offset,count:i.offset+i.count-n.offset},o=new Float32Array(6*r.count);o.offset=r.offset,s.computePrimitiveBounds(r.offset,r.count,o),s._roots=e.map(a=>Kp(s,o,a.offset,a.count,t,r))}var Qe=class{constructor(t){this._getNewPrimitive=t,this._primitives=[]}getPrimitive(){let t=this._primitives;return t.length===0?this._getNewPrimitive():t.pop()}releasePrimitive(t){this._primitives.push(t)}};var xa=class{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;let t=[],e=null;this.setBuffer=n=>{e&&t.push(e),e=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{e=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,t.length!==0&&this.setBuffer(t.pop())}}},ut=new xa;var je,ei,ti=[],gs=new Qe(()=>new It);function hl(s,t,e,n,i,r){je=gs.getPrimitive(),ei=gs.getPrimitive(),ti.push(je,ei),ut.setBuffer(s._roots[t]);let o=_a(0,s.geometry,e,n,i,r);ut.clearBuffer(),gs.releasePrimitive(je),gs.releasePrimitive(ei),ti.pop(),ti.pop();let a=ti.length;return a>0&&(ei=ti[a-1],je=ti[a-2]),o}function _a(s,t,e,n,i=null,r=0,o=0){let{float32Array:a,uint16Array:c,uint32Array:h}=ut,u=s*2;if(pt(u,c)){let m=vt(s,h),g=St(u,c);return At(s,a,je),n(m,g,!1,o,r+s/8,je)}else{let y=function(T){let{uint16Array:C,uint32Array:P}=ut,D=T*2;for(;!pt(D,C);)T=gt(T),D=T*2;return vt(T,P)},b=function(T){let{uint16Array:C,uint32Array:P}=ut,D=T*2;for(;!pt(D,C);)T=xt(T,P),D=T*2;return vt(T,P)+St(D,C)},m=gt(s),g=xt(s,h),x=m,v=g,S,A,E,p;if(i&&(E=je,p=ei,At(x,a,E),At(v,a,p),S=i(E),A=i(p),A<S)){x=g,v=m;let T=S;S=A,A=T,E=p}E||(E=je,At(x,a,E));let l=pt(x*2,c),_=e(E,l,S,o+1,r+x/8),f;if(_===2){let T=y(x),P=b(x)-T;f=n(T,P,!0,o+1,r+x/8,E)}else f=_&&_a(x,t,e,n,i,r,o+1);if(f)return!0;p=ei,At(v,a,p);let R=pt(v*2,c),w=e(p,R,A,o+1,r+v/8),M;if(w===2){let T=y(v),P=b(v)-T;M=n(T,P,!0,o+1,r+v/8,p)}else M=w&&_a(v,t,e,n,i,r,o+1);return!!M}}var Yi=new ut.constructor,xs=new ut.constructor,tn=new Qe(()=>new It),ni=new It,ii=new It,ya=new It,Ma=new It,Sa=!1;function ul(s,t,e,n){if(Sa)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");Sa=!0;let i=s._roots,r=t._roots,o,a=0,c=0,h=new dt().copy(e).invert();for(let u=0,d=i.length;u<d;u++){Yi.setBuffer(i[u]),c=0;let m=tn.getPrimitive();At(0,Yi.float32Array,m),m.applyMatrix4(h);for(let g=0,x=r.length;g<x&&(xs.setBuffer(r[g]),o=ye(0,0,e,h,n,a,c,0,0,m),xs.clearBuffer(),c+=r[g].byteLength/32,!o);g++);if(tn.releasePrimitive(m),Yi.clearBuffer(),a+=i[u].byteLength/32,o)break}return Sa=!1,o}function ye(s,t,e,n,i,r=0,o=0,a=0,c=0,h=null,u=!1){let d,m;u?(d=xs,m=Yi):(d=Yi,m=xs);let g=d.float32Array,x=d.uint32Array,v=d.uint16Array,S=m.float32Array,A=m.uint32Array,E=m.uint16Array,p=s*2,l=t*2,_=pt(p,v),f=pt(l,E),R=!1;if(f&&_)u?R=i(vt(t,A),St(t*2,E),vt(s,x),St(s*2,v),c,o+t/8,a,r+s/8):R=i(vt(s,x),St(s*2,v),vt(t,A),St(t*2,E),a,r+s/8,c,o+t/8);else if(f){let w=tn.getPrimitive();At(t,S,w),w.applyMatrix4(e);let M=gt(s),y=xt(s,x);At(M,g,ni),At(y,g,ii);let b=w.intersectsBox(ni),T=w.intersectsBox(ii);R=b&&ye(t,M,n,e,i,o,r,c,a+1,w,!u)||T&&ye(t,y,n,e,i,o,r,c,a+1,w,!u),tn.releasePrimitive(w)}else{let w=gt(t),M=xt(t,A);At(w,S,ya),At(M,S,Ma);let y=h.intersectsBox(ya),b=h.intersectsBox(Ma);if(y&&b)R=ye(s,w,e,n,i,r,o,a,c+1,h,u)||ye(s,M,e,n,i,r,o,a,c+1,h,u);else if(y)if(_)R=ye(s,w,e,n,i,r,o,a,c+1,h,u);else{let T=tn.getPrimitive();T.copy(ya).applyMatrix4(e);let C=gt(s),P=xt(s,x);At(C,g,ni),At(P,g,ii);let D=T.intersectsBox(ni),L=T.intersectsBox(ii);R=D&&ye(w,C,n,e,i,o,r,c,a+1,T,!u)||L&&ye(w,P,n,e,i,o,r,c,a+1,T,!u),tn.releasePrimitive(T)}else if(b)if(_)R=ye(s,M,e,n,i,r,o,a,c+1,h,u);else{let T=tn.getPrimitive();T.copy(Ma).applyMatrix4(e);let C=gt(s),P=xt(s,x);At(C,g,ni),At(P,g,ii);let D=T.intersectsBox(ni),L=T.intersectsBox(ii);R=D&&ye(M,C,n,e,i,o,r,c,a+1,T,!u)||L&&ye(M,P,n,e,i,o,r,c,a+1,T,!u),tn.releasePrimitive(T)}}return R}var _s=new class{constructor(){let s=null,t=null,e=null,n=!1;this.root=null,this.buffer=null,this.uint32Array=null,this.uint16Array=null,this.setBVH=(r,o)=>{if(n)throw new Error("BVHTraversalHelper: cannot call setBVH during an active traversal.");this.root=o,this.buffer=s=r._roots[o],this.uint16Array=e=new Uint16Array(s),this.uint32Array=t=new Uint32Array(s)},this.reset=()=>{this.root=null,this.buffer=s=null,this.uint16Array=e=null,this.uint32Array=t=null},this.getRangeStart=r=>{let o=r*2;for(;!pt(o,e);)r=gt(r),o=r*2;return vt(r,t)},this.getRangeEnd=r=>{let o=r*2;for(;!pt(o,e);)r=xt(r,t),o=r*2;return vt(r,t)+St(o,e)};let i=(r,o,a)=>{let c=o*2,h=pt(c,e);if(!r(a,h,o)&&!h){let d=gt(o),m=xt(o,t);i(r,d,a+1),i(r,m,a+1)}};this.traverseBuffer=r=>{if(n)throw new Error("BVHTraversalHelper: cannot start a traversal during an active traversal.");n=!0;try{i(r,0,0)}finally{n=!1}},this.traverse=r=>{this.traverseBuffer((o,a,c)=>{if(a){let h=c*2,u=t[c+6],d=e[h+14];return r(o,a,new Float32Array(s,c*4,6),u,d)}else{let h=Kn(c,t);return r(o,a,new Float32Array(s,c*4,6),h)}})}}};var fl=new It,ri=new Float32Array(6),vs=class{constructor(){this._roots=null,this.primitiveBuffer=null,this.primitiveBufferStride=null}init(t){t={...us,...t},"maxLeafSize"in t&&(console.warn('BVH: "maxLeafSize" option has been deprecated. Use "targetLeafSize", instead.'),t={...t,targetLeafSize:t.maxLeafSize}),ll(this,t)}getRootRanges(){throw new Error("BVH: getRootRanges() not implemented")}writePrimitiveBounds(){throw new Error("BVH: writePrimitiveBounds() not implemented")}writePrimitiveRangeBounds(t,e,n,i){let r=1/0,o=1/0,a=1/0,c=-1/0,h=-1/0,u=-1/0;for(let d=t,m=t+e;d<m;d++){this.writePrimitiveBounds(d,ri,0);let[g,x,v,S,A,E]=ri;g<r&&(r=g),S>c&&(c=S),x<o&&(o=x),A>h&&(h=A),v<a&&(a=v),E>u&&(u=E)}return n[i+0]=r,n[i+1]=o,n[i+2]=a,n[i+3]=c,n[i+4]=h,n[i+5]=u,n}computePrimitiveBounds(t,e,n){let i=n.offset||0;for(let r=t,o=t+e;r<o;r++){this.writePrimitiveBounds(r,ri,0);let[a,c,h,u,d,m]=ri,g=(a+u)/2,x=(c+d)/2,v=(h+m)/2,S=(u-a)/2,A=(d-c)/2,E=(m-h)/2,p=(r-i)*6;n[p+0]=g,n[p+1]=S+(Math.abs(g)+S)*Jn,n[p+2]=x,n[p+3]=A+(Math.abs(x)+A)*Jn,n[p+4]=v,n[p+5]=E+(Math.abs(v)+E)*Jn}return n}shiftPrimitiveOffsets(t){let e=this._indirectBuffer;if(e)for(let n=0,i=e.length;n<i;n++)e[n]+=t;else{let n=this._roots;for(let i=0;i<n.length;i++){let r=n[i],o=new Uint32Array(r),a=new Uint16Array(r),c=r.byteLength/32;for(let h=0;h<c;h++){let u=8*h,d=2*u;pt(d,a)&&(o[u+6]+=t)}}}}traverse(t,e=0){_s.setBVH(this,e),_s.traverse(t),_s.reset()}refit(){let t=this._roots;for(let e=0,n=t.length;e<n;e++){let i=t[e],r=new Uint32Array(i),o=new Uint16Array(i),a=new Float32Array(i),c=i.byteLength/32;for(let h=c-1;h>=0;h--){let u=h*8,d=u*2;if(pt(d,o)){let g=vt(u,r),x=St(d,o);this.writePrimitiveRangeBounds(g,x,ri,0),a.set(ri,u)}else{let g=gt(u),x=xt(u,r);for(let v=0;v<3;v++){let S=a[g+v],A=a[g+v+3],E=a[x+v],p=a[x+v+3];a[u+v]=S<E?S:E,a[u+v+3]=A>p?A:p}}}}}getBoundingBox(t){return t.makeEmpty(),this._roots.forEach(n=>{At(0,new Float32Array(n),fl),t.union(fl)}),t}shapecast(t){let{boundsTraverseOrder:e,intersectsBounds:n,intersectsRange:i,intersectsPrimitive:r,scratchPrimitive:o,iterate:a}=t;if(i&&r){let d=i;i=(m,g,x,v,S)=>d(m,g,x,v,S)?!0:a(m,g,this,r,x,v,o)}else i||(r?i=(d,m,g,x)=>a(d,m,this,r,g,x,o):i=(d,m,g)=>g);let c=!1,h=0,u=this._roots;for(let d=0,m=u.length;d<m;d++){let g=u[d];if(c=hl(this,d,n,i,e,h),c)break;h+=g.byteLength/32}return c}bvhcast(t,e,n){let{intersectsRanges:i}=n;return ul(this,t,e,i)}};function dl(){return typeof SharedArrayBuffer<"u"}function ba(s){return s.index?s.index.count:s.attributes.position.count}function en(s){return ba(s)/3}function jp(s,t=ArrayBuffer){return s>65535?new Uint32Array(new t(4*s)):new Uint16Array(new t(2*s))}function pl(s,t){if(!s.index){let e=s.attributes.position.count,n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,i=jp(e,n);s.setIndex(new Vt(i,1));for(let r=0;r<e;r++)i[r]=r}}function tm(s,t,e){let n=ba(s)/e,i=t||s.drawRange,r=i.start/e,o=(i.start+i.count)/e,a=Math.max(0,r),c=Math.min(n,o)-a;return{offset:Math.floor(a),count:Math.floor(c)}}function em(s,t){return s.groups.map(e=>({offset:e.start/t,count:e.count/t}))}function wa(s,t,e){let n=tm(s,t,e),i=em(s,e);if(!i.length)return[n];let r=[],o=n.offset,a=n.offset+n.count,c=ba(s)/e,h=[];for(let m of i){let{offset:g,count:x}=m,v=g,S=isFinite(x)?x:c-g,A=g+S;v<a&&A>o&&(h.push({pos:Math.max(o,v),isStart:!0}),h.push({pos:Math.min(a,A),isStart:!1}))}h.sort((m,g)=>m.pos!==g.pos?m.pos-g.pos:m.type==="end"?-1:1);let u=0,d=null;for(let m of h){let g=m.pos;u!==0&&g!==d&&r.push({offset:d,count:g-d}),u+=m.isStart?1:-1,d=g}return r}function nm(s,t){let e=s[s.length-1],n=e.offset+e.count>2**16,i=s.reduce((h,u)=>h+u.count,0),r=n?4:2,o=t?new SharedArrayBuffer(i*r):new ArrayBuffer(i*r),a=n?new Uint32Array(o):new Uint16Array(o),c=0;for(let h=0;h<s.length;h++){let{offset:u,count:d}=s[h];for(let m=0;m<d;m++)a[c+m]=u+m;c+=d}return a}var ys=class extends vs{get indirect(){return!!this._indirectBuffer}get primitiveStride(){return null}get primitiveBufferStride(){return this.indirect?1:this.primitiveStride}set primitiveBufferStride(t){}get primitiveBuffer(){return this.indirect?this._indirectBuffer:this.geometry.index.array}set primitiveBuffer(t){}constructor(t,e={}){if(t.isBufferGeometry){if(t.index&&t.index.isInterleavedBufferAttribute)throw new Error("BVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("BVH: Only BufferGeometries are supported.");if(e.useSharedArrayBuffer&&!dl())throw new Error("BVH: SharedArrayBuffer is not available.");super(),this.geometry=t,this.resolvePrimitiveIndex=e.indirect?n=>this._indirectBuffer[n]:n=>n,this.primitiveBuffer=null,this.primitiveBufferStride=null,this._indirectBuffer=null,e={...us,...e},e[Xi]||this.init(e)}init(t){let{geometry:e,primitiveStride:n}=this;if(t.indirect){let i=wa(e,t.range,n),r=nm(i,t.useSharedArrayBuffer);this._indirectBuffer=r}else pl(e,t);super.init(t),!e.boundingBox&&t.setBoundingBox&&(e.boundingBox=this.getBoundingBox(new It))}getRootRanges(t){return this.indirect?[{offset:0,count:this._indirectBuffer.length}]:wa(this.geometry,t,this.primitiveStride)}raycastObject3D(){throw new Error("BVH: raycastObject3D() not implemented")}};var se=class{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(t,e){let n=1/0,i=-1/0;for(let r=0,o=t.length;r<o;r++){let c=t[r][e];n=c<n?c:n,i=c>i?c:i}this.min=n,this.max=i}setFromPoints(t,e){let n=1/0,i=-1/0;for(let r=0,o=e.length;r<o;r++){let a=e[r],c=t.dot(a);n=c<n?c:n,i=c>i?c:i}this.min=n,this.max=i}isSeparated(t){return this.min>t.max||t.min>this.max}};se.prototype.setFromBox=(function(){let s=new I;return function(e,n){let i=n.min,r=n.max,o=1/0,a=-1/0;for(let c=0;c<=1;c++)for(let h=0;h<=1;h++)for(let u=0;u<=1;u++){s.x=i.x*c+r.x*(1-c),s.y=i.y*h+r.y*(1-h),s.z=i.z*u+r.z*(1-u);let d=e.dot(s);o=Math.min(d,o),a=Math.max(d,a)}this.min=o,this.max=a}})();var im=(function(){let s=new I,t=new I,e=new I;return function(i,r,o){let a=i.start,c=s,h=r.start,u=t;e.subVectors(a,h),s.subVectors(i.end,i.start),t.subVectors(r.end,r.start);let d=e.dot(u),m=u.dot(c),g=u.dot(u),x=e.dot(c),S=c.dot(c)*g-m*m,A,E;S!==0?A=(d*m-x*g)/S:A=0,E=(d+A*m)/g,o.x=A,o.y=E}})(),Zi=(function(){let s=new G,t=new I,e=new I;return function(i,r,o,a){im(i,r,s);let c=s.x,h=s.y;if(c>=0&&c<=1&&h>=0&&h<=1){i.at(c,o),r.at(h,a);return}else if(c>=0&&c<=1){h<0?r.at(0,a):r.at(1,a),i.closestPointToPoint(a,!0,o);return}else if(h>=0&&h<=1){c<0?i.at(0,o):i.at(1,o),r.closestPointToPoint(o,!0,a);return}else{let u;c<0?u=i.start:u=i.end;let d;h<0?d=r.start:d=r.end;let m=t,g=e;if(i.closestPointToPoint(d,!0,t),r.closestPointToPoint(u,!0,e),m.distanceToSquared(d)<=g.distanceToSquared(u)){o.copy(m),a.copy(d);return}else{o.copy(u),a.copy(g);return}}}})(),ml=(function(){let s=new I,t=new I,e=new _e,n=new Mt;return function(r,o){let{radius:a,center:c}=r,{a:h,b:u,c:d}=o;if(n.start=h,n.end=u,n.closestPointToPoint(c,!0,s).distanceTo(c)<=a||(n.start=h,n.end=d,n.closestPointToPoint(c,!0,s).distanceTo(c)<=a)||(n.start=u,n.end=d,n.closestPointToPoint(c,!0,s).distanceTo(c)<=a))return!0;let v=o.getPlane(e);if(Math.abs(v.distanceToPoint(c))<=a){let A=v.projectPoint(c,t);if(o.containsPoint(A))return!0}return!1}})();var rm=["x","y","z"],Be=1e-15,gl=Be*Be;function de(s){return Math.abs(s)<Be}var Ut=class extends Et{constructor(...t){super(...t),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new I),this.satBounds=new Array(4).fill().map(()=>new se),this.points=[this.a,this.b,this.c],this.plane=new _e,this.isDegenerateIntoSegment=!1,this.isDegenerateIntoPoint=!1,this.degenerateSegment=new Mt,this.needsUpdate=!0}intersectsSphere(t){return ml(t,this)}update(){let t=this.a,e=this.b,n=this.c,i=this.points,r=this.satAxes,o=this.satBounds,a=r[0],c=o[0];this.getNormal(a),c.setFromPoints(a,i);let h=r[1],u=o[1];h.subVectors(t,e),u.setFromPoints(h,i);let d=r[2],m=o[2];d.subVectors(e,n),m.setFromPoints(d,i);let g=r[3],x=o[3];g.subVectors(n,t),x.setFromPoints(g,i);let v=h.length(),S=d.length(),A=g.length();this.isDegenerateIntoPoint=!1,this.isDegenerateIntoSegment=!1,v<Be?S<Be||A<Be?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(t),this.degenerateSegment.end.copy(n)):S<Be?A<Be?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(e),this.degenerateSegment.end.copy(t)):A<Be&&(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(n),this.degenerateSegment.end.copy(e)),this.plane.setFromNormalAndCoplanarPoint(a,t),this.needsUpdate=!1}};Ut.prototype.closestPointToSegment=(function(){let s=new I,t=new I,e=new Mt;return function(i,r=null,o=null){this.needsUpdate&&this.update();let{start:a,end:c}=i,h=this.points,u,d=1/0,m=this.plane.distanceToPoint(a),g=this.plane.distanceToPoint(c);if(m*g<0&&this.plane.intersectLine(i,s)!==null&&this.containsPoint(s))return r&&r.copy(s),o&&o.copy(s),0;for(let x=0;x<3;x++){let v=(x+1)%3;e.start.copy(h[x]),e.end.copy(h[v]),Zi(e,i,s,t),u=s.distanceToSquared(t),u<d&&(d=u,r&&r.copy(s),o&&o.copy(t))}return this.closestPointToPoint(a,s),u=a.distanceToSquared(s),u<d&&(d=u,r&&r.copy(s),o&&o.copy(a)),this.closestPointToPoint(c,s),u=c.distanceToSquared(s),u<d&&(d=u,r&&r.copy(s),o&&o.copy(c)),Math.sqrt(d)}})();Ut.prototype.intersectsTriangle=(function(){let s=new Ut,t=new se,e=new se,n=new I,i=new I,r=new I,o=new I,a=new Mt,c=new Mt,h=new I,u=new G,d=new G;function m(p,l,_,f){let R=n;!p.isDegenerateIntoPoint&&!p.isDegenerateIntoSegment?R.copy(p.plane.normal):R.copy(l.plane.normal);let w=p.satBounds,M=p.satAxes;for(let T=1;T<4;T++){let C=w[T],P=M[T];if(t.setFromPoints(P,l.points),C.isSeparated(t)||(o.copy(R).cross(P),t.setFromPoints(o,p.points),e.setFromPoints(o,l.points),t.isSeparated(e)))return!1}let y=l.satBounds,b=l.satAxes;for(let T=1;T<4;T++){let C=y[T],P=b[T];if(t.setFromPoints(P,p.points),C.isSeparated(t)||(o.crossVectors(R,P),t.setFromPoints(o,p.points),e.setFromPoints(o,l.points),t.isSeparated(e)))return!1}return _&&(f||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),_.start.set(0,0,0),_.end.set(0,0,0)),!0}function g(p,l,_,f,R,w,M,y,b,T,C){let P=M/(M-y);T.x=f+(R-f)*P,C.start.subVectors(l,p).multiplyScalar(P).add(p),P=M/(M-b),T.y=f+(w-f)*P,C.end.subVectors(_,p).multiplyScalar(P).add(p)}function x(p,l,_,f,R,w,M,y,b,T,C){if(R>0)g(p.c,p.a,p.b,f,l,_,b,M,y,T,C);else if(w>0)g(p.b,p.a,p.c,_,l,f,y,M,b,T,C);else if(y*b>0||M!=0)g(p.a,p.b,p.c,l,_,f,M,y,b,T,C);else if(y!=0)g(p.b,p.a,p.c,_,l,f,y,M,b,T,C);else if(b!=0)g(p.c,p.a,p.b,f,l,_,b,M,y,T,C);else return!0;return!1}function v(p,l,_,f){let R=l.degenerateSegment,w=p.plane.distanceToPoint(R.start),M=p.plane.distanceToPoint(R.end);return de(w)?de(M)?m(p,l,_,f):(_&&(_.start.copy(R.start),_.end.copy(R.start)),p.containsPoint(R.start)):de(M)?(_&&(_.start.copy(R.end),_.end.copy(R.end)),p.containsPoint(R.end)):p.plane.intersectLine(R,n)!=null?(_&&(_.start.copy(n),_.end.copy(n)),p.containsPoint(n)):!1}function S(p,l,_){let f=l.a;return de(p.plane.distanceToPoint(f))&&p.containsPoint(f)?(_&&(_.start.copy(f),_.end.copy(f)),!0):!1}function A(p,l,_){let f=p.degenerateSegment,R=l.a;return f.closestPointToPoint(R,!0,n),R.distanceToSquared(n)<gl?(_&&(_.start.copy(R),_.end.copy(R)),!0):!1}function E(p,l,_,f){if(p.isDegenerateIntoSegment)if(l.isDegenerateIntoSegment){let R=p.degenerateSegment,w=l.degenerateSegment,M=i,y=r;R.delta(M),w.delta(y);let b=n.subVectors(w.start,R.start),T=M.x*y.y-M.y*y.x;if(de(T))return!1;let C=(b.x*y.y-b.y*y.x)/T,P=-(M.x*b.y-M.y*b.x)/T;if(C<0||C>1||P<0||P>1)return!1;let D=R.start.z+M.z*C,L=w.start.z+y.z*P;return de(D-L)?(_&&(_.start.copy(R.start).addScaledVector(M,C),_.end.copy(R.start).addScaledVector(M,C)),!0):!1}else return l.isDegenerateIntoPoint?A(p,l,_):v(l,p,_,f);else{if(p.isDegenerateIntoPoint)return l.isDegenerateIntoPoint?l.a.distanceToSquared(p.a)<gl?(_&&(_.start.copy(p.a),_.end.copy(p.a)),!0):!1:l.isDegenerateIntoSegment?A(l,p,_):S(l,p,_);if(l.isDegenerateIntoPoint)return S(p,l,_);if(l.isDegenerateIntoSegment)return v(p,l,_,f)}}return function(l,_=null,f=!1){this.needsUpdate&&this.update(),l.isExtendedTriangle?l.needsUpdate&&l.update():(s.copy(l),s.update(),l=s);let R=E(this,l,_,f);if(R!==void 0)return R;let w=this.plane,M=l.plane,y=M.distanceToPoint(this.a),b=M.distanceToPoint(this.b),T=M.distanceToPoint(this.c);de(y)&&(y=0),de(b)&&(b=0),de(T)&&(T=0);let C=y*b,P=y*T;if(C>0&&P>0)return!1;let D=w.distanceToPoint(l.a),L=w.distanceToPoint(l.b),U=w.distanceToPoint(l.c);de(D)&&(D=0),de(L)&&(L=0),de(U)&&(U=0);let B=D*L,F=D*U;if(B>0&&F>0)return!1;i.copy(w.normal),r.copy(M.normal);let $=i.cross(r),V=0,W=Math.abs($.x),H=Math.abs($.y);H>W&&(W=H,V=1),Math.abs($.z)>W&&(V=2);let Y=rm[V],ct=this.a[Y],et=this.b[Y],nt=this.c[Y],Q=l.a[Y],it=l.b[Y],lt=l.c[Y];if(x(this,ct,et,nt,C,P,y,b,T,u,a))return m(this,l,_,f);if(x(l,Q,it,lt,B,F,D,L,U,d,c))return m(this,l,_,f);if(u.y<u.x){let yt=u.y;u.y=u.x,u.x=yt,h.copy(a.start),a.start.copy(a.end),a.end.copy(h)}if(d.y<d.x){let yt=d.y;d.y=d.x,d.x=yt,h.copy(c.start),c.start.copy(c.end),c.end.copy(h)}return u.y<d.x||d.y<u.x?!1:(_&&(d.x>u.x?_.start.copy(c.start):_.start.copy(a.start),d.y<u.y?_.end.copy(c.end):_.end.copy(a.end)),!0)}})();Ut.prototype.distanceToPoint=(function(){let s=new I;return function(e){return this.closestPointToPoint(e,s),e.distanceTo(s)}})();Ut.prototype.distanceToTriangle=(function(){let s=new I,t=new I,e=["a","b","c"],n=new Mt,i=new Mt;return function(o,a=null,c=null){let h=a||c?n:null;if(this.intersectsTriangle(o,h,!0))return(a||c)&&(a&&h.getCenter(a),c&&h.getCenter(c)),0;let u=1/0;for(let d=0;d<3;d++){let m,g=e[d],x=o[g];this.closestPointToPoint(x,s),m=x.distanceToSquared(s),m<u&&(u=m,a&&a.copy(s),c&&c.copy(x));let v=this[g];o.closestPointToPoint(v,s),m=v.distanceToSquared(s),m<u&&(u=m,a&&a.copy(v),c&&c.copy(s))}for(let d=0;d<3;d++){let m=e[d],g=e[(d+1)%3];n.set(this[m],this[g]);for(let x=0;x<3;x++){let v=e[x],S=e[(x+1)%3];i.set(o[v],o[S]),Zi(n,i,s,t);let A=s.distanceToSquared(t);A<u&&(u=A,a&&a.copy(s),c&&c.copy(t))}}return Math.sqrt(u)}})();var Nt=class{constructor(t,e,n){this.isOrientedBox=!0,this.min=new I,this.max=new I,this.matrix=new dt,this.invMatrix=new dt,this.points=new Array(8).fill().map(()=>new I),this.satAxes=new Array(3).fill().map(()=>new I),this.satBounds=new Array(3).fill().map(()=>new se),this.alignedSatBounds=new Array(3).fill().map(()=>new se),this.needsUpdate=!1,t&&this.min.copy(t),e&&this.max.copy(e),n&&this.matrix.copy(n)}set(t,e,n){this.min.copy(t),this.max.copy(e),this.matrix.copy(n),this.needsUpdate=!0}copy(t){this.min.copy(t.min),this.max.copy(t.max),this.matrix.copy(t.matrix),this.needsUpdate=!0}};Nt.prototype.update=(function(){return function(){let t=this.matrix,e=this.min,n=this.max,i=this.points;for(let h=0;h<=1;h++)for(let u=0;u<=1;u++)for(let d=0;d<=1;d++){let m=1*h|2*u|4*d,g=i[m];g.x=h?n.x:e.x,g.y=u?n.y:e.y,g.z=d?n.z:e.z,g.applyMatrix4(t)}let r=this.satBounds,o=this.satAxes,a=i[0];for(let h=0;h<3;h++){let u=o[h],d=r[h],m=1<<h,g=i[m];u.subVectors(a,g),d.setFromPoints(u,i)}let c=this.alignedSatBounds;c[0].setFromPointsField(i,"x"),c[1].setFromPointsField(i,"y"),c[2].setFromPointsField(i,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}})();Nt.prototype.intersectsBox=(function(){let s=new se;return function(e){this.needsUpdate&&this.update();let n=e.min,i=e.max,r=this.satBounds,o=this.satAxes,a=this.alignedSatBounds;if(s.min=n.x,s.max=i.x,a[0].isSeparated(s)||(s.min=n.y,s.max=i.y,a[1].isSeparated(s))||(s.min=n.z,s.max=i.z,a[2].isSeparated(s)))return!1;for(let c=0;c<3;c++){let h=o[c],u=r[c];if(s.setFromBox(h,e),u.isSeparated(s))return!1}return!0}})();Nt.prototype.intersectsTriangle=(function(){let s=new Ut,t=new Array(3),e=new se,n=new se,i=new I;return function(o){this.needsUpdate&&this.update(),o.isExtendedTriangle?o.needsUpdate&&o.update():(s.copy(o),s.update(),o=s);let a=this.satBounds,c=this.satAxes;t[0]=o.a,t[1]=o.b,t[2]=o.c;for(let m=0;m<3;m++){let g=a[m],x=c[m];if(e.setFromPoints(x,t),g.isSeparated(e))return!1}let h=o.satBounds,u=o.satAxes,d=this.points;for(let m=0;m<3;m++){let g=h[m],x=u[m];if(e.setFromPoints(x,d),g.isSeparated(e))return!1}for(let m=0;m<3;m++){let g=c[m];for(let x=0;x<4;x++){let v=u[x];if(i.crossVectors(g,v),e.setFromPoints(i,t),n.setFromPoints(i,d),e.isSeparated(n))return!1}}return!0}})();Nt.prototype.closestPointToPoint=(function(){return function(t,e){return this.needsUpdate&&this.update(),e.copy(t).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),e}})();Nt.prototype.distanceToPoint=(function(){let s=new I;return function(e){return this.closestPointToPoint(e,s),e.distanceTo(s)}})();Nt.prototype.distanceToBox=(function(){let s=["x","y","z"],t=new Array(12).fill().map(()=>new Mt),e=new Array(12).fill().map(()=>new Mt),n=new I,i=new I;return function(o,a=0,c=null,h=null){if(this.needsUpdate&&this.update(),this.intersectsBox(o))return(c||h)&&(o.getCenter(i),this.closestPointToPoint(i,n),o.closestPointToPoint(n,i),c&&c.copy(n),h&&h.copy(i)),0;let u=a*a,d=o.min,m=o.max,g=this.points,x=1/0;for(let S=0;S<8;S++){let A=g[S];i.copy(A).clamp(d,m);let E=A.distanceToSquared(i);if(E<x&&(x=E,c&&c.copy(A),h&&h.copy(i),E<u))return Math.sqrt(E)}let v=0;for(let S=0;S<3;S++)for(let A=0;A<=1;A++)for(let E=0;E<=1;E++){let p=(S+1)%3,l=(S+2)%3,_=A<<p|E<<l,f=1<<S|A<<p|E<<l,R=g[_],w=g[f];t[v].set(R,w);let y=s[S],b=s[p],T=s[l],C=e[v],P=C.start,D=C.end;P[y]=d[y],P[b]=A?d[b]:m[b],P[T]=E?d[T]:m[T],D[y]=m[y],D[b]=A?d[b]:m[b],D[T]=E?d[T]:m[T],v++}for(let S=0;S<=1;S++)for(let A=0;A<=1;A++)for(let E=0;E<=1;E++){i.x=S?m.x:d.x,i.y=A?m.y:d.y,i.z=E?m.z:d.z,this.closestPointToPoint(i,n);let p=i.distanceToSquared(n);if(p<x&&(x=p,c&&c.copy(n),h&&h.copy(i),p<u))return Math.sqrt(p)}for(let S=0;S<12;S++){let A=t[S];for(let E=0;E<12;E++){let p=e[E];Zi(A,p,n,i);let l=n.distanceToSquared(i);if(l<x&&(x=l,c&&c.copy(n),h&&h.copy(i),l<u))return Math.sqrt(l)}}return Math.sqrt(x)}})();var Ta=class extends Qe{constructor(){super(()=>new Ut)}},$t=new Ta;var $i=new I,Ea=new I;function xl(s,t,e={},n=0,i=1/0){let r=n*n,o=i*i,a=1/0,c=null;if(s.shapecast({boundsTraverseOrder:u=>($i.copy(t).clamp(u.min,u.max),$i.distanceToSquared(t)),intersectsBounds:(u,d,m)=>m<a&&m<o,intersectsTriangle:(u,d)=>{u.closestPointToPoint(t,$i);let m=t.distanceToSquared($i);return m<a&&(Ea.copy($i),a=m,c=d),m<r}}),a===1/0)return null;let h=Math.sqrt(a);return e.point?e.point.copy(Ea):e.point=Ea.clone(),e.distance=h,e.faceIndex=c,e}var Ms=parseInt("180")>=169,sm=parseInt("180")<=161,gn=new I,xn=new I,_n=new I,Ss=new G,bs=new G,ws=new G,_l=new I,vl=new I,yl=new I,Ji=new I;function om(s,t,e,n,i,r,o,a){let c;if(r===hs?c=s.intersectTriangle(n,e,t,!0,i):c=s.intersectTriangle(t,e,n,r!==Wi,i),c===null)return null;let h=s.origin.distanceTo(i);return h<o||h>a?null:{distance:h,point:i.clone()}}function Ml(s,t,e,n,i,r,o,a,c,h,u){gn.fromBufferAttribute(t,r),xn.fromBufferAttribute(t,o),_n.fromBufferAttribute(t,a);let d=om(s,gn,xn,_n,Ji,c,h,u);if(d){if(n){Ss.fromBufferAttribute(n,r),bs.fromBufferAttribute(n,o),ws.fromBufferAttribute(n,a),d.uv=new G;let g=Et.getInterpolation(Ji,gn,xn,_n,Ss,bs,ws,d.uv);Ms||(d.uv=g)}if(i){Ss.fromBufferAttribute(i,r),bs.fromBufferAttribute(i,o),ws.fromBufferAttribute(i,a),d.uv1=new G;let g=Et.getInterpolation(Ji,gn,xn,_n,Ss,bs,ws,d.uv1);Ms||(d.uv1=g),sm&&(d.uv2=d.uv1)}if(e){_l.fromBufferAttribute(e,r),vl.fromBufferAttribute(e,o),yl.fromBufferAttribute(e,a),d.normal=new I;let g=Et.getInterpolation(Ji,gn,xn,_n,_l,vl,yl,d.normal);d.normal.dot(s.direction)>0&&d.normal.multiplyScalar(-1),Ms||(d.normal=g)}let m={a:r,b:o,c:a,normal:new I,materialIndex:0};if(Et.getNormal(gn,xn,_n,m.normal),d.face=m,d.faceIndex=r,Ms){let g=new I;Et.getBarycoord(Ji,gn,xn,_n,g),d.barycoord=g}}return d}function Sl(s){return s&&s.isMaterial?s.side:s}function si(s,t,e,n,i,r,o){let a=n*3,c=a+0,h=a+1,u=a+2,{index:d,groups:m}=s;s.index&&(c=d.getX(c),h=d.getX(h),u=d.getX(u));let{position:g,normal:x,uv:v,uv1:S}=s.attributes;if(Array.isArray(t)){let A=n*3;for(let E=0,p=m.length;E<p;E++){let{start:l,count:_,materialIndex:f}=m[E];if(A>=l&&A<l+_){let R=Sl(t[f]),w=Ml(e,g,x,v,S,c,h,u,R,r,o);if(w)if(w.faceIndex=n,w.face.materialIndex=f,i)i.push(w);else return w}}}else{let A=Sl(t),E=Ml(e,g,x,v,S,c,h,u,A,r,o);if(E)if(E.faceIndex=n,E.face.materialIndex=0,i)i.push(E);else return E}return null}function Ct(s,t,e,n){let i=s.a,r=s.b,o=s.c,a=t,c=t+1,h=t+2;e&&(a=e.getX(a),c=e.getX(c),h=e.getX(h)),i.x=n.getX(a),i.y=n.getY(a),i.z=n.getZ(a),r.x=n.getX(c),r.y=n.getY(c),r.z=n.getZ(c),o.x=n.getX(h),o.y=n.getY(h),o.z=n.getZ(h)}function bl(s,t,e,n,i,r,o,a){let{geometry:c,_indirectBuffer:h}=s;for(let u=n,d=n+i;u<d;u++)si(c,t,e,u,r,o,a)}function wl(s,t,e,n,i,r,o){let{geometry:a,_indirectBuffer:c}=s,h=1/0,u=null;for(let d=n,m=n+i;d<m;d++){let g;g=si(a,t,e,d,null,r,o),g&&g.distance<h&&(u=g,h=g.distance)}return u}function Tl(s,t,e,n,i,r,o){let{geometry:a}=e,{index:c}=a,h=a.attributes.position;for(let u=s,d=t+s;u<d;u++){let m;if(m=u,Ct(o,m*3,c,h),o.needsUpdate=!0,n(o,m,i,r))return!0}return!1}function El(s,t=null){t&&Array.isArray(t)&&(t=new Set(t));let e=s.geometry,n=e.index?e.index.array:null,i=e.attributes.position,r,o,a,c,h=0,u=s._roots;for(let m=0,g=u.length;m<g;m++)r=u[m],o=new Uint32Array(r),a=new Uint16Array(r),c=new Float32Array(r),d(0,h),h+=r.byteLength;function d(m,g,x=!1){let v=m*2;if(pt(v,a)){let S=vt(m,o),A=St(v,a),E=1/0,p=1/0,l=1/0,_=-1/0,f=-1/0,R=-1/0;for(let w=3*S,M=3*(S+A);w<M;w++){let y=n[w],b=i.getX(y),T=i.getY(y),C=i.getZ(y);b<E&&(E=b),b>_&&(_=b),T<p&&(p=T),T>f&&(f=T),C<l&&(l=C),C>R&&(R=C)}return c[m+0]!==E||c[m+1]!==p||c[m+2]!==l||c[m+3]!==_||c[m+4]!==f||c[m+5]!==R?(c[m+0]=E,c[m+1]=p,c[m+2]=l,c[m+3]=_,c[m+4]=f,c[m+5]=R,!0):!1}else{let S=gt(m),A=xt(m,o),E=x,p=!1,l=!1;if(t){if(!E){let y=S/8+g/32,b=A/8+g/32;p=t.has(y),l=t.has(b),E=!p&&!l}}else p=!0,l=!0;let _=E||p,f=E||l,R=!1;_&&(R=d(S,g,E));let w=!1;f&&(w=d(A,g,E));let M=R||w;if(M)for(let y=0;y<3;y++){let b=S+y,T=A+y,C=c[b],P=c[b+3],D=c[T],L=c[T+3];c[m+y]=C<D?C:D,c[m+y+3]=P>L?P:L}return M}}}function Yt(s,t,e,n,i){let r,o,a,c,h,u,d=1/e.direction.x,m=1/e.direction.y,g=1/e.direction.z,x=e.origin.x,v=e.origin.y,S=e.origin.z,A=t[s],E=t[s+3],p=t[s+1],l=t[s+3+1],_=t[s+2],f=t[s+3+2];return d>=0?(r=(A-x)*d,o=(E-x)*d):(r=(E-x)*d,o=(A-x)*d),m>=0?(a=(p-v)*m,c=(l-v)*m):(a=(l-v)*m,c=(p-v)*m),r>c||a>o||((a>r||isNaN(r))&&(r=a),(c<o||isNaN(o))&&(o=c),g>=0?(h=(_-S)*g,u=(f-S)*g):(h=(f-S)*g,u=(_-S)*g),r>u||h>o)?!1:((h>r||r!==r)&&(r=h),(u<o||o!==o)&&(o=u),r<=i&&o>=n)}function Al(s,t,e,n,i,r,o,a){let{geometry:c,_indirectBuffer:h}=s;for(let u=n,d=n+i;u<d;u++){let m=h?h[u]:u;si(c,t,e,m,r,o,a)}}function Cl(s,t,e,n,i,r,o){let{geometry:a,_indirectBuffer:c}=s,h=1/0,u=null;for(let d=n,m=n+i;d<m;d++){let g;g=si(a,t,e,c?c[d]:d,null,r,o),g&&g.distance<h&&(u=g,h=g.distance)}return u}function Rl(s,t,e,n,i,r,o){let{geometry:a}=e,{index:c}=a,h=a.attributes.position;for(let u=s,d=t+s;u<d;u++){let m;if(m=e.resolveTriangleIndex(u),Ct(o,m*3,c,h),o.needsUpdate=!0,n(o,m,i,r))return!0}return!1}function Il(s,t,e,n,i,r,o){ut.setBuffer(s._roots[t]),Yt(0,ut.float32Array,n,r,o)&&Aa(0,s,e,n,i,r,o),ut.clearBuffer()}function Aa(s,t,e,n,i,r,o){let{float32Array:a,uint16Array:c,uint32Array:h}=ut,u=s*2;if(pt(u,c)){let m=vt(s,h),g=St(u,c);bl(t,e,n,m,g,i,r,o)}else{let m=gt(s);Yt(m,a,n,r,o)&&Aa(m,t,e,n,i,r,o);let g=xt(s,h);Yt(g,a,n,r,o)&&Aa(g,t,e,n,i,r,o)}}var am=["x","y","z"];function Pl(s,t,e,n,i,r){ut.setBuffer(s._roots[t]);let o=null;return Yt(0,ut.float32Array,n,i,r)&&(o=Ca(0,s,e,n,i,r)),ut.clearBuffer(),o}function Ca(s,t,e,n,i,r){let{float32Array:o,uint16Array:a,uint32Array:c}=ut,h=s*2;if(pt(h,a)){let d=vt(s,c),m=St(h,a);return wl(t,e,n,d,m,i,r)}else{let d=Kn(s,c),m=am[d],x=n.direction[m]>=0,v,S;x?(v=gt(s),S=xt(s,c)):(v=xt(s,c),S=gt(s));let E=Yt(v,o,n,i,r)?Ca(v,t,e,n,i,r):null;if(E){let _=E.point[m];if(x?_<=o[S+d]:_>=o[S+d+3])return E}let l=Yt(S,o,n,i,r)?Ca(S,t,e,n,i,r):null;return E&&l?E.distance<=l.distance?E:l:E||l||null}}var Ts=new It,oi=new Ut,ai=new Ut,Ki=new dt,Dl=new Nt,Es=new Nt;function Ll(s,t,e,n){ut.setBuffer(s._roots[t]);let i=Ra(0,s,e,n);return ut.clearBuffer(),i}function Ra(s,t,e,n,i=null){let{float32Array:r,uint16Array:o,uint32Array:a}=ut,c=s*2;if(i===null&&(e.boundingBox||e.computeBoundingBox(),Dl.set(e.boundingBox.min,e.boundingBox.max,n),i=Dl),pt(c,o)){let u=t.geometry,d=u.index,m=u.attributes.position,g=e.index,x=e.attributes.position,v=vt(s,a),S=St(c,o);if(Ki.copy(n).invert(),e.boundsTree)return At(s,r,Es),Es.matrix.copy(Ki),Es.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:E=>Es.intersectsBox(E),intersectsTriangle:E=>{E.a.applyMatrix4(n),E.b.applyMatrix4(n),E.c.applyMatrix4(n),E.needsUpdate=!0;for(let p=v*3,l=(S+v)*3;p<l;p+=3)if(Ct(ai,p,d,m),ai.needsUpdate=!0,E.intersectsTriangle(ai))return!0;return!1}});{let A=en(e);for(let E=v*3,p=(S+v)*3;E<p;E+=3){Ct(oi,E,d,m),oi.a.applyMatrix4(Ki),oi.b.applyMatrix4(Ki),oi.c.applyMatrix4(Ki),oi.needsUpdate=!0;for(let l=0,_=A*3;l<_;l+=3)if(Ct(ai,l,g,x),ai.needsUpdate=!0,oi.intersectsTriangle(ai))return!0}}}else{let u=gt(s),d=xt(s,a);return At(u,r,Ts),!!(i.intersectsBox(Ts)&&Ra(u,t,e,n,i)||(At(d,r,Ts),i.intersectsBox(Ts)&&Ra(d,t,e,n,i)))}}var As=new dt,Ia=new Nt,Qi=new Nt,cm=new I,lm=new I,hm=new I,um=new I;function Ul(s,t,e,n={},i={},r=0,o=1/0){t.boundingBox||t.computeBoundingBox(),Ia.set(t.boundingBox.min,t.boundingBox.max,e),Ia.needsUpdate=!0;let a=s.geometry,c=a.attributes.position,h=a.index,u=t.attributes.position,d=t.index,m=$t.getPrimitive(),g=$t.getPrimitive(),x=cm,v=lm,S=null,A=null;i&&(S=hm,A=um);let E=1/0,p=null,l=null;return As.copy(e).invert(),Qi.matrix.copy(As),s.shapecast({boundsTraverseOrder:_=>Ia.distanceToBox(_),intersectsBounds:(_,f,R)=>R<E&&R<o?(f&&(Qi.min.copy(_.min),Qi.max.copy(_.max),Qi.needsUpdate=!0),!0):!1,intersectsRange:(_,f)=>{if(t.boundsTree)return t.boundsTree.shapecast({boundsTraverseOrder:w=>Qi.distanceToBox(w),intersectsBounds:(w,M,y)=>y<E&&y<o,intersectsRange:(w,M)=>{for(let y=w,b=w+M;y<b;y++){Ct(g,3*y,d,u),g.a.applyMatrix4(e),g.b.applyMatrix4(e),g.c.applyMatrix4(e),g.needsUpdate=!0;for(let T=_,C=_+f;T<C;T++){Ct(m,3*T,h,c),m.needsUpdate=!0;let P=m.distanceToTriangle(g,x,S);if(P<E&&(v.copy(x),A&&A.copy(S),E=P,p=T,l=y),P<r)return!0}}}});{let R=en(t);for(let w=0,M=R;w<M;w++){Ct(g,3*w,d,u),g.a.applyMatrix4(e),g.b.applyMatrix4(e),g.c.applyMatrix4(e),g.needsUpdate=!0;for(let y=_,b=_+f;y<b;y++){Ct(m,3*y,h,c),m.needsUpdate=!0;let T=m.distanceToTriangle(g,x,S);if(T<E&&(v.copy(x),A&&A.copy(S),E=T,p=y,l=w),T<r)return!0}}}}}),$t.releasePrimitive(m),$t.releasePrimitive(g),E===1/0?null:(n.point?n.point.copy(v):n.point=v.clone(),n.distance=E,n.faceIndex=p,i&&(i.point?i.point.copy(A):i.point=A.clone(),i.point.applyMatrix4(As),v.applyMatrix4(As),i.distance=v.sub(i.point).length(),i.faceIndex=l),n)}function Nl(s,t=null){t&&Array.isArray(t)&&(t=new Set(t));let e=s.geometry,n=e.index?e.index.array:null,i=e.attributes.position,r,o,a,c,h=0,u=s._roots;for(let m=0,g=u.length;m<g;m++)r=u[m],o=new Uint32Array(r),a=new Uint16Array(r),c=new Float32Array(r),d(0,h),h+=r.byteLength;function d(m,g,x=!1){let v=m*2;if(pt(v,a)){let S=vt(m,o),A=St(v,a),E=1/0,p=1/0,l=1/0,_=-1/0,f=-1/0,R=-1/0;for(let w=S,M=S+A;w<M;w++){let y=3*s.resolveTriangleIndex(w);for(let b=0;b<3;b++){let T=y+b;T=n?n[T]:T;let C=i.getX(T),P=i.getY(T),D=i.getZ(T);C<E&&(E=C),C>_&&(_=C),P<p&&(p=P),P>f&&(f=P),D<l&&(l=D),D>R&&(R=D)}}return c[m+0]!==E||c[m+1]!==p||c[m+2]!==l||c[m+3]!==_||c[m+4]!==f||c[m+5]!==R?(c[m+0]=E,c[m+1]=p,c[m+2]=l,c[m+3]=_,c[m+4]=f,c[m+5]=R,!0):!1}else{let S=gt(m),A=xt(m,o),E=x,p=!1,l=!1;if(t){if(!E){let y=S/8+g/32,b=A/8+g/32;p=t.has(y),l=t.has(b),E=!p&&!l}}else p=!0,l=!0;let _=E||p,f=E||l,R=!1;_&&(R=d(S,g,E));let w=!1;f&&(w=d(A,g,E));let M=R||w;if(M)for(let y=0;y<3;y++){let b=S+y,T=A+y,C=c[b],P=c[b+3],D=c[T],L=c[T+3];c[m+y]=C<D?C:D,c[m+y+3]=P>L?P:L}return M}}}function Fl(s,t,e,n,i,r,o){ut.setBuffer(s._roots[t]),Yt(0,ut.float32Array,n,r,o)&&Pa(0,s,e,n,i,r,o),ut.clearBuffer()}function Pa(s,t,e,n,i,r,o){let{float32Array:a,uint16Array:c,uint32Array:h}=ut,u=s*2;if(pt(u,c)){let m=vt(s,h),g=St(u,c);Al(t,e,n,m,g,i,r,o)}else{let m=gt(s);Yt(m,a,n,r,o)&&Pa(m,t,e,n,i,r,o);let g=xt(s,h);Yt(g,a,n,r,o)&&Pa(g,t,e,n,i,r,o)}}var fm=["x","y","z"];function Bl(s,t,e,n,i,r){ut.setBuffer(s._roots[t]);let o=null;return Yt(0,ut.float32Array,n,i,r)&&(o=Da(0,s,e,n,i,r)),ut.clearBuffer(),o}function Da(s,t,e,n,i,r){let{float32Array:o,uint16Array:a,uint32Array:c}=ut,h=s*2;if(pt(h,a)){let d=vt(s,c),m=St(h,a);return Cl(t,e,n,d,m,i,r)}else{let d=Kn(s,c),m=fm[d],x=n.direction[m]>=0,v,S;x?(v=gt(s),S=xt(s,c)):(v=xt(s,c),S=gt(s));let E=Yt(v,o,n,i,r)?Da(v,t,e,n,i,r):null;if(E){let _=E.point[m];if(x?_<=o[S+d]:_>=o[S+d+3])return E}let l=Yt(S,o,n,i,r)?Da(S,t,e,n,i,r):null;return E&&l?E.distance<=l.distance?E:l:E||l||null}}var Cs=new It,ci=new Ut,li=new Ut,ji=new dt,Ol=new Nt,Rs=new Nt;function zl(s,t,e,n){ut.setBuffer(s._roots[t]);let i=La(0,s,e,n);return ut.clearBuffer(),i}function La(s,t,e,n,i=null){let{float32Array:r,uint16Array:o,uint32Array:a}=ut,c=s*2;if(i===null&&(e.boundingBox||e.computeBoundingBox(),Ol.set(e.boundingBox.min,e.boundingBox.max,n),i=Ol),pt(c,o)){let u=t.geometry,d=u.index,m=u.attributes.position,g=e.index,x=e.attributes.position,v=vt(s,a),S=St(c,o);if(ji.copy(n).invert(),e.boundsTree)return At(s,r,Rs),Rs.matrix.copy(ji),Rs.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:E=>Rs.intersectsBox(E),intersectsTriangle:E=>{E.a.applyMatrix4(n),E.b.applyMatrix4(n),E.c.applyMatrix4(n),E.needsUpdate=!0;for(let p=v,l=S+v;p<l;p++)if(Ct(li,3*t.resolveTriangleIndex(p),d,m),li.needsUpdate=!0,E.intersectsTriangle(li))return!0;return!1}});{let A=en(e);for(let E=v,p=S+v;E<p;E++){let l=t.resolveTriangleIndex(E);Ct(ci,3*l,d,m),ci.a.applyMatrix4(ji),ci.b.applyMatrix4(ji),ci.c.applyMatrix4(ji),ci.needsUpdate=!0;for(let _=0,f=A*3;_<f;_+=3)if(Ct(li,_,g,x),li.needsUpdate=!0,ci.intersectsTriangle(li))return!0}}}else{let u=gt(s),d=xt(s,a);return At(u,r,Cs),!!(i.intersectsBox(Cs)&&La(u,t,e,n,i)||(At(d,r,Cs),i.intersectsBox(Cs)&&La(d,t,e,n,i)))}}var Is=new dt,Ua=new Nt,tr=new Nt,dm=new I,pm=new I,mm=new I,gm=new I;function Vl(s,t,e,n={},i={},r=0,o=1/0){t.boundingBox||t.computeBoundingBox(),Ua.set(t.boundingBox.min,t.boundingBox.max,e),Ua.needsUpdate=!0;let a=s.geometry,c=a.attributes.position,h=a.index,u=t.attributes.position,d=t.index,m=$t.getPrimitive(),g=$t.getPrimitive(),x=dm,v=pm,S=null,A=null;i&&(S=mm,A=gm);let E=1/0,p=null,l=null;return Is.copy(e).invert(),tr.matrix.copy(Is),s.shapecast({boundsTraverseOrder:_=>Ua.distanceToBox(_),intersectsBounds:(_,f,R)=>R<E&&R<o?(f&&(tr.min.copy(_.min),tr.max.copy(_.max),tr.needsUpdate=!0),!0):!1,intersectsRange:(_,f)=>{if(t.boundsTree){let R=t.boundsTree;return R.shapecast({boundsTraverseOrder:w=>tr.distanceToBox(w),intersectsBounds:(w,M,y)=>y<E&&y<o,intersectsRange:(w,M)=>{for(let y=w,b=w+M;y<b;y++){let T=R.resolveTriangleIndex(y);Ct(g,3*T,d,u),g.a.applyMatrix4(e),g.b.applyMatrix4(e),g.c.applyMatrix4(e),g.needsUpdate=!0;for(let C=_,P=_+f;C<P;C++){let D=s.resolveTriangleIndex(C);Ct(m,3*D,h,c),m.needsUpdate=!0;let L=m.distanceToTriangle(g,x,S);if(L<E&&(v.copy(x),A&&A.copy(S),E=L,p=C,l=y),L<r)return!0}}}})}else{let R=en(t);for(let w=0,M=R;w<M;w++){Ct(g,3*w,d,u),g.a.applyMatrix4(e),g.b.applyMatrix4(e),g.c.applyMatrix4(e),g.needsUpdate=!0;for(let y=_,b=_+f;y<b;y++){let T=s.resolveTriangleIndex(y);Ct(m,3*T,h,c),m.needsUpdate=!0;let C=m.distanceToTriangle(g,x,S);if(C<E&&(v.copy(x),A&&A.copy(S),E=C,p=y,l=w),C<r)return!0}}}}}),$t.releasePrimitive(m),$t.releasePrimitive(g),E===1/0?null:(n.point?n.point.copy(v):n.point=v.clone(),n.distance=E,n.faceIndex=p,i&&(i.point?i.point.copy(A):i.point=A.clone(),i.point.applyMatrix4(Is),v.applyMatrix4(Is),i.distance=v.sub(i.point).length(),i.faceIndex=l),n)}function Na(s,t,e){return s===null?null:(s.point.applyMatrix4(t.matrixWorld),s.distance=s.point.distanceTo(e.ray.origin),s.object=t,s)}var Ps=new Nt,Ds=new Te,kl=new I,Hl=new dt,Gl=new I,Fa=["getX","getY","getZ"],vn=class s extends ys{static serialize(t,e={}){e={cloneBuffers:!0,...e};let n=t.geometry,i=t._roots,r=t._indirectBuffer,o=n.getIndex(),a={version:1,roots:null,index:null,indirectBuffer:null};return e.cloneBuffers?(a.roots=i.map(c=>c.slice()),a.index=o?o.array.slice():null,a.indirectBuffer=r?r.slice():null):(a.roots=i,a.index=o?o.array:null,a.indirectBuffer=r),a}static deserialize(t,e,n={}){n={setIndex:!0,indirect:!!t.indirectBuffer,...n};let{index:i,roots:r,indirectBuffer:o}=t;t.version||(console.warn("MeshBVH.deserialize: Serialization format has been changed and will be fixed up. It is recommended to regenerate any stored serialized data."),c(r));let a=new s(e,{...n,[Xi]:!0});if(a._roots=r,a._indirectBuffer=o||null,n.setIndex){let h=e.getIndex();if(h===null){let u=new Vt(t.index,1,!1);e.setIndex(u)}else h.array!==i&&(h.array.set(i),h.needsUpdate=!0)}return a;function c(h){for(let u=0;u<h.length;u++){let d=h[u],m=new Uint32Array(d),g=new Uint16Array(d);for(let x=0,v=d.byteLength/32;x<v;x++){let S=8*x,A=2*S;pt(A,g)||(m[S+6]=m[S+6]/8-x)}}}}get primitiveStride(){return 3}get resolveTriangleIndex(){return this.resolvePrimitiveIndex}constructor(t,e={}){e.maxLeafTris&&(console.warn('MeshBVH: "maxLeafTris" option has been deprecated. Use "targetLeafSize", instead.'),e={...e,targetLeafSize:e.maxLeafTris}),super(t,e)}shiftTriangleOffsets(t){return super.shiftPrimitiveOffsets(t)}writePrimitiveBounds(t,e,n){let i=this.geometry,r=this._indirectBuffer,o=i.attributes.position,a=i.index?i.index.array:null,h=(r?r[t]:t)*3,u=h+0,d=h+1,m=h+2;a&&(u=a[u],d=a[d],m=a[m]);for(let g=0;g<3;g++){let x=o[Fa[g]](u),v=o[Fa[g]](d),S=o[Fa[g]](m),A=x;v<A&&(A=v),S<A&&(A=S);let E=x;v>E&&(E=v),S>E&&(E=S),e[n+g]=A,e[n+g+3]=E}return e}computePrimitiveBounds(t,e,n){let i=this.geometry,r=this._indirectBuffer,o=i.attributes.position,a=i.index?i.index.array:null,c=o.normalized;if(t<0||e+t-n.offset>n.length/6)throw new Error("MeshBVH: compute triangle bounds range is invalid.");let h=o.array,u=o.offset||0,d=3;o.isInterleavedBufferAttribute&&(d=o.data.stride);let m=["getX","getY","getZ"],g=n.offset;for(let x=t,v=t+e;x<v;x++){let A=(r?r[x]:x)*3,E=(x-g)*6,p=A+0,l=A+1,_=A+2;a&&(p=a[p],l=a[l],_=a[_]),c||(p=p*d+u,l=l*d+u,_=_*d+u);for(let f=0;f<3;f++){let R,w,M;c?(R=o[m[f]](p),w=o[m[f]](l),M=o[m[f]](_)):(R=h[p+f],w=h[l+f],M=h[_+f]);let y=R;w<y&&(y=w),M<y&&(y=M);let b=R;w>b&&(b=w),M>b&&(b=M);let T=(b-y)/2,C=f*2;n[E+C+0]=y+T,n[E+C+1]=T+(Math.abs(y)+T)*Jn}}return n}raycastObject3D(t,e,n=[]){let{material:i}=t;if(i===void 0)return;Hl.copy(t.matrixWorld).invert(),Ds.copy(e.ray).applyMatrix4(Hl),Gl.setFromMatrixScale(t.matrixWorld),kl.copy(Ds.direction).multiply(Gl);let r=kl.length(),o=e.near/r,a=e.far/r;if(e.firstHitOnly===!0){let c=this.raycastFirst(Ds,i,o,a);c=Na(c,t,e),c&&n.push(c)}else{let c=this.raycast(Ds,i,o,a);for(let h=0,u=c.length;h<u;h++){let d=Na(c[h],t,e);d&&n.push(d)}}return n}refit(t=null){return(this.indirect?Nl:El)(this,t)}raycast(t,e=un,n=0,i=1/0){let r=this._roots,o=[],a=this.indirect?Fl:Il;for(let c=0,h=r.length;c<h;c++)a(this,c,e,t,o,n,i);return o}raycastFirst(t,e=un,n=0,i=1/0){let r=this._roots,o=null,a=this.indirect?Bl:Pl;for(let c=0,h=r.length;c<h;c++){let u=a(this,c,e,t,n,i);u!=null&&(o==null||u.distance<o.distance)&&(o=u)}return o}intersectsGeometry(t,e){let n=!1,i=this._roots,r=this.indirect?zl:Ll;for(let o=0,a=i.length;o<a&&(n=r(this,o,t,e),!n);o++);return n}shapecast(t){let e=$t.getPrimitive(),n=super.shapecast({...t,intersectsPrimitive:t.intersectsTriangle,scratchPrimitive:e,iterate:this.indirect?Rl:Tl});return $t.releasePrimitive(e),n}bvhcast(t,e,n){let{intersectsRanges:i,intersectsTriangles:r}=n,o=$t.getPrimitive(),a=this.geometry.index,c=this.geometry.attributes.position,h=this.indirect?x=>{let v=this.resolveTriangleIndex(x);Ct(o,v*3,a,c)}:x=>{Ct(o,x*3,a,c)},u=$t.getPrimitive(),d=t.geometry.index,m=t.geometry.attributes.position,g=t.indirect?x=>{let v=t.resolveTriangleIndex(x);Ct(u,v*3,d,m)}:x=>{Ct(u,x*3,d,m)};if(r){if(!(t instanceof s))throw new Error('MeshBVH: "intersectsTriangles" callback can only be used with another MeshBVH.');let x=(v,S,A,E,p,l,_,f)=>{for(let R=A,w=A+E;R<w;R++){g(R),u.a.applyMatrix4(e),u.b.applyMatrix4(e),u.c.applyMatrix4(e),u.needsUpdate=!0;for(let M=v,y=v+S;M<y;M++)if(h(M),o.needsUpdate=!0,r(o,u,M,R,p,l,_,f))return!0}return!1};if(i){let v=i;i=function(S,A,E,p,l,_,f,R){return v(S,A,E,p,l,_,f,R)?!0:x(S,A,E,p,l,_,f,R)}}else i=x}return super.bvhcast(t,e,{intersectsRanges:i})}intersectsBox(t,e){return Ps.set(t.min,t.max,e),Ps.needsUpdate=!0,this.shapecast({intersectsBounds:n=>Ps.intersectsBox(n),intersectsTriangle:n=>Ps.intersectsTriangle(n)})}intersectsSphere(t){return this.shapecast({intersectsBounds:e=>t.intersectsBox(e),intersectsTriangle:e=>e.intersectsSphere(t)})}closestPointToGeometry(t,e,n={},i={},r=0,o=1/0){return(this.indirect?Vl:Ul)(this,t,e,n,i,r,o)}closestPointToPoint(t,e={},n=0,i=1/0){return xl(this,t,e,n,i)}};var Wl=Math.pow(10,-Math.log10(1e-6)),xm=5e-7*Wl;function Me(s){return~~(s*Wl+xm)}function Xl(s){return`${Me(s.x)},${Me(s.y)}`}function Ba(s){return`${Me(s.x)},${Me(s.y)},${Me(s.z)}`}function ql(s){return`${Me(s.x)},${Me(s.y)},${Me(s.z)},${Me(s.w)}`}function Yl(s,t,e){e.direction.subVectors(t,s).normalize();let n=s.dot(e.direction);return e.origin.copy(s).addScaledVector(e.direction,-n),e}function Ls(){return typeof SharedArrayBuffer<"u"}function Zl(s){if(s.buffer instanceof SharedArrayBuffer)return s;let t=s.constructor,e=s.buffer,n=new SharedArrayBuffer(e.byteLength),i=new Uint8Array(e);return new Uint8Array(n).set(i,0),new t(n)}function _m(s){return s.index?s.index.count:s.attributes.position.count}function hi(s){return _m(s)/3}var vm=1e-8,ym=new I;function Jl(s){return~~(s/3)}function Kl(s){return s%3}function $l(s,t){return s.start-t.start}function Oa(s,t){return ym.subVectors(t,s.origin).dot(s.direction)}function Ql(s,t,e,n=vm){s.sort($l),t.sort($l);for(let a=0;a<s.length;a++){let c=s[a];for(let h=0;h<t.length;h++){let u=t[h];if(!(u.start>c.end)){if(c.end<u.start||u.end<c.start)continue;if(c.start<=u.start&&c.end>=u.end)r(u.end,c.end)||s.splice(a+1,0,{start:u.end,end:c.end,index:c.index}),c.end=u.start,u.start=0,u.end=0;else if(c.start>=u.start&&c.end<=u.end)r(c.end,u.end)||t.splice(h+1,0,{start:c.end,end:u.end,index:u.index}),u.end=c.start,c.start=0,c.end=0;else if(c.start<=u.start&&c.end<=u.end){let d=c.end;c.end=u.start,u.start=d}else if(c.start>=u.start&&c.end>=u.end){let d=u.end;u.end=c.start,c.start=d}else throw new Error}if(e.has(c.index)||e.set(c.index,[]),e.has(u.index)||e.set(u.index,[]),e.get(c.index).push(u.index),e.get(u.index).push(c.index),o(u)&&(t.splice(h,1),h--),o(c)){s.splice(a,1),a--;break}}}i(s),i(t);function i(a){for(let c=0;c<a.length;c++)o(a[c])&&(a.splice(c,1),c--)}function r(a,c){return Math.abs(c-a)<n}function o(a){return Math.abs(a.end-a.start)<n}}var Us=class{constructor(){this._rays=[]}addRay(t){this._rays.push(t)}findClosestRay(t){let e=this._rays,n=t.clone();n.direction.multiplyScalar(-1);let i=1/0,r=null;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(o(u,t)&&o(u,n))continue;let d=a(u,t),m=a(u,n),g=Math.min(d,m);g<i&&(i=g,r=u)}return r;function o(c,h){let u=c.origin.distanceTo(h.origin)>1e-5;return c.direction.angleTo(h.direction)>1e-4||u}function a(c,h){let u=c.origin.distanceTo(h.origin),d=c.direction.angleTo(h.direction);return u/1e-5+d/1e-4}}};var za=new I,Va=new I,Ns=new Te;function jl(s,t,e){let n=s.attributes,i=s.index,r=n.position,o=new Map,a=new Map,c=Array.from(t),h=new Us;for(let u=0,d=c.length;u<d;u++){let m=c[u],g=Jl(m),x=Kl(m),v=3*g+x,S=3*g+(x+1)%3;i&&(v=i.getX(v),S=i.getX(S)),za.fromBufferAttribute(r,v),Va.fromBufferAttribute(r,S),Yl(za,Va,Ns);let A,E=h.findClosestRay(Ns);E===null&&(E=Ns.clone(),h.addRay(E)),a.has(E)||a.set(E,{forward:[],reverse:[],ray:E}),A=a.get(E);let p=Oa(E,za),l=Oa(E,Va);p>l&&([p,l]=[l,p]),Ns.direction.dot(E.direction)<0?A.reverse.push({start:p,end:l,index:m}):A.forward.push({start:p,end:l,index:m})}return a.forEach(({forward:u,reverse:d},m)=>{Ql(u,d,o,e),u.length===0&&d.length===0&&a.delete(m)}),{disjointConnectivityMap:o,fragmentMap:a}}var Mm=new G,ka=new I,Sm=new ee,Ha=["","",""],Fs=class{constructor(){this.data=null,this.disjointConnections=null,this.unmatchedDisjointEdges=null,this.unmatchedEdges=-1,this.matchedEdges=-1,this.useDrawRange=!0,this.useAllAttributes=!1,this.matchDisjointEdges=!1,this.degenerateEpsilon=1e-8}getSiblingTriangleIndex(t,e){let n=this.data[t*3+e];return n===-1?-1:~~(n/3)}getSiblingEdgeIndex(t,e){let n=this.data[t*3+e];return n===-1?-1:n%3}getDisjointSiblingTriangleIndices(t,e){let n=t*3+e,i=this.disjointConnections.get(n);return i?i.map(r=>~~(r/3)):[]}getDisjointSiblingEdgeIndices(t,e){let n=t*3+e,i=this.disjointConnections.get(n);return i?i.map(r=>r%3):[]}isFullyConnected(){return this.unmatchedEdges===0}updateFrom(t){let{useAllAttributes:e,useDrawRange:n,matchDisjointEdges:i,degenerateEpsilon:r}=this,o=e?p:E,a=new Map,{attributes:c}=t,h=e?Object.keys(c):null,u=t.index,d=c.position,m=hi(t),g=m,x=0;n&&(x=t.drawRange.start,t.drawRange.count!==1/0&&(m=~~(t.drawRange.count/3)));let v=this.data;(!v||v.length<3*g)&&(v=new Int32Array(3*g)),v.fill(-1);let S=0,A=new Set;for(let l=x,_=m*3+x;l<_;l+=3){let f=l;for(let R=0;R<3;R++){let w=f+R;u&&(w=u.getX(w)),Ha[R]=o(w)}for(let R=0;R<3;R++){let w=(R+1)%3,M=Ha[R],y=Ha[w],b=`${y}_${M}`;if(a.has(b)){let T=f+R,C=a.get(b);v[T]=C,v[C]=T,a.delete(b),S+=2,A.delete(C)}else{let T=`${M}_${y}`,C=f+R;a.set(T,C),A.add(C)}}}if(i){let{fragmentMap:l,disjointConnectivityMap:_}=jl(t,A,r);A.clear(),l.forEach(({forward:f,reverse:R})=>{f.forEach(({index:w})=>A.add(w)),R.forEach(({index:w})=>A.add(w))}),this.unmatchedDisjointEdges=l,this.disjointConnections=_,S=m*3-A.size}this.matchedEdges=S,this.unmatchedEdges=A.size,this.data=v;function E(l){return ka.fromBufferAttribute(d,l),Ba(ka)}function p(l){let _="";for(let f=0,R=h.length;f<R;f++){let w=c[h[f]],M;switch(w.itemSize){case 1:M=Me(w.getX(l));break;case 2:M=Xl(Mm.fromBufferAttribute(w,l));break;case 3:M=Ba(ka.fromBufferAttribute(w,l));break;case 4:M=ql(Sm.fromBufferAttribute(w,l));break}_!==""&&(_+="|"),_+=M}return _}}};var yn=class extends Pi{constructor(...t){super(...t),this.isBrush=!0,this._previousMatrix=new dt,this._previousMatrix.elements.fill(0),this._halfEdges=null,this._boundsTree=null,this._groupIndices=null,this._hash=null}markUpdated(){this._previousMatrix.copy(this.matrix)}isDirty(){let{matrix:t,_previousMatrix:e}=this,n=t.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!0;return!1}prepareGeometry(){let t=this.geometry,e=t.attributes,n=Ls(),i=t.index,r=t.attributes.position,o=i?`${i.uuid}_${i.count}_${i.version}`:"-1_-1_-1",a=`${r.uuid}_${r.count}_${r.version}`,c=`${t.uuid}_${o}_${a}`;if(this._hash===c)return;if(this._hash=c,n)for(let m in e){let g=e[m];if(g.isInterleavedBufferAttribute)throw new Error("Brush: InterleavedBufferAttributes are not supported.");g.array=Zl(g.array)}t.boundsTree=new vn(t,{maxLeafSize:3,indirect:!0,useSharedArrayBuffer:n}),t.halfEdges||(t.halfEdges=new Fs),t.halfEdges.updateFrom(t);let h=hi(t);(!t.groupIndices||t.groupIndices.length!==h)&&(t.groupIndices=new Uint16Array(h));let u=t.groupIndices,d=t.groups;for(let m=0,g=d.length;m<g;m++){let{start:x,count:v}=d[m];for(let S=x/3,A=(x+v)/3;S<A;S++)u[S]=m}}disposeCacheData(){let{geometry:t}=this;t.halfEdges=null,t.boundsTree=null,t.groupIndices=null}};var bm=Object.getOwnPropertyNames,oe=(s,t)=>function(){return t||(0,s[bm(s)[0]])((t={exports:{}}).exports,t),t.exports},Bs=oe({"node_modules/binary-search-bounds/search-bounds.js"(s,t){"use strict";function e(c,h,u,d,m){for(var g=m+1;d<=m;){var x=d+m>>>1,v=c[x],S=u!==void 0?u(v,h):v-h;S>=0?(g=x,m=x-1):d=x+1}return g}function n(c,h,u,d,m){for(var g=m+1;d<=m;){var x=d+m>>>1,v=c[x],S=u!==void 0?u(v,h):v-h;S>0?(g=x,m=x-1):d=x+1}return g}function i(c,h,u,d,m){for(var g=d-1;d<=m;){var x=d+m>>>1,v=c[x],S=u!==void 0?u(v,h):v-h;S<0?(g=x,d=x+1):m=x-1}return g}function r(c,h,u,d,m){for(var g=d-1;d<=m;){var x=d+m>>>1,v=c[x],S=u!==void 0?u(v,h):v-h;S<=0?(g=x,d=x+1):m=x-1}return g}function o(c,h,u,d,m){for(;d<=m;){var g=d+m>>>1,x=c[g],v=u!==void 0?u(x,h):x-h;if(v===0)return g;v<=0?d=g+1:m=g-1}return-1}function a(c,h,u,d,m,g){return typeof u=="function"?g(c,h,u,d===void 0?0:d|0,m===void 0?c.length-1:m|0):g(c,h,void 0,u===void 0?0:u|0,d===void 0?c.length-1:d|0)}t.exports={ge:function(c,h,u,d,m){return a(c,h,u,d,m,e)},gt:function(c,h,u,d,m){return a(c,h,u,d,m,n)},lt:function(c,h,u,d,m){return a(c,h,u,d,m,i)},le:function(c,h,u,d,m){return a(c,h,u,d,m,r)},eq:function(c,h,u,d,m){return a(c,h,u,d,m,o)}}}}),Ga=oe({"node_modules/two-product/two-product.js"(s,t){"use strict";t.exports=n;var e=+(Math.pow(2,27)+1);function n(i,r,o){var a=i*r,c=e*i,h=c-i,u=c-h,d=i-u,m=e*r,g=m-r,x=m-g,v=r-x,S=a-u*x,A=S-d*x,E=A-u*v,p=d*v-E;return o?(o[0]=p,o[1]=a,o):[p,a]}}}),th=oe({"node_modules/robust-sum/robust-sum.js"(s,t){"use strict";t.exports=n;function e(i,r){var o=i+r,a=o-i,c=o-a,h=r-a,u=i-c,d=u+h;return d?[d,o]:[o]}function n(i,r){var o=i.length|0,a=r.length|0;if(o===1&&a===1)return e(i[0],r[0]);var c=o+a,h=new Array(c),u=0,d=0,m=0,g=Math.abs,x=i[d],v=g(x),S=r[m],A=g(S),E,p;v<A?(p=x,d+=1,d<o&&(x=i[d],v=g(x))):(p=S,m+=1,m<a&&(S=r[m],A=g(S))),d<o&&v<A||m>=a?(E=x,d+=1,d<o&&(x=i[d],v=g(x))):(E=S,m+=1,m<a&&(S=r[m],A=g(S)));for(var l=E+p,_=l-E,f=p-_,R=f,w=l,M,y,b,T,C;d<o&&m<a;)v<A?(E=x,d+=1,d<o&&(x=i[d],v=g(x))):(E=S,m+=1,m<a&&(S=r[m],A=g(S))),p=R,l=E+p,_=l-E,f=p-_,f&&(h[u++]=f),M=w+l,y=M-w,b=M-y,T=l-y,C=w-b,R=C+T,w=M;for(;d<o;)E=x,p=R,l=E+p,_=l-E,f=p-_,f&&(h[u++]=f),M=w+l,y=M-w,b=M-y,T=l-y,C=w-b,R=C+T,w=M,d+=1,d<o&&(x=i[d]);for(;m<a;)E=S,p=R,l=E+p,_=l-E,f=p-_,f&&(h[u++]=f),M=w+l,y=M-w,b=M-y,T=l-y,C=w-b,R=C+T,w=M,m+=1,m<a&&(S=r[m]);return R&&(h[u++]=R),w&&(h[u++]=w),u||(h[u++]=0),h.length=u,h}}}),wm=oe({"node_modules/two-sum/two-sum.js"(s,t){"use strict";t.exports=e;function e(n,i,r){var o=n+i,a=o-n,c=o-a,h=i-a,u=n-c;return r?(r[0]=u+h,r[1]=o,r):[u+h,o]}}}),eh=oe({"node_modules/robust-scale/robust-scale.js"(s,t){"use strict";var e=Ga(),n=wm();t.exports=i;function i(r,o){var a=r.length;if(a===1){var c=e(r[0],o);return c[0]?c:[c[1]]}var h=new Array(2*a),u=[.1,.1],d=[.1,.1],m=0;e(r[0],o,u),u[0]&&(h[m++]=u[0]);for(var g=1;g<a;++g){e(r[g],o,d);var x=u[1];n(x,d[0],u),u[0]&&(h[m++]=u[0]);var v=d[1],S=u[1],A=v+S,E=A-v,p=S-E;u[1]=A,p&&(h[m++]=p)}return u[1]&&(h[m++]=u[1]),m===0&&(h[m++]=0),h.length=m,h}}}),nh=oe({"node_modules/robust-subtract/robust-diff.js"(s,t){"use strict";t.exports=n;function e(i,r){var o=i+r,a=o-i,c=o-a,h=r-a,u=i-c,d=u+h;return d?[d,o]:[o]}function n(i,r){var o=i.length|0,a=r.length|0;if(o===1&&a===1)return e(i[0],-r[0]);var c=o+a,h=new Array(c),u=0,d=0,m=0,g=Math.abs,x=i[d],v=g(x),S=-r[m],A=g(S),E,p;v<A?(p=x,d+=1,d<o&&(x=i[d],v=g(x))):(p=S,m+=1,m<a&&(S=-r[m],A=g(S))),d<o&&v<A||m>=a?(E=x,d+=1,d<o&&(x=i[d],v=g(x))):(E=S,m+=1,m<a&&(S=-r[m],A=g(S)));for(var l=E+p,_=l-E,f=p-_,R=f,w=l,M,y,b,T,C;d<o&&m<a;)v<A?(E=x,d+=1,d<o&&(x=i[d],v=g(x))):(E=S,m+=1,m<a&&(S=-r[m],A=g(S))),p=R,l=E+p,_=l-E,f=p-_,f&&(h[u++]=f),M=w+l,y=M-w,b=M-y,T=l-y,C=w-b,R=C+T,w=M;for(;d<o;)E=x,p=R,l=E+p,_=l-E,f=p-_,f&&(h[u++]=f),M=w+l,y=M-w,b=M-y,T=l-y,C=w-b,R=C+T,w=M,d+=1,d<o&&(x=i[d]);for(;m<a;)E=S,p=R,l=E+p,_=l-E,f=p-_,f&&(h[u++]=f),M=w+l,y=M-w,b=M-y,T=l-y,C=w-b,R=C+T,w=M,m+=1,m<a&&(S=-r[m]);return R&&(h[u++]=R),w&&(h[u++]=w),u||(h[u++]=0),h.length=u,h}}}),Tm=oe({"node_modules/robust-orientation/orientation.js"(s,t){"use strict";var e=Ga(),n=th(),i=eh(),r=nh(),o=5,a=11102230246251565e-32,c=(3+16*a)*a,h=(7+56*a)*a;function u(l,_,f,R){return function(M,y,b){var T=l(l(_(y[1],b[0]),_(-b[1],y[0])),l(_(M[1],y[0]),_(-y[1],M[0]))),C=l(_(M[1],b[0]),_(-b[1],M[0])),P=R(T,C);return P[P.length-1]}}function d(l,_,f,R){return function(M,y,b,T){var C=l(l(f(l(_(b[1],T[0]),_(-T[1],b[0])),y[2]),l(f(l(_(y[1],T[0]),_(-T[1],y[0])),-b[2]),f(l(_(y[1],b[0]),_(-b[1],y[0])),T[2]))),l(f(l(_(y[1],T[0]),_(-T[1],y[0])),M[2]),l(f(l(_(M[1],T[0]),_(-T[1],M[0])),-y[2]),f(l(_(M[1],y[0]),_(-y[1],M[0])),T[2])))),P=l(l(f(l(_(b[1],T[0]),_(-T[1],b[0])),M[2]),l(f(l(_(M[1],T[0]),_(-T[1],M[0])),-b[2]),f(l(_(M[1],b[0]),_(-b[1],M[0])),T[2]))),l(f(l(_(y[1],b[0]),_(-b[1],y[0])),M[2]),l(f(l(_(M[1],b[0]),_(-b[1],M[0])),-y[2]),f(l(_(M[1],y[0]),_(-y[1],M[0])),b[2])))),D=R(C,P);return D[D.length-1]}}function m(l,_,f,R){return function(M,y,b,T,C){var P=l(l(l(f(l(f(l(_(T[1],C[0]),_(-C[1],T[0])),b[2]),l(f(l(_(b[1],C[0]),_(-C[1],b[0])),-T[2]),f(l(_(b[1],T[0]),_(-T[1],b[0])),C[2]))),y[3]),l(f(l(f(l(_(T[1],C[0]),_(-C[1],T[0])),y[2]),l(f(l(_(y[1],C[0]),_(-C[1],y[0])),-T[2]),f(l(_(y[1],T[0]),_(-T[1],y[0])),C[2]))),-b[3]),f(l(f(l(_(b[1],C[0]),_(-C[1],b[0])),y[2]),l(f(l(_(y[1],C[0]),_(-C[1],y[0])),-b[2]),f(l(_(y[1],b[0]),_(-b[1],y[0])),C[2]))),T[3]))),l(f(l(f(l(_(b[1],T[0]),_(-T[1],b[0])),y[2]),l(f(l(_(y[1],T[0]),_(-T[1],y[0])),-b[2]),f(l(_(y[1],b[0]),_(-b[1],y[0])),T[2]))),-C[3]),l(f(l(f(l(_(T[1],C[0]),_(-C[1],T[0])),y[2]),l(f(l(_(y[1],C[0]),_(-C[1],y[0])),-T[2]),f(l(_(y[1],T[0]),_(-T[1],y[0])),C[2]))),M[3]),f(l(f(l(_(T[1],C[0]),_(-C[1],T[0])),M[2]),l(f(l(_(M[1],C[0]),_(-C[1],M[0])),-T[2]),f(l(_(M[1],T[0]),_(-T[1],M[0])),C[2]))),-y[3])))),l(l(f(l(f(l(_(y[1],C[0]),_(-C[1],y[0])),M[2]),l(f(l(_(M[1],C[0]),_(-C[1],M[0])),-y[2]),f(l(_(M[1],y[0]),_(-y[1],M[0])),C[2]))),T[3]),l(f(l(f(l(_(y[1],T[0]),_(-T[1],y[0])),M[2]),l(f(l(_(M[1],T[0]),_(-T[1],M[0])),-y[2]),f(l(_(M[1],y[0]),_(-y[1],M[0])),T[2]))),-C[3]),f(l(f(l(_(b[1],T[0]),_(-T[1],b[0])),y[2]),l(f(l(_(y[1],T[0]),_(-T[1],y[0])),-b[2]),f(l(_(y[1],b[0]),_(-b[1],y[0])),T[2]))),M[3]))),l(f(l(f(l(_(b[1],T[0]),_(-T[1],b[0])),M[2]),l(f(l(_(M[1],T[0]),_(-T[1],M[0])),-b[2]),f(l(_(M[1],b[0]),_(-b[1],M[0])),T[2]))),-y[3]),l(f(l(f(l(_(y[1],T[0]),_(-T[1],y[0])),M[2]),l(f(l(_(M[1],T[0]),_(-T[1],M[0])),-y[2]),f(l(_(M[1],y[0]),_(-y[1],M[0])),T[2]))),b[3]),f(l(f(l(_(y[1],b[0]),_(-b[1],y[0])),M[2]),l(f(l(_(M[1],b[0]),_(-b[1],M[0])),-y[2]),f(l(_(M[1],y[0]),_(-y[1],M[0])),b[2]))),-T[3]))))),D=l(l(l(f(l(f(l(_(T[1],C[0]),_(-C[1],T[0])),b[2]),l(f(l(_(b[1],C[0]),_(-C[1],b[0])),-T[2]),f(l(_(b[1],T[0]),_(-T[1],b[0])),C[2]))),M[3]),f(l(f(l(_(T[1],C[0]),_(-C[1],T[0])),M[2]),l(f(l(_(M[1],C[0]),_(-C[1],M[0])),-T[2]),f(l(_(M[1],T[0]),_(-T[1],M[0])),C[2]))),-b[3])),l(f(l(f(l(_(b[1],C[0]),_(-C[1],b[0])),M[2]),l(f(l(_(M[1],C[0]),_(-C[1],M[0])),-b[2]),f(l(_(M[1],b[0]),_(-b[1],M[0])),C[2]))),T[3]),f(l(f(l(_(b[1],T[0]),_(-T[1],b[0])),M[2]),l(f(l(_(M[1],T[0]),_(-T[1],M[0])),-b[2]),f(l(_(M[1],b[0]),_(-b[1],M[0])),T[2]))),-C[3]))),l(l(f(l(f(l(_(b[1],C[0]),_(-C[1],b[0])),y[2]),l(f(l(_(y[1],C[0]),_(-C[1],y[0])),-b[2]),f(l(_(y[1],b[0]),_(-b[1],y[0])),C[2]))),M[3]),f(l(f(l(_(b[1],C[0]),_(-C[1],b[0])),M[2]),l(f(l(_(M[1],C[0]),_(-C[1],M[0])),-b[2]),f(l(_(M[1],b[0]),_(-b[1],M[0])),C[2]))),-y[3])),l(f(l(f(l(_(y[1],C[0]),_(-C[1],y[0])),M[2]),l(f(l(_(M[1],C[0]),_(-C[1],M[0])),-y[2]),f(l(_(M[1],y[0]),_(-y[1],M[0])),C[2]))),b[3]),f(l(f(l(_(y[1],b[0]),_(-b[1],y[0])),M[2]),l(f(l(_(M[1],b[0]),_(-b[1],M[0])),-y[2]),f(l(_(M[1],y[0]),_(-y[1],M[0])),b[2]))),-C[3])))),L=R(P,D);return L[L.length-1]}}function g(l){var _=l===3?u:l===4?d:m;return _(n,e,i,r)}var x=g(3),v=g(4),S=[function(){return 0},function(){return 0},function(_,f){return f[0]-_[0]},function(_,f,R){var w=(_[1]-R[1])*(f[0]-R[0]),M=(_[0]-R[0])*(f[1]-R[1]),y=w-M,b;if(w>0){if(M<=0)return y;b=w+M}else if(w<0){if(M>=0)return y;b=-(w+M)}else return y;var T=c*b;return y>=T||y<=-T?y:x(_,f,R)},function(_,f,R,w){var M=_[0]-w[0],y=f[0]-w[0],b=R[0]-w[0],T=_[1]-w[1],C=f[1]-w[1],P=R[1]-w[1],D=_[2]-w[2],L=f[2]-w[2],U=R[2]-w[2],B=y*P,F=b*C,$=b*T,V=M*P,W=M*C,H=y*T,X=D*(B-F)+L*($-V)+U*(W-H),Y=(Math.abs(B)+Math.abs(F))*Math.abs(D)+(Math.abs($)+Math.abs(V))*Math.abs(L)+(Math.abs(W)+Math.abs(H))*Math.abs(U),ct=h*Y;return X>ct||-X>ct?X:v(_,f,R,w)}];function A(l){var _=S[l.length];return _||(_=S[l.length]=g(l.length)),_.apply(void 0,l)}function E(l,_,f,R,w,M,y){return function(T,C,P,D,L){switch(arguments.length){case 0:case 1:return 0;case 2:return R(T,C);case 3:return w(T,C,P);case 4:return M(T,C,P,D);case 5:return y(T,C,P,D,L)}for(var U=new Array(arguments.length),B=0;B<arguments.length;++B)U[B]=arguments[B];return l(U)}}function p(){for(;S.length<=o;)S.push(g(S.length));t.exports=E.apply(void 0,[A].concat(S));for(var l=0;l<=o;++l)t.exports[l]=S[l]}p()}}),Em=oe({"node_modules/cdt2d/lib/monotone.js"(s,t){"use strict";var e=Bs(),n=Tm()[3],i=0,r=1,o=2;t.exports=v;function a(S,A,E,p,l){this.a=S,this.b=A,this.idx=E,this.lowerIds=p,this.upperIds=l}function c(S,A,E,p){this.a=S,this.b=A,this.type=E,this.idx=p}function h(S,A){var E=S.a[0]-A.a[0]||S.a[1]-A.a[1]||S.type-A.type;return E||S.type!==i&&(E=n(S.a,S.b,A.b),E)?E:S.idx-A.idx}function u(S,A){return n(S.a,S.b,A)}function d(S,A,E,p,l){for(var _=e.lt(A,p,u),f=e.gt(A,p,u),R=_;R<f;++R){for(var w=A[R],M=w.lowerIds,b=M.length;b>1&&n(E[M[b-2]],E[M[b-1]],p)>0;)S.push([M[b-1],M[b-2],l]),b-=1;M.length=b,M.push(l);for(var y=w.upperIds,b=y.length;b>1&&n(E[y[b-2]],E[y[b-1]],p)<0;)S.push([y[b-2],y[b-1],l]),b-=1;y.length=b,y.push(l)}}function m(S,A){var E;return S.a[0]<A.a[0]?E=n(S.a,S.b,A.a):E=n(A.b,A.a,S.a),E||(A.b[0]<S.b[0]?E=n(S.a,S.b,A.b):E=n(A.b,A.a,S.b),E||S.idx-A.idx)}function g(S,A,E){var p=e.le(S,E,m),l=S[p],_=l.upperIds,f=_[_.length-1];l.upperIds=[f],S.splice(p+1,0,new a(E.a,E.b,E.idx,[f],_))}function x(S,A,E){var p=E.a;E.a=E.b,E.b=p;var l=e.eq(S,E,m),_=S[l],f=S[l-1];f.upperIds=_.upperIds,S.splice(l,1)}function v(S,A){for(var E=S.length,p=A.length,l=[],_=0;_<E;++_)l.push(new c(S[_],null,i,_));for(var _=0;_<p;++_){var f=A[_],R=S[f[0]],w=S[f[1]];R[0]<w[0]?l.push(new c(R,w,o,_),new c(w,R,r,_)):R[0]>w[0]&&l.push(new c(w,R,o,_),new c(R,w,r,_))}l.sort(h);for(var M=l[0].a[0]-(1+Math.abs(l[0].a[0]))*Math.pow(2,-52),y=[new a([M,1],[M,0],-1,[],[],[],[])],b=[],_=0,T=l.length;_<T;++_){var C=l[_],P=C.type;P===i?d(b,y,S,C.a,C.idx):P===o?g(y,S,C):x(y,S,C)}return b}}}),Am=oe({"node_modules/cdt2d/lib/triangulation.js"(s,t){"use strict";var e=Bs();t.exports=o;function n(a,c){this.stars=a,this.edges=c}var i=n.prototype;function r(a,c,h){for(var u=1,d=a.length;u<d;u+=2)if(a[u-1]===c&&a[u]===h){a[u-1]=a[d-2],a[u]=a[d-1],a.length=d-2;return}}i.isConstraint=(function(){var a=[0,0];function c(h,u){return h[0]-u[0]||h[1]-u[1]}return function(h,u){return a[0]=Math.min(h,u),a[1]=Math.max(h,u),e.eq(this.edges,a,c)>=0}})(),i.removeTriangle=function(a,c,h){var u=this.stars;r(u[a],c,h),r(u[c],h,a),r(u[h],a,c)},i.addTriangle=function(a,c,h){var u=this.stars;u[a].push(c,h),u[c].push(h,a),u[h].push(a,c)},i.opposite=function(a,c){for(var h=this.stars[c],u=1,d=h.length;u<d;u+=2)if(h[u]===a)return h[u-1];return-1},i.flip=function(a,c){var h=this.opposite(a,c),u=this.opposite(c,a);this.removeTriangle(a,c,h),this.removeTriangle(c,a,u),this.addTriangle(a,u,h),this.addTriangle(c,h,u)},i.edges=function(){for(var a=this.stars,c=[],h=0,u=a.length;h<u;++h)for(var d=a[h],m=0,g=d.length;m<g;m+=2)c.push([d[m],d[m+1]]);return c},i.cells=function(){for(var a=this.stars,c=[],h=0,u=a.length;h<u;++h)for(var d=a[h],m=0,g=d.length;m<g;m+=2){var x=d[m],v=d[m+1];h<Math.min(x,v)&&c.push([h,x,v])}return c};function o(a,c){for(var h=new Array(a),u=0;u<a;++u)h[u]=[];return new n(h,c)}}}),Cm=oe({"node_modules/robust-in-sphere/in-sphere.js"(s,t){"use strict";var e=Ga(),n=th(),i=nh(),r=eh(),o=6;function a(p){var l=p===3?d:p===4?m:p===5?g:x;return l(n,i,e,r)}function c(){return 0}function h(){return 0}function u(){return 0}function d(p,l,_,f){function R(w,M,y){var b=_(w[0],w[0]),T=f(b,M[0]),C=f(b,y[0]),P=_(M[0],M[0]),D=f(P,w[0]),L=f(P,y[0]),U=_(y[0],y[0]),B=f(U,w[0]),F=f(U,M[0]),$=p(l(F,L),l(D,T)),V=l(B,C),W=l($,V);return W[W.length-1]}return R}function m(p,l,_,f){function R(w,M,y,b){var T=p(_(w[0],w[0]),_(w[1],w[1])),C=f(T,M[0]),P=f(T,y[0]),D=f(T,b[0]),L=p(_(M[0],M[0]),_(M[1],M[1])),U=f(L,w[0]),B=f(L,y[0]),F=f(L,b[0]),$=p(_(y[0],y[0]),_(y[1],y[1])),V=f($,w[0]),W=f($,M[0]),H=f($,b[0]),X=p(_(b[0],b[0]),_(b[1],b[1])),Y=f(X,w[0]),ct=f(X,M[0]),et=f(X,y[0]),nt=p(p(f(l(et,H),M[1]),p(f(l(ct,F),-y[1]),f(l(W,B),b[1]))),p(f(l(ct,F),w[1]),p(f(l(Y,D),-M[1]),f(l(U,C),b[1])))),Q=p(p(f(l(et,H),w[1]),p(f(l(Y,D),-y[1]),f(l(V,P),b[1]))),p(f(l(W,B),w[1]),p(f(l(V,P),-M[1]),f(l(U,C),y[1])))),it=l(nt,Q);return it[it.length-1]}return R}function g(p,l,_,f){function R(w,M,y,b,T){var C=p(_(w[0],w[0]),p(_(w[1],w[1]),_(w[2],w[2]))),P=f(C,M[0]),D=f(C,y[0]),L=f(C,b[0]),U=f(C,T[0]),B=p(_(M[0],M[0]),p(_(M[1],M[1]),_(M[2],M[2]))),F=f(B,w[0]),$=f(B,y[0]),V=f(B,b[0]),W=f(B,T[0]),H=p(_(y[0],y[0]),p(_(y[1],y[1]),_(y[2],y[2]))),X=f(H,w[0]),Y=f(H,M[0]),ct=f(H,b[0]),et=f(H,T[0]),nt=p(_(b[0],b[0]),p(_(b[1],b[1]),_(b[2],b[2]))),Q=f(nt,w[0]),it=f(nt,M[0]),lt=f(nt,y[0]),yt=f(nt,T[0]),st=p(_(T[0],T[0]),p(_(T[1],T[1]),_(T[2],T[2]))),N=f(st,w[0]),O=f(st,M[0]),z=f(st,y[0]),k=f(st,b[0]),J=p(p(p(f(p(f(l(k,yt),y[1]),p(f(l(z,et),-b[1]),f(l(lt,ct),T[1]))),M[2]),p(f(p(f(l(k,yt),M[1]),p(f(l(O,W),-b[1]),f(l(it,V),T[1]))),-y[2]),f(p(f(l(z,et),M[1]),p(f(l(O,W),-y[1]),f(l(Y,$),T[1]))),b[2]))),p(f(p(f(l(lt,ct),M[1]),p(f(l(it,V),-y[1]),f(l(Y,$),b[1]))),-T[2]),p(f(p(f(l(k,yt),M[1]),p(f(l(O,W),-b[1]),f(l(it,V),T[1]))),w[2]),f(p(f(l(k,yt),w[1]),p(f(l(N,U),-b[1]),f(l(Q,L),T[1]))),-M[2])))),p(p(f(p(f(l(O,W),w[1]),p(f(l(N,U),-M[1]),f(l(F,P),T[1]))),b[2]),p(f(p(f(l(it,V),w[1]),p(f(l(Q,L),-M[1]),f(l(F,P),b[1]))),-T[2]),f(p(f(l(lt,ct),M[1]),p(f(l(it,V),-y[1]),f(l(Y,$),b[1]))),w[2]))),p(f(p(f(l(lt,ct),w[1]),p(f(l(Q,L),-y[1]),f(l(X,D),b[1]))),-M[2]),p(f(p(f(l(it,V),w[1]),p(f(l(Q,L),-M[1]),f(l(F,P),b[1]))),y[2]),f(p(f(l(Y,$),w[1]),p(f(l(X,D),-M[1]),f(l(F,P),y[1]))),-b[2]))))),K=p(p(p(f(p(f(l(k,yt),y[1]),p(f(l(z,et),-b[1]),f(l(lt,ct),T[1]))),w[2]),f(p(f(l(k,yt),w[1]),p(f(l(N,U),-b[1]),f(l(Q,L),T[1]))),-y[2])),p(f(p(f(l(z,et),w[1]),p(f(l(N,U),-y[1]),f(l(X,D),T[1]))),b[2]),f(p(f(l(lt,ct),w[1]),p(f(l(Q,L),-y[1]),f(l(X,D),b[1]))),-T[2]))),p(p(f(p(f(l(z,et),M[1]),p(f(l(O,W),-y[1]),f(l(Y,$),T[1]))),w[2]),f(p(f(l(z,et),w[1]),p(f(l(N,U),-y[1]),f(l(X,D),T[1]))),-M[2])),p(f(p(f(l(O,W),w[1]),p(f(l(N,U),-M[1]),f(l(F,P),T[1]))),y[2]),f(p(f(l(Y,$),w[1]),p(f(l(X,D),-M[1]),f(l(F,P),y[1]))),-T[2])))),Z=l(J,K);return Z[Z.length-1]}return R}function x(p,l,_,f){function R(w,M,y,b,T,C){var P=p(p(_(w[0],w[0]),_(w[1],w[1])),p(_(w[2],w[2]),_(w[3],w[3]))),D=f(P,M[0]),L=f(P,y[0]),U=f(P,b[0]),B=f(P,T[0]),F=f(P,C[0]),$=p(p(_(M[0],M[0]),_(M[1],M[1])),p(_(M[2],M[2]),_(M[3],M[3]))),V=f($,w[0]),W=f($,y[0]),H=f($,b[0]),X=f($,T[0]),Y=f($,C[0]),ct=p(p(_(y[0],y[0]),_(y[1],y[1])),p(_(y[2],y[2]),_(y[3],y[3]))),et=f(ct,w[0]),nt=f(ct,M[0]),Q=f(ct,b[0]),it=f(ct,T[0]),lt=f(ct,C[0]),yt=p(p(_(b[0],b[0]),_(b[1],b[1])),p(_(b[2],b[2]),_(b[3],b[3]))),st=f(yt,w[0]),N=f(yt,M[0]),O=f(yt,y[0]),z=f(yt,T[0]),k=f(yt,C[0]),J=p(p(_(T[0],T[0]),_(T[1],T[1])),p(_(T[2],T[2]),_(T[3],T[3]))),K=f(J,w[0]),Z=f(J,M[0]),j=f(J,y[0]),tt=f(J,b[0]),rt=f(J,C[0]),zt=p(p(_(C[0],C[0]),_(C[1],C[1])),p(_(C[2],C[2]),_(C[3],C[3]))),mt=f(zt,w[0]),ht=f(zt,M[0]),bt=f(zt,y[0]),wt=f(zt,b[0]),Tt=f(zt,T[0]),so=p(p(p(f(p(p(f(p(f(l(Tt,rt),b[1]),p(f(l(wt,k),-T[1]),f(l(tt,z),C[1]))),y[2]),f(p(f(l(Tt,rt),y[1]),p(f(l(bt,lt),-T[1]),f(l(j,it),C[1]))),-b[2])),p(f(p(f(l(wt,k),y[1]),p(f(l(bt,lt),-b[1]),f(l(O,Q),C[1]))),T[2]),f(p(f(l(tt,z),y[1]),p(f(l(j,it),-b[1]),f(l(O,Q),T[1]))),-C[2]))),M[3]),p(f(p(p(f(p(f(l(Tt,rt),b[1]),p(f(l(wt,k),-T[1]),f(l(tt,z),C[1]))),M[2]),f(p(f(l(Tt,rt),M[1]),p(f(l(ht,Y),-T[1]),f(l(Z,X),C[1]))),-b[2])),p(f(p(f(l(wt,k),M[1]),p(f(l(ht,Y),-b[1]),f(l(N,H),C[1]))),T[2]),f(p(f(l(tt,z),M[1]),p(f(l(Z,X),-b[1]),f(l(N,H),T[1]))),-C[2]))),-y[3]),f(p(p(f(p(f(l(Tt,rt),y[1]),p(f(l(bt,lt),-T[1]),f(l(j,it),C[1]))),M[2]),f(p(f(l(Tt,rt),M[1]),p(f(l(ht,Y),-T[1]),f(l(Z,X),C[1]))),-y[2])),p(f(p(f(l(bt,lt),M[1]),p(f(l(ht,Y),-y[1]),f(l(nt,W),C[1]))),T[2]),f(p(f(l(j,it),M[1]),p(f(l(Z,X),-y[1]),f(l(nt,W),T[1]))),-C[2]))),b[3]))),p(p(f(p(p(f(p(f(l(wt,k),y[1]),p(f(l(bt,lt),-b[1]),f(l(O,Q),C[1]))),M[2]),f(p(f(l(wt,k),M[1]),p(f(l(ht,Y),-b[1]),f(l(N,H),C[1]))),-y[2])),p(f(p(f(l(bt,lt),M[1]),p(f(l(ht,Y),-y[1]),f(l(nt,W),C[1]))),b[2]),f(p(f(l(O,Q),M[1]),p(f(l(N,H),-y[1]),f(l(nt,W),b[1]))),-C[2]))),-T[3]),f(p(p(f(p(f(l(tt,z),y[1]),p(f(l(j,it),-b[1]),f(l(O,Q),T[1]))),M[2]),f(p(f(l(tt,z),M[1]),p(f(l(Z,X),-b[1]),f(l(N,H),T[1]))),-y[2])),p(f(p(f(l(j,it),M[1]),p(f(l(Z,X),-y[1]),f(l(nt,W),T[1]))),b[2]),f(p(f(l(O,Q),M[1]),p(f(l(N,H),-y[1]),f(l(nt,W),b[1]))),-T[2]))),C[3])),p(f(p(p(f(p(f(l(Tt,rt),b[1]),p(f(l(wt,k),-T[1]),f(l(tt,z),C[1]))),M[2]),f(p(f(l(Tt,rt),M[1]),p(f(l(ht,Y),-T[1]),f(l(Z,X),C[1]))),-b[2])),p(f(p(f(l(wt,k),M[1]),p(f(l(ht,Y),-b[1]),f(l(N,H),C[1]))),T[2]),f(p(f(l(tt,z),M[1]),p(f(l(Z,X),-b[1]),f(l(N,H),T[1]))),-C[2]))),w[3]),f(p(p(f(p(f(l(Tt,rt),b[1]),p(f(l(wt,k),-T[1]),f(l(tt,z),C[1]))),w[2]),f(p(f(l(Tt,rt),w[1]),p(f(l(mt,F),-T[1]),f(l(K,B),C[1]))),-b[2])),p(f(p(f(l(wt,k),w[1]),p(f(l(mt,F),-b[1]),f(l(st,U),C[1]))),T[2]),f(p(f(l(tt,z),w[1]),p(f(l(K,B),-b[1]),f(l(st,U),T[1]))),-C[2]))),-M[3])))),p(p(p(f(p(p(f(p(f(l(Tt,rt),M[1]),p(f(l(ht,Y),-T[1]),f(l(Z,X),C[1]))),w[2]),f(p(f(l(Tt,rt),w[1]),p(f(l(mt,F),-T[1]),f(l(K,B),C[1]))),-M[2])),p(f(p(f(l(ht,Y),w[1]),p(f(l(mt,F),-M[1]),f(l(V,D),C[1]))),T[2]),f(p(f(l(Z,X),w[1]),p(f(l(K,B),-M[1]),f(l(V,D),T[1]))),-C[2]))),b[3]),f(p(p(f(p(f(l(wt,k),M[1]),p(f(l(ht,Y),-b[1]),f(l(N,H),C[1]))),w[2]),f(p(f(l(wt,k),w[1]),p(f(l(mt,F),-b[1]),f(l(st,U),C[1]))),-M[2])),p(f(p(f(l(ht,Y),w[1]),p(f(l(mt,F),-M[1]),f(l(V,D),C[1]))),b[2]),f(p(f(l(N,H),w[1]),p(f(l(st,U),-M[1]),f(l(V,D),b[1]))),-C[2]))),-T[3])),p(f(p(p(f(p(f(l(tt,z),M[1]),p(f(l(Z,X),-b[1]),f(l(N,H),T[1]))),w[2]),f(p(f(l(tt,z),w[1]),p(f(l(K,B),-b[1]),f(l(st,U),T[1]))),-M[2])),p(f(p(f(l(Z,X),w[1]),p(f(l(K,B),-M[1]),f(l(V,D),T[1]))),b[2]),f(p(f(l(N,H),w[1]),p(f(l(st,U),-M[1]),f(l(V,D),b[1]))),-T[2]))),C[3]),f(p(p(f(p(f(l(wt,k),y[1]),p(f(l(bt,lt),-b[1]),f(l(O,Q),C[1]))),M[2]),f(p(f(l(wt,k),M[1]),p(f(l(ht,Y),-b[1]),f(l(N,H),C[1]))),-y[2])),p(f(p(f(l(bt,lt),M[1]),p(f(l(ht,Y),-y[1]),f(l(nt,W),C[1]))),b[2]),f(p(f(l(O,Q),M[1]),p(f(l(N,H),-y[1]),f(l(nt,W),b[1]))),-C[2]))),w[3]))),p(p(f(p(p(f(p(f(l(wt,k),y[1]),p(f(l(bt,lt),-b[1]),f(l(O,Q),C[1]))),w[2]),f(p(f(l(wt,k),w[1]),p(f(l(mt,F),-b[1]),f(l(st,U),C[1]))),-y[2])),p(f(p(f(l(bt,lt),w[1]),p(f(l(mt,F),-y[1]),f(l(et,L),C[1]))),b[2]),f(p(f(l(O,Q),w[1]),p(f(l(st,U),-y[1]),f(l(et,L),b[1]))),-C[2]))),-M[3]),f(p(p(f(p(f(l(wt,k),M[1]),p(f(l(ht,Y),-b[1]),f(l(N,H),C[1]))),w[2]),f(p(f(l(wt,k),w[1]),p(f(l(mt,F),-b[1]),f(l(st,U),C[1]))),-M[2])),p(f(p(f(l(ht,Y),w[1]),p(f(l(mt,F),-M[1]),f(l(V,D),C[1]))),b[2]),f(p(f(l(N,H),w[1]),p(f(l(st,U),-M[1]),f(l(V,D),b[1]))),-C[2]))),y[3])),p(f(p(p(f(p(f(l(bt,lt),M[1]),p(f(l(ht,Y),-y[1]),f(l(nt,W),C[1]))),w[2]),f(p(f(l(bt,lt),w[1]),p(f(l(mt,F),-y[1]),f(l(et,L),C[1]))),-M[2])),p(f(p(f(l(ht,Y),w[1]),p(f(l(mt,F),-M[1]),f(l(V,D),C[1]))),y[2]),f(p(f(l(nt,W),w[1]),p(f(l(et,L),-M[1]),f(l(V,D),y[1]))),-C[2]))),-b[3]),f(p(p(f(p(f(l(O,Q),M[1]),p(f(l(N,H),-y[1]),f(l(nt,W),b[1]))),w[2]),f(p(f(l(O,Q),w[1]),p(f(l(st,U),-y[1]),f(l(et,L),b[1]))),-M[2])),p(f(p(f(l(N,H),w[1]),p(f(l(st,U),-M[1]),f(l(V,D),b[1]))),y[2]),f(p(f(l(nt,W),w[1]),p(f(l(et,L),-M[1]),f(l(V,D),y[1]))),-b[2]))),C[3]))))),oo=p(p(p(f(p(p(f(p(f(l(Tt,rt),b[1]),p(f(l(wt,k),-T[1]),f(l(tt,z),C[1]))),y[2]),f(p(f(l(Tt,rt),y[1]),p(f(l(bt,lt),-T[1]),f(l(j,it),C[1]))),-b[2])),p(f(p(f(l(wt,k),y[1]),p(f(l(bt,lt),-b[1]),f(l(O,Q),C[1]))),T[2]),f(p(f(l(tt,z),y[1]),p(f(l(j,it),-b[1]),f(l(O,Q),T[1]))),-C[2]))),w[3]),p(f(p(p(f(p(f(l(Tt,rt),b[1]),p(f(l(wt,k),-T[1]),f(l(tt,z),C[1]))),w[2]),f(p(f(l(Tt,rt),w[1]),p(f(l(mt,F),-T[1]),f(l(K,B),C[1]))),-b[2])),p(f(p(f(l(wt,k),w[1]),p(f(l(mt,F),-b[1]),f(l(st,U),C[1]))),T[2]),f(p(f(l(tt,z),w[1]),p(f(l(K,B),-b[1]),f(l(st,U),T[1]))),-C[2]))),-y[3]),f(p(p(f(p(f(l(Tt,rt),y[1]),p(f(l(bt,lt),-T[1]),f(l(j,it),C[1]))),w[2]),f(p(f(l(Tt,rt),w[1]),p(f(l(mt,F),-T[1]),f(l(K,B),C[1]))),-y[2])),p(f(p(f(l(bt,lt),w[1]),p(f(l(mt,F),-y[1]),f(l(et,L),C[1]))),T[2]),f(p(f(l(j,it),w[1]),p(f(l(K,B),-y[1]),f(l(et,L),T[1]))),-C[2]))),b[3]))),p(p(f(p(p(f(p(f(l(wt,k),y[1]),p(f(l(bt,lt),-b[1]),f(l(O,Q),C[1]))),w[2]),f(p(f(l(wt,k),w[1]),p(f(l(mt,F),-b[1]),f(l(st,U),C[1]))),-y[2])),p(f(p(f(l(bt,lt),w[1]),p(f(l(mt,F),-y[1]),f(l(et,L),C[1]))),b[2]),f(p(f(l(O,Q),w[1]),p(f(l(st,U),-y[1]),f(l(et,L),b[1]))),-C[2]))),-T[3]),f(p(p(f(p(f(l(tt,z),y[1]),p(f(l(j,it),-b[1]),f(l(O,Q),T[1]))),w[2]),f(p(f(l(tt,z),w[1]),p(f(l(K,B),-b[1]),f(l(st,U),T[1]))),-y[2])),p(f(p(f(l(j,it),w[1]),p(f(l(K,B),-y[1]),f(l(et,L),T[1]))),b[2]),f(p(f(l(O,Q),w[1]),p(f(l(st,U),-y[1]),f(l(et,L),b[1]))),-T[2]))),C[3])),p(f(p(p(f(p(f(l(Tt,rt),y[1]),p(f(l(bt,lt),-T[1]),f(l(j,it),C[1]))),M[2]),f(p(f(l(Tt,rt),M[1]),p(f(l(ht,Y),-T[1]),f(l(Z,X),C[1]))),-y[2])),p(f(p(f(l(bt,lt),M[1]),p(f(l(ht,Y),-y[1]),f(l(nt,W),C[1]))),T[2]),f(p(f(l(j,it),M[1]),p(f(l(Z,X),-y[1]),f(l(nt,W),T[1]))),-C[2]))),w[3]),f(p(p(f(p(f(l(Tt,rt),y[1]),p(f(l(bt,lt),-T[1]),f(l(j,it),C[1]))),w[2]),f(p(f(l(Tt,rt),w[1]),p(f(l(mt,F),-T[1]),f(l(K,B),C[1]))),-y[2])),p(f(p(f(l(bt,lt),w[1]),p(f(l(mt,F),-y[1]),f(l(et,L),C[1]))),T[2]),f(p(f(l(j,it),w[1]),p(f(l(K,B),-y[1]),f(l(et,L),T[1]))),-C[2]))),-M[3])))),p(p(p(f(p(p(f(p(f(l(Tt,rt),M[1]),p(f(l(ht,Y),-T[1]),f(l(Z,X),C[1]))),w[2]),f(p(f(l(Tt,rt),w[1]),p(f(l(mt,F),-T[1]),f(l(K,B),C[1]))),-M[2])),p(f(p(f(l(ht,Y),w[1]),p(f(l(mt,F),-M[1]),f(l(V,D),C[1]))),T[2]),f(p(f(l(Z,X),w[1]),p(f(l(K,B),-M[1]),f(l(V,D),T[1]))),-C[2]))),y[3]),f(p(p(f(p(f(l(bt,lt),M[1]),p(f(l(ht,Y),-y[1]),f(l(nt,W),C[1]))),w[2]),f(p(f(l(bt,lt),w[1]),p(f(l(mt,F),-y[1]),f(l(et,L),C[1]))),-M[2])),p(f(p(f(l(ht,Y),w[1]),p(f(l(mt,F),-M[1]),f(l(V,D),C[1]))),y[2]),f(p(f(l(nt,W),w[1]),p(f(l(et,L),-M[1]),f(l(V,D),y[1]))),-C[2]))),-T[3])),p(f(p(p(f(p(f(l(j,it),M[1]),p(f(l(Z,X),-y[1]),f(l(nt,W),T[1]))),w[2]),f(p(f(l(j,it),w[1]),p(f(l(K,B),-y[1]),f(l(et,L),T[1]))),-M[2])),p(f(p(f(l(Z,X),w[1]),p(f(l(K,B),-M[1]),f(l(V,D),T[1]))),y[2]),f(p(f(l(nt,W),w[1]),p(f(l(et,L),-M[1]),f(l(V,D),y[1]))),-T[2]))),C[3]),f(p(p(f(p(f(l(tt,z),y[1]),p(f(l(j,it),-b[1]),f(l(O,Q),T[1]))),M[2]),f(p(f(l(tt,z),M[1]),p(f(l(Z,X),-b[1]),f(l(N,H),T[1]))),-y[2])),p(f(p(f(l(j,it),M[1]),p(f(l(Z,X),-y[1]),f(l(nt,W),T[1]))),b[2]),f(p(f(l(O,Q),M[1]),p(f(l(N,H),-y[1]),f(l(nt,W),b[1]))),-T[2]))),w[3]))),p(p(f(p(p(f(p(f(l(tt,z),y[1]),p(f(l(j,it),-b[1]),f(l(O,Q),T[1]))),w[2]),f(p(f(l(tt,z),w[1]),p(f(l(K,B),-b[1]),f(l(st,U),T[1]))),-y[2])),p(f(p(f(l(j,it),w[1]),p(f(l(K,B),-y[1]),f(l(et,L),T[1]))),b[2]),f(p(f(l(O,Q),w[1]),p(f(l(st,U),-y[1]),f(l(et,L),b[1]))),-T[2]))),-M[3]),f(p(p(f(p(f(l(tt,z),M[1]),p(f(l(Z,X),-b[1]),f(l(N,H),T[1]))),w[2]),f(p(f(l(tt,z),w[1]),p(f(l(K,B),-b[1]),f(l(st,U),T[1]))),-M[2])),p(f(p(f(l(Z,X),w[1]),p(f(l(K,B),-M[1]),f(l(V,D),T[1]))),b[2]),f(p(f(l(N,H),w[1]),p(f(l(st,U),-M[1]),f(l(V,D),b[1]))),-T[2]))),y[3])),p(f(p(p(f(p(f(l(j,it),M[1]),p(f(l(Z,X),-y[1]),f(l(nt,W),T[1]))),w[2]),f(p(f(l(j,it),w[1]),p(f(l(K,B),-y[1]),f(l(et,L),T[1]))),-M[2])),p(f(p(f(l(Z,X),w[1]),p(f(l(K,B),-M[1]),f(l(V,D),T[1]))),y[2]),f(p(f(l(nt,W),w[1]),p(f(l(et,L),-M[1]),f(l(V,D),y[1]))),-T[2]))),-b[3]),f(p(p(f(p(f(l(O,Q),M[1]),p(f(l(N,H),-y[1]),f(l(nt,W),b[1]))),w[2]),f(p(f(l(O,Q),w[1]),p(f(l(st,U),-y[1]),f(l(et,L),b[1]))),-M[2])),p(f(p(f(l(N,H),w[1]),p(f(l(st,U),-M[1]),f(l(V,D),b[1]))),y[2]),f(p(f(l(nt,W),w[1]),p(f(l(et,L),-M[1]),f(l(V,D),y[1]))),-b[2]))),T[3]))))),_i=l(so,oo);return _i[_i.length-1]}return R}var v=[c,h,u];function S(p){var l=v[p.length];return l||(l=v[p.length]=a(p.length)),l.apply(void 0,p)}function A(p,l,_,f,R,w,M,y){function b(T,C,P,D,L,U){switch(arguments.length){case 0:case 1:return 0;case 2:return f(T,C);case 3:return R(T,C,P);case 4:return w(T,C,P,D);case 5:return M(T,C,P,D,L);case 6:return y(T,C,P,D,L,U)}for(var B=new Array(arguments.length),F=0;F<arguments.length;++F)B[F]=arguments[F];return p(B)}return b}function E(){for(;v.length<=o;)v.push(a(v.length));t.exports=A.apply(void 0,[S].concat(v));for(var p=0;p<=o;++p)t.exports[p]=v[p]}E()}}),Rm=oe({"node_modules/cdt2d/lib/delaunay.js"(s,t){"use strict";var e=Cm()[4],n=Bs();t.exports=r;function i(o,a,c,h,u,d){var m=a.opposite(h,u);if(!(m<0)){if(u<h){var g=h;h=u,u=g,g=d,d=m,m=g}a.isConstraint(h,u)||e(o[h],o[u],o[d],o[m])<0&&c.push(h,u)}}function r(o,a){for(var c=[],h=o.length,u=a.stars,d=0;d<h;++d)for(var m=u[d],g=1;g<m.length;g+=2){var x=m[g];if(!(x<d)&&!a.isConstraint(d,x)){for(var v=m[g-1],S=-1,A=1;A<m.length;A+=2)if(m[A-1]===x){S=m[A];break}S<0||e(o[d],o[x],o[v],o[S])<0&&c.push(d,x)}}for(;c.length>0;){for(var x=c.pop(),d=c.pop(),v=-1,S=-1,m=u[d],E=1;E<m.length;E+=2){var p=m[E-1],l=m[E];p===x?S=l:l===x&&(v=p)}v<0||S<0||e(o[d],o[x],o[v],o[S])>=0||(a.flip(d,x),i(o,a,c,v,d,S),i(o,a,c,d,S,v),i(o,a,c,S,x,v),i(o,a,c,x,v,S))}}}}),Im=oe({"node_modules/cdt2d/lib/filter.js"(s,t){"use strict";var e=Bs();t.exports=c;function n(h,u,d,m,g,x,v){this.cells=h,this.neighbor=u,this.flags=m,this.constraint=d,this.active=g,this.next=x,this.boundary=v}var i=n.prototype;function r(h,u){return h[0]-u[0]||h[1]-u[1]||h[2]-u[2]}i.locate=(function(){var h=[0,0,0];return function(u,d,m){var g=u,x=d,v=m;return d<m?d<u&&(g=d,x=m,v=u):m<u&&(g=m,x=u,v=d),g<0?-1:(h[0]=g,h[1]=x,h[2]=v,e.eq(this.cells,h,r))}})();function o(h,u){for(var d=h.cells(),m=d.length,g=0;g<m;++g){var x=d[g],v=x[0],S=x[1],A=x[2];S<A?S<v&&(x[0]=S,x[1]=A,x[2]=v):A<v&&(x[0]=A,x[1]=v,x[2]=S)}d.sort(r);for(var E=new Array(m),g=0;g<E.length;++g)E[g]=0;var p=[],l=[],_=new Array(3*m),f=new Array(3*m),R=null;u&&(R=[]);for(var w=new n(d,_,f,E,p,l,R),g=0;g<m;++g)for(var x=d[g],M=0;M<3;++M){var v=x[M],S=x[(M+1)%3],y=_[3*g+M]=w.locate(S,v,h.opposite(S,v)),b=f[3*g+M]=h.isConstraint(v,S);y<0&&(b?l.push(g):(p.push(g),E[g]=1),u&&R.push([S,v,-1]))}return w}function a(h,u,d){for(var m=0,g=0;g<h.length;++g)u[g]===d&&(h[m++]=h[g]);return h.length=m,h}function c(h,u,d){var m=o(h,d);if(u===0)return d?m.cells.concat(m.boundary):m.cells;for(var g=1,x=m.active,v=m.next,S=m.flags,A=m.cells,E=m.constraint,p=m.neighbor;x.length>0||v.length>0;){for(;x.length>0;){var l=x.pop();if(S[l]!==-g){S[l]=g;for(var _=A[l],f=0;f<3;++f){var R=p[3*l+f];R>=0&&S[R]===0&&(E[3*l+f]?v.push(R):(x.push(R),S[R]=g))}}}var w=v;v=x,x=w,v.length=0,g=-g}var M=a(A,S,u);return d?M.concat(m.boundary):M}}}),Pm=oe({"node_modules/cdt2d/cdt2d.js"(s,t){var e=Em(),n=Am(),i=Rm(),r=Im();t.exports=u;function o(d){return[Math.min(d[0],d[1]),Math.max(d[0],d[1])]}function a(d,m){return d[0]-m[0]||d[1]-m[1]}function c(d){return d.map(o).sort(a)}function h(d,m,g){return m in d?d[m]:g}function u(d,m,g){Array.isArray(m)?(g=g||{},m=m||[]):(g=m||{},m=[]);var x=!!h(g,"delaunay",!0),v=!!h(g,"interior",!0),S=!!h(g,"exterior",!0),A=!!h(g,"infinity",!1);if(!v&&!S||d.length===0)return[];var E=e(d,m);if(x||v!==S||A){for(var p=n(d.length,c(m)),l=0;l<E.length;++l){var _=E[l];p.addTriangle(_[0],_[1],_[2])}return x&&i(d,p),S?v?A?r(p,0,A):p.cells():r(p,1,A):r(p,-1)}else return E}}}),ih=Pm();var ae=class{constructor(t){this.createFn=t,this._pool=[],this._index=0}getInstance(){return this._index>=this._pool.length&&this._pool.push(this.createFn()),this._pool[this._index++]}clear(){this._index=0}reset(){this._pool.length=0,this._index=0}};var rh=1e-16,Dm=1e-16,Mn=new I,sh=new I,oh=new ae(()=>({param:0,index:0})),Lm=new ae(()=>new I);function Um(s,t,e,n){oh.clear(),t.length=0,e.length=0;for(let h=0,u=s.length;h<u;h++){let d=s[h];c(d.start),c(d.end)}for(let h=0,u=s.length;h<u;h++){let d=s[h];for(let m=h+1;m<u;m++){let g=s[m];d.distanceSqToLine3(g,Mn,sh)<rh*n&&c(sh)}}let i=[];for(let h=0,u=s.length;h<u;h++){i.length=0;let d=s[h];for(let m=0,g=t.length;m<g;m++){let x=t[m],v=d.closestPointToPointParameter(x,!0);if(d.at(v,Mn),x.distanceToSquared(Mn)<rh*n){let S=oh.getInstance();S.param=v,S.index=m,i.push(S)}}i.sort(a);for(let m=0,g=i.length-1;m<g;m++){let x=i[m].index,v=i[m+1].index;x!==v&&e.push([x,v])}}let r=new Set,o=0;for(let h=0,u=e.length;h<u;h++){let d=e[h],m=Math.min(d[0],d[1]),g=Math.max(d[0],d[1]),x=m+","+g;r.has(x)||(r.add(x),e[o++]=d)}e.length=o;function a(h,u){return h.param-u.param}function c(h){for(let u=0;u<t.length;u++){let d=t[u];if(h===d||h.distanceToSquared(d)<Dm*n)return u}return t.push(Lm.getInstance().copy(h)),t.length-1}}var er=class{constructor(){this.trianglePool=new ae(()=>new Ut),this.linePool=new ae(()=>new Mt),this.triangles=[],this.triangleIndices=[],this.constrainedEdges=[],this.triangleConnectivity=[],this.normal=new I,this.projOrigin=new I,this.projU=new I,this.projV=new I,this.baseTri=new Ut,this.baseIndices=new Array(3)}initialize(t,e=null,n=null,i=null){this.reset();let{normal:r,baseTri:o,projU:a,projV:c,projOrigin:h,constrainedEdges:u,linePool:d,baseIndices:m}=this;t.getNormal(r),o.copy(t),o.update(),m[0]=e,m[1]=n,m[2]=i,u.length=0;let g=d.getInstance();g.start.copy(o.a),g.end.copy(o.b);let x=d.getInstance();x.start.copy(o.b),x.end.copy(o.c);let v=d.getInstance();v.start.copy(o.c),v.end.copy(o.a),u.push(g,x,v),h.copy(o.a),a.subVectors(o.b,o.a).normalize(),c.crossVectors(r,a).normalize()}addConstraintEdge(t){let{constrainedEdges:e,linePool:n}=this,i=n.getInstance().copy(t);e.push(i)}_to2D(t,e){let{projOrigin:n,projU:i,projV:r}=this;return Mn.subVectors(t,n),e.set(Mn.dot(i),Mn.dot(r),0)}_from2D(t,e,n){let{projOrigin:i,projU:r,projV:o}=this;return n.copy(i).addScaledVector(r,t).addScaledVector(o,e),n}triangulate(){let{triangles:t,trianglePool:e,triangleConnectivity:n,triangleIndices:i,linePool:r,baseTri:o,constrainedEdges:a,baseIndices:c}=this;t.length=0,e.clear();let h=[];for(let A=0,E=a.length;A<E;A++){let p=a[A],l=r.getInstance();this._to2D(p.start,l.start),this._to2D(p.end,l.end),h.push(l)}let u=0;for(let A=0;A<3;A++){let E=this._to2D(o.points[A],Mn);u=Math.max(u,Math.abs(E.x),Math.abs(E.y))}let d=[],m=[];Um(h,d,m,u);let g=[];for(let A=0,E=d.length;A<E;A++){let p=d[A];g.push([p.x,p.y])}let x=ih(g,m,{exterior:!1}),v=new Map;for(let A=0,E=m.length;A<E;A++){let p=m[A];v.set(`${p[0]}_${p[1]}`,-1),v.set(`${p[1]}_${p[0]}`,-1)}let S=`${c[0]}_${c[1]}_${c[2]}_`;for(let A=0,E=x.length;A<E;A++){let p=x[A],[l,_,f]=p,R=e.getInstance();this._from2D(g[l][0],g[l][1],R.a),this._from2D(g[_][0],g[_][1],R.b),this._from2D(g[f][0],g[f][1],R.c),t.push(R);let w=[];n.push(w);let M=[];i.push(M);for(let y=0;y<3;y++){let b=p[y];M.push(b<3?c[b]:S+b);let T=p[(y+1)%3],C=`${b}_${T}`;if(v.has(C)){let P=v.get(C);P!==-1&&(w.push(P),n[P].push(A))}else{let P=`${T}_${b}`;v.set(P,A)}}}}reset(){this.trianglePool.clear(),this.linePool.clear(),this.triangles.length=0,this.triangleIndices.length=0,this.triangleConnectivity.length=0,this.constrainedEdges.length=0}};var Nm=1e-14,Wa=new I,ah=new I,ch=new I;function Se(s,t=Nm){Wa.subVectors(s.b,s.a),ah.subVectors(s.c,s.a),ch.subVectors(s.b,s.c);let e=Wa.angleTo(ah),n=Wa.angleTo(ch),i=Math.PI-e-n;return Math.abs(e)<t||Math.abs(n)<t||Math.abs(i)<t||s.a.distanceToSquared(s.b)<t||s.a.distanceToSquared(s.c)<t||s.b.distanceToSquared(s.c)<t}var Xa=1e-10,nr=1e-10,Oe=new Mt,Bt=new Mt,ze=new I,lh=new I,hh=new I,Os=new _e,qa=new Ut,ir=class{constructor(){this.trianglePool=new ae(()=>new Et),this.triangles=[],this.normal=new I}initialize(t){this.reset();let{triangles:e,trianglePool:n,normal:i}=this;if(Array.isArray(t))for(let r=0,o=t.length;r<o;r++){let a=t[r];if(r===0)a.getNormal(i);else if(Math.abs(1-a.getNormal(ze).dot(i))>Xa)throw new Error("Triangle Splitter: Cannot initialize with triangles that have different normals.");let c=n.getInstance();c.copy(a),e.push(c)}else{t.getNormal(i);let r=n.getInstance();r.copy(t),e.push(r)}}splitByTriangle(t,e){let{triangles:n}=this;if(e){for(let r=0,o=n.length;r<o;r++){let a=n[r];a.coplanarCount=0}let i=[t.a,t.b,t.c];for(let r=0;r<3;r++){let o=(r+1)%3,a=i[r],c=i[o];t.getNormal(lh).normalize(),ze.subVectors(c,a).normalize(),hh.crossVectors(lh,ze),Os.setFromNormalAndCoplanarPoint(hh,a),this.splitByPlane(Os,t)}}else t.getPlane(Os),this.splitByPlane(Os,t)}splitByPlane(t,e){let{triangles:n,trianglePool:i}=this;qa.copy(e),qa.needsUpdate=!0;for(let r=0,o=n.length;r<o;r++){let a=n[r];if(!qa.intersectsTriangle(a,Oe,!0))continue;let{a:c,b:h,c:u}=a,d=0,m=-1,g=!1,x=[],v=[],S=[c,h,u];for(let A=0;A<3;A++){let E=(A+1)%3;Oe.start.copy(S[A]),Oe.end.copy(S[E]);let p=t.distanceToPoint(Oe.start),l=t.distanceToPoint(Oe.end);if(Math.abs(p)<nr&&Math.abs(l)<nr){g=!0;break}if(p>0?x.push(A):v.push(A),Math.abs(p)<nr)continue;let _=!!t.intersectLine(Oe,ze);!_&&Math.abs(l)<nr&&(ze.copy(Oe.end),_=!0),_&&!(ze.distanceTo(Oe.start)<Xa)&&(ze.distanceTo(Oe.end)<Xa&&(m=A),d===0?Bt.start.copy(ze):Bt.end.copy(ze),d++)}if(!g&&d===2&&Bt.distance()>nr)if(m!==-1){m=(m+1)%3;let A=0;A===m&&(A=(A+1)%3);let E=A+1;E===m&&(E=(E+1)%3);let p=i.getInstance();p.a.copy(S[E]),p.b.copy(Bt.end),p.c.copy(Bt.start),Se(p)||n.push(p),a.a.copy(S[A]),a.b.copy(Bt.start),a.c.copy(Bt.end),Se(a)&&(n.splice(r,1),r--,o--)}else{let A=x.length>=2?v[0]:x[0];if(A===0){let f=Bt.start;Bt.start=Bt.end,Bt.end=f}let E=(A+1)%3,p=(A+2)%3,l=i.getInstance(),_=i.getInstance();S[E].distanceToSquared(Bt.start)<S[p].distanceToSquared(Bt.end)?(l.a.copy(S[E]),l.b.copy(Bt.start),l.c.copy(Bt.end),_.a.copy(S[E]),_.b.copy(S[p]),_.c.copy(Bt.start)):(l.a.copy(S[p]),l.b.copy(Bt.start),l.c.copy(Bt.end),_.a.copy(S[E]),_.b.copy(S[p]),_.c.copy(Bt.end)),a.a.copy(S[A]),a.b.copy(Bt.end),a.c.copy(Bt.start),Se(l)||n.push(l),Se(_)||n.push(_),Se(a)&&(n.splice(r,1),r--,o--)}else d===3&&console.warn("TriangleClipper: Coplanar clip not handled")}}reset(){this.triangles.length=0,this.trianglePool.clear()}};var rr=class{constructor(){this.coplanarSet=new Map,this.intersectionSet=new Map,this.edgeSet=new Map,this.ids=[]}add(t,e,n=!1){let{intersectionSet:i,coplanarSet:r,ids:o}=this;i.has(t)||(i.set(t,[]),o.push(t)),i.get(t).push(e),n&&(r.has(t)||r.set(t,new Set),r.get(t).add(e))}addIntersectionEdge(t,e){let{edgeSet:n}=this;n.has(t)||n.set(t,new Set),n.get(t).add(e)}getIntersectionEdges(t){return this.edgeSet.get(t)||null}};var Ya=1e-10,Fm=1e-15,Bm=1e-10,Om=1e-10,uh=new Mt,ui=new Mt,fh=new I,dh=new I,ph=new I,Za=new _e,fi=new I,zs=new I;function gh(s,t){s.getNormal(fi),t.getNormal(zs);let e=fi.dot(zs);if(Math.abs(1-Math.abs(e))>=Bm)return!1;let n=fi.dot(s.a),i=fi.dot(t.a);return Math.abs(n-i)<Om}function mh(s,t,e,n){let i=0,r=1;s.delta(fh);let o=[t.a,t.b,t.c];for(let a=0;a<3;a++){let c=o[a],h=o[(a+1)%3];dh.subVectors(h,c),ph.crossVectors(e,dh),Za.setFromNormalAndCoplanarPoint(ph,c);let u=Za.distanceToPoint(s.start),d=Za.normal.dot(fh);if(Math.abs(d)<Fm){if(u<-Ya)return null;continue}let m=-u/d;if(d>0?i=Math.max(i,m):r=Math.min(r,m),i>r+Ya)return null}return r-i<Ya?null:(s.at(i,n.start),s.at(r,n.end),n)}function $a(s,t,e){let n=0;s.getNormal(fi),t.getNormal(zs);let i=[t.a,t.b,t.c];for(let o=0;o<3;o++){ui.start.copy(i[o]),ui.end.copy(i[(o+1)%3]);let a=mh(ui,s,fi,uh);a!==null&&(n>=e.length&&e.push(new Mt),e[n].copy(a),n++)}let r=[s.a,s.b,s.c];for(let o=0;o<3;o++){ui.start.copy(r[o]),ui.end.copy(r[(o+1)%3]);let a=mh(ui,t,zs,uh);a!==null&&(n>=e.length&&e.push(new Mt),e[n].copy(a),n++)}return n}var di=new Te,xh=new dt,Vs=new Mt,Ja=[],ks=new ae(()=>new Mt),pi=-1,mi=1,sr=-2,or=2,gi=0,Sn=1,Gs=2,Hs=null;function Ka(s){Hs=s}function Qa(s,t,e=null){s.getMidpoint(di.origin),s.getNormal(di.direction),e&&(di.origin.applyMatrix4(e),di.direction.transformDirection(e));let n=t.raycastFirst(di,Wi);return!!(n&&di.direction.dot(n.face.normal)>0)?pi:mi}function yh(s,t){let e=new rr,n=new rr;return ks.clear(),xh.copy(s.matrixWorld).invert().multiply(t.matrixWorld),s.geometry.boundsTree.bvhcast(t.geometry.boundsTree,xh,{intersectsTriangles(i,r,o,a){if(!Se(i)&&!Se(r)){let h=(gh(i,r)?$a(i,r,Ja):0)>2;if(h||i.intersectsTriangle(r,Vs,!0)){let d=s.geometry.boundsTree.resolveTriangleIndex(o),m=t.geometry.boundsTree.resolveTriangleIndex(a);if(e.add(d,m,h),n.add(m,d,h),h){let g=$a(i,r,Ja);for(let x=0;x<g;x++){let v=ks.getInstance().copy(Ja[x]);e.addIntersectionEdge(d,v),n.addIntersectionEdge(m,v)}}else{let g=ks.getInstance().copy(Vs),x=ks.getInstance().copy(Vs);e.addIntersectionEdge(d,g),n.addIntersectionEdge(m,x)}Hs&&(Hs.addEdge(Vs),Hs.addIntersectingTriangles(o,i,a,r))}}return!1}}),{aIntersections:e,bIntersections:n}}function ja(s,t,e=!1){switch(s){case 0:if(t===mi||t===or&&!e)return Sn;break;case 1:if(e){if(t===pi)return gi}else if(t===mi||t===sr)return Sn;break;case 2:if(e){if(t===mi||t===sr)return Sn}else if(t===pi)return gi;break;case 4:if(t===pi)return gi;if(t===mi)return Sn;break;case 3:if(t===pi||t===or&&!e)return Sn;break;case 5:if(!e&&(t===mi||t===sr))return Sn;break;case 6:if(!e&&(t===pi||t===or))return Sn;break;default:throw new Error(`Unrecognized CSG operation enum "${s}".`)}return Gs}var tc=class{constructor(t){this.triangle=new Et().copy(t),this.intersects={}}addTriangle(t,e){this.intersects[t]=new Et().copy(e)}getIntersectArray(){let t=[],{intersects:e}=this;for(let n in e)t.push(e[n]);return t}},Ws=class{constructor(){this.data={}}addTriangleIntersection(t,e,n,i){let{data:r}=this;r[t]||(r[t]=new tc(e)),r[t].addTriangle(n,i)}getTrianglesAsArray(t=null){let{data:e}=this,n=[];if(t!==null)t in e&&n.push(e[t].triangle);else for(let i in e)n.push(e[i].triangle);return n}getTriangleIndices(){return Object.keys(this.data).map(t=>parseInt(t))}getIntersectionIndices(t){let{data:e}=this;return e[t]?Object.keys(e[t].intersects).map(n=>parseInt(n)):[]}getIntersectionsAsArray(t=null,e=null){let{data:n}=this,i=new Set,r=[],o=a=>{if(n[a])if(e!==null)n[a].intersects[e]&&r.push(n[a].intersects[e]);else{let c=n[a].intersects;for(let h in c)i.has(h)||(i.add(h),r.push(c[h]))}};if(t!==null)o(t);else for(let a in n)o(a);return r}reset(){this.data={}}},Xs=class{constructor(){this.enabled=!1,this.triangleIntersectsA=new Ws,this.triangleIntersectsB=new Ws,this.intersectionEdges=[]}addIntersectingTriangles(t,e,n,i){let{triangleIntersectsA:r,triangleIntersectsB:o}=this;r.addTriangleIntersection(t,e,n,i),o.addTriangleIntersection(n,i,t,e)}addEdge(t){this.intersectionEdges.push(t.clone())}reset(){this.triangleIntersectsA.reset(),this.triangleIntersectsB.reset(),this.intersectionEdges=[]}init(){this.enabled&&(this.reset(),Ka(this))}complete(){this.enabled&&Ka(null)}};var ce=new dt,bn=new dt,Kt=new dt,rn=new at,be=new Et,wn=new Et,we=new Et,nn=new Et,Tn=[],Ce=[],qs=new Set,Mh=new I,Sh=new I,bh=new ae(()=>new Et),wh=new I,Ys=[];function Ah(s,t,e,n,i,r={}){let{useGroups:o=!0}=r,{aIntersections:a,bIntersections:c}=yh(s,t),h=[],u=null,d;return d=o?0:-1,Eh(s,t,a,e,!1,i,d),Th(s,t,a,e,!1,n,i,d),e.findIndex(g=>g!==6&&g!==5)!==-1&&(i.forEach(g=>g.clearIndexMap()),d=o?s.geometry.groups.length||1:-1,Eh(t,s,c,e,!0,i,d),Th(t,s,c,e,!0,n,i,d)),i.forEach(g=>g.clearIndexMap()),Tn.length=0,{groups:h,materials:u}}function Th(s,t,e,n,i,r,o,a=0){ce.copy(t.matrixWorld).invert().multiply(s.matrixWorld),bn.copy(ce).invert(),i?Kt.copy(ce):Kt.identity();let c=Kt.determinant()<0;rn.getNormalMatrix(Kt).multiplyScalar(c?-1:1);let h=s.geometry.groupIndices,u=s.geometry.index,d=s.geometry.attributes.position,m=t.geometry.boundsTree,g=t.geometry.index,x=t.geometry.attributes.position,v=e.ids;for(let S=0,A=v.length;S<A;S++){let E=v[S],p=a===-1?0:h[E]+a,l=3*E,_=l+0,f=l+1,R=l+2;u&&(_=u.getX(_),f=u.getX(f),R=u.getX(R)),be.a.fromBufferAttribute(d,_),be.b.fromBufferAttribute(d,f),be.c.fromBufferAttribute(d,R),i&&(be.a.applyMatrix4(ce),be.b.applyMatrix4(ce),be.c.applyMatrix4(ce)),r.reset(),r.initialize(be,_,f,R),Ys.length=0,bh.clear(),be.getNormal(Sh);let w=e.coplanarSet.get(E);if(w)for(let T of w){let C=3*T,P=C+0,D=C+1,L=C+2;g&&(P=g.getX(P),D=g.getX(D),L=g.getX(L));let U=bh.getInstance();U.a.fromBufferAttribute(x,P),U.b.fromBufferAttribute(x,D),U.c.fromBufferAttribute(x,L),i||(U.a.applyMatrix4(bn),U.b.applyMatrix4(bn),U.c.applyMatrix4(bn)),Ys.push(U)}if(r.addConstraintEdge){let T=e.getIntersectionEdges(E);if(T)for(let C of T)r.addConstraintEdge(C);r.triangulate()}else{let C=e.intersectionSet.get(E);for(let P=0,D=C.length;P<D;P++){let L=C[P],U=w&&w.has(L),B=3*L,F=B+0,$=B+1,V=B+2;g&&(F=g.getX(F),$=g.getX($),V=g.getX(V)),wn.a.fromBufferAttribute(x,F),wn.b.fromBufferAttribute(x,$),wn.c.fromBufferAttribute(x,V),i||(wn.a.applyMatrix4(bn),wn.b.applyMatrix4(bn),wn.c.applyMatrix4(bn)),r.splitByTriangle(wn,U)}}let{triangles:M,triangleIndices:y=[],triangleConnectivity:b=[]}=r;for(let T=0,C=o.length;T<C;T++)o[T].initInterpolatedAttributeData(s.geometry,Kt,rn,_,f,R);qs.clear();for(let T=0,C=M.length;T<C;T++){if(qs.has(T))continue;let P=M[T],D=i?null:ce,L=null;P.getMidpoint(Mh);for(let U=0,B=Ys.length;U<B;U++){let F=Ys[U];if(F.containsPoint(Mh)){F.getNormal(wh),L=Sh.dot(wh)>0?or:sr;break}}L===null&&(L=Qa(P,m,D)),Tn.length=0,Ce.length=0;for(let U=0,B=n.length;U<B;U++){let F=ja(n[U],L,i);F!==Gs&&(Tn.push(F),Ce.push(o[U]))}if(Ce.length!==0){let U=[T];for(;U.length>0;){let B=U.pop();if(qs.has(B))continue;qs.add(B);let F=y[B],$=null,V=null,W=null;F&&($=F[0],V=F[1],W=F[2]);let H=M[B];be.getBarycoord(H.a,nn.a),be.getBarycoord(H.b,nn.b),be.getBarycoord(H.c,nn.c);for(let X=0,Y=Ce.length;X<Y;X++){let ct=Ce[X],nt=Tn[X]===gi,Q=c!==nt;ct.appendInterpolatedAttributeData(p,nn.a,$,Q),Q?(ct.appendInterpolatedAttributeData(p,nn.c,W,Q),ct.appendInterpolatedAttributeData(p,nn.b,V,Q)):(ct.appendInterpolatedAttributeData(p,nn.b,V,Q),ct.appendInterpolatedAttributeData(p,nn.c,W,Q))}}}}}return v.length}function Eh(s,t,e,n,i,r,o=0){ce.copy(t.matrixWorld).invert().multiply(s.matrixWorld),i?Kt.copy(ce):Kt.identity();let a=Kt.determinant()<0;rn.getNormalMatrix(Kt).multiplyScalar(a?-1:1);let c=t.geometry.boundsTree,h=s.geometry.groupIndices,u=s.geometry.index,m=s.geometry.attributes.position,g=[],x=s.geometry.halfEdges,v=new Set(e.ids),S=hi(s.geometry);for(let A=0;A<S&&v.size!==S;A++){if(v.has(A))continue;v.add(A),g.push(A);let E=3*A,p=E+0,l=E+1,_=E+2;u&&(p=u.getX(p),l=u.getX(l),_=u.getX(_)),we.a.fromBufferAttribute(m,p),we.b.fromBufferAttribute(m,l),we.c.fromBufferAttribute(m,_),i&&(we.a.applyMatrix4(ce),we.b.applyMatrix4(ce),we.c.applyMatrix4(ce));let f=Qa(we,c,i?null:ce);Tn.length=0,Ce.length=0;for(let R=0,w=n.length;R<w;R++){let M=ja(n[R],f,i);M!==Gs&&(Tn.push(M),Ce.push(r[R]))}for(;g.length>0;){let R=g.pop();for(let w=0;w<3;w++){let M=x.getSiblingTriangleIndex(R,w);M!==-1&&!v.has(M)&&(g.push(M),v.add(M))}if(Ce.length!==0){let w=3*R,M=w+0,y=w+1,b=w+2;u&&(M=u.getX(M),y=u.getX(y),b=u.getX(b));let T=o===-1?0:h[R]+o;if(we.a.fromBufferAttribute(m,M),we.b.fromBufferAttribute(m,y),we.c.fromBufferAttribute(m,b),!Se(we))for(let C=0,P=Ce.length;C<P;C++){let D=Ce[C],B=Tn[C]===gi!==a;D.appendIndexFromGeometry(s.geometry,Kt,rn,T,M,B),B?(D.appendIndexFromGeometry(s.geometry,Kt,rn,T,b,B),D.appendIndexFromGeometry(s.geometry,Kt,rn,T,y,B)):(D.appendIndexFromGeometry(s.geometry,Kt,rn,T,y,B),D.appendIndexFromGeometry(s.geometry,Kt,rn,T,b,B))}}}}}function km(s){return s=~~s,s+4-s%4}var Zs=class{constructor(t,e=500){this.expansionFactor=1.5,this.type=t,this.length=0,this.array=null,this.setSize(e)}setType(t){if(t===this.type)return;if(this.length!==0)throw new Error("TypeBackedArray: Cannot change the type while there is used data in the buffer.");let e=this.array.buffer;this.array=new t(e),this.type=t}setSize(t){if(this.array&&t===this.array.length)return;let e=this.type,n=Ls()?SharedArrayBuffer:ArrayBuffer,i=new e(new n(km(t*e.BYTES_PER_ELEMENT)));this.array&&i.set(this.array,0),this.array=i}expand(){let{array:t,expansionFactor:e}=this;this.setSize(t.length*e)}push(...t){let{array:e,length:n}=this;n+t.length>e.length&&(this.expand(),e=this.array);for(let i=0,r=t.length;i<r;i++)e[n+i]=t[i];this.length+=t.length}clear(){this.length=0}};var Qt=new I,ec=new I,nc=new I,ic=new I,$s=new ee,Hm=new ee,Gm=new ee,Wm=new ee;function Xm(s,t,e,n,i,r=!1,o=!1){return i.set(0,0,0,0).addScaledVector(s,n.x).addScaledVector(t,n.y).addScaledVector(e,n.z),r&&i.normalize(),o&&i.multiplyScalar(-1),i}function Ch(s,t,e){switch(t){case 1:e.push(s.x);break;case 2:e.push(s.x,s.y);break;case 3:e.push(s.x,s.y,s.z);break;case 4:e.push(s.x,s.y,s.z,s.w);break}}var ar=class extends Zs{get count(){return this.length/this.itemSize}constructor(...t){super(...t),this.itemSize=1,this.normalized=!1}},Js=class{constructor(){this.attributeData={},this.groupIndices=[],this.forwardIndexMap=new Map,this.invertedIndexMap=new Map,this.interpolatedFields={}}initFromGeometry(t,e){this.clear();let{attributeData:n}=this,i=t.attributes;for(let r=0,o=e.length;r<o;r++){let a=e[r],c=i[a],h=c.array.constructor;n[a]||(n[a]=new ar(h)),n[a].setType(h),n[a].itemSize=c.itemSize,n[a].normalized=c.normalized}for(let r in n.attributes)e.includes(r)||n.delete(r)}initInterpolatedAttributeData(t,e,n,i,r,o){let{attributeData:a,interpolatedFields:c}=this,{attributes:h}=t;for(let u in a){let d=h[u];if(!d)throw new Error(`CSG Operations: Attribute ${u} not available on geometry.`);let m,g,x;if(u==="position"?(m=ec.fromBufferAttribute(d,i).applyMatrix4(e),g=nc.fromBufferAttribute(d,r).applyMatrix4(e),x=ic.fromBufferAttribute(d,o).applyMatrix4(e)):u==="normal"?(m=ec.fromBufferAttribute(d,i).applyNormalMatrix(n),g=nc.fromBufferAttribute(d,r).applyNormalMatrix(n),x=ic.fromBufferAttribute(d,o).applyNormalMatrix(n)):u==="tangent"?(m=ec.fromBufferAttribute(d,i).transformDirection(e),g=nc.fromBufferAttribute(d,r).transformDirection(e),x=ic.fromBufferAttribute(d,o).transformDirection(e)):(m=Hm.fromBufferAttribute(d,i),g=Gm.fromBufferAttribute(d,r),x=Wm.fromBufferAttribute(d,o)),!c[u])c[u]=[m.clone(),g.clone(),x.clone()];else{let v=c[u];v[0].copy(m),v[1].copy(g),v[2].copy(x)}}}appendInterpolatedAttributeData(t,e,n=null,i=!1){let{groupIndices:r,attributeData:o,interpolatedFields:a,forwardIndexMap:c,invertedIndexMap:h}=this;for(;r.length<=t;)r.push(new ar(Uint32Array));let u=i?h:c,d=r[t];if(n!==null&&u.has(n))d.push(u.get(n));else{u.set(n,o.position.count),d.push(o.position.count);for(let m in a){let g=o[m],x=m==="normal"||m==="tangent",v=i&&x,S=g.itemSize,[A,E,p]=a[m];Xm(A,E,p,e,$s,x,v),Ch($s,S,g)}}}appendIndexFromGeometry(t,e,n,i,r,o=!1){let{groupIndices:a,attributeData:c,forwardIndexMap:h,invertedIndexMap:u}=this;for(;a.length<=i;)a.push(new ar(Uint32Array));let d=o?u:h,m=a[i];if(r!==null&&d.has(r))m.push(d.get(r));else{d.set(r,c.position.count),m.push(c.position.count);let{attributes:g}=t;for(let x in c){let v=c[x],S=g[x];if(!S)throw new Error(`CSG Operations: Attribute ${x} not available on geometry.`);let A=S.itemSize;x==="position"?(Qt.fromBufferAttribute(S,r).applyMatrix4(e),v.push(Qt.x,Qt.y,Qt.z)):x==="normal"?(Qt.fromBufferAttribute(S,r).applyNormalMatrix(n),o&&Qt.multiplyScalar(-1),v.push(Qt.x,Qt.y,Qt.z)):x==="tangent"?(Qt.fromBufferAttribute(S,r).transformDirection(e),o&&Qt.multiplyScalar(-1),v.push(Qt.x,Qt.y,Qt.z)):($s.fromBufferAttribute(S,r),Ch($s,A,v))}}}buildGeometry(t,e){let n=!1,{groupIndices:i,attributeData:r}=this,{attributes:o,index:a}=t;for(let u in r){let d=r[u],{type:m,itemSize:g,normalized:x,length:v,count:S}=d,A=d.array.buffer,E=o[u];(!E||E.count<S||E.array.type!==m)&&(E=new Vt(new m(v),g,x),t.setAttribute(u,E),n=!0),E.array.set(new m(A,0,v),0),E.needsUpdate=!0}let c=i.reduce((u,d)=>d.count+u,0);(!t.index||a.count<c||a.array.type!==Uint32Array)&&(t.setIndex(new Vt(new Uint32Array(c),1)),n=!0),t.clearGroups();let h=0;for(let u=0,d=Math.min(e.length,i.length);u<d;u++){let{index:m,materialIndex:g}=e[u],{count:x}=i[m],v=i[m].array.buffer;x!==0&&(t.index.array.set(new Uint32Array(v,0,x),h),t.addGroup(h,x,g),h+=x)}t.setDrawRange(0,h),t.boundsTree=null,t.boundingBox=null,t.boundingSphere=null,n&&t.dispose()}clearIndexMap(){this.forwardIndexMap.clear(),this.invertedIndexMap.clear()}clear(){let{groupIndices:t,attributeData:e}=this;this.interpolatedFields={};for(let n in e)e[n].clear();t.forEach(n=>{n.clear()}),this.clearIndexMap()}};function Rh(s,t){for(let e in s.attributes)t.includes(e)||(s.deleteAttribute(e),s.dispose());return s}function Ih(s,t){let e=[];for(let n=0,i=s.length;n<i;n++){let r=s[n],o=t[r.materialIndex];e.push({...r,materialIndex:t.indexOf(o)})}return e}function Ph(s,t){let e=[],n=new Map;for(let i=0,r=s.length;i<r;i++){let o=s[i];n.has(o.materialIndex)||(n.set(o.materialIndex,e.length),e.push(t[o.materialIndex])),o.materialIndex=n.get(o.materialIndex)}return e}function Dh(s){for(let t=0;t<s.length-1;t++){let e=s[t],n=s[t+1];if(e.materialIndex===n.materialIndex){let i=e.start,r=n.start+n.count;n.start=i,n.count=r-i,s.splice(t,1),t--}}}function rc(s,t){let e=t;return Array.isArray(t)||(e=[],s.forEach(n=>{e[n.materialIndex]=t})),e}var Ks=class{get useCDTClipping(){return this.triangleSplitter instanceof er}set useCDTClipping(t){t!==this.useCDTClipping&&(this.triangleSplitter=t?new er:new ir)}constructor(){this.triangleSplitter=new ir,this.geometryBuilders=[],this.attributes=["position","uv","normal"],this.useGroups=!0,this.consolidateGroups=!0,this.removeUnusedMaterials=!0,this.debug=new Xs}getGroupRanges(t){return!this.useGroups||t.groups.length===0?[{start:0,count:1/0,materialIndex:0}]:t.groups.map(n=>({...n}))}evaluate(t,e,n,i=new yn){let r=!0;if(Array.isArray(n)||(n=[n]),Array.isArray(i)||(i=[i],r=!1),i.length!==n.length)throw new Error("Evaluator: operations and target array passed as different sizes.");t.prepareGeometry(),e.prepareGeometry();let{triangleSplitter:o,geometryBuilders:a,attributes:c,useGroups:h,consolidateGroups:u,removeUnusedMaterials:d,debug:m}=this;for(;a.length<i.length;)a.push(new Js);i.forEach((p,l)=>{a[l].initFromGeometry(t.geometry,c),Rh(p.geometry,c)}),m.init(),Ah(t,e,n,o,a,{useGroups:h}),m.complete();let g=this.getGroupRanges(t.geometry),x=rc(g,t.material),v=this.getGroupRanges(e.geometry),S=rc(v,e.material);v.forEach(p=>p.materialIndex+=x.length);let A=[...x,...S],E=[...g,...v].map((p,l)=>({...p,index:l}));return h?h&&u&&(E=Ih(E,A),E.sort((p,l)=>p.materialIndex-l.materialIndex)):E=[{start:0,count:1/0,index:0,materialIndex:0}],i.forEach((p,l)=>{let _=p.geometry;a[l].buildGeometry(_,E),t.matrixWorld.decompose(p.position,p.quaternion,p.scale),p.updateMatrix(),p.matrixWorld.copy(t.matrixWorld),h?(p.material=A,u&&Dh(_.groups),d&&(p.material=Ph(_.groups,A))):p.material=A[0]}),r?i:i[0]}evaluateHierarchy(t,e=new yn){t.updateMatrixWorld(!0);let n=(r,o)=>{let a=r.children;for(let c=0,h=a.length;c<h;c++){let u=a[c];u.isOperationGroup?n(u,o):o(u)}},i=r=>{let o=r.children,a=!1;for(let h=0,u=o.length;h<u;h++){let d=o[h];a=i(d)||a}let c=r.isDirty();if(c&&r.markUpdated(),a&&!r.isOperationGroup){let h;return n(r,u=>{h?h=this.evaluate(h,u,u.operation):h=this.evaluate(r,u,u.operation)}),r._cachedGeometry=h.geometry,r._cachedMaterials=h.material,!0}else return a||c};return i(t),e.geometry=t._cachedGeometry,e.material=t._cachedMaterials,e}reset(){this.triangleSplitter.reset()}};function to(s,t,e=2){let n=t&&t.length,i=n?t[0]*e:s.length,r=Uh(s,0,i,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,h;if(n&&(r=Km(s,t,r,e)),s.length>80*e){a=s[0],c=s[1];let u=a,d=c;for(let m=e;m<i;m+=e){let g=s[m],x=s[m+1];g<a&&(a=g),x<c&&(c=x),g>u&&(u=g),x>d&&(d=x)}h=Math.max(u-a,d-c),h=h!==0?32767/h:0}return lr(r,o,e,a,c,h,0),o}function Uh(s,t,e,n,i){let r;if(i===cg(s,t,e,n)>0)for(let o=t;o<e;o+=n)r=Lh(o/n|0,s[o],s[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Lh(o/n|0,s[o],s[o+1],r);return r&&xi(r,r.next)&&(ur(r),r=r.next),r}function En(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(xi(e,e.next)||Dt(e.prev,e,e.next)===0)){if(ur(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function lr(s,t,e,n,i,r,o){if(!s)return;!o&&r&&ng(s,n,i,r);let a=s;for(;s.prev!==s.next;){let c=s.prev,h=s.next;if(r?Zm(s,n,i,r):Ym(s)){t.push(c.i,s.i,h.i),ur(s),s=h.next,a=h.next;continue}if(s=h,s===a){o?o===1?(s=$m(En(s),t),lr(s,t,e,n,i,r,2)):o===2&&Jm(s,t,e,n,i,r):lr(En(s),t,e,n,i,r,1);break}}}function Ym(s){let t=s.prev,e=s,n=s.next;if(Dt(t,e,n)>=0)return!1;let i=t.x,r=e.x,o=n.x,a=t.y,c=e.y,h=n.y,u=Math.min(i,r,o),d=Math.min(a,c,h),m=Math.max(i,r,o),g=Math.max(a,c,h),x=n.next;for(;x!==t;){if(x.x>=u&&x.x<=m&&x.y>=d&&x.y<=g&&cr(i,a,r,c,o,h,x.x,x.y)&&Dt(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function Zm(s,t,e,n){let i=s.prev,r=s,o=s.next;if(Dt(i,r,o)>=0)return!1;let a=i.x,c=r.x,h=o.x,u=i.y,d=r.y,m=o.y,g=Math.min(a,c,h),x=Math.min(u,d,m),v=Math.max(a,c,h),S=Math.max(u,d,m),A=sc(g,x,t,e,n),E=sc(v,S,t,e,n),p=s.prevZ,l=s.nextZ;for(;p&&p.z>=A&&l&&l.z<=E;){if(p.x>=g&&p.x<=v&&p.y>=x&&p.y<=S&&p!==i&&p!==o&&cr(a,u,c,d,h,m,p.x,p.y)&&Dt(p.prev,p,p.next)>=0||(p=p.prevZ,l.x>=g&&l.x<=v&&l.y>=x&&l.y<=S&&l!==i&&l!==o&&cr(a,u,c,d,h,m,l.x,l.y)&&Dt(l.prev,l,l.next)>=0))return!1;l=l.nextZ}for(;p&&p.z>=A;){if(p.x>=g&&p.x<=v&&p.y>=x&&p.y<=S&&p!==i&&p!==o&&cr(a,u,c,d,h,m,p.x,p.y)&&Dt(p.prev,p,p.next)>=0)return!1;p=p.prevZ}for(;l&&l.z<=E;){if(l.x>=g&&l.x<=v&&l.y>=x&&l.y<=S&&l!==i&&l!==o&&cr(a,u,c,d,h,m,l.x,l.y)&&Dt(l.prev,l,l.next)>=0)return!1;l=l.nextZ}return!0}function $m(s,t){let e=s;do{let n=e.prev,i=e.next.next;!xi(n,i)&&Fh(n,e,e.next,i)&&hr(n,i)&&hr(i,n)&&(t.push(n.i,e.i,i.i),ur(e),ur(e.next),e=s=i),e=e.next}while(e!==s);return En(e)}function Jm(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&sg(o,a)){let c=Bh(o,a);o=En(o,o.next),c=En(c,c.next),lr(o,t,e,n,i,r,0),lr(c,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function Km(s,t,e,n){let i=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,c=r<o-1?t[r+1]*n:s.length,h=Uh(s,a,c,n,!1);h===h.next&&(h.steiner=!0),i.push(rg(h))}i.sort(Qm);for(let r=0;r<i.length;r++)e=jm(i[r],e);return e}function Qm(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){let n=(s.next.y-s.y)/(s.next.x-s.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function jm(s,t){let e=tg(s,t);if(!e)return t;let n=Bh(e,s);return En(n,n.next),En(e,e.next)}function tg(s,t){let e=t,n=s.x,i=s.y,r=-1/0,o;if(xi(s,e))return e;do{if(xi(s,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){let d=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,o=e.x<e.next.x?e:e.next,d===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,c=o.x,h=o.y,u=1/0;e=o;do{if(n>=e.x&&e.x>=c&&n!==e.x&&Nh(i<h?n:r,i,c,h,i<h?r:n,i,e.x,e.y)){let d=Math.abs(i-e.y)/(n-e.x);hr(e,s)&&(d<u||d===u&&(e.x>o.x||e.x===o.x&&eg(o,e)))&&(o=e,u=d)}e=e.next}while(e!==a);return o}function eg(s,t){return Dt(s.prev,s,t.prev)<0&&Dt(t.next,s,s.next)<0}function ng(s,t,e,n){let i=s;do i.z===0&&(i.z=sc(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,ig(i)}function ig(s){let t,e=1;do{let n=s,i;s=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let h=0;h<e&&(a++,o=o.nextZ,!!o);h++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,e*=2}while(t>1);return s}function sc(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function rg(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Nh(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function cr(s,t,e,n,i,r,o,a){return!(s===o&&t===a)&&Nh(s,t,e,n,i,r,o,a)}function sg(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!og(s,t)&&(hr(s,t)&&hr(t,s)&&ag(s,t)&&(Dt(s.prev,s,t.prev)||Dt(s,t.prev,t))||xi(s,t)&&Dt(s.prev,s,s.next)>0&&Dt(t.prev,t,t.next)>0)}function Dt(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function xi(s,t){return s.x===t.x&&s.y===t.y}function Fh(s,t,e,n){let i=js(Dt(s,t,e)),r=js(Dt(s,t,n)),o=js(Dt(e,n,s)),a=js(Dt(e,n,t));return!!(i!==r&&o!==a||i===0&&Qs(s,e,t)||r===0&&Qs(s,n,t)||o===0&&Qs(e,s,n)||a===0&&Qs(e,t,n))}function Qs(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function js(s){return s>0?1:s<0?-1:0}function og(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Fh(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function hr(s,t){return Dt(s.prev,s,s.next)<0?Dt(s,t,s.next)>=0&&Dt(s,s.prev,t)>=0:Dt(s,t,s.prev)<0||Dt(s,s.next,t)<0}function ag(s,t){let e=s,n=!1,i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Bh(s,t){let e=oc(s.i,s.x,s.y),n=oc(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Lh(s,t,e,n){let i=oc(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function ur(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function oc(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function cg(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var Re=1e-9,fr=(s,t)=>s[0]*t[0]+s[1]*t[1]+s[2]*t[2],sn=(s,t)=>fr(s,t.n)+t.d;function ac(s,t,e){let n=[],i=s.at(-1),r=sn(i.p,t),o=e?r>=-Re:r<=Re;for(let a of s){let c=sn(a.p,t),h=e?c>=-Re:c<=Re;if(o!==h){let u=Math.max(0,Math.min(1,r/(r-c)));n.push({p:i.p.map((d,m)=>d+(a.p[m]-d)*u),c:i.c.map((d,m)=>d+(a.c[m]-d)*u)})}h&&n.push(a),i=a,r=c,o=h}return n}function Oh(s,t){if(t.some(i=>s.every(r=>sn(r.p,i)<-Re)))return[s];let e=s,n=[];for(let i of t){if(e.every(o=>sn(o.p,i)>=-Re))continue;if(e.every(o=>sn(o.p,i)<-Re)){n.push(e),e=[];break}let r=ac(e,i,!1);if(r.length>=3&&n.push(r),e=ac(e,i,!0),e.length<3)break}return n}function lg(s,t){for(let e of t)if(s=ac(s,e,!0),s.length<3)return[];return s}function hg(s){let t=s.shape==="polygon"?Cn(s.points):s.shape==="circle"?Array.from({length:64},(d,m)=>[Math.cos(m*Math.PI/32)*s.width/2,Math.sin(m*Math.PI/32)*s.width/2]):[[-s.width/2,-s.height/2],[s.width/2,-s.height/2],[s.width/2,s.height/2],[-s.width/2,s.height/2]],e=(d,m,g,x)=>{let v=s.u.map((S,A)=>d*S+m*s.v[A]+g*s.n[A]);return{n:v,d:x-fr(v,s.center)}},n=(d,m)=>{let g=m[0]-d[0],x=m[1]-d[1],v=Math.hypot(g,x);return e(-x/v,g/v,0,(x*d[0]-g*d[1])/v)},i=[e(0,0,1,-s.offset),e(0,0,-1,s.offset+s.depth)],r=[...t.map((d,m)=>n(d,t[(m+1)%t.length])),...i],o=t.every((d,m)=>{let g=t[(m+1)%t.length],x=t[(m+2)%t.length];return(g[0]-d[0])*(x[1]-g[1])-(g[1]-d[1])*(x[0]-g[0])>=-Re}),a=o?null:to(t.flat()),c=o?[r]:Array.from({length:a.length/3},(d,m)=>{let g=a.slice(m*3,m*3+3).map(x=>t[x]);return[...g.map((x,v)=>n(x,g[(v+1)%3])),...i]}),h=t.map(d=>d[0]),u=t.map(d=>d[1]);return{...s,outline:t,cells:c,boundary:r,lo:[Math.min(...h),Math.min(...u),s.offset],hi:[Math.max(...h),Math.max(...u),s.offset+s.depth]}}function zh(s,t){let e=s.map(n=>[t.u,t.v,t.n].map(i=>fr(n.p,i)-fr(t.center,i)));for(let n=0;n<3;n++){let i=1/0,r=-1/0;for(let o of e)i=Math.min(i,o[n]),r=Math.max(r,o[n]);if(r<t.lo[n]-Re||i>t.hi[n]+Re)return!0}return!xr(t.outline,e.map(n=>n.slice(0,2)))}function Vh(s,t,e,n){if(s.length<3)return;let i=r=>(r.id===void 0&&(r.id=t.length,t.push(r.p),e.push(r.c)),r.id);for(let r=1;r<s.length-1;r++){let o=s[0].p,a=s[r].p,c=s[r+1].p,h=a.map((d,m)=>d-o[m]),u=c.map((d,m)=>d-o[m]);Math.hypot(h[1]*u[2]-h[2]*u[1],h[2]*u[0]-h[0]*u[2],h[0]*u[1]-h[1]*u[0])>1e-16&&n.push([i(s[0]),i(s[r]),i(s[r+1])])}}function kh(s,t,e){let n=t.map(hg),i=[...s.vertices],r=s.vertices.map((d,m)=>s.colors?.[m]||[.48,.63,.85]),o=[];for(let d of s.triangles){let m=d.map(v=>({p:s.vertices[v],c:r[v],id:v})),g=[m],x=!1;for(let v of n){let S=[];for(let A of g){if(zh(A,v)){S.push(A);continue}let E=[A];for(let p of v.cells)if(E=E.flatMap(l=>Oh(l,p)),!E.length)break;(E.length!==1||E[0]!==A)&&(x=!0),S.push(...E)}if(g=S,!g.length)break}if(!x&&g.length===1&&g[0]===m)o.push([...d]);else for(let v of g)Vh(v,i,r,o)}for(let d of e.triangles){let m=d.map(g=>({p:e.vertices[g],c:e.colors?.[g]||[.48,.63,.85]}));for(let g=0;g<n.length;g++){let x=n[g],v=x.boundary.find(A=>m.every(E=>Math.abs(sn(E.p,A))<2e-5));if(!v)continue;let S=m.map(A=>({...A,p:A.p.map((E,p)=>E-sn(A.p,v)*v.n[p]/fr(v.n,v.n))}));if(!zh(S,x))for(let A of x.cells){let E=lg(S,A),p=E.length?[E]:[];for(let l=0;l<n.length;l++){if(l===g)continue;let _=n[l],f=_.boundary.some(R=>S.every(w=>Math.abs(sn(w.p,R))<2e-5));if(l<g||!f)for(let R of _.cells)p=p.flatMap(w=>Oh(w,R))}for(let l of p)Vh(l,i,r,o)}}}if(!o.length)return null;let a=new Map,c=[],h=[],u=o.map(d=>d.map(m=>(a.has(m)||(a.set(m,c.length),c.push(i[m]),h.push(r[m])),a.get(m))));return{...s,vertices:c,colors:h,triangles:u}}function Hh(s,t,e,n=()=>{}){let i=new Set,r=d=>(i.add(d),d);function o(d,m){r(d),d.getAttribute("normal")||d.computeVertexNormals(),d.getAttribute("color")||d.setAttribute("color",new qt(Array.from({length:d.getAttribute("position").count},()=>m).flat(),3));let g=new yn(d);return g.updateMatrixWorld(!0),g}let a=r(new xe);a.setAttribute("position",new qt(s.vertices.flat(),3)),a.setIndex(s.triangles.flat()),a.setAttribute("color",new qt((s.colors||s.vertices.map(()=>[.48,.63,.85])).flat(),3));let c=new Ks;c.attributes=["position","normal","color"],c.useGroups=!1;let h=o(a),u=[];try{for(let y=0;y<t.length;y++){n(`Y\xFCzey kesimi: ${y+1} / ${t.length} alan\u2026`);let b=t[y],{u:T,v:C,n:P,center:D,width:L,height:U,shape:B}=b,{depth:F,offset:$=0}=b;if(![L,U,F].every(H=>Number.isFinite(H)&&H>0))throw new Error("Alan ve i\u015Flem derinli\u011Fi s\u0131f\u0131rdan b\xFCy\xFCk olmal\u0131.");if(e==="cut"){let H=1/0,X=-1/0;for(let Y of s.vertices){let ct=Y.reduce((et,nt,Q)=>et+(nt-D[Q])*P[Q],0);H=Math.min(H,ct),X=Math.max(X,ct)}$=H-.01,F=X-H+.02}u.push({...b,depth:F,offset:$});let V;if(B==="polygon"){let H=new qn(Cn(b.points).map(X=>new G(...X)));V=new Hi(H,{depth:F,bevelEnabled:!1,steps:1}).translate(0,0,-F/2)}else V=B==="circle"?new Li(L/2,L/2,F,64).rotateX(Math.PI/2):new Di(L,U,F);let W=o(V,s.colors?.[0]||[.48,.63,.85]);W.matrixAutoUpdate=!1,W.matrix.makeBasis(new I(...T),new I(...C),new I(...P)),W.matrix.setPosition(...D.map((H,X)=>H+P[X]*((e==="fill"?$-F:$)+F/2))),W.updateMatrixWorld(!0),h=c.evaluate(h,W,e==="fill"?0:1),r(h.geometry)}let d=h.geometry.getAttribute("position"),m=h.geometry.getAttribute("color"),g=h.geometry.index,x=[],v=[],S=[];for(let y=0;y<d.count;y++)x.push([d.getX(y),d.getY(y),d.getZ(y)]),v.push([m.getX(y),m.getY(y),m.getZ(y)]);let A=Math.min(g?g.count:d.count,h.geometry.drawRange.count);for(let y=0;y<A;y+=3)S.push([0,1,2].map(b=>g?g.getX(y+b):y+b));if(e!=="fill"){n("Se\xE7im s\u0131n\u0131r\u0131 d\u0131\u015F\u0131ndaki y\xFCzey par\xE7alar\u0131 korunuyor\u2026");let y=kh(s,u,{vertices:x,colors:v,triangles:S});if(!y&&e!=="cut")throw new Error("Se\xE7im modelin tamam\u0131n\u0131 kald\u0131r\u0131yor. Alan\u0131 k\xFC\xE7\xFClt\xFCn.");return y}let E=(y,b)=>{let T=y.map(L=>L.map((U,B)=>U-b.center[B])),C=[b.u,b.v,b.n].map(L=>T.map(U=>U.reduce((B,F,$)=>B+F*L[$],0))),P=[-b.width/2,-b.height/2,e==="fill"?b.offset-b.depth:b.offset],D=[b.width/2,b.height/2,e==="fill"?b.offset:b.offset+b.depth];return C.some((L,U)=>Math.max(...L)<P[U]-1e-5||Math.min(...L)>D[U]+1e-5)?!0:b.shape==="polygon"&&!xr(b.points,y.map((L,U)=>[C[0][U],C[1][U]]))},p=y=>u.every(b=>E(y,b)),l=S.filter(y=>!p(y.map(b=>x[b]))),_=x.length;for(let y=0;y<s.vertices.length;y++)x.push(s.vertices[y]),v.push(s.colors?.[y]||[.48,.63,.85]);for(let y of s.triangles)p(y.map(b=>s.vertices[b]))&&l.push(y.map(b=>b+_));if(!l.length){if(e==="cut")return null;throw new Error("Se\xE7im modelin tamam\u0131n\u0131 kald\u0131r\u0131yor. Alan\u0131 k\xFC\xE7\xFClt\xFCn.")}let f=new Map,R=[],w=[],M=l.map(y=>y.map(b=>(f.has(b)||(f.set(b,R.length),R.push(x[b]),w.push(v[b])),f.get(b))));return{...s,vertices:R,colors:w,triangles:M}}finally{for(let d of i)d.boundsTree=null,d.dispose()}}function Gh(s,t){if(!t||s.triangles.length!==t.triangles.length)return!1;let e=(i,r)=>r.map(o=>i.vertices[o].map(Math.fround).join(",")).sort().join("|"),n=new Map;for(let i of s.triangles){let r=e(s,i);n.set(r,(n.get(r)||0)+1)}for(let i of t.triangles){let r=e(t,i),o=n.get(r)||0;if(!o)return!1;o===1?n.delete(r):n.set(r,o-1)}return!n.size}var Gt=Uint8Array,le=Uint16Array,dc=Int32Array,pc=new Gt([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),mc=new Gt([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Wh=new Gt([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Jh=function(s,t){for(var e=new le(31),n=0;n<31;++n)e[n]=t+=1<<s[n-1];for(var i=new dc(e[30]),n=1;n<30;++n)for(var r=e[n];r<e[n+1];++r)i[r]=r-e[n]<<5|n;return{b:e,r:i}},Kh=Jh(pc,2),ug=Kh.b,lc=Kh.r;ug[28]=258,lc[258]=28;var Qh=Jh(mc,0),qw=Qh.b,Xh=Qh.r,hc=new le(32768);for(_t=0;_t<32768;++_t)Ve=(_t&43690)>>1|(_t&21845)<<1,Ve=(Ve&52428)>>2|(Ve&13107)<<2,Ve=(Ve&61680)>>4|(Ve&3855)<<4,hc[_t]=((Ve&65280)>>8|(Ve&255)<<8)>>1;var Ve,_t,mr=(function(s,t,e){for(var n=s.length,i=0,r=new le(t);i<n;++i)s[i]&&++r[s[i]-1];var o=new le(t);for(i=1;i<t;++i)o[i]=o[i-1]+r[i-1]<<1;var a;if(e){a=new le(1<<t);var c=15-t;for(i=0;i<n;++i)if(s[i])for(var h=i<<4|s[i],u=t-s[i],d=o[s[i]-1]++<<u,m=d|(1<<u)-1;d<=m;++d)a[hc[d]>>c]=h}else for(a=new le(n),i=0;i<n;++i)s[i]&&(a[i]=hc[o[s[i]-1]++]>>15-s[i]);return a}),An=new Gt(288);for(_t=0;_t<144;++_t)An[_t]=8;var _t;for(_t=144;_t<256;++_t)An[_t]=9;var _t;for(_t=256;_t<280;++_t)An[_t]=7;var _t;for(_t=280;_t<288;++_t)An[_t]=8;var _t,eo=new Gt(32);for(_t=0;_t<32;++_t)eo[_t]=5;var _t,fg=mr(An,9,0);var dg=mr(eo,5,0);var jh=function(s){return(s+7)/8|0},tu=function(s,t,e){return(t==null||t<0)&&(t=0),(e==null||e>s.length)&&(e=s.length),new Gt(s.subarray(t,e))};var pg=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],no=function(s,t,e){var n=new Error(t||pg[s]);if(n.code=s,Error.captureStackTrace&&Error.captureStackTrace(n,no),!e)throw n;return n};var ke=function(s,t,e){e<<=t&7;var n=t/8|0;s[n]|=e,s[n+1]|=e>>8},dr=function(s,t,e){e<<=t&7;var n=t/8|0;s[n]|=e,s[n+1]|=e>>8,s[n+2]|=e>>16},cc=function(s,t){for(var e=[],n=0;n<s.length;++n)s[n]&&e.push({s:n,f:s[n]});var i=e.length,r=e.slice();if(!i)return{t:nu,l:0};if(i==1){var o=new Gt(e[0].s+1);return o[e[0].s]=1,{t:o,l:1}}e.sort(function(_,f){return _.f-f.f}),e.push({s:-1,f:25001});var a=e[0],c=e[1],h=0,u=1,d=2;for(e[0]={s:-1,f:a.f+c.f,l:a,r:c};u!=i-1;)a=e[e[h].f<e[d].f?h++:d++],c=e[h!=u&&e[h].f<e[d].f?h++:d++],e[u++]={s:-1,f:a.f+c.f,l:a,r:c};for(var m=r[0].s,n=1;n<i;++n)r[n].s>m&&(m=r[n].s);var g=new le(m+1),x=uc(e[u-1],g,0);if(x>t){var n=0,v=0,S=x-t,A=1<<S;for(r.sort(function(f,R){return g[R.s]-g[f.s]||f.f-R.f});n<i;++n){var E=r[n].s;if(g[E]>t)v+=A-(1<<x-g[E]),g[E]=t;else break}for(v>>=S;v>0;){var p=r[n].s;g[p]<t?v-=1<<t-g[p]++-1:++n}for(;n>=0&&v;--n){var l=r[n].s;g[l]==t&&(--g[l],++v)}x=t}return{t:new Gt(g),l:x}},uc=function(s,t,e){return s.s==-1?Math.max(uc(s.l,t,e+1),uc(s.r,t,e+1)):t[s.s]=e},qh=function(s){for(var t=s.length;t&&!s[--t];);for(var e=new le(++t),n=0,i=s[0],r=1,o=function(c){e[n++]=c},a=1;a<=t;++a)if(s[a]==i&&a!=t)++r;else{if(!i&&r>2){for(;r>138;r-=138)o(32754);r>2&&(o(r>10?r-11<<5|28690:r-3<<5|12305),r=0)}else if(r>3){for(o(i),--r;r>6;r-=6)o(8304);r>2&&(o(r-3<<5|8208),r=0)}for(;r--;)o(i);r=1,i=s[a]}return{c:e.subarray(0,n),n:t}},pr=function(s,t){for(var e=0,n=0;n<t.length;++n)e+=s[n]*t[n];return e},eu=function(s,t,e){var n=e.length,i=jh(t+2);s[i]=n&255,s[i+1]=n>>8,s[i+2]=s[i]^255,s[i+3]=s[i+1]^255;for(var r=0;r<n;++r)s[i+r+4]=e[r];return(i+4+n)*8},Yh=function(s,t,e,n,i,r,o,a,c,h,u){ke(t,u++,e),++i[256];for(var d=cc(i,15),m=d.t,g=d.l,x=cc(r,15),v=x.t,S=x.l,A=qh(m),E=A.c,p=A.n,l=qh(v),_=l.c,f=l.n,R=new le(19),w=0;w<E.length;++w)++R[E[w]&31];for(var w=0;w<_.length;++w)++R[_[w]&31];for(var M=cc(R,7),y=M.t,b=M.l,T=19;T>4&&!y[Wh[T-1]];--T);var C=h+5<<3,P=pr(i,An)+pr(r,eo)+o,D=pr(i,m)+pr(r,v)+o+14+3*T+pr(R,y)+2*R[16]+3*R[17]+7*R[18];if(c>=0&&C<=P&&C<=D)return eu(t,u,s.subarray(c,c+h));var L,U,B,F;if(ke(t,u,1+(D<P)),u+=2,D<P){L=mr(m,g,0),U=m,B=mr(v,S,0),F=v;var $=mr(y,b,0);ke(t,u,p-257),ke(t,u+5,f-1),ke(t,u+10,T-4),u+=14;for(var w=0;w<T;++w)ke(t,u+3*w,y[Wh[w]]);u+=3*T;for(var V=[E,_],W=0;W<2;++W)for(var H=V[W],w=0;w<H.length;++w){var X=H[w]&31;ke(t,u,$[X]),u+=y[X],X>15&&(ke(t,u,H[w]>>5&127),u+=H[w]>>12)}}else L=fg,U=An,B=dg,F=eo;for(var w=0;w<a;++w){var Y=n[w];if(Y>255){var X=Y>>18&31;dr(t,u,L[X+257]),u+=U[X+257],X>7&&(ke(t,u,Y>>23&31),u+=pc[X]);var ct=Y&31;dr(t,u,B[ct]),u+=F[ct],ct>3&&(dr(t,u,Y>>5&8191),u+=mc[ct])}else dr(t,u,L[Y]),u+=U[Y]}return dr(t,u,L[256]),u+U[256]},mg=new dc([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),nu=new Gt(0),gg=function(s,t,e,n,i,r){var o=r.z||s.length,a=new Gt(n+o+5*(1+Math.ceil(o/7e3))+i),c=a.subarray(n,a.length-i),h=r.l,u=(r.r||0)&7;if(t){u&&(c[0]=r.r>>3);for(var d=mg[t-1],m=d>>13,g=d&8191,x=(1<<e)-1,v=r.p||new le(32768),S=r.h||new le(x+1),A=Math.ceil(e/3),E=2*A,p=function(N){return(s[N]^s[N+1]<<A^s[N+2]<<E)&x},l=new dc(25e3),_=new le(288),f=new le(32),R=0,w=0,M=r.i||0,y=0,b=r.w||0,T=0;M+2<o;++M){var C=p(M),P=M&32767,D=S[C];if(v[P]=D,S[C]=P,b<=M){var L=o-M;if((R>7e3||y>24576)&&(L>423||!h)){u=Yh(s,c,0,l,_,f,w,y,T,M-T,u),y=R=w=0,T=M;for(var U=0;U<286;++U)_[U]=0;for(var U=0;U<30;++U)f[U]=0}var B=2,F=0,$=g,V=P-D&32767;if(L>2&&C==p(M-V))for(var W=Math.min(m,L)-1,H=Math.min(32767,M),X=Math.min(258,L);V<=H&&--$&&P!=D;){if(s[M+B]==s[M+B-V]){for(var Y=0;Y<X&&s[M+Y]==s[M+Y-V];++Y);if(Y>B){if(B=Y,F=V,Y>W)break;for(var ct=Math.min(V,Y-2),et=0,U=0;U<ct;++U){var nt=M-V+U&32767,Q=v[nt],it=nt-Q&32767;it>et&&(et=it,D=nt)}}}P=D,D=v[P],V+=P-D&32767}if(F){l[y++]=268435456|lc[B]<<18|Xh[F];var lt=lc[B]&31,yt=Xh[F]&31;w+=pc[lt]+mc[yt],++_[257+lt],++f[yt],b=M+B,++R}else l[y++]=s[M],++_[s[M]]}}for(M=Math.max(M,b);M<o;++M)l[y++]=s[M],++_[s[M]];u=Yh(s,c,h,l,_,f,w,y,T,M-T,u),h||(r.r=u&7|c[u/8|0]<<3,u-=7,r.h=S,r.p=v,r.i=M,r.w=b)}else{for(var M=r.w||0;M<o+h;M+=65535){var st=M+65535;st>=o&&(c[u/8|0]=h,st=o),u=eu(c,u+1,s.subarray(M,st))}r.i=o}return tu(a,0,n+jh(u)+i)},xg=(function(){for(var s=new Int32Array(256),t=0;t<256;++t){for(var e=t,n=9;--n;)e=(e&1&&-306674912)^e>>>1;s[t]=e}return s})(),_g=function(){var s=-1;return{p:function(t){for(var e=s,n=0;n<t.length;++n)e=xg[e&255^t[n]]^e>>>8;s=e},d:function(){return~s}}};var vg=function(s,t,e,n,i){if(!i&&(i={l:1},t.dictionary)){var r=t.dictionary.subarray(-32768),o=new Gt(r.length+s.length);o.set(r),o.set(s,r.length),s=o,i.w=r.length}return gg(s,t.level==null?6:t.level,t.mem==null?i.l?Math.ceil(Math.max(8,Math.min(13,Math.log(s.length)))*1.5):20:12+t.mem,e,n,i)},iu=function(s,t){var e={};for(var n in s)e[n]=s[n];for(var n in t)e[n]=t[n];return e};var Ht=function(s,t,e){for(;e;++t)s[t]=e,e>>>=8};function yg(s,t){return vg(s,t||{},0,0)}var ru=function(s,t,e,n){for(var i in s){var r=s[i],o=t+i,a=n;Array.isArray(r)&&(a=iu(n,r[1]),r=r[0]),r instanceof Gt?e[o]=[r,a]:(e[o+="/"]=[new Gt(0),a],ru(r,o,e,n))}},Zh=typeof TextEncoder<"u"&&new TextEncoder,Mg=typeof TextDecoder<"u"&&new TextDecoder,Sg=0;try{Mg.decode(nu,{stream:!0}),Sg=1}catch{}function He(s,t){if(t){for(var e=new Gt(s.length),n=0;n<s.length;++n)e[n]=s.charCodeAt(n);return e}if(Zh)return Zh.encode(s);for(var i=s.length,r=new Gt(s.length+(s.length>>1)),o=0,a=function(u){r[o++]=u},n=0;n<i;++n){if(o+5>r.length){var c=new Gt(o+8+(i-n<<1));c.set(r),r=c}var h=s.charCodeAt(n);h<128||t?a(h):h<2048?(a(192|h>>6),a(128|h&63)):h>55295&&h<57344?(h=65536+(h&1047552)|s.charCodeAt(++n)&1023,a(240|h>>18),a(128|h>>12&63),a(128|h>>6&63),a(128|h&63)):(a(224|h>>12),a(128|h>>6&63),a(128|h&63))}return tu(r,0,o)}var fc=function(s){var t=0;if(s)for(var e in s){var n=s[e].length;n>65535&&no(9),t+=n+4}return t},$h=function(s,t,e,n,i,r,o,a){var c=n.length,h=e.extra,u=a&&a.length,d=fc(h);Ht(s,t,o!=null?33639248:67324752),t+=4,o!=null&&(s[t++]=20,s[t++]=e.os),s[t]=20,t+=2,s[t++]=e.flag<<1|(r<0&&8),s[t++]=i&&8,s[t++]=e.compression&255,s[t++]=e.compression>>8;var m=new Date(e.mtime==null?Date.now():e.mtime),g=m.getFullYear()-1980;if((g<0||g>119)&&no(10),Ht(s,t,g<<25|m.getMonth()+1<<21|m.getDate()<<16|m.getHours()<<11|m.getMinutes()<<5|m.getSeconds()>>1),t+=4,r!=-1&&(Ht(s,t,e.crc),Ht(s,t+4,r<0?-r-2:r),Ht(s,t+8,e.size)),Ht(s,t+12,c),Ht(s,t+14,d),t+=16,o!=null&&(Ht(s,t,u),Ht(s,t+6,e.attrs),Ht(s,t+10,o),t+=14),s.set(n,t),t+=c,d)for(var x in h){var v=h[x],S=v.length;Ht(s,t,+x),Ht(s,t+2,S),s.set(v,t+4),t+=4+S}return u&&(s.set(a,t),t+=u),t},bg=function(s,t,e,n,i){Ht(s,t,101010256),Ht(s,t+8,e),Ht(s,t+10,e),Ht(s,t+12,n),Ht(s,t+16,i)};function gc(s,t){t||(t={});var e={},n=[];ru(s,"",e,t);var i=0,r=0;for(var o in e){var a=e[o],c=a[0],h=a[1],u=h.level==0?0:8,d=He(o),m=d.length,g=h.comment,x=g&&He(g),v=x&&x.length,S=fc(h.extra);m>65535&&no(11);var A=u?yg(c,h):c,E=A.length,p=_g();p.p(c),n.push(iu(h,{size:c.length,crc:p.d(),c:A,f:d,m:x,u:m!=o.length||x&&g.length!=v,o:i,compression:u})),i+=30+m+S+E,r+=76+2*(m+S)+(v||0)+E}for(var l=new Gt(r+22),_=i,f=r-i,R=0;R<n.length;++R){var d=n[R];$h(l,d.o,d,d.f,d.u,d.c.length);var w=30+d.f.length+fc(d.extra);l.set(d.c,d.o+w),$h(l,i,d,d.f,d.u,d.c.length,d.o,d.m),i+=16+w+(d.m?d.m.length:0)}return bg(l,i,n.length,f,_),l}var rT=Object.freeze([0,.02,.04,.08,.16,.32,.64,1.28,2.56,5.12,10.24,20.48,40.96,81.92,163.84,250]);var Eg=s=>String(s).replace(/[<>&"']/g,t=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;","'":"&apos;"})[t]),gr=s=>Number(s.toFixed(6));function su(s){let t=[...new Set(s.flatMap(o=>[o.color,...o.vertexColors||[]]))],e=new Map(t.map((o,a)=>[o,a])),n=s.map((o,a)=>`<object id="${a+3}" type="model" name="${Eg(o.name)}" pid="1" pindex="${e.get(o.color)}"><mesh><vertices>${o.vertices.map(c=>`<vertex x="${gr(c[0])}" y="${gr(c[1])}" z="${gr(c[2])}"/>`).join("")}</vertices><triangles>${o.triangles.map(c=>`<triangle v1="${c[0]}" v2="${c[1]}" v3="${c[2]}" pid="2" p1="${e.get(o.vertexColors?.[c[0]]||o.color)}" p2="${e.get(o.vertexColors?.[c[1]]||o.color)}" p3="${e.get(o.vertexColors?.[c[2]]||o.color)}"/>`).join("")}</triangles></mesh></object>`).join(""),i=s.length+3,r=`<?xml version="1.0" encoding="UTF-8"?><model unit="millimeter" xml:lang="tr-TR" xmlns="http://schemas.microsoft.com/3dmanufacturing/core/2015/02" xmlns:m="http://schemas.microsoft.com/3dmanufacturing/material/2015/02"><metadata name="Application">Katman</metadata><resources><basematerials id="1">${t.map((o,a)=>`<base name="Renk ${a+1} ${o}" displaycolor="${o}FF"/>`).join("")}</basematerials><m:colorgroup id="2">${t.map(o=>`<m:color color="${o}FF"/>`).join("")}</m:colorgroup>${n}<object id="${i}" type="model" name="Katman model"><components>${s.map((o,a)=>`<component objectid="${a+3}"/>`).join("")}</components></object></resources><build><item objectid="${i}"/></build></model>`;return gc({"[Content_Types].xml":He('<?xml version="1.0" encoding="UTF-8"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="model" ContentType="application/vnd.ms-package.3dmanufacturing-3dmodel+xml"/></Types>'),"_rels/.rels":He('<?xml version="1.0" encoding="UTF-8"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Target="/3D/3dmodel.model" Id="rel0" Type="http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel"/></Relationships>'),"3D/3dmodel.model":He(r)},{level:6})}function ou(s){let t=s.reduce((r,o)=>r+o.triangles.length,0),e=new ArrayBuffer(84+t*50),n=new DataView(e);new Uint8Array(e).set(He("Katman | millimeters | binary STL")),n.setUint32(80,t,!0);let i=84;for(let r of s)for(let o of r.triangles){let[a,c,h]=o.map(x=>r.vertices[x]),u=c.map((x,v)=>x-a[v]),d=h.map((x,v)=>x-a[v]),m=[u[1]*d[2]-u[2]*d[1],u[2]*d[0]-u[0]*d[2],u[0]*d[1]-u[1]*d[0]],g=Math.hypot(...m)||1;for(let x of[...m.map(v=>v/g),...a,...c,...h])n.setFloat32(i,x,!0),i+=4;i+=2}return new Uint8Array(e)}function au(s){let t=`# Katman \u2014 units: millimeters
mtllib model.mtl
`,e=1,n="";return s.forEach((i,r)=>{t+=`o part_${r}
usemtl color_${r}
`,t+=i.vertices.map((a,c)=>`v ${a.map(gr).join(" ")}${i.vertexColors?.[c]?" "+i.vertexColors[c].match(/\w\w/g).map(h=>gr(parseInt(h,16)/255)).join(" "):""}
`).join(""),t+=i.triangles.map(a=>`f ${a.map(c=>c+e).join(" ")}
`).join(""),e+=i.vertices.length;let o=i.vertexColors?[1,1,1]:i.color.match(/\w\w/g).map(a=>parseInt(a,16)/255);n+=`newmtl color_${r}
Kd ${o.join(" ")}
d 1

`}),gc({"model.obj":He(t),"model.mtl":He(n)})}function cu(s,t){if(t==="stl")return ou(s);let e=new Map,n=r=>{let o=r.join(",");return e.has(o)||e.set(o,"#"+new Lt(...r).getHexString()),e.get(o)},i=s.map(r=>{let o=r.color||n(r.colors?.[0]||[.48,.63,.85]),a=r.colors?.map(n);return{...r,color:o,vertexColors:a?.some(c=>c!==o)?a:void 0}});if(t==="3mf")return su(i);if(t==="obj")return au(i);throw new Error("Desteklenmeyen \xE7\u0131kt\u0131 bi\xE7imi.")}function io(s){let t=new Float32Array(s.vertices.length*3),e=new Float32Array(t.length),n=new Uint32Array(s.triangles.length*3);for(let a=0;a<s.vertices.length;a++)t.set(s.vertices[a],a*3),e.set(s.colors?.[a]||[.48,.63,.85],a*3);for(let a=0;a<s.triangles.length;a++)n.set(s.triangles[a],a*3);let i=new xe;i.setAttribute("position",new Vt(t,3)),i.setIndex(new Vt(n,1)),i.computeBoundingBox(),i.computeBoundingSphere();let r=s.triangles.length>5e3?vn.serialize(new vn(i,{indirect:!0}),{cloneBuffers:!1}):null,o={position:t,color:e,index:n,bvh:r,box:[i.boundingBox.min.toArray(),i.boundingBox.max.toArray()],sphere:[i.boundingSphere.center.toArray(),i.boundingSphere.radius]};return i.dispose(),o}function ro(s){let t=new Set;for(let e of s){for(let n of[e.position,e.color,e.index,e.bvh?.index,e.bvh?.indirectBuffer])n&&t.add(n.buffer);for(let n of e.bvh?.roots||[])t.add(n)}return[...t]}var lu;self.onmessage=async({data:s})=>{try{if(s.mode==="export"){let o=cu(s.parts,s.type);self.postMessage({payload:o},[o.buffer]);return}if(s.mode==="prepare"){let o=s.parts.map(io);self.postMessage({displays:o},ro(o));return}if(s.mode==="ground"){let o=s.parts.map(c=>({...c,vertices:c.vertices.map(h=>h.map((u,d)=>u+s.offset[d]))})),a=o.map(io);self.postMessage({parts:o,displays:a},ro(a));return}lu??=Ag({locateFile:()=>new URL("./manifold/manifold.wasm",import.meta.url).href}).then(o=>(o.setup(),o));let t=await lu,e=o=>self.postMessage({progress:o});e("Geometri kontrol ediliyor\u2026");let n,i;try{n=s.mode==="split"?Mc(t,s.part):[yc(t,s.part,s.areas,s.mode)].filter(Boolean)}catch(o){if(s.mode==="split"||!o.message.includes("kapal\u0131 ve tutarl\u0131"))throw o;e("Kaynak a\u011F kusurlu. Se\xE7ili b\xF6lge y\xFCzey \xFCzerinden d\xFCzenleniyor\u2026"),n=[Hh(s.part,s.areas,s.mode,e)].filter(Boolean),i="Kaynak dosyada a\xE7\u0131k/\xE7ak\u0131\u015Fan y\xFCzeyler var. Y\xFCzey i\u015Flemi uyguland\u0131; sonu\xE7 kapal\u0131 kat\u0131 olarak do\u011Frulanamad\u0131. Yazd\u0131rmadan \xF6nce dilimleyicide a\u011F kontrol\xFC yap\u0131n."}if(s.mode!=="split"&&n.length===1&&Gh(s.part,n[0]))throw new Error("Model de\u011Fi\u015Fmedi: se\xE7ili hacim kald\u0131r\u0131lacak y\xFCzeyle kesi\u015Fmiyor. Referans\u0131, y\xF6n\xFC ve i\u015Flem derinli\u011Fini kontrol edin.");e("G\xF6r\xFCn\xFCm ve se\xE7im verileri haz\u0131rlan\u0131yor\u2026");let r=n.map(io);self.postMessage({parts:n,warning:i,displays:r},ro(r))}catch(t){self.postMessage({error:t.message||String(t)})}};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
