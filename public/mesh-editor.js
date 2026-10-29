var In={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},or={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Cd=0,ru=1,Pd=2;var su=1,Id=2,Si=3,Hn=0,Je=1,Ke=2,zi=0,Ar=1,ou=2,au=3,lu=4,Dd=5,Qi=100,Ld=101,Ud=102,Nd=103,Fd=104,Od=200,Bd=201,zd=202,kd=203,sl=204,ol=205,Vd=206,Hd=207,Gd=208,Wd=209,Xd=210,qd=211,Yd=212,Zd=213,$d=214,Nl=0,Fl=1,Ol=2,Rr=3,Bl=4,zl=5,kl=6,Vl=7,Hl=0,Jd=1,Kd=2,ki=0,jd=1,Qd=2,tp=3,Gl=4,ep=5,np=6,ip=7;var cu=300,Lr=301,Ur=302,Wl=303,Xl=304,Jo=306,Fi=1e3,ei=1001,Cr=1002,$e=1003,rp=1004;var Ko=1005;var cn=1006,ql=1007;var si=1008;var oi=1009,hu=1010,uu=1011,As=1012,Yl=1013,Vi=1014,Gn=1015,Rs=1016,Zl=1017,$l=1018,Cs=1020,fu=35902,du=35899,pu=1021,mu=1022,xn=1023,ps=1026,Ps=1027,gu=1028,jo=1029,yu=1030,Jl=1031;var Kl=1033,Qo=33776,ta=33777,ea=33778,na=33779,jl=35840,Ql=35841,tc=35842,ec=35843,nc=36196,ic=37492,rc=37496,sc=37808,oc=37809,ac=37810,lc=37811,cc=37812,hc=37813,uc=37814,fc=37815,dc=37816,pc=37817,mc=37818,gc=37819,yc=37820,_c=37821,vc=36492,xc=36494,Mc=36495,Sc=36283,bc=36284,wc=36285,Ec=36286;var _o=2300,al=2301,rl=2302,Hh=2400,Gh=2401,Wh=2402;var sp=3200,op=3201;var Tc=0,ap=1,Hi="",ke="srgb",Pr="srgb-linear",vo="linear",me="srgb";var Tr=7680;var Xh=519,lp=512,cp=513,hp=514,_u=515,up=516,fp=517,dp=518,pp=519,qh=35044;var vu="300 es",Vn=2e3,xo=2001;var _i=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let r=n[t];if(r!==void 0){let s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}},nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yf=1234567,po=Math.PI/180,ms=180/Math.PI;function Nr(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]+"-"+nn[t&255]+nn[t>>8&255]+"-"+nn[t>>16&15|64]+nn[t>>24&255]+"-"+nn[e&63|128]+nn[e>>8&255]+"-"+nn[e>>16&255]+nn[e>>24&255]+nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]).toLowerCase()}function qt(i,t,e){return Math.max(t,Math.min(e,i))}function xu(i,t){return(i%t+t)%t}function Lg(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function Ug(i,t,e){return i!==t?(e-i)/(t-i):0}function mo(i,t,e){return(1-e)*i+e*t}function Ng(i,t,e,n){return mo(i,t,1-Math.exp(-e*n))}function Fg(i,t=1){return t-Math.abs(xu(i,t*2)-t)}function Og(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Bg(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function zg(i,t){return i+Math.floor(Math.random()*(t-i+1))}function kg(i,t){return i+Math.random()*(t-i)}function Vg(i){return i*(.5-Math.random())}function Hg(i){i!==void 0&&(Yf=i);let t=Yf+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Gg(i){return i*po}function Wg(i){return i*ms}function Xg(i){return(i&i-1)===0&&i!==0}function qg(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Yg(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Zg(i,t,e,n,r){let s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+n)/2),u=o((t+n)/2),h=s((t-n)/2),f=o((t-n)/2),d=s((n-t)/2),g=o((n-t)/2);switch(r){case"XYX":i.set(a*u,l*h,l*f,a*c);break;case"YZY":i.set(l*f,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*f,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*d,a*c);break;case"YXY":i.set(l*d,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function hs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function pn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Mu={DEG2RAD:po,RAD2DEG:ms,generateUUID:Nr,clamp:qt,euclideanModulo:xu,mapLinear:Lg,inverseLerp:Ug,lerp:mo,damp:Ng,pingpong:Fg,smoothstep:Og,smootherstep:Bg,randInt:zg,randFloat:kg,randFloatSpread:Vg,seededRandom:Hg,degToRad:Gg,radToDeg:Wg,isPowerOfTwo:Xg,ceilPowerOfTwo:qg,floorPowerOfTwo:Yg,setQuaternionFromProperEuler:Zg,normalize:pn,denormalize:hs},ct=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Wn=class{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3],f=s[o+0],d=s[o+1],g=s[o+2],y=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=y;return}if(h!==y||l!==f||c!==d||u!==g){let m=1-a,p=l*f+c*d+u*g+h*y,x=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let b=Math.sqrt(v),E=Math.atan2(b,p*x);m=Math.sin(m*E)/b,a=Math.sin(a*E)/b}let _=a*x;if(l=l*m+f*_,c=c*m+d*_,u=u*m+g*_,h=h*m+y*_,m===1-a){let b=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=b,c*=b,u*=b,h*=b}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,r,s,o){let a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[o],f=s[o+1],d=s[o+2],g=s[o+3];return t[e]=a*g+u*h+l*d-c*f,t[e+1]=l*g+u*f+c*h-a*d,t[e+2]=c*g+u*d+a*f-l*h,t[e+3]=u*g-a*h-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),h=a(s/2),f=l(n/2),d=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=n+a+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(n>a&&n>h){let d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>h){let d=2*Math.sqrt(1+a-n-h);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+h-n-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(qt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,r=this._y,s=this._z,o=this._w,a=o*t._w+n*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*r+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Zf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Zf.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*n),u=2*(a*e-s*r),h=2*(s*n-o*e);return this.x=e+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this.z=qt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this.z=qt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return fh.copy(this).projectOnVector(t),this.sub(fh)}reflect(t){return this.sub(fh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},fh=new I,Zf=new Wn,Zt=class i{constructor(t,e,n,r,s,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c)}set(t,e,n,r,s,o,a,l,c){let u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],y=r[0],m=r[3],p=r[6],x=r[1],v=r[4],_=r[7],b=r[2],E=r[5],T=r[8];return s[0]=o*y+a*x+l*b,s[3]=o*m+a*v+l*E,s[6]=o*p+a*_+l*T,s[1]=c*y+u*x+h*b,s[4]=c*m+u*v+h*E,s[7]=c*p+u*_+h*T,s[2]=f*y+d*x+g*b,s[5]=f*m+d*v+g*E,s[8]=f*p+d*_+g*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,g=e*h+n*f+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=h*y,t[1]=(r*c-u*n)*y,t[2]=(a*n-r*o)*y,t[3]=f*y,t[4]=(u*e-r*l)*y,t[5]=(r*s-a*e)*y,t[6]=d*y,t[7]=(n*l-c*e)*y,t[8]=(o*e-n*s)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(dh.makeScale(t,e)),this}rotate(t){return this.premultiply(dh.makeRotation(-t)),this}translate(t,e){return this.premultiply(dh.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},dh=new Zt;function Su(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function gs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function mp(){let i=gs("canvas");return i.style.display="block",i}var $f={};function ys(i){i in $f||($f[i]=!0,console.warn(i))}function gp(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}var Jf=new Zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Kf=new Zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $g(){let i={enabled:!0,workingColorSpace:Pr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===me&&(r.r=Ni(r.r),r.g=Ni(r.g),r.b=Ni(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===me&&(r.r=us(r.r),r.g=us(r.g),r.b=us(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Hi?vo:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ys("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ys("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Pr]:{primaries:t,whitePoint:n,transfer:vo,toXYZ:Jf,fromXYZ:Kf,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ke},outputColorSpaceConfig:{drawingBufferColorSpace:ke}},[ke]:{primaries:t,whitePoint:n,transfer:me,toXYZ:Jf,fromXYZ:Kf,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ke}}}),i}var ne=$g();function Ni(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function us(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var $r,ll=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{$r===void 0&&($r=gs("canvas")),$r.width=t.width,$r.height=t.height;let r=$r.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=$r}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=gs("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ni(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ni(e[n]/255)*255):e[n]=Ni(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Jg=0,_s=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jg++}),this.uuid=Nr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ph(r[o].image)):s.push(ph(r[o]))}else s=ph(r);n.url=s}return e||(t.images[this.uuid]=n),n}};function ph(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ll.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Kg=0,mh=new I,mn=class i extends _i{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=ei,r=ei,s=cn,o=si,a=xn,l=oi,c=i.DEFAULT_ANISOTROPY,u=Hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kg++}),this.uuid=Nr(),this.name="",this.source=new _s(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(mh).x}get height(){return this.source.getSize(mh).y}get depth(){return this.source.getSize(mh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==cu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Fi:t.x=t.x-Math.floor(t.x);break;case ei:t.x=t.x<0?0:1;break;case Cr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Fi:t.y=t.y-Math.floor(t.y);break;case ei:t.y=t.y<0?0:1;break;case Cr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=cu;mn.DEFAULT_ANISOTROPY=1;var Le=class i{constructor(t=0,e=0,n=0,r=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s,l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],y=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(c+1)/2,_=(d+1)/2,b=(p+1)/2,E=(u+f)/4,T=(h+y)/4,D=(g+m)/4;return v>_&&v>b?v<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(v),r=E/n,s=T/n):_>b?_<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),n=E/r,s=D/r):b<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),n=T/s,r=D/s),this.set(n,r,s,e),this}let x=Math.sqrt((m-g)*(m-g)+(h-y)*(h-y)+(f-u)*(f-u));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(h-y)/x,this.z=(f-u)/x,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this.z=qt(this.z,t.z,e.z),this.w=qt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this.z=qt(this.z,t,e),this.w=qt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},cl=class extends _i{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Le(0,0,t,e),this.scissorTest=!1,this.viewport=new Le(0,0,t,e);let r={width:t,height:e,depth:n.depth},s=new mn(r);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:cn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let r=Object.assign({},t.textures[e].image);this.textures[e].source=new _s(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},vi=class extends cl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Mo=class extends mn{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=$e,this.minFilter=$e,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var hl=class extends mn{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=$e,this.minFilter=$e,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ae=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(jn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(jn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=jn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,jn):jn.fromBufferAttribute(s,o),jn.applyMatrix4(t.matrixWorld),this.expandByPoint(jn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ca.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ca.copy(n.boundingBox)),Ca.applyMatrix4(t.matrixWorld),this.union(Ca)}let r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,jn),jn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(oo),Pa.subVectors(this.max,oo),Jr.subVectors(t.a,oo),Kr.subVectors(t.b,oo),jr.subVectors(t.c,oo),Yi.subVectors(Kr,Jr),Zi.subVectors(jr,Kr),xr.subVectors(Jr,jr);let e=[0,-Yi.z,Yi.y,0,-Zi.z,Zi.y,0,-xr.z,xr.y,Yi.z,0,-Yi.x,Zi.z,0,-Zi.x,xr.z,0,-xr.x,-Yi.y,Yi.x,0,-Zi.y,Zi.x,0,-xr.y,xr.x,0];return!gh(e,Jr,Kr,jr,Pa)||(e=[1,0,0,0,1,0,0,0,1],!gh(e,Jr,Kr,jr,Pa))?!1:(Ia.crossVectors(Yi,Zi),e=[Ia.x,Ia.y,Ia.z],gh(e,Jr,Kr,jr,Pa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,jn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(jn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ci),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ci=[new I,new I,new I,new I,new I,new I,new I,new I],jn=new I,Ca=new ae,Jr=new I,Kr=new I,jr=new I,Yi=new I,Zi=new I,xr=new I,oo=new I,Pa=new I,Ia=new I,Mr=new I;function gh(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Mr.fromArray(i,s);let a=r.x*Math.abs(Mr.x)+r.y*Math.abs(Mr.y)+r.z*Math.abs(Mr.z),l=t.dot(Mr),c=e.dot(Mr),u=n.dot(Mr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var jg=new ae,ao=new I,yh=new I,ln=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):jg.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ao.subVectors(t,this.center);let e=ao.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(ao,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(yh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ao.copy(t.center).add(yh)),this.expandByPoint(ao.copy(t.center).sub(yh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Pi=new I,_h=new I,Da=new I,$i=new I,vh=new I,La=new I,xh=new I,ni=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Pi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Pi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Pi.copy(this.origin).addScaledVector(this.direction,e),Pi.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){_h.copy(t).add(e).multiplyScalar(.5),Da.copy(e).sub(t).normalize(),$i.copy(this.origin).sub(_h);let s=t.distanceTo(e)*.5,o=-this.direction.dot(Da),a=$i.dot(this.direction),l=-$i.dot(Da),c=$i.lengthSq(),u=Math.abs(1-o*o),h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=s*u,h>=0)if(f>=-g)if(f<=g){let y=1/u;h*=y,f*=y,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(_h).addScaledVector(Da,f),d}intersectSphere(t,e){Pi.subVectors(t.center,this.origin);let n=Pi.dot(this.direction),r=Pi.dot(Pi)-n*n,s=t.radius*t.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,r=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,r=(t.min.x-f.x)*c),u>=0?(s=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(s=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Pi)!==null}intersectTriangle(t,e,n,r,s){vh.subVectors(e,t),La.subVectors(n,t),xh.crossVectors(vh,La);let o=this.direction.dot(xh),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;$i.subVectors(this.origin,t);let l=a*this.direction.dot(La.crossVectors($i,La));if(l<0)return null;let c=a*this.direction.dot(vh.cross($i));if(c<0||l+c>o)return null;let u=-a*$i.dot(xh);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Wt=class i{constructor(t,e,n,r,s,o,a,l,c,u,h,f,d,g,y,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c,u,h,f,d,g,y,m)}set(t,e,n,r,s,o,a,l,c,u,h,f,d,g,y,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,r=1/Qr.setFromMatrixColumn(t,0).length(),s=1/Qr.setFromMatrixColumn(t,1).length(),o=1/Qr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){let f=o*u,d=o*h,g=a*u,y=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=d+g*c,e[5]=f-y*c,e[9]=-a*l,e[2]=y-f*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*u,d=l*h,g=c*u,y=c*h;e[0]=f+y*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=d*a-g,e[6]=y+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*u,d=l*h,g=c*u,y=c*h;e[0]=f-y*a,e[4]=-o*h,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*u,e[9]=y-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*u,d=o*h,g=a*u,y=a*h;e[0]=l*u,e[4]=g*c-d,e[8]=f*c+y,e[1]=l*h,e[5]=y*c+f,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,g=a*l,y=a*c;e[0]=l*u,e[4]=y-f*h,e[8]=g*h+d,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*h+g,e[10]=f-y*h}else if(t.order==="XZY"){let f=o*l,d=o*c,g=a*l,y=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+y,e[5]=o*u,e[9]=d*h-g,e[2]=g*h-d,e[6]=a*u,e[10]=y*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Qg,t,t0)}lookAt(t,e,n){let r=this.elements;return Tn.subVectors(t,e),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),Ji.crossVectors(n,Tn),Ji.lengthSq()===0&&(Math.abs(n.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),Ji.crossVectors(n,Tn)),Ji.normalize(),Ua.crossVectors(Tn,Ji),r[0]=Ji.x,r[4]=Ua.x,r[8]=Tn.x,r[1]=Ji.y,r[5]=Ua.y,r[9]=Tn.y,r[2]=Ji.z,r[6]=Ua.z,r[10]=Tn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],y=n[6],m=n[10],p=n[14],x=n[3],v=n[7],_=n[11],b=n[15],E=r[0],T=r[4],D=r[8],S=r[12],M=r[1],A=r[5],L=r[9],F=r[13],O=r[2],H=r[6],V=r[10],rt=r[14],K=r[3],lt=r[7],_t=r[11],St=r[15];return s[0]=o*E+a*M+l*O+c*K,s[4]=o*T+a*A+l*H+c*lt,s[8]=o*D+a*L+l*V+c*_t,s[12]=o*S+a*F+l*rt+c*St,s[1]=u*E+h*M+f*O+d*K,s[5]=u*T+h*A+f*H+d*lt,s[9]=u*D+h*L+f*V+d*_t,s[13]=u*S+h*F+f*rt+d*St,s[2]=g*E+y*M+m*O+p*K,s[6]=g*T+y*A+m*H+p*lt,s[10]=g*D+y*L+m*V+p*_t,s[14]=g*S+y*F+m*rt+p*St,s[3]=x*E+v*M+_*O+b*K,s[7]=x*T+v*A+_*H+b*lt,s[11]=x*D+v*L+_*V+b*_t,s[15]=x*S+v*F+_*rt+b*St,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],d=t[14],g=t[3],y=t[7],m=t[11],p=t[15];return g*(+s*l*h-r*c*h-s*a*f+n*c*f+r*a*d-n*l*d)+y*(+e*l*d-e*c*f+s*o*f-r*o*d+r*c*u-s*l*u)+m*(+e*c*h-e*a*d-s*o*h+n*o*d+s*a*u-n*c*u)+p*(-r*a*u-e*l*h+e*a*f+r*o*h-n*o*f+n*l*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],d=t[11],g=t[12],y=t[13],m=t[14],p=t[15],x=h*m*c-y*f*c+y*l*d-a*m*d-h*l*p+a*f*p,v=g*f*c-u*m*c-g*l*d+o*m*d+u*l*p-o*f*p,_=u*y*c-g*h*c+g*a*d-o*y*d-u*a*p+o*h*p,b=g*h*l-u*y*l-g*a*f+o*y*f+u*a*m-o*h*m,E=e*x+n*v+r*_+s*b;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/E;return t[0]=x*T,t[1]=(y*f*s-h*m*s-y*r*d+n*m*d+h*r*p-n*f*p)*T,t[2]=(a*m*s-y*l*s+y*r*c-n*m*c-a*r*p+n*l*p)*T,t[3]=(h*l*s-a*f*s-h*r*c+n*f*c+a*r*d-n*l*d)*T,t[4]=v*T,t[5]=(u*m*s-g*f*s+g*r*d-e*m*d-u*r*p+e*f*p)*T,t[6]=(g*l*s-o*m*s-g*r*c+e*m*c+o*r*p-e*l*p)*T,t[7]=(o*f*s-u*l*s+u*r*c-e*f*c-o*r*d+e*l*d)*T,t[8]=_*T,t[9]=(g*h*s-u*y*s-g*n*d+e*y*d+u*n*p-e*h*p)*T,t[10]=(o*y*s-g*a*s+g*n*c-e*y*c-o*n*p+e*a*p)*T,t[11]=(u*a*s-o*h*s-u*n*c+e*h*c+o*n*d-e*a*d)*T,t[12]=b*T,t[13]=(u*y*r-g*h*r+g*n*f-e*y*f-u*n*m+e*h*m)*T,t[14]=(g*a*r-o*y*r-g*n*l+e*y*l+o*n*m-e*a*m)*T,t[15]=(o*h*r-u*a*r+u*n*l-e*h*l-o*n*f+e*a*f)*T,this}scale(t){let e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){let r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,g=s*h,y=o*u,m=o*h,p=a*h,x=l*c,v=l*u,_=l*h,b=n.x,E=n.y,T=n.z;return r[0]=(1-(y+p))*b,r[1]=(d+_)*b,r[2]=(g-v)*b,r[3]=0,r[4]=(d-_)*E,r[5]=(1-(f+p))*E,r[6]=(m+x)*E,r[7]=0,r[8]=(g+v)*T,r[9]=(m-x)*T,r[10]=(1-(f+y))*T,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){let r=this.elements,s=Qr.set(r[0],r[1],r[2]).length(),o=Qr.set(r[4],r[5],r[6]).length(),a=Qr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Qn.copy(this);let c=1/s,u=1/o,h=1/a;return Qn.elements[0]*=c,Qn.elements[1]*=c,Qn.elements[2]*=c,Qn.elements[4]*=u,Qn.elements[5]*=u,Qn.elements[6]*=u,Qn.elements[8]*=h,Qn.elements[9]*=h,Qn.elements[10]*=h,e.setFromRotationMatrix(Qn),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,r,s,o,a=Vn,l=!1){let c=this.elements,u=2*s/(e-t),h=2*s/(n-r),f=(e+t)/(e-t),d=(n+r)/(n-r),g,y;if(l)g=s/(o-s),y=o*s/(o-s);else if(a===Vn)g=-(o+s)/(o-s),y=-2*o*s/(o-s);else if(a===xo)g=-o/(o-s),y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=Vn,l=!1){let c=this.elements,u=2/(e-t),h=2/(n-r),f=-(e+t)/(e-t),d=-(n+r)/(n-r),g,y;if(l)g=1/(o-s),y=o/(o-s);else if(a===Vn)g=-2/(o-s),y=-(o+s)/(o-s);else if(a===xo)g=-1/(o-s),y=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Qr=new I,Qn=new Wt,Qg=new I(0,0,0),t0=new I(1,1,1),Ji=new I,Ua=new I,Tn=new I,jf=new Wt,Qf=new Wn,Xn=class i{constructor(t=0,e=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(qt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-qt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return jf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(jf,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Qf.setFromEuler(this),this.setFromQuaternion(Qf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Xn.DEFAULT_ORDER="XYZ";var vs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},e0=0,td=new I,ts=new Wn,Ii=new Wt,Na=new I,lo=new I,n0=new I,i0=new Wn,ed=new I(1,0,0),nd=new I(0,1,0),id=new I(0,0,1),rd={type:"added"},r0={type:"removed"},es={type:"childadded",child:null},Mh={type:"childremoved",child:null},Ze=class i extends _i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:e0++}),this.uuid=Nr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new I,e=new Xn,n=new Wn,r=new I(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Wt},normalMatrix:{value:new Zt}}),this.matrix=new Wt,this.matrixWorld=new Wt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ts.setFromAxisAngle(t,e),this.quaternion.multiply(ts),this}rotateOnWorldAxis(t,e){return ts.setFromAxisAngle(t,e),this.quaternion.premultiply(ts),this}rotateX(t){return this.rotateOnAxis(ed,t)}rotateY(t){return this.rotateOnAxis(nd,t)}rotateZ(t){return this.rotateOnAxis(id,t)}translateOnAxis(t,e){return td.copy(t).applyQuaternion(this.quaternion),this.position.add(td.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ed,t)}translateY(t){return this.translateOnAxis(nd,t)}translateZ(t){return this.translateOnAxis(id,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Na.copy(t):Na.set(t,e,n);let r=this.parent;this.updateWorldMatrix(!0,!1),lo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(lo,Na,this.up):Ii.lookAt(Na,lo,this.up),this.quaternion.setFromRotationMatrix(Ii),r&&(Ii.extractRotation(r.matrixWorld),ts.setFromRotationMatrix(Ii),this.quaternion.premultiply(ts.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(rd),es.child=t,this.dispatchEvent(es),es.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(r0),Mh.child=t,this.dispatchEvent(Mh),Mh.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ii.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ii),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(rd),es.child=t,this.dispatchEvent(es),es.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lo,t,n0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lo,i0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let r=t.children[n];this.add(r.clone())}return this}};Ze.DEFAULT_UP=new I(0,1,0);Ze.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ti=new I,Di=new I,Sh=new I,Li=new I,ns=new I,is=new I,sd=new I,bh=new I,wh=new I,Eh=new I,Th=new Le,Ah=new Le,Rh=new Le,an=class i{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),ti.subVectors(t,e),r.cross(ti);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){ti.subVectors(r,e),Di.subVectors(n,e),Sh.subVectors(t,e);let o=ti.dot(ti),a=ti.dot(Di),l=ti.dot(Sh),c=Di.dot(Di),u=Di.dot(Sh),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;let f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-d-g,g,d)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Li)===null?!1:Li.x>=0&&Li.y>=0&&Li.x+Li.y<=1}static getInterpolation(t,e,n,r,s,o,a,l){return this.getBarycoord(t,e,n,r,Li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Li.x),l.addScaledVector(o,Li.y),l.addScaledVector(a,Li.z),l)}static getInterpolatedAttribute(t,e,n,r,s,o){return Th.setScalar(0),Ah.setScalar(0),Rh.setScalar(0),Th.fromBufferAttribute(t,e),Ah.fromBufferAttribute(t,n),Rh.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(Th,s.x),o.addScaledVector(Ah,s.y),o.addScaledVector(Rh,s.z),o}static isFrontFacing(t,e,n,r){return ti.subVectors(n,e),Di.subVectors(t,e),ti.cross(Di).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ti.subVectors(this.c,this.b),Di.subVectors(this.a,this.b),ti.cross(Di).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return i.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,r=this.b,s=this.c,o,a;ns.subVectors(r,n),is.subVectors(s,n),bh.subVectors(t,n);let l=ns.dot(bh),c=is.dot(bh);if(l<=0&&c<=0)return e.copy(n);wh.subVectors(t,r);let u=ns.dot(wh),h=is.dot(wh);if(u>=0&&h<=u)return e.copy(r);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(ns,o);Eh.subVectors(t,s);let d=ns.dot(Eh),g=is.dot(Eh);if(g>=0&&d<=g)return e.copy(s);let y=d*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(is,a);let m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return sd.subVectors(s,r),a=(h-u)/(h-u+(d-g)),e.copy(r).addScaledVector(sd,a);let p=1/(m+y+f);return o=y*p,a=f*p,e.copy(n).addScaledVector(ns,o).addScaledVector(is,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},yp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ki={h:0,s:0,l:0},Fa={h:0,s:0,l:0};function Ch(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Vt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=ne.workingColorSpace){return this.r=t,this.g=e,this.b=n,ne.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=ne.workingColorSpace){if(t=xu(t,1),e=qt(e,0,1),n=qt(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Ch(o,s,t+1/3),this.g=Ch(o,s,t),this.b=Ch(o,s,t-1/3)}return ne.colorSpaceToWorking(this,r),this}setStyle(t,e=ke){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ke){let n=yp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ni(t.r),this.g=Ni(t.g),this.b=Ni(t.b),this}copyLinearToSRGB(t){return this.r=us(t.r),this.g=us(t.g),this.b=us(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ke){return ne.workingToColorSpace(rn.copy(this),t),Math.round(qt(rn.r*255,0,255))*65536+Math.round(qt(rn.g*255,0,255))*256+Math.round(qt(rn.b*255,0,255))}getHexString(t=ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.workingToColorSpace(rn.copy(this),e);let n=rn.r,r=rn.g,s=rn.b,o=Math.max(n,r,s),a=Math.min(n,r,s),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ne.workingColorSpace){return ne.workingToColorSpace(rn.copy(this),e),t.r=rn.r,t.g=rn.g,t.b=rn.b,t}getStyle(t=ke){ne.workingToColorSpace(rn.copy(this),t);let e=rn.r,n=rn.g,r=rn.b;return t!==ke?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Ki),this.setHSL(Ki.h+t,Ki.s+e,Ki.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ki),t.getHSL(Fa);let n=mo(Ki.h,Fa.h,e),r=mo(Ki.s,Fa.s,e),s=mo(Ki.l,Fa.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},rn=new Vt;Vt.NAMES=yp;var s0=0,Mn=class extends _i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:s0++}),this.uuid=Nr(),this.name="",this.type="Material",this.blending=Ar,this.side=Hn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sl,this.blendDst=ol,this.blendEquation=Qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=Rr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Tr,this.stencilZFail=Tr,this.stencilZPass=Tr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ar&&(n.blending=this.blending),this.side!==Hn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==sl&&(n.blendSrc=this.blendSrc),this.blendDst!==ol&&(n.blendDst=this.blendDst),this.blendEquation!==Qi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Rr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Tr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Tr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Tr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(e){let s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Oi=class extends Mn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=Hl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Be=new I,Oa=new ct,o0=0,le=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:o0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=qh,this.updateRanges=[],this.gpuType=Gn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Oa.fromBufferAttribute(this,e),Oa.applyMatrix3(t),this.setXY(e,Oa.x,Oa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix3(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix4(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyNormalMatrix(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.transformDirection(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=hs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=pn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=hs(e,this.array)),e}setX(t,e){return this.normalized&&(e=pn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=hs(e,this.array)),e}setY(t,e){return this.normalized&&(e=pn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=hs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=pn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=hs(e,this.array)),e}setW(t,e){return this.normalized&&(e=pn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=pn(e,this.array),n=pn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=pn(e,this.array),n=pn(n,this.array),r=pn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=pn(e,this.array),n=pn(n,this.array),r=pn(r,this.array),s=pn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==qh&&(t.usage=this.usage),t}};var So=class extends le{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var bo=class extends le{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var jt=class extends le{constructor(t,e,n){super(new Float32Array(t),e,n)}},a0=0,kn=new Wt,Ph=new Ze,rs=new I,An=new ae,co=new ae,qe=new I,ie=class i extends _i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:a0++}),this.uuid=Nr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Su(t)?bo:So)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Zt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return kn.makeRotationFromQuaternion(t),this.applyMatrix4(kn),this}rotateX(t){return kn.makeRotationX(t),this.applyMatrix4(kn),this}rotateY(t){return kn.makeRotationY(t),this.applyMatrix4(kn),this}rotateZ(t){return kn.makeRotationZ(t),this.applyMatrix4(kn),this}translate(t,e,n){return kn.makeTranslation(t,e,n),this.applyMatrix4(kn),this}scale(t,e,n){return kn.makeScale(t,e,n),this.applyMatrix4(kn),this}lookAt(t){return Ph.lookAt(t),Ph.updateMatrix(),this.applyMatrix4(Ph.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rs).negate(),this.translate(rs.x,rs.y,rs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let r=0,s=t.length;r<s;r++){let o=t[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new jt(n,3))}else{let n=Math.min(t.length,e.count);for(let r=0;r<n;r++){let s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ae);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){let s=e[n];An.setFromBufferAttribute(s),this.morphTargetsRelative?(qe.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(qe),qe.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(qe)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ln);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let n=this.boundingSphere.center;if(An.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];co.setFromBufferAttribute(a),this.morphTargetsRelative?(qe.addVectors(An.min,co.min),An.expandByPoint(qe),qe.addVectors(An.max,co.max),An.expandByPoint(qe)):(An.expandByPoint(co.min),An.expandByPoint(co.max))}An.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)qe.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(qe));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)qe.fromBufferAttribute(a,c),l&&(rs.fromBufferAttribute(t,c),qe.add(rs)),r=Math.max(r,n.distanceToSquared(qe))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new le(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<n.count;D++)a[D]=new I,l[D]=new I;let c=new I,u=new I,h=new I,f=new ct,d=new ct,g=new ct,y=new I,m=new I;function p(D,S,M){c.fromBufferAttribute(n,D),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,M),f.fromBufferAttribute(s,D),d.fromBufferAttribute(s,S),g.fromBufferAttribute(s,M),u.sub(c),h.sub(c),d.sub(f),g.sub(f);let A=1/(d.x*g.y-g.x*d.y);isFinite(A)&&(y.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(A),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(A),a[D].add(y),a[S].add(y),a[M].add(y),l[D].add(m),l[S].add(m),l[M].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let D=0,S=x.length;D<S;++D){let M=x[D],A=M.start,L=M.count;for(let F=A,O=A+L;F<O;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}let v=new I,_=new I,b=new I,E=new I;function T(D){b.fromBufferAttribute(r,D),E.copy(b);let S=a[D];v.copy(S),v.sub(b.multiplyScalar(b.dot(S))).normalize(),_.crossVectors(E,S);let A=_.dot(l[D])<0?-1:1;o.setXYZW(D,v.x,v.y,v.z,A)}for(let D=0,S=x.length;D<S;++D){let M=x[D],A=M.start,L=M.count;for(let F=A,O=A+L;F<O;F+=3)T(t.getX(F+0)),T(t.getX(F+1)),T(t.getX(F+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new le(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let r=new I,s=new I,o=new I,a=new I,l=new I,c=new I,u=new I,h=new I;if(t)for(let f=0,d=t.count;f<d;f+=3){let g=t.getX(f+0),y=t.getX(f+1),m=t.getX(f+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,y),o.fromBufferAttribute(e,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)qe.fromBufferAttribute(t,e),qe.normalize(),t.setXYZ(e,qe.x,qe.y,qe.z)}toNonIndexed(){function t(a,l){let c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u),d=0,g=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?d=l[y]*a.data.stride+a.offset:d=l[y]*u;for(let p=0;p<u;p++)f[g++]=c[d++]}return new le(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=t(l,n);e.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){let f=c[u],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let d=c[h];u.push(d.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let r=t.attributes;for(let c in r){let u=r[c];this.setAttribute(c,u.clone(e))}let s=t.morphAttributes;for(let c in s){let u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},od=new Wt,Sr=new ni,Ba=new ln,ad=new I,za=new I,ka=new I,Va=new I,Ih=new I,Ha=new I,ld=new I,Ga=new I,se=class extends Ze{constructor(t=new ie,e=new Oi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);let a=this.morphTargetInfluences;if(s&&a){Ha.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=a[l],h=s[l];u!==0&&(Ih.fromBufferAttribute(h,t),o?Ha.addScaledVector(Ih,u):Ha.addScaledVector(Ih.sub(e),u))}e.add(Ha)}return e}raycast(t,e){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ba.copy(n.boundingSphere),Ba.applyMatrix4(s),Sr.copy(t.ray).recast(t.near),!(Ba.containsPoint(Sr.origin)===!1&&(Sr.intersectSphere(Ba,ad)===null||Sr.origin.distanceToSquared(ad)>(t.far-t.near)**2))&&(od.copy(s).invert(),Sr.copy(t.ray).applyMatrix4(od),!(n.boundingBox!==null&&Sr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Sr)))}_computeIntersections(t,e,n){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){let m=f[g],p=o[m.materialIndex],x=Math.max(m.start,d.start),v=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let _=x,b=v;_<b;_+=3){let E=a.getX(_),T=a.getX(_+1),D=a.getX(_+2);r=Wa(this,p,t,n,c,u,h,E,T,D),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{let g=Math.max(0,d.start),y=Math.min(a.count,d.start+d.count);for(let m=g,p=y;m<p;m+=3){let x=a.getX(m),v=a.getX(m+1),_=a.getX(m+2);r=Wa(this,o,t,n,c,u,h,x,v,_),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){let m=f[g],p=o[m.materialIndex],x=Math.max(m.start,d.start),v=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let _=x,b=v;_<b;_+=3){let E=_,T=_+1,D=_+2;r=Wa(this,p,t,n,c,u,h,E,T,D),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{let g=Math.max(0,d.start),y=Math.min(l.count,d.start+d.count);for(let m=g,p=y;m<p;m+=3){let x=m,v=m+1,_=m+2;r=Wa(this,o,t,n,c,u,h,x,v,_),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}};function l0(i,t,e,n,r,s,o,a){let l;if(t.side===Je?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,t.side===Hn,a),l===null)return null;Ga.copy(a),Ga.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Ga);return c<e.near||c>e.far?null:{distance:c,point:Ga.clone(),object:i}}function Wa(i,t,e,n,r,s,o,a,l,c){i.getVertexPosition(a,za),i.getVertexPosition(l,ka),i.getVertexPosition(c,Va);let u=l0(i,t,e,n,za,ka,Va,ld);if(u){let h=new I;an.getBarycoord(ld,za,ka,Va,h),r&&(u.uv=an.getInterpolatedAttribute(r,a,l,c,h,new ct)),s&&(u.uv1=an.getInterpolatedAttribute(s,a,l,c,h,new ct)),o&&(u.normal=an.getInterpolatedAttribute(o,a,l,c,h,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new I,materialIndex:0};an.getNormal(za,ka,Va,f.normal),u.face=f,u.barycoord=h}return u}var tr=class i extends ie{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],u=[],h=[],f=0,d=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,r,o,2),g("x","z","y",1,-1,t,n,-e,r,o,3),g("x","y","z",1,-1,t,e,n,r,s,4),g("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new jt(c,3)),this.setAttribute("normal",new jt(u,3)),this.setAttribute("uv",new jt(h,2));function g(y,m,p,x,v,_,b,E,T,D,S){let M=_/T,A=b/D,L=_/2,F=b/2,O=E/2,H=T+1,V=D+1,rt=0,K=0,lt=new I;for(let _t=0;_t<V;_t++){let St=_t*A-F;for(let Ft=0;Ft<H;Ft++){let Bt=Ft*M-L;lt[y]=Bt*x,lt[m]=St*v,lt[p]=O,c.push(lt.x,lt.y,lt.z),lt[y]=0,lt[m]=0,lt[p]=E>0?1:-1,u.push(lt.x,lt.y,lt.z),h.push(Ft/T),h.push(1-_t/D),rt+=1}}for(let _t=0;_t<D;_t++)for(let St=0;St<T;St++){let Ft=f+St+H*_t,Bt=f+St+H*(_t+1),Kt=f+(St+1)+H*(_t+1),Ot=f+(St+1)+H*_t;l.push(Ft,Bt,Ot),l.push(Bt,Kt,Ot),K+=6}a.addGroup(d,K,S),d+=K,f+=rt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Fr(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function hn(i){let t={};for(let e=0;e<i.length;e++){let n=Fr(i[e]);for(let r in n)t[r]=n[r]}return t}function c0(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function bu(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}var _p={clone:Fr,merge:hn},h0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,u0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Rn=class extends Mn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=h0,this.fragmentShader=u0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Fr(t.uniforms),this.uniformsGroups=c0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},wo=class extends Ze{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Wt,this.projectionMatrix=new Wt,this.projectionMatrixInverse=new Wt,this.coordinateSystem=Vn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ji=new I,cd=new ct,hd=new ct,on=class extends wo{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ms*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(po*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ms*2*Math.atan(Math.tan(po*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ji.x,ji.y).multiplyScalar(-t/ji.z),ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ji.x,ji.y).multiplyScalar(-t/ji.z)}getViewSize(t,e){return this.getViewBounds(t,cd,hd),e.subVectors(hd,cd)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(po*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ss=-90,os=1,ul=class extends Ze{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new on(ss,os,t,e);r.layers=this.layers,this.add(r);let s=new on(ss,os,t,e);s.layers=this.layers,this.add(s);let o=new on(ss,os,t,e);o.layers=this.layers,this.add(o);let a=new on(ss,os,t,e);a.layers=this.layers,this.add(a);let l=new on(ss,os,t,e);l.layers=this.layers,this.add(l);let c=new on(ss,os,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,l]=e;for(let c of e)this.remove(c);if(t===Vn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===xo)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,o),t.setRenderTarget(n,2,r),t.render(e,a),t.setRenderTarget(n,3,r),t.render(e,l),t.setRenderTarget(n,4,r),t.render(e,c),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,r),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Eo=class extends mn{constructor(t=[],e=Lr,n,r,s,o,a,l,c,u){super(t,e,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},fl=class extends vi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Eo(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new tr(5,5,5),s=new Rn({name:"CubemapFromEquirect",uniforms:Fr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Je,blending:zi});s.uniforms.tEquirect.value=e;let o=new se(r,s),a=e.minFilter;return e.minFilter===si&&(e.minFilter=cn),new ul(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}},Ye=class extends Ze{constructor(){super(),this.isGroup=!0,this.type="Group"}},f0={type:"move"},xs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ye,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ye,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ye,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let y of t.hand.values()){let m=e.getJointPose(y,n),p=this._getHandJoint(c,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(f0)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ye;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}};var To=class extends Ze{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xn,this.environmentIntensity=1,this.environmentRotation=new Xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var fs=class extends mn{constructor(t=null,e=1,n=1,r,s,o,a,l,c=$e,u=$e,h,f){super(null,o,a,l,c,u,r,s,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Dh=new I,d0=new I,p0=new Zt,Ve=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let r=Dh.subVectors(n,e).cross(d0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Dh),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||p0.getNormalMatrix(t),r=this.coplanarPoint(Dh).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},br=new ln,m0=new ct(.5,.5),Xa=new I,er=class{constructor(t=new Ve,e=new Ve,n=new Ve,r=new Ve,s=new Ve,o=new Ve){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Vn,n=!1){let r=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],h=s[5],f=s[6],d=s[7],g=s[8],y=s[9],m=s[10],p=s[11],x=s[12],v=s[13],_=s[14],b=s[15];if(r[0].setComponents(c-o,d-u,p-g,b-x).normalize(),r[1].setComponents(c+o,d+u,p+g,b+x).normalize(),r[2].setComponents(c+a,d+h,p+y,b+v).normalize(),r[3].setComponents(c-a,d-h,p-y,b-v).normalize(),n)r[4].setComponents(l,f,m,_).normalize(),r[5].setComponents(c-l,d-f,p-m,b-_).normalize();else if(r[4].setComponents(c-l,d-f,p-m,b-_).normalize(),e===Vn)r[5].setComponents(c+l,d+f,p+m,b+_).normalize();else if(e===xo)r[5].setComponents(l,f,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),br.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),br.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(br)}intersectsSprite(t){br.center.set(0,0,0);let e=m0.distanceTo(t.center);return br.radius=.7071067811865476+e,br.applyMatrix4(t.matrixWorld),this.intersectsSphere(br)}intersectsSphere(t){let e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let r=e[n];if(Xa.x=r.normal.x>0?t.max.x:t.min.x,Xa.y=r.normal.y>0?t.max.y:t.min.y,Xa.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Xa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},mi=new Wt,gi=new er,dl=class i{constructor(){this.coordinateSystem=Vn}intersectsObject(t,e){if(!e.isArrayCamera||e.cameras.length===0)return!1;for(let n=0;n<e.cameras.length;n++){let r=e.cameras[n];if(mi.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),gi.setFromProjectionMatrix(mi,r.coordinateSystem,r.reversedDepth),gi.intersectsObject(t))return!0}return!1}intersectsSprite(t,e){if(!e||!e.cameras||e.cameras.length===0)return!1;for(let n=0;n<e.cameras.length;n++){let r=e.cameras[n];if(mi.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),gi.setFromProjectionMatrix(mi,r.coordinateSystem,r.reversedDepth),gi.intersectsSprite(t))return!0}return!1}intersectsSphere(t,e){if(!e||!e.cameras||e.cameras.length===0)return!1;for(let n=0;n<e.cameras.length;n++){let r=e.cameras[n];if(mi.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),gi.setFromProjectionMatrix(mi,r.coordinateSystem,r.reversedDepth),gi.intersectsSphere(t))return!0}return!1}intersectsBox(t,e){if(!e||!e.cameras||e.cameras.length===0)return!1;for(let n=0;n<e.cameras.length;n++){let r=e.cameras[n];if(mi.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),gi.setFromProjectionMatrix(mi,r.coordinateSystem,r.reversedDepth),gi.intersectsBox(t))return!0}return!1}containsPoint(t,e){if(!e||!e.cameras||e.cameras.length===0)return!1;for(let n=0;n<e.cameras.length;n++){let r=e.cameras[n];if(mi.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),gi.setFromProjectionMatrix(mi,r.coordinateSystem,r.reversedDepth),gi.containsPoint(t))return!0}return!1}clone(){return new i}};function Lh(i,t){return i-t}function g0(i,t){return i.z-t.z}function y0(i,t){return t.z-i.z}var Yh=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(t,e,n,r){let s=this.pool,o=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});let a=s[this.index];o.push(a),this.index++,a.start=t,a.count=e,a.z=n,a.index=r}reset(){this.list.length=0,this.index=0}},vn=new Wt,_0=new Vt(1,1,1),ud=new er,v0=new dl,qa=new ae,wr=new ln,ho=new I,fd=new I,x0=new I,Uh=new Yh,sn=new se,Ya=[];function M0(i,t,e=0){let n=t.itemSize;if(i.isInterleavedBufferAttribute||i.array.constructor!==t.array.constructor){let r=i.count;for(let s=0;s<r;s++)for(let o=0;o<n;o++)t.setComponent(s+e,o,i.getComponent(s,o))}else t.array.set(i.array,e*n);t.needsUpdate=!0}function Er(i,t){if(i.constructor!==t.constructor){let e=Math.min(i.length,t.length);for(let n=0;n<e;n++)t[n]=i[n]}else{let e=Math.min(i.length,t.length);t.set(new i.constructor(i.buffer,0,e))}}var Ao=class extends se{constructor(t,e,n=e*2,r){super(new ie,r),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=t,this._maxVertexCount=e,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(t),this._multiDrawStarts=new Int32Array(t),this._multiDrawCount=0,this._multiDrawInstances=null,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let t=Math.sqrt(this._maxInstanceCount*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4),n=new fs(e,t,t,xn,Gn);this._matricesTexture=n}_initIndirectTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);let e=new Uint32Array(t*t),n=new fs(e,t,t,jo,Vi);this._indirectTexture=n}_initColorsTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);let e=new Float32Array(t*t*4).fill(1),n=new fs(e,t,t,xn,Gn);n.colorSpace=ne.workingColorSpace,this._colorsTexture=n}_initializeGeometry(t){let e=this.geometry,n=this._maxVertexCount,r=this._maxIndexCount;if(this._geometryInitialized===!1){for(let s in t.attributes){let o=t.getAttribute(s),{array:a,itemSize:l,normalized:c}=o,u=new a.constructor(n*l),h=new le(u,l,c);e.setAttribute(s,h)}if(t.getIndex()!==null){let s=n>65535?new Uint32Array(r):new Uint16Array(r);e.setIndex(new le(s,1))}this._geometryInitialized=!0}}_validateGeometry(t){let e=this.geometry;if(!!t.getIndex()!=!!e.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(let n in e.attributes){if(!t.hasAttribute(n))throw new Error(`THREE.BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);let r=t.getAttribute(n),s=e.getAttribute(n);if(r.itemSize!==s.itemSize||r.normalized!==s.normalized)throw new Error("THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}validateInstanceId(t){let e=this._instanceInfo;if(t<0||t>=e.length||e[t].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${t}. Instance is either out of range or has been deleted.`)}validateGeometryId(t){let e=this._geometryInfo;if(t<0||t>=e.length||e[t].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${t}. Geometry is either out of range or has been deleted.`)}setCustomSort(t){return this.customSort=t,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ae);let t=this.boundingBox,e=this._instanceInfo;t.makeEmpty();for(let n=0,r=e.length;n<r;n++){if(e[n].active===!1)continue;let s=e[n].geometryIndex;this.getMatrixAt(n,vn),this.getBoundingBoxAt(s,qa).applyMatrix4(vn),t.union(qa)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ln);let t=this.boundingSphere,e=this._instanceInfo;t.makeEmpty();for(let n=0,r=e.length;n<r;n++){if(e[n].active===!1)continue;let s=e[n].geometryIndex;this.getMatrixAt(n,vn),this.getBoundingSphereAt(s,wr).applyMatrix4(vn),t.union(wr)}}addInstance(t){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");let n={visible:!0,active:!0,geometryIndex:t},r=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(Lh),r=this._availableInstanceIds.shift(),this._instanceInfo[r]=n):(r=this._instanceInfo.length,this._instanceInfo.push(n));let s=this._matricesTexture;vn.identity().toArray(s.image.data,r*16),s.needsUpdate=!0;let o=this._colorsTexture;return o&&(_0.toArray(o.image.data,r*4),o.needsUpdate=!0),this._visibilityChanged=!0,r}addGeometry(t,e=-1,n=-1){this._initializeGeometry(t),this._validateGeometry(t);let r={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},s=this._geometryInfo;r.vertexStart=this._nextVertexStart,r.reservedVertexCount=e===-1?t.getAttribute("position").count:e;let o=t.getIndex();if(o!==null&&(r.indexStart=this._nextIndexStart,r.reservedIndexCount=n===-1?o.count:n),r.indexStart!==-1&&r.indexStart+r.reservedIndexCount>this._maxIndexCount||r.vertexStart+r.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let l;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(Lh),l=this._availableGeometryIds.shift(),s[l]=r):(l=this._geometryCount,this._geometryCount++,s.push(r)),this.setGeometryAt(l,t),this._nextIndexStart=r.indexStart+r.reservedIndexCount,this._nextVertexStart=r.vertexStart+r.reservedVertexCount,l}setGeometryAt(t,e){if(t>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(e);let n=this.geometry,r=n.getIndex()!==null,s=n.getIndex(),o=e.getIndex(),a=this._geometryInfo[t];if(r&&o.count>a.reservedIndexCount||e.attributes.position.count>a.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");let l=a.vertexStart,c=a.reservedVertexCount;a.vertexCount=e.getAttribute("position").count;for(let u in n.attributes){let h=e.getAttribute(u),f=n.getAttribute(u);M0(h,f,l);let d=h.itemSize;for(let g=h.count,y=c;g<y;g++){let m=l+g;for(let p=0;p<d;p++)f.setComponent(m,p,0)}f.needsUpdate=!0,f.addUpdateRange(l*d,c*d)}if(r){let u=a.indexStart,h=a.reservedIndexCount;a.indexCount=e.getIndex().count;for(let f=0;f<o.count;f++)s.setX(u+f,l+o.getX(f));for(let f=o.count,d=h;f<d;f++)s.setX(u+f,l);s.needsUpdate=!0,s.addUpdateRange(u,a.reservedIndexCount)}return a.start=r?a.indexStart:a.vertexStart,a.count=r?a.indexCount:a.vertexCount,a.boundingBox=null,e.boundingBox!==null&&(a.boundingBox=e.boundingBox.clone()),a.boundingSphere=null,e.boundingSphere!==null&&(a.boundingSphere=e.boundingSphere.clone()),this._visibilityChanged=!0,t}deleteGeometry(t){let e=this._geometryInfo;if(t>=e.length||e[t].active===!1)return this;let n=this._instanceInfo;for(let r=0,s=n.length;r<s;r++)n[r].active&&n[r].geometryIndex===t&&this.deleteInstance(r);return e[t].active=!1,this._availableGeometryIds.push(t),this._visibilityChanged=!0,this}deleteInstance(t){return this.validateInstanceId(t),this._instanceInfo[t].active=!1,this._availableInstanceIds.push(t),this._visibilityChanged=!0,this}optimize(){let t=0,e=0,n=this._geometryInfo,r=n.map((o,a)=>a).sort((o,a)=>n[o].vertexStart-n[a].vertexStart),s=this.geometry;for(let o=0,a=n.length;o<a;o++){let l=r[o],c=n[l];if(c.active!==!1){if(s.index!==null){if(c.indexStart!==e){let{indexStart:u,vertexStart:h,reservedIndexCount:f}=c,d=s.index,g=d.array,y=t-h;for(let m=u;m<u+f;m++)g[m]=g[m]+y;d.array.copyWithin(e,u,u+f),d.addUpdateRange(e,f),c.indexStart=e}e+=c.reservedIndexCount}if(c.vertexStart!==t){let{vertexStart:u,reservedVertexCount:h}=c,f=s.attributes;for(let d in f){let g=f[d],{array:y,itemSize:m}=g;y.copyWithin(t*m,u*m,(u+h)*m),g.addUpdateRange(t*m,h*m)}c.vertexStart=t}t+=c.reservedVertexCount,c.start=s.index?c.indexStart:c.vertexStart,this._nextIndexStart=s.index?c.indexStart+c.reservedIndexCount:0,this._nextVertexStart=c.vertexStart+c.reservedVertexCount}}return this}getBoundingBoxAt(t,e){if(t>=this._geometryCount)return null;let n=this.geometry,r=this._geometryInfo[t];if(r.boundingBox===null){let s=new ae,o=n.index,a=n.attributes.position;for(let l=r.start,c=r.start+r.count;l<c;l++){let u=l;o&&(u=o.getX(u)),s.expandByPoint(ho.fromBufferAttribute(a,u))}r.boundingBox=s}return e.copy(r.boundingBox),e}getBoundingSphereAt(t,e){if(t>=this._geometryCount)return null;let n=this.geometry,r=this._geometryInfo[t];if(r.boundingSphere===null){let s=new ln;this.getBoundingBoxAt(t,qa),qa.getCenter(s.center);let o=n.index,a=n.attributes.position,l=0;for(let c=r.start,u=r.start+r.count;c<u;c++){let h=c;o&&(h=o.getX(h)),ho.fromBufferAttribute(a,h),l=Math.max(l,s.center.distanceToSquared(ho))}s.radius=Math.sqrt(l),r.boundingSphere=s}return e.copy(r.boundingSphere),e}setMatrixAt(t,e){this.validateInstanceId(t);let n=this._matricesTexture,r=this._matricesTexture.image.data;return e.toArray(r,t*16),n.needsUpdate=!0,this}getMatrixAt(t,e){return this.validateInstanceId(t),e.fromArray(this._matricesTexture.image.data,t*16)}setColorAt(t,e){return this.validateInstanceId(t),this._colorsTexture===null&&this._initColorsTexture(),e.toArray(this._colorsTexture.image.data,t*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(t,e){return this.validateInstanceId(t),e.fromArray(this._colorsTexture.image.data,t*4)}setVisibleAt(t,e){return this.validateInstanceId(t),this._instanceInfo[t].visible===e?this:(this._instanceInfo[t].visible=e,this._visibilityChanged=!0,this)}getVisibleAt(t){return this.validateInstanceId(t),this._instanceInfo[t].visible}setGeometryIdAt(t,e){return this.validateInstanceId(t),this.validateGeometryId(e),this._instanceInfo[t].geometryIndex=e,this}getGeometryIdAt(t){return this.validateInstanceId(t),this._instanceInfo[t].geometryIndex}getGeometryRangeAt(t,e={}){this.validateGeometryId(t);let n=this._geometryInfo[t];return e.vertexStart=n.vertexStart,e.vertexCount=n.vertexCount,e.reservedVertexCount=n.reservedVertexCount,e.indexStart=n.indexStart,e.indexCount=n.indexCount,e.reservedIndexCount=n.reservedIndexCount,e.start=n.start,e.count=n.count,e}setInstanceCount(t){let e=this._availableInstanceIds,n=this._instanceInfo;for(e.sort(Lh);e[e.length-1]===n.length-1;)n.pop(),e.pop();if(t<n.length)throw new Error(`BatchedMesh: Instance ids outside the range ${t} are being used. Cannot shrink instance count.`);let r=new Int32Array(t),s=new Int32Array(t);Er(this._multiDrawCounts,r),Er(this._multiDrawStarts,s),this._multiDrawCounts=r,this._multiDrawStarts=s,this._maxInstanceCount=t;let o=this._indirectTexture,a=this._matricesTexture,l=this._colorsTexture;o.dispose(),this._initIndirectTexture(),Er(o.image.data,this._indirectTexture.image.data),a.dispose(),this._initMatricesTexture(),Er(a.image.data,this._matricesTexture.image.data),l&&(l.dispose(),this._initColorsTexture(),Er(l.image.data,this._colorsTexture.image.data))}setGeometrySize(t,e){let n=[...this._geometryInfo].filter(a=>a.active);if(Math.max(...n.map(a=>a.vertexStart+a.reservedVertexCount))>t)throw new Error(`BatchedMesh: Geometry vertex values are being used outside the range ${e}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(l=>l.indexStart+l.reservedIndexCount))>e)throw new Error(`BatchedMesh: Geometry index values are being used outside the range ${e}. Cannot shrink further.`);let s=this.geometry;s.dispose(),this._maxVertexCount=t,this._maxIndexCount=e,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new ie,this._initializeGeometry(s));let o=this.geometry;s.index&&Er(s.index.array,o.index.array);for(let a in s.attributes)Er(s.attributes[a].array,o.attributes[a].array)}raycast(t,e){let n=this._instanceInfo,r=this._geometryInfo,s=this.matrixWorld,o=this.geometry;sn.material=this.material,sn.geometry.index=o.index,sn.geometry.attributes=o.attributes,sn.geometry.boundingBox===null&&(sn.geometry.boundingBox=new ae),sn.geometry.boundingSphere===null&&(sn.geometry.boundingSphere=new ln);for(let a=0,l=n.length;a<l;a++){if(!n[a].visible||!n[a].active)continue;let c=n[a].geometryIndex,u=r[c];sn.geometry.setDrawRange(u.start,u.count),this.getMatrixAt(a,sn.matrixWorld).premultiply(s),this.getBoundingBoxAt(c,sn.geometry.boundingBox),this.getBoundingSphereAt(c,sn.geometry.boundingSphere),sn.raycast(t,Ya);for(let h=0,f=Ya.length;h<f;h++){let d=Ya[h];d.object=this,d.batchId=a,e.push(d)}Ya.length=0}sn.material=null,sn.geometry.index=null,sn.geometry.attributes={},sn.geometry.setDrawRange(0,1/0)}copy(t){return super.copy(t),this.geometry=t.geometry.clone(),this.perObjectFrustumCulled=t.perObjectFrustumCulled,this.sortObjects=t.sortObjects,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this._geometryInfo=t._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox!==null?e.boundingBox.clone():null,boundingSphere:e.boundingSphere!==null?e.boundingSphere.clone():null})),this._instanceInfo=t._instanceInfo.map(e=>({...e})),this._availableInstanceIds=t._availableInstanceIds.slice(),this._availableGeometryIds=t._availableGeometryIds.slice(),this._nextIndexStart=t._nextIndexStart,this._nextVertexStart=t._nextVertexStart,this._geometryCount=t._geometryCount,this._maxInstanceCount=t._maxInstanceCount,this._maxVertexCount=t._maxVertexCount,this._maxIndexCount=t._maxIndexCount,this._geometryInitialized=t._geometryInitialized,this._multiDrawCounts=t._multiDrawCounts.slice(),this._multiDrawStarts=t._multiDrawStarts.slice(),this._indirectTexture=t._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=t._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=t._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null)}onBeforeRender(t,e,n,r,s){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;let o=r.getIndex(),a=o===null?1:o.array.BYTES_PER_ELEMENT,l=this._instanceInfo,c=this._multiDrawStarts,u=this._multiDrawCounts,h=this._geometryInfo,f=this.perObjectFrustumCulled,d=this._indirectTexture,g=d.image.data,y=n.isArrayCamera?v0:ud;f&&!n.isArrayCamera&&(vn.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),ud.setFromProjectionMatrix(vn,n.coordinateSystem,n.reversedDepth));let m=0;if(this.sortObjects){vn.copy(this.matrixWorld).invert(),ho.setFromMatrixPosition(n.matrixWorld).applyMatrix4(vn),fd.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(vn);for(let v=0,_=l.length;v<_;v++)if(l[v].visible&&l[v].active){let b=l[v].geometryIndex;this.getMatrixAt(v,vn),this.getBoundingSphereAt(b,wr).applyMatrix4(vn);let E=!1;if(f&&(E=!y.intersectsSphere(wr,n)),!E){let T=h[b],D=x0.subVectors(wr.center,ho).dot(fd);Uh.push(T.start,T.count,D,v)}}let p=Uh.list,x=this.customSort;x===null?p.sort(s.transparent?y0:g0):x.call(this,p,n);for(let v=0,_=p.length;v<_;v++){let b=p[v];c[m]=b.start*a,u[m]=b.count,g[m]=b.index,m++}Uh.reset()}else for(let p=0,x=l.length;p<x;p++)if(l[p].visible&&l[p].active){let v=l[p].geometryIndex,_=!1;if(f&&(this.getMatrixAt(p,vn),this.getBoundingSphereAt(v,wr).applyMatrix4(vn),_=!y.intersectsSphere(wr,n)),!_){let b=h[v];c[m]=b.start*a,u[m]=b.count,g[m]=p,m++}}d.needsUpdate=!0,this._multiDrawCount=m,this._visibilityChanged=!1}onBeforeShadow(t,e,n,r,s,o){this.onBeforeRender(t,null,r,s,o)}},qn=class extends Mn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Vt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},pl=new I,ml=new I,dd=new Wt,uo=new ni,Za=new ln,Nh=new I,pd=new I,ii=class extends Ze{constructor(t=new ie,e=new qn){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)pl.fromBufferAttribute(e,r-1),ml.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=pl.distanceTo(ml);t.setAttribute("lineDistance",new jt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Za.copy(n.boundingSphere),Za.applyMatrix4(r),Za.radius+=s,t.ray.intersectsSphere(Za)===!1)return;dd.copy(r).invert(),uo.copy(t.ray).applyMatrix4(dd);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){let d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let y=d,m=g-1;y<m;y+=c){let p=u.getX(y),x=u.getX(y+1),v=$a(this,t,uo,l,p,x,y);v&&e.push(v)}if(this.isLineLoop){let y=u.getX(g-1),m=u.getX(d),p=$a(this,t,uo,l,y,m,g-1);p&&e.push(p)}}else{let d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let y=d,m=g-1;y<m;y+=c){let p=$a(this,t,uo,l,y,y+1,y);p&&e.push(p)}if(this.isLineLoop){let y=$a(this,t,uo,l,g-1,d,g-1);y&&e.push(y)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function $a(i,t,e,n,r,s,o){let a=i.geometry.attributes.position;if(pl.fromBufferAttribute(a,r),ml.fromBufferAttribute(a,s),e.distanceSqToSegment(pl,ml,Nh,pd)>n)return;Nh.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Nh);if(!(c<t.near||c>t.far))return{distance:c,point:pd.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var md=new I,gd=new I,xi=class extends ii{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let r=0,s=e.count;r<s;r+=2)md.fromBufferAttribute(e,r),gd.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+md.distanceTo(gd);t.setAttribute("lineDistance",new jt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ms=class extends ii{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},ri=class extends Mn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},yd=new Wt,Zh=new ni,Ja=new ln,Ka=new I,Yn=class extends Ze{constructor(t=new ie,e=new ri){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ja.copy(n.boundingSphere),Ja.applyMatrix4(r),Ja.radius+=s,t.ray.intersectsSphere(Ja)===!1)return;yd.copy(r).invert(),Zh.copy(t.ray).applyMatrix4(yd);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,y=d;g<y;g++){let m=c.getX(g);Ka.fromBufferAttribute(h,m),_d(Ka,m,l,r,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,y=d;g<y;g++)Ka.fromBufferAttribute(h,g),_d(Ka,g,l,r,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function _d(i,t,e,n,r,s,o){let a=Zh.distanceSqToPoint(i);if(a<e){let l=new I;Zh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Ro=class extends mn{constructor(t,e,n=Vi,r,s,o,a=$e,l=$e,c,u=ps,h=1){if(u!==ps&&u!==Ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:h};super(f,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new _s(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Co=class extends mn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var Ss=class i extends ie{constructor(t=1,e=1,n=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;r=Math.floor(r),s=Math.floor(s);let u=[],h=[],f=[],d=[],g=0,y=[],m=n/2,p=0;x(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new jt(h,3)),this.setAttribute("normal",new jt(f,3)),this.setAttribute("uv",new jt(d,2));function x(){let _=new I,b=new I,E=0,T=(e-t)/n;for(let D=0;D<=s;D++){let S=[],M=D/s,A=M*(e-t)+t;for(let L=0;L<=r;L++){let F=L/r,O=F*l+a,H=Math.sin(O),V=Math.cos(O);b.x=A*H,b.y=-M*n+m,b.z=A*V,h.push(b.x,b.y,b.z),_.set(H,T,V).normalize(),f.push(_.x,_.y,_.z),d.push(F,1-M),S.push(g++)}y.push(S)}for(let D=0;D<r;D++)for(let S=0;S<s;S++){let M=y[S][D],A=y[S+1][D],L=y[S+1][D+1],F=y[S][D+1];(t>0||S!==0)&&(u.push(M,A,F),E+=3),(e>0||S!==s-1)&&(u.push(A,L,F),E+=3)}c.addGroup(p,E,0),p+=E}function v(_){let b=g,E=new ct,T=new I,D=0,S=_===!0?t:e,M=_===!0?1:-1;for(let L=1;L<=r;L++)h.push(0,m*M,0),f.push(0,M,0),d.push(.5,.5),g++;let A=g;for(let L=0;L<=r;L++){let O=L/r*l+a,H=Math.cos(O),V=Math.sin(O);T.x=S*V,T.y=m*M,T.z=S*H,h.push(T.x,T.y,T.z),f.push(0,M,0),E.x=H*.5+.5,E.y=V*.5*M+.5,d.push(E.x,E.y),g++}for(let L=0;L<r;L++){let F=b+L,O=A+L;_===!0?u.push(O,O+1,F):u.push(O+1,O,F),D+=3}c.addGroup(p,D,_===!0?1:2),p+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},gl=class i extends Ss{constructor(t=1,e=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Cn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,r=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),r=0,s=n.length,o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);let u=n[r],f=n[r+1]-u,d=(o-u)/f;return(r+d)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);let o=this.getPoint(r),a=this.getPoint(s),l=e||(o.isVector2?new ct:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new I,r=[],s=[],o=[],a=new I,l=new Wt;for(let d=0;d<=t;d++){let g=d/t;r[d]=this.getTangentAt(g,new I)}s[0]=new I,o[0]=new I;let c=Number.MAX_VALUE,u=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(r[d-1],r[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(qt(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(r[d],s[d])}if(e===!0){let d=Math.acos(qt(s[0].dot(s[t]),-1,1));d/=t,r[0].dot(a.crossVectors(s[0],s[t]))>0&&(d=-d);for(let g=1;g<=t;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],d*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},bs=class extends Cn{constructor(t=0,e=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ct){let n=e,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);let a=this.aStartAngle+t*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},yl=class extends bs{constructor(t,e,n,r,s,o){super(t,e,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function wu(){let i=0,t=0,e=0,n=0;function r(s,o,a,l){i=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let f=(o-s)/c-(a-s)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,d*=u,r(o,a,f,d)},calc:function(s){let o=s*s,a=o*s;return i+t*s+e*o+n*a}}}var ja=new I,Fh=new wu,Oh=new wu,Bh=new wu,_l=class extends Cn{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new I){let n=e,r=this.points,s=r.length,o=(s-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(ja.subVectors(r[0],r[1]).add(r[0]),c=ja);let h=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(ja.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=ja),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(h),d),y=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),Fh.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,y,m),Oh.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,y,m),Bh.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,y,m)}else this.curveType==="catmullrom"&&(Fh.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),Oh.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),Bh.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(Fh.calc(l),Oh.calc(l),Bh.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(new I().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function vd(i,t,e,n,r){let s=(n-t)*.5,o=(r-e)*.5,a=i*i,l=i*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*i+e}function S0(i,t){let e=1-i;return e*e*t}function b0(i,t){return 2*(1-i)*i*t}function w0(i,t){return i*i*t}function go(i,t,e,n){return S0(i,t)+b0(i,e)+w0(i,n)}function E0(i,t){let e=1-i;return e*e*e*t}function T0(i,t){let e=1-i;return 3*e*e*i*t}function A0(i,t){return 3*(1-i)*i*i*t}function R0(i,t){return i*i*i*t}function yo(i,t,e,n,r){return E0(i,t)+T0(i,e)+A0(i,n)+R0(i,r)}var Po=class extends Cn{constructor(t=new ct,e=new ct,n=new ct,r=new ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new ct){let n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(yo(t,r.x,s.x,o.x,a.x),yo(t,r.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},vl=class extends Cn{constructor(t=new I,e=new I,n=new I,r=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new I){let n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(yo(t,r.x,s.x,o.x,a.x),yo(t,r.y,s.y,o.y,a.y),yo(t,r.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Io=class extends Cn{constructor(t=new ct,e=new ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ct){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},xl=class extends Cn{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Do=class extends Cn{constructor(t=new ct,e=new ct,n=new ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ct){let n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(go(t,r.x,s.x,o.x),go(t,r.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ml=class extends Cn{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){let n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(go(t,r.x,s.x,o.x),go(t,r.y,s.y,o.y),go(t,r.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Lo=class extends Cn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ct){let n=e,r=this.points,s=(r.length-1)*t,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return n.set(vd(a,l.x,c.x,u.x,h.x),vd(a,l.y,c.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(r.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(new ct().fromArray(r))}return this}},$h=Object.freeze({__proto__:null,ArcCurve:yl,CatmullRomCurve3:_l,CubicBezierCurve:Po,CubicBezierCurve3:vl,EllipseCurve:bs,LineCurve:Io,LineCurve3:xl,QuadraticBezierCurve:Do,QuadraticBezierCurve3:Ml,SplineCurve:Lo}),Sl=class extends Cn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new $h[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=n){let o=r[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,r=this.curves.length;n<r;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let r=0,s=this.curves;r<s.length;r++){let o=s[r],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let r=t.curves[e];this.curves.push(new $h[r.type]().fromJSON(r))}return this}},Uo=class extends Sl{constructor(t){super(),this.type="Path",this.currentPoint=new ct,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Io(this.currentPoint.clone(),new ct(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,r){let s=new Do(this.currentPoint.clone(),new ct(t,e),new ct(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(t,e,n,r,s,o){let a=new Po(this.currentPoint.clone(),new ct(t,e),new ct(n,r),new ct(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Lo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,r,s,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,r,s,o),this}absarc(t,e,n,r,s,o){return this.absellipse(t,e,n,n,r,s,o),this}ellipse(t,e,n,r,s,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,r,s,o,a,l),this}absellipse(t,e,n,r,s,o,a,l){let c=new bs(t,e,n,r,s,o,a,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},nr=class extends Uo{constructor(t){super(t),this.uuid=Nr(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,r=this.holes.length;n<r;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let r=t.holes[e];this.holes.push(new Uo().fromJSON(r))}return this}};function C0(i,t,e=2){let n=t&&t.length,r=n?t[0]*e:i.length,s=vp(i,0,r,e,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n&&(s=U0(i,t,s,e)),i.length>80*e){a=1/0,l=1/0;let u=-1/0,h=-1/0;for(let f=e;f<r;f+=e){let d=i[f],g=i[f+1];d<a&&(a=d),g<l&&(l=g),d>u&&(u=d),g>h&&(h=g)}c=Math.max(u-a,h-l),c=c!==0?32767/c:0}return No(s,o,e,a,l,c,0),o}function vp(i,t,e,n,r){let s;if(r===X0(i,t,e,n)>0)for(let o=t;o<e;o+=n)s=xd(o/n|0,i[o],i[o+1],s);else for(let o=e-n;o>=t;o-=n)s=xd(o/n|0,i[o],i[o+1],s);return s&&ws(s,s.next)&&(Oo(s),s=s.next),s}function Ir(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ws(e,e.next)||De(e.prev,e,e.next)===0)){if(Oo(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function No(i,t,e,n,r,s,o){if(!i)return;!o&&s&&z0(i,n,r,s);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(s?I0(i,n,r,s):P0(i)){t.push(l.i,i.i,c.i),Oo(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=D0(Ir(i),t),No(i,t,e,n,r,s,2)):o===2&&L0(i,t,e,n,r,s):No(Ir(i),t,e,n,r,s,1);break}}}function P0(i){let t=i.prev,e=i,n=i.next;if(De(t,e,n)>=0)return!1;let r=t.x,s=e.x,o=n.x,a=t.y,l=e.y,c=n.y,u=Math.min(r,s,o),h=Math.min(a,l,c),f=Math.max(r,s,o),d=Math.max(a,l,c),g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=d&&fo(r,a,s,l,o,c,g.x,g.y)&&De(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function I0(i,t,e,n){let r=i.prev,s=i,o=i.next;if(De(r,s,o)>=0)return!1;let a=r.x,l=s.x,c=o.x,u=r.y,h=s.y,f=o.y,d=Math.min(a,l,c),g=Math.min(u,h,f),y=Math.max(a,l,c),m=Math.max(u,h,f),p=Jh(d,g,t,e,n),x=Jh(y,m,t,e,n),v=i.prevZ,_=i.nextZ;for(;v&&v.z>=p&&_&&_.z<=x;){if(v.x>=d&&v.x<=y&&v.y>=g&&v.y<=m&&v!==r&&v!==o&&fo(a,u,l,h,c,f,v.x,v.y)&&De(v.prev,v,v.next)>=0||(v=v.prevZ,_.x>=d&&_.x<=y&&_.y>=g&&_.y<=m&&_!==r&&_!==o&&fo(a,u,l,h,c,f,_.x,_.y)&&De(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;v&&v.z>=p;){if(v.x>=d&&v.x<=y&&v.y>=g&&v.y<=m&&v!==r&&v!==o&&fo(a,u,l,h,c,f,v.x,v.y)&&De(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;_&&_.z<=x;){if(_.x>=d&&_.x<=y&&_.y>=g&&_.y<=m&&_!==r&&_!==o&&fo(a,u,l,h,c,f,_.x,_.y)&&De(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function D0(i,t){let e=i;do{let n=e.prev,r=e.next.next;!ws(n,r)&&Mp(n,e,e.next,r)&&Fo(n,r)&&Fo(r,n)&&(t.push(n.i,e.i,r.i),Oo(e),Oo(e.next),e=i=r),e=e.next}while(e!==i);return Ir(e)}function L0(i,t,e,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&H0(o,a)){let l=Sp(o,a);o=Ir(o,o.next),l=Ir(l,l.next),No(o,t,e,n,r,s,0),No(l,t,e,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function U0(i,t,e,n){let r=[];for(let s=0,o=t.length;s<o;s++){let a=t[s]*n,l=s<o-1?t[s+1]*n:i.length,c=vp(i,a,l,n,!1);c===c.next&&(c.steiner=!0),r.push(V0(c))}r.sort(N0);for(let s=0;s<r.length;s++)e=F0(r[s],e);return e}function N0(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),r=(t.next.y-t.y)/(t.next.x-t.x);e=n-r}return e}function F0(i,t){let e=O0(i,t);if(!e)return t;let n=Sp(e,i);return Ir(n,n.next),Ir(e,e.next)}function O0(i,t){let e=t,n=i.x,r=i.y,s=-1/0,o;if(ws(i,e))return e;do{if(ws(i,e.next))return e.next;if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){let h=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=n&&h>s&&(s=h,o=e.x<e.next.x?e:e.next,h===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,u=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&xp(r<c?n:s,r,l,c,r<c?s:n,r,e.x,e.y)){let h=Math.abs(r-e.y)/(n-e.x);Fo(e,i)&&(h<u||h===u&&(e.x>o.x||e.x===o.x&&B0(o,e)))&&(o=e,u=h)}e=e.next}while(e!==a);return o}function B0(i,t){return De(i.prev,i,t.prev)<0&&De(t.next,i,i.next)<0}function z0(i,t,e,n){let r=i;do r.z===0&&(r.z=Jh(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,k0(r)}function k0(i){let t,e=1;do{let n=i,r;i=null;let s=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(r=n,n=n.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=o}s.nextZ=null,e*=2}while(t>1);return i}function Jh(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function V0(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function xp(i,t,e,n,r,s,o,a){return(r-o)*(t-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(r-o)*(n-a)}function fo(i,t,e,n,r,s,o,a){return!(i===o&&t===a)&&xp(i,t,e,n,r,s,o,a)}function H0(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!G0(i,t)&&(Fo(i,t)&&Fo(t,i)&&W0(i,t)&&(De(i.prev,i,t.prev)||De(i,t.prev,t))||ws(i,t)&&De(i.prev,i,i.next)>0&&De(t.prev,t,t.next)>0)}function De(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ws(i,t){return i.x===t.x&&i.y===t.y}function Mp(i,t,e,n){let r=tl(De(i,t,e)),s=tl(De(i,t,n)),o=tl(De(e,n,i)),a=tl(De(e,n,t));return!!(r!==s&&o!==a||r===0&&Qa(i,e,t)||s===0&&Qa(i,n,t)||o===0&&Qa(e,i,n)||a===0&&Qa(e,t,n))}function Qa(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function tl(i){return i>0?1:i<0?-1:0}function G0(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Mp(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Fo(i,t){return De(i.prev,i,i.next)<0?De(i,t,i.next)>=0&&De(i,i.prev,t)>=0:De(i,t,i.prev)<0||De(i,i.next,t)<0}function W0(i,t){let e=i,n=!1,r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Sp(i,t){let e=Kh(i.i,i.x,i.y),n=Kh(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function xd(i,t,e,n){let r=Kh(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Oo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Kh(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function X0(i,t,e,n){let r=0;for(let s=t,o=e-n;s<e;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}var jh=class{static triangulate(t,e,n=2){return C0(t,e,n)}},yi=class i{static area(t){let e=t.length,n=0;for(let r=e-1,s=0;s<e;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],r=[],s=[];Md(t),Sd(n,t);let o=t.length;e.forEach(Md);for(let l=0;l<e.length;l++)r.push(o),o+=e[l].length,Sd(n,e[l]);let a=jh.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function Md(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Sd(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Bo=class i extends ie{constructor(t=new nr([new ct(.5,.5),new ct(-.5,.5),new ct(-.5,-.5),new ct(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,r=[],s=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new jt(r,3)),this.setAttribute("uv",new jt(s,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,x=e.UVGenerator!==void 0?e.UVGenerator:q0,v,_=!1,b,E,T,D;p&&(v=p.getSpacedPoints(u),_=!0,f=!1,b=p.computeFrenetFrames(u,!1),E=new I,T=new I,D=new I),f||(m=0,d=0,g=0,y=0);let S=a.extractPoints(c),M=S.shape,A=S.holes;if(!yi.isClockWise(M)){M=M.reverse();for(let z=0,X=A.length;z<X;z++){let J=A[z];yi.isClockWise(J)&&(A[z]=J.reverse())}}function F(z){let J=10000000000000001e-36,k=z[0];for(let ft=1;ft<=z.length;ft++){let st=ft%z.length,ht=z[st],Dt=ht.x-k.x,vt=ht.y-k.y,C=Dt*Dt+vt*vt,w=Math.max(Math.abs(ht.x),Math.abs(ht.y),Math.abs(k.x),Math.abs(k.y)),G=J*w*w;if(C<=G){z.splice(st,1),ft--;continue}k=ht}}F(M),A.forEach(F);let O=A.length,H=M;for(let z=0;z<O;z++){let X=A[z];M=M.concat(X)}function V(z,X,J){return X||console.error("THREE.ExtrudeGeometry: vec does not exist"),z.clone().addScaledVector(X,J)}let rt=M.length;function K(z,X,J){let k,ft,st,ht=z.x-X.x,Dt=z.y-X.y,vt=J.x-z.x,C=J.y-z.y,w=ht*ht+Dt*Dt,G=ht*C-Dt*vt;if(Math.abs(G)>Number.EPSILON){let et=Math.sqrt(w),ot=Math.sqrt(vt*vt+C*C),nt=X.x-Dt/et,bt=X.y+ht/et,gt=J.x-C/ot,Rt=J.y+vt/ot,Lt=((gt-nt)*C-(Rt-bt)*vt)/(ht*C-Dt*vt);k=nt+ht*Lt-z.x,ft=bt+Dt*Lt-z.y;let dt=k*k+ft*ft;if(dt<=2)return new ct(k,ft);st=Math.sqrt(dt/2)}else{let et=!1;ht>Number.EPSILON?vt>Number.EPSILON&&(et=!0):ht<-Number.EPSILON?vt<-Number.EPSILON&&(et=!0):Math.sign(Dt)===Math.sign(C)&&(et=!0),et?(k=-Dt,ft=ht,st=Math.sqrt(w)):(k=ht,ft=Dt,st=Math.sqrt(w/2))}return new ct(k/st,ft/st)}let lt=[];for(let z=0,X=H.length,J=X-1,k=z+1;z<X;z++,J++,k++)J===X&&(J=0),k===X&&(k=0),lt[z]=K(H[z],H[J],H[k]);let _t=[],St,Ft=lt.concat();for(let z=0,X=O;z<X;z++){let J=A[z];St=[];for(let k=0,ft=J.length,st=ft-1,ht=k+1;k<ft;k++,st++,ht++)st===ft&&(st=0),ht===ft&&(ht=0),St[k]=K(J[k],J[st],J[ht]);_t.push(St),Ft=Ft.concat(St)}let Bt;if(m===0)Bt=yi.triangulateShape(H,A);else{let z=[],X=[];for(let J=0;J<m;J++){let k=J/m,ft=d*Math.cos(k*Math.PI/2),st=g*Math.sin(k*Math.PI/2)+y;for(let ht=0,Dt=H.length;ht<Dt;ht++){let vt=V(H[ht],lt[ht],st);Z(vt.x,vt.y,-ft),k===0&&z.push(vt)}for(let ht=0,Dt=O;ht<Dt;ht++){let vt=A[ht];St=_t[ht];let C=[];for(let w=0,G=vt.length;w<G;w++){let et=V(vt[w],St[w],st);Z(et.x,et.y,-ft),k===0&&C.push(et)}k===0&&X.push(C)}}Bt=yi.triangulateShape(z,X)}let Kt=Bt.length,Ot=g+y;for(let z=0;z<rt;z++){let X=f?V(M[z],Ft[z],Ot):M[z];_?(T.copy(b.normals[0]).multiplyScalar(X.x),E.copy(b.binormals[0]).multiplyScalar(X.y),D.copy(v[0]).add(T).add(E),Z(D.x,D.y,D.z)):Z(X.x,X.y,0)}for(let z=1;z<=u;z++)for(let X=0;X<rt;X++){let J=f?V(M[X],Ft[X],Ot):M[X];_?(T.copy(b.normals[z]).multiplyScalar(J.x),E.copy(b.binormals[z]).multiplyScalar(J.y),D.copy(v[z]).add(T).add(E),Z(D.x,D.y,D.z)):Z(J.x,J.y,h/u*z)}for(let z=m-1;z>=0;z--){let X=z/m,J=d*Math.cos(X*Math.PI/2),k=g*Math.sin(X*Math.PI/2)+y;for(let ft=0,st=H.length;ft<st;ft++){let ht=V(H[ft],lt[ft],k);Z(ht.x,ht.y,h+J)}for(let ft=0,st=A.length;ft<st;ft++){let ht=A[ft];St=_t[ft];for(let Dt=0,vt=ht.length;Dt<vt;Dt++){let C=V(ht[Dt],St[Dt],k);_?Z(C.x,C.y+v[u-1].y,v[u-1].x+J):Z(C.x,C.y,h+J)}}}N(),U();function N(){let z=r.length/3;if(f){let X=0,J=rt*X;for(let k=0;k<Kt;k++){let ft=Bt[k];$(ft[2]+J,ft[1]+J,ft[0]+J)}X=u+m*2,J=rt*X;for(let k=0;k<Kt;k++){let ft=Bt[k];$(ft[0]+J,ft[1]+J,ft[2]+J)}}else{for(let X=0;X<Kt;X++){let J=Bt[X];$(J[2],J[1],J[0])}for(let X=0;X<Kt;X++){let J=Bt[X];$(J[0]+rt*u,J[1]+rt*u,J[2]+rt*u)}}n.addGroup(z,r.length/3-z,0)}function U(){let z=r.length/3,X=0;W(H,X),X+=H.length;for(let J=0,k=A.length;J<k;J++){let ft=A[J];W(ft,X),X+=ft.length}n.addGroup(z,r.length/3-z,1)}function W(z,X){let J=z.length;for(;--J>=0;){let k=J,ft=J-1;ft<0&&(ft=z.length-1);for(let st=0,ht=u+m*2;st<ht;st++){let Dt=rt*st,vt=rt*(st+1),C=X+k+Dt,w=X+ft+Dt,G=X+ft+vt,et=X+k+vt;j(C,w,G,et)}}}function Z(z,X,J){l.push(z),l.push(X),l.push(J)}function $(z,X,J){it(z),it(X),it(J);let k=r.length/3,ft=x.generateTopUV(n,r,k-3,k-2,k-1);P(ft[0]),P(ft[1]),P(ft[2])}function j(z,X,J,k){it(z),it(X),it(k),it(X),it(J),it(k);let ft=r.length/3,st=x.generateSideWallUV(n,r,ft-6,ft-3,ft-2,ft-1);P(st[0]),P(st[1]),P(st[3]),P(st[1]),P(st[2]),P(st[3])}function it(z){r.push(l[z*3+0]),r.push(l[z*3+1]),r.push(l[z*3+2])}function P(z){s.push(z.x),s.push(z.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Y0(e,n,t)}static fromJSON(t,e){let n=[];for(let s=0,o=t.shapes.length;s<o;s++){let a=e[t.shapes[s]];n.push(a)}let r=t.options.extrudePath;return r!==void 0&&(t.options.extrudePath=new $h[r.type]().fromJSON(r)),new i(n,t.options)}},q0={generateTopUV:function(i,t,e,n,r){let s=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[r*3],u=t[r*3+1];return[new ct(s,o),new ct(a,l),new ct(c,u)]},generateSideWallUV:function(i,t,e,n,r,s){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],h=t[n*3+2],f=t[r*3],d=t[r*3+1],g=t[r*3+2],y=t[s*3],m=t[s*3+1],p=t[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new ct(o,1-l),new ct(c,1-h),new ct(f,1-g),new ct(y,1-p)]:[new ct(a,1-l),new ct(u,1-h),new ct(d,1-g),new ct(m,1-p)]}};function Y0(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){let s=i[n];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var zo=class i extends ie{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};let s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,h=t/a,f=e/l,d=[],g=[],y=[],m=[];for(let p=0;p<u;p++){let x=p*f-o;for(let v=0;v<c;v++){let _=v*h-s;g.push(_,-x,0),y.push(0,0,1),m.push(v/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<a;x++){let v=x+c*p,_=x+c*(p+1),b=x+1+c*(p+1),E=x+1+c*p;d.push(v,_,E),d.push(_,b,E)}this.setIndex(d),this.setAttribute("position",new jt(g,3)),this.setAttribute("normal",new jt(y,3)),this.setAttribute("uv",new jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var ko=class i extends ie{constructor(t=new nr([new ct(0,.5),new ct(-.5,-.5),new ct(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],r=[],s=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let u=0;u<t.length;u++)c(t[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new jt(r,3)),this.setAttribute("normal",new jt(s,3)),this.setAttribute("uv",new jt(o,2));function c(u){let h=r.length/3,f=u.extractPoints(e),d=f.shape,g=f.holes;yi.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){let x=g[m];yi.isClockWise(x)===!0&&(g[m]=x.reverse())}let y=yi.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){let x=g[m];d=d.concat(x)}for(let m=0,p=d.length;m<p;m++){let x=d[m];r.push(x.x,x.y,0),s.push(0,0,1),o.push(x.x,x.y)}for(let m=0,p=y.length;m<p;m++){let x=y[m],v=x[0]+h,_=x[1]+h,b=x[2]+h;n.push(v,_,b),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Z0(e,t)}static fromJSON(t,e){let n=[];for(let r=0,s=t.shapes.length;r<s;r++){let o=e[t.shapes[r]];n.push(o)}return new i(n,t.curveSegments)}};function Z0(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let r=i[e];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t}var ir=class extends Mn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tc,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Mi=class extends Mn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Vt(16777215),this.specular=new Vt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tc,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=Hl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var bl=class extends Mn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},wl=class extends Mn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function el(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function $0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Dr=class{constructor(t,e,n,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,r=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<r)){for(let a=n+2;;){if(r===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=e[++n],t<r)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(r=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=t*r;for(let o=0;o!==r;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},El=class extends Dr{constructor(t,e,n,r){super(t,e,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Hh,endingEnd:Hh}}intervalChanged_(t,e,n){let r=this.parameterPositions,s=t-2,o=t+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Gh:s=t,a=2*e-n;break;case Wh:s=r.length-2,a=e+r[s]-r[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Gh:o=t,l=2*n-e;break;case Wh:o=1,l=n+r[1]-r[0];break;default:o=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-e)/(r-e),y=g*g,m=y*g,p=-f*m+2*f*y-f*g,x=(1+f)*m+(-1.5-2*f)*y+(-.5+f)*g+1,v=(-1-d)*m+(1.5+d)*y+.5*g,_=d*m-d*y;for(let b=0;b!==a;++b)s[b]=p*o[u+b]+x*o[c+b]+v*o[l+b]+_*o[h+b];return s}},Tl=class extends Dr{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=(n-e)/(r-e),h=1-u;for(let f=0;f!==a;++f)s[f]=o[c+f]*h+o[l+f]*u;return s}},Al=class extends Dr{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t){return this.copySampleValue_(t-1)}},Pn=class{constructor(t,e,n,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=el(e,this.TimeBufferType),this.values=el(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:el(t.times,Array),values:el(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(n.interpolation=r)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Al(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Tl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new El(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case _o:e=this.InterpolantFactoryMethodDiscrete;break;case al:e=this.InterpolantFactoryMethodLinear;break;case rl:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return _o;case this.InterpolantFactoryMethodLinear:return al;case this.InterpolantFactoryMethodSmooth:return rl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]*=t}return this}trim(t,e){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(r!==void 0&&$0(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===rl,s=t.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=t[a],u=t[a+1];if(c!==u&&(a!==1||c!==t[0]))if(r)l=!0;else{let h=a*n,f=h-n,d=h+n;for(let g=0;g!==n;++g){let y=e[h+g];if(y!==e[f+g]||y!==e[d+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let h=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[h+d]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,r=new n(this.name,t,e);return r.createInterpolant=this.createInterpolant,r}};Pn.prototype.ValueTypeName="";Pn.prototype.TimeBufferType=Float32Array;Pn.prototype.ValueBufferType=Float32Array;Pn.prototype.DefaultInterpolation=al;var rr=class extends Pn{constructor(t,e,n){super(t,e,n)}};rr.prototype.ValueTypeName="bool";rr.prototype.ValueBufferType=Array;rr.prototype.DefaultInterpolation=_o;rr.prototype.InterpolantFactoryMethodLinear=void 0;rr.prototype.InterpolantFactoryMethodSmooth=void 0;var Rl=class extends Pn{constructor(t,e,n,r){super(t,e,n,r)}};Rl.prototype.ValueTypeName="color";var Cl=class extends Pn{constructor(t,e,n,r){super(t,e,n,r)}};Cl.prototype.ValueTypeName="number";var Pl=class extends Dr{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(r-e),c=t*a;for(let u=c+a;c!==u;c+=4)Wn.slerpFlat(s,0,o,c-a,o,c,l);return s}},Vo=class extends Pn{constructor(t,e,n,r){super(t,e,n,r)}InterpolantFactoryMethodLinear(t){return new Pl(this.times,this.values,this.getValueSize(),t)}};Vo.prototype.ValueTypeName="quaternion";Vo.prototype.InterpolantFactoryMethodSmooth=void 0;var sr=class extends Pn{constructor(t,e,n){super(t,e,n)}};sr.prototype.ValueTypeName="string";sr.prototype.ValueBufferType=Array;sr.prototype.DefaultInterpolation=_o;sr.prototype.InterpolantFactoryMethodLinear=void 0;sr.prototype.InterpolantFactoryMethodSmooth=void 0;var Il=class extends Pn{constructor(t,e,n,r){super(t,e,n,r)}};Il.prototype.ValueTypeName="vector";var ds={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Dl=class{constructor(t,e,n){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},bp=new Dl,Sn=class{constructor(t){this.manager=t!==void 0?t:bp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Sn.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ui={},Qh=class extends Error{constructor(t,e){super(t),this.response=e}},Bi=class extends Sn{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,r){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=ds.get(`file:${t}`);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(Ui[t]!==void 0){Ui[t].push({onLoad:e,onProgress:n,onError:r});return}Ui[t]=[],Ui[t].push({onLoad:e,onProgress:n,onError:r});let o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=Ui[t],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0,y=0,m=new ReadableStream({start(p){x();function x(){h.read().then(({done:v,value:_})=>{if(v)p.close();else{y+=_.byteLength;let b=new ProgressEvent("progress",{lengthComputable:g,loaded:y,total:d});for(let E=0,T=u.length;E<T;E++){let D=u[E];D.onProgress&&D.onProgress(b)}p.enqueue(_),x()}},v=>{p.error(v)})}}});return new Response(m)}else throw new Qh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{ds.add(`file:${t}`,c);let u=Ui[t];delete Ui[t];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{let u=Ui[t];if(u===void 0)throw this.manager.itemError(t),c;delete Ui[t];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onError&&d.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var as=new WeakMap,Ll=class extends Sn{constructor(t){super(t)}load(t,e,n,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=this,o=ds.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0);else{let h=as.get(o);h===void 0&&(h=[],as.set(o,h)),h.push({onLoad:e,onError:r})}return o}let a=gs("img");function l(){u(),e&&e(this);let h=as.get(this)||[];for(let f=0;f<h.length;f++){let d=h[f];d.onLoad&&d.onLoad(this)}as.delete(this),s.manager.itemEnd(t)}function c(h){u(),r&&r(h),ds.remove(`image:${t}`);let f=as.get(this)||[];for(let d=0;d<f.length;d++){let g=f[d];g.onError&&g.onError(h)}as.delete(this),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),ds.add(`image:${t}`,a),s.manager.itemStart(t),a.src=t,a}};var Ho=class extends Sn{constructor(t){super(t)}load(t,e,n,r){let s=new mn,o=new Ll(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,r),s}},Go=class extends Ze{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Vt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}};var zh=new Wt,bd=new I,wd=new I,tu=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.mapType=oi,this.map=null,this.mapPass=null,this.matrix=new Wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new er,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new Le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;bd.setFromMatrixPosition(t.matrixWorld),e.position.copy(bd),wd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(wd),e.updateMatrixWorld(),zh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zh,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(zh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Wo=class extends wo{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-t,o=n+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},eu=class extends tu{constructor(){super(new Wo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Es=class extends Go{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ze.DEFAULT_UP),this.updateMatrix(),this.target=new Ze,this.shadow=new eu}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Xo=class extends Go{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Ul=class extends on{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Eu="\\[\\]\\.:\\/",J0=new RegExp("["+Eu+"]","g"),Tu="[^"+Eu+"]",K0="[^"+Eu.replace("\\.","")+"]",j0=/((?:WC+[\/:])*)/.source.replace("WC",Tu),Q0=/(WCOD+)?/.source.replace("WCOD",K0),ty=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Tu),ey=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Tu),ny=new RegExp("^"+j0+Q0+ty+ey+"$"),iy=["material","materials","bones","map"],nu=class{constructor(t,e,n){let r=n||Te.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Te=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(J0,"")}static parseTrackName(t){let e=ny.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);iy.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},r=n(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)t[e++]=n[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,r=e.propertyName,s=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[r];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Te.Composite=nu;Te.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Te.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Te.prototype.GetterByBindingType=[Te.prototype._getValue_direct,Te.prototype._getValue_array,Te.prototype._getValue_arrayElement,Te.prototype._getValue_toArray];Te.prototype.SetterByBindingTypeAndVersioning=[[Te.prototype._setValue_direct,Te.prototype._setValue_direct_setNeedsUpdate,Te.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_array,Te.prototype._setValue_array_setNeedsUpdate,Te.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_arrayElement,Te.prototype._setValue_arrayElement_setNeedsUpdate,Te.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_fromArray,Te.prototype._setValue_fromArray_setNeedsUpdate,Te.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var fb=new Float32Array(1);var Ed=new Wt,qo=class{constructor(t,e,n=0,r=1/0){this.ray=new ni(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new vs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Ed.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ed),this}intersectObject(t,e=!0,n=[]){return iu(t,this,n,e),n.sort(Td),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)iu(t[r],this,n,e);return n.sort(Td),n}};function Td(i,t){return i.distance-t.distance}function iu(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let o=0,a=s.length;o<a;o++)iu(s[o],t,e,!0)}}var Ts=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=qt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(qt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Ad=new I,nl=new I,ls=new I,cs=new I,kh=new I,ry=new I,sy=new I,gn=class{constructor(t=new I,e=new I){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Ad.subVectors(t,this.start),nl.subVectors(this.end,this.start);let n=nl.dot(nl),s=nl.dot(Ad)/n;return e&&(s=qt(s,0,1)),s}closestPointToPoint(t,e,n){let r=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(r).add(this.start)}distanceSqToLine3(t,e=ry,n=sy){let r=10000000000000001e-32,s,o,a=this.start,l=t.start,c=this.end,u=t.end;ls.subVectors(c,a),cs.subVectors(u,l),kh.subVectors(a,l);let h=ls.dot(ls),f=cs.dot(cs),d=cs.dot(kh);if(h<=r&&f<=r)return e.copy(a),n.copy(l),e.sub(n),e.dot(e);if(h<=r)s=0,o=d/f,o=qt(o,0,1);else{let g=ls.dot(kh);if(f<=r)o=0,s=qt(-g/h,0,1);else{let y=ls.dot(cs),m=h*f-y*y;m!==0?s=qt((y*d-g*f)/m,0,1):s=0,o=(y*s+d)/f,o<0?(o=0,s=qt(-g/h,0,1)):o>1&&(o=1,s=qt((y-g)/h,0,1))}}return e.copy(a).add(ls.multiplyScalar(s)),n.copy(l).add(cs.multiplyScalar(o)),e.sub(n),e.dot(e)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};var Yo=class extends xi{constructor(t=10,e=10,n=4473924,r=8947848){n=new Vt(n),r=new Vt(r);let s=e/2,o=t/e,a=t/2,l=[],c=[];for(let f=0,d=0,g=-a;f<=e;f++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);let y=f===s?n:r;y.toArray(c,d),d+=3,y.toArray(c,d),d+=3,y.toArray(c,d),d+=3,y.toArray(c,d),d+=3}let u=new ie;u.setAttribute("position",new jt(l,3)),u.setAttribute("color",new jt(c,3));let h=new qn({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};var Rd=new I,il,Vh,Zo=class extends Ze{constructor(t=new I(0,0,1),e=new I(0,0,0),n=1,r=16776960,s=n*.2,o=s*.2){super(),this.type="ArrowHelper",il===void 0&&(il=new ie,il.setAttribute("position",new jt([0,0,0,0,1,0],3)),Vh=new gl(.5,1,5,1),Vh.translate(0,-.5,0)),this.position.copy(e),this.line=new ii(il,new qn({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new se(Vh,new Oi({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(n,s,o)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{Rd.set(t.z,0,-t.x).normalize();let e=Math.acos(t.y);this.quaternion.setFromAxisAngle(Rd,e)}}setLength(t,e=t*.2,n=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(n,e,n),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}};var $o=class extends _i{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function Au(i,t,e,n){let r=oy(n);switch(e){case pu:return i*t;case gu:return i*t/r.components*r.byteLength;case jo:return i*t/r.components*r.byteLength;case yu:return i*t*2/r.components*r.byteLength;case Jl:return i*t*2/r.components*r.byteLength;case mu:return i*t*3/r.components*r.byteLength;case xn:return i*t*4/r.components*r.byteLength;case Kl:return i*t*4/r.components*r.byteLength;case Qo:case ta:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ea:case na:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ql:case ec:return Math.max(i,16)*Math.max(t,8)/4;case jl:case tc:return Math.max(i,8)*Math.max(t,8)/2;case nc:case ic:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case rc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case sc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case oc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ac:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case lc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case cc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case hc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case uc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case fc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case dc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case pc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case mc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case gc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case yc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case _c:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case vc:case xc:case Mc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Sc:case bc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case wc:case Ec:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function oy(i){switch(i){case oi:case hu:return{byteLength:1,components:1};case As:case uu:case Rs:return{byteLength:2,components:1};case Zl:case $l:return{byteLength:2,components:4};case Vi:case Yl:case Gn:return{byteLength:4,components:1};case fu:case du:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Yp(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function ay(i){let t=new WeakMap;function e(a,l){let c=a.array,u=a.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){let g=h[f],y=h[d];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++f,h[f]=y)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){let y=h[d];i.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var ly=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cy=`#ifdef USE_ALPHAHASH
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
#endif`,hy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,uy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,py=`#ifdef USE_AOMAP
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
#endif`,my=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gy=`#ifdef USE_BATCHING
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
#endif`,yy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_y=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,My=`#ifdef USE_IRIDESCENCE
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
#endif`,Sy=`#ifdef USE_BUMPMAP
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
#endif`,by=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,wy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ey=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ty=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ay=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ry=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Cy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Py=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Iy=`#define PI 3.141592653589793
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
} // validated`,Dy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ly=`vec3 transformedNormal = objectNormal;
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
#endif`,Uy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ny=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Oy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,By="gl_FragColor = linearToOutputTexel( gl_FragColor );",zy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ky=`#ifdef USE_ENVMAP
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
#endif`,Vy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Hy=`#ifdef USE_ENVMAP
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
#endif`,Gy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wy=`#ifdef USE_ENVMAP
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
#endif`,Xy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$y=`#ifdef USE_GRADIENTMAP
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
}`,Jy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ky=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qy=`uniform bool receiveShadow;
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
#endif`,t_=`#ifdef USE_ENVMAP
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
#endif`,e_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,n_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,i_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,r_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,s_=`PhysicalMaterial material;
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
#endif`,o_=`struct PhysicalMaterial {
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
}`,a_=`
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
#endif`,l_=`#if defined( RE_IndirectDiffuse )
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
#endif`,c_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,h_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,u_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,f_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,d_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,p_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,m_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,g_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,y_=`#if defined( USE_POINTS_UV )
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
#endif`,__=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,v_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,x_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,M_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,S_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,b_=`#ifdef USE_MORPHTARGETS
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
#endif`,w_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,E_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,T_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,A_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,R_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,C_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,P_=`#ifdef USE_NORMALMAP
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
#endif`,I_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,D_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,L_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,U_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,N_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,F_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,O_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,B_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,z_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,k_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,V_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,H_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,G_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,W_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,X_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,q_=`float getShadowMask() {
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
}`,Y_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Z_=`#ifdef USE_SKINNING
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
#endif`,$_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,J_=`#ifdef USE_SKINNING
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
#endif`,K_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,j_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Q_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ev=`#ifdef USE_TRANSMISSION
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
#endif`,nv=`#ifdef USE_TRANSMISSION
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
#endif`,iv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ov=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,av=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lv=`uniform sampler2D t2D;
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
}`,cv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,uv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dv=`#include <common>
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
}`,pv=`#if DEPTH_PACKING == 3200
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
}`,mv=`#define DISTANCE
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
}`,gv=`#define DISTANCE
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
}`,yv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_v=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vv=`uniform float scale;
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
}`,xv=`uniform vec3 diffuse;
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
}`,Mv=`#include <common>
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
}`,Sv=`uniform vec3 diffuse;
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
}`,bv=`#define LAMBERT
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
}`,wv=`#define LAMBERT
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
}`,Ev=`#define MATCAP
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
}`,Tv=`#define MATCAP
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
}`,Av=`#define NORMAL
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
}`,Rv=`#define NORMAL
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
}`,Cv=`#define PHONG
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
}`,Pv=`#define PHONG
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
}`,Iv=`#define STANDARD
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
}`,Dv=`#define STANDARD
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
}`,Lv=`#define TOON
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
}`,Uv=`#define TOON
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
}`,Nv=`uniform float size;
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
}`,Fv=`uniform vec3 diffuse;
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
}`,Ov=`#include <common>
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
}`,Bv=`uniform vec3 color;
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
}`,zv=`uniform float rotation;
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
}`,kv=`uniform vec3 diffuse;
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
}`,Jt={alphahash_fragment:ly,alphahash_pars_fragment:cy,alphamap_fragment:hy,alphamap_pars_fragment:uy,alphatest_fragment:fy,alphatest_pars_fragment:dy,aomap_fragment:py,aomap_pars_fragment:my,batching_pars_vertex:gy,batching_vertex:yy,begin_vertex:_y,beginnormal_vertex:vy,bsdfs:xy,iridescence_fragment:My,bumpmap_pars_fragment:Sy,clipping_planes_fragment:by,clipping_planes_pars_fragment:wy,clipping_planes_pars_vertex:Ey,clipping_planes_vertex:Ty,color_fragment:Ay,color_pars_fragment:Ry,color_pars_vertex:Cy,color_vertex:Py,common:Iy,cube_uv_reflection_fragment:Dy,defaultnormal_vertex:Ly,displacementmap_pars_vertex:Uy,displacementmap_vertex:Ny,emissivemap_fragment:Fy,emissivemap_pars_fragment:Oy,colorspace_fragment:By,colorspace_pars_fragment:zy,envmap_fragment:ky,envmap_common_pars_fragment:Vy,envmap_pars_fragment:Hy,envmap_pars_vertex:Gy,envmap_physical_pars_fragment:t_,envmap_vertex:Wy,fog_vertex:Xy,fog_pars_vertex:qy,fog_fragment:Yy,fog_pars_fragment:Zy,gradientmap_pars_fragment:$y,lightmap_pars_fragment:Jy,lights_lambert_fragment:Ky,lights_lambert_pars_fragment:jy,lights_pars_begin:Qy,lights_toon_fragment:e_,lights_toon_pars_fragment:n_,lights_phong_fragment:i_,lights_phong_pars_fragment:r_,lights_physical_fragment:s_,lights_physical_pars_fragment:o_,lights_fragment_begin:a_,lights_fragment_maps:l_,lights_fragment_end:c_,logdepthbuf_fragment:h_,logdepthbuf_pars_fragment:u_,logdepthbuf_pars_vertex:f_,logdepthbuf_vertex:d_,map_fragment:p_,map_pars_fragment:m_,map_particle_fragment:g_,map_particle_pars_fragment:y_,metalnessmap_fragment:__,metalnessmap_pars_fragment:v_,morphinstance_vertex:x_,morphcolor_vertex:M_,morphnormal_vertex:S_,morphtarget_pars_vertex:b_,morphtarget_vertex:w_,normal_fragment_begin:E_,normal_fragment_maps:T_,normal_pars_fragment:A_,normal_pars_vertex:R_,normal_vertex:C_,normalmap_pars_fragment:P_,clearcoat_normal_fragment_begin:I_,clearcoat_normal_fragment_maps:D_,clearcoat_pars_fragment:L_,iridescence_pars_fragment:U_,opaque_fragment:N_,packing:F_,premultiplied_alpha_fragment:O_,project_vertex:B_,dithering_fragment:z_,dithering_pars_fragment:k_,roughnessmap_fragment:V_,roughnessmap_pars_fragment:H_,shadowmap_pars_fragment:G_,shadowmap_pars_vertex:W_,shadowmap_vertex:X_,shadowmask_pars_fragment:q_,skinbase_vertex:Y_,skinning_pars_vertex:Z_,skinning_vertex:$_,skinnormal_vertex:J_,specularmap_fragment:K_,specularmap_pars_fragment:j_,tonemapping_fragment:Q_,tonemapping_pars_fragment:tv,transmission_fragment:ev,transmission_pars_fragment:nv,uv_pars_fragment:iv,uv_pars_vertex:rv,uv_vertex:sv,worldpos_vertex:ov,background_vert:av,background_frag:lv,backgroundCube_vert:cv,backgroundCube_frag:hv,cube_vert:uv,cube_frag:fv,depth_vert:dv,depth_frag:pv,distanceRGBA_vert:mv,distanceRGBA_frag:gv,equirect_vert:yv,equirect_frag:_v,linedashed_vert:vv,linedashed_frag:xv,meshbasic_vert:Mv,meshbasic_frag:Sv,meshlambert_vert:bv,meshlambert_frag:wv,meshmatcap_vert:Ev,meshmatcap_frag:Tv,meshnormal_vert:Av,meshnormal_frag:Rv,meshphong_vert:Cv,meshphong_frag:Pv,meshphysical_vert:Iv,meshphysical_frag:Dv,meshtoon_vert:Lv,meshtoon_frag:Uv,points_vert:Nv,points_frag:Fv,shadow_vert:Ov,shadow_frag:Bv,sprite_vert:zv,sprite_frag:kv},Mt={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},envMapRotation:{value:new Zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},bi={basic:{uniforms:hn([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:hn([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:hn([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:hn([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:hn([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:hn([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:hn([Mt.points,Mt.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:hn([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:hn([Mt.common,Mt.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:hn([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:hn([Mt.sprite,Mt.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zt}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distanceRGBA:{uniforms:hn([Mt.common,Mt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distanceRGBA_vert,fragmentShader:Jt.distanceRGBA_frag},shadow:{uniforms:hn([Mt.lights,Mt.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};bi.physical={uniforms:hn([bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};var Ac={r:0,b:0,g:0},Or=new Xn,Vv=new Wt;function Hv(i,t,e,n,r,s,o){let a=new Vt(0),l=s===!0?0:1,c,u,h=null,f=0,d=null;function g(v){let _=v.isScene===!0?v.background:null;return _&&_.isTexture&&(_=(v.backgroundBlurriness>0?e:t).get(_)),_}function y(v){let _=!1,b=g(v);b===null?p(a,l):b&&b.isColor&&(p(b,1),_=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(v,_){let b=g(_);b&&(b.isCubeTexture||b.mapping===Jo)?(u===void 0&&(u=new se(new tr(1,1,1),new Rn({name:"BackgroundCubeMaterial",uniforms:Fr(bi.backgroundCube.uniforms),vertexShader:bi.backgroundCube.vertexShader,fragmentShader:bi.backgroundCube.fragmentShader,side:Je,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,T,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Or.copy(_.backgroundRotation),Or.x*=-1,Or.y*=-1,Or.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Or.y*=-1,Or.z*=-1),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Vv.makeRotationFromEuler(Or)),u.material.toneMapped=ne.getTransfer(b.colorSpace)!==me,(h!==b||f!==b.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,h=b,f=b.version,d=i.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new se(new zo(2,2),new Rn({name:"BackgroundMaterial",uniforms:Fr(bi.background.uniforms),vertexShader:bi.background.vertexShader,fragmentShader:bi.background.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=ne.getTransfer(b.colorSpace)!==me,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||f!==b.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=b,f=b.version,d=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function p(v,_){v.getRGB(Ac,bu(i)),n.buffers.color.setClear(Ac.r,Ac.g,Ac.b,_,o)}function x(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,_=1){a.set(v),l=_,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,p(a,l)},render:y,addToRenderList:m,dispose:x}}function Gv(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null),s=r,o=!1;function a(M,A,L,F,O){let H=!1,V=h(F,L,A);s!==V&&(s=V,c(s.object)),H=d(M,F,L,O),H&&g(M,F,L,O),O!==null&&t.update(O,i.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,_(M,A,L,F),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function h(M,A,L){let F=L.wireframe===!0,O=n[M.id];O===void 0&&(O={},n[M.id]=O);let H=O[A.id];H===void 0&&(H={},O[A.id]=H);let V=H[F];return V===void 0&&(V=f(l()),H[F]=V),V}function f(M){let A=[],L=[],F=[];for(let O=0;O<e;O++)A[O]=0,L[O]=0,F[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:L,attributeDivisors:F,object:M,attributes:{},index:null}}function d(M,A,L,F){let O=s.attributes,H=A.attributes,V=0,rt=L.getAttributes();for(let K in rt)if(rt[K].location>=0){let _t=O[K],St=H[K];if(St===void 0&&(K==="instanceMatrix"&&M.instanceMatrix&&(St=M.instanceMatrix),K==="instanceColor"&&M.instanceColor&&(St=M.instanceColor)),_t===void 0||_t.attribute!==St||St&&_t.data!==St.data)return!0;V++}return s.attributesNum!==V||s.index!==F}function g(M,A,L,F){let O={},H=A.attributes,V=0,rt=L.getAttributes();for(let K in rt)if(rt[K].location>=0){let _t=H[K];_t===void 0&&(K==="instanceMatrix"&&M.instanceMatrix&&(_t=M.instanceMatrix),K==="instanceColor"&&M.instanceColor&&(_t=M.instanceColor));let St={};St.attribute=_t,_t&&_t.data&&(St.data=_t.data),O[K]=St,V++}s.attributes=O,s.attributesNum=V,s.index=F}function y(){let M=s.newAttributes;for(let A=0,L=M.length;A<L;A++)M[A]=0}function m(M){p(M,0)}function p(M,A){let L=s.newAttributes,F=s.enabledAttributes,O=s.attributeDivisors;L[M]=1,F[M]===0&&(i.enableVertexAttribArray(M),F[M]=1),O[M]!==A&&(i.vertexAttribDivisor(M,A),O[M]=A)}function x(){let M=s.newAttributes,A=s.enabledAttributes;for(let L=0,F=A.length;L<F;L++)A[L]!==M[L]&&(i.disableVertexAttribArray(L),A[L]=0)}function v(M,A,L,F,O,H,V){V===!0?i.vertexAttribIPointer(M,A,L,O,H):i.vertexAttribPointer(M,A,L,F,O,H)}function _(M,A,L,F){y();let O=F.attributes,H=L.getAttributes(),V=A.defaultAttributeValues;for(let rt in H){let K=H[rt];if(K.location>=0){let lt=O[rt];if(lt===void 0&&(rt==="instanceMatrix"&&M.instanceMatrix&&(lt=M.instanceMatrix),rt==="instanceColor"&&M.instanceColor&&(lt=M.instanceColor)),lt!==void 0){let _t=lt.normalized,St=lt.itemSize,Ft=t.get(lt);if(Ft===void 0)continue;let Bt=Ft.buffer,Kt=Ft.type,Ot=Ft.bytesPerElement,N=Kt===i.INT||Kt===i.UNSIGNED_INT||lt.gpuType===Yl;if(lt.isInterleavedBufferAttribute){let U=lt.data,W=U.stride,Z=lt.offset;if(U.isInstancedInterleavedBuffer){for(let $=0;$<K.locationSize;$++)p(K.location+$,U.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let $=0;$<K.locationSize;$++)m(K.location+$);i.bindBuffer(i.ARRAY_BUFFER,Bt);for(let $=0;$<K.locationSize;$++)v(K.location+$,St/K.locationSize,Kt,_t,W*Ot,(Z+St/K.locationSize*$)*Ot,N)}else{if(lt.isInstancedBufferAttribute){for(let U=0;U<K.locationSize;U++)p(K.location+U,lt.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let U=0;U<K.locationSize;U++)m(K.location+U);i.bindBuffer(i.ARRAY_BUFFER,Bt);for(let U=0;U<K.locationSize;U++)v(K.location+U,St/K.locationSize,Kt,_t,St*Ot,St/K.locationSize*U*Ot,N)}}else if(V!==void 0){let _t=V[rt];if(_t!==void 0)switch(_t.length){case 2:i.vertexAttrib2fv(K.location,_t);break;case 3:i.vertexAttrib3fv(K.location,_t);break;case 4:i.vertexAttrib4fv(K.location,_t);break;default:i.vertexAttrib1fv(K.location,_t)}}}}x()}function b(){D();for(let M in n){let A=n[M];for(let L in A){let F=A[L];for(let O in F)u(F[O].object),delete F[O];delete A[L]}delete n[M]}}function E(M){if(n[M.id]===void 0)return;let A=n[M.id];for(let L in A){let F=A[L];for(let O in F)u(F[O].object),delete F[O];delete A[L]}delete n[M.id]}function T(M){for(let A in n){let L=n[A];if(L[M.id]===void 0)continue;let F=L[M.id];for(let O in F)u(F[O].object),delete F[O];delete L[M.id]}}function D(){S(),o=!0,s!==r&&(s=r,c(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:D,resetDefaultState:S,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfProgram:T,initAttributes:y,enableAttribute:m,disableUnusedAttributes:x}}function Wv(i,t,e){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function a(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];e.update(d,n,1)}function l(c,u,h,f){if(h===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let g=0;for(let y=0;y<h;y++)g+=u[y]*f[y];e.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Xv(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==xn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let D=T===Rs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==oi&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Gn&&!D)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=g>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:v,maxFragmentUniforms:_,vertexTextures:b,maxSamples:E}}function qv(i){let t=this,e=null,n=0,r=!1,s=!1,o=new Ve,a=new Zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||n!==0||r;return r=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){let g=h.clippingPlanes,y=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{let x=s?0:n,v=x*4,_=p.clippingState||null;l.value=_,_=u(g,f,v,d);for(let b=0;b!==v;++b)_[b]=e[b];p.clippingState=_,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,d,g){let y=h!==null?h.length:0,m=null;if(y!==0){if(m=l.value,g!==!0||m===null){let p=d+y*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,_=d;v!==y;++v,_+=4)o.copy(h[v]).applyMatrix4(x,a),o.normal.toArray(m,_),m[_+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}function Yv(i){let t=new WeakMap;function e(o,a){return a===Wl?o.mapping=Lr:a===Xl&&(o.mapping=Ur),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Wl||a===Xl)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new fl(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",r),e(c.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}var Ds=4,wp=[.125,.215,.35,.446,.526,.582],kr=20,Ru=new Wo,Ep=new Vt,Cu=null,Pu=0,Iu=0,Du=!1,zr=(1+Math.sqrt(5))/2,Is=1/zr,Tp=[new I(-zr,Is,0),new I(zr,Is,0),new I(-Is,0,zr),new I(Is,0,zr),new I(0,zr,-Is),new I(0,zr,Is),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],Zv=new I,Pc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100,s={}){let{size:o=256,position:a=Zv}=s;Cu=this._renderer.getRenderTarget(),Pu=this._renderer.getActiveCubeFace(),Iu=this._renderer.getActiveMipmapLevel(),Du=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,r,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Cu,Pu,Iu),this._renderer.xr.enabled=Du,t.scissorTest=!1,Rc(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Lr||t.mapping===Ur?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Cu=this._renderer.getRenderTarget(),Pu=this._renderer.getActiveCubeFace(),Iu=this._renderer.getActiveMipmapLevel(),Du=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:Rs,format:xn,colorSpace:Pr,depthBuffer:!1},r=Ap(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ap(t,e,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$v(s)),this._blurMaterial=Jv(s,t,e)}return r}_compileMaterial(t){let e=new se(this._lodPlanes[0],t);this._renderer.compile(e,Ru)}_sceneToCubeUV(t,e,n,r,s){let l=new on(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(Ep),h.toneMapping=ki,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null));let y=new Oi({name:"PMREM.Background",side:Je,depthWrite:!1,depthTest:!1}),m=new se(new tr,y),p=!1,x=t.background;x?x.isColor&&(y.color.copy(x),t.background=null,p=!0):(y.color.copy(Ep),p=!0);for(let v=0;v<6;v++){let _=v%3;_===0?(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[v],s.y,s.z)):_===1?(l.up.set(0,0,c[v]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[v],s.z)):(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[v]));let b=this._cubeSize;Rc(r,_*b,v>2?b:0,b,b),h.setRenderTarget(r),p&&h.render(m,l),h.render(t,l)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=f,t.background=x}_textureToCubeUV(t,e){let n=this._renderer,r=t.mapping===Lr||t.mapping===Ur;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cp()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rp());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new se(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;let l=this._cubeSize;Rc(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Ru)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Tp[(r-s-1)%Tp.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,r,s){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new se(this._lodPlanes[r],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*kr-1),y=s/g,m=isFinite(s)?1+Math.floor(u*y):kr;m>kr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${kr}`);let p=[],x=0;for(let T=0;T<kr;++T){let D=T/y,S=Math.exp(-D*D/2);p.push(S),T===0?x+=S:T<m&&(x+=2*S)}for(let T=0;T<p.length;T++)p[T]=p[T]/x;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-n;let _=this._sizeLods[r],b=3*_*(r>v-Ds?r-v+Ds:0),E=4*(this._cubeSize-_);Rc(e,b,E,3*_,2*_),l.setRenderTarget(e),l.render(h,Ru)}};function $v(i){let t=[],e=[],n=[],r=i,s=i-Ds+1+wp.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);e.push(a);let l=1/a;o>i-Ds?l=wp[o-i+Ds-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,y=3,m=2,p=1,x=new Float32Array(y*g*d),v=new Float32Array(m*g*d),_=new Float32Array(p*g*d);for(let E=0;E<d;E++){let T=E%3*2/3-1,D=E>2?0:-1,S=[T,D,0,T+2/3,D,0,T+2/3,D+1,0,T,D,0,T+2/3,D+1,0,T,D+1,0];x.set(S,y*g*E),v.set(f,m*g*E);let M=[E,E,E,E,E,E];_.set(M,p*g*E)}let b=new ie;b.setAttribute("position",new le(x,y)),b.setAttribute("uv",new le(v,m)),b.setAttribute("faceIndex",new le(_,p)),t.push(b),r>Ds&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ap(i,t,e){let n=new vi(i,t,e);return n.texture.mapping=Jo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Rc(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function Jv(i,t,e){let n=new Float32Array(kr),r=new I(0,1,0);return new Rn({name:"SphericalGaussianBlur",defines:{n:kr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Hu(),fragmentShader:`

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
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Rp(){return new Rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hu(),fragmentShader:`

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
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Cp(){return new Rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Hu(){return`

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
	`}function Kv(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Wl||l===Xl,u=l===Lr||l===Ur;if(c||u){let h=t.get(a),f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Pc(i)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{let d=a.image;return c&&d&&d.height>0||u&&d&&r(d)?(e===null&&(e=new Pc(i)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function jv(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let r=e(n);return r===null&&ys("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Qv(i,t,e,n){let r={},s=new WeakMap;function o(h){let f=h.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];let d=s.get(f);d&&(t.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,e.memory.geometries++),f}function l(h){let f=h.attributes;for(let d in f)t.update(f[d],i.ARRAY_BUFFER)}function c(h){let f=[],d=h.index,g=h.attributes.position,y=0;if(d!==null){let x=d.array;y=d.version;for(let v=0,_=x.length;v<_;v+=3){let b=x[v+0],E=x[v+1],T=x[v+2];f.push(b,E,E,T,T,b)}}else if(g!==void 0){let x=g.array;y=g.version;for(let v=0,_=x.length/3-1;v<_;v+=3){let b=v+0,E=v+1,T=v+2;f.push(b,E,E,T,T,b)}}else return;let m=new(Su(f)?bo:So)(f,1);m.version=y;let p=s.get(h);p&&t.remove(p),s.set(h,m)}function u(h){let f=s.get(h);if(f){let d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function tx(i,t,e){let n;function r(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,d){i.drawElements(n,d,s,f*o),e.update(d,n,1)}function c(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,s,f*o,g),e.update(d,n,g))}function u(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,n,1)}function h(f,d,g,y){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],y[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,y,0,g);let p=0;for(let x=0;x<g;x++)p+=d[x]*y[x];e.update(p,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function ex(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function nx(i,t,e){let n=new WeakMap,r=new Le;function s(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=n.get(a);if(f===void 0||f.count!==h){let S=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],x=a.morphAttributes.color||[],v=0;d===!0&&(v=1),g===!0&&(v=2),y===!0&&(v=3);let _=a.attributes.position.count*v,b=1;_>t.maxTextureSize&&(b=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let E=new Float32Array(_*b*4*h),T=new Mo(E,_,b,h);T.type=Gn,T.needsUpdate=!0;let D=v*4;for(let M=0;M<h;M++){let A=m[M],L=p[M],F=x[M],O=_*b*4*M;for(let H=0;H<A.count;H++){let V=H*D;d===!0&&(r.fromBufferAttribute(A,H),E[O+V+0]=r.x,E[O+V+1]=r.y,E[O+V+2]=r.z,E[O+V+3]=0),g===!0&&(r.fromBufferAttribute(L,H),E[O+V+4]=r.x,E[O+V+5]=r.y,E[O+V+6]=r.z,E[O+V+7]=0),y===!0&&(r.fromBufferAttribute(F,H),E[O+V+8]=r.x,E[O+V+9]=r.y,E[O+V+10]=r.z,E[O+V+11]=F.itemSize===4?r.w:1)}}f={count:h,texture:T,size:new ct(_,b)},n.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let y=0;y<c.length;y++)d+=c[y];let g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function ix(i,t,e,n){let r=new WeakMap;function s(l){let c=n.render.frame,u=l.geometry,h=t.get(l,u);if(r.get(h)!==c&&(t.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function o(){r=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}var Zp=new mn,Pp=new Ro(1,1),$p=new Mo,Jp=new hl,Kp=new Eo,Ip=[],Dp=[],Lp=new Float32Array(16),Up=new Float32Array(9),Np=new Float32Array(4);function Ns(i,t,e){let n=i[0];if(n<=0||n>0)return i;let r=t*e,s=Ip[r];if(s===void 0&&(s=new Float32Array(r),Ip[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function He(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ge(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Dc(i,t){let e=Dp[t];e===void 0&&(e=new Int32Array(t),Dp[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function rx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function sx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;i.uniform2fv(this.addr,t),Ge(e,t)}}function ox(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(He(e,t))return;i.uniform3fv(this.addr,t),Ge(e,t)}}function ax(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;i.uniform4fv(this.addr,t),Ge(e,t)}}function lx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ge(e,t)}else{if(He(e,n))return;Np.set(n),i.uniformMatrix2fv(this.addr,!1,Np),Ge(e,n)}}function cx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ge(e,t)}else{if(He(e,n))return;Up.set(n),i.uniformMatrix3fv(this.addr,!1,Up),Ge(e,n)}}function hx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ge(e,t)}else{if(He(e,n))return;Lp.set(n),i.uniformMatrix4fv(this.addr,!1,Lp),Ge(e,n)}}function ux(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function fx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;i.uniform2iv(this.addr,t),Ge(e,t)}}function dx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;i.uniform3iv(this.addr,t),Ge(e,t)}}function px(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;i.uniform4iv(this.addr,t),Ge(e,t)}}function mx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function gx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;i.uniform2uiv(this.addr,t),Ge(e,t)}}function yx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;i.uniform3uiv(this.addr,t),Ge(e,t)}}function _x(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;i.uniform4uiv(this.addr,t),Ge(e,t)}}function vx(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Pp.compareFunction=_u,s=Pp):s=Zp,e.setTexture2D(t||s,r)}function xx(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Jp,r)}function Mx(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Kp,r)}function Sx(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||$p,r)}function bx(i){switch(i){case 5126:return rx;case 35664:return sx;case 35665:return ox;case 35666:return ax;case 35674:return lx;case 35675:return cx;case 35676:return hx;case 5124:case 35670:return ux;case 35667:case 35671:return fx;case 35668:case 35672:return dx;case 35669:case 35673:return px;case 5125:return mx;case 36294:return gx;case 36295:return yx;case 36296:return _x;case 35678:case 36198:case 36298:case 36306:case 35682:return vx;case 35679:case 36299:case 36307:return xx;case 35680:case 36300:case 36308:case 36293:return Mx;case 36289:case 36303:case 36311:case 36292:return Sx}}function wx(i,t){i.uniform1fv(this.addr,t)}function Ex(i,t){let e=Ns(t,this.size,2);i.uniform2fv(this.addr,e)}function Tx(i,t){let e=Ns(t,this.size,3);i.uniform3fv(this.addr,e)}function Ax(i,t){let e=Ns(t,this.size,4);i.uniform4fv(this.addr,e)}function Rx(i,t){let e=Ns(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Cx(i,t){let e=Ns(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Px(i,t){let e=Ns(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Ix(i,t){i.uniform1iv(this.addr,t)}function Dx(i,t){i.uniform2iv(this.addr,t)}function Lx(i,t){i.uniform3iv(this.addr,t)}function Ux(i,t){i.uniform4iv(this.addr,t)}function Nx(i,t){i.uniform1uiv(this.addr,t)}function Fx(i,t){i.uniform2uiv(this.addr,t)}function Ox(i,t){i.uniform3uiv(this.addr,t)}function Bx(i,t){i.uniform4uiv(this.addr,t)}function zx(i,t,e){let n=this.cache,r=t.length,s=Dc(e,r);He(n,s)||(i.uniform1iv(this.addr,s),Ge(n,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||Zp,s[o])}function kx(i,t,e){let n=this.cache,r=t.length,s=Dc(e,r);He(n,s)||(i.uniform1iv(this.addr,s),Ge(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Jp,s[o])}function Vx(i,t,e){let n=this.cache,r=t.length,s=Dc(e,r);He(n,s)||(i.uniform1iv(this.addr,s),Ge(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||Kp,s[o])}function Hx(i,t,e){let n=this.cache,r=t.length,s=Dc(e,r);He(n,s)||(i.uniform1iv(this.addr,s),Ge(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||$p,s[o])}function Gx(i){switch(i){case 5126:return wx;case 35664:return Ex;case 35665:return Tx;case 35666:return Ax;case 35674:return Rx;case 35675:return Cx;case 35676:return Px;case 5124:case 35670:return Ix;case 35667:case 35671:return Dx;case 35668:case 35672:return Lx;case 35669:case 35673:return Ux;case 5125:return Nx;case 36294:return Fx;case 36295:return Ox;case 36296:return Bx;case 35678:case 36198:case 36298:case 36306:case 35682:return zx;case 35679:case 36299:case 36307:return kx;case 35680:case 36300:case 36308:case 36293:return Vx;case 36289:case 36303:case 36311:case 36292:return Hx}}var Uu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=bx(e.type)}},Nu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Gx(e.type)}},Fu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(t,e[a.id],n)}}},Lu=/(\w+)(\])?(\[|\.)?/g;function Fp(i,t){i.seq.push(t),i.map[t.id]=t}function Wx(i,t,e){let n=i.name,r=n.length;for(Lu.lastIndex=0;;){let s=Lu.exec(n),o=Lu.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Fp(e,c===void 0?new Uu(a,i,t):new Nu(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new Fu(a),Fp(e,h)),e=h}}}var Ls=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);Wx(s,o,this)}}setValue(t,e,n,r){let s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){let r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){let a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){let n=[];for(let r=0,s=t.length;r!==s;++r){let o=t[r];o.id in e&&n.push(o)}return n}};function Op(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Xx=37297,qx=0;function Yx(i,t){let e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Bp=new Zt;function Zx(i){ne._getMatrix(Bp,ne.workingColorSpace,i);let t=`mat3( ${Bp.elements.map(e=>e.toFixed(4))} )`;switch(ne.getTransfer(i)){case vo:return[t,"LinearTransferOETF"];case me:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function zp(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=(i.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+Yx(i.getShaderSource(t),a)}else return s}function $x(i,t){let e=Zx(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Jx(i,t){let e;switch(t){case jd:e="Linear";break;case Qd:e="Reinhard";break;case tp:e="Cineon";break;case Gl:e="ACESFilmic";break;case np:e="AgX";break;case ip:e="Neutral";break;case ep:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Cc=new I;function Kx(){ne.getLuminanceCoefficients(Cc);let i=Cc.x.toFixed(4),t=Cc.y.toFixed(4),e=Cc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ia).join(`
`)}function Qx(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function tM(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(t,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function ia(i){return i!==""}function kp(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Vp(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var eM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ou(i){return i.replace(eM,iM)}var nM=new Map;function iM(i,t){let e=Jt[t];if(e===void 0){let n=nM.get(t);if(n!==void 0)e=Jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ou(e)}var rM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hp(i){return i.replace(rM,sM)}function sM(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Gp(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function oM(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===su?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Id?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Si&&(t="SHADOWMAP_TYPE_VSM"),t}function aM(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Lr:case Ur:t="ENVMAP_TYPE_CUBE";break;case Jo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function lM(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ur:t="ENVMAP_MODE_REFRACTION";break}return t}function cM(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Hl:t="ENVMAP_BLENDING_MULTIPLY";break;case Jd:t="ENVMAP_BLENDING_MIX";break;case Kd:t="ENVMAP_BLENDING_ADD";break}return t}function hM(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function uM(i,t,e,n){let r=i.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,l=oM(e),c=aM(e),u=lM(e),h=cM(e),f=hM(e),d=jx(e),g=Qx(s),y=r.createProgram(),m,p,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ia).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ia).join(`
`),p.length>0&&(p+=`
`)):(m=[Gp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ia).join(`
`),p=[Gp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ki?"#define TONE_MAPPING":"",e.toneMapping!==ki?Jt.tonemapping_pars_fragment:"",e.toneMapping!==ki?Jx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,$x("linearToOutputTexel",e.outputColorSpace),Kx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ia).join(`
`)),o=Ou(o),o=kp(o,e),o=Vp(o,e),a=Ou(a),a=kp(a,e),a=Vp(a,e),o=Hp(o),a=Hp(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===vu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===vu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=x+m+o,_=x+p+a,b=Op(r,r.VERTEX_SHADER,v),E=Op(r,r.FRAGMENT_SHADER,_);r.attachShader(y,b),r.attachShader(y,E),e.index0AttributeName!==void 0?r.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function T(A){if(i.debug.checkShaderErrors){let L=r.getProgramInfoLog(y)||"",F=r.getShaderInfoLog(b)||"",O=r.getShaderInfoLog(E)||"",H=L.trim(),V=F.trim(),rt=O.trim(),K=!0,lt=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,y,b,E);else{let _t=zp(r,b,"vertex"),St=zp(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+H+`
`+_t+`
`+St)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(V===""||rt==="")&&(lt=!1);lt&&(A.diagnostics={runnable:K,programLog:H,vertexShader:{log:V,prefix:m},fragmentShader:{log:rt,prefix:p}})}r.deleteShader(b),r.deleteShader(E),D=new Ls(r,y),S=tM(r,y)}let D;this.getUniforms=function(){return D===void 0&&T(this),D};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(y,Xx)),M},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=qx++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=b,this.fragmentShader=E,this}var fM=0,Bu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new zu(t),e.set(t,n)),n}},zu=class{constructor(t){this.id=fM++,this.code=t,this.usedTimes=0}};function dM(i,t,e,n,r,s,o){let a=new vs,l=new Bu,c=new Set,u=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures,d=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,M,A,L,F){let O=L.fog,H=F.geometry,V=S.isMeshStandardMaterial?L.environment:null,rt=(S.isMeshStandardMaterial?e:t).get(S.envMap||V),K=rt&&rt.mapping===Jo?rt.image.height:null,lt=g[S.type];S.precision!==null&&(d=r.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));let _t=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,St=_t!==void 0?_t.length:0,Ft=0;H.morphAttributes.position!==void 0&&(Ft=1),H.morphAttributes.normal!==void 0&&(Ft=2),H.morphAttributes.color!==void 0&&(Ft=3);let Bt,Kt,Ot,N;if(lt){let de=bi[lt];Bt=de.vertexShader,Kt=de.fragmentShader}else Bt=S.vertexShader,Kt=S.fragmentShader,l.update(S),Ot=l.getVertexShaderID(S),N=l.getFragmentShaderID(S);let U=i.getRenderTarget(),W=i.state.buffers.depth.getReversed(),Z=F.isInstancedMesh===!0,$=F.isBatchedMesh===!0,j=!!S.map,it=!!S.matcap,P=!!rt,z=!!S.aoMap,X=!!S.lightMap,J=!!S.bumpMap,k=!!S.normalMap,ft=!!S.displacementMap,st=!!S.emissiveMap,ht=!!S.metalnessMap,Dt=!!S.roughnessMap,vt=S.anisotropy>0,C=S.clearcoat>0,w=S.dispersion>0,G=S.iridescence>0,et=S.sheen>0,ot=S.transmission>0,nt=vt&&!!S.anisotropyMap,bt=C&&!!S.clearcoatMap,gt=C&&!!S.clearcoatNormalMap,Rt=C&&!!S.clearcoatRoughnessMap,Lt=G&&!!S.iridescenceMap,dt=G&&!!S.iridescenceThicknessMap,Tt=et&&!!S.sheenColorMap,Gt=et&&!!S.sheenRoughnessMap,Nt=!!S.specularMap,wt=!!S.specularColorMap,$t=!!S.specularIntensityMap,B=ot&&!!S.transmissionMap,yt=ot&&!!S.thicknessMap,xt=!!S.gradientMap,Ct=!!S.alphaMap,pt=S.alphaTest>0,at=!!S.alphaHash,Ut=!!S.extensions,Yt=ki;S.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Yt=i.toneMapping);let we={shaderID:lt,shaderType:S.type,shaderName:S.name,vertexShader:Bt,fragmentShader:Kt,defines:S.defines,customVertexShaderID:Ot,customFragmentShaderID:N,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:$,batchingColor:$&&F._colorsTexture!==null,instancing:Z,instancingColor:Z&&F.instanceColor!==null,instancingMorph:Z&&F.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:U===null?i.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Pr,alphaToCoverage:!!S.alphaToCoverage,map:j,matcap:it,envMap:P,envMapMode:P&&rt.mapping,envMapCubeUVHeight:K,aoMap:z,lightMap:X,bumpMap:J,normalMap:k,displacementMap:f&&ft,emissiveMap:st,normalMapObjectSpace:k&&S.normalMapType===ap,normalMapTangentSpace:k&&S.normalMapType===Tc,metalnessMap:ht,roughnessMap:Dt,anisotropy:vt,anisotropyMap:nt,clearcoat:C,clearcoatMap:bt,clearcoatNormalMap:gt,clearcoatRoughnessMap:Rt,dispersion:w,iridescence:G,iridescenceMap:Lt,iridescenceThicknessMap:dt,sheen:et,sheenColorMap:Tt,sheenRoughnessMap:Gt,specularMap:Nt,specularColorMap:wt,specularIntensityMap:$t,transmission:ot,transmissionMap:B,thicknessMap:yt,gradientMap:xt,opaque:S.transparent===!1&&S.blending===Ar&&S.alphaToCoverage===!1,alphaMap:Ct,alphaTest:pt,alphaHash:at,combine:S.combine,mapUv:j&&y(S.map.channel),aoMapUv:z&&y(S.aoMap.channel),lightMapUv:X&&y(S.lightMap.channel),bumpMapUv:J&&y(S.bumpMap.channel),normalMapUv:k&&y(S.normalMap.channel),displacementMapUv:ft&&y(S.displacementMap.channel),emissiveMapUv:st&&y(S.emissiveMap.channel),metalnessMapUv:ht&&y(S.metalnessMap.channel),roughnessMapUv:Dt&&y(S.roughnessMap.channel),anisotropyMapUv:nt&&y(S.anisotropyMap.channel),clearcoatMapUv:bt&&y(S.clearcoatMap.channel),clearcoatNormalMapUv:gt&&y(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Rt&&y(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Lt&&y(S.iridescenceMap.channel),iridescenceThicknessMapUv:dt&&y(S.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&y(S.sheenColorMap.channel),sheenRoughnessMapUv:Gt&&y(S.sheenRoughnessMap.channel),specularMapUv:Nt&&y(S.specularMap.channel),specularColorMapUv:wt&&y(S.specularColorMap.channel),specularIntensityMapUv:$t&&y(S.specularIntensityMap.channel),transmissionMapUv:B&&y(S.transmissionMap.channel),thicknessMapUv:yt&&y(S.thicknessMap.channel),alphaMapUv:Ct&&y(S.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(k||vt),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!H.attributes.uv&&(j||Ct),fog:!!O,useFog:S.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:W,skinning:F.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:Ft,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:Yt,decodeVideoTexture:j&&S.map.isVideoTexture===!0&&ne.getTransfer(S.map.colorSpace)===me,decodeVideoTextureEmissive:st&&S.emissiveMap.isVideoTexture===!0&&ne.getTransfer(S.emissiveMap.colorSpace)===me,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ke,flipSided:S.side===Je,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ut&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ut&&S.extensions.multiDraw===!0||$)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return we.vertexUv1s=c.has(1),we.vertexUv2s=c.has(2),we.vertexUv3s=c.has(3),c.clear(),we}function p(S){let M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(let A in S.defines)M.push(A),M.push(S.defines[A]);return S.isRawShaderMaterial===!1&&(x(M,S),v(M,S),M.push(i.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function x(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function v(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function _(S){let M=g[S.type],A;if(M){let L=bi[M];A=_p.clone(L.uniforms)}else A=S.uniforms;return A}function b(S,M){let A;for(let L=0,F=u.length;L<F;L++){let O=u[L];if(O.cacheKey===M){A=O,++A.usedTimes;break}}return A===void 0&&(A=new uM(i,M,S,s),u.push(A)),A}function E(S){if(--S.usedTimes===0){let M=u.indexOf(S);u[M]=u[u.length-1],u.pop(),S.destroy()}}function T(S){l.remove(S)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:b,releaseProgram:E,releaseShaderCache:T,programs:u,dispose:D}}function pM(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function mM(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Wp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Xp(){let i=[],t=0,e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(h,f,d,g,y,m){let p=i[t];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:y,group:m},i[t]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=y,p.group=m),t++,p}function a(h,f,d,g,y,m){let p=o(h,f,d,g,y,m);d.transmission>0?n.push(p):d.transparent===!0?r.push(p):e.push(p)}function l(h,f,d,g,y,m){let p=o(h,f,d,g,y,m);d.transmission>0?n.unshift(p):d.transparent===!0?r.unshift(p):e.unshift(p)}function c(h,f){e.length>1&&e.sort(h||mM),n.length>1&&n.sort(f||Wp),r.length>1&&r.sort(f||Wp)}function u(){for(let h=t,f=i.length;h<f;h++){let d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function gM(){let i=new WeakMap;function t(n,r){let s=i.get(n),o;return s===void 0?(o=new Xp,i.set(n,[o])):r>=s.length?(o=new Xp,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function yM(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Vt};break;case"SpotLight":e={position:new I,direction:new I,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":e={color:new Vt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function _M(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var vM=0;function xM(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function MM(i){let t=new yM,e=_M(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);let r=new I,s=new Wt,o=new Wt;function a(c){let u=0,h=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let d=0,g=0,y=0,m=0,p=0,x=0,v=0,_=0,b=0,E=0,T=0;c.sort(xM);for(let S=0,M=c.length;S<M;S++){let A=c[S],L=A.color,F=A.intensity,O=A.distance,H=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)u+=L.r*F,h+=L.g*F,f+=L.b*F;else if(A.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(A.sh.coefficients[V],F);T++}else if(A.isDirectionalLight){let V=t.get(A);if(V.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let rt=A.shadow,K=e.get(A);K.shadowIntensity=rt.intensity,K.shadowBias=rt.bias,K.shadowNormalBias=rt.normalBias,K.shadowRadius=rt.radius,K.shadowMapSize=rt.mapSize,n.directionalShadow[d]=K,n.directionalShadowMap[d]=H,n.directionalShadowMatrix[d]=A.shadow.matrix,x++}n.directional[d]=V,d++}else if(A.isSpotLight){let V=t.get(A);V.position.setFromMatrixPosition(A.matrixWorld),V.color.copy(L).multiplyScalar(F),V.distance=O,V.coneCos=Math.cos(A.angle),V.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),V.decay=A.decay,n.spot[y]=V;let rt=A.shadow;if(A.map&&(n.spotLightMap[b]=A.map,b++,rt.updateMatrices(A),A.castShadow&&E++),n.spotLightMatrix[y]=rt.matrix,A.castShadow){let K=e.get(A);K.shadowIntensity=rt.intensity,K.shadowBias=rt.bias,K.shadowNormalBias=rt.normalBias,K.shadowRadius=rt.radius,K.shadowMapSize=rt.mapSize,n.spotShadow[y]=K,n.spotShadowMap[y]=H,_++}y++}else if(A.isRectAreaLight){let V=t.get(A);V.color.copy(L).multiplyScalar(F),V.halfWidth.set(A.width*.5,0,0),V.halfHeight.set(0,A.height*.5,0),n.rectArea[m]=V,m++}else if(A.isPointLight){let V=t.get(A);if(V.color.copy(A.color).multiplyScalar(A.intensity),V.distance=A.distance,V.decay=A.decay,A.castShadow){let rt=A.shadow,K=e.get(A);K.shadowIntensity=rt.intensity,K.shadowBias=rt.bias,K.shadowNormalBias=rt.normalBias,K.shadowRadius=rt.radius,K.shadowMapSize=rt.mapSize,K.shadowCameraNear=rt.camera.near,K.shadowCameraFar=rt.camera.far,n.pointShadow[g]=K,n.pointShadowMap[g]=H,n.pointShadowMatrix[g]=A.shadow.matrix,v++}n.point[g]=V,g++}else if(A.isHemisphereLight){let V=t.get(A);V.skyColor.copy(A.color).multiplyScalar(F),V.groundColor.copy(A.groundColor).multiplyScalar(F),n.hemi[p]=V,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Mt.LTC_FLOAT_1,n.rectAreaLTC2=Mt.LTC_FLOAT_2):(n.rectAreaLTC1=Mt.LTC_HALF_1,n.rectAreaLTC2=Mt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;let D=n.hash;(D.directionalLength!==d||D.pointLength!==g||D.spotLength!==y||D.rectAreaLength!==m||D.hemiLength!==p||D.numDirectionalShadows!==x||D.numPointShadows!==v||D.numSpotShadows!==_||D.numSpotMaps!==b||D.numLightProbes!==T)&&(n.directional.length=d,n.spot.length=y,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=_+b-E,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=T,D.directionalLength=d,D.pointLength=g,D.spotLength=y,D.rectAreaLength=m,D.hemiLength=p,D.numDirectionalShadows=x,D.numPointShadows=v,D.numSpotShadows=_,D.numSpotMaps=b,D.numLightProbes=T,n.version=vM++)}function l(c,u){let h=0,f=0,d=0,g=0,y=0,m=u.matrixWorldInverse;for(let p=0,x=c.length;p<x;p++){let v=c[p];if(v.isDirectionalLight){let _=n.directional[h];_.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(m),h++}else if(v.isSpotLight){let _=n.spot[d];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(m),d++}else if(v.isRectAreaLight){let _=n.rectArea[g];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),o.identity(),s.copy(v.matrixWorld),s.premultiply(m),o.extractRotation(s),_.halfWidth.set(v.width*.5,0,0),_.halfHeight.set(0,v.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){let _=n.point[f];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){let _=n.hemi[y];_.direction.setFromMatrixPosition(v.matrixWorld),_.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:n}}function qp(i){let t=new MM(i),e=[],n=[];function r(u){c.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function SM(i){let t=new WeakMap;function e(r,s=0){let o=t.get(r),a;return o===void 0?(a=new qp(i),t.set(r,[a])):s>=o.length?(a=new qp(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var bM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wM=`uniform sampler2D shadow_pass;
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
}`;function EM(i,t,e){let n=new er,r=new ct,s=new ct,o=new Le,a=new bl({depthPacking:op}),l=new wl,c={},u=e.maxTextureSize,h={[Hn]:Je,[Je]:Hn,[Ke]:Ke},f=new Rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:bM,fragmentShader:wM}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new ie;g.setAttribute("position",new le(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new se(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=su;let p=this.type;this.render=function(E,T,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;let S=i.getRenderTarget(),M=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),L=i.state;L.setBlending(zi),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let F=p!==Si&&this.type===Si,O=p===Si&&this.type!==Si;for(let H=0,V=E.length;H<V;H++){let rt=E[H],K=rt.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",rt,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;r.copy(K.mapSize);let lt=K.getFrameExtents();if(r.multiply(lt),s.copy(K.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/lt.x),r.x=s.x*lt.x,K.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/lt.y),r.y=s.y*lt.y,K.mapSize.y=s.y)),K.map===null||F===!0||O===!0){let St=this.type!==Si?{minFilter:$e,magFilter:$e}:{};K.map!==null&&K.map.dispose(),K.map=new vi(r.x,r.y,St),K.map.texture.name=rt.name+".shadowMap",K.camera.updateProjectionMatrix()}i.setRenderTarget(K.map),i.clear();let _t=K.getViewportCount();for(let St=0;St<_t;St++){let Ft=K.getViewport(St);o.set(s.x*Ft.x,s.y*Ft.y,s.x*Ft.z,s.y*Ft.w),L.viewport(o),K.updateMatrices(rt,St),n=K.getFrustum(),_(T,D,K.camera,rt,this.type)}K.isPointLightShadow!==!0&&this.type===Si&&x(K,D),K.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(S,M,A)};function x(E,T){let D=t.update(y);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new vi(r.x,r.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(T,null,D,f,y,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(T,null,D,d,y,null)}function v(E,T,D,S){let M=null,A=D.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(A!==void 0)M=A;else if(M=D.isPointLight===!0?l:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let L=M.uuid,F=T.uuid,O=c[L];O===void 0&&(O={},c[L]=O);let H=O[F];H===void 0&&(H=M.clone(),O[F]=H,T.addEventListener("dispose",b)),M=H}if(M.visible=T.visible,M.wireframe=T.wireframe,S===Si?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:h[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,D.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let L=i.properties.get(M);L.light=D}return M}function _(E,T,D,S,M){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===Si)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,E.matrixWorld);let F=t.update(E),O=E.material;if(Array.isArray(O)){let H=F.groups;for(let V=0,rt=H.length;V<rt;V++){let K=H[V],lt=O[K.materialIndex];if(lt&&lt.visible){let _t=v(E,lt,S,M);E.onBeforeShadow(i,E,T,D,F,_t,K),i.renderBufferDirect(D,null,F,_t,E,K),E.onAfterShadow(i,E,T,D,F,_t,K)}}}else if(O.visible){let H=v(E,O,S,M);E.onBeforeShadow(i,E,T,D,F,H,null),i.renderBufferDirect(D,null,F,H,E,null),E.onAfterShadow(i,E,T,D,F,H,null)}}let L=E.children;for(let F=0,O=L.length;F<O;F++)_(L[F],T,D,S,M)}function b(E){E.target.removeEventListener("dispose",b);for(let D in c){let S=c[D],M=E.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}var TM={[Nl]:Fl,[Ol]:kl,[Bl]:Vl,[Rr]:zl,[Fl]:Nl,[kl]:Ol,[Vl]:Bl,[zl]:Rr};function AM(i,t){function e(){let B=!1,yt=new Le,xt=null,Ct=new Le(0,0,0,0);return{setMask:function(pt){xt!==pt&&!B&&(i.colorMask(pt,pt,pt,pt),xt=pt)},setLocked:function(pt){B=pt},setClear:function(pt,at,Ut,Yt,we){we===!0&&(pt*=Yt,at*=Yt,Ut*=Yt),yt.set(pt,at,Ut,Yt),Ct.equals(yt)===!1&&(i.clearColor(pt,at,Ut,Yt),Ct.copy(yt))},reset:function(){B=!1,xt=null,Ct.set(-1,0,0,0)}}}function n(){let B=!1,yt=!1,xt=null,Ct=null,pt=null;return{setReversed:function(at){if(yt!==at){let Ut=t.get("EXT_clip_control");at?Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.ZERO_TO_ONE_EXT):Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.NEGATIVE_ONE_TO_ONE_EXT),yt=at;let Yt=pt;pt=null,this.setClear(Yt)}},getReversed:function(){return yt},setTest:function(at){at?U(i.DEPTH_TEST):W(i.DEPTH_TEST)},setMask:function(at){xt!==at&&!B&&(i.depthMask(at),xt=at)},setFunc:function(at){if(yt&&(at=TM[at]),Ct!==at){switch(at){case Nl:i.depthFunc(i.NEVER);break;case Fl:i.depthFunc(i.ALWAYS);break;case Ol:i.depthFunc(i.LESS);break;case Rr:i.depthFunc(i.LEQUAL);break;case Bl:i.depthFunc(i.EQUAL);break;case zl:i.depthFunc(i.GEQUAL);break;case kl:i.depthFunc(i.GREATER);break;case Vl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ct=at}},setLocked:function(at){B=at},setClear:function(at){pt!==at&&(yt&&(at=1-at),i.clearDepth(at),pt=at)},reset:function(){B=!1,xt=null,Ct=null,pt=null,yt=!1}}}function r(){let B=!1,yt=null,xt=null,Ct=null,pt=null,at=null,Ut=null,Yt=null,we=null;return{setTest:function(de){B||(de?U(i.STENCIL_TEST):W(i.STENCIL_TEST))},setMask:function(de){yt!==de&&!B&&(i.stencilMask(de),yt=de)},setFunc:function(de,Ri,pi){(xt!==de||Ct!==Ri||pt!==pi)&&(i.stencilFunc(de,Ri,pi),xt=de,Ct=Ri,pt=pi)},setOp:function(de,Ri,pi){(at!==de||Ut!==Ri||Yt!==pi)&&(i.stencilOp(de,Ri,pi),at=de,Ut=Ri,Yt=pi)},setLocked:function(de){B=de},setClear:function(de){we!==de&&(i.clearStencil(de),we=de)},reset:function(){B=!1,yt=null,xt=null,Ct=null,pt=null,at=null,Ut=null,Yt=null,we=null}}}let s=new e,o=new n,a=new r,l=new WeakMap,c=new WeakMap,u={},h={},f=new WeakMap,d=[],g=null,y=!1,m=null,p=null,x=null,v=null,_=null,b=null,E=null,T=new Vt(0,0,0),D=0,S=!1,M=null,A=null,L=null,F=null,O=null,H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,rt=0,K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(K)[1]),V=rt>=1):K.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),V=rt>=2);let lt=null,_t={},St=i.getParameter(i.SCISSOR_BOX),Ft=i.getParameter(i.VIEWPORT),Bt=new Le().fromArray(St),Kt=new Le().fromArray(Ft);function Ot(B,yt,xt,Ct){let pt=new Uint8Array(4),at=i.createTexture();i.bindTexture(B,at),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ut=0;Ut<xt;Ut++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(yt,0,i.RGBA,1,1,Ct,0,i.RGBA,i.UNSIGNED_BYTE,pt):i.texImage2D(yt+Ut,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pt);return at}let N={};N[i.TEXTURE_2D]=Ot(i.TEXTURE_2D,i.TEXTURE_2D,1),N[i.TEXTURE_CUBE_MAP]=Ot(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),N[i.TEXTURE_2D_ARRAY]=Ot(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),N[i.TEXTURE_3D]=Ot(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),U(i.DEPTH_TEST),o.setFunc(Rr),J(!1),k(ru),U(i.CULL_FACE),z(zi);function U(B){u[B]!==!0&&(i.enable(B),u[B]=!0)}function W(B){u[B]!==!1&&(i.disable(B),u[B]=!1)}function Z(B,yt){return h[B]!==yt?(i.bindFramebuffer(B,yt),h[B]=yt,B===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=yt),B===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=yt),!0):!1}function $(B,yt){let xt=d,Ct=!1;if(B){xt=f.get(yt),xt===void 0&&(xt=[],f.set(yt,xt));let pt=B.textures;if(xt.length!==pt.length||xt[0]!==i.COLOR_ATTACHMENT0){for(let at=0,Ut=pt.length;at<Ut;at++)xt[at]=i.COLOR_ATTACHMENT0+at;xt.length=pt.length,Ct=!0}}else xt[0]!==i.BACK&&(xt[0]=i.BACK,Ct=!0);Ct&&i.drawBuffers(xt)}function j(B){return g!==B?(i.useProgram(B),g=B,!0):!1}let it={[Qi]:i.FUNC_ADD,[Ld]:i.FUNC_SUBTRACT,[Ud]:i.FUNC_REVERSE_SUBTRACT};it[Nd]=i.MIN,it[Fd]=i.MAX;let P={[Od]:i.ZERO,[Bd]:i.ONE,[zd]:i.SRC_COLOR,[sl]:i.SRC_ALPHA,[Xd]:i.SRC_ALPHA_SATURATE,[Gd]:i.DST_COLOR,[Vd]:i.DST_ALPHA,[kd]:i.ONE_MINUS_SRC_COLOR,[ol]:i.ONE_MINUS_SRC_ALPHA,[Wd]:i.ONE_MINUS_DST_COLOR,[Hd]:i.ONE_MINUS_DST_ALPHA,[qd]:i.CONSTANT_COLOR,[Yd]:i.ONE_MINUS_CONSTANT_COLOR,[Zd]:i.CONSTANT_ALPHA,[$d]:i.ONE_MINUS_CONSTANT_ALPHA};function z(B,yt,xt,Ct,pt,at,Ut,Yt,we,de){if(B===zi){y===!0&&(W(i.BLEND),y=!1);return}if(y===!1&&(U(i.BLEND),y=!0),B!==Dd){if(B!==m||de!==S){if((p!==Qi||_!==Qi)&&(i.blendEquation(i.FUNC_ADD),p=Qi,_=Qi),de)switch(B){case Ar:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ou:i.blendFunc(i.ONE,i.ONE);break;case au:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case lu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Ar:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ou:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case au:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case lu:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}x=null,v=null,b=null,E=null,T.set(0,0,0),D=0,m=B,S=de}return}pt=pt||yt,at=at||xt,Ut=Ut||Ct,(yt!==p||pt!==_)&&(i.blendEquationSeparate(it[yt],it[pt]),p=yt,_=pt),(xt!==x||Ct!==v||at!==b||Ut!==E)&&(i.blendFuncSeparate(P[xt],P[Ct],P[at],P[Ut]),x=xt,v=Ct,b=at,E=Ut),(Yt.equals(T)===!1||we!==D)&&(i.blendColor(Yt.r,Yt.g,Yt.b,we),T.copy(Yt),D=we),m=B,S=!1}function X(B,yt){B.side===Ke?W(i.CULL_FACE):U(i.CULL_FACE);let xt=B.side===Je;yt&&(xt=!xt),J(xt),B.blending===Ar&&B.transparent===!1?z(zi):z(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),s.setMask(B.colorWrite);let Ct=B.stencilWrite;a.setTest(Ct),Ct&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),st(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?U(i.SAMPLE_ALPHA_TO_COVERAGE):W(i.SAMPLE_ALPHA_TO_COVERAGE)}function J(B){M!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),M=B)}function k(B){B!==Cd?(U(i.CULL_FACE),B!==A&&(B===ru?i.cullFace(i.BACK):B===Pd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):W(i.CULL_FACE),A=B}function ft(B){B!==L&&(V&&i.lineWidth(B),L=B)}function st(B,yt,xt){B?(U(i.POLYGON_OFFSET_FILL),(F!==yt||O!==xt)&&(i.polygonOffset(yt,xt),F=yt,O=xt)):W(i.POLYGON_OFFSET_FILL)}function ht(B){B?U(i.SCISSOR_TEST):W(i.SCISSOR_TEST)}function Dt(B){B===void 0&&(B=i.TEXTURE0+H-1),lt!==B&&(i.activeTexture(B),lt=B)}function vt(B,yt,xt){xt===void 0&&(lt===null?xt=i.TEXTURE0+H-1:xt=lt);let Ct=_t[xt];Ct===void 0&&(Ct={type:void 0,texture:void 0},_t[xt]=Ct),(Ct.type!==B||Ct.texture!==yt)&&(lt!==xt&&(i.activeTexture(xt),lt=xt),i.bindTexture(B,yt||N[B]),Ct.type=B,Ct.texture=yt)}function C(){let B=_t[lt];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function w(){try{i.compressedTexImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function G(){try{i.compressedTexImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function et(){try{i.texSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ot(){try{i.texSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function nt(){try{i.compressedTexSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function bt(){try{i.compressedTexSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function gt(){try{i.texStorage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Rt(){try{i.texStorage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Lt(){try{i.texImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function dt(){try{i.texImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Tt(B){Bt.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),Bt.copy(B))}function Gt(B){Kt.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),Kt.copy(B))}function Nt(B,yt){let xt=c.get(yt);xt===void 0&&(xt=new WeakMap,c.set(yt,xt));let Ct=xt.get(B);Ct===void 0&&(Ct=i.getUniformBlockIndex(yt,B.name),xt.set(B,Ct))}function wt(B,yt){let Ct=c.get(yt).get(B);l.get(yt)!==Ct&&(i.uniformBlockBinding(yt,Ct,B.__bindingPointIndex),l.set(yt,Ct))}function $t(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},lt=null,_t={},h={},f=new WeakMap,d=[],g=null,y=!1,m=null,p=null,x=null,v=null,_=null,b=null,E=null,T=new Vt(0,0,0),D=0,S=!1,M=null,A=null,L=null,F=null,O=null,Bt.set(0,0,i.canvas.width,i.canvas.height),Kt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:U,disable:W,bindFramebuffer:Z,drawBuffers:$,useProgram:j,setBlending:z,setMaterial:X,setFlipSided:J,setCullFace:k,setLineWidth:ft,setPolygonOffset:st,setScissorTest:ht,activeTexture:Dt,bindTexture:vt,unbindTexture:C,compressedTexImage2D:w,compressedTexImage3D:G,texImage2D:Lt,texImage3D:dt,updateUBOMapping:Nt,uniformBlockBinding:wt,texStorage2D:gt,texStorage3D:Rt,texSubImage2D:et,texSubImage3D:ot,compressedTexSubImage2D:nt,compressedTexSubImage3D:bt,scissor:Tt,viewport:Gt,reset:$t}}function RM(i,t,e,n,r,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ct,u=new WeakMap,h,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,w){return d?new OffscreenCanvas(C,w):gs("canvas")}function y(C,w,G){let et=1,ot=vt(C);if((ot.width>G||ot.height>G)&&(et=G/Math.max(ot.width,ot.height)),et<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let nt=Math.floor(et*ot.width),bt=Math.floor(et*ot.height);h===void 0&&(h=g(nt,bt));let gt=w?g(nt,bt):h;return gt.width=nt,gt.height=bt,gt.getContext("2d").drawImage(C,0,0,nt,bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+nt+"x"+bt+")."),gt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){i.generateMipmap(C)}function x(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(C,w,G,et,ot=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let nt=w;if(w===i.RED&&(G===i.FLOAT&&(nt=i.R32F),G===i.HALF_FLOAT&&(nt=i.R16F),G===i.UNSIGNED_BYTE&&(nt=i.R8)),w===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(nt=i.R8UI),G===i.UNSIGNED_SHORT&&(nt=i.R16UI),G===i.UNSIGNED_INT&&(nt=i.R32UI),G===i.BYTE&&(nt=i.R8I),G===i.SHORT&&(nt=i.R16I),G===i.INT&&(nt=i.R32I)),w===i.RG&&(G===i.FLOAT&&(nt=i.RG32F),G===i.HALF_FLOAT&&(nt=i.RG16F),G===i.UNSIGNED_BYTE&&(nt=i.RG8)),w===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(nt=i.RG8UI),G===i.UNSIGNED_SHORT&&(nt=i.RG16UI),G===i.UNSIGNED_INT&&(nt=i.RG32UI),G===i.BYTE&&(nt=i.RG8I),G===i.SHORT&&(nt=i.RG16I),G===i.INT&&(nt=i.RG32I)),w===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(nt=i.RGB8UI),G===i.UNSIGNED_SHORT&&(nt=i.RGB16UI),G===i.UNSIGNED_INT&&(nt=i.RGB32UI),G===i.BYTE&&(nt=i.RGB8I),G===i.SHORT&&(nt=i.RGB16I),G===i.INT&&(nt=i.RGB32I)),w===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(nt=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(nt=i.RGBA16UI),G===i.UNSIGNED_INT&&(nt=i.RGBA32UI),G===i.BYTE&&(nt=i.RGBA8I),G===i.SHORT&&(nt=i.RGBA16I),G===i.INT&&(nt=i.RGBA32I)),w===i.RGB&&(G===i.UNSIGNED_INT_5_9_9_9_REV&&(nt=i.RGB9_E5),G===i.UNSIGNED_INT_10F_11F_11F_REV&&(nt=i.R11F_G11F_B10F)),w===i.RGBA){let bt=ot?vo:ne.getTransfer(et);G===i.FLOAT&&(nt=i.RGBA32F),G===i.HALF_FLOAT&&(nt=i.RGBA16F),G===i.UNSIGNED_BYTE&&(nt=bt===me?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(nt=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(nt=i.RGB5_A1)}return(nt===i.R16F||nt===i.R32F||nt===i.RG16F||nt===i.RG32F||nt===i.RGBA16F||nt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function _(C,w){let G;return C?w===null||w===Vi||w===Cs?G=i.DEPTH24_STENCIL8:w===Gn?G=i.DEPTH32F_STENCIL8:w===As&&(G=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Vi||w===Cs?G=i.DEPTH_COMPONENT24:w===Gn?G=i.DEPTH_COMPONENT32F:w===As&&(G=i.DEPTH_COMPONENT16),G}function b(C,w){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==$e&&C.minFilter!==cn?Math.log2(Math.max(w.width,w.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?w.mipmaps.length:1}function E(C){let w=C.target;w.removeEventListener("dispose",E),D(w),w.isVideoTexture&&u.delete(w)}function T(C){let w=C.target;w.removeEventListener("dispose",T),M(w)}function D(C){let w=n.get(C);if(w.__webglInit===void 0)return;let G=C.source,et=f.get(G);if(et){let ot=et[w.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&S(C),Object.keys(et).length===0&&f.delete(G)}n.remove(C)}function S(C){let w=n.get(C);i.deleteTexture(w.__webglTexture);let G=C.source,et=f.get(G);delete et[w.__cacheKey],o.memory.textures--}function M(C){let w=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(w.__webglFramebuffer[et]))for(let ot=0;ot<w.__webglFramebuffer[et].length;ot++)i.deleteFramebuffer(w.__webglFramebuffer[et][ot]);else i.deleteFramebuffer(w.__webglFramebuffer[et]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[et])}else{if(Array.isArray(w.__webglFramebuffer))for(let et=0;et<w.__webglFramebuffer.length;et++)i.deleteFramebuffer(w.__webglFramebuffer[et]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let et=0;et<w.__webglColorRenderbuffer.length;et++)w.__webglColorRenderbuffer[et]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[et]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let G=C.textures;for(let et=0,ot=G.length;et<ot;et++){let nt=n.get(G[et]);nt.__webglTexture&&(i.deleteTexture(nt.__webglTexture),o.memory.textures--),n.remove(G[et])}n.remove(C)}let A=0;function L(){A=0}function F(){let C=A;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),A+=1,C}function O(C){let w=[];return w.push(C.wrapS),w.push(C.wrapT),w.push(C.wrapR||0),w.push(C.magFilter),w.push(C.minFilter),w.push(C.anisotropy),w.push(C.internalFormat),w.push(C.format),w.push(C.type),w.push(C.generateMipmaps),w.push(C.premultiplyAlpha),w.push(C.flipY),w.push(C.unpackAlignment),w.push(C.colorSpace),w.join()}function H(C,w){let G=n.get(C);if(C.isVideoTexture&&ht(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&G.__version!==C.version){let et=C.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{N(G,C,w);return}}else C.isExternalTexture&&(G.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+w)}function V(C,w){let G=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){N(G,C,w);return}e.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+w)}function rt(C,w){let G=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){N(G,C,w);return}e.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+w)}function K(C,w){let G=n.get(C);if(C.version>0&&G.__version!==C.version){U(G,C,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+w)}let lt={[Fi]:i.REPEAT,[ei]:i.CLAMP_TO_EDGE,[Cr]:i.MIRRORED_REPEAT},_t={[$e]:i.NEAREST,[rp]:i.NEAREST_MIPMAP_NEAREST,[Ko]:i.NEAREST_MIPMAP_LINEAR,[cn]:i.LINEAR,[ql]:i.LINEAR_MIPMAP_NEAREST,[si]:i.LINEAR_MIPMAP_LINEAR},St={[lp]:i.NEVER,[pp]:i.ALWAYS,[cp]:i.LESS,[_u]:i.LEQUAL,[hp]:i.EQUAL,[dp]:i.GEQUAL,[up]:i.GREATER,[fp]:i.NOTEQUAL};function Ft(C,w){if(w.type===Gn&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===cn||w.magFilter===ql||w.magFilter===Ko||w.magFilter===si||w.minFilter===cn||w.minFilter===ql||w.minFilter===Ko||w.minFilter===si)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,lt[w.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,lt[w.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,lt[w.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,_t[w.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,_t[w.minFilter]),w.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,St[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===$e||w.minFilter!==Ko&&w.minFilter!==si||w.type===Gn&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let G=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function Bt(C,w){let G=!1;C.__webglInit===void 0&&(C.__webglInit=!0,w.addEventListener("dispose",E));let et=w.source,ot=f.get(et);ot===void 0&&(ot={},f.set(et,ot));let nt=O(w);if(nt!==C.__cacheKey){ot[nt]===void 0&&(ot[nt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ot[nt].usedTimes++;let bt=ot[C.__cacheKey];bt!==void 0&&(ot[C.__cacheKey].usedTimes--,bt.usedTimes===0&&S(w)),C.__cacheKey=nt,C.__webglTexture=ot[nt].texture}return G}function Kt(C,w,G){return Math.floor(Math.floor(C/G)/w)}function Ot(C,w,G,et){let nt=C.updateRanges;if(nt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,w.width,w.height,G,et,w.data);else{nt.sort((dt,Tt)=>dt.start-Tt.start);let bt=0;for(let dt=1;dt<nt.length;dt++){let Tt=nt[bt],Gt=nt[dt],Nt=Tt.start+Tt.count,wt=Kt(Gt.start,w.width,4),$t=Kt(Tt.start,w.width,4);Gt.start<=Nt+1&&wt===$t&&Kt(Gt.start+Gt.count-1,w.width,4)===wt?Tt.count=Math.max(Tt.count,Gt.start+Gt.count-Tt.start):(++bt,nt[bt]=Gt)}nt.length=bt+1;let gt=i.getParameter(i.UNPACK_ROW_LENGTH),Rt=i.getParameter(i.UNPACK_SKIP_PIXELS),Lt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,w.width);for(let dt=0,Tt=nt.length;dt<Tt;dt++){let Gt=nt[dt],Nt=Math.floor(Gt.start/4),wt=Math.ceil(Gt.count/4),$t=Nt%w.width,B=Math.floor(Nt/w.width),yt=wt,xt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,$t),i.pixelStorei(i.UNPACK_SKIP_ROWS,B),e.texSubImage2D(i.TEXTURE_2D,0,$t,B,yt,xt,G,et,w.data)}C.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,gt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Rt),i.pixelStorei(i.UNPACK_SKIP_ROWS,Lt)}}function N(C,w,G){let et=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(et=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(et=i.TEXTURE_3D);let ot=Bt(C,w),nt=w.source;e.bindTexture(et,C.__webglTexture,i.TEXTURE0+G);let bt=n.get(nt);if(nt.version!==bt.__version||ot===!0){e.activeTexture(i.TEXTURE0+G);let gt=ne.getPrimaries(ne.workingColorSpace),Rt=w.colorSpace===Hi?null:ne.getPrimaries(w.colorSpace),Lt=w.colorSpace===Hi||gt===Rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);let dt=y(w.image,!1,r.maxTextureSize);dt=Dt(w,dt);let Tt=s.convert(w.format,w.colorSpace),Gt=s.convert(w.type),Nt=v(w.internalFormat,Tt,Gt,w.colorSpace,w.isVideoTexture);Ft(et,w);let wt,$t=w.mipmaps,B=w.isVideoTexture!==!0,yt=bt.__version===void 0||ot===!0,xt=nt.dataReady,Ct=b(w,dt);if(w.isDepthTexture)Nt=_(w.format===Ps,w.type),yt&&(B?e.texStorage2D(i.TEXTURE_2D,1,Nt,dt.width,dt.height):e.texImage2D(i.TEXTURE_2D,0,Nt,dt.width,dt.height,0,Tt,Gt,null));else if(w.isDataTexture)if($t.length>0){B&&yt&&e.texStorage2D(i.TEXTURE_2D,Ct,Nt,$t[0].width,$t[0].height);for(let pt=0,at=$t.length;pt<at;pt++)wt=$t[pt],B?xt&&e.texSubImage2D(i.TEXTURE_2D,pt,0,0,wt.width,wt.height,Tt,Gt,wt.data):e.texImage2D(i.TEXTURE_2D,pt,Nt,wt.width,wt.height,0,Tt,Gt,wt.data);w.generateMipmaps=!1}else B?(yt&&e.texStorage2D(i.TEXTURE_2D,Ct,Nt,dt.width,dt.height),xt&&Ot(w,dt,Tt,Gt)):e.texImage2D(i.TEXTURE_2D,0,Nt,dt.width,dt.height,0,Tt,Gt,dt.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){B&&yt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ct,Nt,$t[0].width,$t[0].height,dt.depth);for(let pt=0,at=$t.length;pt<at;pt++)if(wt=$t[pt],w.format!==xn)if(Tt!==null)if(B){if(xt)if(w.layerUpdates.size>0){let Ut=Au(wt.width,wt.height,w.format,w.type);for(let Yt of w.layerUpdates){let we=wt.data.subarray(Yt*Ut/wt.data.BYTES_PER_ELEMENT,(Yt+1)*Ut/wt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pt,0,0,Yt,wt.width,wt.height,1,Tt,we)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pt,0,0,0,wt.width,wt.height,dt.depth,Tt,wt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,pt,Nt,wt.width,wt.height,dt.depth,0,wt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else B?xt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,pt,0,0,0,wt.width,wt.height,dt.depth,Tt,Gt,wt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,pt,Nt,wt.width,wt.height,dt.depth,0,Tt,Gt,wt.data)}else{B&&yt&&e.texStorage2D(i.TEXTURE_2D,Ct,Nt,$t[0].width,$t[0].height);for(let pt=0,at=$t.length;pt<at;pt++)wt=$t[pt],w.format!==xn?Tt!==null?B?xt&&e.compressedTexSubImage2D(i.TEXTURE_2D,pt,0,0,wt.width,wt.height,Tt,wt.data):e.compressedTexImage2D(i.TEXTURE_2D,pt,Nt,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?xt&&e.texSubImage2D(i.TEXTURE_2D,pt,0,0,wt.width,wt.height,Tt,Gt,wt.data):e.texImage2D(i.TEXTURE_2D,pt,Nt,wt.width,wt.height,0,Tt,Gt,wt.data)}else if(w.isDataArrayTexture)if(B){if(yt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ct,Nt,dt.width,dt.height,dt.depth),xt)if(w.layerUpdates.size>0){let pt=Au(dt.width,dt.height,w.format,w.type);for(let at of w.layerUpdates){let Ut=dt.data.subarray(at*pt/dt.data.BYTES_PER_ELEMENT,(at+1)*pt/dt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,at,dt.width,dt.height,1,Tt,Gt,Ut)}w.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,Tt,Gt,dt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Nt,dt.width,dt.height,dt.depth,0,Tt,Gt,dt.data);else if(w.isData3DTexture)B?(yt&&e.texStorage3D(i.TEXTURE_3D,Ct,Nt,dt.width,dt.height,dt.depth),xt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,Tt,Gt,dt.data)):e.texImage3D(i.TEXTURE_3D,0,Nt,dt.width,dt.height,dt.depth,0,Tt,Gt,dt.data);else if(w.isFramebufferTexture){if(yt)if(B)e.texStorage2D(i.TEXTURE_2D,Ct,Nt,dt.width,dt.height);else{let pt=dt.width,at=dt.height;for(let Ut=0;Ut<Ct;Ut++)e.texImage2D(i.TEXTURE_2D,Ut,Nt,pt,at,0,Tt,Gt,null),pt>>=1,at>>=1}}else if($t.length>0){if(B&&yt){let pt=vt($t[0]);e.texStorage2D(i.TEXTURE_2D,Ct,Nt,pt.width,pt.height)}for(let pt=0,at=$t.length;pt<at;pt++)wt=$t[pt],B?xt&&e.texSubImage2D(i.TEXTURE_2D,pt,0,0,Tt,Gt,wt):e.texImage2D(i.TEXTURE_2D,pt,Nt,Tt,Gt,wt);w.generateMipmaps=!1}else if(B){if(yt){let pt=vt(dt);e.texStorage2D(i.TEXTURE_2D,Ct,Nt,pt.width,pt.height)}xt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Tt,Gt,dt)}else e.texImage2D(i.TEXTURE_2D,0,Nt,Tt,Gt,dt);m(w)&&p(et),bt.__version=nt.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function U(C,w,G){if(w.image.length!==6)return;let et=Bt(C,w),ot=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+G);let nt=n.get(ot);if(ot.version!==nt.__version||et===!0){e.activeTexture(i.TEXTURE0+G);let bt=ne.getPrimaries(ne.workingColorSpace),gt=w.colorSpace===Hi?null:ne.getPrimaries(w.colorSpace),Rt=w.colorSpace===Hi||bt===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);let Lt=w.isCompressedTexture||w.image[0].isCompressedTexture,dt=w.image[0]&&w.image[0].isDataTexture,Tt=[];for(let at=0;at<6;at++)!Lt&&!dt?Tt[at]=y(w.image[at],!0,r.maxCubemapSize):Tt[at]=dt?w.image[at].image:w.image[at],Tt[at]=Dt(w,Tt[at]);let Gt=Tt[0],Nt=s.convert(w.format,w.colorSpace),wt=s.convert(w.type),$t=v(w.internalFormat,Nt,wt,w.colorSpace),B=w.isVideoTexture!==!0,yt=nt.__version===void 0||et===!0,xt=ot.dataReady,Ct=b(w,Gt);Ft(i.TEXTURE_CUBE_MAP,w);let pt;if(Lt){B&&yt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ct,$t,Gt.width,Gt.height);for(let at=0;at<6;at++){pt=Tt[at].mipmaps;for(let Ut=0;Ut<pt.length;Ut++){let Yt=pt[Ut];w.format!==xn?Nt!==null?B?xt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ut,0,0,Yt.width,Yt.height,Nt,Yt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ut,$t,Yt.width,Yt.height,0,Yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ut,0,0,Yt.width,Yt.height,Nt,wt,Yt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ut,$t,Yt.width,Yt.height,0,Nt,wt,Yt.data)}}}else{if(pt=w.mipmaps,B&&yt){pt.length>0&&Ct++;let at=vt(Tt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Ct,$t,at.width,at.height)}for(let at=0;at<6;at++)if(dt){B?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,Tt[at].width,Tt[at].height,Nt,wt,Tt[at].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,$t,Tt[at].width,Tt[at].height,0,Nt,wt,Tt[at].data);for(let Ut=0;Ut<pt.length;Ut++){let we=pt[Ut].image[at].image;B?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ut+1,0,0,we.width,we.height,Nt,wt,we.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ut+1,$t,we.width,we.height,0,Nt,wt,we.data)}}else{B?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,Nt,wt,Tt[at]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,$t,Nt,wt,Tt[at]);for(let Ut=0;Ut<pt.length;Ut++){let Yt=pt[Ut];B?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ut+1,0,0,Nt,wt,Yt.image[at]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ut+1,$t,Nt,wt,Yt.image[at])}}}m(w)&&p(i.TEXTURE_CUBE_MAP),nt.__version=ot.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function W(C,w,G,et,ot,nt){let bt=s.convert(G.format,G.colorSpace),gt=s.convert(G.type),Rt=v(G.internalFormat,bt,gt,G.colorSpace),Lt=n.get(w),dt=n.get(G);if(dt.__renderTarget=w,!Lt.__hasExternalTextures){let Tt=Math.max(1,w.width>>nt),Gt=Math.max(1,w.height>>nt);ot===i.TEXTURE_3D||ot===i.TEXTURE_2D_ARRAY?e.texImage3D(ot,nt,Rt,Tt,Gt,w.depth,0,bt,gt,null):e.texImage2D(ot,nt,Rt,Tt,Gt,0,bt,gt,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),st(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,et,ot,dt.__webglTexture,0,ft(w)):(ot===i.TEXTURE_2D||ot>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,et,ot,dt.__webglTexture,nt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Z(C,w,G){if(i.bindRenderbuffer(i.RENDERBUFFER,C),w.depthBuffer){let et=w.depthTexture,ot=et&&et.isDepthTexture?et.type:null,nt=_(w.stencilBuffer,ot),bt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=ft(w);st(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,gt,nt,w.width,w.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,gt,nt,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,nt,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,bt,i.RENDERBUFFER,C)}else{let et=w.textures;for(let ot=0;ot<et.length;ot++){let nt=et[ot],bt=s.convert(nt.format,nt.colorSpace),gt=s.convert(nt.type),Rt=v(nt.internalFormat,bt,gt,nt.colorSpace),Lt=ft(w);G&&st(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Lt,Rt,w.width,w.height):st(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Lt,Rt,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Rt,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function $(C,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let et=n.get(w.depthTexture);et.__renderTarget=w,(!et.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),H(w.depthTexture,0);let ot=et.__webglTexture,nt=ft(w);if(w.depthTexture.format===ps)st(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ot,0,nt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ot,0);else if(w.depthTexture.format===Ps)st(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ot,0,nt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ot,0);else throw new Error("Unknown depthTexture format")}function j(C){let w=n.get(C),G=C.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==C.depthTexture){let et=C.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),et){let ot=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,et.removeEventListener("dispose",ot)};et.addEventListener("dispose",ot),w.__depthDisposeCallback=ot}w.__boundDepthTexture=et}if(C.depthTexture&&!w.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");let et=C.texture.mipmaps;et&&et.length>0?$(w.__webglFramebuffer[0],C):$(w.__webglFramebuffer,C)}else if(G){w.__webglDepthbuffer=[];for(let et=0;et<6;et++)if(e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[et]),w.__webglDepthbuffer[et]===void 0)w.__webglDepthbuffer[et]=i.createRenderbuffer(),Z(w.__webglDepthbuffer[et],C,!1);else{let ot=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,nt=w.__webglDepthbuffer[et];i.bindRenderbuffer(i.RENDERBUFFER,nt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ot,i.RENDERBUFFER,nt)}}else{let et=C.texture.mipmaps;if(et&&et.length>0?e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),Z(w.__webglDepthbuffer,C,!1);else{let ot=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,nt=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,nt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ot,i.RENDERBUFFER,nt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function it(C,w,G){let et=n.get(C);w!==void 0&&W(et.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&j(C)}function P(C){let w=C.texture,G=n.get(C),et=n.get(w);C.addEventListener("dispose",T);let ot=C.textures,nt=C.isWebGLCubeRenderTarget===!0,bt=ot.length>1;if(bt||(et.__webglTexture===void 0&&(et.__webglTexture=i.createTexture()),et.__version=w.version,o.memory.textures++),nt){G.__webglFramebuffer=[];for(let gt=0;gt<6;gt++)if(w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer[gt]=[];for(let Rt=0;Rt<w.mipmaps.length;Rt++)G.__webglFramebuffer[gt][Rt]=i.createFramebuffer()}else G.__webglFramebuffer[gt]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer=[];for(let gt=0;gt<w.mipmaps.length;gt++)G.__webglFramebuffer[gt]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(bt)for(let gt=0,Rt=ot.length;gt<Rt;gt++){let Lt=n.get(ot[gt]);Lt.__webglTexture===void 0&&(Lt.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&st(C)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let gt=0;gt<ot.length;gt++){let Rt=ot[gt];G.__webglColorRenderbuffer[gt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[gt]);let Lt=s.convert(Rt.format,Rt.colorSpace),dt=s.convert(Rt.type),Tt=v(Rt.internalFormat,Lt,dt,Rt.colorSpace,C.isXRRenderTarget===!0),Gt=ft(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt,Tt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,G.__webglColorRenderbuffer[gt])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),Z(G.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(nt){e.bindTexture(i.TEXTURE_CUBE_MAP,et.__webglTexture),Ft(i.TEXTURE_CUBE_MAP,w);for(let gt=0;gt<6;gt++)if(w.mipmaps&&w.mipmaps.length>0)for(let Rt=0;Rt<w.mipmaps.length;Rt++)W(G.__webglFramebuffer[gt][Rt],C,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Rt);else W(G.__webglFramebuffer[gt],C,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0);m(w)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let gt=0,Rt=ot.length;gt<Rt;gt++){let Lt=ot[gt],dt=n.get(Lt),Tt=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Tt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Tt,dt.__webglTexture),Ft(Tt,Lt),W(G.__webglFramebuffer,C,Lt,i.COLOR_ATTACHMENT0+gt,Tt,0),m(Lt)&&p(Tt)}e.unbindTexture()}else{let gt=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(gt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(gt,et.__webglTexture),Ft(gt,w),w.mipmaps&&w.mipmaps.length>0)for(let Rt=0;Rt<w.mipmaps.length;Rt++)W(G.__webglFramebuffer[Rt],C,w,i.COLOR_ATTACHMENT0,gt,Rt);else W(G.__webglFramebuffer,C,w,i.COLOR_ATTACHMENT0,gt,0);m(w)&&p(gt),e.unbindTexture()}C.depthBuffer&&j(C)}function z(C){let w=C.textures;for(let G=0,et=w.length;G<et;G++){let ot=w[G];if(m(ot)){let nt=x(C),bt=n.get(ot).__webglTexture;e.bindTexture(nt,bt),p(nt),e.unbindTexture()}}}let X=[],J=[];function k(C){if(C.samples>0){if(st(C)===!1){let w=C.textures,G=C.width,et=C.height,ot=i.COLOR_BUFFER_BIT,nt=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=n.get(C),gt=w.length>1;if(gt)for(let Lt=0;Lt<w.length;Lt++)e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer);let Rt=C.texture.mipmaps;Rt&&Rt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let Lt=0;Lt<w.length;Lt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ot|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ot|=i.STENCIL_BUFFER_BIT)),gt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,bt.__webglColorRenderbuffer[Lt]);let dt=n.get(w[Lt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,dt,0)}i.blitFramebuffer(0,0,G,et,0,0,G,et,ot,i.NEAREST),l===!0&&(X.length=0,J.length=0,X.push(i.COLOR_ATTACHMENT0+Lt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(X.push(nt),J.push(nt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,J)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,X))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),gt)for(let Lt=0;Lt<w.length;Lt++){e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.RENDERBUFFER,bt.__webglColorRenderbuffer[Lt]);let dt=n.get(w[Lt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.TEXTURE_2D,dt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let w=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function ft(C){return Math.min(r.maxSamples,C.samples)}function st(C){let w=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ht(C){let w=o.render.frame;u.get(C)!==w&&(u.set(C,w),C.update())}function Dt(C,w){let G=C.colorSpace,et=C.format,ot=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||G!==Pr&&G!==Hi&&(ne.getTransfer(G)===me?(et!==xn||ot!==oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),w}function vt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=L,this.setTexture2D=H,this.setTexture2DArray=V,this.setTexture3D=rt,this.setTextureCube=K,this.rebindTextures=it,this.setupRenderTarget=P,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=k,this.setupDepthRenderbuffer=j,this.setupFrameBufferTexture=W,this.useMultisampledRTT=st}function CM(i,t){function e(n,r=Hi){let s,o=ne.getTransfer(r);if(n===oi)return i.UNSIGNED_BYTE;if(n===Zl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===$l)return i.UNSIGNED_SHORT_5_5_5_1;if(n===fu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===du)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===hu)return i.BYTE;if(n===uu)return i.SHORT;if(n===As)return i.UNSIGNED_SHORT;if(n===Yl)return i.INT;if(n===Vi)return i.UNSIGNED_INT;if(n===Gn)return i.FLOAT;if(n===Rs)return i.HALF_FLOAT;if(n===pu)return i.ALPHA;if(n===mu)return i.RGB;if(n===xn)return i.RGBA;if(n===ps)return i.DEPTH_COMPONENT;if(n===Ps)return i.DEPTH_STENCIL;if(n===gu)return i.RED;if(n===jo)return i.RED_INTEGER;if(n===yu)return i.RG;if(n===Jl)return i.RG_INTEGER;if(n===Kl)return i.RGBA_INTEGER;if(n===Qo||n===ta||n===ea||n===na)if(o===me)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Qo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ta)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ea)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===na)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Qo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ta)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ea)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===na)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===jl||n===Ql||n===tc||n===ec)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===jl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ql)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===tc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ec)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===nc||n===ic||n===rc)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===nc||n===ic)return o===me?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===rc)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===sc||n===oc||n===ac||n===lc||n===cc||n===hc||n===uc||n===fc||n===dc||n===pc||n===mc||n===gc||n===yc||n===_c)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===sc)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===oc)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ac)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===lc)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===cc)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===hc)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===uc)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===fc)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===dc)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===pc)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===mc)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===gc)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===yc)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===_c)return o===me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===vc||n===xc||n===Mc)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===vc)return o===me?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===xc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Mc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Sc||n===bc||n===wc||n===Ec)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Sc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===bc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===wc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ec)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Cs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var PM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,IM=`
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

}`,ku=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Co(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Rn({vertexShader:PM,fragmentShader:IM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new se(new zo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Vu=class extends _i{constructor(t,e){super();let n=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null,y=typeof XRWebGLBinding<"u",m=new ku,p={},x=e.getContextAttributes(),v=null,_=null,b=[],E=[],T=new ct,D=null,S=new on;S.viewport=new Le;let M=new on;M.viewport=new Le;let A=[S,M],L=new Ul,F=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let U=b[N];return U===void 0&&(U=new xs,b[N]=U),U.getTargetRaySpace()},this.getControllerGrip=function(N){let U=b[N];return U===void 0&&(U=new xs,b[N]=U),U.getGripSpace()},this.getHand=function(N){let U=b[N];return U===void 0&&(U=new xs,b[N]=U),U.getHandSpace()};function H(N){let U=E.indexOf(N.inputSource);if(U===-1)return;let W=b[U];W!==void 0&&(W.update(N.inputSource,N.frame,c||o),W.dispatchEvent({type:N.type,data:N.inputSource}))}function V(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",rt);for(let N=0;N<b.length;N++){let U=E[N];U!==null&&(E[N]=null,b[N].disconnect(U))}F=null,O=null,m.reset();for(let N in p)delete p[N];t.setRenderTarget(v),d=null,f=null,h=null,r=null,_=null,Ot.stop(),n.isPresenting=!1,t.setPixelRatio(D),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){s=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){a=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(N){c=N},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&y&&(h=new XRWebGLBinding(r,e)),h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(N){if(r=N,r!==null){if(v=t.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",V),r.addEventListener("inputsourceschange",rt),x.xrCompatible!==!0&&await e.makeXRCompatible(),D=t.getPixelRatio(),t.getSize(T),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let W=null,Z=null,$=null;x.depth&&($=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,W=x.stencil?Ps:ps,Z=x.stencil?Cs:Vi);let j={colorFormat:e.RGBA8,depthFormat:$,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(j),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),_=new vi(f.textureWidth,f.textureHeight,{format:xn,type:oi,depthTexture:new Ro(f.textureWidth,f.textureHeight,Z,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let W={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,e,W),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new vi(d.framebufferWidth,d.framebufferHeight,{format:xn,type:oi,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ot.setContext(r),Ot.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function rt(N){for(let U=0;U<N.removed.length;U++){let W=N.removed[U],Z=E.indexOf(W);Z>=0&&(E[Z]=null,b[Z].disconnect(W))}for(let U=0;U<N.added.length;U++){let W=N.added[U],Z=E.indexOf(W);if(Z===-1){for(let j=0;j<b.length;j++)if(j>=E.length){E.push(W),Z=j;break}else if(E[j]===null){E[j]=W,Z=j;break}if(Z===-1)break}let $=b[Z];$&&$.connect(W)}}let K=new I,lt=new I;function _t(N,U,W){K.setFromMatrixPosition(U.matrixWorld),lt.setFromMatrixPosition(W.matrixWorld);let Z=K.distanceTo(lt),$=U.projectionMatrix.elements,j=W.projectionMatrix.elements,it=$[14]/($[10]-1),P=$[14]/($[10]+1),z=($[9]+1)/$[5],X=($[9]-1)/$[5],J=($[8]-1)/$[0],k=(j[8]+1)/j[0],ft=it*J,st=it*k,ht=Z/(-J+k),Dt=ht*-J;if(U.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(Dt),N.translateZ(ht),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert(),$[10]===-1)N.projectionMatrix.copy(U.projectionMatrix),N.projectionMatrixInverse.copy(U.projectionMatrixInverse);else{let vt=it+ht,C=P+ht,w=ft-Dt,G=st+(Z-Dt),et=z*P/C*vt,ot=X*P/C*vt;N.projectionMatrix.makePerspective(w,G,et,ot,vt,C),N.projectionMatrixInverse.copy(N.projectionMatrix).invert()}}function St(N,U){U===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(U.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(r===null)return;let U=N.near,W=N.far;m.texture!==null&&(m.depthNear>0&&(U=m.depthNear),m.depthFar>0&&(W=m.depthFar)),L.near=M.near=S.near=U,L.far=M.far=S.far=W,(F!==L.near||O!==L.far)&&(r.updateRenderState({depthNear:L.near,depthFar:L.far}),F=L.near,O=L.far),L.layers.mask=N.layers.mask|6,S.layers.mask=L.layers.mask&3,M.layers.mask=L.layers.mask&5;let Z=N.parent,$=L.cameras;St(L,Z);for(let j=0;j<$.length;j++)St($[j],Z);$.length===2?_t(L,S,M):L.projectionMatrix.copy(S.projectionMatrix),Ft(N,L,Z)};function Ft(N,U,W){W===null?N.matrix.copy(U.matrixWorld):(N.matrix.copy(W.matrixWorld),N.matrix.invert(),N.matrix.multiply(U.matrixWorld)),N.matrix.decompose(N.position,N.quaternion,N.scale),N.updateMatrixWorld(!0),N.projectionMatrix.copy(U.projectionMatrix),N.projectionMatrixInverse.copy(U.projectionMatrixInverse),N.isPerspectiveCamera&&(N.fov=ms*2*Math.atan(1/N.projectionMatrix.elements[5]),N.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(N){l=N,f!==null&&(f.fixedFoveation=N),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=N)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(L)},this.getCameraTexture=function(N){return p[N]};let Bt=null;function Kt(N,U){if(u=U.getViewerPose(c||o),g=U,u!==null){let W=u.views;d!==null&&(t.setRenderTargetFramebuffer(_,d.framebuffer),t.setRenderTarget(_));let Z=!1;W.length!==L.cameras.length&&(L.cameras.length=0,Z=!0);for(let P=0;P<W.length;P++){let z=W[P],X=null;if(d!==null)X=d.getViewport(z);else{let k=h.getViewSubImage(f,z);X=k.viewport,P===0&&(t.setRenderTargetTextures(_,k.colorTexture,k.depthStencilTexture),t.setRenderTarget(_))}let J=A[P];J===void 0&&(J=new on,J.layers.enable(P),J.viewport=new Le,A[P]=J),J.matrix.fromArray(z.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(z.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(X.x,X.y,X.width,X.height),P===0&&(L.matrix.copy(J.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Z===!0&&L.cameras.push(J)}let $=r.enabledFeatures;if($&&$.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){h=n.getBinding();let P=h.getDepthInformation(W[0]);P&&P.isValid&&P.texture&&m.init(P,r.renderState)}if($&&$.includes("camera-access")&&y){t.state.unbindTexture(),h=n.getBinding();for(let P=0;P<W.length;P++){let z=W[P].camera;if(z){let X=p[z];X||(X=new Co,p[z]=X);let J=h.getCameraImage(z);X.sourceTexture=J}}}}for(let W=0;W<b.length;W++){let Z=E[W],$=b[W];Z!==null&&$!==void 0&&$.update(Z,U,c||o)}Bt&&Bt(N,U),U.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:U}),g=null}let Ot=new Yp;Ot.setAnimationLoop(Kt),this.setAnimationLoop=function(N){Bt=N},this.dispose=function(){}}},Br=new Xn,DM=new Wt;function LM(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,bu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,x,v,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,_)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),y(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,x,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Je&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Je&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let x=t.get(p),v=x.envMap,_=x.envMapRotation;v&&(m.envMap.value=v,Br.copy(_),Br.x*=-1,Br.y*=-1,Br.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Br.y*=-1,Br.z*=-1),m.envMapRotation.value.setFromMatrix4(DM.makeRotationFromEuler(Br)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,x,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=v*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Je&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let x=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function UM(i,t,e,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,v){let _=v.program;n.uniformBlockBinding(x,_)}function c(x,v){let _=r[x.id];_===void 0&&(g(x),_=u(x),r[x.id]=_,x.addEventListener("dispose",m));let b=v.program;n.updateUBOMapping(x,b);let E=t.render.frame;s[x.id]!==E&&(f(x),s[x.id]=E)}function u(x){let v=h();x.__bindingPointIndex=v;let _=i.createBuffer(),b=x.__size,E=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,b,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,_),_}function h(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){let v=r[x.id],_=x.uniforms,b=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let E=0,T=_.length;E<T;E++){let D=Array.isArray(_[E])?_[E]:[_[E]];for(let S=0,M=D.length;S<M;S++){let A=D[S];if(d(A,E,S,b)===!0){let L=A.__offset,F=Array.isArray(A.value)?A.value:[A.value],O=0;for(let H=0;H<F.length;H++){let V=F[H],rt=y(V);typeof V=="number"||typeof V=="boolean"?(A.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,L+O,A.__data)):V.isMatrix3?(A.__data[0]=V.elements[0],A.__data[1]=V.elements[1],A.__data[2]=V.elements[2],A.__data[3]=0,A.__data[4]=V.elements[3],A.__data[5]=V.elements[4],A.__data[6]=V.elements[5],A.__data[7]=0,A.__data[8]=V.elements[6],A.__data[9]=V.elements[7],A.__data[10]=V.elements[8],A.__data[11]=0):(V.toArray(A.__data,O),O+=rt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,L,A.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(x,v,_,b){let E=x.value,T=v+"_"+_;if(b[T]===void 0)return typeof E=="number"||typeof E=="boolean"?b[T]=E:b[T]=E.clone(),!0;{let D=b[T];if(typeof E=="number"||typeof E=="boolean"){if(D!==E)return b[T]=E,!0}else if(D.equals(E)===!1)return D.copy(E),!0}return!1}function g(x){let v=x.uniforms,_=0,b=16;for(let T=0,D=v.length;T<D;T++){let S=Array.isArray(v[T])?v[T]:[v[T]];for(let M=0,A=S.length;M<A;M++){let L=S[M],F=Array.isArray(L.value)?L.value:[L.value];for(let O=0,H=F.length;O<H;O++){let V=F[O],rt=y(V),K=_%b,lt=K%rt.boundary,_t=K+lt;_+=lt,_t!==0&&b-_t<rt.storage&&(_+=b-_t),L.__data=new Float32Array(rt.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=_,_+=rt.storage}}}let E=_%b;return E>0&&(_+=b-E),x.__size=_,x.__cache={},this}function y(x){let v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function m(x){let v=x.target;v.removeEventListener("dispose",m);let _=o.indexOf(v.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function p(){for(let x in r)i.deleteBuffer(r[x]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}var Ic=class{constructor(t={}){let{canvas:e=mp(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let g=new Uint32Array(4),y=new Int32Array(4),m=null,p=null,x=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let _=this,b=!1;this._outputColorSpace=ke;let E=0,T=0,D=null,S=-1,M=null,A=new Le,L=new Le,F=null,O=new Vt(0),H=0,V=e.width,rt=e.height,K=1,lt=null,_t=null,St=new Le(0,0,V,rt),Ft=new Le(0,0,V,rt),Bt=!1,Kt=new er,Ot=!1,N=!1,U=new Wt,W=new I,Z=new Le,$={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},j=!1;function it(){return D===null?K:1}let P=n;function z(R,q){return e.getContext(R,q)}try{let R={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",xt,!1),e.addEventListener("webglcontextrestored",Ct,!1),e.addEventListener("webglcontextcreationerror",pt,!1),P===null){let q="webgl2";if(P=z(q,R),P===null)throw z(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let X,J,k,ft,st,ht,Dt,vt,C,w,G,et,ot,nt,bt,gt,Rt,Lt,dt,Tt,Gt,Nt,wt,$t;function B(){X=new jv(P),X.init(),Nt=new CM(P,X),J=new Xv(P,X,t,Nt),k=new AM(P,X),J.reversedDepthBuffer&&f&&k.buffers.depth.setReversed(!0),ft=new ex(P),st=new pM,ht=new RM(P,X,k,st,J,Nt,ft),Dt=new Yv(_),vt=new Kv(_),C=new ay(P),wt=new Gv(P,C),w=new Qv(P,C,ft,wt),G=new ix(P,w,C,ft),dt=new nx(P,J,ht),gt=new qv(st),et=new dM(_,Dt,vt,X,J,wt,gt),ot=new LM(_,st),nt=new gM,bt=new SM(X),Lt=new Hv(_,Dt,vt,k,G,d,l),Rt=new EM(_,G,J),$t=new UM(P,ft,J,k),Tt=new Wv(P,X,ft),Gt=new tx(P,X,ft),ft.programs=et.programs,_.capabilities=J,_.extensions=X,_.properties=st,_.renderLists=nt,_.shadowMap=Rt,_.state=k,_.info=ft}B();let yt=new Vu(_,P);this.xr=yt,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let R=X.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=X.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(R){R!==void 0&&(K=R,this.setSize(V,rt,!1))},this.getSize=function(R){return R.set(V,rt)},this.setSize=function(R,q,Q=!0){if(yt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=R,rt=q,e.width=Math.floor(R*K),e.height=Math.floor(q*K),Q===!0&&(e.style.width=R+"px",e.style.height=q+"px"),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(V*K,rt*K).floor()},this.setDrawingBufferSize=function(R,q,Q){V=R,rt=q,K=Q,e.width=Math.floor(R*Q),e.height=Math.floor(q*Q),this.setViewport(0,0,R,q)},this.getCurrentViewport=function(R){return R.copy(A)},this.getViewport=function(R){return R.copy(St)},this.setViewport=function(R,q,Q,tt){R.isVector4?St.set(R.x,R.y,R.z,R.w):St.set(R,q,Q,tt),k.viewport(A.copy(St).multiplyScalar(K).round())},this.getScissor=function(R){return R.copy(Ft)},this.setScissor=function(R,q,Q,tt){R.isVector4?Ft.set(R.x,R.y,R.z,R.w):Ft.set(R,q,Q,tt),k.scissor(L.copy(Ft).multiplyScalar(K).round())},this.getScissorTest=function(){return Bt},this.setScissorTest=function(R){k.setScissorTest(Bt=R)},this.setOpaqueSort=function(R){lt=R},this.setTransparentSort=function(R){_t=R},this.getClearColor=function(R){return R.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor(...arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha(...arguments)},this.clear=function(R=!0,q=!0,Q=!0){let tt=0;if(R){let Y=!1;if(D!==null){let mt=D.texture.format;Y=mt===Kl||mt===Jl||mt===jo}if(Y){let mt=D.texture.type,Et=mt===oi||mt===Vi||mt===As||mt===Cs||mt===Zl||mt===$l,It=Lt.getClearColor(),At=Lt.getClearAlpha(),Ht=It.r,Xt=It.g,zt=It.b;Et?(g[0]=Ht,g[1]=Xt,g[2]=zt,g[3]=At,P.clearBufferuiv(P.COLOR,0,g)):(y[0]=Ht,y[1]=Xt,y[2]=zt,y[3]=At,P.clearBufferiv(P.COLOR,0,y))}else tt|=P.COLOR_BUFFER_BIT}q&&(tt|=P.DEPTH_BUFFER_BIT),Q&&(tt|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(tt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",xt,!1),e.removeEventListener("webglcontextrestored",Ct,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),Lt.dispose(),nt.dispose(),bt.dispose(),st.dispose(),Dt.dispose(),vt.dispose(),G.dispose(),wt.dispose(),$t.dispose(),et.dispose(),yt.dispose(),yt.removeEventListener("sessionstart",pi),yt.removeEventListener("sessionend",Vf),_r.stop()};function xt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function Ct(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;let R=ft.autoReset,q=Rt.enabled,Q=Rt.autoUpdate,tt=Rt.needsUpdate,Y=Rt.type;B(),ft.autoReset=R,Rt.enabled=q,Rt.autoUpdate=Q,Rt.needsUpdate=tt,Rt.type=Y}function pt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function at(R){let q=R.target;q.removeEventListener("dispose",at),Ut(q)}function Ut(R){Yt(R),st.remove(R)}function Yt(R){let q=st.get(R).programs;q!==void 0&&(q.forEach(function(Q){et.releaseProgram(Q)}),R.isShaderMaterial&&et.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,Q,tt,Y,mt){q===null&&(q=$);let Et=Y.isMesh&&Y.matrixWorld.determinant()<0,It=Ag(R,q,Q,tt,Y);k.setMaterial(tt,Et);let At=Q.index,Ht=1;if(tt.wireframe===!0){if(At=w.getWireframeAttribute(Q),At===void 0)return;Ht=2}let Xt=Q.drawRange,zt=Q.attributes.position,ee=Xt.start*Ht,ge=(Xt.start+Xt.count)*Ht;mt!==null&&(ee=Math.max(ee,mt.start*Ht),ge=Math.min(ge,(mt.start+mt.count)*Ht)),At!==null?(ee=Math.max(ee,0),ge=Math.min(ge,At.count)):zt!=null&&(ee=Math.max(ee,0),ge=Math.min(ge,zt.count));let Ue=ge-ee;if(Ue<0||Ue===1/0)return;wt.setup(Y,tt,It,Q,At);let Ee,Me=Tt;if(At!==null&&(Ee=C.get(At),Me=Gt,Me.setIndex(Ee)),Y.isMesh)tt.wireframe===!0?(k.setLineWidth(tt.wireframeLinewidth*it()),Me.setMode(P.LINES)):Me.setMode(P.TRIANGLES);else if(Y.isLine){let kt=tt.linewidth;kt===void 0&&(kt=1),k.setLineWidth(kt*it()),Y.isLineSegments?Me.setMode(P.LINES):Y.isLineLoop?Me.setMode(P.LINE_LOOP):Me.setMode(P.LINE_STRIP)}else Y.isPoints?Me.setMode(P.POINTS):Y.isSprite&&Me.setMode(P.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)ys("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Me.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(X.get("WEBGL_multi_draw"))Me.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let kt=Y._multiDrawStarts,Pe=Y._multiDrawCounts,oe=Y._multiDrawCount,wn=At?C.get(At).bytesPerElement:1,Zr=st.get(tt).currentProgram.getUniforms();for(let En=0;En<oe;En++)Zr.setValue(P,"_gl_DrawID",En),Me.render(kt[En]/wn,Pe[En])}else if(Y.isInstancedMesh)Me.renderInstances(ee,Ue,Y.count);else if(Q.isInstancedBufferGeometry){let kt=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Pe=Math.min(Q.instanceCount,kt);Me.renderInstances(ee,Ue,Pe)}else Me.render(ee,Ue)};function we(R,q,Q){R.transparent===!0&&R.side===Ke&&R.forceSinglePass===!1?(R.side=Je,R.needsUpdate=!0,Ra(R,q,Q),R.side=Hn,R.needsUpdate=!0,Ra(R,q,Q),R.side=Ke):Ra(R,q,Q)}this.compile=function(R,q,Q=null){Q===null&&(Q=R),p=bt.get(Q),p.init(q),v.push(p),Q.traverseVisible(function(Y){Y.isLight&&Y.layers.test(q.layers)&&(p.pushLight(Y),Y.castShadow&&p.pushShadow(Y))}),R!==Q&&R.traverseVisible(function(Y){Y.isLight&&Y.layers.test(q.layers)&&(p.pushLight(Y),Y.castShadow&&p.pushShadow(Y))}),p.setupLights();let tt=new Set;return R.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let mt=Y.material;if(mt)if(Array.isArray(mt))for(let Et=0;Et<mt.length;Et++){let It=mt[Et];we(It,Q,Y),tt.add(It)}else we(mt,Q,Y),tt.add(mt)}),p=v.pop(),tt},this.compileAsync=function(R,q,Q=null){let tt=this.compile(R,q,Q);return new Promise(Y=>{function mt(){if(tt.forEach(function(Et){st.get(Et).currentProgram.isReady()&&tt.delete(Et)}),tt.size===0){Y(R);return}setTimeout(mt,10)}X.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let de=null;function Ri(R){de&&de(R)}function pi(){_r.stop()}function Vf(){_r.start()}let _r=new Yp;_r.setAnimationLoop(Ri),typeof self<"u"&&_r.setContext(self),this.setAnimationLoop=function(R){de=R,yt.setAnimationLoop(R),R===null?_r.stop():_r.start()},yt.addEventListener("sessionstart",pi),yt.addEventListener("sessionend",Vf),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),yt.enabled===!0&&yt.isPresenting===!0&&(yt.cameraAutoUpdate===!0&&yt.updateCamera(q),q=yt.getCamera()),R.isScene===!0&&R.onBeforeRender(_,R,q,D),p=bt.get(R,v.length),p.init(q),v.push(p),U.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Kt.setFromProjectionMatrix(U,Vn,q.reversedDepth),N=this.localClippingEnabled,Ot=gt.init(this.clippingPlanes,N),m=nt.get(R,x.length),m.init(),x.push(m),yt.enabled===!0&&yt.isPresenting===!0){let mt=_.xr.getDepthSensingMesh();mt!==null&&hh(mt,q,-1/0,_.sortObjects)}hh(R,q,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(lt,_t),j=yt.enabled===!1||yt.isPresenting===!1||yt.hasDepthSensing()===!1,j&&Lt.addToRenderList(m,R),this.info.render.frame++,Ot===!0&&gt.beginShadows();let Q=p.state.shadowsArray;Rt.render(Q,R,q),Ot===!0&&gt.endShadows(),this.info.autoReset===!0&&this.info.reset();let tt=m.opaque,Y=m.transmissive;if(p.setupLights(),q.isArrayCamera){let mt=q.cameras;if(Y.length>0)for(let Et=0,It=mt.length;Et<It;Et++){let At=mt[Et];Gf(tt,Y,R,At)}j&&Lt.render(R);for(let Et=0,It=mt.length;Et<It;Et++){let At=mt[Et];Hf(m,R,At,At.viewport)}}else Y.length>0&&Gf(tt,Y,R,q),j&&Lt.render(R),Hf(m,R,q);D!==null&&T===0&&(ht.updateMultisampleRenderTarget(D),ht.updateRenderTargetMipmap(D)),R.isScene===!0&&R.onAfterRender(_,R,q),wt.resetDefaultState(),S=-1,M=null,v.pop(),v.length>0?(p=v[v.length-1],Ot===!0&&gt.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function hh(R,q,Q,tt){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)Q=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Kt.intersectsSprite(R)){tt&&Z.setFromMatrixPosition(R.matrixWorld).applyMatrix4(U);let Et=G.update(R),It=R.material;It.visible&&m.push(R,Et,It,Q,Z.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Kt.intersectsObject(R))){let Et=G.update(R),It=R.material;if(tt&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Z.copy(R.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),Z.copy(Et.boundingSphere.center)),Z.applyMatrix4(R.matrixWorld).applyMatrix4(U)),Array.isArray(It)){let At=Et.groups;for(let Ht=0,Xt=At.length;Ht<Xt;Ht++){let zt=At[Ht],ee=It[zt.materialIndex];ee&&ee.visible&&m.push(R,Et,ee,Q,Z.z,zt)}}else It.visible&&m.push(R,Et,It,Q,Z.z,null)}}let mt=R.children;for(let Et=0,It=mt.length;Et<It;Et++)hh(mt[Et],q,Q,tt)}function Hf(R,q,Q,tt){let Y=R.opaque,mt=R.transmissive,Et=R.transparent;p.setupLightsView(Q),Ot===!0&&gt.setGlobalState(_.clippingPlanes,Q),tt&&k.viewport(A.copy(tt)),Y.length>0&&Aa(Y,q,Q),mt.length>0&&Aa(mt,q,Q),Et.length>0&&Aa(Et,q,Q),k.buffers.depth.setTest(!0),k.buffers.depth.setMask(!0),k.buffers.color.setMask(!0),k.setPolygonOffset(!1)}function Gf(R,q,Q,tt){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[tt.id]===void 0&&(p.state.transmissionRenderTarget[tt.id]=new vi(1,1,{generateMipmaps:!0,type:X.has("EXT_color_buffer_half_float")||X.has("EXT_color_buffer_float")?Rs:oi,minFilter:si,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ne.workingColorSpace}));let mt=p.state.transmissionRenderTarget[tt.id],Et=tt.viewport||A;mt.setSize(Et.z*_.transmissionResolutionScale,Et.w*_.transmissionResolutionScale);let It=_.getRenderTarget(),At=_.getActiveCubeFace(),Ht=_.getActiveMipmapLevel();_.setRenderTarget(mt),_.getClearColor(O),H=_.getClearAlpha(),H<1&&_.setClearColor(16777215,.5),_.clear(),j&&Lt.render(Q);let Xt=_.toneMapping;_.toneMapping=ki;let zt=tt.viewport;if(tt.viewport!==void 0&&(tt.viewport=void 0),p.setupLightsView(tt),Ot===!0&&gt.setGlobalState(_.clippingPlanes,tt),Aa(R,Q,tt),ht.updateMultisampleRenderTarget(mt),ht.updateRenderTargetMipmap(mt),X.has("WEBGL_multisampled_render_to_texture")===!1){let ee=!1;for(let ge=0,Ue=q.length;ge<Ue;ge++){let Ee=q[ge],Me=Ee.object,kt=Ee.geometry,Pe=Ee.material,oe=Ee.group;if(Pe.side===Ke&&Me.layers.test(tt.layers)){let wn=Pe.side;Pe.side=Je,Pe.needsUpdate=!0,Wf(Me,Q,tt,kt,Pe,oe),Pe.side=wn,Pe.needsUpdate=!0,ee=!0}}ee===!0&&(ht.updateMultisampleRenderTarget(mt),ht.updateRenderTargetMipmap(mt))}_.setRenderTarget(It,At,Ht),_.setClearColor(O,H),zt!==void 0&&(tt.viewport=zt),_.toneMapping=Xt}function Aa(R,q,Q){let tt=q.isScene===!0?q.overrideMaterial:null;for(let Y=0,mt=R.length;Y<mt;Y++){let Et=R[Y],It=Et.object,At=Et.geometry,Ht=Et.group,Xt=Et.material;Xt.allowOverride===!0&&tt!==null&&(Xt=tt),It.layers.test(Q.layers)&&Wf(It,q,Q,At,Xt,Ht)}}function Wf(R,q,Q,tt,Y,mt){R.onBeforeRender(_,q,Q,tt,Y,mt),R.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Y.onBeforeRender(_,q,Q,tt,R,mt),Y.transparent===!0&&Y.side===Ke&&Y.forceSinglePass===!1?(Y.side=Je,Y.needsUpdate=!0,_.renderBufferDirect(Q,q,tt,Y,R,mt),Y.side=Hn,Y.needsUpdate=!0,_.renderBufferDirect(Q,q,tt,Y,R,mt),Y.side=Ke):_.renderBufferDirect(Q,q,tt,Y,R,mt),R.onAfterRender(_,q,Q,tt,Y,mt)}function Ra(R,q,Q){q.isScene!==!0&&(q=$);let tt=st.get(R),Y=p.state.lights,mt=p.state.shadowsArray,Et=Y.state.version,It=et.getParameters(R,Y.state,mt,q,Q),At=et.getProgramCacheKey(It),Ht=tt.programs;tt.environment=R.isMeshStandardMaterial?q.environment:null,tt.fog=q.fog,tt.envMap=(R.isMeshStandardMaterial?vt:Dt).get(R.envMap||tt.environment),tt.envMapRotation=tt.environment!==null&&R.envMap===null?q.environmentRotation:R.envMapRotation,Ht===void 0&&(R.addEventListener("dispose",at),Ht=new Map,tt.programs=Ht);let Xt=Ht.get(At);if(Xt!==void 0){if(tt.currentProgram===Xt&&tt.lightsStateVersion===Et)return qf(R,It),Xt}else It.uniforms=et.getUniforms(R),R.onBeforeCompile(It,_),Xt=et.acquireProgram(It,At),Ht.set(At,Xt),tt.uniforms=It.uniforms;let zt=tt.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(zt.clippingPlanes=gt.uniform),qf(R,It),tt.needsLights=Cg(R),tt.lightsStateVersion=Et,tt.needsLights&&(zt.ambientLightColor.value=Y.state.ambient,zt.lightProbe.value=Y.state.probe,zt.directionalLights.value=Y.state.directional,zt.directionalLightShadows.value=Y.state.directionalShadow,zt.spotLights.value=Y.state.spot,zt.spotLightShadows.value=Y.state.spotShadow,zt.rectAreaLights.value=Y.state.rectArea,zt.ltc_1.value=Y.state.rectAreaLTC1,zt.ltc_2.value=Y.state.rectAreaLTC2,zt.pointLights.value=Y.state.point,zt.pointLightShadows.value=Y.state.pointShadow,zt.hemisphereLights.value=Y.state.hemi,zt.directionalShadowMap.value=Y.state.directionalShadowMap,zt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,zt.spotShadowMap.value=Y.state.spotShadowMap,zt.spotLightMatrix.value=Y.state.spotLightMatrix,zt.spotLightMap.value=Y.state.spotLightMap,zt.pointShadowMap.value=Y.state.pointShadowMap,zt.pointShadowMatrix.value=Y.state.pointShadowMatrix),tt.currentProgram=Xt,tt.uniformsList=null,Xt}function Xf(R){if(R.uniformsList===null){let q=R.currentProgram.getUniforms();R.uniformsList=Ls.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function qf(R,q){let Q=st.get(R);Q.outputColorSpace=q.outputColorSpace,Q.batching=q.batching,Q.batchingColor=q.batchingColor,Q.instancing=q.instancing,Q.instancingColor=q.instancingColor,Q.instancingMorph=q.instancingMorph,Q.skinning=q.skinning,Q.morphTargets=q.morphTargets,Q.morphNormals=q.morphNormals,Q.morphColors=q.morphColors,Q.morphTargetsCount=q.morphTargetsCount,Q.numClippingPlanes=q.numClippingPlanes,Q.numIntersection=q.numClipIntersection,Q.vertexAlphas=q.vertexAlphas,Q.vertexTangents=q.vertexTangents,Q.toneMapping=q.toneMapping}function Ag(R,q,Q,tt,Y){q.isScene!==!0&&(q=$),ht.resetTextureUnits();let mt=q.fog,Et=tt.isMeshStandardMaterial?q.environment:null,It=D===null?_.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Pr,At=(tt.isMeshStandardMaterial?vt:Dt).get(tt.envMap||Et),Ht=tt.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Xt=!!Q.attributes.tangent&&(!!tt.normalMap||tt.anisotropy>0),zt=!!Q.morphAttributes.position,ee=!!Q.morphAttributes.normal,ge=!!Q.morphAttributes.color,Ue=ki;tt.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Ue=_.toneMapping);let Ee=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Me=Ee!==void 0?Ee.length:0,kt=st.get(tt),Pe=p.state.lights;if(Ot===!0&&(N===!0||R!==M)){let dn=R===M&&tt.id===S;gt.setState(tt,R,dn)}let oe=!1;tt.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==Pe.state.version||kt.outputColorSpace!==It||Y.isBatchedMesh&&kt.batching===!1||!Y.isBatchedMesh&&kt.batching===!0||Y.isBatchedMesh&&kt.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&kt.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&kt.instancing===!1||!Y.isInstancedMesh&&kt.instancing===!0||Y.isSkinnedMesh&&kt.skinning===!1||!Y.isSkinnedMesh&&kt.skinning===!0||Y.isInstancedMesh&&kt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&kt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&kt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&kt.instancingMorph===!1&&Y.morphTexture!==null||kt.envMap!==At||tt.fog===!0&&kt.fog!==mt||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==gt.numPlanes||kt.numIntersection!==gt.numIntersection)||kt.vertexAlphas!==Ht||kt.vertexTangents!==Xt||kt.morphTargets!==zt||kt.morphNormals!==ee||kt.morphColors!==ge||kt.toneMapping!==Ue||kt.morphTargetsCount!==Me)&&(oe=!0):(oe=!0,kt.__version=tt.version);let wn=kt.currentProgram;oe===!0&&(wn=Ra(tt,q,Y));let Zr=!1,En=!1,so=!1,Ie=wn.getUniforms(),Bn=kt.uniforms;if(k.useProgram(wn.program)&&(Zr=!0,En=!0,so=!0),tt.id!==S&&(S=tt.id,En=!0),Zr||M!==R){k.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Ie.setValue(P,"projectionMatrix",R.projectionMatrix),Ie.setValue(P,"viewMatrix",R.matrixWorldInverse);let _n=Ie.map.cameraPosition;_n!==void 0&&_n.setValue(P,W.setFromMatrixPosition(R.matrixWorld)),J.logarithmicDepthBuffer&&Ie.setValue(P,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(tt.isMeshPhongMaterial||tt.isMeshToonMaterial||tt.isMeshLambertMaterial||tt.isMeshBasicMaterial||tt.isMeshStandardMaterial||tt.isShaderMaterial)&&Ie.setValue(P,"isOrthographic",R.isOrthographicCamera===!0),M!==R&&(M=R,En=!0,so=!0)}if(Y.isSkinnedMesh){Ie.setOptional(P,Y,"bindMatrix"),Ie.setOptional(P,Y,"bindMatrixInverse");let dn=Y.skeleton;dn&&(dn.boneTexture===null&&dn.computeBoneTexture(),Ie.setValue(P,"boneTexture",dn.boneTexture,ht))}Y.isBatchedMesh&&(Ie.setOptional(P,Y,"batchingTexture"),Ie.setValue(P,"batchingTexture",Y._matricesTexture,ht),Ie.setOptional(P,Y,"batchingIdTexture"),Ie.setValue(P,"batchingIdTexture",Y._indirectTexture,ht),Ie.setOptional(P,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Ie.setValue(P,"batchingColorTexture",Y._colorsTexture,ht));let zn=Q.morphAttributes;if((zn.position!==void 0||zn.normal!==void 0||zn.color!==void 0)&&dt.update(Y,Q,wn),(En||kt.receiveShadow!==Y.receiveShadow)&&(kt.receiveShadow=Y.receiveShadow,Ie.setValue(P,"receiveShadow",Y.receiveShadow)),tt.isMeshGouraudMaterial&&tt.envMap!==null&&(Bn.envMap.value=At,Bn.flipEnvMap.value=At.isCubeTexture&&At.isRenderTargetTexture===!1?-1:1),tt.isMeshStandardMaterial&&tt.envMap===null&&q.environment!==null&&(Bn.envMapIntensity.value=q.environmentIntensity),En&&(Ie.setValue(P,"toneMappingExposure",_.toneMappingExposure),kt.needsLights&&Rg(Bn,so),mt&&tt.fog===!0&&ot.refreshFogUniforms(Bn,mt),ot.refreshMaterialUniforms(Bn,tt,K,rt,p.state.transmissionRenderTarget[R.id]),Ls.upload(P,Xf(kt),Bn,ht)),tt.isShaderMaterial&&tt.uniformsNeedUpdate===!0&&(Ls.upload(P,Xf(kt),Bn,ht),tt.uniformsNeedUpdate=!1),tt.isSpriteMaterial&&Ie.setValue(P,"center",Y.center),Ie.setValue(P,"modelViewMatrix",Y.modelViewMatrix),Ie.setValue(P,"normalMatrix",Y.normalMatrix),Ie.setValue(P,"modelMatrix",Y.matrixWorld),tt.isShaderMaterial||tt.isRawShaderMaterial){let dn=tt.uniformsGroups;for(let _n=0,uh=dn.length;_n<uh;_n++){let vr=dn[_n];$t.update(vr,wn),$t.bind(vr,wn)}}return wn}function Rg(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function Cg(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(R,q,Q){let tt=st.get(R);tt.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,tt.__autoAllocateDepthBuffer===!1&&(tt.__useRenderToTexture=!1),st.get(R.texture).__webglTexture=q,st.get(R.depthTexture).__webglTexture=tt.__autoAllocateDepthBuffer?void 0:Q,tt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,q){let Q=st.get(R);Q.__webglFramebuffer=q,Q.__useDefaultFramebuffer=q===void 0};let Pg=P.createFramebuffer();this.setRenderTarget=function(R,q=0,Q=0){D=R,E=q,T=Q;let tt=!0,Y=null,mt=!1,Et=!1;if(R){let At=st.get(R);if(At.__useDefaultFramebuffer!==void 0)k.bindFramebuffer(P.FRAMEBUFFER,null),tt=!1;else if(At.__webglFramebuffer===void 0)ht.setupRenderTarget(R);else if(At.__hasExternalTextures)ht.rebindTextures(R,st.get(R.texture).__webglTexture,st.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let zt=R.depthTexture;if(At.__boundDepthTexture!==zt){if(zt!==null&&st.has(zt)&&(R.width!==zt.image.width||R.height!==zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ht.setupDepthRenderbuffer(R)}}let Ht=R.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(Et=!0);let Xt=st.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Xt[q])?Y=Xt[q][Q]:Y=Xt[q],mt=!0):R.samples>0&&ht.useMultisampledRTT(R)===!1?Y=st.get(R).__webglMultisampledFramebuffer:Array.isArray(Xt)?Y=Xt[Q]:Y=Xt,A.copy(R.viewport),L.copy(R.scissor),F=R.scissorTest}else A.copy(St).multiplyScalar(K).floor(),L.copy(Ft).multiplyScalar(K).floor(),F=Bt;if(Q!==0&&(Y=Pg),k.bindFramebuffer(P.FRAMEBUFFER,Y)&&tt&&k.drawBuffers(R,Y),k.viewport(A),k.scissor(L),k.setScissorTest(F),mt){let At=st.get(R.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+q,At.__webglTexture,Q)}else if(Et){let At=q;for(let Ht=0;Ht<R.textures.length;Ht++){let Xt=st.get(R.textures[Ht]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Ht,Xt.__webglTexture,Q,At)}}else if(R!==null&&Q!==0){let At=st.get(R.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,At.__webglTexture,Q)}S=-1},this.readRenderTargetPixels=function(R,q,Q,tt,Y,mt,Et,It=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=st.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Et!==void 0&&(At=At[Et]),At){k.bindFramebuffer(P.FRAMEBUFFER,At);try{let Ht=R.textures[It],Xt=Ht.format,zt=Ht.type;if(!J.textureFormatReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!J.textureTypeReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-tt&&Q>=0&&Q<=R.height-Y&&(R.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+It),P.readPixels(q,Q,tt,Y,Nt.convert(Xt),Nt.convert(zt),mt))}finally{let Ht=D!==null?st.get(D).__webglFramebuffer:null;k.bindFramebuffer(P.FRAMEBUFFER,Ht)}}},this.readRenderTargetPixelsAsync=async function(R,q,Q,tt,Y,mt,Et,It=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=st.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Et!==void 0&&(At=At[Et]),At)if(q>=0&&q<=R.width-tt&&Q>=0&&Q<=R.height-Y){k.bindFramebuffer(P.FRAMEBUFFER,At);let Ht=R.textures[It],Xt=Ht.format,zt=Ht.type;if(!J.textureFormatReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!J.textureTypeReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ee=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,ee),P.bufferData(P.PIXEL_PACK_BUFFER,mt.byteLength,P.STREAM_READ),R.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+It),P.readPixels(q,Q,tt,Y,Nt.convert(Xt),Nt.convert(zt),0);let ge=D!==null?st.get(D).__webglFramebuffer:null;k.bindFramebuffer(P.FRAMEBUFFER,ge);let Ue=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await gp(P,Ue,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,ee),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,mt),P.deleteBuffer(ee),P.deleteSync(Ue),mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,q=null,Q=0){let tt=Math.pow(2,-Q),Y=Math.floor(R.image.width*tt),mt=Math.floor(R.image.height*tt),Et=q!==null?q.x:0,It=q!==null?q.y:0;ht.setTexture2D(R,0),P.copyTexSubImage2D(P.TEXTURE_2D,Q,0,0,Et,It,Y,mt),k.unbindTexture()};let Ig=P.createFramebuffer(),Dg=P.createFramebuffer();this.copyTextureToTexture=function(R,q,Q=null,tt=null,Y=0,mt=null){mt===null&&(Y!==0?(ys("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),mt=Y,Y=0):mt=0);let Et,It,At,Ht,Xt,zt,ee,ge,Ue,Ee=R.isCompressedTexture?R.mipmaps[mt]:R.image;if(Q!==null)Et=Q.max.x-Q.min.x,It=Q.max.y-Q.min.y,At=Q.isBox3?Q.max.z-Q.min.z:1,Ht=Q.min.x,Xt=Q.min.y,zt=Q.isBox3?Q.min.z:0;else{let zn=Math.pow(2,-Y);Et=Math.floor(Ee.width*zn),It=Math.floor(Ee.height*zn),R.isDataArrayTexture?At=Ee.depth:R.isData3DTexture?At=Math.floor(Ee.depth*zn):At=1,Ht=0,Xt=0,zt=0}tt!==null?(ee=tt.x,ge=tt.y,Ue=tt.z):(ee=0,ge=0,Ue=0);let Me=Nt.convert(q.format),kt=Nt.convert(q.type),Pe;q.isData3DTexture?(ht.setTexture3D(q,0),Pe=P.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(ht.setTexture2DArray(q,0),Pe=P.TEXTURE_2D_ARRAY):(ht.setTexture2D(q,0),Pe=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,q.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,q.unpackAlignment);let oe=P.getParameter(P.UNPACK_ROW_LENGTH),wn=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Zr=P.getParameter(P.UNPACK_SKIP_PIXELS),En=P.getParameter(P.UNPACK_SKIP_ROWS),so=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Ee.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ee.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ht),P.pixelStorei(P.UNPACK_SKIP_ROWS,Xt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,zt);let Ie=R.isDataArrayTexture||R.isData3DTexture,Bn=q.isDataArrayTexture||q.isData3DTexture;if(R.isDepthTexture){let zn=st.get(R),dn=st.get(q),_n=st.get(zn.__renderTarget),uh=st.get(dn.__renderTarget);k.bindFramebuffer(P.READ_FRAMEBUFFER,_n.__webglFramebuffer),k.bindFramebuffer(P.DRAW_FRAMEBUFFER,uh.__webglFramebuffer);for(let vr=0;vr<At;vr++)Ie&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,st.get(R).__webglTexture,Y,zt+vr),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,st.get(q).__webglTexture,mt,Ue+vr)),P.blitFramebuffer(Ht,Xt,Et,It,ee,ge,Et,It,P.DEPTH_BUFFER_BIT,P.NEAREST);k.bindFramebuffer(P.READ_FRAMEBUFFER,null),k.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(Y!==0||R.isRenderTargetTexture||st.has(R)){let zn=st.get(R),dn=st.get(q);k.bindFramebuffer(P.READ_FRAMEBUFFER,Ig),k.bindFramebuffer(P.DRAW_FRAMEBUFFER,Dg);for(let _n=0;_n<At;_n++)Ie?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,zn.__webglTexture,Y,zt+_n):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,zn.__webglTexture,Y),Bn?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,dn.__webglTexture,mt,Ue+_n):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,dn.__webglTexture,mt),Y!==0?P.blitFramebuffer(Ht,Xt,Et,It,ee,ge,Et,It,P.COLOR_BUFFER_BIT,P.NEAREST):Bn?P.copyTexSubImage3D(Pe,mt,ee,ge,Ue+_n,Ht,Xt,Et,It):P.copyTexSubImage2D(Pe,mt,ee,ge,Ht,Xt,Et,It);k.bindFramebuffer(P.READ_FRAMEBUFFER,null),k.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Bn?R.isDataTexture||R.isData3DTexture?P.texSubImage3D(Pe,mt,ee,ge,Ue,Et,It,At,Me,kt,Ee.data):q.isCompressedArrayTexture?P.compressedTexSubImage3D(Pe,mt,ee,ge,Ue,Et,It,At,Me,Ee.data):P.texSubImage3D(Pe,mt,ee,ge,Ue,Et,It,At,Me,kt,Ee):R.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,mt,ee,ge,Et,It,Me,kt,Ee.data):R.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,mt,ee,ge,Ee.width,Ee.height,Me,Ee.data):P.texSubImage2D(P.TEXTURE_2D,mt,ee,ge,Et,It,Me,kt,Ee);P.pixelStorei(P.UNPACK_ROW_LENGTH,oe),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,wn),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Zr),P.pixelStorei(P.UNPACK_SKIP_ROWS,En),P.pixelStorei(P.UNPACK_SKIP_IMAGES,so),mt===0&&q.generateMipmaps&&P.generateMipmap(Pe),k.unbindTexture()},this.initRenderTarget=function(R){st.get(R).__webglFramebuffer===void 0&&ht.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?ht.setTextureCube(R,0):R.isData3DTexture?ht.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ht.setTexture2DArray(R,0):ht.setTexture2D(R,0),k.unbindTexture()},this.resetState=function(){E=0,T=0,D=null,k.reset(),wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=ne._getUnpackColorSpace()}};var Fs=Math.pow(2,-24),ra=Symbol("SKIP_GENERATION"),Lc={strategy:0,maxDepth:40,targetLeafSize:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null,[ra]:!1};function Se(i,t,e){return e.min.x=t[i],e.min.y=t[i+1],e.min.z=t[i+2],e.max.x=t[i+3],e.max.y=t[i+4],e.max.z=t[i+5],e}function sa(i){let t=-1,e=-1/0;for(let n=0;n<3;n++){let r=i[n+3]-i[n];r>e&&(e=r,t=n)}return t}function Gu(i,t,e){for(let n=0;n<3;n++){let r=t[i+2*n],s=t[i+2*n+1],o=r-s,a=r+s;o<e[n]&&(e[n]=o),a>e[n+3]&&(e[n+3]=a)}}function Uc(i){let t=i[3]-i[0],e=i[4]-i[1],n=i[5]-i[2];return 2*(t*e+e*n+n*t)}function re(i,t){return t[i+15]===65535}function pe(i,t){return t[i+6]}function ye(i,t){return t[i+14]}function ce(i){return i+8}function he(i,t){let e=t[i+6];return i+e*8}function Os(i,t){return t[i+7]}function Nc(i,t,e,n,r){let s=1/0,o=1/0,a=1/0,l=-1/0,c=-1/0,u=-1/0,h=1/0,f=1/0,d=1/0,g=-1/0,y=-1/0,m=-1/0,p=i.offset||0;for(let x=(t-p)*6,v=(t+e-p)*6;x<v;x+=6){let _=i[x+0],b=i[x+1],E=_-b,T=_+b;E<s&&(s=E),T>l&&(l=T),_<h&&(h=_),_>g&&(g=_);let D=i[x+2],S=i[x+3],M=D-S,A=D+S;M<o&&(o=M),A>c&&(c=A),D<f&&(f=D),D>y&&(y=D);let L=i[x+4],F=i[x+5],O=L-F,H=L+F;O<a&&(a=O),H>u&&(u=H),L<d&&(d=L),L>m&&(m=L)}n[0]=s,n[1]=o,n[2]=a,n[3]=l,n[4]=c,n[5]=u,r[0]=h,r[1]=f,r[2]=d,r[3]=g,r[4]=y,r[5]=m}var Ei=8,Xu=8,Wu=new Int32Array(Ei),wi=new Float32Array(Ei*6),Bs=new Float32Array(Ei*6),ai=new Float32Array(6),Fc=new Float32Array(6),ar=new Int32Array(Xu),tm=new Float32Array(Xu*6);function OM(i,t,e,n){for(let r=0;r<3;r++){let s=t[i+2*r],o=t[i+2*r+1],a=s-o,l=s+o;a<e[n+r]&&(e[n+r]=a),l>e[n+r+3]&&(e[n+r+3]=l)}}function em(i,t){let e=i[t+3]-i[t],n=i[t+4]-i[t+1],r=i[t+5]-i[t+2];return 2*(e*n+n*r+r*e)}function nm(i,t,e,n,r,s){let o=-1,a=0;if(s===0)o=sa(t),o!==-1&&(a=(t[o]+t[o+3])/2);else if(s===1)o=sa(i),o!==-1&&(a=BM(e,n,r,o));else if(s===2){let l=Uc(i),c=1.25*r,u=e.offset||0,h=(n-u)*6,f=(n+r-u)*6;for(let d=0;d<3;d++){let g=t[d],p=(t[d+3]-g)/Ei;if(r<Xu){for(let x=0;x<r;x++){let v=h+x*6,_=e[v+2*d],b=x;for(;b>0&&e[ar[b-1]+2*d]>_;)ar[b]=ar[b-1],b--;ar[b]=v}for(let x=0;x<3;x++)ai[x]=1/0,ai[x+3]=-1/0,Fc[x]=1/0,Fc[x+3]=-1/0;for(let x=r-1;x>=0;x--)Gu(ar[x],e,Fc),tm.set(Fc,x*6);for(let x=0;x<r-1;x++){Gu(ar[x],e,ai);let v=e[ar[x+1]+2*d];if(e[ar[x]+2*d]===v)continue;let _=x+1,b=r-_,E=Uc(ai)/l,T=em(tm,_*6)/l,D=1+1.25*(E*_+T*b);D<c&&(o=d,c=D,a=v)}}else{for(let _=0;_<Ei;_++){Wu[_]=0;for(let b=0;b<3;b++)wi[_*6+b]=1/0,wi[_*6+b+3]=-1/0}for(let _=h;_<f;_+=6){let T=~~((e[_+2*d]-g)/p);T>=Ei&&(T=Ei-1),Wu[T]++,OM(_,e,wi,T*6)}let x=(Ei-1)*6;for(let _=0;_<6;_++)Bs[x+_]=wi[x+_];for(let _=Ei-2;_>=0;_--){let b=_*6,E=b+6;for(let T=0;T<3;T++)Bs[b+T]=Math.min(wi[b+T],Bs[E+T]),Bs[b+T+3]=Math.max(wi[b+T+3],Bs[E+T+3])}let v=0;for(let _=0;_<Ei-1;_++){let b=_*6,E=Wu[_];if(E!==0)for(let A=0;A<3;A++)v===0?(ai[A]=wi[b+A],ai[A+3]=wi[b+A+3]):(ai[A]=Math.min(ai[A],wi[b+A]),ai[A+3]=Math.max(ai[A+3],wi[b+A+3]));v+=E;let T=0,D=0;v!==0&&(T=Uc(ai)/l);let S=r-v;S!==0&&(D=em(Bs,b+6)/l);let M=1+1.25*(T*v+D*S);M<c&&(o=d,c=M,a=g+p+_*p)}}}}else console.warn(`BVH: Invalid build strategy value ${s} used.`);return{axis:o,pos:a}}function BM(i,t,e,n){let r=0,s=i.offset;for(let o=t,a=t+e;o<a;o++)r+=i[(o-s)*6+n*2];return r/e}function im(i,t,e,n,r,s){let o=n,a=n+r-1,l=s.pos,c=s.axis*2,u=e.offset||0;for(;;){for(;o<=a&&e[(o-u)*6+c]<l;)o++;for(;o<=a&&e[(a-u)*6+c]>=l;)a--;if(o<a){for(let h=0;h<t;h++){let f=i[o*t+h];i[o*t+h]=i[a*t+h],i[a*t+h]=f}for(let h=0;h<6;h++){let f=o-u,d=a-u,g=e[f*6+h];e[f*6+h]=e[d*6+h],e[d*6+h]=g}o++,a--}else return o}}var zM=Math.pow(2,32),zs=new Float32Array(6),Oc=new Float32Array(6);function kM(i,t,e,n,r,s){let{maxDepth:o,verbose:a,targetLeafSize:l,_strictLeafSize:c=1/0,strategy:u,onProgress:h,useSharedArrayBuffer:f=!1}=r,d=i.primitiveBuffer,g=i.primitiveBufferStride,y=f?SharedArrayBuffer:ArrayBuffer,m=new y(32*Math.max(1,2*Math.ceil(n)-1)),p=new Float32Array(m),x=new Uint32Array(m),v=new Uint16Array(m),_=0,b=!1;return Nc(t,e,n,zs,Oc),D(e,n,0),m.slice(0,_*32);function E(S){h&&h((S-s.offset)/s.count)}function T(S,M,A){let L=S*2;x[S+6]=M,v[L+14]=A,v[L+15]=65535,E(M+A)}function D(S,M,A){let L=_++,F=L*8;p.set(zs,F),!b&&A>=o&&(b=!0,a&&console.warn(`BVH: Max depth of ${o} reached when generating BVH. Consider increasing maxDepth.`));let O=M>c;if(M<=l&&!O||A>=o){T(F,S,M);return}let H=nm(zs,Oc,t,S,M,u),V=H.axis===-1?-1:im(d,g,t,S,M,H);if(H.axis===-1||V===S||V===S+M){if(!O){T(F,S,M);return}H.axis=Math.max(0,sa(zs)),V=S+Math.max(1,Math.floor(M/2))}x[F+7]=H.axis;let rt=V-S;Nc(t,S,rt,zs,Oc),D(S,rt,A+1);let K=_-L;if(K>zM)throw new Error("MeshBVH: Cannot store relative child node offset greater than 32 bits.");x[F+6]=K;let lt=M-rt;Nc(t,V,lt,zs,Oc),D(V,lt,A+1)}}function rm(i,t){let e=i.getRootRanges(t.range),n=e[0],r=e[e.length-1],s={offset:n.offset,count:r.offset+r.count-n.offset},o=new Float32Array(6*s.count);o.offset=s.offset,i.computePrimitiveBounds(s.offset,s.count,o),i._roots=e.map(a=>kM(i,o,a.offset,a.count,t,s))}var lr=class{constructor(t){this._getNewPrimitive=t,this._primitives=[]}getPrimitive(){let t=this._primitives;return t.length===0?this._getNewPrimitive():t.pop()}releasePrimitive(t){this._primitives.push(t)}};var qu=class{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;let t=[],e=null;this.setBuffer=n=>{e&&t.push(e),e=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{e=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,t.length!==0&&this.setBuffer(t.pop())}}},Qt=new qu;var cr,Vs,ks=[],Bc=new lr(()=>new ae);function sm(i,t,e,n,r,s){cr=Bc.getPrimitive(),Vs=Bc.getPrimitive(),ks.push(cr,Vs),Qt.setBuffer(i._roots[t]);let o=Yu(0,i.geometry,e,n,r,s);Qt.clearBuffer(),Bc.releasePrimitive(cr),Bc.releasePrimitive(Vs),ks.pop(),ks.pop();let a=ks.length;return a>0&&(Vs=ks[a-1],cr=ks[a-2]),o}function Yu(i,t,e,n,r=null,s=0,o=0){let{float32Array:a,uint16Array:l,uint32Array:c}=Qt,u=i*2;if(re(u,l)){let f=pe(i,c),d=ye(u,l);return Se(i,a,cr),n(f,d,!1,o,s+i/8,cr)}else{let M=function(L){let{uint16Array:F,uint32Array:O}=Qt,H=L*2;for(;!re(H,F);)L=ce(L),H=L*2;return pe(L,O)},A=function(L){let{uint16Array:F,uint32Array:O}=Qt,H=L*2;for(;!re(H,F);)L=he(L,O),H=L*2;return pe(L,O)+ye(H,F)},f=ce(i),d=he(i,c),g=f,y=d,m,p,x,v;if(r&&(x=cr,v=Vs,Se(g,a,x),Se(y,a,v),m=r(x),p=r(v),p<m)){g=d,y=f;let L=m;m=p,p=L,x=v}x||(x=cr,Se(g,a,x));let _=re(g*2,l),b=e(x,_,m,o+1,s+g/8),E;if(b===2){let L=M(g),O=A(g)-L;E=n(L,O,!0,o+1,s+g/8,x)}else E=b&&Yu(g,t,e,n,r,s,o+1);if(E)return!0;v=Vs,Se(y,a,v);let T=re(y*2,l),D=e(v,T,p,o+1,s+y/8),S;if(D===2){let L=M(y),O=A(y)-L;S=n(L,O,!0,o+1,s+y/8,v)}else S=D&&Yu(y,t,e,n,r,s,o+1);return!!S}}var oa=new Qt.constructor,zc=new Qt.constructor,hr=new lr(()=>new ae),Hs=new ae,Gs=new ae,$u=new ae,Ju=new ae,Ku=!1;function om(i,t,e,n){if(Ku)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");Ku=!0;let r=i._roots,s=t._roots,o,a=0,l=0,c=new Wt().copy(e).invert();for(let u=0,h=r.length;u<h;u++){oa.setBuffer(r[u]),l=0;let f=hr.getPrimitive();Se(0,oa.float32Array,f),f.applyMatrix4(c);for(let d=0,g=s.length;d<g&&(zc.setBuffer(s[d]),o=li(0,0,e,c,n,a,l,0,0,f),zc.clearBuffer(),l+=s[d].byteLength/32,!o);d++);if(hr.releasePrimitive(f),oa.clearBuffer(),a+=r[u].byteLength/32,o)break}return Ku=!1,o}function li(i,t,e,n,r,s=0,o=0,a=0,l=0,c=null,u=!1){let h,f;u?(h=zc,f=oa):(h=oa,f=zc);let d=h.float32Array,g=h.uint32Array,y=h.uint16Array,m=f.float32Array,p=f.uint32Array,x=f.uint16Array,v=i*2,_=t*2,b=re(v,y),E=re(_,x),T=!1;if(E&&b)u?T=r(pe(t,p),ye(t*2,x),pe(i,g),ye(i*2,y),l,o+t/8,a,s+i/8):T=r(pe(i,g),ye(i*2,y),pe(t,p),ye(t*2,x),a,s+i/8,l,o+t/8);else if(E){let D=hr.getPrimitive();Se(t,m,D),D.applyMatrix4(e);let S=ce(i),M=he(i,g);Se(S,d,Hs),Se(M,d,Gs);let A=D.intersectsBox(Hs),L=D.intersectsBox(Gs);T=A&&li(t,S,n,e,r,o,s,l,a+1,D,!u)||L&&li(t,M,n,e,r,o,s,l,a+1,D,!u),hr.releasePrimitive(D)}else{let D=ce(t),S=he(t,p);Se(D,m,$u),Se(S,m,Ju);let M=c.intersectsBox($u),A=c.intersectsBox(Ju);if(M&&A)T=li(i,D,e,n,r,s,o,a,l+1,c,u)||li(i,S,e,n,r,s,o,a,l+1,c,u);else if(M)if(b)T=li(i,D,e,n,r,s,o,a,l+1,c,u);else{let L=hr.getPrimitive();L.copy($u).applyMatrix4(e);let F=ce(i),O=he(i,g);Se(F,d,Hs),Se(O,d,Gs);let H=L.intersectsBox(Hs),V=L.intersectsBox(Gs);T=H&&li(D,F,n,e,r,o,s,l,a+1,L,!u)||V&&li(D,O,n,e,r,o,s,l,a+1,L,!u),hr.releasePrimitive(L)}else if(A)if(b)T=li(i,S,e,n,r,s,o,a,l+1,c,u);else{let L=hr.getPrimitive();L.copy(Ju).applyMatrix4(e);let F=ce(i),O=he(i,g);Se(F,d,Hs),Se(O,d,Gs);let H=L.intersectsBox(Hs),V=L.intersectsBox(Gs);T=H&&li(S,F,n,e,r,o,s,l,a+1,L,!u)||V&&li(S,O,n,e,r,o,s,l,a+1,L,!u),hr.releasePrimitive(L)}}return T}var kc=new class{constructor(){let i=null,t=null,e=null,n=!1;this.root=null,this.buffer=null,this.uint32Array=null,this.uint16Array=null,this.setBVH=(s,o)=>{if(n)throw new Error("BVHTraversalHelper: cannot call setBVH during an active traversal.");this.root=o,this.buffer=i=s._roots[o],this.uint16Array=e=new Uint16Array(i),this.uint32Array=t=new Uint32Array(i)},this.reset=()=>{this.root=null,this.buffer=i=null,this.uint16Array=e=null,this.uint32Array=t=null},this.getRangeStart=s=>{let o=s*2;for(;!re(o,e);)s=ce(s),o=s*2;return pe(s,t)},this.getRangeEnd=s=>{let o=s*2;for(;!re(o,e);)s=he(s,t),o=s*2;return pe(s,t)+ye(o,e)};let r=(s,o,a)=>{let l=o*2,c=re(l,e);if(!s(a,c,o)&&!c){let h=ce(o),f=he(o,t);r(s,h,a+1),r(s,f,a+1)}};this.traverseBuffer=s=>{if(n)throw new Error("BVHTraversalHelper: cannot start a traversal during an active traversal.");n=!0;try{r(s,0,0)}finally{n=!1}},this.traverse=s=>{this.traverseBuffer((o,a,l)=>{if(a){let c=l*2,u=t[l+6],h=e[c+14];return s(o,a,new Float32Array(i,l*4,6),u,h)}else{let c=Os(l,t);return s(o,a,new Float32Array(i,l*4,6),c)}})}}};var am=new ae,Ws=new Float32Array(6),Vc=class{constructor(){this._roots=null,this.primitiveBuffer=null,this.primitiveBufferStride=null}init(t){t={...Lc,...t},"maxLeafSize"in t&&(console.warn('BVH: "maxLeafSize" option has been deprecated. Use "targetLeafSize", instead.'),t={...t,targetLeafSize:t.maxLeafSize}),rm(this,t)}getRootRanges(){throw new Error("BVH: getRootRanges() not implemented")}writePrimitiveBounds(){throw new Error("BVH: writePrimitiveBounds() not implemented")}writePrimitiveRangeBounds(t,e,n,r){let s=1/0,o=1/0,a=1/0,l=-1/0,c=-1/0,u=-1/0;for(let h=t,f=t+e;h<f;h++){this.writePrimitiveBounds(h,Ws,0);let[d,g,y,m,p,x]=Ws;d<s&&(s=d),m>l&&(l=m),g<o&&(o=g),p>c&&(c=p),y<a&&(a=y),x>u&&(u=x)}return n[r+0]=s,n[r+1]=o,n[r+2]=a,n[r+3]=l,n[r+4]=c,n[r+5]=u,n}computePrimitiveBounds(t,e,n){let r=n.offset||0;for(let s=t,o=t+e;s<o;s++){this.writePrimitiveBounds(s,Ws,0);let[a,l,c,u,h,f]=Ws,d=(a+u)/2,g=(l+h)/2,y=(c+f)/2,m=(u-a)/2,p=(h-l)/2,x=(f-c)/2,v=(s-r)*6;n[v+0]=d,n[v+1]=m+(Math.abs(d)+m)*Fs,n[v+2]=g,n[v+3]=p+(Math.abs(g)+p)*Fs,n[v+4]=y,n[v+5]=x+(Math.abs(y)+x)*Fs}return n}shiftPrimitiveOffsets(t){let e=this._indirectBuffer;if(e)for(let n=0,r=e.length;n<r;n++)e[n]+=t;else{let n=this._roots;for(let r=0;r<n.length;r++){let s=n[r],o=new Uint32Array(s),a=new Uint16Array(s),l=s.byteLength/32;for(let c=0;c<l;c++){let u=8*c,h=2*u;re(h,a)&&(o[u+6]+=t)}}}}traverse(t,e=0){kc.setBVH(this,e),kc.traverse(t),kc.reset()}refit(){let t=this._roots;for(let e=0,n=t.length;e<n;e++){let r=t[e],s=new Uint32Array(r),o=new Uint16Array(r),a=new Float32Array(r),l=r.byteLength/32;for(let c=l-1;c>=0;c--){let u=c*8,h=u*2;if(re(h,o)){let d=pe(u,s),g=ye(h,o);this.writePrimitiveRangeBounds(d,g,Ws,0),a.set(Ws,u)}else{let d=ce(u),g=he(u,s);for(let y=0;y<3;y++){let m=a[d+y],p=a[d+y+3],x=a[g+y],v=a[g+y+3];a[u+y]=m<x?m:x,a[u+y+3]=p>v?p:v}}}}}getBoundingBox(t){return t.makeEmpty(),this._roots.forEach(n=>{Se(0,new Float32Array(n),am),t.union(am)}),t}shapecast(t){let{boundsTraverseOrder:e,intersectsBounds:n,intersectsRange:r,intersectsPrimitive:s,scratchPrimitive:o,iterate:a}=t;if(r&&s){let h=r;r=(f,d,g,y,m)=>h(f,d,g,y,m)?!0:a(f,d,this,s,g,y,o)}else r||(s?r=(h,f,d,g)=>a(h,f,this,s,d,g,o):r=(h,f,d)=>d);let l=!1,c=0,u=this._roots;for(let h=0,f=u.length;h<f;h++){let d=u[h];if(l=sm(this,h,n,r,e,c),l)break;c+=d.byteLength/32}return l}bvhcast(t,e,n){let{intersectsRanges:r}=n;return om(this,t,e,r)}};function lm(){return typeof SharedArrayBuffer<"u"}function ju(i){return i.index?i.index.count:i.attributes.position.count}function ur(i){return ju(i)/3}function HM(i,t=ArrayBuffer){return i>65535?new Uint32Array(new t(4*i)):new Uint16Array(new t(2*i))}function cm(i,t){if(!i.index){let e=i.attributes.position.count,n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,r=HM(e,n);i.setIndex(new le(r,1));for(let s=0;s<e;s++)r[s]=s}}function GM(i,t,e){let n=ju(i)/e,r=t||i.drawRange,s=r.start/e,o=(r.start+r.count)/e,a=Math.max(0,s),l=Math.min(n,o)-a;return{offset:Math.floor(a),count:Math.floor(l)}}function WM(i,t){return i.groups.map(e=>({offset:e.start/t,count:e.count/t}))}function Qu(i,t,e){let n=GM(i,t,e),r=WM(i,e);if(!r.length)return[n];let s=[],o=n.offset,a=n.offset+n.count,l=ju(i)/e,c=[];for(let f of r){let{offset:d,count:g}=f,y=d,m=isFinite(g)?g:l-d,p=d+m;y<a&&p>o&&(c.push({pos:Math.max(o,y),isStart:!0}),c.push({pos:Math.min(a,p),isStart:!1}))}c.sort((f,d)=>f.pos!==d.pos?f.pos-d.pos:f.type==="end"?-1:1);let u=0,h=null;for(let f of c){let d=f.pos;u!==0&&d!==h&&s.push({offset:h,count:d-h}),u+=f.isStart?1:-1,h=d}return s}function XM(i,t){let e=i[i.length-1],n=e.offset+e.count>2**16,r=i.reduce((c,u)=>c+u.count,0),s=n?4:2,o=t?new SharedArrayBuffer(r*s):new ArrayBuffer(r*s),a=n?new Uint32Array(o):new Uint16Array(o),l=0;for(let c=0;c<i.length;c++){let{offset:u,count:h}=i[c];for(let f=0;f<h;f++)a[l+f]=u+f;l+=h}return a}var Hc=class extends Vc{get indirect(){return!!this._indirectBuffer}get primitiveStride(){return null}get primitiveBufferStride(){return this.indirect?1:this.primitiveStride}set primitiveBufferStride(t){}get primitiveBuffer(){return this.indirect?this._indirectBuffer:this.geometry.index.array}set primitiveBuffer(t){}constructor(t,e={}){if(t.isBufferGeometry){if(t.index&&t.index.isInterleavedBufferAttribute)throw new Error("BVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("BVH: Only BufferGeometries are supported.");if(e.useSharedArrayBuffer&&!lm())throw new Error("BVH: SharedArrayBuffer is not available.");super(),this.geometry=t,this.resolvePrimitiveIndex=e.indirect?n=>this._indirectBuffer[n]:n=>n,this.primitiveBuffer=null,this.primitiveBufferStride=null,this._indirectBuffer=null,e={...Lc,...e},e[ra]||this.init(e)}init(t){let{geometry:e,primitiveStride:n}=this;if(t.indirect){let r=Qu(e,t.range,n),s=XM(r,t.useSharedArrayBuffer);this._indirectBuffer=s}else cm(e,t);super.init(t),!e.boundingBox&&t.setBoundingBox&&(e.boundingBox=this.getBoundingBox(new ae))}getRootRanges(t){return this.indirect?[{offset:0,count:this._indirectBuffer.length}]:Qu(this.geometry,t,this.primitiveStride)}raycastObject3D(){throw new Error("BVH: raycastObject3D() not implemented")}};var Ln=class{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(t,e){let n=1/0,r=-1/0;for(let s=0,o=t.length;s<o;s++){let l=t[s][e];n=l<n?l:n,r=l>r?l:r}this.min=n,this.max=r}setFromPoints(t,e){let n=1/0,r=-1/0;for(let s=0,o=e.length;s<o;s++){let a=e[s],l=t.dot(a);n=l<n?l:n,r=l>r?l:r}this.min=n,this.max=r}isSeparated(t){return this.min>t.max||t.min>this.max}};Ln.prototype.setFromBox=(function(){let i=new I;return function(e,n){let r=n.min,s=n.max,o=1/0,a=-1/0;for(let l=0;l<=1;l++)for(let c=0;c<=1;c++)for(let u=0;u<=1;u++){i.x=r.x*l+s.x*(1-l),i.y=r.y*c+s.y*(1-c),i.z=r.z*u+s.z*(1-u);let h=e.dot(i);o=Math.min(h,o),a=Math.max(h,a)}this.min=o,this.max=a}})();var qM=(function(){let i=new I,t=new I,e=new I;return function(r,s,o){let a=r.start,l=i,c=s.start,u=t;e.subVectors(a,c),i.subVectors(r.end,r.start),t.subVectors(s.end,s.start);let h=e.dot(u),f=u.dot(l),d=u.dot(u),g=e.dot(l),m=l.dot(l)*d-f*f,p,x;m!==0?p=(h*f-g*d)/m:p=0,x=(h+p*f)/d,o.x=p,o.y=x}})(),aa=(function(){let i=new ct,t=new I,e=new I;return function(r,s,o,a){qM(r,s,i);let l=i.x,c=i.y;if(l>=0&&l<=1&&c>=0&&c<=1){r.at(l,o),s.at(c,a);return}else if(l>=0&&l<=1){c<0?s.at(0,a):s.at(1,a),r.closestPointToPoint(a,!0,o);return}else if(c>=0&&c<=1){l<0?r.at(0,o):r.at(1,o),s.closestPointToPoint(o,!0,a);return}else{let u;l<0?u=r.start:u=r.end;let h;c<0?h=s.start:h=s.end;let f=t,d=e;if(r.closestPointToPoint(h,!0,t),s.closestPointToPoint(u,!0,e),f.distanceToSquared(h)<=d.distanceToSquared(u)){o.copy(f),a.copy(h);return}else{o.copy(u),a.copy(d);return}}}})(),hm=(function(){let i=new I,t=new I,e=new Ve,n=new gn;return function(s,o){let{radius:a,center:l}=s,{a:c,b:u,c:h}=o;if(n.start=c,n.end=u,n.closestPointToPoint(l,!0,i).distanceTo(l)<=a||(n.start=c,n.end=h,n.closestPointToPoint(l,!0,i).distanceTo(l)<=a)||(n.start=u,n.end=h,n.closestPointToPoint(l,!0,i).distanceTo(l)<=a))return!0;let y=o.getPlane(e);if(Math.abs(y.distanceToPoint(l))<=a){let p=y.projectPoint(l,t);if(o.containsPoint(p))return!0}return!1}})();var YM=["x","y","z"],Gi=1e-15,um=Gi*Gi;function Zn(i){return Math.abs(i)<Gi}var je=class extends an{constructor(...t){super(...t),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new I),this.satBounds=new Array(4).fill().map(()=>new Ln),this.points=[this.a,this.b,this.c],this.plane=new Ve,this.isDegenerateIntoSegment=!1,this.isDegenerateIntoPoint=!1,this.degenerateSegment=new gn,this.needsUpdate=!0}intersectsSphere(t){return hm(t,this)}update(){let t=this.a,e=this.b,n=this.c,r=this.points,s=this.satAxes,o=this.satBounds,a=s[0],l=o[0];this.getNormal(a),l.setFromPoints(a,r);let c=s[1],u=o[1];c.subVectors(t,e),u.setFromPoints(c,r);let h=s[2],f=o[2];h.subVectors(e,n),f.setFromPoints(h,r);let d=s[3],g=o[3];d.subVectors(n,t),g.setFromPoints(d,r);let y=c.length(),m=h.length(),p=d.length();this.isDegenerateIntoPoint=!1,this.isDegenerateIntoSegment=!1,y<Gi?m<Gi||p<Gi?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(t),this.degenerateSegment.end.copy(n)):m<Gi?p<Gi?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(e),this.degenerateSegment.end.copy(t)):p<Gi&&(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(n),this.degenerateSegment.end.copy(e)),this.plane.setFromNormalAndCoplanarPoint(a,t),this.needsUpdate=!1}};je.prototype.closestPointToSegment=(function(){let i=new I,t=new I,e=new gn;return function(r,s=null,o=null){this.needsUpdate&&this.update();let{start:a,end:l}=r,c=this.points,u,h=1/0,f=this.plane.distanceToPoint(a),d=this.plane.distanceToPoint(l);if(f*d<0&&this.plane.intersectLine(r,i)!==null&&this.containsPoint(i))return s&&s.copy(i),o&&o.copy(i),0;for(let g=0;g<3;g++){let y=(g+1)%3;e.start.copy(c[g]),e.end.copy(c[y]),aa(e,r,i,t),u=i.distanceToSquared(t),u<h&&(h=u,s&&s.copy(i),o&&o.copy(t))}return this.closestPointToPoint(a,i),u=a.distanceToSquared(i),u<h&&(h=u,s&&s.copy(i),o&&o.copy(a)),this.closestPointToPoint(l,i),u=l.distanceToSquared(i),u<h&&(h=u,s&&s.copy(i),o&&o.copy(l)),Math.sqrt(h)}})();je.prototype.intersectsTriangle=(function(){let i=new je,t=new Ln,e=new Ln,n=new I,r=new I,s=new I,o=new I,a=new gn,l=new gn,c=new I,u=new ct,h=new ct;function f(v,_,b,E){let T=n;!v.isDegenerateIntoPoint&&!v.isDegenerateIntoSegment?T.copy(v.plane.normal):T.copy(_.plane.normal);let D=v.satBounds,S=v.satAxes;for(let L=1;L<4;L++){let F=D[L],O=S[L];if(t.setFromPoints(O,_.points),F.isSeparated(t)||(o.copy(T).cross(O),t.setFromPoints(o,v.points),e.setFromPoints(o,_.points),t.isSeparated(e)))return!1}let M=_.satBounds,A=_.satAxes;for(let L=1;L<4;L++){let F=M[L],O=A[L];if(t.setFromPoints(O,v.points),F.isSeparated(t)||(o.crossVectors(T,O),t.setFromPoints(o,v.points),e.setFromPoints(o,_.points),t.isSeparated(e)))return!1}return b&&(E||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),b.start.set(0,0,0),b.end.set(0,0,0)),!0}function d(v,_,b,E,T,D,S,M,A,L,F){let O=S/(S-M);L.x=E+(T-E)*O,F.start.subVectors(_,v).multiplyScalar(O).add(v),O=S/(S-A),L.y=E+(D-E)*O,F.end.subVectors(b,v).multiplyScalar(O).add(v)}function g(v,_,b,E,T,D,S,M,A,L,F){if(T>0)d(v.c,v.a,v.b,E,_,b,A,S,M,L,F);else if(D>0)d(v.b,v.a,v.c,b,_,E,M,S,A,L,F);else if(M*A>0||S!=0)d(v.a,v.b,v.c,_,b,E,S,M,A,L,F);else if(M!=0)d(v.b,v.a,v.c,b,_,E,M,S,A,L,F);else if(A!=0)d(v.c,v.a,v.b,E,_,b,A,S,M,L,F);else return!0;return!1}function y(v,_,b,E){let T=_.degenerateSegment,D=v.plane.distanceToPoint(T.start),S=v.plane.distanceToPoint(T.end);return Zn(D)?Zn(S)?f(v,_,b,E):(b&&(b.start.copy(T.start),b.end.copy(T.start)),v.containsPoint(T.start)):Zn(S)?(b&&(b.start.copy(T.end),b.end.copy(T.end)),v.containsPoint(T.end)):v.plane.intersectLine(T,n)!=null?(b&&(b.start.copy(n),b.end.copy(n)),v.containsPoint(n)):!1}function m(v,_,b){let E=_.a;return Zn(v.plane.distanceToPoint(E))&&v.containsPoint(E)?(b&&(b.start.copy(E),b.end.copy(E)),!0):!1}function p(v,_,b){let E=v.degenerateSegment,T=_.a;return E.closestPointToPoint(T,!0,n),T.distanceToSquared(n)<um?(b&&(b.start.copy(T),b.end.copy(T)),!0):!1}function x(v,_,b,E){if(v.isDegenerateIntoSegment)if(_.isDegenerateIntoSegment){let T=v.degenerateSegment,D=_.degenerateSegment,S=r,M=s;T.delta(S),D.delta(M);let A=n.subVectors(D.start,T.start),L=S.x*M.y-S.y*M.x;if(Zn(L))return!1;let F=(A.x*M.y-A.y*M.x)/L,O=-(S.x*A.y-S.y*A.x)/L;if(F<0||F>1||O<0||O>1)return!1;let H=T.start.z+S.z*F,V=D.start.z+M.z*O;return Zn(H-V)?(b&&(b.start.copy(T.start).addScaledVector(S,F),b.end.copy(T.start).addScaledVector(S,F)),!0):!1}else return _.isDegenerateIntoPoint?p(v,_,b):y(_,v,b,E);else{if(v.isDegenerateIntoPoint)return _.isDegenerateIntoPoint?_.a.distanceToSquared(v.a)<um?(b&&(b.start.copy(v.a),b.end.copy(v.a)),!0):!1:_.isDegenerateIntoSegment?p(_,v,b):m(_,v,b);if(_.isDegenerateIntoPoint)return m(v,_,b);if(_.isDegenerateIntoSegment)return y(v,_,b,E)}}return function(_,b=null,E=!1){this.needsUpdate&&this.update(),_.isExtendedTriangle?_.needsUpdate&&_.update():(i.copy(_),i.update(),_=i);let T=x(this,_,b,E);if(T!==void 0)return T;let D=this.plane,S=_.plane,M=S.distanceToPoint(this.a),A=S.distanceToPoint(this.b),L=S.distanceToPoint(this.c);Zn(M)&&(M=0),Zn(A)&&(A=0),Zn(L)&&(L=0);let F=M*A,O=M*L;if(F>0&&O>0)return!1;let H=D.distanceToPoint(_.a),V=D.distanceToPoint(_.b),rt=D.distanceToPoint(_.c);Zn(H)&&(H=0),Zn(V)&&(V=0),Zn(rt)&&(rt=0);let K=H*V,lt=H*rt;if(K>0&&lt>0)return!1;r.copy(D.normal),s.copy(S.normal);let _t=r.cross(s),St=0,Ft=Math.abs(_t.x),Bt=Math.abs(_t.y);Bt>Ft&&(Ft=Bt,St=1),Math.abs(_t.z)>Ft&&(St=2);let Ot=YM[St],N=this.a[Ot],U=this.b[Ot],W=this.c[Ot],Z=_.a[Ot],$=_.b[Ot],j=_.c[Ot];if(g(this,N,U,W,F,O,M,A,L,u,a))return f(this,_,b,E);if(g(_,Z,$,j,K,lt,H,V,rt,h,l))return f(this,_,b,E);if(u.y<u.x){let it=u.y;u.y=u.x,u.x=it,c.copy(a.start),a.start.copy(a.end),a.end.copy(c)}if(h.y<h.x){let it=h.y;h.y=h.x,h.x=it,c.copy(l.start),l.start.copy(l.end),l.end.copy(c)}return u.y<h.x||h.y<u.x?!1:(b&&(h.x>u.x?b.start.copy(l.start):b.start.copy(a.start),h.y<u.y?b.end.copy(l.end):b.end.copy(a.end)),!0)}})();je.prototype.distanceToPoint=(function(){let i=new I;return function(e){return this.closestPointToPoint(e,i),e.distanceTo(i)}})();je.prototype.distanceToTriangle=(function(){let i=new I,t=new I,e=["a","b","c"],n=new gn,r=new gn;return function(o,a=null,l=null){let c=a||l?n:null;if(this.intersectsTriangle(o,c,!0))return(a||l)&&(a&&c.getCenter(a),l&&c.getCenter(l)),0;let u=1/0;for(let h=0;h<3;h++){let f,d=e[h],g=o[d];this.closestPointToPoint(g,i),f=g.distanceToSquared(i),f<u&&(u=f,a&&a.copy(i),l&&l.copy(g));let y=this[d];o.closestPointToPoint(y,i),f=y.distanceToSquared(i),f<u&&(u=f,a&&a.copy(y),l&&l.copy(i))}for(let h=0;h<3;h++){let f=e[h],d=e[(h+1)%3];n.set(this[f],this[d]);for(let g=0;g<3;g++){let y=e[g],m=e[(g+1)%3];r.set(o[y],o[m]),aa(n,r,i,t);let p=i.distanceToSquared(t);p<u&&(u=p,a&&a.copy(i),l&&l.copy(t))}}return Math.sqrt(u)}})();var Ne=class{constructor(t,e,n){this.isOrientedBox=!0,this.min=new I,this.max=new I,this.matrix=new Wt,this.invMatrix=new Wt,this.points=new Array(8).fill().map(()=>new I),this.satAxes=new Array(3).fill().map(()=>new I),this.satBounds=new Array(3).fill().map(()=>new Ln),this.alignedSatBounds=new Array(3).fill().map(()=>new Ln),this.needsUpdate=!1,t&&this.min.copy(t),e&&this.max.copy(e),n&&this.matrix.copy(n)}set(t,e,n){this.min.copy(t),this.max.copy(e),this.matrix.copy(n),this.needsUpdate=!0}copy(t){this.min.copy(t.min),this.max.copy(t.max),this.matrix.copy(t.matrix),this.needsUpdate=!0}};Ne.prototype.update=(function(){return function(){let t=this.matrix,e=this.min,n=this.max,r=this.points;for(let c=0;c<=1;c++)for(let u=0;u<=1;u++)for(let h=0;h<=1;h++){let f=1*c|2*u|4*h,d=r[f];d.x=c?n.x:e.x,d.y=u?n.y:e.y,d.z=h?n.z:e.z,d.applyMatrix4(t)}let s=this.satBounds,o=this.satAxes,a=r[0];for(let c=0;c<3;c++){let u=o[c],h=s[c],f=1<<c,d=r[f];u.subVectors(a,d),h.setFromPoints(u,r)}let l=this.alignedSatBounds;l[0].setFromPointsField(r,"x"),l[1].setFromPointsField(r,"y"),l[2].setFromPointsField(r,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}})();Ne.prototype.intersectsBox=(function(){let i=new Ln;return function(e){this.needsUpdate&&this.update();let n=e.min,r=e.max,s=this.satBounds,o=this.satAxes,a=this.alignedSatBounds;if(i.min=n.x,i.max=r.x,a[0].isSeparated(i)||(i.min=n.y,i.max=r.y,a[1].isSeparated(i))||(i.min=n.z,i.max=r.z,a[2].isSeparated(i)))return!1;for(let l=0;l<3;l++){let c=o[l],u=s[l];if(i.setFromBox(c,e),u.isSeparated(i))return!1}return!0}})();Ne.prototype.intersectsTriangle=(function(){let i=new je,t=new Array(3),e=new Ln,n=new Ln,r=new I;return function(o){this.needsUpdate&&this.update(),o.isExtendedTriangle?o.needsUpdate&&o.update():(i.copy(o),i.update(),o=i);let a=this.satBounds,l=this.satAxes;t[0]=o.a,t[1]=o.b,t[2]=o.c;for(let f=0;f<3;f++){let d=a[f],g=l[f];if(e.setFromPoints(g,t),d.isSeparated(e))return!1}let c=o.satBounds,u=o.satAxes,h=this.points;for(let f=0;f<3;f++){let d=c[f],g=u[f];if(e.setFromPoints(g,h),d.isSeparated(e))return!1}for(let f=0;f<3;f++){let d=l[f];for(let g=0;g<4;g++){let y=u[g];if(r.crossVectors(d,y),e.setFromPoints(r,t),n.setFromPoints(r,h),e.isSeparated(n))return!1}}return!0}})();Ne.prototype.closestPointToPoint=(function(){return function(t,e){return this.needsUpdate&&this.update(),e.copy(t).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),e}})();Ne.prototype.distanceToPoint=(function(){let i=new I;return function(e){return this.closestPointToPoint(e,i),e.distanceTo(i)}})();Ne.prototype.distanceToBox=(function(){let i=["x","y","z"],t=new Array(12).fill().map(()=>new gn),e=new Array(12).fill().map(()=>new gn),n=new I,r=new I;return function(o,a=0,l=null,c=null){if(this.needsUpdate&&this.update(),this.intersectsBox(o))return(l||c)&&(o.getCenter(r),this.closestPointToPoint(r,n),o.closestPointToPoint(n,r),l&&l.copy(n),c&&c.copy(r)),0;let u=a*a,h=o.min,f=o.max,d=this.points,g=1/0;for(let m=0;m<8;m++){let p=d[m];r.copy(p).clamp(h,f);let x=p.distanceToSquared(r);if(x<g&&(g=x,l&&l.copy(p),c&&c.copy(r),x<u))return Math.sqrt(x)}let y=0;for(let m=0;m<3;m++)for(let p=0;p<=1;p++)for(let x=0;x<=1;x++){let v=(m+1)%3,_=(m+2)%3,b=p<<v|x<<_,E=1<<m|p<<v|x<<_,T=d[b],D=d[E];t[y].set(T,D);let M=i[m],A=i[v],L=i[_],F=e[y],O=F.start,H=F.end;O[M]=h[M],O[A]=p?h[A]:f[A],O[L]=x?h[L]:f[L],H[M]=f[M],H[A]=p?h[A]:f[A],H[L]=x?h[L]:f[L],y++}for(let m=0;m<=1;m++)for(let p=0;p<=1;p++)for(let x=0;x<=1;x++){r.x=m?f.x:h.x,r.y=p?f.y:h.y,r.z=x?f.z:h.z,this.closestPointToPoint(r,n);let v=r.distanceToSquared(n);if(v<g&&(g=v,l&&l.copy(n),c&&c.copy(r),v<u))return Math.sqrt(v)}for(let m=0;m<12;m++){let p=t[m];for(let x=0;x<12;x++){let v=e[x];aa(p,v,n,r);let _=n.distanceToSquared(r);if(_<g&&(g=_,l&&l.copy(n),c&&c.copy(r),_<u))return Math.sqrt(_)}}return Math.sqrt(g)}})();var tf=class extends lr{constructor(){super(()=>new je)}},yn=new tf;var la=new I,ef=new I;function fm(i,t,e={},n=0,r=1/0){let s=n*n,o=r*r,a=1/0,l=null;if(i.shapecast({boundsTraverseOrder:u=>(la.copy(t).clamp(u.min,u.max),la.distanceToSquared(t)),intersectsBounds:(u,h,f)=>f<a&&f<o,intersectsTriangle:(u,h)=>{u.closestPointToPoint(t,la);let f=t.distanceToSquared(la);return f<a&&(ef.copy(la),a=f,l=h),f<s}}),a===1/0)return null;let c=Math.sqrt(a);return e.point?e.point.copy(ef):e.point=ef.clone(),e.distance=c,e.faceIndex=l,e}var Gc=parseInt("180")>=169,ZM=parseInt("180")<=161,Vr=new I,Hr=new I,Gr=new I,Wc=new ct,Xc=new ct,qc=new ct,dm=new I,pm=new I,mm=new I,ca=new I;function $M(i,t,e,n,r,s,o,a){let l;if(s===Je?l=i.intersectTriangle(n,e,t,!0,r):l=i.intersectTriangle(t,e,n,s!==Ke,r),l===null)return null;let c=i.origin.distanceTo(r);return c<o||c>a?null:{distance:c,point:r.clone()}}function gm(i,t,e,n,r,s,o,a,l,c,u){Vr.fromBufferAttribute(t,s),Hr.fromBufferAttribute(t,o),Gr.fromBufferAttribute(t,a);let h=$M(i,Vr,Hr,Gr,ca,l,c,u);if(h){if(n){Wc.fromBufferAttribute(n,s),Xc.fromBufferAttribute(n,o),qc.fromBufferAttribute(n,a),h.uv=new ct;let d=an.getInterpolation(ca,Vr,Hr,Gr,Wc,Xc,qc,h.uv);Gc||(h.uv=d)}if(r){Wc.fromBufferAttribute(r,s),Xc.fromBufferAttribute(r,o),qc.fromBufferAttribute(r,a),h.uv1=new ct;let d=an.getInterpolation(ca,Vr,Hr,Gr,Wc,Xc,qc,h.uv1);Gc||(h.uv1=d),ZM&&(h.uv2=h.uv1)}if(e){dm.fromBufferAttribute(e,s),pm.fromBufferAttribute(e,o),mm.fromBufferAttribute(e,a),h.normal=new I;let d=an.getInterpolation(ca,Vr,Hr,Gr,dm,pm,mm,h.normal);h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1),Gc||(h.normal=d)}let f={a:s,b:o,c:a,normal:new I,materialIndex:0};if(an.getNormal(Vr,Hr,Gr,f.normal),h.face=f,h.faceIndex=s,Gc){let d=new I;an.getBarycoord(ca,Vr,Hr,Gr,d),h.barycoord=d}}return h}function ym(i){return i&&i.isMaterial?i.side:i}function Xs(i,t,e,n,r,s,o){let a=n*3,l=a+0,c=a+1,u=a+2,{index:h,groups:f}=i;i.index&&(l=h.getX(l),c=h.getX(c),u=h.getX(u));let{position:d,normal:g,uv:y,uv1:m}=i.attributes;if(Array.isArray(t)){let p=n*3;for(let x=0,v=f.length;x<v;x++){let{start:_,count:b,materialIndex:E}=f[x];if(p>=_&&p<_+b){let T=ym(t[E]),D=gm(e,d,g,y,m,l,c,u,T,s,o);if(D)if(D.faceIndex=n,D.face.materialIndex=E,r)r.push(D);else return D}}}else{let p=ym(t),x=gm(e,d,g,y,m,l,c,u,p,s,o);if(x)if(x.faceIndex=n,x.face.materialIndex=0,r)r.push(x);else return x}return null}function be(i,t,e,n){let r=i.a,s=i.b,o=i.c,a=t,l=t+1,c=t+2;e&&(a=e.getX(a),l=e.getX(l),c=e.getX(c)),r.x=n.getX(a),r.y=n.getY(a),r.z=n.getZ(a),s.x=n.getX(l),s.y=n.getY(l),s.z=n.getZ(l),o.x=n.getX(c),o.y=n.getY(c),o.z=n.getZ(c)}function _m(i,t,e,n,r,s,o,a){let{geometry:l,_indirectBuffer:c}=i;for(let u=n,h=n+r;u<h;u++)Xs(l,t,e,u,s,o,a)}function vm(i,t,e,n,r,s,o){let{geometry:a,_indirectBuffer:l}=i,c=1/0,u=null;for(let h=n,f=n+r;h<f;h++){let d;d=Xs(a,t,e,h,null,s,o),d&&d.distance<c&&(u=d,c=d.distance)}return u}function xm(i,t,e,n,r,s,o){let{geometry:a}=e,{index:l}=a,c=a.attributes.position;for(let u=i,h=t+i;u<h;u++){let f;if(f=u,be(o,f*3,l,c),o.needsUpdate=!0,n(o,f,r,s))return!0}return!1}function Mm(i,t=null){t&&Array.isArray(t)&&(t=new Set(t));let e=i.geometry,n=e.index?e.index.array:null,r=e.attributes.position,s,o,a,l,c=0,u=i._roots;for(let f=0,d=u.length;f<d;f++)s=u[f],o=new Uint32Array(s),a=new Uint16Array(s),l=new Float32Array(s),h(0,c),c+=s.byteLength;function h(f,d,g=!1){let y=f*2;if(re(y,a)){let m=pe(f,o),p=ye(y,a),x=1/0,v=1/0,_=1/0,b=-1/0,E=-1/0,T=-1/0;for(let D=3*m,S=3*(m+p);D<S;D++){let M=n[D],A=r.getX(M),L=r.getY(M),F=r.getZ(M);A<x&&(x=A),A>b&&(b=A),L<v&&(v=L),L>E&&(E=L),F<_&&(_=F),F>T&&(T=F)}return l[f+0]!==x||l[f+1]!==v||l[f+2]!==_||l[f+3]!==b||l[f+4]!==E||l[f+5]!==T?(l[f+0]=x,l[f+1]=v,l[f+2]=_,l[f+3]=b,l[f+4]=E,l[f+5]=T,!0):!1}else{let m=ce(f),p=he(f,o),x=g,v=!1,_=!1;if(t){if(!x){let M=m/8+d/32,A=p/8+d/32;v=t.has(M),_=t.has(A),x=!v&&!_}}else v=!0,_=!0;let b=x||v,E=x||_,T=!1;b&&(T=h(m,d,x));let D=!1;E&&(D=h(p,d,x));let S=T||D;if(S)for(let M=0;M<3;M++){let A=m+M,L=p+M,F=l[A],O=l[A+3],H=l[L],V=l[L+3];l[f+M]=F<H?F:H,l[f+M+3]=O>V?O:V}return S}}}function un(i,t,e,n,r){let s,o,a,l,c,u,h=1/e.direction.x,f=1/e.direction.y,d=1/e.direction.z,g=e.origin.x,y=e.origin.y,m=e.origin.z,p=t[i],x=t[i+3],v=t[i+1],_=t[i+3+1],b=t[i+2],E=t[i+3+2];return h>=0?(s=(p-g)*h,o=(x-g)*h):(s=(x-g)*h,o=(p-g)*h),f>=0?(a=(v-y)*f,l=(_-y)*f):(a=(_-y)*f,l=(v-y)*f),s>l||a>o||((a>s||isNaN(s))&&(s=a),(l<o||isNaN(o))&&(o=l),d>=0?(c=(b-m)*d,u=(E-m)*d):(c=(E-m)*d,u=(b-m)*d),s>u||c>o)?!1:((c>s||s!==s)&&(s=c),(u<o||o!==o)&&(o=u),s<=r&&o>=n)}function Sm(i,t,e,n,r,s,o,a){let{geometry:l,_indirectBuffer:c}=i;for(let u=n,h=n+r;u<h;u++){let f=c?c[u]:u;Xs(l,t,e,f,s,o,a)}}function bm(i,t,e,n,r,s,o){let{geometry:a,_indirectBuffer:l}=i,c=1/0,u=null;for(let h=n,f=n+r;h<f;h++){let d;d=Xs(a,t,e,l?l[h]:h,null,s,o),d&&d.distance<c&&(u=d,c=d.distance)}return u}function wm(i,t,e,n,r,s,o){let{geometry:a}=e,{index:l}=a,c=a.attributes.position;for(let u=i,h=t+i;u<h;u++){let f;if(f=e.resolveTriangleIndex(u),be(o,f*3,l,c),o.needsUpdate=!0,n(o,f,r,s))return!0}return!1}function Em(i,t,e,n,r,s,o){Qt.setBuffer(i._roots[t]),un(0,Qt.float32Array,n,s,o)&&nf(0,i,e,n,r,s,o),Qt.clearBuffer()}function nf(i,t,e,n,r,s,o){let{float32Array:a,uint16Array:l,uint32Array:c}=Qt,u=i*2;if(re(u,l)){let f=pe(i,c),d=ye(u,l);_m(t,e,n,f,d,r,s,o)}else{let f=ce(i);un(f,a,n,s,o)&&nf(f,t,e,n,r,s,o);let d=he(i,c);un(d,a,n,s,o)&&nf(d,t,e,n,r,s,o)}}var JM=["x","y","z"];function Tm(i,t,e,n,r,s){Qt.setBuffer(i._roots[t]);let o=null;return un(0,Qt.float32Array,n,r,s)&&(o=rf(0,i,e,n,r,s)),Qt.clearBuffer(),o}function rf(i,t,e,n,r,s){let{float32Array:o,uint16Array:a,uint32Array:l}=Qt,c=i*2;if(re(c,a)){let h=pe(i,l),f=ye(c,a);return vm(t,e,n,h,f,r,s)}else{let h=Os(i,l),f=JM[h],g=n.direction[f]>=0,y,m;g?(y=ce(i),m=he(i,l)):(y=he(i,l),m=ce(i));let x=un(y,o,n,r,s)?rf(y,t,e,n,r,s):null;if(x){let b=x.point[f];if(g?b<=o[m+h]:b>=o[m+h+3])return x}let _=un(m,o,n,r,s)?rf(m,t,e,n,r,s):null;return x&&_?x.distance<=_.distance?x:_:x||_||null}}var Yc=new ae,qs=new je,Ys=new je,ha=new Wt,Am=new Ne,Zc=new Ne;function Rm(i,t,e,n){Qt.setBuffer(i._roots[t]);let r=sf(0,i,e,n);return Qt.clearBuffer(),r}function sf(i,t,e,n,r=null){let{float32Array:s,uint16Array:o,uint32Array:a}=Qt,l=i*2;if(r===null&&(e.boundingBox||e.computeBoundingBox(),Am.set(e.boundingBox.min,e.boundingBox.max,n),r=Am),re(l,o)){let u=t.geometry,h=u.index,f=u.attributes.position,d=e.index,g=e.attributes.position,y=pe(i,a),m=ye(l,o);if(ha.copy(n).invert(),e.boundsTree)return Se(i,s,Zc),Zc.matrix.copy(ha),Zc.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:x=>Zc.intersectsBox(x),intersectsTriangle:x=>{x.a.applyMatrix4(n),x.b.applyMatrix4(n),x.c.applyMatrix4(n),x.needsUpdate=!0;for(let v=y*3,_=(m+y)*3;v<_;v+=3)if(be(Ys,v,h,f),Ys.needsUpdate=!0,x.intersectsTriangle(Ys))return!0;return!1}});{let p=ur(e);for(let x=y*3,v=(m+y)*3;x<v;x+=3){be(qs,x,h,f),qs.a.applyMatrix4(ha),qs.b.applyMatrix4(ha),qs.c.applyMatrix4(ha),qs.needsUpdate=!0;for(let _=0,b=p*3;_<b;_+=3)if(be(Ys,_,d,g),Ys.needsUpdate=!0,qs.intersectsTriangle(Ys))return!0}}}else{let u=ce(i),h=he(i,a);return Se(u,s,Yc),!!(r.intersectsBox(Yc)&&sf(u,t,e,n,r)||(Se(h,s,Yc),r.intersectsBox(Yc)&&sf(h,t,e,n,r)))}}var $c=new Wt,of=new Ne,ua=new Ne,KM=new I,jM=new I,QM=new I,tS=new I;function Cm(i,t,e,n={},r={},s=0,o=1/0){t.boundingBox||t.computeBoundingBox(),of.set(t.boundingBox.min,t.boundingBox.max,e),of.needsUpdate=!0;let a=i.geometry,l=a.attributes.position,c=a.index,u=t.attributes.position,h=t.index,f=yn.getPrimitive(),d=yn.getPrimitive(),g=KM,y=jM,m=null,p=null;r&&(m=QM,p=tS);let x=1/0,v=null,_=null;return $c.copy(e).invert(),ua.matrix.copy($c),i.shapecast({boundsTraverseOrder:b=>of.distanceToBox(b),intersectsBounds:(b,E,T)=>T<x&&T<o?(E&&(ua.min.copy(b.min),ua.max.copy(b.max),ua.needsUpdate=!0),!0):!1,intersectsRange:(b,E)=>{if(t.boundsTree)return t.boundsTree.shapecast({boundsTraverseOrder:D=>ua.distanceToBox(D),intersectsBounds:(D,S,M)=>M<x&&M<o,intersectsRange:(D,S)=>{for(let M=D,A=D+S;M<A;M++){be(d,3*M,h,u),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let L=b,F=b+E;L<F;L++){be(f,3*L,c,l),f.needsUpdate=!0;let O=f.distanceToTriangle(d,g,m);if(O<x&&(y.copy(g),p&&p.copy(m),x=O,v=L,_=M),O<s)return!0}}}});{let T=ur(t);for(let D=0,S=T;D<S;D++){be(d,3*D,h,u),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let M=b,A=b+E;M<A;M++){be(f,3*M,c,l),f.needsUpdate=!0;let L=f.distanceToTriangle(d,g,m);if(L<x&&(y.copy(g),p&&p.copy(m),x=L,v=M,_=D),L<s)return!0}}}}}),yn.releasePrimitive(f),yn.releasePrimitive(d),x===1/0?null:(n.point?n.point.copy(y):n.point=y.clone(),n.distance=x,n.faceIndex=v,r&&(r.point?r.point.copy(p):r.point=p.clone(),r.point.applyMatrix4($c),y.applyMatrix4($c),r.distance=y.sub(r.point).length(),r.faceIndex=_),n)}function Pm(i,t=null){t&&Array.isArray(t)&&(t=new Set(t));let e=i.geometry,n=e.index?e.index.array:null,r=e.attributes.position,s,o,a,l,c=0,u=i._roots;for(let f=0,d=u.length;f<d;f++)s=u[f],o=new Uint32Array(s),a=new Uint16Array(s),l=new Float32Array(s),h(0,c),c+=s.byteLength;function h(f,d,g=!1){let y=f*2;if(re(y,a)){let m=pe(f,o),p=ye(y,a),x=1/0,v=1/0,_=1/0,b=-1/0,E=-1/0,T=-1/0;for(let D=m,S=m+p;D<S;D++){let M=3*i.resolveTriangleIndex(D);for(let A=0;A<3;A++){let L=M+A;L=n?n[L]:L;let F=r.getX(L),O=r.getY(L),H=r.getZ(L);F<x&&(x=F),F>b&&(b=F),O<v&&(v=O),O>E&&(E=O),H<_&&(_=H),H>T&&(T=H)}}return l[f+0]!==x||l[f+1]!==v||l[f+2]!==_||l[f+3]!==b||l[f+4]!==E||l[f+5]!==T?(l[f+0]=x,l[f+1]=v,l[f+2]=_,l[f+3]=b,l[f+4]=E,l[f+5]=T,!0):!1}else{let m=ce(f),p=he(f,o),x=g,v=!1,_=!1;if(t){if(!x){let M=m/8+d/32,A=p/8+d/32;v=t.has(M),_=t.has(A),x=!v&&!_}}else v=!0,_=!0;let b=x||v,E=x||_,T=!1;b&&(T=h(m,d,x));let D=!1;E&&(D=h(p,d,x));let S=T||D;if(S)for(let M=0;M<3;M++){let A=m+M,L=p+M,F=l[A],O=l[A+3],H=l[L],V=l[L+3];l[f+M]=F<H?F:H,l[f+M+3]=O>V?O:V}return S}}}function Im(i,t,e,n,r,s,o){Qt.setBuffer(i._roots[t]),un(0,Qt.float32Array,n,s,o)&&af(0,i,e,n,r,s,o),Qt.clearBuffer()}function af(i,t,e,n,r,s,o){let{float32Array:a,uint16Array:l,uint32Array:c}=Qt,u=i*2;if(re(u,l)){let f=pe(i,c),d=ye(u,l);Sm(t,e,n,f,d,r,s,o)}else{let f=ce(i);un(f,a,n,s,o)&&af(f,t,e,n,r,s,o);let d=he(i,c);un(d,a,n,s,o)&&af(d,t,e,n,r,s,o)}}var eS=["x","y","z"];function Dm(i,t,e,n,r,s){Qt.setBuffer(i._roots[t]);let o=null;return un(0,Qt.float32Array,n,r,s)&&(o=lf(0,i,e,n,r,s)),Qt.clearBuffer(),o}function lf(i,t,e,n,r,s){let{float32Array:o,uint16Array:a,uint32Array:l}=Qt,c=i*2;if(re(c,a)){let h=pe(i,l),f=ye(c,a);return bm(t,e,n,h,f,r,s)}else{let h=Os(i,l),f=eS[h],g=n.direction[f]>=0,y,m;g?(y=ce(i),m=he(i,l)):(y=he(i,l),m=ce(i));let x=un(y,o,n,r,s)?lf(y,t,e,n,r,s):null;if(x){let b=x.point[f];if(g?b<=o[m+h]:b>=o[m+h+3])return x}let _=un(m,o,n,r,s)?lf(m,t,e,n,r,s):null;return x&&_?x.distance<=_.distance?x:_:x||_||null}}var Jc=new ae,Zs=new je,$s=new je,fa=new Wt,Lm=new Ne,Kc=new Ne;function Um(i,t,e,n){Qt.setBuffer(i._roots[t]);let r=cf(0,i,e,n);return Qt.clearBuffer(),r}function cf(i,t,e,n,r=null){let{float32Array:s,uint16Array:o,uint32Array:a}=Qt,l=i*2;if(r===null&&(e.boundingBox||e.computeBoundingBox(),Lm.set(e.boundingBox.min,e.boundingBox.max,n),r=Lm),re(l,o)){let u=t.geometry,h=u.index,f=u.attributes.position,d=e.index,g=e.attributes.position,y=pe(i,a),m=ye(l,o);if(fa.copy(n).invert(),e.boundsTree)return Se(i,s,Kc),Kc.matrix.copy(fa),Kc.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:x=>Kc.intersectsBox(x),intersectsTriangle:x=>{x.a.applyMatrix4(n),x.b.applyMatrix4(n),x.c.applyMatrix4(n),x.needsUpdate=!0;for(let v=y,_=m+y;v<_;v++)if(be($s,3*t.resolveTriangleIndex(v),h,f),$s.needsUpdate=!0,x.intersectsTriangle($s))return!0;return!1}});{let p=ur(e);for(let x=y,v=m+y;x<v;x++){let _=t.resolveTriangleIndex(x);be(Zs,3*_,h,f),Zs.a.applyMatrix4(fa),Zs.b.applyMatrix4(fa),Zs.c.applyMatrix4(fa),Zs.needsUpdate=!0;for(let b=0,E=p*3;b<E;b+=3)if(be($s,b,d,g),$s.needsUpdate=!0,Zs.intersectsTriangle($s))return!0}}}else{let u=ce(i),h=he(i,a);return Se(u,s,Jc),!!(r.intersectsBox(Jc)&&cf(u,t,e,n,r)||(Se(h,s,Jc),r.intersectsBox(Jc)&&cf(h,t,e,n,r)))}}var jc=new Wt,hf=new Ne,da=new Ne,nS=new I,iS=new I,rS=new I,sS=new I;function Nm(i,t,e,n={},r={},s=0,o=1/0){t.boundingBox||t.computeBoundingBox(),hf.set(t.boundingBox.min,t.boundingBox.max,e),hf.needsUpdate=!0;let a=i.geometry,l=a.attributes.position,c=a.index,u=t.attributes.position,h=t.index,f=yn.getPrimitive(),d=yn.getPrimitive(),g=nS,y=iS,m=null,p=null;r&&(m=rS,p=sS);let x=1/0,v=null,_=null;return jc.copy(e).invert(),da.matrix.copy(jc),i.shapecast({boundsTraverseOrder:b=>hf.distanceToBox(b),intersectsBounds:(b,E,T)=>T<x&&T<o?(E&&(da.min.copy(b.min),da.max.copy(b.max),da.needsUpdate=!0),!0):!1,intersectsRange:(b,E)=>{if(t.boundsTree){let T=t.boundsTree;return T.shapecast({boundsTraverseOrder:D=>da.distanceToBox(D),intersectsBounds:(D,S,M)=>M<x&&M<o,intersectsRange:(D,S)=>{for(let M=D,A=D+S;M<A;M++){let L=T.resolveTriangleIndex(M);be(d,3*L,h,u),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let F=b,O=b+E;F<O;F++){let H=i.resolveTriangleIndex(F);be(f,3*H,c,l),f.needsUpdate=!0;let V=f.distanceToTriangle(d,g,m);if(V<x&&(y.copy(g),p&&p.copy(m),x=V,v=F,_=M),V<s)return!0}}}})}else{let T=ur(t);for(let D=0,S=T;D<S;D++){be(d,3*D,h,u),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let M=b,A=b+E;M<A;M++){let L=i.resolveTriangleIndex(M);be(f,3*L,c,l),f.needsUpdate=!0;let F=f.distanceToTriangle(d,g,m);if(F<x&&(y.copy(g),p&&p.copy(m),x=F,v=M,_=D),F<s)return!0}}}}}),yn.releasePrimitive(f),yn.releasePrimitive(d),x===1/0?null:(n.point?n.point.copy(y):n.point=y.clone(),n.distance=x,n.faceIndex=v,r&&(r.point?r.point.copy(p):r.point=p.clone(),r.point.applyMatrix4(jc),y.applyMatrix4(jc),r.distance=y.sub(r.point).length(),r.faceIndex=_),n)}function uf(i,t,e){return i===null?null:(i.point.applyMatrix4(t.matrixWorld),i.distance=i.point.distanceTo(e.ray.origin),i.object=t,i)}var Qc=new Ne,th=new ni,Fm=new I,Om=new Wt,Bm=new I,ff=["getX","getY","getZ"],Js=class i extends Hc{static serialize(t,e={}){e={cloneBuffers:!0,...e};let n=t.geometry,r=t._roots,s=t._indirectBuffer,o=n.getIndex(),a={version:1,roots:null,index:null,indirectBuffer:null};return e.cloneBuffers?(a.roots=r.map(l=>l.slice()),a.index=o?o.array.slice():null,a.indirectBuffer=s?s.slice():null):(a.roots=r,a.index=o?o.array:null,a.indirectBuffer=s),a}static deserialize(t,e,n={}){n={setIndex:!0,indirect:!!t.indirectBuffer,...n};let{index:r,roots:s,indirectBuffer:o}=t;t.version||(console.warn("MeshBVH.deserialize: Serialization format has been changed and will be fixed up. It is recommended to regenerate any stored serialized data."),l(s));let a=new i(e,{...n,[ra]:!0});if(a._roots=s,a._indirectBuffer=o||null,n.setIndex){let c=e.getIndex();if(c===null){let u=new le(t.index,1,!1);e.setIndex(u)}else c.array!==r&&(c.array.set(r),c.needsUpdate=!0)}return a;function l(c){for(let u=0;u<c.length;u++){let h=c[u],f=new Uint32Array(h),d=new Uint16Array(h);for(let g=0,y=h.byteLength/32;g<y;g++){let m=8*g,p=2*m;re(p,d)||(f[m+6]=f[m+6]/8-g)}}}}get primitiveStride(){return 3}get resolveTriangleIndex(){return this.resolvePrimitiveIndex}constructor(t,e={}){e.maxLeafTris&&(console.warn('MeshBVH: "maxLeafTris" option has been deprecated. Use "targetLeafSize", instead.'),e={...e,targetLeafSize:e.maxLeafTris}),super(t,e)}shiftTriangleOffsets(t){return super.shiftPrimitiveOffsets(t)}writePrimitiveBounds(t,e,n){let r=this.geometry,s=this._indirectBuffer,o=r.attributes.position,a=r.index?r.index.array:null,c=(s?s[t]:t)*3,u=c+0,h=c+1,f=c+2;a&&(u=a[u],h=a[h],f=a[f]);for(let d=0;d<3;d++){let g=o[ff[d]](u),y=o[ff[d]](h),m=o[ff[d]](f),p=g;y<p&&(p=y),m<p&&(p=m);let x=g;y>x&&(x=y),m>x&&(x=m),e[n+d]=p,e[n+d+3]=x}return e}computePrimitiveBounds(t,e,n){let r=this.geometry,s=this._indirectBuffer,o=r.attributes.position,a=r.index?r.index.array:null,l=o.normalized;if(t<0||e+t-n.offset>n.length/6)throw new Error("MeshBVH: compute triangle bounds range is invalid.");let c=o.array,u=o.offset||0,h=3;o.isInterleavedBufferAttribute&&(h=o.data.stride);let f=["getX","getY","getZ"],d=n.offset;for(let g=t,y=t+e;g<y;g++){let p=(s?s[g]:g)*3,x=(g-d)*6,v=p+0,_=p+1,b=p+2;a&&(v=a[v],_=a[_],b=a[b]),l||(v=v*h+u,_=_*h+u,b=b*h+u);for(let E=0;E<3;E++){let T,D,S;l?(T=o[f[E]](v),D=o[f[E]](_),S=o[f[E]](b)):(T=c[v+E],D=c[_+E],S=c[b+E]);let M=T;D<M&&(M=D),S<M&&(M=S);let A=T;D>A&&(A=D),S>A&&(A=S);let L=(A-M)/2,F=E*2;n[x+F+0]=M+L,n[x+F+1]=L+(Math.abs(M)+L)*Fs}}return n}raycastObject3D(t,e,n=[]){let{material:r}=t;if(r===void 0)return;Om.copy(t.matrixWorld).invert(),th.copy(e.ray).applyMatrix4(Om),Bm.setFromMatrixScale(t.matrixWorld),Fm.copy(th.direction).multiply(Bm);let s=Fm.length(),o=e.near/s,a=e.far/s;if(e.firstHitOnly===!0){let l=this.raycastFirst(th,r,o,a);l=uf(l,t,e),l&&n.push(l)}else{let l=this.raycast(th,r,o,a);for(let c=0,u=l.length;c<u;c++){let h=uf(l[c],t,e);h&&n.push(h)}}return n}refit(t=null){return(this.indirect?Pm:Mm)(this,t)}raycast(t,e=Hn,n=0,r=1/0){let s=this._roots,o=[],a=this.indirect?Im:Em;for(let l=0,c=s.length;l<c;l++)a(this,l,e,t,o,n,r);return o}raycastFirst(t,e=Hn,n=0,r=1/0){let s=this._roots,o=null,a=this.indirect?Dm:Tm;for(let l=0,c=s.length;l<c;l++){let u=a(this,l,e,t,n,r);u!=null&&(o==null||u.distance<o.distance)&&(o=u)}return o}intersectsGeometry(t,e){let n=!1,r=this._roots,s=this.indirect?Um:Rm;for(let o=0,a=r.length;o<a&&(n=s(this,o,t,e),!n);o++);return n}shapecast(t){let e=yn.getPrimitive(),n=super.shapecast({...t,intersectsPrimitive:t.intersectsTriangle,scratchPrimitive:e,iterate:this.indirect?wm:xm});return yn.releasePrimitive(e),n}bvhcast(t,e,n){let{intersectsRanges:r,intersectsTriangles:s}=n,o=yn.getPrimitive(),a=this.geometry.index,l=this.geometry.attributes.position,c=this.indirect?g=>{let y=this.resolveTriangleIndex(g);be(o,y*3,a,l)}:g=>{be(o,g*3,a,l)},u=yn.getPrimitive(),h=t.geometry.index,f=t.geometry.attributes.position,d=t.indirect?g=>{let y=t.resolveTriangleIndex(g);be(u,y*3,h,f)}:g=>{be(u,g*3,h,f)};if(s){if(!(t instanceof i))throw new Error('MeshBVH: "intersectsTriangles" callback can only be used with another MeshBVH.');let g=(y,m,p,x,v,_,b,E)=>{for(let T=p,D=p+x;T<D;T++){d(T),u.a.applyMatrix4(e),u.b.applyMatrix4(e),u.c.applyMatrix4(e),u.needsUpdate=!0;for(let S=y,M=y+m;S<M;S++)if(c(S),o.needsUpdate=!0,s(o,u,S,T,v,_,b,E))return!0}return!1};if(r){let y=r;r=function(m,p,x,v,_,b,E,T){return y(m,p,x,v,_,b,E,T)?!0:g(m,p,x,v,_,b,E,T)}}else r=g}return super.bvhcast(t,e,{intersectsRanges:r})}intersectsBox(t,e){return Qc.set(t.min,t.max,e),Qc.needsUpdate=!0,this.shapecast({intersectsBounds:n=>Qc.intersectsBox(n),intersectsTriangle:n=>Qc.intersectsTriangle(n)})}intersectsSphere(t){return this.shapecast({intersectsBounds:e=>t.intersectsBox(e),intersectsTriangle:e=>e.intersectsSphere(t)})}closestPointToGeometry(t,e,n={},r={},s=0,o=1/0){return(this.indirect?Nm:Cm)(this,t,e,n,r,s,o)}closestPointToPoint(t,e={},n=0,r=1/0){return fm(this,t,e,n,r)}};var JA=parseInt("180")>=166,Ks={Mesh:se.prototype.raycast,Line:ii.prototype.raycast,LineSegments:xi.prototype.raycast,LineLoop:Ms.prototype.raycast,Points:Yn.prototype.raycast,BatchedMesh:Ao.prototype.raycast},Qe=new se,eh=[];function zm(i,t){if(this.isBatchedMesh)oS.call(this,i,t);else{let{geometry:e}=this;if(e.boundsTree)e.boundsTree.raycastObject3D(this,i,t);else{let n;if(this instanceof se)n=Ks.Mesh;else if(this instanceof xi)n=Ks.LineSegments;else if(this instanceof Ms)n=Ks.LineLoop;else if(this instanceof ii)n=Ks.Line;else if(this instanceof Yn)n=Ks.Points;else throw new Error("BVH: Fallback raycast function not found.");n.call(this,i,t)}}}function oS(i,t){if(this.boundsTrees){let e=this.boundsTrees,n=this._drawInfo||this._instanceInfo,r=this._drawRanges||this._geometryInfo,s=this.matrixWorld;Qe.material=this.material,Qe.geometry=this.geometry;let o=Qe.geometry.boundsTree,a=Qe.geometry.drawRange;Qe.geometry.boundingSphere===null&&(Qe.geometry.boundingSphere=new ln);for(let l=0,c=n.length;l<c;l++){if(!this.getVisibleAt(l))continue;let u=n[l].geometryIndex;if(Qe.geometry.boundsTree=e[u],this.getMatrixAt(l,Qe.matrixWorld).premultiply(s),!Qe.geometry.boundsTree){this.getBoundingBoxAt(u,Qe.geometry.boundingBox),this.getBoundingSphereAt(u,Qe.geometry.boundingSphere);let h=r[u];Qe.geometry.setDrawRange(h.start,h.count)}Qe.raycast(i,eh);for(let h=0,f=eh.length;h<f;h++){let d=eh[h];d.object=this,d.batchId=l,t.push(d)}eh.length=0}Qe.geometry.boundsTree=o,Qe.geometry.drawRange=a,Qe.material=null,Qe.geometry=null}else Ks.BatchedMesh.call(this,i,t)}function km(i){let t=new Float32Array(i.vertices.length*3),e=new Float32Array(t.length),n=new Uint32Array(i.triangles.length*3);for(let a=0;a<i.vertices.length;a++)t.set(i.vertices[a],a*3),e.set(i.colors?.[a]||[.48,.63,.85],a*3);for(let a=0;a<i.triangles.length;a++)n.set(i.triangles[a],a*3);let r=new ie;r.setAttribute("position",new le(t,3)),r.setIndex(new le(n,1)),r.computeBoundingBox(),r.computeBoundingSphere();let s=i.triangles.length>5e3?Js.serialize(new Js(r,{indirect:!0}),{cloneBuffers:!1}):null,o={position:t,color:e,index:n,bvh:s,box:[r.boundingBox.min.toArray(),r.boundingBox.max.toArray()],sphere:[r.boundingSphere.center.toArray(),r.boundingSphere.radius]};return r.dispose(),o}function Vm(i){let t=new ie;return t.setAttribute("position",new le(i.position,3)),t.setAttribute("color",new le(i.color,3)),t.setIndex(new le(i.index,1)),t.boundingBox=new ae(new I(...i.box[0]),new I(...i.box[1])),t.boundingSphere=new ln(new I(...i.sphere[0]),i.sphere[1]),i.bvh&&(t.boundsTree=Js.deserialize(i.bvh,t,{setIndex:!1})),t}function Hm({render:i,update:t=()=>!1,visible:e=()=>!0,requestFrame:n=requestAnimationFrame}){let r=!1,s=!1;function o(){if(r=!1,!e())return;let l=s;s=!1;let c=t();(l||c)&&i(),c&&a()}function a(){s=!0,!r&&e()&&(r=!0,n(o))}return a}function pa(i){if(!Array.isArray(i)||i.length<3||i.some(r=>r.length!==2||r.some(s=>!Number.isFinite(s))))throw new Error("En az \xFC\xE7 ge\xE7erli nokta se\xE7in.");let t=(r,s,o)=>(s[0]-r[0])*(o[1]-r[1])-(s[1]-r[1])*(o[0]-r[0]),e=(r,s,o)=>Math.abs(t(r,s,o))<1e-8&&o.every((a,l)=>a>=Math.min(r[l],s[l])-1e-8&&a<=Math.max(r[l],s[l])+1e-8);for(let r=0;r<i.length;r++){let s=i[r],o=i[(r+1)%i.length];if(Math.hypot(s[0]-o[0],s[1]-o[1])<1e-6)throw new Error("Ayn\u0131 noktay\u0131 art arda se\xE7meyin.");for(let a=r+2;a<i.length;a++){if(r===0&&a===i.length-1)continue;let l=i[a],c=i[(a+1)%i.length];if(t(s,o,l)*t(s,o,c)<0&&t(l,c,s)*t(l,c,o)<0||e(s,o,l)||e(s,o,c)||e(l,c,s)||e(l,c,o))throw new Error("Se\xE7im \xE7izgileri kesi\u015Fiyor. Son noktay\u0131 geri al\u0131p yeniden se\xE7in.")}}let n=i.reduce((r,s,o)=>{let a=i[(o+1)%i.length];return r+s[0]*a[1]-a[0]*s[1]},0);if(Math.abs(n)<1e-7)throw new Error("Se\xE7im alan\u0131 \xE7ok k\xFC\xE7\xFCk veya noktalar ayn\u0131 \xE7izgide.");return n>0?i.map(r=>[...r]):i.map(r=>[...r]).reverse()}var ma=(i,t)=>i.reduce((e,n,r)=>e+n*t[r],0);function df(i,t){return i.map(e=>{let n=ma(e.n,t.n);if(Math.abs(n)<1e-5)throw new Error("Se\xE7im y\xF6n\xFC dolgu d\xFCzlemine paralel. Hedef y\xFCzeye bak\u0131p alan\u0131 yeniden se\xE7in.");let r=e.shape==="polygon"?e.points:e.shape==="circle"?Array.from({length:64},(u,h)=>[Math.cos(h*Math.PI/32)*e.width/2,Math.sin(h*Math.PI/32)*e.width/2]):[[-e.width/2,-e.height/2],[e.width/2,-e.height/2],[e.width/2,e.height/2],[-e.width/2,e.height/2]],s=pa(r.map(u=>{let h=e.center.map((g,y)=>g+e.u[y]*u[0]+e.v[y]*u[1]),f=ma(t.origin.map((g,y)=>g-h[y]),t.n)/n,d=h.map((g,y)=>g+e.n[y]*f-t.origin[y]);return[ma(d,t.u),ma(d,t.v)]})),o=s.map(u=>u[0]),a=s.map(u=>u[1]),l=(Math.min(...o)+Math.max(...o))/2,c=(Math.min(...a)+Math.max(...a))/2;return{...e,shape:"polygon",points:s.map(u=>[u[0]-l,u[1]-c]),center:t.origin.map((u,h)=>u+t.u[h]*l+t.v[h]*c),u:[...t.u],v:[...t.v],n:[...t.n],width:Math.max(...o)-Math.min(...o),height:Math.max(...a)-Math.min(...a)}})}function Gm(i,t,e,{offset:n=0,thickness:r=null}={}){if(!Number.isFinite(n))throw new Error("Ge\xE7erli bir dolgu y\xFCksekli\u011Fi girin.");if(r!==null&&(!Number.isFinite(r)||r<=0||r>1e3))throw new Error("Dolgu kal\u0131nl\u0131\u011F\u0131 0 ile 1000 mm aras\u0131nda olmal\u0131.");return df(t,e).map(s=>{let o=r;if(o===null){let a=1/0;for(let l of i.vertices)a=Math.min(a,ma(l.map((c,u)=>c-s.center[u]),s.n));if(o=n-a,o<=1e-6)throw new Error("Hedef d\xFCzlem modelin alt s\u0131n\u0131r\u0131nda veya alt\u0131nda. Daha y\xFCksek bir y\xFCzey/y\xFCkseklik se\xE7in ya da dolgu kal\u0131nl\u0131\u011F\u0131n\u0131 girin.")}return{...s,depth:o,offset:n}})}var Wm={type:"change"},mf={type:"start"},qm={type:"end"},nh=new ni,Xm=new Ve,aS=Math.cos(70*Mu.DEG2RAD),We=new I,bn=2*Math.PI,_e={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},pf=1e-6,ih=class extends $o{constructor(t,e=null){super(t,e),this.state=_e.NONE,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:In.ROTATE,MIDDLE:In.DOLLY,RIGHT:In.PAN},this.touches={ONE:or.ROTATE,TWO:or.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new Wn,this._lastTargetPosition=new I,this._quat=new Wn().setFromUnitVectors(t.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ts,this._sphericalDelta=new Ts,this._scale=1,this._panOffset=new I,this._rotateStart=new ct,this._rotateEnd=new ct,this._rotateDelta=new ct,this._panStart=new ct,this._panEnd=new ct,this._panDelta=new ct,this._dollyStart=new ct,this._dollyEnd=new ct,this._dollyDelta=new ct,this._dollyDirection=new I,this._mouse=new ct,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=cS.bind(this),this._onPointerDown=lS.bind(this),this._onPointerUp=hS.bind(this),this._onContextMenu=yS.bind(this),this._onMouseWheel=dS.bind(this),this._onKeyDown=pS.bind(this),this._onTouchStart=mS.bind(this),this._onTouchMove=gS.bind(this),this._onMouseDown=uS.bind(this),this._onMouseMove=fS.bind(this),this._interceptControlDown=_S.bind(this),this._interceptControlUp=vS.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Wm),this.update(),this.state=_e.NONE}update(t=null){let e=this.object.position;We.copy(e).sub(this.target),We.applyQuaternion(this._quat),this._spherical.setFromVector3(We),this.autoRotate&&this.state===_e.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=bn:n>Math.PI&&(n-=bn),r<-Math.PI?r+=bn:r>Math.PI&&(r-=bn),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(We.setFromSpherical(this._spherical),We.applyQuaternion(this._quatInverse),e.copy(this.target).add(We),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=We.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){let a=new I(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;let c=new I(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=We.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(nh.origin.copy(this.object.position),nh.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(nh.direction))<aS?this.object.lookAt(this.target):(Xm.setFromNormalAndCoplanarPoint(this.object.up,this.target),nh.intersectPlane(Xm,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>pf||8*(1-this._lastQuaternion.dot(this.object.quaternion))>pf||this._lastTargetPosition.distanceToSquared(this.target)>pf?(this.dispatchEvent(Wm),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?bn/60*this.autoRotateSpeed*t:bn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){We.setFromMatrixColumn(e,0),We.multiplyScalar(-t),this._panOffset.add(We)}_panUp(t,e){this.screenSpacePanning===!0?We.setFromMatrixColumn(e,1):(We.setFromMatrixColumn(e,0),We.crossVectors(this.object.up,We)),We.multiplyScalar(t),this._panOffset.add(We)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;We.copy(r).sub(this.target);let s=We.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/n.clientHeight,this.object.matrix),this._panUp(2*e*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),r=t-n.left,s=e-n.top,o=n.width,a=n.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(bn*this._rotateDelta.x/e.clientHeight),this._rotateUp(bn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(n,r)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),r=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(bn*this._rotateDelta.x/e.clientHeight),this._rotateUp(bn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new ct,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function lS(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function cS(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function hS(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(qm),this.state=_e.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function uS(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case In.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=_e.DOLLY;break;case In.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=_e.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=_e.ROTATE}break;case In.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=_e.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=_e.PAN}break;default:this.state=_e.NONE}this.state!==_e.NONE&&this.dispatchEvent(mf)}function fS(i){switch(this.state){case _e.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case _e.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case _e.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function dS(i){this.enabled===!1||this.enableZoom===!1||this.state!==_e.NONE||(i.preventDefault(),this.dispatchEvent(mf),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(qm))}function pS(i){this.enabled!==!1&&this._handleKeyDown(i)}function mS(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case or.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=_e.TOUCH_ROTATE;break;case or.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=_e.TOUCH_PAN;break;default:this.state=_e.NONE}break;case 2:switch(this.touches.TWO){case or.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=_e.TOUCH_DOLLY_PAN;break;case or.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=_e.TOUCH_DOLLY_ROTATE;break;default:this.state=_e.NONE}break;default:this.state=_e.NONE}this.state!==_e.NONE&&this.dispatchEvent(mf)}function gS(i){switch(this._trackPointer(i),this.state){case _e.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case _e.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case _e.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case _e.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=_e.NONE}}function yS(i){this.enabled!==!1&&i.preventDefault()}function _S(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function vS(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var rh=class extends Sn{constructor(t){super(t)}load(t,e,n,r){let s=this,o=new Bi(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){try{e(s.parse(a))}catch(l){r?r(l):console.error(l),s.manager.itemError(t)}},n,r)}parse(t){function e(c){let u=new DataView(c),h=32/8*3+32/8*3*3+16/8,f=u.getUint32(80,!0);if(80+32/8+f*h===u.byteLength)return!0;let g=[115,111,108,105,100];for(let y=0;y<5;y++)if(n(g,u,y))return!1;return!0}function n(c,u,h){for(let f=0,d=c.length;f<d;f++)if(c[f]!==u.getUint8(h+f))return!1;return!0}function r(c){let u=new DataView(c),h=u.getUint32(80,!0),f,d,g,y=!1,m,p,x,v,_;for(let A=0;A<70;A++)u.getUint32(A,!1)==1129270351&&u.getUint8(A+4)==82&&u.getUint8(A+5)==61&&(y=!0,m=new Float32Array(h*3*3),p=u.getUint8(A+6)/255,x=u.getUint8(A+7)/255,v=u.getUint8(A+8)/255,_=u.getUint8(A+9)/255);let b=84,E=50,T=new ie,D=new Float32Array(h*3*3),S=new Float32Array(h*3*3),M=new Vt;for(let A=0;A<h;A++){let L=b+A*E,F=u.getFloat32(L,!0),O=u.getFloat32(L+4,!0),H=u.getFloat32(L+8,!0);if(y){let V=u.getUint16(L+48,!0);(V&32768)===0?(f=(V&31)/31,d=(V>>5&31)/31,g=(V>>10&31)/31):(f=p,d=x,g=v)}for(let V=1;V<=3;V++){let rt=L+V*12,K=A*3*3+(V-1)*3;D[K]=u.getFloat32(rt,!0),D[K+1]=u.getFloat32(rt+4,!0),D[K+2]=u.getFloat32(rt+8,!0),S[K]=F,S[K+1]=O,S[K+2]=H,y&&(M.setRGB(f,d,g,ke),m[K]=M.r,m[K+1]=M.g,m[K+2]=M.b)}}return T.setAttribute("position",new le(D,3)),T.setAttribute("normal",new le(S,3)),y&&(T.setAttribute("color",new le(m,3)),T.hasColors=!0,T.alpha=_),T}function s(c){let u=new ie,h=/solid([\s\S]*?)endsolid/g,f=/facet([\s\S]*?)endfacet/g,d=/solid\s(.+)/,g=0,y=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,m=new RegExp("vertex"+y+y+y,"g"),p=new RegExp("normal"+y+y+y,"g"),x=[],v=[],_=[],b=new I,E,T=0,D=0,S=0;for(;(E=h.exec(c))!==null;){D=S;let M=E[0],A=(E=d.exec(M))!==null?E[1]:"";for(_.push(A);(E=f.exec(M))!==null;){let O=0,H=0,V=E[0];for(;(E=p.exec(V))!==null;)b.x=parseFloat(E[1]),b.y=parseFloat(E[2]),b.z=parseFloat(E[3]),H++;for(;(E=m.exec(V))!==null;)x.push(parseFloat(E[1]),parseFloat(E[2]),parseFloat(E[3])),v.push(b.x,b.y,b.z),O++,S++;H!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+g),O!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+g),g++}let L=D,F=S-D;u.userData.groupNames=_,u.addGroup(L,F,T),T++}return u.setAttribute("position",new jt(x,3)),u.setAttribute("normal",new jt(v,3)),u}function o(c){return typeof c!="string"?new TextDecoder().decode(c):c}function a(c){if(typeof c=="string"){let u=new Uint8Array(c.length);for(let h=0;h<c.length;h++)u[h]=c.charCodeAt(h)&255;return u.buffer||u}else return c}let l=a(t);return e(l)?r(l):s(o(t))}};var xS=/^[og]\s*(.+)?/,MS=/^mtllib /,SS=/^usemtl /,bS=/^usemap /,Ym=/\s+/,Zm=new I,gf=new I,$m=new I,Jm=new I,$n=new I,sh=new Vt;function wS(){let i={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(t,e){if(this.object&&this.object.fromDeclaration===!1){this.object.name=t,this.object.fromDeclaration=e!==!1;return}let n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:t||"",fromDeclaration:e!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(r,s){let o=this._finalize(!1);o&&(o.inherited||o.groupCount<=0)&&this.materials.splice(o.index,1);let a={index:this.materials.length,name:r||"",mtllib:Array.isArray(s)&&s.length>0?s[s.length-1]:"",smooth:o!==void 0?o.smooth:this.smooth,groupStart:o!==void 0?o.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){let c={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(a),a},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(r){let s=this.currentMaterial();if(s&&s.groupEnd===-1&&(s.groupEnd=this.geometry.vertices.length/3,s.groupCount=s.groupEnd-s.groupStart,s.inherited=!1),r&&this.materials.length>1)for(let o=this.materials.length-1;o>=0;o--)this.materials[o].groupCount<=0&&this.materials.splice(o,1);return r&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),s}},n&&n.name&&typeof n.clone=="function"){let r=n.clone(0);r.inherited=!0,this.object.materials.push(r)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(t,e){let n=parseInt(t,10);return(n>=0?n-1:n+e/3)*3},parseNormalIndex:function(t,e){let n=parseInt(t,10);return(n>=0?n-1:n+e/3)*3},parseUVIndex:function(t,e){let n=parseInt(t,10);return(n>=0?n-1:n+e/2)*2},addVertex:function(t,e,n){let r=this.vertices,s=this.object.geometry.vertices;s.push(r[t+0],r[t+1],r[t+2]),s.push(r[e+0],r[e+1],r[e+2]),s.push(r[n+0],r[n+1],r[n+2])},addVertexPoint:function(t){let e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addVertexLine:function(t){let e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addNormal:function(t,e,n){let r=this.normals,s=this.object.geometry.normals;s.push(r[t+0],r[t+1],r[t+2]),s.push(r[e+0],r[e+1],r[e+2]),s.push(r[n+0],r[n+1],r[n+2])},addFaceNormal:function(t,e,n){let r=this.vertices,s=this.object.geometry.normals;Zm.fromArray(r,t),gf.fromArray(r,e),$m.fromArray(r,n),$n.subVectors($m,gf),Jm.subVectors(Zm,gf),$n.cross(Jm),$n.normalize(),s.push($n.x,$n.y,$n.z),s.push($n.x,$n.y,$n.z),s.push($n.x,$n.y,$n.z)},addColor:function(t,e,n){let r=this.colors,s=this.object.geometry.colors;r[t]!==void 0&&s.push(r[t+0],r[t+1],r[t+2]),r[e]!==void 0&&s.push(r[e+0],r[e+1],r[e+2]),r[n]!==void 0&&s.push(r[n+0],r[n+1],r[n+2])},addUV:function(t,e,n){let r=this.uvs,s=this.object.geometry.uvs;s.push(r[t+0],r[t+1]),s.push(r[e+0],r[e+1]),s.push(r[n+0],r[n+1])},addDefaultUV:function(){let t=this.object.geometry.uvs;t.push(0,0),t.push(0,0),t.push(0,0)},addUVLine:function(t){let e=this.uvs;this.object.geometry.uvs.push(e[t+0],e[t+1])},addFace:function(t,e,n,r,s,o,a,l,c){let u=this.vertices.length,h=this.parseVertexIndex(t,u),f=this.parseVertexIndex(e,u),d=this.parseVertexIndex(n,u);if(this.addVertex(h,f,d),this.addColor(h,f,d),a!==void 0&&a!==""){let g=this.normals.length;h=this.parseNormalIndex(a,g),f=this.parseNormalIndex(l,g),d=this.parseNormalIndex(c,g),this.addNormal(h,f,d)}else this.addFaceNormal(h,f,d);if(r!==void 0&&r!==""){let g=this.uvs.length;h=this.parseUVIndex(r,g),f=this.parseUVIndex(s,g),d=this.parseUVIndex(o,g),this.addUV(h,f,d),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(t){this.object.geometry.type="Points";let e=this.vertices.length;for(let n=0,r=t.length;n<r;n++){let s=this.parseVertexIndex(t[n],e);this.addVertexPoint(s),this.addColor(s)}},addLineGeometry:function(t,e){this.object.geometry.type="Line";let n=this.vertices.length,r=this.uvs.length;for(let s=0,o=t.length;s<o;s++)this.addVertexLine(this.parseVertexIndex(t[s],n));for(let s=0,o=e.length;s<o;s++)this.addUVLine(this.parseUVIndex(e[s],r))}};return i.startObject("",!1),i}var oh=class extends Sn{constructor(t){super(t),this.materials=null}load(t,e,n,r){let s=this,o=new Bi(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){try{e(s.parse(a))}catch(l){r?r(l):console.error(l),s.manager.itemError(t)}},n,r)}setMaterials(t){return this.materials=t,this}parse(t){let e=new wS;t.indexOf(`\r
`)!==-1&&(t=t.replace(/\r\n/g,`
`)),t.indexOf(`\\
`)!==-1&&(t=t.replace(/\\\n/g,""));let n=t.split(`
`),r=[];for(let a=0,l=n.length;a<l;a++){let c=n[a].trimStart();if(c.length===0)continue;let u=c.charAt(0);if(u!=="#")if(u==="v"){let h=c.split(Ym);switch(h[0]){case"v":e.vertices.push(parseFloat(h[1]),parseFloat(h[2]),parseFloat(h[3])),h.length>=7?(sh.setRGB(parseFloat(h[4]),parseFloat(h[5]),parseFloat(h[6]),ke),e.colors.push(sh.r,sh.g,sh.b)):e.colors.push(void 0,void 0,void 0);break;case"vn":e.normals.push(parseFloat(h[1]),parseFloat(h[2]),parseFloat(h[3]));break;case"vt":e.uvs.push(parseFloat(h[1]),parseFloat(h[2]));break}}else if(u==="f"){let f=c.slice(1).trim().split(Ym),d=[];for(let y=0,m=f.length;y<m;y++){let p=f[y];if(p.length>0){let x=p.split("/");d.push(x)}}let g=d[0];for(let y=1,m=d.length-1;y<m;y++){let p=d[y],x=d[y+1];e.addFace(g[0],p[0],x[0],g[1],p[1],x[1],g[2],p[2],x[2])}}else if(u==="l"){let h=c.substring(1).trim().split(" "),f=[],d=[];if(c.indexOf("/")===-1)f=h;else for(let g=0,y=h.length;g<y;g++){let m=h[g].split("/");m[0]!==""&&f.push(m[0]),m[1]!==""&&d.push(m[1])}e.addLineGeometry(f,d)}else if(u==="p"){let f=c.slice(1).trim().split(" ");e.addPointGeometry(f)}else if((r=xS.exec(c))!==null){let h=(" "+r[0].slice(1).trim()).slice(1);e.startObject(h)}else if(SS.test(c))e.object.startMaterial(c.substring(7).trim(),e.materialLibraries);else if(MS.test(c))e.materialLibraries.push(c.substring(7).trim());else if(bS.test(c))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(u==="s"){if(r=c.split(" "),r.length>1){let f=r[1].trim().toLowerCase();e.object.smooth=f!=="0"&&f!=="off"}else e.object.smooth=!0;let h=e.object.currentMaterial();h&&(h.smooth=e.object.smooth)}else{if(c==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+c+'"')}}e.finalize();let s=new Ye;if(s.materialLibraries=[].concat(e.materialLibraries),!(e.objects.length===1&&e.objects[0].geometry.vertices.length===0)===!0)for(let a=0,l=e.objects.length;a<l;a++){let c=e.objects[a],u=c.geometry,h=c.materials,f=u.type==="Line",d=u.type==="Points",g=!1;if(u.vertices.length===0)continue;let y=new ie;y.setAttribute("position",new jt(u.vertices,3)),u.normals.length>0&&y.setAttribute("normal",new jt(u.normals,3)),u.colors.length>0&&(g=!0,y.setAttribute("color",new jt(u.colors,3))),u.hasUVIndices===!0&&y.setAttribute("uv",new jt(u.uvs,2));let m=[];for(let x=0,v=h.length;x<v;x++){let _=h[x],b=_.name+"_"+_.smooth+"_"+g,E=e.materials[b];if(this.materials!==null){if(E=this.materials.create(_.name),f&&E&&!(E instanceof qn)){let T=new qn;Mn.prototype.copy.call(T,E),T.color.copy(E.color),E=T}else if(d&&E&&!(E instanceof ri)){let T=new ri({size:10,sizeAttenuation:!1});Mn.prototype.copy.call(T,E),T.color.copy(E.color),T.map=E.map,E=T}}E===void 0&&(f?E=new qn:d?E=new ri({size:1,sizeAttenuation:!1}):E=new Mi,E.name=_.name,E.flatShading=!_.smooth,E.vertexColors=g,e.materials[b]=E),m.push(E)}let p;if(m.length>1){for(let x=0,v=h.length;x<v;x++){let _=h[x];y.addGroup(_.groupStart,_.groupCount,x)}f?p=new xi(y,m):d?p=new Yn(y,m):p=new se(y,m)}else f?p=new xi(y,m[0]):d?p=new Yn(y,m[0]):p=new se(y,m[0]);p.name=c.name,s.add(p)}else if(e.vertices.length>0){let a=new ri({size:1,sizeAttenuation:!1}),l=new ie;l.setAttribute("position",new jt(e.vertices,3)),e.colors.length>0&&e.colors[0]!==void 0&&(l.setAttribute("color",new jt(e.colors,3)),a.vertexColors=!0);let c=new Yn(l,a);s.add(c)}return s}};var Un=Uint8Array,js=Uint16Array,ES=Int32Array,Km=new Un([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),jm=new Un([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),TS=new Un([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Qm=function(i,t){for(var e=new js(31),n=0;n<31;++n)e[n]=t+=1<<i[n-1];for(var r=new ES(e[30]),n=1;n<30;++n)for(var s=e[n];s<e[n+1];++s)r[s]=s-e[n]<<5|n;return{b:e,r}},tg=Qm(Km,2),eg=tg.b,AS=tg.r;eg[28]=258,AS[258]=28;var ng=Qm(jm,0),RS=ng.b,hR=ng.r,xf=new js(32768);for(ue=0;ue<32768;++ue)Wi=(ue&43690)>>1|(ue&21845)<<1,Wi=(Wi&52428)>>2|(Wi&13107)<<2,Wi=(Wi&61680)>>4|(Wi&3855)<<4,xf[ue]=((Wi&65280)>>8|(Wi&255)<<8)>>1;var Wi,ue,ga=(function(i,t,e){for(var n=i.length,r=0,s=new js(t);r<n;++r)i[r]&&++s[i[r]-1];var o=new js(t);for(r=1;r<t;++r)o[r]=o[r-1]+s[r-1]<<1;var a;if(e){a=new js(1<<t);var l=15-t;for(r=0;r<n;++r)if(i[r])for(var c=r<<4|i[r],u=t-i[r],h=o[i[r]-1]++<<u,f=h|(1<<u)-1;h<=f;++h)a[xf[h]>>l]=c}else for(a=new js(n),r=0;r<n;++r)i[r]&&(a[r]=xf[o[i[r]-1]++]>>15-i[r]);return a}),ya=new Un(288);for(ue=0;ue<144;++ue)ya[ue]=8;var ue;for(ue=144;ue<256;++ue)ya[ue]=9;var ue;for(ue=256;ue<280;++ue)ya[ue]=7;var ue;for(ue=280;ue<288;++ue)ya[ue]=8;var ue,ig=new Un(32);for(ue=0;ue<32;++ue)ig[ue]=5;var ue;var CS=ga(ya,9,1);var PS=ga(ig,5,1),yf=function(i){for(var t=i[0],e=1;e<i.length;++e)i[e]>t&&(t=i[e]);return t},ci=function(i,t,e){var n=t/8|0;return(i[n]|i[n+1]<<8)>>(t&7)&e},_f=function(i,t){var e=t/8|0;return(i[e]|i[e+1]<<8|i[e+2]<<16)>>(t&7)},IS=function(i){return(i+7)/8|0},Sf=function(i,t,e){return(t==null||t<0)&&(t=0),(e==null||e>i.length)&&(e=i.length),new Un(i.subarray(t,e))};var DS=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Jn=function(i,t,e){var n=new Error(t||DS[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,Jn),!e)throw n;return n},LS=function(i,t,e,n){var r=i.length,s=n?n.length:0;if(!r||t.f&&!t.l)return e||new Un(0);var o=!e,a=o||t.i!=2,l=t.i;o&&(e=new Un(r*3));var c=function(j){var it=e.length;if(j>it){var P=new Un(Math.max(it*2,j));P.set(e),e=P}},u=t.f||0,h=t.p||0,f=t.b||0,d=t.l,g=t.d,y=t.m,m=t.n,p=r*8;do{if(!d){u=ci(i,h,1);var x=ci(i,h+1,3);if(h+=3,x)if(x==1)d=CS,g=PS,y=9,m=5;else if(x==2){var E=ci(i,h,31)+257,T=ci(i,h+10,15)+4,D=E+ci(i,h+5,31)+1;h+=14;for(var S=new Un(D),M=new Un(19),A=0;A<T;++A)M[TS[A]]=ci(i,h+A*3,7);h+=T*3;for(var L=yf(M),F=(1<<L)-1,O=ga(M,L,1),A=0;A<D;){var H=O[ci(i,h,F)];h+=H&15;var v=H>>4;if(v<16)S[A++]=v;else{var V=0,rt=0;for(v==16?(rt=3+ci(i,h,3),h+=2,V=S[A-1]):v==17?(rt=3+ci(i,h,7),h+=3):v==18&&(rt=11+ci(i,h,127),h+=7);rt--;)S[A++]=V}}var K=S.subarray(0,E),lt=S.subarray(E);y=yf(K),m=yf(lt),d=ga(K,y,1),g=ga(lt,m,1)}else Jn(1);else{var v=IS(h)+4,_=i[v-4]|i[v-3]<<8,b=v+_;if(b>r){l&&Jn(0);break}a&&c(f+_),e.set(i.subarray(v,b),f),t.b=f+=_,t.p=h=b*8,t.f=u;continue}if(h>p){l&&Jn(0);break}}a&&c(f+131072);for(var _t=(1<<y)-1,St=(1<<m)-1,Ft=h;;Ft=h){var V=d[_f(i,h)&_t],Bt=V>>4;if(h+=V&15,h>p){l&&Jn(0);break}if(V||Jn(2),Bt<256)e[f++]=Bt;else if(Bt==256){Ft=h,d=null;break}else{var Kt=Bt-254;if(Bt>264){var A=Bt-257,Ot=Km[A];Kt=ci(i,h,(1<<Ot)-1)+eg[A],h+=Ot}var N=g[_f(i,h)&St],U=N>>4;N||Jn(3),h+=N&15;var lt=RS[U];if(U>3){var Ot=jm[U];lt+=_f(i,h)&(1<<Ot)-1,h+=Ot}if(h>p){l&&Jn(0);break}a&&c(f+131072);var W=f+Kt;if(f<lt){var Z=s-lt,$=Math.min(lt,W);for(Z+f<0&&Jn(3);f<$;++f)e[f]=n[Z+f]}for(;f<W;++f)e[f]=e[f-lt]}}t.l=d,t.p=Ft,t.b=f,t.f=u,d&&(u=1,t.m=y,t.d=g,t.n=m)}while(!u);return f!=e.length&&o?Sf(e,0,f):e.subarray(0,f)};var US=new Un(0);var Ti=function(i,t){return i[t]|i[t+1]<<8},hi=function(i,t){return(i[t]|i[t+1]<<8|i[t+2]<<16|i[t+3]<<24)>>>0},vf=function(i,t){return hi(i,t)+hi(i,t+4)*4294967296};function NS(i,t){return LS(i,{i:2},t&&t.out,t&&t.dictionary)}var Mf=typeof TextDecoder<"u"&&new TextDecoder,FS=0;try{Mf.decode(US,{stream:!0}),FS=1}catch{}var OS=function(i){for(var t="",e=0;;){var n=i[e++],r=(n>127)+(n>223)+(n>239);if(e+r>i.length)return{s:t,r:Sf(i,e-1)};r?r==3?(n=((n&15)<<18|(i[e++]&63)<<12|(i[e++]&63)<<6|i[e++]&63)-65536,t+=String.fromCharCode(55296|n>>10,56320|n&1023)):r&1?t+=String.fromCharCode((n&31)<<6|i[e++]&63):t+=String.fromCharCode((n&15)<<12|(i[e++]&63)<<6|i[e++]&63):t+=String.fromCharCode(n)}};function BS(i,t){if(t){for(var e="",n=0;n<i.length;n+=16384)e+=String.fromCharCode.apply(null,i.subarray(n,n+16384));return e}else{if(Mf)return Mf.decode(i);var r=OS(i),s=r.s,e=r.r;return e.length&&Jn(8),s}}var zS=function(i,t){return t+30+Ti(i,t+26)+Ti(i,t+28)},kS=function(i,t,e){var n=Ti(i,t+28),r=BS(i.subarray(t+46,t+46+n),!(Ti(i,t+8)&2048)),s=t+46+n,o=hi(i,t+20),a=e&&o==4294967295?VS(i,s):[o,hi(i,t+24),hi(i,t+42)],l=a[0],c=a[1],u=a[2];return[Ti(i,t+10),l,c,r,s+Ti(i,t+30)+Ti(i,t+32),u]},VS=function(i,t){for(;Ti(i,t)!=1;t+=4+Ti(i,t+2));return[vf(i,t+12),vf(i,t+4),vf(i,t+20)]};function rg(i,t){for(var e={},n=i.length-22;hi(i,n)!=101010256;--n)(!n||i.length-n>65558)&&Jn(13);var r=Ti(i,n+8);if(!r)return{};var s=hi(i,n+16),o=s==4294967295||r==65535;if(o){var a=hi(i,n-12);o=hi(i,a)==101075792,o&&(r=hi(i,a+32),s=hi(i,a+48))}for(var l=t&&t.filter,c=0;c<r;++c){var u=kS(i,s,o),h=u[0],f=u[1],d=u[2],g=u[3],y=u[4],m=u[5],p=zS(i,m);s=y,(!l||l({name:g,size:f,originalSize:d,compression:h}))&&(h?h==8?e[g]=NS(i.subarray(p,p+f),{out:new Un(d)}):Jn(14,"unknown compression type "+h):e[g]=Sf(i,p,p+f))}return e}var bf=ke,ah=class extends Sn{constructor(t){super(t),this.availableExtensions=[]}load(t,e,n,r){let s=this,o=new Bi(s.manager);o.setPath(s.path),o.setResponseType("arraybuffer"),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(t,function(a){try{e(s.parse(a))}catch(l){r?r(l):console.error(l),s.manager.itemError(t)}},n,r)}parse(t){let e=this,n=new Ho(this.manager);function r(N){let U=null,W=null,Z,$,j=[],it=[],P,z={},X={},J={},k=new TextDecoder;try{U=rg(new Uint8Array(N))}catch(vt){if(vt instanceof ReferenceError)return console.error("THREE.3MFLoader: fflate missing and file is compressed."),null}let ft=null;for(W in U)W.match(/\_rels\/.rels$/)?Z=W:W.match(/3D\/_rels\/.*\.model\.rels$/)?$=W:W.match(/^3D\/[^\/]*\.model$/)?ft=W:W.match(/^3D\/.*\/.*\.model$/)?j.push(W):W.match(/^3D\/Textures?\/.*/)&&it.push(W);if(j.push(ft),Z===void 0)throw new Error("THREE.ThreeMFLoader: Cannot find relationship file `rels` in 3MF archive.");let st=U[Z],ht=k.decode(st),Dt=s(ht);if($){let vt=U[$],C=k.decode(vt);P=s(C)}for(let vt=0;vt<j.length;vt++){let C=j[vt],w=U[C],G=k.decode(w),et=new DOMParser().parseFromString(G,"application/xml");et.documentElement.nodeName.toLowerCase()!=="model"&&console.error("THREE.3MFLoader: Error loading 3MF - no 3MF document found: ",C);let ot=et.querySelector("model"),nt={};for(let gt=0;gt<ot.attributes.length;gt++){let Rt=ot.attributes[gt];Rt.name.match(/^xmlns:(.+)$/)&&(nt[Rt.value]=RegExp.$1)}let bt=E(ot);bt.xml=ot,0<Object.keys(nt).length&&(bt.extensions=nt),z[C]=bt}for(let vt=0;vt<it.length;vt++){let C=it[vt];J[C]=U[C].buffer}return{rels:Dt,modelRels:P,model:z,printTicket:X,texture:J}}function s(N){let U=[],Z=new DOMParser().parseFromString(N,"application/xml").querySelectorAll("Relationship");for(let $=0;$<Z.length;$++){let j=Z[$],it={target:j.getAttribute("Target"),id:j.getAttribute("Id"),type:j.getAttribute("Type")};U.push(it)}return U}function o(N){let U={};for(let W=0;W<N.length;W++){let Z=N[W],$=Z.getAttribute("name");0<=["Title","Designer","Description","Copyright","LicenseTerms","Rating","CreationDate","ModificationDate"].indexOf($)&&(U[$]=Z.textContent)}return U}function a(N){let U={id:N.getAttribute("id"),basematerials:[]},W=N.querySelectorAll("base");for(let Z=0;Z<W.length;Z++){let $=W[Z],j=g($);j.index=Z,U.basematerials.push(j)}return U}function l(N){return{id:N.getAttribute("id"),path:N.getAttribute("path"),contenttype:N.getAttribute("contenttype"),tilestyleu:N.getAttribute("tilestyleu"),tilestylev:N.getAttribute("tilestylev"),filter:N.getAttribute("filter")}}function c(N){let U={id:N.getAttribute("id"),texid:N.getAttribute("texid"),displaypropertiesid:N.getAttribute("displaypropertiesid")},W=N.querySelectorAll("tex2coord"),Z=[];for(let $=0;$<W.length;$++){let j=W[$],it=j.getAttribute("u"),P=j.getAttribute("v");Z.push(parseFloat(it),parseFloat(P))}return U.uvs=new Float32Array(Z),U}function u(N){let U={id:N.getAttribute("id"),displaypropertiesid:N.getAttribute("displaypropertiesid")},W=N.querySelectorAll("color"),Z=[],$=new Vt;for(let j=0;j<W.length;j++){let P=W[j].getAttribute("color");$.setStyle(P.substring(0,7),bf),Z.push($.r,$.g,$.b)}return U.colors=new Float32Array(Z),U}function h(N){let U=N.children,W={};for(let Z=0;Z<U.length;Z++){let $={type:U[Z].nodeName.substring(2)};for(let j=0;j<U[Z].attributes.length;j++){let it=U[Z].attributes[j];it.specified&&($[it.name]=it.value)}W[U[Z].getAttribute("identifier")]=$}return W}function f(N){let U={id:N.getAttribute("id"),displayname:N.getAttribute("displayname")},W=N.children,Z={};for(let $=0;$<W.length;$++){let j=W[$];if(j.nodeName==="i:in"||j.nodeName==="i:out")Z[j.nodeName==="i:in"?"inputs":"outputs"]=h(j);else{let it=j.children,P={op:j.nodeName.substring(2),identifier:j.getAttribute("identifier")};for(let z=0;z<it.length;z++)P[it[z].nodeName.substring(2)]=h(it[z]);Z[P.identifier]=P}}return U.operations=Z,U}function d(N){let U={id:N.getAttribute("id")},W=N.querySelectorAll("pbmetallic"),Z=[];for(let $=0;$<W.length;$++){let j=W[$];Z.push({name:j.getAttribute("name"),metallicness:parseFloat(j.getAttribute("metallicness")),roughness:parseFloat(j.getAttribute("roughness"))})}return U.data=Z,U}function g(N){let U={};return U.name=N.getAttribute("name"),U.displaycolor=N.getAttribute("displaycolor"),U.displaypropertiesid=N.getAttribute("displaypropertiesid"),U}function y(N){let U={},W=[],Z=N.querySelectorAll("vertices vertex");for(let P=0;P<Z.length;P++){let z=Z[P],X=z.getAttribute("x"),J=z.getAttribute("y"),k=z.getAttribute("z");W.push(parseFloat(X),parseFloat(J),parseFloat(k))}U.vertices=new Float32Array(W);let $=[],j=[],it=N.querySelectorAll("triangles triangle");for(let P=0;P<it.length;P++){let z=it[P],X=z.getAttribute("v1"),J=z.getAttribute("v2"),k=z.getAttribute("v3"),ft=z.getAttribute("p1"),st=z.getAttribute("p2"),ht=z.getAttribute("p3"),Dt=z.getAttribute("pid"),vt={};vt.v1=parseInt(X,10),vt.v2=parseInt(J,10),vt.v3=parseInt(k,10),j.push(vt.v1,vt.v2,vt.v3),ft&&(vt.p1=parseInt(ft,10)),st&&(vt.p2=parseInt(st,10)),ht&&(vt.p3=parseInt(ht,10)),Dt&&(vt.pid=Dt),0<Object.keys(vt).length&&$.push(vt)}return U.triangleProperties=$,U.triangles=new Uint32Array(j),U}function m(N){let U=[],W=N.querySelectorAll("component");for(let Z=0;Z<W.length;Z++){let $=W[Z],j=p($);U.push(j)}return U}function p(N){let U={};U.objectId=N.getAttribute("objectid");let W=N.getAttribute("transform");return W&&(U.transform=x(W)),U}function x(N){let U=[];N.split(" ").forEach(function(Z){U.push(parseFloat(Z))});let W=new Wt;return W.set(U[0],U[3],U[6],U[9],U[1],U[4],U[7],U[10],U[2],U[5],U[8],U[11],0,0,0,1),W}function v(N){let U={type:N.getAttribute("type")},W=N.getAttribute("id");W&&(U.id=W);let Z=N.getAttribute("pid");Z&&(U.pid=Z);let $=N.getAttribute("pindex");$&&(U.pindex=$);let j=N.getAttribute("thumbnail");j&&(U.thumbnail=j);let it=N.getAttribute("partnumber");it&&(U.partnumber=it);let P=N.getAttribute("name");P&&(U.name=P);let z=N.querySelector("mesh");z&&(U.mesh=y(z));let X=N.querySelector("components");return X&&(U.components=m(X)),U}function _(N){let U={};U.basematerials={};let W=N.querySelectorAll("basematerials");for(let X=0;X<W.length;X++){let J=W[X],k=a(J);U.basematerials[k.id]=k}U.texture2d={};let Z=N.querySelectorAll("texture2d");for(let X=0;X<Z.length;X++){let J=Z[X],k=l(J);U.texture2d[k.id]=k}U.colorgroup={};let $=N.querySelectorAll("colorgroup");for(let X=0;X<$.length;X++){let J=$[X],k=u(J);U.colorgroup[k.id]=k}let j=N.querySelectorAll("implicitfunction");j.length>0&&(U.implicitfunction={});for(let X=0;X<j.length;X++){let J=j[X],k=f(J);U.implicitfunction[k.id]=k}U.pbmetallicdisplayproperties={};let it=N.querySelectorAll("pbmetallicdisplayproperties");for(let X=0;X<it.length;X++){let J=it[X],k=d(J);U.pbmetallicdisplayproperties[k.id]=k}U.texture2dgroup={};let P=N.querySelectorAll("texture2dgroup");for(let X=0;X<P.length;X++){let J=P[X],k=c(J);U.texture2dgroup[k.id]=k}U.object={};let z=N.querySelectorAll("object");for(let X=0;X<z.length;X++){let J=z[X],k=v(J);U.object[k.id]=k}return U}function b(N){let U=[],W=N.querySelectorAll("item");for(let Z=0;Z<W.length;Z++){let $=W[Z],j={objectId:$.getAttribute("objectid")},it=$.getAttribute("transform");it&&(j.transform=x(it)),U.push(j)}return U}function E(N){let U={unit:N.getAttribute("unit")||"millimeter"},W=N.querySelectorAll("metadata");W&&(U.metadata=o(W));let Z=N.querySelector("resources");Z&&(U.resources=_(Z));let $=N.querySelector("build");return $&&(U.build=b($)),U}function T(N,U,W,Z){let $=N.texid,it=W.resources.texture2d[$];if(it){let P=Z[it.path],z=it.contenttype,X=new Blob([P],{type:z}),J=URL.createObjectURL(X),k=n.load(J,function(){URL.revokeObjectURL(J)});switch(k.colorSpace=bf,it.tilestyleu){case"wrap":k.wrapS=Fi;break;case"mirror":k.wrapS=Cr;break;case"none":case"clamp":k.wrapS=ei;break;default:k.wrapS=Fi}switch(it.tilestylev){case"wrap":k.wrapT=Fi;break;case"mirror":k.wrapT=Cr;break;case"none":case"clamp":k.wrapT=ei;break;default:k.wrapT=Fi}switch(it.filter){case"auto":k.magFilter=cn,k.minFilter=si;break;case"linear":k.magFilter=cn,k.minFilter=cn,k.generateMipmaps=!1;break;case"nearest":k.magFilter=$e,k.minFilter=$e,k.generateMipmaps=!1;break;default:k.magFilter=cn,k.minFilter=si}return k}else return null}function D(N,U,W,Z,$,j,it){let P=it.pindex,z={};for(let k=0,ft=U.length;k<ft;k++){let st=U[k],ht=st.p1!==void 0?st.p1:P;z[ht]===void 0&&(z[ht]=[]),z[ht].push(st)}let X=Object.keys(z),J=[];for(let k=0,ft=X.length;k<ft;k++){let st=X[k],ht=z[st],Dt=N.basematerials[st],vt=rt(Dt,Z,$,j,it,K),C=new ie,w=[],G=W.vertices;for(let ot=0,nt=ht.length;ot<nt;ot++){let bt=ht[ot];w.push(G[bt.v1*3+0]),w.push(G[bt.v1*3+1]),w.push(G[bt.v1*3+2]),w.push(G[bt.v2*3+0]),w.push(G[bt.v2*3+1]),w.push(G[bt.v2*3+2]),w.push(G[bt.v3*3+0]),w.push(G[bt.v3*3+1]),w.push(G[bt.v3*3+2])}C.setAttribute("position",new jt(w,3));let et=new se(C,vt);J.push(et)}return J}function S(N,U,W,Z,$,j,it){let P=new ie,z=[],X=[],J=W.vertices,k=N.uvs;for(let Dt=0,vt=U.length;Dt<vt;Dt++){let C=U[Dt];z.push(J[C.v1*3+0]),z.push(J[C.v1*3+1]),z.push(J[C.v1*3+2]),z.push(J[C.v2*3+0]),z.push(J[C.v2*3+1]),z.push(J[C.v2*3+2]),z.push(J[C.v3*3+0]),z.push(J[C.v3*3+1]),z.push(J[C.v3*3+2]),X.push(k[C.p1*2+0]),X.push(k[C.p1*2+1]),X.push(k[C.p2*2+0]),X.push(k[C.p2*2+1]),X.push(k[C.p3*2+0]),X.push(k[C.p3*2+1])}P.setAttribute("position",new jt(z,3)),P.setAttribute("uv",new jt(X,2));let ft=rt(N,Z,$,j,it,T),st=new Mi({map:ft,flatShading:!0});return new se(P,st)}function M(N,U,W,Z){let $=new ie,j=[],it=[],P=W.vertices,z=N.colors;for(let k=0,ft=U.length;k<ft;k++){let st=U[k],ht=st.v1,Dt=st.v2,vt=st.v3;j.push(P[ht*3+0]),j.push(P[ht*3+1]),j.push(P[ht*3+2]),j.push(P[Dt*3+0]),j.push(P[Dt*3+1]),j.push(P[Dt*3+2]),j.push(P[vt*3+0]),j.push(P[vt*3+1]),j.push(P[vt*3+2]);let C=st.p1!==void 0?st.p1:Z.pindex,w=st.p2!==void 0?st.p2:C,G=st.p3!==void 0?st.p3:C;it.push(z[C*3+0]),it.push(z[C*3+1]),it.push(z[C*3+2]),it.push(z[w*3+0]),it.push(z[w*3+1]),it.push(z[w*3+2]),it.push(z[G*3+0]),it.push(z[G*3+1]),it.push(z[G*3+2])}$.setAttribute("position",new jt(j,3)),$.setAttribute("color",new jt(it,3));let X=new Mi({vertexColors:!0,flatShading:!0});return new se($,X)}function A(N){let U=new ie;U.setIndex(new le(N.triangles,1)),U.setAttribute("position",new le(N.vertices,3));let W=new Mi({name:Sn.DEFAULT_MATERIAL_NAME,color:16777215,flatShading:!0});return new se(U,W)}function L(N,U,W,Z,$,j){let it=Object.keys(N),P=[];for(let z=0,X=it.length;z<X;z++){let J=it[z],k=N[J];switch(F(J,Z)){case"material":let st=Z.resources.basematerials[J],ht=D(st,k,U,W,Z,$,j);for(let C=0,w=ht.length;C<w;C++)P.push(ht[C]);break;case"texture":let Dt=Z.resources.texture2dgroup[J];P.push(S(Dt,k,U,W,Z,$,j));break;case"vertexColors":let vt=Z.resources.colorgroup[J];P.push(M(vt,k,U,j));break;case"default":P.push(A(U));break;default:console.error("THREE.3MFLoader: Unsupported resource type.")}}if(j.name)for(let z=0;z<P.length;z++)P[z].name=j.name;return P}function F(N,U){return U.resources.texture2dgroup[N]!==void 0?"texture":U.resources.basematerials[N]!==void 0?"material":U.resources.colorgroup[N]!==void 0?"vertexColors":N==="default"?"default":void 0}function O(N,U){let W={},Z=N.triangleProperties,$=U.pid;for(let j=0,it=Z.length;j<it;j++){let P=Z[j],z=P.pid!==void 0?P.pid:$;z===void 0&&(z="default"),W[z]===void 0&&(W[z]=[]),W[z].push(P)}return W}function H(N,U,W,Z,$){let j=new Ye,it=O(N,$),P=L(it,N,U,W,Z,$);for(let z=0,X=P.length;z<X;z++)j.add(P[z]);return j}function V(N,U,W){if(!N)return;let Z=[],$=Object.keys(N);for(let j=0;j<$.length;j++){let it=$[j];for(let P=0;P<e.availableExtensions.length;P++){let z=e.availableExtensions[P];z.ns===it&&Z.push(z)}}for(let j=0;j<Z.length;j++){let it=Z[j];it.apply(W,N[it.ns],U)}}function rt(N,U,W,Z,$,j){return N.build!==void 0||(N.build=j(N,U,W,Z,$)),N.build}function K(N,U,W){let Z,$=N.displaypropertiesid,j=W.resources.pbmetallicdisplayproperties;if($!==null&&j[$]!==void 0){let X=j[$].data[N.index];Z=new ir({flatShading:!0,roughness:X.roughness,metalness:X.metallicness})}else Z=new Mi({flatShading:!0});Z.name=N.name;let it=N.displaycolor,P=it.substring(0,7);return Z.color.setStyle(P,bf),it.length===9&&(Z.opacity=parseInt(it.charAt(7)+it.charAt(8),16)/255),Z}function lt(N,U,W,Z){let $=new Ye;for(let j=0;j<N.length;j++){let it=N[j],P=U[it.objectId];P===void 0&&(_t(it.objectId,U,W,Z),P=U[it.objectId]);let z=P.clone(),X=it.transform;X&&z.applyMatrix4(X),$.add(z)}return $}function _t(N,U,W,Z){let $=W.resources.object[N];if($.mesh){let j=$.mesh,it=W.extensions,P=W.xml;V(it,j,P),U[$.id]=rt(j,U,W,Z,$,H)}else{let j=$.components;U[$.id]=rt(j,U,W,Z,$,lt)}$.name&&(U[$.id].name=$.name),W.resources.implicitfunction&&console.warn("THREE.ThreeMFLoader: Implicit Functions are implemented in data-only.",W.resources.implicitfunction)}function St(N){let U=N.model,W=N.modelRels,Z={},$=Object.keys(U),j={};if(W)for(let it=0,P=W.length;it<P;it++){let z=W[it],X=z.target.substring(1);N.texture[X]&&(j[z.target]=N.texture[X])}for(let it=0;it<$.length;it++){let P=$[it],z=U[P],X=Object.keys(z.resources.object);for(let J=0;J<X.length;J++){let k=X[J];_t(k,Z,z,j)}}return Z}function Ft(N){for(let U=0;U<N.length;U++){let W=N[U];if(W.target.split(".").pop().toLowerCase()==="model")return W}}function Bt(N,U){let W=new Ye,Z=Ft(U.rels),$=U.model[Z.target.substring(1)].build;for(let j=0;j<$.length;j++){let it=$[j],P=N[it.objectId].clone(),z=it.transform;z&&P.applyMatrix4(z),W.add(P)}return W}let Kt=r(t),Ot=St(Kt);return Bt(Ot,Kt)}addExtension(t){this.availableExtensions.push(t)}};var Nn=Uint8Array,Qs=Uint16Array,GS=Int32Array,sg=new Nn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),og=new Nn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),WS=new Nn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),ag=function(i,t){for(var e=new Qs(31),n=0;n<31;++n)e[n]=t+=1<<i[n-1];for(var r=new GS(e[30]),n=1;n<30;++n)for(var s=e[n];s<e[n+1];++s)r[s]=s-e[n]<<5|n;return{b:e,r}},lg=ag(sg,2),cg=lg.b,XS=lg.r;cg[28]=258,XS[258]=28;var hg=ag(og,0),qS=hg.b,dR=hg.r,Af=new Qs(32768);for(fe=0;fe<32768;++fe)Xi=(fe&43690)>>1|(fe&21845)<<1,Xi=(Xi&52428)>>2|(Xi&13107)<<2,Xi=(Xi&61680)>>4|(Xi&3855)<<4,Af[fe]=((Xi&65280)>>8|(Xi&255)<<8)>>1;var Xi,fe,_a=(function(i,t,e){for(var n=i.length,r=0,s=new Qs(t);r<n;++r)i[r]&&++s[i[r]-1];var o=new Qs(t);for(r=1;r<t;++r)o[r]=o[r-1]+s[r-1]<<1;var a;if(e){a=new Qs(1<<t);var l=15-t;for(r=0;r<n;++r)if(i[r])for(var c=r<<4|i[r],u=t-i[r],h=o[i[r]-1]++<<u,f=h|(1<<u)-1;h<=f;++h)a[Af[h]>>l]=c}else for(a=new Qs(n),r=0;r<n;++r)i[r]&&(a[r]=Af[o[i[r]-1]++]>>15-i[r]);return a}),va=new Nn(288);for(fe=0;fe<144;++fe)va[fe]=8;var fe;for(fe=144;fe<256;++fe)va[fe]=9;var fe;for(fe=256;fe<280;++fe)va[fe]=7;var fe;for(fe=280;fe<288;++fe)va[fe]=8;var fe,ug=new Nn(32);for(fe=0;fe<32;++fe)ug[fe]=5;var fe;var YS=_a(va,9,1);var ZS=_a(ug,5,1),wf=function(i){for(var t=i[0],e=1;e<i.length;++e)i[e]>t&&(t=i[e]);return t},ui=function(i,t,e){var n=t/8|0;return(i[n]|i[n+1]<<8)>>(t&7)&e},Ef=function(i,t){var e=t/8|0;return(i[e]|i[e+1]<<8|i[e+2]<<16)>>(t&7)},$S=function(i){return(i+7)/8|0},Cf=function(i,t,e){return(t==null||t<0)&&(t=0),(e==null||e>i.length)&&(e=i.length),new Nn(i.subarray(t,e))};var JS=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Kn=function(i,t,e){var n=new Error(t||JS[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,Kn),!e)throw n;return n},KS=function(i,t,e,n){var r=i.length,s=n?n.length:0;if(!r||t.f&&!t.l)return e||new Nn(0);var o=!e,a=o||t.i!=2,l=t.i;o&&(e=new Nn(r*3));var c=function(j){var it=e.length;if(j>it){var P=new Nn(Math.max(it*2,j));P.set(e),e=P}},u=t.f||0,h=t.p||0,f=t.b||0,d=t.l,g=t.d,y=t.m,m=t.n,p=r*8;do{if(!d){u=ui(i,h,1);var x=ui(i,h+1,3);if(h+=3,x)if(x==1)d=YS,g=ZS,y=9,m=5;else if(x==2){var E=ui(i,h,31)+257,T=ui(i,h+10,15)+4,D=E+ui(i,h+5,31)+1;h+=14;for(var S=new Nn(D),M=new Nn(19),A=0;A<T;++A)M[WS[A]]=ui(i,h+A*3,7);h+=T*3;for(var L=wf(M),F=(1<<L)-1,O=_a(M,L,1),A=0;A<D;){var H=O[ui(i,h,F)];h+=H&15;var v=H>>4;if(v<16)S[A++]=v;else{var V=0,rt=0;for(v==16?(rt=3+ui(i,h,3),h+=2,V=S[A-1]):v==17?(rt=3+ui(i,h,7),h+=3):v==18&&(rt=11+ui(i,h,127),h+=7);rt--;)S[A++]=V}}var K=S.subarray(0,E),lt=S.subarray(E);y=wf(K),m=wf(lt),d=_a(K,y,1),g=_a(lt,m,1)}else Kn(1);else{var v=$S(h)+4,_=i[v-4]|i[v-3]<<8,b=v+_;if(b>r){l&&Kn(0);break}a&&c(f+_),e.set(i.subarray(v,b),f),t.b=f+=_,t.p=h=b*8,t.f=u;continue}if(h>p){l&&Kn(0);break}}a&&c(f+131072);for(var _t=(1<<y)-1,St=(1<<m)-1,Ft=h;;Ft=h){var V=d[Ef(i,h)&_t],Bt=V>>4;if(h+=V&15,h>p){l&&Kn(0);break}if(V||Kn(2),Bt<256)e[f++]=Bt;else if(Bt==256){Ft=h,d=null;break}else{var Kt=Bt-254;if(Bt>264){var A=Bt-257,Ot=sg[A];Kt=ui(i,h,(1<<Ot)-1)+cg[A],h+=Ot}var N=g[Ef(i,h)&St],U=N>>4;N||Kn(3),h+=N&15;var lt=qS[U];if(U>3){var Ot=og[U];lt+=Ef(i,h)&(1<<Ot)-1,h+=Ot}if(h>p){l&&Kn(0);break}a&&c(f+131072);var W=f+Kt;if(f<lt){var Z=s-lt,$=Math.min(lt,W);for(Z+f<0&&Kn(3);f<$;++f)e[f]=n[Z+f]}for(;f<W;++f)e[f]=e[f-lt]}}t.l=d,t.p=Ft,t.b=f,t.f=u,d&&(u=1,t.m=y,t.d=g,t.n=m)}while(!u);return f!=e.length&&o?Cf(e,0,f):e.subarray(0,f)};var jS=new Nn(0);var Ai=function(i,t){return i[t]|i[t+1]<<8},fi=function(i,t){return(i[t]|i[t+1]<<8|i[t+2]<<16|i[t+3]<<24)>>>0},Tf=function(i,t){return fi(i,t)+fi(i,t+4)*4294967296};function QS(i,t){return KS(i,{i:2},t&&t.out,t&&t.dictionary)}var Rf=typeof TextDecoder<"u"&&new TextDecoder,tb=0;try{Rf.decode(jS,{stream:!0}),tb=1}catch{}var eb=function(i){for(var t="",e=0;;){var n=i[e++],r=(n>127)+(n>223)+(n>239);if(e+r>i.length)return{s:t,r:Cf(i,e-1)};r?r==3?(n=((n&15)<<18|(i[e++]&63)<<12|(i[e++]&63)<<6|i[e++]&63)-65536,t+=String.fromCharCode(55296|n>>10,56320|n&1023)):r&1?t+=String.fromCharCode((n&31)<<6|i[e++]&63):t+=String.fromCharCode((n&15)<<12|(i[e++]&63)<<6|i[e++]&63):t+=String.fromCharCode(n)}};function Pf(i,t){if(t){for(var e="",n=0;n<i.length;n+=16384)e+=String.fromCharCode.apply(null,i.subarray(n,n+16384));return e}else{if(Rf)return Rf.decode(i);var r=eb(i),s=r.s,e=r.r;return e.length&&Kn(8),s}}var nb=function(i,t){return t+30+Ai(i,t+26)+Ai(i,t+28)},ib=function(i,t,e){var n=Ai(i,t+28),r=Pf(i.subarray(t+46,t+46+n),!(Ai(i,t+8)&2048)),s=t+46+n,o=fi(i,t+20),a=e&&o==4294967295?rb(i,s):[o,fi(i,t+24),fi(i,t+42)],l=a[0],c=a[1],u=a[2];return[Ai(i,t+10),l,c,r,s+Ai(i,t+30)+Ai(i,t+32),u]},rb=function(i,t){for(;Ai(i,t)!=1;t+=4+Ai(i,t+2));return[Tf(i,t+12),Tf(i,t+4),Tf(i,t+20)]};function fg(i,t){for(var e={},n=i.length-22;fi(i,n)!=101010256;--n)(!n||i.length-n>65558)&&Kn(13);var r=Ai(i,n+8);if(!r)return{};var s=fi(i,n+16),o=s==4294967295||r==65535;if(o){var a=fi(i,n-12);o=fi(i,a)==101075792,o&&(r=fi(i,a+32),s=fi(i,a+48))}for(var l=t&&t.filter,c=0;c<r;++c){var u=ib(i,s,o),h=u[0],f=u[1],d=u[2],g=u[3],y=u[4],m=u[5],p=nb(i,m);s=y,(!l||l({name:g,size:f,originalSize:d,compression:h}))&&(h?h==8?e[g]=QS(i.subarray(p,p+f),{out:new Nn(d)}):Kn(14,"unknown compression type "+h):e[g]=Cf(i,p,p+f))}return e}var ut=i=>document.getElementById(i),pr=ut("model-viewport"),Ma=new WeakMap,ve=[],Ae=new Set,Pt=null,ze=[],Wr=[],Sa=[],yg="duzenlenen-model",tn="orbit",te=!1,qi,Fn,dr=null,Df=1,xe=[],di=null,dg=null,pg=null,mg="",If=0,gg=null,mr=new To,Xe=new on(38,1,.01,1e5),fn=sb();function sb(){try{return new Ic({antialias:!0,alpha:!0,logarithmicDepthBuffer:!0})}catch(i){throw ut("model-status").textContent="3D g\xF6r\xFCn\xFCm\xFC ba\u015Flat\u0131lamad\u0131. Donan\u0131m h\u0131zland\u0131rmas\u0131n\u0131 ve ekran kart\u0131 s\xFCr\xFCc\xFCs\xFCn\xFC kontrol edin.",i}}Xe.up.set(0,0,1);fn.setPixelRatio(Math.min(devicePixelRatio,2));fn.localClippingEnabled=!0;fn.toneMapping=Gl;fn.toneMappingExposure=.85;fn.setClearColor(0,0);pr.append(fn.domElement);var Fe=new ih(Xe,fn.domElement);Fe.enableDamping=!0;Fe.minDistance=.05;Fe.maxDistance=1e5;var qr=Hm({render:()=>fn.render(mr,Xe),update:()=>Fe.update(),visible:()=>!document.hidden&&pr.clientWidth>0&&pr.clientHeight>0});Fe.addEventListener("change",qr);document.addEventListener("visibilitychange",qr);var Xr=new Ye,no=new Ye,lh=new Ye;mr.add(Xr,no,lh,new Xo(16777215,1.8));var _g=new Es(16777215,2.4);_g.position.set(60,-80,150);mr.add(_g);var vg=new Es(11980543,1);vg.position.set(-60,80,-50);mr.add(vg);var fr,On=new ae(new I(-10,-10,-10),new I(10,10,10)),xa=new Ve,to;function Re(i){ut("model-status").textContent=i}function io(i,t="busy"){let e=ut("operation-feedback");e.hidden=!1,e.dataset.state=t,e.textContent=i}function Yr(i){console.error(i);let t=i.message||String(i);Re(t),io(t,"error")}function Lf(i){for(let t of[...i.children])i.remove(t),t.geometry?.dispose(),Array.isArray(t.material)?t.material.forEach(e=>e.dispose()):t.material?.dispose()}var ob=i=>"#"+new Vt(...i||[.48,.63,.85]).getHexString();function Ce(){let i=ve.length>0,t=Ae.size>0,e=Pt&&ve[Pt.part],n=e&&ze.length>0&&!xe.length;for(let a of["model-open","model-file"])ut(a).disabled=te;for(let a of["erase-local","fill-local"])ut(a).disabled=te||!n||Pt.viewPlane;ut("cut-local").disabled=te||!n;let r=ut("fill-target").value==="surface";ut("fill-apply").disabled=te||!n||r&&Pt.viewPlane,ut("tool-fill-reference").disabled=te||!i||xe.length>0;for(let a of["fill-target","fill-offset","fill-z","fill-bottom","fill-thickness","fill-preview"])ut(a).disabled=te;ut("fill-offset-wrap").hidden=!r,ut("fill-z-wrap").hidden=r,ut("fill-thickness-wrap").hidden=ut("fill-bottom").value!=="thickness",ut("fill-reference-info").textContent=e&&!Pt.viewPlane?"Dolgu d\xFCzlemi haz\u0131r \xB7 mevcut y\xFCzey referans al\u0131nd\u0131.":"Y\xFCzeyden d\xFCzlem al\u0131n; mevcut alan se\xE7iminiz korunur.",ut("fill-help").textContent=n?r&&Pt.viewPlane?"Dolgu d\xFCzlemini y\xFCzeyden al d\xFC\u011Fmesine bas\u0131p ayn\u0131 seviyede olmas\u0131n\u0131 istedi\u011Finiz y\xFCzeye t\u0131klay\u0131n.":"Haz\u0131r. Yaln\u0131zca se\xE7ili alan\u0131n i\xE7ine malzeme eklenir. \xD6nizleyebilir veya dolguyu uygulayabilirsiniz.":"Noktalarla dolgu alan\u0131n\u0131 \xE7izip se\xE7imi kapat\u0131n.",ut("delete-parts").disabled=te||!t,ut("split-parts").disabled=te||Ae.size!==1;for(let a of["tool-reference","tool-pan","tool-box","tool-polygon","tool-circle","model-ground","model-fit","view-front","view-top-model","mesh-export"])ut(a).disabled=te||!i;for(let a of["reference-view","reference-flip"])ut(a).disabled=te||!e;ut("areas-clear").disabled=te;for(let a of["brush-diameter","edit-depth","edit-offset"])ut(a).disabled=te;ut("mesh-format").disabled=te,ut("cancel-operation").hidden=!te,ut("mesh-undo").disabled=te||!Wr.length,ut("mesh-redo").disabled=te||!Sa.length,ut("polygon-finish").disabled=te||xe.length<3,ut("polygon-back").disabled=te||!xe.length,ut("area-count").textContent=xe.length?`${xe.length} nokta \xB7 se\xE7imi kapat\u0131n`:ze.length?`${ze.length} yerel alan se\xE7ildi`:"Alan se\xE7ilmedi",ut("model-stats").textContent=i?`${ve.length} par\xE7a \xB7 ${ve.reduce((a,l)=>a+l.triangles.length,0).toLocaleString("tr-TR")} \xFC\xE7gen`:"Hen\xFCz model yok",ut("model-empty").hidden=i;let s=[...Ae].join(",");if(pg===ve&&mg===s)return;pg=ve,mg=s;let o=ut("model-parts");o.replaceChildren(),ve.forEach((a,l)=>{let c=document.createElement("button");c.className="part"+(Ae.has(l)?" active":"");let u=document.createElement("i");u.style.background=ob(a.colors?.[0]);let h=document.createElement("span");h.textContent=a.name||`Par\xE7a ${l+1}`,c.append(u,h),c.title=`${a.triangles.length} \xFC\xE7gen`,c.onclick=f=>{te||(f.ctrlKey||f.metaKey?Ae.has(l)?Ae.delete(l):Ae.add(l):Ae=new Set([l]),Pt&&Pt.part!==l&&gr(),wa(),Ce())},o.append(c)})}function wa(){qr(),Xr.children.forEach(i=>{i.material.emissive.set(Ae.has(i.userData.part)?1980768:0),i.material.emissiveIntensity=.24})}function Ea(i=!1){if(Lf(Xr),ve.forEach((t,e)=>{let n=Ma.get(t);n||(n=km(t),Ma.set(t,n));let r=Vm(n),s=new ir({vertexColors:!0,roughness:.82,metalness:0,flatShading:!0,side:Ke}),o=new se(r,s);o.userData.part=e,o.raycast=zm,Xr.add(o)}),ve.length){On.setFromObject(Xr);let t=On.getSize(new I).length(),e=On.getCenter(new I);fr&&(mr.remove(fr),fr.geometry.dispose(),fr.material.dispose()),fr=new Yo(Math.max(1,t*1.5),30,5137285,2833236),fr.rotation.x=Math.PI/2,fr.position.set(e.x,e.y,On.min.z-Math.max(.02,t*2e-4)),mr.add(fr)}Nf(),wa(),Ce(),en(),i&&ro()}function ro(i=new I(.9,-1.2,.9),t=On.getCenter(new I)){let e=Fe.enableDamping;Fe.enableDamping=!1,Fe.update();let n=Math.max(.1,On.getSize(new I).length()/2),r=Math.min(Xe.fov*Math.PI/360,Math.atan(Math.tan(Xe.fov*Math.PI/360)*Xe.aspect)),s=n/Math.sin(r)*1.15;Fe.target.copy(t),Xe.position.copy(t).addScaledVector(i.clone().normalize(),s),Xe.far=Math.max(1e4,s*8),Xe.updateProjectionMatrix(),Fe.update(),Xe.updateMatrixWorld(!0),Fe.enableDamping=e}function Nf(){qr();let i=ut("section-axis").value,t=Number(ut("section-position").value)/100,e=On.min[i]+(On.max[i]-On.min[i])*t;xa.normal.set(0,0,0),xa.normal[i]=-Df,xa.constant=e*Df;for(let n of Xr.children)n.material.clippingPlanes=ut("section-enabled").checked?[xa]:[],n.material.needsUpdate=!0}function xg(){return{parts:ve,selected:[...Ae],view:{position:Xe.position.toArray(),target:Fe.target.toArray()}}}function Ff(){Wr.push(xg()),Wr.length>12&&Wr.shift(),Sa=[]}function gr(){Pt=null,ze=[],xe=[],di=null,ut("reference-info").textContent="Referans y\xFCzey se\xE7ilmedi.",en()}function yr(i){tn!==i&&(xe=[],di=null),tn=i,Fe.enabled=!0,Fe.mouseButtons.MIDDLE=In.PAN,Fe.mouseButtons.RIGHT=In.ROTATE,Fe.mouseButtons.LEFT=i==="pan"?In.PAN:["orbit","reference","fill-reference"].includes(i)?In.ROTATE:null;for(let t of["orbit","pan","reference","fill-reference","polygon","box","circle"])ut("tool-"+t).classList.toggle("active",t===i);fn.domElement.style.cursor=["orbit","pan"].includes(i)?"grab":"crosshair",en(),Ce()}function Mg(i){Xe.updateMatrixWorld(!0);let t=fn.domElement.getBoundingClientRect(),e=new qo;return e.setFromCamera(new ct((i.clientX-t.left)/t.width*2-1,-(i.clientY-t.top)/t.height*2+1),Xe),e}function Sg(i){return Mg(i).intersectObjects(Xr.children).find(t=>!ut("section-enabled").checked||xa.distanceToPoint(t.point)>=-1e-5)}function eo(i){return Pt?Mg(i).ray.intersectPlane(new Ve().setFromNormalAndCoplanarPoint(Pt.n,Pt.origin),new I):null}function ba(i,t,e,n){return{center:i.toArray(),width:t,height:e,shape:n,u:Pt.u.toArray(),v:Pt.v.toArray(),n:Pt.n.toArray()}}function ab(){if(ut("fill-target").value==="height"){let i=Number(ut("fill-z").value);if(!Number.isFinite(i)||ut("fill-z").value==="")throw new Error("Dolgu \xFCst y\xFCzeyi i\xE7in ge\xE7erli bir Z y\xFCksekli\u011Fi girin.");return{origin:[0,0,i],u:[1,0,0],v:[0,1,0],n:[0,0,1]}}if(!Pt||Pt.viewPlane)throw new Error("\xD6nce dolgu d\xFCzlemini y\xFCzeyden al\u0131n veya Z y\xFCksekli\u011Fi se\xE7in.");return Object.fromEntries(["origin","u","v","n"].map(i=>[i,Pt[i].toArray()]))}function bg(){if(!Pt||!ze.length||xe.length)throw new Error("\xD6nce noktalarla bir alan \xE7izip se\xE7imi kapat\u0131n.");return Gm(ve[Pt.part],ze,ab(),{offset:ut("fill-target").value==="surface"?Number(ut("fill-offset").value):0,thickness:ut("fill-bottom").value==="thickness"?Number(ut("fill-thickness").value):null})}function lb(i){try{let t=i.face.normal.clone().normalize(),e=new I().crossVectors(Math.abs(t.z)<.9?new I(0,0,1):new I(0,1,0),t).normalize(),n=new I().crossVectors(t,e).normalize(),r={origin:i.point.toArray(),n:t.toArray(),u:e.toArray(),v:n.toArray()},s=df(ze,r),o=Pt?.part??i.object.userData.part;Pt={part:o,origin:i.point.clone(),n:t,u:e,v:n,viewPlane:!1},ze=s,Ae=new Set([o]),ut("reference-info").textContent="Dolgu referans\u0131 haz\u0131r \xB7 alan se\xE7imi korundu.",ut("fill-target").value="surface",ut("fill-offset").value="0",ut("fill-preview").checked=!0,ut("operation-feedback").hidden=!0,yr("polygon"),wa(),Re("Dolgu d\xFCzlemi al\u0131nd\u0131. Alan\u0131 doldurdu\u011Funuzda \xFCst y\xFCzeyi bu d\xFCzlemle ayn\u0131 olacak.")}catch(t){Yr(t)}}function cb(i){for(let t of i){let e=new nr(t.points.map(c=>new ct(...c))),n=new Bo(e,{depth:t.depth,bevelEnabled:!1,steps:1}),r=new se(n,new Oi({color:6023103,transparent:!0,opacity:.22,depthWrite:!1,depthTest:!1,side:Ke})),s=new I(...t.u),o=new I(...t.v),a=new I(...t.n);r.quaternion.setFromRotationMatrix(new Wt().makeBasis(s,o,a)),r.position.fromArray(t.center).addScaledVector(a,t.offset-t.depth),r.renderOrder=9,no.add(r);let l=t.points.map(c=>new I(...t.center).addScaledVector(s,c[0]).addScaledVector(o,c[1]).addScaledVector(a,t.offset));Bf(l,!0)}}ut("fill-apply").onclick=()=>{try{Ta("fill",bg())}catch(i){Yr(i)}};for(let i of["fill-target","fill-offset","fill-z","fill-bottom","fill-thickness","fill-preview"])ut(i).oninput=()=>{Ce(),en()};function Of(){if(!(te||xe.length<3))try{let i=pa(xe.map(o=>{let a=o.clone().sub(Pt.origin);return[a.dot(Pt.u),a.dot(Pt.v)]})),t=i.map(o=>o[0]),e=i.map(o=>o[1]),n=(Math.min(...t)+Math.max(...t))/2,r=(Math.min(...e)+Math.max(...e))/2,s=Pt.origin.clone().addScaledVector(Pt.u,n).addScaledVector(Pt.v,r);ut("operation-feedback").hidden=!0,ze.push({...ba(s,Math.max(...t)-Math.min(...t),Math.max(...e)-Math.min(...e),"polygon"),points:i.map(o=>[o[0]-n,o[1]-r])}),xe=[],di=null,en(),Ce(),Re("Taral\u0131 alan haz\u0131r. Sa\u011Fdaki alan doldur ile malzeme ekleyebilir veya soldaki ara\xE7larla kesebilirsiniz.")}catch(i){Yr(i)}}function wg(i,t=no){let e=new nr(i.points.map(u=>new ct(...u))),n=new ko(e),r=new Rn({transparent:!0,depthTest:!1,depthWrite:!1,side:Ke,vertexShader:"void main(){gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"void main(){float stripe=step(mod(gl_FragCoord.x+gl_FragCoord.y,12.),2.);gl_FragColor=vec4(1.,.65,.25,mix(.13,.65,stripe));}"}),s=new se(n,r),o=new I(...i.u),a=new I(...i.v),l=new I(...i.n);s.quaternion.setFromRotationMatrix(new Wt().makeBasis(o,a,l)),s.position.fromArray(i.center),s.renderOrder=10,t.add(s);let c=i.points.map(u=>new I(...i.center).addScaledVector(o,u[0]).addScaledVector(a,u[1]));Bf(c,!0,t)}function Bf(i,t=!1,e=no){if(i.length>1){let r=new ii(new ie().setFromPoints(t?[...i,i[0]]:i),new qn({color:16762744,depthTest:!1,transparent:!0}));r.renderOrder=12,e.add(r)}let n=new Yn(new ie().setFromPoints(i),new ri({color:16769960,size:8,sizeAttenuation:!1,depthTest:!1}));n.renderOrder=13,e.add(n)}function hb(){if(Bf([...xe,...di?[di]:[]],!1,lh),xe.length>=3)try{let i=pa(xe.map(t=>{let e=t.clone().sub(Pt.origin);return[e.dot(Pt.u),e.dot(Pt.v)]}));wg({...ba(Pt.origin,1,1,"polygon"),points:i},lh)}catch{}}ut("polygon-finish").onclick=Of;ut("polygon-back").onclick=()=>{xe.pop(),di=null,en(),Ce()};function en(i){qr(),Lf(lh),xe.length&&Pt&&hb();let t=JSON.stringify([Pt&&[Pt.origin.toArray(),Pt.n.toArray(),Pt.u.toArray(),Pt.v.toArray()],ze,i,!!xe.length,...["edit-depth","edit-offset","fill-target","fill-offset","fill-z","fill-bottom","fill-thickness"].map(s=>ut(s).value),ut("fill-preview").checked]);if(t===dg||(dg=t,Lf(no),to&&(mr.remove(to),to.dispose(),to=null),!Pt))return;let e=Math.max(.5,On.getSize(new I).length()*.06);to=new Zo(Pt.n,Pt.origin,e,9683967,e*.3,e*.12),mr.add(to);let n=Math.max(.01,Number(ut("edit-depth").value)||2),r=Number(ut("edit-offset").value)||0;for(let s of[...ze,...i?[i]:[]]){if(s.shape==="polygon"){wg(s);continue}let o=s.shape==="circle"?new Ss(s.width/2,s.width/2,n,64).rotateX(Math.PI/2):new tr(s.width,s.height,n),a=new se(o,new Oi({color:16753754,transparent:!0,opacity:.24,depthWrite:!1,depthTest:!1,side:Ke}));a.renderOrder=10;let l=new I(...s.u),c=new I(...s.v),u=new I(...s.n);a.quaternion.setFromRotationMatrix(new Wt().makeBasis(l,c,u)),a.position.fromArray(s.center).addScaledVector(u,r+n/2),no.add(a)}if(ut("fill-preview").checked&&ze.length&&!xe.length)try{cb(bg())}catch{}}function Uf(i,t=!1){let e=i.object.userData.part,n=i.face.normal.clone().normalize(),r=new I().crossVectors(Math.abs(n.z)<.9?new I(0,0,1):new I(0,1,0),n).normalize(),s=new I().crossVectors(n,r).normalize();Pt={part:e,origin:i.point.clone(),n,u:r,v:s,viewPlane:t},Ae=new Set([e]),ze=[],ut("reference-info").textContent=(t?"G\xF6r\xFCn\xFCm d\xFCzlemi \xB7 tam kesime haz\u0131r":"Referans haz\u0131r")+" \xB7 "+(ve[e].name||`Par\xE7a ${e+1}`),wa(),Ce(),en()}fn.domElement.addEventListener("pointerdown",i=>{if(i.button!==0||te)return;let t=!1;if(["polygon","box","circle"].includes(tn)&&!Pt){let n=Sg(i);if(n&&tn!=="polygon")Uf(n);else{if(!ve.length)return;let r=n?.object.userData.part??[...Ae].find(s=>ve[s])??0;Uf({object:{userData:{part:r}},face:{normal:Xe.getWorldDirection(new I).negate()},point:n?.point||On.getCenter(new I)},!0)}t=!0}let e=tn==="box"?eo(i):null;dr={x:i.clientX,y:i.clientY,point:e,initialReference:t},["orbit","pan","reference","fill-reference"].includes(tn)||fn.domElement.setPointerCapture(i.pointerId)});fn.domElement.addEventListener("pointermove",i=>{te||i.buttons&6||!(tn==="polygon"&&xe.length||tn==="box"&&dr?.point)||(gg={clientX:i.clientX,clientY:i.clientY},!If&&(If=requestAnimationFrame(()=>{If=0;let t=gg;if(tn==="polygon"&&xe.length&&Pt)di=eo(t),en();else if(tn==="box"&&dr?.point&&Pt){let e=eo(t);if(e){let n=e.clone().sub(dr.point);en(ba(e.clone().add(dr.point).multiplyScalar(.5),Math.abs(n.dot(Pt.u)),Math.abs(n.dot(Pt.v)),"box"))}}})))});fn.domElement.addEventListener("pointerup",i=>{if(!dr||te)return;let t=dr;if(dr=null,i.button!==0)return;if(tn==="polygon"){if(Math.hypot(i.clientX-t.x,i.clientY-t.y)>5)return;let r=eo(i);if(!r)return;if(xe.length>=3){let s=xe[0].clone().project(Xe),o=fn.domElement.getBoundingClientRect();if(Math.hypot(i.clientX-(o.left+(s.x+1)*o.width/2),i.clientY-(o.top+(1-s.y)*o.height/2))<12){Of();return}}xe.push(r),di=null,en(),Ce(),Re("Noktalar\u0131 t\u0131klayarak s\u0131n\u0131r\u0131 \xE7izin. \u0130lk noktaya t\u0131klay\u0131n veya Enter ile se\xE7imi kapat\u0131n.");return}if(tn==="box"&&t.point){let r=eo(i);if(!r)return;let s=r.clone().sub(t.point),o=Math.abs(s.dot(Pt.u)),a=Math.abs(s.dot(Pt.v));o>.01&&a>.01&&(ze.push(ba(r.clone().add(t.point).multiplyScalar(.5),o,a,"box")),en(),Ce(),Re(Pt.viewPlane?"Alan se\xE7ildi. \u201CSe\xE7ili alan\u0131 tamamen kes\u201D ile kald\u0131rabilirsiniz. D\xFCzleme i\xE7in temiz y\xFCzeyden referans al\u0131n.":"Alan se\xE7ildi. D\xFCzleme, doldurma veya tamamen kesme i\u015Flemini uygulay\u0131n."));return}if(Math.hypot(i.clientX-t.x,i.clientY-t.y)>5)return;if(tn==="circle"&&Pt){if(t.initialReference){Re(Pt.viewPlane?"G\xF6r\xFCn\xFCm d\xFCzlemi haz\u0131r. Kesilecek alan\u0131n \xFCzerine t\u0131klayarak daire alanlar\u0131 ekleyin.":"Temiz y\xFCzey referans al\u0131nd\u0131. \u015Eimdi kald\u0131r\u0131lacak yaz\u0131n\u0131n \xFCzerine t\u0131klayarak daire alanlar\u0131 ekleyin.");return}let r=eo(i),s=Number(ut("brush-diameter").value);r&&s>0&&(ze.push(ba(r,s,s,"circle")),en(),Ce());return}let e=Sg(i);if(!e)return;let n=e.object.userData.part;if(tn==="fill-reference"){lb(e);return}tn==="reference"?(Uf(e),yr("polygon"),Re("Yaz\u0131n\u0131n etraf\u0131na noktalar yerle\u015Ftirin. Gerekirse \xF6nce \u201CY\xFCzeye bak\u201D d\xFC\u011Fmesini kullan\u0131n.")):(i.ctrlKey||i.metaKey?Ae.has(n)?Ae.delete(n):Ae.add(n):Ae=new Set([n]),Pt&&Pt.part!==n&&gr()),wa(),Ce()});function ub(i,t,e=1){let n=[],r=[],s=[];for(let o of i){let a=o.geometry,l=a.getAttribute("position"),c=a.getAttribute("color"),u=a.index,h=n.length,f=Array.isArray(o.material)?o.material[0]:o.material,d=f?.color||new Vt(.48,.63,.85),g=new I;for(let p=0;p<l.count;p++)g.fromBufferAttribute(l,p).applyMatrix4(o.matrixWorld).multiplyScalar(e),n.push(g.toArray()),r.push(c?[c.getX(p)*d.r,c.getY(p)*d.g,c.getZ(p)*d.b]:d.toArray());let y=u?u.count:l.count,m=o.matrixWorld.determinant()<0?[2,1,0]:[0,1,2];for(let p=0;p<y;p+=3)s.push(m.map(x=>h+(u?u.getX(p+x):p+x)))}return{name:t,vertices:n,colors:r,triangles:s}}async function Eg(i){if(!(!i||te)){te=!0,Ce();try{if(i.size>100*1024*1024)throw new Error("Model en fazla 100 MB olabilir.");Re("Model okunuyor\u2026");let t=i.name.split(".").at(-1).toLowerCase(),e=await i.arrayBuffer(),n,r=1;if(t==="stl"){let l=new rh().parse(e);n=new Ye,n.add(new se(l,new ir({color:l.getAttribute("color")?16777215:12045548})))}else if(t==="obj")n=new oh().parse(new TextDecoder().decode(e));else if(t==="3mf"){n=new ah().parse(e);let l=fg(new Uint8Array(e)),c=Object.keys(l).find(h=>/^3d\/3dmodel\.model$/i.test(h))||Object.keys(l).find(h=>/\.model$/i.test(h)),u=c?new DOMParser().parseFromString(Pf(l[c]),"application/xml").documentElement.getAttribute("unit"):null;r={micron:.001,millimeter:1,centimeter:10,inch:25.4,foot:304.8,meter:1e3}[u||"millimeter"]||1}else throw new Error("STL, 3MF veya OBJ dosyas\u0131 se\xE7in.");n.updateMatrixWorld(!0);let s=[];if(n.traverse(l=>{let c=l.children.filter(u=>u.isMesh);c.length&&s.push(ub(c,l.name||`Par\xE7a ${s.length+1}`,r))}),!s.length)throw new Error("Dosyada \xFC\xE7gen y\xFCzey bulunamad\u0131.");if(s.reduce((l,c)=>l+c.triangles.length,0)>15e5)throw new Error("Bu model 1,5 milyon \xFC\xE7genden b\xFCy\xFCk. \xD6nce a\u011F\u0131 sadele\u015Ftirin.");if(s.some(l=>l.vertices.some(c=>c.some(u=>!Number.isFinite(u)))))throw new Error("Dosyada ge\xE7ersiz koordinat var.");Re("Modelin g\xF6r\xFCn\xFCm\xFC ve h\u0131zl\u0131 se\xE7im verileri haz\u0131rlan\u0131yor\u2026"),await new Promise(l=>setTimeout(l,0));let{displays:a}=await ch({mode:"prepare",parts:s});s.forEach((l,c)=>Ma.set(l,a[c])),ut("operation-feedback").hidden=!0,ve=s,yg=i.name.replace(/\.[^.]+$/,""),Ae=new Set([0]),Wr=[],Sa=[],gr(),ut("model-name").textContent=i.name,yr("orbit"),Ea(!0),Re("Model haz\u0131r. Yaz\u0131n\u0131n yan\u0131ndan referans y\xFCzey se\xE7erek ba\u015Flay\u0131n."),n.traverse(l=>{if(l.isMesh){l.geometry.dispose();for(let c of Array.isArray(l.material)?l.material:[l.material])c.dispose()}})}catch(t){Yr(t)}finally{te=!1,ut("model-file").value="",Ce()}}}function ch(i){return new Promise((t,e)=>{qi||(qi=new Worker(new URL("mesh-worker.js",document.baseURI),{type:"module"}),qi.onmessage=({data:n})=>{if(!Fn)return;if(n.progress){io(n.progress);return}clearTimeout(Fn.timer);let{resolve:r,reject:s}=Fn;Fn=null,n.error?s(new Error(n.error)):r(n)},qi.onerror=n=>{Fn&&(clearTimeout(Fn.timer),Fn.reject(new Error(n.message||"Geometri motoru a\xE7\u0131lamad\u0131.")),Fn=null),qi.terminate(),qi=null}),Fn={resolve:t,reject:e,timer:setTimeout(()=>Tg("\u0130\u015Flem zaman a\u015F\u0131m\u0131na u\u011Frad\u0131. Daha k\xFC\xE7\xFCk bir alan deneyin."),12e4)},qi.postMessage(i)})}function Tg(i="\u0130\u015Flem iptal edildi. Model de\u011Fi\u015Ftirilmedi."){Fn&&(clearTimeout(Fn.timer),Fn.reject(new Error(i)),Fn=null),qi?.terminate(),qi=null}async function Ta(i,t=null){if(te||!ve.length)return;let e=i==="split"?[...Ae][0]:Pt?.part;if(e===void 0||i!=="split"&&!ze.length)return;let n=Number(ut("edit-depth").value),r=Number(ut("edit-offset").value);if(!t&&!["split","cut"].includes(i)&&(!Number.isFinite(n)||n<=0||n>1e3||!Number.isFinite(r)))return Re("Ge\xE7erli derinlik ve ofset girin.");te=!0,Ce(),io("\u0130\u015Flem ba\u015Flat\u0131l\u0131yor\u2026"),Re("Se\xE7ili geometri d\xFCzenleniyor\u2026");let s=Date.now(),o=setInterval(()=>{ut("operation-elapsed").textContent=`${Math.floor((Date.now()-s)/1e3)} sn`},1e3);try{await new Promise(u=>setTimeout(u,0));let{parts:a,warning:l,displays:c}=await ch({mode:i,part:ve[e],areas:t||ze.map(u=>({...u,depth:n,offset:r}))});a.forEach((u,h)=>Ma.set(u,c[h])),Ff(),ve=[...ve.slice(0,e),...a,...ve.slice(e+1)],Ae=new Set(a.map((u,h)=>e+h)),gr(),yr("orbit"),Ea(),io(l||(i==="split"?`${a.length} ba\u011Flant\u0131s\u0131z par\xE7a bulundu.`:"\u0130\u015Flem tamamland\u0131. Model geometrisi de\u011Fi\u015Ftirildi. Geri al ile kar\u015F\u0131la\u015Ft\u0131rabilirsiniz."),l?"warning":"success"),Re(i==="split"?`${a.length} ba\u011Flant\u0131s\u0131z par\xE7a bulundu.`:i==="cut"?"\u0130\u015Flem tamamland\u0131. Se\xE7ilen alan modelin kal\u0131nl\u0131\u011F\u0131 boyunca kesildi.":"\u0130\u015Flem tamamland\u0131. Yaln\u0131zca se\xE7ilen yerel alan de\u011Fi\u015Ftirildi.")}catch(a){Yr(a)}finally{clearInterval(o),ut("operation-elapsed").textContent="",te=!1,Ce()}}function zf(i=!1){if(te)return;let t=i?Sa:Wr,e=i?Wr:Sa;if(!t.length)return;e.push(xg());let n=t.pop();if(ve=n.parts,Ae=new Set(n.selected),gr(),yr("orbit"),Ea(),n.view){let r=Fe.enableDamping;Fe.enableDamping=!1,Fe.update(),Xe.position.fromArray(n.view.position),Fe.target.fromArray(n.view.target),Fe.update(),Xe.updateMatrixWorld(!0),Fe.enableDamping=r}Re(i?"\u0130\u015Flem yinelendi.":"\u0130\u015Flem geri al\u0131nd\u0131."),ut("operation-feedback").hidden=!0}async function kf(){if(!ve.length)return Re("\xD6nce bir 3D dosyas\u0131 a\xE7\u0131n.");if(!te){te=!0,Ce(),io("Dosya arka planda haz\u0131rlan\u0131yor\u2026"),Re("3D dosyas\u0131 haz\u0131rlan\u0131yor\u2026");try{await new Promise(s=>setTimeout(s,0));let i=ut("mesh-format").value,{payload:t}=await ch({mode:"export",parts:ve,type:i}),e=i==="obj"?"zip":i,n=URL.createObjectURL(new Blob([t],{type:i==="3mf"?"model/3mf":i==="stl"?"model/stl":"application/zip"})),r=document.createElement("a");r.href=n,r.download=yg.replace(/[<>:"/\\|?*]/g,"_")+"-duzenlendi."+e,r.click(),setTimeout(()=>URL.revokeObjectURL(n),3e4),io("Dosya haz\u0131r. D\xFCzenlenen model kaydediliyor.","success"),Re("D\xFCzenlenen model kaydediliyor. Kaynak dosya korunuyor.")}catch(i){Yr(i)}finally{te=!1,Ce()}}}ut("model-open").onclick=()=>ut("model-file").click();ut("model-file").onchange=i=>Eg(i.target.files[0]);pr.ondragover=i=>i.preventDefault();pr.ondrop=i=>{i.preventDefault(),Eg(i.dataTransfer.files[0])};for(let i of["orbit","pan","reference","fill-reference","polygon","box","circle"])ut("tool-"+i).onclick=()=>{yr(i),i==="fill-reference"&&Re("Dolgunun \xFCst y\xFCzeyiyle ayn\u0131 d\xFCzlemde olmas\u0131n\u0131 istedi\u011Finiz y\xFCzeye t\u0131klay\u0131n. Alan se\xE7imi korunur."),i==="reference"&&Re("Temiz y\xFCzeye t\u0131kla: referans se\xE7. S\xFCr\xFCkle: d\xF6nd\xFCr. Tekerle\u011Fe bas\u0131l\u0131 s\xFCr\xFCkle: kayd\u0131r \xB7 Sa\u011F tu\u015F: d\xF6nd\xFCr. Tekerlek: yak\u0131nla\u015F."),i==="polygon"&&Re("S\u0131n\u0131r noktalar\u0131na sol t\u0131klay\u0131n. \u0130lk noktaya t\u0131klay\u0131n veya Enter ile kapat\u0131n. Backspace: son noktay\u0131 geri al. Sa\u011F tu\u015F: d\xF6nd\xFCr \xB7 Tekerle\u011Fe bas\u0131l\u0131 s\xFCr\xFCkle: kayd\u0131r."),i==="box"&&Re("Modelin temiz y\xFCzeyinden ba\u015Flay\u0131p yaz\u0131n\u0131n etraf\u0131na kutu \xE7izin. Tekerle\u011Fe basarak kayd\u0131rma ve tekerlekle yak\u0131nla\u015Fma her zaman a\xE7\u0131k.")};ut("reference-view").onclick=()=>{Pt&&ro(Pt.n,Pt.origin)};ut("reference-flip").onclick=()=>{Pt&&(Pt.n.negate(),Pt.v.negate(),ze=[],xe=[],di=null,en(),Ce())};ut("model-fit").onclick=()=>ro();ut("view-front").onclick=()=>ro(new I(0,-1,0));ut("view-top-model").onclick=()=>ro(new I(0,-1e-4,1));ut("model-ground").onclick=async()=>{if(!(!ve.length||te)){te=!0,Ce(),Re("Model arka planda zemine ta\u015F\u0131n\u0131yor\u2026");try{await new Promise(r=>setTimeout(r,0));let i=On.getCenter(new I),t=[-i.x,-i.y,-On.min.z],{parts:e,displays:n}=await ch({mode:"ground",parts:ve,offset:t});e.forEach((r,s)=>Ma.set(r,n[s])),Ff(),ve=e,gr(),yr("orbit"),Ea(!0),Re("Model zemine ve koordinat merkezine yerle\u015Ftirildi. Geri al ile eski konumu geri getirebilirsiniz.")}catch(i){Yr(i)}finally{te=!1,Ce()}}};for(let i of["section-enabled","section-axis","section-position"])ut(i).oninput=Nf;ut("section-flip").onclick=()=>{Df*=-1,Nf()};for(let i of["edit-depth","edit-offset"])ut(i).oninput=()=>en();ut("areas-clear").onclick=()=>{ze=[],xe=[],di=null,Pt?.viewPlane?gr():en(),Ce()};ut("erase-local").onclick=()=>Ta("erase");ut("fill-local").onclick=()=>Ta("fill");ut("split-parts").onclick=()=>Ta("split");ut("cancel-operation").onclick=()=>Tg();ut("cut-local").onclick=()=>Ta("cut");ut("delete-parts").onclick=()=>{te||!Ae.size||(Ff(),ve=ve.filter((i,t)=>!Ae.has(t)),Ae.clear(),gr(),Ea(),Re("Se\xE7ili par\xE7alar silindi. Geri al ile geri getirebilirsiniz."))};ut("mesh-undo").onclick=()=>zf();ut("mesh-redo").onclick=()=>zf(!0);ut("mesh-export").onclick=kf;document.addEventListener("keydown",i=>{if((i.ctrlKey||i.metaKey)&&["s","o","e"].includes(i.key.toLowerCase())&&!parent.katmanDesktop){i.preventDefault(),i.key.toLowerCase()==="o"?ut("model-file").click():kf();return}if(!/INPUT|SELECT|TEXTAREA/.test(i.target.tagName)){if((i.ctrlKey||i.metaKey)&&i.key.toLowerCase()==="z"&&(i.preventDefault(),zf(i.shiftKey)),tn==="polygon"&&i.key==="Enter"){i.preventDefault(),Of();return}if(tn==="polygon"&&i.key==="Backspace"){i.preventDefault(),xe.pop(),en(),Ce();return}i.key==="Escape"&&(xe=[],di=null,ze=[],en(),yr("orbit"),Ce())}});window.addEventListener("message",i=>{if(i.source!==parent||i.origin!==location.origin||i.data?.type!=="katman-editor-action")return;let t=i.data.action;t==="image"||t==="open"?ut("model-file").click():t==="save"||t==="export"?kf():t==="help"&&(document.querySelector("details").open=!0)});new ResizeObserver(()=>{let i=pr.clientWidth,t=pr.clientHeight;!i||!t||(Xe.aspect=i/t,Xe.updateProjectionMatrix(),fn.setSize(i,t),qr())}).observe(pr);ro();Ce();qr();
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
