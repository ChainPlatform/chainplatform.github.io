(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[60336],{

/***/ 664435:
function(_, __, __webpack_require__) {__webpack_require__.n_x = __webpack_require__.n;const __web_req__ = __webpack_require__;__web_req__(813110);self._7ccc7343da2ae983607b3819c7bc1f93 = self._7ccc7343da2ae983607b3819c7bc1f93 || {};(function(__c) {var i0=function(a){const b=Error(a);return c=>{c instanceof Error&&(null==c.stack||""===c.stack)&&(c.stack=b.stack);return c}},j0=function(a){return new Promise((b,c)=>{const d=()=>{a.removeEventListener("success",e);a.removeEventListener("error",g)},e=()=>{d();b(a.result)},f=i0("idb promisify_request_events error"),g=()=>{d();c(f(a.error))};a.addEventListener("success",e);a.addEventListener("error",g)})},eGb=async function(a,b){const c=a.dm(a.cursor.request);a.cursor.continue(b);return c},gGb=function(a){return new Promise((b,
c)=>{const d=i0("idb_transaction error");a.IA.addEventListener("complete",()=>b());a.IA.addEventListener("error",f=>{f=f.target;c(d((null===f||void 0===f?void 0:f.error)||a.IA.error||Error("Unknown error")))});const e=new fGb;a.IA.addEventListener("abort",()=>{if(a.IA.error instanceof Error){var f=e.cause=a.IA.error;f=[`${f.name}`,`${f.message}`].filter(g=>!!g).join(": ");e.message=`${e.message} (${f})`}c(e)})})},hGb=function(a){if(!(a instanceof Error))return!1;if("QuotaExceededError"===a.name||
a instanceof DOMException&&22===a.code||a instanceof k0)return!0;null==l0&&(l0=[/Encountered full disk while opening backing store for indexedDB.open./i,/Failed to PutOrAdd in database because not enough space for domain/i]);return l0.some(b=>b.test(a.message))},jGb=function(a){if(!self.indexedDB)return!0;if(!(a instanceof Error))return!1;if(a instanceof iGb||a instanceof fGb||a instanceof DOMException&&["AbortError","TransactionInactiveError"].includes(a.name))return!0;null==m0&&(m0=[/(transaction|operation) was aborted/i,
/The database connection is closing/i,/connection to indexed database server lost/i,/internal error/i,/the transaction is inactive or finished/i,/unable to open database file on disk/i,/without an in-progress transaction/i]);return m0.some(b=>b.test(a.message))},lGb=async function(a){const b=kGb.open(a.$ab,()=>{a.connection===b&&(a.connection=void 0)}).catch(c=>{a.connection=void 0;throw c;});return b},mGb=async function(a){null==a.connection&&(a.connection=lGb(a));let b=await a.connection;b.Nc||
(a.connection=lGb(a),b=await a.connection);return b},nGb=async function({transaction:a,Lm:b,ls:c}){try{const e=await c(a.objectStore(b));try{var d;null===a||void 0===a?void 0:null===(d=a.commit)||void 0===d?void 0:d.call(a)}catch(f){}return e}catch(e){try{null===a||void 0===a?void 0:a.abort()}catch(f){}throw e;}},rGb=function(a){var b=[];return new oGb(a,new pGb(new qGb({wjb:()=>n0.open({name:"config",version:1,ljb:c=>{c=c.createObjectStore("config",{keyPath:"key"});if(null!=b&&0<b.length)for(const {name:d,
BBb:e,...f}of b)c.createIndex(d,`${"record"}.${e}`,f)},c3a:{type:1,i4a:!0,j4a:!0}})})))},tGb=async function(a){if(null!=a.vHa)switch(a=await a.vHa.getStatus(),a){case 1:break;case void 0:throw new sGb;default:throw new __c.F(a);}},uGb=function(a,b){return{key:a,record:b}},vGb=function(a){if("object"!==typeof a||null==a)throw Error("Result is not an object");a=a.key;if("string"!==typeof a)throw Error("Key is not a string");return a},o0=function(a){if("object"!==typeof a||null==a)throw Error("Result is not an object");
a=a.record;if(null==a)throw Error("Value is undefined");return a},wGb=function(){return rGb({Wd:a=>a,ud:a=>a})};var p0=class{async continue(a){a=await eGb(this,a);if(null!=a)return new p0(a)}async update(a){a=this.cursor.update(a);return this.dm(a)}async delete(){const a=this.cursor.delete();return this.dm(a)}constructor(a){this.cursor=a;this.dm=j0}},q0=class extends p0{async continue(a){a=await eGb(this,a);if(null!=a)return new q0(a)}get value(){return this.cursor.value}constructor(a){super(a);this.cursor=a}};var xGb=class{async get(a){a=this.index.get(a);return this.dm(a)}async getAll(a,b){a=this.index.getAll(a,b);return this.dm(a)}async getAllKeys(a,b){a=this.index.getAllKeys(a,b);return this.dm(a)}async count(a){a=this.index.count(a);return this.dm(a)}async openCursor(a,b){a=this.index.openCursor(a,b);a=await this.dm(a);return null!=a?new q0(a):void 0}async openKeyCursor(a,b){a=this.index.openKeyCursor(a,b);a=await this.dm(a);return null!=a?new p0(a):void 0}constructor(a){this.index=a;this.dm=j0}};var yGb=class{index(a){return new xGb(this.store.index(a))}async put(a,b){a=this.store.put(a,b);return this.dm(a)}async get(a){a=this.store.get(a);return this.dm(a)}async delete(a){a=this.store.delete(a);return this.dm(a)}async clear(){const a=this.store.clear();return this.dm(a)}async getAll(a,b){a=this.store.getAll(a,b);return this.dm(a)}async getAllKeys(a,b){a=this.store.getAllKeys(a,b);return this.dm(a)}async count(a){a=this.store.count(a);return this.dm(a)}async openCursor(a,b){a=this.store.openCursor(a,
b);a=await this.dm(a);return null!=a?new q0(a):void 0}async openKeyCursor(a,b){a=this.store.openKeyCursor(a,b);a=await this.dm(a);return null!=a?new p0(a):void 0}createIndex(a,b,c){return this.store.createIndex(a,b,c)}deleteIndex(a){return this.store.deleteIndex(a)}constructor(a){this.store=a;this.dm=j0}};var zGb=class{objectStore(a){a=this.IA.objectStore(a);return new yGb(a)}abort(){this.IA.abort()}commit(){this.IA.commit()}get error(){return this.IA.error}constructor(a){this.IA=a;this.Fsb=gGb(this)}},fGb=class extends Error{constructor(){super("Transaction was aborted")}};var n0=class{static open({name:a,version:b,ljb:c,c3a:d},e=indexedDB){return new Promise((f,g)=>{try{const h=e.open(a,b);let k,l=!1;c&&h.addEventListener("upgradeneeded",n=>{l||(k=new n0(h.result),c(k,n))});switch(d.type){case 0:d.Xhb&&h.addEventListener("blocked",d.Xhb);h.addEventListener("success",()=>{f(null!==k&&void 0!==k?k:new n0(h.result))});break;case 1:h.addEventListener("blocked",()=>{l=!0;g(Error("operation blocked due to open connections"))});h.addEventListener("success",()=>{const n=h.result;
l?n.close():(n.addEventListener("versionchange",p=>{(d.i4a&&null==p.newVersion||d.j4a&&null!=p.newVersion)&&n.close()}),f(null!==k&&void 0!==k?k:new n0(n)))});break;default:throw new __c.F(d);}const m=i0("idb_database open error");h.addEventListener("error",()=>{g(m(h.error))})}catch(h){g(h)}})}transaction(a,b){return new zGb(this.db.transaction(a,b))}createObjectStore(a,b){return new yGb(this.db.createObjectStore(a,b))}get objectStoreNames(){return this.db.objectStoreNames}close(){this.db.close()}addEventListener(a,
b,c){this.db.addEventListener(a,b,c)}removeEventListener(a,b,c){this.db.removeEventListener(a,b,c)}static delete({name:a},b=indexedDB){return new Promise((c,d)=>{const e=i0("idb_database delete error"),f=b.deleteDatabase(a);f.addEventListener("blocked",()=>d(Error("operation blocked due to open connections")));f.addEventListener("error",()=>{d(e(f.error))});f.addEventListener("success",()=>c())})}constructor(a){this.db=a}};var k0=class extends Error{constructor(a){super("Quota exceeded");this.cause=a}},l0,sGb=class extends Error{constructor(){super("Consent required")}},iGb=class extends __c.gM{constructor(a){super("IndexedDb Database Error",0);this.cause=a}},m0,AGb=class extends Error{constructor(){super("Maximum number of rows exceeded for put request")}},BGb=class extends Error{constructor(a){super("Failed to deserialize stored data");this.cause=a}};var kGb=class{static async open(a,b){const c=await a.wjb(),d=()=>{e.connection=void 0;c.removeEventListener("close",d)};c.addEventListener("close",d,{once:!0});const e=new kGb({transaction:(f,g)=>c.transaction(f,g),close:()=>{d();c.close();b()}});e.Z8=self.setTimeout(()=>{e.dispose()},2500);return e}get Nc(){return null!=this.connection}transaction(a,b){if(null==this.connection)throw Error("Attempted to open a transaction on a closed connection");self.clearTimeout(this.Z8);this.Z8=void 0;const c=
this.connection;try{this.Eua++;const d=c.transaction(a,b),e=d.Fsb;e.catch(()=>this.dispose()).finally(()=>{this.Eua--;0>=this.Eua&&(this.Z8=self.setTimeout(()=>{this.dispose()},2500))});return{transaction:d,Esb:e}}catch(d){throw this.dispose(),d;}}dispose(){var a;null===(a=this.connection)||void 0===a?void 0:a.close();this.connection=void 0;self.clearTimeout(this.Z8)}constructor(a){this.connection=a;this.Eua=0}};var qGb=class{constructor(a){this.$ab=a}};var pGb=class{async execute({Lm:a,mode:b,ls:c,methodName:d}){var e;const f=null===(e=this.xb)||void 0===e?void 0:e.JEb({methodName:d});let g;try{let k;try{k=(await mGb(this.qMa)).transaction(a,b)}catch(m){await Promise.resolve(),k=(await mGb(this.qMa)).transaction(a,b)}g=k.transaction;null===f||void 0===f?void 0:f.yk("transaction_opened");const [l]=await Promise.all([nGb({transaction:g,Lm:a,ls:c}),k.Esb]);return l}catch(k){a=k;var h=a instanceof Error?hGb(a)?new k0(a):jGb(a)?new iGb(a):a:Error(String(a));
h instanceof sGb||h instanceof BGb||h instanceof AGb||h instanceof k0||(null===f||void 0===f?void 0:f.setAttribute("error",k instanceof Error?k.message:String(k)),null===f||void 0===f?void 0:f.end("error"));throw h;}finally{null===f||void 0===f?void 0:f.end("ok")}}constructor(a){this.qMa=a;this.xb=void 0}};var oGb=class{async put(a,b,c){await tGb(this);const d=uGb(a,this.serializer.Wd(b));return this.hJ.execute({Lm:this.Lm,mode:"readwrite",ls:async e=>{const {QJb:f}=null!==c&&void 0!==c?c:{};if(null!=f){__c.w(0<f);const [g,h]=await Promise.all([e.get(a).then(k=>!!k),e.count()]);if(h+(g?0:1)>f)throw new AGb;}await e.put(d)},methodName:"put"})}async get(a){const b=await this.hJ.execute({Lm:this.Lm,mode:"readonly",ls:async c=>c.get(a),methodName:"get"});return null!=b?this.ud(o0(b)):void 0}async delete(a){return this.hJ.execute({Lm:this.Lm,
mode:"readwrite",ls:async b=>{Array.isArray(a)?await Promise.all(a.map(c=>b.delete(c))):await b.delete(a)},methodName:"delete"})}async count(){return this.hJ.execute({Lm:this.Lm,mode:"readonly",ls:async a=>a.count(),methodName:"count"})}async update(a,b){await tGb(this);return this.hJ.execute({Lm:this.Lm,mode:"readwrite",ls:async c=>{var d=await c.get(a);d=d?{value:this.ud(o0(d))}:void 0;d=b(d);null!=d?await c.put(uGb(a,this.serializer.Wd(d.value))):await c.delete(a)},methodName:"update"})}async getAll(a,
b){const c=await this.hJ.execute({Lm:this.Lm,mode:"readonly",ls:async f=>{const g="string"===typeof b?f.index(b):f;try{return(await g.getAll(a)).map(h=>(0,__c.Ha)(h))}catch(h){return f=await g.getAllKeys(a),Promise.all(f.map(async k=>{try{const l=await g.get(k);return(0,__c.Ha)(l)}catch(l){return(0,__c.Ia)({key:String(k),error:l instanceof Error?l:Error(String(l))})}}))}},methodName:"getAll"}),d=[],e=[];for(const f of c)if(f.ok)try{d.push({key:vGb(f.value),ad:this.ud(o0(f.value))})}catch(g){e.push({key:vGb(f.value),
error:g instanceof Error?g:Error(String(g))})}else e.push({key:f.error.key,error:f.error.error});return{items:d,errors:e}}async getAllKeys(){return this.hJ.execute({Lm:this.Lm,mode:"readonly",ls:async a=>(await a.getAllKeys()).map(b=>String(b))||[],methodName:"getAllKeys"})}async clear(){return this.hJ.execute({Lm:this.Lm,mode:"readwrite",ls:async a=>a.clear(),methodName:"clear"})}close(){}ud(a){try{return this.serializer.ud(a)}catch(b){throw new BGb(b instanceof Error?b:Error(String(b)));}}constructor(a,
b){this.Lm="config";this.serializer=a;this.hJ=b;this.vHa=void 0}};__c.Raa={sCb:async function(a){return Promise.race([(async()=>{try{return await wGb().get("userAgent")}catch(b){a.oc(b)}})(),__c.Ts(1E4).then(()=>{})])},eob:async function(){const a=navigator.userAgent,b=await wGb();await b.get("userAgent")!==a&&await b.put("userAgent",a)}};
}).call(self, self._7ccc7343da2ae983607b3819c7bc1f93);}

}])