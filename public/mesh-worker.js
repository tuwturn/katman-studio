import dd from"./manifold/manifold.js";function Wo(m,t){let e=[];for(let i=0;i<t.vertices.length;i++)e.push(...t.vertices[i],...t.colors?.[i]||[.48,.63,.85]);let n=new m.Mesh({numProp:6,vertProperties:Float32Array.from(e),triVerts:Uint32Array.from(t.triangles.flat())});n.merge();try{return m.Manifold.ofMesh(n)}catch{throw new Error("Bu a\u011F kapal\u0131 ve tutarl\u0131 bir kat\u0131 de\u011Fil. A\xE7\u0131k/bozuk y\xFCzeyleri olan modeli \xF6nce a\u011F onar\u0131m\u0131ndan ge\xE7irin.")}}function Xo(m,t={}){let e=m.getMesh(),n=[],i=[],r=[];for(let a=0;a<e.vertProperties.length;a+=e.numProp)n.push(Array.from(e.vertProperties.slice(a,a+3))),i.push(e.numProp>=6?Array.from(e.vertProperties.slice(a+3,a+6)):[.48,.63,.85]);for(let a=0;a<e.triVerts.length;a+=3)r.push(Array.from(e.triVerts.slice(a,a+3)));return{...t,vertices:n,colors:i,triangles:r}}function el(m,t,e,n=[.48,.63,.85]){let{u:i,v:r,n:a,center:c,width:l,height:f,depth:h,offset:d=0,shape:p="box"}=t;if(![l,f,h].every(u=>Number.isFinite(u)&&u>0))throw new Error("Alan ve i\u015Flem derinli\u011Fi s\u0131f\u0131rdan b\xFCy\xFCk olmal\u0131.");if(![i,r,a,c].every(u=>u?.length===3&&u.every(Number.isFinite)))throw new Error("\xD6nce d\xFCzeltilecek y\xFCzeyden referans se\xE7in.");let g=e==="fill"?d-h:d,x=p==="circle"?m.Manifold.cylinder(h,l/2,l/2,64,!1):m.Manifold.cube([l,f,h],!0),S=p==="circle"?x:x.translate([0,0,h/2]);S!==x&&x.delete();let T=[...i,0,...r,0,...a,0,...c.map((u,o)=>u+a[o]*g),1],A=S.transform(T),E=A.setProperties(3,u=>{for(let o=0;o<3;o++)u[o]=n[o]});return S.delete(),A.delete(),E}function qo(m,t,e,n){let i=Wo(m,t);try{for(let r of e){let a=r;if(n==="cut"){let f=1/0,h=-1/0;for(let p of t.vertices){let g=p.reduce((x,S,T)=>x+(S-r.center[T])*r.n[T],0);f=Math.min(f,g),h=Math.max(h,g)}let d=Math.max(.01,(h-f)*1e-5);a={...r,offset:f-d,depth:h-f+d*2}}let c=el(m,a,n,t.colors?.[0]),l=n==="fill"?i.add(c):i.subtract(c);c.delete(),i.delete(),i=l}if(i.status()!=="NoError")throw new Error("Kat\u0131 i\u015Flemi tamamlanamad\u0131: "+i.status());if(i.isEmpty()){if(n==="cut")return null;throw new Error("Se\xE7ilen alan modelin tamam\u0131n\u0131 kald\u0131r\u0131yor. Alan\u0131 veya derinli\u011Fi k\xFC\xE7\xFClt\xFCn.")}return Xo(i,t)}finally{i.delete()}}function Yo(m,t){let e=Wo(m,t),n=[];try{return n=e.decompose(),n.map((i,r)=>Xo(i,{...t,name:`${t.name} \xB7 ${r+1}`}))}finally{n.forEach(i=>i.delete()),e.delete()}}var Je=0,hr=1,ci=2;var Ss=1;var bs=100;var Ts=204,ws=205;var zs=0,Vs=1,ks=2,ei=3,Hs=4,Gs=5,Ws=6,Xs=7,ha=0;var qs=300;var Es=1e3,jn=1001,As=1002;var ua=1006;var fa=1008;var da=1009;var pa=1015;var ma=1023;var ni=2300,Yi=2301,Xi=2302,Cs=2400,Rs=2401,Is=2402;var Ys="",ie="srgb",Ps="srgb-linear",Ds="linear",qi="srgb";var $e=7680;var Ls=519;var Us=35044;var ti=2e3,Ns=2001;var Ke=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}},Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var md=Math.PI/180,nl=180/Math.PI;function li(){let m=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ft[m&255]+Ft[m>>8&255]+Ft[m>>16&255]+Ft[m>>24&255]+"-"+Ft[t&255]+Ft[t>>8&255]+"-"+Ft[t>>16&15|64]+Ft[t>>24&255]+"-"+Ft[e&63|128]+Ft[e>>8&255]+"-"+Ft[e>>16&255]+Ft[e>>24&255]+Ft[n&255]+Ft[n>>8&255]+Ft[n>>16&255]+Ft[n>>24&255]).toLowerCase()}function q(m,t,e){return Math.max(t,Math.min(e,m))}function il(m,t){return(m%t+t)%t}function jr(m,t,e){return(1-e)*m+e*t}function Zn(m,t){switch(t.constructor){case Float32Array:return m;case Uint32Array:return m/4294967295;case Uint16Array:return m/65535;case Uint8Array:return m/255;case Int32Array:return Math.max(m/2147483647,-1);case Int16Array:return Math.max(m/32767,-1);case Int8Array:return Math.max(m/127,-1);default:throw new Error("Invalid component type.")}}function Ht(m,t){switch(t.constructor){case Float32Array:return m;case Uint32Array:return Math.round(m*4294967295);case Uint16Array:return Math.round(m*65535);case Uint8Array:return Math.round(m*255);case Int32Array:return Math.round(m*2147483647);case Int16Array:return Math.round(m*32767);case Int8Array:return Math.round(m*127);default:throw new Error("Invalid component type.")}}var st=class m{constructor(t=0,e=0){m.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=q(this.x,t.x,e.x),this.y=q(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=q(this.x,t,e),this.y=q(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(q(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(q(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},we=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,c){let l=n[i+0],f=n[i+1],h=n[i+2],d=n[i+3],p=r[a+0],g=r[a+1],x=r[a+2],S=r[a+3];if(c===0){t[e+0]=l,t[e+1]=f,t[e+2]=h,t[e+3]=d;return}if(c===1){t[e+0]=p,t[e+1]=g,t[e+2]=x,t[e+3]=S;return}if(d!==S||l!==p||f!==g||h!==x){let T=1-c,A=l*p+f*g+h*x+d*S,E=A>=0?1:-1,u=1-A*A;if(u>Number.EPSILON){let _=Math.sqrt(u),s=Math.atan2(_,A*E);T=Math.sin(T*s)/_,c=Math.sin(c*s)/_}let o=c*E;if(l=l*T+p*o,f=f*T+g*o,h=h*T+x*o,d=d*T+S*o,T===1-c){let _=1/Math.sqrt(l*l+f*f+h*h+d*d);l*=_,f*=_,h*=_,d*=_}}t[e]=l,t[e+1]=f,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,a){let c=n[i],l=n[i+1],f=n[i+2],h=n[i+3],d=r[a],p=r[a+1],g=r[a+2],x=r[a+3];return t[e]=c*x+h*d+l*g-f*p,t[e+1]=l*x+h*p+f*d-c*g,t[e+2]=f*x+h*g+c*p-l*d,t[e+3]=h*x-c*d-l*p-f*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,a=t._order,c=Math.cos,l=Math.sin,f=c(n/2),h=c(i/2),d=c(r/2),p=l(n/2),g=l(i/2),x=l(r/2);switch(a){case"XYZ":this._x=p*h*d+f*g*x,this._y=f*g*d-p*h*x,this._z=f*h*x+p*g*d,this._w=f*h*d-p*g*x;break;case"YXZ":this._x=p*h*d+f*g*x,this._y=f*g*d-p*h*x,this._z=f*h*x-p*g*d,this._w=f*h*d+p*g*x;break;case"ZXY":this._x=p*h*d-f*g*x,this._y=f*g*d+p*h*x,this._z=f*h*x+p*g*d,this._w=f*h*d-p*g*x;break;case"ZYX":this._x=p*h*d-f*g*x,this._y=f*g*d+p*h*x,this._z=f*h*x-p*g*d,this._w=f*h*d+p*g*x;break;case"YZX":this._x=p*h*d+f*g*x,this._y=f*g*d+p*h*x,this._z=f*h*x-p*g*d,this._w=f*h*d-p*g*x;break;case"XZY":this._x=p*h*d-f*g*x,this._y=f*g*d-p*h*x,this._z=f*h*x+p*g*d,this._w=f*h*d+p*g*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],c=e[5],l=e[9],f=e[2],h=e[6],d=e[10],p=n+c+d;if(p>0){let g=.5/Math.sqrt(p+1);this._w=.25/g,this._x=(h-l)*g,this._y=(r-f)*g,this._z=(a-i)*g}else if(n>c&&n>d){let g=2*Math.sqrt(1+n-c-d);this._w=(h-l)/g,this._x=.25*g,this._y=(i+a)/g,this._z=(r+f)/g}else if(c>d){let g=2*Math.sqrt(1+c-n-d);this._w=(r-f)/g,this._x=(i+a)/g,this._y=.25*g,this._z=(l+h)/g}else{let g=2*Math.sqrt(1+d-n-c);this._w=(a-i)/g,this._x=(r+f)/g,this._y=(l+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(q(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,c=e._x,l=e._y,f=e._z,h=e._w;return this._x=n*h+a*c+i*f-r*l,this._y=i*h+a*l+r*c-n*f,this._z=r*h+a*f+n*l-i*c,this._w=a*h-n*c-i*l-r*f,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,a=this._w,c=a*t._w+n*t._x+i*t._y+r*t._z;if(c<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,c=-c):this.copy(t),c>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;let l=1-c*c;if(l<=Number.EPSILON){let g=1-e;return this._w=g*a+e*this._w,this._x=g*n+e*this._x,this._y=g*i+e*this._y,this._z=g*r+e*this._z,this.normalize(),this}let f=Math.sqrt(l),h=Math.atan2(f,c),d=Math.sin((1-e)*h)/f,p=Math.sin(e*h)/f;return this._w=a*d+this._w*p,this._x=n*d+this._x*p,this._y=i*d+this._y*p,this._z=r*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class m{constructor(t=0,e=0,n=0){m.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Zo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Zo.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,c=t.z,l=t.w,f=2*(a*i-c*n),h=2*(c*e-r*i),d=2*(r*n-a*e);return this.x=e+l*f+a*d-c*h,this.y=n+l*h+c*f-r*d,this.z=i+l*d+r*h-a*f,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=q(this.x,t.x,e.x),this.y=q(this.y,t.y,e.y),this.z=q(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=q(this.x,t,e),this.y=q(this.y,t,e),this.z=q(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(q(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,a=e.x,c=e.y,l=e.z;return this.x=i*l-r*c,this.y=r*a-n*l,this.z=n*c-i*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ts.copy(this).projectOnVector(t),this.sub(ts)}reflect(t){return this.sub(ts.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(q(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ts=new I,Zo=new we,X=class m{constructor(t,e,n,i,r,a,c,l,f){m.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,c,l,f)}set(t,e,n,i,r,a,c,l,f){let h=this.elements;return h[0]=t,h[1]=i,h[2]=c,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],c=n[3],l=n[6],f=n[1],h=n[4],d=n[7],p=n[2],g=n[5],x=n[8],S=i[0],T=i[3],A=i[6],E=i[1],u=i[4],o=i[7],_=i[2],s=i[5],R=i[8];return r[0]=a*S+c*E+l*_,r[3]=a*T+c*u+l*s,r[6]=a*A+c*o+l*R,r[1]=f*S+h*E+d*_,r[4]=f*T+h*u+d*s,r[7]=f*A+h*o+d*R,r[2]=p*S+g*E+x*_,r[5]=p*T+g*u+x*s,r[8]=p*A+g*o+x*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],c=t[5],l=t[6],f=t[7],h=t[8];return e*a*h-e*c*f-n*r*h+n*c*l+i*r*f-i*a*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],c=t[5],l=t[6],f=t[7],h=t[8],d=h*a-c*f,p=c*l-h*r,g=f*r-a*l,x=e*d+n*p+i*g;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/x;return t[0]=d*S,t[1]=(i*f-h*n)*S,t[2]=(c*n-i*a)*S,t[3]=p*S,t[4]=(h*e-i*l)*S,t[5]=(i*r-c*e)*S,t[6]=g*S,t[7]=(n*l-f*e)*S,t[8]=(a*e-n*r)*S,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,c){let l=Math.cos(r),f=Math.sin(r);return this.set(n*l,n*f,-n*(l*a+f*c)+a+t,-i*f,i*l,-i*(-f*a+l*c)+c+e,0,0,1),this}scale(t,e){return this.premultiply(es.makeScale(t,e)),this}rotate(t){return this.premultiply(es.makeRotation(-t)),this}translate(t,e){return this.premultiply(es.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},es=new X;function ga(m){for(let t=m.length-1;t>=0;--t)if(m[t]>=65535)return!0;return!1}function Fs(m){return document.createElementNS("http://www.w3.org/1999/xhtml",m)}var $o={};function Bs(m){m in $o||($o[m]=!0,console.warn(m))}var Jo=new X().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ko=new X().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function rl(){let m={enabled:!0,workingColorSpace:Ps,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===qi&&(i.r=Te(i.r),i.g=Te(i.g),i.b=Te(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===qi&&(i.r=Sn(i.r),i.g=Sn(i.g),i.b=Sn(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ys?Ds:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Bs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),m.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Bs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),m.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return m.define({[Ps]:{primaries:t,whitePoint:n,transfer:Ds,toXYZ:Jo,fromXYZ:Ko,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ie},outputColorSpaceConfig:{drawingBufferColorSpace:ie}},[ie]:{primaries:t,whitePoint:n,transfer:qi,toXYZ:Jo,fromXYZ:Ko,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ie}}}),m}var ne=rl();function Te(m){return m<.04045?m*.0773993808:Math.pow(m*.9478672986+.0521327014,2.4)}function Sn(m){return m<.0031308?m*12.92:1.055*Math.pow(m,.41666)-.055}var hn,Zi=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{hn===void 0&&(hn=Fs("canvas")),hn.width=t.width,hn.height=t.height;let i=hn.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=hn}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Fs("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Te(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Te(e[n]/255)*255):e[n]=Te(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},sl=0,$i=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sl++}),this.uuid=li(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,c=i.length;a<c;a++)i[a].isDataTexture?r.push(ns(i[a].image)):r.push(ns(i[a]))}else r=ns(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function ns(m){return typeof HTMLImageElement<"u"&&m instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&m instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&m instanceof ImageBitmap?Zi.getDataURL(m):m.data?{data:Array.from(m.data),width:m.width,height:m.height,type:m.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var ol=0,is=new I,bn=class m extends Ke{constructor(t=m.DEFAULT_IMAGE,e=m.DEFAULT_MAPPING,n=jn,i=jn,r=ua,a=fa,c=ma,l=da,f=m.DEFAULT_ANISOTROPY,h=Ys){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ol++}),this.uuid=li(),this.name="",this.source=new $i(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=f,this.format=c,this.internalFormat=null,this.type=l,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new X,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(is).x}get height(){return this.source.getSize(is).y}get depth(){return this.source.getSize(is).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==qs)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Es:t.x=t.x-Math.floor(t.x);break;case jn:t.x=t.x<0?0:1;break;case As:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Es:t.y=t.y-Math.floor(t.y);break;case jn:t.y=t.y<0?0:1;break;case As:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};bn.DEFAULT_IMAGE=null;bn.DEFAULT_MAPPING=qs;bn.DEFAULT_ANISOTROPY=1;var Zt=class m{constructor(t=0,e=0,n=0,i=1){m.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,f=l[0],h=l[4],d=l[8],p=l[1],g=l[5],x=l[9],S=l[2],T=l[6],A=l[10];if(Math.abs(h-p)<.01&&Math.abs(d-S)<.01&&Math.abs(x-T)<.01){if(Math.abs(h+p)<.1&&Math.abs(d+S)<.1&&Math.abs(x+T)<.1&&Math.abs(f+g+A-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let u=(f+1)/2,o=(g+1)/2,_=(A+1)/2,s=(h+p)/4,R=(d+S)/4,w=(x+T)/4;return u>o&&u>_?u<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(u),i=s/n,r=R/n):o>_?o<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(o),n=s/i,r=w/i):_<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(_),n=R/r,i=w/r),this.set(n,i,r,e),this}let E=Math.sqrt((T-x)*(T-x)+(d-S)*(d-S)+(p-h)*(p-h));return Math.abs(E)<.001&&(E=1),this.x=(T-x)/E,this.y=(d-S)/E,this.z=(p-h)/E,this.w=Math.acos((f+g+A-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=q(this.x,t.x,e.x),this.y=q(this.y,t.y,e.y),this.z=q(this.z,t.z,e.z),this.w=q(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=q(this.x,t,e),this.y=q(this.y,t,e),this.z=q(this.z,t,e),this.w=q(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(q(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};var At=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(se.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(se.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=se.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,c=r.count;a<c;a++)t.isMesh===!0?t.getVertexPosition(a,se):se.fromBufferAttribute(r,a),se.applyMatrix4(t.matrixWorld),this.expandByPoint(se);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ai.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ai.copy(n.boundingBox)),Ai.applyMatrix4(t.matrixWorld),this.union(Ai)}let i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,se),se.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter($n),Ci.subVectors(this.max,$n),un.subVectors(t.a,$n),fn.subVectors(t.b,$n),dn.subVectors(t.c,$n),Re.subVectors(fn,un),Ie.subVectors(dn,fn),qe.subVectors(un,dn);let e=[0,-Re.z,Re.y,0,-Ie.z,Ie.y,0,-qe.z,qe.y,Re.z,0,-Re.x,Ie.z,0,-Ie.x,qe.z,0,-qe.x,-Re.y,Re.x,0,-Ie.y,Ie.x,0,-qe.y,qe.x,0];return!rs(e,un,fn,dn,Ci)||(e=[1,0,0,0,1,0,0,0,1],!rs(e,un,fn,dn,Ci))?!1:(Ri.crossVectors(Re,Ie),e=[Ri.x,Ri.y,Ri.z],rs(e,un,fn,dn,Ci))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,se).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(se).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ye[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ye[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ye[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ye[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ye[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ye[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ye[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ye[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ye),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ye=[new I,new I,new I,new I,new I,new I,new I,new I],se=new I,Ai=new At,un=new I,fn=new I,dn=new I,Re=new I,Ie=new I,qe=new I,$n=new I,Ci=new I,Ri=new I,Ye=new I;function rs(m,t,e,n,i){for(let r=0,a=m.length-3;r<=a;r+=3){Ye.fromArray(m,r);let c=i.x*Math.abs(Ye.x)+i.y*Math.abs(Ye.y)+i.z*Math.abs(Ye.z),l=t.dot(Ye),f=e.dot(Ye),h=n.dot(Ye);if(Math.max(-Math.max(l,f,h),Math.min(l,f,h))>c)return!1}return!0}var al=new At,Jn=new I,ss=new I,ii=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):al.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Jn.subVectors(t,this.center);let e=Jn.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Jn,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ss.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Jn.copy(t.center).add(ss)),this.expandByPoint(Jn.copy(t.center).sub(ss))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},ve=new I,os=new I,Ii=new I,Pe=new I,as=new I,Pi=new I,cs=new I,me=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ve)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ve.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ve.copy(this.origin).addScaledVector(this.direction,e),ve.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){os.copy(t).add(e).multiplyScalar(.5),Ii.copy(e).sub(t).normalize(),Pe.copy(this.origin).sub(os);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Ii),c=Pe.dot(this.direction),l=-Pe.dot(Ii),f=Pe.lengthSq(),h=Math.abs(1-a*a),d,p,g,x;if(h>0)if(d=a*l-c,p=a*c-l,x=r*h,d>=0)if(p>=-x)if(p<=x){let S=1/h;d*=S,p*=S,g=d*(d+a*p+2*c)+p*(a*d+p+2*l)+f}else p=r,d=Math.max(0,-(a*p+c)),g=-d*d+p*(p+2*l)+f;else p=-r,d=Math.max(0,-(a*p+c)),g=-d*d+p*(p+2*l)+f;else p<=-x?(d=Math.max(0,-(-a*r+c)),p=d>0?-r:Math.min(Math.max(-r,-l),r),g=-d*d+p*(p+2*l)+f):p<=x?(d=0,p=Math.min(Math.max(-r,-l),r),g=p*(p+2*l)+f):(d=Math.max(0,-(a*r+c)),p=d>0?r:Math.min(Math.max(-r,-l),r),g=-d*d+p*(p+2*l)+f);else p=a>0?-r:r,d=Math.max(0,-(a*p+c)),g=-d*d+p*(p+2*l)+f;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(os).addScaledVector(Ii,p),g}intersectSphere(t,e){ve.subVectors(t.center,this.origin);let n=ve.dot(this.direction),i=ve.dot(ve)-n*n,r=t.radius*t.radius;if(i>r)return null;let a=Math.sqrt(r-i),c=n-a,l=n+a;return l<0?null:c<0?this.at(l,e):this.at(c,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,c,l,f=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,p=this.origin;return f>=0?(n=(t.min.x-p.x)*f,i=(t.max.x-p.x)*f):(n=(t.max.x-p.x)*f,i=(t.min.x-p.x)*f),h>=0?(r=(t.min.y-p.y)*h,a=(t.max.y-p.y)*h):(r=(t.max.y-p.y)*h,a=(t.min.y-p.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(c=(t.min.z-p.z)*d,l=(t.max.z-p.z)*d):(c=(t.max.z-p.z)*d,l=(t.min.z-p.z)*d),n>l||c>i)||((c>n||n!==n)&&(n=c),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,ve)!==null}intersectTriangle(t,e,n,i,r){as.subVectors(e,t),Pi.subVectors(n,t),cs.crossVectors(as,Pi);let a=this.direction.dot(cs),c;if(a>0){if(i)return null;c=1}else if(a<0)c=-1,a=-a;else return null;Pe.subVectors(this.origin,t);let l=c*this.direction.dot(Pi.crossVectors(Pe,Pi));if(l<0)return null;let f=c*this.direction.dot(as.cross(Pe));if(f<0||l+f>a)return null;let h=-c*Pe.dot(cs);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Q=class m{constructor(t,e,n,i,r,a,c,l,f,h,d,p,g,x,S,T){m.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,c,l,f,h,d,p,g,x,S,T)}set(t,e,n,i,r,a,c,l,f,h,d,p,g,x,S,T){let A=this.elements;return A[0]=t,A[4]=e,A[8]=n,A[12]=i,A[1]=r,A[5]=a,A[9]=c,A[13]=l,A[2]=f,A[6]=h,A[10]=d,A[14]=p,A[3]=g,A[7]=x,A[11]=S,A[15]=T,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new m().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/pn.setFromMatrixColumn(t,0).length(),r=1/pn.setFromMatrixColumn(t,1).length(),a=1/pn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),c=Math.sin(n),l=Math.cos(i),f=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let p=a*h,g=a*d,x=c*h,S=c*d;e[0]=l*h,e[4]=-l*d,e[8]=f,e[1]=g+x*f,e[5]=p-S*f,e[9]=-c*l,e[2]=S-p*f,e[6]=x+g*f,e[10]=a*l}else if(t.order==="YXZ"){let p=l*h,g=l*d,x=f*h,S=f*d;e[0]=p+S*c,e[4]=x*c-g,e[8]=a*f,e[1]=a*d,e[5]=a*h,e[9]=-c,e[2]=g*c-x,e[6]=S+p*c,e[10]=a*l}else if(t.order==="ZXY"){let p=l*h,g=l*d,x=f*h,S=f*d;e[0]=p-S*c,e[4]=-a*d,e[8]=x+g*c,e[1]=g+x*c,e[5]=a*h,e[9]=S-p*c,e[2]=-a*f,e[6]=c,e[10]=a*l}else if(t.order==="ZYX"){let p=a*h,g=a*d,x=c*h,S=c*d;e[0]=l*h,e[4]=x*f-g,e[8]=p*f+S,e[1]=l*d,e[5]=S*f+p,e[9]=g*f-x,e[2]=-f,e[6]=c*l,e[10]=a*l}else if(t.order==="YZX"){let p=a*l,g=a*f,x=c*l,S=c*f;e[0]=l*h,e[4]=S-p*d,e[8]=x*d+g,e[1]=d,e[5]=a*h,e[9]=-c*h,e[2]=-f*h,e[6]=g*d+x,e[10]=p-S*d}else if(t.order==="XZY"){let p=a*l,g=a*f,x=c*l,S=c*f;e[0]=l*h,e[4]=-d,e[8]=f*h,e[1]=p*d+S,e[5]=a*h,e[9]=g*d-x,e[2]=x*d-g,e[6]=c*h,e[10]=S*d+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(cl,t,ll)}lookAt(t,e,n){let i=this.elements;return qt.subVectors(t,e),qt.lengthSq()===0&&(qt.z=1),qt.normalize(),De.crossVectors(n,qt),De.lengthSq()===0&&(Math.abs(n.z)===1?qt.x+=1e-4:qt.z+=1e-4,qt.normalize(),De.crossVectors(n,qt)),De.normalize(),Di.crossVectors(qt,De),i[0]=De.x,i[4]=Di.x,i[8]=qt.x,i[1]=De.y,i[5]=Di.y,i[9]=qt.y,i[2]=De.z,i[6]=Di.z,i[10]=qt.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],c=n[4],l=n[8],f=n[12],h=n[1],d=n[5],p=n[9],g=n[13],x=n[2],S=n[6],T=n[10],A=n[14],E=n[3],u=n[7],o=n[11],_=n[15],s=i[0],R=i[4],w=i[8],v=i[12],y=i[1],M=i[5],b=i[9],C=i[13],P=i[2],D=i[6],L=i[10],U=i[14],F=i[3],N=i[7],k=i[11],O=i[15];return r[0]=a*s+c*y+l*P+f*F,r[4]=a*R+c*M+l*D+f*N,r[8]=a*w+c*b+l*L+f*k,r[12]=a*v+c*C+l*U+f*O,r[1]=h*s+d*y+p*P+g*F,r[5]=h*R+d*M+p*D+g*N,r[9]=h*w+d*b+p*L+g*k,r[13]=h*v+d*C+p*U+g*O,r[2]=x*s+S*y+T*P+A*F,r[6]=x*R+S*M+T*D+A*N,r[10]=x*w+S*b+T*L+A*k,r[14]=x*v+S*C+T*U+A*O,r[3]=E*s+u*y+o*P+_*F,r[7]=E*R+u*M+o*D+_*N,r[11]=E*w+u*b+o*L+_*k,r[15]=E*v+u*C+o*U+_*O,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],c=t[5],l=t[9],f=t[13],h=t[2],d=t[6],p=t[10],g=t[14],x=t[3],S=t[7],T=t[11],A=t[15];return x*(+r*l*d-i*f*d-r*c*p+n*f*p+i*c*g-n*l*g)+S*(+e*l*g-e*f*p+r*a*p-i*a*g+i*f*h-r*l*h)+T*(+e*f*d-e*c*g-r*a*d+n*a*g+r*c*h-n*f*h)+A*(-i*c*h-e*l*d+e*c*p+i*a*d-n*a*p+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],c=t[5],l=t[6],f=t[7],h=t[8],d=t[9],p=t[10],g=t[11],x=t[12],S=t[13],T=t[14],A=t[15],E=d*T*f-S*p*f+S*l*g-c*T*g-d*l*A+c*p*A,u=x*p*f-h*T*f-x*l*g+a*T*g+h*l*A-a*p*A,o=h*S*f-x*d*f+x*c*g-a*S*g-h*c*A+a*d*A,_=x*d*l-h*S*l-x*c*p+a*S*p+h*c*T-a*d*T,s=e*E+n*u+i*o+r*_;if(s===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/s;return t[0]=E*R,t[1]=(S*p*r-d*T*r-S*i*g+n*T*g+d*i*A-n*p*A)*R,t[2]=(c*T*r-S*l*r+S*i*f-n*T*f-c*i*A+n*l*A)*R,t[3]=(d*l*r-c*p*r-d*i*f+n*p*f+c*i*g-n*l*g)*R,t[4]=u*R,t[5]=(h*T*r-x*p*r+x*i*g-e*T*g-h*i*A+e*p*A)*R,t[6]=(x*l*r-a*T*r-x*i*f+e*T*f+a*i*A-e*l*A)*R,t[7]=(a*p*r-h*l*r+h*i*f-e*p*f-a*i*g+e*l*g)*R,t[8]=o*R,t[9]=(x*d*r-h*S*r-x*n*g+e*S*g+h*n*A-e*d*A)*R,t[10]=(a*S*r-x*c*r+x*n*f-e*S*f-a*n*A+e*c*A)*R,t[11]=(h*c*r-a*d*r-h*n*f+e*d*f+a*n*g-e*c*g)*R,t[12]=_*R,t[13]=(h*S*i-x*d*i+x*n*p-e*S*p-h*n*T+e*d*T)*R,t[14]=(x*c*i-a*S*i-x*n*l+e*S*l+a*n*T-e*c*T)*R,t[15]=(a*d*i-h*c*i+h*n*l-e*d*l-a*n*p+e*c*p)*R,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,c=t.y,l=t.z,f=r*a,h=r*c;return this.set(f*a+n,f*c-i*l,f*l+i*c,0,f*c+i*l,h*c+n,h*l-i*a,0,f*l-i*c,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,a=e._y,c=e._z,l=e._w,f=r+r,h=a+a,d=c+c,p=r*f,g=r*h,x=r*d,S=a*h,T=a*d,A=c*d,E=l*f,u=l*h,o=l*d,_=n.x,s=n.y,R=n.z;return i[0]=(1-(S+A))*_,i[1]=(g+o)*_,i[2]=(x-u)*_,i[3]=0,i[4]=(g-o)*s,i[5]=(1-(p+A))*s,i[6]=(T+E)*s,i[7]=0,i[8]=(x+u)*R,i[9]=(T-E)*R,i[10]=(1-(p+S))*R,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=pn.set(i[0],i[1],i[2]).length(),a=pn.set(i[4],i[5],i[6]).length(),c=pn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],oe.copy(this);let f=1/r,h=1/a,d=1/c;return oe.elements[0]*=f,oe.elements[1]*=f,oe.elements[2]*=f,oe.elements[4]*=h,oe.elements[5]*=h,oe.elements[6]*=h,oe.elements[8]*=d,oe.elements[9]*=d,oe.elements[10]*=d,e.setFromRotationMatrix(oe),n.x=r,n.y=a,n.z=c,this}makePerspective(t,e,n,i,r,a,c=ti,l=!1){let f=this.elements,h=2*r/(e-t),d=2*r/(n-i),p=(e+t)/(e-t),g=(n+i)/(n-i),x,S;if(l)x=r/(a-r),S=a*r/(a-r);else if(c===ti)x=-(a+r)/(a-r),S=-2*a*r/(a-r);else if(c===Ns)x=-a/(a-r),S=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return f[0]=h,f[4]=0,f[8]=p,f[12]=0,f[1]=0,f[5]=d,f[9]=g,f[13]=0,f[2]=0,f[6]=0,f[10]=x,f[14]=S,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(t,e,n,i,r,a,c=ti,l=!1){let f=this.elements,h=2/(e-t),d=2/(n-i),p=-(e+t)/(e-t),g=-(n+i)/(n-i),x,S;if(l)x=1/(a-r),S=a/(a-r);else if(c===ti)x=-2/(a-r),S=-(a+r)/(a-r);else if(c===Ns)x=-1/(a-r),S=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return f[0]=h,f[4]=0,f[8]=0,f[12]=p,f[1]=0,f[5]=d,f[9]=0,f[13]=g,f[2]=0,f[6]=0,f[10]=x,f[14]=S,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},pn=new I,oe=new Q,cl=new I(0,0,0),ll=new I(1,1,1),De=new I,Di=new I,qt=new I,Qo=new Q,jo=new we,Tn=class m{constructor(t=0,e=0,n=0,i=m.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],a=i[4],c=i[8],l=i[1],f=i[5],h=i[9],d=i[2],p=i[6],g=i[10];switch(e){case"XYZ":this._y=Math.asin(q(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,f),this._z=0);break;case"YXZ":this._x=Math.asin(-q(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(c,g),this._z=Math.atan2(l,f)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(q(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-a,f)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-q(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,g),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,f));break;case"YZX":this._z=Math.asin(q(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,f),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(c,g));break;case"XZY":this._z=Math.asin(-q(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,f),this._y=Math.atan2(c,r)):(this._x=Math.atan2(-h,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Qo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Qo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return jo.setFromEuler(this),this.setFromQuaternion(jo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Tn.DEFAULT_ORDER="XYZ";var Ji=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},hl=0,ta=new I,mn=new we,Me=new Q,Li=new I,Kn=new I,ul=new I,fl=new we,ea=new I(1,0,0),na=new I(0,1,0),ia=new I(0,0,1),ra={type:"added"},dl={type:"removed"},gn={type:"childadded",child:null},ls={type:"childremoved",child:null},Ue=class m extends Ke{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hl++}),this.uuid=li(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=m.DEFAULT_UP.clone();let t=new I,e=new Tn,n=new we,i=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Q},normalMatrix:{value:new X}}),this.matrix=new Q,this.matrixWorld=new Q,this.matrixAutoUpdate=m.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=m.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ji,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return mn.setFromAxisAngle(t,e),this.quaternion.multiply(mn),this}rotateOnWorldAxis(t,e){return mn.setFromAxisAngle(t,e),this.quaternion.premultiply(mn),this}rotateX(t){return this.rotateOnAxis(ea,t)}rotateY(t){return this.rotateOnAxis(na,t)}rotateZ(t){return this.rotateOnAxis(ia,t)}translateOnAxis(t,e){return ta.copy(t).applyQuaternion(this.quaternion),this.position.add(ta.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ea,t)}translateY(t){return this.translateOnAxis(na,t)}translateZ(t){return this.translateOnAxis(ia,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Me.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Li.copy(t):Li.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Kn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Me.lookAt(Kn,Li,this.up):Me.lookAt(Li,Kn,this.up),this.quaternion.setFromRotationMatrix(Me),i&&(Me.extractRotation(i.matrixWorld),mn.setFromRotationMatrix(Me),this.quaternion.premultiply(mn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ra),gn.child=t,this.dispatchEvent(gn),gn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(dl),ls.child=t,this.dispatchEvent(ls),ls.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Me.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Me.multiply(t.parent.matrixWorld)),t.applyMatrix4(Me),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ra),gn.child=t,this.dispatchEvent(gn),gn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kn,t,ul),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kn,fl,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(c=>({...c,boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(c=>({...c})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(c,l){return c[l.uuid]===void 0&&(c[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let l=c.shapes;if(Array.isArray(l))for(let f=0,h=l.length;f<h;f++){let d=l[f];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let l=0,f=this.material.length;l<f;l++)c.push(r(t.materials,this.material[l]));i.material=c}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let c=0;c<this.children.length;c++)i.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let c=0;c<this.animations.length;c++){let l=this.animations[c];i.animations.push(r(t.animations,l))}}if(e){let c=a(t.geometries),l=a(t.materials),f=a(t.textures),h=a(t.images),d=a(t.shapes),p=a(t.skeletons),g=a(t.animations),x=a(t.nodes);c.length>0&&(n.geometries=c),l.length>0&&(n.materials=l),f.length>0&&(n.textures=f),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),p.length>0&&(n.skeletons=p),g.length>0&&(n.animations=g),x.length>0&&(n.nodes=x)}return n.object=i,n;function a(c){let l=[];for(let f in c){let h=c[f];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};Ue.DEFAULT_UP=new I(0,1,0);Ue.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ae=new I,Se=new I,hs=new I,be=new I,_n=new I,xn=new I,sa=new I,us=new I,fs=new I,ds=new I,ps=new Zt,ms=new Zt,gs=new Zt,pt=class m{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),ae.subVectors(t,e),i.cross(ae);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){ae.subVectors(i,e),Se.subVectors(n,e),hs.subVectors(t,e);let a=ae.dot(ae),c=ae.dot(Se),l=ae.dot(hs),f=Se.dot(Se),h=Se.dot(hs),d=a*f-c*c;if(d===0)return r.set(0,0,0),null;let p=1/d,g=(f*l-c*h)*p,x=(a*h-c*l)*p;return r.set(1-g-x,x,g)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,be)===null?!1:be.x>=0&&be.y>=0&&be.x+be.y<=1}static getInterpolation(t,e,n,i,r,a,c,l){return this.getBarycoord(t,e,n,i,be)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,be.x),l.addScaledVector(a,be.y),l.addScaledVector(c,be.z),l)}static getInterpolatedAttribute(t,e,n,i,r,a){return ps.setScalar(0),ms.setScalar(0),gs.setScalar(0),ps.fromBufferAttribute(t,e),ms.fromBufferAttribute(t,n),gs.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(ps,r.x),a.addScaledVector(ms,r.y),a.addScaledVector(gs,r.z),a}static isFrontFacing(t,e,n,i){return ae.subVectors(n,e),Se.subVectors(t,e),ae.cross(Se).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ae.subVectors(this.c,this.b),Se.subVectors(this.a,this.b),ae.cross(Se).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return m.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return m.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return m.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return m.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return m.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,a,c;_n.subVectors(i,n),xn.subVectors(r,n),us.subVectors(t,n);let l=_n.dot(us),f=xn.dot(us);if(l<=0&&f<=0)return e.copy(n);fs.subVectors(t,i);let h=_n.dot(fs),d=xn.dot(fs);if(h>=0&&d<=h)return e.copy(i);let p=l*d-h*f;if(p<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(_n,a);ds.subVectors(t,r);let g=_n.dot(ds),x=xn.dot(ds);if(x>=0&&g<=x)return e.copy(r);let S=g*f-l*x;if(S<=0&&f>=0&&x<=0)return c=f/(f-x),e.copy(n).addScaledVector(xn,c);let T=h*x-g*d;if(T<=0&&d-h>=0&&g-x>=0)return sa.subVectors(r,i),c=(d-h)/(d-h+(g-x)),e.copy(i).addScaledVector(sa,c);let A=1/(T+S+p);return a=S*A,c=p*A,e.copy(n).addScaledVector(_n,a).addScaledVector(xn,c)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},_a={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Le={h:0,s:0,l:0},Ui={h:0,s:0,l:0};function _s(m,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?m+(t-m)*6*e:e<1/2?t:e<2/3?m+(t-m)*6*(2/3-e):m}var Lt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ie){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=ne.workingColorSpace){return this.r=t,this.g=e,this.b=n,ne.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=ne.workingColorSpace){if(t=il(t,1),e=q(e,0,1),n=q(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=_s(a,r,t+1/3),this.g=_s(a,r,t),this.b=_s(a,r,t-1/3)}return ne.colorSpaceToWorking(this,i),this}setStyle(t,e=ie){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=i[1],c=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ie){let n=_a[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Te(t.r),this.g=Te(t.g),this.b=Te(t.b),this}copyLinearToSRGB(t){return this.r=Sn(t.r),this.g=Sn(t.g),this.b=Sn(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ie){return ne.workingToColorSpace(Bt.copy(this),t),Math.round(q(Bt.r*255,0,255))*65536+Math.round(q(Bt.g*255,0,255))*256+Math.round(q(Bt.b*255,0,255))}getHexString(t=ie){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.workingToColorSpace(Bt.copy(this),e);let n=Bt.r,i=Bt.g,r=Bt.b,a=Math.max(n,i,r),c=Math.min(n,i,r),l,f,h=(c+a)/2;if(c===a)l=0,f=0;else{let d=a-c;switch(f=h<=.5?d/(a+c):d/(2-a-c),a){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=f,t.l=h,t}getRGB(t,e=ne.workingColorSpace){return ne.workingToColorSpace(Bt.copy(this),e),t.r=Bt.r,t.g=Bt.g,t.b=Bt.b,t}getStyle(t=ie){ne.workingToColorSpace(Bt.copy(this),t);let e=Bt.r,n=Bt.g,i=Bt.b;return t!==ie?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Le),this.setHSL(Le.h+t,Le.s+e,Le.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Le),t.getHSL(Ui);let n=jr(Le.h,Ui.h,e),i=jr(Le.s,Ui.s,e),r=jr(Le.l,Ui.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Bt=new Lt;Lt.NAMES=_a;var pl=0,Ki=class extends Ke{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pl++}),this.uuid=li(),this.name="",this.type="Material",this.blending=Ss,this.side=Je,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ts,this.blendDst=ws,this.blendEquation=bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=ei,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ls,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$e,this.stencilZFail=$e,this.stencilZPass=$e,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ss&&(n.blending=this.blending),this.side!==Je&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ts&&(n.blendSrc=this.blendSrc),this.blendDst!==ws&&(n.blendDst=this.blendDst),this.blendEquation!==bs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ei&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ls&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$e&&(n.stencilFail=this.stencilFail),this.stencilZFail!==$e&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==$e&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let c in r){let l=r[c];delete l.metadata,a.push(l)}return a}if(e){let r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Qi=class extends Ki{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=ha,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Dt=new I,Ni=new st,ml=0,Ot=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ml++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Us,this.updateRanges=[],this.gpuType=pa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ni.fromBufferAttribute(this,e),Ni.applyMatrix3(t),this.setXY(e,Ni.x,Ni.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Dt.fromBufferAttribute(this,e),Dt.applyMatrix3(t),this.setXYZ(e,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Dt.fromBufferAttribute(this,e),Dt.applyMatrix4(t),this.setXYZ(e,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Dt.fromBufferAttribute(this,e),Dt.applyNormalMatrix(t),this.setXYZ(e,Dt.x,Dt.y,Dt.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Dt.fromBufferAttribute(this,e),Dt.transformDirection(t),this.setXYZ(e,Dt.x,Dt.y,Dt.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Zn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ht(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Zn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ht(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Zn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ht(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Zn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ht(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Zn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ht(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ht(e,this.array),n=Ht(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ht(e,this.array),n=Ht(n,this.array),i=Ht(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Ht(e,this.array),n=Ht(n,this.array),i=Ht(i,this.array),r=Ht(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Us&&(t.usage=this.usage),t}};var ji=class extends Ot{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var tr=class extends Ot{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Gt=class extends Ot{constructor(t,e,n){super(new Float32Array(t),e,n)}},gl=0,ee=new Q,xs=new Ue,yn=new I,Yt=new At,Qn=new At,Ut=new I,Ne=class m extends Ke{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gl++}),this.uuid=li(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ga(t)?tr:ji)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new X().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ee.makeRotationFromQuaternion(t),this.applyMatrix4(ee),this}rotateX(t){return ee.makeRotationX(t),this.applyMatrix4(ee),this}rotateY(t){return ee.makeRotationY(t),this.applyMatrix4(ee),this}rotateZ(t){return ee.makeRotationZ(t),this.applyMatrix4(ee),this}translate(t,e,n){return ee.makeTranslation(t,e,n),this.applyMatrix4(ee),this}scale(t,e,n){return ee.makeScale(t,e,n),this.applyMatrix4(ee),this}lookAt(t){return xs.lookAt(t),xs.updateMatrix(),this.applyMatrix4(xs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yn).negate(),this.translate(yn.x,yn.y,yn.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Gt(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new At);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];Yt.setFromBufferAttribute(r),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,Yt.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,Yt.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(Yt.min),this.boundingBox.expandByPoint(Yt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ii);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let n=this.boundingSphere.center;if(Yt.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let c=e[r];Qn.setFromBufferAttribute(c),this.morphTargetsRelative?(Ut.addVectors(Yt.min,Qn.min),Yt.expandByPoint(Ut),Ut.addVectors(Yt.max,Qn.max),Yt.expandByPoint(Ut)):(Yt.expandByPoint(Qn.min),Yt.expandByPoint(Qn.max))}Yt.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)Ut.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Ut));if(e)for(let r=0,a=e.length;r<a;r++){let c=e[r],l=this.morphTargetsRelative;for(let f=0,h=c.count;f<h;f++)Ut.fromBufferAttribute(c,f),l&&(yn.fromBufferAttribute(t,f),Ut.add(yn)),i=Math.max(i,n.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ot(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),c=[],l=[];for(let w=0;w<n.count;w++)c[w]=new I,l[w]=new I;let f=new I,h=new I,d=new I,p=new st,g=new st,x=new st,S=new I,T=new I;function A(w,v,y){f.fromBufferAttribute(n,w),h.fromBufferAttribute(n,v),d.fromBufferAttribute(n,y),p.fromBufferAttribute(r,w),g.fromBufferAttribute(r,v),x.fromBufferAttribute(r,y),h.sub(f),d.sub(f),g.sub(p),x.sub(p);let M=1/(g.x*x.y-x.x*g.y);isFinite(M)&&(S.copy(h).multiplyScalar(x.y).addScaledVector(d,-g.y).multiplyScalar(M),T.copy(d).multiplyScalar(g.x).addScaledVector(h,-x.x).multiplyScalar(M),c[w].add(S),c[v].add(S),c[y].add(S),l[w].add(T),l[v].add(T),l[y].add(T))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let w=0,v=E.length;w<v;++w){let y=E[w],M=y.start,b=y.count;for(let C=M,P=M+b;C<P;C+=3)A(t.getX(C+0),t.getX(C+1),t.getX(C+2))}let u=new I,o=new I,_=new I,s=new I;function R(w){_.fromBufferAttribute(i,w),s.copy(_);let v=c[w];u.copy(v),u.sub(_.multiplyScalar(_.dot(v))).normalize(),o.crossVectors(s,v);let M=o.dot(l[w])<0?-1:1;a.setXYZW(w,u.x,u.y,u.z,M)}for(let w=0,v=E.length;w<v;++w){let y=E[w],M=y.start,b=y.count;for(let C=M,P=M+b;C<P;C+=3)R(t.getX(C+0)),R(t.getX(C+1)),R(t.getX(C+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ot(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,g=n.count;p<g;p++)n.setXYZ(p,0,0,0);let i=new I,r=new I,a=new I,c=new I,l=new I,f=new I,h=new I,d=new I;if(t)for(let p=0,g=t.count;p<g;p+=3){let x=t.getX(p+0),S=t.getX(p+1),T=t.getX(p+2);i.fromBufferAttribute(e,x),r.fromBufferAttribute(e,S),a.fromBufferAttribute(e,T),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,S),f.fromBufferAttribute(n,T),c.add(h),l.add(h),f.add(h),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(T,f.x,f.y,f.z)}else for(let p=0,g=e.count;p<g;p+=3)i.fromBufferAttribute(e,p+0),r.fromBufferAttribute(e,p+1),a.fromBufferAttribute(e,p+2),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ut.fromBufferAttribute(t,e),Ut.normalize(),t.setXYZ(e,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function t(c,l){let f=c.array,h=c.itemSize,d=c.normalized,p=new f.constructor(l.length*h),g=0,x=0;for(let S=0,T=l.length;S<T;S++){c.isInterleavedBufferAttribute?g=l[S]*c.data.stride+c.offset:g=l[S]*h;for(let A=0;A<h;A++)p[x++]=f[g++]}return new Ot(p,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new m,n=this.index.array,i=this.attributes;for(let c in i){let l=i[c],f=t(l,n);e.setAttribute(c,f)}let r=this.morphAttributes;for(let c in r){let l=[],f=r[c];for(let h=0,d=f.length;h<d;h++){let p=f[h],g=t(p,n);l.push(g)}e.morphAttributes[c]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let c=0,l=a.length;c<l;c++){let f=a[c];e.addGroup(f.start,f.count,f.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let f in l)l[f]!==void 0&&(t[f]=l[f]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let f=n[l];t.data.attributes[l]=f.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let f=this.morphAttributes[l],h=[];for(let d=0,p=f.length;d<p;d++){let g=f[d];h.push(g.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let c=this.boundingSphere;return c!==null&&(t.data.boundingSphere=c.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let f in i){let h=i[f];this.setAttribute(f,h.clone(e))}let r=t.morphAttributes;for(let f in r){let h=[],d=r[f];for(let p=0,g=d.length;p<g;p++)h.push(d[p].clone(e));this.morphAttributes[f]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let f=0,h=a.length;f<h;f++){let d=a[f];this.addGroup(d.start,d.count,d.materialIndex)}let c=t.boundingBox;c!==null&&(this.boundingBox=c.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},oa=new Q,Ze=new me,Fi=new ii,aa=new I,Bi=new I,Oi=new I,zi=new I,ys=new I,Vi=new I,ca=new I,ki=new I,ri=class extends Ue{constructor(t=new Ne,e=new Qi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let c=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let c=this.morphTargetInfluences;if(r&&c){Vi.set(0,0,0);for(let l=0,f=r.length;l<f;l++){let h=c[l],d=r[l];h!==0&&(ys.fromBufferAttribute(d,t),a?Vi.addScaledVector(ys,h):Vi.addScaledVector(ys.sub(e),h))}e.add(Vi)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fi.copy(n.boundingSphere),Fi.applyMatrix4(r),Ze.copy(t.ray).recast(t.near),!(Fi.containsPoint(Ze.origin)===!1&&(Ze.intersectSphere(Fi,aa)===null||Ze.origin.distanceToSquared(aa)>(t.far-t.near)**2))&&(oa.copy(r).invert(),Ze.copy(t.ray).applyMatrix4(oa),!(n.boundingBox!==null&&Ze.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ze)))}_computeIntersections(t,e,n){let i,r=this.geometry,a=this.material,c=r.index,l=r.attributes.position,f=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,p=r.groups,g=r.drawRange;if(c!==null)if(Array.isArray(a))for(let x=0,S=p.length;x<S;x++){let T=p[x],A=a[T.materialIndex],E=Math.max(T.start,g.start),u=Math.min(c.count,Math.min(T.start+T.count,g.start+g.count));for(let o=E,_=u;o<_;o+=3){let s=c.getX(o),R=c.getX(o+1),w=c.getX(o+2);i=Hi(this,A,t,n,f,h,d,s,R,w),i&&(i.faceIndex=Math.floor(o/3),i.face.materialIndex=T.materialIndex,e.push(i))}}else{let x=Math.max(0,g.start),S=Math.min(c.count,g.start+g.count);for(let T=x,A=S;T<A;T+=3){let E=c.getX(T),u=c.getX(T+1),o=c.getX(T+2);i=Hi(this,a,t,n,f,h,d,E,u,o),i&&(i.faceIndex=Math.floor(T/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,S=p.length;x<S;x++){let T=p[x],A=a[T.materialIndex],E=Math.max(T.start,g.start),u=Math.min(l.count,Math.min(T.start+T.count,g.start+g.count));for(let o=E,_=u;o<_;o+=3){let s=o,R=o+1,w=o+2;i=Hi(this,A,t,n,f,h,d,s,R,w),i&&(i.faceIndex=Math.floor(o/3),i.face.materialIndex=T.materialIndex,e.push(i))}}else{let x=Math.max(0,g.start),S=Math.min(l.count,g.start+g.count);for(let T=x,A=S;T<A;T+=3){let E=T,u=T+1,o=T+2;i=Hi(this,a,t,n,f,h,d,E,u,o),i&&(i.faceIndex=Math.floor(T/3),e.push(i))}}}};function _l(m,t,e,n,i,r,a,c){let l;if(t.side===hr?l=n.intersectTriangle(a,r,i,!0,c):l=n.intersectTriangle(i,r,a,t.side===Je,c),l===null)return null;ki.copy(c),ki.applyMatrix4(m.matrixWorld);let f=e.ray.origin.distanceTo(ki);return f<e.near||f>e.far?null:{distance:f,point:ki.clone(),object:m}}function Hi(m,t,e,n,i,r,a,c,l,f){m.getVertexPosition(c,Bi),m.getVertexPosition(l,Oi),m.getVertexPosition(f,zi);let h=_l(m,t,e,n,Bi,Oi,zi,ca);if(h){let d=new I;pt.getBarycoord(ca,Bi,Oi,zi,d),i&&(h.uv=pt.getInterpolatedAttribute(i,c,l,f,d,new st)),r&&(h.uv1=pt.getInterpolatedAttribute(r,c,l,f,d,new st)),a&&(h.normal=pt.getInterpolatedAttribute(a,c,l,f,d,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let p={a:c,b:l,c:f,normal:new I,materialIndex:0};pt.getNormal(Bi,Oi,zi,p.normal),h.face=p,h.barycoord=d}return h}var si=class m extends Ne{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let c=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],f=[],h=[],d=[],p=0,g=0;x("z","y","x",-1,-1,n,e,t,a,r,0),x("z","y","x",1,-1,n,e,-t,a,r,1),x("x","z","y",1,1,t,n,e,i,a,2),x("x","z","y",1,-1,t,n,-e,i,a,3),x("x","y","z",1,-1,t,e,n,i,r,4),x("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Gt(f,3)),this.setAttribute("normal",new Gt(h,3)),this.setAttribute("uv",new Gt(d,2));function x(S,T,A,E,u,o,_,s,R,w,v){let y=o/R,M=_/w,b=o/2,C=_/2,P=s/2,D=R+1,L=w+1,U=0,F=0,N=new I;for(let k=0;k<L;k++){let O=k*M-C;for(let z=0;z<D;z++){let V=z*y-b;N[S]=V*E,N[T]=O*u,N[A]=P,f.push(N.x,N.y,N.z),N[S]=0,N[T]=0,N[A]=s>0?1:-1,h.push(N.x,N.y,N.z),d.push(z/R),d.push(1-k/w),U+=1}}for(let k=0;k<w;k++)for(let O=0;O<R;O++){let z=p+O+D*k,V=p+O+D*(k+1),H=p+(O+1)+D*(k+1),G=p+(O+1)+D*k;l.push(z,V,G),l.push(V,H,G),F+=6}c.addGroup(g,F,v),g+=F,p+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new m(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function xa(m){let t={};for(let e in m){t[e]={};for(let n in m[e]){let i=m[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Vt(m){let t={};for(let e=0;e<m.length;e++){let n=xa(m[e]);for(let i in n)t[i]=n[i]}return t}var vs=new I,xl=new I,yl=new X,ce=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=vs.subVectors(n,e).cross(xl.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(vs),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||yl.getNormalMatrix(t),i=this.coplanarPoint(vs).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}};var oi=class m extends Ne{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,c=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:c,thetaLength:l};let f=this;i=Math.floor(i),r=Math.floor(r);let h=[],d=[],p=[],g=[],x=0,S=[],T=n/2,A=0;E(),a===!1&&(t>0&&u(!0),e>0&&u(!1)),this.setIndex(h),this.setAttribute("position",new Gt(d,3)),this.setAttribute("normal",new Gt(p,3)),this.setAttribute("uv",new Gt(g,2));function E(){let o=new I,_=new I,s=0,R=(e-t)/n;for(let w=0;w<=r;w++){let v=[],y=w/r,M=y*(e-t)+t;for(let b=0;b<=i;b++){let C=b/i,P=C*l+c,D=Math.sin(P),L=Math.cos(P);_.x=M*D,_.y=-y*n+T,_.z=M*L,d.push(_.x,_.y,_.z),o.set(D,R,L).normalize(),p.push(o.x,o.y,o.z),g.push(C,1-y),v.push(x++)}S.push(v)}for(let w=0;w<i;w++)for(let v=0;v<r;v++){let y=S[v][w],M=S[v+1][w],b=S[v+1][w+1],C=S[v][w+1];(t>0||v!==0)&&(h.push(y,M,C),s+=3),(e>0||v!==r-1)&&(h.push(M,b,C),s+=3)}f.addGroup(A,s,0),A+=s}function u(o){let _=x,s=new st,R=new I,w=0,v=o===!0?t:e,y=o===!0?1:-1;for(let b=1;b<=i;b++)d.push(0,T*y,0),p.push(0,y,0),g.push(.5,.5),x++;let M=x;for(let b=0;b<=i;b++){let P=b/i*l+c,D=Math.cos(P),L=Math.sin(P);R.x=v*L,R.y=T*y,R.z=v*D,d.push(R.x,R.y,R.z),p.push(0,y,0),s.x=D*.5+.5,s.y=L*.5*y+.5,g.push(s.x,s.y),x++}for(let b=0;b<i;b++){let C=_+b,P=M+b;o===!0?h.push(P,P+1,C):h.push(P+1,P,C),w+=3}f.addGroup(A,w,o===!0?1:2),A+=w}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new m(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};function Gi(m,t){return!m||m.constructor===t?m:typeof t.BYTES_PER_ELEMENT=="number"?new t(m):Array.prototype.slice.call(m)}function vl(m){return ArrayBuffer.isView(m)&&!(m instanceof DataView)}var Qe=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<i)){for(let c=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===c)break;if(r=i,i=e[++n],t<i)break t}a=e.length;break e}if(!(t>=r)){let c=e[1];t<c&&(n=2,r=c);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let c=n+a>>>1;t<e[c]?a=c:n=c+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let a=0;a!==i;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},er=class extends Qe{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Cs,endingEnd:Cs}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,a=t+1,c=i[r],l=i[a];if(c===void 0)switch(this.getSettings_().endingStart){case Rs:r=t,c=2*e-n;break;case Is:r=i.length-2,c=e+i[r]-i[r+1];break;default:r=t,c=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Rs:a=t,l=2*n-e;break;case Is:a=1,l=n+i[1]-i[0];break;default:a=t-1,l=e}let f=(n-e)*.5,h=this.valueSize;this._weightPrev=f/(e-c),this._weightNext=f/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,c=this.valueSize,l=t*c,f=l-c,h=this._offsetPrev,d=this._offsetNext,p=this._weightPrev,g=this._weightNext,x=(n-e)/(i-e),S=x*x,T=S*x,A=-p*T+2*p*S-p*x,E=(1+p)*T+(-1.5-2*p)*S+(-.5+p)*x+1,u=(-1-g)*T+(1.5+g)*S+.5*x,o=g*T-g*S;for(let _=0;_!==c;++_)r[_]=A*a[h+_]+E*a[f+_]+u*a[l+_]+o*a[d+_];return r}},nr=class extends Qe{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,c=this.valueSize,l=t*c,f=l-c,h=(n-e)/(i-e),d=1-h;for(let p=0;p!==c;++p)r[p]=a[f+p]*d+a[l+p]*h;return r}},ir=class extends Qe{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},$t=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Gi(e,this.TimeBufferType),this.values=Gi(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Gi(t.times,Array),values:Gi(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ir(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new nr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new er(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ni:e=this.InterpolantFactoryMethodDiscrete;break;case Yi:e=this.InterpolantFactoryMethodLinear;break;case Xi:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ni;case this.InterpolantFactoryMethodLinear:return Yi;case this.InterpolantFactoryMethodSmooth:return Xi}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let c=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*c,a*c)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let c=0;c!==r;c++){let l=n[c];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,c,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,c,l,a),t=!1;break}a=l}if(i!==void 0&&vl(i))for(let c=0,l=i.length;c!==l;++c){let f=i[c];if(isNaN(f)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,c,f),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Xi,r=t.length-1,a=1;for(let c=1;c<r;++c){let l=!1,f=t[c],h=t[c+1];if(f!==h&&(c!==1||f!==t[0]))if(i)l=!0;else{let d=c*n,p=d-n,g=d+n;for(let x=0;x!==n;++x){let S=e[d+x];if(S!==e[p+x]||S!==e[g+x]){l=!0;break}}}if(l){if(c!==a){t[a]=t[c];let d=c*n,p=a*n;for(let g=0;g!==n;++g)e[p+g]=e[d+g]}++a}}if(r>0){t[a]=t[r];for(let c=r*n,l=a*n,f=0;f!==n;++f)e[l+f]=e[c+f];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};$t.prototype.ValueTypeName="";$t.prototype.TimeBufferType=Float32Array;$t.prototype.ValueBufferType=Float32Array;$t.prototype.DefaultInterpolation=Yi;var Fe=class extends $t{constructor(t,e,n){super(t,e,n)}};Fe.prototype.ValueTypeName="bool";Fe.prototype.ValueBufferType=Array;Fe.prototype.DefaultInterpolation=ni;Fe.prototype.InterpolantFactoryMethodLinear=void 0;Fe.prototype.InterpolantFactoryMethodSmooth=void 0;var rr=class extends $t{constructor(t,e,n,i){super(t,e,n,i)}};rr.prototype.ValueTypeName="color";var sr=class extends $t{constructor(t,e,n,i){super(t,e,n,i)}};sr.prototype.ValueTypeName="number";var or=class extends Qe{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,c=this.valueSize,l=(n-e)/(i-e),f=t*c;for(let h=f+c;f!==h;f+=4)we.slerpFlat(r,0,a,f-c,a,f,l);return r}},ai=class extends $t{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new or(this.times,this.values,this.getValueSize(),t)}};ai.prototype.ValueTypeName="quaternion";ai.prototype.InterpolantFactoryMethodSmooth=void 0;var Be=class extends $t{constructor(t,e,n){super(t,e,n)}};Be.prototype.ValueTypeName="string";Be.prototype.ValueBufferType=Array;Be.prototype.DefaultInterpolation=ni;Be.prototype.InterpolantFactoryMethodLinear=void 0;Be.prototype.InterpolantFactoryMethodSmooth=void 0;var ar=class extends $t{constructor(t,e,n,i){super(t,e,n,i)}};ar.prototype.ValueTypeName="vector";var cr=class{constructor(t,e,n){let i=this,r=!1,a=0,c=0,l,f=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){c++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,c),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,c),a===c&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return f.push(h,d),this},this.removeHandler=function(h){let d=f.indexOf(h);return d!==-1&&f.splice(d,2),this},this.getHandler=function(h){for(let d=0,p=f.length;d<p;d+=2){let g=f[d],x=f[d+1];if(g.global&&(g.lastIndex=0),g.test(h))return x}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},ya=new cr,lr=class{constructor(t){this.manager=t!==void 0?t:ya,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};lr.DEFAULT_MATERIAL_NAME="__DEFAULT";var Zs="\\[\\]\\.:\\/",Ml=new RegExp("["+Zs+"]","g"),$s="[^"+Zs+"]",Sl="[^"+Zs.replace("\\.","")+"]",bl=/((?:WC+[\/:])*)/.source.replace("WC",$s),Tl=/(WCOD+)?/.source.replace("WCOD",Sl),wl=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",$s),El=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",$s),Al=new RegExp("^"+bl+Tl+wl+El+"$"),Cl=["material","materials","bones","map"],Os=class{constructor(t,e,n){let i=n||xt.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},xt=class m{constructor(t,e,n){this.path=e,this.parsedPath=n||m.parseTrackName(e),this.node=m.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new m.Composite(t,e,n):new m(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Ml,"")}static parseTrackName(t){let e=Al.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Cl.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let c=r[a];if(c.name===e||c.uuid===e)return c;let l=n(c.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=m.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let f=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===f){f=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(f!==void 0){if(t[f]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[f]}}let a=t[i];if(a===void 0){let f=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+f+"."+i+" but it wasn't found.",t);return}let c=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?c=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};xt.Composite=Os;xt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xt.prototype.GetterByBindingType=[xt.prototype._getValue_direct,xt.prototype._getValue_array,xt.prototype._getValue_arrayElement,xt.prototype._getValue_toArray];xt.prototype.SetterByBindingTypeAndVersioning=[[xt.prototype._setValue_direct,xt.prototype._setValue_direct_setNeedsUpdate,xt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_array,xt.prototype._setValue_array_setNeedsUpdate,xt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_arrayElement,xt.prototype._setValue_arrayElement_setNeedsUpdate,xt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_fromArray,xt.prototype._setValue_fromArray_setNeedsUpdate,xt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var gd=new Float32Array(1);var la=new I,Wi=new I,vn=new I,Mn=new I,Ms=new I,Rl=new I,Il=new I,ut=class{constructor(t=new I,e=new I){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){la.subVectors(t,this.start),Wi.subVectors(this.end,this.start);let n=Wi.dot(Wi),r=Wi.dot(la)/n;return e&&(r=q(r,0,1)),r}closestPointToPoint(t,e,n){let i=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(i).add(this.start)}distanceSqToLine3(t,e=Rl,n=Il){let i=10000000000000001e-32,r,a,c=this.start,l=t.start,f=this.end,h=t.end;vn.subVectors(f,c),Mn.subVectors(h,l),Ms.subVectors(c,l);let d=vn.dot(vn),p=Mn.dot(Mn),g=Mn.dot(Ms);if(d<=i&&p<=i)return e.copy(c),n.copy(l),e.sub(n),e.dot(e);if(d<=i)r=0,a=g/p,a=q(a,0,1);else{let x=vn.dot(Ms);if(p<=i)a=0,r=q(-x/d,0,1);else{let S=vn.dot(Mn),T=d*p-S*S;T!==0?r=q((S*g-x*p)/T,0,1):r=0,a=(S*r+g)/p,a<0?(a=0,r=q(-x/d,0,1)):a>1&&(a=1,r=q((S-x)/d,0,1))}}return e.copy(c).add(vn.multiplyScalar(r)),n.copy(l).add(Mn.multiplyScalar(a)),e.sub(n),e.dot(e)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");var Pl=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Dl=`#ifdef USE_ALPHAHASH
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
#endif`,Ll=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ul=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nl=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Fl=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bl=`#ifdef USE_AOMAP
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
#endif`,Ol=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zl=`#ifdef USE_BATCHING
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
#endif`,Vl=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,kl=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hl=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gl=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Wl=`#ifdef USE_IRIDESCENCE
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
#endif`,Xl=`#ifdef USE_BUMPMAP
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
#endif`,ql=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Yl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$l=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jl=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Kl=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ql=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,jl=`#if defined( USE_COLOR_ALPHA )
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
#endif`,th=`#define PI 3.141592653589793
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
} // validated`,eh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,nh=`vec3 transformedNormal = objectNormal;
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
#endif`,ih=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,oh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ah="gl_FragColor = linearToOutputTexel( gl_FragColor );",ch=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lh=`#ifdef USE_ENVMAP
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
#endif`,hh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,uh=`#ifdef USE_ENVMAP
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
#endif`,fh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dh=`#ifdef USE_ENVMAP
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
#endif`,ph=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_h=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xh=`#ifdef USE_GRADIENTMAP
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
}`,yh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Mh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sh=`uniform bool receiveShadow;
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
#endif`,bh=`#ifdef USE_ENVMAP
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
#endif`,Th=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Eh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ah=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ch=`PhysicalMaterial material;
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
#endif`,Rh=`struct PhysicalMaterial {
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
}`,Ih=`
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
#endif`,Ph=`#if defined( RE_IndirectDiffuse )
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
#endif`,Dh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Lh=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Uh=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nh=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fh=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Bh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Oh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Vh=`#if defined( USE_POINTS_UV )
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
#endif`,kh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Wh=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qh=`#ifdef USE_MORPHTARGETS
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
#endif`,Yh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,$h=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Jh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jh=`#ifdef USE_NORMALMAP
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
#endif`,tu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,eu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ru=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,su=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ou=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,au=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,uu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,du=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,mu=`float getShadowMask() {
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
}`,gu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_u=`#ifdef USE_SKINNING
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
#endif`,xu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yu=`#ifdef USE_SKINNING
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
#endif`,vu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Mu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Su=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bu=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tu=`#ifdef USE_TRANSMISSION
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
#endif`,wu=`#ifdef USE_TRANSMISSION
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
#endif`,Eu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Au=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ru=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Iu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pu=`uniform sampler2D t2D;
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
}`,Du=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lu=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Uu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fu=`#include <common>
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
}`,Bu=`#if DEPTH_PACKING == 3200
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
}`,Ou=`#define DISTANCE
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
}`,zu=`#define DISTANCE
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
}`,Vu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ku=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hu=`uniform float scale;
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
}`,Gu=`uniform vec3 diffuse;
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
}`,Wu=`#include <common>
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
}`,Xu=`uniform vec3 diffuse;
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
}`,qu=`#define LAMBERT
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
}`,Yu=`#define LAMBERT
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
}`,Zu=`#define MATCAP
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
}`,$u=`#define MATCAP
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
}`,Ju=`#define NORMAL
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
}`,Ku=`#define NORMAL
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
}`,Qu=`#define PHONG
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
}`,ju=`#define PHONG
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
}`,tf=`#define STANDARD
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
}`,ef=`#define STANDARD
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
}`,nf=`#define TOON
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
}`,rf=`#define TOON
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
}`,sf=`uniform float size;
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
}`,of=`uniform vec3 diffuse;
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
}`,af=`#include <common>
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
}`,cf=`uniform vec3 color;
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
}`,lf=`uniform float rotation;
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
}`,hf=`uniform vec3 diffuse;
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
}`,K={alphahash_fragment:Pl,alphahash_pars_fragment:Dl,alphamap_fragment:Ll,alphamap_pars_fragment:Ul,alphatest_fragment:Nl,alphatest_pars_fragment:Fl,aomap_fragment:Bl,aomap_pars_fragment:Ol,batching_pars_vertex:zl,batching_vertex:Vl,begin_vertex:kl,beginnormal_vertex:Hl,bsdfs:Gl,iridescence_fragment:Wl,bumpmap_pars_fragment:Xl,clipping_planes_fragment:ql,clipping_planes_pars_fragment:Yl,clipping_planes_pars_vertex:Zl,clipping_planes_vertex:$l,color_fragment:Jl,color_pars_fragment:Kl,color_pars_vertex:Ql,color_vertex:jl,common:th,cube_uv_reflection_fragment:eh,defaultnormal_vertex:nh,displacementmap_pars_vertex:ih,displacementmap_vertex:rh,emissivemap_fragment:sh,emissivemap_pars_fragment:oh,colorspace_fragment:ah,colorspace_pars_fragment:ch,envmap_fragment:lh,envmap_common_pars_fragment:hh,envmap_pars_fragment:uh,envmap_pars_vertex:fh,envmap_physical_pars_fragment:bh,envmap_vertex:dh,fog_vertex:ph,fog_pars_vertex:mh,fog_fragment:gh,fog_pars_fragment:_h,gradientmap_pars_fragment:xh,lightmap_pars_fragment:yh,lights_lambert_fragment:vh,lights_lambert_pars_fragment:Mh,lights_pars_begin:Sh,lights_toon_fragment:Th,lights_toon_pars_fragment:wh,lights_phong_fragment:Eh,lights_phong_pars_fragment:Ah,lights_physical_fragment:Ch,lights_physical_pars_fragment:Rh,lights_fragment_begin:Ih,lights_fragment_maps:Ph,lights_fragment_end:Dh,logdepthbuf_fragment:Lh,logdepthbuf_pars_fragment:Uh,logdepthbuf_pars_vertex:Nh,logdepthbuf_vertex:Fh,map_fragment:Bh,map_pars_fragment:Oh,map_particle_fragment:zh,map_particle_pars_fragment:Vh,metalnessmap_fragment:kh,metalnessmap_pars_fragment:Hh,morphinstance_vertex:Gh,morphcolor_vertex:Wh,morphnormal_vertex:Xh,morphtarget_pars_vertex:qh,morphtarget_vertex:Yh,normal_fragment_begin:Zh,normal_fragment_maps:$h,normal_pars_fragment:Jh,normal_pars_vertex:Kh,normal_vertex:Qh,normalmap_pars_fragment:jh,clearcoat_normal_fragment_begin:tu,clearcoat_normal_fragment_maps:eu,clearcoat_pars_fragment:nu,iridescence_pars_fragment:iu,opaque_fragment:ru,packing:su,premultiplied_alpha_fragment:ou,project_vertex:au,dithering_fragment:cu,dithering_pars_fragment:lu,roughnessmap_fragment:hu,roughnessmap_pars_fragment:uu,shadowmap_pars_fragment:fu,shadowmap_pars_vertex:du,shadowmap_vertex:pu,shadowmask_pars_fragment:mu,skinbase_vertex:gu,skinning_pars_vertex:_u,skinning_vertex:xu,skinnormal_vertex:yu,specularmap_fragment:vu,specularmap_pars_fragment:Mu,tonemapping_fragment:Su,tonemapping_pars_fragment:bu,transmission_fragment:Tu,transmission_pars_fragment:wu,uv_pars_fragment:Eu,uv_pars_vertex:Au,uv_vertex:Cu,worldpos_vertex:Ru,background_vert:Iu,background_frag:Pu,backgroundCube_vert:Du,backgroundCube_frag:Lu,cube_vert:Uu,cube_frag:Nu,depth_vert:Fu,depth_frag:Bu,distanceRGBA_vert:Ou,distanceRGBA_frag:zu,equirect_vert:Vu,equirect_frag:ku,linedashed_vert:Hu,linedashed_frag:Gu,meshbasic_vert:Wu,meshbasic_frag:Xu,meshlambert_vert:qu,meshlambert_frag:Yu,meshmatcap_vert:Zu,meshmatcap_frag:$u,meshnormal_vert:Ju,meshnormal_frag:Ku,meshphong_vert:Qu,meshphong_frag:ju,meshphysical_vert:tf,meshphysical_frag:ef,meshtoon_vert:nf,meshtoon_frag:rf,points_vert:sf,points_frag:of,shadow_vert:af,shadow_frag:cf,sprite_vert:lf,sprite_frag:hf},B={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new X},alphaMap:{value:null},alphaMapTransform:{value:new X},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new X}},envmap:{envMap:{value:null},envMapRotation:{value:new X},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new X}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new X}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new X},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new X},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new X},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new X}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new X}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new X}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new X},alphaTest:{value:0},uvTransform:{value:new X}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new X},alphaMap:{value:null},alphaMapTransform:{value:new X},alphaTest:{value:0}}},va={basic:{uniforms:Vt([B.common,B.specularmap,B.envmap,B.aomap,B.lightmap,B.fog]),vertexShader:K.meshbasic_vert,fragmentShader:K.meshbasic_frag},lambert:{uniforms:Vt([B.common,B.specularmap,B.envmap,B.aomap,B.lightmap,B.emissivemap,B.bumpmap,B.normalmap,B.displacementmap,B.fog,B.lights,{emissive:{value:new Lt(0)}}]),vertexShader:K.meshlambert_vert,fragmentShader:K.meshlambert_frag},phong:{uniforms:Vt([B.common,B.specularmap,B.envmap,B.aomap,B.lightmap,B.emissivemap,B.bumpmap,B.normalmap,B.displacementmap,B.fog,B.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30}}]),vertexShader:K.meshphong_vert,fragmentShader:K.meshphong_frag},standard:{uniforms:Vt([B.common,B.envmap,B.aomap,B.lightmap,B.emissivemap,B.bumpmap,B.normalmap,B.displacementmap,B.roughnessmap,B.metalnessmap,B.fog,B.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:K.meshphysical_vert,fragmentShader:K.meshphysical_frag},toon:{uniforms:Vt([B.common,B.aomap,B.lightmap,B.emissivemap,B.bumpmap,B.normalmap,B.displacementmap,B.gradientmap,B.fog,B.lights,{emissive:{value:new Lt(0)}}]),vertexShader:K.meshtoon_vert,fragmentShader:K.meshtoon_frag},matcap:{uniforms:Vt([B.common,B.bumpmap,B.normalmap,B.displacementmap,B.fog,{matcap:{value:null}}]),vertexShader:K.meshmatcap_vert,fragmentShader:K.meshmatcap_frag},points:{uniforms:Vt([B.points,B.fog]),vertexShader:K.points_vert,fragmentShader:K.points_frag},dashed:{uniforms:Vt([B.common,B.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:K.linedashed_vert,fragmentShader:K.linedashed_frag},depth:{uniforms:Vt([B.common,B.displacementmap]),vertexShader:K.depth_vert,fragmentShader:K.depth_frag},normal:{uniforms:Vt([B.common,B.bumpmap,B.normalmap,B.displacementmap,{opacity:{value:1}}]),vertexShader:K.meshnormal_vert,fragmentShader:K.meshnormal_frag},sprite:{uniforms:Vt([B.sprite,B.fog]),vertexShader:K.sprite_vert,fragmentShader:K.sprite_frag},background:{uniforms:{uvTransform:{value:new X},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:K.background_vert,fragmentShader:K.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new X}},vertexShader:K.backgroundCube_vert,fragmentShader:K.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:K.cube_vert,fragmentShader:K.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:K.equirect_vert,fragmentShader:K.equirect_frag},distanceRGBA:{uniforms:Vt([B.common,B.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:K.distanceRGBA_vert,fragmentShader:K.distanceRGBA_frag},shadow:{uniforms:Vt([B.lights,B.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:K.shadow_vert,fragmentShader:K.shadow_frag}};va.physical={uniforms:Vt([va.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new X},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new X},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new X},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new X},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new X},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new X},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new X},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new X},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new X},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new X},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new X},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new X}}]),vertexShader:K.meshphysical_vert,fragmentShader:K.meshphysical_frag};var je=(1+Math.sqrt(5))/2,wn=1/je,wx=[new I(-je,wn,0),new I(je,wn,0),new I(-wn,0,je),new I(wn,0,je),new I(0,je,-wn),new I(0,je,wn),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];var Ex=new Float32Array(16),Ax=new Float32Array(9),Cx=new Float32Array(4);var Rx={[zs]:Vs,[ks]:Ws,[Hs]:Xs,[ei]:Gs,[Vs]:zs,[Ws]:ks,[Xs]:Hs,[Gs]:ei};var En=Math.pow(2,-24),hi=Symbol("SKIP_GENERATION"),ur={strategy:0,maxDepth:40,targetLeafSize:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null,[hi]:!1};function mt(m,t,e){return e.min.x=t[m],e.min.y=t[m+1],e.min.z=t[m+2],e.max.x=t[m+3],e.max.y=t[m+4],e.max.z=t[m+5],e}function ui(m){let t=-1,e=-1/0;for(let n=0;n<3;n++){let i=m[n+3]-m[n];i>e&&(e=i,t=n)}return t}function Ks(m,t,e){for(let n=0;n<3;n++){let i=t[m+2*n],r=t[m+2*n+1],a=i-r,c=i+r;a<e[n]&&(e[n]=a),c>e[n+3]&&(e[n+3]=c)}}function fr(m){let t=m[3]-m[0],e=m[4]-m[1],n=m[5]-m[2];return 2*(t*e+e*n+n*t)}function j(m,t){return t[m+15]===65535}function ct(m,t){return t[m+6]}function ft(m,t){return t[m+14]}function ot(m){return m+8}function at(m,t){let e=t[m+6];return m+e*8}function An(m,t){return t[m+7]}function dr(m,t,e,n,i){let r=1/0,a=1/0,c=1/0,l=-1/0,f=-1/0,h=-1/0,d=1/0,p=1/0,g=1/0,x=-1/0,S=-1/0,T=-1/0,A=m.offset||0;for(let E=(t-A)*6,u=(t+e-A)*6;E<u;E+=6){let o=m[E+0],_=m[E+1],s=o-_,R=o+_;s<r&&(r=s),R>l&&(l=R),o<d&&(d=o),o>x&&(x=o);let w=m[E+2],v=m[E+3],y=w-v,M=w+v;y<a&&(a=y),M>f&&(f=M),w<p&&(p=w),w>S&&(S=w);let b=m[E+4],C=m[E+5],P=b-C,D=b+C;P<c&&(c=P),D>h&&(h=D),b<g&&(g=b),b>T&&(T=b)}n[0]=r,n[1]=a,n[2]=c,n[3]=l,n[4]=f,n[5]=h,i[0]=d,i[1]=p,i[2]=g,i[3]=x,i[4]=S,i[5]=T}var _e=8,js=8,Qs=new Int32Array(_e),ge=new Float32Array(_e*6),Cn=new Float32Array(_e*6),le=new Float32Array(6),pr=new Float32Array(6),Oe=new Int32Array(js),Sa=new Float32Array(js*6);function pf(m,t,e,n){for(let i=0;i<3;i++){let r=t[m+2*i],a=t[m+2*i+1],c=r-a,l=r+a;c<e[n+i]&&(e[n+i]=c),l>e[n+i+3]&&(e[n+i+3]=l)}}function ba(m,t){let e=m[t+3]-m[t],n=m[t+4]-m[t+1],i=m[t+5]-m[t+2];return 2*(e*n+n*i+i*e)}function Ta(m,t,e,n,i,r){let a=-1,c=0;if(r===0)a=ui(t),a!==-1&&(c=(t[a]+t[a+3])/2);else if(r===1)a=ui(m),a!==-1&&(c=mf(e,n,i,a));else if(r===2){let l=fr(m),f=1.25*i,h=e.offset||0,d=(n-h)*6,p=(n+i-h)*6;for(let g=0;g<3;g++){let x=t[g],A=(t[g+3]-x)/_e;if(i<js){for(let E=0;E<i;E++){let u=d+E*6,o=e[u+2*g],_=E;for(;_>0&&e[Oe[_-1]+2*g]>o;)Oe[_]=Oe[_-1],_--;Oe[_]=u}for(let E=0;E<3;E++)le[E]=1/0,le[E+3]=-1/0,pr[E]=1/0,pr[E+3]=-1/0;for(let E=i-1;E>=0;E--)Ks(Oe[E],e,pr),Sa.set(pr,E*6);for(let E=0;E<i-1;E++){Ks(Oe[E],e,le);let u=e[Oe[E+1]+2*g];if(e[Oe[E]+2*g]===u)continue;let o=E+1,_=i-o,s=fr(le)/l,R=ba(Sa,o*6)/l,w=1+1.25*(s*o+R*_);w<f&&(a=g,f=w,c=u)}}else{for(let o=0;o<_e;o++){Qs[o]=0;for(let _=0;_<3;_++)ge[o*6+_]=1/0,ge[o*6+_+3]=-1/0}for(let o=d;o<p;o+=6){let R=~~((e[o+2*g]-x)/A);R>=_e&&(R=_e-1),Qs[R]++,pf(o,e,ge,R*6)}let E=(_e-1)*6;for(let o=0;o<6;o++)Cn[E+o]=ge[E+o];for(let o=_e-2;o>=0;o--){let _=o*6,s=_+6;for(let R=0;R<3;R++)Cn[_+R]=Math.min(ge[_+R],Cn[s+R]),Cn[_+R+3]=Math.max(ge[_+R+3],Cn[s+R+3])}let u=0;for(let o=0;o<_e-1;o++){let _=o*6,s=Qs[o];if(s!==0)for(let M=0;M<3;M++)u===0?(le[M]=ge[_+M],le[M+3]=ge[_+M+3]):(le[M]=Math.min(le[M],ge[_+M]),le[M+3]=Math.max(le[M+3],ge[_+M+3]));u+=s;let R=0,w=0;u!==0&&(R=fr(le)/l);let v=i-u;v!==0&&(w=ba(Cn,_+6)/l);let y=1+1.25*(R*u+w*v);y<f&&(a=g,f=y,c=x+A+o*A)}}}}else console.warn(`BVH: Invalid build strategy value ${r} used.`);return{axis:a,pos:c}}function mf(m,t,e,n){let i=0,r=m.offset;for(let a=t,c=t+e;a<c;a++)i+=m[(a-r)*6+n*2];return i/e}function wa(m,t,e,n,i,r){let a=n,c=n+i-1,l=r.pos,f=r.axis*2,h=e.offset||0;for(;;){for(;a<=c&&e[(a-h)*6+f]<l;)a++;for(;a<=c&&e[(c-h)*6+f]>=l;)c--;if(a<c){for(let d=0;d<t;d++){let p=m[a*t+d];m[a*t+d]=m[c*t+d],m[c*t+d]=p}for(let d=0;d<6;d++){let p=a-h,g=c-h,x=e[p*6+d];e[p*6+d]=e[g*6+d],e[g*6+d]=x}a++,c--}else return a}}var gf=Math.pow(2,32),Rn=new Float32Array(6),mr=new Float32Array(6);function _f(m,t,e,n,i,r){let{maxDepth:a,verbose:c,targetLeafSize:l,_strictLeafSize:f=1/0,strategy:h,onProgress:d,useSharedArrayBuffer:p=!1}=i,g=m.primitiveBuffer,x=m.primitiveBufferStride,S=p?SharedArrayBuffer:ArrayBuffer,T=new S(32*Math.max(1,2*Math.ceil(n)-1)),A=new Float32Array(T),E=new Uint32Array(T),u=new Uint16Array(T),o=0,_=!1;return dr(t,e,n,Rn,mr),w(e,n,0),T.slice(0,o*32);function s(v){d&&d((v-r.offset)/r.count)}function R(v,y,M){let b=v*2;E[v+6]=y,u[b+14]=M,u[b+15]=65535,s(y+M)}function w(v,y,M){let b=o++,C=b*8;A.set(Rn,C),!_&&M>=a&&(_=!0,c&&console.warn(`BVH: Max depth of ${a} reached when generating BVH. Consider increasing maxDepth.`));let P=y>f;if(y<=l&&!P||M>=a){R(C,v,y);return}let D=Ta(Rn,mr,t,v,y,h),L=D.axis===-1?-1:wa(g,x,t,v,y,D);if(D.axis===-1||L===v||L===v+y){if(!P){R(C,v,y);return}D.axis=Math.max(0,ui(Rn)),L=v+Math.max(1,Math.floor(y/2))}E[C+7]=D.axis;let U=L-v;dr(t,v,U,Rn,mr),w(v,U,M+1);let F=o-b;if(F>gf)throw new Error("MeshBVH: Cannot store relative child node offset greater than 32 bits.");E[C+6]=F;let N=y-U;dr(t,L,N,Rn,mr),w(L,N,M+1)}}function Ea(m,t){let e=m.getRootRanges(t.range),n=e[0],i=e[e.length-1],r={offset:n.offset,count:i.offset+i.count-n.offset},a=new Float32Array(6*r.count);a.offset=r.offset,m.computePrimitiveBounds(r.offset,r.count,a),m._roots=e.map(c=>_f(m,a,c.offset,c.count,t,r))}var ze=class{constructor(t){this._getNewPrimitive=t,this._primitives=[]}getPrimitive(){let t=this._primitives;return t.length===0?this._getNewPrimitive():t.pop()}releasePrimitive(t){this._primitives.push(t)}};var to=class{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;let t=[],e=null;this.setBuffer=n=>{e&&t.push(e),e=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{e=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,t.length!==0&&this.setBuffer(t.pop())}}},$=new to;var Ve,Pn,In=[],gr=new ze(()=>new At);function Aa(m,t,e,n,i,r){Ve=gr.getPrimitive(),Pn=gr.getPrimitive(),In.push(Ve,Pn),$.setBuffer(m._roots[t]);let a=eo(0,m.geometry,e,n,i,r);$.clearBuffer(),gr.releasePrimitive(Ve),gr.releasePrimitive(Pn),In.pop(),In.pop();let c=In.length;return c>0&&(Pn=In[c-1],Ve=In[c-2]),a}function eo(m,t,e,n,i=null,r=0,a=0){let{float32Array:c,uint16Array:l,uint32Array:f}=$,h=m*2;if(j(h,l)){let p=ct(m,f),g=ft(h,l);return mt(m,c,Ve),n(p,g,!1,a,r+m/8,Ve)}else{let y=function(b){let{uint16Array:C,uint32Array:P}=$,D=b*2;for(;!j(D,C);)b=ot(b),D=b*2;return ct(b,P)},M=function(b){let{uint16Array:C,uint32Array:P}=$,D=b*2;for(;!j(D,C);)b=at(b,P),D=b*2;return ct(b,P)+ft(D,C)},p=ot(m),g=at(m,f),x=p,S=g,T,A,E,u;if(i&&(E=Ve,u=Pn,mt(x,c,E),mt(S,c,u),T=i(E),A=i(u),A<T)){x=g,S=p;let b=T;T=A,A=b,E=u}E||(E=Ve,mt(x,c,E));let o=j(x*2,l),_=e(E,o,T,a+1,r+x/8),s;if(_===2){let b=y(x),P=M(x)-b;s=n(b,P,!0,a+1,r+x/8,E)}else s=_&&eo(x,t,e,n,i,r,a+1);if(s)return!0;u=Pn,mt(S,c,u);let R=j(S*2,l),w=e(u,R,A,a+1,r+S/8),v;if(w===2){let b=y(S),P=M(S)-b;v=n(b,P,!0,a+1,r+S/8,u)}else v=w&&eo(S,t,e,n,i,r,a+1);return!!v}}var fi=new $.constructor,_r=new $.constructor,ke=new ze(()=>new At),Dn=new At,Ln=new At,io=new At,ro=new At,so=!1;function Ca(m,t,e,n){if(so)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");so=!0;let i=m._roots,r=t._roots,a,c=0,l=0,f=new Q().copy(e).invert();for(let h=0,d=i.length;h<d;h++){fi.setBuffer(i[h]),l=0;let p=ke.getPrimitive();mt(0,fi.float32Array,p),p.applyMatrix4(f);for(let g=0,x=r.length;g<x&&(_r.setBuffer(r[g]),a=he(0,0,e,f,n,c,l,0,0,p),_r.clearBuffer(),l+=r[g].byteLength/32,!a);g++);if(ke.releasePrimitive(p),fi.clearBuffer(),c+=i[h].byteLength/32,a)break}return so=!1,a}function he(m,t,e,n,i,r=0,a=0,c=0,l=0,f=null,h=!1){let d,p;h?(d=_r,p=fi):(d=fi,p=_r);let g=d.float32Array,x=d.uint32Array,S=d.uint16Array,T=p.float32Array,A=p.uint32Array,E=p.uint16Array,u=m*2,o=t*2,_=j(u,S),s=j(o,E),R=!1;if(s&&_)h?R=i(ct(t,A),ft(t*2,E),ct(m,x),ft(m*2,S),l,a+t/8,c,r+m/8):R=i(ct(m,x),ft(m*2,S),ct(t,A),ft(t*2,E),c,r+m/8,l,a+t/8);else if(s){let w=ke.getPrimitive();mt(t,T,w),w.applyMatrix4(e);let v=ot(m),y=at(m,x);mt(v,g,Dn),mt(y,g,Ln);let M=w.intersectsBox(Dn),b=w.intersectsBox(Ln);R=M&&he(t,v,n,e,i,a,r,l,c+1,w,!h)||b&&he(t,y,n,e,i,a,r,l,c+1,w,!h),ke.releasePrimitive(w)}else{let w=ot(t),v=at(t,A);mt(w,T,io),mt(v,T,ro);let y=f.intersectsBox(io),M=f.intersectsBox(ro);if(y&&M)R=he(m,w,e,n,i,r,a,c,l+1,f,h)||he(m,v,e,n,i,r,a,c,l+1,f,h);else if(y)if(_)R=he(m,w,e,n,i,r,a,c,l+1,f,h);else{let b=ke.getPrimitive();b.copy(io).applyMatrix4(e);let C=ot(m),P=at(m,x);mt(C,g,Dn),mt(P,g,Ln);let D=b.intersectsBox(Dn),L=b.intersectsBox(Ln);R=D&&he(w,C,n,e,i,a,r,l,c+1,b,!h)||L&&he(w,P,n,e,i,a,r,l,c+1,b,!h),ke.releasePrimitive(b)}else if(M)if(_)R=he(m,v,e,n,i,r,a,c,l+1,f,h);else{let b=ke.getPrimitive();b.copy(ro).applyMatrix4(e);let C=ot(m),P=at(m,x);mt(C,g,Dn),mt(P,g,Ln);let D=b.intersectsBox(Dn),L=b.intersectsBox(Ln);R=D&&he(v,C,n,e,i,a,r,l,c+1,b,!h)||L&&he(v,P,n,e,i,a,r,l,c+1,b,!h),ke.releasePrimitive(b)}}return R}var xr=new class{constructor(){let m=null,t=null,e=null,n=!1;this.root=null,this.buffer=null,this.uint32Array=null,this.uint16Array=null,this.setBVH=(r,a)=>{if(n)throw new Error("BVHTraversalHelper: cannot call setBVH during an active traversal.");this.root=a,this.buffer=m=r._roots[a],this.uint16Array=e=new Uint16Array(m),this.uint32Array=t=new Uint32Array(m)},this.reset=()=>{this.root=null,this.buffer=m=null,this.uint16Array=e=null,this.uint32Array=t=null},this.getRangeStart=r=>{let a=r*2;for(;!j(a,e);)r=ot(r),a=r*2;return ct(r,t)},this.getRangeEnd=r=>{let a=r*2;for(;!j(a,e);)r=at(r,t),a=r*2;return ct(r,t)+ft(a,e)};let i=(r,a,c)=>{let l=a*2,f=j(l,e);if(!r(c,f,a)&&!f){let d=ot(a),p=at(a,t);i(r,d,c+1),i(r,p,c+1)}};this.traverseBuffer=r=>{if(n)throw new Error("BVHTraversalHelper: cannot start a traversal during an active traversal.");n=!0;try{i(r,0,0)}finally{n=!1}},this.traverse=r=>{this.traverseBuffer((a,c,l)=>{if(c){let f=l*2,h=t[l+6],d=e[f+14];return r(a,c,new Float32Array(m,l*4,6),h,d)}else{let f=An(l,t);return r(a,c,new Float32Array(m,l*4,6),f)}})}}};var Ra=new At,Un=new Float32Array(6),yr=class{constructor(){this._roots=null,this.primitiveBuffer=null,this.primitiveBufferStride=null}init(t){t={...ur,...t},"maxLeafSize"in t&&(console.warn('BVH: "maxLeafSize" option has been deprecated. Use "targetLeafSize", instead.'),t={...t,targetLeafSize:t.maxLeafSize}),Ea(this,t)}getRootRanges(){throw new Error("BVH: getRootRanges() not implemented")}writePrimitiveBounds(){throw new Error("BVH: writePrimitiveBounds() not implemented")}writePrimitiveRangeBounds(t,e,n,i){let r=1/0,a=1/0,c=1/0,l=-1/0,f=-1/0,h=-1/0;for(let d=t,p=t+e;d<p;d++){this.writePrimitiveBounds(d,Un,0);let[g,x,S,T,A,E]=Un;g<r&&(r=g),T>l&&(l=T),x<a&&(a=x),A>f&&(f=A),S<c&&(c=S),E>h&&(h=E)}return n[i+0]=r,n[i+1]=a,n[i+2]=c,n[i+3]=l,n[i+4]=f,n[i+5]=h,n}computePrimitiveBounds(t,e,n){let i=n.offset||0;for(let r=t,a=t+e;r<a;r++){this.writePrimitiveBounds(r,Un,0);let[c,l,f,h,d,p]=Un,g=(c+h)/2,x=(l+d)/2,S=(f+p)/2,T=(h-c)/2,A=(d-l)/2,E=(p-f)/2,u=(r-i)*6;n[u+0]=g,n[u+1]=T+(Math.abs(g)+T)*En,n[u+2]=x,n[u+3]=A+(Math.abs(x)+A)*En,n[u+4]=S,n[u+5]=E+(Math.abs(S)+E)*En}return n}shiftPrimitiveOffsets(t){let e=this._indirectBuffer;if(e)for(let n=0,i=e.length;n<i;n++)e[n]+=t;else{let n=this._roots;for(let i=0;i<n.length;i++){let r=n[i],a=new Uint32Array(r),c=new Uint16Array(r),l=r.byteLength/32;for(let f=0;f<l;f++){let h=8*f,d=2*h;j(d,c)&&(a[h+6]+=t)}}}}traverse(t,e=0){xr.setBVH(this,e),xr.traverse(t),xr.reset()}refit(){let t=this._roots;for(let e=0,n=t.length;e<n;e++){let i=t[e],r=new Uint32Array(i),a=new Uint16Array(i),c=new Float32Array(i),l=i.byteLength/32;for(let f=l-1;f>=0;f--){let h=f*8,d=h*2;if(j(d,a)){let g=ct(h,r),x=ft(d,a);this.writePrimitiveRangeBounds(g,x,Un,0),c.set(Un,h)}else{let g=ot(h),x=at(h,r);for(let S=0;S<3;S++){let T=c[g+S],A=c[g+S+3],E=c[x+S],u=c[x+S+3];c[h+S]=T<E?T:E,c[h+S+3]=A>u?A:u}}}}}getBoundingBox(t){return t.makeEmpty(),this._roots.forEach(n=>{mt(0,new Float32Array(n),Ra),t.union(Ra)}),t}shapecast(t){let{boundsTraverseOrder:e,intersectsBounds:n,intersectsRange:i,intersectsPrimitive:r,scratchPrimitive:a,iterate:c}=t;if(i&&r){let d=i;i=(p,g,x,S,T)=>d(p,g,x,S,T)?!0:c(p,g,this,r,x,S,a)}else i||(r?i=(d,p,g,x)=>c(d,p,this,r,g,x,a):i=(d,p,g)=>g);let l=!1,f=0,h=this._roots;for(let d=0,p=h.length;d<p;d++){let g=h[d];if(l=Aa(this,d,n,i,e,f),l)break;f+=g.byteLength/32}return l}bvhcast(t,e,n){let{intersectsRanges:i}=n;return Ca(this,t,e,i)}};function Ia(){return typeof SharedArrayBuffer<"u"}function oo(m){return m.index?m.index.count:m.attributes.position.count}function He(m){return oo(m)/3}function yf(m,t=ArrayBuffer){return m>65535?new Uint32Array(new t(4*m)):new Uint16Array(new t(2*m))}function Pa(m,t){if(!m.index){let e=m.attributes.position.count,n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,i=yf(e,n);m.setIndex(new Ot(i,1));for(let r=0;r<e;r++)i[r]=r}}function vf(m,t,e){let n=oo(m)/e,i=t||m.drawRange,r=i.start/e,a=(i.start+i.count)/e,c=Math.max(0,r),l=Math.min(n,a)-c;return{offset:Math.floor(c),count:Math.floor(l)}}function Mf(m,t){return m.groups.map(e=>({offset:e.start/t,count:e.count/t}))}function ao(m,t,e){let n=vf(m,t,e),i=Mf(m,e);if(!i.length)return[n];let r=[],a=n.offset,c=n.offset+n.count,l=oo(m)/e,f=[];for(let p of i){let{offset:g,count:x}=p,S=g,T=isFinite(x)?x:l-g,A=g+T;S<c&&A>a&&(f.push({pos:Math.max(a,S),isStart:!0}),f.push({pos:Math.min(c,A),isStart:!1}))}f.sort((p,g)=>p.pos!==g.pos?p.pos-g.pos:p.type==="end"?-1:1);let h=0,d=null;for(let p of f){let g=p.pos;h!==0&&g!==d&&r.push({offset:d,count:g-d}),h+=p.isStart?1:-1,d=g}return r}function Sf(m,t){let e=m[m.length-1],n=e.offset+e.count>2**16,i=m.reduce((f,h)=>f+h.count,0),r=n?4:2,a=t?new SharedArrayBuffer(i*r):new ArrayBuffer(i*r),c=n?new Uint32Array(a):new Uint16Array(a),l=0;for(let f=0;f<m.length;f++){let{offset:h,count:d}=m[f];for(let p=0;p<d;p++)c[l+p]=h+p;l+=d}return c}var vr=class extends yr{get indirect(){return!!this._indirectBuffer}get primitiveStride(){return null}get primitiveBufferStride(){return this.indirect?1:this.primitiveStride}set primitiveBufferStride(t){}get primitiveBuffer(){return this.indirect?this._indirectBuffer:this.geometry.index.array}set primitiveBuffer(t){}constructor(t,e={}){if(t.isBufferGeometry){if(t.index&&t.index.isInterleavedBufferAttribute)throw new Error("BVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("BVH: Only BufferGeometries are supported.");if(e.useSharedArrayBuffer&&!Ia())throw new Error("BVH: SharedArrayBuffer is not available.");super(),this.geometry=t,this.resolvePrimitiveIndex=e.indirect?n=>this._indirectBuffer[n]:n=>n,this.primitiveBuffer=null,this.primitiveBufferStride=null,this._indirectBuffer=null,e={...ur,...e},e[hi]||this.init(e)}init(t){let{geometry:e,primitiveStride:n}=this;if(t.indirect){let i=ao(e,t.range,n),r=Sf(i,t.useSharedArrayBuffer);this._indirectBuffer=r}else Pa(e,t);super.init(t),!e.boundingBox&&t.setBoundingBox&&(e.boundingBox=this.getBoundingBox(new At))}getRootRanges(t){return this.indirect?[{offset:0,count:this._indirectBuffer.length}]:ao(this.geometry,t,this.primitiveStride)}raycastObject3D(){throw new Error("BVH: raycastObject3D() not implemented")}};var Kt=class{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(t,e){let n=1/0,i=-1/0;for(let r=0,a=t.length;r<a;r++){let l=t[r][e];n=l<n?l:n,i=l>i?l:i}this.min=n,this.max=i}setFromPoints(t,e){let n=1/0,i=-1/0;for(let r=0,a=e.length;r<a;r++){let c=e[r],l=t.dot(c);n=l<n?l:n,i=l>i?l:i}this.min=n,this.max=i}isSeparated(t){return this.min>t.max||t.min>this.max}};Kt.prototype.setFromBox=(function(){let m=new I;return function(e,n){let i=n.min,r=n.max,a=1/0,c=-1/0;for(let l=0;l<=1;l++)for(let f=0;f<=1;f++)for(let h=0;h<=1;h++){m.x=i.x*l+r.x*(1-l),m.y=i.y*f+r.y*(1-f),m.z=i.z*h+r.z*(1-h);let d=e.dot(m);a=Math.min(d,a),c=Math.max(d,c)}this.min=a,this.max=c}})();var bf=(function(){let m=new I,t=new I,e=new I;return function(i,r,a){let c=i.start,l=m,f=r.start,h=t;e.subVectors(c,f),m.subVectors(i.end,i.start),t.subVectors(r.end,r.start);let d=e.dot(h),p=h.dot(l),g=h.dot(h),x=e.dot(l),T=l.dot(l)*g-p*p,A,E;T!==0?A=(d*p-x*g)/T:A=0,E=(d+A*p)/g,a.x=A,a.y=E}})(),di=(function(){let m=new st,t=new I,e=new I;return function(i,r,a,c){bf(i,r,m);let l=m.x,f=m.y;if(l>=0&&l<=1&&f>=0&&f<=1){i.at(l,a),r.at(f,c);return}else if(l>=0&&l<=1){f<0?r.at(0,c):r.at(1,c),i.closestPointToPoint(c,!0,a);return}else if(f>=0&&f<=1){l<0?i.at(0,a):i.at(1,a),r.closestPointToPoint(a,!0,c);return}else{let h;l<0?h=i.start:h=i.end;let d;f<0?d=r.start:d=r.end;let p=t,g=e;if(i.closestPointToPoint(d,!0,t),r.closestPointToPoint(h,!0,e),p.distanceToSquared(d)<=g.distanceToSquared(h)){a.copy(p),c.copy(d);return}else{a.copy(h),c.copy(g);return}}}})(),Da=(function(){let m=new I,t=new I,e=new ce,n=new ut;return function(r,a){let{radius:c,center:l}=r,{a:f,b:h,c:d}=a;if(n.start=f,n.end=h,n.closestPointToPoint(l,!0,m).distanceTo(l)<=c||(n.start=f,n.end=d,n.closestPointToPoint(l,!0,m).distanceTo(l)<=c)||(n.start=h,n.end=d,n.closestPointToPoint(l,!0,m).distanceTo(l)<=c))return!0;let S=a.getPlane(e);if(Math.abs(S.distanceToPoint(l))<=c){let A=S.projectPoint(l,t);if(a.containsPoint(A))return!0}return!1}})();var Tf=["x","y","z"],Ee=1e-15,La=Ee*Ee;function re(m){return Math.abs(m)<Ee}var Ct=class extends pt{constructor(...t){super(...t),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new I),this.satBounds=new Array(4).fill().map(()=>new Kt),this.points=[this.a,this.b,this.c],this.plane=new ce,this.isDegenerateIntoSegment=!1,this.isDegenerateIntoPoint=!1,this.degenerateSegment=new ut,this.needsUpdate=!0}intersectsSphere(t){return Da(t,this)}update(){let t=this.a,e=this.b,n=this.c,i=this.points,r=this.satAxes,a=this.satBounds,c=r[0],l=a[0];this.getNormal(c),l.setFromPoints(c,i);let f=r[1],h=a[1];f.subVectors(t,e),h.setFromPoints(f,i);let d=r[2],p=a[2];d.subVectors(e,n),p.setFromPoints(d,i);let g=r[3],x=a[3];g.subVectors(n,t),x.setFromPoints(g,i);let S=f.length(),T=d.length(),A=g.length();this.isDegenerateIntoPoint=!1,this.isDegenerateIntoSegment=!1,S<Ee?T<Ee||A<Ee?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(t),this.degenerateSegment.end.copy(n)):T<Ee?A<Ee?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(e),this.degenerateSegment.end.copy(t)):A<Ee&&(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(n),this.degenerateSegment.end.copy(e)),this.plane.setFromNormalAndCoplanarPoint(c,t),this.needsUpdate=!1}};Ct.prototype.closestPointToSegment=(function(){let m=new I,t=new I,e=new ut;return function(i,r=null,a=null){this.needsUpdate&&this.update();let{start:c,end:l}=i,f=this.points,h,d=1/0,p=this.plane.distanceToPoint(c),g=this.plane.distanceToPoint(l);if(p*g<0&&this.plane.intersectLine(i,m)!==null&&this.containsPoint(m))return r&&r.copy(m),a&&a.copy(m),0;for(let x=0;x<3;x++){let S=(x+1)%3;e.start.copy(f[x]),e.end.copy(f[S]),di(e,i,m,t),h=m.distanceToSquared(t),h<d&&(d=h,r&&r.copy(m),a&&a.copy(t))}return this.closestPointToPoint(c,m),h=c.distanceToSquared(m),h<d&&(d=h,r&&r.copy(m),a&&a.copy(c)),this.closestPointToPoint(l,m),h=l.distanceToSquared(m),h<d&&(d=h,r&&r.copy(m),a&&a.copy(l)),Math.sqrt(d)}})();Ct.prototype.intersectsTriangle=(function(){let m=new Ct,t=new Kt,e=new Kt,n=new I,i=new I,r=new I,a=new I,c=new ut,l=new ut,f=new I,h=new st,d=new st;function p(u,o,_,s){let R=n;!u.isDegenerateIntoPoint&&!u.isDegenerateIntoSegment?R.copy(u.plane.normal):R.copy(o.plane.normal);let w=u.satBounds,v=u.satAxes;for(let b=1;b<4;b++){let C=w[b],P=v[b];if(t.setFromPoints(P,o.points),C.isSeparated(t)||(a.copy(R).cross(P),t.setFromPoints(a,u.points),e.setFromPoints(a,o.points),t.isSeparated(e)))return!1}let y=o.satBounds,M=o.satAxes;for(let b=1;b<4;b++){let C=y[b],P=M[b];if(t.setFromPoints(P,u.points),C.isSeparated(t)||(a.crossVectors(R,P),t.setFromPoints(a,u.points),e.setFromPoints(a,o.points),t.isSeparated(e)))return!1}return _&&(s||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),_.start.set(0,0,0),_.end.set(0,0,0)),!0}function g(u,o,_,s,R,w,v,y,M,b,C){let P=v/(v-y);b.x=s+(R-s)*P,C.start.subVectors(o,u).multiplyScalar(P).add(u),P=v/(v-M),b.y=s+(w-s)*P,C.end.subVectors(_,u).multiplyScalar(P).add(u)}function x(u,o,_,s,R,w,v,y,M,b,C){if(R>0)g(u.c,u.a,u.b,s,o,_,M,v,y,b,C);else if(w>0)g(u.b,u.a,u.c,_,o,s,y,v,M,b,C);else if(y*M>0||v!=0)g(u.a,u.b,u.c,o,_,s,v,y,M,b,C);else if(y!=0)g(u.b,u.a,u.c,_,o,s,y,v,M,b,C);else if(M!=0)g(u.c,u.a,u.b,s,o,_,M,v,y,b,C);else return!0;return!1}function S(u,o,_,s){let R=o.degenerateSegment,w=u.plane.distanceToPoint(R.start),v=u.plane.distanceToPoint(R.end);return re(w)?re(v)?p(u,o,_,s):(_&&(_.start.copy(R.start),_.end.copy(R.start)),u.containsPoint(R.start)):re(v)?(_&&(_.start.copy(R.end),_.end.copy(R.end)),u.containsPoint(R.end)):u.plane.intersectLine(R,n)!=null?(_&&(_.start.copy(n),_.end.copy(n)),u.containsPoint(n)):!1}function T(u,o,_){let s=o.a;return re(u.plane.distanceToPoint(s))&&u.containsPoint(s)?(_&&(_.start.copy(s),_.end.copy(s)),!0):!1}function A(u,o,_){let s=u.degenerateSegment,R=o.a;return s.closestPointToPoint(R,!0,n),R.distanceToSquared(n)<La?(_&&(_.start.copy(R),_.end.copy(R)),!0):!1}function E(u,o,_,s){if(u.isDegenerateIntoSegment)if(o.isDegenerateIntoSegment){let R=u.degenerateSegment,w=o.degenerateSegment,v=i,y=r;R.delta(v),w.delta(y);let M=n.subVectors(w.start,R.start),b=v.x*y.y-v.y*y.x;if(re(b))return!1;let C=(M.x*y.y-M.y*y.x)/b,P=-(v.x*M.y-v.y*M.x)/b;if(C<0||C>1||P<0||P>1)return!1;let D=R.start.z+v.z*C,L=w.start.z+y.z*P;return re(D-L)?(_&&(_.start.copy(R.start).addScaledVector(v,C),_.end.copy(R.start).addScaledVector(v,C)),!0):!1}else return o.isDegenerateIntoPoint?A(u,o,_):S(o,u,_,s);else{if(u.isDegenerateIntoPoint)return o.isDegenerateIntoPoint?o.a.distanceToSquared(u.a)<La?(_&&(_.start.copy(u.a),_.end.copy(u.a)),!0):!1:o.isDegenerateIntoSegment?A(o,u,_):T(o,u,_);if(o.isDegenerateIntoPoint)return T(u,o,_);if(o.isDegenerateIntoSegment)return S(u,o,_,s)}}return function(o,_=null,s=!1){this.needsUpdate&&this.update(),o.isExtendedTriangle?o.needsUpdate&&o.update():(m.copy(o),m.update(),o=m);let R=E(this,o,_,s);if(R!==void 0)return R;let w=this.plane,v=o.plane,y=v.distanceToPoint(this.a),M=v.distanceToPoint(this.b),b=v.distanceToPoint(this.c);re(y)&&(y=0),re(M)&&(M=0),re(b)&&(b=0);let C=y*M,P=y*b;if(C>0&&P>0)return!1;let D=w.distanceToPoint(o.a),L=w.distanceToPoint(o.b),U=w.distanceToPoint(o.c);re(D)&&(D=0),re(L)&&(L=0),re(U)&&(U=0);let F=D*L,N=D*U;if(F>0&&N>0)return!1;i.copy(w.normal),r.copy(v.normal);let k=i.cross(r),O=0,z=Math.abs(k.x),V=Math.abs(k.y);V>z&&(z=V,O=1),Math.abs(k.z)>z&&(O=2);let G=Tf[O],lt=this.a[G],Y=this.b[G],Z=this.c[G],W=o.a[G],J=o.b[G],tt=o.c[G];if(x(this,lt,Y,Z,C,P,y,M,b,h,c))return p(this,o,_,s);if(x(o,W,J,tt,F,N,D,L,U,d,l))return p(this,o,_,s);if(h.y<h.x){let Nt=h.y;h.y=h.x,h.x=Nt,f.copy(c.start),c.start.copy(c.end),c.end.copy(f)}if(d.y<d.x){let Nt=d.y;d.y=d.x,d.x=Nt,f.copy(l.start),l.start.copy(l.end),l.end.copy(f)}return h.y<d.x||d.y<h.x?!1:(_&&(d.x>h.x?_.start.copy(l.start):_.start.copy(c.start),d.y<h.y?_.end.copy(l.end):_.end.copy(c.end)),!0)}})();Ct.prototype.distanceToPoint=(function(){let m=new I;return function(e){return this.closestPointToPoint(e,m),e.distanceTo(m)}})();Ct.prototype.distanceToTriangle=(function(){let m=new I,t=new I,e=["a","b","c"],n=new ut,i=new ut;return function(a,c=null,l=null){let f=c||l?n:null;if(this.intersectsTriangle(a,f,!0))return(c||l)&&(c&&f.getCenter(c),l&&f.getCenter(l)),0;let h=1/0;for(let d=0;d<3;d++){let p,g=e[d],x=a[g];this.closestPointToPoint(x,m),p=x.distanceToSquared(m),p<h&&(h=p,c&&c.copy(m),l&&l.copy(x));let S=this[g];a.closestPointToPoint(S,m),p=S.distanceToSquared(m),p<h&&(h=p,c&&c.copy(S),l&&l.copy(m))}for(let d=0;d<3;d++){let p=e[d],g=e[(d+1)%3];n.set(this[p],this[g]);for(let x=0;x<3;x++){let S=e[x],T=e[(x+1)%3];i.set(a[S],a[T]),di(n,i,m,t);let A=m.distanceToSquared(t);A<h&&(h=A,c&&c.copy(m),l&&l.copy(t))}}return Math.sqrt(h)}})();var Rt=class{constructor(t,e,n){this.isOrientedBox=!0,this.min=new I,this.max=new I,this.matrix=new Q,this.invMatrix=new Q,this.points=new Array(8).fill().map(()=>new I),this.satAxes=new Array(3).fill().map(()=>new I),this.satBounds=new Array(3).fill().map(()=>new Kt),this.alignedSatBounds=new Array(3).fill().map(()=>new Kt),this.needsUpdate=!1,t&&this.min.copy(t),e&&this.max.copy(e),n&&this.matrix.copy(n)}set(t,e,n){this.min.copy(t),this.max.copy(e),this.matrix.copy(n),this.needsUpdate=!0}copy(t){this.min.copy(t.min),this.max.copy(t.max),this.matrix.copy(t.matrix),this.needsUpdate=!0}};Rt.prototype.update=(function(){return function(){let t=this.matrix,e=this.min,n=this.max,i=this.points;for(let f=0;f<=1;f++)for(let h=0;h<=1;h++)for(let d=0;d<=1;d++){let p=1*f|2*h|4*d,g=i[p];g.x=f?n.x:e.x,g.y=h?n.y:e.y,g.z=d?n.z:e.z,g.applyMatrix4(t)}let r=this.satBounds,a=this.satAxes,c=i[0];for(let f=0;f<3;f++){let h=a[f],d=r[f],p=1<<f,g=i[p];h.subVectors(c,g),d.setFromPoints(h,i)}let l=this.alignedSatBounds;l[0].setFromPointsField(i,"x"),l[1].setFromPointsField(i,"y"),l[2].setFromPointsField(i,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}})();Rt.prototype.intersectsBox=(function(){let m=new Kt;return function(e){this.needsUpdate&&this.update();let n=e.min,i=e.max,r=this.satBounds,a=this.satAxes,c=this.alignedSatBounds;if(m.min=n.x,m.max=i.x,c[0].isSeparated(m)||(m.min=n.y,m.max=i.y,c[1].isSeparated(m))||(m.min=n.z,m.max=i.z,c[2].isSeparated(m)))return!1;for(let l=0;l<3;l++){let f=a[l],h=r[l];if(m.setFromBox(f,e),h.isSeparated(m))return!1}return!0}})();Rt.prototype.intersectsTriangle=(function(){let m=new Ct,t=new Array(3),e=new Kt,n=new Kt,i=new I;return function(a){this.needsUpdate&&this.update(),a.isExtendedTriangle?a.needsUpdate&&a.update():(m.copy(a),m.update(),a=m);let c=this.satBounds,l=this.satAxes;t[0]=a.a,t[1]=a.b,t[2]=a.c;for(let p=0;p<3;p++){let g=c[p],x=l[p];if(e.setFromPoints(x,t),g.isSeparated(e))return!1}let f=a.satBounds,h=a.satAxes,d=this.points;for(let p=0;p<3;p++){let g=f[p],x=h[p];if(e.setFromPoints(x,d),g.isSeparated(e))return!1}for(let p=0;p<3;p++){let g=l[p];for(let x=0;x<4;x++){let S=h[x];if(i.crossVectors(g,S),e.setFromPoints(i,t),n.setFromPoints(i,d),e.isSeparated(n))return!1}}return!0}})();Rt.prototype.closestPointToPoint=(function(){return function(t,e){return this.needsUpdate&&this.update(),e.copy(t).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),e}})();Rt.prototype.distanceToPoint=(function(){let m=new I;return function(e){return this.closestPointToPoint(e,m),e.distanceTo(m)}})();Rt.prototype.distanceToBox=(function(){let m=["x","y","z"],t=new Array(12).fill().map(()=>new ut),e=new Array(12).fill().map(()=>new ut),n=new I,i=new I;return function(a,c=0,l=null,f=null){if(this.needsUpdate&&this.update(),this.intersectsBox(a))return(l||f)&&(a.getCenter(i),this.closestPointToPoint(i,n),a.closestPointToPoint(n,i),l&&l.copy(n),f&&f.copy(i)),0;let h=c*c,d=a.min,p=a.max,g=this.points,x=1/0;for(let T=0;T<8;T++){let A=g[T];i.copy(A).clamp(d,p);let E=A.distanceToSquared(i);if(E<x&&(x=E,l&&l.copy(A),f&&f.copy(i),E<h))return Math.sqrt(E)}let S=0;for(let T=0;T<3;T++)for(let A=0;A<=1;A++)for(let E=0;E<=1;E++){let u=(T+1)%3,o=(T+2)%3,_=A<<u|E<<o,s=1<<T|A<<u|E<<o,R=g[_],w=g[s];t[S].set(R,w);let y=m[T],M=m[u],b=m[o],C=e[S],P=C.start,D=C.end;P[y]=d[y],P[M]=A?d[M]:p[M],P[b]=E?d[b]:p[b],D[y]=p[y],D[M]=A?d[M]:p[M],D[b]=E?d[b]:p[b],S++}for(let T=0;T<=1;T++)for(let A=0;A<=1;A++)for(let E=0;E<=1;E++){i.x=T?p.x:d.x,i.y=A?p.y:d.y,i.z=E?p.z:d.z,this.closestPointToPoint(i,n);let u=i.distanceToSquared(n);if(u<x&&(x=u,l&&l.copy(n),f&&f.copy(i),u<h))return Math.sqrt(u)}for(let T=0;T<12;T++){let A=t[T];for(let E=0;E<12;E++){let u=e[E];di(A,u,n,i);let o=n.distanceToSquared(i);if(o<x&&(x=o,l&&l.copy(n),f&&f.copy(i),o<h))return Math.sqrt(o)}}return Math.sqrt(x)}})();var co=class extends ze{constructor(){super(()=>new Ct)}},kt=new co;var pi=new I,lo=new I;function Ua(m,t,e={},n=0,i=1/0){let r=n*n,a=i*i,c=1/0,l=null;if(m.shapecast({boundsTraverseOrder:h=>(pi.copy(t).clamp(h.min,h.max),pi.distanceToSquared(t)),intersectsBounds:(h,d,p)=>p<c&&p<a,intersectsTriangle:(h,d)=>{h.closestPointToPoint(t,pi);let p=t.distanceToSquared(pi);return p<c&&(lo.copy(pi),c=p,l=d),p<r}}),c===1/0)return null;let f=Math.sqrt(c);return e.point?e.point.copy(lo):e.point=lo.clone(),e.distance=f,e.faceIndex=l,e}var Mr=parseInt("180")>=169,wf=parseInt("180")<=161,tn=new I,en=new I,nn=new I,Sr=new st,br=new st,Tr=new st,Na=new I,Fa=new I,Ba=new I,mi=new I;function Ef(m,t,e,n,i,r,a,c){let l;if(r===hr?l=m.intersectTriangle(n,e,t,!0,i):l=m.intersectTriangle(t,e,n,r!==ci,i),l===null)return null;let f=m.origin.distanceTo(i);return f<a||f>c?null:{distance:f,point:i.clone()}}function Oa(m,t,e,n,i,r,a,c,l,f,h){tn.fromBufferAttribute(t,r),en.fromBufferAttribute(t,a),nn.fromBufferAttribute(t,c);let d=Ef(m,tn,en,nn,mi,l,f,h);if(d){if(n){Sr.fromBufferAttribute(n,r),br.fromBufferAttribute(n,a),Tr.fromBufferAttribute(n,c),d.uv=new st;let g=pt.getInterpolation(mi,tn,en,nn,Sr,br,Tr,d.uv);Mr||(d.uv=g)}if(i){Sr.fromBufferAttribute(i,r),br.fromBufferAttribute(i,a),Tr.fromBufferAttribute(i,c),d.uv1=new st;let g=pt.getInterpolation(mi,tn,en,nn,Sr,br,Tr,d.uv1);Mr||(d.uv1=g),wf&&(d.uv2=d.uv1)}if(e){Na.fromBufferAttribute(e,r),Fa.fromBufferAttribute(e,a),Ba.fromBufferAttribute(e,c),d.normal=new I;let g=pt.getInterpolation(mi,tn,en,nn,Na,Fa,Ba,d.normal);d.normal.dot(m.direction)>0&&d.normal.multiplyScalar(-1),Mr||(d.normal=g)}let p={a:r,b:a,c,normal:new I,materialIndex:0};if(pt.getNormal(tn,en,nn,p.normal),d.face=p,d.faceIndex=r,Mr){let g=new I;pt.getBarycoord(mi,tn,en,nn,g),d.barycoord=g}}return d}function za(m){return m&&m.isMaterial?m.side:m}function Nn(m,t,e,n,i,r,a){let c=n*3,l=c+0,f=c+1,h=c+2,{index:d,groups:p}=m;m.index&&(l=d.getX(l),f=d.getX(f),h=d.getX(h));let{position:g,normal:x,uv:S,uv1:T}=m.attributes;if(Array.isArray(t)){let A=n*3;for(let E=0,u=p.length;E<u;E++){let{start:o,count:_,materialIndex:s}=p[E];if(A>=o&&A<o+_){let R=za(t[s]),w=Oa(e,g,x,S,T,l,f,h,R,r,a);if(w)if(w.faceIndex=n,w.face.materialIndex=s,i)i.push(w);else return w}}}else{let A=za(t),E=Oa(e,g,x,S,T,l,f,h,A,r,a);if(E)if(E.faceIndex=n,E.face.materialIndex=0,i)i.push(E);else return E}return null}function gt(m,t,e,n){let i=m.a,r=m.b,a=m.c,c=t,l=t+1,f=t+2;e&&(c=e.getX(c),l=e.getX(l),f=e.getX(f)),i.x=n.getX(c),i.y=n.getY(c),i.z=n.getZ(c),r.x=n.getX(l),r.y=n.getY(l),r.z=n.getZ(l),a.x=n.getX(f),a.y=n.getY(f),a.z=n.getZ(f)}function Va(m,t,e,n,i,r,a,c){let{geometry:l,_indirectBuffer:f}=m;for(let h=n,d=n+i;h<d;h++)Nn(l,t,e,h,r,a,c)}function ka(m,t,e,n,i,r,a){let{geometry:c,_indirectBuffer:l}=m,f=1/0,h=null;for(let d=n,p=n+i;d<p;d++){let g;g=Nn(c,t,e,d,null,r,a),g&&g.distance<f&&(h=g,f=g.distance)}return h}function Ha(m,t,e,n,i,r,a){let{geometry:c}=e,{index:l}=c,f=c.attributes.position;for(let h=m,d=t+m;h<d;h++){let p;if(p=h,gt(a,p*3,l,f),a.needsUpdate=!0,n(a,p,i,r))return!0}return!1}function Ga(m,t=null){t&&Array.isArray(t)&&(t=new Set(t));let e=m.geometry,n=e.index?e.index.array:null,i=e.attributes.position,r,a,c,l,f=0,h=m._roots;for(let p=0,g=h.length;p<g;p++)r=h[p],a=new Uint32Array(r),c=new Uint16Array(r),l=new Float32Array(r),d(0,f),f+=r.byteLength;function d(p,g,x=!1){let S=p*2;if(j(S,c)){let T=ct(p,a),A=ft(S,c),E=1/0,u=1/0,o=1/0,_=-1/0,s=-1/0,R=-1/0;for(let w=3*T,v=3*(T+A);w<v;w++){let y=n[w],M=i.getX(y),b=i.getY(y),C=i.getZ(y);M<E&&(E=M),M>_&&(_=M),b<u&&(u=b),b>s&&(s=b),C<o&&(o=C),C>R&&(R=C)}return l[p+0]!==E||l[p+1]!==u||l[p+2]!==o||l[p+3]!==_||l[p+4]!==s||l[p+5]!==R?(l[p+0]=E,l[p+1]=u,l[p+2]=o,l[p+3]=_,l[p+4]=s,l[p+5]=R,!0):!1}else{let T=ot(p),A=at(p,a),E=x,u=!1,o=!1;if(t){if(!E){let y=T/8+g/32,M=A/8+g/32;u=t.has(y),o=t.has(M),E=!u&&!o}}else u=!0,o=!0;let _=E||u,s=E||o,R=!1;_&&(R=d(T,g,E));let w=!1;s&&(w=d(A,g,E));let v=R||w;if(v)for(let y=0;y<3;y++){let M=T+y,b=A+y,C=l[M],P=l[M+3],D=l[b],L=l[b+3];l[p+y]=C<D?C:D,l[p+y+3]=P>L?P:L}return v}}}function zt(m,t,e,n,i){let r,a,c,l,f,h,d=1/e.direction.x,p=1/e.direction.y,g=1/e.direction.z,x=e.origin.x,S=e.origin.y,T=e.origin.z,A=t[m],E=t[m+3],u=t[m+1],o=t[m+3+1],_=t[m+2],s=t[m+3+2];return d>=0?(r=(A-x)*d,a=(E-x)*d):(r=(E-x)*d,a=(A-x)*d),p>=0?(c=(u-S)*p,l=(o-S)*p):(c=(o-S)*p,l=(u-S)*p),r>l||c>a||((c>r||isNaN(r))&&(r=c),(l<a||isNaN(a))&&(a=l),g>=0?(f=(_-T)*g,h=(s-T)*g):(f=(s-T)*g,h=(_-T)*g),r>h||f>a)?!1:((f>r||r!==r)&&(r=f),(h<a||a!==a)&&(a=h),r<=i&&a>=n)}function Wa(m,t,e,n,i,r,a,c){let{geometry:l,_indirectBuffer:f}=m;for(let h=n,d=n+i;h<d;h++){let p=f?f[h]:h;Nn(l,t,e,p,r,a,c)}}function Xa(m,t,e,n,i,r,a){let{geometry:c,_indirectBuffer:l}=m,f=1/0,h=null;for(let d=n,p=n+i;d<p;d++){let g;g=Nn(c,t,e,l?l[d]:d,null,r,a),g&&g.distance<f&&(h=g,f=g.distance)}return h}function qa(m,t,e,n,i,r,a){let{geometry:c}=e,{index:l}=c,f=c.attributes.position;for(let h=m,d=t+m;h<d;h++){let p;if(p=e.resolveTriangleIndex(h),gt(a,p*3,l,f),a.needsUpdate=!0,n(a,p,i,r))return!0}return!1}function Ya(m,t,e,n,i,r,a){$.setBuffer(m._roots[t]),zt(0,$.float32Array,n,r,a)&&ho(0,m,e,n,i,r,a),$.clearBuffer()}function ho(m,t,e,n,i,r,a){let{float32Array:c,uint16Array:l,uint32Array:f}=$,h=m*2;if(j(h,l)){let p=ct(m,f),g=ft(h,l);Va(t,e,n,p,g,i,r,a)}else{let p=ot(m);zt(p,c,n,r,a)&&ho(p,t,e,n,i,r,a);let g=at(m,f);zt(g,c,n,r,a)&&ho(g,t,e,n,i,r,a)}}var Af=["x","y","z"];function Za(m,t,e,n,i,r){$.setBuffer(m._roots[t]);let a=null;return zt(0,$.float32Array,n,i,r)&&(a=uo(0,m,e,n,i,r)),$.clearBuffer(),a}function uo(m,t,e,n,i,r){let{float32Array:a,uint16Array:c,uint32Array:l}=$,f=m*2;if(j(f,c)){let d=ct(m,l),p=ft(f,c);return ka(t,e,n,d,p,i,r)}else{let d=An(m,l),p=Af[d],x=n.direction[p]>=0,S,T;x?(S=ot(m),T=at(m,l)):(S=at(m,l),T=ot(m));let E=zt(S,a,n,i,r)?uo(S,t,e,n,i,r):null;if(E){let _=E.point[p];if(x?_<=a[T+d]:_>=a[T+d+3])return E}let o=zt(T,a,n,i,r)?uo(T,t,e,n,i,r):null;return E&&o?E.distance<=o.distance?E:o:E||o||null}}var wr=new At,Fn=new Ct,Bn=new Ct,gi=new Q,$a=new Rt,Er=new Rt;function Ja(m,t,e,n){$.setBuffer(m._roots[t]);let i=fo(0,m,e,n);return $.clearBuffer(),i}function fo(m,t,e,n,i=null){let{float32Array:r,uint16Array:a,uint32Array:c}=$,l=m*2;if(i===null&&(e.boundingBox||e.computeBoundingBox(),$a.set(e.boundingBox.min,e.boundingBox.max,n),i=$a),j(l,a)){let h=t.geometry,d=h.index,p=h.attributes.position,g=e.index,x=e.attributes.position,S=ct(m,c),T=ft(l,a);if(gi.copy(n).invert(),e.boundsTree)return mt(m,r,Er),Er.matrix.copy(gi),Er.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:E=>Er.intersectsBox(E),intersectsTriangle:E=>{E.a.applyMatrix4(n),E.b.applyMatrix4(n),E.c.applyMatrix4(n),E.needsUpdate=!0;for(let u=S*3,o=(T+S)*3;u<o;u+=3)if(gt(Bn,u,d,p),Bn.needsUpdate=!0,E.intersectsTriangle(Bn))return!0;return!1}});{let A=He(e);for(let E=S*3,u=(T+S)*3;E<u;E+=3){gt(Fn,E,d,p),Fn.a.applyMatrix4(gi),Fn.b.applyMatrix4(gi),Fn.c.applyMatrix4(gi),Fn.needsUpdate=!0;for(let o=0,_=A*3;o<_;o+=3)if(gt(Bn,o,g,x),Bn.needsUpdate=!0,Fn.intersectsTriangle(Bn))return!0}}}else{let h=ot(m),d=at(m,c);return mt(h,r,wr),!!(i.intersectsBox(wr)&&fo(h,t,e,n,i)||(mt(d,r,wr),i.intersectsBox(wr)&&fo(d,t,e,n,i)))}}var Ar=new Q,po=new Rt,_i=new Rt,Cf=new I,Rf=new I,If=new I,Pf=new I;function Ka(m,t,e,n={},i={},r=0,a=1/0){t.boundingBox||t.computeBoundingBox(),po.set(t.boundingBox.min,t.boundingBox.max,e),po.needsUpdate=!0;let c=m.geometry,l=c.attributes.position,f=c.index,h=t.attributes.position,d=t.index,p=kt.getPrimitive(),g=kt.getPrimitive(),x=Cf,S=Rf,T=null,A=null;i&&(T=If,A=Pf);let E=1/0,u=null,o=null;return Ar.copy(e).invert(),_i.matrix.copy(Ar),m.shapecast({boundsTraverseOrder:_=>po.distanceToBox(_),intersectsBounds:(_,s,R)=>R<E&&R<a?(s&&(_i.min.copy(_.min),_i.max.copy(_.max),_i.needsUpdate=!0),!0):!1,intersectsRange:(_,s)=>{if(t.boundsTree)return t.boundsTree.shapecast({boundsTraverseOrder:w=>_i.distanceToBox(w),intersectsBounds:(w,v,y)=>y<E&&y<a,intersectsRange:(w,v)=>{for(let y=w,M=w+v;y<M;y++){gt(g,3*y,d,h),g.a.applyMatrix4(e),g.b.applyMatrix4(e),g.c.applyMatrix4(e),g.needsUpdate=!0;for(let b=_,C=_+s;b<C;b++){gt(p,3*b,f,l),p.needsUpdate=!0;let P=p.distanceToTriangle(g,x,T);if(P<E&&(S.copy(x),A&&A.copy(T),E=P,u=b,o=y),P<r)return!0}}}});{let R=He(t);for(let w=0,v=R;w<v;w++){gt(g,3*w,d,h),g.a.applyMatrix4(e),g.b.applyMatrix4(e),g.c.applyMatrix4(e),g.needsUpdate=!0;for(let y=_,M=_+s;y<M;y++){gt(p,3*y,f,l),p.needsUpdate=!0;let b=p.distanceToTriangle(g,x,T);if(b<E&&(S.copy(x),A&&A.copy(T),E=b,u=y,o=w),b<r)return!0}}}}}),kt.releasePrimitive(p),kt.releasePrimitive(g),E===1/0?null:(n.point?n.point.copy(S):n.point=S.clone(),n.distance=E,n.faceIndex=u,i&&(i.point?i.point.copy(A):i.point=A.clone(),i.point.applyMatrix4(Ar),S.applyMatrix4(Ar),i.distance=S.sub(i.point).length(),i.faceIndex=o),n)}function Qa(m,t=null){t&&Array.isArray(t)&&(t=new Set(t));let e=m.geometry,n=e.index?e.index.array:null,i=e.attributes.position,r,a,c,l,f=0,h=m._roots;for(let p=0,g=h.length;p<g;p++)r=h[p],a=new Uint32Array(r),c=new Uint16Array(r),l=new Float32Array(r),d(0,f),f+=r.byteLength;function d(p,g,x=!1){let S=p*2;if(j(S,c)){let T=ct(p,a),A=ft(S,c),E=1/0,u=1/0,o=1/0,_=-1/0,s=-1/0,R=-1/0;for(let w=T,v=T+A;w<v;w++){let y=3*m.resolveTriangleIndex(w);for(let M=0;M<3;M++){let b=y+M;b=n?n[b]:b;let C=i.getX(b),P=i.getY(b),D=i.getZ(b);C<E&&(E=C),C>_&&(_=C),P<u&&(u=P),P>s&&(s=P),D<o&&(o=D),D>R&&(R=D)}}return l[p+0]!==E||l[p+1]!==u||l[p+2]!==o||l[p+3]!==_||l[p+4]!==s||l[p+5]!==R?(l[p+0]=E,l[p+1]=u,l[p+2]=o,l[p+3]=_,l[p+4]=s,l[p+5]=R,!0):!1}else{let T=ot(p),A=at(p,a),E=x,u=!1,o=!1;if(t){if(!E){let y=T/8+g/32,M=A/8+g/32;u=t.has(y),o=t.has(M),E=!u&&!o}}else u=!0,o=!0;let _=E||u,s=E||o,R=!1;_&&(R=d(T,g,E));let w=!1;s&&(w=d(A,g,E));let v=R||w;if(v)for(let y=0;y<3;y++){let M=T+y,b=A+y,C=l[M],P=l[M+3],D=l[b],L=l[b+3];l[p+y]=C<D?C:D,l[p+y+3]=P>L?P:L}return v}}}function ja(m,t,e,n,i,r,a){$.setBuffer(m._roots[t]),zt(0,$.float32Array,n,r,a)&&mo(0,m,e,n,i,r,a),$.clearBuffer()}function mo(m,t,e,n,i,r,a){let{float32Array:c,uint16Array:l,uint32Array:f}=$,h=m*2;if(j(h,l)){let p=ct(m,f),g=ft(h,l);Wa(t,e,n,p,g,i,r,a)}else{let p=ot(m);zt(p,c,n,r,a)&&mo(p,t,e,n,i,r,a);let g=at(m,f);zt(g,c,n,r,a)&&mo(g,t,e,n,i,r,a)}}var Df=["x","y","z"];function tc(m,t,e,n,i,r){$.setBuffer(m._roots[t]);let a=null;return zt(0,$.float32Array,n,i,r)&&(a=go(0,m,e,n,i,r)),$.clearBuffer(),a}function go(m,t,e,n,i,r){let{float32Array:a,uint16Array:c,uint32Array:l}=$,f=m*2;if(j(f,c)){let d=ct(m,l),p=ft(f,c);return Xa(t,e,n,d,p,i,r)}else{let d=An(m,l),p=Df[d],x=n.direction[p]>=0,S,T;x?(S=ot(m),T=at(m,l)):(S=at(m,l),T=ot(m));let E=zt(S,a,n,i,r)?go(S,t,e,n,i,r):null;if(E){let _=E.point[p];if(x?_<=a[T+d]:_>=a[T+d+3])return E}let o=zt(T,a,n,i,r)?go(T,t,e,n,i,r):null;return E&&o?E.distance<=o.distance?E:o:E||o||null}}var Cr=new At,On=new Ct,zn=new Ct,xi=new Q,ec=new Rt,Rr=new Rt;function nc(m,t,e,n){$.setBuffer(m._roots[t]);let i=_o(0,m,e,n);return $.clearBuffer(),i}function _o(m,t,e,n,i=null){let{float32Array:r,uint16Array:a,uint32Array:c}=$,l=m*2;if(i===null&&(e.boundingBox||e.computeBoundingBox(),ec.set(e.boundingBox.min,e.boundingBox.max,n),i=ec),j(l,a)){let h=t.geometry,d=h.index,p=h.attributes.position,g=e.index,x=e.attributes.position,S=ct(m,c),T=ft(l,a);if(xi.copy(n).invert(),e.boundsTree)return mt(m,r,Rr),Rr.matrix.copy(xi),Rr.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:E=>Rr.intersectsBox(E),intersectsTriangle:E=>{E.a.applyMatrix4(n),E.b.applyMatrix4(n),E.c.applyMatrix4(n),E.needsUpdate=!0;for(let u=S,o=T+S;u<o;u++)if(gt(zn,3*t.resolveTriangleIndex(u),d,p),zn.needsUpdate=!0,E.intersectsTriangle(zn))return!0;return!1}});{let A=He(e);for(let E=S,u=T+S;E<u;E++){let o=t.resolveTriangleIndex(E);gt(On,3*o,d,p),On.a.applyMatrix4(xi),On.b.applyMatrix4(xi),On.c.applyMatrix4(xi),On.needsUpdate=!0;for(let _=0,s=A*3;_<s;_+=3)if(gt(zn,_,g,x),zn.needsUpdate=!0,On.intersectsTriangle(zn))return!0}}}else{let h=ot(m),d=at(m,c);return mt(h,r,Cr),!!(i.intersectsBox(Cr)&&_o(h,t,e,n,i)||(mt(d,r,Cr),i.intersectsBox(Cr)&&_o(d,t,e,n,i)))}}var Ir=new Q,xo=new Rt,yi=new Rt,Lf=new I,Uf=new I,Nf=new I,Ff=new I;function ic(m,t,e,n={},i={},r=0,a=1/0){t.boundingBox||t.computeBoundingBox(),xo.set(t.boundingBox.min,t.boundingBox.max,e),xo.needsUpdate=!0;let c=m.geometry,l=c.attributes.position,f=c.index,h=t.attributes.position,d=t.index,p=kt.getPrimitive(),g=kt.getPrimitive(),x=Lf,S=Uf,T=null,A=null;i&&(T=Nf,A=Ff);let E=1/0,u=null,o=null;return Ir.copy(e).invert(),yi.matrix.copy(Ir),m.shapecast({boundsTraverseOrder:_=>xo.distanceToBox(_),intersectsBounds:(_,s,R)=>R<E&&R<a?(s&&(yi.min.copy(_.min),yi.max.copy(_.max),yi.needsUpdate=!0),!0):!1,intersectsRange:(_,s)=>{if(t.boundsTree){let R=t.boundsTree;return R.shapecast({boundsTraverseOrder:w=>yi.distanceToBox(w),intersectsBounds:(w,v,y)=>y<E&&y<a,intersectsRange:(w,v)=>{for(let y=w,M=w+v;y<M;y++){let b=R.resolveTriangleIndex(y);gt(g,3*b,d,h),g.a.applyMatrix4(e),g.b.applyMatrix4(e),g.c.applyMatrix4(e),g.needsUpdate=!0;for(let C=_,P=_+s;C<P;C++){let D=m.resolveTriangleIndex(C);gt(p,3*D,f,l),p.needsUpdate=!0;let L=p.distanceToTriangle(g,x,T);if(L<E&&(S.copy(x),A&&A.copy(T),E=L,u=C,o=y),L<r)return!0}}}})}else{let R=He(t);for(let w=0,v=R;w<v;w++){gt(g,3*w,d,h),g.a.applyMatrix4(e),g.b.applyMatrix4(e),g.c.applyMatrix4(e),g.needsUpdate=!0;for(let y=_,M=_+s;y<M;y++){let b=m.resolveTriangleIndex(y);gt(p,3*b,f,l),p.needsUpdate=!0;let C=p.distanceToTriangle(g,x,T);if(C<E&&(S.copy(x),A&&A.copy(T),E=C,u=y,o=w),C<r)return!0}}}}}),kt.releasePrimitive(p),kt.releasePrimitive(g),E===1/0?null:(n.point?n.point.copy(S):n.point=S.clone(),n.distance=E,n.faceIndex=u,i&&(i.point?i.point.copy(A):i.point=A.clone(),i.point.applyMatrix4(Ir),S.applyMatrix4(Ir),i.distance=S.sub(i.point).length(),i.faceIndex=o),n)}function yo(m,t,e){return m===null?null:(m.point.applyMatrix4(t.matrixWorld),m.distance=m.point.distanceTo(e.ray.origin),m.object=t,m)}var Pr=new Rt,Dr=new me,rc=new I,sc=new Q,oc=new I,vo=["getX","getY","getZ"],Lr=class m extends vr{static serialize(t,e={}){e={cloneBuffers:!0,...e};let n=t.geometry,i=t._roots,r=t._indirectBuffer,a=n.getIndex(),c={version:1,roots:null,index:null,indirectBuffer:null};return e.cloneBuffers?(c.roots=i.map(l=>l.slice()),c.index=a?a.array.slice():null,c.indirectBuffer=r?r.slice():null):(c.roots=i,c.index=a?a.array:null,c.indirectBuffer=r),c}static deserialize(t,e,n={}){n={setIndex:!0,indirect:!!t.indirectBuffer,...n};let{index:i,roots:r,indirectBuffer:a}=t;t.version||(console.warn("MeshBVH.deserialize: Serialization format has been changed and will be fixed up. It is recommended to regenerate any stored serialized data."),l(r));let c=new m(e,{...n,[hi]:!0});if(c._roots=r,c._indirectBuffer=a||null,n.setIndex){let f=e.getIndex();if(f===null){let h=new Ot(t.index,1,!1);e.setIndex(h)}else f.array!==i&&(f.array.set(i),f.needsUpdate=!0)}return c;function l(f){for(let h=0;h<f.length;h++){let d=f[h],p=new Uint32Array(d),g=new Uint16Array(d);for(let x=0,S=d.byteLength/32;x<S;x++){let T=8*x,A=2*T;j(A,g)||(p[T+6]=p[T+6]/8-x)}}}}get primitiveStride(){return 3}get resolveTriangleIndex(){return this.resolvePrimitiveIndex}constructor(t,e={}){e.maxLeafTris&&(console.warn('MeshBVH: "maxLeafTris" option has been deprecated. Use "targetLeafSize", instead.'),e={...e,targetLeafSize:e.maxLeafTris}),super(t,e)}shiftTriangleOffsets(t){return super.shiftPrimitiveOffsets(t)}writePrimitiveBounds(t,e,n){let i=this.geometry,r=this._indirectBuffer,a=i.attributes.position,c=i.index?i.index.array:null,f=(r?r[t]:t)*3,h=f+0,d=f+1,p=f+2;c&&(h=c[h],d=c[d],p=c[p]);for(let g=0;g<3;g++){let x=a[vo[g]](h),S=a[vo[g]](d),T=a[vo[g]](p),A=x;S<A&&(A=S),T<A&&(A=T);let E=x;S>E&&(E=S),T>E&&(E=T),e[n+g]=A,e[n+g+3]=E}return e}computePrimitiveBounds(t,e,n){let i=this.geometry,r=this._indirectBuffer,a=i.attributes.position,c=i.index?i.index.array:null,l=a.normalized;if(t<0||e+t-n.offset>n.length/6)throw new Error("MeshBVH: compute triangle bounds range is invalid.");let f=a.array,h=a.offset||0,d=3;a.isInterleavedBufferAttribute&&(d=a.data.stride);let p=["getX","getY","getZ"],g=n.offset;for(let x=t,S=t+e;x<S;x++){let A=(r?r[x]:x)*3,E=(x-g)*6,u=A+0,o=A+1,_=A+2;c&&(u=c[u],o=c[o],_=c[_]),l||(u=u*d+h,o=o*d+h,_=_*d+h);for(let s=0;s<3;s++){let R,w,v;l?(R=a[p[s]](u),w=a[p[s]](o),v=a[p[s]](_)):(R=f[u+s],w=f[o+s],v=f[_+s]);let y=R;w<y&&(y=w),v<y&&(y=v);let M=R;w>M&&(M=w),v>M&&(M=v);let b=(M-y)/2,C=s*2;n[E+C+0]=y+b,n[E+C+1]=b+(Math.abs(y)+b)*En}}return n}raycastObject3D(t,e,n=[]){let{material:i}=t;if(i===void 0)return;sc.copy(t.matrixWorld).invert(),Dr.copy(e.ray).applyMatrix4(sc),oc.setFromMatrixScale(t.matrixWorld),rc.copy(Dr.direction).multiply(oc);let r=rc.length(),a=e.near/r,c=e.far/r;if(e.firstHitOnly===!0){let l=this.raycastFirst(Dr,i,a,c);l=yo(l,t,e),l&&n.push(l)}else{let l=this.raycast(Dr,i,a,c);for(let f=0,h=l.length;f<h;f++){let d=yo(l[f],t,e);d&&n.push(d)}}return n}refit(t=null){return(this.indirect?Qa:Ga)(this,t)}raycast(t,e=Je,n=0,i=1/0){let r=this._roots,a=[],c=this.indirect?ja:Ya;for(let l=0,f=r.length;l<f;l++)c(this,l,e,t,a,n,i);return a}raycastFirst(t,e=Je,n=0,i=1/0){let r=this._roots,a=null,c=this.indirect?tc:Za;for(let l=0,f=r.length;l<f;l++){let h=c(this,l,e,t,n,i);h!=null&&(a==null||h.distance<a.distance)&&(a=h)}return a}intersectsGeometry(t,e){let n=!1,i=this._roots,r=this.indirect?nc:Ja;for(let a=0,c=i.length;a<c&&(n=r(this,a,t,e),!n);a++);return n}shapecast(t){let e=kt.getPrimitive(),n=super.shapecast({...t,intersectsPrimitive:t.intersectsTriangle,scratchPrimitive:e,iterate:this.indirect?qa:Ha});return kt.releasePrimitive(e),n}bvhcast(t,e,n){let{intersectsRanges:i,intersectsTriangles:r}=n,a=kt.getPrimitive(),c=this.geometry.index,l=this.geometry.attributes.position,f=this.indirect?x=>{let S=this.resolveTriangleIndex(x);gt(a,S*3,c,l)}:x=>{gt(a,x*3,c,l)},h=kt.getPrimitive(),d=t.geometry.index,p=t.geometry.attributes.position,g=t.indirect?x=>{let S=t.resolveTriangleIndex(x);gt(h,S*3,d,p)}:x=>{gt(h,x*3,d,p)};if(r){if(!(t instanceof m))throw new Error('MeshBVH: "intersectsTriangles" callback can only be used with another MeshBVH.');let x=(S,T,A,E,u,o,_,s)=>{for(let R=A,w=A+E;R<w;R++){g(R),h.a.applyMatrix4(e),h.b.applyMatrix4(e),h.c.applyMatrix4(e),h.needsUpdate=!0;for(let v=S,y=S+T;v<y;v++)if(f(v),a.needsUpdate=!0,r(a,h,v,R,u,o,_,s))return!0}return!1};if(i){let S=i;i=function(T,A,E,u,o,_,s,R){return S(T,A,E,u,o,_,s,R)?!0:x(T,A,E,u,o,_,s,R)}}else i=x}return super.bvhcast(t,e,{intersectsRanges:i})}intersectsBox(t,e){return Pr.set(t.min,t.max,e),Pr.needsUpdate=!0,this.shapecast({intersectsBounds:n=>Pr.intersectsBox(n),intersectsTriangle:n=>Pr.intersectsTriangle(n)})}intersectsSphere(t){return this.shapecast({intersectsBounds:e=>t.intersectsBox(e),intersectsTriangle:e=>e.intersectsSphere(t)})}closestPointToGeometry(t,e,n={},i={},r=0,a=1/0){return(this.indirect?ic:Ka)(this,t,e,n,i,r,a)}closestPointToPoint(t,e={},n=0,i=1/0){return Ua(this,t,e,n,i)}};var ac=Math.pow(10,-Math.log10(1e-6)),Bf=5e-7*ac;function ue(m){return~~(m*ac+Bf)}function cc(m){return`${ue(m.x)},${ue(m.y)}`}function Mo(m){return`${ue(m.x)},${ue(m.y)},${ue(m.z)}`}function lc(m){return`${ue(m.x)},${ue(m.y)},${ue(m.z)},${ue(m.w)}`}function hc(m,t,e){e.direction.subVectors(t,m).normalize();let n=m.dot(e.direction);return e.origin.copy(m).addScaledVector(e.direction,-n),e}function Ur(){return typeof SharedArrayBuffer<"u"}function uc(m){if(m.buffer instanceof SharedArrayBuffer)return m;let t=m.constructor,e=m.buffer,n=new SharedArrayBuffer(e.byteLength),i=new Uint8Array(e);return new Uint8Array(n).set(i,0),new t(n)}function Of(m){return m.index?m.index.count:m.attributes.position.count}function Vn(m){return Of(m)/3}var zf=1e-8,Vf=new I;function dc(m){return~~(m/3)}function pc(m){return m%3}function fc(m,t){return m.start-t.start}function So(m,t){return Vf.subVectors(t,m.origin).dot(m.direction)}function mc(m,t,e,n=zf){m.sort(fc),t.sort(fc);for(let c=0;c<m.length;c++){let l=m[c];for(let f=0;f<t.length;f++){let h=t[f];if(!(h.start>l.end)){if(l.end<h.start||h.end<l.start)continue;if(l.start<=h.start&&l.end>=h.end)r(h.end,l.end)||m.splice(c+1,0,{start:h.end,end:l.end,index:l.index}),l.end=h.start,h.start=0,h.end=0;else if(l.start>=h.start&&l.end<=h.end)r(l.end,h.end)||t.splice(f+1,0,{start:l.end,end:h.end,index:h.index}),h.end=l.start,l.start=0,l.end=0;else if(l.start<=h.start&&l.end<=h.end){let d=l.end;l.end=h.start,h.start=d}else if(l.start>=h.start&&l.end>=h.end){let d=h.end;h.end=l.start,l.start=d}else throw new Error}if(e.has(l.index)||e.set(l.index,[]),e.has(h.index)||e.set(h.index,[]),e.get(l.index).push(h.index),e.get(h.index).push(l.index),a(h)&&(t.splice(f,1),f--),a(l)){m.splice(c,1),c--;break}}}i(m),i(t);function i(c){for(let l=0;l<c.length;l++)a(c[l])&&(c.splice(l,1),l--)}function r(c,l){return Math.abs(l-c)<n}function a(c){return Math.abs(c.end-c.start)<n}}var Nr=class{constructor(){this._rays=[]}addRay(t){this._rays.push(t)}findClosestRay(t){let e=this._rays,n=t.clone();n.direction.multiplyScalar(-1);let i=1/0,r=null;for(let l=0,f=e.length;l<f;l++){let h=e[l];if(a(h,t)&&a(h,n))continue;let d=c(h,t),p=c(h,n),g=Math.min(d,p);g<i&&(i=g,r=h)}return r;function a(l,f){let h=l.origin.distanceTo(f.origin)>1e-5;return l.direction.angleTo(f.direction)>1e-4||h}function c(l,f){let h=l.origin.distanceTo(f.origin),d=l.direction.angleTo(f.direction);return h/1e-5+d/1e-4}}};var bo=new I,To=new I,Fr=new me;function gc(m,t,e){let n=m.attributes,i=m.index,r=n.position,a=new Map,c=new Map,l=Array.from(t),f=new Nr;for(let h=0,d=l.length;h<d;h++){let p=l[h],g=dc(p),x=pc(p),S=3*g+x,T=3*g+(x+1)%3;i&&(S=i.getX(S),T=i.getX(T)),bo.fromBufferAttribute(r,S),To.fromBufferAttribute(r,T),hc(bo,To,Fr);let A,E=f.findClosestRay(Fr);E===null&&(E=Fr.clone(),f.addRay(E)),c.has(E)||c.set(E,{forward:[],reverse:[],ray:E}),A=c.get(E);let u=So(E,bo),o=So(E,To);u>o&&([u,o]=[o,u]),Fr.direction.dot(E.direction)<0?A.reverse.push({start:u,end:o,index:p}):A.forward.push({start:u,end:o,index:p})}return c.forEach(({forward:h,reverse:d},p)=>{mc(h,d,a,e),h.length===0&&d.length===0&&c.delete(p)}),{disjointConnectivityMap:a,fragmentMap:c}}var kf=new st,wo=new I,Hf=new Zt,Eo=["","",""],Br=class{constructor(){this.data=null,this.disjointConnections=null,this.unmatchedDisjointEdges=null,this.unmatchedEdges=-1,this.matchedEdges=-1,this.useDrawRange=!0,this.useAllAttributes=!1,this.matchDisjointEdges=!1,this.degenerateEpsilon=1e-8}getSiblingTriangleIndex(t,e){let n=this.data[t*3+e];return n===-1?-1:~~(n/3)}getSiblingEdgeIndex(t,e){let n=this.data[t*3+e];return n===-1?-1:n%3}getDisjointSiblingTriangleIndices(t,e){let n=t*3+e,i=this.disjointConnections.get(n);return i?i.map(r=>~~(r/3)):[]}getDisjointSiblingEdgeIndices(t,e){let n=t*3+e,i=this.disjointConnections.get(n);return i?i.map(r=>r%3):[]}isFullyConnected(){return this.unmatchedEdges===0}updateFrom(t){let{useAllAttributes:e,useDrawRange:n,matchDisjointEdges:i,degenerateEpsilon:r}=this,a=e?u:E,c=new Map,{attributes:l}=t,f=e?Object.keys(l):null,h=t.index,d=l.position,p=Vn(t),g=p,x=0;n&&(x=t.drawRange.start,t.drawRange.count!==1/0&&(p=~~(t.drawRange.count/3)));let S=this.data;(!S||S.length<3*g)&&(S=new Int32Array(3*g)),S.fill(-1);let T=0,A=new Set;for(let o=x,_=p*3+x;o<_;o+=3){let s=o;for(let R=0;R<3;R++){let w=s+R;h&&(w=h.getX(w)),Eo[R]=a(w)}for(let R=0;R<3;R++){let w=(R+1)%3,v=Eo[R],y=Eo[w],M=`${y}_${v}`;if(c.has(M)){let b=s+R,C=c.get(M);S[b]=C,S[C]=b,c.delete(M),T+=2,A.delete(C)}else{let b=`${v}_${y}`,C=s+R;c.set(b,C),A.add(C)}}}if(i){let{fragmentMap:o,disjointConnectivityMap:_}=gc(t,A,r);A.clear(),o.forEach(({forward:s,reverse:R})=>{s.forEach(({index:w})=>A.add(w)),R.forEach(({index:w})=>A.add(w))}),this.unmatchedDisjointEdges=o,this.disjointConnections=_,T=p*3-A.size}this.matchedEdges=T,this.unmatchedEdges=A.size,this.data=S;function E(o){return wo.fromBufferAttribute(d,o),Mo(wo)}function u(o){let _="";for(let s=0,R=f.length;s<R;s++){let w=l[f[s]],v;switch(w.itemSize){case 1:v=ue(w.getX(o));break;case 2:v=cc(kf.fromBufferAttribute(w,o));break;case 3:v=Mo(wo.fromBufferAttribute(w,o));break;case 4:v=lc(Hf.fromBufferAttribute(w,o));break}_!==""&&(_+="|"),_+=v}return _}}};var rn=class extends ri{constructor(...t){super(...t),this.isBrush=!0,this._previousMatrix=new Q,this._previousMatrix.elements.fill(0),this._halfEdges=null,this._boundsTree=null,this._groupIndices=null,this._hash=null}markUpdated(){this._previousMatrix.copy(this.matrix)}isDirty(){let{matrix:t,_previousMatrix:e}=this,n=t.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!0;return!1}prepareGeometry(){let t=this.geometry,e=t.attributes,n=Ur(),i=t.index,r=t.attributes.position,a=i?`${i.uuid}_${i.count}_${i.version}`:"-1_-1_-1",c=`${r.uuid}_${r.count}_${r.version}`,l=`${t.uuid}_${a}_${c}`;if(this._hash===l)return;if(this._hash=l,n)for(let p in e){let g=e[p];if(g.isInterleavedBufferAttribute)throw new Error("Brush: InterleavedBufferAttributes are not supported.");g.array=uc(g.array)}t.boundsTree=new Lr(t,{maxLeafSize:3,indirect:!0,useSharedArrayBuffer:n}),t.halfEdges||(t.halfEdges=new Br),t.halfEdges.updateFrom(t);let f=Vn(t);(!t.groupIndices||t.groupIndices.length!==f)&&(t.groupIndices=new Uint16Array(f));let h=t.groupIndices,d=t.groups;for(let p=0,g=d.length;p<g;p++){let{start:x,count:S}=d[p];for(let T=x/3,A=(x+S)/3;T<A;T++)h[T]=p}}disposeCacheData(){let{geometry:t}=this;t.halfEdges=null,t.boundsTree=null,t.groupIndices=null}};var Gf=Object.getOwnPropertyNames,Qt=(m,t)=>function(){return t||(0,m[Gf(m)[0]])((t={exports:{}}).exports,t),t.exports},Or=Qt({"node_modules/binary-search-bounds/search-bounds.js"(m,t){"use strict";function e(l,f,h,d,p){for(var g=p+1;d<=p;){var x=d+p>>>1,S=l[x],T=h!==void 0?h(S,f):S-f;T>=0?(g=x,p=x-1):d=x+1}return g}function n(l,f,h,d,p){for(var g=p+1;d<=p;){var x=d+p>>>1,S=l[x],T=h!==void 0?h(S,f):S-f;T>0?(g=x,p=x-1):d=x+1}return g}function i(l,f,h,d,p){for(var g=d-1;d<=p;){var x=d+p>>>1,S=l[x],T=h!==void 0?h(S,f):S-f;T<0?(g=x,d=x+1):p=x-1}return g}function r(l,f,h,d,p){for(var g=d-1;d<=p;){var x=d+p>>>1,S=l[x],T=h!==void 0?h(S,f):S-f;T<=0?(g=x,d=x+1):p=x-1}return g}function a(l,f,h,d,p){for(;d<=p;){var g=d+p>>>1,x=l[g],S=h!==void 0?h(x,f):x-f;if(S===0)return g;S<=0?d=g+1:p=g-1}return-1}function c(l,f,h,d,p,g){return typeof h=="function"?g(l,f,h,d===void 0?0:d|0,p===void 0?l.length-1:p|0):g(l,f,void 0,h===void 0?0:h|0,d===void 0?l.length-1:d|0)}t.exports={ge:function(l,f,h,d,p){return c(l,f,h,d,p,e)},gt:function(l,f,h,d,p){return c(l,f,h,d,p,n)},lt:function(l,f,h,d,p){return c(l,f,h,d,p,i)},le:function(l,f,h,d,p){return c(l,f,h,d,p,r)},eq:function(l,f,h,d,p){return c(l,f,h,d,p,a)}}}}),Ao=Qt({"node_modules/two-product/two-product.js"(m,t){"use strict";t.exports=n;var e=+(Math.pow(2,27)+1);function n(i,r,a){var c=i*r,l=e*i,f=l-i,h=l-f,d=i-h,p=e*r,g=p-r,x=p-g,S=r-x,T=c-h*x,A=T-d*x,E=A-h*S,u=d*S-E;return a?(a[0]=u,a[1]=c,a):[u,c]}}}),_c=Qt({"node_modules/robust-sum/robust-sum.js"(m,t){"use strict";t.exports=n;function e(i,r){var a=i+r,c=a-i,l=a-c,f=r-c,h=i-l,d=h+f;return d?[d,a]:[a]}function n(i,r){var a=i.length|0,c=r.length|0;if(a===1&&c===1)return e(i[0],r[0]);var l=a+c,f=new Array(l),h=0,d=0,p=0,g=Math.abs,x=i[d],S=g(x),T=r[p],A=g(T),E,u;S<A?(u=x,d+=1,d<a&&(x=i[d],S=g(x))):(u=T,p+=1,p<c&&(T=r[p],A=g(T))),d<a&&S<A||p>=c?(E=x,d+=1,d<a&&(x=i[d],S=g(x))):(E=T,p+=1,p<c&&(T=r[p],A=g(T)));for(var o=E+u,_=o-E,s=u-_,R=s,w=o,v,y,M,b,C;d<a&&p<c;)S<A?(E=x,d+=1,d<a&&(x=i[d],S=g(x))):(E=T,p+=1,p<c&&(T=r[p],A=g(T))),u=R,o=E+u,_=o-E,s=u-_,s&&(f[h++]=s),v=w+o,y=v-w,M=v-y,b=o-y,C=w-M,R=C+b,w=v;for(;d<a;)E=x,u=R,o=E+u,_=o-E,s=u-_,s&&(f[h++]=s),v=w+o,y=v-w,M=v-y,b=o-y,C=w-M,R=C+b,w=v,d+=1,d<a&&(x=i[d]);for(;p<c;)E=T,u=R,o=E+u,_=o-E,s=u-_,s&&(f[h++]=s),v=w+o,y=v-w,M=v-y,b=o-y,C=w-M,R=C+b,w=v,p+=1,p<c&&(T=r[p]);return R&&(f[h++]=R),w&&(f[h++]=w),h||(f[h++]=0),f.length=h,f}}}),Wf=Qt({"node_modules/two-sum/two-sum.js"(m,t){"use strict";t.exports=e;function e(n,i,r){var a=n+i,c=a-n,l=a-c,f=i-c,h=n-l;return r?(r[0]=h+f,r[1]=a,r):[h+f,a]}}}),xc=Qt({"node_modules/robust-scale/robust-scale.js"(m,t){"use strict";var e=Ao(),n=Wf();t.exports=i;function i(r,a){var c=r.length;if(c===1){var l=e(r[0],a);return l[0]?l:[l[1]]}var f=new Array(2*c),h=[.1,.1],d=[.1,.1],p=0;e(r[0],a,h),h[0]&&(f[p++]=h[0]);for(var g=1;g<c;++g){e(r[g],a,d);var x=h[1];n(x,d[0],h),h[0]&&(f[p++]=h[0]);var S=d[1],T=h[1],A=S+T,E=A-S,u=T-E;h[1]=A,u&&(f[p++]=u)}return h[1]&&(f[p++]=h[1]),p===0&&(f[p++]=0),f.length=p,f}}}),yc=Qt({"node_modules/robust-subtract/robust-diff.js"(m,t){"use strict";t.exports=n;function e(i,r){var a=i+r,c=a-i,l=a-c,f=r-c,h=i-l,d=h+f;return d?[d,a]:[a]}function n(i,r){var a=i.length|0,c=r.length|0;if(a===1&&c===1)return e(i[0],-r[0]);var l=a+c,f=new Array(l),h=0,d=0,p=0,g=Math.abs,x=i[d],S=g(x),T=-r[p],A=g(T),E,u;S<A?(u=x,d+=1,d<a&&(x=i[d],S=g(x))):(u=T,p+=1,p<c&&(T=-r[p],A=g(T))),d<a&&S<A||p>=c?(E=x,d+=1,d<a&&(x=i[d],S=g(x))):(E=T,p+=1,p<c&&(T=-r[p],A=g(T)));for(var o=E+u,_=o-E,s=u-_,R=s,w=o,v,y,M,b,C;d<a&&p<c;)S<A?(E=x,d+=1,d<a&&(x=i[d],S=g(x))):(E=T,p+=1,p<c&&(T=-r[p],A=g(T))),u=R,o=E+u,_=o-E,s=u-_,s&&(f[h++]=s),v=w+o,y=v-w,M=v-y,b=o-y,C=w-M,R=C+b,w=v;for(;d<a;)E=x,u=R,o=E+u,_=o-E,s=u-_,s&&(f[h++]=s),v=w+o,y=v-w,M=v-y,b=o-y,C=w-M,R=C+b,w=v,d+=1,d<a&&(x=i[d]);for(;p<c;)E=T,u=R,o=E+u,_=o-E,s=u-_,s&&(f[h++]=s),v=w+o,y=v-w,M=v-y,b=o-y,C=w-M,R=C+b,w=v,p+=1,p<c&&(T=-r[p]);return R&&(f[h++]=R),w&&(f[h++]=w),h||(f[h++]=0),f.length=h,f}}}),Xf=Qt({"node_modules/robust-orientation/orientation.js"(m,t){"use strict";var e=Ao(),n=_c(),i=xc(),r=yc(),a=5,c=11102230246251565e-32,l=(3+16*c)*c,f=(7+56*c)*c;function h(o,_,s,R){return function(v,y,M){var b=o(o(_(y[1],M[0]),_(-M[1],y[0])),o(_(v[1],y[0]),_(-y[1],v[0]))),C=o(_(v[1],M[0]),_(-M[1],v[0])),P=R(b,C);return P[P.length-1]}}function d(o,_,s,R){return function(v,y,M,b){var C=o(o(s(o(_(M[1],b[0]),_(-b[1],M[0])),y[2]),o(s(o(_(y[1],b[0]),_(-b[1],y[0])),-M[2]),s(o(_(y[1],M[0]),_(-M[1],y[0])),b[2]))),o(s(o(_(y[1],b[0]),_(-b[1],y[0])),v[2]),o(s(o(_(v[1],b[0]),_(-b[1],v[0])),-y[2]),s(o(_(v[1],y[0]),_(-y[1],v[0])),b[2])))),P=o(o(s(o(_(M[1],b[0]),_(-b[1],M[0])),v[2]),o(s(o(_(v[1],b[0]),_(-b[1],v[0])),-M[2]),s(o(_(v[1],M[0]),_(-M[1],v[0])),b[2]))),o(s(o(_(y[1],M[0]),_(-M[1],y[0])),v[2]),o(s(o(_(v[1],M[0]),_(-M[1],v[0])),-y[2]),s(o(_(v[1],y[0]),_(-y[1],v[0])),M[2])))),D=R(C,P);return D[D.length-1]}}function p(o,_,s,R){return function(v,y,M,b,C){var P=o(o(o(s(o(s(o(_(b[1],C[0]),_(-C[1],b[0])),M[2]),o(s(o(_(M[1],C[0]),_(-C[1],M[0])),-b[2]),s(o(_(M[1],b[0]),_(-b[1],M[0])),C[2]))),y[3]),o(s(o(s(o(_(b[1],C[0]),_(-C[1],b[0])),y[2]),o(s(o(_(y[1],C[0]),_(-C[1],y[0])),-b[2]),s(o(_(y[1],b[0]),_(-b[1],y[0])),C[2]))),-M[3]),s(o(s(o(_(M[1],C[0]),_(-C[1],M[0])),y[2]),o(s(o(_(y[1],C[0]),_(-C[1],y[0])),-M[2]),s(o(_(y[1],M[0]),_(-M[1],y[0])),C[2]))),b[3]))),o(s(o(s(o(_(M[1],b[0]),_(-b[1],M[0])),y[2]),o(s(o(_(y[1],b[0]),_(-b[1],y[0])),-M[2]),s(o(_(y[1],M[0]),_(-M[1],y[0])),b[2]))),-C[3]),o(s(o(s(o(_(b[1],C[0]),_(-C[1],b[0])),y[2]),o(s(o(_(y[1],C[0]),_(-C[1],y[0])),-b[2]),s(o(_(y[1],b[0]),_(-b[1],y[0])),C[2]))),v[3]),s(o(s(o(_(b[1],C[0]),_(-C[1],b[0])),v[2]),o(s(o(_(v[1],C[0]),_(-C[1],v[0])),-b[2]),s(o(_(v[1],b[0]),_(-b[1],v[0])),C[2]))),-y[3])))),o(o(s(o(s(o(_(y[1],C[0]),_(-C[1],y[0])),v[2]),o(s(o(_(v[1],C[0]),_(-C[1],v[0])),-y[2]),s(o(_(v[1],y[0]),_(-y[1],v[0])),C[2]))),b[3]),o(s(o(s(o(_(y[1],b[0]),_(-b[1],y[0])),v[2]),o(s(o(_(v[1],b[0]),_(-b[1],v[0])),-y[2]),s(o(_(v[1],y[0]),_(-y[1],v[0])),b[2]))),-C[3]),s(o(s(o(_(M[1],b[0]),_(-b[1],M[0])),y[2]),o(s(o(_(y[1],b[0]),_(-b[1],y[0])),-M[2]),s(o(_(y[1],M[0]),_(-M[1],y[0])),b[2]))),v[3]))),o(s(o(s(o(_(M[1],b[0]),_(-b[1],M[0])),v[2]),o(s(o(_(v[1],b[0]),_(-b[1],v[0])),-M[2]),s(o(_(v[1],M[0]),_(-M[1],v[0])),b[2]))),-y[3]),o(s(o(s(o(_(y[1],b[0]),_(-b[1],y[0])),v[2]),o(s(o(_(v[1],b[0]),_(-b[1],v[0])),-y[2]),s(o(_(v[1],y[0]),_(-y[1],v[0])),b[2]))),M[3]),s(o(s(o(_(y[1],M[0]),_(-M[1],y[0])),v[2]),o(s(o(_(v[1],M[0]),_(-M[1],v[0])),-y[2]),s(o(_(v[1],y[0]),_(-y[1],v[0])),M[2]))),-b[3]))))),D=o(o(o(s(o(s(o(_(b[1],C[0]),_(-C[1],b[0])),M[2]),o(s(o(_(M[1],C[0]),_(-C[1],M[0])),-b[2]),s(o(_(M[1],b[0]),_(-b[1],M[0])),C[2]))),v[3]),s(o(s(o(_(b[1],C[0]),_(-C[1],b[0])),v[2]),o(s(o(_(v[1],C[0]),_(-C[1],v[0])),-b[2]),s(o(_(v[1],b[0]),_(-b[1],v[0])),C[2]))),-M[3])),o(s(o(s(o(_(M[1],C[0]),_(-C[1],M[0])),v[2]),o(s(o(_(v[1],C[0]),_(-C[1],v[0])),-M[2]),s(o(_(v[1],M[0]),_(-M[1],v[0])),C[2]))),b[3]),s(o(s(o(_(M[1],b[0]),_(-b[1],M[0])),v[2]),o(s(o(_(v[1],b[0]),_(-b[1],v[0])),-M[2]),s(o(_(v[1],M[0]),_(-M[1],v[0])),b[2]))),-C[3]))),o(o(s(o(s(o(_(M[1],C[0]),_(-C[1],M[0])),y[2]),o(s(o(_(y[1],C[0]),_(-C[1],y[0])),-M[2]),s(o(_(y[1],M[0]),_(-M[1],y[0])),C[2]))),v[3]),s(o(s(o(_(M[1],C[0]),_(-C[1],M[0])),v[2]),o(s(o(_(v[1],C[0]),_(-C[1],v[0])),-M[2]),s(o(_(v[1],M[0]),_(-M[1],v[0])),C[2]))),-y[3])),o(s(o(s(o(_(y[1],C[0]),_(-C[1],y[0])),v[2]),o(s(o(_(v[1],C[0]),_(-C[1],v[0])),-y[2]),s(o(_(v[1],y[0]),_(-y[1],v[0])),C[2]))),M[3]),s(o(s(o(_(y[1],M[0]),_(-M[1],y[0])),v[2]),o(s(o(_(v[1],M[0]),_(-M[1],v[0])),-y[2]),s(o(_(v[1],y[0]),_(-y[1],v[0])),M[2]))),-C[3])))),L=R(P,D);return L[L.length-1]}}function g(o){var _=o===3?h:o===4?d:p;return _(n,e,i,r)}var x=g(3),S=g(4),T=[function(){return 0},function(){return 0},function(_,s){return s[0]-_[0]},function(_,s,R){var w=(_[1]-R[1])*(s[0]-R[0]),v=(_[0]-R[0])*(s[1]-R[1]),y=w-v,M;if(w>0){if(v<=0)return y;M=w+v}else if(w<0){if(v>=0)return y;M=-(w+v)}else return y;var b=l*M;return y>=b||y<=-b?y:x(_,s,R)},function(_,s,R,w){var v=_[0]-w[0],y=s[0]-w[0],M=R[0]-w[0],b=_[1]-w[1],C=s[1]-w[1],P=R[1]-w[1],D=_[2]-w[2],L=s[2]-w[2],U=R[2]-w[2],F=y*P,N=M*C,k=M*b,O=v*P,z=v*C,V=y*b,H=D*(F-N)+L*(k-O)+U*(z-V),G=(Math.abs(F)+Math.abs(N))*Math.abs(D)+(Math.abs(k)+Math.abs(O))*Math.abs(L)+(Math.abs(z)+Math.abs(V))*Math.abs(U),lt=f*G;return H>lt||-H>lt?H:S(_,s,R,w)}];function A(o){var _=T[o.length];return _||(_=T[o.length]=g(o.length)),_.apply(void 0,o)}function E(o,_,s,R,w,v,y){return function(b,C,P,D,L){switch(arguments.length){case 0:case 1:return 0;case 2:return R(b,C);case 3:return w(b,C,P);case 4:return v(b,C,P,D);case 5:return y(b,C,P,D,L)}for(var U=new Array(arguments.length),F=0;F<arguments.length;++F)U[F]=arguments[F];return o(U)}}function u(){for(;T.length<=a;)T.push(g(T.length));t.exports=E.apply(void 0,[A].concat(T));for(var o=0;o<=a;++o)t.exports[o]=T[o]}u()}}),qf=Qt({"node_modules/cdt2d/lib/monotone.js"(m,t){"use strict";var e=Or(),n=Xf()[3],i=0,r=1,a=2;t.exports=S;function c(T,A,E,u,o){this.a=T,this.b=A,this.idx=E,this.lowerIds=u,this.upperIds=o}function l(T,A,E,u){this.a=T,this.b=A,this.type=E,this.idx=u}function f(T,A){var E=T.a[0]-A.a[0]||T.a[1]-A.a[1]||T.type-A.type;return E||T.type!==i&&(E=n(T.a,T.b,A.b),E)?E:T.idx-A.idx}function h(T,A){return n(T.a,T.b,A)}function d(T,A,E,u,o){for(var _=e.lt(A,u,h),s=e.gt(A,u,h),R=_;R<s;++R){for(var w=A[R],v=w.lowerIds,M=v.length;M>1&&n(E[v[M-2]],E[v[M-1]],u)>0;)T.push([v[M-1],v[M-2],o]),M-=1;v.length=M,v.push(o);for(var y=w.upperIds,M=y.length;M>1&&n(E[y[M-2]],E[y[M-1]],u)<0;)T.push([y[M-2],y[M-1],o]),M-=1;y.length=M,y.push(o)}}function p(T,A){var E;return T.a[0]<A.a[0]?E=n(T.a,T.b,A.a):E=n(A.b,A.a,T.a),E||(A.b[0]<T.b[0]?E=n(T.a,T.b,A.b):E=n(A.b,A.a,T.b),E||T.idx-A.idx)}function g(T,A,E){var u=e.le(T,E,p),o=T[u],_=o.upperIds,s=_[_.length-1];o.upperIds=[s],T.splice(u+1,0,new c(E.a,E.b,E.idx,[s],_))}function x(T,A,E){var u=E.a;E.a=E.b,E.b=u;var o=e.eq(T,E,p),_=T[o],s=T[o-1];s.upperIds=_.upperIds,T.splice(o,1)}function S(T,A){for(var E=T.length,u=A.length,o=[],_=0;_<E;++_)o.push(new l(T[_],null,i,_));for(var _=0;_<u;++_){var s=A[_],R=T[s[0]],w=T[s[1]];R[0]<w[0]?o.push(new l(R,w,a,_),new l(w,R,r,_)):R[0]>w[0]&&o.push(new l(w,R,a,_),new l(R,w,r,_))}o.sort(f);for(var v=o[0].a[0]-(1+Math.abs(o[0].a[0]))*Math.pow(2,-52),y=[new c([v,1],[v,0],-1,[],[],[],[])],M=[],_=0,b=o.length;_<b;++_){var C=o[_],P=C.type;P===i?d(M,y,T,C.a,C.idx):P===a?g(y,T,C):x(y,T,C)}return M}}}),Yf=Qt({"node_modules/cdt2d/lib/triangulation.js"(m,t){"use strict";var e=Or();t.exports=a;function n(c,l){this.stars=c,this.edges=l}var i=n.prototype;function r(c,l,f){for(var h=1,d=c.length;h<d;h+=2)if(c[h-1]===l&&c[h]===f){c[h-1]=c[d-2],c[h]=c[d-1],c.length=d-2;return}}i.isConstraint=(function(){var c=[0,0];function l(f,h){return f[0]-h[0]||f[1]-h[1]}return function(f,h){return c[0]=Math.min(f,h),c[1]=Math.max(f,h),e.eq(this.edges,c,l)>=0}})(),i.removeTriangle=function(c,l,f){var h=this.stars;r(h[c],l,f),r(h[l],f,c),r(h[f],c,l)},i.addTriangle=function(c,l,f){var h=this.stars;h[c].push(l,f),h[l].push(f,c),h[f].push(c,l)},i.opposite=function(c,l){for(var f=this.stars[l],h=1,d=f.length;h<d;h+=2)if(f[h]===c)return f[h-1];return-1},i.flip=function(c,l){var f=this.opposite(c,l),h=this.opposite(l,c);this.removeTriangle(c,l,f),this.removeTriangle(l,c,h),this.addTriangle(c,h,f),this.addTriangle(l,f,h)},i.edges=function(){for(var c=this.stars,l=[],f=0,h=c.length;f<h;++f)for(var d=c[f],p=0,g=d.length;p<g;p+=2)l.push([d[p],d[p+1]]);return l},i.cells=function(){for(var c=this.stars,l=[],f=0,h=c.length;f<h;++f)for(var d=c[f],p=0,g=d.length;p<g;p+=2){var x=d[p],S=d[p+1];f<Math.min(x,S)&&l.push([f,x,S])}return l};function a(c,l){for(var f=new Array(c),h=0;h<c;++h)f[h]=[];return new n(f,l)}}}),Zf=Qt({"node_modules/robust-in-sphere/in-sphere.js"(m,t){"use strict";var e=Ao(),n=_c(),i=yc(),r=xc(),a=6;function c(u){var o=u===3?d:u===4?p:u===5?g:x;return o(n,i,e,r)}function l(){return 0}function f(){return 0}function h(){return 0}function d(u,o,_,s){function R(w,v,y){var M=_(w[0],w[0]),b=s(M,v[0]),C=s(M,y[0]),P=_(v[0],v[0]),D=s(P,w[0]),L=s(P,y[0]),U=_(y[0],y[0]),F=s(U,w[0]),N=s(U,v[0]),k=u(o(N,L),o(D,b)),O=o(F,C),z=o(k,O);return z[z.length-1]}return R}function p(u,o,_,s){function R(w,v,y,M){var b=u(_(w[0],w[0]),_(w[1],w[1])),C=s(b,v[0]),P=s(b,y[0]),D=s(b,M[0]),L=u(_(v[0],v[0]),_(v[1],v[1])),U=s(L,w[0]),F=s(L,y[0]),N=s(L,M[0]),k=u(_(y[0],y[0]),_(y[1],y[1])),O=s(k,w[0]),z=s(k,v[0]),V=s(k,M[0]),H=u(_(M[0],M[0]),_(M[1],M[1])),G=s(H,w[0]),lt=s(H,v[0]),Y=s(H,y[0]),Z=u(u(s(o(Y,V),v[1]),u(s(o(lt,N),-y[1]),s(o(z,F),M[1]))),u(s(o(lt,N),w[1]),u(s(o(G,D),-v[1]),s(o(U,C),M[1])))),W=u(u(s(o(Y,V),w[1]),u(s(o(G,D),-y[1]),s(o(O,P),M[1]))),u(s(o(z,F),w[1]),u(s(o(O,P),-v[1]),s(o(U,C),y[1])))),J=o(Z,W);return J[J.length-1]}return R}function g(u,o,_,s){function R(w,v,y,M,b){var C=u(_(w[0],w[0]),u(_(w[1],w[1]),_(w[2],w[2]))),P=s(C,v[0]),D=s(C,y[0]),L=s(C,M[0]),U=s(C,b[0]),F=u(_(v[0],v[0]),u(_(v[1],v[1]),_(v[2],v[2]))),N=s(F,w[0]),k=s(F,y[0]),O=s(F,M[0]),z=s(F,b[0]),V=u(_(y[0],y[0]),u(_(y[1],y[1]),_(y[2],y[2]))),H=s(V,w[0]),G=s(V,v[0]),lt=s(V,M[0]),Y=s(V,b[0]),Z=u(_(M[0],M[0]),u(_(M[1],M[1]),_(M[2],M[2]))),W=s(Z,w[0]),J=s(Z,v[0]),tt=s(Z,y[0]),Nt=s(Z,b[0]),ht=u(_(b[0],b[0]),u(_(b[1],b[1]),_(b[2],b[2]))),et=s(ht,w[0]),nt=s(ht,v[0]),it=s(ht,y[0]),rt=s(ht,M[0]),Xe=u(u(u(s(u(s(o(rt,Nt),y[1]),u(s(o(it,Y),-M[1]),s(o(tt,lt),b[1]))),v[2]),u(s(u(s(o(rt,Nt),v[1]),u(s(o(nt,z),-M[1]),s(o(J,O),b[1]))),-y[2]),s(u(s(o(it,Y),v[1]),u(s(o(nt,z),-y[1]),s(o(G,k),b[1]))),M[2]))),u(s(u(s(o(tt,lt),v[1]),u(s(o(J,O),-y[1]),s(o(G,k),M[1]))),-b[2]),u(s(u(s(o(rt,Nt),v[1]),u(s(o(nt,z),-M[1]),s(o(J,O),b[1]))),w[2]),s(u(s(o(rt,Nt),w[1]),u(s(o(et,U),-M[1]),s(o(W,L),b[1]))),-v[2])))),u(u(s(u(s(o(nt,z),w[1]),u(s(o(et,U),-v[1]),s(o(N,P),b[1]))),M[2]),u(s(u(s(o(J,O),w[1]),u(s(o(W,L),-v[1]),s(o(N,P),M[1]))),-b[2]),s(u(s(o(tt,lt),v[1]),u(s(o(J,O),-y[1]),s(o(G,k),M[1]))),w[2]))),u(s(u(s(o(tt,lt),w[1]),u(s(o(W,L),-y[1]),s(o(H,D),M[1]))),-v[2]),u(s(u(s(o(J,O),w[1]),u(s(o(W,L),-v[1]),s(o(N,P),M[1]))),y[2]),s(u(s(o(G,k),w[1]),u(s(o(H,D),-v[1]),s(o(N,P),y[1]))),-M[2]))))),_t=u(u(u(s(u(s(o(rt,Nt),y[1]),u(s(o(it,Y),-M[1]),s(o(tt,lt),b[1]))),w[2]),s(u(s(o(rt,Nt),w[1]),u(s(o(et,U),-M[1]),s(o(W,L),b[1]))),-y[2])),u(s(u(s(o(it,Y),w[1]),u(s(o(et,U),-y[1]),s(o(H,D),b[1]))),M[2]),s(u(s(o(tt,lt),w[1]),u(s(o(W,L),-y[1]),s(o(H,D),M[1]))),-b[2]))),u(u(s(u(s(o(it,Y),v[1]),u(s(o(nt,z),-y[1]),s(o(G,k),b[1]))),w[2]),s(u(s(o(it,Y),w[1]),u(s(o(et,U),-y[1]),s(o(H,D),b[1]))),-v[2])),u(s(u(s(o(nt,z),w[1]),u(s(o(et,U),-v[1]),s(o(N,P),b[1]))),y[2]),s(u(s(o(G,k),w[1]),u(s(o(H,D),-v[1]),s(o(N,P),y[1]))),-b[2])))),dt=o(Xe,_t);return dt[dt.length-1]}return R}function x(u,o,_,s){function R(w,v,y,M,b,C){var P=u(u(_(w[0],w[0]),_(w[1],w[1])),u(_(w[2],w[2]),_(w[3],w[3]))),D=s(P,v[0]),L=s(P,y[0]),U=s(P,M[0]),F=s(P,b[0]),N=s(P,C[0]),k=u(u(_(v[0],v[0]),_(v[1],v[1])),u(_(v[2],v[2]),_(v[3],v[3]))),O=s(k,w[0]),z=s(k,y[0]),V=s(k,M[0]),H=s(k,b[0]),G=s(k,C[0]),lt=u(u(_(y[0],y[0]),_(y[1],y[1])),u(_(y[2],y[2]),_(y[3],y[3]))),Y=s(lt,w[0]),Z=s(lt,v[0]),W=s(lt,M[0]),J=s(lt,b[0]),tt=s(lt,C[0]),Nt=u(u(_(M[0],M[0]),_(M[1],M[1])),u(_(M[2],M[2]),_(M[3],M[3]))),ht=s(Nt,w[0]),et=s(Nt,v[0]),nt=s(Nt,y[0]),it=s(Nt,b[0]),rt=s(Nt,C[0]),Xe=u(u(_(b[0],b[0]),_(b[1],b[1])),u(_(b[2],b[2]),_(b[3],b[3]))),_t=s(Xe,w[0]),dt=s(Xe,v[0]),yt=s(Xe,y[0]),vt=s(Xe,M[0]),Mt=s(Xe,C[0]),Yn=u(u(_(C[0],C[0]),_(C[1],C[1])),u(_(C[2],C[2]),_(C[3],C[3]))),St=s(Yn,w[0]),bt=s(Yn,v[0]),Tt=s(Yn,y[0]),wt=s(Yn,M[0]),Et=s(Yn,b[0]),jc=u(u(u(s(u(u(s(u(s(o(Et,Mt),M[1]),u(s(o(wt,rt),-b[1]),s(o(vt,it),C[1]))),y[2]),s(u(s(o(Et,Mt),y[1]),u(s(o(Tt,tt),-b[1]),s(o(yt,J),C[1]))),-M[2])),u(s(u(s(o(wt,rt),y[1]),u(s(o(Tt,tt),-M[1]),s(o(nt,W),C[1]))),b[2]),s(u(s(o(vt,it),y[1]),u(s(o(yt,J),-M[1]),s(o(nt,W),b[1]))),-C[2]))),v[3]),u(s(u(u(s(u(s(o(Et,Mt),M[1]),u(s(o(wt,rt),-b[1]),s(o(vt,it),C[1]))),v[2]),s(u(s(o(Et,Mt),v[1]),u(s(o(bt,G),-b[1]),s(o(dt,H),C[1]))),-M[2])),u(s(u(s(o(wt,rt),v[1]),u(s(o(bt,G),-M[1]),s(o(et,V),C[1]))),b[2]),s(u(s(o(vt,it),v[1]),u(s(o(dt,H),-M[1]),s(o(et,V),b[1]))),-C[2]))),-y[3]),s(u(u(s(u(s(o(Et,Mt),y[1]),u(s(o(Tt,tt),-b[1]),s(o(yt,J),C[1]))),v[2]),s(u(s(o(Et,Mt),v[1]),u(s(o(bt,G),-b[1]),s(o(dt,H),C[1]))),-y[2])),u(s(u(s(o(Tt,tt),v[1]),u(s(o(bt,G),-y[1]),s(o(Z,z),C[1]))),b[2]),s(u(s(o(yt,J),v[1]),u(s(o(dt,H),-y[1]),s(o(Z,z),b[1]))),-C[2]))),M[3]))),u(u(s(u(u(s(u(s(o(wt,rt),y[1]),u(s(o(Tt,tt),-M[1]),s(o(nt,W),C[1]))),v[2]),s(u(s(o(wt,rt),v[1]),u(s(o(bt,G),-M[1]),s(o(et,V),C[1]))),-y[2])),u(s(u(s(o(Tt,tt),v[1]),u(s(o(bt,G),-y[1]),s(o(Z,z),C[1]))),M[2]),s(u(s(o(nt,W),v[1]),u(s(o(et,V),-y[1]),s(o(Z,z),M[1]))),-C[2]))),-b[3]),s(u(u(s(u(s(o(vt,it),y[1]),u(s(o(yt,J),-M[1]),s(o(nt,W),b[1]))),v[2]),s(u(s(o(vt,it),v[1]),u(s(o(dt,H),-M[1]),s(o(et,V),b[1]))),-y[2])),u(s(u(s(o(yt,J),v[1]),u(s(o(dt,H),-y[1]),s(o(Z,z),b[1]))),M[2]),s(u(s(o(nt,W),v[1]),u(s(o(et,V),-y[1]),s(o(Z,z),M[1]))),-b[2]))),C[3])),u(s(u(u(s(u(s(o(Et,Mt),M[1]),u(s(o(wt,rt),-b[1]),s(o(vt,it),C[1]))),v[2]),s(u(s(o(Et,Mt),v[1]),u(s(o(bt,G),-b[1]),s(o(dt,H),C[1]))),-M[2])),u(s(u(s(o(wt,rt),v[1]),u(s(o(bt,G),-M[1]),s(o(et,V),C[1]))),b[2]),s(u(s(o(vt,it),v[1]),u(s(o(dt,H),-M[1]),s(o(et,V),b[1]))),-C[2]))),w[3]),s(u(u(s(u(s(o(Et,Mt),M[1]),u(s(o(wt,rt),-b[1]),s(o(vt,it),C[1]))),w[2]),s(u(s(o(Et,Mt),w[1]),u(s(o(St,N),-b[1]),s(o(_t,F),C[1]))),-M[2])),u(s(u(s(o(wt,rt),w[1]),u(s(o(St,N),-M[1]),s(o(ht,U),C[1]))),b[2]),s(u(s(o(vt,it),w[1]),u(s(o(_t,F),-M[1]),s(o(ht,U),b[1]))),-C[2]))),-v[3])))),u(u(u(s(u(u(s(u(s(o(Et,Mt),v[1]),u(s(o(bt,G),-b[1]),s(o(dt,H),C[1]))),w[2]),s(u(s(o(Et,Mt),w[1]),u(s(o(St,N),-b[1]),s(o(_t,F),C[1]))),-v[2])),u(s(u(s(o(bt,G),w[1]),u(s(o(St,N),-v[1]),s(o(O,D),C[1]))),b[2]),s(u(s(o(dt,H),w[1]),u(s(o(_t,F),-v[1]),s(o(O,D),b[1]))),-C[2]))),M[3]),s(u(u(s(u(s(o(wt,rt),v[1]),u(s(o(bt,G),-M[1]),s(o(et,V),C[1]))),w[2]),s(u(s(o(wt,rt),w[1]),u(s(o(St,N),-M[1]),s(o(ht,U),C[1]))),-v[2])),u(s(u(s(o(bt,G),w[1]),u(s(o(St,N),-v[1]),s(o(O,D),C[1]))),M[2]),s(u(s(o(et,V),w[1]),u(s(o(ht,U),-v[1]),s(o(O,D),M[1]))),-C[2]))),-b[3])),u(s(u(u(s(u(s(o(vt,it),v[1]),u(s(o(dt,H),-M[1]),s(o(et,V),b[1]))),w[2]),s(u(s(o(vt,it),w[1]),u(s(o(_t,F),-M[1]),s(o(ht,U),b[1]))),-v[2])),u(s(u(s(o(dt,H),w[1]),u(s(o(_t,F),-v[1]),s(o(O,D),b[1]))),M[2]),s(u(s(o(et,V),w[1]),u(s(o(ht,U),-v[1]),s(o(O,D),M[1]))),-b[2]))),C[3]),s(u(u(s(u(s(o(wt,rt),y[1]),u(s(o(Tt,tt),-M[1]),s(o(nt,W),C[1]))),v[2]),s(u(s(o(wt,rt),v[1]),u(s(o(bt,G),-M[1]),s(o(et,V),C[1]))),-y[2])),u(s(u(s(o(Tt,tt),v[1]),u(s(o(bt,G),-y[1]),s(o(Z,z),C[1]))),M[2]),s(u(s(o(nt,W),v[1]),u(s(o(et,V),-y[1]),s(o(Z,z),M[1]))),-C[2]))),w[3]))),u(u(s(u(u(s(u(s(o(wt,rt),y[1]),u(s(o(Tt,tt),-M[1]),s(o(nt,W),C[1]))),w[2]),s(u(s(o(wt,rt),w[1]),u(s(o(St,N),-M[1]),s(o(ht,U),C[1]))),-y[2])),u(s(u(s(o(Tt,tt),w[1]),u(s(o(St,N),-y[1]),s(o(Y,L),C[1]))),M[2]),s(u(s(o(nt,W),w[1]),u(s(o(ht,U),-y[1]),s(o(Y,L),M[1]))),-C[2]))),-v[3]),s(u(u(s(u(s(o(wt,rt),v[1]),u(s(o(bt,G),-M[1]),s(o(et,V),C[1]))),w[2]),s(u(s(o(wt,rt),w[1]),u(s(o(St,N),-M[1]),s(o(ht,U),C[1]))),-v[2])),u(s(u(s(o(bt,G),w[1]),u(s(o(St,N),-v[1]),s(o(O,D),C[1]))),M[2]),s(u(s(o(et,V),w[1]),u(s(o(ht,U),-v[1]),s(o(O,D),M[1]))),-C[2]))),y[3])),u(s(u(u(s(u(s(o(Tt,tt),v[1]),u(s(o(bt,G),-y[1]),s(o(Z,z),C[1]))),w[2]),s(u(s(o(Tt,tt),w[1]),u(s(o(St,N),-y[1]),s(o(Y,L),C[1]))),-v[2])),u(s(u(s(o(bt,G),w[1]),u(s(o(St,N),-v[1]),s(o(O,D),C[1]))),y[2]),s(u(s(o(Z,z),w[1]),u(s(o(Y,L),-v[1]),s(o(O,D),y[1]))),-C[2]))),-M[3]),s(u(u(s(u(s(o(nt,W),v[1]),u(s(o(et,V),-y[1]),s(o(Z,z),M[1]))),w[2]),s(u(s(o(nt,W),w[1]),u(s(o(ht,U),-y[1]),s(o(Y,L),M[1]))),-v[2])),u(s(u(s(o(et,V),w[1]),u(s(o(ht,U),-v[1]),s(o(O,D),M[1]))),y[2]),s(u(s(o(Z,z),w[1]),u(s(o(Y,L),-v[1]),s(o(O,D),y[1]))),-M[2]))),C[3]))))),tl=u(u(u(s(u(u(s(u(s(o(Et,Mt),M[1]),u(s(o(wt,rt),-b[1]),s(o(vt,it),C[1]))),y[2]),s(u(s(o(Et,Mt),y[1]),u(s(o(Tt,tt),-b[1]),s(o(yt,J),C[1]))),-M[2])),u(s(u(s(o(wt,rt),y[1]),u(s(o(Tt,tt),-M[1]),s(o(nt,W),C[1]))),b[2]),s(u(s(o(vt,it),y[1]),u(s(o(yt,J),-M[1]),s(o(nt,W),b[1]))),-C[2]))),w[3]),u(s(u(u(s(u(s(o(Et,Mt),M[1]),u(s(o(wt,rt),-b[1]),s(o(vt,it),C[1]))),w[2]),s(u(s(o(Et,Mt),w[1]),u(s(o(St,N),-b[1]),s(o(_t,F),C[1]))),-M[2])),u(s(u(s(o(wt,rt),w[1]),u(s(o(St,N),-M[1]),s(o(ht,U),C[1]))),b[2]),s(u(s(o(vt,it),w[1]),u(s(o(_t,F),-M[1]),s(o(ht,U),b[1]))),-C[2]))),-y[3]),s(u(u(s(u(s(o(Et,Mt),y[1]),u(s(o(Tt,tt),-b[1]),s(o(yt,J),C[1]))),w[2]),s(u(s(o(Et,Mt),w[1]),u(s(o(St,N),-b[1]),s(o(_t,F),C[1]))),-y[2])),u(s(u(s(o(Tt,tt),w[1]),u(s(o(St,N),-y[1]),s(o(Y,L),C[1]))),b[2]),s(u(s(o(yt,J),w[1]),u(s(o(_t,F),-y[1]),s(o(Y,L),b[1]))),-C[2]))),M[3]))),u(u(s(u(u(s(u(s(o(wt,rt),y[1]),u(s(o(Tt,tt),-M[1]),s(o(nt,W),C[1]))),w[2]),s(u(s(o(wt,rt),w[1]),u(s(o(St,N),-M[1]),s(o(ht,U),C[1]))),-y[2])),u(s(u(s(o(Tt,tt),w[1]),u(s(o(St,N),-y[1]),s(o(Y,L),C[1]))),M[2]),s(u(s(o(nt,W),w[1]),u(s(o(ht,U),-y[1]),s(o(Y,L),M[1]))),-C[2]))),-b[3]),s(u(u(s(u(s(o(vt,it),y[1]),u(s(o(yt,J),-M[1]),s(o(nt,W),b[1]))),w[2]),s(u(s(o(vt,it),w[1]),u(s(o(_t,F),-M[1]),s(o(ht,U),b[1]))),-y[2])),u(s(u(s(o(yt,J),w[1]),u(s(o(_t,F),-y[1]),s(o(Y,L),b[1]))),M[2]),s(u(s(o(nt,W),w[1]),u(s(o(ht,U),-y[1]),s(o(Y,L),M[1]))),-b[2]))),C[3])),u(s(u(u(s(u(s(o(Et,Mt),y[1]),u(s(o(Tt,tt),-b[1]),s(o(yt,J),C[1]))),v[2]),s(u(s(o(Et,Mt),v[1]),u(s(o(bt,G),-b[1]),s(o(dt,H),C[1]))),-y[2])),u(s(u(s(o(Tt,tt),v[1]),u(s(o(bt,G),-y[1]),s(o(Z,z),C[1]))),b[2]),s(u(s(o(yt,J),v[1]),u(s(o(dt,H),-y[1]),s(o(Z,z),b[1]))),-C[2]))),w[3]),s(u(u(s(u(s(o(Et,Mt),y[1]),u(s(o(Tt,tt),-b[1]),s(o(yt,J),C[1]))),w[2]),s(u(s(o(Et,Mt),w[1]),u(s(o(St,N),-b[1]),s(o(_t,F),C[1]))),-y[2])),u(s(u(s(o(Tt,tt),w[1]),u(s(o(St,N),-y[1]),s(o(Y,L),C[1]))),b[2]),s(u(s(o(yt,J),w[1]),u(s(o(_t,F),-y[1]),s(o(Y,L),b[1]))),-C[2]))),-v[3])))),u(u(u(s(u(u(s(u(s(o(Et,Mt),v[1]),u(s(o(bt,G),-b[1]),s(o(dt,H),C[1]))),w[2]),s(u(s(o(Et,Mt),w[1]),u(s(o(St,N),-b[1]),s(o(_t,F),C[1]))),-v[2])),u(s(u(s(o(bt,G),w[1]),u(s(o(St,N),-v[1]),s(o(O,D),C[1]))),b[2]),s(u(s(o(dt,H),w[1]),u(s(o(_t,F),-v[1]),s(o(O,D),b[1]))),-C[2]))),y[3]),s(u(u(s(u(s(o(Tt,tt),v[1]),u(s(o(bt,G),-y[1]),s(o(Z,z),C[1]))),w[2]),s(u(s(o(Tt,tt),w[1]),u(s(o(St,N),-y[1]),s(o(Y,L),C[1]))),-v[2])),u(s(u(s(o(bt,G),w[1]),u(s(o(St,N),-v[1]),s(o(O,D),C[1]))),y[2]),s(u(s(o(Z,z),w[1]),u(s(o(Y,L),-v[1]),s(o(O,D),y[1]))),-C[2]))),-b[3])),u(s(u(u(s(u(s(o(yt,J),v[1]),u(s(o(dt,H),-y[1]),s(o(Z,z),b[1]))),w[2]),s(u(s(o(yt,J),w[1]),u(s(o(_t,F),-y[1]),s(o(Y,L),b[1]))),-v[2])),u(s(u(s(o(dt,H),w[1]),u(s(o(_t,F),-v[1]),s(o(O,D),b[1]))),y[2]),s(u(s(o(Z,z),w[1]),u(s(o(Y,L),-v[1]),s(o(O,D),y[1]))),-b[2]))),C[3]),s(u(u(s(u(s(o(vt,it),y[1]),u(s(o(yt,J),-M[1]),s(o(nt,W),b[1]))),v[2]),s(u(s(o(vt,it),v[1]),u(s(o(dt,H),-M[1]),s(o(et,V),b[1]))),-y[2])),u(s(u(s(o(yt,J),v[1]),u(s(o(dt,H),-y[1]),s(o(Z,z),b[1]))),M[2]),s(u(s(o(nt,W),v[1]),u(s(o(et,V),-y[1]),s(o(Z,z),M[1]))),-b[2]))),w[3]))),u(u(s(u(u(s(u(s(o(vt,it),y[1]),u(s(o(yt,J),-M[1]),s(o(nt,W),b[1]))),w[2]),s(u(s(o(vt,it),w[1]),u(s(o(_t,F),-M[1]),s(o(ht,U),b[1]))),-y[2])),u(s(u(s(o(yt,J),w[1]),u(s(o(_t,F),-y[1]),s(o(Y,L),b[1]))),M[2]),s(u(s(o(nt,W),w[1]),u(s(o(ht,U),-y[1]),s(o(Y,L),M[1]))),-b[2]))),-v[3]),s(u(u(s(u(s(o(vt,it),v[1]),u(s(o(dt,H),-M[1]),s(o(et,V),b[1]))),w[2]),s(u(s(o(vt,it),w[1]),u(s(o(_t,F),-M[1]),s(o(ht,U),b[1]))),-v[2])),u(s(u(s(o(dt,H),w[1]),u(s(o(_t,F),-v[1]),s(o(O,D),b[1]))),M[2]),s(u(s(o(et,V),w[1]),u(s(o(ht,U),-v[1]),s(o(O,D),M[1]))),-b[2]))),y[3])),u(s(u(u(s(u(s(o(yt,J),v[1]),u(s(o(dt,H),-y[1]),s(o(Z,z),b[1]))),w[2]),s(u(s(o(yt,J),w[1]),u(s(o(_t,F),-y[1]),s(o(Y,L),b[1]))),-v[2])),u(s(u(s(o(dt,H),w[1]),u(s(o(_t,F),-v[1]),s(o(O,D),b[1]))),y[2]),s(u(s(o(Z,z),w[1]),u(s(o(Y,L),-v[1]),s(o(O,D),y[1]))),-b[2]))),-M[3]),s(u(u(s(u(s(o(nt,W),v[1]),u(s(o(et,V),-y[1]),s(o(Z,z),M[1]))),w[2]),s(u(s(o(nt,W),w[1]),u(s(o(ht,U),-y[1]),s(o(Y,L),M[1]))),-v[2])),u(s(u(s(o(et,V),w[1]),u(s(o(ht,U),-v[1]),s(o(O,D),M[1]))),y[2]),s(u(s(o(Z,z),w[1]),u(s(o(Y,L),-v[1]),s(o(O,D),y[1]))),-M[2]))),b[3]))))),Go=o(jc,tl);return Go[Go.length-1]}return R}var S=[l,f,h];function T(u){var o=S[u.length];return o||(o=S[u.length]=c(u.length)),o.apply(void 0,u)}function A(u,o,_,s,R,w,v,y){function M(b,C,P,D,L,U){switch(arguments.length){case 0:case 1:return 0;case 2:return s(b,C);case 3:return R(b,C,P);case 4:return w(b,C,P,D);case 5:return v(b,C,P,D,L);case 6:return y(b,C,P,D,L,U)}for(var F=new Array(arguments.length),N=0;N<arguments.length;++N)F[N]=arguments[N];return u(F)}return M}function E(){for(;S.length<=a;)S.push(c(S.length));t.exports=A.apply(void 0,[T].concat(S));for(var u=0;u<=a;++u)t.exports[u]=S[u]}E()}}),$f=Qt({"node_modules/cdt2d/lib/delaunay.js"(m,t){"use strict";var e=Zf()[4],n=Or();t.exports=r;function i(a,c,l,f,h,d){var p=c.opposite(f,h);if(!(p<0)){if(h<f){var g=f;f=h,h=g,g=d,d=p,p=g}c.isConstraint(f,h)||e(a[f],a[h],a[d],a[p])<0&&l.push(f,h)}}function r(a,c){for(var l=[],f=a.length,h=c.stars,d=0;d<f;++d)for(var p=h[d],g=1;g<p.length;g+=2){var x=p[g];if(!(x<d)&&!c.isConstraint(d,x)){for(var S=p[g-1],T=-1,A=1;A<p.length;A+=2)if(p[A-1]===x){T=p[A];break}T<0||e(a[d],a[x],a[S],a[T])<0&&l.push(d,x)}}for(;l.length>0;){for(var x=l.pop(),d=l.pop(),S=-1,T=-1,p=h[d],E=1;E<p.length;E+=2){var u=p[E-1],o=p[E];u===x?T=o:o===x&&(S=u)}S<0||T<0||e(a[d],a[x],a[S],a[T])>=0||(c.flip(d,x),i(a,c,l,S,d,T),i(a,c,l,d,T,S),i(a,c,l,T,x,S),i(a,c,l,x,S,T))}}}}),Jf=Qt({"node_modules/cdt2d/lib/filter.js"(m,t){"use strict";var e=Or();t.exports=l;function n(f,h,d,p,g,x,S){this.cells=f,this.neighbor=h,this.flags=p,this.constraint=d,this.active=g,this.next=x,this.boundary=S}var i=n.prototype;function r(f,h){return f[0]-h[0]||f[1]-h[1]||f[2]-h[2]}i.locate=(function(){var f=[0,0,0];return function(h,d,p){var g=h,x=d,S=p;return d<p?d<h&&(g=d,x=p,S=h):p<h&&(g=p,x=h,S=d),g<0?-1:(f[0]=g,f[1]=x,f[2]=S,e.eq(this.cells,f,r))}})();function a(f,h){for(var d=f.cells(),p=d.length,g=0;g<p;++g){var x=d[g],S=x[0],T=x[1],A=x[2];T<A?T<S&&(x[0]=T,x[1]=A,x[2]=S):A<S&&(x[0]=A,x[1]=S,x[2]=T)}d.sort(r);for(var E=new Array(p),g=0;g<E.length;++g)E[g]=0;var u=[],o=[],_=new Array(3*p),s=new Array(3*p),R=null;h&&(R=[]);for(var w=new n(d,_,s,E,u,o,R),g=0;g<p;++g)for(var x=d[g],v=0;v<3;++v){var S=x[v],T=x[(v+1)%3],y=_[3*g+v]=w.locate(T,S,f.opposite(T,S)),M=s[3*g+v]=f.isConstraint(S,T);y<0&&(M?o.push(g):(u.push(g),E[g]=1),h&&R.push([T,S,-1]))}return w}function c(f,h,d){for(var p=0,g=0;g<f.length;++g)h[g]===d&&(f[p++]=f[g]);return f.length=p,f}function l(f,h,d){var p=a(f,d);if(h===0)return d?p.cells.concat(p.boundary):p.cells;for(var g=1,x=p.active,S=p.next,T=p.flags,A=p.cells,E=p.constraint,u=p.neighbor;x.length>0||S.length>0;){for(;x.length>0;){var o=x.pop();if(T[o]!==-g){T[o]=g;for(var _=A[o],s=0;s<3;++s){var R=u[3*o+s];R>=0&&T[R]===0&&(E[3*o+s]?S.push(R):(x.push(R),T[R]=g))}}}var w=S;S=x,x=w,S.length=0,g=-g}var v=c(A,T,h);return d?v.concat(p.boundary):v}}}),Kf=Qt({"node_modules/cdt2d/cdt2d.js"(m,t){var e=qf(),n=Yf(),i=$f(),r=Jf();t.exports=h;function a(d){return[Math.min(d[0],d[1]),Math.max(d[0],d[1])]}function c(d,p){return d[0]-p[0]||d[1]-p[1]}function l(d){return d.map(a).sort(c)}function f(d,p,g){return p in d?d[p]:g}function h(d,p,g){Array.isArray(p)?(g=g||{},p=p||[]):(g=p||{},p=[]);var x=!!f(g,"delaunay",!0),S=!!f(g,"interior",!0),T=!!f(g,"exterior",!0),A=!!f(g,"infinity",!1);if(!S&&!T||d.length===0)return[];var E=e(d,p);if(x||S!==T||A){for(var u=n(d.length,l(p)),o=0;o<E.length;++o){var _=E[o];u.addTriangle(_[0],_[1],_[2])}return x&&i(d,u),T?S?A?r(u,0,A):u.cells():r(u,1,A):r(u,-1)}else return E}}}),vc=Kf();var jt=class{constructor(t){this.createFn=t,this._pool=[],this._index=0}getInstance(){return this._index>=this._pool.length&&this._pool.push(this.createFn()),this._pool[this._index++]}clear(){this._index=0}reset(){this._pool.length=0,this._index=0}};var Mc=1e-16,Qf=1e-16,sn=new I,Sc=new I,bc=new jt(()=>({param:0,index:0})),jf=new jt(()=>new I);function td(m,t,e,n){bc.clear(),t.length=0,e.length=0;for(let f=0,h=m.length;f<h;f++){let d=m[f];l(d.start),l(d.end)}for(let f=0,h=m.length;f<h;f++){let d=m[f];for(let p=f+1;p<h;p++){let g=m[p];d.distanceSqToLine3(g,sn,Sc)<Mc*n&&l(Sc)}}let i=[];for(let f=0,h=m.length;f<h;f++){i.length=0;let d=m[f];for(let p=0,g=t.length;p<g;p++){let x=t[p],S=d.closestPointToPointParameter(x,!0);if(d.at(S,sn),x.distanceToSquared(sn)<Mc*n){let T=bc.getInstance();T.param=S,T.index=p,i.push(T)}}i.sort(c);for(let p=0,g=i.length-1;p<g;p++){let x=i[p].index,S=i[p+1].index;x!==S&&e.push([x,S])}}let r=new Set,a=0;for(let f=0,h=e.length;f<h;f++){let d=e[f],p=Math.min(d[0],d[1]),g=Math.max(d[0],d[1]),x=p+","+g;r.has(x)||(r.add(x),e[a++]=d)}e.length=a;function c(f,h){return f.param-h.param}function l(f){for(let h=0;h<t.length;h++){let d=t[h];if(f===d||f.distanceToSquared(d)<Qf*n)return h}return t.push(jf.getInstance().copy(f)),t.length-1}}var vi=class{constructor(){this.trianglePool=new jt(()=>new Ct),this.linePool=new jt(()=>new ut),this.triangles=[],this.triangleIndices=[],this.constrainedEdges=[],this.triangleConnectivity=[],this.normal=new I,this.projOrigin=new I,this.projU=new I,this.projV=new I,this.baseTri=new Ct,this.baseIndices=new Array(3)}initialize(t,e=null,n=null,i=null){this.reset();let{normal:r,baseTri:a,projU:c,projV:l,projOrigin:f,constrainedEdges:h,linePool:d,baseIndices:p}=this;t.getNormal(r),a.copy(t),a.update(),p[0]=e,p[1]=n,p[2]=i,h.length=0;let g=d.getInstance();g.start.copy(a.a),g.end.copy(a.b);let x=d.getInstance();x.start.copy(a.b),x.end.copy(a.c);let S=d.getInstance();S.start.copy(a.c),S.end.copy(a.a),h.push(g,x,S),f.copy(a.a),c.subVectors(a.b,a.a).normalize(),l.crossVectors(r,c).normalize()}addConstraintEdge(t){let{constrainedEdges:e,linePool:n}=this,i=n.getInstance().copy(t);e.push(i)}_to2D(t,e){let{projOrigin:n,projU:i,projV:r}=this;return sn.subVectors(t,n),e.set(sn.dot(i),sn.dot(r),0)}_from2D(t,e,n){let{projOrigin:i,projU:r,projV:a}=this;return n.copy(i).addScaledVector(r,t).addScaledVector(a,e),n}triangulate(){let{triangles:t,trianglePool:e,triangleConnectivity:n,triangleIndices:i,linePool:r,baseTri:a,constrainedEdges:c,baseIndices:l}=this;t.length=0,e.clear();let f=[];for(let A=0,E=c.length;A<E;A++){let u=c[A],o=r.getInstance();this._to2D(u.start,o.start),this._to2D(u.end,o.end),f.push(o)}let h=0;for(let A=0;A<3;A++){let E=this._to2D(a.points[A],sn);h=Math.max(h,Math.abs(E.x),Math.abs(E.y))}let d=[],p=[];td(f,d,p,h);let g=[];for(let A=0,E=d.length;A<E;A++){let u=d[A];g.push([u.x,u.y])}let x=vc(g,p,{exterior:!1}),S=new Map;for(let A=0,E=p.length;A<E;A++){let u=p[A];S.set(`${u[0]}_${u[1]}`,-1),S.set(`${u[1]}_${u[0]}`,-1)}let T=`${l[0]}_${l[1]}_${l[2]}_`;for(let A=0,E=x.length;A<E;A++){let u=x[A],[o,_,s]=u,R=e.getInstance();this._from2D(g[o][0],g[o][1],R.a),this._from2D(g[_][0],g[_][1],R.b),this._from2D(g[s][0],g[s][1],R.c),t.push(R);let w=[];n.push(w);let v=[];i.push(v);for(let y=0;y<3;y++){let M=u[y];v.push(M<3?l[M]:T+M);let b=u[(y+1)%3],C=`${M}_${b}`;if(S.has(C)){let P=S.get(C);P!==-1&&(w.push(P),n[P].push(A))}else{let P=`${b}_${M}`;S.set(P,A)}}}}reset(){this.trianglePool.clear(),this.linePool.clear(),this.triangles.length=0,this.triangleIndices.length=0,this.triangleConnectivity.length=0,this.constrainedEdges.length=0}};var ed=1e-14,Co=new I,Tc=new I,wc=new I;function fe(m,t=ed){Co.subVectors(m.b,m.a),Tc.subVectors(m.c,m.a),wc.subVectors(m.b,m.c);let e=Co.angleTo(Tc),n=Co.angleTo(wc),i=Math.PI-e-n;return Math.abs(e)<t||Math.abs(n)<t||Math.abs(i)<t||m.a.distanceToSquared(m.b)<t||m.a.distanceToSquared(m.c)<t||m.b.distanceToSquared(m.c)<t}var Ro=1e-10,Mi=1e-10,Ae=new ut,Pt=new ut,Ce=new I,Ec=new I,Ac=new I,zr=new ce,Io=new Ct,Si=class{constructor(){this.trianglePool=new jt(()=>new pt),this.triangles=[],this.normal=new I}initialize(t){this.reset();let{triangles:e,trianglePool:n,normal:i}=this;if(Array.isArray(t))for(let r=0,a=t.length;r<a;r++){let c=t[r];if(r===0)c.getNormal(i);else if(Math.abs(1-c.getNormal(Ce).dot(i))>Ro)throw new Error("Triangle Splitter: Cannot initialize with triangles that have different normals.");let l=n.getInstance();l.copy(c),e.push(l)}else{t.getNormal(i);let r=n.getInstance();r.copy(t),e.push(r)}}splitByTriangle(t,e){let{triangles:n}=this;if(e){for(let r=0,a=n.length;r<a;r++){let c=n[r];c.coplanarCount=0}let i=[t.a,t.b,t.c];for(let r=0;r<3;r++){let a=(r+1)%3,c=i[r],l=i[a];t.getNormal(Ec).normalize(),Ce.subVectors(l,c).normalize(),Ac.crossVectors(Ec,Ce),zr.setFromNormalAndCoplanarPoint(Ac,c),this.splitByPlane(zr,t)}}else t.getPlane(zr),this.splitByPlane(zr,t)}splitByPlane(t,e){let{triangles:n,trianglePool:i}=this;Io.copy(e),Io.needsUpdate=!0;for(let r=0,a=n.length;r<a;r++){let c=n[r];if(!Io.intersectsTriangle(c,Ae,!0))continue;let{a:l,b:f,c:h}=c,d=0,p=-1,g=!1,x=[],S=[],T=[l,f,h];for(let A=0;A<3;A++){let E=(A+1)%3;Ae.start.copy(T[A]),Ae.end.copy(T[E]);let u=t.distanceToPoint(Ae.start),o=t.distanceToPoint(Ae.end);if(Math.abs(u)<Mi&&Math.abs(o)<Mi){g=!0;break}if(u>0?x.push(A):S.push(A),Math.abs(u)<Mi)continue;let _=!!t.intersectLine(Ae,Ce);!_&&Math.abs(o)<Mi&&(Ce.copy(Ae.end),_=!0),_&&!(Ce.distanceTo(Ae.start)<Ro)&&(Ce.distanceTo(Ae.end)<Ro&&(p=A),d===0?Pt.start.copy(Ce):Pt.end.copy(Ce),d++)}if(!g&&d===2&&Pt.distance()>Mi)if(p!==-1){p=(p+1)%3;let A=0;A===p&&(A=(A+1)%3);let E=A+1;E===p&&(E=(E+1)%3);let u=i.getInstance();u.a.copy(T[E]),u.b.copy(Pt.end),u.c.copy(Pt.start),fe(u)||n.push(u),c.a.copy(T[A]),c.b.copy(Pt.start),c.c.copy(Pt.end),fe(c)&&(n.splice(r,1),r--,a--)}else{let A=x.length>=2?S[0]:x[0];if(A===0){let s=Pt.start;Pt.start=Pt.end,Pt.end=s}let E=(A+1)%3,u=(A+2)%3,o=i.getInstance(),_=i.getInstance();T[E].distanceToSquared(Pt.start)<T[u].distanceToSquared(Pt.end)?(o.a.copy(T[E]),o.b.copy(Pt.start),o.c.copy(Pt.end),_.a.copy(T[E]),_.b.copy(T[u]),_.c.copy(Pt.start)):(o.a.copy(T[u]),o.b.copy(Pt.start),o.c.copy(Pt.end),_.a.copy(T[E]),_.b.copy(T[u]),_.c.copy(Pt.end)),c.a.copy(T[A]),c.b.copy(Pt.end),c.c.copy(Pt.start),fe(o)||n.push(o),fe(_)||n.push(_),fe(c)&&(n.splice(r,1),r--,a--)}else d===3&&console.warn("TriangleClipper: Coplanar clip not handled")}}reset(){this.triangles.length=0,this.trianglePool.clear()}};var bi=class{constructor(){this.coplanarSet=new Map,this.intersectionSet=new Map,this.edgeSet=new Map,this.ids=[]}add(t,e,n=!1){let{intersectionSet:i,coplanarSet:r,ids:a}=this;i.has(t)||(i.set(t,[]),a.push(t)),i.get(t).push(e),n&&(r.has(t)||r.set(t,new Set),r.get(t).add(e))}addIntersectionEdge(t,e){let{edgeSet:n}=this;n.has(t)||n.set(t,new Set),n.get(t).add(e)}getIntersectionEdges(t){return this.edgeSet.get(t)||null}};var Po=1e-10,nd=1e-15,id=1e-10,rd=1e-10,Cc=new ut,kn=new ut,Rc=new I,Ic=new I,Pc=new I,Do=new ce,Hn=new I,Vr=new I;function Lc(m,t){m.getNormal(Hn),t.getNormal(Vr);let e=Hn.dot(Vr);if(Math.abs(1-Math.abs(e))>=id)return!1;let n=Hn.dot(m.a),i=Hn.dot(t.a);return Math.abs(n-i)<rd}function Dc(m,t,e,n){let i=0,r=1;m.delta(Rc);let a=[t.a,t.b,t.c];for(let c=0;c<3;c++){let l=a[c],f=a[(c+1)%3];Ic.subVectors(f,l),Pc.crossVectors(e,Ic),Do.setFromNormalAndCoplanarPoint(Pc,l);let h=Do.distanceToPoint(m.start),d=Do.normal.dot(Rc);if(Math.abs(d)<nd){if(h<-Po)return null;continue}let p=-h/d;if(d>0?i=Math.max(i,p):r=Math.min(r,p),i>r+Po)return null}return r-i<Po?null:(m.at(i,n.start),m.at(r,n.end),n)}function Lo(m,t,e){let n=0;m.getNormal(Hn),t.getNormal(Vr);let i=[t.a,t.b,t.c];for(let a=0;a<3;a++){kn.start.copy(i[a]),kn.end.copy(i[(a+1)%3]);let c=Dc(kn,m,Hn,Cc);c!==null&&(n>=e.length&&e.push(new ut),e[n].copy(c),n++)}let r=[m.a,m.b,m.c];for(let a=0;a<3;a++){kn.start.copy(r[a]),kn.end.copy(r[(a+1)%3]);let c=Dc(kn,t,Vr,Cc);c!==null&&(n>=e.length&&e.push(new ut),e[n].copy(c),n++)}return n}var Gn=new me,Uc=new Q,kr=new ut,Uo=[],Hr=new jt(()=>new ut),Wn=-1,Xn=1,Ti=-2,wi=2,qn=0,on=1,Wr=2,Gr=null;function No(m){Gr=m}function Fo(m,t,e=null){m.getMidpoint(Gn.origin),m.getNormal(Gn.direction),e&&(Gn.origin.applyMatrix4(e),Gn.direction.transformDirection(e));let n=t.raycastFirst(Gn,ci);return!!(n&&Gn.direction.dot(n.face.normal)>0)?Wn:Xn}function Bc(m,t){let e=new bi,n=new bi;return Hr.clear(),Uc.copy(m.matrixWorld).invert().multiply(t.matrixWorld),m.geometry.boundsTree.bvhcast(t.geometry.boundsTree,Uc,{intersectsTriangles(i,r,a,c){if(!fe(i)&&!fe(r)){let f=(Lc(i,r)?Lo(i,r,Uo):0)>2;if(f||i.intersectsTriangle(r,kr,!0)){let d=m.geometry.boundsTree.resolveTriangleIndex(a),p=t.geometry.boundsTree.resolveTriangleIndex(c);if(e.add(d,p,f),n.add(p,d,f),f){let g=Lo(i,r,Uo);for(let x=0;x<g;x++){let S=Hr.getInstance().copy(Uo[x]);e.addIntersectionEdge(d,S),n.addIntersectionEdge(p,S)}}else{let g=Hr.getInstance().copy(kr),x=Hr.getInstance().copy(kr);e.addIntersectionEdge(d,g),n.addIntersectionEdge(p,x)}Gr&&(Gr.addEdge(kr),Gr.addIntersectingTriangles(a,i,c,r))}}return!1}}),{aIntersections:e,bIntersections:n}}function Bo(m,t,e=!1){switch(m){case 0:if(t===Xn||t===wi&&!e)return on;break;case 1:if(e){if(t===Wn)return qn}else if(t===Xn||t===Ti)return on;break;case 2:if(e){if(t===Xn||t===Ti)return on}else if(t===Wn)return qn;break;case 4:if(t===Wn)return qn;if(t===Xn)return on;break;case 3:if(t===Wn||t===wi&&!e)return on;break;case 5:if(!e&&(t===Xn||t===Ti))return on;break;case 6:if(!e&&(t===Wn||t===wi))return on;break;default:throw new Error(`Unrecognized CSG operation enum "${m}".`)}return Wr}var Oo=class{constructor(t){this.triangle=new pt().copy(t),this.intersects={}}addTriangle(t,e){this.intersects[t]=new pt().copy(e)}getIntersectArray(){let t=[],{intersects:e}=this;for(let n in e)t.push(e[n]);return t}},Xr=class{constructor(){this.data={}}addTriangleIntersection(t,e,n,i){let{data:r}=this;r[t]||(r[t]=new Oo(e)),r[t].addTriangle(n,i)}getTrianglesAsArray(t=null){let{data:e}=this,n=[];if(t!==null)t in e&&n.push(e[t].triangle);else for(let i in e)n.push(e[i].triangle);return n}getTriangleIndices(){return Object.keys(this.data).map(t=>parseInt(t))}getIntersectionIndices(t){let{data:e}=this;return e[t]?Object.keys(e[t].intersects).map(n=>parseInt(n)):[]}getIntersectionsAsArray(t=null,e=null){let{data:n}=this,i=new Set,r=[],a=c=>{if(n[c])if(e!==null)n[c].intersects[e]&&r.push(n[c].intersects[e]);else{let l=n[c].intersects;for(let f in l)i.has(f)||(i.add(f),r.push(l[f]))}};if(t!==null)a(t);else for(let c in n)a(c);return r}reset(){this.data={}}},qr=class{constructor(){this.enabled=!1,this.triangleIntersectsA=new Xr,this.triangleIntersectsB=new Xr,this.intersectionEdges=[]}addIntersectingTriangles(t,e,n,i){let{triangleIntersectsA:r,triangleIntersectsB:a}=this;r.addTriangleIntersection(t,e,n,i),a.addTriangleIntersection(n,i,t,e)}addEdge(t){this.intersectionEdges.push(t.clone())}reset(){this.triangleIntersectsA.reset(),this.triangleIntersectsB.reset(),this.intersectionEdges=[]}init(){this.enabled&&(this.reset(),No(this))}complete(){this.enabled&&No(null)}};var te=new Q,an=new Q,Wt=new Q,We=new X,de=new pt,cn=new pt,pe=new pt,Ge=new pt,ln=[],xe=[],Yr=new Set,Oc=new I,zc=new I,Vc=new jt(()=>new pt),kc=new I,Zr=[];function Wc(m,t,e,n,i,r={}){let{useGroups:a=!0}=r,{aIntersections:c,bIntersections:l}=Bc(m,t),f=[],h=null,d;return d=a?0:-1,Gc(m,t,c,e,!1,i,d),Hc(m,t,c,e,!1,n,i,d),e.findIndex(g=>g!==6&&g!==5)!==-1&&(i.forEach(g=>g.clearIndexMap()),d=a?m.geometry.groups.length||1:-1,Gc(t,m,l,e,!0,i,d),Hc(t,m,l,e,!0,n,i,d)),i.forEach(g=>g.clearIndexMap()),ln.length=0,{groups:f,materials:h}}function Hc(m,t,e,n,i,r,a,c=0){te.copy(t.matrixWorld).invert().multiply(m.matrixWorld),an.copy(te).invert(),i?Wt.copy(te):Wt.identity();let l=Wt.determinant()<0;We.getNormalMatrix(Wt).multiplyScalar(l?-1:1);let f=m.geometry.groupIndices,h=m.geometry.index,d=m.geometry.attributes.position,p=t.geometry.boundsTree,g=t.geometry.index,x=t.geometry.attributes.position,S=e.ids;for(let T=0,A=S.length;T<A;T++){let E=S[T],u=c===-1?0:f[E]+c,o=3*E,_=o+0,s=o+1,R=o+2;h&&(_=h.getX(_),s=h.getX(s),R=h.getX(R)),de.a.fromBufferAttribute(d,_),de.b.fromBufferAttribute(d,s),de.c.fromBufferAttribute(d,R),i&&(de.a.applyMatrix4(te),de.b.applyMatrix4(te),de.c.applyMatrix4(te)),r.reset(),r.initialize(de,_,s,R),Zr.length=0,Vc.clear(),de.getNormal(zc);let w=e.coplanarSet.get(E);if(w)for(let b of w){let C=3*b,P=C+0,D=C+1,L=C+2;g&&(P=g.getX(P),D=g.getX(D),L=g.getX(L));let U=Vc.getInstance();U.a.fromBufferAttribute(x,P),U.b.fromBufferAttribute(x,D),U.c.fromBufferAttribute(x,L),i||(U.a.applyMatrix4(an),U.b.applyMatrix4(an),U.c.applyMatrix4(an)),Zr.push(U)}if(r.addConstraintEdge){let b=e.getIntersectionEdges(E);if(b)for(let C of b)r.addConstraintEdge(C);r.triangulate()}else{let C=e.intersectionSet.get(E);for(let P=0,D=C.length;P<D;P++){let L=C[P],U=w&&w.has(L),F=3*L,N=F+0,k=F+1,O=F+2;g&&(N=g.getX(N),k=g.getX(k),O=g.getX(O)),cn.a.fromBufferAttribute(x,N),cn.b.fromBufferAttribute(x,k),cn.c.fromBufferAttribute(x,O),i||(cn.a.applyMatrix4(an),cn.b.applyMatrix4(an),cn.c.applyMatrix4(an)),r.splitByTriangle(cn,U)}}let{triangles:v,triangleIndices:y=[],triangleConnectivity:M=[]}=r;for(let b=0,C=a.length;b<C;b++)a[b].initInterpolatedAttributeData(m.geometry,Wt,We,_,s,R);Yr.clear();for(let b=0,C=v.length;b<C;b++){if(Yr.has(b))continue;let P=v[b],D=i?null:te,L=null;P.getMidpoint(Oc);for(let U=0,F=Zr.length;U<F;U++){let N=Zr[U];if(N.containsPoint(Oc)){N.getNormal(kc),L=zc.dot(kc)>0?wi:Ti;break}}L===null&&(L=Fo(P,p,D)),ln.length=0,xe.length=0;for(let U=0,F=n.length;U<F;U++){let N=Bo(n[U],L,i);N!==Wr&&(ln.push(N),xe.push(a[U]))}if(xe.length!==0){let U=[b];for(;U.length>0;){let F=U.pop();if(Yr.has(F))continue;Yr.add(F);let N=y[F],k=null,O=null,z=null;N&&(k=N[0],O=N[1],z=N[2]);let V=v[F];de.getBarycoord(V.a,Ge.a),de.getBarycoord(V.b,Ge.b),de.getBarycoord(V.c,Ge.c);for(let H=0,G=xe.length;H<G;H++){let lt=xe[H],Z=ln[H]===qn,W=l!==Z;lt.appendInterpolatedAttributeData(u,Ge.a,k,W),W?(lt.appendInterpolatedAttributeData(u,Ge.c,z,W),lt.appendInterpolatedAttributeData(u,Ge.b,O,W)):(lt.appendInterpolatedAttributeData(u,Ge.b,O,W),lt.appendInterpolatedAttributeData(u,Ge.c,z,W))}}}}}return S.length}function Gc(m,t,e,n,i,r,a=0){te.copy(t.matrixWorld).invert().multiply(m.matrixWorld),i?Wt.copy(te):Wt.identity();let c=Wt.determinant()<0;We.getNormalMatrix(Wt).multiplyScalar(c?-1:1);let l=t.geometry.boundsTree,f=m.geometry.groupIndices,h=m.geometry.index,p=m.geometry.attributes.position,g=[],x=m.geometry.halfEdges,S=new Set(e.ids),T=Vn(m.geometry);for(let A=0;A<T&&S.size!==T;A++){if(S.has(A))continue;S.add(A),g.push(A);let E=3*A,u=E+0,o=E+1,_=E+2;h&&(u=h.getX(u),o=h.getX(o),_=h.getX(_)),pe.a.fromBufferAttribute(p,u),pe.b.fromBufferAttribute(p,o),pe.c.fromBufferAttribute(p,_),i&&(pe.a.applyMatrix4(te),pe.b.applyMatrix4(te),pe.c.applyMatrix4(te));let s=Fo(pe,l,i?null:te);ln.length=0,xe.length=0;for(let R=0,w=n.length;R<w;R++){let v=Bo(n[R],s,i);v!==Wr&&(ln.push(v),xe.push(r[R]))}for(;g.length>0;){let R=g.pop();for(let w=0;w<3;w++){let v=x.getSiblingTriangleIndex(R,w);v!==-1&&!S.has(v)&&(g.push(v),S.add(v))}if(xe.length!==0){let w=3*R,v=w+0,y=w+1,M=w+2;h&&(v=h.getX(v),y=h.getX(y),M=h.getX(M));let b=a===-1?0:f[R]+a;if(pe.a.fromBufferAttribute(p,v),pe.b.fromBufferAttribute(p,y),pe.c.fromBufferAttribute(p,M),!fe(pe))for(let C=0,P=xe.length;C<P;C++){let D=xe[C],F=ln[C]===qn!==c;D.appendIndexFromGeometry(m.geometry,Wt,We,b,v,F),F?(D.appendIndexFromGeometry(m.geometry,Wt,We,b,M,F),D.appendIndexFromGeometry(m.geometry,Wt,We,b,y,F)):(D.appendIndexFromGeometry(m.geometry,Wt,We,b,y,F),D.appendIndexFromGeometry(m.geometry,Wt,We,b,M,F))}}}}}function ad(m){return m=~~m,m+4-m%4}var $r=class{constructor(t,e=500){this.expansionFactor=1.5,this.type=t,this.length=0,this.array=null,this.setSize(e)}setType(t){if(t===this.type)return;if(this.length!==0)throw new Error("TypeBackedArray: Cannot change the type while there is used data in the buffer.");let e=this.array.buffer;this.array=new t(e),this.type=t}setSize(t){if(this.array&&t===this.array.length)return;let e=this.type,n=Ur()?SharedArrayBuffer:ArrayBuffer,i=new e(new n(ad(t*e.BYTES_PER_ELEMENT)));this.array&&i.set(this.array,0),this.array=i}expand(){let{array:t,expansionFactor:e}=this;this.setSize(t.length*e)}push(...t){let{array:e,length:n}=this;n+t.length>e.length&&(this.expand(),e=this.array);for(let i=0,r=t.length;i<r;i++)e[n+i]=t[i];this.length+=t.length}clear(){this.length=0}};var Xt=new I,zo=new I,Vo=new I,ko=new I,Jr=new Zt,cd=new Zt,ld=new Zt,hd=new Zt;function ud(m,t,e,n,i,r=!1,a=!1){return i.set(0,0,0,0).addScaledVector(m,n.x).addScaledVector(t,n.y).addScaledVector(e,n.z),r&&i.normalize(),a&&i.multiplyScalar(-1),i}function Xc(m,t,e){switch(t){case 1:e.push(m.x);break;case 2:e.push(m.x,m.y);break;case 3:e.push(m.x,m.y,m.z);break;case 4:e.push(m.x,m.y,m.z,m.w);break}}var Ei=class extends $r{get count(){return this.length/this.itemSize}constructor(...t){super(...t),this.itemSize=1,this.normalized=!1}},Kr=class{constructor(){this.attributeData={},this.groupIndices=[],this.forwardIndexMap=new Map,this.invertedIndexMap=new Map,this.interpolatedFields={}}initFromGeometry(t,e){this.clear();let{attributeData:n}=this,i=t.attributes;for(let r=0,a=e.length;r<a;r++){let c=e[r],l=i[c],f=l.array.constructor;n[c]||(n[c]=new Ei(f)),n[c].setType(f),n[c].itemSize=l.itemSize,n[c].normalized=l.normalized}for(let r in n.attributes)e.includes(r)||n.delete(r)}initInterpolatedAttributeData(t,e,n,i,r,a){let{attributeData:c,interpolatedFields:l}=this,{attributes:f}=t;for(let h in c){let d=f[h];if(!d)throw new Error(`CSG Operations: Attribute ${h} not available on geometry.`);let p,g,x;if(h==="position"?(p=zo.fromBufferAttribute(d,i).applyMatrix4(e),g=Vo.fromBufferAttribute(d,r).applyMatrix4(e),x=ko.fromBufferAttribute(d,a).applyMatrix4(e)):h==="normal"?(p=zo.fromBufferAttribute(d,i).applyNormalMatrix(n),g=Vo.fromBufferAttribute(d,r).applyNormalMatrix(n),x=ko.fromBufferAttribute(d,a).applyNormalMatrix(n)):h==="tangent"?(p=zo.fromBufferAttribute(d,i).transformDirection(e),g=Vo.fromBufferAttribute(d,r).transformDirection(e),x=ko.fromBufferAttribute(d,a).transformDirection(e)):(p=cd.fromBufferAttribute(d,i),g=ld.fromBufferAttribute(d,r),x=hd.fromBufferAttribute(d,a)),!l[h])l[h]=[p.clone(),g.clone(),x.clone()];else{let S=l[h];S[0].copy(p),S[1].copy(g),S[2].copy(x)}}}appendInterpolatedAttributeData(t,e,n=null,i=!1){let{groupIndices:r,attributeData:a,interpolatedFields:c,forwardIndexMap:l,invertedIndexMap:f}=this;for(;r.length<=t;)r.push(new Ei(Uint32Array));let h=i?f:l,d=r[t];if(n!==null&&h.has(n))d.push(h.get(n));else{h.set(n,a.position.count),d.push(a.position.count);for(let p in c){let g=a[p],x=p==="normal"||p==="tangent",S=i&&x,T=g.itemSize,[A,E,u]=c[p];ud(A,E,u,e,Jr,x,S),Xc(Jr,T,g)}}}appendIndexFromGeometry(t,e,n,i,r,a=!1){let{groupIndices:c,attributeData:l,forwardIndexMap:f,invertedIndexMap:h}=this;for(;c.length<=i;)c.push(new Ei(Uint32Array));let d=a?h:f,p=c[i];if(r!==null&&d.has(r))p.push(d.get(r));else{d.set(r,l.position.count),p.push(l.position.count);let{attributes:g}=t;for(let x in l){let S=l[x],T=g[x];if(!T)throw new Error(`CSG Operations: Attribute ${x} not available on geometry.`);let A=T.itemSize;x==="position"?(Xt.fromBufferAttribute(T,r).applyMatrix4(e),S.push(Xt.x,Xt.y,Xt.z)):x==="normal"?(Xt.fromBufferAttribute(T,r).applyNormalMatrix(n),a&&Xt.multiplyScalar(-1),S.push(Xt.x,Xt.y,Xt.z)):x==="tangent"?(Xt.fromBufferAttribute(T,r).transformDirection(e),a&&Xt.multiplyScalar(-1),S.push(Xt.x,Xt.y,Xt.z)):(Jr.fromBufferAttribute(T,r),Xc(Jr,A,S))}}}buildGeometry(t,e){let n=!1,{groupIndices:i,attributeData:r}=this,{attributes:a,index:c}=t;for(let h in r){let d=r[h],{type:p,itemSize:g,normalized:x,length:S,count:T}=d,A=d.array.buffer,E=a[h];(!E||E.count<T||E.array.type!==p)&&(E=new Ot(new p(S),g,x),t.setAttribute(h,E),n=!0),E.array.set(new p(A,0,S),0),E.needsUpdate=!0}let l=i.reduce((h,d)=>d.count+h,0);(!t.index||c.count<l||c.array.type!==Uint32Array)&&(t.setIndex(new Ot(new Uint32Array(l),1)),n=!0),t.clearGroups();let f=0;for(let h=0,d=Math.min(e.length,i.length);h<d;h++){let{index:p,materialIndex:g}=e[h],{count:x}=i[p],S=i[p].array.buffer;x!==0&&(t.index.array.set(new Uint32Array(S,0,x),f),t.addGroup(f,x,g),f+=x)}t.setDrawRange(0,f),t.boundsTree=null,t.boundingBox=null,t.boundingSphere=null,n&&t.dispose()}clearIndexMap(){this.forwardIndexMap.clear(),this.invertedIndexMap.clear()}clear(){let{groupIndices:t,attributeData:e}=this;this.interpolatedFields={};for(let n in e)e[n].clear();t.forEach(n=>{n.clear()}),this.clearIndexMap()}};function qc(m,t){for(let e in m.attributes)t.includes(e)||(m.deleteAttribute(e),m.dispose());return m}function Yc(m,t){let e=[];for(let n=0,i=m.length;n<i;n++){let r=m[n],a=t[r.materialIndex];e.push({...r,materialIndex:t.indexOf(a)})}return e}function Zc(m,t){let e=[],n=new Map;for(let i=0,r=m.length;i<r;i++){let a=m[i];n.has(a.materialIndex)||(n.set(a.materialIndex,e.length),e.push(t[a.materialIndex])),a.materialIndex=n.get(a.materialIndex)}return e}function $c(m){for(let t=0;t<m.length-1;t++){let e=m[t],n=m[t+1];if(e.materialIndex===n.materialIndex){let i=e.start,r=n.start+n.count;n.start=i,n.count=r-i,m.splice(t,1),t--}}}function Ho(m,t){let e=t;return Array.isArray(t)||(e=[],m.forEach(n=>{e[n.materialIndex]=t})),e}var Qr=class{get useCDTClipping(){return this.triangleSplitter instanceof vi}set useCDTClipping(t){t!==this.useCDTClipping&&(this.triangleSplitter=t?new vi:new Si)}constructor(){this.triangleSplitter=new Si,this.geometryBuilders=[],this.attributes=["position","uv","normal"],this.useGroups=!0,this.consolidateGroups=!0,this.removeUnusedMaterials=!0,this.debug=new qr}getGroupRanges(t){return!this.useGroups||t.groups.length===0?[{start:0,count:1/0,materialIndex:0}]:t.groups.map(n=>({...n}))}evaluate(t,e,n,i=new rn){let r=!0;if(Array.isArray(n)||(n=[n]),Array.isArray(i)||(i=[i],r=!1),i.length!==n.length)throw new Error("Evaluator: operations and target array passed as different sizes.");t.prepareGeometry(),e.prepareGeometry();let{triangleSplitter:a,geometryBuilders:c,attributes:l,useGroups:f,consolidateGroups:h,removeUnusedMaterials:d,debug:p}=this;for(;c.length<i.length;)c.push(new Kr);i.forEach((u,o)=>{c[o].initFromGeometry(t.geometry,l),qc(u.geometry,l)}),p.init(),Wc(t,e,n,a,c,{useGroups:f}),p.complete();let g=this.getGroupRanges(t.geometry),x=Ho(g,t.material),S=this.getGroupRanges(e.geometry),T=Ho(S,e.material);S.forEach(u=>u.materialIndex+=x.length);let A=[...x,...T],E=[...g,...S].map((u,o)=>({...u,index:o}));return f?f&&h&&(E=Yc(E,A),E.sort((u,o)=>u.materialIndex-o.materialIndex)):E=[{start:0,count:1/0,index:0,materialIndex:0}],i.forEach((u,o)=>{let _=u.geometry;c[o].buildGeometry(_,E),t.matrixWorld.decompose(u.position,u.quaternion,u.scale),u.updateMatrix(),u.matrixWorld.copy(t.matrixWorld),f?(u.material=A,h&&$c(_.groups),d&&(u.material=Zc(_.groups,A))):u.material=A[0]}),r?i:i[0]}evaluateHierarchy(t,e=new rn){t.updateMatrixWorld(!0);let n=(r,a)=>{let c=r.children;for(let l=0,f=c.length;l<f;l++){let h=c[l];h.isOperationGroup?n(h,a):a(h)}},i=r=>{let a=r.children,c=!1;for(let f=0,h=a.length;f<h;f++){let d=a[f];c=i(d)||c}let l=r.isDirty();if(l&&r.markUpdated(),c&&!r.isOperationGroup){let f;return n(r,h=>{f?f=this.evaluate(f,h,h.operation):f=this.evaluate(r,h,h.operation)}),r._cachedGeometry=f.geometry,r._cachedMaterials=f.material,!0}else return c||l};return i(t),e.geometry=t._cachedGeometry,e.material=t._cachedMaterials,e}reset(){this.triangleSplitter.reset()}};function Jc(m,t,e,n=()=>{}){let i=new Set,r=d=>(i.add(d),d);function a(d,p){r(d),d.getAttribute("normal")||d.computeVertexNormals(),d.getAttribute("color")||d.setAttribute("color",new Gt(Array.from({length:d.getAttribute("position").count},()=>p).flat(),3));let g=new rn(d);return g.updateMatrixWorld(!0),g}let c=r(new Ne);c.setAttribute("position",new Gt(m.vertices.flat(),3)),c.setIndex(m.triangles.flat()),c.setAttribute("color",new Gt((m.colors||m.vertices.map(()=>[.48,.63,.85])).flat(),3));let l=new Qr;l.attributes=["position","normal","color"],l.useGroups=!1;let f=a(c),h=[];try{for(let y=0;y<t.length;y++){n(`Y\xFCzey kesimi: ${y+1} / ${t.length} alan\u2026`);let M=t[y],{u:b,v:C,n:P,center:D,width:L,height:U,shape:F}=M,{depth:N,offset:k=0}=M;if(![L,U,N].every(V=>Number.isFinite(V)&&V>0))throw new Error("Alan ve i\u015Flem derinli\u011Fi s\u0131f\u0131rdan b\xFCy\xFCk olmal\u0131.");if(e==="cut"){let V=1/0,H=-1/0;for(let G of m.vertices){let lt=G.reduce((Y,Z,W)=>Y+(Z-D[W])*P[W],0);V=Math.min(V,lt),H=Math.max(H,lt)}k=V-.01,N=H-V+.02}h.push({...M,depth:N,offset:k});let O=F==="circle"?new oi(L/2,L/2,N,64).rotateX(Math.PI/2):new si(L,U,N),z=a(O,m.colors?.[0]||[.48,.63,.85]);z.matrixAutoUpdate=!1,z.matrix.makeBasis(new I(...b),new I(...C),new I(...P)),z.matrix.setPosition(...D.map((V,H)=>V+P[H]*((e==="fill"?k-N:k)+N/2))),z.updateMatrixWorld(!0),f=l.evaluate(f,z,e==="fill"?0:1),r(f.geometry)}let d=f.geometry.getAttribute("position"),p=f.geometry.getAttribute("color"),g=f.geometry.index,x=[],S=[],T=[];for(let y=0;y<d.count;y++)x.push([d.getX(y),d.getY(y),d.getZ(y)]),S.push([p.getX(y),p.getY(y),p.getZ(y)]);let A=Math.min(g?g.count:d.count,f.geometry.drawRange.count);for(let y=0;y<A;y+=3)T.push([0,1,2].map(M=>g?g.getX(y+M):y+M));let E=(y,M)=>{let b=y.map(L=>L.map((U,F)=>U-M.center[F])),C=[M.u,M.v,M.n].map(L=>b.map(U=>U.reduce((F,N,k)=>F+N*L[k],0))),P=[-M.width/2,-M.height/2,e==="fill"?M.offset-M.depth:M.offset],D=[M.width/2,M.height/2,e==="fill"?M.offset:M.offset+M.depth];return C.some((L,U)=>Math.max(...L)<P[U]-1e-5||Math.min(...L)>D[U]+1e-5)},u=y=>h.every(M=>E(y,M)),o=T.filter(y=>!u(y.map(M=>x[M]))),_=x.length;for(let y=0;y<m.vertices.length;y++)x.push(m.vertices[y]),S.push(m.colors?.[y]||[.48,.63,.85]);for(let y of m.triangles)u(y.map(M=>m.vertices[M]))&&o.push(y.map(M=>M+_));if(!o.length){if(e==="cut")return null;throw new Error("Se\xE7im modelin tamam\u0131n\u0131 kald\u0131r\u0131yor. Alan\u0131 k\xFC\xE7\xFClt\xFCn.")}let s=new Map,R=[],w=[],v=o.map(y=>y.map(M=>(s.has(M)||(s.set(M,R.length),R.push(x[M]),w.push(S[M])),s.get(M))));return{...m,vertices:R,colors:w,triangles:v}}finally{for(let d of i)d.boundsTree=null,d.dispose()}}function Kc(m,t){if(!t||m.triangles.length!==t.triangles.length)return!1;let e=(i,r)=>r.map(a=>i.vertices[a].map(Math.fround).join(",")).sort().join("|"),n=new Map;for(let i of m.triangles){let r=e(m,i);n.set(r,(n.get(r)||0)+1)}for(let i of t.triangles){let r=e(t,i),a=n.get(r)||0;if(!a)return!1;a===1?n.delete(r):n.set(r,a-1)}return!n.size}var Qc;self.onmessage=async({data:m})=>{try{Qc??=dd({locateFile:()=>new URL("./manifold/manifold.wasm",import.meta.url).href}).then(r=>(r.setup(),r));let t=await Qc,e=r=>self.postMessage({progress:r});e("Geometri kontrol ediliyor\u2026");let n,i;try{n=m.mode==="split"?Yo(t,m.part):[qo(t,m.part,m.areas,m.mode)].filter(Boolean)}catch(r){if(m.mode==="split"||!r.message.includes("kapal\u0131 ve tutarl\u0131"))throw r;e("Kaynak a\u011F kusurlu. Se\xE7ili b\xF6lge y\xFCzey \xFCzerinden d\xFCzenleniyor\u2026"),n=[Jc(m.part,m.areas,m.mode,e)].filter(Boolean),i="Kaynak dosyada a\xE7\u0131k/\xE7ak\u0131\u015Fan y\xFCzeyler var. Y\xFCzey i\u015Flemi uyguland\u0131; sonu\xE7 kapal\u0131 kat\u0131 olarak do\u011Frulanamad\u0131. Yazd\u0131rmadan \xF6nce dilimleyicide a\u011F kontrol\xFC yap\u0131n."}if(m.mode!=="split"&&n.length===1&&Kc(m.part,n[0]))throw new Error("Model de\u011Fi\u015Fmedi: se\xE7ili hacim kald\u0131r\u0131lacak y\xFCzeyle kesi\u015Fmiyor. Referans\u0131, y\xF6n\xFC ve i\u015Flem derinli\u011Fini kontrol edin.");self.postMessage({parts:n,warning:i})}catch(t){self.postMessage({error:t.message||String(t)})}};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
