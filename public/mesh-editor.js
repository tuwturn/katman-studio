var dn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ui={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Mu=0,vc=1,Su=2;var _c=1,bu=2,qn=3,oi=0,Je=1,Ke=2,fi=0,$i=1,xc=2,yc=3,Mc=4,wu=5,Ai=100,Eu=101,Tu=102,Au=103,Cu=104,Ru=200,Iu=201,Pu=202,Du=203,Wo=204,Xo=205,Lu=206,Uu=207,Fu=208,Nu=209,Ou=210,Bu=211,zu=212,ku=213,Vu=214,xa=0,ya=1,Ma=2,Ji=3,Sa=4,ba=5,wa=6,Ea=7,Ta=0,Hu=1,Gu=2,di=0,Wu=1,Xu=2,qu=3,Aa=4,Yu=5,Zu=6,$u=7;var Sc=300,ir=301,rr=302,Ca=303,Ra=304,qs=306,ai=1e3,In=1001,Ki=1002,$e=1003,Ju=1004;var Ys=1005;var Ge=1006,Ia=1007;var Ln=1008;var Un=1009,bc=1010,wc=1011,Xr=1012,Pa=1013,Fi=1014,Yn=1015,qr=1016,Da=1017,La=1018,Yr=1020,Ec=35902,Tc=35899,Ac=1021,Cc=1022,wn=1023,Dr=1026,Zr=1027,Rc=1028,Ua=1029,Ic=1030,Fa=1031;var Na=1033,Zs=33776,$s=33777,Js=33778,Ks=33779,Oa=35840,Ba=35841,za=35842,ka=35843,Va=36196,Ha=37492,Ga=37496,Wa=37808,Xa=37809,qa=37810,Ya=37811,Za=37812,$a=37813,Ja=37814,Ka=37815,ja=37816,Qa=37817,tl=37818,el=37819,nl=37820,il=37821,rl=36492,sl=36494,ol=36495,al=36283,ll=36284,cl=36285,hl=36286;var ms=2300,qo=2301,Go=2302,nc=2400,ic=2401,rc=2402;var Ku=3200,ju=3201;var ul=0,Qu=1,pi="",Re="srgb",ji="srgb-linear",gs="linear",ae="srgb";var Zi=7680;var sc=519,tf=512,ef=513,nf=514,Pc=515,rf=516,sf=517,of=518,af=519,oc=35044;var Dc="300 es",Pn=2e3,vs=2001;var Hn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let r=n[t];if(r!==void 0){let s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}},ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hh=1234567,us=Math.PI/180,Lr=180/Math.PI;function sr(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ke[i&255]+ke[i>>8&255]+ke[i>>16&255]+ke[i>>24&255]+"-"+ke[t&255]+ke[t>>8&255]+"-"+ke[t>>16&15|64]+ke[t>>24&255]+"-"+ke[e&63|128]+ke[e>>8&255]+"-"+ke[e>>16&255]+ke[e>>24&255]+ke[n&255]+ke[n>>8&255]+ke[n>>16&255]+ke[n>>24&255]).toLowerCase()}function Jt(i,t,e){return Math.max(t,Math.min(e,i))}function Lc(i,t){return(i%t+t)%t}function Hd(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function Gd(i,t,e){return i!==t?(e-i)/(t-i):0}function fs(i,t,e){return(1-e)*i+e*t}function Wd(i,t,e,n){return fs(i,t,1-Math.exp(-e*n))}function Xd(i,t=1){return t-Math.abs(Lc(i,t*2)-t)}function qd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Yd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Zd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function $d(i,t){return i+Math.random()*(t-i)}function Jd(i){return i*(.5-Math.random())}function Kd(i){i!==void 0&&(Hh=i);let t=Hh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function jd(i){return i*us}function Qd(i){return i*Lr}function tp(i){return(i&i-1)===0&&i!==0}function ep(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function np(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ip(i,t,e,n,r){let s=Math.cos,o=Math.sin,a=s(e/2),c=o(e/2),l=s((t+n)/2),h=o((t+n)/2),u=s((t-n)/2),f=o((t-n)/2),d=s((n-t)/2),g=o((n-t)/2);switch(r){case"XYX":i.set(a*h,c*u,c*f,a*l);break;case"YZY":i.set(c*f,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*f,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*d,a*l);break;case"YXY":i.set(c*d,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*d,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Rr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ye(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Uc={DEG2RAD:us,RAD2DEG:Lr,generateUUID:sr,clamp:Jt,euclideanModulo:Lc,mapLinear:Hd,inverseLerp:Gd,lerp:fs,damp:Wd,pingpong:Xd,smoothstep:qd,smootherstep:Yd,randInt:Zd,randFloat:$d,randFloatSpread:Jd,seededRandom:Kd,degToRad:jd,radToDeg:Qd,isPowerOfTwo:tp,ceilPowerOfTwo:ep,floorPowerOfTwo:np,setQuaternionFromProperEuler:ip,normalize:Ye,denormalize:Rr},ut=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Mn=class{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let c=n[r+0],l=n[r+1],h=n[r+2],u=n[r+3],f=s[o+0],d=s[o+1],g=s[o+2],v=s[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=v;return}if(u!==v||c!==f||l!==d||h!==g){let m=1-a,p=c*f+l*d+h*g+u*v,A=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){let P=Math.sqrt(E),T=Math.atan2(P,p*A);m=Math.sin(m*T)/P,a=Math.sin(a*T)/P}let x=a*A;if(c=c*m+f*x,l=l*m+d*x,h=h*m+g*x,u=u*m+v*x,m===1-a){let P=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=P,l*=P,h*=P,u*=P}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,r,s,o){let a=n[r],c=n[r+1],l=n[r+2],h=n[r+3],u=s[o],f=s[o+1],d=s[o+2],g=s[o+3];return t[e]=a*g+h*u+c*d-l*f,t[e+1]=c*g+h*f+l*u-a*d,t[e+2]=l*g+h*d+a*f-c*u,t[e+3]=h*g-a*u-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(r/2),u=a(s/2),f=c(n/2),d=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"YZX":this._x=f*h*u+l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u-f*d*g;break;case"XZY":this._x=f*h*u-l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(s-l)*d,this._z=(o-r)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+l)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(s-l)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-r)/d,this._x=(s+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Jt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+r*l-s*c,this._y=r*h+o*c+s*a-n*l,this._z=s*h+o*l+n*c-r*a,this._w=o*h-n*a-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,r=this._y,s=this._z,o=this._w,a=o*t._w+n*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*r+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=r*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Gh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Gh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*r-a*n),h=2*(a*e-s*r),u=2*(s*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-s*u,this.z=r+c*u+s*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Rl.copy(this).projectOnVector(t),this.sub(Rl)}reflect(t){return this.sub(Rl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Rl=new L,Gh=new Mn,Zt=class i{constructor(t,e,n,r,s,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,c,l)}set(t,e,n,r,s,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=r,h[2]=a,h[3]=e,h[4]=s,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],v=r[0],m=r[3],p=r[6],A=r[1],E=r[4],x=r[7],P=r[2],T=r[5],D=r[8];return s[0]=o*v+a*A+c*P,s[3]=o*m+a*E+c*T,s[6]=o*p+a*x+c*D,s[1]=l*v+h*A+u*P,s[4]=l*m+h*E+u*T,s[7]=l*p+h*x+u*D,s[2]=f*v+d*A+g*P,s[5]=f*m+d*E+g*T,s[8]=f*p+d*x+g*D,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*s*h+n*a*c+r*s*l-r*o*c}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,f=a*c-h*s,d=l*s-o*c,g=e*u+n*f+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return t[0]=u*v,t[1]=(r*l-h*n)*v,t[2]=(a*n-r*o)*v,t[3]=f*v,t[4]=(h*e-r*c)*v,t[5]=(r*s-a*e)*v,t[6]=d*v,t[7]=(n*c-l*e)*v,t[8]=(o*e-n*s)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-r*l,r*c,-r*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Il.makeScale(t,e)),this}rotate(t){return this.premultiply(Il.makeRotation(-t)),this}translate(t,e){return this.premultiply(Il.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Il=new Zt;function Fc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ur(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function lf(){let i=Ur("canvas");return i.style.display="block",i}var Wh={};function Fr(i){i in Wh||(Wh[i]=!0,console.warn(i))}function cf(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}var Xh=new Zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qh=new Zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function rp(){let i={enabled:!0,workingColorSpace:ji,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ae&&(r.r=si(r.r),r.g=si(r.g),r.b=si(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ae&&(r.r=Ir(r.r),r.g=Ir(r.g),r.b=Ir(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===pi?gs:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Fr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Fr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ji]:{primaries:t,whitePoint:n,transfer:gs,toXYZ:Xh,fromXYZ:qh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Re},outputColorSpaceConfig:{drawingBufferColorSpace:Re}},[Re]:{primaries:t,whitePoint:n,transfer:ae,toXYZ:Xh,fromXYZ:qh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Re}}}),i}var Qt=rp();function si(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ir(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var gr,Yo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{gr===void 0&&(gr=Ur("canvas")),gr.width=t.width,gr.height=t.height;let r=gr.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=gr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ur("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=si(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(si(e[n]/255)*255):e[n]=si(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},sp=0,Nr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sp++}),this.uuid=sr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Pl(r[o].image)):s.push(Pl(r[o]))}else s=Pl(r);n.url=s}return e||(t.images[this.uuid]=n),n}};function Pl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Yo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var op=0,Dl=new L,en=class i extends Hn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=In,r=In,s=Ge,o=Ln,a=wn,c=Un,l=i.DEFAULT_ANISOTROPY,h=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:op++}),this.uuid=sr(),this.name="",this.source=new Nr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Dl).x}get height(){return this.source.getSize(Dl).y}get depth(){return this.source.getSize(Dl).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Sc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ai:t.x=t.x-Math.floor(t.x);break;case In:t.x=t.x<0?0:1;break;case Ki:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ai:t.y=t.y-Math.floor(t.y);break;case In:t.y=t.y<0?0:1;break;case Ki:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=Sc;en.DEFAULT_ANISOTROPY=1;var ye=class i{constructor(t=0,e=0,n=0,r=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s,c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(l+1)/2,x=(d+1)/2,P=(p+1)/2,T=(h+f)/4,D=(u+v)/4,U=(g+m)/4;return E>x&&E>P?E<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(E),r=T/n,s=D/n):x>P?x<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),n=T/r,s=U/r):P<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),n=D/s,r=U/s),this.set(n,r,s,e),this}let A=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(A)<.001&&(A=1),this.x=(m-g)/A,this.y=(u-v)/A,this.z=(f-h)/A,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this.w=Jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this.w=Jt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Zo=class extends Hn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ge,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ye(0,0,t,e),this.scissorTest=!1,this.viewport=new ye(0,0,t,e);let r={width:t,height:e,depth:n.depth},s=new en(r);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:Ge,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let r=Object.assign({},t.textures[e].image);this.textures[e].source=new Nr(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Gn=class extends Zo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},_s=class extends en{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=$e,this.minFilter=$e,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var $o=class extends en{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=$e,this.minFilter=$e,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Wn=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(An.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(An.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=An.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,An):An.fromBufferAttribute(s,o),An.applyMatrix4(t.matrixWorld),this.expandByPoint(An);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),vo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),vo.copy(n.boundingBox)),vo.applyMatrix4(t.matrixWorld),this.union(vo)}let r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,An),An.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ss),_o.subVectors(this.max,ss),vr.subVectors(t.a,ss),_r.subVectors(t.b,ss),xr.subVectors(t.c,ss),yi.subVectors(_r,vr),Mi.subVectors(xr,_r),Wi.subVectors(vr,xr);let e=[0,-yi.z,yi.y,0,-Mi.z,Mi.y,0,-Wi.z,Wi.y,yi.z,0,-yi.x,Mi.z,0,-Mi.x,Wi.z,0,-Wi.x,-yi.y,yi.x,0,-Mi.y,Mi.x,0,-Wi.y,Wi.x,0];return!Ll(e,vr,_r,xr,_o)||(e=[1,0,0,0,1,0,0,0,1],!Ll(e,vr,_r,xr,_o))?!1:(xo.crossVectors(yi,Mi),e=[xo.x,xo.y,xo.z],Ll(e,vr,_r,xr,_o))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,An).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(An).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Qn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Qn=[new L,new L,new L,new L,new L,new L,new L,new L],An=new L,vo=new Wn,vr=new L,_r=new L,xr=new L,yi=new L,Mi=new L,Wi=new L,ss=new L,_o=new L,xo=new L,Xi=new L;function Ll(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Xi.fromArray(i,s);let a=r.x*Math.abs(Xi.x)+r.y*Math.abs(Xi.y)+r.z*Math.abs(Xi.z),c=t.dot(Xi),l=e.dot(Xi),h=n.dot(Xi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var ap=new Wn,os=new L,Ul=new L,Ci=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):ap.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;os.subVectors(t,this.center);let e=os.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(os,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ul.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(os.copy(t.center).add(Ul)),this.expandByPoint(os.copy(t.center).sub(Ul))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},ti=new L,Fl=new L,yo=new L,Si=new L,Nl=new L,Mo=new L,Ol=new L,li=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ti)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ti.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ti.copy(this.origin).addScaledVector(this.direction,e),ti.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Fl.copy(t).add(e).multiplyScalar(.5),yo.copy(e).sub(t).normalize(),Si.copy(this.origin).sub(Fl);let s=t.distanceTo(e)*.5,o=-this.direction.dot(yo),a=Si.dot(this.direction),c=-Si.dot(yo),l=Si.lengthSq(),h=Math.abs(1-o*o),u,f,d,g;if(h>0)if(u=o*c-a,f=o*a-c,g=s*h,u>=0)if(f>=-g)if(f<=g){let v=1/h;u*=v,f*=v,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-o*s+a)),f=u>0?-s:Math.min(Math.max(-s,-c),s),d=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-s,-c),s),d=f*(f+2*c)+l):(u=Math.max(0,-(o*s+a)),f=u>0?s:Math.min(Math.max(-s,-c),s),d=-u*u+f*(f+2*c)+l);else f=o>0?-s:s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Fl).addScaledVector(yo,f),d}intersectSphere(t,e){ti.subVectors(t.center,this.origin);let n=ti.dot(this.direction),r=ti.dot(ti)-n*n,s=t.radius*t.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,r=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,r=(t.min.x-f.x)*l),h>=0?(s=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(s=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,ti)!==null}intersectTriangle(t,e,n,r,s){Nl.subVectors(e,t),Mo.subVectors(n,t),Ol.crossVectors(Nl,Mo);let o=this.direction.dot(Ol),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Si.subVectors(this.origin,t);let c=a*this.direction.dot(Mo.crossVectors(Si,Mo));if(c<0)return null;let l=a*this.direction.dot(Nl.cross(Si));if(l<0||c+l>o)return null;let h=-a*Si.dot(Ol);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ee=class i{constructor(t,e,n,r,s,o,a,c,l,h,u,f,d,g,v,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,c,l,h,u,f,d,g,v,m)}set(t,e,n,r,s,o,a,c,l,h,u,f,d,g,v,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,r=1/yr.setFromMatrixColumn(t,0).length(),s=1/yr.setFromMatrixColumn(t,1).length(),o=1/yr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let f=o*h,d=o*u,g=a*h,v=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=d+g*l,e[5]=f-v*l,e[9]=-a*c,e[2]=v-f*l,e[6]=g+d*l,e[10]=o*c}else if(t.order==="YXZ"){let f=c*h,d=c*u,g=l*h,v=l*u;e[0]=f+v*a,e[4]=g*a-d,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=v+f*a,e[10]=o*c}else if(t.order==="ZXY"){let f=c*h,d=c*u,g=l*h,v=l*u;e[0]=f-v*a,e[4]=-o*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=v-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let f=o*h,d=o*u,g=a*h,v=a*u;e[0]=c*h,e[4]=g*l-d,e[8]=f*l+v,e[1]=c*u,e[5]=v*l+f,e[9]=d*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let f=o*c,d=o*l,g=a*c,v=a*l;e[0]=c*h,e[4]=v-f*u,e[8]=g*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=d*u+g,e[10]=f-v*u}else if(t.order==="XZY"){let f=o*c,d=o*l,g=a*c,v=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+v,e[5]=o*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*h,e[10]=v*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(lp,t,cp)}lookAt(t,e,n){let r=this.elements;return ln.subVectors(t,e),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),bi.crossVectors(n,ln),bi.lengthSq()===0&&(Math.abs(n.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),bi.crossVectors(n,ln)),bi.normalize(),So.crossVectors(ln,bi),r[0]=bi.x,r[4]=So.x,r[8]=ln.x,r[1]=bi.y,r[5]=So.y,r[9]=ln.y,r[2]=bi.z,r[6]=So.z,r[10]=ln.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],v=n[6],m=n[10],p=n[14],A=n[3],E=n[7],x=n[11],P=n[15],T=r[0],D=r[4],U=r[8],y=r[12],M=r[1],I=r[5],B=r[9],J=r[13],K=r[2],j=r[6],W=r[10],it=r[14],Z=r[3],at=r[7],_t=r[11],xt=r[15];return s[0]=o*T+a*M+c*K+l*Z,s[4]=o*D+a*I+c*j+l*at,s[8]=o*U+a*B+c*W+l*_t,s[12]=o*y+a*J+c*it+l*xt,s[1]=h*T+u*M+f*K+d*Z,s[5]=h*D+u*I+f*j+d*at,s[9]=h*U+u*B+f*W+d*_t,s[13]=h*y+u*J+f*it+d*xt,s[2]=g*T+v*M+m*K+p*Z,s[6]=g*D+v*I+m*j+p*at,s[10]=g*U+v*B+m*W+p*_t,s[14]=g*y+v*J+m*it+p*xt,s[3]=A*T+E*M+x*K+P*Z,s[7]=A*D+E*I+x*j+P*at,s[11]=A*U+E*B+x*W+P*_t,s[15]=A*y+E*J+x*it+P*xt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],v=t[7],m=t[11],p=t[15];return g*(+s*c*u-r*l*u-s*a*f+n*l*f+r*a*d-n*c*d)+v*(+e*c*d-e*l*f+s*o*f-r*o*d+r*l*h-s*c*h)+m*(+e*l*u-e*a*d-s*o*u+n*o*d+s*a*h-n*l*h)+p*(-r*a*h-e*c*u+e*a*f+r*o*u-n*o*f+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],v=t[13],m=t[14],p=t[15],A=u*m*l-v*f*l+v*c*d-a*m*d-u*c*p+a*f*p,E=g*f*l-h*m*l-g*c*d+o*m*d+h*c*p-o*f*p,x=h*v*l-g*u*l+g*a*d-o*v*d-h*a*p+o*u*p,P=g*u*c-h*v*c-g*a*f+o*v*f+h*a*m-o*u*m,T=e*A+n*E+r*x+s*P;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/T;return t[0]=A*D,t[1]=(v*f*s-u*m*s-v*r*d+n*m*d+u*r*p-n*f*p)*D,t[2]=(a*m*s-v*c*s+v*r*l-n*m*l-a*r*p+n*c*p)*D,t[3]=(u*c*s-a*f*s-u*r*l+n*f*l+a*r*d-n*c*d)*D,t[4]=E*D,t[5]=(h*m*s-g*f*s+g*r*d-e*m*d-h*r*p+e*f*p)*D,t[6]=(g*c*s-o*m*s-g*r*l+e*m*l+o*r*p-e*c*p)*D,t[7]=(o*f*s-h*c*s+h*r*l-e*f*l-o*r*d+e*c*d)*D,t[8]=x*D,t[9]=(g*u*s-h*v*s-g*n*d+e*v*d+h*n*p-e*u*p)*D,t[10]=(o*v*s-g*a*s+g*n*l-e*v*l-o*n*p+e*a*p)*D,t[11]=(h*a*s-o*u*s-h*n*l+e*u*l+o*n*d-e*a*d)*D,t[12]=P*D,t[13]=(h*v*r-g*u*r+g*n*f-e*v*f-h*n*m+e*u*m)*D,t[14]=(g*a*r-o*v*r-g*n*c+e*v*c+o*n*m-e*a*m)*D,t[15]=(o*u*r-h*a*r+h*n*c-e*u*c-o*n*f+e*a*f)*D,this}scale(t){let e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,c=t.z,l=s*o,h=s*a;return this.set(l*o+n,l*a-r*c,l*c+r*a,0,l*a+r*c,h*a+n,h*c-r*o,0,l*c-r*a,h*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){let r=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,h=o+o,u=a+a,f=s*l,d=s*h,g=s*u,v=o*h,m=o*u,p=a*u,A=c*l,E=c*h,x=c*u,P=n.x,T=n.y,D=n.z;return r[0]=(1-(v+p))*P,r[1]=(d+x)*P,r[2]=(g-E)*P,r[3]=0,r[4]=(d-x)*T,r[5]=(1-(f+p))*T,r[6]=(m+A)*T,r[7]=0,r[8]=(g+E)*D,r[9]=(m-A)*D,r[10]=(1-(f+v))*D,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){let r=this.elements,s=yr.set(r[0],r[1],r[2]).length(),o=yr.set(r[4],r[5],r[6]).length(),a=yr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Cn.copy(this);let l=1/s,h=1/o,u=1/a;return Cn.elements[0]*=l,Cn.elements[1]*=l,Cn.elements[2]*=l,Cn.elements[4]*=h,Cn.elements[5]*=h,Cn.elements[6]*=h,Cn.elements[8]*=u,Cn.elements[9]*=u,Cn.elements[10]*=u,e.setFromRotationMatrix(Cn),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,r,s,o,a=Pn,c=!1){let l=this.elements,h=2*s/(e-t),u=2*s/(n-r),f=(e+t)/(e-t),d=(n+r)/(n-r),g,v;if(c)g=s/(o-s),v=o*s/(o-s);else if(a===Pn)g=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===vs)g=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=Pn,c=!1){let l=this.elements,h=2/(e-t),u=2/(n-r),f=-(e+t)/(e-t),d=-(n+r)/(n-r),g,v;if(c)g=1/(o-s),v=o/(o-s);else if(a===Pn)g=-2/(o-s),v=-(o+s)/(o-s);else if(a===vs)g=-1/(o-s),v=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},yr=new L,Cn=new ee,lp=new L(0,0,0),cp=new L(1,1,1),bi=new L,So=new L,ln=new L,Yh=new ee,Zh=new Mn,Sn=class i{constructor(t=0,e=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let r=t.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],h=r[9],u=r[2],f=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(Jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Jt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Jt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Yh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Yh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Zh.setFromEuler(this),this.setFromQuaternion(Zh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Sn.DEFAULT_ORDER="XYZ";var Or=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},hp=0,$h=new L,Mr=new Mn,ei=new ee,bo=new L,as=new L,up=new L,fp=new Mn,Jh=new L(1,0,0),Kh=new L(0,1,0),jh=new L(0,0,1),Qh={type:"added"},dp={type:"removed"},Sr={type:"childadded",child:null},Bl={type:"childremoved",child:null},Ne=class i extends Hn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=sr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new L,e=new Sn,n=new Mn,r=new L(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ee},normalMatrix:{value:new Zt}}),this.matrix=new ee,this.matrixWorld=new ee,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Or,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Mr.setFromAxisAngle(t,e),this.quaternion.multiply(Mr),this}rotateOnWorldAxis(t,e){return Mr.setFromAxisAngle(t,e),this.quaternion.premultiply(Mr),this}rotateX(t){return this.rotateOnAxis(Jh,t)}rotateY(t){return this.rotateOnAxis(Kh,t)}rotateZ(t){return this.rotateOnAxis(jh,t)}translateOnAxis(t,e){return $h.copy(t).applyQuaternion(this.quaternion),this.position.add($h.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Jh,t)}translateY(t){return this.translateOnAxis(Kh,t)}translateZ(t){return this.translateOnAxis(jh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?bo.copy(t):bo.set(t,e,n);let r=this.parent;this.updateWorldMatrix(!0,!1),as.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(as,bo,this.up):ei.lookAt(bo,as,this.up),this.quaternion.setFromRotationMatrix(ei),r&&(ei.extractRotation(r.matrixWorld),Mr.setFromRotationMatrix(ei),this.quaternion.premultiply(Mr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Qh),Sr.child=t,this.dispatchEvent(Sr),Sr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(dp),Bl.child=t,this.dispatchEvent(Bl),Bl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ei.multiply(t.parent.matrixWorld)),t.applyMatrix4(ei),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Qh),Sr.child=t,this.dispatchEvent(Sr),Sr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(as,t,up),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(as,fp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];s(t.shapes,u)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];r.animations.push(s(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let r=t.children[n];this.add(r.clone())}return this}};Ne.DEFAULT_UP=new L(0,1,0);Ne.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Rn=new L,ni=new L,zl=new L,ii=new L,br=new L,wr=new L,tu=new L,kl=new L,Vl=new L,Hl=new L,Gl=new ye,Wl=new ye,Xl=new ye,Ti=class i{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Rn.subVectors(t,e),r.cross(Rn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Rn.subVectors(r,e),ni.subVectors(n,e),zl.subVectors(t,e);let o=Rn.dot(Rn),a=Rn.dot(ni),c=Rn.dot(zl),l=ni.dot(ni),h=ni.dot(zl),u=o*l-a*a;if(u===0)return s.set(0,0,0),null;let f=1/u,d=(l*c-a*h)*f,g=(o*h-a*c)*f;return s.set(1-d-g,g,d)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,ii)===null?!1:ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getInterpolation(t,e,n,r,s,o,a,c){return this.getBarycoord(t,e,n,r,ii)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,ii.x),c.addScaledVector(o,ii.y),c.addScaledVector(a,ii.z),c)}static getInterpolatedAttribute(t,e,n,r,s,o){return Gl.setScalar(0),Wl.setScalar(0),Xl.setScalar(0),Gl.fromBufferAttribute(t,e),Wl.fromBufferAttribute(t,n),Xl.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(Gl,s.x),o.addScaledVector(Wl,s.y),o.addScaledVector(Xl,s.z),o}static isFrontFacing(t,e,n,r){return Rn.subVectors(n,e),ni.subVectors(t,e),Rn.cross(ni).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Rn.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),Rn.cross(ni).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return i.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,r=this.b,s=this.c,o,a;br.subVectors(r,n),wr.subVectors(s,n),kl.subVectors(t,n);let c=br.dot(kl),l=wr.dot(kl);if(c<=0&&l<=0)return e.copy(n);Vl.subVectors(t,r);let h=br.dot(Vl),u=wr.dot(Vl);if(h>=0&&u<=h)return e.copy(r);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(br,o);Hl.subVectors(t,s);let d=br.dot(Hl),g=wr.dot(Hl);if(g>=0&&d<=g)return e.copy(s);let v=d*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(wr,a);let m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return tu.subVectors(s,r),a=(u-h)/(u-h+(d-g)),e.copy(r).addScaledVector(tu,a);let p=1/(m+v+f);return o=v*p,a=f*p,e.copy(n).addScaledVector(br,o).addScaledVector(wr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},hf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wi={h:0,s:0,l:0},wo={h:0,s:0,l:0};function ql(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Vt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Re){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Qt.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=Qt.workingColorSpace){if(t=Lc(t,1),e=Jt(e,0,1),n=Jt(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=ql(o,s,t+1/3),this.g=ql(o,s,t),this.b=ql(o,s,t-1/3)}return Qt.colorSpaceToWorking(this,r),this}setStyle(t,e=Re){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Re){let n=hf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=si(t.r),this.g=si(t.g),this.b=si(t.b),this}copyLinearToSRGB(t){return this.r=Ir(t.r),this.g=Ir(t.g),this.b=Ir(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Re){return Qt.workingToColorSpace(Ve.copy(this),t),Math.round(Jt(Ve.r*255,0,255))*65536+Math.round(Jt(Ve.g*255,0,255))*256+Math.round(Jt(Ve.b*255,0,255))}getHexString(t=Re){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.workingToColorSpace(Ve.copy(this),e);let n=Ve.r,r=Ve.g,s=Ve.b,o=Math.max(n,r,s),a=Math.min(n,r,s),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(r-s)/u+(r<s?6:0);break;case r:c=(s-n)/u+2;break;case s:c=(n-r)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Qt.workingColorSpace){return Qt.workingToColorSpace(Ve.copy(this),e),t.r=Ve.r,t.g=Ve.g,t.b=Ve.b,t}getStyle(t=Re){Qt.workingToColorSpace(Ve.copy(this),t);let e=Ve.r,n=Ve.g,r=Ve.b;return t!==Re?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(wi),this.setHSL(wi.h+t,wi.s+e,wi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(wi),t.getHSL(wo);let n=fs(wi.h,wo.h,e),r=fs(wi.s,wo.s,e),s=fs(wi.l,wo.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ve=new Vt;Vt.NAMES=hf;var pp=0,nn=class extends Hn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pp++}),this.uuid=sr(),this.name="",this.type="Material",this.blending=$i,this.side=oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wo,this.blendDst=Xo,this.blendEquation=Ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=Ji,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zi,this.stencilZFail=Zi,this.stencilZPass=Zi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==$i&&(n.blending=this.blending),this.side!==oi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Wo&&(n.blendSrc=this.blendSrc),this.blendDst!==Xo&&(n.blendDst=this.blendDst),this.blendEquation!==Ai&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ji&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Zi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Zi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(e){let s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},ci=class extends nn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=Ta,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Te=new L,Eo=new ut,mp=0,Ae=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:mp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=oc,this.updateRanges=[],this.gpuType=Yn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Eo.fromBufferAttribute(this,e),Eo.applyMatrix3(t),this.setXY(e,Eo.x,Eo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix3(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix4(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyNormalMatrix(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.transformDirection(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Rr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ye(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Rr(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Rr(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Rr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Rr(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ye(e,this.array),n=Ye(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Ye(e,this.array),n=Ye(n,this.array),r=Ye(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=Ye(e,this.array),n=Ye(n,this.array),r=Ye(r,this.array),s=Ye(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==oc&&(t.usage=this.usage),t}};var xs=class extends Ae{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ys=class extends Ae{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Yt=class extends Ae{constructor(t,e,n){super(new Float32Array(t),e,n)}},gp=0,yn=new ee,Yl=new Ne,Er=new L,cn=new Wn,ls=new Wn,Fe=new L,oe=class i extends Hn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gp++}),this.uuid=sr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Fc(t)?ys:xs)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Zt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return yn.makeRotationFromQuaternion(t),this.applyMatrix4(yn),this}rotateX(t){return yn.makeRotationX(t),this.applyMatrix4(yn),this}rotateY(t){return yn.makeRotationY(t),this.applyMatrix4(yn),this}rotateZ(t){return yn.makeRotationZ(t),this.applyMatrix4(yn),this}translate(t,e,n){return yn.makeTranslation(t,e,n),this.applyMatrix4(yn),this}scale(t,e,n){return yn.makeScale(t,e,n),this.applyMatrix4(yn),this}lookAt(t){return Yl.lookAt(t),Yl.updateMatrix(),this.applyMatrix4(Yl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Er).negate(),this.translate(Er.x,Er.y,Er.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let r=0,s=t.length;r<s;r++){let o=t[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Yt(n,3))}else{let n=Math.min(t.length,e.count);for(let r=0;r<n;r++){let s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){let s=e[n];cn.setFromBufferAttribute(s),this.morphTargetsRelative?(Fe.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Fe),Fe.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Fe)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ci);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let n=this.boundingSphere.center;if(cn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];ls.setFromBufferAttribute(a),this.morphTargetsRelative?(Fe.addVectors(cn.min,ls.min),cn.expandByPoint(Fe),Fe.addVectors(cn.max,ls.max),cn.expandByPoint(Fe)):(cn.expandByPoint(ls.min),cn.expandByPoint(ls.max))}cn.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)Fe.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Fe));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Fe.fromBufferAttribute(a,l),c&&(Er.fromBufferAttribute(t,l),Fe.add(Er)),r=Math.max(r,n.distanceToSquared(Fe))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ae(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let U=0;U<n.count;U++)a[U]=new L,c[U]=new L;let l=new L,h=new L,u=new L,f=new ut,d=new ut,g=new ut,v=new L,m=new L;function p(U,y,M){l.fromBufferAttribute(n,U),h.fromBufferAttribute(n,y),u.fromBufferAttribute(n,M),f.fromBufferAttribute(s,U),d.fromBufferAttribute(s,y),g.fromBufferAttribute(s,M),h.sub(l),u.sub(l),d.sub(f),g.sub(f);let I=1/(d.x*g.y-g.x*d.y);isFinite(I)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(I),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(I),a[U].add(v),a[y].add(v),a[M].add(v),c[U].add(m),c[y].add(m),c[M].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let U=0,y=A.length;U<y;++U){let M=A[U],I=M.start,B=M.count;for(let J=I,K=I+B;J<K;J+=3)p(t.getX(J+0),t.getX(J+1),t.getX(J+2))}let E=new L,x=new L,P=new L,T=new L;function D(U){P.fromBufferAttribute(r,U),T.copy(P);let y=a[U];E.copy(y),E.sub(P.multiplyScalar(P.dot(y))).normalize(),x.crossVectors(T,y);let I=x.dot(c[U])<0?-1:1;o.setXYZW(U,E.x,E.y,E.z,I)}for(let U=0,y=A.length;U<y;++U){let M=A[U],I=M.start,B=M.count;for(let J=I,K=I+B;J<K;J+=3)D(t.getX(J+0)),D(t.getX(J+1)),D(t.getX(J+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ae(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let r=new L,s=new L,o=new L,a=new L,c=new L,l=new L,h=new L,u=new L;if(t)for(let f=0,d=t.count;f<d;f+=3){let g=t.getX(f+0),v=t.getX(f+1),m=t.getX(f+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Fe.fromBufferAttribute(t,e),Fe.normalize(),t.setXYZ(e,Fe.x,Fe.y,Fe.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h),d=0,g=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?d=c[v]*a.data.stride+a.offset:d=c[v]*h;for(let p=0;p<h;p++)f[g++]=l[d++]}return new Ae(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=t(c,n);e.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let h=0,u=l.length;h<u;h++){let f=l[h],d=t(f,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let d=l[u];h.push(d.toJSON(t.data))}h.length>0&&(r[c]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let r=t.attributes;for(let l in r){let h=r[l];this.setAttribute(l,h.clone(e))}let s=t.morphAttributes;for(let l in s){let h=[],u=s[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},eu=new ee,qi=new li,To=new Ci,nu=new L,Ao=new L,Co=new L,Ro=new L,Zl=new L,Io=new L,iu=new L,Po=new L,ue=class extends Ne{constructor(t=new oe,e=new ci){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);let a=this.morphTargetInfluences;if(s&&a){Io.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=a[c],u=s[c];h!==0&&(Zl.fromBufferAttribute(u,t),o?Io.addScaledVector(Zl,h):Io.addScaledVector(Zl.sub(e),h))}e.add(Io)}return e}raycast(t,e){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),To.copy(n.boundingSphere),To.applyMatrix4(s),qi.copy(t.ray).recast(t.near),!(To.containsPoint(qi.origin)===!1&&(qi.intersectSphere(To,nu)===null||qi.origin.distanceToSquared(nu)>(t.far-t.near)**2))&&(eu.copy(s).invert(),qi.copy(t.ray).applyMatrix4(eu),!(n.boundingBox!==null&&qi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,qi)))}_computeIntersections(t,e,n){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){let m=f[g],p=o[m.materialIndex],A=Math.max(m.start,d.start),E=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let x=A,P=E;x<P;x+=3){let T=a.getX(x),D=a.getX(x+1),U=a.getX(x+2);r=Do(this,p,t,n,l,h,u,T,D,U),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{let g=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){let A=a.getX(m),E=a.getX(m+1),x=a.getX(m+2);r=Do(this,o,t,n,l,h,u,A,E,x),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){let m=f[g],p=o[m.materialIndex],A=Math.max(m.start,d.start),E=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let x=A,P=E;x<P;x+=3){let T=x,D=x+1,U=x+2;r=Do(this,p,t,n,l,h,u,T,D,U),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{let g=Math.max(0,d.start),v=Math.min(c.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){let A=m,E=m+1,x=m+2;r=Do(this,o,t,n,l,h,u,A,E,x),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}};function vp(i,t,e,n,r,s,o,a){let c;if(t.side===Je?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,t.side===oi,a),c===null)return null;Po.copy(a),Po.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Po);return l<e.near||l>e.far?null:{distance:l,point:Po.clone(),object:i}}function Do(i,t,e,n,r,s,o,a,c,l){i.getVertexPosition(a,Ao),i.getVertexPosition(c,Co),i.getVertexPosition(l,Ro);let h=vp(i,t,e,n,Ao,Co,Ro,iu);if(h){let u=new L;Ti.getBarycoord(iu,Ao,Co,Ro,u),r&&(h.uv=Ti.getInterpolatedAttribute(r,a,c,l,u,new ut)),s&&(h.uv1=Ti.getInterpolatedAttribute(s,a,c,l,u,new ut)),o&&(h.normal=Ti.getInterpolatedAttribute(o,a,c,l,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new L,materialIndex:0};Ti.getNormal(Ao,Co,Ro,f.normal),h.face=f,h.barycoord=u}return h}var Ri=class i extends oe{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,r,o,2),g("x","z","y",1,-1,t,n,-e,r,o,3),g("x","y","z",1,-1,t,e,n,r,s,4),g("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new Yt(l,3)),this.setAttribute("normal",new Yt(h,3)),this.setAttribute("uv",new Yt(u,2));function g(v,m,p,A,E,x,P,T,D,U,y){let M=x/D,I=P/U,B=x/2,J=P/2,K=T/2,j=D+1,W=U+1,it=0,Z=0,at=new L;for(let _t=0;_t<W;_t++){let xt=_t*I-J;for(let Ft=0;Ft<j;Ft++){let Nt=Ft*M-B;at[v]=Nt*A,at[m]=xt*E,at[p]=K,l.push(at.x,at.y,at.z),at[v]=0,at[m]=0,at[p]=T>0?1:-1,h.push(at.x,at.y,at.z),u.push(Ft/D),u.push(1-_t/U),it+=1}}for(let _t=0;_t<U;_t++)for(let xt=0;xt<D;xt++){let Ft=f+xt+j*_t,Nt=f+xt+j*(_t+1),Ht=f+(xt+1)+j*(_t+1),Ct=f+(xt+1)+j*_t;c.push(Ft,Nt,Ct),c.push(Nt,Ht,Ct),Z+=6}a.addGroup(d,Z,y),d+=Z,f+=it}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function or(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function We(i){let t={};for(let e=0;e<i.length;e++){let n=or(i[e]);for(let r in n)t[r]=n[r]}return t}function _p(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Nc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}var uf={clone:or,merge:We},xp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,hn=class extends nn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xp,this.fragmentShader=yp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=or(t.uniforms),this.uniformsGroups=_p(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Ms=class extends Ne{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ee,this.projectionMatrix=new ee,this.projectionMatrixInverse=new ee,this.coordinateSystem=Pn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ei=new L,ru=new ut,su=new ut,He=class extends Ms{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Lr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(us*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Lr*2*Math.atan(Math.tan(us*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ei.x,Ei.y).multiplyScalar(-t/Ei.z),Ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ei.x,Ei.y).multiplyScalar(-t/Ei.z)}getViewSize(t,e){return this.getViewBounds(t,ru,su),e.subVectors(su,ru)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(us*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,e-=o.offsetY*n/l,r*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Tr=-90,Ar=1,Jo=class extends Ne{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new He(Tr,Ar,t,e);r.layers=this.layers,this.add(r);let s=new He(Tr,Ar,t,e);s.layers=this.layers,this.add(s);let o=new He(Tr,Ar,t,e);o.layers=this.layers,this.add(o);let a=new He(Tr,Ar,t,e);a.layers=this.layers,this.add(a);let c=new He(Tr,Ar,t,e);c.layers=this.layers,this.add(c);let l=new He(Tr,Ar,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,c]=e;for(let l of e)this.remove(l);if(t===Pn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===vs)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,o),t.setRenderTarget(n,2,r),t.render(e,a),t.setRenderTarget(n,3,r),t.render(e,c),t.setRenderTarget(n,4,r),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,r),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ss=class extends en{constructor(t=[],e=ir,n,r,s,o,a,c,l,h){super(t,e,n,r,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ko=class extends Gn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Ss(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ri(5,5,5),s=new hn({name:"CubemapFromEquirect",uniforms:or(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Je,blending:fi});s.uniforms.tEquirect.value=e;let o=new ue(r,s),a=e.minFilter;return e.minFilter===Ln&&(e.minFilter=Ge),new Jo(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}},Oe=class extends Ne{constructor(){super(),this.isGroup=!0,this.type="Group"}},Mp={type:"move"},Br=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Oe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Oe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Oe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let v of t.hand.values()){let m=e.getJointPose(v,n),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Mp)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Oe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}};var bs=class extends Ne{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sn,this.environmentIntensity=1,this.environmentRotation=new Sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var $l=new L,Sp=new L,bp=new Zt,Ze=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let r=$l.subVectors(n,e).cross(Sp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta($l),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||bp.getNormalMatrix(t),r=this.coplanarPoint($l).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Yi=new Ci,wp=new ut(.5,.5),Lo=new L,zr=class{constructor(t=new Ze,e=new Ze,n=new Ze,r=new Ze,s=new Ze,o=new Ze){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Pn,n=!1){let r=this.planes,s=t.elements,o=s[0],a=s[1],c=s[2],l=s[3],h=s[4],u=s[5],f=s[6],d=s[7],g=s[8],v=s[9],m=s[10],p=s[11],A=s[12],E=s[13],x=s[14],P=s[15];if(r[0].setComponents(l-o,d-h,p-g,P-A).normalize(),r[1].setComponents(l+o,d+h,p+g,P+A).normalize(),r[2].setComponents(l+a,d+u,p+v,P+E).normalize(),r[3].setComponents(l-a,d-u,p-v,P-E).normalize(),n)r[4].setComponents(c,f,m,x).normalize(),r[5].setComponents(l-c,d-f,p-m,P-x).normalize();else if(r[4].setComponents(l-c,d-f,p-m,P-x).normalize(),e===Pn)r[5].setComponents(l+c,d+f,p+m,P+x).normalize();else if(e===vs)r[5].setComponents(c,f,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Yi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Yi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Yi)}intersectsSprite(t){Yi.center.set(0,0,0);let e=wp.distanceTo(t.center);return Yi.radius=.7071067811865476+e,Yi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Yi)}intersectsSphere(t){let e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let r=e[n];if(Lo.x=r.normal.x>0?t.max.x:t.min.x,Lo.y=r.normal.y>0?t.max.y:t.min.y,Lo.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Lo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var bn=class extends nn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Vt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},jo=new L,Qo=new L,ou=new ee,cs=new li,Uo=new Ci,Jl=new L,au=new L,Qi=class extends Ne{constructor(t=new oe,e=new bn){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)jo.fromBufferAttribute(e,r-1),Qo.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=jo.distanceTo(Qo);t.setAttribute("lineDistance",new Yt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Uo.copy(n.boundingSphere),Uo.applyMatrix4(r),Uo.radius+=s,t.ray.intersectsSphere(Uo)===!1)return;ou.copy(r).invert(),cs.copy(t.ray).applyMatrix4(ou);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let v=d,m=g-1;v<m;v+=l){let p=h.getX(v),A=h.getX(v+1),E=Fo(this,t,cs,c,p,A,v);E&&e.push(E)}if(this.isLineLoop){let v=h.getX(g-1),m=h.getX(d),p=Fo(this,t,cs,c,v,m,g-1);p&&e.push(p)}}else{let d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let v=d,m=g-1;v<m;v+=l){let p=Fo(this,t,cs,c,v,v+1,v);p&&e.push(p)}if(this.isLineLoop){let v=Fo(this,t,cs,c,g-1,d,g-1);v&&e.push(v)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Fo(i,t,e,n,r,s,o){let a=i.geometry.attributes.position;if(jo.fromBufferAttribute(a,r),Qo.fromBufferAttribute(a,s),e.distanceSqToSegment(jo,Qo,Jl,au)>n)return;Jl.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Jl);if(!(l<t.near||l>t.far))return{distance:l,point:au.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var lu=new L,cu=new L,tr=class extends Qi{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let r=0,s=e.count;r<s;r+=2)lu.fromBufferAttribute(e,r),cu.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+lu.distanceTo(cu);t.setAttribute("lineDistance",new Yt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Dn=class extends nn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},hu=new ee,ac=new li,No=new Ci,Oo=new L,hi=class extends Ne{constructor(t=new oe,e=new Dn){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),No.copy(n.boundingSphere),No.applyMatrix4(r),No.radius+=s,t.ray.intersectsSphere(No)===!1)return;hu.copy(r).invert(),ac.copy(t.ray).applyMatrix4(hu);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let g=f,v=d;g<v;g++){let m=l.getX(g);Oo.fromBufferAttribute(u,m),uu(Oo,m,c,r,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=f,v=d;g<v;g++)Oo.fromBufferAttribute(u,g),uu(Oo,g,c,r,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function uu(i,t,e,n,r,s,o){let a=ac.distanceSqToPoint(i);if(a<e){let c=new L;ac.closestPointToPoint(i,c),c.applyMatrix4(n);let l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var ws=class extends en{constructor(t,e,n=Fi,r,s,o,a=$e,c=$e,l,h=Dr,u=1){if(h!==Dr&&h!==Zr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:u};super(f,r,s,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Nr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Es=class extends en{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var kr=class i extends oe{constructor(t=1,e=1,n=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};let l=this;r=Math.floor(r),s=Math.floor(s);let h=[],u=[],f=[],d=[],g=0,v=[],m=n/2,p=0;A(),o===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new Yt(u,3)),this.setAttribute("normal",new Yt(f,3)),this.setAttribute("uv",new Yt(d,2));function A(){let x=new L,P=new L,T=0,D=(e-t)/n;for(let U=0;U<=s;U++){let y=[],M=U/s,I=M*(e-t)+t;for(let B=0;B<=r;B++){let J=B/r,K=J*c+a,j=Math.sin(K),W=Math.cos(K);P.x=I*j,P.y=-M*n+m,P.z=I*W,u.push(P.x,P.y,P.z),x.set(j,D,W).normalize(),f.push(x.x,x.y,x.z),d.push(J,1-M),y.push(g++)}v.push(y)}for(let U=0;U<r;U++)for(let y=0;y<s;y++){let M=v[y][U],I=v[y+1][U],B=v[y+1][U+1],J=v[y][U+1];(t>0||y!==0)&&(h.push(M,I,J),T+=3),(e>0||y!==s-1)&&(h.push(I,B,J),T+=3)}l.addGroup(p,T,0),p+=T}function E(x){let P=g,T=new ut,D=new L,U=0,y=x===!0?t:e,M=x===!0?1:-1;for(let B=1;B<=r;B++)u.push(0,m*M,0),f.push(0,M,0),d.push(.5,.5),g++;let I=g;for(let B=0;B<=r;B++){let K=B/r*c+a,j=Math.cos(K),W=Math.sin(K);D.x=y*W,D.y=m*M,D.z=y*j,u.push(D.x,D.y,D.z),f.push(0,M,0),T.x=j*.5+.5,T.y=W*.5*M+.5,d.push(T.x,T.y),g++}for(let B=0;B<r;B++){let J=P+B,K=I+B;x===!0?h.push(K,K+1,J):h.push(K+1,K,J),U+=3}l.addGroup(p,U,x===!0?1:2),p+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ta=class i extends kr{constructor(t=1,e=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var un=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,r=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),r=0,s=n.length,o;e?o=e:o=t*n[s-1];let a=0,c=s-1,l;for(;a<=c;)if(r=Math.floor(a+(c-a)/2),l=n[r]-o,l<0)a=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,n[r]===o)return r/(s-1);let h=n[r],f=n[r+1]-h,d=(o-h)/f;return(r+d)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);let o=this.getPoint(r),a=this.getPoint(s),c=e||(o.isVector2?new ut:new L);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new L,r=[],s=[],o=[],a=new L,c=new ee;for(let d=0;d<=t;d++){let g=d/t;r[d]=this.getTangentAt(g,new L)}s[0]=new L,o[0]=new L;let l=Number.MAX_VALUE,h=Math.abs(r[0].x),u=Math.abs(r[0].y),f=Math.abs(r[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(r[d-1],r[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Jt(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(c.makeRotationAxis(a,g))}o[d].crossVectors(r[d],s[d])}if(e===!0){let d=Math.acos(Jt(s[0].dot(s[t]),-1,1));d/=t,r[0].dot(a.crossVectors(s[0],s[t]))>0&&(d=-d);for(let g=1;g<=t;g++)s[g].applyMatrix4(c.makeRotationAxis(r[g],d*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Vr=class extends un{constructor(t=0,e=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new ut){let n=e,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);let a=this.aStartAngle+t*s,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ea=class extends Vr{constructor(t,e,n,r,s,o){super(t,e,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Oc(){let i=0,t=0,e=0,n=0;function r(s,o,a,c){i=s,t=a,e=-3*s+3*o-2*a-c,n=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,h,u){let f=(o-s)/l-(a-s)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,d*=h,r(o,a,f,d)},calc:function(s){let o=s*s,a=o*s;return i+t*s+e*o+n*a}}}var Bo=new L,Kl=new Oc,jl=new Oc,Ql=new Oc,na=class extends un{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new L){let n=e,r=this.points,s=r.length,o=(s-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,h;this.closed||a>0?l=r[(a-1)%s]:(Bo.subVectors(r[0],r[1]).add(r[0]),l=Bo);let u=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?h=r[(a+2)%s]:(Bo.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=Bo),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),d),v=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Kl.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,g,v,m),jl.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,g,v,m),Ql.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(Kl.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),jl.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),Ql.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(Kl.calc(c),jl.calc(c),Ql.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(new L().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function fu(i,t,e,n,r){let s=(n-t)*.5,o=(r-e)*.5,a=i*i,c=i*a;return(2*e-2*n+s+o)*c+(-3*e+3*n-2*s-o)*a+s*i+e}function Ep(i,t){let e=1-i;return e*e*t}function Tp(i,t){return 2*(1-i)*i*t}function Ap(i,t){return i*i*t}function ds(i,t,e,n){return Ep(i,t)+Tp(i,e)+Ap(i,n)}function Cp(i,t){let e=1-i;return e*e*e*t}function Rp(i,t){let e=1-i;return 3*e*e*i*t}function Ip(i,t){return 3*(1-i)*i*i*t}function Pp(i,t){return i*i*i*t}function ps(i,t,e,n,r){return Cp(i,t)+Rp(i,e)+Ip(i,n)+Pp(i,r)}var Ts=class extends un{constructor(t=new ut,e=new ut,n=new ut,r=new ut){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new ut){let n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(ps(t,r.x,s.x,o.x,a.x),ps(t,r.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ia=class extends un{constructor(t=new L,e=new L,n=new L,r=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new L){let n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(ps(t,r.x,s.x,o.x,a.x),ps(t,r.y,s.y,o.y,a.y),ps(t,r.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},As=class extends un{constructor(t=new ut,e=new ut){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ut){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ut){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ra=class extends un{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Cs=class extends un{constructor(t=new ut,e=new ut,n=new ut){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ut){let n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(ds(t,r.x,s.x,o.x),ds(t,r.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},sa=class extends un{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){let n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(ds(t,r.x,s.x,o.x),ds(t,r.y,s.y,o.y),ds(t,r.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Rs=class extends un{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ut){let n=e,r=this.points,s=(r.length-1)*t,o=Math.floor(s),a=s-o,c=r[o===0?o:o-1],l=r[o],h=r[o>r.length-2?r.length-1:o+1],u=r[o>r.length-3?r.length-1:o+2];return n.set(fu(a,c.x,l.x,h.x,u.x),fu(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(r.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(new ut().fromArray(r))}return this}},lc=Object.freeze({__proto__:null,ArcCurve:ea,CatmullRomCurve3:na,CubicBezierCurve:Ts,CubicBezierCurve3:ia,EllipseCurve:Vr,LineCurve:As,LineCurve3:ra,QuadraticBezierCurve:Cs,QuadraticBezierCurve3:sa,SplineCurve:Rs}),oa=class extends un{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new lc[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=n){let o=r[s]-n,a=this.curves[s],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,r=this.curves.length;n<r;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let r=0,s=this.curves;r<s.length;r++){let o=s[r],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let r=t.curves[e];this.curves.push(new lc[r.type]().fromJSON(r))}return this}},Is=class extends oa{constructor(t){super(),this.type="Path",this.currentPoint=new ut,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new As(this.currentPoint.clone(),new ut(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,r){let s=new Cs(this.currentPoint.clone(),new ut(t,e),new ut(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(t,e,n,r,s,o){let a=new Ts(this.currentPoint.clone(),new ut(t,e),new ut(n,r),new ut(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Rs(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,r,s,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,r,s,o),this}absarc(t,e,n,r,s,o){return this.absellipse(t,e,n,n,r,s,o),this}ellipse(t,e,n,r,s,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,r,s,o,a,c),this}absellipse(t,e,n,r,s,o,a,c){let l=new Vr(t,e,n,r,s,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Ii=class extends Is{constructor(t){super(t),this.uuid=sr(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,r=this.holes.length;n<r;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let r=t.holes[e];this.holes.push(new Is().fromJSON(r))}return this}};function Dp(i,t,e=2){let n=t&&t.length,r=n?t[0]*e:i.length,s=ff(i,0,r,e,!0),o=[];if(!s||s.next===s.prev)return o;let a,c,l;if(n&&(s=Op(i,t,s,e)),i.length>80*e){a=1/0,c=1/0;let h=-1/0,u=-1/0;for(let f=e;f<r;f+=e){let d=i[f],g=i[f+1];d<a&&(a=d),g<c&&(c=g),d>h&&(h=d),g>u&&(u=g)}l=Math.max(h-a,u-c),l=l!==0?32767/l:0}return Ps(s,o,e,a,c,l,0),o}function ff(i,t,e,n,r){let s;if(r===Zp(i,t,e,n)>0)for(let o=t;o<e;o+=n)s=du(o/n|0,i[o],i[o+1],s);else for(let o=e-n;o>=t;o-=n)s=du(o/n|0,i[o],i[o+1],s);return s&&Hr(s,s.next)&&(Ls(s),s=s.next),s}function er(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Hr(e,e.next)||xe(e.prev,e,e.next)===0)){if(Ls(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ps(i,t,e,n,r,s,o){if(!i)return;!o&&s&&Hp(i,n,r,s);let a=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(s?Up(i,n,r,s):Lp(i)){t.push(c.i,i.i,l.i),Ls(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Fp(er(i),t),Ps(i,t,e,n,r,s,2)):o===2&&Np(i,t,e,n,r,s):Ps(er(i),t,e,n,r,s,1);break}}}function Lp(i){let t=i.prev,e=i,n=i.next;if(xe(t,e,n)>=0)return!1;let r=t.x,s=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=Math.min(r,s,o),u=Math.min(a,c,l),f=Math.max(r,s,o),d=Math.max(a,c,l),g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&hs(r,a,s,c,o,l,g.x,g.y)&&xe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Up(i,t,e,n){let r=i.prev,s=i,o=i.next;if(xe(r,s,o)>=0)return!1;let a=r.x,c=s.x,l=o.x,h=r.y,u=s.y,f=o.y,d=Math.min(a,c,l),g=Math.min(h,u,f),v=Math.max(a,c,l),m=Math.max(h,u,f),p=cc(d,g,t,e,n),A=cc(v,m,t,e,n),E=i.prevZ,x=i.nextZ;for(;E&&E.z>=p&&x&&x.z<=A;){if(E.x>=d&&E.x<=v&&E.y>=g&&E.y<=m&&E!==r&&E!==o&&hs(a,h,c,u,l,f,E.x,E.y)&&xe(E.prev,E,E.next)>=0||(E=E.prevZ,x.x>=d&&x.x<=v&&x.y>=g&&x.y<=m&&x!==r&&x!==o&&hs(a,h,c,u,l,f,x.x,x.y)&&xe(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;E&&E.z>=p;){if(E.x>=d&&E.x<=v&&E.y>=g&&E.y<=m&&E!==r&&E!==o&&hs(a,h,c,u,l,f,E.x,E.y)&&xe(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;x&&x.z<=A;){if(x.x>=d&&x.x<=v&&x.y>=g&&x.y<=m&&x!==r&&x!==o&&hs(a,h,c,u,l,f,x.x,x.y)&&xe(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Fp(i,t){let e=i;do{let n=e.prev,r=e.next.next;!Hr(n,r)&&pf(n,e,e.next,r)&&Ds(n,r)&&Ds(r,n)&&(t.push(n.i,e.i,r.i),Ls(e),Ls(e.next),e=i=r),e=e.next}while(e!==i);return er(e)}function Np(i,t,e,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Xp(o,a)){let c=mf(o,a);o=er(o,o.next),c=er(c,c.next),Ps(o,t,e,n,r,s,0),Ps(c,t,e,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function Op(i,t,e,n){let r=[];for(let s=0,o=t.length;s<o;s++){let a=t[s]*n,c=s<o-1?t[s+1]*n:i.length,l=ff(i,a,c,n,!1);l===l.next&&(l.steiner=!0),r.push(Wp(l))}r.sort(Bp);for(let s=0;s<r.length;s++)e=zp(r[s],e);return e}function Bp(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),r=(t.next.y-t.y)/(t.next.x-t.x);e=n-r}return e}function zp(i,t){let e=kp(i,t);if(!e)return t;let n=mf(e,i);return er(n,n.next),er(e,e.next)}function kp(i,t){let e=t,n=i.x,r=i.y,s=-1/0,o;if(Hr(i,e))return e;do{if(Hr(i,e.next))return e.next;if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){let u=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>s&&(s=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,c=o.x,l=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=c&&n!==e.x&&df(r<l?n:s,r,c,l,r<l?s:n,r,e.x,e.y)){let u=Math.abs(r-e.y)/(n-e.x);Ds(e,i)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&Vp(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function Vp(i,t){return xe(i.prev,i,t.prev)<0&&xe(t.next,i,i.next)<0}function Hp(i,t,e,n){let r=i;do r.z===0&&(r.z=cc(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,Gp(r)}function Gp(i){let t,e=1;do{let n=i,r;i=null;let s=null;for(t=0;n;){t++;let o=n,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(r=n,n=n.nextZ,a--):(r=o,o=o.nextZ,c--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=o}s.nextZ=null,e*=2}while(t>1);return i}function cc(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Wp(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function df(i,t,e,n,r,s,o,a){return(r-o)*(t-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(r-o)*(n-a)}function hs(i,t,e,n,r,s,o,a){return!(i===o&&t===a)&&df(i,t,e,n,r,s,o,a)}function Xp(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!qp(i,t)&&(Ds(i,t)&&Ds(t,i)&&Yp(i,t)&&(xe(i.prev,i,t.prev)||xe(i,t.prev,t))||Hr(i,t)&&xe(i.prev,i,i.next)>0&&xe(t.prev,t,t.next)>0)}function xe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Hr(i,t){return i.x===t.x&&i.y===t.y}function pf(i,t,e,n){let r=ko(xe(i,t,e)),s=ko(xe(i,t,n)),o=ko(xe(e,n,i)),a=ko(xe(e,n,t));return!!(r!==s&&o!==a||r===0&&zo(i,e,t)||s===0&&zo(i,n,t)||o===0&&zo(e,i,n)||a===0&&zo(e,t,n))}function zo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function ko(i){return i>0?1:i<0?-1:0}function qp(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&pf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ds(i,t){return xe(i.prev,i,i.next)<0?xe(i,t,i.next)>=0&&xe(i,i.prev,t)>=0:xe(i,t,i.prev)<0||xe(i,i.next,t)<0}function Yp(i,t){let e=i,n=!1,r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function mf(i,t){let e=hc(i.i,i.x,i.y),n=hc(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function du(i,t,e,n){let r=hc(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Ls(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function hc(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Zp(i,t,e,n){let r=0;for(let s=t,o=e-n;s<e;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}var uc=class{static triangulate(t,e,n=2){return Dp(t,e,n)}},Vn=class i{static area(t){let e=t.length,n=0;for(let r=e-1,s=0;s<e;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],r=[],s=[];pu(t),mu(n,t);let o=t.length;e.forEach(pu);for(let c=0;c<e.length;c++)r.push(o),o+=e[c].length,mu(n,e[c]);let a=uc.triangulate(n,r);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}};function pu(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function mu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Us=class i extends oe{constructor(t=new Ii([new ut(.5,.5),new ut(-.5,.5),new ut(-.5,-.5),new ut(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,r=[],s=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new Yt(r,3)),this.setAttribute("uv",new Yt(s,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,A=e.UVGenerator!==void 0?e.UVGenerator:$p,E,x=!1,P,T,D,U;p&&(E=p.getSpacedPoints(h),x=!0,f=!1,P=p.computeFrenetFrames(h,!1),T=new L,D=new L,U=new L),f||(m=0,d=0,g=0,v=0);let y=a.extractPoints(l),M=y.shape,I=y.holes;if(!Vn.isClockWise(M)){M=M.reverse();for(let F=0,V=I.length;F<V;F++){let Y=I[F];Vn.isClockWise(Y)&&(I[F]=Y.reverse())}}function J(F){let Y=10000000000000001e-36,O=F[0];for(let ht=1;ht<=F.length;ht++){let st=ht%F.length,ct=F[st],Dt=ct.x-O.x,yt=ct.y-O.y,w=Dt*Dt+yt*yt,_=Math.max(Math.abs(ct.x),Math.abs(ct.y),Math.abs(O.x),Math.abs(O.y)),k=Y*_*_;if(w<=k){F.splice(st,1),ht--;continue}O=ct}}J(M),I.forEach(J);let K=I.length,j=M;for(let F=0;F<K;F++){let V=I[F];M=M.concat(V)}function W(F,V,Y){return V||console.error("THREE.ExtrudeGeometry: vec does not exist"),F.clone().addScaledVector(V,Y)}let it=M.length;function Z(F,V,Y){let O,ht,st,ct=F.x-V.x,Dt=F.y-V.y,yt=Y.x-F.x,w=Y.y-F.y,_=ct*ct+Dt*Dt,k=ct*w-Dt*yt;if(Math.abs(k)>Number.EPSILON){let et=Math.sqrt(_),ot=Math.sqrt(yt*yt+w*w),nt=V.x-Dt/et,bt=V.y+ct/et,gt=Y.x-w/ot,Rt=Y.y+yt/ot,Lt=((gt-nt)*w-(Rt-bt)*yt)/(ct*w-Dt*yt);O=nt+ct*Lt-F.x,ht=bt+Dt*Lt-F.y;let dt=O*O+ht*ht;if(dt<=2)return new ut(O,ht);st=Math.sqrt(dt/2)}else{let et=!1;ct>Number.EPSILON?yt>Number.EPSILON&&(et=!0):ct<-Number.EPSILON?yt<-Number.EPSILON&&(et=!0):Math.sign(Dt)===Math.sign(w)&&(et=!0),et?(O=-Dt,ht=ct,st=Math.sqrt(_)):(O=ct,ht=Dt,st=Math.sqrt(_/2))}return new ut(O/st,ht/st)}let at=[];for(let F=0,V=j.length,Y=V-1,O=F+1;F<V;F++,Y++,O++)Y===V&&(Y=0),O===V&&(O=0),at[F]=Z(j[F],j[Y],j[O]);let _t=[],xt,Ft=at.concat();for(let F=0,V=K;F<V;F++){let Y=I[F];xt=[];for(let O=0,ht=Y.length,st=ht-1,ct=O+1;O<ht;O++,st++,ct++)st===ht&&(st=0),ct===ht&&(ct=0),xt[O]=Z(Y[O],Y[st],Y[ct]);_t.push(xt),Ft=Ft.concat(xt)}let Nt;if(m===0)Nt=Vn.triangulateShape(j,I);else{let F=[],V=[];for(let Y=0;Y<m;Y++){let O=Y/m,ht=d*Math.cos(O*Math.PI/2),st=g*Math.sin(O*Math.PI/2)+v;for(let ct=0,Dt=j.length;ct<Dt;ct++){let yt=W(j[ct],at[ct],st);X(yt.x,yt.y,-ht),O===0&&F.push(yt)}for(let ct=0,Dt=K;ct<Dt;ct++){let yt=I[ct];xt=_t[ct];let w=[];for(let _=0,k=yt.length;_<k;_++){let et=W(yt[_],xt[_],st);X(et.x,et.y,-ht),O===0&&w.push(et)}O===0&&V.push(w)}}Nt=Vn.triangulateShape(F,V)}let Ht=Nt.length,Ct=g+v;for(let F=0;F<it;F++){let V=f?W(M[F],Ft[F],Ct):M[F];x?(D.copy(P.normals[0]).multiplyScalar(V.x),T.copy(P.binormals[0]).multiplyScalar(V.y),U.copy(E[0]).add(D).add(T),X(U.x,U.y,U.z)):X(V.x,V.y,0)}for(let F=1;F<=h;F++)for(let V=0;V<it;V++){let Y=f?W(M[V],Ft[V],Ct):M[V];x?(D.copy(P.normals[F]).multiplyScalar(Y.x),T.copy(P.binormals[F]).multiplyScalar(Y.y),U.copy(E[F]).add(D).add(T),X(U.x,U.y,U.z)):X(Y.x,Y.y,u/h*F)}for(let F=m-1;F>=0;F--){let V=F/m,Y=d*Math.cos(V*Math.PI/2),O=g*Math.sin(V*Math.PI/2)+v;for(let ht=0,st=j.length;ht<st;ht++){let ct=W(j[ht],at[ht],O);X(ct.x,ct.y,u+Y)}for(let ht=0,st=I.length;ht<st;ht++){let ct=I[ht];xt=_t[ht];for(let Dt=0,yt=ct.length;Dt<yt;Dt++){let w=W(ct[Dt],xt[Dt],O);x?X(w.x,w.y+E[h-1].y,E[h-1].x+Y):X(w.x,w.y,u+Y)}}}R(),C();function R(){let F=r.length/3;if(f){let V=0,Y=it*V;for(let O=0;O<Ht;O++){let ht=Nt[O];q(ht[2]+Y,ht[1]+Y,ht[0]+Y)}V=h+m*2,Y=it*V;for(let O=0;O<Ht;O++){let ht=Nt[O];q(ht[0]+Y,ht[1]+Y,ht[2]+Y)}}else{for(let V=0;V<Ht;V++){let Y=Nt[V];q(Y[2],Y[1],Y[0])}for(let V=0;V<Ht;V++){let Y=Nt[V];q(Y[0]+it*h,Y[1]+it*h,Y[2]+it*h)}}n.addGroup(F,r.length/3-F,0)}function C(){let F=r.length/3,V=0;z(j,V),V+=j.length;for(let Y=0,O=I.length;Y<O;Y++){let ht=I[Y];z(ht,V),V+=ht.length}n.addGroup(F,r.length/3-F,1)}function z(F,V){let Y=F.length;for(;--Y>=0;){let O=Y,ht=Y-1;ht<0&&(ht=F.length-1);for(let st=0,ct=h+m*2;st<ct;st++){let Dt=it*st,yt=it*(st+1),w=V+O+Dt,_=V+ht+Dt,k=V+ht+yt,et=V+O+yt;$(w,_,k,et)}}}function X(F,V,Y){c.push(F),c.push(V),c.push(Y)}function q(F,V,Y){rt(F),rt(V),rt(Y);let O=r.length/3,ht=A.generateTopUV(n,r,O-3,O-2,O-1);b(ht[0]),b(ht[1]),b(ht[2])}function $(F,V,Y,O){rt(F),rt(V),rt(O),rt(V),rt(Y),rt(O);let ht=r.length/3,st=A.generateSideWallUV(n,r,ht-6,ht-3,ht-2,ht-1);b(st[0]),b(st[1]),b(st[3]),b(st[1]),b(st[2]),b(st[3])}function rt(F){r.push(c[F*3+0]),r.push(c[F*3+1]),r.push(c[F*3+2])}function b(F){s.push(F.x),s.push(F.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Jp(e,n,t)}static fromJSON(t,e){let n=[];for(let s=0,o=t.shapes.length;s<o;s++){let a=e[t.shapes[s]];n.push(a)}let r=t.options.extrudePath;return r!==void 0&&(t.options.extrudePath=new lc[r.type]().fromJSON(r)),new i(n,t.options)}},$p={generateTopUV:function(i,t,e,n,r){let s=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[r*3],h=t[r*3+1];return[new ut(s,o),new ut(a,c),new ut(l,h)]},generateSideWallUV:function(i,t,e,n,r,s){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[r*3],d=t[r*3+1],g=t[r*3+2],v=t[s*3],m=t[s*3+1],p=t[s*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new ut(o,1-c),new ut(l,1-u),new ut(f,1-g),new ut(v,1-p)]:[new ut(a,1-c),new ut(h,1-u),new ut(d,1-g),new ut(m,1-p)]}};function Jp(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){let s=i[n];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Fs=class i extends oe{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};let s=t/2,o=e/2,a=Math.floor(n),c=Math.floor(r),l=a+1,h=c+1,u=t/a,f=e/c,d=[],g=[],v=[],m=[];for(let p=0;p<h;p++){let A=p*f-o;for(let E=0;E<l;E++){let x=E*u-s;g.push(x,-A,0),v.push(0,0,1),m.push(E/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let A=0;A<a;A++){let E=A+l*p,x=A+l*(p+1),P=A+1+l*(p+1),T=A+1+l*p;d.push(E,x,T),d.push(x,P,T)}this.setIndex(d),this.setAttribute("position",new Yt(g,3)),this.setAttribute("normal",new Yt(v,3)),this.setAttribute("uv",new Yt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Ns=class i extends oe{constructor(t=new Ii([new ut(0,.5),new ut(-.5,-.5),new ut(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],r=[],s=[],o=[],a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new Yt(r,3)),this.setAttribute("normal",new Yt(s,3)),this.setAttribute("uv",new Yt(o,2));function l(h){let u=r.length/3,f=h.extractPoints(e),d=f.shape,g=f.holes;Vn.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){let A=g[m];Vn.isClockWise(A)===!0&&(g[m]=A.reverse())}let v=Vn.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){let A=g[m];d=d.concat(A)}for(let m=0,p=d.length;m<p;m++){let A=d[m];r.push(A.x,A.y,0),s.push(0,0,1),o.push(A.x,A.y)}for(let m=0,p=v.length;m<p;m++){let A=v[m],E=A[0]+u,x=A[1]+u,P=A[2]+u;n.push(E,x,P),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Kp(e,t)}static fromJSON(t,e){let n=[];for(let r=0,s=t.shapes.length;r<s;r++){let o=e[t.shapes[r]];n.push(o)}return new i(n,t.curveSegments)}};function Kp(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let r=i[e];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t}var Pi=class extends nn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ul,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Xn=class extends nn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Vt(16777215),this.specular=new Vt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ul,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=Ta,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var aa=class extends nn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ku,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},la=class extends nn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Vo(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function jp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var nr=class{constructor(t,e,n,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,r=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<r)){for(let a=n+2;;){if(r===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=e[++n],t<r)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(r=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=t*r;for(let o=0;o!==r;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ca=class extends nr{constructor(t,e,n,r){super(t,e,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:nc,endingEnd:nc}}intervalChanged_(t,e,n){let r=this.parameterPositions,s=t-2,o=t+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case ic:s=t,a=2*e-n;break;case rc:s=r.length-2,a=e+r[s]-r[s+1];break;default:s=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ic:o=t,c=2*n-e;break;case rc:o=1,c=n+r[1]-r[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-e)/(r-e),v=g*g,m=v*g,p=-f*m+2*f*v-f*g,A=(1+f)*m+(-1.5-2*f)*v+(-.5+f)*g+1,E=(-1-d)*m+(1.5+d)*v+.5*g,x=d*m-d*v;for(let P=0;P!==a;++P)s[P]=p*o[h+P]+A*o[l+P]+E*o[c+P]+x*o[u+P];return s}},ha=class extends nr{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(r-e),u=1-h;for(let f=0;f!==a;++f)s[f]=o[l+f]*u+o[c+f]*h;return s}},ua=class extends nr{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t){return this.copySampleValue_(t-1)}},fn=class{constructor(t,e,n,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Vo(e,this.TimeBufferType),this.values=Vo(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Vo(t.times,Array),values:Vo(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(n.interpolation=r)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ua(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ha(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ca(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ms:e=this.InterpolantFactoryMethodDiscrete;break;case qo:e=this.InterpolantFactoryMethodLinear;break;case Go:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ms;case this.InterpolantFactoryMethodLinear:return qo;case this.InterpolantFactoryMethodSmooth:return Go}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]*=t}return this}trim(t,e){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(r!==void 0&&jp(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Go,s=t.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(r)c=!0;else{let u=a*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){let v=e[u+g];if(v!==e[f+g]||v!==e[d+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,r=new n(this.name,t,e);return r.createInterpolant=this.createInterpolant,r}};fn.prototype.ValueTypeName="";fn.prototype.TimeBufferType=Float32Array;fn.prototype.ValueBufferType=Float32Array;fn.prototype.DefaultInterpolation=qo;var Di=class extends fn{constructor(t,e,n){super(t,e,n)}};Di.prototype.ValueTypeName="bool";Di.prototype.ValueBufferType=Array;Di.prototype.DefaultInterpolation=ms;Di.prototype.InterpolantFactoryMethodLinear=void 0;Di.prototype.InterpolantFactoryMethodSmooth=void 0;var fa=class extends fn{constructor(t,e,n,r){super(t,e,n,r)}};fa.prototype.ValueTypeName="color";var da=class extends fn{constructor(t,e,n,r){super(t,e,n,r)}};da.prototype.ValueTypeName="number";var pa=class extends nr{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(r-e),l=t*a;for(let h=l+a;l!==h;l+=4)Mn.slerpFlat(s,0,o,l-a,o,l,c);return s}},Os=class extends fn{constructor(t,e,n,r){super(t,e,n,r)}InterpolantFactoryMethodLinear(t){return new pa(this.times,this.values,this.getValueSize(),t)}};Os.prototype.ValueTypeName="quaternion";Os.prototype.InterpolantFactoryMethodSmooth=void 0;var Li=class extends fn{constructor(t,e,n){super(t,e,n)}};Li.prototype.ValueTypeName="string";Li.prototype.ValueBufferType=Array;Li.prototype.DefaultInterpolation=ms;Li.prototype.InterpolantFactoryMethodLinear=void 0;Li.prototype.InterpolantFactoryMethodSmooth=void 0;var ma=class extends fn{constructor(t,e,n,r){super(t,e,n,r)}};ma.prototype.ValueTypeName="vector";var Pr={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},ga=class{constructor(t,e,n){let r=this,s=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let d=l[u],g=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},gf=new ga,rn=class{constructor(t){this.manager=t!==void 0?t:gf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};rn.DEFAULT_MATERIAL_NAME="__DEFAULT";var ri={},fc=class extends Error{constructor(t,e){super(t),this.response=e}},ui=class extends rn{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,r){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=Pr.get(`file:${t}`);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(ri[t]!==void 0){ri[t].push({onLoad:e,onProgress:n,onError:r});return}ri[t]=[],ri[t].push({onLoad:e,onProgress:n,onError:r});let o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=ri[t],u=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0,v=0,m=new ReadableStream({start(p){A();function A(){u.read().then(({done:E,value:x})=>{if(E)p.close();else{v+=x.byteLength;let P=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:d});for(let T=0,D=h.length;T<D;T++){let U=h[T];U.onProgress&&U.onProgress(P)}p.enqueue(x),A()}},E=>{p.error(E)})}}});return new Response(m)}else throw new fc(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a==="")return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(g=>d.decode(g))}}}).then(l=>{Pr.add(`file:${t}`,l);let h=ri[t];delete ri[t];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onLoad&&d.onLoad(l)}}).catch(l=>{let h=ri[t];if(h===void 0)throw this.manager.itemError(t),l;delete ri[t];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onError&&d.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Cr=new WeakMap,va=class extends rn{constructor(t){super(t)}load(t,e,n,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=this,o=Pr.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0);else{let u=Cr.get(o);u===void 0&&(u=[],Cr.set(o,u)),u.push({onLoad:e,onError:r})}return o}let a=Ur("img");function c(){h(),e&&e(this);let u=Cr.get(this)||[];for(let f=0;f<u.length;f++){let d=u[f];d.onLoad&&d.onLoad(this)}Cr.delete(this),s.manager.itemEnd(t)}function l(u){h(),r&&r(u),Pr.remove(`image:${t}`);let f=Cr.get(this)||[];for(let d=0;d<f.length;d++){let g=f[d];g.onError&&g.onError(u)}Cr.delete(this),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Pr.add(`image:${t}`,a),s.manager.itemStart(t),a.src=t,a}};var Bs=class extends rn{constructor(t){super(t)}load(t,e,n,r){let s=new en,o=new va(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,r),s}},zs=class extends Ne{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Vt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}};var tc=new ee,gu=new L,vu=new L,dc=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ut(512,512),this.mapType=Un,this.map=null,this.mapPass=null,this.matrix=new ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zr,this._frameExtents=new ut(1,1),this._viewportCount=1,this._viewports=[new ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;gu.setFromMatrixPosition(t.matrixWorld),e.position.copy(gu),vu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(vu),e.updateMatrixWorld(),tc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(tc,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(tc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var ks=class extends Ms{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-t,o=n+t,a=r+e,c=r-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},pc=class extends dc{constructor(){super(new ks(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Gr=class extends zs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.target=new Ne,this.shadow=new pc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Vs=class extends zs{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var _a=class extends He{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Bc="\\[\\]\\.:\\/",Qp=new RegExp("["+Bc+"]","g"),zc="[^"+Bc+"]",tm="[^"+Bc.replace("\\.","")+"]",em=/((?:WC+[\/:])*)/.source.replace("WC",zc),nm=/(WCOD+)?/.source.replace("WCOD",tm),im=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",zc),rm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",zc),sm=new RegExp("^"+em+nm+im+rm+"$"),om=["material","materials","bones","map"],mc=class{constructor(t,e,n){let r=n||me.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},me=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Qp,"")}static parseTrackName(t){let e=sm.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);om.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},r=n(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)t[e++]=n[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,r=e.propertyName,s=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[r];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};me.Composite=mc;me.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};me.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};me.prototype.GetterByBindingType=[me.prototype._getValue_direct,me.prototype._getValue_array,me.prototype._getValue_arrayElement,me.prototype._getValue_toArray];me.prototype.SetterByBindingTypeAndVersioning=[[me.prototype._setValue_direct,me.prototype._setValue_direct_setNeedsUpdate,me.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[me.prototype._setValue_array,me.prototype._setValue_array_setNeedsUpdate,me.prototype._setValue_array_setMatrixWorldNeedsUpdate],[me.prototype._setValue_arrayElement,me.prototype._setValue_arrayElement_setNeedsUpdate,me.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[me.prototype._setValue_fromArray,me.prototype._setValue_fromArray_setNeedsUpdate,me.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Kx=new Float32Array(1);var _u=new ee,Hs=class{constructor(t,e,n=0,r=1/0){this.ray=new li(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new Or,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return _u.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(_u),this}intersectObject(t,e=!0,n=[]){return gc(t,this,n,e),n.sort(xu),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)gc(t[r],this,n,e);return n.sort(xu),n}};function xu(i,t){return i.distance-t.distance}function gc(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let o=0,a=s.length;o<a;o++)gc(s[o],t,e,!0)}}var Wr=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Jt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Jt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Gs=class extends tr{constructor(t=10,e=10,n=4473924,r=8947848){n=new Vt(n),r=new Vt(r);let s=e/2,o=t/e,a=t/2,c=[],l=[];for(let f=0,d=0,g=-a;f<=e;f++,g+=o){c.push(-a,0,g,a,0,g),c.push(g,0,-a,g,0,a);let v=f===s?n:r;v.toArray(l,d),d+=3,v.toArray(l,d),d+=3,v.toArray(l,d),d+=3,v.toArray(l,d),d+=3}let h=new oe;h.setAttribute("position",new Yt(c,3)),h.setAttribute("color",new Yt(l,3));let u=new bn({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};var yu=new L,Ho,ec,Ws=class extends Ne{constructor(t=new L(0,0,1),e=new L(0,0,0),n=1,r=16776960,s=n*.2,o=s*.2){super(),this.type="ArrowHelper",Ho===void 0&&(Ho=new oe,Ho.setAttribute("position",new Yt([0,0,0,0,1,0],3)),ec=new ta(.5,1,5,1),ec.translate(0,-.5,0)),this.position.copy(e),this.line=new Qi(Ho,new bn({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new ue(ec,new ci({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(n,s,o)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{yu.set(t.z,0,-t.x).normalize();let e=Math.acos(t.y);this.quaternion.setFromAxisAngle(yu,e)}}setLength(t,e=t*.2,n=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(n,e,n),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}};var Xs=class extends Hn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function kc(i,t,e,n){let r=am(n);switch(e){case Ac:return i*t;case Rc:return i*t/r.components*r.byteLength;case Ua:return i*t/r.components*r.byteLength;case Ic:return i*t*2/r.components*r.byteLength;case Fa:return i*t*2/r.components*r.byteLength;case Cc:return i*t*3/r.components*r.byteLength;case wn:return i*t*4/r.components*r.byteLength;case Na:return i*t*4/r.components*r.byteLength;case Zs:case $s:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Js:case Ks:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ba:case ka:return Math.max(i,16)*Math.max(t,8)/4;case Oa:case za:return Math.max(i,8)*Math.max(t,8)/2;case Va:case Ha:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ga:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Wa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Xa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case qa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ya:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Za:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case $a:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ja:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ka:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ja:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Qa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case tl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case el:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case nl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case il:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case rl:case sl:case ol:return Math.ceil(i/4)*Math.ceil(t/4)*16;case al:case ll:return Math.ceil(i/4)*Math.ceil(t/4)*8;case cl:case hl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function am(i){switch(i){case Un:case bc:return{byteLength:1,components:1};case Xr:case wc:case qr:return{byteLength:2,components:1};case Da:case La:return{byteLength:2,components:4};case Fi:case Pa:case Yn:return{byteLength:4,components:1};case Ec:case Tc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function kf(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function cm(i){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){let g=u[f],v=u[d];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,u[f]=v)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){let v=u[d];i.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var hm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,um=`#ifdef USE_ALPHAHASH
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
#endif`,fm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gm=`#ifdef USE_AOMAP
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
#endif`,vm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_m=`#ifdef USE_BATCHING
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
#endif`,xm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ym=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Sm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,bm=`#ifdef USE_IRIDESCENCE
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
#endif`,wm=`#ifdef USE_BUMPMAP
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
#endif`,Em=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Tm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Am=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Im=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Pm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Dm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Lm=`#define PI 3.141592653589793
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
} // validated`,Um=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Fm=`vec3 transformedNormal = objectNormal;
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
#endif`,Nm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Om=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,km="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hm=`#ifdef USE_ENVMAP
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
#endif`,Gm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Wm=`#ifdef USE_ENVMAP
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
#endif`,Xm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qm=`#ifdef USE_ENVMAP
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
#endif`,Ym=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$m=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Km=`#ifdef USE_GRADIENTMAP
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
}`,jm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,eg=`uniform bool receiveShadow;
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
#endif`,ng=`#ifdef USE_ENVMAP
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
#endif`,ig=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,og=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ag=`PhysicalMaterial material;
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
#endif`,lg=`struct PhysicalMaterial {
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
}`,cg=`
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
#endif`,hg=`#if defined( RE_IndirectDiffuse )
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
#endif`,ug=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_g=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xg=`#if defined( USE_POINTS_UV )
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
#endif`,yg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Sg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Eg=`#ifdef USE_MORPHTARGETS
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
#endif`,Tg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ag=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Cg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Rg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ig=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Dg=`#ifdef USE_NORMALMAP
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
#endif`,Lg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ug=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ng=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Og=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,zg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Zg=`float getShadowMask() {
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
}`,$g=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jg=`#ifdef USE_SKINNING
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
#endif`,Kg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jg=`#ifdef USE_SKINNING
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
#endif`,Qg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,t0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,e0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,n0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,i0=`#ifdef USE_TRANSMISSION
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
#endif`,r0=`#ifdef USE_TRANSMISSION
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
#endif`,s0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,o0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,a0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,l0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,c0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,h0=`uniform sampler2D t2D;
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
}`,u0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,f0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,d0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,p0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m0=`#include <common>
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
}`,g0=`#if DEPTH_PACKING == 3200
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
}`,v0=`#define DISTANCE
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
}`,_0=`#define DISTANCE
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
}`,x0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,y0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M0=`uniform float scale;
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
}`,S0=`uniform vec3 diffuse;
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
}`,b0=`#include <common>
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
}`,w0=`uniform vec3 diffuse;
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
}`,E0=`#define LAMBERT
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
}`,T0=`#define LAMBERT
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
}`,A0=`#define MATCAP
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
}`,C0=`#define MATCAP
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
}`,R0=`#define NORMAL
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
}`,I0=`#define NORMAL
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
}`,P0=`#define PHONG
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
}`,D0=`#define PHONG
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
}`,L0=`#define STANDARD
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
}`,U0=`#define STANDARD
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
}`,F0=`#define TOON
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
}`,N0=`#define TOON
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
}`,O0=`uniform float size;
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
}`,B0=`uniform vec3 diffuse;
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
}`,z0=`#include <common>
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
}`,k0=`uniform vec3 color;
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
}`,V0=`uniform float rotation;
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
}`,H0=`uniform vec3 diffuse;
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
}`,Kt={alphahash_fragment:hm,alphahash_pars_fragment:um,alphamap_fragment:fm,alphamap_pars_fragment:dm,alphatest_fragment:pm,alphatest_pars_fragment:mm,aomap_fragment:gm,aomap_pars_fragment:vm,batching_pars_vertex:_m,batching_vertex:xm,begin_vertex:ym,beginnormal_vertex:Mm,bsdfs:Sm,iridescence_fragment:bm,bumpmap_pars_fragment:wm,clipping_planes_fragment:Em,clipping_planes_pars_fragment:Tm,clipping_planes_pars_vertex:Am,clipping_planes_vertex:Cm,color_fragment:Rm,color_pars_fragment:Im,color_pars_vertex:Pm,color_vertex:Dm,common:Lm,cube_uv_reflection_fragment:Um,defaultnormal_vertex:Fm,displacementmap_pars_vertex:Nm,displacementmap_vertex:Om,emissivemap_fragment:Bm,emissivemap_pars_fragment:zm,colorspace_fragment:km,colorspace_pars_fragment:Vm,envmap_fragment:Hm,envmap_common_pars_fragment:Gm,envmap_pars_fragment:Wm,envmap_pars_vertex:Xm,envmap_physical_pars_fragment:ng,envmap_vertex:qm,fog_vertex:Ym,fog_pars_vertex:Zm,fog_fragment:$m,fog_pars_fragment:Jm,gradientmap_pars_fragment:Km,lightmap_pars_fragment:jm,lights_lambert_fragment:Qm,lights_lambert_pars_fragment:tg,lights_pars_begin:eg,lights_toon_fragment:ig,lights_toon_pars_fragment:rg,lights_phong_fragment:sg,lights_phong_pars_fragment:og,lights_physical_fragment:ag,lights_physical_pars_fragment:lg,lights_fragment_begin:cg,lights_fragment_maps:hg,lights_fragment_end:ug,logdepthbuf_fragment:fg,logdepthbuf_pars_fragment:dg,logdepthbuf_pars_vertex:pg,logdepthbuf_vertex:mg,map_fragment:gg,map_pars_fragment:vg,map_particle_fragment:_g,map_particle_pars_fragment:xg,metalnessmap_fragment:yg,metalnessmap_pars_fragment:Mg,morphinstance_vertex:Sg,morphcolor_vertex:bg,morphnormal_vertex:wg,morphtarget_pars_vertex:Eg,morphtarget_vertex:Tg,normal_fragment_begin:Ag,normal_fragment_maps:Cg,normal_pars_fragment:Rg,normal_pars_vertex:Ig,normal_vertex:Pg,normalmap_pars_fragment:Dg,clearcoat_normal_fragment_begin:Lg,clearcoat_normal_fragment_maps:Ug,clearcoat_pars_fragment:Fg,iridescence_pars_fragment:Ng,opaque_fragment:Og,packing:Bg,premultiplied_alpha_fragment:zg,project_vertex:kg,dithering_fragment:Vg,dithering_pars_fragment:Hg,roughnessmap_fragment:Gg,roughnessmap_pars_fragment:Wg,shadowmap_pars_fragment:Xg,shadowmap_pars_vertex:qg,shadowmap_vertex:Yg,shadowmask_pars_fragment:Zg,skinbase_vertex:$g,skinning_pars_vertex:Jg,skinning_vertex:Kg,skinnormal_vertex:jg,specularmap_fragment:Qg,specularmap_pars_fragment:t0,tonemapping_fragment:e0,tonemapping_pars_fragment:n0,transmission_fragment:i0,transmission_pars_fragment:r0,uv_pars_fragment:s0,uv_pars_vertex:o0,uv_vertex:a0,worldpos_vertex:l0,background_vert:c0,background_frag:h0,backgroundCube_vert:u0,backgroundCube_frag:f0,cube_vert:d0,cube_frag:p0,depth_vert:m0,depth_frag:g0,distanceRGBA_vert:v0,distanceRGBA_frag:_0,equirect_vert:x0,equirect_frag:y0,linedashed_vert:M0,linedashed_frag:S0,meshbasic_vert:b0,meshbasic_frag:w0,meshlambert_vert:E0,meshlambert_frag:T0,meshmatcap_vert:A0,meshmatcap_frag:C0,meshnormal_vert:R0,meshnormal_frag:I0,meshphong_vert:P0,meshphong_frag:D0,meshphysical_vert:L0,meshphysical_frag:U0,meshtoon_vert:F0,meshtoon_frag:N0,points_vert:O0,points_frag:B0,shadow_vert:z0,shadow_frag:k0,sprite_vert:V0,sprite_frag:H0},St={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},envMapRotation:{value:new Zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},Zn={basic:{uniforms:We([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:We([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:We([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:We([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:We([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:We([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:We([St.points,St.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:We([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:We([St.common,St.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:We([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:We([St.sprite,St.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zt}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distanceRGBA:{uniforms:We([St.common,St.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distanceRGBA_vert,fragmentShader:Kt.distanceRGBA_frag},shadow:{uniforms:We([St.lights,St.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};Zn.physical={uniforms:We([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};var fl={r:0,b:0,g:0},ar=new Sn,G0=new ee;function W0(i,t,e,n,r,s,o){let a=new Vt(0),c=s===!0?0:1,l,h,u=null,f=0,d=null;function g(E){let x=E.isScene===!0?E.background:null;return x&&x.isTexture&&(x=(E.backgroundBlurriness>0?e:t).get(x)),x}function v(E){let x=!1,P=g(E);P===null?p(a,c):P&&P.isColor&&(p(P,1),x=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,x){let P=g(x);P&&(P.isCubeTexture||P.mapping===qs)?(h===void 0&&(h=new ue(new Ri(1,1,1),new hn({name:"BackgroundCubeMaterial",uniforms:or(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:Je,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,D,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),ar.copy(x.backgroundRotation),ar.x*=-1,ar.y*=-1,ar.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(ar.y*=-1,ar.z*=-1),h.material.uniforms.envMap.value=P,h.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(G0.makeRotationFromEuler(ar)),h.material.toneMapped=Qt.getTransfer(P.colorSpace)!==ae,(u!==P||f!==P.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=P,f=P.version,d=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):P&&P.isTexture&&(l===void 0&&(l=new ue(new Fs(2,2),new hn({name:"BackgroundMaterial",uniforms:or(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=P,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=Qt.getTransfer(P.colorSpace)!==ae,P.matrixAutoUpdate===!0&&P.updateMatrix(),l.material.uniforms.uvTransform.value.copy(P.matrix),(u!==P||f!==P.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=P,f=P.version,d=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function p(E,x){E.getRGB(fl,Nc(i)),n.buffers.color.setClear(fl.r,fl.g,fl.b,x,o)}function A(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,x=1){a.set(E),c=x,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,p(a,c)},render:v,addToRenderList:m,dispose:A}}function X0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null),s=r,o=!1;function a(M,I,B,J,K){let j=!1,W=u(J,B,I);s!==W&&(s=W,l(s.object)),j=d(M,J,B,K),j&&g(M,J,B,K),K!==null&&t.update(K,i.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,x(M,I,B,J),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,I,B){let J=B.wireframe===!0,K=n[M.id];K===void 0&&(K={},n[M.id]=K);let j=K[I.id];j===void 0&&(j={},K[I.id]=j);let W=j[J];return W===void 0&&(W=f(c()),j[J]=W),W}function f(M){let I=[],B=[],J=[];for(let K=0;K<e;K++)I[K]=0,B[K]=0,J[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:B,attributeDivisors:J,object:M,attributes:{},index:null}}function d(M,I,B,J){let K=s.attributes,j=I.attributes,W=0,it=B.getAttributes();for(let Z in it)if(it[Z].location>=0){let _t=K[Z],xt=j[Z];if(xt===void 0&&(Z==="instanceMatrix"&&M.instanceMatrix&&(xt=M.instanceMatrix),Z==="instanceColor"&&M.instanceColor&&(xt=M.instanceColor)),_t===void 0||_t.attribute!==xt||xt&&_t.data!==xt.data)return!0;W++}return s.attributesNum!==W||s.index!==J}function g(M,I,B,J){let K={},j=I.attributes,W=0,it=B.getAttributes();for(let Z in it)if(it[Z].location>=0){let _t=j[Z];_t===void 0&&(Z==="instanceMatrix"&&M.instanceMatrix&&(_t=M.instanceMatrix),Z==="instanceColor"&&M.instanceColor&&(_t=M.instanceColor));let xt={};xt.attribute=_t,_t&&_t.data&&(xt.data=_t.data),K[Z]=xt,W++}s.attributes=K,s.attributesNum=W,s.index=J}function v(){let M=s.newAttributes;for(let I=0,B=M.length;I<B;I++)M[I]=0}function m(M){p(M,0)}function p(M,I){let B=s.newAttributes,J=s.enabledAttributes,K=s.attributeDivisors;B[M]=1,J[M]===0&&(i.enableVertexAttribArray(M),J[M]=1),K[M]!==I&&(i.vertexAttribDivisor(M,I),K[M]=I)}function A(){let M=s.newAttributes,I=s.enabledAttributes;for(let B=0,J=I.length;B<J;B++)I[B]!==M[B]&&(i.disableVertexAttribArray(B),I[B]=0)}function E(M,I,B,J,K,j,W){W===!0?i.vertexAttribIPointer(M,I,B,K,j):i.vertexAttribPointer(M,I,B,J,K,j)}function x(M,I,B,J){v();let K=J.attributes,j=B.getAttributes(),W=I.defaultAttributeValues;for(let it in j){let Z=j[it];if(Z.location>=0){let at=K[it];if(at===void 0&&(it==="instanceMatrix"&&M.instanceMatrix&&(at=M.instanceMatrix),it==="instanceColor"&&M.instanceColor&&(at=M.instanceColor)),at!==void 0){let _t=at.normalized,xt=at.itemSize,Ft=t.get(at);if(Ft===void 0)continue;let Nt=Ft.buffer,Ht=Ft.type,Ct=Ft.bytesPerElement,R=Ht===i.INT||Ht===i.UNSIGNED_INT||at.gpuType===Pa;if(at.isInterleavedBufferAttribute){let C=at.data,z=C.stride,X=at.offset;if(C.isInstancedInterleavedBuffer){for(let q=0;q<Z.locationSize;q++)p(Z.location+q,C.meshPerAttribute);M.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=C.meshPerAttribute*C.count)}else for(let q=0;q<Z.locationSize;q++)m(Z.location+q);i.bindBuffer(i.ARRAY_BUFFER,Nt);for(let q=0;q<Z.locationSize;q++)E(Z.location+q,xt/Z.locationSize,Ht,_t,z*Ct,(X+xt/Z.locationSize*q)*Ct,R)}else{if(at.isInstancedBufferAttribute){for(let C=0;C<Z.locationSize;C++)p(Z.location+C,at.meshPerAttribute);M.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let C=0;C<Z.locationSize;C++)m(Z.location+C);i.bindBuffer(i.ARRAY_BUFFER,Nt);for(let C=0;C<Z.locationSize;C++)E(Z.location+C,xt/Z.locationSize,Ht,_t,xt*Ct,xt/Z.locationSize*C*Ct,R)}}else if(W!==void 0){let _t=W[it];if(_t!==void 0)switch(_t.length){case 2:i.vertexAttrib2fv(Z.location,_t);break;case 3:i.vertexAttrib3fv(Z.location,_t);break;case 4:i.vertexAttrib4fv(Z.location,_t);break;default:i.vertexAttrib1fv(Z.location,_t)}}}}A()}function P(){U();for(let M in n){let I=n[M];for(let B in I){let J=I[B];for(let K in J)h(J[K].object),delete J[K];delete I[B]}delete n[M]}}function T(M){if(n[M.id]===void 0)return;let I=n[M.id];for(let B in I){let J=I[B];for(let K in J)h(J[K].object),delete J[K];delete I[B]}delete n[M.id]}function D(M){for(let I in n){let B=n[I];if(B[M.id]===void 0)continue;let J=B[M.id];for(let K in J)h(J[K].object),delete J[K];delete B[M.id]}}function U(){y(),o=!0,s!==r&&(s=r,l(s.object))}function y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:U,resetDefaultState:y,dispose:P,releaseStatesOfGeometry:T,releaseStatesOfProgram:D,initAttributes:v,enableAttribute:m,disableUnusedAttributes:A}}function q0(i,t,e){let n;function r(l){n=l}function s(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];e.update(d,n,1)}function c(l,h,u,f){if(u===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)o(l[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*f[v];e.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Y0(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let D=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(D){return!(D!==wn&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){let U=D===qr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(D!==Un&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==Yn&&!U)}function c(D){if(D==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),A=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:A,maxVaryings:E,maxFragmentUniforms:x,vertexTextures:P,maxSamples:T}}function Z0(i){let t=this,e=null,n=0,r=!1,s=!1,o=new Ze,a=new Zt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||r;return r=f,n=u.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!r||g===null||g.length===0||s&&!m)s?h(null):l();else{let A=s?0:n,E=A*4,x=p.clippingState||null;c.value=x,x=h(g,f,E,d);for(let P=0;P!==E;++P)x[P]=e[P];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=A}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,g){let v=u!==null?u.length:0,m=null;if(v!==0){if(m=c.value,g!==!0||m===null){let p=d+v*4,A=f.matrixWorldInverse;a.getNormalMatrix(A),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,x=d;E!==v;++E,x+=4)o.copy(u[E]).applyMatrix4(A,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function $0(i){let t=new WeakMap;function e(o,a){return a===Ca?o.mapping=ir:a===Ra&&(o.mapping=rr),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ca||a===Ra)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Ko(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",r),e(l.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}var Jr=4,vf=[.125,.215,.35,.446,.526,.582],hr=20,Vc=new ks,_f=new Vt,Hc=null,Gc=0,Wc=0,Xc=!1,cr=(1+Math.sqrt(5))/2,$r=1/cr,xf=[new L(-cr,$r,0),new L(cr,$r,0),new L(-$r,0,cr),new L($r,0,cr),new L(0,cr,-$r),new L(0,cr,$r),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],J0=new L,ml=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100,s={}){let{size:o=256,position:a=J0}=s;Hc=this._renderer.getRenderTarget(),Gc=this._renderer.getActiveCubeFace(),Wc=this._renderer.getActiveMipmapLevel(),Xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,r,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Hc,Gc,Wc),this._renderer.xr.enabled=Xc,t.scissorTest=!1,dl(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ir||t.mapping===rr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Hc=this._renderer.getRenderTarget(),Gc=this._renderer.getActiveCubeFace(),Wc=this._renderer.getActiveMipmapLevel(),Xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ge,minFilter:Ge,generateMipmaps:!1,type:qr,format:wn,colorSpace:ji,depthBuffer:!1},r=yf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yf(t,e,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=K0(s)),this._blurMaterial=j0(s,t,e)}return r}_compileMaterial(t){let e=new ue(this._lodPlanes[0],t);this._renderer.compile(e,Vc)}_sceneToCubeUV(t,e,n,r,s){let c=new He(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(_f),u.toneMapping=di,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null));let v=new ci({name:"PMREM.Background",side:Je,depthWrite:!1,depthTest:!1}),m=new ue(new Ri,v),p=!1,A=t.background;A?A.isColor&&(v.color.copy(A),t.background=null,p=!0):(v.color.copy(_f),p=!0);for(let E=0;E<6;E++){let x=E%3;x===0?(c.up.set(0,l[E],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[E],s.y,s.z)):x===1?(c.up.set(0,0,l[E]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[E],s.z)):(c.up.set(0,l[E],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[E]));let P=this._cubeSize;dl(r,x*P,E>2?P:0,P,P),u.setRenderTarget(r),p&&u.render(m,c),u.render(t,c)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=d,u.autoClear=f,t.background=A}_textureToCubeUV(t,e){let n=this._renderer,r=t.mapping===ir||t.mapping===rr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mf());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new ue(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;let c=this._cubeSize;dl(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Vc)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=xf[(r-s-1)%xf.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,r,s){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ue(this._lodPlanes[r],l),f=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*hr-1),v=s/g,m=isFinite(s)?1+Math.floor(h*v):hr;m>hr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${hr}`);let p=[],A=0;for(let D=0;D<hr;++D){let U=D/v,y=Math.exp(-U*U/2);p.push(y),D===0?A+=y:D<m&&(A+=2*y)}for(let D=0;D<p.length;D++)p[D]=p[D]/A;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:E}=this;f.dTheta.value=g,f.mipInt.value=E-n;let x=this._sizeLods[r],P=3*x*(r>E-Jr?r-E+Jr:0),T=4*(this._cubeSize-x);dl(e,P,T,3*x,2*x),c.setRenderTarget(e),c.render(u,Vc)}};function K0(i){let t=[],e=[],n=[],r=i,s=i-Jr+1+vf.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);e.push(a);let c=1/a;o>i-Jr?c=vf[o-i+Jr-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,v=3,m=2,p=1,A=new Float32Array(v*g*d),E=new Float32Array(m*g*d),x=new Float32Array(p*g*d);for(let T=0;T<d;T++){let D=T%3*2/3-1,U=T>2?0:-1,y=[D,U,0,D+2/3,U,0,D+2/3,U+1,0,D,U,0,D+2/3,U+1,0,D,U+1,0];A.set(y,v*g*T),E.set(f,m*g*T);let M=[T,T,T,T,T,T];x.set(M,p*g*T)}let P=new oe;P.setAttribute("position",new Ae(A,v)),P.setAttribute("uv",new Ae(E,m)),P.setAttribute("faceIndex",new Ae(x,p)),t.push(P),r>Jr&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function yf(i,t,e){let n=new Gn(i,t,e);return n.texture.mapping=qs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function dl(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function j0(i,t,e){let n=new Float32Array(hr),r=new L(0,1,0);return new hn({name:"SphericalGaussianBlur",defines:{n:hr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:eh(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Mf(){return new hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:eh(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Sf(){return new hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:eh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function eh(){return`

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
	`}function Q0(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Ca||c===Ra,h=c===ir||c===rr;if(l||h){let u=t.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new ml(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return l&&d&&d.height>0||h&&d&&r(d)?(e===null&&(e=new ml(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function r(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){let c=a.target;c.removeEventListener("dispose",s);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function tv(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let r=e(n);return r===null&&Fr("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function ev(i,t,e,n){let r={},s=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];let d=s.get(f);d&&(t.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,e.memory.geometries++),f}function c(u){let f=u.attributes;for(let d in f)t.update(f[d],i.ARRAY_BUFFER)}function l(u){let f=[],d=u.index,g=u.attributes.position,v=0;if(d!==null){let A=d.array;v=d.version;for(let E=0,x=A.length;E<x;E+=3){let P=A[E+0],T=A[E+1],D=A[E+2];f.push(P,T,T,D,D,P)}}else if(g!==void 0){let A=g.array;v=g.version;for(let E=0,x=A.length/3-1;E<x;E+=3){let P=E+0,T=E+1,D=E+2;f.push(P,T,T,D,D,P)}}else return;let m=new(Fc(f)?ys:xs)(f,1);m.version=v;let p=s.get(u);p&&t.remove(p),s.set(u,m)}function h(u){let f=s.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return s.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function nv(i,t,e){let n;function r(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function c(f,d){i.drawElements(n,d,s,f*o),e.update(d,n,1)}function l(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,s,f*o,g),e.update(d,n,g))}function h(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,n,1)}function u(f,d,g,v){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/o,d[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,v,0,g);let p=0;for(let A=0;A<g;A++)p+=d[A]*v[A];e.update(p,n,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function iv(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function rv(i,t,e){let n=new WeakMap,r=new ye;function s(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let y=function(){D.dispose(),n.delete(a),a.removeEventListener("dispose",y)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],A=a.morphAttributes.color||[],E=0;d===!0&&(E=1),g===!0&&(E=2),v===!0&&(E=3);let x=a.attributes.position.count*E,P=1;x>t.maxTextureSize&&(P=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let T=new Float32Array(x*P*4*u),D=new _s(T,x,P,u);D.type=Yn,D.needsUpdate=!0;let U=E*4;for(let M=0;M<u;M++){let I=m[M],B=p[M],J=A[M],K=x*P*4*M;for(let j=0;j<I.count;j++){let W=j*U;d===!0&&(r.fromBufferAttribute(I,j),T[K+W+0]=r.x,T[K+W+1]=r.y,T[K+W+2]=r.z,T[K+W+3]=0),g===!0&&(r.fromBufferAttribute(B,j),T[K+W+4]=r.x,T[K+W+5]=r.y,T[K+W+6]=r.z,T[K+W+7]=0),v===!0&&(r.fromBufferAttribute(J,j),T[K+W+8]=r.x,T[K+W+9]=r.y,T[K+W+10]=r.z,T[K+W+11]=J.itemSize===4?r.w:1)}}f={count:u,texture:D,size:new ut(x,P)},n.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let v=0;v<l.length;v++)d+=l[v];let g=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function sv(i,t,e,n){let r=new WeakMap;function s(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(r.get(u)!==l&&(t.update(u),r.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return u}function o(){r=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}var Vf=new en,bf=new ws(1,1),Hf=new _s,Gf=new $o,Wf=new Ss,wf=[],Ef=[],Tf=new Float32Array(16),Af=new Float32Array(9),Cf=new Float32Array(4);function jr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let r=t*e,s=wf[r];if(s===void 0&&(s=new Float32Array(r),wf[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function Ie(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Pe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function vl(i,t){let e=Ef[t];e===void 0&&(e=new Int32Array(t),Ef[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function ov(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function av(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2fv(this.addr,t),Pe(e,t)}}function lv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ie(e,t))return;i.uniform3fv(this.addr,t),Pe(e,t)}}function cv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4fv(this.addr,t),Pe(e,t)}}function hv(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Pe(e,t)}else{if(Ie(e,n))return;Cf.set(n),i.uniformMatrix2fv(this.addr,!1,Cf),Pe(e,n)}}function uv(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Pe(e,t)}else{if(Ie(e,n))return;Af.set(n),i.uniformMatrix3fv(this.addr,!1,Af),Pe(e,n)}}function fv(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Pe(e,t)}else{if(Ie(e,n))return;Tf.set(n),i.uniformMatrix4fv(this.addr,!1,Tf),Pe(e,n)}}function dv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function pv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2iv(this.addr,t),Pe(e,t)}}function mv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;i.uniform3iv(this.addr,t),Pe(e,t)}}function gv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4iv(this.addr,t),Pe(e,t)}}function vv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function _v(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2uiv(this.addr,t),Pe(e,t)}}function xv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;i.uniform3uiv(this.addr,t),Pe(e,t)}}function yv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4uiv(this.addr,t),Pe(e,t)}}function Mv(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(bf.compareFunction=Pc,s=bf):s=Vf,e.setTexture2D(t||s,r)}function Sv(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Gf,r)}function bv(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Wf,r)}function wv(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Hf,r)}function Ev(i){switch(i){case 5126:return ov;case 35664:return av;case 35665:return lv;case 35666:return cv;case 35674:return hv;case 35675:return uv;case 35676:return fv;case 5124:case 35670:return dv;case 35667:case 35671:return pv;case 35668:case 35672:return mv;case 35669:case 35673:return gv;case 5125:return vv;case 36294:return _v;case 36295:return xv;case 36296:return yv;case 35678:case 36198:case 36298:case 36306:case 35682:return Mv;case 35679:case 36299:case 36307:return Sv;case 35680:case 36300:case 36308:case 36293:return bv;case 36289:case 36303:case 36311:case 36292:return wv}}function Tv(i,t){i.uniform1fv(this.addr,t)}function Av(i,t){let e=jr(t,this.size,2);i.uniform2fv(this.addr,e)}function Cv(i,t){let e=jr(t,this.size,3);i.uniform3fv(this.addr,e)}function Rv(i,t){let e=jr(t,this.size,4);i.uniform4fv(this.addr,e)}function Iv(i,t){let e=jr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Pv(i,t){let e=jr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Dv(i,t){let e=jr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Lv(i,t){i.uniform1iv(this.addr,t)}function Uv(i,t){i.uniform2iv(this.addr,t)}function Fv(i,t){i.uniform3iv(this.addr,t)}function Nv(i,t){i.uniform4iv(this.addr,t)}function Ov(i,t){i.uniform1uiv(this.addr,t)}function Bv(i,t){i.uniform2uiv(this.addr,t)}function zv(i,t){i.uniform3uiv(this.addr,t)}function kv(i,t){i.uniform4uiv(this.addr,t)}function Vv(i,t,e){let n=this.cache,r=t.length,s=vl(e,r);Ie(n,s)||(i.uniform1iv(this.addr,s),Pe(n,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||Vf,s[o])}function Hv(i,t,e){let n=this.cache,r=t.length,s=vl(e,r);Ie(n,s)||(i.uniform1iv(this.addr,s),Pe(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Gf,s[o])}function Gv(i,t,e){let n=this.cache,r=t.length,s=vl(e,r);Ie(n,s)||(i.uniform1iv(this.addr,s),Pe(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||Wf,s[o])}function Wv(i,t,e){let n=this.cache,r=t.length,s=vl(e,r);Ie(n,s)||(i.uniform1iv(this.addr,s),Pe(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||Hf,s[o])}function Xv(i){switch(i){case 5126:return Tv;case 35664:return Av;case 35665:return Cv;case 35666:return Rv;case 35674:return Iv;case 35675:return Pv;case 35676:return Dv;case 5124:case 35670:return Lv;case 35667:case 35671:return Uv;case 35668:case 35672:return Fv;case 35669:case 35673:return Nv;case 5125:return Ov;case 36294:return Bv;case 36295:return zv;case 36296:return kv;case 35678:case 36198:case 36298:case 36306:case 35682:return Vv;case 35679:case 36299:case 36307:return Hv;case 35680:case 36300:case 36308:case 36293:return Gv;case 36289:case 36303:case 36311:case 36292:return Wv}}var Yc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ev(e.type)}},Zc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Xv(e.type)}},$c=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(t,e[a.id],n)}}},qc=/(\w+)(\])?(\[|\.)?/g;function Rf(i,t){i.seq.push(t),i.map[t.id]=t}function qv(i,t,e){let n=i.name,r=n.length;for(qc.lastIndex=0;;){let s=qc.exec(n),o=qc.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Rf(e,l===void 0?new Yc(a,i,t):new Zc(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new $c(a),Rf(e,u)),e=u}}}var Kr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);qv(s,o,this)}}setValue(t,e,n,r){let s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){let r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){let a=e[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,r)}}static seqWithValue(t,e){let n=[];for(let r=0,s=t.length;r!==s;++r){let o=t[r];o.id in e&&n.push(o)}return n}};function If(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Yv=37297,Zv=0;function $v(i,t){let e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Pf=new Zt;function Jv(i){Qt._getMatrix(Pf,Qt.workingColorSpace,i);let t=`mat3( ${Pf.elements.map(e=>e.toFixed(4))} )`;switch(Qt.getTransfer(i)){case gs:return[t,"LinearTransferOETF"];case ae:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Df(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=(i.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+$v(i.getShaderSource(t),a)}else return s}function Kv(i,t){let e=Jv(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function jv(i,t){let e;switch(t){case Wu:e="Linear";break;case Xu:e="Reinhard";break;case qu:e="Cineon";break;case Aa:e="ACESFilmic";break;case Zu:e="AgX";break;case $u:e="Neutral";break;case Yu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var pl=new L;function Qv(){Qt.getLuminanceCoefficients(pl);let i=pl.x.toFixed(4),t=pl.y.toFixed(4),e=pl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function t_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(js).join(`
`)}function e_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function n_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(t,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function js(i){return i!==""}function Lf(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Uf(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var i_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jc(i){return i.replace(i_,s_)}var r_=new Map;function s_(i,t){let e=Kt[t];if(e===void 0){let n=r_.get(t);if(n!==void 0)e=Kt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Jc(e)}var o_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ff(i){return i.replace(o_,a_)}function a_(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Nf(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function l_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===_c?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===bu?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===qn&&(t="SHADOWMAP_TYPE_VSM"),t}function c_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ir:case rr:t="ENVMAP_TYPE_CUBE";break;case qs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function h_(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case rr:t="ENVMAP_MODE_REFRACTION";break}return t}function u_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ta:t="ENVMAP_BLENDING_MULTIPLY";break;case Hu:t="ENVMAP_BLENDING_MIX";break;case Gu:t="ENVMAP_BLENDING_ADD";break}return t}function f_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function d_(i,t,e,n){let r=i.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,c=l_(e),l=c_(e),h=h_(e),u=u_(e),f=f_(e),d=t_(e),g=e_(s),v=r.createProgram(),m,p,A=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(js).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(js).join(`
`),p.length>0&&(p+=`
`)):(m=[Nf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(js).join(`
`),p=[Nf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==di?"#define TONE_MAPPING":"",e.toneMapping!==di?Kt.tonemapping_pars_fragment:"",e.toneMapping!==di?jv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,Kv("linearToOutputTexel",e.outputColorSpace),Qv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(js).join(`
`)),o=Jc(o),o=Lf(o,e),o=Uf(o,e),a=Jc(a),a=Lf(a,e),a=Uf(a,e),o=Ff(o),a=Ff(a),e.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Dc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Dc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let E=A+m+o,x=A+p+a,P=If(r,r.VERTEX_SHADER,E),T=If(r,r.FRAGMENT_SHADER,x);r.attachShader(v,P),r.attachShader(v,T),e.index0AttributeName!==void 0?r.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function D(I){if(i.debug.checkShaderErrors){let B=r.getProgramInfoLog(v)||"",J=r.getShaderInfoLog(P)||"",K=r.getShaderInfoLog(T)||"",j=B.trim(),W=J.trim(),it=K.trim(),Z=!0,at=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,v,P,T);else{let _t=Df(r,P,"vertex"),xt=Df(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+j+`
`+_t+`
`+xt)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(W===""||it==="")&&(at=!1);at&&(I.diagnostics={runnable:Z,programLog:j,vertexShader:{log:W,prefix:m},fragmentShader:{log:it,prefix:p}})}r.deleteShader(P),r.deleteShader(T),U=new Kr(r,v),y=n_(r,v)}let U;this.getUniforms=function(){return U===void 0&&D(this),U};let y;this.getAttributes=function(){return y===void 0&&D(this),y};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(v,Yv)),M},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Zv++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=P,this.fragmentShader=T,this}var p_=0,Kc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new jc(t),e.set(t,n)),n}},jc=class{constructor(t){this.id=p_++,this.code=t,this.usedTimes=0}};function m_(i,t,e,n,r,s,o){let a=new Or,c=new Kc,l=new Set,h=[],u=r.logarithmicDepthBuffer,f=r.vertexTextures,d=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return l.add(y),y===0?"uv":`uv${y}`}function m(y,M,I,B,J){let K=B.fog,j=J.geometry,W=y.isMeshStandardMaterial?B.environment:null,it=(y.isMeshStandardMaterial?e:t).get(y.envMap||W),Z=it&&it.mapping===qs?it.image.height:null,at=g[y.type];y.precision!==null&&(d=r.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));let _t=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,xt=_t!==void 0?_t.length:0,Ft=0;j.morphAttributes.position!==void 0&&(Ft=1),j.morphAttributes.normal!==void 0&&(Ft=2),j.morphAttributes.color!==void 0&&(Ft=3);let Nt,Ht,Ct,R;if(at){let se=Zn[at];Nt=se.vertexShader,Ht=se.fragmentShader}else Nt=y.vertexShader,Ht=y.fragmentShader,c.update(y),Ct=c.getVertexShaderID(y),R=c.getFragmentShaderID(y);let C=i.getRenderTarget(),z=i.state.buffers.depth.getReversed(),X=J.isInstancedMesh===!0,q=J.isBatchedMesh===!0,$=!!y.map,rt=!!y.matcap,b=!!it,F=!!y.aoMap,V=!!y.lightMap,Y=!!y.bumpMap,O=!!y.normalMap,ht=!!y.displacementMap,st=!!y.emissiveMap,ct=!!y.metalnessMap,Dt=!!y.roughnessMap,yt=y.anisotropy>0,w=y.clearcoat>0,_=y.dispersion>0,k=y.iridescence>0,et=y.sheen>0,ot=y.transmission>0,nt=yt&&!!y.anisotropyMap,bt=w&&!!y.clearcoatMap,gt=w&&!!y.clearcoatNormalMap,Rt=w&&!!y.clearcoatRoughnessMap,Lt=k&&!!y.iridescenceMap,dt=k&&!!y.iridescenceThicknessMap,Tt=et&&!!y.sheenColorMap,Wt=et&&!!y.sheenRoughnessMap,Ot=!!y.specularMap,wt=!!y.specularColorMap,$t=!!y.specularIntensityMap,N=ot&&!!y.transmissionMap,vt=ot&&!!y.thicknessMap,Mt=!!y.gradientMap,It=!!y.alphaMap,pt=y.alphaTest>0,lt=!!y.alphaHash,Ut=!!y.extensions,qt=di;y.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(qt=i.toneMapping);let fe={shaderID:at,shaderType:y.type,shaderName:y.name,vertexShader:Nt,fragmentShader:Ht,defines:y.defines,customVertexShaderID:Ct,customFragmentShaderID:R,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:q,batchingColor:q&&J._colorsTexture!==null,instancing:X,instancingColor:X&&J.instanceColor!==null,instancingMorph:X&&J.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:C===null?i.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:ji,alphaToCoverage:!!y.alphaToCoverage,map:$,matcap:rt,envMap:b,envMapMode:b&&it.mapping,envMapCubeUVHeight:Z,aoMap:F,lightMap:V,bumpMap:Y,normalMap:O,displacementMap:f&&ht,emissiveMap:st,normalMapObjectSpace:O&&y.normalMapType===Qu,normalMapTangentSpace:O&&y.normalMapType===ul,metalnessMap:ct,roughnessMap:Dt,anisotropy:yt,anisotropyMap:nt,clearcoat:w,clearcoatMap:bt,clearcoatNormalMap:gt,clearcoatRoughnessMap:Rt,dispersion:_,iridescence:k,iridescenceMap:Lt,iridescenceThicknessMap:dt,sheen:et,sheenColorMap:Tt,sheenRoughnessMap:Wt,specularMap:Ot,specularColorMap:wt,specularIntensityMap:$t,transmission:ot,transmissionMap:N,thicknessMap:vt,gradientMap:Mt,opaque:y.transparent===!1&&y.blending===$i&&y.alphaToCoverage===!1,alphaMap:It,alphaTest:pt,alphaHash:lt,combine:y.combine,mapUv:$&&v(y.map.channel),aoMapUv:F&&v(y.aoMap.channel),lightMapUv:V&&v(y.lightMap.channel),bumpMapUv:Y&&v(y.bumpMap.channel),normalMapUv:O&&v(y.normalMap.channel),displacementMapUv:ht&&v(y.displacementMap.channel),emissiveMapUv:st&&v(y.emissiveMap.channel),metalnessMapUv:ct&&v(y.metalnessMap.channel),roughnessMapUv:Dt&&v(y.roughnessMap.channel),anisotropyMapUv:nt&&v(y.anisotropyMap.channel),clearcoatMapUv:bt&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:gt&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Rt&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Lt&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:dt&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:Wt&&v(y.sheenRoughnessMap.channel),specularMapUv:Ot&&v(y.specularMap.channel),specularColorMapUv:wt&&v(y.specularColorMap.channel),specularIntensityMapUv:$t&&v(y.specularIntensityMap.channel),transmissionMapUv:N&&v(y.transmissionMap.channel),thicknessMapUv:vt&&v(y.thicknessMap.channel),alphaMapUv:It&&v(y.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(O||yt),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!j.attributes.uv&&($||It),fog:!!K,useFog:y.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:z,skinning:J.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:xt,morphTextureStride:Ft,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:qt,decodeVideoTexture:$&&y.map.isVideoTexture===!0&&Qt.getTransfer(y.map.colorSpace)===ae,decodeVideoTextureEmissive:st&&y.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(y.emissiveMap.colorSpace)===ae,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ke,flipSided:y.side===Je,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ut&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ut&&y.extensions.multiDraw===!0||q)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return fe.vertexUv1s=l.has(1),fe.vertexUv2s=l.has(2),fe.vertexUv3s=l.has(3),l.clear(),fe}function p(y){let M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(let I in y.defines)M.push(I),M.push(y.defines[I]);return y.isRawShaderMaterial===!1&&(A(M,y),E(M,y),M.push(i.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function A(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function E(y,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),y.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),y.push(a.mask)}function x(y){let M=g[y.type],I;if(M){let B=Zn[M];I=uf.clone(B.uniforms)}else I=y.uniforms;return I}function P(y,M){let I;for(let B=0,J=h.length;B<J;B++){let K=h[B];if(K.cacheKey===M){I=K,++I.usedTimes;break}}return I===void 0&&(I=new d_(i,M,y,s),h.push(I)),I}function T(y){if(--y.usedTimes===0){let M=h.indexOf(y);h[M]=h[h.length-1],h.pop(),y.destroy()}}function D(y){c.remove(y)}function U(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:P,releaseProgram:T,releaseShaderCache:D,programs:h,dispose:U}}function g_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,c){i.get(o)[a]=c}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function v_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Of(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Bf(){let i=[],t=0,e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(u,f,d,g,v,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=v,p.group=m),t++,p}function a(u,f,d,g,v,m){let p=o(u,f,d,g,v,m);d.transmission>0?n.push(p):d.transparent===!0?r.push(p):e.push(p)}function c(u,f,d,g,v,m){let p=o(u,f,d,g,v,m);d.transmission>0?n.unshift(p):d.transparent===!0?r.unshift(p):e.unshift(p)}function l(u,f){e.length>1&&e.sort(u||v_),n.length>1&&n.sort(f||Of),r.length>1&&r.sort(f||Of)}function h(){for(let u=t,f=i.length;u<f;u++){let d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:a,unshift:c,finish:h,sort:l}}function __(){let i=new WeakMap;function t(n,r){let s=i.get(n),o;return s===void 0?(o=new Bf,i.set(n,[o])):r>=s.length?(o=new Bf,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function x_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Vt};break;case"SpotLight":e={position:new L,direction:new L,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":e={color:new Vt,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function y_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var M_=0;function S_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function b_(i){let t=new x_,e=y_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);let r=new L,s=new ee,o=new ee;function a(l){let h=0,u=0,f=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let d=0,g=0,v=0,m=0,p=0,A=0,E=0,x=0,P=0,T=0,D=0;l.sort(S_);for(let y=0,M=l.length;y<M;y++){let I=l[y],B=I.color,J=I.intensity,K=I.distance,j=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=B.r*J,u+=B.g*J,f+=B.b*J;else if(I.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(I.sh.coefficients[W],J);D++}else if(I.isDirectionalLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let it=I.shadow,Z=e.get(I);Z.shadowIntensity=it.intensity,Z.shadowBias=it.bias,Z.shadowNormalBias=it.normalBias,Z.shadowRadius=it.radius,Z.shadowMapSize=it.mapSize,n.directionalShadow[d]=Z,n.directionalShadowMap[d]=j,n.directionalShadowMatrix[d]=I.shadow.matrix,A++}n.directional[d]=W,d++}else if(I.isSpotLight){let W=t.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(B).multiplyScalar(J),W.distance=K,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,n.spot[v]=W;let it=I.shadow;if(I.map&&(n.spotLightMap[P]=I.map,P++,it.updateMatrices(I),I.castShadow&&T++),n.spotLightMatrix[v]=it.matrix,I.castShadow){let Z=e.get(I);Z.shadowIntensity=it.intensity,Z.shadowBias=it.bias,Z.shadowNormalBias=it.normalBias,Z.shadowRadius=it.radius,Z.shadowMapSize=it.mapSize,n.spotShadow[v]=Z,n.spotShadowMap[v]=j,x++}v++}else if(I.isRectAreaLight){let W=t.get(I);W.color.copy(B).multiplyScalar(J),W.halfWidth.set(I.width*.5,0,0),W.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=W,m++}else if(I.isPointLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),W.distance=I.distance,W.decay=I.decay,I.castShadow){let it=I.shadow,Z=e.get(I);Z.shadowIntensity=it.intensity,Z.shadowBias=it.bias,Z.shadowNormalBias=it.normalBias,Z.shadowRadius=it.radius,Z.shadowMapSize=it.mapSize,Z.shadowCameraNear=it.camera.near,Z.shadowCameraFar=it.camera.far,n.pointShadow[g]=Z,n.pointShadowMap[g]=j,n.pointShadowMatrix[g]=I.shadow.matrix,E++}n.point[g]=W,g++}else if(I.isHemisphereLight){let W=t.get(I);W.skyColor.copy(I.color).multiplyScalar(J),W.groundColor.copy(I.groundColor).multiplyScalar(J),n.hemi[p]=W,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=St.LTC_FLOAT_1,n.rectAreaLTC2=St.LTC_FLOAT_2):(n.rectAreaLTC1=St.LTC_HALF_1,n.rectAreaLTC2=St.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let U=n.hash;(U.directionalLength!==d||U.pointLength!==g||U.spotLength!==v||U.rectAreaLength!==m||U.hemiLength!==p||U.numDirectionalShadows!==A||U.numPointShadows!==E||U.numSpotShadows!==x||U.numSpotMaps!==P||U.numLightProbes!==D)&&(n.directional.length=d,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=x+P-T,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=D,U.directionalLength=d,U.pointLength=g,U.spotLength=v,U.rectAreaLength=m,U.hemiLength=p,U.numDirectionalShadows=A,U.numPointShadows=E,U.numSpotShadows=x,U.numSpotMaps=P,U.numLightProbes=D,n.version=M_++)}function c(l,h){let u=0,f=0,d=0,g=0,v=0,m=h.matrixWorldInverse;for(let p=0,A=l.length;p<A;p++){let E=l[p];if(E.isDirectionalLight){let x=n.directional[u];x.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),u++}else if(E.isSpotLight){let x=n.spot[d];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),d++}else if(E.isRectAreaLight){let x=n.rectArea[g];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(E.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(E.width*.5,0,0),x.halfHeight.set(0,E.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){let x=n.point[f];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),f++}else if(E.isHemisphereLight){let x=n.hemi[v];x.direction.setFromMatrixPosition(E.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:a,setupView:c,state:n}}function zf(i){let t=new b_(i),e=[],n=[];function r(h){l.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function w_(i){let t=new WeakMap;function e(r,s=0){let o=t.get(r),a;return o===void 0?(a=new zf(i),t.set(r,[a])):s>=o.length?(a=new zf(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var E_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,T_=`uniform sampler2D shadow_pass;
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
}`;function A_(i,t,e){let n=new zr,r=new ut,s=new ut,o=new ye,a=new aa({depthPacking:ju}),c=new la,l={},h=e.maxTextureSize,u={[oi]:Je,[Je]:oi,[Ke]:Ke},f=new hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:E_,fragmentShader:T_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new oe;g.setAttribute("position",new Ae(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new ue(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_c;let p=this.type;this.render=function(T,D,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let y=i.getRenderTarget(),M=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),B=i.state;B.setBlending(fi),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let J=p!==qn&&this.type===qn,K=p===qn&&this.type!==qn;for(let j=0,W=T.length;j<W;j++){let it=T[j],Z=it.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",it,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;r.copy(Z.mapSize);let at=Z.getFrameExtents();if(r.multiply(at),s.copy(Z.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/at.x),r.x=s.x*at.x,Z.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/at.y),r.y=s.y*at.y,Z.mapSize.y=s.y)),Z.map===null||J===!0||K===!0){let xt=this.type!==qn?{minFilter:$e,magFilter:$e}:{};Z.map!==null&&Z.map.dispose(),Z.map=new Gn(r.x,r.y,xt),Z.map.texture.name=it.name+".shadowMap",Z.camera.updateProjectionMatrix()}i.setRenderTarget(Z.map),i.clear();let _t=Z.getViewportCount();for(let xt=0;xt<_t;xt++){let Ft=Z.getViewport(xt);o.set(s.x*Ft.x,s.y*Ft.y,s.x*Ft.z,s.y*Ft.w),B.viewport(o),Z.updateMatrices(it,xt),n=Z.getFrustum(),x(D,U,Z.camera,it,this.type)}Z.isPointLightShadow!==!0&&this.type===qn&&A(Z,U),Z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(y,M,I)};function A(T,D){let U=t.update(v);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Gn(r.x,r.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(D,null,U,f,v,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(D,null,U,d,v,null)}function E(T,D,U,y){let M=null,I=U.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)M=I;else if(M=U.isPointLight===!0?c:a,i.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){let B=M.uuid,J=D.uuid,K=l[B];K===void 0&&(K={},l[B]=K);let j=K[J];j===void 0&&(j=M.clone(),K[J]=j,D.addEventListener("dispose",P)),M=j}if(M.visible=D.visible,M.wireframe=D.wireframe,y===qn?M.side=D.shadowSide!==null?D.shadowSide:D.side:M.side=D.shadowSide!==null?D.shadowSide:u[D.side],M.alphaMap=D.alphaMap,M.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,M.map=D.map,M.clipShadows=D.clipShadows,M.clippingPlanes=D.clippingPlanes,M.clipIntersection=D.clipIntersection,M.displacementMap=D.displacementMap,M.displacementScale=D.displacementScale,M.displacementBias=D.displacementBias,M.wireframeLinewidth=D.wireframeLinewidth,M.linewidth=D.linewidth,U.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let B=i.properties.get(M);B.light=U}return M}function x(T,D,U,y,M){if(T.visible===!1)return;if(T.layers.test(D.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===qn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,T.matrixWorld);let J=t.update(T),K=T.material;if(Array.isArray(K)){let j=J.groups;for(let W=0,it=j.length;W<it;W++){let Z=j[W],at=K[Z.materialIndex];if(at&&at.visible){let _t=E(T,at,y,M);T.onBeforeShadow(i,T,D,U,J,_t,Z),i.renderBufferDirect(U,null,J,_t,T,Z),T.onAfterShadow(i,T,D,U,J,_t,Z)}}}else if(K.visible){let j=E(T,K,y,M);T.onBeforeShadow(i,T,D,U,J,j,null),i.renderBufferDirect(U,null,J,j,T,null),T.onAfterShadow(i,T,D,U,J,j,null)}}let B=T.children;for(let J=0,K=B.length;J<K;J++)x(B[J],D,U,y,M)}function P(T){T.target.removeEventListener("dispose",P);for(let U in l){let y=l[U],M=T.target.uuid;M in y&&(y[M].dispose(),delete y[M])}}}var C_={[xa]:ya,[Ma]:wa,[Sa]:Ea,[Ji]:ba,[ya]:xa,[wa]:Ma,[Ea]:Sa,[ba]:Ji};function R_(i,t){function e(){let N=!1,vt=new ye,Mt=null,It=new ye(0,0,0,0);return{setMask:function(pt){Mt!==pt&&!N&&(i.colorMask(pt,pt,pt,pt),Mt=pt)},setLocked:function(pt){N=pt},setClear:function(pt,lt,Ut,qt,fe){fe===!0&&(pt*=qt,lt*=qt,Ut*=qt),vt.set(pt,lt,Ut,qt),It.equals(vt)===!1&&(i.clearColor(pt,lt,Ut,qt),It.copy(vt))},reset:function(){N=!1,Mt=null,It.set(-1,0,0,0)}}}function n(){let N=!1,vt=!1,Mt=null,It=null,pt=null;return{setReversed:function(lt){if(vt!==lt){let Ut=t.get("EXT_clip_control");lt?Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.ZERO_TO_ONE_EXT):Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.NEGATIVE_ONE_TO_ONE_EXT),vt=lt;let qt=pt;pt=null,this.setClear(qt)}},getReversed:function(){return vt},setTest:function(lt){lt?C(i.DEPTH_TEST):z(i.DEPTH_TEST)},setMask:function(lt){Mt!==lt&&!N&&(i.depthMask(lt),Mt=lt)},setFunc:function(lt){if(vt&&(lt=C_[lt]),It!==lt){switch(lt){case xa:i.depthFunc(i.NEVER);break;case ya:i.depthFunc(i.ALWAYS);break;case Ma:i.depthFunc(i.LESS);break;case Ji:i.depthFunc(i.LEQUAL);break;case Sa:i.depthFunc(i.EQUAL);break;case ba:i.depthFunc(i.GEQUAL);break;case wa:i.depthFunc(i.GREATER);break;case Ea:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}It=lt}},setLocked:function(lt){N=lt},setClear:function(lt){pt!==lt&&(vt&&(lt=1-lt),i.clearDepth(lt),pt=lt)},reset:function(){N=!1,Mt=null,It=null,pt=null,vt=!1}}}function r(){let N=!1,vt=null,Mt=null,It=null,pt=null,lt=null,Ut=null,qt=null,fe=null;return{setTest:function(se){N||(se?C(i.STENCIL_TEST):z(i.STENCIL_TEST))},setMask:function(se){vt!==se&&!N&&(i.stencilMask(se),vt=se)},setFunc:function(se,jn,kn){(Mt!==se||It!==jn||pt!==kn)&&(i.stencilFunc(se,jn,kn),Mt=se,It=jn,pt=kn)},setOp:function(se,jn,kn){(lt!==se||Ut!==jn||qt!==kn)&&(i.stencilOp(se,jn,kn),lt=se,Ut=jn,qt=kn)},setLocked:function(se){N=se},setClear:function(se){fe!==se&&(i.clearStencil(se),fe=se)},reset:function(){N=!1,vt=null,Mt=null,It=null,pt=null,lt=null,Ut=null,qt=null,fe=null}}}let s=new e,o=new n,a=new r,c=new WeakMap,l=new WeakMap,h={},u={},f=new WeakMap,d=[],g=null,v=!1,m=null,p=null,A=null,E=null,x=null,P=null,T=null,D=new Vt(0,0,0),U=0,y=!1,M=null,I=null,B=null,J=null,K=null,j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,it=0,Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(Z)[1]),W=it>=1):Z.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),W=it>=2);let at=null,_t={},xt=i.getParameter(i.SCISSOR_BOX),Ft=i.getParameter(i.VIEWPORT),Nt=new ye().fromArray(xt),Ht=new ye().fromArray(Ft);function Ct(N,vt,Mt,It){let pt=new Uint8Array(4),lt=i.createTexture();i.bindTexture(N,lt),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ut=0;Ut<Mt;Ut++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(vt,0,i.RGBA,1,1,It,0,i.RGBA,i.UNSIGNED_BYTE,pt):i.texImage2D(vt+Ut,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pt);return lt}let R={};R[i.TEXTURE_2D]=Ct(i.TEXTURE_2D,i.TEXTURE_2D,1),R[i.TEXTURE_CUBE_MAP]=Ct(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),R[i.TEXTURE_2D_ARRAY]=Ct(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),R[i.TEXTURE_3D]=Ct(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),C(i.DEPTH_TEST),o.setFunc(Ji),Y(!1),O(vc),C(i.CULL_FACE),F(fi);function C(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}function z(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}function X(N,vt){return u[N]!==vt?(i.bindFramebuffer(N,vt),u[N]=vt,N===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=vt),N===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=vt),!0):!1}function q(N,vt){let Mt=d,It=!1;if(N){Mt=f.get(vt),Mt===void 0&&(Mt=[],f.set(vt,Mt));let pt=N.textures;if(Mt.length!==pt.length||Mt[0]!==i.COLOR_ATTACHMENT0){for(let lt=0,Ut=pt.length;lt<Ut;lt++)Mt[lt]=i.COLOR_ATTACHMENT0+lt;Mt.length=pt.length,It=!0}}else Mt[0]!==i.BACK&&(Mt[0]=i.BACK,It=!0);It&&i.drawBuffers(Mt)}function $(N){return g!==N?(i.useProgram(N),g=N,!0):!1}let rt={[Ai]:i.FUNC_ADD,[Eu]:i.FUNC_SUBTRACT,[Tu]:i.FUNC_REVERSE_SUBTRACT};rt[Au]=i.MIN,rt[Cu]=i.MAX;let b={[Ru]:i.ZERO,[Iu]:i.ONE,[Pu]:i.SRC_COLOR,[Wo]:i.SRC_ALPHA,[Ou]:i.SRC_ALPHA_SATURATE,[Fu]:i.DST_COLOR,[Lu]:i.DST_ALPHA,[Du]:i.ONE_MINUS_SRC_COLOR,[Xo]:i.ONE_MINUS_SRC_ALPHA,[Nu]:i.ONE_MINUS_DST_COLOR,[Uu]:i.ONE_MINUS_DST_ALPHA,[Bu]:i.CONSTANT_COLOR,[zu]:i.ONE_MINUS_CONSTANT_COLOR,[ku]:i.CONSTANT_ALPHA,[Vu]:i.ONE_MINUS_CONSTANT_ALPHA};function F(N,vt,Mt,It,pt,lt,Ut,qt,fe,se){if(N===fi){v===!0&&(z(i.BLEND),v=!1);return}if(v===!1&&(C(i.BLEND),v=!0),N!==wu){if(N!==m||se!==y){if((p!==Ai||x!==Ai)&&(i.blendEquation(i.FUNC_ADD),p=Ai,x=Ai),se)switch(N){case $i:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xc:i.blendFunc(i.ONE,i.ONE);break;case yc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Mc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case $i:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case yc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Mc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}A=null,E=null,P=null,T=null,D.set(0,0,0),U=0,m=N,y=se}return}pt=pt||vt,lt=lt||Mt,Ut=Ut||It,(vt!==p||pt!==x)&&(i.blendEquationSeparate(rt[vt],rt[pt]),p=vt,x=pt),(Mt!==A||It!==E||lt!==P||Ut!==T)&&(i.blendFuncSeparate(b[Mt],b[It],b[lt],b[Ut]),A=Mt,E=It,P=lt,T=Ut),(qt.equals(D)===!1||fe!==U)&&(i.blendColor(qt.r,qt.g,qt.b,fe),D.copy(qt),U=fe),m=N,y=!1}function V(N,vt){N.side===Ke?z(i.CULL_FACE):C(i.CULL_FACE);let Mt=N.side===Je;vt&&(Mt=!Mt),Y(Mt),N.blending===$i&&N.transparent===!1?F(fi):F(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),s.setMask(N.colorWrite);let It=N.stencilWrite;a.setTest(It),It&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),st(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?C(i.SAMPLE_ALPHA_TO_COVERAGE):z(i.SAMPLE_ALPHA_TO_COVERAGE)}function Y(N){M!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),M=N)}function O(N){N!==Mu?(C(i.CULL_FACE),N!==I&&(N===vc?i.cullFace(i.BACK):N===Su?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):z(i.CULL_FACE),I=N}function ht(N){N!==B&&(W&&i.lineWidth(N),B=N)}function st(N,vt,Mt){N?(C(i.POLYGON_OFFSET_FILL),(J!==vt||K!==Mt)&&(i.polygonOffset(vt,Mt),J=vt,K=Mt)):z(i.POLYGON_OFFSET_FILL)}function ct(N){N?C(i.SCISSOR_TEST):z(i.SCISSOR_TEST)}function Dt(N){N===void 0&&(N=i.TEXTURE0+j-1),at!==N&&(i.activeTexture(N),at=N)}function yt(N,vt,Mt){Mt===void 0&&(at===null?Mt=i.TEXTURE0+j-1:Mt=at);let It=_t[Mt];It===void 0&&(It={type:void 0,texture:void 0},_t[Mt]=It),(It.type!==N||It.texture!==vt)&&(at!==Mt&&(i.activeTexture(Mt),at=Mt),i.bindTexture(N,vt||R[N]),It.type=N,It.texture=vt)}function w(){let N=_t[at];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function _(){try{i.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function k(){try{i.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function et(){try{i.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ot(){try{i.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function nt(){try{i.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function bt(){try{i.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function gt(){try{i.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Rt(){try{i.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Lt(){try{i.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function dt(){try{i.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Tt(N){Nt.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),Nt.copy(N))}function Wt(N){Ht.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),Ht.copy(N))}function Ot(N,vt){let Mt=l.get(vt);Mt===void 0&&(Mt=new WeakMap,l.set(vt,Mt));let It=Mt.get(N);It===void 0&&(It=i.getUniformBlockIndex(vt,N.name),Mt.set(N,It))}function wt(N,vt){let It=l.get(vt).get(N);c.get(vt)!==It&&(i.uniformBlockBinding(vt,It,N.__bindingPointIndex),c.set(vt,It))}function $t(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},at=null,_t={},u={},f=new WeakMap,d=[],g=null,v=!1,m=null,p=null,A=null,E=null,x=null,P=null,T=null,D=new Vt(0,0,0),U=0,y=!1,M=null,I=null,B=null,J=null,K=null,Nt.set(0,0,i.canvas.width,i.canvas.height),Ht.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:C,disable:z,bindFramebuffer:X,drawBuffers:q,useProgram:$,setBlending:F,setMaterial:V,setFlipSided:Y,setCullFace:O,setLineWidth:ht,setPolygonOffset:st,setScissorTest:ct,activeTexture:Dt,bindTexture:yt,unbindTexture:w,compressedTexImage2D:_,compressedTexImage3D:k,texImage2D:Lt,texImage3D:dt,updateUBOMapping:Ot,uniformBlockBinding:wt,texStorage2D:gt,texStorage3D:Rt,texSubImage2D:et,texSubImage3D:ot,compressedTexSubImage2D:nt,compressedTexSubImage3D:bt,scissor:Tt,viewport:Wt,reset:$t}}function I_(i,t,e,n,r,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ut,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,_){return d?new OffscreenCanvas(w,_):Ur("canvas")}function v(w,_,k){let et=1,ot=yt(w);if((ot.width>k||ot.height>k)&&(et=k/Math.max(ot.width,ot.height)),et<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let nt=Math.floor(et*ot.width),bt=Math.floor(et*ot.height);u===void 0&&(u=g(nt,bt));let gt=_?g(nt,bt):u;return gt.width=nt,gt.height=bt,gt.getContext("2d").drawImage(w,0,0,nt,bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+nt+"x"+bt+")."),gt}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),w;return w}function m(w){return w.generateMipmaps}function p(w){i.generateMipmap(w)}function A(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(w,_,k,et,ot=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let nt=_;if(_===i.RED&&(k===i.FLOAT&&(nt=i.R32F),k===i.HALF_FLOAT&&(nt=i.R16F),k===i.UNSIGNED_BYTE&&(nt=i.R8)),_===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(nt=i.R8UI),k===i.UNSIGNED_SHORT&&(nt=i.R16UI),k===i.UNSIGNED_INT&&(nt=i.R32UI),k===i.BYTE&&(nt=i.R8I),k===i.SHORT&&(nt=i.R16I),k===i.INT&&(nt=i.R32I)),_===i.RG&&(k===i.FLOAT&&(nt=i.RG32F),k===i.HALF_FLOAT&&(nt=i.RG16F),k===i.UNSIGNED_BYTE&&(nt=i.RG8)),_===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(nt=i.RG8UI),k===i.UNSIGNED_SHORT&&(nt=i.RG16UI),k===i.UNSIGNED_INT&&(nt=i.RG32UI),k===i.BYTE&&(nt=i.RG8I),k===i.SHORT&&(nt=i.RG16I),k===i.INT&&(nt=i.RG32I)),_===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(nt=i.RGB8UI),k===i.UNSIGNED_SHORT&&(nt=i.RGB16UI),k===i.UNSIGNED_INT&&(nt=i.RGB32UI),k===i.BYTE&&(nt=i.RGB8I),k===i.SHORT&&(nt=i.RGB16I),k===i.INT&&(nt=i.RGB32I)),_===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(nt=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(nt=i.RGBA16UI),k===i.UNSIGNED_INT&&(nt=i.RGBA32UI),k===i.BYTE&&(nt=i.RGBA8I),k===i.SHORT&&(nt=i.RGBA16I),k===i.INT&&(nt=i.RGBA32I)),_===i.RGB&&(k===i.UNSIGNED_INT_5_9_9_9_REV&&(nt=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&(nt=i.R11F_G11F_B10F)),_===i.RGBA){let bt=ot?gs:Qt.getTransfer(et);k===i.FLOAT&&(nt=i.RGBA32F),k===i.HALF_FLOAT&&(nt=i.RGBA16F),k===i.UNSIGNED_BYTE&&(nt=bt===ae?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(nt=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(nt=i.RGB5_A1)}return(nt===i.R16F||nt===i.R32F||nt===i.RG16F||nt===i.RG32F||nt===i.RGBA16F||nt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function x(w,_){let k;return w?_===null||_===Fi||_===Yr?k=i.DEPTH24_STENCIL8:_===Yn?k=i.DEPTH32F_STENCIL8:_===Xr&&(k=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Fi||_===Yr?k=i.DEPTH_COMPONENT24:_===Yn?k=i.DEPTH_COMPONENT32F:_===Xr&&(k=i.DEPTH_COMPONENT16),k}function P(w,_){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==$e&&w.minFilter!==Ge?Math.log2(Math.max(_.width,_.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?_.mipmaps.length:1}function T(w){let _=w.target;_.removeEventListener("dispose",T),U(_),_.isVideoTexture&&h.delete(_)}function D(w){let _=w.target;_.removeEventListener("dispose",D),M(_)}function U(w){let _=n.get(w);if(_.__webglInit===void 0)return;let k=w.source,et=f.get(k);if(et){let ot=et[_.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&y(w),Object.keys(et).length===0&&f.delete(k)}n.remove(w)}function y(w){let _=n.get(w);i.deleteTexture(_.__webglTexture);let k=w.source,et=f.get(k);delete et[_.__cacheKey],o.memory.textures--}function M(w){let _=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(_.__webglFramebuffer[et]))for(let ot=0;ot<_.__webglFramebuffer[et].length;ot++)i.deleteFramebuffer(_.__webglFramebuffer[et][ot]);else i.deleteFramebuffer(_.__webglFramebuffer[et]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[et])}else{if(Array.isArray(_.__webglFramebuffer))for(let et=0;et<_.__webglFramebuffer.length;et++)i.deleteFramebuffer(_.__webglFramebuffer[et]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let et=0;et<_.__webglColorRenderbuffer.length;et++)_.__webglColorRenderbuffer[et]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[et]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let k=w.textures;for(let et=0,ot=k.length;et<ot;et++){let nt=n.get(k[et]);nt.__webglTexture&&(i.deleteTexture(nt.__webglTexture),o.memory.textures--),n.remove(k[et])}n.remove(w)}let I=0;function B(){I=0}function J(){let w=I;return w>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),I+=1,w}function K(w){let _=[];return _.push(w.wrapS),_.push(w.wrapT),_.push(w.wrapR||0),_.push(w.magFilter),_.push(w.minFilter),_.push(w.anisotropy),_.push(w.internalFormat),_.push(w.format),_.push(w.type),_.push(w.generateMipmaps),_.push(w.premultiplyAlpha),_.push(w.flipY),_.push(w.unpackAlignment),_.push(w.colorSpace),_.join()}function j(w,_){let k=n.get(w);if(w.isVideoTexture&&ct(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&k.__version!==w.version){let et=w.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{R(k,w,_);return}}else w.isExternalTexture&&(k.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+_)}function W(w,_){let k=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&k.__version!==w.version){R(k,w,_);return}e.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+_)}function it(w,_){let k=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&k.__version!==w.version){R(k,w,_);return}e.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+_)}function Z(w,_){let k=n.get(w);if(w.version>0&&k.__version!==w.version){C(k,w,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+_)}let at={[ai]:i.REPEAT,[In]:i.CLAMP_TO_EDGE,[Ki]:i.MIRRORED_REPEAT},_t={[$e]:i.NEAREST,[Ju]:i.NEAREST_MIPMAP_NEAREST,[Ys]:i.NEAREST_MIPMAP_LINEAR,[Ge]:i.LINEAR,[Ia]:i.LINEAR_MIPMAP_NEAREST,[Ln]:i.LINEAR_MIPMAP_LINEAR},xt={[tf]:i.NEVER,[af]:i.ALWAYS,[ef]:i.LESS,[Pc]:i.LEQUAL,[nf]:i.EQUAL,[of]:i.GEQUAL,[rf]:i.GREATER,[sf]:i.NOTEQUAL};function Ft(w,_){if(_.type===Yn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Ge||_.magFilter===Ia||_.magFilter===Ys||_.magFilter===Ln||_.minFilter===Ge||_.minFilter===Ia||_.minFilter===Ys||_.minFilter===Ln)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,at[_.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,at[_.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,at[_.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,_t[_.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,_t[_.minFilter]),_.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,xt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===$e||_.minFilter!==Ys&&_.minFilter!==Ln||_.type===Yn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let k=t.get("EXT_texture_filter_anisotropic");i.texParameterf(w,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Nt(w,_){let k=!1;w.__webglInit===void 0&&(w.__webglInit=!0,_.addEventListener("dispose",T));let et=_.source,ot=f.get(et);ot===void 0&&(ot={},f.set(et,ot));let nt=K(_);if(nt!==w.__cacheKey){ot[nt]===void 0&&(ot[nt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,k=!0),ot[nt].usedTimes++;let bt=ot[w.__cacheKey];bt!==void 0&&(ot[w.__cacheKey].usedTimes--,bt.usedTimes===0&&y(_)),w.__cacheKey=nt,w.__webglTexture=ot[nt].texture}return k}function Ht(w,_,k){return Math.floor(Math.floor(w/k)/_)}function Ct(w,_,k,et){let nt=w.updateRanges;if(nt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,k,et,_.data);else{nt.sort((dt,Tt)=>dt.start-Tt.start);let bt=0;for(let dt=1;dt<nt.length;dt++){let Tt=nt[bt],Wt=nt[dt],Ot=Tt.start+Tt.count,wt=Ht(Wt.start,_.width,4),$t=Ht(Tt.start,_.width,4);Wt.start<=Ot+1&&wt===$t&&Ht(Wt.start+Wt.count-1,_.width,4)===wt?Tt.count=Math.max(Tt.count,Wt.start+Wt.count-Tt.start):(++bt,nt[bt]=Wt)}nt.length=bt+1;let gt=i.getParameter(i.UNPACK_ROW_LENGTH),Rt=i.getParameter(i.UNPACK_SKIP_PIXELS),Lt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let dt=0,Tt=nt.length;dt<Tt;dt++){let Wt=nt[dt],Ot=Math.floor(Wt.start/4),wt=Math.ceil(Wt.count/4),$t=Ot%_.width,N=Math.floor(Ot/_.width),vt=wt,Mt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,$t),i.pixelStorei(i.UNPACK_SKIP_ROWS,N),e.texSubImage2D(i.TEXTURE_2D,0,$t,N,vt,Mt,k,et,_.data)}w.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,gt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Rt),i.pixelStorei(i.UNPACK_SKIP_ROWS,Lt)}}function R(w,_,k){let et=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(et=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(et=i.TEXTURE_3D);let ot=Nt(w,_),nt=_.source;e.bindTexture(et,w.__webglTexture,i.TEXTURE0+k);let bt=n.get(nt);if(nt.version!==bt.__version||ot===!0){e.activeTexture(i.TEXTURE0+k);let gt=Qt.getPrimaries(Qt.workingColorSpace),Rt=_.colorSpace===pi?null:Qt.getPrimaries(_.colorSpace),Lt=_.colorSpace===pi||gt===Rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);let dt=v(_.image,!1,r.maxTextureSize);dt=Dt(_,dt);let Tt=s.convert(_.format,_.colorSpace),Wt=s.convert(_.type),Ot=E(_.internalFormat,Tt,Wt,_.colorSpace,_.isVideoTexture);Ft(et,_);let wt,$t=_.mipmaps,N=_.isVideoTexture!==!0,vt=bt.__version===void 0||ot===!0,Mt=nt.dataReady,It=P(_,dt);if(_.isDepthTexture)Ot=x(_.format===Zr,_.type),vt&&(N?e.texStorage2D(i.TEXTURE_2D,1,Ot,dt.width,dt.height):e.texImage2D(i.TEXTURE_2D,0,Ot,dt.width,dt.height,0,Tt,Wt,null));else if(_.isDataTexture)if($t.length>0){N&&vt&&e.texStorage2D(i.TEXTURE_2D,It,Ot,$t[0].width,$t[0].height);for(let pt=0,lt=$t.length;pt<lt;pt++)wt=$t[pt],N?Mt&&e.texSubImage2D(i.TEXTURE_2D,pt,0,0,wt.width,wt.height,Tt,Wt,wt.data):e.texImage2D(i.TEXTURE_2D,pt,Ot,wt.width,wt.height,0,Tt,Wt,wt.data);_.generateMipmaps=!1}else N?(vt&&e.texStorage2D(i.TEXTURE_2D,It,Ot,dt.width,dt.height),Mt&&Ct(_,dt,Tt,Wt)):e.texImage2D(i.TEXTURE_2D,0,Ot,dt.width,dt.height,0,Tt,Wt,dt.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){N&&vt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,It,Ot,$t[0].width,$t[0].height,dt.depth);for(let pt=0,lt=$t.length;pt<lt;pt++)if(wt=$t[pt],_.format!==wn)if(Tt!==null)if(N){if(Mt)if(_.layerUpdates.size>0){let Ut=kc(wt.width,wt.height,_.format,_.type);for(let qt of _.layerUpdates){let fe=wt.data.subarray(qt*Ut/wt.data.BYTES_PER_ELEMENT,(qt+1)*Ut/wt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pt,0,0,qt,wt.width,wt.height,1,Tt,fe)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pt,0,0,0,wt.width,wt.height,dt.depth,Tt,wt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,pt,Ot,wt.width,wt.height,dt.depth,0,wt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?Mt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,pt,0,0,0,wt.width,wt.height,dt.depth,Tt,Wt,wt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,pt,Ot,wt.width,wt.height,dt.depth,0,Tt,Wt,wt.data)}else{N&&vt&&e.texStorage2D(i.TEXTURE_2D,It,Ot,$t[0].width,$t[0].height);for(let pt=0,lt=$t.length;pt<lt;pt++)wt=$t[pt],_.format!==wn?Tt!==null?N?Mt&&e.compressedTexSubImage2D(i.TEXTURE_2D,pt,0,0,wt.width,wt.height,Tt,wt.data):e.compressedTexImage2D(i.TEXTURE_2D,pt,Ot,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?Mt&&e.texSubImage2D(i.TEXTURE_2D,pt,0,0,wt.width,wt.height,Tt,Wt,wt.data):e.texImage2D(i.TEXTURE_2D,pt,Ot,wt.width,wt.height,0,Tt,Wt,wt.data)}else if(_.isDataArrayTexture)if(N){if(vt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,It,Ot,dt.width,dt.height,dt.depth),Mt)if(_.layerUpdates.size>0){let pt=kc(dt.width,dt.height,_.format,_.type);for(let lt of _.layerUpdates){let Ut=dt.data.subarray(lt*pt/dt.data.BYTES_PER_ELEMENT,(lt+1)*pt/dt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,lt,dt.width,dt.height,1,Tt,Wt,Ut)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,Tt,Wt,dt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ot,dt.width,dt.height,dt.depth,0,Tt,Wt,dt.data);else if(_.isData3DTexture)N?(vt&&e.texStorage3D(i.TEXTURE_3D,It,Ot,dt.width,dt.height,dt.depth),Mt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,Tt,Wt,dt.data)):e.texImage3D(i.TEXTURE_3D,0,Ot,dt.width,dt.height,dt.depth,0,Tt,Wt,dt.data);else if(_.isFramebufferTexture){if(vt)if(N)e.texStorage2D(i.TEXTURE_2D,It,Ot,dt.width,dt.height);else{let pt=dt.width,lt=dt.height;for(let Ut=0;Ut<It;Ut++)e.texImage2D(i.TEXTURE_2D,Ut,Ot,pt,lt,0,Tt,Wt,null),pt>>=1,lt>>=1}}else if($t.length>0){if(N&&vt){let pt=yt($t[0]);e.texStorage2D(i.TEXTURE_2D,It,Ot,pt.width,pt.height)}for(let pt=0,lt=$t.length;pt<lt;pt++)wt=$t[pt],N?Mt&&e.texSubImage2D(i.TEXTURE_2D,pt,0,0,Tt,Wt,wt):e.texImage2D(i.TEXTURE_2D,pt,Ot,Tt,Wt,wt);_.generateMipmaps=!1}else if(N){if(vt){let pt=yt(dt);e.texStorage2D(i.TEXTURE_2D,It,Ot,pt.width,pt.height)}Mt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Tt,Wt,dt)}else e.texImage2D(i.TEXTURE_2D,0,Ot,Tt,Wt,dt);m(_)&&p(et),bt.__version=nt.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function C(w,_,k){if(_.image.length!==6)return;let et=Nt(w,_),ot=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+k);let nt=n.get(ot);if(ot.version!==nt.__version||et===!0){e.activeTexture(i.TEXTURE0+k);let bt=Qt.getPrimaries(Qt.workingColorSpace),gt=_.colorSpace===pi?null:Qt.getPrimaries(_.colorSpace),Rt=_.colorSpace===pi||bt===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);let Lt=_.isCompressedTexture||_.image[0].isCompressedTexture,dt=_.image[0]&&_.image[0].isDataTexture,Tt=[];for(let lt=0;lt<6;lt++)!Lt&&!dt?Tt[lt]=v(_.image[lt],!0,r.maxCubemapSize):Tt[lt]=dt?_.image[lt].image:_.image[lt],Tt[lt]=Dt(_,Tt[lt]);let Wt=Tt[0],Ot=s.convert(_.format,_.colorSpace),wt=s.convert(_.type),$t=E(_.internalFormat,Ot,wt,_.colorSpace),N=_.isVideoTexture!==!0,vt=nt.__version===void 0||et===!0,Mt=ot.dataReady,It=P(_,Wt);Ft(i.TEXTURE_CUBE_MAP,_);let pt;if(Lt){N&&vt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,It,$t,Wt.width,Wt.height);for(let lt=0;lt<6;lt++){pt=Tt[lt].mipmaps;for(let Ut=0;Ut<pt.length;Ut++){let qt=pt[Ut];_.format!==wn?Ot!==null?N?Mt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ut,0,0,qt.width,qt.height,Ot,qt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ut,$t,qt.width,qt.height,0,qt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?Mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ut,0,0,qt.width,qt.height,Ot,wt,qt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ut,$t,qt.width,qt.height,0,Ot,wt,qt.data)}}}else{if(pt=_.mipmaps,N&&vt){pt.length>0&&It++;let lt=yt(Tt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,It,$t,lt.width,lt.height)}for(let lt=0;lt<6;lt++)if(dt){N?Mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Tt[lt].width,Tt[lt].height,Ot,wt,Tt[lt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,$t,Tt[lt].width,Tt[lt].height,0,Ot,wt,Tt[lt].data);for(let Ut=0;Ut<pt.length;Ut++){let fe=pt[Ut].image[lt].image;N?Mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ut+1,0,0,fe.width,fe.height,Ot,wt,fe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ut+1,$t,fe.width,fe.height,0,Ot,wt,fe.data)}}else{N?Mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Ot,wt,Tt[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,$t,Ot,wt,Tt[lt]);for(let Ut=0;Ut<pt.length;Ut++){let qt=pt[Ut];N?Mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ut+1,0,0,Ot,wt,qt.image[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ut+1,$t,Ot,wt,qt.image[lt])}}}m(_)&&p(i.TEXTURE_CUBE_MAP),nt.__version=ot.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function z(w,_,k,et,ot,nt){let bt=s.convert(k.format,k.colorSpace),gt=s.convert(k.type),Rt=E(k.internalFormat,bt,gt,k.colorSpace),Lt=n.get(_),dt=n.get(k);if(dt.__renderTarget=_,!Lt.__hasExternalTextures){let Tt=Math.max(1,_.width>>nt),Wt=Math.max(1,_.height>>nt);ot===i.TEXTURE_3D||ot===i.TEXTURE_2D_ARRAY?e.texImage3D(ot,nt,Rt,Tt,Wt,_.depth,0,bt,gt,null):e.texImage2D(ot,nt,Rt,Tt,Wt,0,bt,gt,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),st(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,et,ot,dt.__webglTexture,0,ht(_)):(ot===i.TEXTURE_2D||ot>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,et,ot,dt.__webglTexture,nt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function X(w,_,k){if(i.bindRenderbuffer(i.RENDERBUFFER,w),_.depthBuffer){let et=_.depthTexture,ot=et&&et.isDepthTexture?et.type:null,nt=x(_.stencilBuffer,ot),bt=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=ht(_);st(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,gt,nt,_.width,_.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,gt,nt,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,nt,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,bt,i.RENDERBUFFER,w)}else{let et=_.textures;for(let ot=0;ot<et.length;ot++){let nt=et[ot],bt=s.convert(nt.format,nt.colorSpace),gt=s.convert(nt.type),Rt=E(nt.internalFormat,bt,gt,nt.colorSpace),Lt=ht(_);k&&st(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Lt,Rt,_.width,_.height):st(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Lt,Rt,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Rt,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function q(w,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let et=n.get(_.depthTexture);et.__renderTarget=_,(!et.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),j(_.depthTexture,0);let ot=et.__webglTexture,nt=ht(_);if(_.depthTexture.format===Dr)st(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ot,0,nt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ot,0);else if(_.depthTexture.format===Zr)st(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ot,0,nt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ot,0);else throw new Error("Unknown depthTexture format")}function $(w){let _=n.get(w),k=w.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==w.depthTexture){let et=w.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),et){let ot=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,et.removeEventListener("dispose",ot)};et.addEventListener("dispose",ot),_.__depthDisposeCallback=ot}_.__boundDepthTexture=et}if(w.depthTexture&&!_.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");let et=w.texture.mipmaps;et&&et.length>0?q(_.__webglFramebuffer[0],w):q(_.__webglFramebuffer,w)}else if(k){_.__webglDepthbuffer=[];for(let et=0;et<6;et++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[et]),_.__webglDepthbuffer[et]===void 0)_.__webglDepthbuffer[et]=i.createRenderbuffer(),X(_.__webglDepthbuffer[et],w,!1);else{let ot=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,nt=_.__webglDepthbuffer[et];i.bindRenderbuffer(i.RENDERBUFFER,nt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ot,i.RENDERBUFFER,nt)}}else{let et=w.texture.mipmaps;if(et&&et.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),X(_.__webglDepthbuffer,w,!1);else{let ot=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,nt=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,nt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ot,i.RENDERBUFFER,nt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(w,_,k){let et=n.get(w);_!==void 0&&z(et.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&$(w)}function b(w){let _=w.texture,k=n.get(w),et=n.get(_);w.addEventListener("dispose",D);let ot=w.textures,nt=w.isWebGLCubeRenderTarget===!0,bt=ot.length>1;if(bt||(et.__webglTexture===void 0&&(et.__webglTexture=i.createTexture()),et.__version=_.version,o.memory.textures++),nt){k.__webglFramebuffer=[];for(let gt=0;gt<6;gt++)if(_.mipmaps&&_.mipmaps.length>0){k.__webglFramebuffer[gt]=[];for(let Rt=0;Rt<_.mipmaps.length;Rt++)k.__webglFramebuffer[gt][Rt]=i.createFramebuffer()}else k.__webglFramebuffer[gt]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){k.__webglFramebuffer=[];for(let gt=0;gt<_.mipmaps.length;gt++)k.__webglFramebuffer[gt]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(bt)for(let gt=0,Rt=ot.length;gt<Rt;gt++){let Lt=n.get(ot[gt]);Lt.__webglTexture===void 0&&(Lt.__webglTexture=i.createTexture(),o.memory.textures++)}if(w.samples>0&&st(w)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let gt=0;gt<ot.length;gt++){let Rt=ot[gt];k.__webglColorRenderbuffer[gt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[gt]);let Lt=s.convert(Rt.format,Rt.colorSpace),dt=s.convert(Rt.type),Tt=E(Rt.internalFormat,Lt,dt,Rt.colorSpace,w.isXRRenderTarget===!0),Wt=ht(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Wt,Tt,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,k.__webglColorRenderbuffer[gt])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),X(k.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(nt){e.bindTexture(i.TEXTURE_CUBE_MAP,et.__webglTexture),Ft(i.TEXTURE_CUBE_MAP,_);for(let gt=0;gt<6;gt++)if(_.mipmaps&&_.mipmaps.length>0)for(let Rt=0;Rt<_.mipmaps.length;Rt++)z(k.__webglFramebuffer[gt][Rt],w,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Rt);else z(k.__webglFramebuffer[gt],w,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0);m(_)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let gt=0,Rt=ot.length;gt<Rt;gt++){let Lt=ot[gt],dt=n.get(Lt),Tt=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Tt=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Tt,dt.__webglTexture),Ft(Tt,Lt),z(k.__webglFramebuffer,w,Lt,i.COLOR_ATTACHMENT0+gt,Tt,0),m(Lt)&&p(Tt)}e.unbindTexture()}else{let gt=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(gt=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(gt,et.__webglTexture),Ft(gt,_),_.mipmaps&&_.mipmaps.length>0)for(let Rt=0;Rt<_.mipmaps.length;Rt++)z(k.__webglFramebuffer[Rt],w,_,i.COLOR_ATTACHMENT0,gt,Rt);else z(k.__webglFramebuffer,w,_,i.COLOR_ATTACHMENT0,gt,0);m(_)&&p(gt),e.unbindTexture()}w.depthBuffer&&$(w)}function F(w){let _=w.textures;for(let k=0,et=_.length;k<et;k++){let ot=_[k];if(m(ot)){let nt=A(w),bt=n.get(ot).__webglTexture;e.bindTexture(nt,bt),p(nt),e.unbindTexture()}}}let V=[],Y=[];function O(w){if(w.samples>0){if(st(w)===!1){let _=w.textures,k=w.width,et=w.height,ot=i.COLOR_BUFFER_BIT,nt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=n.get(w),gt=_.length>1;if(gt)for(let Lt=0;Lt<_.length;Lt++)e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer);let Rt=w.texture.mipmaps;Rt&&Rt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let Lt=0;Lt<_.length;Lt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(ot|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(ot|=i.STENCIL_BUFFER_BIT)),gt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,bt.__webglColorRenderbuffer[Lt]);let dt=n.get(_[Lt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,dt,0)}i.blitFramebuffer(0,0,k,et,0,0,k,et,ot,i.NEAREST),c===!0&&(V.length=0,Y.length=0,V.push(i.COLOR_ATTACHMENT0+Lt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(V.push(nt),Y.push(nt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Y)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,V))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),gt)for(let Lt=0;Lt<_.length;Lt++){e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.RENDERBUFFER,bt.__webglColorRenderbuffer[Lt]);let dt=n.get(_[Lt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.TEXTURE_2D,dt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){let _=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function ht(w){return Math.min(r.maxSamples,w.samples)}function st(w){let _=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function ct(w){let _=o.render.frame;h.get(w)!==_&&(h.set(w,_),w.update())}function Dt(w,_){let k=w.colorSpace,et=w.format,ot=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||k!==ji&&k!==pi&&(Qt.getTransfer(k)===ae?(et!==wn||ot!==Un)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),_}function yt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=J,this.resetTextureUnits=B,this.setTexture2D=j,this.setTexture2DArray=W,this.setTexture3D=it,this.setTextureCube=Z,this.rebindTextures=rt,this.setupRenderTarget=b,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=O,this.setupDepthRenderbuffer=$,this.setupFrameBufferTexture=z,this.useMultisampledRTT=st}function P_(i,t){function e(n,r=pi){let s,o=Qt.getTransfer(r);if(n===Un)return i.UNSIGNED_BYTE;if(n===Da)return i.UNSIGNED_SHORT_4_4_4_4;if(n===La)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ec)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Tc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===bc)return i.BYTE;if(n===wc)return i.SHORT;if(n===Xr)return i.UNSIGNED_SHORT;if(n===Pa)return i.INT;if(n===Fi)return i.UNSIGNED_INT;if(n===Yn)return i.FLOAT;if(n===qr)return i.HALF_FLOAT;if(n===Ac)return i.ALPHA;if(n===Cc)return i.RGB;if(n===wn)return i.RGBA;if(n===Dr)return i.DEPTH_COMPONENT;if(n===Zr)return i.DEPTH_STENCIL;if(n===Rc)return i.RED;if(n===Ua)return i.RED_INTEGER;if(n===Ic)return i.RG;if(n===Fa)return i.RG_INTEGER;if(n===Na)return i.RGBA_INTEGER;if(n===Zs||n===$s||n===Js||n===Ks)if(o===ae)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Zs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===$s)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Js)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ks)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Zs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===$s)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Js)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ks)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Oa||n===Ba||n===za||n===ka)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Oa)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ba)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===za)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ka)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Va||n===Ha||n===Ga)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Va||n===Ha)return o===ae?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ga)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Wa||n===Xa||n===qa||n===Ya||n===Za||n===$a||n===Ja||n===Ka||n===ja||n===Qa||n===tl||n===el||n===nl||n===il)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Wa)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Xa)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===qa)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ya)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Za)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===$a)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ja)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ka)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ja)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Qa)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===tl)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===el)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===nl)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===il)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===rl||n===sl||n===ol)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===rl)return o===ae?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===sl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ol)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===al||n===ll||n===cl||n===hl)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===al)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ll)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===cl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===hl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Yr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var D_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,L_=`
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

}`,Qc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Es(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new hn({vertexShader:D_,fragmentShader:L_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ue(new Fs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},th=class extends Hn{constructor(t,e){super();let n=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,g=null,v=typeof XRWebGLBinding<"u",m=new Qc,p={},A=e.getContextAttributes(),E=null,x=null,P=[],T=[],D=new ut,U=null,y=new He;y.viewport=new ye;let M=new He;M.viewport=new ye;let I=[y,M],B=new _a,J=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(R){let C=P[R];return C===void 0&&(C=new Br,P[R]=C),C.getTargetRaySpace()},this.getControllerGrip=function(R){let C=P[R];return C===void 0&&(C=new Br,P[R]=C),C.getGripSpace()},this.getHand=function(R){let C=P[R];return C===void 0&&(C=new Br,P[R]=C),C.getHandSpace()};function j(R){let C=T.indexOf(R.inputSource);if(C===-1)return;let z=P[C];z!==void 0&&(z.update(R.inputSource,R.frame,l||o),z.dispatchEvent({type:R.type,data:R.inputSource}))}function W(){r.removeEventListener("select",j),r.removeEventListener("selectstart",j),r.removeEventListener("selectend",j),r.removeEventListener("squeeze",j),r.removeEventListener("squeezestart",j),r.removeEventListener("squeezeend",j),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",it);for(let R=0;R<P.length;R++){let C=T[R];C!==null&&(T[R]=null,P[R].disconnect(C))}J=null,K=null,m.reset();for(let R in p)delete p[R];t.setRenderTarget(E),d=null,f=null,u=null,r=null,x=null,Ct.stop(),n.isPresenting=!1,t.setPixelRatio(U),t.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(R){s=R,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(R){a=R,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(R){l=R},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(r,e)),u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(R){if(r=R,r!==null){if(E=t.getRenderTarget(),r.addEventListener("select",j),r.addEventListener("selectstart",j),r.addEventListener("selectend",j),r.addEventListener("squeeze",j),r.addEventListener("squeezestart",j),r.addEventListener("squeezeend",j),r.addEventListener("end",W),r.addEventListener("inputsourceschange",it),A.xrCompatible!==!0&&await e.makeXRCompatible(),U=t.getPixelRatio(),t.getSize(D),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let z=null,X=null,q=null;A.depth&&(q=A.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,z=A.stencil?Zr:Dr,X=A.stencil?Yr:Fi);let $={colorFormat:e.RGBA8,depthFormat:q,scaleFactor:s};u=this.getBinding(),f=u.createProjectionLayer($),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),x=new Gn(f.textureWidth,f.textureHeight,{format:wn,type:Un,depthTexture:new ws(f.textureWidth,f.textureHeight,X,void 0,void 0,void 0,void 0,void 0,void 0,z),stencilBuffer:A.stencil,colorSpace:t.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let z={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,e,z),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new Gn(d.framebufferWidth,d.framebufferHeight,{format:wn,type:Un,colorSpace:t.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),Ct.setContext(r),Ct.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function it(R){for(let C=0;C<R.removed.length;C++){let z=R.removed[C],X=T.indexOf(z);X>=0&&(T[X]=null,P[X].disconnect(z))}for(let C=0;C<R.added.length;C++){let z=R.added[C],X=T.indexOf(z);if(X===-1){for(let $=0;$<P.length;$++)if($>=T.length){T.push(z),X=$;break}else if(T[$]===null){T[$]=z,X=$;break}if(X===-1)break}let q=P[X];q&&q.connect(z)}}let Z=new L,at=new L;function _t(R,C,z){Z.setFromMatrixPosition(C.matrixWorld),at.setFromMatrixPosition(z.matrixWorld);let X=Z.distanceTo(at),q=C.projectionMatrix.elements,$=z.projectionMatrix.elements,rt=q[14]/(q[10]-1),b=q[14]/(q[10]+1),F=(q[9]+1)/q[5],V=(q[9]-1)/q[5],Y=(q[8]-1)/q[0],O=($[8]+1)/$[0],ht=rt*Y,st=rt*O,ct=X/(-Y+O),Dt=ct*-Y;if(C.matrixWorld.decompose(R.position,R.quaternion,R.scale),R.translateX(Dt),R.translateZ(ct),R.matrixWorld.compose(R.position,R.quaternion,R.scale),R.matrixWorldInverse.copy(R.matrixWorld).invert(),q[10]===-1)R.projectionMatrix.copy(C.projectionMatrix),R.projectionMatrixInverse.copy(C.projectionMatrixInverse);else{let yt=rt+ct,w=b+ct,_=ht-Dt,k=st+(X-Dt),et=F*b/w*yt,ot=V*b/w*yt;R.projectionMatrix.makePerspective(_,k,et,ot,yt,w),R.projectionMatrixInverse.copy(R.projectionMatrix).invert()}}function xt(R,C){C===null?R.matrixWorld.copy(R.matrix):R.matrixWorld.multiplyMatrices(C.matrixWorld,R.matrix),R.matrixWorldInverse.copy(R.matrixWorld).invert()}this.updateCamera=function(R){if(r===null)return;let C=R.near,z=R.far;m.texture!==null&&(m.depthNear>0&&(C=m.depthNear),m.depthFar>0&&(z=m.depthFar)),B.near=M.near=y.near=C,B.far=M.far=y.far=z,(J!==B.near||K!==B.far)&&(r.updateRenderState({depthNear:B.near,depthFar:B.far}),J=B.near,K=B.far),B.layers.mask=R.layers.mask|6,y.layers.mask=B.layers.mask&3,M.layers.mask=B.layers.mask&5;let X=R.parent,q=B.cameras;xt(B,X);for(let $=0;$<q.length;$++)xt(q[$],X);q.length===2?_t(B,y,M):B.projectionMatrix.copy(y.projectionMatrix),Ft(R,B,X)};function Ft(R,C,z){z===null?R.matrix.copy(C.matrixWorld):(R.matrix.copy(z.matrixWorld),R.matrix.invert(),R.matrix.multiply(C.matrixWorld)),R.matrix.decompose(R.position,R.quaternion,R.scale),R.updateMatrixWorld(!0),R.projectionMatrix.copy(C.projectionMatrix),R.projectionMatrixInverse.copy(C.projectionMatrixInverse),R.isPerspectiveCamera&&(R.fov=Lr*2*Math.atan(1/R.projectionMatrix.elements[5]),R.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(R){c=R,f!==null&&(f.fixedFoveation=R),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=R)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(R){return p[R]};let Nt=null;function Ht(R,C){if(h=C.getViewerPose(l||o),g=C,h!==null){let z=h.views;d!==null&&(t.setRenderTargetFramebuffer(x,d.framebuffer),t.setRenderTarget(x));let X=!1;z.length!==B.cameras.length&&(B.cameras.length=0,X=!0);for(let b=0;b<z.length;b++){let F=z[b],V=null;if(d!==null)V=d.getViewport(F);else{let O=u.getViewSubImage(f,F);V=O.viewport,b===0&&(t.setRenderTargetTextures(x,O.colorTexture,O.depthStencilTexture),t.setRenderTarget(x))}let Y=I[b];Y===void 0&&(Y=new He,Y.layers.enable(b),Y.viewport=new ye,I[b]=Y),Y.matrix.fromArray(F.transform.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.projectionMatrix.fromArray(F.projectionMatrix),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert(),Y.viewport.set(V.x,V.y,V.width,V.height),b===0&&(B.matrix.copy(Y.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),X===!0&&B.cameras.push(Y)}let q=r.enabledFeatures;if(q&&q.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){u=n.getBinding();let b=u.getDepthInformation(z[0]);b&&b.isValid&&b.texture&&m.init(b,r.renderState)}if(q&&q.includes("camera-access")&&v){t.state.unbindTexture(),u=n.getBinding();for(let b=0;b<z.length;b++){let F=z[b].camera;if(F){let V=p[F];V||(V=new Es,p[F]=V);let Y=u.getCameraImage(F);V.sourceTexture=Y}}}}for(let z=0;z<P.length;z++){let X=T[z],q=P[z];X!==null&&q!==void 0&&q.update(X,C,l||o)}Nt&&Nt(R,C),C.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:C}),g=null}let Ct=new kf;Ct.setAnimationLoop(Ht),this.setAnimationLoop=function(R){Nt=R},this.dispose=function(){}}},lr=new Sn,U_=new ee;function F_(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Nc(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,A,E,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),v(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,A,E):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Je&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Je&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let A=t.get(p),E=A.envMap,x=A.envMapRotation;E&&(m.envMap.value=E,lr.copy(x),lr.x*=-1,lr.y*=-1,lr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(lr.y*=-1,lr.z*=-1),m.envMapRotation.value.setFromMatrix4(U_.makeRotationFromEuler(lr)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,A,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*A,m.scale.value=E*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,A){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Je&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let A=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function N_(i,t,e,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(A,E){let x=E.program;n.uniformBlockBinding(A,x)}function l(A,E){let x=r[A.id];x===void 0&&(g(A),x=h(A),r[A.id]=x,A.addEventListener("dispose",m));let P=E.program;n.updateUBOMapping(A,P);let T=t.render.frame;s[A.id]!==T&&(f(A),s[A.id]=T)}function h(A){let E=u();A.__bindingPointIndex=E;let x=i.createBuffer(),P=A.__size,T=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,P,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,x),x}function u(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(A){let E=r[A.id],x=A.uniforms,P=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let T=0,D=x.length;T<D;T++){let U=Array.isArray(x[T])?x[T]:[x[T]];for(let y=0,M=U.length;y<M;y++){let I=U[y];if(d(I,T,y,P)===!0){let B=I.__offset,J=Array.isArray(I.value)?I.value:[I.value],K=0;for(let j=0;j<J.length;j++){let W=J[j],it=v(W);typeof W=="number"||typeof W=="boolean"?(I.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,B+K,I.__data)):W.isMatrix3?(I.__data[0]=W.elements[0],I.__data[1]=W.elements[1],I.__data[2]=W.elements[2],I.__data[3]=0,I.__data[4]=W.elements[3],I.__data[5]=W.elements[4],I.__data[6]=W.elements[5],I.__data[7]=0,I.__data[8]=W.elements[6],I.__data[9]=W.elements[7],I.__data[10]=W.elements[8],I.__data[11]=0):(W.toArray(I.__data,K),K+=it.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(A,E,x,P){let T=A.value,D=E+"_"+x;if(P[D]===void 0)return typeof T=="number"||typeof T=="boolean"?P[D]=T:P[D]=T.clone(),!0;{let U=P[D];if(typeof T=="number"||typeof T=="boolean"){if(U!==T)return P[D]=T,!0}else if(U.equals(T)===!1)return U.copy(T),!0}return!1}function g(A){let E=A.uniforms,x=0,P=16;for(let D=0,U=E.length;D<U;D++){let y=Array.isArray(E[D])?E[D]:[E[D]];for(let M=0,I=y.length;M<I;M++){let B=y[M],J=Array.isArray(B.value)?B.value:[B.value];for(let K=0,j=J.length;K<j;K++){let W=J[K],it=v(W),Z=x%P,at=Z%it.boundary,_t=Z+at;x+=at,_t!==0&&P-_t<it.storage&&(x+=P-_t),B.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=x,x+=it.storage}}}let T=x%P;return T>0&&(x+=P-T),A.__size=x,A.__cache={},this}function v(A){let E={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(E.boundary=4,E.storage=4):A.isVector2?(E.boundary=8,E.storage=8):A.isVector3||A.isColor?(E.boundary=16,E.storage=12):A.isVector4?(E.boundary=16,E.storage=16):A.isMatrix3?(E.boundary=48,E.storage=48):A.isMatrix4?(E.boundary=64,E.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),E}function m(A){let E=A.target;E.removeEventListener("dispose",m);let x=o.indexOf(E.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function p(){for(let A in r)i.deleteBuffer(r[A]);o=[],r={},s={}}return{bind:c,update:l,dispose:p}}var gl=class{constructor(t={}){let{canvas:e=lf(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let g=new Uint32Array(4),v=new Int32Array(4),m=null,p=null,A=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=di,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let x=this,P=!1;this._outputColorSpace=Re;let T=0,D=0,U=null,y=-1,M=null,I=new ye,B=new ye,J=null,K=new Vt(0),j=0,W=e.width,it=e.height,Z=1,at=null,_t=null,xt=new ye(0,0,W,it),Ft=new ye(0,0,W,it),Nt=!1,Ht=new zr,Ct=!1,R=!1,C=new ee,z=new L,X=new ye,q={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},$=!1;function rt(){return U===null?Z:1}let b=n;function F(S,H){return e.getContext(S,H)}try{let S={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",Mt,!1),e.addEventListener("webglcontextrestored",It,!1),e.addEventListener("webglcontextcreationerror",pt,!1),b===null){let H="webgl2";if(b=F(H,S),b===null)throw F(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let V,Y,O,ht,st,ct,Dt,yt,w,_,k,et,ot,nt,bt,gt,Rt,Lt,dt,Tt,Wt,Ot,wt,$t;function N(){V=new tv(b),V.init(),Ot=new P_(b,V),Y=new Y0(b,V,t,Ot),O=new R_(b,V),Y.reversedDepthBuffer&&f&&O.buffers.depth.setReversed(!0),ht=new iv(b),st=new g_,ct=new I_(b,V,O,st,Y,Ot,ht),Dt=new $0(x),yt=new Q0(x),w=new cm(b),wt=new X0(b,w),_=new ev(b,w,ht,wt),k=new sv(b,_,w,ht),dt=new rv(b,Y,ct),gt=new Z0(st),et=new m_(x,Dt,yt,V,Y,wt,gt),ot=new F_(x,st),nt=new __,bt=new w_(V),Lt=new W0(x,Dt,yt,O,k,d,c),Rt=new A_(x,k,Y),$t=new N_(b,ht,Y,O),Tt=new q0(b,V,ht),Wt=new nv(b,V,ht),ht.programs=et.programs,x.capabilities=Y,x.extensions=V,x.properties=st,x.renderLists=nt,x.shadowMap=Rt,x.state=O,x.info=ht}N();let vt=new th(x,b);this.xr=vt,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){let S=V.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=V.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(S){S!==void 0&&(Z=S,this.setSize(W,it,!1))},this.getSize=function(S){return S.set(W,it)},this.setSize=function(S,H,Q=!0){if(vt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=S,it=H,e.width=Math.floor(S*Z),e.height=Math.floor(H*Z),Q===!0&&(e.style.width=S+"px",e.style.height=H+"px"),this.setViewport(0,0,S,H)},this.getDrawingBufferSize=function(S){return S.set(W*Z,it*Z).floor()},this.setDrawingBufferSize=function(S,H,Q){W=S,it=H,Z=Q,e.width=Math.floor(S*Q),e.height=Math.floor(H*Q),this.setViewport(0,0,S,H)},this.getCurrentViewport=function(S){return S.copy(I)},this.getViewport=function(S){return S.copy(xt)},this.setViewport=function(S,H,Q,tt){S.isVector4?xt.set(S.x,S.y,S.z,S.w):xt.set(S,H,Q,tt),O.viewport(I.copy(xt).multiplyScalar(Z).round())},this.getScissor=function(S){return S.copy(Ft)},this.setScissor=function(S,H,Q,tt){S.isVector4?Ft.set(S.x,S.y,S.z,S.w):Ft.set(S,H,Q,tt),O.scissor(B.copy(Ft).multiplyScalar(Z).round())},this.getScissorTest=function(){return Nt},this.setScissorTest=function(S){O.setScissorTest(Nt=S)},this.setOpaqueSort=function(S){at=S},this.setTransparentSort=function(S){_t=S},this.getClearColor=function(S){return S.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor(...arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha(...arguments)},this.clear=function(S=!0,H=!0,Q=!0){let tt=0;if(S){let G=!1;if(U!==null){let mt=U.texture.format;G=mt===Na||mt===Fa||mt===Ua}if(G){let mt=U.texture.type,Et=mt===Un||mt===Fi||mt===Xr||mt===Yr||mt===Da||mt===La,Pt=Lt.getClearColor(),At=Lt.getClearAlpha(),Gt=Pt.r,Xt=Pt.g,zt=Pt.b;Et?(g[0]=Gt,g[1]=Xt,g[2]=zt,g[3]=At,b.clearBufferuiv(b.COLOR,0,g)):(v[0]=Gt,v[1]=Xt,v[2]=zt,v[3]=At,b.clearBufferiv(b.COLOR,0,v))}else tt|=b.COLOR_BUFFER_BIT}H&&(tt|=b.DEPTH_BUFFER_BIT),Q&&(tt|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(tt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Mt,!1),e.removeEventListener("webglcontextrestored",It,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),Lt.dispose(),nt.dispose(),bt.dispose(),st.dispose(),Dt.dispose(),yt.dispose(),k.dispose(),wt.dispose(),$t.dispose(),et.dispose(),vt.dispose(),vt.removeEventListener("sessionstart",kn),vt.removeEventListener("sessionend",Nh),Hi.stop()};function Mt(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function It(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;let S=ht.autoReset,H=Rt.enabled,Q=Rt.autoUpdate,tt=Rt.needsUpdate,G=Rt.type;N(),ht.autoReset=S,Rt.enabled=H,Rt.autoUpdate=Q,Rt.needsUpdate=tt,Rt.type=G}function pt(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function lt(S){let H=S.target;H.removeEventListener("dispose",lt),Ut(H)}function Ut(S){qt(S),st.remove(S)}function qt(S){let H=st.get(S).programs;H!==void 0&&(H.forEach(function(Q){et.releaseProgram(Q)}),S.isShaderMaterial&&et.releaseShaderCache(S))}this.renderBufferDirect=function(S,H,Q,tt,G,mt){H===null&&(H=q);let Et=G.isMesh&&G.matrixWorld.determinant()<0,Pt=Nd(S,H,Q,tt,G);O.setMaterial(tt,Et);let At=Q.index,Gt=1;if(tt.wireframe===!0){if(At=_.getWireframeAttribute(Q),At===void 0)return;Gt=2}let Xt=Q.drawRange,zt=Q.attributes.position,jt=Xt.start*Gt,le=(Xt.start+Xt.count)*Gt;mt!==null&&(jt=Math.max(jt,mt.start*Gt),le=Math.min(le,(mt.start+mt.count)*Gt)),At!==null?(jt=Math.max(jt,0),le=Math.min(le,At.count)):zt!=null&&(jt=Math.max(jt,0),le=Math.min(le,zt.count));let be=le-jt;if(be<0||be===1/0)return;wt.setup(G,tt,Pt,Q,At);let pe,he=Tt;if(At!==null&&(pe=w.get(At),he=Wt,he.setIndex(pe)),G.isMesh)tt.wireframe===!0?(O.setLineWidth(tt.wireframeLinewidth*rt()),he.setMode(b.LINES)):he.setMode(b.TRIANGLES);else if(G.isLine){let kt=tt.linewidth;kt===void 0&&(kt=1),O.setLineWidth(kt*rt()),G.isLineSegments?he.setMode(b.LINES):G.isLineLoop?he.setMode(b.LINE_LOOP):he.setMode(b.LINE_STRIP)}else G.isPoints?he.setMode(b.POINTS):G.isSprite&&he.setMode(b.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)Fr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),he.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(V.get("WEBGL_multi_draw"))he.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let kt=G._multiDrawStarts,ve=G._multiDrawCounts,te=G._multiDrawCount,on=At?w.get(At).bytesPerElement:1,mr=st.get(tt).currentProgram.getUniforms();for(let an=0;an<te;an++)mr.setValue(b,"_gl_DrawID",an),he.render(kt[an]/on,ve[an])}else if(G.isInstancedMesh)he.renderInstances(jt,be,G.count);else if(Q.isInstancedBufferGeometry){let kt=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,ve=Math.min(Q.instanceCount,kt);he.renderInstances(jt,be,ve)}else he.render(jt,be)};function fe(S,H,Q){S.transparent===!0&&S.side===Ke&&S.forceSinglePass===!1?(S.side=Je,S.needsUpdate=!0,go(S,H,Q),S.side=oi,S.needsUpdate=!0,go(S,H,Q),S.side=Ke):go(S,H,Q)}this.compile=function(S,H,Q=null){Q===null&&(Q=S),p=bt.get(Q),p.init(H),E.push(p),Q.traverseVisible(function(G){G.isLight&&G.layers.test(H.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),S!==Q&&S.traverseVisible(function(G){G.isLight&&G.layers.test(H.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),p.setupLights();let tt=new Set;return S.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let mt=G.material;if(mt)if(Array.isArray(mt))for(let Et=0;Et<mt.length;Et++){let Pt=mt[Et];fe(Pt,Q,G),tt.add(Pt)}else fe(mt,Q,G),tt.add(mt)}),p=E.pop(),tt},this.compileAsync=function(S,H,Q=null){let tt=this.compile(S,H,Q);return new Promise(G=>{function mt(){if(tt.forEach(function(Et){st.get(Et).currentProgram.isReady()&&tt.delete(Et)}),tt.size===0){G(S);return}setTimeout(mt,10)}V.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let se=null;function jn(S){se&&se(S)}function kn(){Hi.stop()}function Nh(){Hi.start()}let Hi=new kf;Hi.setAnimationLoop(jn),typeof self<"u"&&Hi.setContext(self),this.setAnimationLoop=function(S){se=S,vt.setAnimationLoop(S),S===null?Hi.stop():Hi.start()},vt.addEventListener("sessionstart",kn),vt.addEventListener("sessionend",Nh),this.render=function(S,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),vt.enabled===!0&&vt.isPresenting===!0&&(vt.cameraAutoUpdate===!0&&vt.updateCamera(H),H=vt.getCamera()),S.isScene===!0&&S.onBeforeRender(x,S,H,U),p=bt.get(S,E.length),p.init(H),E.push(p),C.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Ht.setFromProjectionMatrix(C,Pn,H.reversedDepth),R=this.localClippingEnabled,Ct=gt.init(this.clippingPlanes,R),m=nt.get(S,A.length),m.init(),A.push(m),vt.enabled===!0&&vt.isPresenting===!0){let mt=x.xr.getDepthSensingMesh();mt!==null&&Al(mt,H,-1/0,x.sortObjects)}Al(S,H,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(at,_t),$=vt.enabled===!1||vt.isPresenting===!1||vt.hasDepthSensing()===!1,$&&Lt.addToRenderList(m,S),this.info.render.frame++,Ct===!0&&gt.beginShadows();let Q=p.state.shadowsArray;Rt.render(Q,S,H),Ct===!0&&gt.endShadows(),this.info.autoReset===!0&&this.info.reset();let tt=m.opaque,G=m.transmissive;if(p.setupLights(),H.isArrayCamera){let mt=H.cameras;if(G.length>0)for(let Et=0,Pt=mt.length;Et<Pt;Et++){let At=mt[Et];Bh(tt,G,S,At)}$&&Lt.render(S);for(let Et=0,Pt=mt.length;Et<Pt;Et++){let At=mt[Et];Oh(m,S,At,At.viewport)}}else G.length>0&&Bh(tt,G,S,H),$&&Lt.render(S),Oh(m,S,H);U!==null&&D===0&&(ct.updateMultisampleRenderTarget(U),ct.updateRenderTargetMipmap(U)),S.isScene===!0&&S.onAfterRender(x,S,H),wt.resetDefaultState(),y=-1,M=null,E.pop(),E.length>0?(p=E[E.length-1],Ct===!0&&gt.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,A.pop(),A.length>0?m=A[A.length-1]:m=null};function Al(S,H,Q,tt){if(S.visible===!1)return;if(S.layers.test(H.layers)){if(S.isGroup)Q=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(H);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Ht.intersectsSprite(S)){tt&&X.setFromMatrixPosition(S.matrixWorld).applyMatrix4(C);let Et=k.update(S),Pt=S.material;Pt.visible&&m.push(S,Et,Pt,Q,X.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Ht.intersectsObject(S))){let Et=k.update(S),Pt=S.material;if(tt&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),X.copy(S.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),X.copy(Et.boundingSphere.center)),X.applyMatrix4(S.matrixWorld).applyMatrix4(C)),Array.isArray(Pt)){let At=Et.groups;for(let Gt=0,Xt=At.length;Gt<Xt;Gt++){let zt=At[Gt],jt=Pt[zt.materialIndex];jt&&jt.visible&&m.push(S,Et,jt,Q,X.z,zt)}}else Pt.visible&&m.push(S,Et,Pt,Q,X.z,null)}}let mt=S.children;for(let Et=0,Pt=mt.length;Et<Pt;Et++)Al(mt[Et],H,Q,tt)}function Oh(S,H,Q,tt){let G=S.opaque,mt=S.transmissive,Et=S.transparent;p.setupLightsView(Q),Ct===!0&&gt.setGlobalState(x.clippingPlanes,Q),tt&&O.viewport(I.copy(tt)),G.length>0&&mo(G,H,Q),mt.length>0&&mo(mt,H,Q),Et.length>0&&mo(Et,H,Q),O.buffers.depth.setTest(!0),O.buffers.depth.setMask(!0),O.buffers.color.setMask(!0),O.setPolygonOffset(!1)}function Bh(S,H,Q,tt){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[tt.id]===void 0&&(p.state.transmissionRenderTarget[tt.id]=new Gn(1,1,{generateMipmaps:!0,type:V.has("EXT_color_buffer_half_float")||V.has("EXT_color_buffer_float")?qr:Un,minFilter:Ln,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace}));let mt=p.state.transmissionRenderTarget[tt.id],Et=tt.viewport||I;mt.setSize(Et.z*x.transmissionResolutionScale,Et.w*x.transmissionResolutionScale);let Pt=x.getRenderTarget(),At=x.getActiveCubeFace(),Gt=x.getActiveMipmapLevel();x.setRenderTarget(mt),x.getClearColor(K),j=x.getClearAlpha(),j<1&&x.setClearColor(16777215,.5),x.clear(),$&&Lt.render(Q);let Xt=x.toneMapping;x.toneMapping=di;let zt=tt.viewport;if(tt.viewport!==void 0&&(tt.viewport=void 0),p.setupLightsView(tt),Ct===!0&&gt.setGlobalState(x.clippingPlanes,tt),mo(S,Q,tt),ct.updateMultisampleRenderTarget(mt),ct.updateRenderTargetMipmap(mt),V.has("WEBGL_multisampled_render_to_texture")===!1){let jt=!1;for(let le=0,be=H.length;le<be;le++){let pe=H[le],he=pe.object,kt=pe.geometry,ve=pe.material,te=pe.group;if(ve.side===Ke&&he.layers.test(tt.layers)){let on=ve.side;ve.side=Je,ve.needsUpdate=!0,zh(he,Q,tt,kt,ve,te),ve.side=on,ve.needsUpdate=!0,jt=!0}}jt===!0&&(ct.updateMultisampleRenderTarget(mt),ct.updateRenderTargetMipmap(mt))}x.setRenderTarget(Pt,At,Gt),x.setClearColor(K,j),zt!==void 0&&(tt.viewport=zt),x.toneMapping=Xt}function mo(S,H,Q){let tt=H.isScene===!0?H.overrideMaterial:null;for(let G=0,mt=S.length;G<mt;G++){let Et=S[G],Pt=Et.object,At=Et.geometry,Gt=Et.group,Xt=Et.material;Xt.allowOverride===!0&&tt!==null&&(Xt=tt),Pt.layers.test(Q.layers)&&zh(Pt,H,Q,At,Xt,Gt)}}function zh(S,H,Q,tt,G,mt){S.onBeforeRender(x,H,Q,tt,G,mt),S.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),G.onBeforeRender(x,H,Q,tt,S,mt),G.transparent===!0&&G.side===Ke&&G.forceSinglePass===!1?(G.side=Je,G.needsUpdate=!0,x.renderBufferDirect(Q,H,tt,G,S,mt),G.side=oi,G.needsUpdate=!0,x.renderBufferDirect(Q,H,tt,G,S,mt),G.side=Ke):x.renderBufferDirect(Q,H,tt,G,S,mt),S.onAfterRender(x,H,Q,tt,G,mt)}function go(S,H,Q){H.isScene!==!0&&(H=q);let tt=st.get(S),G=p.state.lights,mt=p.state.shadowsArray,Et=G.state.version,Pt=et.getParameters(S,G.state,mt,H,Q),At=et.getProgramCacheKey(Pt),Gt=tt.programs;tt.environment=S.isMeshStandardMaterial?H.environment:null,tt.fog=H.fog,tt.envMap=(S.isMeshStandardMaterial?yt:Dt).get(S.envMap||tt.environment),tt.envMapRotation=tt.environment!==null&&S.envMap===null?H.environmentRotation:S.envMapRotation,Gt===void 0&&(S.addEventListener("dispose",lt),Gt=new Map,tt.programs=Gt);let Xt=Gt.get(At);if(Xt!==void 0){if(tt.currentProgram===Xt&&tt.lightsStateVersion===Et)return Vh(S,Pt),Xt}else Pt.uniforms=et.getUniforms(S),S.onBeforeCompile(Pt,x),Xt=et.acquireProgram(Pt,At),Gt.set(At,Xt),tt.uniforms=Pt.uniforms;let zt=tt.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(zt.clippingPlanes=gt.uniform),Vh(S,Pt),tt.needsLights=Bd(S),tt.lightsStateVersion=Et,tt.needsLights&&(zt.ambientLightColor.value=G.state.ambient,zt.lightProbe.value=G.state.probe,zt.directionalLights.value=G.state.directional,zt.directionalLightShadows.value=G.state.directionalShadow,zt.spotLights.value=G.state.spot,zt.spotLightShadows.value=G.state.spotShadow,zt.rectAreaLights.value=G.state.rectArea,zt.ltc_1.value=G.state.rectAreaLTC1,zt.ltc_2.value=G.state.rectAreaLTC2,zt.pointLights.value=G.state.point,zt.pointLightShadows.value=G.state.pointShadow,zt.hemisphereLights.value=G.state.hemi,zt.directionalShadowMap.value=G.state.directionalShadowMap,zt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,zt.spotShadowMap.value=G.state.spotShadowMap,zt.spotLightMatrix.value=G.state.spotLightMatrix,zt.spotLightMap.value=G.state.spotLightMap,zt.pointShadowMap.value=G.state.pointShadowMap,zt.pointShadowMatrix.value=G.state.pointShadowMatrix),tt.currentProgram=Xt,tt.uniformsList=null,Xt}function kh(S){if(S.uniformsList===null){let H=S.currentProgram.getUniforms();S.uniformsList=Kr.seqWithValue(H.seq,S.uniforms)}return S.uniformsList}function Vh(S,H){let Q=st.get(S);Q.outputColorSpace=H.outputColorSpace,Q.batching=H.batching,Q.batchingColor=H.batchingColor,Q.instancing=H.instancing,Q.instancingColor=H.instancingColor,Q.instancingMorph=H.instancingMorph,Q.skinning=H.skinning,Q.morphTargets=H.morphTargets,Q.morphNormals=H.morphNormals,Q.morphColors=H.morphColors,Q.morphTargetsCount=H.morphTargetsCount,Q.numClippingPlanes=H.numClippingPlanes,Q.numIntersection=H.numClipIntersection,Q.vertexAlphas=H.vertexAlphas,Q.vertexTangents=H.vertexTangents,Q.toneMapping=H.toneMapping}function Nd(S,H,Q,tt,G){H.isScene!==!0&&(H=q),ct.resetTextureUnits();let mt=H.fog,Et=tt.isMeshStandardMaterial?H.environment:null,Pt=U===null?x.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:ji,At=(tt.isMeshStandardMaterial?yt:Dt).get(tt.envMap||Et),Gt=tt.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Xt=!!Q.attributes.tangent&&(!!tt.normalMap||tt.anisotropy>0),zt=!!Q.morphAttributes.position,jt=!!Q.morphAttributes.normal,le=!!Q.morphAttributes.color,be=di;tt.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(be=x.toneMapping);let pe=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,he=pe!==void 0?pe.length:0,kt=st.get(tt),ve=p.state.lights;if(Ct===!0&&(R===!0||S!==M)){let qe=S===M&&tt.id===y;gt.setState(tt,S,qe)}let te=!1;tt.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==ve.state.version||kt.outputColorSpace!==Pt||G.isBatchedMesh&&kt.batching===!1||!G.isBatchedMesh&&kt.batching===!0||G.isBatchedMesh&&kt.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&kt.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&kt.instancing===!1||!G.isInstancedMesh&&kt.instancing===!0||G.isSkinnedMesh&&kt.skinning===!1||!G.isSkinnedMesh&&kt.skinning===!0||G.isInstancedMesh&&kt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&kt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&kt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&kt.instancingMorph===!1&&G.morphTexture!==null||kt.envMap!==At||tt.fog===!0&&kt.fog!==mt||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==gt.numPlanes||kt.numIntersection!==gt.numIntersection)||kt.vertexAlphas!==Gt||kt.vertexTangents!==Xt||kt.morphTargets!==zt||kt.morphNormals!==jt||kt.morphColors!==le||kt.toneMapping!==be||kt.morphTargetsCount!==he)&&(te=!0):(te=!0,kt.__version=tt.version);let on=kt.currentProgram;te===!0&&(on=go(tt,H,G));let mr=!1,an=!1,rs=!1,_e=on.getUniforms(),_n=kt.uniforms;if(O.useProgram(on.program)&&(mr=!0,an=!0,rs=!0),tt.id!==y&&(y=tt.id,an=!0),mr||M!==S){O.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),_e.setValue(b,"projectionMatrix",S.projectionMatrix),_e.setValue(b,"viewMatrix",S.matrixWorldInverse);let tn=_e.map.cameraPosition;tn!==void 0&&tn.setValue(b,z.setFromMatrixPosition(S.matrixWorld)),Y.logarithmicDepthBuffer&&_e.setValue(b,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(tt.isMeshPhongMaterial||tt.isMeshToonMaterial||tt.isMeshLambertMaterial||tt.isMeshBasicMaterial||tt.isMeshStandardMaterial||tt.isShaderMaterial)&&_e.setValue(b,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,an=!0,rs=!0)}if(G.isSkinnedMesh){_e.setOptional(b,G,"bindMatrix"),_e.setOptional(b,G,"bindMatrixInverse");let qe=G.skeleton;qe&&(qe.boneTexture===null&&qe.computeBoneTexture(),_e.setValue(b,"boneTexture",qe.boneTexture,ct))}G.isBatchedMesh&&(_e.setOptional(b,G,"batchingTexture"),_e.setValue(b,"batchingTexture",G._matricesTexture,ct),_e.setOptional(b,G,"batchingIdTexture"),_e.setValue(b,"batchingIdTexture",G._indirectTexture,ct),_e.setOptional(b,G,"batchingColorTexture"),G._colorsTexture!==null&&_e.setValue(b,"batchingColorTexture",G._colorsTexture,ct));let xn=Q.morphAttributes;if((xn.position!==void 0||xn.normal!==void 0||xn.color!==void 0)&&dt.update(G,Q,on),(an||kt.receiveShadow!==G.receiveShadow)&&(kt.receiveShadow=G.receiveShadow,_e.setValue(b,"receiveShadow",G.receiveShadow)),tt.isMeshGouraudMaterial&&tt.envMap!==null&&(_n.envMap.value=At,_n.flipEnvMap.value=At.isCubeTexture&&At.isRenderTargetTexture===!1?-1:1),tt.isMeshStandardMaterial&&tt.envMap===null&&H.environment!==null&&(_n.envMapIntensity.value=H.environmentIntensity),an&&(_e.setValue(b,"toneMappingExposure",x.toneMappingExposure),kt.needsLights&&Od(_n,rs),mt&&tt.fog===!0&&ot.refreshFogUniforms(_n,mt),ot.refreshMaterialUniforms(_n,tt,Z,it,p.state.transmissionRenderTarget[S.id]),Kr.upload(b,kh(kt),_n,ct)),tt.isShaderMaterial&&tt.uniformsNeedUpdate===!0&&(Kr.upload(b,kh(kt),_n,ct),tt.uniformsNeedUpdate=!1),tt.isSpriteMaterial&&_e.setValue(b,"center",G.center),_e.setValue(b,"modelViewMatrix",G.modelViewMatrix),_e.setValue(b,"normalMatrix",G.normalMatrix),_e.setValue(b,"modelMatrix",G.matrixWorld),tt.isShaderMaterial||tt.isRawShaderMaterial){let qe=tt.uniformsGroups;for(let tn=0,Cl=qe.length;tn<Cl;tn++){let Gi=qe[tn];$t.update(Gi,on),$t.bind(Gi,on)}}return on}function Od(S,H){S.ambientLightColor.needsUpdate=H,S.lightProbe.needsUpdate=H,S.directionalLights.needsUpdate=H,S.directionalLightShadows.needsUpdate=H,S.pointLights.needsUpdate=H,S.pointLightShadows.needsUpdate=H,S.spotLights.needsUpdate=H,S.spotLightShadows.needsUpdate=H,S.rectAreaLights.needsUpdate=H,S.hemisphereLights.needsUpdate=H}function Bd(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(S,H,Q){let tt=st.get(S);tt.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,tt.__autoAllocateDepthBuffer===!1&&(tt.__useRenderToTexture=!1),st.get(S.texture).__webglTexture=H,st.get(S.depthTexture).__webglTexture=tt.__autoAllocateDepthBuffer?void 0:Q,tt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,H){let Q=st.get(S);Q.__webglFramebuffer=H,Q.__useDefaultFramebuffer=H===void 0};let zd=b.createFramebuffer();this.setRenderTarget=function(S,H=0,Q=0){U=S,T=H,D=Q;let tt=!0,G=null,mt=!1,Et=!1;if(S){let At=st.get(S);if(At.__useDefaultFramebuffer!==void 0)O.bindFramebuffer(b.FRAMEBUFFER,null),tt=!1;else if(At.__webglFramebuffer===void 0)ct.setupRenderTarget(S);else if(At.__hasExternalTextures)ct.rebindTextures(S,st.get(S.texture).__webglTexture,st.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let zt=S.depthTexture;if(At.__boundDepthTexture!==zt){if(zt!==null&&st.has(zt)&&(S.width!==zt.image.width||S.height!==zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ct.setupDepthRenderbuffer(S)}}let Gt=S.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(Et=!0);let Xt=st.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Xt[H])?G=Xt[H][Q]:G=Xt[H],mt=!0):S.samples>0&&ct.useMultisampledRTT(S)===!1?G=st.get(S).__webglMultisampledFramebuffer:Array.isArray(Xt)?G=Xt[Q]:G=Xt,I.copy(S.viewport),B.copy(S.scissor),J=S.scissorTest}else I.copy(xt).multiplyScalar(Z).floor(),B.copy(Ft).multiplyScalar(Z).floor(),J=Nt;if(Q!==0&&(G=zd),O.bindFramebuffer(b.FRAMEBUFFER,G)&&tt&&O.drawBuffers(S,G),O.viewport(I),O.scissor(B),O.setScissorTest(J),mt){let At=st.get(S.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+H,At.__webglTexture,Q)}else if(Et){let At=H;for(let Gt=0;Gt<S.textures.length;Gt++){let Xt=st.get(S.textures[Gt]);b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0+Gt,Xt.__webglTexture,Q,At)}}else if(S!==null&&Q!==0){let At=st.get(S.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,At.__webglTexture,Q)}y=-1},this.readRenderTargetPixels=function(S,H,Q,tt,G,mt,Et,Pt=0){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=st.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Et!==void 0&&(At=At[Et]),At){O.bindFramebuffer(b.FRAMEBUFFER,At);try{let Gt=S.textures[Pt],Xt=Gt.format,zt=Gt.type;if(!Y.textureFormatReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Y.textureTypeReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=S.width-tt&&Q>=0&&Q<=S.height-G&&(S.textures.length>1&&b.readBuffer(b.COLOR_ATTACHMENT0+Pt),b.readPixels(H,Q,tt,G,Ot.convert(Xt),Ot.convert(zt),mt))}finally{let Gt=U!==null?st.get(U).__webglFramebuffer:null;O.bindFramebuffer(b.FRAMEBUFFER,Gt)}}},this.readRenderTargetPixelsAsync=async function(S,H,Q,tt,G,mt,Et,Pt=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=st.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Et!==void 0&&(At=At[Et]),At)if(H>=0&&H<=S.width-tt&&Q>=0&&Q<=S.height-G){O.bindFramebuffer(b.FRAMEBUFFER,At);let Gt=S.textures[Pt],Xt=Gt.format,zt=Gt.type;if(!Y.textureFormatReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Y.textureTypeReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let jt=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,jt),b.bufferData(b.PIXEL_PACK_BUFFER,mt.byteLength,b.STREAM_READ),S.textures.length>1&&b.readBuffer(b.COLOR_ATTACHMENT0+Pt),b.readPixels(H,Q,tt,G,Ot.convert(Xt),Ot.convert(zt),0);let le=U!==null?st.get(U).__webglFramebuffer:null;O.bindFramebuffer(b.FRAMEBUFFER,le);let be=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await cf(b,be,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,jt),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,mt),b.deleteBuffer(jt),b.deleteSync(be),mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,H=null,Q=0){let tt=Math.pow(2,-Q),G=Math.floor(S.image.width*tt),mt=Math.floor(S.image.height*tt),Et=H!==null?H.x:0,Pt=H!==null?H.y:0;ct.setTexture2D(S,0),b.copyTexSubImage2D(b.TEXTURE_2D,Q,0,0,Et,Pt,G,mt),O.unbindTexture()};let kd=b.createFramebuffer(),Vd=b.createFramebuffer();this.copyTextureToTexture=function(S,H,Q=null,tt=null,G=0,mt=null){mt===null&&(G!==0?(Fr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),mt=G,G=0):mt=0);let Et,Pt,At,Gt,Xt,zt,jt,le,be,pe=S.isCompressedTexture?S.mipmaps[mt]:S.image;if(Q!==null)Et=Q.max.x-Q.min.x,Pt=Q.max.y-Q.min.y,At=Q.isBox3?Q.max.z-Q.min.z:1,Gt=Q.min.x,Xt=Q.min.y,zt=Q.isBox3?Q.min.z:0;else{let xn=Math.pow(2,-G);Et=Math.floor(pe.width*xn),Pt=Math.floor(pe.height*xn),S.isDataArrayTexture?At=pe.depth:S.isData3DTexture?At=Math.floor(pe.depth*xn):At=1,Gt=0,Xt=0,zt=0}tt!==null?(jt=tt.x,le=tt.y,be=tt.z):(jt=0,le=0,be=0);let he=Ot.convert(H.format),kt=Ot.convert(H.type),ve;H.isData3DTexture?(ct.setTexture3D(H,0),ve=b.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(ct.setTexture2DArray(H,0),ve=b.TEXTURE_2D_ARRAY):(ct.setTexture2D(H,0),ve=b.TEXTURE_2D),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,H.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,H.unpackAlignment);let te=b.getParameter(b.UNPACK_ROW_LENGTH),on=b.getParameter(b.UNPACK_IMAGE_HEIGHT),mr=b.getParameter(b.UNPACK_SKIP_PIXELS),an=b.getParameter(b.UNPACK_SKIP_ROWS),rs=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,pe.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,pe.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Gt),b.pixelStorei(b.UNPACK_SKIP_ROWS,Xt),b.pixelStorei(b.UNPACK_SKIP_IMAGES,zt);let _e=S.isDataArrayTexture||S.isData3DTexture,_n=H.isDataArrayTexture||H.isData3DTexture;if(S.isDepthTexture){let xn=st.get(S),qe=st.get(H),tn=st.get(xn.__renderTarget),Cl=st.get(qe.__renderTarget);O.bindFramebuffer(b.READ_FRAMEBUFFER,tn.__webglFramebuffer),O.bindFramebuffer(b.DRAW_FRAMEBUFFER,Cl.__webglFramebuffer);for(let Gi=0;Gi<At;Gi++)_e&&(b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,st.get(S).__webglTexture,G,zt+Gi),b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,st.get(H).__webglTexture,mt,be+Gi)),b.blitFramebuffer(Gt,Xt,Et,Pt,jt,le,Et,Pt,b.DEPTH_BUFFER_BIT,b.NEAREST);O.bindFramebuffer(b.READ_FRAMEBUFFER,null),O.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else if(G!==0||S.isRenderTargetTexture||st.has(S)){let xn=st.get(S),qe=st.get(H);O.bindFramebuffer(b.READ_FRAMEBUFFER,kd),O.bindFramebuffer(b.DRAW_FRAMEBUFFER,Vd);for(let tn=0;tn<At;tn++)_e?b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,xn.__webglTexture,G,zt+tn):b.framebufferTexture2D(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,xn.__webglTexture,G),_n?b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,qe.__webglTexture,mt,be+tn):b.framebufferTexture2D(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,qe.__webglTexture,mt),G!==0?b.blitFramebuffer(Gt,Xt,Et,Pt,jt,le,Et,Pt,b.COLOR_BUFFER_BIT,b.NEAREST):_n?b.copyTexSubImage3D(ve,mt,jt,le,be+tn,Gt,Xt,Et,Pt):b.copyTexSubImage2D(ve,mt,jt,le,Gt,Xt,Et,Pt);O.bindFramebuffer(b.READ_FRAMEBUFFER,null),O.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else _n?S.isDataTexture||S.isData3DTexture?b.texSubImage3D(ve,mt,jt,le,be,Et,Pt,At,he,kt,pe.data):H.isCompressedArrayTexture?b.compressedTexSubImage3D(ve,mt,jt,le,be,Et,Pt,At,he,pe.data):b.texSubImage3D(ve,mt,jt,le,be,Et,Pt,At,he,kt,pe):S.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,mt,jt,le,Et,Pt,he,kt,pe.data):S.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,mt,jt,le,pe.width,pe.height,he,pe.data):b.texSubImage2D(b.TEXTURE_2D,mt,jt,le,Et,Pt,he,kt,pe);b.pixelStorei(b.UNPACK_ROW_LENGTH,te),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,on),b.pixelStorei(b.UNPACK_SKIP_PIXELS,mr),b.pixelStorei(b.UNPACK_SKIP_ROWS,an),b.pixelStorei(b.UNPACK_SKIP_IMAGES,rs),mt===0&&H.generateMipmaps&&b.generateMipmap(ve),O.unbindTexture()},this.initRenderTarget=function(S){st.get(S).__webglFramebuffer===void 0&&ct.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?ct.setTextureCube(S,0):S.isData3DTexture?ct.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?ct.setTexture2DArray(S,0):ct.setTexture2D(S,0),O.unbindTexture()},this.resetState=function(){T=0,D=0,U=null,O.reset(),wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Qt._getUnpackColorSpace()}};function Qs(i){if(!Array.isArray(i)||i.length<3||i.some(r=>r.length!==2||r.some(s=>!Number.isFinite(s))))throw new Error("En az \xFC\xE7 ge\xE7erli nokta se\xE7in.");let t=(r,s,o)=>(s[0]-r[0])*(o[1]-r[1])-(s[1]-r[1])*(o[0]-r[0]),e=(r,s,o)=>Math.abs(t(r,s,o))<1e-8&&o.every((a,c)=>a>=Math.min(r[c],s[c])-1e-8&&a<=Math.max(r[c],s[c])+1e-8);for(let r=0;r<i.length;r++){let s=i[r],o=i[(r+1)%i.length];if(Math.hypot(s[0]-o[0],s[1]-o[1])<1e-6)throw new Error("Ayn\u0131 noktay\u0131 art arda se\xE7meyin.");for(let a=r+2;a<i.length;a++){if(r===0&&a===i.length-1)continue;let c=i[a],l=i[(a+1)%i.length];if(t(s,o,c)*t(s,o,l)<0&&t(c,l,s)*t(c,l,o)<0||e(s,o,c)||e(s,o,l)||e(c,l,s)||e(c,l,o))throw new Error("Se\xE7im \xE7izgileri kesi\u015Fiyor. Son noktay\u0131 geri al\u0131p yeniden se\xE7in.")}}let n=i.reduce((r,s,o)=>{let a=i[(o+1)%i.length];return r+s[0]*a[1]-a[0]*s[1]},0);if(Math.abs(n)<1e-7)throw new Error("Se\xE7im alan\u0131 \xE7ok k\xFC\xE7\xFCk veya noktalar ayn\u0131 \xE7izgide.");return n>0?i.map(r=>[...r]):i.map(r=>[...r]).reverse()}var to=(i,t)=>i.reduce((e,n,r)=>e+n*t[r],0);function nh(i,t){return i.map(e=>{let n=to(e.n,t.n);if(Math.abs(n)<1e-5)throw new Error("Se\xE7im y\xF6n\xFC dolgu d\xFCzlemine paralel. Hedef y\xFCzeye bak\u0131p alan\u0131 yeniden se\xE7in.");let r=e.shape==="polygon"?e.points:e.shape==="circle"?Array.from({length:64},(h,u)=>[Math.cos(u*Math.PI/32)*e.width/2,Math.sin(u*Math.PI/32)*e.width/2]):[[-e.width/2,-e.height/2],[e.width/2,-e.height/2],[e.width/2,e.height/2],[-e.width/2,e.height/2]],s=Qs(r.map(h=>{let u=e.center.map((g,v)=>g+e.u[v]*h[0]+e.v[v]*h[1]),f=to(t.origin.map((g,v)=>g-u[v]),t.n)/n,d=u.map((g,v)=>g+e.n[v]*f-t.origin[v]);return[to(d,t.u),to(d,t.v)]})),o=s.map(h=>h[0]),a=s.map(h=>h[1]),c=(Math.min(...o)+Math.max(...o))/2,l=(Math.min(...a)+Math.max(...a))/2;return{...e,shape:"polygon",points:s.map(h=>[h[0]-c,h[1]-l]),center:t.origin.map((h,u)=>h+t.u[u]*c+t.v[u]*l),u:[...t.u],v:[...t.v],n:[...t.n],width:Math.max(...o)-Math.min(...o),height:Math.max(...a)-Math.min(...a)}})}function Xf(i,t,e,{offset:n=0,thickness:r=null}={}){if(!Number.isFinite(n))throw new Error("Ge\xE7erli bir dolgu y\xFCksekli\u011Fi girin.");if(r!==null&&(!Number.isFinite(r)||r<=0||r>1e3))throw new Error("Dolgu kal\u0131nl\u0131\u011F\u0131 0 ile 1000 mm aras\u0131nda olmal\u0131.");return nh(t,e).map(s=>{let o=r;if(o===null){let a=1/0;for(let c of i.vertices)a=Math.min(a,to(c.map((l,h)=>l-s.center[h]),s.n));if(o=n-a,o<=1e-6)throw new Error("Hedef d\xFCzlem modelin alt s\u0131n\u0131r\u0131nda veya alt\u0131nda. Daha y\xFCksek bir y\xFCzey/y\xFCkseklik se\xE7in ya da dolgu kal\u0131nl\u0131\u011F\u0131n\u0131 girin.")}return{...s,depth:o,offset:n}})}var qf={type:"change"},rh={type:"start"},Zf={type:"end"},_l=new li,Yf=new Ze,B_=Math.cos(70*Uc.DEG2RAD),De=new L,sn=2*Math.PI,ce={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ih=1e-6,xl=class extends Xs{constructor(t,e=null){super(t,e),this.state=ce.NONE,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:dn.ROTATE,MIDDLE:dn.DOLLY,RIGHT:dn.PAN},this.touches={ONE:Ui.ROTATE,TWO:Ui.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new Mn,this._lastTargetPosition=new L,this._quat=new Mn().setFromUnitVectors(t.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Wr,this._sphericalDelta=new Wr,this._scale=1,this._panOffset=new L,this._rotateStart=new ut,this._rotateEnd=new ut,this._rotateDelta=new ut,this._panStart=new ut,this._panEnd=new ut,this._panDelta=new ut,this._dollyStart=new ut,this._dollyEnd=new ut,this._dollyDelta=new ut,this._dollyDirection=new L,this._mouse=new ut,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=k_.bind(this),this._onPointerDown=z_.bind(this),this._onPointerUp=V_.bind(this),this._onContextMenu=Z_.bind(this),this._onMouseWheel=W_.bind(this),this._onKeyDown=X_.bind(this),this._onTouchStart=q_.bind(this),this._onTouchMove=Y_.bind(this),this._onMouseDown=H_.bind(this),this._onMouseMove=G_.bind(this),this._interceptControlDown=$_.bind(this),this._interceptControlUp=J_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(qf),this.update(),this.state=ce.NONE}update(t=null){let e=this.object.position;De.copy(e).sub(this.target),De.applyQuaternion(this._quat),this._spherical.setFromVector3(De),this.autoRotate&&this.state===ce.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=sn:n>Math.PI&&(n-=sn),r<-Math.PI?r+=sn:r>Math.PI&&(r-=sn),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(De.setFromSpherical(this._spherical),De.applyQuaternion(this._quatInverse),e.copy(this.target).add(De),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=De.length();o=this._clampDistance(a*this._scale);let c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){let a=new L(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;let l=new L(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=De.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(_l.origin.copy(this.object.position),_l.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(_l.direction))<B_?this.object.lookAt(this.target):(Yf.setFromNormalAndCoplanarPoint(this.object.up,this.target),_l.intersectPlane(Yf,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>ih||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ih||this._lastTargetPosition.distanceToSquared(this.target)>ih?(this.dispatchEvent(qf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?sn/60*this.autoRotateSpeed*t:sn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){De.setFromMatrixColumn(e,0),De.multiplyScalar(-t),this._panOffset.add(De)}_panUp(t,e){this.screenSpacePanning===!0?De.setFromMatrixColumn(e,1):(De.setFromMatrixColumn(e,0),De.crossVectors(this.object.up,De)),De.multiplyScalar(t),this._panOffset.add(De)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;De.copy(r).sub(this.target);let s=De.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/n.clientHeight,this.object.matrix),this._panUp(2*e*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),r=t-n.left,s=e-n.top,o=n.width,a=n.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(sn*this._rotateDelta.x/e.clientHeight),this._rotateUp(sn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(n,r)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),r=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(sn*this._rotateDelta.x/e.clientHeight),this._rotateUp(sn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new ut,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function z_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function k_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function V_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Zf),this.state=ce.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function H_(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case dn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ce.DOLLY;break;case dn.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ce.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ce.ROTATE}break;case dn.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ce.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ce.PAN}break;default:this.state=ce.NONE}this.state!==ce.NONE&&this.dispatchEvent(rh)}function G_(i){switch(this.state){case ce.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ce.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ce.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function W_(i){this.enabled===!1||this.enableZoom===!1||this.state!==ce.NONE||(i.preventDefault(),this.dispatchEvent(rh),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Zf))}function X_(i){this.enabled!==!1&&this._handleKeyDown(i)}function q_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Ui.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ce.TOUCH_ROTATE;break;case Ui.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ce.TOUCH_PAN;break;default:this.state=ce.NONE}break;case 2:switch(this.touches.TWO){case Ui.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ce.TOUCH_DOLLY_PAN;break;case Ui.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ce.TOUCH_DOLLY_ROTATE;break;default:this.state=ce.NONE}break;default:this.state=ce.NONE}this.state!==ce.NONE&&this.dispatchEvent(rh)}function Y_(i){switch(this._trackPointer(i),this.state){case ce.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ce.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ce.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ce.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ce.NONE}}function Z_(i){this.enabled!==!1&&i.preventDefault()}function $_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function J_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var yl=class extends rn{constructor(t){super(t)}load(t,e,n,r){let s=this,o=new ui(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){try{e(s.parse(a))}catch(c){r?r(c):console.error(c),s.manager.itemError(t)}},n,r)}parse(t){function e(l){let h=new DataView(l),u=32/8*3+32/8*3*3+16/8,f=h.getUint32(80,!0);if(80+32/8+f*u===h.byteLength)return!0;let g=[115,111,108,105,100];for(let v=0;v<5;v++)if(n(g,h,v))return!1;return!0}function n(l,h,u){for(let f=0,d=l.length;f<d;f++)if(l[f]!==h.getUint8(u+f))return!1;return!0}function r(l){let h=new DataView(l),u=h.getUint32(80,!0),f,d,g,v=!1,m,p,A,E,x;for(let I=0;I<70;I++)h.getUint32(I,!1)==1129270351&&h.getUint8(I+4)==82&&h.getUint8(I+5)==61&&(v=!0,m=new Float32Array(u*3*3),p=h.getUint8(I+6)/255,A=h.getUint8(I+7)/255,E=h.getUint8(I+8)/255,x=h.getUint8(I+9)/255);let P=84,T=50,D=new oe,U=new Float32Array(u*3*3),y=new Float32Array(u*3*3),M=new Vt;for(let I=0;I<u;I++){let B=P+I*T,J=h.getFloat32(B,!0),K=h.getFloat32(B+4,!0),j=h.getFloat32(B+8,!0);if(v){let W=h.getUint16(B+48,!0);(W&32768)===0?(f=(W&31)/31,d=(W>>5&31)/31,g=(W>>10&31)/31):(f=p,d=A,g=E)}for(let W=1;W<=3;W++){let it=B+W*12,Z=I*3*3+(W-1)*3;U[Z]=h.getFloat32(it,!0),U[Z+1]=h.getFloat32(it+4,!0),U[Z+2]=h.getFloat32(it+8,!0),y[Z]=J,y[Z+1]=K,y[Z+2]=j,v&&(M.setRGB(f,d,g,Re),m[Z]=M.r,m[Z+1]=M.g,m[Z+2]=M.b)}}return D.setAttribute("position",new Ae(U,3)),D.setAttribute("normal",new Ae(y,3)),v&&(D.setAttribute("color",new Ae(m,3)),D.hasColors=!0,D.alpha=x),D}function s(l){let h=new oe,u=/solid([\s\S]*?)endsolid/g,f=/facet([\s\S]*?)endfacet/g,d=/solid\s(.+)/,g=0,v=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,m=new RegExp("vertex"+v+v+v,"g"),p=new RegExp("normal"+v+v+v,"g"),A=[],E=[],x=[],P=new L,T,D=0,U=0,y=0;for(;(T=u.exec(l))!==null;){U=y;let M=T[0],I=(T=d.exec(M))!==null?T[1]:"";for(x.push(I);(T=f.exec(M))!==null;){let K=0,j=0,W=T[0];for(;(T=p.exec(W))!==null;)P.x=parseFloat(T[1]),P.y=parseFloat(T[2]),P.z=parseFloat(T[3]),j++;for(;(T=m.exec(W))!==null;)A.push(parseFloat(T[1]),parseFloat(T[2]),parseFloat(T[3])),E.push(P.x,P.y,P.z),K++,y++;j!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+g),K!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+g),g++}let B=U,J=y-U;h.userData.groupNames=x,h.addGroup(B,J,D),D++}return h.setAttribute("position",new Yt(A,3)),h.setAttribute("normal",new Yt(E,3)),h}function o(l){return typeof l!="string"?new TextDecoder().decode(l):l}function a(l){if(typeof l=="string"){let h=new Uint8Array(l.length);for(let u=0;u<l.length;u++)h[u]=l.charCodeAt(u)&255;return h.buffer||h}else return l}let c=a(t);return e(c)?r(c):s(o(t))}};var K_=/^[og]\s*(.+)?/,j_=/^mtllib /,Q_=/^usemtl /,tx=/^usemap /,$f=/\s+/,Jf=new L,sh=new L,Kf=new L,jf=new L,En=new L,Ml=new Vt;function ex(){let i={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(t,e){if(this.object&&this.object.fromDeclaration===!1){this.object.name=t,this.object.fromDeclaration=e!==!1;return}let n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:t||"",fromDeclaration:e!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(r,s){let o=this._finalize(!1);o&&(o.inherited||o.groupCount<=0)&&this.materials.splice(o.index,1);let a={index:this.materials.length,name:r||"",mtllib:Array.isArray(s)&&s.length>0?s[s.length-1]:"",smooth:o!==void 0?o.smooth:this.smooth,groupStart:o!==void 0?o.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(c){let l={index:typeof c=="number"?c:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return l.clone=this.clone.bind(l),l}};return this.materials.push(a),a},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(r){let s=this.currentMaterial();if(s&&s.groupEnd===-1&&(s.groupEnd=this.geometry.vertices.length/3,s.groupCount=s.groupEnd-s.groupStart,s.inherited=!1),r&&this.materials.length>1)for(let o=this.materials.length-1;o>=0;o--)this.materials[o].groupCount<=0&&this.materials.splice(o,1);return r&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),s}},n&&n.name&&typeof n.clone=="function"){let r=n.clone(0);r.inherited=!0,this.object.materials.push(r)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(t,e){let n=parseInt(t,10);return(n>=0?n-1:n+e/3)*3},parseNormalIndex:function(t,e){let n=parseInt(t,10);return(n>=0?n-1:n+e/3)*3},parseUVIndex:function(t,e){let n=parseInt(t,10);return(n>=0?n-1:n+e/2)*2},addVertex:function(t,e,n){let r=this.vertices,s=this.object.geometry.vertices;s.push(r[t+0],r[t+1],r[t+2]),s.push(r[e+0],r[e+1],r[e+2]),s.push(r[n+0],r[n+1],r[n+2])},addVertexPoint:function(t){let e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addVertexLine:function(t){let e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addNormal:function(t,e,n){let r=this.normals,s=this.object.geometry.normals;s.push(r[t+0],r[t+1],r[t+2]),s.push(r[e+0],r[e+1],r[e+2]),s.push(r[n+0],r[n+1],r[n+2])},addFaceNormal:function(t,e,n){let r=this.vertices,s=this.object.geometry.normals;Jf.fromArray(r,t),sh.fromArray(r,e),Kf.fromArray(r,n),En.subVectors(Kf,sh),jf.subVectors(Jf,sh),En.cross(jf),En.normalize(),s.push(En.x,En.y,En.z),s.push(En.x,En.y,En.z),s.push(En.x,En.y,En.z)},addColor:function(t,e,n){let r=this.colors,s=this.object.geometry.colors;r[t]!==void 0&&s.push(r[t+0],r[t+1],r[t+2]),r[e]!==void 0&&s.push(r[e+0],r[e+1],r[e+2]),r[n]!==void 0&&s.push(r[n+0],r[n+1],r[n+2])},addUV:function(t,e,n){let r=this.uvs,s=this.object.geometry.uvs;s.push(r[t+0],r[t+1]),s.push(r[e+0],r[e+1]),s.push(r[n+0],r[n+1])},addDefaultUV:function(){let t=this.object.geometry.uvs;t.push(0,0),t.push(0,0),t.push(0,0)},addUVLine:function(t){let e=this.uvs;this.object.geometry.uvs.push(e[t+0],e[t+1])},addFace:function(t,e,n,r,s,o,a,c,l){let h=this.vertices.length,u=this.parseVertexIndex(t,h),f=this.parseVertexIndex(e,h),d=this.parseVertexIndex(n,h);if(this.addVertex(u,f,d),this.addColor(u,f,d),a!==void 0&&a!==""){let g=this.normals.length;u=this.parseNormalIndex(a,g),f=this.parseNormalIndex(c,g),d=this.parseNormalIndex(l,g),this.addNormal(u,f,d)}else this.addFaceNormal(u,f,d);if(r!==void 0&&r!==""){let g=this.uvs.length;u=this.parseUVIndex(r,g),f=this.parseUVIndex(s,g),d=this.parseUVIndex(o,g),this.addUV(u,f,d),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(t){this.object.geometry.type="Points";let e=this.vertices.length;for(let n=0,r=t.length;n<r;n++){let s=this.parseVertexIndex(t[n],e);this.addVertexPoint(s),this.addColor(s)}},addLineGeometry:function(t,e){this.object.geometry.type="Line";let n=this.vertices.length,r=this.uvs.length;for(let s=0,o=t.length;s<o;s++)this.addVertexLine(this.parseVertexIndex(t[s],n));for(let s=0,o=e.length;s<o;s++)this.addUVLine(this.parseUVIndex(e[s],r))}};return i.startObject("",!1),i}var Sl=class extends rn{constructor(t){super(t),this.materials=null}load(t,e,n,r){let s=this,o=new ui(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){try{e(s.parse(a))}catch(c){r?r(c):console.error(c),s.manager.itemError(t)}},n,r)}setMaterials(t){return this.materials=t,this}parse(t){let e=new ex;t.indexOf(`\r
`)!==-1&&(t=t.replace(/\r\n/g,`
`)),t.indexOf(`\\
`)!==-1&&(t=t.replace(/\\\n/g,""));let n=t.split(`
`),r=[];for(let a=0,c=n.length;a<c;a++){let l=n[a].trimStart();if(l.length===0)continue;let h=l.charAt(0);if(h!=="#")if(h==="v"){let u=l.split($f);switch(u[0]){case"v":e.vertices.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3])),u.length>=7?(Ml.setRGB(parseFloat(u[4]),parseFloat(u[5]),parseFloat(u[6]),Re),e.colors.push(Ml.r,Ml.g,Ml.b)):e.colors.push(void 0,void 0,void 0);break;case"vn":e.normals.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3]));break;case"vt":e.uvs.push(parseFloat(u[1]),parseFloat(u[2]));break}}else if(h==="f"){let f=l.slice(1).trim().split($f),d=[];for(let v=0,m=f.length;v<m;v++){let p=f[v];if(p.length>0){let A=p.split("/");d.push(A)}}let g=d[0];for(let v=1,m=d.length-1;v<m;v++){let p=d[v],A=d[v+1];e.addFace(g[0],p[0],A[0],g[1],p[1],A[1],g[2],p[2],A[2])}}else if(h==="l"){let u=l.substring(1).trim().split(" "),f=[],d=[];if(l.indexOf("/")===-1)f=u;else for(let g=0,v=u.length;g<v;g++){let m=u[g].split("/");m[0]!==""&&f.push(m[0]),m[1]!==""&&d.push(m[1])}e.addLineGeometry(f,d)}else if(h==="p"){let f=l.slice(1).trim().split(" ");e.addPointGeometry(f)}else if((r=K_.exec(l))!==null){let u=(" "+r[0].slice(1).trim()).slice(1);e.startObject(u)}else if(Q_.test(l))e.object.startMaterial(l.substring(7).trim(),e.materialLibraries);else if(j_.test(l))e.materialLibraries.push(l.substring(7).trim());else if(tx.test(l))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(h==="s"){if(r=l.split(" "),r.length>1){let f=r[1].trim().toLowerCase();e.object.smooth=f!=="0"&&f!=="off"}else e.object.smooth=!0;let u=e.object.currentMaterial();u&&(u.smooth=e.object.smooth)}else{if(l==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+l+'"')}}e.finalize();let s=new Oe;if(s.materialLibraries=[].concat(e.materialLibraries),!(e.objects.length===1&&e.objects[0].geometry.vertices.length===0)===!0)for(let a=0,c=e.objects.length;a<c;a++){let l=e.objects[a],h=l.geometry,u=l.materials,f=h.type==="Line",d=h.type==="Points",g=!1;if(h.vertices.length===0)continue;let v=new oe;v.setAttribute("position",new Yt(h.vertices,3)),h.normals.length>0&&v.setAttribute("normal",new Yt(h.normals,3)),h.colors.length>0&&(g=!0,v.setAttribute("color",new Yt(h.colors,3))),h.hasUVIndices===!0&&v.setAttribute("uv",new Yt(h.uvs,2));let m=[];for(let A=0,E=u.length;A<E;A++){let x=u[A],P=x.name+"_"+x.smooth+"_"+g,T=e.materials[P];if(this.materials!==null){if(T=this.materials.create(x.name),f&&T&&!(T instanceof bn)){let D=new bn;nn.prototype.copy.call(D,T),D.color.copy(T.color),T=D}else if(d&&T&&!(T instanceof Dn)){let D=new Dn({size:10,sizeAttenuation:!1});nn.prototype.copy.call(D,T),D.color.copy(T.color),D.map=T.map,T=D}}T===void 0&&(f?T=new bn:d?T=new Dn({size:1,sizeAttenuation:!1}):T=new Xn,T.name=x.name,T.flatShading=!x.smooth,T.vertexColors=g,e.materials[P]=T),m.push(T)}let p;if(m.length>1){for(let A=0,E=u.length;A<E;A++){let x=u[A];v.addGroup(x.groupStart,x.groupCount,A)}f?p=new tr(v,m):d?p=new hi(v,m):p=new ue(v,m)}else f?p=new tr(v,m[0]):d?p=new hi(v,m[0]):p=new ue(v,m[0]);p.name=l.name,s.add(p)}else if(e.vertices.length>0){let a=new Dn({size:1,sizeAttenuation:!1}),c=new oe;c.setAttribute("position",new Yt(e.vertices,3)),e.colors.length>0&&e.colors[0]!==void 0&&(c.setAttribute("color",new Yt(e.colors,3)),a.vertexColors=!0);let l=new hi(c,a);s.add(l)}return s}};var pn=Uint8Array,Qr=Uint16Array,nx=Int32Array,Qf=new pn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),td=new pn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),ix=new pn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),ed=function(i,t){for(var e=new Qr(31),n=0;n<31;++n)e[n]=t+=1<<i[n-1];for(var r=new nx(e[30]),n=1;n<30;++n)for(var s=e[n];s<e[n+1];++s)r[s]=s-e[n]<<5|n;return{b:e,r}},nd=ed(Qf,2),id=nd.b,rx=nd.r;id[28]=258,rx[258]=28;var rd=ed(td,0),sx=rd.b,eb=rd.r,ch=new Qr(32768);for(ne=0;ne<32768;++ne)mi=(ne&43690)>>1|(ne&21845)<<1,mi=(mi&52428)>>2|(mi&13107)<<2,mi=(mi&61680)>>4|(mi&3855)<<4,ch[ne]=((mi&65280)>>8|(mi&255)<<8)>>1;var mi,ne,eo=(function(i,t,e){for(var n=i.length,r=0,s=new Qr(t);r<n;++r)i[r]&&++s[i[r]-1];var o=new Qr(t);for(r=1;r<t;++r)o[r]=o[r-1]+s[r-1]<<1;var a;if(e){a=new Qr(1<<t);var c=15-t;for(r=0;r<n;++r)if(i[r])for(var l=r<<4|i[r],h=t-i[r],u=o[i[r]-1]++<<h,f=u|(1<<h)-1;u<=f;++u)a[ch[u]>>c]=l}else for(a=new Qr(n),r=0;r<n;++r)i[r]&&(a[r]=ch[o[i[r]-1]++]>>15-i[r]);return a}),no=new pn(288);for(ne=0;ne<144;++ne)no[ne]=8;var ne;for(ne=144;ne<256;++ne)no[ne]=9;var ne;for(ne=256;ne<280;++ne)no[ne]=7;var ne;for(ne=280;ne<288;++ne)no[ne]=8;var ne,sd=new pn(32);for(ne=0;ne<32;++ne)sd[ne]=5;var ne;var ox=eo(no,9,1);var ax=eo(sd,5,1),oh=function(i){for(var t=i[0],e=1;e<i.length;++e)i[e]>t&&(t=i[e]);return t},Fn=function(i,t,e){var n=t/8|0;return(i[n]|i[n+1]<<8)>>(t&7)&e},ah=function(i,t){var e=t/8|0;return(i[e]|i[e+1]<<8|i[e+2]<<16)>>(t&7)},lx=function(i){return(i+7)/8|0},uh=function(i,t,e){return(t==null||t<0)&&(t=0),(e==null||e>i.length)&&(e=i.length),new pn(i.subarray(t,e))};var cx=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Tn=function(i,t,e){var n=new Error(t||cx[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,Tn),!e)throw n;return n},hx=function(i,t,e,n){var r=i.length,s=n?n.length:0;if(!r||t.f&&!t.l)return e||new pn(0);var o=!e,a=o||t.i!=2,c=t.i;o&&(e=new pn(r*3));var l=function($){var rt=e.length;if($>rt){var b=new pn(Math.max(rt*2,$));b.set(e),e=b}},h=t.f||0,u=t.p||0,f=t.b||0,d=t.l,g=t.d,v=t.m,m=t.n,p=r*8;do{if(!d){h=Fn(i,u,1);var A=Fn(i,u+1,3);if(u+=3,A)if(A==1)d=ox,g=ax,v=9,m=5;else if(A==2){var T=Fn(i,u,31)+257,D=Fn(i,u+10,15)+4,U=T+Fn(i,u+5,31)+1;u+=14;for(var y=new pn(U),M=new pn(19),I=0;I<D;++I)M[ix[I]]=Fn(i,u+I*3,7);u+=D*3;for(var B=oh(M),J=(1<<B)-1,K=eo(M,B,1),I=0;I<U;){var j=K[Fn(i,u,J)];u+=j&15;var E=j>>4;if(E<16)y[I++]=E;else{var W=0,it=0;for(E==16?(it=3+Fn(i,u,3),u+=2,W=y[I-1]):E==17?(it=3+Fn(i,u,7),u+=3):E==18&&(it=11+Fn(i,u,127),u+=7);it--;)y[I++]=W}}var Z=y.subarray(0,T),at=y.subarray(T);v=oh(Z),m=oh(at),d=eo(Z,v,1),g=eo(at,m,1)}else Tn(1);else{var E=lx(u)+4,x=i[E-4]|i[E-3]<<8,P=E+x;if(P>r){c&&Tn(0);break}a&&l(f+x),e.set(i.subarray(E,P),f),t.b=f+=x,t.p=u=P*8,t.f=h;continue}if(u>p){c&&Tn(0);break}}a&&l(f+131072);for(var _t=(1<<v)-1,xt=(1<<m)-1,Ft=u;;Ft=u){var W=d[ah(i,u)&_t],Nt=W>>4;if(u+=W&15,u>p){c&&Tn(0);break}if(W||Tn(2),Nt<256)e[f++]=Nt;else if(Nt==256){Ft=u,d=null;break}else{var Ht=Nt-254;if(Nt>264){var I=Nt-257,Ct=Qf[I];Ht=Fn(i,u,(1<<Ct)-1)+id[I],u+=Ct}var R=g[ah(i,u)&xt],C=R>>4;R||Tn(3),u+=R&15;var at=sx[C];if(C>3){var Ct=td[C];at+=ah(i,u)&(1<<Ct)-1,u+=Ct}if(u>p){c&&Tn(0);break}a&&l(f+131072);var z=f+Ht;if(f<at){var X=s-at,q=Math.min(at,z);for(X+f<0&&Tn(3);f<q;++f)e[f]=n[X+f]}for(;f<z;++f)e[f]=e[f-at]}}t.l=d,t.p=Ft,t.b=f,t.f=h,d&&(h=1,t.m=v,t.d=g,t.n=m)}while(!h);return f!=e.length&&o?uh(e,0,f):e.subarray(0,f)};var ux=new pn(0);var $n=function(i,t){return i[t]|i[t+1]<<8},Nn=function(i,t){return(i[t]|i[t+1]<<8|i[t+2]<<16|i[t+3]<<24)>>>0},lh=function(i,t){return Nn(i,t)+Nn(i,t+4)*4294967296};function fx(i,t){return hx(i,{i:2},t&&t.out,t&&t.dictionary)}var hh=typeof TextDecoder<"u"&&new TextDecoder,dx=0;try{hh.decode(ux,{stream:!0}),dx=1}catch{}var px=function(i){for(var t="",e=0;;){var n=i[e++],r=(n>127)+(n>223)+(n>239);if(e+r>i.length)return{s:t,r:uh(i,e-1)};r?r==3?(n=((n&15)<<18|(i[e++]&63)<<12|(i[e++]&63)<<6|i[e++]&63)-65536,t+=String.fromCharCode(55296|n>>10,56320|n&1023)):r&1?t+=String.fromCharCode((n&31)<<6|i[e++]&63):t+=String.fromCharCode((n&15)<<12|(i[e++]&63)<<6|i[e++]&63):t+=String.fromCharCode(n)}};function mx(i,t){if(t){for(var e="",n=0;n<i.length;n+=16384)e+=String.fromCharCode.apply(null,i.subarray(n,n+16384));return e}else{if(hh)return hh.decode(i);var r=px(i),s=r.s,e=r.r;return e.length&&Tn(8),s}}var gx=function(i,t){return t+30+$n(i,t+26)+$n(i,t+28)},vx=function(i,t,e){var n=$n(i,t+28),r=mx(i.subarray(t+46,t+46+n),!($n(i,t+8)&2048)),s=t+46+n,o=Nn(i,t+20),a=e&&o==4294967295?_x(i,s):[o,Nn(i,t+24),Nn(i,t+42)],c=a[0],l=a[1],h=a[2];return[$n(i,t+10),c,l,r,s+$n(i,t+30)+$n(i,t+32),h]},_x=function(i,t){for(;$n(i,t)!=1;t+=4+$n(i,t+2));return[lh(i,t+12),lh(i,t+4),lh(i,t+20)]};function od(i,t){for(var e={},n=i.length-22;Nn(i,n)!=101010256;--n)(!n||i.length-n>65558)&&Tn(13);var r=$n(i,n+8);if(!r)return{};var s=Nn(i,n+16),o=s==4294967295||r==65535;if(o){var a=Nn(i,n-12);o=Nn(i,a)==101075792,o&&(r=Nn(i,a+32),s=Nn(i,a+48))}for(var c=t&&t.filter,l=0;l<r;++l){var h=vx(i,s,o),u=h[0],f=h[1],d=h[2],g=h[3],v=h[4],m=h[5],p=gx(i,m);s=v,(!c||c({name:g,size:f,originalSize:d,compression:u}))&&(u?u==8?e[g]=fx(i.subarray(p,p+f),{out:new pn(d)}):Tn(14,"unknown compression type "+u):e[g]=uh(i,p,p+f))}return e}var fh=Re,bl=class extends rn{constructor(t){super(t),this.availableExtensions=[]}load(t,e,n,r){let s=this,o=new ui(s.manager);o.setPath(s.path),o.setResponseType("arraybuffer"),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(t,function(a){try{e(s.parse(a))}catch(c){r?r(c):console.error(c),s.manager.itemError(t)}},n,r)}parse(t){let e=this,n=new Bs(this.manager);function r(R){let C=null,z=null,X,q,$=[],rt=[],b,F={},V={},Y={},O=new TextDecoder;try{C=od(new Uint8Array(R))}catch(yt){if(yt instanceof ReferenceError)return console.error("THREE.3MFLoader: fflate missing and file is compressed."),null}let ht=null;for(z in C)z.match(/\_rels\/.rels$/)?X=z:z.match(/3D\/_rels\/.*\.model\.rels$/)?q=z:z.match(/^3D\/[^\/]*\.model$/)?ht=z:z.match(/^3D\/.*\/.*\.model$/)?$.push(z):z.match(/^3D\/Textures?\/.*/)&&rt.push(z);if($.push(ht),X===void 0)throw new Error("THREE.ThreeMFLoader: Cannot find relationship file `rels` in 3MF archive.");let st=C[X],ct=O.decode(st),Dt=s(ct);if(q){let yt=C[q],w=O.decode(yt);b=s(w)}for(let yt=0;yt<$.length;yt++){let w=$[yt],_=C[w],k=O.decode(_),et=new DOMParser().parseFromString(k,"application/xml");et.documentElement.nodeName.toLowerCase()!=="model"&&console.error("THREE.3MFLoader: Error loading 3MF - no 3MF document found: ",w);let ot=et.querySelector("model"),nt={};for(let gt=0;gt<ot.attributes.length;gt++){let Rt=ot.attributes[gt];Rt.name.match(/^xmlns:(.+)$/)&&(nt[Rt.value]=RegExp.$1)}let bt=T(ot);bt.xml=ot,0<Object.keys(nt).length&&(bt.extensions=nt),F[w]=bt}for(let yt=0;yt<rt.length;yt++){let w=rt[yt];Y[w]=C[w].buffer}return{rels:Dt,modelRels:b,model:F,printTicket:V,texture:Y}}function s(R){let C=[],X=new DOMParser().parseFromString(R,"application/xml").querySelectorAll("Relationship");for(let q=0;q<X.length;q++){let $=X[q],rt={target:$.getAttribute("Target"),id:$.getAttribute("Id"),type:$.getAttribute("Type")};C.push(rt)}return C}function o(R){let C={};for(let z=0;z<R.length;z++){let X=R[z],q=X.getAttribute("name");0<=["Title","Designer","Description","Copyright","LicenseTerms","Rating","CreationDate","ModificationDate"].indexOf(q)&&(C[q]=X.textContent)}return C}function a(R){let C={id:R.getAttribute("id"),basematerials:[]},z=R.querySelectorAll("base");for(let X=0;X<z.length;X++){let q=z[X],$=g(q);$.index=X,C.basematerials.push($)}return C}function c(R){return{id:R.getAttribute("id"),path:R.getAttribute("path"),contenttype:R.getAttribute("contenttype"),tilestyleu:R.getAttribute("tilestyleu"),tilestylev:R.getAttribute("tilestylev"),filter:R.getAttribute("filter")}}function l(R){let C={id:R.getAttribute("id"),texid:R.getAttribute("texid"),displaypropertiesid:R.getAttribute("displaypropertiesid")},z=R.querySelectorAll("tex2coord"),X=[];for(let q=0;q<z.length;q++){let $=z[q],rt=$.getAttribute("u"),b=$.getAttribute("v");X.push(parseFloat(rt),parseFloat(b))}return C.uvs=new Float32Array(X),C}function h(R){let C={id:R.getAttribute("id"),displaypropertiesid:R.getAttribute("displaypropertiesid")},z=R.querySelectorAll("color"),X=[],q=new Vt;for(let $=0;$<z.length;$++){let b=z[$].getAttribute("color");q.setStyle(b.substring(0,7),fh),X.push(q.r,q.g,q.b)}return C.colors=new Float32Array(X),C}function u(R){let C=R.children,z={};for(let X=0;X<C.length;X++){let q={type:C[X].nodeName.substring(2)};for(let $=0;$<C[X].attributes.length;$++){let rt=C[X].attributes[$];rt.specified&&(q[rt.name]=rt.value)}z[C[X].getAttribute("identifier")]=q}return z}function f(R){let C={id:R.getAttribute("id"),displayname:R.getAttribute("displayname")},z=R.children,X={};for(let q=0;q<z.length;q++){let $=z[q];if($.nodeName==="i:in"||$.nodeName==="i:out")X[$.nodeName==="i:in"?"inputs":"outputs"]=u($);else{let rt=$.children,b={op:$.nodeName.substring(2),identifier:$.getAttribute("identifier")};for(let F=0;F<rt.length;F++)b[rt[F].nodeName.substring(2)]=u(rt[F]);X[b.identifier]=b}}return C.operations=X,C}function d(R){let C={id:R.getAttribute("id")},z=R.querySelectorAll("pbmetallic"),X=[];for(let q=0;q<z.length;q++){let $=z[q];X.push({name:$.getAttribute("name"),metallicness:parseFloat($.getAttribute("metallicness")),roughness:parseFloat($.getAttribute("roughness"))})}return C.data=X,C}function g(R){let C={};return C.name=R.getAttribute("name"),C.displaycolor=R.getAttribute("displaycolor"),C.displaypropertiesid=R.getAttribute("displaypropertiesid"),C}function v(R){let C={},z=[],X=R.querySelectorAll("vertices vertex");for(let b=0;b<X.length;b++){let F=X[b],V=F.getAttribute("x"),Y=F.getAttribute("y"),O=F.getAttribute("z");z.push(parseFloat(V),parseFloat(Y),parseFloat(O))}C.vertices=new Float32Array(z);let q=[],$=[],rt=R.querySelectorAll("triangles triangle");for(let b=0;b<rt.length;b++){let F=rt[b],V=F.getAttribute("v1"),Y=F.getAttribute("v2"),O=F.getAttribute("v3"),ht=F.getAttribute("p1"),st=F.getAttribute("p2"),ct=F.getAttribute("p3"),Dt=F.getAttribute("pid"),yt={};yt.v1=parseInt(V,10),yt.v2=parseInt(Y,10),yt.v3=parseInt(O,10),$.push(yt.v1,yt.v2,yt.v3),ht&&(yt.p1=parseInt(ht,10)),st&&(yt.p2=parseInt(st,10)),ct&&(yt.p3=parseInt(ct,10)),Dt&&(yt.pid=Dt),0<Object.keys(yt).length&&q.push(yt)}return C.triangleProperties=q,C.triangles=new Uint32Array($),C}function m(R){let C=[],z=R.querySelectorAll("component");for(let X=0;X<z.length;X++){let q=z[X],$=p(q);C.push($)}return C}function p(R){let C={};C.objectId=R.getAttribute("objectid");let z=R.getAttribute("transform");return z&&(C.transform=A(z)),C}function A(R){let C=[];R.split(" ").forEach(function(X){C.push(parseFloat(X))});let z=new ee;return z.set(C[0],C[3],C[6],C[9],C[1],C[4],C[7],C[10],C[2],C[5],C[8],C[11],0,0,0,1),z}function E(R){let C={type:R.getAttribute("type")},z=R.getAttribute("id");z&&(C.id=z);let X=R.getAttribute("pid");X&&(C.pid=X);let q=R.getAttribute("pindex");q&&(C.pindex=q);let $=R.getAttribute("thumbnail");$&&(C.thumbnail=$);let rt=R.getAttribute("partnumber");rt&&(C.partnumber=rt);let b=R.getAttribute("name");b&&(C.name=b);let F=R.querySelector("mesh");F&&(C.mesh=v(F));let V=R.querySelector("components");return V&&(C.components=m(V)),C}function x(R){let C={};C.basematerials={};let z=R.querySelectorAll("basematerials");for(let V=0;V<z.length;V++){let Y=z[V],O=a(Y);C.basematerials[O.id]=O}C.texture2d={};let X=R.querySelectorAll("texture2d");for(let V=0;V<X.length;V++){let Y=X[V],O=c(Y);C.texture2d[O.id]=O}C.colorgroup={};let q=R.querySelectorAll("colorgroup");for(let V=0;V<q.length;V++){let Y=q[V],O=h(Y);C.colorgroup[O.id]=O}let $=R.querySelectorAll("implicitfunction");$.length>0&&(C.implicitfunction={});for(let V=0;V<$.length;V++){let Y=$[V],O=f(Y);C.implicitfunction[O.id]=O}C.pbmetallicdisplayproperties={};let rt=R.querySelectorAll("pbmetallicdisplayproperties");for(let V=0;V<rt.length;V++){let Y=rt[V],O=d(Y);C.pbmetallicdisplayproperties[O.id]=O}C.texture2dgroup={};let b=R.querySelectorAll("texture2dgroup");for(let V=0;V<b.length;V++){let Y=b[V],O=l(Y);C.texture2dgroup[O.id]=O}C.object={};let F=R.querySelectorAll("object");for(let V=0;V<F.length;V++){let Y=F[V],O=E(Y);C.object[O.id]=O}return C}function P(R){let C=[],z=R.querySelectorAll("item");for(let X=0;X<z.length;X++){let q=z[X],$={objectId:q.getAttribute("objectid")},rt=q.getAttribute("transform");rt&&($.transform=A(rt)),C.push($)}return C}function T(R){let C={unit:R.getAttribute("unit")||"millimeter"},z=R.querySelectorAll("metadata");z&&(C.metadata=o(z));let X=R.querySelector("resources");X&&(C.resources=x(X));let q=R.querySelector("build");return q&&(C.build=P(q)),C}function D(R,C,z,X){let q=R.texid,rt=z.resources.texture2d[q];if(rt){let b=X[rt.path],F=rt.contenttype,V=new Blob([b],{type:F}),Y=URL.createObjectURL(V),O=n.load(Y,function(){URL.revokeObjectURL(Y)});switch(O.colorSpace=fh,rt.tilestyleu){case"wrap":O.wrapS=ai;break;case"mirror":O.wrapS=Ki;break;case"none":case"clamp":O.wrapS=In;break;default:O.wrapS=ai}switch(rt.tilestylev){case"wrap":O.wrapT=ai;break;case"mirror":O.wrapT=Ki;break;case"none":case"clamp":O.wrapT=In;break;default:O.wrapT=ai}switch(rt.filter){case"auto":O.magFilter=Ge,O.minFilter=Ln;break;case"linear":O.magFilter=Ge,O.minFilter=Ge,O.generateMipmaps=!1;break;case"nearest":O.magFilter=$e,O.minFilter=$e,O.generateMipmaps=!1;break;default:O.magFilter=Ge,O.minFilter=Ln}return O}else return null}function U(R,C,z,X,q,$,rt){let b=rt.pindex,F={};for(let O=0,ht=C.length;O<ht;O++){let st=C[O],ct=st.p1!==void 0?st.p1:b;F[ct]===void 0&&(F[ct]=[]),F[ct].push(st)}let V=Object.keys(F),Y=[];for(let O=0,ht=V.length;O<ht;O++){let st=V[O],ct=F[st],Dt=R.basematerials[st],yt=it(Dt,X,q,$,rt,Z),w=new oe,_=[],k=z.vertices;for(let ot=0,nt=ct.length;ot<nt;ot++){let bt=ct[ot];_.push(k[bt.v1*3+0]),_.push(k[bt.v1*3+1]),_.push(k[bt.v1*3+2]),_.push(k[bt.v2*3+0]),_.push(k[bt.v2*3+1]),_.push(k[bt.v2*3+2]),_.push(k[bt.v3*3+0]),_.push(k[bt.v3*3+1]),_.push(k[bt.v3*3+2])}w.setAttribute("position",new Yt(_,3));let et=new ue(w,yt);Y.push(et)}return Y}function y(R,C,z,X,q,$,rt){let b=new oe,F=[],V=[],Y=z.vertices,O=R.uvs;for(let Dt=0,yt=C.length;Dt<yt;Dt++){let w=C[Dt];F.push(Y[w.v1*3+0]),F.push(Y[w.v1*3+1]),F.push(Y[w.v1*3+2]),F.push(Y[w.v2*3+0]),F.push(Y[w.v2*3+1]),F.push(Y[w.v2*3+2]),F.push(Y[w.v3*3+0]),F.push(Y[w.v3*3+1]),F.push(Y[w.v3*3+2]),V.push(O[w.p1*2+0]),V.push(O[w.p1*2+1]),V.push(O[w.p2*2+0]),V.push(O[w.p2*2+1]),V.push(O[w.p3*2+0]),V.push(O[w.p3*2+1])}b.setAttribute("position",new Yt(F,3)),b.setAttribute("uv",new Yt(V,2));let ht=it(R,X,q,$,rt,D),st=new Xn({map:ht,flatShading:!0});return new ue(b,st)}function M(R,C,z,X){let q=new oe,$=[],rt=[],b=z.vertices,F=R.colors;for(let O=0,ht=C.length;O<ht;O++){let st=C[O],ct=st.v1,Dt=st.v2,yt=st.v3;$.push(b[ct*3+0]),$.push(b[ct*3+1]),$.push(b[ct*3+2]),$.push(b[Dt*3+0]),$.push(b[Dt*3+1]),$.push(b[Dt*3+2]),$.push(b[yt*3+0]),$.push(b[yt*3+1]),$.push(b[yt*3+2]);let w=st.p1!==void 0?st.p1:X.pindex,_=st.p2!==void 0?st.p2:w,k=st.p3!==void 0?st.p3:w;rt.push(F[w*3+0]),rt.push(F[w*3+1]),rt.push(F[w*3+2]),rt.push(F[_*3+0]),rt.push(F[_*3+1]),rt.push(F[_*3+2]),rt.push(F[k*3+0]),rt.push(F[k*3+1]),rt.push(F[k*3+2])}q.setAttribute("position",new Yt($,3)),q.setAttribute("color",new Yt(rt,3));let V=new Xn({vertexColors:!0,flatShading:!0});return new ue(q,V)}function I(R){let C=new oe;C.setIndex(new Ae(R.triangles,1)),C.setAttribute("position",new Ae(R.vertices,3));let z=new Xn({name:rn.DEFAULT_MATERIAL_NAME,color:16777215,flatShading:!0});return new ue(C,z)}function B(R,C,z,X,q,$){let rt=Object.keys(R),b=[];for(let F=0,V=rt.length;F<V;F++){let Y=rt[F],O=R[Y];switch(J(Y,X)){case"material":let st=X.resources.basematerials[Y],ct=U(st,O,C,z,X,q,$);for(let w=0,_=ct.length;w<_;w++)b.push(ct[w]);break;case"texture":let Dt=X.resources.texture2dgroup[Y];b.push(y(Dt,O,C,z,X,q,$));break;case"vertexColors":let yt=X.resources.colorgroup[Y];b.push(M(yt,O,C,$));break;case"default":b.push(I(C));break;default:console.error("THREE.3MFLoader: Unsupported resource type.")}}if($.name)for(let F=0;F<b.length;F++)b[F].name=$.name;return b}function J(R,C){return C.resources.texture2dgroup[R]!==void 0?"texture":C.resources.basematerials[R]!==void 0?"material":C.resources.colorgroup[R]!==void 0?"vertexColors":R==="default"?"default":void 0}function K(R,C){let z={},X=R.triangleProperties,q=C.pid;for(let $=0,rt=X.length;$<rt;$++){let b=X[$],F=b.pid!==void 0?b.pid:q;F===void 0&&(F="default"),z[F]===void 0&&(z[F]=[]),z[F].push(b)}return z}function j(R,C,z,X,q){let $=new Oe,rt=K(R,q),b=B(rt,R,C,z,X,q);for(let F=0,V=b.length;F<V;F++)$.add(b[F]);return $}function W(R,C,z){if(!R)return;let X=[],q=Object.keys(R);for(let $=0;$<q.length;$++){let rt=q[$];for(let b=0;b<e.availableExtensions.length;b++){let F=e.availableExtensions[b];F.ns===rt&&X.push(F)}}for(let $=0;$<X.length;$++){let rt=X[$];rt.apply(z,R[rt.ns],C)}}function it(R,C,z,X,q,$){return R.build!==void 0||(R.build=$(R,C,z,X,q)),R.build}function Z(R,C,z){let X,q=R.displaypropertiesid,$=z.resources.pbmetallicdisplayproperties;if(q!==null&&$[q]!==void 0){let V=$[q].data[R.index];X=new Pi({flatShading:!0,roughness:V.roughness,metalness:V.metallicness})}else X=new Xn({flatShading:!0});X.name=R.name;let rt=R.displaycolor,b=rt.substring(0,7);return X.color.setStyle(b,fh),rt.length===9&&(X.opacity=parseInt(rt.charAt(7)+rt.charAt(8),16)/255),X}function at(R,C,z,X){let q=new Oe;for(let $=0;$<R.length;$++){let rt=R[$],b=C[rt.objectId];b===void 0&&(_t(rt.objectId,C,z,X),b=C[rt.objectId]);let F=b.clone(),V=rt.transform;V&&F.applyMatrix4(V),q.add(F)}return q}function _t(R,C,z,X){let q=z.resources.object[R];if(q.mesh){let $=q.mesh,rt=z.extensions,b=z.xml;W(rt,$,b),C[q.id]=it($,C,z,X,q,j)}else{let $=q.components;C[q.id]=it($,C,z,X,q,at)}q.name&&(C[q.id].name=q.name),z.resources.implicitfunction&&console.warn("THREE.ThreeMFLoader: Implicit Functions are implemented in data-only.",z.resources.implicitfunction)}function xt(R){let C=R.model,z=R.modelRels,X={},q=Object.keys(C),$={};if(z)for(let rt=0,b=z.length;rt<b;rt++){let F=z[rt],V=F.target.substring(1);R.texture[V]&&($[F.target]=R.texture[V])}for(let rt=0;rt<q.length;rt++){let b=q[rt],F=C[b],V=Object.keys(F.resources.object);for(let Y=0;Y<V.length;Y++){let O=V[Y];_t(O,X,F,$)}}return X}function Ft(R){for(let C=0;C<R.length;C++){let z=R[C];if(z.target.split(".").pop().toLowerCase()==="model")return z}}function Nt(R,C){let z=new Oe,X=Ft(C.rels),q=C.model[X.target.substring(1)].build;for(let $=0;$<q.length;$++){let rt=q[$],b=R[rt.objectId].clone(),F=rt.transform;F&&b.applyMatrix4(F),z.add(b)}return z}let Ht=r(t),Ct=xt(Ht);return Nt(Ct,Ht)}addExtension(t){this.availableExtensions.push(t)}};var Me=Uint8Array,mn=Uint16Array,bh=Int32Array,wl=new Me([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),El=new Me([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),vh=new Me([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),fd=function(i,t){for(var e=new mn(31),n=0;n<31;++n)e[n]=t+=1<<i[n-1];for(var r=new bh(e[30]),n=1;n<30;++n)for(var s=e[n];s<e[n+1];++s)r[s]=s-e[n]<<5|n;return{b:e,r}},dd=fd(wl,2),pd=dd.b,_h=dd.r;pd[28]=258,_h[258]=28;var md=fd(El,0),yx=md.b,ad=md.r,xh=new mn(32768);for(ie=0;ie<32768;++ie)gi=(ie&43690)>>1|(ie&21845)<<1,gi=(gi&52428)>>2|(gi&13107)<<2,gi=(gi&61680)>>4|(gi&3855)<<4,xh[ie]=((gi&65280)>>8|(gi&255)<<8)>>1;var gi,ie,Kn=(function(i,t,e){for(var n=i.length,r=0,s=new mn(t);r<n;++r)i[r]&&++s[i[r]-1];var o=new mn(t);for(r=1;r<t;++r)o[r]=o[r-1]+s[r-1]<<1;var a;if(e){a=new mn(1<<t);var c=15-t;for(r=0;r<n;++r)if(i[r])for(var l=r<<4|i[r],h=t-i[r],u=o[i[r]-1]++<<h,f=u|(1<<h)-1;u<=f;++u)a[xh[u]>>c]=l}else for(a=new mn(n),r=0;r<n;++r)i[r]&&(a[r]=xh[o[i[r]-1]++]>>15-i[r]);return a}),Ni=new Me(288);for(ie=0;ie<144;++ie)Ni[ie]=8;var ie;for(ie=144;ie<256;++ie)Ni[ie]=9;var ie;for(ie=256;ie<280;++ie)Ni[ie]=7;var ie;for(ie=280;ie<288;++ie)Ni[ie]=8;var ie,so=new Me(32);for(ie=0;ie<32;++ie)so[ie]=5;var ie,Mx=Kn(Ni,9,0),Sx=Kn(Ni,9,1),bx=Kn(so,5,0),wx=Kn(so,5,1),dh=function(i){for(var t=i[0],e=1;e<i.length;++e)i[e]>t&&(t=i[e]);return t},On=function(i,t,e){var n=t/8|0;return(i[n]|i[n+1]<<8)>>(t&7)&e},ph=function(i,t){var e=t/8|0;return(i[e]|i[e+1]<<8|i[e+2]<<16)>>(t&7)},wh=function(i){return(i+7)/8|0},oo=function(i,t,e){return(t==null||t<0)&&(t=0),(e==null||e>i.length)&&(e=i.length),new Me(i.subarray(t,e))};var Ex=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],je=function(i,t,e){var n=new Error(t||Ex[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,je),!e)throw n;return n},Tx=function(i,t,e,n){var r=i.length,s=n?n.length:0;if(!r||t.f&&!t.l)return e||new Me(0);var o=!e,a=o||t.i!=2,c=t.i;o&&(e=new Me(r*3));var l=function($){var rt=e.length;if($>rt){var b=new Me(Math.max(rt*2,$));b.set(e),e=b}},h=t.f||0,u=t.p||0,f=t.b||0,d=t.l,g=t.d,v=t.m,m=t.n,p=r*8;do{if(!d){h=On(i,u,1);var A=On(i,u+1,3);if(u+=3,A)if(A==1)d=Sx,g=wx,v=9,m=5;else if(A==2){var T=On(i,u,31)+257,D=On(i,u+10,15)+4,U=T+On(i,u+5,31)+1;u+=14;for(var y=new Me(U),M=new Me(19),I=0;I<D;++I)M[vh[I]]=On(i,u+I*3,7);u+=D*3;for(var B=dh(M),J=(1<<B)-1,K=Kn(M,B,1),I=0;I<U;){var j=K[On(i,u,J)];u+=j&15;var E=j>>4;if(E<16)y[I++]=E;else{var W=0,it=0;for(E==16?(it=3+On(i,u,3),u+=2,W=y[I-1]):E==17?(it=3+On(i,u,7),u+=3):E==18&&(it=11+On(i,u,127),u+=7);it--;)y[I++]=W}}var Z=y.subarray(0,T),at=y.subarray(T);v=dh(Z),m=dh(at),d=Kn(Z,v,1),g=Kn(at,m,1)}else je(1);else{var E=wh(u)+4,x=i[E-4]|i[E-3]<<8,P=E+x;if(P>r){c&&je(0);break}a&&l(f+x),e.set(i.subarray(E,P),f),t.b=f+=x,t.p=u=P*8,t.f=h;continue}if(u>p){c&&je(0);break}}a&&l(f+131072);for(var _t=(1<<v)-1,xt=(1<<m)-1,Ft=u;;Ft=u){var W=d[ph(i,u)&_t],Nt=W>>4;if(u+=W&15,u>p){c&&je(0);break}if(W||je(2),Nt<256)e[f++]=Nt;else if(Nt==256){Ft=u,d=null;break}else{var Ht=Nt-254;if(Nt>264){var I=Nt-257,Ct=wl[I];Ht=On(i,u,(1<<Ct)-1)+pd[I],u+=Ct}var R=g[ph(i,u)&xt],C=R>>4;R||je(3),u+=R&15;var at=yx[C];if(C>3){var Ct=El[C];at+=ph(i,u)&(1<<Ct)-1,u+=Ct}if(u>p){c&&je(0);break}a&&l(f+131072);var z=f+Ht;if(f<at){var X=s-at,q=Math.min(at,z);for(X+f<0&&je(3);f<q;++f)e[f]=n[X+f]}for(;f<z;++f)e[f]=e[f-at]}}t.l=d,t.p=Ft,t.b=f,t.f=h,d&&(h=1,t.m=v,t.d=g,t.n=m)}while(!h);return f!=e.length&&o?oo(e,0,f):e.subarray(0,f)},vi=function(i,t,e){e<<=t&7;var n=t/8|0;i[n]|=e,i[n+1]|=e>>8},io=function(i,t,e){e<<=t&7;var n=t/8|0;i[n]|=e,i[n+1]|=e>>8,i[n+2]|=e>>16},mh=function(i,t){for(var e=[],n=0;n<i.length;++n)i[n]&&e.push({s:n,f:i[n]});var r=e.length,s=e.slice();if(!r)return{t:vd,l:0};if(r==1){var o=new Me(e[0].s+1);return o[e[0].s]=1,{t:o,l:1}}e.sort(function(P,T){return P.f-T.f}),e.push({s:-1,f:25001});var a=e[0],c=e[1],l=0,h=1,u=2;for(e[0]={s:-1,f:a.f+c.f,l:a,r:c};h!=r-1;)a=e[e[l].f<e[u].f?l++:u++],c=e[l!=h&&e[l].f<e[u].f?l++:u++],e[h++]={s:-1,f:a.f+c.f,l:a,r:c};for(var f=s[0].s,n=1;n<r;++n)s[n].s>f&&(f=s[n].s);var d=new mn(f+1),g=yh(e[h-1],d,0);if(g>t){var n=0,v=0,m=g-t,p=1<<m;for(s.sort(function(T,D){return d[D.s]-d[T.s]||T.f-D.f});n<r;++n){var A=s[n].s;if(d[A]>t)v+=p-(1<<g-d[A]),d[A]=t;else break}for(v>>=m;v>0;){var E=s[n].s;d[E]<t?v-=1<<t-d[E]++-1:++n}for(;n>=0&&v;--n){var x=s[n].s;d[x]==t&&(--d[x],++v)}g=t}return{t:new Me(d),l:g}},yh=function(i,t,e){return i.s==-1?Math.max(yh(i.l,t,e+1),yh(i.r,t,e+1)):t[i.s]=e},ld=function(i){for(var t=i.length;t&&!i[--t];);for(var e=new mn(++t),n=0,r=i[0],s=1,o=function(c){e[n++]=c},a=1;a<=t;++a)if(i[a]==r&&a!=t)++s;else{if(!r&&s>2){for(;s>138;s-=138)o(32754);s>2&&(o(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(o(r),--s;s>6;s-=6)o(8304);s>2&&(o(s-3<<5|8208),s=0)}for(;s--;)o(r);s=1,r=i[a]}return{c:e.subarray(0,n),n:t}},ro=function(i,t){for(var e=0,n=0;n<t.length;++n)e+=i[n]*t[n];return e},gd=function(i,t,e){var n=e.length,r=wh(t+2);i[r]=n&255,i[r+1]=n>>8,i[r+2]=i[r]^255,i[r+3]=i[r+1]^255;for(var s=0;s<n;++s)i[r+s+4]=e[s];return(r+4+n)*8},cd=function(i,t,e,n,r,s,o,a,c,l,h){vi(t,h++,e),++r[256];for(var u=mh(r,15),f=u.t,d=u.l,g=mh(s,15),v=g.t,m=g.l,p=ld(f),A=p.c,E=p.n,x=ld(v),P=x.c,T=x.n,D=new mn(19),U=0;U<A.length;++U)++D[A[U]&31];for(var U=0;U<P.length;++U)++D[P[U]&31];for(var y=mh(D,7),M=y.t,I=y.l,B=19;B>4&&!M[vh[B-1]];--B);var J=l+5<<3,K=ro(r,Ni)+ro(s,so)+o,j=ro(r,f)+ro(s,v)+o+14+3*B+ro(D,M)+2*D[16]+3*D[17]+7*D[18];if(c>=0&&J<=K&&J<=j)return gd(t,h,i.subarray(c,c+l));var W,it,Z,at;if(vi(t,h,1+(j<K)),h+=2,j<K){W=Kn(f,d,0),it=f,Z=Kn(v,m,0),at=v;var _t=Kn(M,I,0);vi(t,h,E-257),vi(t,h+5,T-1),vi(t,h+10,B-4),h+=14;for(var U=0;U<B;++U)vi(t,h+3*U,M[vh[U]]);h+=3*B;for(var xt=[A,P],Ft=0;Ft<2;++Ft)for(var Nt=xt[Ft],U=0;U<Nt.length;++U){var Ht=Nt[U]&31;vi(t,h,_t[Ht]),h+=M[Ht],Ht>15&&(vi(t,h,Nt[U]>>5&127),h+=Nt[U]>>12)}}else W=Mx,it=Ni,Z=bx,at=so;for(var U=0;U<a;++U){var Ct=n[U];if(Ct>255){var Ht=Ct>>18&31;io(t,h,W[Ht+257]),h+=it[Ht+257],Ht>7&&(vi(t,h,Ct>>23&31),h+=wl[Ht]);var R=Ct&31;io(t,h,Z[R]),h+=at[R],R>3&&(io(t,h,Ct>>5&8191),h+=El[R])}else io(t,h,W[Ct]),h+=it[Ct]}return io(t,h,W[256]),h+it[256]},Ax=new bh([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),vd=new Me(0),Cx=function(i,t,e,n,r,s){var o=s.z||i.length,a=new Me(n+o+5*(1+Math.ceil(o/7e3))+r),c=a.subarray(n,a.length-r),l=s.l,h=(s.r||0)&7;if(t){h&&(c[0]=s.r>>3);for(var u=Ax[t-1],f=u>>13,d=u&8191,g=(1<<e)-1,v=s.p||new mn(32768),m=s.h||new mn(g+1),p=Math.ceil(e/3),A=2*p,E=function(F){return(i[F]^i[F+1]<<p^i[F+2]<<A)&g},x=new bh(25e3),P=new mn(288),T=new mn(32),D=0,U=0,y=s.i||0,M=0,I=s.w||0,B=0;y+2<o;++y){var J=E(y),K=y&32767,j=m[J];if(v[K]=j,m[J]=K,I<=y){var W=o-y;if((D>7e3||M>24576)&&(W>423||!l)){h=cd(i,c,0,x,P,T,U,M,B,y-B,h),M=D=U=0,B=y;for(var it=0;it<286;++it)P[it]=0;for(var it=0;it<30;++it)T[it]=0}var Z=2,at=0,_t=d,xt=K-j&32767;if(W>2&&J==E(y-xt))for(var Ft=Math.min(f,W)-1,Nt=Math.min(32767,y),Ht=Math.min(258,W);xt<=Nt&&--_t&&K!=j;){if(i[y+Z]==i[y+Z-xt]){for(var Ct=0;Ct<Ht&&i[y+Ct]==i[y+Ct-xt];++Ct);if(Ct>Z){if(Z=Ct,at=xt,Ct>Ft)break;for(var R=Math.min(xt,Ct-2),C=0,it=0;it<R;++it){var z=y-xt+it&32767,X=v[z],q=z-X&32767;q>C&&(C=q,j=z)}}}K=j,j=v[K],xt+=K-j&32767}if(at){x[M++]=268435456|_h[Z]<<18|ad[at];var $=_h[Z]&31,rt=ad[at]&31;U+=wl[$]+El[rt],++P[257+$],++T[rt],I=y+Z,++D}else x[M++]=i[y],++P[i[y]]}}for(y=Math.max(y,I);y<o;++y)x[M++]=i[y],++P[i[y]];h=cd(i,c,l,x,P,T,U,M,B,y-B,h),l||(s.r=h&7|c[h/8|0]<<3,h-=7,s.h=m,s.p=v,s.i=y,s.w=I)}else{for(var y=s.w||0;y<o+l;y+=65535){var b=y+65535;b>=o&&(c[h/8|0]=l,b=o),h=gd(c,h+1,i.subarray(y,b))}s.i=o}return oo(a,0,n+wh(h)+r)},Rx=(function(){for(var i=new Int32Array(256),t=0;t<256;++t){for(var e=t,n=9;--n;)e=(e&1&&-306674912)^e>>>1;i[t]=e}return i})(),Ix=function(){var i=-1;return{p:function(t){for(var e=i,n=0;n<t.length;++n)e=Rx[e&255^t[n]]^e>>>8;i=e},d:function(){return~i}}};var Px=function(i,t,e,n,r){if(!r&&(r={l:1},t.dictionary)){var s=t.dictionary.subarray(-32768),o=new Me(s.length+i.length);o.set(s),o.set(i,s.length),i=o,r.w=s.length}return Cx(i,t.level==null?6:t.level,t.mem==null?r.l?Math.ceil(Math.max(8,Math.min(13,Math.log(i.length)))*1.5):20:12+t.mem,e,n,r)},_d=function(i,t){var e={};for(var n in i)e[n]=i[n];for(var n in t)e[n]=t[n];return e};var Jn=function(i,t){return i[t]|i[t+1]<<8},Bn=function(i,t){return(i[t]|i[t+1]<<8|i[t+2]<<16|i[t+3]<<24)>>>0},gh=function(i,t){return Bn(i,t)+Bn(i,t+4)*4294967296},Be=function(i,t,e){for(;e;++t)i[t]=e,e>>>=8};function Dx(i,t){return Px(i,t||{},0,0)}function Lx(i,t){return Tx(i,{i:2},t&&t.out,t&&t.dictionary)}var xd=function(i,t,e,n){for(var r in i){var s=i[r],o=t+r,a=n;Array.isArray(s)&&(a=_d(n,s[1]),s=s[0]),s instanceof Me?e[o]=[s,a]:(e[o+="/"]=[new Me(0),a],xd(s,o,e,n))}},hd=typeof TextEncoder<"u"&&new TextEncoder,Mh=typeof TextDecoder<"u"&&new TextDecoder,Ux=0;try{Mh.decode(vd,{stream:!0}),Ux=1}catch{}var Fx=function(i){for(var t="",e=0;;){var n=i[e++],r=(n>127)+(n>223)+(n>239);if(e+r>i.length)return{s:t,r:oo(i,e-1)};r?r==3?(n=((n&15)<<18|(i[e++]&63)<<12|(i[e++]&63)<<6|i[e++]&63)-65536,t+=String.fromCharCode(55296|n>>10,56320|n&1023)):r&1?t+=String.fromCharCode((n&31)<<6|i[e++]&63):t+=String.fromCharCode((n&15)<<12|(i[e++]&63)<<6|i[e++]&63):t+=String.fromCharCode(n)}};function _i(i,t){if(t){for(var e=new Me(i.length),n=0;n<i.length;++n)e[n]=i.charCodeAt(n);return e}if(hd)return hd.encode(i);for(var r=i.length,s=new Me(i.length+(i.length>>1)),o=0,a=function(h){s[o++]=h},n=0;n<r;++n){if(o+5>s.length){var c=new Me(o+8+(r-n<<1));c.set(s),s=c}var l=i.charCodeAt(n);l<128||t?a(l):l<2048?(a(192|l>>6),a(128|l&63)):l>55295&&l<57344?(l=65536+(l&1047552)|i.charCodeAt(++n)&1023,a(240|l>>18),a(128|l>>12&63),a(128|l>>6&63),a(128|l&63)):(a(224|l>>12),a(128|l>>6&63),a(128|l&63))}return oo(s,0,o)}function Eh(i,t){if(t){for(var e="",n=0;n<i.length;n+=16384)e+=String.fromCharCode.apply(null,i.subarray(n,n+16384));return e}else{if(Mh)return Mh.decode(i);var r=Fx(i),s=r.s,e=r.r;return e.length&&je(8),s}}var Nx=function(i,t){return t+30+Jn(i,t+26)+Jn(i,t+28)},Ox=function(i,t,e){var n=Jn(i,t+28),r=Eh(i.subarray(t+46,t+46+n),!(Jn(i,t+8)&2048)),s=t+46+n,o=Bn(i,t+20),a=e&&o==4294967295?Bx(i,s):[o,Bn(i,t+24),Bn(i,t+42)],c=a[0],l=a[1],h=a[2];return[Jn(i,t+10),c,l,r,s+Jn(i,t+30)+Jn(i,t+32),h]},Bx=function(i,t){for(;Jn(i,t)!=1;t+=4+Jn(i,t+2));return[gh(i,t+12),gh(i,t+4),gh(i,t+20)]},Sh=function(i){var t=0;if(i)for(var e in i){var n=i[e].length;n>65535&&je(9),t+=n+4}return t},ud=function(i,t,e,n,r,s,o,a){var c=n.length,l=e.extra,h=a&&a.length,u=Sh(l);Be(i,t,o!=null?33639248:67324752),t+=4,o!=null&&(i[t++]=20,i[t++]=e.os),i[t]=20,t+=2,i[t++]=e.flag<<1|(s<0&&8),i[t++]=r&&8,i[t++]=e.compression&255,i[t++]=e.compression>>8;var f=new Date(e.mtime==null?Date.now():e.mtime),d=f.getFullYear()-1980;if((d<0||d>119)&&je(10),Be(i,t,d<<25|f.getMonth()+1<<21|f.getDate()<<16|f.getHours()<<11|f.getMinutes()<<5|f.getSeconds()>>1),t+=4,s!=-1&&(Be(i,t,e.crc),Be(i,t+4,s<0?-s-2:s),Be(i,t+8,e.size)),Be(i,t+12,c),Be(i,t+14,u),t+=16,o!=null&&(Be(i,t,h),Be(i,t+6,e.attrs),Be(i,t+10,o),t+=14),i.set(n,t),t+=c,u)for(var g in l){var v=l[g],m=v.length;Be(i,t,+g),Be(i,t+2,m),i.set(v,t+4),t+=4+m}return h&&(i.set(a,t),t+=h),t},zx=function(i,t,e,n,r){Be(i,t,101010256),Be(i,t+8,e),Be(i,t+10,e),Be(i,t+12,n),Be(i,t+16,r)};function Th(i,t){t||(t={});var e={},n=[];xd(i,"",e,t);var r=0,s=0;for(var o in e){var a=e[o],c=a[0],l=a[1],h=l.level==0?0:8,u=_i(o),f=u.length,d=l.comment,g=d&&_i(d),v=g&&g.length,m=Sh(l.extra);f>65535&&je(11);var p=h?Dx(c,l):c,A=p.length,E=Ix();E.p(c),n.push(_d(l,{size:c.length,crc:E.d(),c:p,f:u,m:g,u:f!=o.length||g&&d.length!=v,o:r,compression:h})),r+=30+f+m+A,s+=76+2*(f+m)+(v||0)+A}for(var x=new Me(s+22),P=r,T=s-r,D=0;D<n.length;++D){var u=n[D];ud(x,u.o,u,u.f,u.u,u.c.length);var U=30+u.f.length+Sh(u.extra);x.set(u.c,u.o+U),ud(x,r,u,u.f,u.u,u.c.length,u.o,u.m),r+=16+U+(u.m?u.m.length:0)}return zx(x,r,n.length,T,P),x}function yd(i,t){for(var e={},n=i.length-22;Bn(i,n)!=101010256;--n)(!n||i.length-n>65558)&&je(13);var r=Jn(i,n+8);if(!r)return{};var s=Bn(i,n+16),o=s==4294967295||r==65535;if(o){var a=Bn(i,n-12);o=Bn(i,a)==101075792,o&&(r=Bn(i,a+32),s=Bn(i,a+48))}for(var c=t&&t.filter,l=0;l<r;++l){var h=Ox(i,s,o),u=h[0],f=h[1],d=h[2],g=h[3],v=h[4],m=h[5],p=Nx(i,m);s=v,(!c||c({name:g,size:f,originalSize:d,compression:u}))&&(u?u==8?e[g]=Lx(i.subarray(p,p+f),{out:new Me(d)}):je(14,"unknown compression type "+u):e[g]=oo(i,p,p+f))}return e}var _b=Object.freeze([0,.02,.04,.08,.16,.32,.64,1.28,2.56,5.12,10.24,20.48,40.96,81.92,163.84,250]);var Hx=i=>String(i).replace(/[<>&"']/g,t=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;","'":"&apos;"})[t]),ao=i=>Number(i.toFixed(6));function Md(i){let t=[...new Set(i.flatMap(o=>[o.color,...o.vertexColors||[]]))],e=new Map(t.map((o,a)=>[o,a])),n=i.map((o,a)=>`<object id="${a+3}" type="model" name="${Hx(o.name)}" pid="1" pindex="${e.get(o.color)}"><mesh><vertices>${o.vertices.map(c=>`<vertex x="${ao(c[0])}" y="${ao(c[1])}" z="${ao(c[2])}"/>`).join("")}</vertices><triangles>${o.triangles.map(c=>`<triangle v1="${c[0]}" v2="${c[1]}" v3="${c[2]}" pid="2" p1="${e.get(o.vertexColors?.[c[0]]||o.color)}" p2="${e.get(o.vertexColors?.[c[1]]||o.color)}" p3="${e.get(o.vertexColors?.[c[2]]||o.color)}"/>`).join("")}</triangles></mesh></object>`).join(""),r=i.length+3,s=`<?xml version="1.0" encoding="UTF-8"?><model unit="millimeter" xml:lang="tr-TR" xmlns="http://schemas.microsoft.com/3dmanufacturing/core/2015/02" xmlns:m="http://schemas.microsoft.com/3dmanufacturing/material/2015/02"><metadata name="Application">Katman</metadata><resources><basematerials id="1">${t.map((o,a)=>`<base name="Renk ${a+1} ${o}" displaycolor="${o}FF"/>`).join("")}</basematerials><m:colorgroup id="2">${t.map(o=>`<m:color color="${o}FF"/>`).join("")}</m:colorgroup>${n}<object id="${r}" type="model" name="Katman model"><components>${i.map((o,a)=>`<component objectid="${a+3}"/>`).join("")}</components></object></resources><build><item objectid="${r}"/></build></model>`;return Th({"[Content_Types].xml":_i('<?xml version="1.0" encoding="UTF-8"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="model" ContentType="application/vnd.ms-package.3dmanufacturing-3dmodel+xml"/></Types>'),"_rels/.rels":_i('<?xml version="1.0" encoding="UTF-8"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Target="/3D/3dmodel.model" Id="rel0" Type="http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel"/></Relationships>'),"3D/3dmodel.model":_i(s)},{level:6})}function Sd(i){let t=i.reduce((s,o)=>s+o.triangles.length,0),e=new ArrayBuffer(84+t*50),n=new DataView(e);new Uint8Array(e).set(_i("Katman | millimeters | binary STL")),n.setUint32(80,t,!0);let r=84;for(let s of i)for(let o of s.triangles){let[a,c,l]=o.map(g=>s.vertices[g]),h=c.map((g,v)=>g-a[v]),u=l.map((g,v)=>g-a[v]),f=[h[1]*u[2]-h[2]*u[1],h[2]*u[0]-h[0]*u[2],h[0]*u[1]-h[1]*u[0]],d=Math.hypot(...f)||1;for(let g of[...f.map(v=>v/d),...a,...c,...l])n.setFloat32(r,g,!0),r+=4;r+=2}return new Uint8Array(e)}function bd(i){let t=`# Katman \u2014 units: millimeters
mtllib model.mtl
`,e=1,n="";return i.forEach((r,s)=>{t+=`o part_${s}
usemtl color_${s}
`,t+=r.vertices.map((a,c)=>`v ${a.map(ao).join(" ")}${r.vertexColors?.[c]?" "+r.vertexColors[c].match(/\w\w/g).map(l=>ao(parseInt(l,16)/255)).join(" "):""}
`).join(""),t+=r.triangles.map(a=>`f ${a.map(c=>c+e).join(" ")}
`).join(""),e+=r.vertices.length;let o=r.vertexColors?[1,1,1]:r.color.match(/\w\w/g).map(a=>parseInt(a,16)/255);n+=`newmtl color_${s}
Kd ${o.join(" ")}
d 1

`}),Th({"model.obj":_i(t),"model.mtl":_i(n)})}var ft=i=>document.getElementById(i),Bi=ft("model-viewport"),de=[],Se=new Set,Bt=null,Ue=[],ur=[],co=[],wd="duzenlenen-model",Qe="orbit",re=!1,xi,gn,fr=null,Ah=1,ge=[],zn=null,zi=new bs,Le=new He(38,1,.01,1e5),Xe=Gx();function Gx(){try{return new gl({antialias:!0,alpha:!0,logarithmicDepthBuffer:!0})}catch(i){throw ft("model-status").textContent="3D g\xF6r\xFCn\xFCm\xFC ba\u015Flat\u0131lamad\u0131. Donan\u0131m h\u0131zland\u0131rmas\u0131n\u0131 ve ekran kart\u0131 s\xFCr\xFCc\xFCs\xFCn\xFC kontrol edin.",i}}Le.up.set(0,0,1);Xe.setPixelRatio(Math.min(devicePixelRatio,2));Xe.localClippingEnabled=!0;Xe.toneMapping=Aa;Xe.toneMappingExposure=.85;Xe.setClearColor(0,0);Bi.append(Xe.domElement);var we=new xl(Le,Xe.domElement);we.enableDamping=!0;we.minDistance=.05;we.maxDistance=1e5;var dr=new Oe,pr=new Oe;zi.add(dr,pr,new Vs(16777215,1.8));var Ed=new Gr(16777215,2.4);Ed.position.set(60,-80,150);zi.add(Ed);var Td=new Gr(11980543,1);Td.position.set(-60,80,-50);zi.add(Td);var Oi,vn=new Wn(new L(-10,-10,-10),new L(10,10,10)),lo=new Ze,ts;function Ee(i){ft("model-status").textContent=i}function Tl(i,t="busy"){let e=ft("operation-feedback");e.hidden=!1,e.dataset.state=t,e.textContent=i}function ns(i){console.error(i);let t=i.message||String(i);Ee(t),Tl(t,"error")}function Ad(i){for(let t of[...i.children])i.remove(t),t.geometry?.dispose(),Array.isArray(t.material)?t.material.forEach(e=>e.dispose()):t.material?.dispose()}var Ch=i=>"#"+new Vt(...i||[.48,.63,.85]).getHexString();function Wx(i){return{...i,color:i.color||Ch(i.colors?.[0]),vertexColors:i.colors?.map(Ch)}}function Ce(){let i=de.length>0,t=Se.size>0,e=Bt&&de[Bt.part],n=e&&Ue.length>0&&!ge.length;for(let o of["model-open","model-file"])ft(o).disabled=re;for(let o of["erase-local","fill-local"])ft(o).disabled=re||!n||Bt.viewPlane;ft("cut-local").disabled=re||!n;let r=ft("fill-target").value==="surface";ft("fill-apply").disabled=re||!n||r&&Bt.viewPlane,ft("tool-fill-reference").disabled=re||!i||ge.length>0;for(let o of["fill-target","fill-offset","fill-z","fill-bottom","fill-thickness","fill-preview"])ft(o).disabled=re;ft("fill-offset-wrap").hidden=!r,ft("fill-z-wrap").hidden=r,ft("fill-thickness-wrap").hidden=ft("fill-bottom").value!=="thickness",ft("fill-reference-info").textContent=e&&!Bt.viewPlane?"Dolgu d\xFCzlemi haz\u0131r \xB7 mevcut y\xFCzey referans al\u0131nd\u0131.":"Y\xFCzeyden d\xFCzlem al\u0131n; mevcut alan se\xE7iminiz korunur.",ft("fill-help").textContent=n?r&&Bt.viewPlane?"Dolgu d\xFCzlemini y\xFCzeyden al d\xFC\u011Fmesine bas\u0131p ayn\u0131 seviyede olmas\u0131n\u0131 istedi\u011Finiz y\xFCzeye t\u0131klay\u0131n.":"Haz\u0131r. Yaln\u0131zca se\xE7ili alan\u0131n i\xE7ine malzeme eklenir. \xD6nizleyebilir veya dolguyu uygulayabilirsiniz.":"Noktalarla dolgu alan\u0131n\u0131 \xE7izip se\xE7imi kapat\u0131n.",ft("delete-parts").disabled=re||!t,ft("split-parts").disabled=re||Se.size!==1;for(let o of["tool-reference","tool-pan","tool-box","tool-polygon","tool-circle","model-ground","model-fit","view-front","view-top-model","mesh-export"])ft(o).disabled=re||!i;for(let o of["reference-view","reference-flip"])ft(o).disabled=re||!e;ft("areas-clear").disabled=re;for(let o of["brush-diameter","edit-depth","edit-offset"])ft(o).disabled=re;ft("cancel-operation").hidden=!re,ft("mesh-undo").disabled=re||!ur.length,ft("mesh-redo").disabled=re||!co.length,ft("polygon-finish").disabled=re||ge.length<3,ft("polygon-back").disabled=re||!ge.length,ft("area-count").textContent=ge.length?`${ge.length} nokta \xB7 se\xE7imi kapat\u0131n`:Ue.length?`${Ue.length} yerel alan se\xE7ildi`:"Alan se\xE7ilmedi",ft("model-stats").textContent=i?`${de.length} par\xE7a \xB7 ${de.reduce((o,a)=>o+a.triangles.length,0).toLocaleString("tr-TR")} \xFC\xE7gen`:"Hen\xFCz model yok",ft("model-empty").hidden=i;let s=ft("model-parts");s.replaceChildren(),de.forEach((o,a)=>{let c=document.createElement("button");c.className="part"+(Se.has(a)?" active":"");let l=document.createElement("i");l.style.background=Ch(o.colors?.[0]);let h=document.createElement("span");h.textContent=o.name||`Par\xE7a ${a+1}`,c.append(l,h),c.title=`${o.triangles.length} \xFC\xE7gen`,c.onclick=u=>{re||(u.ctrlKey||u.metaKey?Se.has(a)?Se.delete(a):Se.add(a):Se=new Set([a]),Bt&&Bt.part!==a&&ki(),uo(),Ce())},s.append(c)})}function uo(){dr.children.forEach(i=>{i.material.emissive.set(Se.has(i.userData.part)?1980768:0),i.material.emissiveIntensity=.24})}function fo(i=!1){if(Ad(dr),de.forEach((t,e)=>{let n=new oe;n.setAttribute("position",new Yt(t.vertices.flat(),3)),n.setIndex(t.triangles.flat()),n.setAttribute("color",new Yt((t.colors||t.vertices.map(()=>[.48,.63,.85])).flat(),3)),n.computeVertexNormals();let r=new Pi({vertexColors:!0,roughness:.82,metalness:0,flatShading:!0,side:Ke}),s=new ue(n,r);s.userData.part=e,dr.add(s)}),de.length){vn.setFromObject(dr);let t=vn.getSize(new L).length(),e=vn.getCenter(new L);Oi&&(zi.remove(Oi),Oi.geometry.dispose(),Oi.material.dispose()),Oi=new Gs(Math.max(1,t*1.5),30,5137285,2833236),Oi.rotation.x=Math.PI/2,Oi.position.set(e.x,e.y,vn.min.z-Math.max(.02,t*2e-4)),zi.add(Oi)}Ih(),uo(),Ce(),ze(),i&&is()}function is(i=new L(.9,-1.2,.9),t=vn.getCenter(new L)){let e=we.enableDamping;we.enableDamping=!1,we.update();let n=Math.max(.1,vn.getSize(new L).length()/2),r=Math.min(Le.fov*Math.PI/360,Math.atan(Math.tan(Le.fov*Math.PI/360)*Le.aspect)),s=n/Math.sin(r)*1.15;we.target.copy(t),Le.position.copy(t).addScaledVector(i.clone().normalize(),s),Le.far=Math.max(1e4,s*8),Le.updateProjectionMatrix(),we.update(),Le.updateMatrixWorld(!0),we.enableDamping=e}function Ih(){let i=ft("section-axis").value,t=Number(ft("section-position").value)/100,e=vn.min[i]+(vn.max[i]-vn.min[i])*t;lo.normal.set(0,0,0),lo.normal[i]=-Ah,lo.constant=e*Ah;for(let n of dr.children)n.material.clippingPlanes=ft("section-enabled").checked?[lo]:[],n.material.needsUpdate=!0}function Cd(){return{parts:de,selected:[...Se],view:{position:Le.position.toArray(),target:we.target.toArray()}}}function Ph(){ur.push(Cd()),ur.length>12&&ur.shift(),co=[]}function ki(){Bt=null,Ue=[],ge=[],zn=null,ft("reference-info").textContent="Referans y\xFCzey se\xE7ilmedi.",ze()}function Vi(i){Qe!==i&&(ge=[],zn=null),Qe=i,we.enabled=!0,we.mouseButtons.MIDDLE=dn.PAN,we.mouseButtons.RIGHT=dn.ROTATE,we.mouseButtons.LEFT=i==="pan"?dn.PAN:["orbit","reference","fill-reference"].includes(i)?dn.ROTATE:null;for(let t of["orbit","pan","reference","fill-reference","polygon","box","circle"])ft("tool-"+t).classList.toggle("active",t===i);Xe.domElement.style.cursor=["orbit","pan"].includes(i)?"grab":"crosshair",ze(),Ce()}function Rd(i){Le.updateMatrixWorld(!0);let t=Xe.domElement.getBoundingClientRect(),e=new Hs;return e.setFromCamera(new ut((i.clientX-t.left)/t.width*2-1,-(i.clientY-t.top)/t.height*2+1),Le),e}function Id(i){return Rd(i).intersectObjects(dr.children).find(t=>!ft("section-enabled").checked||lo.distanceToPoint(t.point)>=-1e-5)}function es(i){return Bt?Rd(i).ray.intersectPlane(new Ze().setFromNormalAndCoplanarPoint(Bt.n,Bt.origin),new L):null}function ho(i,t,e,n){return{center:i.toArray(),width:t,height:e,shape:n,u:Bt.u.toArray(),v:Bt.v.toArray(),n:Bt.n.toArray()}}function Xx(){if(ft("fill-target").value==="height"){let i=Number(ft("fill-z").value);if(!Number.isFinite(i)||ft("fill-z").value==="")throw new Error("Dolgu \xFCst y\xFCzeyi i\xE7in ge\xE7erli bir Z y\xFCksekli\u011Fi girin.");return{origin:[0,0,i],u:[1,0,0],v:[0,1,0],n:[0,0,1]}}if(!Bt||Bt.viewPlane)throw new Error("\xD6nce dolgu d\xFCzlemini y\xFCzeyden al\u0131n veya Z y\xFCksekli\u011Fi se\xE7in.");return Object.fromEntries(["origin","u","v","n"].map(i=>[i,Bt[i].toArray()]))}function Pd(){if(!Bt||!Ue.length||ge.length)throw new Error("\xD6nce noktalarla bir alan \xE7izip se\xE7imi kapat\u0131n.");return Xf(de[Bt.part],Ue,Xx(),{offset:ft("fill-target").value==="surface"?Number(ft("fill-offset").value):0,thickness:ft("fill-bottom").value==="thickness"?Number(ft("fill-thickness").value):null})}function qx(i){try{let t=i.face.normal.clone().normalize(),e=new L().crossVectors(Math.abs(t.z)<.9?new L(0,0,1):new L(0,1,0),t).normalize(),n=new L().crossVectors(t,e).normalize(),r={origin:i.point.toArray(),n:t.toArray(),u:e.toArray(),v:n.toArray()},s=nh(Ue,r),o=Bt?.part??i.object.userData.part;Bt={part:o,origin:i.point.clone(),n:t,u:e,v:n,viewPlane:!1},Ue=s,Se=new Set([o]),ft("reference-info").textContent="Dolgu referans\u0131 haz\u0131r \xB7 alan se\xE7imi korundu.",ft("fill-target").value="surface",ft("fill-offset").value="0",ft("fill-preview").checked=!0,ft("operation-feedback").hidden=!0,Vi("polygon"),uo(),Ee("Dolgu d\xFCzlemi al\u0131nd\u0131. Alan\u0131 doldurdu\u011Funuzda \xFCst y\xFCzeyi bu d\xFCzlemle ayn\u0131 olacak.")}catch(t){ns(t)}}function Yx(i){for(let t of i){let e=new Ii(t.points.map(l=>new ut(...l))),n=new Us(e,{depth:t.depth,bevelEnabled:!1,steps:1}),r=new ue(n,new ci({color:6023103,transparent:!0,opacity:.22,depthWrite:!1,depthTest:!1,side:Ke})),s=new L(...t.u),o=new L(...t.v),a=new L(...t.n);r.quaternion.setFromRotationMatrix(new ee().makeBasis(s,o,a)),r.position.fromArray(t.center).addScaledVector(a,t.offset-t.depth),r.renderOrder=9,pr.add(r);let c=t.points.map(l=>new L(...t.center).addScaledVector(s,l[0]).addScaledVector(o,l[1]).addScaledVector(a,t.offset));Lh(c,!0)}}ft("fill-apply").onclick=()=>{try{po("fill",Pd())}catch(i){ns(i)}};for(let i of["fill-target","fill-offset","fill-z","fill-bottom","fill-thickness","fill-preview"])ft(i).oninput=()=>{Ce(),ze()};function Dh(){if(!(re||ge.length<3))try{let i=Qs(ge.map(o=>{let a=o.clone().sub(Bt.origin);return[a.dot(Bt.u),a.dot(Bt.v)]})),t=i.map(o=>o[0]),e=i.map(o=>o[1]),n=(Math.min(...t)+Math.max(...t))/2,r=(Math.min(...e)+Math.max(...e))/2,s=Bt.origin.clone().addScaledVector(Bt.u,n).addScaledVector(Bt.v,r);ft("operation-feedback").hidden=!0,Ue.push({...ho(s,Math.max(...t)-Math.min(...t),Math.max(...e)-Math.min(...e),"polygon"),points:i.map(o=>[o[0]-n,o[1]-r])}),ge=[],zn=null,ze(),Ce(),Ee("Taral\u0131 alan haz\u0131r. Sa\u011Fdaki alan doldur ile malzeme ekleyebilir veya soldaki ara\xE7larla kesebilirsiniz.")}catch(i){ns(i)}}function Dd(i){let t=new Ii(i.points.map(l=>new ut(...l))),e=new Ns(t),n=new hn({transparent:!0,depthTest:!1,depthWrite:!1,side:Ke,vertexShader:"void main(){gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"void main(){float stripe=step(mod(gl_FragCoord.x+gl_FragCoord.y,12.),2.);gl_FragColor=vec4(1.,.65,.25,mix(.13,.65,stripe));}"}),r=new ue(e,n),s=new L(...i.u),o=new L(...i.v),a=new L(...i.n);r.quaternion.setFromRotationMatrix(new ee().makeBasis(s,o,a)),r.position.fromArray(i.center),r.renderOrder=10,pr.add(r);let c=i.points.map(l=>new L(...i.center).addScaledVector(s,l[0]).addScaledVector(o,l[1]));Lh(c,!0)}function Lh(i,t=!1){if(i.length>1){let n=new Qi(new oe().setFromPoints(t?[...i,i[0]]:i),new bn({color:16762744,depthTest:!1,transparent:!0}));n.renderOrder=12,pr.add(n)}let e=new hi(new oe().setFromPoints(i),new Dn({color:16769960,size:8,sizeAttenuation:!1,depthTest:!1}));e.renderOrder=13,pr.add(e)}function Zx(){if(Lh([...ge,...zn?[zn]:[]]),ge.length>=3)try{let i=Qs(ge.map(t=>{let e=t.clone().sub(Bt.origin);return[e.dot(Bt.u),e.dot(Bt.v)]}));Dd({...ho(Bt.origin,1,1,"polygon"),points:i})}catch{}}ft("polygon-finish").onclick=Dh;ft("polygon-back").onclick=()=>{ge.pop(),zn=null,ze(),Ce()};function ze(i){if(Ad(pr),ts&&(zi.remove(ts),ts.dispose(),ts=null),!Bt)return;let t=Math.max(.5,vn.getSize(new L).length()*.06);ts=new Ws(Bt.n,Bt.origin,t,9683967,t*.3,t*.12),zi.add(ts);let e=Math.max(.01,Number(ft("edit-depth").value)||2),n=Number(ft("edit-offset").value)||0;for(let r of[...Ue,...i?[i]:[]]){if(r.shape==="polygon"){Dd(r);continue}let s=r.shape==="circle"?new kr(r.width/2,r.width/2,e,64).rotateX(Math.PI/2):new Ri(r.width,r.height,e),o=new ue(s,new ci({color:16753754,transparent:!0,opacity:.24,depthWrite:!1,depthTest:!1,side:Ke}));o.renderOrder=10;let a=new L(...r.u),c=new L(...r.v),l=new L(...r.n);o.quaternion.setFromRotationMatrix(new ee().makeBasis(a,c,l)),o.position.fromArray(r.center).addScaledVector(l,n+e/2),pr.add(o)}if(ge.length&&Zx(),ft("fill-preview").checked&&Ue.length&&!ge.length)try{Yx(Pd())}catch{}}function Rh(i,t=!1){let e=i.object.userData.part,n=i.face.normal.clone().normalize(),r=new L().crossVectors(Math.abs(n.z)<.9?new L(0,0,1):new L(0,1,0),n).normalize(),s=new L().crossVectors(n,r).normalize();Bt={part:e,origin:i.point.clone(),n,u:r,v:s,viewPlane:t},Se=new Set([e]),Ue=[],ft("reference-info").textContent=(t?"G\xF6r\xFCn\xFCm d\xFCzlemi \xB7 tam kesime haz\u0131r":"Referans haz\u0131r")+" \xB7 "+(de[e].name||`Par\xE7a ${e+1}`),uo(),Ce(),ze()}Xe.domElement.addEventListener("pointerdown",i=>{if(i.button!==0||re)return;let t=!1;if(["polygon","box","circle"].includes(Qe)&&!Bt){let n=Id(i);if(n&&Qe!=="polygon")Rh(n);else{if(!de.length)return;let r=n?.object.userData.part??[...Se].find(s=>de[s])??0;Rh({object:{userData:{part:r}},face:{normal:Le.getWorldDirection(new L).negate()},point:n?.point||vn.getCenter(new L)},!0)}t=!0}let e=Qe==="box"?es(i):null;fr={x:i.clientX,y:i.clientY,point:e,initialReference:t},["orbit","pan","reference","fill-reference"].includes(Qe)||Xe.domElement.setPointerCapture(i.pointerId)});Xe.domElement.addEventListener("pointermove",i=>{if(Qe==="polygon"&&Bt&&(zn=es(i),ze()),Qe==="box"&&fr?.point&&Bt){let t=es(i);if(t){let e=t.clone().sub(fr.point);ze(ho(t.clone().add(fr.point).multiplyScalar(.5),Math.abs(e.dot(Bt.u)),Math.abs(e.dot(Bt.v)),"box"))}}});Xe.domElement.addEventListener("pointerup",i=>{if(!fr||re)return;let t=fr;if(fr=null,i.button!==0)return;if(Qe==="polygon"){if(Math.hypot(i.clientX-t.x,i.clientY-t.y)>5)return;let r=es(i);if(!r)return;if(ge.length>=3){let s=ge[0].clone().project(Le),o=Xe.domElement.getBoundingClientRect();if(Math.hypot(i.clientX-(o.left+(s.x+1)*o.width/2),i.clientY-(o.top+(1-s.y)*o.height/2))<12){Dh();return}}ge.push(r),zn=null,ze(),Ce(),Ee("Noktalar\u0131 t\u0131klayarak s\u0131n\u0131r\u0131 \xE7izin. \u0130lk noktaya t\u0131klay\u0131n veya Enter ile se\xE7imi kapat\u0131n.");return}if(Qe==="box"&&t.point){let r=es(i);if(!r)return;let s=r.clone().sub(t.point),o=Math.abs(s.dot(Bt.u)),a=Math.abs(s.dot(Bt.v));o>.01&&a>.01&&(Ue.push(ho(r.clone().add(t.point).multiplyScalar(.5),o,a,"box")),ze(),Ce(),Ee(Bt.viewPlane?"Alan se\xE7ildi. \u201CSe\xE7ili alan\u0131 tamamen kes\u201D ile kald\u0131rabilirsiniz. D\xFCzleme i\xE7in temiz y\xFCzeyden referans al\u0131n.":"Alan se\xE7ildi. D\xFCzleme, doldurma veya tamamen kesme i\u015Flemini uygulay\u0131n."));return}if(Math.hypot(i.clientX-t.x,i.clientY-t.y)>5)return;if(Qe==="circle"&&Bt){if(t.initialReference){Ee(Bt.viewPlane?"G\xF6r\xFCn\xFCm d\xFCzlemi haz\u0131r. Kesilecek alan\u0131n \xFCzerine t\u0131klayarak daire alanlar\u0131 ekleyin.":"Temiz y\xFCzey referans al\u0131nd\u0131. \u015Eimdi kald\u0131r\u0131lacak yaz\u0131n\u0131n \xFCzerine t\u0131klayarak daire alanlar\u0131 ekleyin.");return}let r=es(i),s=Number(ft("brush-diameter").value);r&&s>0&&(Ue.push(ho(r,s,s,"circle")),ze(),Ce());return}let e=Id(i);if(!e)return;let n=e.object.userData.part;if(Qe==="fill-reference"){qx(e);return}Qe==="reference"?(Rh(e),Vi("polygon"),Ee("Yaz\u0131n\u0131n etraf\u0131na noktalar yerle\u015Ftirin. Gerekirse \xF6nce \u201CY\xFCzeye bak\u201D d\xFC\u011Fmesini kullan\u0131n.")):(i.ctrlKey||i.metaKey?Se.has(n)?Se.delete(n):Se.add(n):Se=new Set([n]),Bt&&Bt.part!==n&&ki()),uo(),Ce()});function $x(i,t,e=1){let n=[],r=[],s=[];for(let o of i){let a=o.geometry,c=a.getAttribute("position"),l=a.getAttribute("color"),h=a.index,u=n.length,f=Array.isArray(o.material)?o.material[0]:o.material,d=f?.color||new Vt(.48,.63,.85),g=new L;for(let p=0;p<c.count;p++)g.fromBufferAttribute(c,p).applyMatrix4(o.matrixWorld).multiplyScalar(e),n.push(g.toArray()),r.push(l?[l.getX(p)*d.r,l.getY(p)*d.g,l.getZ(p)*d.b]:d.toArray());let v=h?h.count:c.count,m=o.matrixWorld.determinant()<0?[2,1,0]:[0,1,2];for(let p=0;p<v;p+=3)s.push(m.map(A=>u+(h?h.getX(p+A):p+A)))}return{name:t,vertices:n,colors:r,triangles:s}}async function Ld(i){if(!(!i||re)){re=!0,Ce();try{if(i.size>100*1024*1024)throw new Error("Model en fazla 100 MB olabilir.");Ee("Model okunuyor\u2026");let t=i.name.split(".").at(-1).toLowerCase(),e=await i.arrayBuffer(),n,r=1;if(t==="stl"){let a=new yl().parse(e);n=new Oe,n.add(new ue(a,new Pi({color:a.getAttribute("color")?16777215:12045548})))}else if(t==="obj")n=new Sl().parse(new TextDecoder().decode(e));else if(t==="3mf"){n=new bl().parse(e);let a=yd(new Uint8Array(e)),c=Object.keys(a).find(h=>/^3d\/3dmodel\.model$/i.test(h))||Object.keys(a).find(h=>/\.model$/i.test(h)),l=c?new DOMParser().parseFromString(Eh(a[c]),"application/xml").documentElement.getAttribute("unit"):null;r={micron:.001,millimeter:1,centimeter:10,inch:25.4,foot:304.8,meter:1e3}[l||"millimeter"]||1}else throw new Error("STL, 3MF veya OBJ dosyas\u0131 se\xE7in.");n.updateMatrixWorld(!0);let s=[];if(n.traverse(a=>{let c=a.children.filter(l=>l.isMesh);c.length&&s.push($x(c,a.name||`Par\xE7a ${s.length+1}`,r))}),!s.length)throw new Error("Dosyada \xFC\xE7gen y\xFCzey bulunamad\u0131.");if(s.reduce((a,c)=>a+c.triangles.length,0)>15e5)throw new Error("Bu model 1,5 milyon \xFC\xE7genden b\xFCy\xFCk. \xD6nce a\u011F\u0131 sadele\u015Ftirin.");if(s.some(a=>a.vertices.some(c=>c.some(l=>!Number.isFinite(l)))))throw new Error("Dosyada ge\xE7ersiz koordinat var.");ft("operation-feedback").hidden=!0,de=s,wd=i.name.replace(/\.[^.]+$/,""),Se=new Set([0]),ur=[],co=[],ki(),ft("model-name").textContent=i.name,Vi("orbit"),fo(!0),Ee("Model haz\u0131r. Yaz\u0131n\u0131n yan\u0131ndan referans y\xFCzey se\xE7erek ba\u015Flay\u0131n."),n.traverse(a=>{if(a.isMesh){a.geometry.dispose();for(let c of Array.isArray(a.material)?a.material:[a.material])c.dispose()}})}catch(t){ns(t)}finally{re=!1,ft("model-file").value="",Ce()}}}function Jx(i){return new Promise((t,e)=>{xi||(xi=new Worker(new URL("mesh-worker.js",document.baseURI),{type:"module"}),xi.onmessage=({data:n})=>{if(!gn)return;if(n.progress){Tl(n.progress);return}clearTimeout(gn.timer);let{resolve:r,reject:s}=gn;gn=null,n.error?s(new Error(n.error)):r(n)},xi.onerror=n=>{gn&&(clearTimeout(gn.timer),gn.reject(new Error(n.message||"Geometri motoru a\xE7\u0131lamad\u0131.")),gn=null),xi.terminate(),xi=null}),gn={resolve:t,reject:e,timer:setTimeout(()=>Ud("\u0130\u015Flem zaman a\u015F\u0131m\u0131na u\u011Frad\u0131. Daha k\xFC\xE7\xFCk bir alan deneyin."),12e4)},xi.postMessage(i)})}function Ud(i="\u0130\u015Flem iptal edildi. Model de\u011Fi\u015Ftirilmedi."){gn&&(clearTimeout(gn.timer),gn.reject(new Error(i)),gn=null),xi?.terminate(),xi=null}async function po(i,t=null){if(re||!de.length)return;let e=i==="split"?[...Se][0]:Bt?.part;if(e===void 0||i!=="split"&&!Ue.length)return;let n=Number(ft("edit-depth").value),r=Number(ft("edit-offset").value);if(!t&&!["split","cut"].includes(i)&&(!Number.isFinite(n)||n<=0||n>1e3||!Number.isFinite(r)))return Ee("Ge\xE7erli derinlik ve ofset girin.");re=!0,Ce(),Tl("\u0130\u015Flem ba\u015Flat\u0131l\u0131yor\u2026"),Ee("Se\xE7ili geometri d\xFCzenleniyor\u2026");let s=Date.now(),o=setInterval(()=>{ft("operation-elapsed").textContent=`${Math.floor((Date.now()-s)/1e3)} sn`},1e3);try{let{parts:a,warning:c}=await Jx({mode:i,part:de[e],areas:t||Ue.map(l=>({...l,depth:n,offset:r}))});Ph(),de=[...de.slice(0,e),...a,...de.slice(e+1)],Se=new Set(a.map((l,h)=>e+h)),ki(),Vi("orbit"),fo(),Tl(c||(i==="split"?`${a.length} ba\u011Flant\u0131s\u0131z par\xE7a bulundu.`:"\u0130\u015Flem tamamland\u0131. Model geometrisi de\u011Fi\u015Ftirildi. Geri al ile kar\u015F\u0131la\u015Ft\u0131rabilirsiniz."),c?"warning":"success"),Ee(i==="split"?`${a.length} ba\u011Flant\u0131s\u0131z par\xE7a bulundu.`:i==="cut"?"\u0130\u015Flem tamamland\u0131. Se\xE7ilen alan modelin kal\u0131nl\u0131\u011F\u0131 boyunca kesildi.":"\u0130\u015Flem tamamland\u0131. Yaln\u0131zca se\xE7ilen yerel alan de\u011Fi\u015Ftirildi.")}catch(a){ns(a)}finally{clearInterval(o),ft("operation-elapsed").textContent="",re=!1,Ce()}}function Uh(i=!1){if(re)return;let t=i?co:ur,e=i?ur:co;if(!t.length)return;e.push(Cd());let n=t.pop();if(de=n.parts,Se=new Set(n.selected),ki(),Vi("orbit"),fo(),n.view){let r=we.enableDamping;we.enableDamping=!1,we.update(),Le.position.fromArray(n.view.position),we.target.fromArray(n.view.target),we.update(),Le.updateMatrixWorld(!0),we.enableDamping=r}Ee(i?"\u0130\u015Flem yinelendi.":"\u0130\u015Flem geri al\u0131nd\u0131."),ft("operation-feedback").hidden=!0}function Fh(){if(!de.length)return Ee("\xD6nce bir 3D dosyas\u0131 a\xE7\u0131n.");if(!re)try{let i=ft("mesh-format").value,t=de.map(Wx),e=i==="stl"?Sd(t):i==="obj"?bd(t):Md(t),n=i==="obj"?"zip":i,r=URL.createObjectURL(new Blob([e],{type:i==="3mf"?"model/3mf":i==="stl"?"model/stl":"application/zip"})),s=document.createElement("a");s.href=r,s.download=wd.replace(/[<>:"/\\|?*]/g,"_")+"-duzenlendi."+n,s.click(),setTimeout(()=>URL.revokeObjectURL(r),3e4),Ee("D\xFCzenlenen model kaydediliyor. Kaynak dosya korunuyor.")}catch(i){ns(i)}}ft("model-open").onclick=()=>ft("model-file").click();ft("model-file").onchange=i=>Ld(i.target.files[0]);Bi.ondragover=i=>i.preventDefault();Bi.ondrop=i=>{i.preventDefault(),Ld(i.dataTransfer.files[0])};for(let i of["orbit","pan","reference","fill-reference","polygon","box","circle"])ft("tool-"+i).onclick=()=>{Vi(i),i==="fill-reference"&&Ee("Dolgunun \xFCst y\xFCzeyiyle ayn\u0131 d\xFCzlemde olmas\u0131n\u0131 istedi\u011Finiz y\xFCzeye t\u0131klay\u0131n. Alan se\xE7imi korunur."),i==="reference"&&Ee("Temiz y\xFCzeye t\u0131kla: referans se\xE7. S\xFCr\xFCkle: d\xF6nd\xFCr. Tekerle\u011Fe bas\u0131l\u0131 s\xFCr\xFCkle: kayd\u0131r \xB7 Sa\u011F tu\u015F: d\xF6nd\xFCr. Tekerlek: yak\u0131nla\u015F."),i==="polygon"&&Ee("S\u0131n\u0131r noktalar\u0131na sol t\u0131klay\u0131n. \u0130lk noktaya t\u0131klay\u0131n veya Enter ile kapat\u0131n. Backspace: son noktay\u0131 geri al. Sa\u011F tu\u015F: d\xF6nd\xFCr \xB7 Tekerle\u011Fe bas\u0131l\u0131 s\xFCr\xFCkle: kayd\u0131r."),i==="box"&&Ee("Modelin temiz y\xFCzeyinden ba\u015Flay\u0131p yaz\u0131n\u0131n etraf\u0131na kutu \xE7izin. Tekerle\u011Fe basarak kayd\u0131rma ve tekerlekle yak\u0131nla\u015Fma her zaman a\xE7\u0131k.")};ft("reference-view").onclick=()=>{Bt&&is(Bt.n,Bt.origin)};ft("reference-flip").onclick=()=>{Bt&&(Bt.n.negate(),Bt.v.negate(),Ue=[],ge=[],zn=null,ze(),Ce())};ft("model-fit").onclick=()=>is();ft("view-front").onclick=()=>is(new L(0,-1,0));ft("view-top-model").onclick=()=>is(new L(0,-1e-4,1));ft("model-ground").onclick=()=>{if(!de.length||re)return;Ph();let i=vn.getCenter(new L),t=[-i.x,-i.y,-vn.min.z];de=de.map(e=>({...e,vertices:e.vertices.map(n=>n.map((r,s)=>r+t[s]))})),ki(),Vi("orbit"),fo(!0),Ee("Model zemine ve koordinat merkezine yerle\u015Ftirildi. Geri al ile eski konumu geri getirebilirsiniz.")};for(let i of["section-enabled","section-axis","section-position"])ft(i).oninput=Ih;ft("section-flip").onclick=()=>{Ah*=-1,Ih()};for(let i of["edit-depth","edit-offset"])ft(i).oninput=()=>ze();ft("areas-clear").onclick=()=>{Ue=[],ge=[],zn=null,Bt?.viewPlane?ki():ze(),Ce()};ft("erase-local").onclick=()=>po("erase");ft("fill-local").onclick=()=>po("fill");ft("split-parts").onclick=()=>po("split");ft("cancel-operation").onclick=()=>Ud();ft("cut-local").onclick=()=>po("cut");ft("delete-parts").onclick=()=>{re||!Se.size||(Ph(),de=de.filter((i,t)=>!Se.has(t)),Se.clear(),ki(),fo(),Ee("Se\xE7ili par\xE7alar silindi. Geri al ile geri getirebilirsiniz."))};ft("mesh-undo").onclick=()=>Uh();ft("mesh-redo").onclick=()=>Uh(!0);ft("mesh-export").onclick=Fh;document.addEventListener("keydown",i=>{if((i.ctrlKey||i.metaKey)&&["s","o","e"].includes(i.key.toLowerCase())&&!parent.katmanDesktop){i.preventDefault(),i.key.toLowerCase()==="o"?ft("model-file").click():Fh();return}if(!/INPUT|SELECT|TEXTAREA/.test(i.target.tagName)){if((i.ctrlKey||i.metaKey)&&i.key.toLowerCase()==="z"&&(i.preventDefault(),Uh(i.shiftKey)),Qe==="polygon"&&i.key==="Enter"){i.preventDefault(),Dh();return}if(Qe==="polygon"&&i.key==="Backspace"){i.preventDefault(),ge.pop(),ze(),Ce();return}i.key==="Escape"&&(ge=[],zn=null,Ue=[],ze(),Vi("orbit"),Ce())}});window.addEventListener("message",i=>{if(i.source!==parent||i.origin!==location.origin||i.data?.type!=="katman-editor-action")return;let t=i.data.action;t==="image"||t==="open"?ft("model-file").click():t==="save"||t==="export"?Fh():t==="help"&&(document.querySelector("details").open=!0)});new ResizeObserver(()=>{let i=Bi.clientWidth,t=Bi.clientHeight;!i||!t||(Le.aspect=i/t,Le.updateProjectionMatrix(),Xe.setSize(i,t))}).observe(Bi);function Fd(){requestAnimationFrame(Fd),!(document.hidden||!Bi.clientWidth||!Bi.clientHeight)&&(we.update(),Xe.render(zi,Le))}Fd();is();Ce();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

three/examples/jsm/libs/fflate.module.js:
  (*!
  fflate - fast JavaScript compression/decompression
  <https://101arrowz.github.io/fflate>
  Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
  version 0.8.2
  *)
*/
