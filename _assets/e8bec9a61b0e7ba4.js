(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[6908],{

/***/ 480322:
function(_, __, __webpack_require__) {__webpack_require__.n_x = __webpack_require__.n;const __web_req__ = __webpack_require__;__web_req__(813110);self._7ccc7343da2ae983607b3819c7bc1f93 = self._7ccc7343da2ae983607b3819c7bc1f93 || {};(function(__c) {var JX;var CX;var IX;CX=__c.CX=function(a,b,c){return 0>c?a:1<c?b:a+(b-a)*c};__c.DX=function(a){return 0>a?0:255<a?255:Math.round(a)};__c.EX=1/255;__c.FX=class{static fromHex(a){a=a.startsWith("#")?a.substring(1):a;a=parseInt(a,16);return new __c.FX(Math.floor(a/65536)%256,Math.floor(a/256)%256,a%256,1)}constructor(a,b,c,d){this.r=a;this.g=b;this.b=c;this.a=d}};__c.GX=new __c.FX(255,255,255,0);__c.HX=new __c.FX(255,255,255,1);IX=__c.IX=class{multiply(a,b){return"number"===typeof a?new IX(this.x*a,this.y*(null!=b?b:a)):new IX(this.x*a.x,this.y*a.y)}add(a,b=0){return"number"===typeof a?new IX(this.x+a,this.y+b):new IX(this.x+a.x,this.y+a.y)}EU(){return this.x*this.x+this.y*this.y}normalize(){return this.multiply(1/Math.sqrt(this.EU()))}toString(){return`{ x: ${this.x}, y: ${this.y} }`}static EU(a,b){const c=a.x-b.x;a=a.y-b.y;return c*c+a*a}static dot(a,b){return a.x*b.x+a.y*b.y}static lerp(a,b,c){return new IX(CX(a.x,b.x,
c),CX(a.y,b.y,c))}static get zero(){return new IX}static get one(){return new IX(1,1)}constructor(a=0,b=0){this.x=a;this.y=b}};
JX=__c.JX=class{multiply(a,b,c){return"number"===typeof a?new JX(this.x*a,this.y*(null!=b?b:a),this.z*(null!=c?c:a)):new JX(this.x*a.x,this.y*a.y,this.z*a.z)}add(a,b=0,c=0){return"number"===typeof a?new JX(this.x+a,this.y+b,this.z+c):new JX(this.x+a.x,this.y+a.y,this.z+a.z)}EU(){return this.x*this.x+this.y*this.y+this.x*this.x}normalize(){return this.multiply(1/Math.sqrt(this.EU()))}toString(){return`{ x: ${this.x}, y: ${this.y}, z: ${this.z} }`}static EU(a,b){const c=a.x-b.x,d=a.y-b.y;a=a.z-b.z;
return c*c+d*d+a*a}static dot(a,b){return a.x*b.x+a.y*b.y+a.z*b.z}static lerp(a,b,c){return new JX(CX(a.x,b.x,c),CX(a.y,b.y,c),CX(a.z,b.z,c))}static get zero(){return new JX}static get one(){return new JX(1,1,1)}constructor(a=0,b=0,c=0){this.x=a;this.y=b;this.z=c}};__c.KX=class{scale(a){return new __c.KX(this.width*a,this.height*a)}toString(){return`{ width: ${this.width}, height: ${this.height} }`}constructor(a=0,b=0){this.width=a;this.height=b}};
__c.LX=class{get position(){return new IX(this.x,this.y)}get NS(){return new __c.KX(this.width,this.height)}toString(){return`{ x: ${this.x}, y: ${this.y}, width: ${this.width}, height: ${this.height} }`}constructor(a=0,b=0,c=0,d=0){this.x=a;this.y=b;this.width=c;this.height=d}};
}).call(self, self._7ccc7343da2ae983607b3819c7bc1f93);}

}])
//# sourceMappingURL=sourcemaps/e8bec9a61b0e7ba4.js.map