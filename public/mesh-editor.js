var En={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ti={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ah=0,Cl=1,Ch=2;var Rl=1,Rh=2,Bn=3,Qn=0,We=1,sn=2,ri=0,Vi=1,Il=2,Pl=3,Dl=4,Ih=5,xi=100,Ph=101,Dh=102,Lh=103,Uh=104,Fh=200,Nh=201,Oh=202,Bh=203,ho=204,uo=205,zh=206,kh=207,Vh=208,Hh=209,Gh=210,Wh=211,Xh=212,qh=213,Yh=214,Uo=0,Fo=1,No=2,Hi=3,Oo=4,Bo=5,zo=6,ko=7,Vo=0,Zh=1,$h=2,si=0,Jh=1,Kh=2,jh=3,Ho=4,Qh=5,tu=6,eu=7;var Ll=300,Zi=301,$i=302,Go=303,Wo=304,Ms=306,ti=1e3,Sn=1001,Gi=1002,Ge=1003,nu=1004;var Ss=1005;var Oe=1006,Xo=1007;var Tn=1008;var An=1009,Ul=1010,Fl=1011,Lr=1012,qo=1013,Ai=1014,zn=1015,Ur=1016,Yo=1017,Zo=1018,Fr=1020,Nl=35902,Ol=35899,Bl=1021,zl=1022,gn=1023,Sr=1026,Nr=1027,kl=1028,$o=1029,Vl=1030,Jo=1031;var Ko=1033,bs=33776,ws=33777,Es=33778,Ts=33779,jo=35840,Qo=35841,ta=35842,ea=35843,na=36196,ia=37492,ra=37496,sa=37808,oa=37809,aa=37810,la=37811,ca=37812,ha=37813,ua=37814,fa=37815,da=37816,pa=37817,ma=37818,ga=37819,va=37820,_a=37821,xa=36492,ya=36494,Ma=36495,Sa=36283,ba=36284,wa=36285,Ea=36286;var Qr=2300,fo=2301,co=2302,vl=2400,_l=2401,xl=2402;var iu=3200,ru=3201;var Ta=0,su=1,oi="",we="srgb",Wi="srgb-linear",ts="linear",re="srgb";var ki=7680;var yl=519,ou=512,au=513,lu=514,Hl=515,cu=516,hu=517,uu=518,fu=519,Ml=35044;var Gl="300 es",bn=2e3,es=2001;var Ln=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let r=n[t];if(r!==void 0){let s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}},Ue=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],jc=1234567,Kr=Math.PI/180,br=180/Math.PI;function Or(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ue[i&255]+Ue[i>>8&255]+Ue[i>>16&255]+Ue[i>>24&255]+"-"+Ue[t&255]+Ue[t>>8&255]+"-"+Ue[t>>16&15|64]+Ue[t>>24&255]+"-"+Ue[e&63|128]+Ue[e>>8&255]+"-"+Ue[e>>16&255]+Ue[e>>24&255]+Ue[n&255]+Ue[n>>8&255]+Ue[n>>16&255]+Ue[n>>24&255]).toLowerCase()}function Zt(i,t,e){return Math.max(t,Math.min(e,i))}function Wl(i,t){return(i%t+t)%t}function Vf(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function Hf(i,t,e){return i!==t?(e-i)/(t-i):0}function jr(i,t,e){return(1-e)*i+e*t}function Gf(i,t,e,n){return jr(i,t,1-Math.exp(-e*n))}function Wf(i,t=1){return t-Math.abs(Wl(i,t*2)-t)}function Xf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function qf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Yf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Zf(i,t){return i+Math.random()*(t-i)}function $f(i){return i*(.5-Math.random())}function Jf(i){i!==void 0&&(jc=i);let t=jc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Kf(i){return i*Kr}function jf(i){return i*br}function Qf(i){return(i&i-1)===0&&i!==0}function td(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ed(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function nd(i,t,e,n,r){let s=Math.cos,o=Math.sin,a=s(e/2),c=o(e/2),l=s((t+n)/2),u=o((t+n)/2),h=s((t-n)/2),f=o((t-n)/2),p=s((n-t)/2),g=o((n-t)/2);switch(r){case"XYX":i.set(a*u,c*h,c*f,a*l);break;case"YZY":i.set(c*f,a*u,c*h,a*l);break;case"ZXZ":i.set(c*h,c*f,a*u,a*l);break;case"XZX":i.set(a*u,c*g,c*p,a*l);break;case"YXY":i.set(c*p,a*u,c*g,a*l);break;case"ZYZ":i.set(c*g,c*p,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function xr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ve(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Xl={DEG2RAD:Kr,RAD2DEG:br,generateUUID:Or,clamp:Zt,euclideanModulo:Wl,mapLinear:Vf,inverseLerp:Hf,lerp:jr,damp:Gf,pingpong:Wf,smoothstep:Xf,smootherstep:qf,randInt:Yf,randFloat:Zf,randFloatSpread:$f,seededRandom:Jf,degToRad:Kf,radToDeg:jf,isPowerOfTwo:Qf,ceilPowerOfTwo:td,floorPowerOfTwo:ed,setQuaternionFromProperEuler:nd,normalize:Ve,denormalize:xr},kt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},pn=class{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let c=n[r+0],l=n[r+1],u=n[r+2],h=n[r+3],f=s[o+0],p=s[o+1],g=s[o+2],v=s[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=v;return}if(h!==v||c!==f||l!==p||u!==g){let m=1-a,d=c*f+l*p+u*g+h*v,R=d>=0?1:-1,E=1-d*d;if(E>Number.EPSILON){let P=Math.sqrt(E),T=Math.atan2(P,d*R);m=Math.sin(m*T)/P,a=Math.sin(a*T)/P}let S=a*R;if(c=c*m+f*S,l=l*m+p*S,u=u*m+g*S,h=h*m+v*S,m===1-a){let P=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=P,l*=P,u*=P,h*=P}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,r,s,o){let a=n[r],c=n[r+1],l=n[r+2],u=n[r+3],h=s[o],f=s[o+1],p=s[o+2],g=s[o+3];return t[e]=a*g+u*h+c*p-l*f,t[e+1]=c*g+u*f+l*h-a*p,t[e+2]=l*g+u*p+a*f-c*h,t[e+3]=u*g-a*h-c*f-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(r/2),h=a(s/2),f=c(n/2),p=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=f*u*h+l*p*g,this._y=l*p*h-f*u*g,this._z=l*u*g+f*p*h,this._w=l*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+l*p*g,this._y=l*p*h-f*u*g,this._z=l*u*g-f*p*h,this._w=l*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-l*p*g,this._y=l*p*h+f*u*g,this._z=l*u*g+f*p*h,this._w=l*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-l*p*g,this._y=l*p*h+f*u*g,this._z=l*u*g-f*p*h,this._w=l*u*h+f*p*g;break;case"YZX":this._x=f*u*h+l*p*g,this._y=l*p*h+f*u*g,this._z=l*u*g-f*p*h,this._w=l*u*h-f*p*g;break;case"XZY":this._x=f*u*h-l*p*g,this._y=l*p*h-f*u*g,this._z=l*u*g+f*p*h,this._w=l*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],h=e[10],f=n+a+h;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-l)*p,this._z=(o-r)*p}else if(n>a&&n>h){let p=2*Math.sqrt(1+n-a-h);this._w=(u-c)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+l)/p}else if(a>h){let p=2*Math.sqrt(1+a-n-h);this._w=(s-l)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(c+u)/p}else{let p=2*Math.sqrt(1+h-n-a);this._w=(o-r)/p,this._x=(s+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Zt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-n*l,this._z=s*u+o*l+n*c-r*a,this._w=o*u-n*a-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,r=this._y,s=this._z,o=this._w,a=o*t._w+n*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*r+e*this._y,this._z=p*s+e*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-e)*u)/l,f=Math.sin(e*u)/l;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Qc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Qc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*r-a*n),u=2*(a*e-s*r),h=2*(s*n-o*e);return this.x=e+c*l+o*h-a*u,this.y=n+c*u+a*l-s*h,this.z=r+c*h+s*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ya.copy(this).projectOnVector(t),this.sub(Ya)}reflect(t){return this.sub(Ya.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ya=new U,Qc=new pn,Wt=class i{constructor(t,e,n,r,s,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,c,l)}set(t,e,n,r,s,o,a,c,l){let u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],p=n[5],g=n[8],v=r[0],m=r[3],d=r[6],R=r[1],E=r[4],S=r[7],P=r[2],T=r[5],D=r[8];return s[0]=o*v+a*R+c*P,s[3]=o*m+a*E+c*T,s[6]=o*d+a*S+c*D,s[1]=l*v+u*R+h*P,s[4]=l*m+u*E+h*T,s[7]=l*d+u*S+h*D,s[2]=f*v+p*R+g*P,s[5]=f*m+p*E+g*T,s[8]=f*d+p*S+g*D,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*s*u+n*a*c+r*s*l-r*o*c}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=u*o-a*l,f=a*c-u*s,p=l*s-o*c,g=e*h+n*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return t[0]=h*v,t[1]=(r*l-u*n)*v,t[2]=(a*n-r*o)*v,t[3]=f*v,t[4]=(u*e-r*c)*v,t[5]=(r*s-a*e)*v,t[6]=p*v,t[7]=(n*c-l*e)*v,t[8]=(o*e-n*s)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-r*l,r*c,-r*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Za.makeScale(t,e)),this}rotate(t){return this.premultiply(Za.makeRotation(-t)),this}translate(t,e){return this.premultiply(Za.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Za=new Wt;function ql(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function wr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function du(){let i=wr("canvas");return i.style.display="block",i}var th={};function Er(i){i in th||(th[i]=!0,console.warn(i))}function pu(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}var eh=new Wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nh=new Wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function id(){let i={enabled:!0,workingColorSpace:Wi,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===re&&(r.r=jn(r.r),r.g=jn(r.g),r.b=jn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===re&&(r.r=yr(r.r),r.g=yr(r.g),r.b=yr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===oi?ts:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Er("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Er("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Wi]:{primaries:t,whitePoint:n,transfer:ts,toXYZ:eh,fromXYZ:nh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:we},outputColorSpaceConfig:{drawingBufferColorSpace:we}},[we]:{primaries:t,whitePoint:n,transfer:re,toXYZ:eh,fromXYZ:nh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:we}}}),i}var Qt=id();function jn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function yr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var or,po=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{or===void 0&&(or=wr("canvas")),or.width=t.width,or.height=t.height;let r=or.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=or}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=wr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=jn(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(jn(e[n]/255)*255):e[n]=jn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},rd=0,Tr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rd++}),this.uuid=Or(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push($a(r[o].image)):s.push($a(r[o]))}else s=$a(r);n.url=s}return e||(t.images[this.uuid]=n),n}};function $a(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?po.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var sd=0,Ja=new U,Ze=class i extends Ln{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Sn,r=Sn,s=Oe,o=Tn,a=gn,c=An,l=i.DEFAULT_ANISOTROPY,u=oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sd++}),this.uuid=Or(),this.name="",this.source=new Tr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new kt(0,0),this.repeat=new kt(1,1),this.center=new kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ja).x}get height(){return this.source.getSize(Ja).y}get depth(){return this.source.getSize(Ja).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ll)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ti:t.x=t.x-Math.floor(t.x);break;case Sn:t.x=t.x<0?0:1;break;case Gi:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ti:t.y=t.y-Math.floor(t.y);break;case Sn:t.y=t.y<0?0:1;break;case Gi:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ze.DEFAULT_IMAGE=null;Ze.DEFAULT_MAPPING=Ll;Ze.DEFAULT_ANISOTROPY=1;var _e=class i{constructor(t=0,e=0,n=0,r=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s,c=t.elements,l=c[0],u=c[4],h=c[8],f=c[1],p=c[5],g=c[9],v=c[2],m=c[6],d=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(l+1)/2,S=(p+1)/2,P=(d+1)/2,T=(u+f)/4,D=(h+v)/4,L=(g+m)/4;return E>S&&E>P?E<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(E),r=T/n,s=D/n):S>P?S<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),n=T/r,s=L/r):P<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),n=D/s,r=L/s),this.set(n,r,s,e),this}let R=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(f-u)*(f-u));return Math.abs(R)<.001&&(R=1),this.x=(m-g)/R,this.y=(h-v)/R,this.z=(f-u)/R,this.w=Math.acos((l+p+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this.w=Zt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this.w=Zt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},mo=class extends Ln{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Oe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new _e(0,0,t,e),this.scissorTest=!1,this.viewport=new _e(0,0,t,e);let r={width:t,height:e,depth:n.depth},s=new Ze(r);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:Oe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let r=Object.assign({},t.textures[e].image);this.textures[e].source=new Tr(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Un=class extends mo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ns=class extends Ze{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=Sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var go=class extends Ze{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=Sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Fn=class{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(xn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(xn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=xn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,xn):xn.fromBufferAttribute(s,o),xn.applyMatrix4(t.matrixWorld),this.expandByPoint(xn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ks.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ks.copy(n.boundingBox)),ks.applyMatrix4(t.matrixWorld),this.union(ks)}let r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,xn),xn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(qr),Vs.subVectors(this.max,qr),ar.subVectors(t.a,qr),lr.subVectors(t.b,qr),cr.subVectors(t.c,qr),fi.subVectors(lr,ar),di.subVectors(cr,lr),Ni.subVectors(ar,cr);let e=[0,-fi.z,fi.y,0,-di.z,di.y,0,-Ni.z,Ni.y,fi.z,0,-fi.x,di.z,0,-di.x,Ni.z,0,-Ni.x,-fi.y,fi.x,0,-di.y,di.x,0,-Ni.y,Ni.x,0];return!Ka(e,ar,lr,cr,Vs)||(e=[1,0,0,0,1,0,0,0,1],!Ka(e,ar,lr,cr,Vs))?!1:(Hs.crossVectors(fi,di),e=[Hs.x,Hs.y,Hs.z],Ka(e,ar,lr,cr,Vs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,xn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(xn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(qn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},qn=[new U,new U,new U,new U,new U,new U,new U,new U],xn=new U,ks=new Fn,ar=new U,lr=new U,cr=new U,fi=new U,di=new U,Ni=new U,qr=new U,Vs=new U,Hs=new U,Oi=new U;function Ka(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Oi.fromArray(i,s);let a=r.x*Math.abs(Oi.x)+r.y*Math.abs(Oi.y)+r.z*Math.abs(Oi.z),c=t.dot(Oi),l=e.dot(Oi),u=n.dot(Oi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var od=new Fn,Yr=new U,ja=new U,yi=class{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):od.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Yr.subVectors(t,this.center);let e=Yr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Yr,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ja.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Yr.copy(t.center).add(ja)),this.expandByPoint(Yr.copy(t.center).sub(ja))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Yn=new U,Qa=new U,Gs=new U,pi=new U,tl=new U,Ws=new U,el=new U,ei=class{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Yn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Yn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Yn.copy(this.origin).addScaledVector(this.direction,e),Yn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Qa.copy(t).add(e).multiplyScalar(.5),Gs.copy(e).sub(t).normalize(),pi.copy(this.origin).sub(Qa);let s=t.distanceTo(e)*.5,o=-this.direction.dot(Gs),a=pi.dot(this.direction),c=-pi.dot(Gs),l=pi.lengthSq(),u=Math.abs(1-o*o),h,f,p,g;if(u>0)if(h=o*c-a,f=o*a-c,g=s*u,h>=0)if(f>=-g)if(f<=g){let v=1/u;h*=v,f*=v,p=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*c)+l;else f=-s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-c),s),p=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-s,-c),s),p=f*(f+2*c)+l):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-c),s),p=-h*h+f*(f+2*c)+l);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Qa).addScaledVector(Gs,f),p}intersectSphere(t,e){Yn.subVectors(t.center,this.origin);let n=Yn.dot(this.direction),r=Yn.dot(Yn)-n*n,s=t.radius*t.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,r=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,r=(t.min.x-f.x)*l),u>=0?(s=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(s=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(t.min.z-f.z)*h,c=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,c=(t.min.z-f.z)*h),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Yn)!==null}intersectTriangle(t,e,n,r,s){tl.subVectors(e,t),Ws.subVectors(n,t),el.crossVectors(tl,Ws);let o=this.direction.dot(el),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;pi.subVectors(this.origin,t);let c=a*this.direction.dot(Ws.crossVectors(pi,Ws));if(c<0)return null;let l=a*this.direction.dot(tl.cross(pi));if(l<0||c+l>o)return null;let u=-a*pi.dot(el);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},oe=class i{constructor(t,e,n,r,s,o,a,c,l,u,h,f,p,g,v,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,c,l,u,h,f,p,g,v,m)}set(t,e,n,r,s,o,a,c,l,u,h,f,p,g,v,m){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,r=1/hr.setFromMatrixColumn(t,0).length(),s=1/hr.setFromMatrixColumn(t,1).length(),o=1/hr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){let f=o*u,p=o*h,g=a*u,v=a*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=p+g*l,e[5]=f-v*l,e[9]=-a*c,e[2]=v-f*l,e[6]=g+p*l,e[10]=o*c}else if(t.order==="YXZ"){let f=c*u,p=c*h,g=l*u,v=l*h;e[0]=f+v*a,e[4]=g*a-p,e[8]=o*l,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=p*a-g,e[6]=v+f*a,e[10]=o*c}else if(t.order==="ZXY"){let f=c*u,p=c*h,g=l*u,v=l*h;e[0]=f-v*a,e[4]=-o*h,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*u,e[9]=v-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let f=o*u,p=o*h,g=a*u,v=a*h;e[0]=c*u,e[4]=g*l-p,e[8]=f*l+v,e[1]=c*h,e[5]=v*l+f,e[9]=p*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let f=o*c,p=o*l,g=a*c,v=a*l;e[0]=c*u,e[4]=v-f*h,e[8]=g*h+p,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=p*h+g,e[10]=f-v*h}else if(t.order==="XZY"){let f=o*c,p=o*l,g=a*c,v=a*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=f*h+v,e[5]=o*u,e[9]=p*h-g,e[2]=g*h-p,e[6]=a*u,e[10]=v*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ad,t,ld)}lookAt(t,e,n){let r=this.elements;return en.subVectors(t,e),en.lengthSq()===0&&(en.z=1),en.normalize(),mi.crossVectors(n,en),mi.lengthSq()===0&&(Math.abs(n.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),mi.crossVectors(n,en)),mi.normalize(),Xs.crossVectors(en,mi),r[0]=mi.x,r[4]=Xs.x,r[8]=en.x,r[1]=mi.y,r[5]=Xs.y,r[9]=en.y,r[2]=mi.z,r[6]=Xs.z,r[10]=en.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],p=n[13],g=n[2],v=n[6],m=n[10],d=n[14],R=n[3],E=n[7],S=n[11],P=n[15],T=r[0],D=r[4],L=r[8],x=r[12],y=r[1],I=r[5],N=r[9],q=r[13],Y=r[2],J=r[6],V=r[10],tt=r[14],G=r[3],ot=r[7],mt=r[11],xt=r[15];return s[0]=o*T+a*y+c*Y+l*G,s[4]=o*D+a*I+c*J+l*ot,s[8]=o*L+a*N+c*V+l*mt,s[12]=o*x+a*q+c*tt+l*xt,s[1]=u*T+h*y+f*Y+p*G,s[5]=u*D+h*I+f*J+p*ot,s[9]=u*L+h*N+f*V+p*mt,s[13]=u*x+h*q+f*tt+p*xt,s[2]=g*T+v*y+m*Y+d*G,s[6]=g*D+v*I+m*J+d*ot,s[10]=g*L+v*N+m*V+d*mt,s[14]=g*x+v*q+m*tt+d*xt,s[3]=R*T+E*y+S*Y+P*G,s[7]=R*D+E*I+S*J+P*ot,s[11]=R*L+E*N+S*V+P*mt,s[15]=R*x+E*q+S*tt+P*xt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],h=t[6],f=t[10],p=t[14],g=t[3],v=t[7],m=t[11],d=t[15];return g*(+s*c*h-r*l*h-s*a*f+n*l*f+r*a*p-n*c*p)+v*(+e*c*p-e*l*f+s*o*f-r*o*p+r*l*u-s*c*u)+m*(+e*l*h-e*a*p-s*o*h+n*o*p+s*a*u-n*l*u)+d*(-r*a*u-e*c*h+e*a*f+r*o*h-n*o*f+n*c*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=t[9],f=t[10],p=t[11],g=t[12],v=t[13],m=t[14],d=t[15],R=h*m*l-v*f*l+v*c*p-a*m*p-h*c*d+a*f*d,E=g*f*l-u*m*l-g*c*p+o*m*p+u*c*d-o*f*d,S=u*v*l-g*h*l+g*a*p-o*v*p-u*a*d+o*h*d,P=g*h*c-u*v*c-g*a*f+o*v*f+u*a*m-o*h*m,T=e*R+n*E+r*S+s*P;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/T;return t[0]=R*D,t[1]=(v*f*s-h*m*s-v*r*p+n*m*p+h*r*d-n*f*d)*D,t[2]=(a*m*s-v*c*s+v*r*l-n*m*l-a*r*d+n*c*d)*D,t[3]=(h*c*s-a*f*s-h*r*l+n*f*l+a*r*p-n*c*p)*D,t[4]=E*D,t[5]=(u*m*s-g*f*s+g*r*p-e*m*p-u*r*d+e*f*d)*D,t[6]=(g*c*s-o*m*s-g*r*l+e*m*l+o*r*d-e*c*d)*D,t[7]=(o*f*s-u*c*s+u*r*l-e*f*l-o*r*p+e*c*p)*D,t[8]=S*D,t[9]=(g*h*s-u*v*s-g*n*p+e*v*p+u*n*d-e*h*d)*D,t[10]=(o*v*s-g*a*s+g*n*l-e*v*l-o*n*d+e*a*d)*D,t[11]=(u*a*s-o*h*s-u*n*l+e*h*l+o*n*p-e*a*p)*D,t[12]=P*D,t[13]=(u*v*r-g*h*r+g*n*f-e*v*f-u*n*m+e*h*m)*D,t[14]=(g*a*r-o*v*r-g*n*c+e*v*c+o*n*m-e*a*m)*D,t[15]=(o*h*r-u*a*r+u*n*c-e*h*c-o*n*f+e*a*f)*D,this}scale(t){let e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,c=t.z,l=s*o,u=s*a;return this.set(l*o+n,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+n,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){let r=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,u=o+o,h=a+a,f=s*l,p=s*u,g=s*h,v=o*u,m=o*h,d=a*h,R=c*l,E=c*u,S=c*h,P=n.x,T=n.y,D=n.z;return r[0]=(1-(v+d))*P,r[1]=(p+S)*P,r[2]=(g-E)*P,r[3]=0,r[4]=(p-S)*T,r[5]=(1-(f+d))*T,r[6]=(m+R)*T,r[7]=0,r[8]=(g+E)*D,r[9]=(m-R)*D,r[10]=(1-(f+v))*D,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){let r=this.elements,s=hr.set(r[0],r[1],r[2]).length(),o=hr.set(r[4],r[5],r[6]).length(),a=hr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],yn.copy(this);let l=1/s,u=1/o,h=1/a;return yn.elements[0]*=l,yn.elements[1]*=l,yn.elements[2]*=l,yn.elements[4]*=u,yn.elements[5]*=u,yn.elements[6]*=u,yn.elements[8]*=h,yn.elements[9]*=h,yn.elements[10]*=h,e.setFromRotationMatrix(yn),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,r,s,o,a=bn,c=!1){let l=this.elements,u=2*s/(e-t),h=2*s/(n-r),f=(e+t)/(e-t),p=(n+r)/(n-r),g,v;if(c)g=s/(o-s),v=o*s/(o-s);else if(a===bn)g=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===es)g=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=bn,c=!1){let l=this.elements,u=2/(e-t),h=2/(n-r),f=-(e+t)/(e-t),p=-(n+r)/(n-r),g,v;if(c)g=1/(o-s),v=o/(o-s);else if(a===bn)g=-2/(o-s),v=-(o+s)/(o-s);else if(a===es)g=-1/(o-s),v=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=h,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},hr=new U,yn=new oe,ad=new U(0,0,0),ld=new U(1,1,1),mi=new U,Xs=new U,en=new U,ih=new oe,rh=new pn,mn=class i{constructor(t=0,e=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let r=t.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],h=r[2],f=r[6],p=r[10];switch(e){case"XYZ":this._y=Math.asin(Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Zt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Zt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ih.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ih,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return rh.setFromEuler(this),this.setFromQuaternion(rh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};mn.DEFAULT_ORDER="XYZ";var Ar=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},cd=0,sh=new U,ur=new pn,Zn=new oe,qs=new U,Zr=new U,hd=new U,ud=new pn,oh=new U(1,0,0),ah=new U(0,1,0),lh=new U(0,0,1),ch={type:"added"},fd={type:"removed"},fr={type:"childadded",child:null},nl={type:"childremoved",child:null},Ie=class i extends Ln{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cd++}),this.uuid=Or(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new U,e=new mn,n=new pn,r=new U(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new oe},normalMatrix:{value:new Wt}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ar,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ur.setFromAxisAngle(t,e),this.quaternion.multiply(ur),this}rotateOnWorldAxis(t,e){return ur.setFromAxisAngle(t,e),this.quaternion.premultiply(ur),this}rotateX(t){return this.rotateOnAxis(oh,t)}rotateY(t){return this.rotateOnAxis(ah,t)}rotateZ(t){return this.rotateOnAxis(lh,t)}translateOnAxis(t,e){return sh.copy(t).applyQuaternion(this.quaternion),this.position.add(sh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(oh,t)}translateY(t){return this.translateOnAxis(ah,t)}translateZ(t){return this.translateOnAxis(lh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?qs.copy(t):qs.set(t,e,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Zr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt(Zr,qs,this.up):Zn.lookAt(qs,Zr,this.up),this.quaternion.setFromRotationMatrix(Zn),r&&(Zn.extractRotation(r.matrixWorld),ur.setFromRotationMatrix(Zn),this.quaternion.premultiply(ur.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ch),fr.child=t,this.dispatchEvent(fr),fr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(fd),nl.child=t,this.dispatchEvent(nl),nl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Zn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Zn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ch),fr.child=t,this.dispatchEvent(fr),fr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zr,t,hd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zr,ud,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let h=c[l];s(t.shapes,h)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];r.animations.push(s(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){let c=[];for(let l in a){let u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let r=t.children[n];this.add(r.clone())}return this}};Ie.DEFAULT_UP=new U(0,1,0);Ie.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Mn=new U,$n=new U,il=new U,Jn=new U,dr=new U,pr=new U,hh=new U,rl=new U,sl=new U,ol=new U,al=new _e,ll=new _e,cl=new _e,_i=class i{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Mn.subVectors(t,e),r.cross(Mn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Mn.subVectors(r,e),$n.subVectors(n,e),il.subVectors(t,e);let o=Mn.dot(Mn),a=Mn.dot($n),c=Mn.dot(il),l=$n.dot($n),u=$n.dot(il),h=o*l-a*a;if(h===0)return s.set(0,0,0),null;let f=1/h,p=(l*c-a*u)*f,g=(o*u-a*c)*f;return s.set(1-p-g,g,p)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getInterpolation(t,e,n,r,s,o,a,c){return this.getBarycoord(t,e,n,r,Jn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Jn.x),c.addScaledVector(o,Jn.y),c.addScaledVector(a,Jn.z),c)}static getInterpolatedAttribute(t,e,n,r,s,o){return al.setScalar(0),ll.setScalar(0),cl.setScalar(0),al.fromBufferAttribute(t,e),ll.fromBufferAttribute(t,n),cl.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(al,s.x),o.addScaledVector(ll,s.y),o.addScaledVector(cl,s.z),o}static isFrontFacing(t,e,n,r){return Mn.subVectors(n,e),$n.subVectors(t,e),Mn.cross($n).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Mn.subVectors(this.c,this.b),$n.subVectors(this.a,this.b),Mn.cross($n).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return i.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,r=this.b,s=this.c,o,a;dr.subVectors(r,n),pr.subVectors(s,n),rl.subVectors(t,n);let c=dr.dot(rl),l=pr.dot(rl);if(c<=0&&l<=0)return e.copy(n);sl.subVectors(t,r);let u=dr.dot(sl),h=pr.dot(sl);if(u>=0&&h<=u)return e.copy(r);let f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(dr,o);ol.subVectors(t,s);let p=dr.dot(ol),g=pr.dot(ol);if(g>=0&&p<=g)return e.copy(s);let v=p*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(pr,a);let m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return hh.subVectors(s,r),a=(h-u)/(h-u+(p-g)),e.copy(r).addScaledVector(hh,a);let d=1/(m+v+f);return o=v*d,a=f*d,e.copy(n).addScaledVector(dr,o).addScaledVector(pr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},mu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gi={h:0,s:0,l:0},Ys={h:0,s:0,l:0};function hl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Nt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=we){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Qt.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=Qt.workingColorSpace){if(t=Wl(t,1),e=Zt(e,0,1),n=Zt(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=hl(o,s,t+1/3),this.g=hl(o,s,t),this.b=hl(o,s,t-1/3)}return Qt.colorSpaceToWorking(this,r),this}setStyle(t,e=we){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=we){let n=mu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=jn(t.r),this.g=jn(t.g),this.b=jn(t.b),this}copyLinearToSRGB(t){return this.r=yr(t.r),this.g=yr(t.g),this.b=yr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=we){return Qt.workingToColorSpace(Fe.copy(this),t),Math.round(Zt(Fe.r*255,0,255))*65536+Math.round(Zt(Fe.g*255,0,255))*256+Math.round(Zt(Fe.b*255,0,255))}getHexString(t=we){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.workingToColorSpace(Fe.copy(this),e);let n=Fe.r,r=Fe.g,s=Fe.b,o=Math.max(n,r,s),a=Math.min(n,r,s),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-n)/h+2;break;case s:c=(n-r)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=Qt.workingColorSpace){return Qt.workingToColorSpace(Fe.copy(this),e),t.r=Fe.r,t.g=Fe.g,t.b=Fe.b,t}getStyle(t=we){Qt.workingToColorSpace(Fe.copy(this),t);let e=Fe.r,n=Fe.g,r=Fe.b;return t!==we?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(gi),this.setHSL(gi.h+t,gi.s+e,gi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(gi),t.getHSL(Ys);let n=jr(gi.h,Ys.h,e),r=jr(gi.s,Ys.s,e),s=jr(gi.l,Ys.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Fe=new Nt;Nt.NAMES=mu;var dd=0,$e=class extends Ln{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dd++}),this.uuid=Or(),this.name="",this.type="Material",this.blending=Vi,this.side=Qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ho,this.blendDst=uo,this.blendEquation=xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Nt(0,0,0),this.blendAlpha=0,this.depthFunc=Hi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ki,this.stencilZFail=ki,this.stencilZPass=ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Vi&&(n.blending=this.blending),this.side!==Qn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ho&&(n.blendSrc=this.blendSrc),this.blendDst!==uo&&(n.blendDst=this.blendDst),this.blendEquation!==xi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Hi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ki&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ki&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ki&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(e){let s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Mi=class extends $e{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=Vo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Se=new U,Zs=new kt,pd=0,be=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:pd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ml,this.updateRanges=[],this.gpuType=zn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Zs.fromBufferAttribute(this,e),Zs.applyMatrix3(t),this.setXY(e,Zs.x,Zs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix3(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix4(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyNormalMatrix(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.transformDirection(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=xr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ve(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=xr(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=xr(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=xr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=xr(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array),r=Ve(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array),r=Ve(r,this.array),s=Ve(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ml&&(t.usage=this.usage),t}};var is=class extends be{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var rs=class extends be{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var $t=class extends be{constructor(t,e,n){super(new Float32Array(t),e,n)}},md=0,dn=new oe,ul=new Ie,mr=new U,nn=new Fn,$r=new Fn,Re=new U,he=class i extends Ln{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:md++}),this.uuid=Or(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ql(t)?rs:is)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Wt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return dn.makeRotationFromQuaternion(t),this.applyMatrix4(dn),this}rotateX(t){return dn.makeRotationX(t),this.applyMatrix4(dn),this}rotateY(t){return dn.makeRotationY(t),this.applyMatrix4(dn),this}rotateZ(t){return dn.makeRotationZ(t),this.applyMatrix4(dn),this}translate(t,e,n){return dn.makeTranslation(t,e,n),this.applyMatrix4(dn),this}scale(t,e,n){return dn.makeScale(t,e,n),this.applyMatrix4(dn),this}lookAt(t){return ul.lookAt(t),ul.updateMatrix(),this.applyMatrix4(ul.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mr).negate(),this.translate(mr.x,mr.y,mr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let r=0,s=t.length;r<s;r++){let o=t[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new $t(n,3))}else{let n=Math.min(t.length,e.count);for(let r=0;r<n;r++){let s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){let s=e[n];nn.setFromBufferAttribute(s),this.morphTargetsRelative?(Re.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Re),Re.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Re)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){let n=this.boundingSphere.center;if(nn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];$r.setFromBufferAttribute(a),this.morphTargetsRelative?(Re.addVectors(nn.min,$r.min),nn.expandByPoint(Re),Re.addVectors(nn.max,$r.max),nn.expandByPoint(Re)):(nn.expandByPoint($r.min),nn.expandByPoint($r.max))}nn.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)Re.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Re));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Re.fromBufferAttribute(a,l),c&&(mr.fromBufferAttribute(t,l),Re.add(mr)),r=Math.max(r,n.distanceToSquared(Re))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new be(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let L=0;L<n.count;L++)a[L]=new U,c[L]=new U;let l=new U,u=new U,h=new U,f=new kt,p=new kt,g=new kt,v=new U,m=new U;function d(L,x,y){l.fromBufferAttribute(n,L),u.fromBufferAttribute(n,x),h.fromBufferAttribute(n,y),f.fromBufferAttribute(s,L),p.fromBufferAttribute(s,x),g.fromBufferAttribute(s,y),u.sub(l),h.sub(l),p.sub(f),g.sub(f);let I=1/(p.x*g.y-g.x*p.y);isFinite(I)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(I),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(I),a[L].add(v),a[x].add(v),a[y].add(v),c[L].add(m),c[x].add(m),c[y].add(m))}let R=this.groups;R.length===0&&(R=[{start:0,count:t.count}]);for(let L=0,x=R.length;L<x;++L){let y=R[L],I=y.start,N=y.count;for(let q=I,Y=I+N;q<Y;q+=3)d(t.getX(q+0),t.getX(q+1),t.getX(q+2))}let E=new U,S=new U,P=new U,T=new U;function D(L){P.fromBufferAttribute(r,L),T.copy(P);let x=a[L];E.copy(x),E.sub(P.multiplyScalar(P.dot(x))).normalize(),S.crossVectors(T,x);let I=S.dot(c[L])<0?-1:1;o.setXYZW(L,E.x,E.y,E.z,I)}for(let L=0,x=R.length;L<x;++L){let y=R[L],I=y.start,N=y.count;for(let q=I,Y=I+N;q<Y;q+=3)D(t.getX(q+0)),D(t.getX(q+1)),D(t.getX(q+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new be(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let r=new U,s=new U,o=new U,a=new U,c=new U,l=new U,u=new U,h=new U;if(t)for(let f=0,p=t.count;f<p;f+=3){let g=t.getX(f+0),v=t.getX(f+1),m=t.getX(f+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=e.count;f<p;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Re.fromBufferAttribute(t,e),Re.normalize(),t.setXYZ(e,Re.x,Re.y,Re.z)}toNonIndexed(){function t(a,c){let l=a.array,u=a.itemSize,h=a.normalized,f=new l.constructor(c.length*u),p=0,g=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?p=c[v]*a.data.stride+a.offset:p=c[v]*u;for(let d=0;d<u;d++)f[g++]=l[p++]}return new be(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=t(c,n);e.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let u=0,h=l.length;u<h;u++){let f=l[u],p=t(f,n);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){let p=l[h];u.push(p.toJSON(t.data))}u.length>0&&(r[c]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let r=t.attributes;for(let l in r){let u=r[l];this.setAttribute(l,u.clone(e))}let s=t.morphAttributes;for(let l in s){let u=[],h=s[l];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,u=o.length;l<u;l++){let h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},uh=new oe,Bi=new ei,$s=new yi,fh=new U,Js=new U,Ks=new U,js=new U,fl=new U,Qs=new U,dh=new U,to=new U,de=class extends Ie{constructor(t=new he,e=new Mi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);let a=this.morphTargetInfluences;if(s&&a){Qs.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let u=a[c],h=s[c];u!==0&&(fl.fromBufferAttribute(h,t),o?Qs.addScaledVector(fl,u):Qs.addScaledVector(fl.sub(e),u))}e.add(Qs)}return e}raycast(t,e){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$s.copy(n.boundingSphere),$s.applyMatrix4(s),Bi.copy(t.ray).recast(t.near),!($s.containsPoint(Bi.origin)===!1&&(Bi.intersectSphere($s,fh)===null||Bi.origin.distanceToSquared(fh)>(t.far-t.near)**2))&&(uh.copy(s).invert(),Bi.copy(t.ray).applyMatrix4(uh),!(n.boundingBox!==null&&Bi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Bi)))}_computeIntersections(t,e,n){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){let m=f[g],d=o[m.materialIndex],R=Math.max(m.start,p.start),E=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=R,P=E;S<P;S+=3){let T=a.getX(S),D=a.getX(S+1),L=a.getX(S+2);r=eo(this,d,t,n,l,u,h,T,D,L),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{let g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){let R=a.getX(m),E=a.getX(m+1),S=a.getX(m+2);r=eo(this,o,t,n,l,u,h,R,E,S),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){let m=f[g],d=o[m.materialIndex],R=Math.max(m.start,p.start),E=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let S=R,P=E;S<P;S+=3){let T=S,D=S+1,L=S+2;r=eo(this,d,t,n,l,u,h,T,D,L),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{let g=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){let R=m,E=m+1,S=m+2;r=eo(this,o,t,n,l,u,h,R,E,S),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}};function gd(i,t,e,n,r,s,o,a){let c;if(t.side===We?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,t.side===Qn,a),c===null)return null;to.copy(a),to.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(to);return l<e.near||l>e.far?null:{distance:l,point:to.clone(),object:i}}function eo(i,t,e,n,r,s,o,a,c,l){i.getVertexPosition(a,Js),i.getVertexPosition(c,Ks),i.getVertexPosition(l,js);let u=gd(i,t,e,n,Js,Ks,js,dh);if(u){let h=new U;_i.getBarycoord(dh,Js,Ks,js,h),r&&(u.uv=_i.getInterpolatedAttribute(r,a,c,l,h,new kt)),s&&(u.uv1=_i.getInterpolatedAttribute(s,a,c,l,h,new kt)),o&&(u.normal=_i.getInterpolatedAttribute(o,a,c,l,h,new U),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new U,materialIndex:0};_i.getNormal(Js,Ks,js,f.normal),u.face=f,u.barycoord=h}return u}var Si=class i extends he{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],u=[],h=[],f=0,p=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,r,o,2),g("x","z","y",1,-1,t,n,-e,r,o,3),g("x","y","z",1,-1,t,e,n,r,s,4),g("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new $t(l,3)),this.setAttribute("normal",new $t(u,3)),this.setAttribute("uv",new $t(h,2));function g(v,m,d,R,E,S,P,T,D,L,x){let y=S/D,I=P/L,N=S/2,q=P/2,Y=T/2,J=D+1,V=L+1,tt=0,G=0,ot=new U;for(let mt=0;mt<V;mt++){let xt=mt*I-q;for(let Lt=0;Lt<J;Lt++){let Ot=Lt*y-N;ot[v]=Ot*R,ot[m]=xt*E,ot[d]=Y,l.push(ot.x,ot.y,ot.z),ot[v]=0,ot[m]=0,ot[d]=T>0?1:-1,u.push(ot.x,ot.y,ot.z),h.push(Lt/D),h.push(1-mt/L),tt+=1}}for(let mt=0;mt<L;mt++)for(let xt=0;xt<D;xt++){let Lt=f+xt+J*mt,Ot=f+xt+J*(mt+1),Ht=f+(xt+1)+J*(mt+1),Et=f+(xt+1)+J*mt;c.push(Lt,Ot,Et),c.push(Ot,Ht,Et),G+=6}a.addGroup(p,G,x),p+=G,f+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ji(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Be(i){let t={};for(let e=0;e<i.length;e++){let n=Ji(i[e]);for(let r in n)t[r]=n[r]}return t}function vd(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Yl(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}var gu={clone:Ji,merge:Be},_d=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,wn=class extends $e{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_d,this.fragmentShader=xd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ji(t.uniforms),this.uniformsGroups=vd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},ss=class extends Ie{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=bn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},vi=new U,ph=new kt,mh=new kt,Ne=class extends ss{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=br*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Kr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return br*2*Math.atan(Math.tan(Kr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(vi.x,vi.y).multiplyScalar(-t/vi.z),vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vi.x,vi.y).multiplyScalar(-t/vi.z)}getViewSize(t,e){return this.getViewBounds(t,ph,mh),e.subVectors(mh,ph)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Kr*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,e-=o.offsetY*n/l,r*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},gr=-90,vr=1,vo=class extends Ie{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Ne(gr,vr,t,e);r.layers=this.layers,this.add(r);let s=new Ne(gr,vr,t,e);s.layers=this.layers,this.add(s);let o=new Ne(gr,vr,t,e);o.layers=this.layers,this.add(o);let a=new Ne(gr,vr,t,e);a.layers=this.layers,this.add(a);let c=new Ne(gr,vr,t,e);c.layers=this.layers,this.add(c);let l=new Ne(gr,vr,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,c]=e;for(let l of e)this.remove(l);if(t===bn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===es)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,o),t.setRenderTarget(n,2,r),t.render(e,a),t.setRenderTarget(n,3,r),t.render(e,c),t.setRenderTarget(n,4,r),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,r),t.render(e,u),t.setRenderTarget(h,f,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},os=class extends Ze{constructor(t=[],e=Zi,n,r,s,o,a,c,l,u){super(t,e,n,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},_o=class extends Un{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new os(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Si(5,5,5),s=new wn({name:"CubemapFromEquirect",uniforms:Ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:We,blending:ri});s.uniforms.tEquirect.value=e;let o=new de(r,s),a=e.minFilter;return e.minFilter===Tn&&(e.minFilter=Oe),new vo(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}},De=class extends Ie{constructor(){super(),this.isGroup=!0,this.type="Group"}},yd={type:"move"},Cr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new De,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new De,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new De,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let v of t.hand.values()){let m=e.getJointPose(v,n),d=this._getHandJoint(l,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(yd)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new De;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}};var as=class extends Ie{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mn,this.environmentIntensity=1,this.environmentRotation=new mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var dl=new U,Md=new U,Sd=new Wt,He=class{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let r=dl.subVectors(n,e).cross(Md.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(dl),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Sd.getNormalMatrix(t),r=this.coplanarPoint(dl).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},zi=new yi,bd=new kt(.5,.5),no=new U,Rr=class{constructor(t=new He,e=new He,n=new He,r=new He,s=new He,o=new He){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=bn,n=!1){let r=this.planes,s=t.elements,o=s[0],a=s[1],c=s[2],l=s[3],u=s[4],h=s[5],f=s[6],p=s[7],g=s[8],v=s[9],m=s[10],d=s[11],R=s[12],E=s[13],S=s[14],P=s[15];if(r[0].setComponents(l-o,p-u,d-g,P-R).normalize(),r[1].setComponents(l+o,p+u,d+g,P+R).normalize(),r[2].setComponents(l+a,p+h,d+v,P+E).normalize(),r[3].setComponents(l-a,p-h,d-v,P-E).normalize(),n)r[4].setComponents(c,f,m,S).normalize(),r[5].setComponents(l-c,p-f,d-m,P-S).normalize();else if(r[4].setComponents(l-c,p-f,d-m,P-S).normalize(),e===bn)r[5].setComponents(l+c,p+f,d+m,P+S).normalize();else if(e===es)r[5].setComponents(c,f,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),zi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),zi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(zi)}intersectsSprite(t){zi.center.set(0,0,0);let e=bd.distanceTo(t.center);return zi.radius=.7071067811865476+e,zi.applyMatrix4(t.matrixWorld),this.intersectsSphere(zi)}intersectsSphere(t){let e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let r=e[n];if(no.x=r.normal.x>0?t.max.x:t.min.x,no.y=r.normal.y>0?t.max.y:t.min.y,no.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(no)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Nn=class extends $e{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Nt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},xo=new U,yo=new U,gh=new oe,Jr=new ei,io=new yi,pl=new U,vh=new U,ls=class extends Ie{constructor(t=new he,e=new Nn){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)xo.fromBufferAttribute(e,r-1),yo.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=xo.distanceTo(yo);t.setAttribute("lineDistance",new $t(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),io.copy(n.boundingSphere),io.applyMatrix4(r),io.radius+=s,t.ray.intersectsSphere(io)===!1)return;gh.copy(r).invert(),Jr.copy(t.ray).applyMatrix4(gh);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){let p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let v=p,m=g-1;v<m;v+=l){let d=u.getX(v),R=u.getX(v+1),E=ro(this,t,Jr,c,d,R,v);E&&e.push(E)}if(this.isLineLoop){let v=u.getX(g-1),m=u.getX(p),d=ro(this,t,Jr,c,v,m,g-1);d&&e.push(d)}}else{let p=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let v=p,m=g-1;v<m;v+=l){let d=ro(this,t,Jr,c,v,v+1,v);d&&e.push(d)}if(this.isLineLoop){let v=ro(this,t,Jr,c,g-1,p,g-1);v&&e.push(v)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function ro(i,t,e,n,r,s,o){let a=i.geometry.attributes.position;if(xo.fromBufferAttribute(a,r),yo.fromBufferAttribute(a,s),e.distanceSqToSegment(xo,yo,pl,vh)>n)return;pl.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(pl);if(!(l<t.near||l>t.far))return{distance:l,point:vh.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var _h=new U,xh=new U,Xi=class extends ls{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let r=0,s=e.count;r<s;r+=2)_h.fromBufferAttribute(e,r),xh.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+_h.distanceTo(xh);t.setAttribute("lineDistance",new $t(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ni=class extends $e{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Nt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},yh=new oe,Sl=new ei,so=new yi,oo=new U,qi=class extends Ie{constructor(t=new he,e=new ni){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),so.copy(n.boundingSphere),so.applyMatrix4(r),so.radius+=s,t.ray.intersectsSphere(so)===!1)return;yh.copy(r).invert(),Sl.copy(t.ray).applyMatrix4(yh);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){let f=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let g=f,v=p;g<v;g++){let m=l.getX(g);oo.fromBufferAttribute(h,m),Mh(oo,m,c,r,t,e,this)}}else{let f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=f,v=p;g<v;g++)oo.fromBufferAttribute(h,g),Mh(oo,g,c,r,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Mh(i,t,e,n,r,s,o){let a=Sl.distanceSqToPoint(i);if(a<e){let c=new U;Sl.closestPointToPoint(i,c),c.applyMatrix4(n);let l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var cs=class extends Ze{constructor(t,e,n=Ai,r,s,o,a=Ge,c=Ge,l,u=Sr,h=1){if(u!==Sr&&u!==Nr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:h};super(f,r,s,o,a,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Tr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},hs=class extends Ze{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var Ir=class i extends he{constructor(t=1,e=1,n=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};let l=this;r=Math.floor(r),s=Math.floor(s);let u=[],h=[],f=[],p=[],g=0,v=[],m=n/2,d=0;R(),o===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new $t(h,3)),this.setAttribute("normal",new $t(f,3)),this.setAttribute("uv",new $t(p,2));function R(){let S=new U,P=new U,T=0,D=(e-t)/n;for(let L=0;L<=s;L++){let x=[],y=L/s,I=y*(e-t)+t;for(let N=0;N<=r;N++){let q=N/r,Y=q*c+a,J=Math.sin(Y),V=Math.cos(Y);P.x=I*J,P.y=-y*n+m,P.z=I*V,h.push(P.x,P.y,P.z),S.set(J,D,V).normalize(),f.push(S.x,S.y,S.z),p.push(q,1-y),x.push(g++)}v.push(x)}for(let L=0;L<r;L++)for(let x=0;x<s;x++){let y=v[x][L],I=v[x+1][L],N=v[x+1][L+1],q=v[x][L+1];(t>0||x!==0)&&(u.push(y,I,q),T+=3),(e>0||x!==s-1)&&(u.push(I,N,q),T+=3)}l.addGroup(d,T,0),d+=T}function E(S){let P=g,T=new kt,D=new U,L=0,x=S===!0?t:e,y=S===!0?1:-1;for(let N=1;N<=r;N++)h.push(0,m*y,0),f.push(0,y,0),p.push(.5,.5),g++;let I=g;for(let N=0;N<=r;N++){let Y=N/r*c+a,J=Math.cos(Y),V=Math.sin(Y);D.x=x*V,D.y=m*y,D.z=x*J,h.push(D.x,D.y,D.z),f.push(0,y,0),T.x=J*.5+.5,T.y=V*.5*y+.5,p.push(T.x,T.y),g++}for(let N=0;N<r;N++){let q=P+N,Y=I+N;S===!0?u.push(Y,Y+1,q):u.push(Y+1,Y,q),L+=3}l.addGroup(d,L,S===!0?1:2),d+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Mo=class i extends Ir{constructor(t=1,e=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var us=class i extends he{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};let s=t/2,o=e/2,a=Math.floor(n),c=Math.floor(r),l=a+1,u=c+1,h=t/a,f=e/c,p=[],g=[],v=[],m=[];for(let d=0;d<u;d++){let R=d*f-o;for(let E=0;E<l;E++){let S=E*h-s;g.push(S,-R,0),v.push(0,0,1),m.push(E/a),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let R=0;R<a;R++){let E=R+l*d,S=R+l*(d+1),P=R+1+l*(d+1),T=R+1+l*d;p.push(E,S,T),p.push(S,P,T)}this.setIndex(p),this.setAttribute("position",new $t(g,3)),this.setAttribute("normal",new $t(v,3)),this.setAttribute("uv",new $t(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var bi=class extends $e{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Nt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ta,this.normalScale=new kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var On=class extends $e{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Nt(16777215),this.specular=new Nt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ta,this.normalScale=new kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=Vo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var So=class extends $e{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=iu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},bo=class extends $e{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ao(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function wd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Yi=class{constructor(t,e,n,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,r=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<r)){for(let a=n+2;;){if(r===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=e[++n],t<r)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(r=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=t*r;for(let o=0;o!==r;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},wo=class extends Yi{constructor(t,e,n,r){super(t,e,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:vl,endingEnd:vl}}intervalChanged_(t,e,n){let r=this.parameterPositions,s=t-2,o=t+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case _l:s=t,a=2*e-n;break;case xl:s=r.length-2,a=e+r[s]-r[s+1];break;default:s=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case _l:o=t,c=2*n-e;break;case xl:o=1,c=n+r[1]-r[0];break;default:o=t-1,c=e}let l=(n-e)*.5,u=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-e)/(r-e),v=g*g,m=v*g,d=-f*m+2*f*v-f*g,R=(1+f)*m+(-1.5-2*f)*v+(-.5+f)*g+1,E=(-1-p)*m+(1.5+p)*v+.5*g,S=p*m-p*v;for(let P=0;P!==a;++P)s[P]=d*o[u+P]+R*o[l+P]+E*o[c+P]+S*o[h+P];return s}},Eo=class extends Yi{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=(n-e)/(r-e),h=1-u;for(let f=0;f!==a;++f)s[f]=o[l+f]*h+o[c+f]*u;return s}},To=class extends Yi{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t){return this.copySampleValue_(t-1)}},rn=class{constructor(t,e,n,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ao(e,this.TimeBufferType),this.values=ao(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ao(t.times,Array),values:ao(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(n.interpolation=r)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new To(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Eo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new wo(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Qr:e=this.InterpolantFactoryMethodDiscrete;break;case fo:e=this.InterpolantFactoryMethodLinear;break;case co:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qr;case this.InterpolantFactoryMethodLinear:return fo;case this.InterpolantFactoryMethodSmooth:return co}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]*=t}return this}trim(t,e){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(r!==void 0&&wd(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===co,s=t.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=t[a],u=t[a+1];if(l!==u&&(a!==1||l!==t[0]))if(r)c=!0;else{let h=a*n,f=h-n,p=h+n;for(let g=0;g!==n;++g){let v=e[h+g];if(v!==e[f+g]||v!==e[p+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let h=a*n,f=o*n;for(let p=0;p!==n;++p)e[f+p]=e[h+p]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,r=new n(this.name,t,e);return r.createInterpolant=this.createInterpolant,r}};rn.prototype.ValueTypeName="";rn.prototype.TimeBufferType=Float32Array;rn.prototype.ValueBufferType=Float32Array;rn.prototype.DefaultInterpolation=fo;var wi=class extends rn{constructor(t,e,n){super(t,e,n)}};wi.prototype.ValueTypeName="bool";wi.prototype.ValueBufferType=Array;wi.prototype.DefaultInterpolation=Qr;wi.prototype.InterpolantFactoryMethodLinear=void 0;wi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ao=class extends rn{constructor(t,e,n,r){super(t,e,n,r)}};Ao.prototype.ValueTypeName="color";var Co=class extends rn{constructor(t,e,n,r){super(t,e,n,r)}};Co.prototype.ValueTypeName="number";var Ro=class extends Yi{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(r-e),l=t*a;for(let u=l+a;l!==u;l+=4)pn.slerpFlat(s,0,o,l-a,o,l,c);return s}},fs=class extends rn{constructor(t,e,n,r){super(t,e,n,r)}InterpolantFactoryMethodLinear(t){return new Ro(this.times,this.values,this.getValueSize(),t)}};fs.prototype.ValueTypeName="quaternion";fs.prototype.InterpolantFactoryMethodSmooth=void 0;var Ei=class extends rn{constructor(t,e,n){super(t,e,n)}};Ei.prototype.ValueTypeName="string";Ei.prototype.ValueBufferType=Array;Ei.prototype.DefaultInterpolation=Qr;Ei.prototype.InterpolantFactoryMethodLinear=void 0;Ei.prototype.InterpolantFactoryMethodSmooth=void 0;var Io=class extends rn{constructor(t,e,n,r){super(t,e,n,r)}};Io.prototype.ValueTypeName="vector";var Mr={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Po=class{constructor(t,e,n){let r=this,s=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){let p=l[h],g=l[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},vu=new Po,Je=class{constructor(t){this.manager=t!==void 0?t:vu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Je.DEFAULT_MATERIAL_NAME="__DEFAULT";var Kn={},bl=class extends Error{constructor(t,e){super(t),this.response=e}},ii=class extends Je{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,r){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=Mr.get(`file:${t}`);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(Kn[t]!==void 0){Kn[t].push({onLoad:e,onProgress:n,onError:r});return}Kn[t]=[],Kn[t].push({onLoad:e,onProgress:n,onError:r});let o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let u=Kn[t],h=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),p=f?parseInt(f):0,g=p!==0,v=0,m=new ReadableStream({start(d){R();function R(){h.read().then(({done:E,value:S})=>{if(E)d.close();else{v+=S.byteLength;let P=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:p});for(let T=0,D=u.length;T<D;T++){let L=u[T];L.onProgress&&L.onProgress(P)}d.enqueue(S),R()}},E=>{d.error(E)})}}});return new Response(m)}else throw new bl(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a==="")return l.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(f);return l.arrayBuffer().then(g=>p.decode(g))}}}).then(l=>{Mr.add(`file:${t}`,l);let u=Kn[t];delete Kn[t];for(let h=0,f=u.length;h<f;h++){let p=u[h];p.onLoad&&p.onLoad(l)}}).catch(l=>{let u=Kn[t];if(u===void 0)throw this.manager.itemError(t),l;delete Kn[t];for(let h=0,f=u.length;h<f;h++){let p=u[h];p.onError&&p.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var _r=new WeakMap,Do=class extends Je{constructor(t){super(t)}load(t,e,n,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=this,o=Mr.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0);else{let h=_r.get(o);h===void 0&&(h=[],_r.set(o,h)),h.push({onLoad:e,onError:r})}return o}let a=wr("img");function c(){u(),e&&e(this);let h=_r.get(this)||[];for(let f=0;f<h.length;f++){let p=h[f];p.onLoad&&p.onLoad(this)}_r.delete(this),s.manager.itemEnd(t)}function l(h){u(),r&&r(h),Mr.remove(`image:${t}`);let f=_r.get(this)||[];for(let p=0;p<f.length;p++){let g=f[p];g.onError&&g.onError(h)}_r.delete(this),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Mr.add(`image:${t}`,a),s.manager.itemStart(t),a.src=t,a}};var ds=class extends Je{constructor(t){super(t)}load(t,e,n,r){let s=new Ze,o=new Do(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,r),s}},ps=class extends Ie{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Nt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}};var ml=new oe,Sh=new U,bh=new U,wl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new kt(512,512),this.mapType=An,this.map=null,this.mapPass=null,this.matrix=new oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rr,this._frameExtents=new kt(1,1),this._viewportCount=1,this._viewports=[new _e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Sh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Sh),bh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(bh),e.updateMatrixWorld(),ml.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ml,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ml)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var ms=class extends ss{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-t,o=n+t,a=r+e,c=r-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},El=class extends wl{constructor(){super(new ms(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Pr=class extends ps{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.shadow=new El}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},gs=class extends ps{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Lo=class extends Ne{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Zl="\\[\\]\\.:\\/",Ed=new RegExp("["+Zl+"]","g"),$l="[^"+Zl+"]",Td="[^"+Zl.replace("\\.","")+"]",Ad=/((?:WC+[\/:])*)/.source.replace("WC",$l),Cd=/(WCOD+)?/.source.replace("WCOD",Td),Rd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",$l),Id=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",$l),Pd=new RegExp("^"+Ad+Cd+Rd+Id+"$"),Dd=["material","materials","bones","map"],Tl=class{constructor(t,e,n){let r=n||fe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},fe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Ed,"")}static parseTrackName(t){let e=Pd.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);Dd.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},r=n(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)t[e++]=n[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,r=e.propertyName,s=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===l){l=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[r];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};fe.Composite=Tl;fe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};fe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};fe.prototype.GetterByBindingType=[fe.prototype._getValue_direct,fe.prototype._getValue_array,fe.prototype._getValue_arrayElement,fe.prototype._getValue_toArray];fe.prototype.SetterByBindingTypeAndVersioning=[[fe.prototype._setValue_direct,fe.prototype._setValue_direct_setNeedsUpdate,fe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[fe.prototype._setValue_array,fe.prototype._setValue_array_setNeedsUpdate,fe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[fe.prototype._setValue_arrayElement,fe.prototype._setValue_arrayElement_setNeedsUpdate,fe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[fe.prototype._setValue_fromArray,fe.prototype._setValue_fromArray_setNeedsUpdate,fe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var x_=new Float32Array(1);var wh=new oe,vs=class{constructor(t,e,n=0,r=1/0){this.ray=new ei(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new Ar,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return wh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(wh),this}intersectObject(t,e=!0,n=[]){return Al(t,this,n,e),n.sort(Eh),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)Al(t[r],this,n,e);return n.sort(Eh),n}};function Eh(i,t){return i.distance-t.distance}function Al(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let o=0,a=s.length;o<a;o++)Al(s[o],t,e,!0)}}var Dr=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Zt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Zt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var _s=class extends Xi{constructor(t=10,e=10,n=4473924,r=8947848){n=new Nt(n),r=new Nt(r);let s=e/2,o=t/e,a=t/2,c=[],l=[];for(let f=0,p=0,g=-a;f<=e;f++,g+=o){c.push(-a,0,g,a,0,g),c.push(g,0,-a,g,0,a);let v=f===s?n:r;v.toArray(l,p),p+=3,v.toArray(l,p),p+=3,v.toArray(l,p),p+=3,v.toArray(l,p),p+=3}let u=new he;u.setAttribute("position",new $t(c,3)),u.setAttribute("color",new $t(l,3));let h=new Nn({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};var Th=new U,lo,gl,xs=class extends Ie{constructor(t=new U(0,0,1),e=new U(0,0,0),n=1,r=16776960,s=n*.2,o=s*.2){super(),this.type="ArrowHelper",lo===void 0&&(lo=new he,lo.setAttribute("position",new $t([0,0,0,0,1,0],3)),gl=new Mo(.5,1,5,1),gl.translate(0,-.5,0)),this.position.copy(e),this.line=new ls(lo,new Nn({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new de(gl,new Mi({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(n,s,o)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{Th.set(t.z,0,-t.x).normalize();let e=Math.acos(t.y);this.quaternion.setFromAxisAngle(Th,e)}}setLength(t,e=t*.2,n=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(n,e,n),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}};var ys=class extends Ln{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function Jl(i,t,e,n){let r=Ld(n);switch(e){case Bl:return i*t;case kl:return i*t/r.components*r.byteLength;case $o:return i*t/r.components*r.byteLength;case Vl:return i*t*2/r.components*r.byteLength;case Jo:return i*t*2/r.components*r.byteLength;case zl:return i*t*3/r.components*r.byteLength;case gn:return i*t*4/r.components*r.byteLength;case Ko:return i*t*4/r.components*r.byteLength;case bs:case ws:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Es:case Ts:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Qo:case ea:return Math.max(i,16)*Math.max(t,8)/4;case jo:case ta:return Math.max(i,8)*Math.max(t,8)/2;case na:case ia:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ra:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case sa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case oa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case aa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case la:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ca:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ha:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ua:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case fa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case da:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case pa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ma:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ga:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case va:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case _a:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case xa:case ya:case Ma:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Sa:case ba:return Math.ceil(i/4)*Math.ceil(t/4)*8;case wa:case Ea:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ld(i){switch(i){case An:case Ul:return{byteLength:1,components:1};case Lr:case Fl:case Ur:return{byteLength:2,components:1};case Yo:case Zo:return{byteLength:2,components:4};case Ai:case qo:case zn:return{byteLength:4,components:1};case Nl:case Ol:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Vu(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function Fd(i){let t=new WeakMap;function e(a,c){let l=a.array,u=a.usage,h=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,u),a.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){let u=c.array,h=c.updateRanges;if(i.bindBuffer(l,a),h.length===0)i.bufferSubData(l,0,u);else{h.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<h.length;p++){let g=h[f],v=h[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,h[f]=v)}h.length=f+1;for(let p=0,g=h.length;p<g;p++){let v=h[p];i.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var Nd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Od=`#ifdef USE_ALPHAHASH
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
#endif`,Bd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hd=`#ifdef USE_AOMAP
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
#endif`,Gd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wd=`#ifdef USE_BATCHING
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
#endif`,Xd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Yd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$d=`#ifdef USE_IRIDESCENCE
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
#endif`,Jd=`#ifdef USE_BUMPMAP
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
#endif`,Kd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ep=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,np=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ip=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,rp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,sp=`#define PI 3.141592653589793
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
} // validated`,op=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ap=`vec3 transformedNormal = objectNormal;
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
#endif`,lp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,up=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fp="gl_FragColor = linearToOutputTexel( gl_FragColor );",dp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,pp=`#ifdef USE_ENVMAP
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
#endif`,mp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gp=`#ifdef USE_ENVMAP
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
#endif`,vp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_p=`#ifdef USE_ENVMAP
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
#endif`,xp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Mp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Sp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bp=`#ifdef USE_GRADIENTMAP
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
}`,wp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ep=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Tp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ap=`uniform bool receiveShadow;
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
#endif`,Cp=`#ifdef USE_ENVMAP
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
#endif`,Rp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ip=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Pp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lp=`PhysicalMaterial material;
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
#endif`,Up=`struct PhysicalMaterial {
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
}`,Fp=`
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
#endif`,Np=`#if defined( RE_IndirectDiffuse )
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
#endif`,Op=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Bp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Hp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Xp=`#if defined( USE_POINTS_UV )
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
#endif`,qp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$p=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kp=`#ifdef USE_MORPHTARGETS
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
#endif`,jp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,tm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,em=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,im=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rm=`#ifdef USE_NORMALMAP
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
#endif`,sm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,om=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,am=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,um=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_m=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ym=`float getShadowMask() {
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
}`,Mm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sm=`#ifdef USE_SKINNING
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
#endif`,bm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wm=`#ifdef USE_SKINNING
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
#endif`,Em=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Tm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Am=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rm=`#ifdef USE_TRANSMISSION
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
#endif`,Im=`#ifdef USE_TRANSMISSION
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
#endif`,Pm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Um=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Fm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Nm=`uniform sampler2D t2D;
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
}`,Om=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,zm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,km=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vm=`#include <common>
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
}`,Hm=`#if DEPTH_PACKING == 3200
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
}`,Gm=`#define DISTANCE
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
}`,Wm=`#define DISTANCE
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
}`,Xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ym=`uniform float scale;
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
}`,Zm=`uniform vec3 diffuse;
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
}`,$m=`#include <common>
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
}`,Jm=`uniform vec3 diffuse;
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
}`,Km=`#define LAMBERT
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
}`,jm=`#define LAMBERT
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
}`,Qm=`#define MATCAP
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
}`,tg=`#define MATCAP
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
}`,eg=`#define NORMAL
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
}`,ng=`#define NORMAL
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
}`,ig=`#define PHONG
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
}`,rg=`#define PHONG
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
}`,sg=`#define STANDARD
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
}`,og=`#define STANDARD
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
}`,ag=`#define TOON
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
}`,lg=`#define TOON
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
}`,cg=`uniform float size;
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
}`,hg=`uniform vec3 diffuse;
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
}`,ug=`#include <common>
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
}`,fg=`uniform vec3 color;
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
}`,dg=`uniform float rotation;
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
}`,pg=`uniform vec3 diffuse;
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
}`,qt={alphahash_fragment:Nd,alphahash_pars_fragment:Od,alphamap_fragment:Bd,alphamap_pars_fragment:zd,alphatest_fragment:kd,alphatest_pars_fragment:Vd,aomap_fragment:Hd,aomap_pars_fragment:Gd,batching_pars_vertex:Wd,batching_vertex:Xd,begin_vertex:qd,beginnormal_vertex:Yd,bsdfs:Zd,iridescence_fragment:$d,bumpmap_pars_fragment:Jd,clipping_planes_fragment:Kd,clipping_planes_pars_fragment:jd,clipping_planes_pars_vertex:Qd,clipping_planes_vertex:tp,color_fragment:ep,color_pars_fragment:np,color_pars_vertex:ip,color_vertex:rp,common:sp,cube_uv_reflection_fragment:op,defaultnormal_vertex:ap,displacementmap_pars_vertex:lp,displacementmap_vertex:cp,emissivemap_fragment:hp,emissivemap_pars_fragment:up,colorspace_fragment:fp,colorspace_pars_fragment:dp,envmap_fragment:pp,envmap_common_pars_fragment:mp,envmap_pars_fragment:gp,envmap_pars_vertex:vp,envmap_physical_pars_fragment:Cp,envmap_vertex:_p,fog_vertex:xp,fog_pars_vertex:yp,fog_fragment:Mp,fog_pars_fragment:Sp,gradientmap_pars_fragment:bp,lightmap_pars_fragment:wp,lights_lambert_fragment:Ep,lights_lambert_pars_fragment:Tp,lights_pars_begin:Ap,lights_toon_fragment:Rp,lights_toon_pars_fragment:Ip,lights_phong_fragment:Pp,lights_phong_pars_fragment:Dp,lights_physical_fragment:Lp,lights_physical_pars_fragment:Up,lights_fragment_begin:Fp,lights_fragment_maps:Np,lights_fragment_end:Op,logdepthbuf_fragment:Bp,logdepthbuf_pars_fragment:zp,logdepthbuf_pars_vertex:kp,logdepthbuf_vertex:Vp,map_fragment:Hp,map_pars_fragment:Gp,map_particle_fragment:Wp,map_particle_pars_fragment:Xp,metalnessmap_fragment:qp,metalnessmap_pars_fragment:Yp,morphinstance_vertex:Zp,morphcolor_vertex:$p,morphnormal_vertex:Jp,morphtarget_pars_vertex:Kp,morphtarget_vertex:jp,normal_fragment_begin:Qp,normal_fragment_maps:tm,normal_pars_fragment:em,normal_pars_vertex:nm,normal_vertex:im,normalmap_pars_fragment:rm,clearcoat_normal_fragment_begin:sm,clearcoat_normal_fragment_maps:om,clearcoat_pars_fragment:am,iridescence_pars_fragment:lm,opaque_fragment:cm,packing:hm,premultiplied_alpha_fragment:um,project_vertex:fm,dithering_fragment:dm,dithering_pars_fragment:pm,roughnessmap_fragment:mm,roughnessmap_pars_fragment:gm,shadowmap_pars_fragment:vm,shadowmap_pars_vertex:_m,shadowmap_vertex:xm,shadowmask_pars_fragment:ym,skinbase_vertex:Mm,skinning_pars_vertex:Sm,skinning_vertex:bm,skinnormal_vertex:wm,specularmap_fragment:Em,specularmap_pars_fragment:Tm,tonemapping_fragment:Am,tonemapping_pars_fragment:Cm,transmission_fragment:Rm,transmission_pars_fragment:Im,uv_pars_fragment:Pm,uv_pars_vertex:Dm,uv_vertex:Lm,worldpos_vertex:Um,background_vert:Fm,background_frag:Nm,backgroundCube_vert:Om,backgroundCube_frag:Bm,cube_vert:zm,cube_frag:km,depth_vert:Vm,depth_frag:Hm,distanceRGBA_vert:Gm,distanceRGBA_frag:Wm,equirect_vert:Xm,equirect_frag:qm,linedashed_vert:Ym,linedashed_frag:Zm,meshbasic_vert:$m,meshbasic_frag:Jm,meshlambert_vert:Km,meshlambert_frag:jm,meshmatcap_vert:Qm,meshmatcap_frag:tg,meshnormal_vert:eg,meshnormal_frag:ng,meshphong_vert:ig,meshphong_frag:rg,meshphysical_vert:sg,meshphysical_frag:og,meshtoon_vert:ag,meshtoon_frag:lg,points_vert:cg,points_frag:hg,shadow_vert:ug,shadow_frag:fg,sprite_vert:dg,sprite_frag:pg},gt={common:{diffuse:{value:new Nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},envMapRotation:{value:new Wt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new Nt(16777215)},opacity:{value:1},center:{value:new kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},kn={basic:{uniforms:Be([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:Be([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Nt(0)}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:Be([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Nt(0)},specular:{value:new Nt(1118481)},shininess:{value:30}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:Be([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new Nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:Be([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new Nt(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:Be([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:Be([gt.points,gt.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:Be([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:Be([gt.common,gt.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:Be([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:Be([gt.sprite,gt.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wt}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distanceRGBA:{uniforms:Be([gt.common,gt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distanceRGBA_vert,fragmentShader:qt.distanceRGBA_frag},shadow:{uniforms:Be([gt.lights,gt.fog,{color:{value:new Nt(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};kn.physical={uniforms:Be([kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new Nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new Nt(0)},specularColor:{value:new Nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};var Aa={r:0,b:0,g:0},Ki=new mn,mg=new oe;function gg(i,t,e,n,r,s,o){let a=new Nt(0),c=s===!0?0:1,l,u,h=null,f=0,p=null;function g(E){let S=E.isScene===!0?E.background:null;return S&&S.isTexture&&(S=(E.backgroundBlurriness>0?e:t).get(S)),S}function v(E){let S=!1,P=g(E);P===null?d(a,c):P&&P.isColor&&(d(P,1),S=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,S){let P=g(S);P&&(P.isCubeTexture||P.mapping===Ms)?(u===void 0&&(u=new de(new Si(1,1,1),new wn({name:"BackgroundCubeMaterial",uniforms:Ji(kn.backgroundCube.uniforms),vertexShader:kn.backgroundCube.vertexShader,fragmentShader:kn.backgroundCube.fragmentShader,side:We,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,D,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Ki.copy(S.backgroundRotation),Ki.x*=-1,Ki.y*=-1,Ki.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Ki.y*=-1,Ki.z*=-1),u.material.uniforms.envMap.value=P,u.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(mg.makeRotationFromEuler(Ki)),u.material.toneMapped=Qt.getTransfer(P.colorSpace)!==re,(h!==P||f!==P.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=P,f=P.version,p=i.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):P&&P.isTexture&&(l===void 0&&(l=new de(new us(2,2),new wn({name:"BackgroundMaterial",uniforms:Ji(kn.background.uniforms),vertexShader:kn.background.vertexShader,fragmentShader:kn.background.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=P,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=Qt.getTransfer(P.colorSpace)!==re,P.matrixAutoUpdate===!0&&P.updateMatrix(),l.material.uniforms.uvTransform.value.copy(P.matrix),(h!==P||f!==P.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,h=P,f=P.version,p=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function d(E,S){E.getRGB(Aa,Yl(i)),n.buffers.color.setClear(Aa.r,Aa.g,Aa.b,S,o)}function R(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,S=1){a.set(E),c=S,d(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,d(a,c)},render:v,addToRenderList:m,dispose:R}}function vg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null),s=r,o=!1;function a(y,I,N,q,Y){let J=!1,V=h(q,N,I);s!==V&&(s=V,l(s.object)),J=p(y,q,N,Y),J&&g(y,q,N,Y),Y!==null&&t.update(Y,i.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,S(y,I,N,q),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function c(){return i.createVertexArray()}function l(y){return i.bindVertexArray(y)}function u(y){return i.deleteVertexArray(y)}function h(y,I,N){let q=N.wireframe===!0,Y=n[y.id];Y===void 0&&(Y={},n[y.id]=Y);let J=Y[I.id];J===void 0&&(J={},Y[I.id]=J);let V=J[q];return V===void 0&&(V=f(c()),J[q]=V),V}function f(y){let I=[],N=[],q=[];for(let Y=0;Y<e;Y++)I[Y]=0,N[Y]=0,q[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:N,attributeDivisors:q,object:y,attributes:{},index:null}}function p(y,I,N,q){let Y=s.attributes,J=I.attributes,V=0,tt=N.getAttributes();for(let G in tt)if(tt[G].location>=0){let mt=Y[G],xt=J[G];if(xt===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(xt=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(xt=y.instanceColor)),mt===void 0||mt.attribute!==xt||xt&&mt.data!==xt.data)return!0;V++}return s.attributesNum!==V||s.index!==q}function g(y,I,N,q){let Y={},J=I.attributes,V=0,tt=N.getAttributes();for(let G in tt)if(tt[G].location>=0){let mt=J[G];mt===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(mt=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(mt=y.instanceColor));let xt={};xt.attribute=mt,mt&&mt.data&&(xt.data=mt.data),Y[G]=xt,V++}s.attributes=Y,s.attributesNum=V,s.index=q}function v(){let y=s.newAttributes;for(let I=0,N=y.length;I<N;I++)y[I]=0}function m(y){d(y,0)}function d(y,I){let N=s.newAttributes,q=s.enabledAttributes,Y=s.attributeDivisors;N[y]=1,q[y]===0&&(i.enableVertexAttribArray(y),q[y]=1),Y[y]!==I&&(i.vertexAttribDivisor(y,I),Y[y]=I)}function R(){let y=s.newAttributes,I=s.enabledAttributes;for(let N=0,q=I.length;N<q;N++)I[N]!==y[N]&&(i.disableVertexAttribArray(N),I[N]=0)}function E(y,I,N,q,Y,J,V){V===!0?i.vertexAttribIPointer(y,I,N,Y,J):i.vertexAttribPointer(y,I,N,q,Y,J)}function S(y,I,N,q){v();let Y=q.attributes,J=N.getAttributes(),V=I.defaultAttributeValues;for(let tt in J){let G=J[tt];if(G.location>=0){let ot=Y[tt];if(ot===void 0&&(tt==="instanceMatrix"&&y.instanceMatrix&&(ot=y.instanceMatrix),tt==="instanceColor"&&y.instanceColor&&(ot=y.instanceColor)),ot!==void 0){let mt=ot.normalized,xt=ot.itemSize,Lt=t.get(ot);if(Lt===void 0)continue;let Ot=Lt.buffer,Ht=Lt.type,Et=Lt.bytesPerElement,C=Ht===i.INT||Ht===i.UNSIGNED_INT||ot.gpuType===qo;if(ot.isInterleavedBufferAttribute){let A=ot.data,O=A.stride,W=ot.offset;if(A.isInstancedInterleavedBuffer){for(let H=0;H<G.locationSize;H++)d(G.location+H,A.meshPerAttribute);y.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=A.meshPerAttribute*A.count)}else for(let H=0;H<G.locationSize;H++)m(G.location+H);i.bindBuffer(i.ARRAY_BUFFER,Ot);for(let H=0;H<G.locationSize;H++)E(G.location+H,xt/G.locationSize,Ht,mt,O*Et,(W+xt/G.locationSize*H)*Et,C)}else{if(ot.isInstancedBufferAttribute){for(let A=0;A<G.locationSize;A++)d(G.location+A,ot.meshPerAttribute);y.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let A=0;A<G.locationSize;A++)m(G.location+A);i.bindBuffer(i.ARRAY_BUFFER,Ot);for(let A=0;A<G.locationSize;A++)E(G.location+A,xt/G.locationSize,Ht,mt,xt*Et,xt/G.locationSize*A*Et,C)}}else if(V!==void 0){let mt=V[tt];if(mt!==void 0)switch(mt.length){case 2:i.vertexAttrib2fv(G.location,mt);break;case 3:i.vertexAttrib3fv(G.location,mt);break;case 4:i.vertexAttrib4fv(G.location,mt);break;default:i.vertexAttrib1fv(G.location,mt)}}}}R()}function P(){L();for(let y in n){let I=n[y];for(let N in I){let q=I[N];for(let Y in q)u(q[Y].object),delete q[Y];delete I[N]}delete n[y]}}function T(y){if(n[y.id]===void 0)return;let I=n[y.id];for(let N in I){let q=I[N];for(let Y in q)u(q[Y].object),delete q[Y];delete I[N]}delete n[y.id]}function D(y){for(let I in n){let N=n[I];if(N[y.id]===void 0)continue;let q=N[y.id];for(let Y in q)u(q[Y].object),delete q[Y];delete N[y.id]}}function L(){x(),o=!0,s!==r&&(s=r,l(s.object))}function x(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:L,resetDefaultState:x,dispose:P,releaseStatesOfGeometry:T,releaseStatesOfProgram:D,initAttributes:v,enableAttribute:m,disableUnusedAttributes:R}}function _g(i,t,e){let n;function r(l){n=l}function s(l,u){i.drawArrays(n,l,u),e.update(u,n,1)}function o(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),e.update(u,n,h))}function a(l,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];e.update(p,n,1)}function c(l,u,h,f){if(h===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,u,0,f,0,h);let g=0;for(let v=0;v<h;v++)g+=u[v]*f[v];e.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function xg(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let D=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(D){return!(D!==gn&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){let L=D===Ur&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(D!==An&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==zn&&!L)}function c(D){if(D==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let h=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),R=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:R,maxVaryings:E,maxFragmentUniforms:S,vertexTextures:P,maxSamples:T}}function yg(i){let t=this,e=null,n=0,r=!1,s=!1,o=new He,a=new Wt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let p=h.length!==0||f||n!==0||r;return r=f,n=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,p){let g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,d=i.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{let R=s?0:n,E=R*4,S=d.clippingState||null;c.value=S,S=u(g,f,E,p);for(let P=0;P!==E;++P)S[P]=e[P];d.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=R}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,p,g){let v=h!==null?h.length:0,m=null;if(v!==0){if(m=c.value,g!==!0||m===null){let d=p+v*4,R=f.matrixWorldInverse;a.getNormalMatrix(R),(m===null||m.length<d)&&(m=new Float32Array(d));for(let E=0,S=p;E!==v;++E,S+=4)o.copy(h[E]).applyMatrix4(R,a),o.normal.toArray(m,S),m[S+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function Mg(i){let t=new WeakMap;function e(o,a){return a===Go?o.mapping=Zi:a===Wo&&(o.mapping=$i),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Go||a===Wo)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new _o(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",r),e(l.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}var zr=4,_u=[.125,.215,.35,.446,.526,.582],tr=20,Kl=new ms,xu=new Nt,jl=null,Ql=0,tc=0,ec=!1,Qi=(1+Math.sqrt(5))/2,Br=1/Qi,yu=[new U(-Qi,Br,0),new U(Qi,Br,0),new U(-Br,0,Qi),new U(Br,0,Qi),new U(0,Qi,-Br),new U(0,Qi,Br),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],Sg=new U,Ia=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100,s={}){let{size:o=256,position:a=Sg}=s;jl=this._renderer.getRenderTarget(),Ql=this._renderer.getActiveCubeFace(),tc=this._renderer.getActiveMipmapLevel(),ec=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,r,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Su(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(jl,Ql,tc),this._renderer.xr.enabled=ec,t.scissorTest=!1,Ca(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Zi||t.mapping===$i?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),jl=this._renderer.getRenderTarget(),Ql=this._renderer.getActiveCubeFace(),tc=this._renderer.getActiveMipmapLevel(),ec=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Oe,minFilter:Oe,generateMipmaps:!1,type:Ur,format:gn,colorSpace:Wi,depthBuffer:!1},r=Mu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mu(t,e,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bg(s)),this._blurMaterial=wg(s,t,e)}return r}_compileMaterial(t){let e=new de(this._lodPlanes[0],t);this._renderer.compile(e,Kl)}_sceneToCubeUV(t,e,n,r,s){let c=new Ne(90,1,e,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(xu),h.toneMapping=si,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null));let v=new Mi({name:"PMREM.Background",side:We,depthWrite:!1,depthTest:!1}),m=new de(new Si,v),d=!1,R=t.background;R?R.isColor&&(v.color.copy(R),t.background=null,d=!0):(v.color.copy(xu),d=!0);for(let E=0;E<6;E++){let S=E%3;S===0?(c.up.set(0,l[E],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[E],s.y,s.z)):S===1?(c.up.set(0,0,l[E]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[E],s.z)):(c.up.set(0,l[E],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[E]));let P=this._cubeSize;Ca(r,S*P,E>2?P:0,P,P),h.setRenderTarget(r),d&&h.render(m,c),h.render(t,c)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=p,h.autoClear=f,t.background=R}_textureToCubeUV(t,e){let n=this._renderer,r=t.mapping===Zi||t.mapping===$i;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=bu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Su());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new de(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;let c=this._cubeSize;Ca(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Kl)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=yu[(r-s-1)%yu.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,r,s){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new de(this._lodPlanes[r],l),f=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*tr-1),v=s/g,m=isFinite(s)?1+Math.floor(u*v):tr;m>tr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${tr}`);let d=[],R=0;for(let D=0;D<tr;++D){let L=D/v,x=Math.exp(-L*L/2);d.push(x),D===0?R+=x:D<m&&(R+=2*x)}for(let D=0;D<d.length;D++)d[D]=d[D]/R;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:E}=this;f.dTheta.value=g,f.mipInt.value=E-n;let S=this._sizeLods[r],P=3*S*(r>E-zr?r-E+zr:0),T=4*(this._cubeSize-S);Ca(e,P,T,3*S,2*S),c.setRenderTarget(e),c.render(h,Kl)}};function bg(i){let t=[],e=[],n=[],r=i,s=i-zr+1+_u.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);e.push(a);let c=1/a;o>i-zr?c=_u[o-i+zr-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,v=3,m=2,d=1,R=new Float32Array(v*g*p),E=new Float32Array(m*g*p),S=new Float32Array(d*g*p);for(let T=0;T<p;T++){let D=T%3*2/3-1,L=T>2?0:-1,x=[D,L,0,D+2/3,L,0,D+2/3,L+1,0,D,L,0,D+2/3,L+1,0,D,L+1,0];R.set(x,v*g*T),E.set(f,m*g*T);let y=[T,T,T,T,T,T];S.set(y,d*g*T)}let P=new he;P.setAttribute("position",new be(R,v)),P.setAttribute("uv",new be(E,m)),P.setAttribute("faceIndex",new be(S,d)),t.push(P),r>zr&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Mu(i,t,e){let n=new Un(i,t,e);return n.texture.mapping=Ms,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ca(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function wg(i,t,e){let n=new Float32Array(tr),r=new U(0,1,0);return new wn({name:"SphericalGaussianBlur",defines:{n:tr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:uc(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Su(){return new wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uc(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function bu(){return new wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function uc(){return`

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
	`}function Eg(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Go||c===Wo,u=c===Zi||c===$i;if(l||u){let h=t.get(a),f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Ia(i)),h=l?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{let p=a.image;return l&&p&&p.height>0||u&&p&&r(p)?(e===null&&(e=new Ia(i)),h=l?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let c=0,l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){let c=a.target;c.removeEventListener("dispose",s);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Tg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let r=e(n);return r===null&&Er("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Ag(i,t,e,n){let r={},s=new WeakMap;function o(h){let f=h.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];let p=s.get(f);p&&(t.remove(p),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,e.memory.geometries++),f}function c(h){let f=h.attributes;for(let p in f)t.update(f[p],i.ARRAY_BUFFER)}function l(h){let f=[],p=h.index,g=h.attributes.position,v=0;if(p!==null){let R=p.array;v=p.version;for(let E=0,S=R.length;E<S;E+=3){let P=R[E+0],T=R[E+1],D=R[E+2];f.push(P,T,T,D,D,P)}}else if(g!==void 0){let R=g.array;v=g.version;for(let E=0,S=R.length/3-1;E<S;E+=3){let P=E+0,T=E+1,D=E+2;f.push(P,T,T,D,D,P)}}else return;let m=new(ql(f)?rs:is)(f,1);m.version=v;let d=s.get(h);d&&t.remove(d),s.set(h,m)}function u(h){let f=s.get(h);if(f){let p=h.index;p!==null&&f.version<p.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function Cg(i,t,e){let n;function r(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function c(f,p){i.drawElements(n,p,s,f*o),e.update(p,n,1)}function l(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,s,f*o,g),e.update(p,n,g))}function u(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];e.update(m,n,1)}function h(f,p,g,v){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)l(f[d]/o,p[d],v[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,f,0,v,0,g);let d=0;for(let R=0;R<g;R++)d+=p[R]*v[R];e.update(d,n,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Rg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function Ig(i,t,e){let n=new WeakMap,r=new _e;function s(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=n.get(a);if(f===void 0||f.count!==h){let x=function(){D.dispose(),n.delete(a),a.removeEventListener("dispose",x)};f!==void 0&&f.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],R=a.morphAttributes.color||[],E=0;p===!0&&(E=1),g===!0&&(E=2),v===!0&&(E=3);let S=a.attributes.position.count*E,P=1;S>t.maxTextureSize&&(P=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let T=new Float32Array(S*P*4*h),D=new ns(T,S,P,h);D.type=zn,D.needsUpdate=!0;let L=E*4;for(let y=0;y<h;y++){let I=m[y],N=d[y],q=R[y],Y=S*P*4*y;for(let J=0;J<I.count;J++){let V=J*L;p===!0&&(r.fromBufferAttribute(I,J),T[Y+V+0]=r.x,T[Y+V+1]=r.y,T[Y+V+2]=r.z,T[Y+V+3]=0),g===!0&&(r.fromBufferAttribute(N,J),T[Y+V+4]=r.x,T[Y+V+5]=r.y,T[Y+V+6]=r.z,T[Y+V+7]=0),v===!0&&(r.fromBufferAttribute(q,J),T[Y+V+8]=r.x,T[Y+V+9]=r.y,T[Y+V+10]=r.z,T[Y+V+11]=q.itemSize===4?r.w:1)}}f={count:h,texture:D,size:new kt(S,P)},n.set(a,f),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let p=0;for(let v=0;v<l.length;v++)p+=l[v];let g=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function Pg(i,t,e,n){let r=new WeakMap;function s(c){let l=n.render.frame,u=c.geometry,h=t.get(c,u);if(r.get(h)!==l&&(t.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return h}function o(){r=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}var Hu=new Ze,wu=new cs(1,1),Gu=new ns,Wu=new go,Xu=new os,Eu=[],Tu=[],Au=new Float32Array(16),Cu=new Float32Array(9),Ru=new Float32Array(4);function Vr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let r=t*e,s=Eu[r];if(s===void 0&&(s=new Float32Array(r),Eu[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function Ee(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Te(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Da(i,t){let e=Tu[t];e===void 0&&(e=new Int32Array(t),Tu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Dg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Lg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2fv(this.addr,t),Te(e,t)}}function Ug(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ee(e,t))return;i.uniform3fv(this.addr,t),Te(e,t)}}function Fg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4fv(this.addr,t),Te(e,t)}}function Ng(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,n))return;Ru.set(n),i.uniformMatrix2fv(this.addr,!1,Ru),Te(e,n)}}function Og(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,n))return;Cu.set(n),i.uniformMatrix3fv(this.addr,!1,Cu),Te(e,n)}}function Bg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,n))return;Au.set(n),i.uniformMatrix4fv(this.addr,!1,Au),Te(e,n)}}function zg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function kg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2iv(this.addr,t),Te(e,t)}}function Vg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;i.uniform3iv(this.addr,t),Te(e,t)}}function Hg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4iv(this.addr,t),Te(e,t)}}function Gg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Wg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2uiv(this.addr,t),Te(e,t)}}function Xg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;i.uniform3uiv(this.addr,t),Te(e,t)}}function qg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4uiv(this.addr,t),Te(e,t)}}function Yg(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(wu.compareFunction=Hl,s=wu):s=Hu,e.setTexture2D(t||s,r)}function Zg(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Wu,r)}function $g(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Xu,r)}function Jg(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Gu,r)}function Kg(i){switch(i){case 5126:return Dg;case 35664:return Lg;case 35665:return Ug;case 35666:return Fg;case 35674:return Ng;case 35675:return Og;case 35676:return Bg;case 5124:case 35670:return zg;case 35667:case 35671:return kg;case 35668:case 35672:return Vg;case 35669:case 35673:return Hg;case 5125:return Gg;case 36294:return Wg;case 36295:return Xg;case 36296:return qg;case 35678:case 36198:case 36298:case 36306:case 35682:return Yg;case 35679:case 36299:case 36307:return Zg;case 35680:case 36300:case 36308:case 36293:return $g;case 36289:case 36303:case 36311:case 36292:return Jg}}function jg(i,t){i.uniform1fv(this.addr,t)}function Qg(i,t){let e=Vr(t,this.size,2);i.uniform2fv(this.addr,e)}function t0(i,t){let e=Vr(t,this.size,3);i.uniform3fv(this.addr,e)}function e0(i,t){let e=Vr(t,this.size,4);i.uniform4fv(this.addr,e)}function n0(i,t){let e=Vr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function i0(i,t){let e=Vr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function r0(i,t){let e=Vr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function s0(i,t){i.uniform1iv(this.addr,t)}function o0(i,t){i.uniform2iv(this.addr,t)}function a0(i,t){i.uniform3iv(this.addr,t)}function l0(i,t){i.uniform4iv(this.addr,t)}function c0(i,t){i.uniform1uiv(this.addr,t)}function h0(i,t){i.uniform2uiv(this.addr,t)}function u0(i,t){i.uniform3uiv(this.addr,t)}function f0(i,t){i.uniform4uiv(this.addr,t)}function d0(i,t,e){let n=this.cache,r=t.length,s=Da(e,r);Ee(n,s)||(i.uniform1iv(this.addr,s),Te(n,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||Hu,s[o])}function p0(i,t,e){let n=this.cache,r=t.length,s=Da(e,r);Ee(n,s)||(i.uniform1iv(this.addr,s),Te(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Wu,s[o])}function m0(i,t,e){let n=this.cache,r=t.length,s=Da(e,r);Ee(n,s)||(i.uniform1iv(this.addr,s),Te(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||Xu,s[o])}function g0(i,t,e){let n=this.cache,r=t.length,s=Da(e,r);Ee(n,s)||(i.uniform1iv(this.addr,s),Te(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||Gu,s[o])}function v0(i){switch(i){case 5126:return jg;case 35664:return Qg;case 35665:return t0;case 35666:return e0;case 35674:return n0;case 35675:return i0;case 35676:return r0;case 5124:case 35670:return s0;case 35667:case 35671:return o0;case 35668:case 35672:return a0;case 35669:case 35673:return l0;case 5125:return c0;case 36294:return h0;case 36295:return u0;case 36296:return f0;case 35678:case 36198:case 36298:case 36306:case 35682:return d0;case 35679:case 36299:case 36307:return p0;case 35680:case 36300:case 36308:case 36293:return m0;case 36289:case 36303:case 36311:case 36292:return g0}}var ic=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Kg(e.type)}},rc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=v0(e.type)}},sc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(t,e[a.id],n)}}},nc=/(\w+)(\])?(\[|\.)?/g;function Iu(i,t){i.seq.push(t),i.map[t.id]=t}function _0(i,t,e){let n=i.name,r=n.length;for(nc.lastIndex=0;;){let s=nc.exec(n),o=nc.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Iu(e,l===void 0?new ic(a,i,t):new rc(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new sc(a),Iu(e,h)),e=h}}}var kr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);_0(s,o,this)}}setValue(t,e,n,r){let s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){let r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){let a=e[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,r)}}static seqWithValue(t,e){let n=[];for(let r=0,s=t.length;r!==s;++r){let o=t[r];o.id in e&&n.push(o)}return n}};function Pu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var x0=37297,y0=0;function M0(i,t){let e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Du=new Wt;function S0(i){Qt._getMatrix(Du,Qt.workingColorSpace,i);let t=`mat3( ${Du.elements.map(e=>e.toFixed(4))} )`;switch(Qt.getTransfer(i)){case ts:return[t,"LinearTransferOETF"];case re:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Lu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=(i.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+M0(i.getShaderSource(t),a)}else return s}function b0(i,t){let e=S0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function w0(i,t){let e;switch(t){case Jh:e="Linear";break;case Kh:e="Reinhard";break;case jh:e="Cineon";break;case Ho:e="ACESFilmic";break;case tu:e="AgX";break;case eu:e="Neutral";break;case Qh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ra=new U;function E0(){Qt.getLuminanceCoefficients(Ra);let i=Ra.x.toFixed(4),t=Ra.y.toFixed(4),e=Ra.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function T0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(As).join(`
`)}function A0(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function C0(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(t,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function As(i){return i!==""}function Uu(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Fu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var R0=/^[ \t]*#include +<([\w\d./]+)>/gm;function oc(i){return i.replace(R0,P0)}var I0=new Map;function P0(i,t){let e=qt[t];if(e===void 0){let n=I0.get(t);if(n!==void 0)e=qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return oc(e)}var D0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nu(i){return i.replace(D0,L0)}function L0(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ou(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function U0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Rl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Rh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Bn&&(t="SHADOWMAP_TYPE_VSM"),t}function F0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Zi:case $i:t="ENVMAP_TYPE_CUBE";break;case Ms:t="ENVMAP_TYPE_CUBE_UV";break}return t}function N0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case $i:t="ENVMAP_MODE_REFRACTION";break}return t}function O0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Vo:t="ENVMAP_BLENDING_MULTIPLY";break;case Zh:t="ENVMAP_BLENDING_MIX";break;case $h:t="ENVMAP_BLENDING_ADD";break}return t}function B0(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function z0(i,t,e,n){let r=i.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,c=U0(e),l=F0(e),u=N0(e),h=O0(e),f=B0(e),p=T0(e),g=A0(s),v=r.createProgram(),m,d,R=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(As).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(As).join(`
`),d.length>0&&(d+=`
`)):(m=[Ou(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(As).join(`
`),d=[Ou(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==si?"#define TONE_MAPPING":"",e.toneMapping!==si?qt.tonemapping_pars_fragment:"",e.toneMapping!==si?w0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,b0("linearToOutputTexel",e.outputColorSpace),E0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(As).join(`
`)),o=oc(o),o=Uu(o,e),o=Fu(o,e),a=oc(a),a=Uu(a,e),a=Fu(a,e),o=Nu(o),a=Nu(a),e.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===Gl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Gl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let E=R+m+o,S=R+d+a,P=Pu(r,r.VERTEX_SHADER,E),T=Pu(r,r.FRAGMENT_SHADER,S);r.attachShader(v,P),r.attachShader(v,T),e.index0AttributeName!==void 0?r.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function D(I){if(i.debug.checkShaderErrors){let N=r.getProgramInfoLog(v)||"",q=r.getShaderInfoLog(P)||"",Y=r.getShaderInfoLog(T)||"",J=N.trim(),V=q.trim(),tt=Y.trim(),G=!0,ot=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,v,P,T);else{let mt=Lu(r,P,"vertex"),xt=Lu(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+J+`
`+mt+`
`+xt)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(V===""||tt==="")&&(ot=!1);ot&&(I.diagnostics={runnable:G,programLog:J,vertexShader:{log:V,prefix:m},fragmentShader:{log:tt,prefix:d}})}r.deleteShader(P),r.deleteShader(T),L=new kr(r,v),x=C0(r,v)}let L;this.getUniforms=function(){return L===void 0&&D(this),L};let x;this.getAttributes=function(){return x===void 0&&D(this),x};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(v,x0)),y},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=y0++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=P,this.fragmentShader=T,this}var k0=0,ac=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new lc(t),e.set(t,n)),n}},lc=class{constructor(t){this.id=k0++,this.code=t,this.usedTimes=0}};function V0(i,t,e,n,r,s,o){let a=new Ar,c=new ac,l=new Set,u=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures,p=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return l.add(x),x===0?"uv":`uv${x}`}function m(x,y,I,N,q){let Y=N.fog,J=q.geometry,V=x.isMeshStandardMaterial?N.environment:null,tt=(x.isMeshStandardMaterial?e:t).get(x.envMap||V),G=tt&&tt.mapping===Ms?tt.image.height:null,ot=g[x.type];x.precision!==null&&(p=r.getMaxPrecision(x.precision),p!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",p,"instead."));let mt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,xt=mt!==void 0?mt.length:0,Lt=0;J.morphAttributes.position!==void 0&&(Lt=1),J.morphAttributes.normal!==void 0&&(Lt=2),J.morphAttributes.color!==void 0&&(Lt=3);let Ot,Ht,Et,C;if(ot){let ie=kn[ot];Ot=ie.vertexShader,Ht=ie.fragmentShader}else Ot=x.vertexShader,Ht=x.fragmentShader,c.update(x),Et=c.getVertexShaderID(x),C=c.getFragmentShaderID(x);let A=i.getRenderTarget(),O=i.state.buffers.depth.getReversed(),W=q.isInstancedMesh===!0,H=q.isBatchedMesh===!0,X=!!x.map,nt=!!x.matcap,b=!!tt,et=!!x.aoMap,it=!!x.lightMap,at=!!x.bumpMap,K=!!x.normalMap,Yt=!!x.displacementMap,dt=!!x.emissiveMap,Ct=!!x.metalnessMap,Kt=!!x.roughnessMap,Dt=x.anisotropy>0,w=x.clearcoat>0,_=x.dispersion>0,z=x.iridescence>0,Q=x.sheen>0,st=x.transmission>0,j=Dt&&!!x.anisotropyMap,Mt=w&&!!x.clearcoatMap,ft=w&&!!x.clearcoatNormalMap,Tt=w&&!!x.clearcoatRoughnessMap,It=z&&!!x.iridescenceMap,ht=z&&!!x.iridescenceThicknessMap,yt=Q&&!!x.sheenColorMap,zt=Q&&!!x.sheenRoughnessMap,Pt=!!x.specularMap,vt=!!x.specularColorMap,Xt=!!x.specularIntensityMap,F=st&&!!x.transmissionMap,ut=st&&!!x.thicknessMap,pt=!!x.gradientMap,wt=!!x.alphaMap,lt=x.alphaTest>0,rt=!!x.alphaHash,Rt=!!x.extensions,Gt=si;x.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Gt=i.toneMapping);let ce={shaderID:ot,shaderType:x.type,shaderName:x.name,vertexShader:Ot,fragmentShader:Ht,defines:x.defines,customVertexShaderID:Et,customFragmentShaderID:C,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:p,batching:H,batchingColor:H&&q._colorsTexture!==null,instancing:W,instancingColor:W&&q.instanceColor!==null,instancingMorph:W&&q.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:A===null?i.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Wi,alphaToCoverage:!!x.alphaToCoverage,map:X,matcap:nt,envMap:b,envMapMode:b&&tt.mapping,envMapCubeUVHeight:G,aoMap:et,lightMap:it,bumpMap:at,normalMap:K,displacementMap:f&&Yt,emissiveMap:dt,normalMapObjectSpace:K&&x.normalMapType===su,normalMapTangentSpace:K&&x.normalMapType===Ta,metalnessMap:Ct,roughnessMap:Kt,anisotropy:Dt,anisotropyMap:j,clearcoat:w,clearcoatMap:Mt,clearcoatNormalMap:ft,clearcoatRoughnessMap:Tt,dispersion:_,iridescence:z,iridescenceMap:It,iridescenceThicknessMap:ht,sheen:Q,sheenColorMap:yt,sheenRoughnessMap:zt,specularMap:Pt,specularColorMap:vt,specularIntensityMap:Xt,transmission:st,transmissionMap:F,thicknessMap:ut,gradientMap:pt,opaque:x.transparent===!1&&x.blending===Vi&&x.alphaToCoverage===!1,alphaMap:wt,alphaTest:lt,alphaHash:rt,combine:x.combine,mapUv:X&&v(x.map.channel),aoMapUv:et&&v(x.aoMap.channel),lightMapUv:it&&v(x.lightMap.channel),bumpMapUv:at&&v(x.bumpMap.channel),normalMapUv:K&&v(x.normalMap.channel),displacementMapUv:Yt&&v(x.displacementMap.channel),emissiveMapUv:dt&&v(x.emissiveMap.channel),metalnessMapUv:Ct&&v(x.metalnessMap.channel),roughnessMapUv:Kt&&v(x.roughnessMap.channel),anisotropyMapUv:j&&v(x.anisotropyMap.channel),clearcoatMapUv:Mt&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:ft&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Tt&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:It&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:ht&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:yt&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:zt&&v(x.sheenRoughnessMap.channel),specularMapUv:Pt&&v(x.specularMap.channel),specularColorMapUv:vt&&v(x.specularColorMap.channel),specularIntensityMapUv:Xt&&v(x.specularIntensityMap.channel),transmissionMapUv:F&&v(x.transmissionMap.channel),thicknessMapUv:ut&&v(x.thicknessMap.channel),alphaMapUv:wt&&v(x.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(K||Dt),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!J.attributes.uv&&(X||wt),fog:!!Y,useFog:x.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:x.flatShading===!0&&x.wireframe===!1,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:O,skinning:q.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:xt,morphTextureStride:Lt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:Gt,decodeVideoTexture:X&&x.map.isVideoTexture===!0&&Qt.getTransfer(x.map.colorSpace)===re,decodeVideoTextureEmissive:dt&&x.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(x.emissiveMap.colorSpace)===re,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===sn,flipSided:x.side===We,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Rt&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Rt&&x.extensions.multiDraw===!0||H)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ce.vertexUv1s=l.has(1),ce.vertexUv2s=l.has(2),ce.vertexUv3s=l.has(3),l.clear(),ce}function d(x){let y=[];if(x.shaderID?y.push(x.shaderID):(y.push(x.customVertexShaderID),y.push(x.customFragmentShaderID)),x.defines!==void 0)for(let I in x.defines)y.push(I),y.push(x.defines[I]);return x.isRawShaderMaterial===!1&&(R(y,x),E(y,x),y.push(i.outputColorSpace)),y.push(x.customProgramCacheKey),y.join()}function R(x,y){x.push(y.precision),x.push(y.outputColorSpace),x.push(y.envMapMode),x.push(y.envMapCubeUVHeight),x.push(y.mapUv),x.push(y.alphaMapUv),x.push(y.lightMapUv),x.push(y.aoMapUv),x.push(y.bumpMapUv),x.push(y.normalMapUv),x.push(y.displacementMapUv),x.push(y.emissiveMapUv),x.push(y.metalnessMapUv),x.push(y.roughnessMapUv),x.push(y.anisotropyMapUv),x.push(y.clearcoatMapUv),x.push(y.clearcoatNormalMapUv),x.push(y.clearcoatRoughnessMapUv),x.push(y.iridescenceMapUv),x.push(y.iridescenceThicknessMapUv),x.push(y.sheenColorMapUv),x.push(y.sheenRoughnessMapUv),x.push(y.specularMapUv),x.push(y.specularColorMapUv),x.push(y.specularIntensityMapUv),x.push(y.transmissionMapUv),x.push(y.thicknessMapUv),x.push(y.combine),x.push(y.fogExp2),x.push(y.sizeAttenuation),x.push(y.morphTargetsCount),x.push(y.morphAttributeCount),x.push(y.numDirLights),x.push(y.numPointLights),x.push(y.numSpotLights),x.push(y.numSpotLightMaps),x.push(y.numHemiLights),x.push(y.numRectAreaLights),x.push(y.numDirLightShadows),x.push(y.numPointLightShadows),x.push(y.numSpotLightShadows),x.push(y.numSpotLightShadowsWithMaps),x.push(y.numLightProbes),x.push(y.shadowMapType),x.push(y.toneMapping),x.push(y.numClippingPlanes),x.push(y.numClipIntersection),x.push(y.depthPacking)}function E(x,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),y.gradientMap&&a.enable(22),x.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),x.push(a.mask)}function S(x){let y=g[x.type],I;if(y){let N=kn[y];I=gu.clone(N.uniforms)}else I=x.uniforms;return I}function P(x,y){let I;for(let N=0,q=u.length;N<q;N++){let Y=u[N];if(Y.cacheKey===y){I=Y,++I.usedTimes;break}}return I===void 0&&(I=new z0(i,y,x,s),u.push(I)),I}function T(x){if(--x.usedTimes===0){let y=u.indexOf(x);u[y]=u[u.length-1],u.pop(),x.destroy()}}function D(x){c.remove(x)}function L(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:S,acquireProgram:P,releaseProgram:T,releaseShaderCache:D,programs:u,dispose:L}}function H0(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,c){i.get(o)[a]=c}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function G0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Bu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function zu(){let i=[],t=0,e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(h,f,p,g,v,m){let d=i[t];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:v,group:m},i[t]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=v,d.group=m),t++,d}function a(h,f,p,g,v,m){let d=o(h,f,p,g,v,m);p.transmission>0?n.push(d):p.transparent===!0?r.push(d):e.push(d)}function c(h,f,p,g,v,m){let d=o(h,f,p,g,v,m);p.transmission>0?n.unshift(d):p.transparent===!0?r.unshift(d):e.unshift(d)}function l(h,f){e.length>1&&e.sort(h||G0),n.length>1&&n.sort(f||Bu),r.length>1&&r.sort(f||Bu)}function u(){for(let h=t,f=i.length;h<f;h++){let p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function W0(){let i=new WeakMap;function t(n,r){let s=i.get(n),o;return s===void 0?(o=new zu,i.set(n,[o])):r>=s.length?(o=new zu,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function X0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new Nt};break;case"SpotLight":e={position:new U,direction:new U,color:new Nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Nt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Nt,groundColor:new Nt};break;case"RectAreaLight":e={color:new Nt,position:new U,halfWidth:new U,halfHeight:new U};break}return i[t.id]=e,e}}}function q0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Y0=0;function Z0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function $0(i){let t=new X0,e=q0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new U);let r=new U,s=new oe,o=new oe;function a(l){let u=0,h=0,f=0;for(let x=0;x<9;x++)n.probe[x].set(0,0,0);let p=0,g=0,v=0,m=0,d=0,R=0,E=0,S=0,P=0,T=0,D=0;l.sort(Z0);for(let x=0,y=l.length;x<y;x++){let I=l[x],N=I.color,q=I.intensity,Y=I.distance,J=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=N.r*q,h+=N.g*q,f+=N.b*q;else if(I.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(I.sh.coefficients[V],q);D++}else if(I.isDirectionalLight){let V=t.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let tt=I.shadow,G=e.get(I);G.shadowIntensity=tt.intensity,G.shadowBias=tt.bias,G.shadowNormalBias=tt.normalBias,G.shadowRadius=tt.radius,G.shadowMapSize=tt.mapSize,n.directionalShadow[p]=G,n.directionalShadowMap[p]=J,n.directionalShadowMatrix[p]=I.shadow.matrix,R++}n.directional[p]=V,p++}else if(I.isSpotLight){let V=t.get(I);V.position.setFromMatrixPosition(I.matrixWorld),V.color.copy(N).multiplyScalar(q),V.distance=Y,V.coneCos=Math.cos(I.angle),V.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),V.decay=I.decay,n.spot[v]=V;let tt=I.shadow;if(I.map&&(n.spotLightMap[P]=I.map,P++,tt.updateMatrices(I),I.castShadow&&T++),n.spotLightMatrix[v]=tt.matrix,I.castShadow){let G=e.get(I);G.shadowIntensity=tt.intensity,G.shadowBias=tt.bias,G.shadowNormalBias=tt.normalBias,G.shadowRadius=tt.radius,G.shadowMapSize=tt.mapSize,n.spotShadow[v]=G,n.spotShadowMap[v]=J,S++}v++}else if(I.isRectAreaLight){let V=t.get(I);V.color.copy(N).multiplyScalar(q),V.halfWidth.set(I.width*.5,0,0),V.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=V,m++}else if(I.isPointLight){let V=t.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),V.distance=I.distance,V.decay=I.decay,I.castShadow){let tt=I.shadow,G=e.get(I);G.shadowIntensity=tt.intensity,G.shadowBias=tt.bias,G.shadowNormalBias=tt.normalBias,G.shadowRadius=tt.radius,G.shadowMapSize=tt.mapSize,G.shadowCameraNear=tt.camera.near,G.shadowCameraFar=tt.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=J,n.pointShadowMatrix[g]=I.shadow.matrix,E++}n.point[g]=V,g++}else if(I.isHemisphereLight){let V=t.get(I);V.skyColor.copy(I.color).multiplyScalar(q),V.groundColor.copy(I.groundColor).multiplyScalar(q),n.hemi[d]=V,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=gt.LTC_FLOAT_1,n.rectAreaLTC2=gt.LTC_FLOAT_2):(n.rectAreaLTC1=gt.LTC_HALF_1,n.rectAreaLTC2=gt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;let L=n.hash;(L.directionalLength!==p||L.pointLength!==g||L.spotLength!==v||L.rectAreaLength!==m||L.hemiLength!==d||L.numDirectionalShadows!==R||L.numPointShadows!==E||L.numSpotShadows!==S||L.numSpotMaps!==P||L.numLightProbes!==D)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=R,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=S+P-T,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=D,L.directionalLength=p,L.pointLength=g,L.spotLength=v,L.rectAreaLength=m,L.hemiLength=d,L.numDirectionalShadows=R,L.numPointShadows=E,L.numSpotShadows=S,L.numSpotMaps=P,L.numLightProbes=D,n.version=Y0++)}function c(l,u){let h=0,f=0,p=0,g=0,v=0,m=u.matrixWorldInverse;for(let d=0,R=l.length;d<R;d++){let E=l[d];if(E.isDirectionalLight){let S=n.directional[h];S.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),h++}else if(E.isSpotLight){let S=n.spot[p];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(E.isRectAreaLight){let S=n.rectArea[g];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(E.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(E.width*.5,0,0),S.halfHeight.set(0,E.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){let S=n.point[f];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),f++}else if(E.isHemisphereLight){let S=n.hemi[v];S.direction.setFromMatrixPosition(E.matrixWorld),S.direction.transformDirection(m),v++}}}return{setup:a,setupView:c,state:n}}function ku(i){let t=new $0(i),e=[],n=[];function r(u){l.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function J0(i){let t=new WeakMap;function e(r,s=0){let o=t.get(r),a;return o===void 0?(a=new ku(i),t.set(r,[a])):s>=o.length?(a=new ku(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var K0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,j0=`uniform sampler2D shadow_pass;
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
}`;function Q0(i,t,e){let n=new Rr,r=new kt,s=new kt,o=new _e,a=new So({depthPacking:ru}),c=new bo,l={},u=e.maxTextureSize,h={[Qn]:We,[We]:Qn,[sn]:sn},f=new wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new kt},radius:{value:4}},vertexShader:K0,fragmentShader:j0}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new he;g.setAttribute("position",new be(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new de(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rl;let d=this.type;this.render=function(T,D,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let x=i.getRenderTarget(),y=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),N=i.state;N.setBlending(ri),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let q=d!==Bn&&this.type===Bn,Y=d===Bn&&this.type!==Bn;for(let J=0,V=T.length;J<V;J++){let tt=T[J],G=tt.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);let ot=G.getFrameExtents();if(r.multiply(ot),s.copy(G.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ot.x),r.x=s.x*ot.x,G.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ot.y),r.y=s.y*ot.y,G.mapSize.y=s.y)),G.map===null||q===!0||Y===!0){let xt=this.type!==Bn?{minFilter:Ge,magFilter:Ge}:{};G.map!==null&&G.map.dispose(),G.map=new Un(r.x,r.y,xt),G.map.texture.name=tt.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();let mt=G.getViewportCount();for(let xt=0;xt<mt;xt++){let Lt=G.getViewport(xt);o.set(s.x*Lt.x,s.y*Lt.y,s.x*Lt.z,s.y*Lt.w),N.viewport(o),G.updateMatrices(tt,xt),n=G.getFrustum(),S(D,L,G.camera,tt,this.type)}G.isPointLightShadow!==!0&&this.type===Bn&&R(G,L),G.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(x,y,I)};function R(T,D){let L=t.update(v);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Un(r.x,r.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(D,null,L,f,v,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(D,null,L,p,v,null)}function E(T,D,L,x){let y=null,I=L.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)y=I;else if(y=L.isPointLight===!0?c:a,i.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){let N=y.uuid,q=D.uuid,Y=l[N];Y===void 0&&(Y={},l[N]=Y);let J=Y[q];J===void 0&&(J=y.clone(),Y[q]=J,D.addEventListener("dispose",P)),y=J}if(y.visible=D.visible,y.wireframe=D.wireframe,x===Bn?y.side=D.shadowSide!==null?D.shadowSide:D.side:y.side=D.shadowSide!==null?D.shadowSide:h[D.side],y.alphaMap=D.alphaMap,y.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,y.map=D.map,y.clipShadows=D.clipShadows,y.clippingPlanes=D.clippingPlanes,y.clipIntersection=D.clipIntersection,y.displacementMap=D.displacementMap,y.displacementScale=D.displacementScale,y.displacementBias=D.displacementBias,y.wireframeLinewidth=D.wireframeLinewidth,y.linewidth=D.linewidth,L.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let N=i.properties.get(y);N.light=L}return y}function S(T,D,L,x,y){if(T.visible===!1)return;if(T.layers.test(D.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===Bn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,T.matrixWorld);let q=t.update(T),Y=T.material;if(Array.isArray(Y)){let J=q.groups;for(let V=0,tt=J.length;V<tt;V++){let G=J[V],ot=Y[G.materialIndex];if(ot&&ot.visible){let mt=E(T,ot,x,y);T.onBeforeShadow(i,T,D,L,q,mt,G),i.renderBufferDirect(L,null,q,mt,T,G),T.onAfterShadow(i,T,D,L,q,mt,G)}}}else if(Y.visible){let J=E(T,Y,x,y);T.onBeforeShadow(i,T,D,L,q,J,null),i.renderBufferDirect(L,null,q,J,T,null),T.onAfterShadow(i,T,D,L,q,J,null)}}let N=T.children;for(let q=0,Y=N.length;q<Y;q++)S(N[q],D,L,x,y)}function P(T){T.target.removeEventListener("dispose",P);for(let L in l){let x=l[L],y=T.target.uuid;y in x&&(x[y].dispose(),delete x[y])}}}var tv={[Uo]:Fo,[No]:zo,[Oo]:ko,[Hi]:Bo,[Fo]:Uo,[zo]:No,[ko]:Oo,[Bo]:Hi};function ev(i,t){function e(){let F=!1,ut=new _e,pt=null,wt=new _e(0,0,0,0);return{setMask:function(lt){pt!==lt&&!F&&(i.colorMask(lt,lt,lt,lt),pt=lt)},setLocked:function(lt){F=lt},setClear:function(lt,rt,Rt,Gt,ce){ce===!0&&(lt*=Gt,rt*=Gt,Rt*=Gt),ut.set(lt,rt,Rt,Gt),wt.equals(ut)===!1&&(i.clearColor(lt,rt,Rt,Gt),wt.copy(ut))},reset:function(){F=!1,pt=null,wt.set(-1,0,0,0)}}}function n(){let F=!1,ut=!1,pt=null,wt=null,lt=null;return{setReversed:function(rt){if(ut!==rt){let Rt=t.get("EXT_clip_control");rt?Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.ZERO_TO_ONE_EXT):Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.NEGATIVE_ONE_TO_ONE_EXT),ut=rt;let Gt=lt;lt=null,this.setClear(Gt)}},getReversed:function(){return ut},setTest:function(rt){rt?A(i.DEPTH_TEST):O(i.DEPTH_TEST)},setMask:function(rt){pt!==rt&&!F&&(i.depthMask(rt),pt=rt)},setFunc:function(rt){if(ut&&(rt=tv[rt]),wt!==rt){switch(rt){case Uo:i.depthFunc(i.NEVER);break;case Fo:i.depthFunc(i.ALWAYS);break;case No:i.depthFunc(i.LESS);break;case Hi:i.depthFunc(i.LEQUAL);break;case Oo:i.depthFunc(i.EQUAL);break;case Bo:i.depthFunc(i.GEQUAL);break;case zo:i.depthFunc(i.GREATER);break;case ko:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}wt=rt}},setLocked:function(rt){F=rt},setClear:function(rt){lt!==rt&&(ut&&(rt=1-rt),i.clearDepth(rt),lt=rt)},reset:function(){F=!1,pt=null,wt=null,lt=null,ut=!1}}}function r(){let F=!1,ut=null,pt=null,wt=null,lt=null,rt=null,Rt=null,Gt=null,ce=null;return{setTest:function(ie){F||(ie?A(i.STENCIL_TEST):O(i.STENCIL_TEST))},setMask:function(ie){ut!==ie&&!F&&(i.stencilMask(ie),ut=ie)},setFunc:function(ie,Xn,Dn){(pt!==ie||wt!==Xn||lt!==Dn)&&(i.stencilFunc(ie,Xn,Dn),pt=ie,wt=Xn,lt=Dn)},setOp:function(ie,Xn,Dn){(rt!==ie||Rt!==Xn||Gt!==Dn)&&(i.stencilOp(ie,Xn,Dn),rt=ie,Rt=Xn,Gt=Dn)},setLocked:function(ie){F=ie},setClear:function(ie){ce!==ie&&(i.clearStencil(ie),ce=ie)},reset:function(){F=!1,ut=null,pt=null,wt=null,lt=null,rt=null,Rt=null,Gt=null,ce=null}}}let s=new e,o=new n,a=new r,c=new WeakMap,l=new WeakMap,u={},h={},f=new WeakMap,p=[],g=null,v=!1,m=null,d=null,R=null,E=null,S=null,P=null,T=null,D=new Nt(0,0,0),L=0,x=!1,y=null,I=null,N=null,q=null,Y=null,J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,tt=0,G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(G)[1]),V=tt>=1):G.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),V=tt>=2);let ot=null,mt={},xt=i.getParameter(i.SCISSOR_BOX),Lt=i.getParameter(i.VIEWPORT),Ot=new _e().fromArray(xt),Ht=new _e().fromArray(Lt);function Et(F,ut,pt,wt){let lt=new Uint8Array(4),rt=i.createTexture();i.bindTexture(F,rt),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Rt=0;Rt<pt;Rt++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(ut,0,i.RGBA,1,1,wt,0,i.RGBA,i.UNSIGNED_BYTE,lt):i.texImage2D(ut+Rt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,lt);return rt}let C={};C[i.TEXTURE_2D]=Et(i.TEXTURE_2D,i.TEXTURE_2D,1),C[i.TEXTURE_CUBE_MAP]=Et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),C[i.TEXTURE_2D_ARRAY]=Et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),C[i.TEXTURE_3D]=Et(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),A(i.DEPTH_TEST),o.setFunc(Hi),at(!1),K(Cl),A(i.CULL_FACE),et(ri);function A(F){u[F]!==!0&&(i.enable(F),u[F]=!0)}function O(F){u[F]!==!1&&(i.disable(F),u[F]=!1)}function W(F,ut){return h[F]!==ut?(i.bindFramebuffer(F,ut),h[F]=ut,F===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ut),F===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ut),!0):!1}function H(F,ut){let pt=p,wt=!1;if(F){pt=f.get(ut),pt===void 0&&(pt=[],f.set(ut,pt));let lt=F.textures;if(pt.length!==lt.length||pt[0]!==i.COLOR_ATTACHMENT0){for(let rt=0,Rt=lt.length;rt<Rt;rt++)pt[rt]=i.COLOR_ATTACHMENT0+rt;pt.length=lt.length,wt=!0}}else pt[0]!==i.BACK&&(pt[0]=i.BACK,wt=!0);wt&&i.drawBuffers(pt)}function X(F){return g!==F?(i.useProgram(F),g=F,!0):!1}let nt={[xi]:i.FUNC_ADD,[Ph]:i.FUNC_SUBTRACT,[Dh]:i.FUNC_REVERSE_SUBTRACT};nt[Lh]=i.MIN,nt[Uh]=i.MAX;let b={[Fh]:i.ZERO,[Nh]:i.ONE,[Oh]:i.SRC_COLOR,[ho]:i.SRC_ALPHA,[Gh]:i.SRC_ALPHA_SATURATE,[Vh]:i.DST_COLOR,[zh]:i.DST_ALPHA,[Bh]:i.ONE_MINUS_SRC_COLOR,[uo]:i.ONE_MINUS_SRC_ALPHA,[Hh]:i.ONE_MINUS_DST_COLOR,[kh]:i.ONE_MINUS_DST_ALPHA,[Wh]:i.CONSTANT_COLOR,[Xh]:i.ONE_MINUS_CONSTANT_COLOR,[qh]:i.CONSTANT_ALPHA,[Yh]:i.ONE_MINUS_CONSTANT_ALPHA};function et(F,ut,pt,wt,lt,rt,Rt,Gt,ce,ie){if(F===ri){v===!0&&(O(i.BLEND),v=!1);return}if(v===!1&&(A(i.BLEND),v=!0),F!==Ih){if(F!==m||ie!==x){if((d!==xi||S!==xi)&&(i.blendEquation(i.FUNC_ADD),d=xi,S=xi),ie)switch(F){case Vi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Il:i.blendFunc(i.ONE,i.ONE);break;case Pl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Dl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Vi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Il:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Pl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Dl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}R=null,E=null,P=null,T=null,D.set(0,0,0),L=0,m=F,x=ie}return}lt=lt||ut,rt=rt||pt,Rt=Rt||wt,(ut!==d||lt!==S)&&(i.blendEquationSeparate(nt[ut],nt[lt]),d=ut,S=lt),(pt!==R||wt!==E||rt!==P||Rt!==T)&&(i.blendFuncSeparate(b[pt],b[wt],b[rt],b[Rt]),R=pt,E=wt,P=rt,T=Rt),(Gt.equals(D)===!1||ce!==L)&&(i.blendColor(Gt.r,Gt.g,Gt.b,ce),D.copy(Gt),L=ce),m=F,x=!1}function it(F,ut){F.side===sn?O(i.CULL_FACE):A(i.CULL_FACE);let pt=F.side===We;ut&&(pt=!pt),at(pt),F.blending===Vi&&F.transparent===!1?et(ri):et(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),s.setMask(F.colorWrite);let wt=F.stencilWrite;a.setTest(wt),wt&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),dt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?A(i.SAMPLE_ALPHA_TO_COVERAGE):O(i.SAMPLE_ALPHA_TO_COVERAGE)}function at(F){y!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),y=F)}function K(F){F!==Ah?(A(i.CULL_FACE),F!==I&&(F===Cl?i.cullFace(i.BACK):F===Ch?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):O(i.CULL_FACE),I=F}function Yt(F){F!==N&&(V&&i.lineWidth(F),N=F)}function dt(F,ut,pt){F?(A(i.POLYGON_OFFSET_FILL),(q!==ut||Y!==pt)&&(i.polygonOffset(ut,pt),q=ut,Y=pt)):O(i.POLYGON_OFFSET_FILL)}function Ct(F){F?A(i.SCISSOR_TEST):O(i.SCISSOR_TEST)}function Kt(F){F===void 0&&(F=i.TEXTURE0+J-1),ot!==F&&(i.activeTexture(F),ot=F)}function Dt(F,ut,pt){pt===void 0&&(ot===null?pt=i.TEXTURE0+J-1:pt=ot);let wt=mt[pt];wt===void 0&&(wt={type:void 0,texture:void 0},mt[pt]=wt),(wt.type!==F||wt.texture!==ut)&&(ot!==pt&&(i.activeTexture(pt),ot=pt),i.bindTexture(F,ut||C[F]),wt.type=F,wt.texture=ut)}function w(){let F=mt[ot];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function _(){try{i.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function z(){try{i.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Q(){try{i.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function st(){try{i.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function j(){try{i.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Mt(){try{i.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ft(){try{i.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Tt(){try{i.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function It(){try{i.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ht(){try{i.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function yt(F){Ot.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),Ot.copy(F))}function zt(F){Ht.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),Ht.copy(F))}function Pt(F,ut){let pt=l.get(ut);pt===void 0&&(pt=new WeakMap,l.set(ut,pt));let wt=pt.get(F);wt===void 0&&(wt=i.getUniformBlockIndex(ut,F.name),pt.set(F,wt))}function vt(F,ut){let wt=l.get(ut).get(F);c.get(ut)!==wt&&(i.uniformBlockBinding(ut,wt,F.__bindingPointIndex),c.set(ut,wt))}function Xt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ot=null,mt={},h={},f=new WeakMap,p=[],g=null,v=!1,m=null,d=null,R=null,E=null,S=null,P=null,T=null,D=new Nt(0,0,0),L=0,x=!1,y=null,I=null,N=null,q=null,Y=null,Ot.set(0,0,i.canvas.width,i.canvas.height),Ht.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:A,disable:O,bindFramebuffer:W,drawBuffers:H,useProgram:X,setBlending:et,setMaterial:it,setFlipSided:at,setCullFace:K,setLineWidth:Yt,setPolygonOffset:dt,setScissorTest:Ct,activeTexture:Kt,bindTexture:Dt,unbindTexture:w,compressedTexImage2D:_,compressedTexImage3D:z,texImage2D:It,texImage3D:ht,updateUBOMapping:Pt,uniformBlockBinding:vt,texStorage2D:ft,texStorage3D:Tt,texSubImage2D:Q,texSubImage3D:st,compressedTexSubImage2D:j,compressedTexSubImage3D:Mt,scissor:yt,viewport:zt,reset:Xt}}function nv(i,t,e,n,r,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new kt,u=new WeakMap,h,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,_){return p?new OffscreenCanvas(w,_):wr("canvas")}function v(w,_,z){let Q=1,st=Dt(w);if((st.width>z||st.height>z)&&(Q=z/Math.max(st.width,st.height)),Q<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let j=Math.floor(Q*st.width),Mt=Math.floor(Q*st.height);h===void 0&&(h=g(j,Mt));let ft=_?g(j,Mt):h;return ft.width=j,ft.height=Mt,ft.getContext("2d").drawImage(w,0,0,j,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+j+"x"+Mt+")."),ft}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),w;return w}function m(w){return w.generateMipmaps}function d(w){i.generateMipmap(w)}function R(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(w,_,z,Q,st=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let j=_;if(_===i.RED&&(z===i.FLOAT&&(j=i.R32F),z===i.HALF_FLOAT&&(j=i.R16F),z===i.UNSIGNED_BYTE&&(j=i.R8)),_===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(j=i.R8UI),z===i.UNSIGNED_SHORT&&(j=i.R16UI),z===i.UNSIGNED_INT&&(j=i.R32UI),z===i.BYTE&&(j=i.R8I),z===i.SHORT&&(j=i.R16I),z===i.INT&&(j=i.R32I)),_===i.RG&&(z===i.FLOAT&&(j=i.RG32F),z===i.HALF_FLOAT&&(j=i.RG16F),z===i.UNSIGNED_BYTE&&(j=i.RG8)),_===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(j=i.RG8UI),z===i.UNSIGNED_SHORT&&(j=i.RG16UI),z===i.UNSIGNED_INT&&(j=i.RG32UI),z===i.BYTE&&(j=i.RG8I),z===i.SHORT&&(j=i.RG16I),z===i.INT&&(j=i.RG32I)),_===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(j=i.RGB8UI),z===i.UNSIGNED_SHORT&&(j=i.RGB16UI),z===i.UNSIGNED_INT&&(j=i.RGB32UI),z===i.BYTE&&(j=i.RGB8I),z===i.SHORT&&(j=i.RGB16I),z===i.INT&&(j=i.RGB32I)),_===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),z===i.UNSIGNED_INT&&(j=i.RGBA32UI),z===i.BYTE&&(j=i.RGBA8I),z===i.SHORT&&(j=i.RGBA16I),z===i.INT&&(j=i.RGBA32I)),_===i.RGB&&(z===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(j=i.R11F_G11F_B10F)),_===i.RGBA){let Mt=st?ts:Qt.getTransfer(Q);z===i.FLOAT&&(j=i.RGBA32F),z===i.HALF_FLOAT&&(j=i.RGBA16F),z===i.UNSIGNED_BYTE&&(j=Mt===re?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function S(w,_){let z;return w?_===null||_===Ai||_===Fr?z=i.DEPTH24_STENCIL8:_===zn?z=i.DEPTH32F_STENCIL8:_===Lr&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Ai||_===Fr?z=i.DEPTH_COMPONENT24:_===zn?z=i.DEPTH_COMPONENT32F:_===Lr&&(z=i.DEPTH_COMPONENT16),z}function P(w,_){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==Ge&&w.minFilter!==Oe?Math.log2(Math.max(_.width,_.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?_.mipmaps.length:1}function T(w){let _=w.target;_.removeEventListener("dispose",T),L(_),_.isVideoTexture&&u.delete(_)}function D(w){let _=w.target;_.removeEventListener("dispose",D),y(_)}function L(w){let _=n.get(w);if(_.__webglInit===void 0)return;let z=w.source,Q=f.get(z);if(Q){let st=Q[_.__cacheKey];st.usedTimes--,st.usedTimes===0&&x(w),Object.keys(Q).length===0&&f.delete(z)}n.remove(w)}function x(w){let _=n.get(w);i.deleteTexture(_.__webglTexture);let z=w.source,Q=f.get(z);delete Q[_.__cacheKey],o.memory.textures--}function y(w){let _=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(_.__webglFramebuffer[Q]))for(let st=0;st<_.__webglFramebuffer[Q].length;st++)i.deleteFramebuffer(_.__webglFramebuffer[Q][st]);else i.deleteFramebuffer(_.__webglFramebuffer[Q]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[Q])}else{if(Array.isArray(_.__webglFramebuffer))for(let Q=0;Q<_.__webglFramebuffer.length;Q++)i.deleteFramebuffer(_.__webglFramebuffer[Q]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Q=0;Q<_.__webglColorRenderbuffer.length;Q++)_.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[Q]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let z=w.textures;for(let Q=0,st=z.length;Q<st;Q++){let j=n.get(z[Q]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),o.memory.textures--),n.remove(z[Q])}n.remove(w)}let I=0;function N(){I=0}function q(){let w=I;return w>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),I+=1,w}function Y(w){let _=[];return _.push(w.wrapS),_.push(w.wrapT),_.push(w.wrapR||0),_.push(w.magFilter),_.push(w.minFilter),_.push(w.anisotropy),_.push(w.internalFormat),_.push(w.format),_.push(w.type),_.push(w.generateMipmaps),_.push(w.premultiplyAlpha),_.push(w.flipY),_.push(w.unpackAlignment),_.push(w.colorSpace),_.join()}function J(w,_){let z=n.get(w);if(w.isVideoTexture&&Ct(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&z.__version!==w.version){let Q=w.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{C(z,w,_);return}}else w.isExternalTexture&&(z.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+_)}function V(w,_){let z=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&z.__version!==w.version){C(z,w,_);return}e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+_)}function tt(w,_){let z=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&z.__version!==w.version){C(z,w,_);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+_)}function G(w,_){let z=n.get(w);if(w.version>0&&z.__version!==w.version){A(z,w,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+_)}let ot={[ti]:i.REPEAT,[Sn]:i.CLAMP_TO_EDGE,[Gi]:i.MIRRORED_REPEAT},mt={[Ge]:i.NEAREST,[nu]:i.NEAREST_MIPMAP_NEAREST,[Ss]:i.NEAREST_MIPMAP_LINEAR,[Oe]:i.LINEAR,[Xo]:i.LINEAR_MIPMAP_NEAREST,[Tn]:i.LINEAR_MIPMAP_LINEAR},xt={[ou]:i.NEVER,[fu]:i.ALWAYS,[au]:i.LESS,[Hl]:i.LEQUAL,[lu]:i.EQUAL,[uu]:i.GEQUAL,[cu]:i.GREATER,[hu]:i.NOTEQUAL};function Lt(w,_){if(_.type===zn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Oe||_.magFilter===Xo||_.magFilter===Ss||_.magFilter===Tn||_.minFilter===Oe||_.minFilter===Xo||_.minFilter===Ss||_.minFilter===Tn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,ot[_.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,ot[_.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,ot[_.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,mt[_.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,mt[_.minFilter]),_.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,xt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Ge||_.minFilter!==Ss&&_.minFilter!==Tn||_.type===zn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(w,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Ot(w,_){let z=!1;w.__webglInit===void 0&&(w.__webglInit=!0,_.addEventListener("dispose",T));let Q=_.source,st=f.get(Q);st===void 0&&(st={},f.set(Q,st));let j=Y(_);if(j!==w.__cacheKey){st[j]===void 0&&(st[j]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),st[j].usedTimes++;let Mt=st[w.__cacheKey];Mt!==void 0&&(st[w.__cacheKey].usedTimes--,Mt.usedTimes===0&&x(_)),w.__cacheKey=j,w.__webglTexture=st[j].texture}return z}function Ht(w,_,z){return Math.floor(Math.floor(w/z)/_)}function Et(w,_,z,Q){let j=w.updateRanges;if(j.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,z,Q,_.data);else{j.sort((ht,yt)=>ht.start-yt.start);let Mt=0;for(let ht=1;ht<j.length;ht++){let yt=j[Mt],zt=j[ht],Pt=yt.start+yt.count,vt=Ht(zt.start,_.width,4),Xt=Ht(yt.start,_.width,4);zt.start<=Pt+1&&vt===Xt&&Ht(zt.start+zt.count-1,_.width,4)===vt?yt.count=Math.max(yt.count,zt.start+zt.count-yt.start):(++Mt,j[Mt]=zt)}j.length=Mt+1;let ft=i.getParameter(i.UNPACK_ROW_LENGTH),Tt=i.getParameter(i.UNPACK_SKIP_PIXELS),It=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let ht=0,yt=j.length;ht<yt;ht++){let zt=j[ht],Pt=Math.floor(zt.start/4),vt=Math.ceil(zt.count/4),Xt=Pt%_.width,F=Math.floor(Pt/_.width),ut=vt,pt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Xt),i.pixelStorei(i.UNPACK_SKIP_ROWS,F),e.texSubImage2D(i.TEXTURE_2D,0,Xt,F,ut,pt,z,Q,_.data)}w.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ft),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Tt),i.pixelStorei(i.UNPACK_SKIP_ROWS,It)}}function C(w,_,z){let Q=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Q=i.TEXTURE_3D);let st=Ot(w,_),j=_.source;e.bindTexture(Q,w.__webglTexture,i.TEXTURE0+z);let Mt=n.get(j);if(j.version!==Mt.__version||st===!0){e.activeTexture(i.TEXTURE0+z);let ft=Qt.getPrimaries(Qt.workingColorSpace),Tt=_.colorSpace===oi?null:Qt.getPrimaries(_.colorSpace),It=_.colorSpace===oi||ft===Tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);let ht=v(_.image,!1,r.maxTextureSize);ht=Kt(_,ht);let yt=s.convert(_.format,_.colorSpace),zt=s.convert(_.type),Pt=E(_.internalFormat,yt,zt,_.colorSpace,_.isVideoTexture);Lt(Q,_);let vt,Xt=_.mipmaps,F=_.isVideoTexture!==!0,ut=Mt.__version===void 0||st===!0,pt=j.dataReady,wt=P(_,ht);if(_.isDepthTexture)Pt=S(_.format===Nr,_.type),ut&&(F?e.texStorage2D(i.TEXTURE_2D,1,Pt,ht.width,ht.height):e.texImage2D(i.TEXTURE_2D,0,Pt,ht.width,ht.height,0,yt,zt,null));else if(_.isDataTexture)if(Xt.length>0){F&&ut&&e.texStorage2D(i.TEXTURE_2D,wt,Pt,Xt[0].width,Xt[0].height);for(let lt=0,rt=Xt.length;lt<rt;lt++)vt=Xt[lt],F?pt&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,vt.width,vt.height,yt,zt,vt.data):e.texImage2D(i.TEXTURE_2D,lt,Pt,vt.width,vt.height,0,yt,zt,vt.data);_.generateMipmaps=!1}else F?(ut&&e.texStorage2D(i.TEXTURE_2D,wt,Pt,ht.width,ht.height),pt&&Et(_,ht,yt,zt)):e.texImage2D(i.TEXTURE_2D,0,Pt,ht.width,ht.height,0,yt,zt,ht.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){F&&ut&&e.texStorage3D(i.TEXTURE_2D_ARRAY,wt,Pt,Xt[0].width,Xt[0].height,ht.depth);for(let lt=0,rt=Xt.length;lt<rt;lt++)if(vt=Xt[lt],_.format!==gn)if(yt!==null)if(F){if(pt)if(_.layerUpdates.size>0){let Rt=Jl(vt.width,vt.height,_.format,_.type);for(let Gt of _.layerUpdates){let ce=vt.data.subarray(Gt*Rt/vt.data.BYTES_PER_ELEMENT,(Gt+1)*Rt/vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,Gt,vt.width,vt.height,1,yt,ce)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,0,vt.width,vt.height,ht.depth,yt,vt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,lt,Pt,vt.width,vt.height,ht.depth,0,vt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?pt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,0,vt.width,vt.height,ht.depth,yt,zt,vt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,lt,Pt,vt.width,vt.height,ht.depth,0,yt,zt,vt.data)}else{F&&ut&&e.texStorage2D(i.TEXTURE_2D,wt,Pt,Xt[0].width,Xt[0].height);for(let lt=0,rt=Xt.length;lt<rt;lt++)vt=Xt[lt],_.format!==gn?yt!==null?F?pt&&e.compressedTexSubImage2D(i.TEXTURE_2D,lt,0,0,vt.width,vt.height,yt,vt.data):e.compressedTexImage2D(i.TEXTURE_2D,lt,Pt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?pt&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,vt.width,vt.height,yt,zt,vt.data):e.texImage2D(i.TEXTURE_2D,lt,Pt,vt.width,vt.height,0,yt,zt,vt.data)}else if(_.isDataArrayTexture)if(F){if(ut&&e.texStorage3D(i.TEXTURE_2D_ARRAY,wt,Pt,ht.width,ht.height,ht.depth),pt)if(_.layerUpdates.size>0){let lt=Jl(ht.width,ht.height,_.format,_.type);for(let rt of _.layerUpdates){let Rt=ht.data.subarray(rt*lt/ht.data.BYTES_PER_ELEMENT,(rt+1)*lt/ht.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,rt,ht.width,ht.height,1,yt,zt,Rt)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,yt,zt,ht.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Pt,ht.width,ht.height,ht.depth,0,yt,zt,ht.data);else if(_.isData3DTexture)F?(ut&&e.texStorage3D(i.TEXTURE_3D,wt,Pt,ht.width,ht.height,ht.depth),pt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,yt,zt,ht.data)):e.texImage3D(i.TEXTURE_3D,0,Pt,ht.width,ht.height,ht.depth,0,yt,zt,ht.data);else if(_.isFramebufferTexture){if(ut)if(F)e.texStorage2D(i.TEXTURE_2D,wt,Pt,ht.width,ht.height);else{let lt=ht.width,rt=ht.height;for(let Rt=0;Rt<wt;Rt++)e.texImage2D(i.TEXTURE_2D,Rt,Pt,lt,rt,0,yt,zt,null),lt>>=1,rt>>=1}}else if(Xt.length>0){if(F&&ut){let lt=Dt(Xt[0]);e.texStorage2D(i.TEXTURE_2D,wt,Pt,lt.width,lt.height)}for(let lt=0,rt=Xt.length;lt<rt;lt++)vt=Xt[lt],F?pt&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,yt,zt,vt):e.texImage2D(i.TEXTURE_2D,lt,Pt,yt,zt,vt);_.generateMipmaps=!1}else if(F){if(ut){let lt=Dt(ht);e.texStorage2D(i.TEXTURE_2D,wt,Pt,lt.width,lt.height)}pt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,yt,zt,ht)}else e.texImage2D(i.TEXTURE_2D,0,Pt,yt,zt,ht);m(_)&&d(Q),Mt.__version=j.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function A(w,_,z){if(_.image.length!==6)return;let Q=Ot(w,_),st=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+z);let j=n.get(st);if(st.version!==j.__version||Q===!0){e.activeTexture(i.TEXTURE0+z);let Mt=Qt.getPrimaries(Qt.workingColorSpace),ft=_.colorSpace===oi?null:Qt.getPrimaries(_.colorSpace),Tt=_.colorSpace===oi||Mt===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);let It=_.isCompressedTexture||_.image[0].isCompressedTexture,ht=_.image[0]&&_.image[0].isDataTexture,yt=[];for(let rt=0;rt<6;rt++)!It&&!ht?yt[rt]=v(_.image[rt],!0,r.maxCubemapSize):yt[rt]=ht?_.image[rt].image:_.image[rt],yt[rt]=Kt(_,yt[rt]);let zt=yt[0],Pt=s.convert(_.format,_.colorSpace),vt=s.convert(_.type),Xt=E(_.internalFormat,Pt,vt,_.colorSpace),F=_.isVideoTexture!==!0,ut=j.__version===void 0||Q===!0,pt=st.dataReady,wt=P(_,zt);Lt(i.TEXTURE_CUBE_MAP,_);let lt;if(It){F&&ut&&e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,Xt,zt.width,zt.height);for(let rt=0;rt<6;rt++){lt=yt[rt].mipmaps;for(let Rt=0;Rt<lt.length;Rt++){let Gt=lt[Rt];_.format!==gn?Pt!==null?F?pt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Rt,0,0,Gt.width,Gt.height,Pt,Gt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Rt,Xt,Gt.width,Gt.height,0,Gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Rt,0,0,Gt.width,Gt.height,Pt,vt,Gt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Rt,Xt,Gt.width,Gt.height,0,Pt,vt,Gt.data)}}}else{if(lt=_.mipmaps,F&&ut){lt.length>0&&wt++;let rt=Dt(yt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,Xt,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(ht){F?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,yt[rt].width,yt[rt].height,Pt,vt,yt[rt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Xt,yt[rt].width,yt[rt].height,0,Pt,vt,yt[rt].data);for(let Rt=0;Rt<lt.length;Rt++){let ce=lt[Rt].image[rt].image;F?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Rt+1,0,0,ce.width,ce.height,Pt,vt,ce.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Rt+1,Xt,ce.width,ce.height,0,Pt,vt,ce.data)}}else{F?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Pt,vt,yt[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Xt,Pt,vt,yt[rt]);for(let Rt=0;Rt<lt.length;Rt++){let Gt=lt[Rt];F?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Rt+1,0,0,Pt,vt,Gt.image[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Rt+1,Xt,Pt,vt,Gt.image[rt])}}}m(_)&&d(i.TEXTURE_CUBE_MAP),j.__version=st.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function O(w,_,z,Q,st,j){let Mt=s.convert(z.format,z.colorSpace),ft=s.convert(z.type),Tt=E(z.internalFormat,Mt,ft,z.colorSpace),It=n.get(_),ht=n.get(z);if(ht.__renderTarget=_,!It.__hasExternalTextures){let yt=Math.max(1,_.width>>j),zt=Math.max(1,_.height>>j);st===i.TEXTURE_3D||st===i.TEXTURE_2D_ARRAY?e.texImage3D(st,j,Tt,yt,zt,_.depth,0,Mt,ft,null):e.texImage2D(st,j,Tt,yt,zt,0,Mt,ft,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),dt(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,st,ht.__webglTexture,0,Yt(_)):(st===i.TEXTURE_2D||st>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,st,ht.__webglTexture,j),e.bindFramebuffer(i.FRAMEBUFFER,null)}function W(w,_,z){if(i.bindRenderbuffer(i.RENDERBUFFER,w),_.depthBuffer){let Q=_.depthTexture,st=Q&&Q.isDepthTexture?Q.type:null,j=S(_.stencilBuffer,st),Mt=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=Yt(_);dt(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ft,j,_.width,_.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,ft,j,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,j,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Mt,i.RENDERBUFFER,w)}else{let Q=_.textures;for(let st=0;st<Q.length;st++){let j=Q[st],Mt=s.convert(j.format,j.colorSpace),ft=s.convert(j.type),Tt=E(j.internalFormat,Mt,ft,j.colorSpace),It=Yt(_);z&&dt(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,It,Tt,_.width,_.height):dt(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,It,Tt,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Tt,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function H(w,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Q=n.get(_.depthTexture);Q.__renderTarget=_,(!Q.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),J(_.depthTexture,0);let st=Q.__webglTexture,j=Yt(_);if(_.depthTexture.format===Sr)dt(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,st,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,st,0);else if(_.depthTexture.format===Nr)dt(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,st,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,st,0);else throw new Error("Unknown depthTexture format")}function X(w){let _=n.get(w),z=w.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==w.depthTexture){let Q=w.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Q){let st=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Q.removeEventListener("dispose",st)};Q.addEventListener("dispose",st),_.__depthDisposeCallback=st}_.__boundDepthTexture=Q}if(w.depthTexture&&!_.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");let Q=w.texture.mipmaps;Q&&Q.length>0?H(_.__webglFramebuffer[0],w):H(_.__webglFramebuffer,w)}else if(z){_.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[Q]),_.__webglDepthbuffer[Q]===void 0)_.__webglDepthbuffer[Q]=i.createRenderbuffer(),W(_.__webglDepthbuffer[Q],w,!1);else{let st=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=_.__webglDepthbuffer[Q];i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,j)}}else{let Q=w.texture.mipmaps;if(Q&&Q.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),W(_.__webglDepthbuffer,w,!1);else{let st=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,j)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function nt(w,_,z){let Q=n.get(w);_!==void 0&&O(Q.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&X(w)}function b(w){let _=w.texture,z=n.get(w),Q=n.get(_);w.addEventListener("dispose",D);let st=w.textures,j=w.isWebGLCubeRenderTarget===!0,Mt=st.length>1;if(Mt||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=_.version,o.memory.textures++),j){z.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer[ft]=[];for(let Tt=0;Tt<_.mipmaps.length;Tt++)z.__webglFramebuffer[ft][Tt]=i.createFramebuffer()}else z.__webglFramebuffer[ft]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer=[];for(let ft=0;ft<_.mipmaps.length;ft++)z.__webglFramebuffer[ft]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(Mt)for(let ft=0,Tt=st.length;ft<Tt;ft++){let It=n.get(st[ft]);It.__webglTexture===void 0&&(It.__webglTexture=i.createTexture(),o.memory.textures++)}if(w.samples>0&&dt(w)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ft=0;ft<st.length;ft++){let Tt=st[ft];z.__webglColorRenderbuffer[ft]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[ft]);let It=s.convert(Tt.format,Tt.colorSpace),ht=s.convert(Tt.type),yt=E(Tt.internalFormat,It,ht,Tt.colorSpace,w.isXRRenderTarget===!0),zt=Yt(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,zt,yt,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,z.__webglColorRenderbuffer[ft])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),W(z.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),Lt(i.TEXTURE_CUBE_MAP,_);for(let ft=0;ft<6;ft++)if(_.mipmaps&&_.mipmaps.length>0)for(let Tt=0;Tt<_.mipmaps.length;Tt++)O(z.__webglFramebuffer[ft][Tt],w,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Tt);else O(z.__webglFramebuffer[ft],w,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);m(_)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let ft=0,Tt=st.length;ft<Tt;ft++){let It=st[ft],ht=n.get(It),yt=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(yt=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(yt,ht.__webglTexture),Lt(yt,It),O(z.__webglFramebuffer,w,It,i.COLOR_ATTACHMENT0+ft,yt,0),m(It)&&d(yt)}e.unbindTexture()}else{let ft=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ft=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ft,Q.__webglTexture),Lt(ft,_),_.mipmaps&&_.mipmaps.length>0)for(let Tt=0;Tt<_.mipmaps.length;Tt++)O(z.__webglFramebuffer[Tt],w,_,i.COLOR_ATTACHMENT0,ft,Tt);else O(z.__webglFramebuffer,w,_,i.COLOR_ATTACHMENT0,ft,0);m(_)&&d(ft),e.unbindTexture()}w.depthBuffer&&X(w)}function et(w){let _=w.textures;for(let z=0,Q=_.length;z<Q;z++){let st=_[z];if(m(st)){let j=R(w),Mt=n.get(st).__webglTexture;e.bindTexture(j,Mt),d(j),e.unbindTexture()}}}let it=[],at=[];function K(w){if(w.samples>0){if(dt(w)===!1){let _=w.textures,z=w.width,Q=w.height,st=i.COLOR_BUFFER_BIT,j=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=n.get(w),ft=_.length>1;if(ft)for(let It=0;It<_.length;It++)e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer);let Tt=w.texture.mipmaps;Tt&&Tt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let It=0;It<_.length;It++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(st|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(st|=i.STENCIL_BUFFER_BIT)),ft){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[It]);let ht=n.get(_[It]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ht,0)}i.blitFramebuffer(0,0,z,Q,0,0,z,Q,st,i.NEAREST),c===!0&&(it.length=0,at.length=0,it.push(i.COLOR_ATTACHMENT0+It),w.depthBuffer&&w.resolveDepthBuffer===!1&&(it.push(j),at.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,at)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,it))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ft)for(let It=0;It<_.length;It++){e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[It]);let ht=n.get(_[It]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.TEXTURE_2D,ht,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){let _=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function Yt(w){return Math.min(r.maxSamples,w.samples)}function dt(w){let _=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Ct(w){let _=o.render.frame;u.get(w)!==_&&(u.set(w,_),w.update())}function Kt(w,_){let z=w.colorSpace,Q=w.format,st=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||z!==Wi&&z!==oi&&(Qt.getTransfer(z)===re?(Q!==gn||st!==An)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),_}function Dt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=q,this.resetTextureUnits=N,this.setTexture2D=J,this.setTexture2DArray=V,this.setTexture3D=tt,this.setTextureCube=G,this.rebindTextures=nt,this.setupRenderTarget=b,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=K,this.setupDepthRenderbuffer=X,this.setupFrameBufferTexture=O,this.useMultisampledRTT=dt}function iv(i,t){function e(n,r=oi){let s,o=Qt.getTransfer(r);if(n===An)return i.UNSIGNED_BYTE;if(n===Yo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Zo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Nl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ol)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ul)return i.BYTE;if(n===Fl)return i.SHORT;if(n===Lr)return i.UNSIGNED_SHORT;if(n===qo)return i.INT;if(n===Ai)return i.UNSIGNED_INT;if(n===zn)return i.FLOAT;if(n===Ur)return i.HALF_FLOAT;if(n===Bl)return i.ALPHA;if(n===zl)return i.RGB;if(n===gn)return i.RGBA;if(n===Sr)return i.DEPTH_COMPONENT;if(n===Nr)return i.DEPTH_STENCIL;if(n===kl)return i.RED;if(n===$o)return i.RED_INTEGER;if(n===Vl)return i.RG;if(n===Jo)return i.RG_INTEGER;if(n===Ko)return i.RGBA_INTEGER;if(n===bs||n===ws||n===Es||n===Ts)if(o===re)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===bs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ws)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Es)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ts)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===bs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ws)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Es)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ts)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===jo||n===Qo||n===ta||n===ea)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===jo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Qo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ta)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ea)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===na||n===ia||n===ra)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===na||n===ia)return o===re?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ra)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===sa||n===oa||n===aa||n===la||n===ca||n===ha||n===ua||n===fa||n===da||n===pa||n===ma||n===ga||n===va||n===_a)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===sa)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===oa)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===aa)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===la)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ca)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ha)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ua)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===fa)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===da)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===pa)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ma)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ga)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===va)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===_a)return o===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===xa||n===ya||n===Ma)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===xa)return o===re?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ya)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ma)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Sa||n===ba||n===wa||n===Ea)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Sa)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ba)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===wa)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ea)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Fr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var rv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sv=`
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

}`,cc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new hs(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new wn({vertexShader:rv,fragmentShader:sv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new de(new us(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},hc=class extends Ln{constructor(t,e){super();let n=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,f=null,p=null,g=null,v=typeof XRWebGLBinding<"u",m=new cc,d={},R=e.getContextAttributes(),E=null,S=null,P=[],T=[],D=new kt,L=null,x=new Ne;x.viewport=new _e;let y=new Ne;y.viewport=new _e;let I=[x,y],N=new Lo,q=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(C){let A=P[C];return A===void 0&&(A=new Cr,P[C]=A),A.getTargetRaySpace()},this.getControllerGrip=function(C){let A=P[C];return A===void 0&&(A=new Cr,P[C]=A),A.getGripSpace()},this.getHand=function(C){let A=P[C];return A===void 0&&(A=new Cr,P[C]=A),A.getHandSpace()};function J(C){let A=T.indexOf(C.inputSource);if(A===-1)return;let O=P[A];O!==void 0&&(O.update(C.inputSource,C.frame,l||o),O.dispatchEvent({type:C.type,data:C.inputSource}))}function V(){r.removeEventListener("select",J),r.removeEventListener("selectstart",J),r.removeEventListener("selectend",J),r.removeEventListener("squeeze",J),r.removeEventListener("squeezestart",J),r.removeEventListener("squeezeend",J),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",tt);for(let C=0;C<P.length;C++){let A=T[C];A!==null&&(T[C]=null,P[C].disconnect(A))}q=null,Y=null,m.reset();for(let C in d)delete d[C];t.setRenderTarget(E),p=null,f=null,h=null,r=null,S=null,Et.stop(),n.isPresenting=!1,t.setPixelRatio(L),t.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(C){s=C,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(C){a=C,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(C){l=C},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h===null&&v&&(h=new XRWebGLBinding(r,e)),h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(C){if(r=C,r!==null){if(E=t.getRenderTarget(),r.addEventListener("select",J),r.addEventListener("selectstart",J),r.addEventListener("selectend",J),r.addEventListener("squeeze",J),r.addEventListener("squeezestart",J),r.addEventListener("squeezeend",J),r.addEventListener("end",V),r.addEventListener("inputsourceschange",tt),R.xrCompatible!==!0&&await e.makeXRCompatible(),L=t.getPixelRatio(),t.getSize(D),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let O=null,W=null,H=null;R.depth&&(H=R.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,O=R.stencil?Nr:Sr,W=R.stencil?Fr:Ai);let X={colorFormat:e.RGBA8,depthFormat:H,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(X),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),S=new Un(f.textureWidth,f.textureHeight,{format:gn,type:An,depthTexture:new cs(f.textureWidth,f.textureHeight,W,void 0,void 0,void 0,void 0,void 0,void 0,O),stencilBuffer:R.stencil,colorSpace:t.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let O={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,e,O),r.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Un(p.framebufferWidth,p.framebufferHeight,{format:gn,type:An,colorSpace:t.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),Et.setContext(r),Et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function tt(C){for(let A=0;A<C.removed.length;A++){let O=C.removed[A],W=T.indexOf(O);W>=0&&(T[W]=null,P[W].disconnect(O))}for(let A=0;A<C.added.length;A++){let O=C.added[A],W=T.indexOf(O);if(W===-1){for(let X=0;X<P.length;X++)if(X>=T.length){T.push(O),W=X;break}else if(T[X]===null){T[X]=O,W=X;break}if(W===-1)break}let H=P[W];H&&H.connect(O)}}let G=new U,ot=new U;function mt(C,A,O){G.setFromMatrixPosition(A.matrixWorld),ot.setFromMatrixPosition(O.matrixWorld);let W=G.distanceTo(ot),H=A.projectionMatrix.elements,X=O.projectionMatrix.elements,nt=H[14]/(H[10]-1),b=H[14]/(H[10]+1),et=(H[9]+1)/H[5],it=(H[9]-1)/H[5],at=(H[8]-1)/H[0],K=(X[8]+1)/X[0],Yt=nt*at,dt=nt*K,Ct=W/(-at+K),Kt=Ct*-at;if(A.matrixWorld.decompose(C.position,C.quaternion,C.scale),C.translateX(Kt),C.translateZ(Ct),C.matrixWorld.compose(C.position,C.quaternion,C.scale),C.matrixWorldInverse.copy(C.matrixWorld).invert(),H[10]===-1)C.projectionMatrix.copy(A.projectionMatrix),C.projectionMatrixInverse.copy(A.projectionMatrixInverse);else{let Dt=nt+Ct,w=b+Ct,_=Yt-Kt,z=dt+(W-Kt),Q=et*b/w*Dt,st=it*b/w*Dt;C.projectionMatrix.makePerspective(_,z,Q,st,Dt,w),C.projectionMatrixInverse.copy(C.projectionMatrix).invert()}}function xt(C,A){A===null?C.matrixWorld.copy(C.matrix):C.matrixWorld.multiplyMatrices(A.matrixWorld,C.matrix),C.matrixWorldInverse.copy(C.matrixWorld).invert()}this.updateCamera=function(C){if(r===null)return;let A=C.near,O=C.far;m.texture!==null&&(m.depthNear>0&&(A=m.depthNear),m.depthFar>0&&(O=m.depthFar)),N.near=y.near=x.near=A,N.far=y.far=x.far=O,(q!==N.near||Y!==N.far)&&(r.updateRenderState({depthNear:N.near,depthFar:N.far}),q=N.near,Y=N.far),N.layers.mask=C.layers.mask|6,x.layers.mask=N.layers.mask&3,y.layers.mask=N.layers.mask&5;let W=C.parent,H=N.cameras;xt(N,W);for(let X=0;X<H.length;X++)xt(H[X],W);H.length===2?mt(N,x,y):N.projectionMatrix.copy(x.projectionMatrix),Lt(C,N,W)};function Lt(C,A,O){O===null?C.matrix.copy(A.matrixWorld):(C.matrix.copy(O.matrixWorld),C.matrix.invert(),C.matrix.multiply(A.matrixWorld)),C.matrix.decompose(C.position,C.quaternion,C.scale),C.updateMatrixWorld(!0),C.projectionMatrix.copy(A.projectionMatrix),C.projectionMatrixInverse.copy(A.projectionMatrixInverse),C.isPerspectiveCamera&&(C.fov=br*2*Math.atan(1/C.projectionMatrix.elements[5]),C.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(C){c=C,f!==null&&(f.fixedFoveation=C),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=C)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(C){return d[C]};let Ot=null;function Ht(C,A){if(u=A.getViewerPose(l||o),g=A,u!==null){let O=u.views;p!==null&&(t.setRenderTargetFramebuffer(S,p.framebuffer),t.setRenderTarget(S));let W=!1;O.length!==N.cameras.length&&(N.cameras.length=0,W=!0);for(let b=0;b<O.length;b++){let et=O[b],it=null;if(p!==null)it=p.getViewport(et);else{let K=h.getViewSubImage(f,et);it=K.viewport,b===0&&(t.setRenderTargetTextures(S,K.colorTexture,K.depthStencilTexture),t.setRenderTarget(S))}let at=I[b];at===void 0&&(at=new Ne,at.layers.enable(b),at.viewport=new _e,I[b]=at),at.matrix.fromArray(et.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(et.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(it.x,it.y,it.width,it.height),b===0&&(N.matrix.copy(at.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),W===!0&&N.cameras.push(at)}let H=r.enabledFeatures;if(H&&H.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){h=n.getBinding();let b=h.getDepthInformation(O[0]);b&&b.isValid&&b.texture&&m.init(b,r.renderState)}if(H&&H.includes("camera-access")&&v){t.state.unbindTexture(),h=n.getBinding();for(let b=0;b<O.length;b++){let et=O[b].camera;if(et){let it=d[et];it||(it=new hs,d[et]=it);let at=h.getCameraImage(et);it.sourceTexture=at}}}}for(let O=0;O<P.length;O++){let W=T[O],H=P[O];W!==null&&H!==void 0&&H.update(W,A,l||o)}Ot&&Ot(C,A),A.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:A}),g=null}let Et=new Vu;Et.setAnimationLoop(Ht),this.setAnimationLoop=function(C){Ot=C},this.dispose=function(){}}},ji=new mn,ov=new oe;function av(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Yl(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,R,E,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),h(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,S)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),v(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?c(m,d,R,E):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===We&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===We&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let R=t.get(d),E=R.envMap,S=R.envMapRotation;E&&(m.envMap.value=E,ji.copy(S),ji.x*=-1,ji.y*=-1,ji.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(ji.y*=-1,ji.z*=-1),m.envMapRotation.value.setFromMatrix4(ov.makeRotationFromEuler(ji)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,R,E){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*R,m.scale.value=E*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,R){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===We&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=R.texture,m.transmissionSamplerSize.value.set(R.width,R.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){let R=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(R.matrixWorld),m.nearDistance.value=R.shadow.camera.near,m.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function lv(i,t,e,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(R,E){let S=E.program;n.uniformBlockBinding(R,S)}function l(R,E){let S=r[R.id];S===void 0&&(g(R),S=u(R),r[R.id]=S,R.addEventListener("dispose",m));let P=E.program;n.updateUBOMapping(R,P);let T=t.render.frame;s[R.id]!==T&&(f(R),s[R.id]=T)}function u(R){let E=h();R.__bindingPointIndex=E;let S=i.createBuffer(),P=R.__size,T=R.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,P,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,S),S}function h(){for(let R=0;R<a;R++)if(o.indexOf(R)===-1)return o.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(R){let E=r[R.id],S=R.uniforms,P=R.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let T=0,D=S.length;T<D;T++){let L=Array.isArray(S[T])?S[T]:[S[T]];for(let x=0,y=L.length;x<y;x++){let I=L[x];if(p(I,T,x,P)===!0){let N=I.__offset,q=Array.isArray(I.value)?I.value:[I.value],Y=0;for(let J=0;J<q.length;J++){let V=q[J],tt=v(V);typeof V=="number"||typeof V=="boolean"?(I.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,N+Y,I.__data)):V.isMatrix3?(I.__data[0]=V.elements[0],I.__data[1]=V.elements[1],I.__data[2]=V.elements[2],I.__data[3]=0,I.__data[4]=V.elements[3],I.__data[5]=V.elements[4],I.__data[6]=V.elements[5],I.__data[7]=0,I.__data[8]=V.elements[6],I.__data[9]=V.elements[7],I.__data[10]=V.elements[8],I.__data[11]=0):(V.toArray(I.__data,Y),Y+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(R,E,S,P){let T=R.value,D=E+"_"+S;if(P[D]===void 0)return typeof T=="number"||typeof T=="boolean"?P[D]=T:P[D]=T.clone(),!0;{let L=P[D];if(typeof T=="number"||typeof T=="boolean"){if(L!==T)return P[D]=T,!0}else if(L.equals(T)===!1)return L.copy(T),!0}return!1}function g(R){let E=R.uniforms,S=0,P=16;for(let D=0,L=E.length;D<L;D++){let x=Array.isArray(E[D])?E[D]:[E[D]];for(let y=0,I=x.length;y<I;y++){let N=x[y],q=Array.isArray(N.value)?N.value:[N.value];for(let Y=0,J=q.length;Y<J;Y++){let V=q[Y],tt=v(V),G=S%P,ot=G%tt.boundary,mt=G+ot;S+=ot,mt!==0&&P-mt<tt.storage&&(S+=P-mt),N.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=S,S+=tt.storage}}}let T=S%P;return T>0&&(S+=P-T),R.__size=S,R.__cache={},this}function v(R){let E={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(E.boundary=4,E.storage=4):R.isVector2?(E.boundary=8,E.storage=8):R.isVector3||R.isColor?(E.boundary=16,E.storage=12):R.isVector4?(E.boundary=16,E.storage=16):R.isMatrix3?(E.boundary=48,E.storage=48):R.isMatrix4?(E.boundary=64,E.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),E}function m(R){let E=R.target;E.removeEventListener("dispose",m);let S=o.indexOf(E.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function d(){for(let R in r)i.deleteBuffer(r[R]);o=[],r={},s={}}return{bind:c,update:l,dispose:d}}var Pa=class{constructor(t={}){let{canvas:e=du(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),v=new Int32Array(4),m=null,d=null,R=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=si,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let S=this,P=!1;this._outputColorSpace=we;let T=0,D=0,L=null,x=-1,y=null,I=new _e,N=new _e,q=null,Y=new Nt(0),J=0,V=e.width,tt=e.height,G=1,ot=null,mt=null,xt=new _e(0,0,V,tt),Lt=new _e(0,0,V,tt),Ot=!1,Ht=new Rr,Et=!1,C=!1,A=new oe,O=new U,W=new _e,H={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},X=!1;function nt(){return L===null?G:1}let b=n;function et(M,B){return e.getContext(M,B)}try{let M={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",pt,!1),e.addEventListener("webglcontextrestored",wt,!1),e.addEventListener("webglcontextcreationerror",lt,!1),b===null){let B="webgl2";if(b=et(B,M),b===null)throw et(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let it,at,K,Yt,dt,Ct,Kt,Dt,w,_,z,Q,st,j,Mt,ft,Tt,It,ht,yt,zt,Pt,vt,Xt;function F(){it=new Tg(b),it.init(),Pt=new iv(b,it),at=new xg(b,it,t,Pt),K=new ev(b,it),at.reversedDepthBuffer&&f&&K.buffers.depth.setReversed(!0),Yt=new Rg(b),dt=new H0,Ct=new nv(b,it,K,dt,at,Pt,Yt),Kt=new Mg(S),Dt=new Eg(S),w=new Fd(b),vt=new vg(b,w),_=new Ag(b,w,Yt,vt),z=new Pg(b,_,w,Yt),ht=new Ig(b,at,Ct),ft=new yg(dt),Q=new V0(S,Kt,Dt,it,at,vt,ft),st=new av(S,dt),j=new W0,Mt=new J0(it),It=new gg(S,Kt,Dt,K,z,p,c),Tt=new Q0(S,z,at),Xt=new lv(b,Yt,at,K),yt=new _g(b,it,Yt),zt=new Cg(b,it,Yt),Yt.programs=Q.programs,S.capabilities=at,S.extensions=it,S.properties=dt,S.renderLists=j,S.shadowMap=Tt,S.state=K,S.info=Yt}F();let ut=new hc(S,b);this.xr=ut,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){let M=it.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=it.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(M){M!==void 0&&(G=M,this.setSize(V,tt,!1))},this.getSize=function(M){return M.set(V,tt)},this.setSize=function(M,B,Z=!0){if(ut.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=M,tt=B,e.width=Math.floor(M*G),e.height=Math.floor(B*G),Z===!0&&(e.style.width=M+"px",e.style.height=B+"px"),this.setViewport(0,0,M,B)},this.getDrawingBufferSize=function(M){return M.set(V*G,tt*G).floor()},this.setDrawingBufferSize=function(M,B,Z){V=M,tt=B,G=Z,e.width=Math.floor(M*Z),e.height=Math.floor(B*Z),this.setViewport(0,0,M,B)},this.getCurrentViewport=function(M){return M.copy(I)},this.getViewport=function(M){return M.copy(xt)},this.setViewport=function(M,B,Z,$){M.isVector4?xt.set(M.x,M.y,M.z,M.w):xt.set(M,B,Z,$),K.viewport(I.copy(xt).multiplyScalar(G).round())},this.getScissor=function(M){return M.copy(Lt)},this.setScissor=function(M,B,Z,$){M.isVector4?Lt.set(M.x,M.y,M.z,M.w):Lt.set(M,B,Z,$),K.scissor(N.copy(Lt).multiplyScalar(G).round())},this.getScissorTest=function(){return Ot},this.setScissorTest=function(M){K.setScissorTest(Ot=M)},this.setOpaqueSort=function(M){ot=M},this.setTransparentSort=function(M){mt=M},this.getClearColor=function(M){return M.copy(It.getClearColor())},this.setClearColor=function(){It.setClearColor(...arguments)},this.getClearAlpha=function(){return It.getClearAlpha()},this.setClearAlpha=function(){It.setClearAlpha(...arguments)},this.clear=function(M=!0,B=!0,Z=!0){let $=0;if(M){let k=!1;if(L!==null){let ct=L.texture.format;k=ct===Ko||ct===Jo||ct===$o}if(k){let ct=L.texture.type,_t=ct===An||ct===Ai||ct===Lr||ct===Fr||ct===Yo||ct===Zo,At=It.getClearColor(),St=It.getClearAlpha(),Bt=At.r,Vt=At.g,Ut=At.b;_t?(g[0]=Bt,g[1]=Vt,g[2]=Ut,g[3]=St,b.clearBufferuiv(b.COLOR,0,g)):(v[0]=Bt,v[1]=Vt,v[2]=Ut,v[3]=St,b.clearBufferiv(b.COLOR,0,v))}else $|=b.COLOR_BUFFER_BIT}B&&($|=b.DEPTH_BUFFER_BIT),Z&&($|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",pt,!1),e.removeEventListener("webglcontextrestored",wt,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),It.dispose(),j.dispose(),Mt.dispose(),dt.dispose(),Kt.dispose(),Dt.dispose(),z.dispose(),vt.dispose(),Xt.dispose(),Q.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",Dn),ut.removeEventListener("sessionend",qc),Ui.stop()};function pt(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function wt(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;let M=Yt.autoReset,B=Tt.enabled,Z=Tt.autoUpdate,$=Tt.needsUpdate,k=Tt.type;F(),Yt.autoReset=M,Tt.enabled=B,Tt.autoUpdate=Z,Tt.needsUpdate=$,Tt.type=k}function lt(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function rt(M){let B=M.target;B.removeEventListener("dispose",rt),Rt(B)}function Rt(M){Gt(M),dt.remove(M)}function Gt(M){let B=dt.get(M).programs;B!==void 0&&(B.forEach(function(Z){Q.releaseProgram(Z)}),M.isShaderMaterial&&Q.releaseShaderCache(M))}this.renderBufferDirect=function(M,B,Z,$,k,ct){B===null&&(B=H);let _t=k.isMesh&&k.matrixWorld.determinant()<0,At=Ff(M,B,Z,$,k);K.setMaterial($,_t);let St=Z.index,Bt=1;if($.wireframe===!0){if(St=_.getWireframeAttribute(Z),St===void 0)return;Bt=2}let Vt=Z.drawRange,Ut=Z.attributes.position,Jt=Vt.start*Bt,se=(Vt.start+Vt.count)*Bt;ct!==null&&(Jt=Math.max(Jt,ct.start*Bt),se=Math.min(se,(ct.start+ct.count)*Bt)),St!==null?(Jt=Math.max(Jt,0),se=Math.min(se,St.count)):Ut!=null&&(Jt=Math.max(Jt,0),se=Math.min(se,Ut.count));let ye=se-Jt;if(ye<0||ye===1/0)return;vt.setup(k,$,At,Z,St);let ue,le=yt;if(St!==null&&(ue=w.get(St),le=zt,le.setIndex(ue)),k.isMesh)$.wireframe===!0?(K.setLineWidth($.wireframeLinewidth*nt()),le.setMode(b.LINES)):le.setMode(b.TRIANGLES);else if(k.isLine){let Ft=$.linewidth;Ft===void 0&&(Ft=1),K.setLineWidth(Ft*nt()),k.isLineSegments?le.setMode(b.LINES):k.isLineLoop?le.setMode(b.LINE_LOOP):le.setMode(b.LINE_STRIP)}else k.isPoints?le.setMode(b.POINTS):k.isSprite&&le.setMode(b.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)Er("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),le.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(it.get("WEBGL_multi_draw"))le.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let Ft=k._multiDrawStarts,ge=k._multiDrawCounts,te=k._multiDrawCount,Qe=St?w.get(St).bytesPerElement:1,sr=dt.get($).currentProgram.getUniforms();for(let tn=0;tn<te;tn++)sr.setValue(b,"_gl_DrawID",tn),le.render(Ft[tn]/Qe,ge[tn])}else if(k.isInstancedMesh)le.renderInstances(Jt,ye,k.count);else if(Z.isInstancedBufferGeometry){let Ft=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,ge=Math.min(Z.instanceCount,Ft);le.renderInstances(Jt,ye,ge)}else le.render(Jt,ye)};function ce(M,B,Z){M.transparent===!0&&M.side===sn&&M.forceSinglePass===!1?(M.side=We,M.needsUpdate=!0,zs(M,B,Z),M.side=Qn,M.needsUpdate=!0,zs(M,B,Z),M.side=sn):zs(M,B,Z)}this.compile=function(M,B,Z=null){Z===null&&(Z=M),d=Mt.get(Z),d.init(B),E.push(d),Z.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(d.pushLight(k),k.castShadow&&d.pushShadow(k))}),M!==Z&&M.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(d.pushLight(k),k.castShadow&&d.pushShadow(k))}),d.setupLights();let $=new Set;return M.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let ct=k.material;if(ct)if(Array.isArray(ct))for(let _t=0;_t<ct.length;_t++){let At=ct[_t];ce(At,Z,k),$.add(At)}else ce(ct,Z,k),$.add(ct)}),d=E.pop(),$},this.compileAsync=function(M,B,Z=null){let $=this.compile(M,B,Z);return new Promise(k=>{function ct(){if($.forEach(function(_t){dt.get(_t).currentProgram.isReady()&&$.delete(_t)}),$.size===0){k(M);return}setTimeout(ct,10)}it.get("KHR_parallel_shader_compile")!==null?ct():setTimeout(ct,10)})};let ie=null;function Xn(M){ie&&ie(M)}function Dn(){Ui.stop()}function qc(){Ui.start()}let Ui=new Vu;Ui.setAnimationLoop(Xn),typeof self<"u"&&Ui.setContext(self),this.setAnimationLoop=function(M){ie=M,ut.setAnimationLoop(M),M===null?Ui.stop():Ui.start()},ut.addEventListener("sessionstart",Dn),ut.addEventListener("sessionend",qc),this.render=function(M,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(B),B=ut.getCamera()),M.isScene===!0&&M.onBeforeRender(S,M,B,L),d=Mt.get(M,E.length),d.init(B),E.push(d),A.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Ht.setFromProjectionMatrix(A,bn,B.reversedDepth),C=this.localClippingEnabled,Et=ft.init(this.clippingPlanes,C),m=j.get(M,R.length),m.init(),R.push(m),ut.enabled===!0&&ut.isPresenting===!0){let ct=S.xr.getDepthSensingMesh();ct!==null&&Xa(ct,B,-1/0,S.sortObjects)}Xa(M,B,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(ot,mt),X=ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1,X&&It.addToRenderList(m,M),this.info.render.frame++,Et===!0&&ft.beginShadows();let Z=d.state.shadowsArray;Tt.render(Z,M,B),Et===!0&&ft.endShadows(),this.info.autoReset===!0&&this.info.reset();let $=m.opaque,k=m.transmissive;if(d.setupLights(),B.isArrayCamera){let ct=B.cameras;if(k.length>0)for(let _t=0,At=ct.length;_t<At;_t++){let St=ct[_t];Zc($,k,M,St)}X&&It.render(M);for(let _t=0,At=ct.length;_t<At;_t++){let St=ct[_t];Yc(m,M,St,St.viewport)}}else k.length>0&&Zc($,k,M,B),X&&It.render(M),Yc(m,M,B);L!==null&&D===0&&(Ct.updateMultisampleRenderTarget(L),Ct.updateRenderTargetMipmap(L)),M.isScene===!0&&M.onAfterRender(S,M,B),vt.resetDefaultState(),x=-1,y=null,E.pop(),E.length>0?(d=E[E.length-1],Et===!0&&ft.setGlobalState(S.clippingPlanes,d.state.camera)):d=null,R.pop(),R.length>0?m=R[R.length-1]:m=null};function Xa(M,B,Z,$){if(M.visible===!1)return;if(M.layers.test(B.layers)){if(M.isGroup)Z=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(B);else if(M.isLight)d.pushLight(M),M.castShadow&&d.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Ht.intersectsSprite(M)){$&&W.setFromMatrixPosition(M.matrixWorld).applyMatrix4(A);let _t=z.update(M),At=M.material;At.visible&&m.push(M,_t,At,Z,W.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Ht.intersectsObject(M))){let _t=z.update(M),At=M.material;if($&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),W.copy(M.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),W.copy(_t.boundingSphere.center)),W.applyMatrix4(M.matrixWorld).applyMatrix4(A)),Array.isArray(At)){let St=_t.groups;for(let Bt=0,Vt=St.length;Bt<Vt;Bt++){let Ut=St[Bt],Jt=At[Ut.materialIndex];Jt&&Jt.visible&&m.push(M,_t,Jt,Z,W.z,Ut)}}else At.visible&&m.push(M,_t,At,Z,W.z,null)}}let ct=M.children;for(let _t=0,At=ct.length;_t<At;_t++)Xa(ct[_t],B,Z,$)}function Yc(M,B,Z,$){let k=M.opaque,ct=M.transmissive,_t=M.transparent;d.setupLightsView(Z),Et===!0&&ft.setGlobalState(S.clippingPlanes,Z),$&&K.viewport(I.copy($)),k.length>0&&Bs(k,B,Z),ct.length>0&&Bs(ct,B,Z),_t.length>0&&Bs(_t,B,Z),K.buffers.depth.setTest(!0),K.buffers.depth.setMask(!0),K.buffers.color.setMask(!0),K.setPolygonOffset(!1)}function Zc(M,B,Z,$){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[$.id]===void 0&&(d.state.transmissionRenderTarget[$.id]=new Un(1,1,{generateMipmaps:!0,type:it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float")?Ur:An,minFilter:Tn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace}));let ct=d.state.transmissionRenderTarget[$.id],_t=$.viewport||I;ct.setSize(_t.z*S.transmissionResolutionScale,_t.w*S.transmissionResolutionScale);let At=S.getRenderTarget(),St=S.getActiveCubeFace(),Bt=S.getActiveMipmapLevel();S.setRenderTarget(ct),S.getClearColor(Y),J=S.getClearAlpha(),J<1&&S.setClearColor(16777215,.5),S.clear(),X&&It.render(Z);let Vt=S.toneMapping;S.toneMapping=si;let Ut=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),d.setupLightsView($),Et===!0&&ft.setGlobalState(S.clippingPlanes,$),Bs(M,Z,$),Ct.updateMultisampleRenderTarget(ct),Ct.updateRenderTargetMipmap(ct),it.has("WEBGL_multisampled_render_to_texture")===!1){let Jt=!1;for(let se=0,ye=B.length;se<ye;se++){let ue=B[se],le=ue.object,Ft=ue.geometry,ge=ue.material,te=ue.group;if(ge.side===sn&&le.layers.test($.layers)){let Qe=ge.side;ge.side=We,ge.needsUpdate=!0,$c(le,Z,$,Ft,ge,te),ge.side=Qe,ge.needsUpdate=!0,Jt=!0}}Jt===!0&&(Ct.updateMultisampleRenderTarget(ct),Ct.updateRenderTargetMipmap(ct))}S.setRenderTarget(At,St,Bt),S.setClearColor(Y,J),Ut!==void 0&&($.viewport=Ut),S.toneMapping=Vt}function Bs(M,B,Z){let $=B.isScene===!0?B.overrideMaterial:null;for(let k=0,ct=M.length;k<ct;k++){let _t=M[k],At=_t.object,St=_t.geometry,Bt=_t.group,Vt=_t.material;Vt.allowOverride===!0&&$!==null&&(Vt=$),At.layers.test(Z.layers)&&$c(At,B,Z,St,Vt,Bt)}}function $c(M,B,Z,$,k,ct){M.onBeforeRender(S,B,Z,$,k,ct),M.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),k.onBeforeRender(S,B,Z,$,M,ct),k.transparent===!0&&k.side===sn&&k.forceSinglePass===!1?(k.side=We,k.needsUpdate=!0,S.renderBufferDirect(Z,B,$,k,M,ct),k.side=Qn,k.needsUpdate=!0,S.renderBufferDirect(Z,B,$,k,M,ct),k.side=sn):S.renderBufferDirect(Z,B,$,k,M,ct),M.onAfterRender(S,B,Z,$,k,ct)}function zs(M,B,Z){B.isScene!==!0&&(B=H);let $=dt.get(M),k=d.state.lights,ct=d.state.shadowsArray,_t=k.state.version,At=Q.getParameters(M,k.state,ct,B,Z),St=Q.getProgramCacheKey(At),Bt=$.programs;$.environment=M.isMeshStandardMaterial?B.environment:null,$.fog=B.fog,$.envMap=(M.isMeshStandardMaterial?Dt:Kt).get(M.envMap||$.environment),$.envMapRotation=$.environment!==null&&M.envMap===null?B.environmentRotation:M.envMapRotation,Bt===void 0&&(M.addEventListener("dispose",rt),Bt=new Map,$.programs=Bt);let Vt=Bt.get(St);if(Vt!==void 0){if($.currentProgram===Vt&&$.lightsStateVersion===_t)return Kc(M,At),Vt}else At.uniforms=Q.getUniforms(M),M.onBeforeCompile(At,S),Vt=Q.acquireProgram(At,St),Bt.set(St,Vt),$.uniforms=At.uniforms;let Ut=$.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ut.clippingPlanes=ft.uniform),Kc(M,At),$.needsLights=Of(M),$.lightsStateVersion=_t,$.needsLights&&(Ut.ambientLightColor.value=k.state.ambient,Ut.lightProbe.value=k.state.probe,Ut.directionalLights.value=k.state.directional,Ut.directionalLightShadows.value=k.state.directionalShadow,Ut.spotLights.value=k.state.spot,Ut.spotLightShadows.value=k.state.spotShadow,Ut.rectAreaLights.value=k.state.rectArea,Ut.ltc_1.value=k.state.rectAreaLTC1,Ut.ltc_2.value=k.state.rectAreaLTC2,Ut.pointLights.value=k.state.point,Ut.pointLightShadows.value=k.state.pointShadow,Ut.hemisphereLights.value=k.state.hemi,Ut.directionalShadowMap.value=k.state.directionalShadowMap,Ut.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ut.spotShadowMap.value=k.state.spotShadowMap,Ut.spotLightMatrix.value=k.state.spotLightMatrix,Ut.spotLightMap.value=k.state.spotLightMap,Ut.pointShadowMap.value=k.state.pointShadowMap,Ut.pointShadowMatrix.value=k.state.pointShadowMatrix),$.currentProgram=Vt,$.uniformsList=null,Vt}function Jc(M){if(M.uniformsList===null){let B=M.currentProgram.getUniforms();M.uniformsList=kr.seqWithValue(B.seq,M.uniforms)}return M.uniformsList}function Kc(M,B){let Z=dt.get(M);Z.outputColorSpace=B.outputColorSpace,Z.batching=B.batching,Z.batchingColor=B.batchingColor,Z.instancing=B.instancing,Z.instancingColor=B.instancingColor,Z.instancingMorph=B.instancingMorph,Z.skinning=B.skinning,Z.morphTargets=B.morphTargets,Z.morphNormals=B.morphNormals,Z.morphColors=B.morphColors,Z.morphTargetsCount=B.morphTargetsCount,Z.numClippingPlanes=B.numClippingPlanes,Z.numIntersection=B.numClipIntersection,Z.vertexAlphas=B.vertexAlphas,Z.vertexTangents=B.vertexTangents,Z.toneMapping=B.toneMapping}function Ff(M,B,Z,$,k){B.isScene!==!0&&(B=H),Ct.resetTextureUnits();let ct=B.fog,_t=$.isMeshStandardMaterial?B.environment:null,At=L===null?S.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Wi,St=($.isMeshStandardMaterial?Dt:Kt).get($.envMap||_t),Bt=$.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Vt=!!Z.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ut=!!Z.morphAttributes.position,Jt=!!Z.morphAttributes.normal,se=!!Z.morphAttributes.color,ye=si;$.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(ye=S.toneMapping);let ue=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,le=ue!==void 0?ue.length:0,Ft=dt.get($),ge=d.state.lights;if(Et===!0&&(C===!0||M!==y)){let ke=M===y&&$.id===x;ft.setState($,M,ke)}let te=!1;$.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==ge.state.version||Ft.outputColorSpace!==At||k.isBatchedMesh&&Ft.batching===!1||!k.isBatchedMesh&&Ft.batching===!0||k.isBatchedMesh&&Ft.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Ft.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Ft.instancing===!1||!k.isInstancedMesh&&Ft.instancing===!0||k.isSkinnedMesh&&Ft.skinning===!1||!k.isSkinnedMesh&&Ft.skinning===!0||k.isInstancedMesh&&Ft.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ft.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ft.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ft.instancingMorph===!1&&k.morphTexture!==null||Ft.envMap!==St||$.fog===!0&&Ft.fog!==ct||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==ft.numPlanes||Ft.numIntersection!==ft.numIntersection)||Ft.vertexAlphas!==Bt||Ft.vertexTangents!==Vt||Ft.morphTargets!==Ut||Ft.morphNormals!==Jt||Ft.morphColors!==se||Ft.toneMapping!==ye||Ft.morphTargetsCount!==le)&&(te=!0):(te=!0,Ft.__version=$.version);let Qe=Ft.currentProgram;te===!0&&(Qe=zs($,B,k));let sr=!1,tn=!1,Xr=!1,ve=Qe.getUniforms(),un=Ft.uniforms;if(K.useProgram(Qe.program)&&(sr=!0,tn=!0,Xr=!0),$.id!==x&&(x=$.id,tn=!0),sr||y!==M){K.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),ve.setValue(b,"projectionMatrix",M.projectionMatrix),ve.setValue(b,"viewMatrix",M.matrixWorldInverse);let Ye=ve.map.cameraPosition;Ye!==void 0&&Ye.setValue(b,O.setFromMatrixPosition(M.matrixWorld)),at.logarithmicDepthBuffer&&ve.setValue(b,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&ve.setValue(b,"isOrthographic",M.isOrthographicCamera===!0),y!==M&&(y=M,tn=!0,Xr=!0)}if(k.isSkinnedMesh){ve.setOptional(b,k,"bindMatrix"),ve.setOptional(b,k,"bindMatrixInverse");let ke=k.skeleton;ke&&(ke.boneTexture===null&&ke.computeBoneTexture(),ve.setValue(b,"boneTexture",ke.boneTexture,Ct))}k.isBatchedMesh&&(ve.setOptional(b,k,"batchingTexture"),ve.setValue(b,"batchingTexture",k._matricesTexture,Ct),ve.setOptional(b,k,"batchingIdTexture"),ve.setValue(b,"batchingIdTexture",k._indirectTexture,Ct),ve.setOptional(b,k,"batchingColorTexture"),k._colorsTexture!==null&&ve.setValue(b,"batchingColorTexture",k._colorsTexture,Ct));let fn=Z.morphAttributes;if((fn.position!==void 0||fn.normal!==void 0||fn.color!==void 0)&&ht.update(k,Z,Qe),(tn||Ft.receiveShadow!==k.receiveShadow)&&(Ft.receiveShadow=k.receiveShadow,ve.setValue(b,"receiveShadow",k.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(un.envMap.value=St,un.flipEnvMap.value=St.isCubeTexture&&St.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&B.environment!==null&&(un.envMapIntensity.value=B.environmentIntensity),tn&&(ve.setValue(b,"toneMappingExposure",S.toneMappingExposure),Ft.needsLights&&Nf(un,Xr),ct&&$.fog===!0&&st.refreshFogUniforms(un,ct),st.refreshMaterialUniforms(un,$,G,tt,d.state.transmissionRenderTarget[M.id]),kr.upload(b,Jc(Ft),un,Ct)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(kr.upload(b,Jc(Ft),un,Ct),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&ve.setValue(b,"center",k.center),ve.setValue(b,"modelViewMatrix",k.modelViewMatrix),ve.setValue(b,"normalMatrix",k.normalMatrix),ve.setValue(b,"modelMatrix",k.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){let ke=$.uniformsGroups;for(let Ye=0,qa=ke.length;Ye<qa;Ye++){let Fi=ke[Ye];Xt.update(Fi,Qe),Xt.bind(Fi,Qe)}}return Qe}function Nf(M,B){M.ambientLightColor.needsUpdate=B,M.lightProbe.needsUpdate=B,M.directionalLights.needsUpdate=B,M.directionalLightShadows.needsUpdate=B,M.pointLights.needsUpdate=B,M.pointLightShadows.needsUpdate=B,M.spotLights.needsUpdate=B,M.spotLightShadows.needsUpdate=B,M.rectAreaLights.needsUpdate=B,M.hemisphereLights.needsUpdate=B}function Of(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(M,B,Z){let $=dt.get(M);$.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),dt.get(M.texture).__webglTexture=B,dt.get(M.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:Z,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,B){let Z=dt.get(M);Z.__webglFramebuffer=B,Z.__useDefaultFramebuffer=B===void 0};let Bf=b.createFramebuffer();this.setRenderTarget=function(M,B=0,Z=0){L=M,T=B,D=Z;let $=!0,k=null,ct=!1,_t=!1;if(M){let St=dt.get(M);if(St.__useDefaultFramebuffer!==void 0)K.bindFramebuffer(b.FRAMEBUFFER,null),$=!1;else if(St.__webglFramebuffer===void 0)Ct.setupRenderTarget(M);else if(St.__hasExternalTextures)Ct.rebindTextures(M,dt.get(M.texture).__webglTexture,dt.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Ut=M.depthTexture;if(St.__boundDepthTexture!==Ut){if(Ut!==null&&dt.has(Ut)&&(M.width!==Ut.image.width||M.height!==Ut.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ct.setupDepthRenderbuffer(M)}}let Bt=M.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(_t=!0);let Vt=dt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Vt[B])?k=Vt[B][Z]:k=Vt[B],ct=!0):M.samples>0&&Ct.useMultisampledRTT(M)===!1?k=dt.get(M).__webglMultisampledFramebuffer:Array.isArray(Vt)?k=Vt[Z]:k=Vt,I.copy(M.viewport),N.copy(M.scissor),q=M.scissorTest}else I.copy(xt).multiplyScalar(G).floor(),N.copy(Lt).multiplyScalar(G).floor(),q=Ot;if(Z!==0&&(k=Bf),K.bindFramebuffer(b.FRAMEBUFFER,k)&&$&&K.drawBuffers(M,k),K.viewport(I),K.scissor(N),K.setScissorTest(q),ct){let St=dt.get(M.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+B,St.__webglTexture,Z)}else if(_t){let St=B;for(let Bt=0;Bt<M.textures.length;Bt++){let Vt=dt.get(M.textures[Bt]);b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0+Bt,Vt.__webglTexture,Z,St)}}else if(M!==null&&Z!==0){let St=dt.get(M.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,St.__webglTexture,Z)}x=-1},this.readRenderTargetPixels=function(M,B,Z,$,k,ct,_t,At=0){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=dt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&_t!==void 0&&(St=St[_t]),St){K.bindFramebuffer(b.FRAMEBUFFER,St);try{let Bt=M.textures[At],Vt=Bt.format,Ut=Bt.type;if(!at.textureFormatReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!at.textureTypeReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=M.width-$&&Z>=0&&Z<=M.height-k&&(M.textures.length>1&&b.readBuffer(b.COLOR_ATTACHMENT0+At),b.readPixels(B,Z,$,k,Pt.convert(Vt),Pt.convert(Ut),ct))}finally{let Bt=L!==null?dt.get(L).__webglFramebuffer:null;K.bindFramebuffer(b.FRAMEBUFFER,Bt)}}},this.readRenderTargetPixelsAsync=async function(M,B,Z,$,k,ct,_t,At=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=dt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&_t!==void 0&&(St=St[_t]),St)if(B>=0&&B<=M.width-$&&Z>=0&&Z<=M.height-k){K.bindFramebuffer(b.FRAMEBUFFER,St);let Bt=M.textures[At],Vt=Bt.format,Ut=Bt.type;if(!at.textureFormatReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!at.textureTypeReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Jt=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,Jt),b.bufferData(b.PIXEL_PACK_BUFFER,ct.byteLength,b.STREAM_READ),M.textures.length>1&&b.readBuffer(b.COLOR_ATTACHMENT0+At),b.readPixels(B,Z,$,k,Pt.convert(Vt),Pt.convert(Ut),0);let se=L!==null?dt.get(L).__webglFramebuffer:null;K.bindFramebuffer(b.FRAMEBUFFER,se);let ye=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await pu(b,ye,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,Jt),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,ct),b.deleteBuffer(Jt),b.deleteSync(ye),ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,B=null,Z=0){let $=Math.pow(2,-Z),k=Math.floor(M.image.width*$),ct=Math.floor(M.image.height*$),_t=B!==null?B.x:0,At=B!==null?B.y:0;Ct.setTexture2D(M,0),b.copyTexSubImage2D(b.TEXTURE_2D,Z,0,0,_t,At,k,ct),K.unbindTexture()};let zf=b.createFramebuffer(),kf=b.createFramebuffer();this.copyTextureToTexture=function(M,B,Z=null,$=null,k=0,ct=null){ct===null&&(k!==0?(Er("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ct=k,k=0):ct=0);let _t,At,St,Bt,Vt,Ut,Jt,se,ye,ue=M.isCompressedTexture?M.mipmaps[ct]:M.image;if(Z!==null)_t=Z.max.x-Z.min.x,At=Z.max.y-Z.min.y,St=Z.isBox3?Z.max.z-Z.min.z:1,Bt=Z.min.x,Vt=Z.min.y,Ut=Z.isBox3?Z.min.z:0;else{let fn=Math.pow(2,-k);_t=Math.floor(ue.width*fn),At=Math.floor(ue.height*fn),M.isDataArrayTexture?St=ue.depth:M.isData3DTexture?St=Math.floor(ue.depth*fn):St=1,Bt=0,Vt=0,Ut=0}$!==null?(Jt=$.x,se=$.y,ye=$.z):(Jt=0,se=0,ye=0);let le=Pt.convert(B.format),Ft=Pt.convert(B.type),ge;B.isData3DTexture?(Ct.setTexture3D(B,0),ge=b.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(Ct.setTexture2DArray(B,0),ge=b.TEXTURE_2D_ARRAY):(Ct.setTexture2D(B,0),ge=b.TEXTURE_2D),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,B.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,B.unpackAlignment);let te=b.getParameter(b.UNPACK_ROW_LENGTH),Qe=b.getParameter(b.UNPACK_IMAGE_HEIGHT),sr=b.getParameter(b.UNPACK_SKIP_PIXELS),tn=b.getParameter(b.UNPACK_SKIP_ROWS),Xr=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,ue.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,ue.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Bt),b.pixelStorei(b.UNPACK_SKIP_ROWS,Vt),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Ut);let ve=M.isDataArrayTexture||M.isData3DTexture,un=B.isDataArrayTexture||B.isData3DTexture;if(M.isDepthTexture){let fn=dt.get(M),ke=dt.get(B),Ye=dt.get(fn.__renderTarget),qa=dt.get(ke.__renderTarget);K.bindFramebuffer(b.READ_FRAMEBUFFER,Ye.__webglFramebuffer),K.bindFramebuffer(b.DRAW_FRAMEBUFFER,qa.__webglFramebuffer);for(let Fi=0;Fi<St;Fi++)ve&&(b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,dt.get(M).__webglTexture,k,Ut+Fi),b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,dt.get(B).__webglTexture,ct,ye+Fi)),b.blitFramebuffer(Bt,Vt,_t,At,Jt,se,_t,At,b.DEPTH_BUFFER_BIT,b.NEAREST);K.bindFramebuffer(b.READ_FRAMEBUFFER,null),K.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else if(k!==0||M.isRenderTargetTexture||dt.has(M)){let fn=dt.get(M),ke=dt.get(B);K.bindFramebuffer(b.READ_FRAMEBUFFER,zf),K.bindFramebuffer(b.DRAW_FRAMEBUFFER,kf);for(let Ye=0;Ye<St;Ye++)ve?b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,fn.__webglTexture,k,Ut+Ye):b.framebufferTexture2D(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,fn.__webglTexture,k),un?b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,ke.__webglTexture,ct,ye+Ye):b.framebufferTexture2D(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,ke.__webglTexture,ct),k!==0?b.blitFramebuffer(Bt,Vt,_t,At,Jt,se,_t,At,b.COLOR_BUFFER_BIT,b.NEAREST):un?b.copyTexSubImage3D(ge,ct,Jt,se,ye+Ye,Bt,Vt,_t,At):b.copyTexSubImage2D(ge,ct,Jt,se,Bt,Vt,_t,At);K.bindFramebuffer(b.READ_FRAMEBUFFER,null),K.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else un?M.isDataTexture||M.isData3DTexture?b.texSubImage3D(ge,ct,Jt,se,ye,_t,At,St,le,Ft,ue.data):B.isCompressedArrayTexture?b.compressedTexSubImage3D(ge,ct,Jt,se,ye,_t,At,St,le,ue.data):b.texSubImage3D(ge,ct,Jt,se,ye,_t,At,St,le,Ft,ue):M.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,ct,Jt,se,_t,At,le,Ft,ue.data):M.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,ct,Jt,se,ue.width,ue.height,le,ue.data):b.texSubImage2D(b.TEXTURE_2D,ct,Jt,se,_t,At,le,Ft,ue);b.pixelStorei(b.UNPACK_ROW_LENGTH,te),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,Qe),b.pixelStorei(b.UNPACK_SKIP_PIXELS,sr),b.pixelStorei(b.UNPACK_SKIP_ROWS,tn),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Xr),ct===0&&B.generateMipmaps&&b.generateMipmap(ge),K.unbindTexture()},this.initRenderTarget=function(M){dt.get(M).__webglFramebuffer===void 0&&Ct.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Ct.setTextureCube(M,0):M.isData3DTexture?Ct.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Ct.setTexture2DArray(M,0):Ct.setTexture2D(M,0),K.unbindTexture()},this.resetState=function(){T=0,D=0,L=null,K.reset(),vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Qt._getUnpackColorSpace()}};var qu={type:"change"},dc={type:"start"},Zu={type:"end"},La=new ei,Yu=new He,hv=Math.cos(70*Xl.DEG2RAD),Ae=new U,Ke=2*Math.PI,ae={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},fc=1e-6,Ua=class extends ys{constructor(t,e=null){super(t,e),this.state=ae.NONE,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:En.ROTATE,MIDDLE:En.DOLLY,RIGHT:En.PAN},this.touches={ONE:Ti.ROTATE,TWO:Ti.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new U,this._lastQuaternion=new pn,this._lastTargetPosition=new U,this._quat=new pn().setFromUnitVectors(t.up,new U(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Dr,this._sphericalDelta=new Dr,this._scale=1,this._panOffset=new U,this._rotateStart=new kt,this._rotateEnd=new kt,this._rotateDelta=new kt,this._panStart=new kt,this._panEnd=new kt,this._panDelta=new kt,this._dollyStart=new kt,this._dollyEnd=new kt,this._dollyDelta=new kt,this._dollyDirection=new U,this._mouse=new kt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=fv.bind(this),this._onPointerDown=uv.bind(this),this._onPointerUp=dv.bind(this),this._onContextMenu=yv.bind(this),this._onMouseWheel=gv.bind(this),this._onKeyDown=vv.bind(this),this._onTouchStart=_v.bind(this),this._onTouchMove=xv.bind(this),this._onMouseDown=pv.bind(this),this._onMouseMove=mv.bind(this),this._interceptControlDown=Mv.bind(this),this._interceptControlUp=Sv.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(qu),this.update(),this.state=ae.NONE}update(t=null){let e=this.object.position;Ae.copy(e).sub(this.target),Ae.applyQuaternion(this._quat),this._spherical.setFromVector3(Ae),this.autoRotate&&this.state===ae.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=Ke:n>Math.PI&&(n-=Ke),r<-Math.PI?r+=Ke:r>Math.PI&&(r-=Ke),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Ae.setFromSpherical(this._spherical),Ae.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ae),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Ae.length();o=this._clampDistance(a*this._scale);let c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){let a=new U(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;let l=new U(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Ae.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(La.origin.copy(this.object.position),La.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(La.direction))<hv?this.object.lookAt(this.target):(Yu.setFromNormalAndCoplanarPoint(this.object.up,this.target),La.intersectPlane(Yu,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>fc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>fc||this._lastTargetPosition.distanceToSquared(this.target)>fc?(this.dispatchEvent(qu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ke/60*this.autoRotateSpeed*t:Ke/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ae.setFromMatrixColumn(e,0),Ae.multiplyScalar(-t),this._panOffset.add(Ae)}_panUp(t,e){this.screenSpacePanning===!0?Ae.setFromMatrixColumn(e,1):(Ae.setFromMatrixColumn(e,0),Ae.crossVectors(this.object.up,Ae)),Ae.multiplyScalar(t),this._panOffset.add(Ae)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;Ae.copy(r).sub(this.target);let s=Ae.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/n.clientHeight,this.object.matrix),this._panUp(2*e*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),r=t-n.left,s=e-n.top,o=n.width,a=n.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Ke*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ke*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Ke*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Ke*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Ke*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Ke*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(n,r)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),r=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Ke*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ke*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new kt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function uv(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function fv(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function dv(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Zu),this.state=ae.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function pv(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case En.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ae.DOLLY;break;case En.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ae.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ae.ROTATE}break;case En.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ae.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ae.PAN}break;default:this.state=ae.NONE}this.state!==ae.NONE&&this.dispatchEvent(dc)}function mv(i){switch(this.state){case ae.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ae.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ae.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function gv(i){this.enabled===!1||this.enableZoom===!1||this.state!==ae.NONE||(i.preventDefault(),this.dispatchEvent(dc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Zu))}function vv(i){this.enabled!==!1&&this._handleKeyDown(i)}function _v(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Ti.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ae.TOUCH_ROTATE;break;case Ti.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ae.TOUCH_PAN;break;default:this.state=ae.NONE}break;case 2:switch(this.touches.TWO){case Ti.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ae.TOUCH_DOLLY_PAN;break;case Ti.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ae.TOUCH_DOLLY_ROTATE;break;default:this.state=ae.NONE}break;default:this.state=ae.NONE}this.state!==ae.NONE&&this.dispatchEvent(dc)}function xv(i){switch(this._trackPointer(i),this.state){case ae.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ae.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ae.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ae.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ae.NONE}}function yv(i){this.enabled!==!1&&i.preventDefault()}function Mv(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Sv(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Fa=class extends Je{constructor(t){super(t)}load(t,e,n,r){let s=this,o=new ii(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){try{e(s.parse(a))}catch(c){r?r(c):console.error(c),s.manager.itemError(t)}},n,r)}parse(t){function e(l){let u=new DataView(l),h=32/8*3+32/8*3*3+16/8,f=u.getUint32(80,!0);if(80+32/8+f*h===u.byteLength)return!0;let g=[115,111,108,105,100];for(let v=0;v<5;v++)if(n(g,u,v))return!1;return!0}function n(l,u,h){for(let f=0,p=l.length;f<p;f++)if(l[f]!==u.getUint8(h+f))return!1;return!0}function r(l){let u=new DataView(l),h=u.getUint32(80,!0),f,p,g,v=!1,m,d,R,E,S;for(let I=0;I<70;I++)u.getUint32(I,!1)==1129270351&&u.getUint8(I+4)==82&&u.getUint8(I+5)==61&&(v=!0,m=new Float32Array(h*3*3),d=u.getUint8(I+6)/255,R=u.getUint8(I+7)/255,E=u.getUint8(I+8)/255,S=u.getUint8(I+9)/255);let P=84,T=50,D=new he,L=new Float32Array(h*3*3),x=new Float32Array(h*3*3),y=new Nt;for(let I=0;I<h;I++){let N=P+I*T,q=u.getFloat32(N,!0),Y=u.getFloat32(N+4,!0),J=u.getFloat32(N+8,!0);if(v){let V=u.getUint16(N+48,!0);(V&32768)===0?(f=(V&31)/31,p=(V>>5&31)/31,g=(V>>10&31)/31):(f=d,p=R,g=E)}for(let V=1;V<=3;V++){let tt=N+V*12,G=I*3*3+(V-1)*3;L[G]=u.getFloat32(tt,!0),L[G+1]=u.getFloat32(tt+4,!0),L[G+2]=u.getFloat32(tt+8,!0),x[G]=q,x[G+1]=Y,x[G+2]=J,v&&(y.setRGB(f,p,g,we),m[G]=y.r,m[G+1]=y.g,m[G+2]=y.b)}}return D.setAttribute("position",new be(L,3)),D.setAttribute("normal",new be(x,3)),v&&(D.setAttribute("color",new be(m,3)),D.hasColors=!0,D.alpha=S),D}function s(l){let u=new he,h=/solid([\s\S]*?)endsolid/g,f=/facet([\s\S]*?)endfacet/g,p=/solid\s(.+)/,g=0,v=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,m=new RegExp("vertex"+v+v+v,"g"),d=new RegExp("normal"+v+v+v,"g"),R=[],E=[],S=[],P=new U,T,D=0,L=0,x=0;for(;(T=h.exec(l))!==null;){L=x;let y=T[0],I=(T=p.exec(y))!==null?T[1]:"";for(S.push(I);(T=f.exec(y))!==null;){let Y=0,J=0,V=T[0];for(;(T=d.exec(V))!==null;)P.x=parseFloat(T[1]),P.y=parseFloat(T[2]),P.z=parseFloat(T[3]),J++;for(;(T=m.exec(V))!==null;)R.push(parseFloat(T[1]),parseFloat(T[2]),parseFloat(T[3])),E.push(P.x,P.y,P.z),Y++,x++;J!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+g),Y!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+g),g++}let N=L,q=x-L;u.userData.groupNames=S,u.addGroup(N,q,D),D++}return u.setAttribute("position",new $t(R,3)),u.setAttribute("normal",new $t(E,3)),u}function o(l){return typeof l!="string"?new TextDecoder().decode(l):l}function a(l){if(typeof l=="string"){let u=new Uint8Array(l.length);for(let h=0;h<l.length;h++)u[h]=l.charCodeAt(h)&255;return u.buffer||u}else return l}let c=a(t);return e(c)?r(c):s(o(t))}};var bv=/^[og]\s*(.+)?/,wv=/^mtllib /,Ev=/^usemtl /,Tv=/^usemap /,$u=/\s+/,Ju=new U,pc=new U,Ku=new U,ju=new U,vn=new U,Na=new Nt;function Av(){let i={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(t,e){if(this.object&&this.object.fromDeclaration===!1){this.object.name=t,this.object.fromDeclaration=e!==!1;return}let n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:t||"",fromDeclaration:e!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(r,s){let o=this._finalize(!1);o&&(o.inherited||o.groupCount<=0)&&this.materials.splice(o.index,1);let a={index:this.materials.length,name:r||"",mtllib:Array.isArray(s)&&s.length>0?s[s.length-1]:"",smooth:o!==void 0?o.smooth:this.smooth,groupStart:o!==void 0?o.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(c){let l={index:typeof c=="number"?c:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return l.clone=this.clone.bind(l),l}};return this.materials.push(a),a},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(r){let s=this.currentMaterial();if(s&&s.groupEnd===-1&&(s.groupEnd=this.geometry.vertices.length/3,s.groupCount=s.groupEnd-s.groupStart,s.inherited=!1),r&&this.materials.length>1)for(let o=this.materials.length-1;o>=0;o--)this.materials[o].groupCount<=0&&this.materials.splice(o,1);return r&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),s}},n&&n.name&&typeof n.clone=="function"){let r=n.clone(0);r.inherited=!0,this.object.materials.push(r)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(t,e){let n=parseInt(t,10);return(n>=0?n-1:n+e/3)*3},parseNormalIndex:function(t,e){let n=parseInt(t,10);return(n>=0?n-1:n+e/3)*3},parseUVIndex:function(t,e){let n=parseInt(t,10);return(n>=0?n-1:n+e/2)*2},addVertex:function(t,e,n){let r=this.vertices,s=this.object.geometry.vertices;s.push(r[t+0],r[t+1],r[t+2]),s.push(r[e+0],r[e+1],r[e+2]),s.push(r[n+0],r[n+1],r[n+2])},addVertexPoint:function(t){let e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addVertexLine:function(t){let e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addNormal:function(t,e,n){let r=this.normals,s=this.object.geometry.normals;s.push(r[t+0],r[t+1],r[t+2]),s.push(r[e+0],r[e+1],r[e+2]),s.push(r[n+0],r[n+1],r[n+2])},addFaceNormal:function(t,e,n){let r=this.vertices,s=this.object.geometry.normals;Ju.fromArray(r,t),pc.fromArray(r,e),Ku.fromArray(r,n),vn.subVectors(Ku,pc),ju.subVectors(Ju,pc),vn.cross(ju),vn.normalize(),s.push(vn.x,vn.y,vn.z),s.push(vn.x,vn.y,vn.z),s.push(vn.x,vn.y,vn.z)},addColor:function(t,e,n){let r=this.colors,s=this.object.geometry.colors;r[t]!==void 0&&s.push(r[t+0],r[t+1],r[t+2]),r[e]!==void 0&&s.push(r[e+0],r[e+1],r[e+2]),r[n]!==void 0&&s.push(r[n+0],r[n+1],r[n+2])},addUV:function(t,e,n){let r=this.uvs,s=this.object.geometry.uvs;s.push(r[t+0],r[t+1]),s.push(r[e+0],r[e+1]),s.push(r[n+0],r[n+1])},addDefaultUV:function(){let t=this.object.geometry.uvs;t.push(0,0),t.push(0,0),t.push(0,0)},addUVLine:function(t){let e=this.uvs;this.object.geometry.uvs.push(e[t+0],e[t+1])},addFace:function(t,e,n,r,s,o,a,c,l){let u=this.vertices.length,h=this.parseVertexIndex(t,u),f=this.parseVertexIndex(e,u),p=this.parseVertexIndex(n,u);if(this.addVertex(h,f,p),this.addColor(h,f,p),a!==void 0&&a!==""){let g=this.normals.length;h=this.parseNormalIndex(a,g),f=this.parseNormalIndex(c,g),p=this.parseNormalIndex(l,g),this.addNormal(h,f,p)}else this.addFaceNormal(h,f,p);if(r!==void 0&&r!==""){let g=this.uvs.length;h=this.parseUVIndex(r,g),f=this.parseUVIndex(s,g),p=this.parseUVIndex(o,g),this.addUV(h,f,p),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(t){this.object.geometry.type="Points";let e=this.vertices.length;for(let n=0,r=t.length;n<r;n++){let s=this.parseVertexIndex(t[n],e);this.addVertexPoint(s),this.addColor(s)}},addLineGeometry:function(t,e){this.object.geometry.type="Line";let n=this.vertices.length,r=this.uvs.length;for(let s=0,o=t.length;s<o;s++)this.addVertexLine(this.parseVertexIndex(t[s],n));for(let s=0,o=e.length;s<o;s++)this.addUVLine(this.parseUVIndex(e[s],r))}};return i.startObject("",!1),i}var Oa=class extends Je{constructor(t){super(t),this.materials=null}load(t,e,n,r){let s=this,o=new ii(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){try{e(s.parse(a))}catch(c){r?r(c):console.error(c),s.manager.itemError(t)}},n,r)}setMaterials(t){return this.materials=t,this}parse(t){let e=new Av;t.indexOf(`\r
`)!==-1&&(t=t.replace(/\r\n/g,`
`)),t.indexOf(`\\
`)!==-1&&(t=t.replace(/\\\n/g,""));let n=t.split(`
`),r=[];for(let a=0,c=n.length;a<c;a++){let l=n[a].trimStart();if(l.length===0)continue;let u=l.charAt(0);if(u!=="#")if(u==="v"){let h=l.split($u);switch(h[0]){case"v":e.vertices.push(parseFloat(h[1]),parseFloat(h[2]),parseFloat(h[3])),h.length>=7?(Na.setRGB(parseFloat(h[4]),parseFloat(h[5]),parseFloat(h[6]),we),e.colors.push(Na.r,Na.g,Na.b)):e.colors.push(void 0,void 0,void 0);break;case"vn":e.normals.push(parseFloat(h[1]),parseFloat(h[2]),parseFloat(h[3]));break;case"vt":e.uvs.push(parseFloat(h[1]),parseFloat(h[2]));break}}else if(u==="f"){let f=l.slice(1).trim().split($u),p=[];for(let v=0,m=f.length;v<m;v++){let d=f[v];if(d.length>0){let R=d.split("/");p.push(R)}}let g=p[0];for(let v=1,m=p.length-1;v<m;v++){let d=p[v],R=p[v+1];e.addFace(g[0],d[0],R[0],g[1],d[1],R[1],g[2],d[2],R[2])}}else if(u==="l"){let h=l.substring(1).trim().split(" "),f=[],p=[];if(l.indexOf("/")===-1)f=h;else for(let g=0,v=h.length;g<v;g++){let m=h[g].split("/");m[0]!==""&&f.push(m[0]),m[1]!==""&&p.push(m[1])}e.addLineGeometry(f,p)}else if(u==="p"){let f=l.slice(1).trim().split(" ");e.addPointGeometry(f)}else if((r=bv.exec(l))!==null){let h=(" "+r[0].slice(1).trim()).slice(1);e.startObject(h)}else if(Ev.test(l))e.object.startMaterial(l.substring(7).trim(),e.materialLibraries);else if(wv.test(l))e.materialLibraries.push(l.substring(7).trim());else if(Tv.test(l))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(u==="s"){if(r=l.split(" "),r.length>1){let f=r[1].trim().toLowerCase();e.object.smooth=f!=="0"&&f!=="off"}else e.object.smooth=!0;let h=e.object.currentMaterial();h&&(h.smooth=e.object.smooth)}else{if(l==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+l+'"')}}e.finalize();let s=new De;if(s.materialLibraries=[].concat(e.materialLibraries),!(e.objects.length===1&&e.objects[0].geometry.vertices.length===0)===!0)for(let a=0,c=e.objects.length;a<c;a++){let l=e.objects[a],u=l.geometry,h=l.materials,f=u.type==="Line",p=u.type==="Points",g=!1;if(u.vertices.length===0)continue;let v=new he;v.setAttribute("position",new $t(u.vertices,3)),u.normals.length>0&&v.setAttribute("normal",new $t(u.normals,3)),u.colors.length>0&&(g=!0,v.setAttribute("color",new $t(u.colors,3))),u.hasUVIndices===!0&&v.setAttribute("uv",new $t(u.uvs,2));let m=[];for(let R=0,E=h.length;R<E;R++){let S=h[R],P=S.name+"_"+S.smooth+"_"+g,T=e.materials[P];if(this.materials!==null){if(T=this.materials.create(S.name),f&&T&&!(T instanceof Nn)){let D=new Nn;$e.prototype.copy.call(D,T),D.color.copy(T.color),T=D}else if(p&&T&&!(T instanceof ni)){let D=new ni({size:10,sizeAttenuation:!1});$e.prototype.copy.call(D,T),D.color.copy(T.color),D.map=T.map,T=D}}T===void 0&&(f?T=new Nn:p?T=new ni({size:1,sizeAttenuation:!1}):T=new On,T.name=S.name,T.flatShading=!S.smooth,T.vertexColors=g,e.materials[P]=T),m.push(T)}let d;if(m.length>1){for(let R=0,E=h.length;R<E;R++){let S=h[R];v.addGroup(S.groupStart,S.groupCount,R)}f?d=new Xi(v,m):p?d=new qi(v,m):d=new de(v,m)}else f?d=new Xi(v,m[0]):p?d=new qi(v,m[0]):d=new de(v,m[0]);d.name=l.name,s.add(d)}else if(e.vertices.length>0){let a=new ni({size:1,sizeAttenuation:!1}),c=new he;c.setAttribute("position",new $t(e.vertices,3)),e.colors.length>0&&e.colors[0]!==void 0&&(c.setAttribute("color",new $t(e.colors,3)),a.vertexColors=!0);let l=new qi(c,a);s.add(l)}return s}};var on=Uint8Array,Hr=Uint16Array,Cv=Int32Array,Qu=new on([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),tf=new on([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Rv=new on([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),ef=function(i,t){for(var e=new Hr(31),n=0;n<31;++n)e[n]=t+=1<<i[n-1];for(var r=new Cv(e[30]),n=1;n<30;++n)for(var s=e[n];s<e[n+1];++s)r[s]=s-e[n]<<5|n;return{b:e,r}},nf=ef(Qu,2),rf=nf.b,Iv=nf.r;rf[28]=258,Iv[258]=28;var sf=ef(tf,0),Pv=sf.b,OM=sf.r,_c=new Hr(32768);for(ee=0;ee<32768;++ee)ai=(ee&43690)>>1|(ee&21845)<<1,ai=(ai&52428)>>2|(ai&13107)<<2,ai=(ai&61680)>>4|(ai&3855)<<4,_c[ee]=((ai&65280)>>8|(ai&255)<<8)>>1;var ai,ee,Cs=(function(i,t,e){for(var n=i.length,r=0,s=new Hr(t);r<n;++r)i[r]&&++s[i[r]-1];var o=new Hr(t);for(r=1;r<t;++r)o[r]=o[r-1]+s[r-1]<<1;var a;if(e){a=new Hr(1<<t);var c=15-t;for(r=0;r<n;++r)if(i[r])for(var l=r<<4|i[r],u=t-i[r],h=o[i[r]-1]++<<u,f=h|(1<<u)-1;h<=f;++h)a[_c[h]>>c]=l}else for(a=new Hr(n),r=0;r<n;++r)i[r]&&(a[r]=_c[o[i[r]-1]++]>>15-i[r]);return a}),Rs=new on(288);for(ee=0;ee<144;++ee)Rs[ee]=8;var ee;for(ee=144;ee<256;++ee)Rs[ee]=9;var ee;for(ee=256;ee<280;++ee)Rs[ee]=7;var ee;for(ee=280;ee<288;++ee)Rs[ee]=8;var ee,of=new on(32);for(ee=0;ee<32;++ee)of[ee]=5;var ee;var Dv=Cs(Rs,9,1);var Lv=Cs(of,5,1),mc=function(i){for(var t=i[0],e=1;e<i.length;++e)i[e]>t&&(t=i[e]);return t},Cn=function(i,t,e){var n=t/8|0;return(i[n]|i[n+1]<<8)>>(t&7)&e},gc=function(i,t){var e=t/8|0;return(i[e]|i[e+1]<<8|i[e+2]<<16)>>(t&7)},Uv=function(i){return(i+7)/8|0},yc=function(i,t,e){return(t==null||t<0)&&(t=0),(e==null||e>i.length)&&(e=i.length),new on(i.subarray(t,e))};var Fv=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],_n=function(i,t,e){var n=new Error(t||Fv[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,_n),!e)throw n;return n},Nv=function(i,t,e,n){var r=i.length,s=n?n.length:0;if(!r||t.f&&!t.l)return e||new on(0);var o=!e,a=o||t.i!=2,c=t.i;o&&(e=new on(r*3));var l=function(X){var nt=e.length;if(X>nt){var b=new on(Math.max(nt*2,X));b.set(e),e=b}},u=t.f||0,h=t.p||0,f=t.b||0,p=t.l,g=t.d,v=t.m,m=t.n,d=r*8;do{if(!p){u=Cn(i,h,1);var R=Cn(i,h+1,3);if(h+=3,R)if(R==1)p=Dv,g=Lv,v=9,m=5;else if(R==2){var T=Cn(i,h,31)+257,D=Cn(i,h+10,15)+4,L=T+Cn(i,h+5,31)+1;h+=14;for(var x=new on(L),y=new on(19),I=0;I<D;++I)y[Rv[I]]=Cn(i,h+I*3,7);h+=D*3;for(var N=mc(y),q=(1<<N)-1,Y=Cs(y,N,1),I=0;I<L;){var J=Y[Cn(i,h,q)];h+=J&15;var E=J>>4;if(E<16)x[I++]=E;else{var V=0,tt=0;for(E==16?(tt=3+Cn(i,h,3),h+=2,V=x[I-1]):E==17?(tt=3+Cn(i,h,7),h+=3):E==18&&(tt=11+Cn(i,h,127),h+=7);tt--;)x[I++]=V}}var G=x.subarray(0,T),ot=x.subarray(T);v=mc(G),m=mc(ot),p=Cs(G,v,1),g=Cs(ot,m,1)}else _n(1);else{var E=Uv(h)+4,S=i[E-4]|i[E-3]<<8,P=E+S;if(P>r){c&&_n(0);break}a&&l(f+S),e.set(i.subarray(E,P),f),t.b=f+=S,t.p=h=P*8,t.f=u;continue}if(h>d){c&&_n(0);break}}a&&l(f+131072);for(var mt=(1<<v)-1,xt=(1<<m)-1,Lt=h;;Lt=h){var V=p[gc(i,h)&mt],Ot=V>>4;if(h+=V&15,h>d){c&&_n(0);break}if(V||_n(2),Ot<256)e[f++]=Ot;else if(Ot==256){Lt=h,p=null;break}else{var Ht=Ot-254;if(Ot>264){var I=Ot-257,Et=Qu[I];Ht=Cn(i,h,(1<<Et)-1)+rf[I],h+=Et}var C=g[gc(i,h)&xt],A=C>>4;C||_n(3),h+=C&15;var ot=Pv[A];if(A>3){var Et=tf[A];ot+=gc(i,h)&(1<<Et)-1,h+=Et}if(h>d){c&&_n(0);break}a&&l(f+131072);var O=f+Ht;if(f<ot){var W=s-ot,H=Math.min(ot,O);for(W+f<0&&_n(3);f<H;++f)e[f]=n[W+f]}for(;f<O;++f)e[f]=e[f-ot]}}t.l=p,t.p=Lt,t.b=f,t.f=u,p&&(u=1,t.m=v,t.d=g,t.n=m)}while(!u);return f!=e.length&&o?yc(e,0,f):e.subarray(0,f)};var Ov=new on(0);var Vn=function(i,t){return i[t]|i[t+1]<<8},Rn=function(i,t){return(i[t]|i[t+1]<<8|i[t+2]<<16|i[t+3]<<24)>>>0},vc=function(i,t){return Rn(i,t)+Rn(i,t+4)*4294967296};function Bv(i,t){return Nv(i,{i:2},t&&t.out,t&&t.dictionary)}var xc=typeof TextDecoder<"u"&&new TextDecoder,zv=0;try{xc.decode(Ov,{stream:!0}),zv=1}catch{}var kv=function(i){for(var t="",e=0;;){var n=i[e++],r=(n>127)+(n>223)+(n>239);if(e+r>i.length)return{s:t,r:yc(i,e-1)};r?r==3?(n=((n&15)<<18|(i[e++]&63)<<12|(i[e++]&63)<<6|i[e++]&63)-65536,t+=String.fromCharCode(55296|n>>10,56320|n&1023)):r&1?t+=String.fromCharCode((n&31)<<6|i[e++]&63):t+=String.fromCharCode((n&15)<<12|(i[e++]&63)<<6|i[e++]&63):t+=String.fromCharCode(n)}};function Vv(i,t){if(t){for(var e="",n=0;n<i.length;n+=16384)e+=String.fromCharCode.apply(null,i.subarray(n,n+16384));return e}else{if(xc)return xc.decode(i);var r=kv(i),s=r.s,e=r.r;return e.length&&_n(8),s}}var Hv=function(i,t){return t+30+Vn(i,t+26)+Vn(i,t+28)},Gv=function(i,t,e){var n=Vn(i,t+28),r=Vv(i.subarray(t+46,t+46+n),!(Vn(i,t+8)&2048)),s=t+46+n,o=Rn(i,t+20),a=e&&o==4294967295?Wv(i,s):[o,Rn(i,t+24),Rn(i,t+42)],c=a[0],l=a[1],u=a[2];return[Vn(i,t+10),c,l,r,s+Vn(i,t+30)+Vn(i,t+32),u]},Wv=function(i,t){for(;Vn(i,t)!=1;t+=4+Vn(i,t+2));return[vc(i,t+12),vc(i,t+4),vc(i,t+20)]};function af(i,t){for(var e={},n=i.length-22;Rn(i,n)!=101010256;--n)(!n||i.length-n>65558)&&_n(13);var r=Vn(i,n+8);if(!r)return{};var s=Rn(i,n+16),o=s==4294967295||r==65535;if(o){var a=Rn(i,n-12);o=Rn(i,a)==101075792,o&&(r=Rn(i,a+32),s=Rn(i,a+48))}for(var c=t&&t.filter,l=0;l<r;++l){var u=Gv(i,s,o),h=u[0],f=u[1],p=u[2],g=u[3],v=u[4],m=u[5],d=Hv(i,m);s=v,(!c||c({name:g,size:f,originalSize:p,compression:h}))&&(h?h==8?e[g]=Bv(i.subarray(d,d+f),{out:new on(p)}):_n(14,"unknown compression type "+h):e[g]=yc(i,d,d+f))}return e}var Mc=we,Ba=class extends Je{constructor(t){super(t),this.availableExtensions=[]}load(t,e,n,r){let s=this,o=new ii(s.manager);o.setPath(s.path),o.setResponseType("arraybuffer"),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(t,function(a){try{e(s.parse(a))}catch(c){r?r(c):console.error(c),s.manager.itemError(t)}},n,r)}parse(t){let e=this,n=new ds(this.manager);function r(C){let A=null,O=null,W,H,X=[],nt=[],b,et={},it={},at={},K=new TextDecoder;try{A=af(new Uint8Array(C))}catch(Dt){if(Dt instanceof ReferenceError)return console.error("THREE.3MFLoader: fflate missing and file is compressed."),null}let Yt=null;for(O in A)O.match(/\_rels\/.rels$/)?W=O:O.match(/3D\/_rels\/.*\.model\.rels$/)?H=O:O.match(/^3D\/[^\/]*\.model$/)?Yt=O:O.match(/^3D\/.*\/.*\.model$/)?X.push(O):O.match(/^3D\/Textures?\/.*/)&&nt.push(O);if(X.push(Yt),W===void 0)throw new Error("THREE.ThreeMFLoader: Cannot find relationship file `rels` in 3MF archive.");let dt=A[W],Ct=K.decode(dt),Kt=s(Ct);if(H){let Dt=A[H],w=K.decode(Dt);b=s(w)}for(let Dt=0;Dt<X.length;Dt++){let w=X[Dt],_=A[w],z=K.decode(_),Q=new DOMParser().parseFromString(z,"application/xml");Q.documentElement.nodeName.toLowerCase()!=="model"&&console.error("THREE.3MFLoader: Error loading 3MF - no 3MF document found: ",w);let st=Q.querySelector("model"),j={};for(let ft=0;ft<st.attributes.length;ft++){let Tt=st.attributes[ft];Tt.name.match(/^xmlns:(.+)$/)&&(j[Tt.value]=RegExp.$1)}let Mt=T(st);Mt.xml=st,0<Object.keys(j).length&&(Mt.extensions=j),et[w]=Mt}for(let Dt=0;Dt<nt.length;Dt++){let w=nt[Dt];at[w]=A[w].buffer}return{rels:Kt,modelRels:b,model:et,printTicket:it,texture:at}}function s(C){let A=[],W=new DOMParser().parseFromString(C,"application/xml").querySelectorAll("Relationship");for(let H=0;H<W.length;H++){let X=W[H],nt={target:X.getAttribute("Target"),id:X.getAttribute("Id"),type:X.getAttribute("Type")};A.push(nt)}return A}function o(C){let A={};for(let O=0;O<C.length;O++){let W=C[O],H=W.getAttribute("name");0<=["Title","Designer","Description","Copyright","LicenseTerms","Rating","CreationDate","ModificationDate"].indexOf(H)&&(A[H]=W.textContent)}return A}function a(C){let A={id:C.getAttribute("id"),basematerials:[]},O=C.querySelectorAll("base");for(let W=0;W<O.length;W++){let H=O[W],X=g(H);X.index=W,A.basematerials.push(X)}return A}function c(C){return{id:C.getAttribute("id"),path:C.getAttribute("path"),contenttype:C.getAttribute("contenttype"),tilestyleu:C.getAttribute("tilestyleu"),tilestylev:C.getAttribute("tilestylev"),filter:C.getAttribute("filter")}}function l(C){let A={id:C.getAttribute("id"),texid:C.getAttribute("texid"),displaypropertiesid:C.getAttribute("displaypropertiesid")},O=C.querySelectorAll("tex2coord"),W=[];for(let H=0;H<O.length;H++){let X=O[H],nt=X.getAttribute("u"),b=X.getAttribute("v");W.push(parseFloat(nt),parseFloat(b))}return A.uvs=new Float32Array(W),A}function u(C){let A={id:C.getAttribute("id"),displaypropertiesid:C.getAttribute("displaypropertiesid")},O=C.querySelectorAll("color"),W=[],H=new Nt;for(let X=0;X<O.length;X++){let b=O[X].getAttribute("color");H.setStyle(b.substring(0,7),Mc),W.push(H.r,H.g,H.b)}return A.colors=new Float32Array(W),A}function h(C){let A=C.children,O={};for(let W=0;W<A.length;W++){let H={type:A[W].nodeName.substring(2)};for(let X=0;X<A[W].attributes.length;X++){let nt=A[W].attributes[X];nt.specified&&(H[nt.name]=nt.value)}O[A[W].getAttribute("identifier")]=H}return O}function f(C){let A={id:C.getAttribute("id"),displayname:C.getAttribute("displayname")},O=C.children,W={};for(let H=0;H<O.length;H++){let X=O[H];if(X.nodeName==="i:in"||X.nodeName==="i:out")W[X.nodeName==="i:in"?"inputs":"outputs"]=h(X);else{let nt=X.children,b={op:X.nodeName.substring(2),identifier:X.getAttribute("identifier")};for(let et=0;et<nt.length;et++)b[nt[et].nodeName.substring(2)]=h(nt[et]);W[b.identifier]=b}}return A.operations=W,A}function p(C){let A={id:C.getAttribute("id")},O=C.querySelectorAll("pbmetallic"),W=[];for(let H=0;H<O.length;H++){let X=O[H];W.push({name:X.getAttribute("name"),metallicness:parseFloat(X.getAttribute("metallicness")),roughness:parseFloat(X.getAttribute("roughness"))})}return A.data=W,A}function g(C){let A={};return A.name=C.getAttribute("name"),A.displaycolor=C.getAttribute("displaycolor"),A.displaypropertiesid=C.getAttribute("displaypropertiesid"),A}function v(C){let A={},O=[],W=C.querySelectorAll("vertices vertex");for(let b=0;b<W.length;b++){let et=W[b],it=et.getAttribute("x"),at=et.getAttribute("y"),K=et.getAttribute("z");O.push(parseFloat(it),parseFloat(at),parseFloat(K))}A.vertices=new Float32Array(O);let H=[],X=[],nt=C.querySelectorAll("triangles triangle");for(let b=0;b<nt.length;b++){let et=nt[b],it=et.getAttribute("v1"),at=et.getAttribute("v2"),K=et.getAttribute("v3"),Yt=et.getAttribute("p1"),dt=et.getAttribute("p2"),Ct=et.getAttribute("p3"),Kt=et.getAttribute("pid"),Dt={};Dt.v1=parseInt(it,10),Dt.v2=parseInt(at,10),Dt.v3=parseInt(K,10),X.push(Dt.v1,Dt.v2,Dt.v3),Yt&&(Dt.p1=parseInt(Yt,10)),dt&&(Dt.p2=parseInt(dt,10)),Ct&&(Dt.p3=parseInt(Ct,10)),Kt&&(Dt.pid=Kt),0<Object.keys(Dt).length&&H.push(Dt)}return A.triangleProperties=H,A.triangles=new Uint32Array(X),A}function m(C){let A=[],O=C.querySelectorAll("component");for(let W=0;W<O.length;W++){let H=O[W],X=d(H);A.push(X)}return A}function d(C){let A={};A.objectId=C.getAttribute("objectid");let O=C.getAttribute("transform");return O&&(A.transform=R(O)),A}function R(C){let A=[];C.split(" ").forEach(function(W){A.push(parseFloat(W))});let O=new oe;return O.set(A[0],A[3],A[6],A[9],A[1],A[4],A[7],A[10],A[2],A[5],A[8],A[11],0,0,0,1),O}function E(C){let A={type:C.getAttribute("type")},O=C.getAttribute("id");O&&(A.id=O);let W=C.getAttribute("pid");W&&(A.pid=W);let H=C.getAttribute("pindex");H&&(A.pindex=H);let X=C.getAttribute("thumbnail");X&&(A.thumbnail=X);let nt=C.getAttribute("partnumber");nt&&(A.partnumber=nt);let b=C.getAttribute("name");b&&(A.name=b);let et=C.querySelector("mesh");et&&(A.mesh=v(et));let it=C.querySelector("components");return it&&(A.components=m(it)),A}function S(C){let A={};A.basematerials={};let O=C.querySelectorAll("basematerials");for(let it=0;it<O.length;it++){let at=O[it],K=a(at);A.basematerials[K.id]=K}A.texture2d={};let W=C.querySelectorAll("texture2d");for(let it=0;it<W.length;it++){let at=W[it],K=c(at);A.texture2d[K.id]=K}A.colorgroup={};let H=C.querySelectorAll("colorgroup");for(let it=0;it<H.length;it++){let at=H[it],K=u(at);A.colorgroup[K.id]=K}let X=C.querySelectorAll("implicitfunction");X.length>0&&(A.implicitfunction={});for(let it=0;it<X.length;it++){let at=X[it],K=f(at);A.implicitfunction[K.id]=K}A.pbmetallicdisplayproperties={};let nt=C.querySelectorAll("pbmetallicdisplayproperties");for(let it=0;it<nt.length;it++){let at=nt[it],K=p(at);A.pbmetallicdisplayproperties[K.id]=K}A.texture2dgroup={};let b=C.querySelectorAll("texture2dgroup");for(let it=0;it<b.length;it++){let at=b[it],K=l(at);A.texture2dgroup[K.id]=K}A.object={};let et=C.querySelectorAll("object");for(let it=0;it<et.length;it++){let at=et[it],K=E(at);A.object[K.id]=K}return A}function P(C){let A=[],O=C.querySelectorAll("item");for(let W=0;W<O.length;W++){let H=O[W],X={objectId:H.getAttribute("objectid")},nt=H.getAttribute("transform");nt&&(X.transform=R(nt)),A.push(X)}return A}function T(C){let A={unit:C.getAttribute("unit")||"millimeter"},O=C.querySelectorAll("metadata");O&&(A.metadata=o(O));let W=C.querySelector("resources");W&&(A.resources=S(W));let H=C.querySelector("build");return H&&(A.build=P(H)),A}function D(C,A,O,W){let H=C.texid,nt=O.resources.texture2d[H];if(nt){let b=W[nt.path],et=nt.contenttype,it=new Blob([b],{type:et}),at=URL.createObjectURL(it),K=n.load(at,function(){URL.revokeObjectURL(at)});switch(K.colorSpace=Mc,nt.tilestyleu){case"wrap":K.wrapS=ti;break;case"mirror":K.wrapS=Gi;break;case"none":case"clamp":K.wrapS=Sn;break;default:K.wrapS=ti}switch(nt.tilestylev){case"wrap":K.wrapT=ti;break;case"mirror":K.wrapT=Gi;break;case"none":case"clamp":K.wrapT=Sn;break;default:K.wrapT=ti}switch(nt.filter){case"auto":K.magFilter=Oe,K.minFilter=Tn;break;case"linear":K.magFilter=Oe,K.minFilter=Oe,K.generateMipmaps=!1;break;case"nearest":K.magFilter=Ge,K.minFilter=Ge,K.generateMipmaps=!1;break;default:K.magFilter=Oe,K.minFilter=Tn}return K}else return null}function L(C,A,O,W,H,X,nt){let b=nt.pindex,et={};for(let K=0,Yt=A.length;K<Yt;K++){let dt=A[K],Ct=dt.p1!==void 0?dt.p1:b;et[Ct]===void 0&&(et[Ct]=[]),et[Ct].push(dt)}let it=Object.keys(et),at=[];for(let K=0,Yt=it.length;K<Yt;K++){let dt=it[K],Ct=et[dt],Kt=C.basematerials[dt],Dt=tt(Kt,W,H,X,nt,G),w=new he,_=[],z=O.vertices;for(let st=0,j=Ct.length;st<j;st++){let Mt=Ct[st];_.push(z[Mt.v1*3+0]),_.push(z[Mt.v1*3+1]),_.push(z[Mt.v1*3+2]),_.push(z[Mt.v2*3+0]),_.push(z[Mt.v2*3+1]),_.push(z[Mt.v2*3+2]),_.push(z[Mt.v3*3+0]),_.push(z[Mt.v3*3+1]),_.push(z[Mt.v3*3+2])}w.setAttribute("position",new $t(_,3));let Q=new de(w,Dt);at.push(Q)}return at}function x(C,A,O,W,H,X,nt){let b=new he,et=[],it=[],at=O.vertices,K=C.uvs;for(let Kt=0,Dt=A.length;Kt<Dt;Kt++){let w=A[Kt];et.push(at[w.v1*3+0]),et.push(at[w.v1*3+1]),et.push(at[w.v1*3+2]),et.push(at[w.v2*3+0]),et.push(at[w.v2*3+1]),et.push(at[w.v2*3+2]),et.push(at[w.v3*3+0]),et.push(at[w.v3*3+1]),et.push(at[w.v3*3+2]),it.push(K[w.p1*2+0]),it.push(K[w.p1*2+1]),it.push(K[w.p2*2+0]),it.push(K[w.p2*2+1]),it.push(K[w.p3*2+0]),it.push(K[w.p3*2+1])}b.setAttribute("position",new $t(et,3)),b.setAttribute("uv",new $t(it,2));let Yt=tt(C,W,H,X,nt,D),dt=new On({map:Yt,flatShading:!0});return new de(b,dt)}function y(C,A,O,W){let H=new he,X=[],nt=[],b=O.vertices,et=C.colors;for(let K=0,Yt=A.length;K<Yt;K++){let dt=A[K],Ct=dt.v1,Kt=dt.v2,Dt=dt.v3;X.push(b[Ct*3+0]),X.push(b[Ct*3+1]),X.push(b[Ct*3+2]),X.push(b[Kt*3+0]),X.push(b[Kt*3+1]),X.push(b[Kt*3+2]),X.push(b[Dt*3+0]),X.push(b[Dt*3+1]),X.push(b[Dt*3+2]);let w=dt.p1!==void 0?dt.p1:W.pindex,_=dt.p2!==void 0?dt.p2:w,z=dt.p3!==void 0?dt.p3:w;nt.push(et[w*3+0]),nt.push(et[w*3+1]),nt.push(et[w*3+2]),nt.push(et[_*3+0]),nt.push(et[_*3+1]),nt.push(et[_*3+2]),nt.push(et[z*3+0]),nt.push(et[z*3+1]),nt.push(et[z*3+2])}H.setAttribute("position",new $t(X,3)),H.setAttribute("color",new $t(nt,3));let it=new On({vertexColors:!0,flatShading:!0});return new de(H,it)}function I(C){let A=new he;A.setIndex(new be(C.triangles,1)),A.setAttribute("position",new be(C.vertices,3));let O=new On({name:Je.DEFAULT_MATERIAL_NAME,color:16777215,flatShading:!0});return new de(A,O)}function N(C,A,O,W,H,X){let nt=Object.keys(C),b=[];for(let et=0,it=nt.length;et<it;et++){let at=nt[et],K=C[at];switch(q(at,W)){case"material":let dt=W.resources.basematerials[at],Ct=L(dt,K,A,O,W,H,X);for(let w=0,_=Ct.length;w<_;w++)b.push(Ct[w]);break;case"texture":let Kt=W.resources.texture2dgroup[at];b.push(x(Kt,K,A,O,W,H,X));break;case"vertexColors":let Dt=W.resources.colorgroup[at];b.push(y(Dt,K,A,X));break;case"default":b.push(I(A));break;default:console.error("THREE.3MFLoader: Unsupported resource type.")}}if(X.name)for(let et=0;et<b.length;et++)b[et].name=X.name;return b}function q(C,A){return A.resources.texture2dgroup[C]!==void 0?"texture":A.resources.basematerials[C]!==void 0?"material":A.resources.colorgroup[C]!==void 0?"vertexColors":C==="default"?"default":void 0}function Y(C,A){let O={},W=C.triangleProperties,H=A.pid;for(let X=0,nt=W.length;X<nt;X++){let b=W[X],et=b.pid!==void 0?b.pid:H;et===void 0&&(et="default"),O[et]===void 0&&(O[et]=[]),O[et].push(b)}return O}function J(C,A,O,W,H){let X=new De,nt=Y(C,H),b=N(nt,C,A,O,W,H);for(let et=0,it=b.length;et<it;et++)X.add(b[et]);return X}function V(C,A,O){if(!C)return;let W=[],H=Object.keys(C);for(let X=0;X<H.length;X++){let nt=H[X];for(let b=0;b<e.availableExtensions.length;b++){let et=e.availableExtensions[b];et.ns===nt&&W.push(et)}}for(let X=0;X<W.length;X++){let nt=W[X];nt.apply(O,C[nt.ns],A)}}function tt(C,A,O,W,H,X){return C.build!==void 0||(C.build=X(C,A,O,W,H)),C.build}function G(C,A,O){let W,H=C.displaypropertiesid,X=O.resources.pbmetallicdisplayproperties;if(H!==null&&X[H]!==void 0){let it=X[H].data[C.index];W=new bi({flatShading:!0,roughness:it.roughness,metalness:it.metallicness})}else W=new On({flatShading:!0});W.name=C.name;let nt=C.displaycolor,b=nt.substring(0,7);return W.color.setStyle(b,Mc),nt.length===9&&(W.opacity=parseInt(nt.charAt(7)+nt.charAt(8),16)/255),W}function ot(C,A,O,W){let H=new De;for(let X=0;X<C.length;X++){let nt=C[X],b=A[nt.objectId];b===void 0&&(mt(nt.objectId,A,O,W),b=A[nt.objectId]);let et=b.clone(),it=nt.transform;it&&et.applyMatrix4(it),H.add(et)}return H}function mt(C,A,O,W){let H=O.resources.object[C];if(H.mesh){let X=H.mesh,nt=O.extensions,b=O.xml;V(nt,X,b),A[H.id]=tt(X,A,O,W,H,J)}else{let X=H.components;A[H.id]=tt(X,A,O,W,H,ot)}H.name&&(A[H.id].name=H.name),O.resources.implicitfunction&&console.warn("THREE.ThreeMFLoader: Implicit Functions are implemented in data-only.",O.resources.implicitfunction)}function xt(C){let A=C.model,O=C.modelRels,W={},H=Object.keys(A),X={};if(O)for(let nt=0,b=O.length;nt<b;nt++){let et=O[nt],it=et.target.substring(1);C.texture[it]&&(X[et.target]=C.texture[it])}for(let nt=0;nt<H.length;nt++){let b=H[nt],et=A[b],it=Object.keys(et.resources.object);for(let at=0;at<it.length;at++){let K=it[at];mt(K,W,et,X)}}return W}function Lt(C){for(let A=0;A<C.length;A++){let O=C[A];if(O.target.split(".").pop().toLowerCase()==="model")return O}}function Ot(C,A){let O=new De,W=Lt(A.rels),H=A.model[W.target.substring(1)].build;for(let X=0;X<H.length;X++){let nt=H[X],b=C[nt.objectId].clone(),et=nt.transform;et&&b.applyMatrix4(et),O.add(b)}return O}let Ht=r(t),Et=xt(Ht);return Ot(Et,Ht)}addExtension(t){this.availableExtensions.push(t)}};var xe=Uint8Array,an=Uint16Array,Dc=Int32Array,za=new xe([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),ka=new xe([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Tc=new xe([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),df=function(i,t){for(var e=new an(31),n=0;n<31;++n)e[n]=t+=1<<i[n-1];for(var r=new Dc(e[30]),n=1;n<30;++n)for(var s=e[n];s<e[n+1];++s)r[s]=s-e[n]<<5|n;return{b:e,r}},pf=df(za,2),mf=pf.b,Ac=pf.r;mf[28]=258,Ac[258]=28;var gf=df(ka,0),qv=gf.b,lf=gf.r,Cc=new an(32768);for(ne=0;ne<32768;++ne)li=(ne&43690)>>1|(ne&21845)<<1,li=(li&52428)>>2|(li&13107)<<2,li=(li&61680)>>4|(li&3855)<<4,Cc[ne]=((li&65280)>>8|(li&255)<<8)>>1;var li,ne,Gn=(function(i,t,e){for(var n=i.length,r=0,s=new an(t);r<n;++r)i[r]&&++s[i[r]-1];var o=new an(t);for(r=1;r<t;++r)o[r]=o[r-1]+s[r-1]<<1;var a;if(e){a=new an(1<<t);var c=15-t;for(r=0;r<n;++r)if(i[r])for(var l=r<<4|i[r],u=t-i[r],h=o[i[r]-1]++<<u,f=h|(1<<u)-1;h<=f;++h)a[Cc[h]>>c]=l}else for(a=new an(n),r=0;r<n;++r)i[r]&&(a[r]=Cc[o[i[r]-1]++]>>15-i[r]);return a}),Ci=new xe(288);for(ne=0;ne<144;++ne)Ci[ne]=8;var ne;for(ne=144;ne<256;++ne)Ci[ne]=9;var ne;for(ne=256;ne<280;++ne)Ci[ne]=7;var ne;for(ne=280;ne<288;++ne)Ci[ne]=8;var ne,Ds=new xe(32);for(ne=0;ne<32;++ne)Ds[ne]=5;var ne,Yv=Gn(Ci,9,0),Zv=Gn(Ci,9,1),$v=Gn(Ds,5,0),Jv=Gn(Ds,5,1),Sc=function(i){for(var t=i[0],e=1;e<i.length;++e)i[e]>t&&(t=i[e]);return t},In=function(i,t,e){var n=t/8|0;return(i[n]|i[n+1]<<8)>>(t&7)&e},bc=function(i,t){var e=t/8|0;return(i[e]|i[e+1]<<8|i[e+2]<<16)>>(t&7)},Lc=function(i){return(i+7)/8|0},Ls=function(i,t,e){return(t==null||t<0)&&(t=0),(e==null||e>i.length)&&(e=i.length),new xe(i.subarray(t,e))};var Kv=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Xe=function(i,t,e){var n=new Error(t||Kv[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,Xe),!e)throw n;return n},jv=function(i,t,e,n){var r=i.length,s=n?n.length:0;if(!r||t.f&&!t.l)return e||new xe(0);var o=!e,a=o||t.i!=2,c=t.i;o&&(e=new xe(r*3));var l=function(X){var nt=e.length;if(X>nt){var b=new xe(Math.max(nt*2,X));b.set(e),e=b}},u=t.f||0,h=t.p||0,f=t.b||0,p=t.l,g=t.d,v=t.m,m=t.n,d=r*8;do{if(!p){u=In(i,h,1);var R=In(i,h+1,3);if(h+=3,R)if(R==1)p=Zv,g=Jv,v=9,m=5;else if(R==2){var T=In(i,h,31)+257,D=In(i,h+10,15)+4,L=T+In(i,h+5,31)+1;h+=14;for(var x=new xe(L),y=new xe(19),I=0;I<D;++I)y[Tc[I]]=In(i,h+I*3,7);h+=D*3;for(var N=Sc(y),q=(1<<N)-1,Y=Gn(y,N,1),I=0;I<L;){var J=Y[In(i,h,q)];h+=J&15;var E=J>>4;if(E<16)x[I++]=E;else{var V=0,tt=0;for(E==16?(tt=3+In(i,h,3),h+=2,V=x[I-1]):E==17?(tt=3+In(i,h,7),h+=3):E==18&&(tt=11+In(i,h,127),h+=7);tt--;)x[I++]=V}}var G=x.subarray(0,T),ot=x.subarray(T);v=Sc(G),m=Sc(ot),p=Gn(G,v,1),g=Gn(ot,m,1)}else Xe(1);else{var E=Lc(h)+4,S=i[E-4]|i[E-3]<<8,P=E+S;if(P>r){c&&Xe(0);break}a&&l(f+S),e.set(i.subarray(E,P),f),t.b=f+=S,t.p=h=P*8,t.f=u;continue}if(h>d){c&&Xe(0);break}}a&&l(f+131072);for(var mt=(1<<v)-1,xt=(1<<m)-1,Lt=h;;Lt=h){var V=p[bc(i,h)&mt],Ot=V>>4;if(h+=V&15,h>d){c&&Xe(0);break}if(V||Xe(2),Ot<256)e[f++]=Ot;else if(Ot==256){Lt=h,p=null;break}else{var Ht=Ot-254;if(Ot>264){var I=Ot-257,Et=za[I];Ht=In(i,h,(1<<Et)-1)+mf[I],h+=Et}var C=g[bc(i,h)&xt],A=C>>4;C||Xe(3),h+=C&15;var ot=qv[A];if(A>3){var Et=ka[A];ot+=bc(i,h)&(1<<Et)-1,h+=Et}if(h>d){c&&Xe(0);break}a&&l(f+131072);var O=f+Ht;if(f<ot){var W=s-ot,H=Math.min(ot,O);for(W+f<0&&Xe(3);f<H;++f)e[f]=n[W+f]}for(;f<O;++f)e[f]=e[f-ot]}}t.l=p,t.p=Lt,t.b=f,t.f=u,p&&(u=1,t.m=v,t.d=g,t.n=m)}while(!u);return f!=e.length&&o?Ls(e,0,f):e.subarray(0,f)},ci=function(i,t,e){e<<=t&7;var n=t/8|0;i[n]|=e,i[n+1]|=e>>8},Is=function(i,t,e){e<<=t&7;var n=t/8|0;i[n]|=e,i[n+1]|=e>>8,i[n+2]|=e>>16},wc=function(i,t){for(var e=[],n=0;n<i.length;++n)i[n]&&e.push({s:n,f:i[n]});var r=e.length,s=e.slice();if(!r)return{t:_f,l:0};if(r==1){var o=new xe(e[0].s+1);return o[e[0].s]=1,{t:o,l:1}}e.sort(function(P,T){return P.f-T.f}),e.push({s:-1,f:25001});var a=e[0],c=e[1],l=0,u=1,h=2;for(e[0]={s:-1,f:a.f+c.f,l:a,r:c};u!=r-1;)a=e[e[l].f<e[h].f?l++:h++],c=e[l!=u&&e[l].f<e[h].f?l++:h++],e[u++]={s:-1,f:a.f+c.f,l:a,r:c};for(var f=s[0].s,n=1;n<r;++n)s[n].s>f&&(f=s[n].s);var p=new an(f+1),g=Rc(e[u-1],p,0);if(g>t){var n=0,v=0,m=g-t,d=1<<m;for(s.sort(function(T,D){return p[D.s]-p[T.s]||T.f-D.f});n<r;++n){var R=s[n].s;if(p[R]>t)v+=d-(1<<g-p[R]),p[R]=t;else break}for(v>>=m;v>0;){var E=s[n].s;p[E]<t?v-=1<<t-p[E]++-1:++n}for(;n>=0&&v;--n){var S=s[n].s;p[S]==t&&(--p[S],++v)}g=t}return{t:new xe(p),l:g}},Rc=function(i,t,e){return i.s==-1?Math.max(Rc(i.l,t,e+1),Rc(i.r,t,e+1)):t[i.s]=e},cf=function(i){for(var t=i.length;t&&!i[--t];);for(var e=new an(++t),n=0,r=i[0],s=1,o=function(c){e[n++]=c},a=1;a<=t;++a)if(i[a]==r&&a!=t)++s;else{if(!r&&s>2){for(;s>138;s-=138)o(32754);s>2&&(o(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(o(r),--s;s>6;s-=6)o(8304);s>2&&(o(s-3<<5|8208),s=0)}for(;s--;)o(r);s=1,r=i[a]}return{c:e.subarray(0,n),n:t}},Ps=function(i,t){for(var e=0,n=0;n<t.length;++n)e+=i[n]*t[n];return e},vf=function(i,t,e){var n=e.length,r=Lc(t+2);i[r]=n&255,i[r+1]=n>>8,i[r+2]=i[r]^255,i[r+3]=i[r+1]^255;for(var s=0;s<n;++s)i[r+s+4]=e[s];return(r+4+n)*8},hf=function(i,t,e,n,r,s,o,a,c,l,u){ci(t,u++,e),++r[256];for(var h=wc(r,15),f=h.t,p=h.l,g=wc(s,15),v=g.t,m=g.l,d=cf(f),R=d.c,E=d.n,S=cf(v),P=S.c,T=S.n,D=new an(19),L=0;L<R.length;++L)++D[R[L]&31];for(var L=0;L<P.length;++L)++D[P[L]&31];for(var x=wc(D,7),y=x.t,I=x.l,N=19;N>4&&!y[Tc[N-1]];--N);var q=l+5<<3,Y=Ps(r,Ci)+Ps(s,Ds)+o,J=Ps(r,f)+Ps(s,v)+o+14+3*N+Ps(D,y)+2*D[16]+3*D[17]+7*D[18];if(c>=0&&q<=Y&&q<=J)return vf(t,u,i.subarray(c,c+l));var V,tt,G,ot;if(ci(t,u,1+(J<Y)),u+=2,J<Y){V=Gn(f,p,0),tt=f,G=Gn(v,m,0),ot=v;var mt=Gn(y,I,0);ci(t,u,E-257),ci(t,u+5,T-1),ci(t,u+10,N-4),u+=14;for(var L=0;L<N;++L)ci(t,u+3*L,y[Tc[L]]);u+=3*N;for(var xt=[R,P],Lt=0;Lt<2;++Lt)for(var Ot=xt[Lt],L=0;L<Ot.length;++L){var Ht=Ot[L]&31;ci(t,u,mt[Ht]),u+=y[Ht],Ht>15&&(ci(t,u,Ot[L]>>5&127),u+=Ot[L]>>12)}}else V=Yv,tt=Ci,G=$v,ot=Ds;for(var L=0;L<a;++L){var Et=n[L];if(Et>255){var Ht=Et>>18&31;Is(t,u,V[Ht+257]),u+=tt[Ht+257],Ht>7&&(ci(t,u,Et>>23&31),u+=za[Ht]);var C=Et&31;Is(t,u,G[C]),u+=ot[C],C>3&&(Is(t,u,Et>>5&8191),u+=ka[C])}else Is(t,u,V[Et]),u+=tt[Et]}return Is(t,u,V[256]),u+tt[256]},Qv=new Dc([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),_f=new xe(0),t_=function(i,t,e,n,r,s){var o=s.z||i.length,a=new xe(n+o+5*(1+Math.ceil(o/7e3))+r),c=a.subarray(n,a.length-r),l=s.l,u=(s.r||0)&7;if(t){u&&(c[0]=s.r>>3);for(var h=Qv[t-1],f=h>>13,p=h&8191,g=(1<<e)-1,v=s.p||new an(32768),m=s.h||new an(g+1),d=Math.ceil(e/3),R=2*d,E=function(et){return(i[et]^i[et+1]<<d^i[et+2]<<R)&g},S=new Dc(25e3),P=new an(288),T=new an(32),D=0,L=0,x=s.i||0,y=0,I=s.w||0,N=0;x+2<o;++x){var q=E(x),Y=x&32767,J=m[q];if(v[Y]=J,m[q]=Y,I<=x){var V=o-x;if((D>7e3||y>24576)&&(V>423||!l)){u=hf(i,c,0,S,P,T,L,y,N,x-N,u),y=D=L=0,N=x;for(var tt=0;tt<286;++tt)P[tt]=0;for(var tt=0;tt<30;++tt)T[tt]=0}var G=2,ot=0,mt=p,xt=Y-J&32767;if(V>2&&q==E(x-xt))for(var Lt=Math.min(f,V)-1,Ot=Math.min(32767,x),Ht=Math.min(258,V);xt<=Ot&&--mt&&Y!=J;){if(i[x+G]==i[x+G-xt]){for(var Et=0;Et<Ht&&i[x+Et]==i[x+Et-xt];++Et);if(Et>G){if(G=Et,ot=xt,Et>Lt)break;for(var C=Math.min(xt,Et-2),A=0,tt=0;tt<C;++tt){var O=x-xt+tt&32767,W=v[O],H=O-W&32767;H>A&&(A=H,J=O)}}}Y=J,J=v[Y],xt+=Y-J&32767}if(ot){S[y++]=268435456|Ac[G]<<18|lf[ot];var X=Ac[G]&31,nt=lf[ot]&31;L+=za[X]+ka[nt],++P[257+X],++T[nt],I=x+G,++D}else S[y++]=i[x],++P[i[x]]}}for(x=Math.max(x,I);x<o;++x)S[y++]=i[x],++P[i[x]];u=hf(i,c,l,S,P,T,L,y,N,x-N,u),l||(s.r=u&7|c[u/8|0]<<3,u-=7,s.h=m,s.p=v,s.i=x,s.w=I)}else{for(var x=s.w||0;x<o+l;x+=65535){var b=x+65535;b>=o&&(c[u/8|0]=l,b=o),u=vf(c,u+1,i.subarray(x,b))}s.i=o}return Ls(a,0,n+Lc(u)+r)},e_=(function(){for(var i=new Int32Array(256),t=0;t<256;++t){for(var e=t,n=9;--n;)e=(e&1&&-306674912)^e>>>1;i[t]=e}return i})(),n_=function(){var i=-1;return{p:function(t){for(var e=i,n=0;n<t.length;++n)e=e_[e&255^t[n]]^e>>>8;i=e},d:function(){return~i}}};var i_=function(i,t,e,n,r){if(!r&&(r={l:1},t.dictionary)){var s=t.dictionary.subarray(-32768),o=new xe(s.length+i.length);o.set(s),o.set(i,s.length),i=o,r.w=s.length}return t_(i,t.level==null?6:t.level,t.mem==null?r.l?Math.ceil(Math.max(8,Math.min(13,Math.log(i.length)))*1.5):20:12+t.mem,e,n,r)},xf=function(i,t){var e={};for(var n in i)e[n]=i[n];for(var n in t)e[n]=t[n];return e};var Hn=function(i,t){return i[t]|i[t+1]<<8},Pn=function(i,t){return(i[t]|i[t+1]<<8|i[t+2]<<16|i[t+3]<<24)>>>0},Ec=function(i,t){return Pn(i,t)+Pn(i,t+4)*4294967296},Le=function(i,t,e){for(;e;++t)i[t]=e,e>>>=8};function r_(i,t){return i_(i,t||{},0,0)}function s_(i,t){return jv(i,{i:2},t&&t.out,t&&t.dictionary)}var yf=function(i,t,e,n){for(var r in i){var s=i[r],o=t+r,a=n;Array.isArray(s)&&(a=xf(n,s[1]),s=s[0]),s instanceof xe?e[o]=[s,a]:(e[o+="/"]=[new xe(0),a],yf(s,o,e,n))}},uf=typeof TextEncoder<"u"&&new TextEncoder,Ic=typeof TextDecoder<"u"&&new TextDecoder,o_=0;try{Ic.decode(_f,{stream:!0}),o_=1}catch{}var a_=function(i){for(var t="",e=0;;){var n=i[e++],r=(n>127)+(n>223)+(n>239);if(e+r>i.length)return{s:t,r:Ls(i,e-1)};r?r==3?(n=((n&15)<<18|(i[e++]&63)<<12|(i[e++]&63)<<6|i[e++]&63)-65536,t+=String.fromCharCode(55296|n>>10,56320|n&1023)):r&1?t+=String.fromCharCode((n&31)<<6|i[e++]&63):t+=String.fromCharCode((n&15)<<12|(i[e++]&63)<<6|i[e++]&63):t+=String.fromCharCode(n)}};function hi(i,t){if(t){for(var e=new xe(i.length),n=0;n<i.length;++n)e[n]=i.charCodeAt(n);return e}if(uf)return uf.encode(i);for(var r=i.length,s=new xe(i.length+(i.length>>1)),o=0,a=function(u){s[o++]=u},n=0;n<r;++n){if(o+5>s.length){var c=new xe(o+8+(r-n<<1));c.set(s),s=c}var l=i.charCodeAt(n);l<128||t?a(l):l<2048?(a(192|l>>6),a(128|l&63)):l>55295&&l<57344?(l=65536+(l&1047552)|i.charCodeAt(++n)&1023,a(240|l>>18),a(128|l>>12&63),a(128|l>>6&63),a(128|l&63)):(a(224|l>>12),a(128|l>>6&63),a(128|l&63))}return Ls(s,0,o)}function Uc(i,t){if(t){for(var e="",n=0;n<i.length;n+=16384)e+=String.fromCharCode.apply(null,i.subarray(n,n+16384));return e}else{if(Ic)return Ic.decode(i);var r=a_(i),s=r.s,e=r.r;return e.length&&Xe(8),s}}var l_=function(i,t){return t+30+Hn(i,t+26)+Hn(i,t+28)},c_=function(i,t,e){var n=Hn(i,t+28),r=Uc(i.subarray(t+46,t+46+n),!(Hn(i,t+8)&2048)),s=t+46+n,o=Pn(i,t+20),a=e&&o==4294967295?h_(i,s):[o,Pn(i,t+24),Pn(i,t+42)],c=a[0],l=a[1],u=a[2];return[Hn(i,t+10),c,l,r,s+Hn(i,t+30)+Hn(i,t+32),u]},h_=function(i,t){for(;Hn(i,t)!=1;t+=4+Hn(i,t+2));return[Ec(i,t+12),Ec(i,t+4),Ec(i,t+20)]},Pc=function(i){var t=0;if(i)for(var e in i){var n=i[e].length;n>65535&&Xe(9),t+=n+4}return t},ff=function(i,t,e,n,r,s,o,a){var c=n.length,l=e.extra,u=a&&a.length,h=Pc(l);Le(i,t,o!=null?33639248:67324752),t+=4,o!=null&&(i[t++]=20,i[t++]=e.os),i[t]=20,t+=2,i[t++]=e.flag<<1|(s<0&&8),i[t++]=r&&8,i[t++]=e.compression&255,i[t++]=e.compression>>8;var f=new Date(e.mtime==null?Date.now():e.mtime),p=f.getFullYear()-1980;if((p<0||p>119)&&Xe(10),Le(i,t,p<<25|f.getMonth()+1<<21|f.getDate()<<16|f.getHours()<<11|f.getMinutes()<<5|f.getSeconds()>>1),t+=4,s!=-1&&(Le(i,t,e.crc),Le(i,t+4,s<0?-s-2:s),Le(i,t+8,e.size)),Le(i,t+12,c),Le(i,t+14,h),t+=16,o!=null&&(Le(i,t,u),Le(i,t+6,e.attrs),Le(i,t+10,o),t+=14),i.set(n,t),t+=c,h)for(var g in l){var v=l[g],m=v.length;Le(i,t,+g),Le(i,t+2,m),i.set(v,t+4),t+=4+m}return u&&(i.set(a,t),t+=u),t},u_=function(i,t,e,n,r){Le(i,t,101010256),Le(i,t+8,e),Le(i,t+10,e),Le(i,t+12,n),Le(i,t+16,r)};function Fc(i,t){t||(t={});var e={},n=[];yf(i,"",e,t);var r=0,s=0;for(var o in e){var a=e[o],c=a[0],l=a[1],u=l.level==0?0:8,h=hi(o),f=h.length,p=l.comment,g=p&&hi(p),v=g&&g.length,m=Pc(l.extra);f>65535&&Xe(11);var d=u?r_(c,l):c,R=d.length,E=n_();E.p(c),n.push(xf(l,{size:c.length,crc:E.d(),c:d,f:h,m:g,u:f!=o.length||g&&p.length!=v,o:r,compression:u})),r+=30+f+m+R,s+=76+2*(f+m)+(v||0)+R}for(var S=new xe(s+22),P=r,T=s-r,D=0;D<n.length;++D){var h=n[D];ff(S,h.o,h,h.f,h.u,h.c.length);var L=30+h.f.length+Pc(h.extra);S.set(h.c,h.o+L),ff(S,r,h,h.f,h.u,h.c.length,h.o,h.m),r+=16+L+(h.m?h.m.length:0)}return u_(S,r,n.length,T,P),S}function Mf(i,t){for(var e={},n=i.length-22;Pn(i,n)!=101010256;--n)(!n||i.length-n>65558)&&Xe(13);var r=Hn(i,n+8);if(!r)return{};var s=Pn(i,n+16),o=s==4294967295||r==65535;if(o){var a=Pn(i,n-12);o=Pn(i,a)==101075792,o&&(r=Pn(i,a+32),s=Pn(i,a+48))}for(var c=t&&t.filter,l=0;l<r;++l){var u=c_(i,s,o),h=u[0],f=u[1],p=u[2],g=u[3],v=u[4],m=u[5],d=l_(i,m);s=v,(!c||c({name:g,size:f,originalSize:p,compression:h}))&&(h?h==8?e[g]=s_(i.subarray(d,d+f),{out:new xe(p)}):Xe(14,"unknown compression type "+h):e[g]=Ls(i,d,d+f))}return e}var tS=Object.freeze([0,.02,.04,.08,.16,.32,.64,1.28,2.56,5.12,10.24,20.48,40.96,81.92,163.84,250]);var p_=i=>String(i).replace(/[<>&"']/g,t=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;","'":"&apos;"})[t]),Us=i=>Number(i.toFixed(6));function Sf(i){let t=[...new Set(i.flatMap(o=>[o.color,...o.vertexColors||[]]))],e=new Map(t.map((o,a)=>[o,a])),n=i.map((o,a)=>`<object id="${a+3}" type="model" name="${p_(o.name)}" pid="1" pindex="${e.get(o.color)}"><mesh><vertices>${o.vertices.map(c=>`<vertex x="${Us(c[0])}" y="${Us(c[1])}" z="${Us(c[2])}"/>`).join("")}</vertices><triangles>${o.triangles.map(c=>`<triangle v1="${c[0]}" v2="${c[1]}" v3="${c[2]}" pid="2" p1="${e.get(o.vertexColors?.[c[0]]||o.color)}" p2="${e.get(o.vertexColors?.[c[1]]||o.color)}" p3="${e.get(o.vertexColors?.[c[2]]||o.color)}"/>`).join("")}</triangles></mesh></object>`).join(""),r=i.length+3,s=`<?xml version="1.0" encoding="UTF-8"?><model unit="millimeter" xml:lang="tr-TR" xmlns="http://schemas.microsoft.com/3dmanufacturing/core/2015/02" xmlns:m="http://schemas.microsoft.com/3dmanufacturing/material/2015/02"><metadata name="Application">Katman</metadata><resources><basematerials id="1">${t.map((o,a)=>`<base name="Renk ${a+1} ${o}" displaycolor="${o}FF"/>`).join("")}</basematerials><m:colorgroup id="2">${t.map(o=>`<m:color color="${o}FF"/>`).join("")}</m:colorgroup>${n}<object id="${r}" type="model" name="Katman model"><components>${i.map((o,a)=>`<component objectid="${a+3}"/>`).join("")}</components></object></resources><build><item objectid="${r}"/></build></model>`;return Fc({"[Content_Types].xml":hi('<?xml version="1.0" encoding="UTF-8"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="model" ContentType="application/vnd.ms-package.3dmanufacturing-3dmodel+xml"/></Types>'),"_rels/.rels":hi('<?xml version="1.0" encoding="UTF-8"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Target="/3D/3dmodel.model" Id="rel0" Type="http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel"/></Relationships>'),"3D/3dmodel.model":hi(s)},{level:6})}function bf(i){let t=i.reduce((s,o)=>s+o.triangles.length,0),e=new ArrayBuffer(84+t*50),n=new DataView(e);new Uint8Array(e).set(hi("Katman | millimeters | binary STL")),n.setUint32(80,t,!0);let r=84;for(let s of i)for(let o of s.triangles){let[a,c,l]=o.map(g=>s.vertices[g]),u=c.map((g,v)=>g-a[v]),h=l.map((g,v)=>g-a[v]),f=[u[1]*h[2]-u[2]*h[1],u[2]*h[0]-u[0]*h[2],u[0]*h[1]-u[1]*h[0]],p=Math.hypot(...f)||1;for(let g of[...f.map(v=>v/p),...a,...c,...l])n.setFloat32(r,g,!0),r+=4;r+=2}return new Uint8Array(e)}function wf(i){let t=`# Katman \u2014 units: millimeters
mtllib model.mtl
`,e=1,n="";return i.forEach((r,s)=>{t+=`o part_${s}
usemtl color_${s}
`,t+=r.vertices.map((a,c)=>`v ${a.map(Us).join(" ")}${r.vertexColors?.[c]?" "+r.vertexColors[c].match(/\w\w/g).map(l=>Us(parseInt(l,16)/255)).join(" "):""}
`).join(""),t+=r.triangles.map(a=>`f ${a.map(c=>c+e).join(" ")}
`).join(""),e+=r.vertices.length;let o=r.vertexColors?[1,1,1]:r.color.match(/\w\w/g).map(a=>parseInt(a,16)/255);n+=`newmtl color_${s}
Kd ${o.join(" ")}
d 1

`}),Fc({"model.obj":hi(t),"model.mtl":hi(n)})}var bt=i=>document.getElementById(i),Ii=bt("model-viewport"),me=[],Me=new Set,jt=null,hn=[],er=[],Ns=[],Ef="duzenlenen-model",Pi="orbit",pe=!1,ui,ln,nr=null,Nc=1,Di=new as,Pe=new Ne(38,1,.01,1e5),qe=m_();function m_(){try{return new Pa({antialias:!0,alpha:!0,logarithmicDepthBuffer:!0})}catch(i){throw bt("model-status").textContent="3D g\xF6r\xFCn\xFCm\xFC ba\u015Flat\u0131lamad\u0131. Donan\u0131m h\u0131zland\u0131rmas\u0131n\u0131 ve ekran kart\u0131 s\xFCr\xFCc\xFCs\xFCn\xFC kontrol edin.",i}}Pe.up.set(0,0,1);qe.setPixelRatio(Math.min(devicePixelRatio,2));qe.localClippingEnabled=!0;qe.toneMapping=Ho;qe.toneMappingExposure=.85;qe.setClearColor(0,0);Ii.append(qe.domElement);var Ce=new Ua(Pe,qe.domElement);Ce.enableDamping=!0;Ce.minDistance=.05;Ce.maxDistance=1e5;var ir=new De,Oc=new De;Di.add(ir,Oc,new gs(16777215,1.8));var Tf=new Pr(16777215,2.4);Tf.position.set(60,-80,150);Di.add(Tf);var Af=new Pr(11980543,1);Af.position.set(-60,80,-50);Di.add(Af);var Ri,cn=new Fn(new U(-10,-10,-10),new U(10,10,10)),Fs=new He,Gr;function ze(i){bt("model-status").textContent=i}function Va(i,t="busy"){let e=bt("operation-feedback");e.hidden=!1,e.dataset.state=t,e.textContent=i}function Vc(i){console.error(i);let t=i.message||String(i);ze(t),Va(t,"error")}function Cf(i){for(let t of[...i.children])i.remove(t),t.geometry?.dispose(),Array.isArray(t.material)?t.material.forEach(e=>e.dispose()):t.material?.dispose()}var Bc=i=>"#"+new Nt(...i||[.48,.63,.85]).getHexString();function g_(i){return{...i,color:i.color||Bc(i.colors?.[0]),vertexColors:i.colors?.map(Bc)}}function je(){let i=me.length>0,t=Me.size>0,e=jt&&me[jt.part],n=e&&hn.length>0;for(let s of["model-open","model-file"])bt(s).disabled=pe;for(let s of["erase-local","fill-local"])bt(s).disabled=pe||!n||jt.viewPlane;bt("cut-local").disabled=pe||!n,bt("delete-parts").disabled=pe||!t,bt("split-parts").disabled=pe||Me.size!==1;for(let s of["tool-reference","tool-pan","tool-box","tool-circle","model-ground","model-fit","view-front","view-top-model","mesh-export"])bt(s).disabled=pe||!i;for(let s of["reference-view","reference-flip"])bt(s).disabled=pe||!e;bt("areas-clear").disabled=pe;for(let s of["brush-diameter","edit-depth","edit-offset"])bt(s).disabled=pe;bt("cancel-operation").hidden=!pe,bt("mesh-undo").disabled=pe||!er.length,bt("mesh-redo").disabled=pe||!Ns.length,bt("area-count").textContent=hn.length?`${hn.length} yerel alan se\xE7ildi`:"Alan se\xE7ilmedi",bt("model-stats").textContent=i?`${me.length} par\xE7a \xB7 ${me.reduce((s,o)=>s+o.triangles.length,0).toLocaleString("tr-TR")} \xFC\xE7gen`:"Hen\xFCz model yok",bt("model-empty").hidden=i;let r=bt("model-parts");r.replaceChildren(),me.forEach((s,o)=>{let a=document.createElement("button");a.className="part"+(Me.has(o)?" active":"");let c=document.createElement("i");c.style.background=Bc(s.colors?.[0]);let l=document.createElement("span");l.textContent=s.name||`Par\xE7a ${o+1}`,a.append(c,l),a.title=`${s.triangles.length} \xFC\xE7gen`,a.onclick=u=>{pe||(u.ctrlKey||u.metaKey?Me.has(o)?Me.delete(o):Me.add(o):Me=new Set([o]),jt&&jt.part!==o&&Li(),Ga(),je())},r.append(a)})}function Ga(){ir.children.forEach(i=>{i.material.emissive.set(Me.has(i.userData.part)?1980768:0),i.material.emissiveIntensity=.24})}function Os(i=!1){if(Cf(ir),me.forEach((t,e)=>{let n=new he;n.setAttribute("position",new $t(t.vertices.flat(),3)),n.setIndex(t.triangles.flat()),n.setAttribute("color",new $t((t.colors||t.vertices.map(()=>[.48,.63,.85])).flat(),3)),n.computeVertexNormals();let r=new bi({vertexColors:!0,roughness:.82,metalness:0,flatShading:!0,side:sn}),s=new de(n,r);s.userData.part=e,ir.add(s)}),me.length){cn.setFromObject(ir);let t=cn.getSize(new U).length(),e=cn.getCenter(new U);Ri&&(Di.remove(Ri),Ri.geometry.dispose(),Ri.material.dispose()),Ri=new _s(Math.max(1,t*1.5),30,5137285,2833236),Ri.rotation.x=Math.PI/2,Ri.position.set(e.x,e.y,cn.min.z-Math.max(.02,t*2e-4)),Di.add(Ri)}Hc(),Ga(),je(),Wn(),i&&Wr()}function Wr(i=new U(.9,-1.2,.9),t=cn.getCenter(new U)){let e=Ce.enableDamping;Ce.enableDamping=!1,Ce.update();let n=Math.max(.1,cn.getSize(new U).length()/2),r=Math.min(Pe.fov*Math.PI/360,Math.atan(Math.tan(Pe.fov*Math.PI/360)*Pe.aspect)),s=n/Math.sin(r)*1.15;Ce.target.copy(t),Pe.position.copy(t).addScaledVector(i.clone().normalize(),s),Pe.far=Math.max(1e4,s*8),Pe.updateProjectionMatrix(),Ce.update(),Pe.updateMatrixWorld(!0),Ce.enableDamping=e}function Hc(){let i=bt("section-axis").value,t=Number(bt("section-position").value)/100,e=cn.min[i]+(cn.max[i]-cn.min[i])*t;Fs.normal.set(0,0,0),Fs.normal[i]=-Nc,Fs.constant=e*Nc;for(let n of ir.children)n.material.clippingPlanes=bt("section-enabled").checked?[Fs]:[],n.material.needsUpdate=!0}function Rf(){return{parts:me,selected:[...Me],view:{position:Pe.position.toArray(),target:Ce.target.toArray()}}}function Gc(){er.push(Rf()),er.length>12&&er.shift(),Ns=[]}function Li(){jt=null,hn=[],bt("reference-info").textContent="Referans y\xFCzey se\xE7ilmedi.",Wn()}function rr(i){Pi=i,Ce.enabled=!0,Ce.mouseButtons.LEFT=i==="pan"?En.PAN:["orbit","reference"].includes(i)?En.ROTATE:null;for(let t of["orbit","pan","reference","box","circle"])bt("tool-"+t).classList.toggle("active",t===i);qe.domElement.style.cursor=["orbit","pan"].includes(i)?"grab":"crosshair"}function If(i){Pe.updateMatrixWorld(!0);let t=qe.domElement.getBoundingClientRect(),e=new vs;return e.setFromCamera(new kt((i.clientX-t.left)/t.width*2-1,-(i.clientY-t.top)/t.height*2+1),Pe),e}function Pf(i){return If(i).intersectObjects(ir.children).find(t=>!bt("section-enabled").checked||Fs.distanceToPoint(t.point)>=-1e-5)}function Ha(i){return jt?If(i).ray.intersectPlane(new He().setFromNormalAndCoplanarPoint(jt.n,jt.origin),new U):null}function zc(i,t,e,n){return{center:i.toArray(),width:t,height:e,shape:n,u:jt.u.toArray(),v:jt.v.toArray(),n:jt.n.toArray()}}function Wn(i){if(Cf(Oc),Gr&&(Di.remove(Gr),Gr.dispose(),Gr=null),!jt)return;let t=Math.max(.5,cn.getSize(new U).length()*.06);Gr=new xs(jt.n,jt.origin,t,9683967,t*.3,t*.12),Di.add(Gr);let e=Math.max(.01,Number(bt("edit-depth").value)||2),n=Number(bt("edit-offset").value)||0;for(let r of[...hn,...i?[i]:[]]){let s=r.shape==="circle"?new Ir(r.width/2,r.width/2,e,64).rotateX(Math.PI/2):new Si(r.width,r.height,e),o=new de(s,new Mi({color:16753754,transparent:!0,opacity:.24,depthWrite:!1,depthTest:!1,side:sn}));o.renderOrder=10;let a=new U(...r.u),c=new U(...r.v),l=new U(...r.n);o.quaternion.setFromRotationMatrix(new oe().makeBasis(a,c,l)),o.position.fromArray(r.center).addScaledVector(l,n+e/2),Oc.add(o)}}function kc(i,t=!1){let e=i.object.userData.part,n=i.face.normal.clone().normalize(),r=new U().crossVectors(Math.abs(n.z)<.9?new U(0,0,1):new U(0,1,0),n).normalize(),s=new U().crossVectors(n,r).normalize();jt={part:e,origin:i.point.clone(),n,u:r,v:s,viewPlane:t},Me=new Set([e]),hn=[],bt("reference-info").textContent=(t?"G\xF6r\xFCn\xFCm d\xFCzlemi \xB7 tam kesime haz\u0131r":"Referans haz\u0131r")+" \xB7 "+(me[e].name||`Par\xE7a ${e+1}`),Ga(),je(),Wn()}qe.domElement.addEventListener("pointerdown",i=>{if(i.button!==0||pe)return;let t=!1;if(["box","circle"].includes(Pi)&&!jt){let n=Pf(i);if(n)kc(n);else{if(!me.length)return;let r=[...Me].find(s=>me[s])??0;kc({object:{userData:{part:r}},face:{normal:Pe.getWorldDirection(new U).negate()},point:cn.getCenter(new U)},!0)}t=!0}let e=Pi==="box"?Ha(i):null;nr={x:i.clientX,y:i.clientY,point:e,initialReference:t},["orbit","pan","reference"].includes(Pi)||qe.domElement.setPointerCapture(i.pointerId)});qe.domElement.addEventListener("pointermove",i=>{if(Pi==="box"&&nr?.point&&jt){let t=Ha(i);if(t){let e=t.clone().sub(nr.point);Wn(zc(t.clone().add(nr.point).multiplyScalar(.5),Math.abs(e.dot(jt.u)),Math.abs(e.dot(jt.v)),"box"))}}});qe.domElement.addEventListener("pointerup",i=>{if(!nr||pe)return;let t=nr;if(nr=null,i.button!==0)return;if(Pi==="box"&&t.point){let r=Ha(i);if(!r)return;let s=r.clone().sub(t.point),o=Math.abs(s.dot(jt.u)),a=Math.abs(s.dot(jt.v));o>.01&&a>.01&&(hn.push(zc(r.clone().add(t.point).multiplyScalar(.5),o,a,"box")),Wn(),je(),ze(jt.viewPlane?"Alan se\xE7ildi. \u201CSe\xE7ili alan\u0131 tamamen kes\u201D ile kald\u0131rabilirsiniz. D\xFCzleme i\xE7in temiz y\xFCzeyden referans al\u0131n.":"Alan se\xE7ildi. D\xFCzleme, doldurma veya tamamen kesme i\u015Flemini uygulay\u0131n."));return}if(Math.hypot(i.clientX-t.x,i.clientY-t.y)>5)return;if(Pi==="circle"&&jt){if(t.initialReference){ze(jt.viewPlane?"G\xF6r\xFCn\xFCm d\xFCzlemi haz\u0131r. Kesilecek alan\u0131n \xFCzerine t\u0131klayarak daire alanlar\u0131 ekleyin.":"Temiz y\xFCzey referans al\u0131nd\u0131. \u015Eimdi kald\u0131r\u0131lacak yaz\u0131n\u0131n \xFCzerine t\u0131klayarak daire alanlar\u0131 ekleyin.");return}let r=Ha(i),s=Number(bt("brush-diameter").value);r&&s>0&&(hn.push(zc(r,s,s,"circle")),Wn(),je());return}let e=Pf(i);if(!e)return;let n=e.object.userData.part;Pi==="reference"?(kc(e),rr("box"),ze("Yaz\u0131n\u0131n etraf\u0131na alan \xE7izin. Gerekirse \xF6nce \u201CY\xFCzeye bak\u201D d\xFC\u011Fmesini kullan\u0131n.")):(i.ctrlKey||i.metaKey?Me.has(n)?Me.delete(n):Me.add(n):Me=new Set([n]),jt&&jt.part!==n&&Li()),Ga(),je()});function v_(i,t,e=1){let n=[],r=[],s=[];for(let o of i){let a=o.geometry,c=a.getAttribute("position"),l=a.getAttribute("color"),u=a.index,h=n.length,f=Array.isArray(o.material)?o.material[0]:o.material,p=f?.color||new Nt(.48,.63,.85),g=new U;for(let d=0;d<c.count;d++)g.fromBufferAttribute(c,d).applyMatrix4(o.matrixWorld).multiplyScalar(e),n.push(g.toArray()),r.push(l?[l.getX(d)*p.r,l.getY(d)*p.g,l.getZ(d)*p.b]:p.toArray());let v=u?u.count:c.count,m=o.matrixWorld.determinant()<0?[2,1,0]:[0,1,2];for(let d=0;d<v;d+=3)s.push(m.map(R=>h+(u?u.getX(d+R):d+R)))}return{name:t,vertices:n,colors:r,triangles:s}}async function Df(i){if(!(!i||pe)){pe=!0,je();try{if(i.size>100*1024*1024)throw new Error("Model en fazla 100 MB olabilir.");ze("Model okunuyor\u2026");let t=i.name.split(".").at(-1).toLowerCase(),e=await i.arrayBuffer(),n,r=1;if(t==="stl"){let a=new Fa().parse(e);n=new De,n.add(new de(a,new bi({color:a.getAttribute("color")?16777215:12045548})))}else if(t==="obj")n=new Oa().parse(new TextDecoder().decode(e));else if(t==="3mf"){n=new Ba().parse(e);let a=Mf(new Uint8Array(e)),c=Object.keys(a).find(u=>/^3d\/3dmodel\.model$/i.test(u))||Object.keys(a).find(u=>/\.model$/i.test(u)),l=c?new DOMParser().parseFromString(Uc(a[c]),"application/xml").documentElement.getAttribute("unit"):null;r={micron:.001,millimeter:1,centimeter:10,inch:25.4,foot:304.8,meter:1e3}[l||"millimeter"]||1}else throw new Error("STL, 3MF veya OBJ dosyas\u0131 se\xE7in.");n.updateMatrixWorld(!0);let s=[];if(n.traverse(a=>{let c=a.children.filter(l=>l.isMesh);c.length&&s.push(v_(c,a.name||`Par\xE7a ${s.length+1}`,r))}),!s.length)throw new Error("Dosyada \xFC\xE7gen y\xFCzey bulunamad\u0131.");if(s.reduce((a,c)=>a+c.triangles.length,0)>15e5)throw new Error("Bu model 1,5 milyon \xFC\xE7genden b\xFCy\xFCk. \xD6nce a\u011F\u0131 sadele\u015Ftirin.");if(s.some(a=>a.vertices.some(c=>c.some(l=>!Number.isFinite(l)))))throw new Error("Dosyada ge\xE7ersiz koordinat var.");bt("operation-feedback").hidden=!0,me=s,Ef=i.name.replace(/\.[^.]+$/,""),Me=new Set([0]),er=[],Ns=[],Li(),bt("model-name").textContent=i.name,rr("orbit"),Os(!0),ze("Model haz\u0131r. Yaz\u0131n\u0131n yan\u0131ndan referans y\xFCzey se\xE7erek ba\u015Flay\u0131n."),n.traverse(a=>{if(a.isMesh){a.geometry.dispose();for(let c of Array.isArray(a.material)?a.material:[a.material])c.dispose()}})}catch(t){Vc(t)}finally{pe=!1,bt("model-file").value="",je()}}}function __(i){return new Promise((t,e)=>{ui||(ui=new Worker(new URL("mesh-worker.js",document.baseURI),{type:"module"}),ui.onmessage=({data:n})=>{if(!ln)return;if(n.progress){Va(n.progress);return}clearTimeout(ln.timer);let{resolve:r,reject:s}=ln;ln=null,n.error?s(new Error(n.error)):r(n)},ui.onerror=n=>{ln&&(clearTimeout(ln.timer),ln.reject(new Error(n.message||"Geometri motoru a\xE7\u0131lamad\u0131.")),ln=null),ui.terminate(),ui=null}),ln={resolve:t,reject:e,timer:setTimeout(()=>Lf("\u0130\u015Flem zaman a\u015F\u0131m\u0131na u\u011Frad\u0131. Daha k\xFC\xE7\xFCk bir alan deneyin."),12e4)},ui.postMessage(i)})}function Lf(i="\u0130\u015Flem iptal edildi. Model de\u011Fi\u015Ftirilmedi."){ln&&(clearTimeout(ln.timer),ln.reject(new Error(i)),ln=null),ui?.terminate(),ui=null}async function Wa(i){if(pe||!me.length)return;let t=i==="split"?[...Me][0]:jt?.part;if(t===void 0||i!=="split"&&!hn.length)return;let e=Number(bt("edit-depth").value),n=Number(bt("edit-offset").value);if(!["split","cut"].includes(i)&&(!Number.isFinite(e)||e<=0||e>1e3||!Number.isFinite(n)))return ze("Ge\xE7erli derinlik ve ofset girin.");pe=!0,je(),Va("\u0130\u015Flem ba\u015Flat\u0131l\u0131yor\u2026"),ze("Se\xE7ili geometri d\xFCzenleniyor\u2026");let r=Date.now(),s=setInterval(()=>{bt("operation-elapsed").textContent=`${Math.floor((Date.now()-r)/1e3)} sn`},1e3);try{let{parts:o,warning:a}=await __({mode:i,part:me[t],areas:hn.map(c=>({...c,depth:e,offset:n}))});Gc(),me=[...me.slice(0,t),...o,...me.slice(t+1)],Me=new Set(o.map((c,l)=>t+l)),Li(),rr("orbit"),Os(),Va(a||(i==="split"?`${o.length} ba\u011Flant\u0131s\u0131z par\xE7a bulundu.`:"\u0130\u015Flem tamamland\u0131. Model geometrisi de\u011Fi\u015Ftirildi. Geri al ile kar\u015F\u0131la\u015Ft\u0131rabilirsiniz."),a?"warning":"success"),ze(i==="split"?`${o.length} ba\u011Flant\u0131s\u0131z par\xE7a bulundu.`:i==="cut"?"\u0130\u015Flem tamamland\u0131. Se\xE7ilen alan modelin kal\u0131nl\u0131\u011F\u0131 boyunca kesildi.":"\u0130\u015Flem tamamland\u0131. Yaln\u0131zca se\xE7ilen yerel alan de\u011Fi\u015Ftirildi.")}catch(o){Vc(o)}finally{clearInterval(s),bt("operation-elapsed").textContent="",pe=!1,je()}}function Wc(i=!1){if(pe)return;let t=i?Ns:er,e=i?er:Ns;if(!t.length)return;e.push(Rf());let n=t.pop();if(me=n.parts,Me=new Set(n.selected),Li(),rr("orbit"),Os(),n.view){let r=Ce.enableDamping;Ce.enableDamping=!1,Ce.update(),Pe.position.fromArray(n.view.position),Ce.target.fromArray(n.view.target),Ce.update(),Pe.updateMatrixWorld(!0),Ce.enableDamping=r}ze(i?"\u0130\u015Flem yinelendi.":"\u0130\u015Flem geri al\u0131nd\u0131."),bt("operation-feedback").hidden=!0}function Xc(){if(!me.length)return ze("\xD6nce bir 3D dosyas\u0131 a\xE7\u0131n.");if(!pe)try{let i=bt("mesh-format").value,t=me.map(g_),e=i==="stl"?bf(t):i==="obj"?wf(t):Sf(t),n=i==="obj"?"zip":i,r=URL.createObjectURL(new Blob([e],{type:i==="3mf"?"model/3mf":i==="stl"?"model/stl":"application/zip"})),s=document.createElement("a");s.href=r,s.download=Ef.replace(/[<>:"/\\|?*]/g,"_")+"-duzenlendi."+n,s.click(),setTimeout(()=>URL.revokeObjectURL(r),3e4),ze("D\xFCzenlenen model kaydediliyor. Kaynak dosya korunuyor.")}catch(i){Vc(i)}}bt("model-open").onclick=()=>bt("model-file").click();bt("model-file").onchange=i=>Df(i.target.files[0]);Ii.ondragover=i=>i.preventDefault();Ii.ondrop=i=>{i.preventDefault(),Df(i.dataTransfer.files[0])};for(let i of["orbit","pan","reference","box","circle"])bt("tool-"+i).onclick=()=>{rr(i),i==="reference"&&ze("Temiz y\xFCzeye t\u0131kla: referans se\xE7. S\xFCr\xFCkle: d\xF6nd\xFCr. Sa\u011F tu\u015F: kayd\u0131r. Tekerlek: yak\u0131nla\u015F."),i==="box"&&ze("Modelin temiz y\xFCzeyinden ba\u015Flay\u0131p yaz\u0131n\u0131n etraf\u0131na kutu \xE7izin. Sa\u011F tu\u015Fla kayd\u0131rma ve tekerlekle yak\u0131nla\u015Fma her zaman a\xE7\u0131k.")};bt("reference-view").onclick=()=>{jt&&Wr(jt.n,jt.origin)};bt("reference-flip").onclick=()=>{jt&&(jt.n.negate(),jt.v.negate(),hn=[],Wn(),je())};bt("model-fit").onclick=()=>Wr();bt("view-front").onclick=()=>Wr(new U(0,-1,0));bt("view-top-model").onclick=()=>Wr(new U(0,-1e-4,1));bt("model-ground").onclick=()=>{if(!me.length||pe)return;Gc();let i=cn.getCenter(new U),t=[-i.x,-i.y,-cn.min.z];me=me.map(e=>({...e,vertices:e.vertices.map(n=>n.map((r,s)=>r+t[s]))})),Li(),rr("orbit"),Os(!0),ze("Model zemine ve koordinat merkezine yerle\u015Ftirildi. Geri al ile eski konumu geri getirebilirsiniz.")};for(let i of["section-enabled","section-axis","section-position"])bt(i).oninput=Hc;bt("section-flip").onclick=()=>{Nc*=-1,Hc()};for(let i of["edit-depth","edit-offset"])bt(i).oninput=()=>Wn();bt("areas-clear").onclick=()=>{hn=[],jt?.viewPlane?Li():Wn(),je()};bt("erase-local").onclick=()=>Wa("erase");bt("fill-local").onclick=()=>Wa("fill");bt("split-parts").onclick=()=>Wa("split");bt("cancel-operation").onclick=()=>Lf();bt("cut-local").onclick=()=>Wa("cut");bt("delete-parts").onclick=()=>{pe||!Me.size||(Gc(),me=me.filter((i,t)=>!Me.has(t)),Me.clear(),Li(),Os(),ze("Se\xE7ili par\xE7alar silindi. Geri al ile geri getirebilirsiniz."))};bt("mesh-undo").onclick=()=>Wc();bt("mesh-redo").onclick=()=>Wc(!0);bt("mesh-export").onclick=Xc;document.addEventListener("keydown",i=>{if((i.ctrlKey||i.metaKey)&&["s","o","e"].includes(i.key.toLowerCase())&&!parent.katmanDesktop){i.preventDefault(),i.key.toLowerCase()==="o"?bt("model-file").click():Xc();return}/INPUT|SELECT|TEXTAREA/.test(i.target.tagName)||((i.ctrlKey||i.metaKey)&&i.key.toLowerCase()==="z"&&(i.preventDefault(),Wc(i.shiftKey)),i.key==="Escape"&&(hn=[],Wn(),rr("orbit"),je()))});window.addEventListener("message",i=>{if(i.source!==parent||i.origin!==location.origin||i.data?.type!=="katman-editor-action")return;let t=i.data.action;t==="image"||t==="open"?bt("model-file").click():t==="save"||t==="export"?Xc():t==="help"&&(document.querySelector("details").open=!0)});new ResizeObserver(()=>{let i=Ii.clientWidth,t=Ii.clientHeight;!i||!t||(Pe.aspect=i/t,Pe.updateProjectionMatrix(),qe.setSize(i,t))}).observe(Ii);function Uf(){requestAnimationFrame(Uf),!(document.hidden||!Ii.clientWidth||!Ii.clientHeight)&&(Ce.update(),qe.render(Di,Pe))}Uf();Wr();je();
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
