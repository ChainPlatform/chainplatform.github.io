(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[25486],{

/***/ 38267:
function(_, __, __webpack_require__) {__webpack_require__.n_x = __webpack_require__.n;const __web_req__ = __webpack_require__;__web_req__(813110);self._7ccc7343da2ae983607b3819c7bc1f93 = self._7ccc7343da2ae983607b3819c7bc1f93 || {};(function(__c) {var CGb=function(a){Object.keys(a).forEach(b=>null==a[b]&&delete a[b])},r0=function(a){if(a instanceof __c.OXa){const b=[];a.values.forEach(c=>{b.push(r0(c))});return b}if(a instanceof __c.QXa){const b={};a.values.forEach(c=>{b[c.name]=r0(c.value)});return b}return a.value},DGb=function(a,b){var c;return{...b,frames:null===b||void 0===b?void 0:null===(c=b.frames)||void 0===c?void 0:c.map(d=>{for(const [e,f]of Object.entries(a.Mfa)){const g=h=>null===h||void 0===h?void 0:h.replace(f,e);d.module=g(d.module);
d.abs_path=g(d.abs_path);d.filename=g(d.filename)}return d})}},EGb=function(a,b){var c,d;b.exception&&b.exception.values&&(b.exception={...b.exception,values:null===(d=b.exception)||void 0===d?void 0:null===(c=d.values)||void 0===c?void 0:c.map(e=>({...e,...(e.stacktrace&&{stacktrace:DGb(a,e.stacktrace)})}))})},FGb=function(a,b){var c=b.request;null!=c&&null!=c.url&&(c.url=a.aW(c.url));EGb(a,b);null!=b.tags&&a.Xwa(b.tags)},GGb=function(a,b){const c=[];b.message&&c.push(b.message);if(b.exception){const {type:d=
"",value:e=""}=b.exception.values&&b.exception.values[0]||{};"Error"!==d&&c.push(d,e)}return c.some(d=>a.Y1a.some(e=>"[object RegExp]"===Object.prototype.toString.call(e)?e.test(d):"string"===typeof e?-1!==d.indexOf(e):!1))},IGb=function(a,b){const c=a.history.find(f=>HGb(f.event,b));if(null==c)return!1;const d=__c.qt.now(),e=c.timestamp;return HGb(b,c.event)&&d-e<a.fqb},HGb=function(a,b){var c,d;if((null===a||void 0===a?void 0:a.message)!==(null===b||void 0===b?void 0:b.message))return!1;a=null===
(c=a.exception)||void 0===c?void 0:c.values;b=null===(d=b.exception)||void 0===d?void 0:d.values;if(null==a||null==b||a.length!==b.length)return!1;for(d=0;d<a.length;d++)if(a[d].value!==b[d].value||a[d].type!==b[d].type||!JGb(a[d].stacktrace,b[d].stacktrace))return!1;return!0},JGb=function(a,b){a=null===a||void 0===a?void 0:a.frames;b=null===b||void 0===b?void 0:b.frames;if(null==a&&null==b)return!0;if(null==a||null==b||a.length!==b.length)return!1;for(let c=0;c<a.length;c++)if(a[c].filename!==b[c].filename||
a[c].colno!==b[c].colno||a[c].lineno!==b[c].lineno)return!1;return!0},MGb=function(){return new KGb({KDb:a=>LGb({frame:a,Oob:"/dist/renderer/"})})},LGb=function({frame:a,Oob:b}){if(null==a.filename)return a;const c=a.filename.replace(/\\/g,"/").split(b);if(1>=c.length)return a;a.filename="app://"+b+c.pop();return a},NGb=function(a,b){var c;null===b||void 0===b?void 0:null===(c=b.breadcrumbs)||void 0===c?void 0:c.map((d,e)=>{if(null===b||void 0===b?0:b.breadcrumbs){var f=b.breadcrumbs;if("http"===
d.type){var g;d.data=d.data||{};var h;d.data.url=s0(a,null!==(h=null===(g=d.data)||void 0===g?void 0:g.url)&&void 0!==h?h:"")}f[e]=d}});b.request&&(b.request=a.Owa(b.request));return b},s0=function(a,b){try{const c=new URL(b,`${a.location.protocol}//${a.location.host}`);if(!["http:","https:"].includes(c.protocol))return"";a.Z1a.some(d=>c.hostname.includes(d))&&c.pathname.startsWith("/_ajax")||(c.pathname="");c.search="";return b.includes(c.host)?c.toString():c.pathname||"/"}catch(c){return""}},PGb=
function(a){const b=[];for(const c of OGb){const d=c(a);d&&b.push(d)}return b},QGb=function(){const a=self;if("object"===typeof a.Android&&"function"===typeof a.Android.getPageLocation){let b;try{b=a.Android.getPageLocation()}catch(c){return}return"string"===typeof b?b:void 0}},TGb=function(a){return(b,c)=>{b.request&&(b.request=a.Owa(b.request));if(RGb(a,b))return null;SGb(null===c||void 0===c?void 0:c.originalException,(e,f)=>{null==b.tags&&(b.tags={});b.tags[e]=f});if(a.fb){null==b.tags&&(b.tags=
{});a:switch(a.fb.status){case 2:var d="OFFLINE";break a;case 1:d="ONLINE";break a;default:d="UNKNOWN"}b.tags.offlineStatus=d}try{FGb(a.N9,b)}catch(e){a.oc(e)}return a.dla.reduce((e,f)=>f(e,c),b)}},XGb=function(a,b,c){var d,e,f,g=null===(d=a.Uo)||void 0===d?void 0:d.getCurrentHub().getClient();d=g&&g.getOptions()||{};var h;g=null!==(h=b.sampleRate)&&void 0!==h?h:1;var k;h=[new t0,new UGb,new VGb,new u0(2E3),new __c.uW(g,null!==(k=b.Dhb)&&void 0!==k?k:g),new v0,new w0,new x0(a.allowUrls,location),
MGb()];a.bootstrap.flags&&a.bootstrap.flags.K7a&&h.push(new y0(WGb));a.setTags(a.bootstrap.tags);a.setExtras(a.bootstrap.extra);if(k="undefined"!==typeof navigator?navigator.userAgent:void 0)k=PGb(k),a.setTags(k);b=b.jkb;1!==b&&a.setTag("webx",String(3===b));a.setTag("iframe",String("undefined"!==typeof window&&window.self!==window.top));c.HRa&&a.setTag("webview",c.HRa);d.beforeSend=TGb(a);c={...d,maxValueLength:1024,dsn:d.dsn||a.bootstrap.dsn,environment:d.environment||a.bootstrap.environment,release:d.release||
a.bootstrap.release,tracesSampleRate:0,sampleRate:1,integrations:h,allowUrls:a.allowUrls,autoSessionTracking:!1,ignoreErrors:["variable: _AutofillCallbackHandler","_AutofillCallbackHandler is not defined","Non-Error promise rejection captured with value: Object Not Found Matching Id"]};CGb(c);null===(e=a.Uo)||void 0===e?void 0:e.init(c);null===(f=a.Uo)||void 0===f?void 0:f.configureScope(l=>{l.setUser({id:__c.Hs()});l.setExtra("isAnonymousUser",!0);l.setTag("initLocation","error_client")})},RGb=function(a,
b){const c=b.exception&&b.exception.values&&0<b.exception.values.length&&b.exception.values[0],d=c&&c.stacktrace||void 0,e=d&&d.frames&&d.frames[0]&&d.frames[0].filename,f=b.message||c&&c.value||void 0;return a.T$.some(g=>g({message:f,filename:e,location,tags:b.tags,event:b}))},SGb=function(a,b){null!=a&&"string"!==typeof a&&a instanceof __c.wR&&null!=a.requestId&&b("requestId",a.requestId)},YGb=function(a,b){var c,d;b instanceof Error?null===(c=a.Uo)||void 0===c?void 0:c.captureException(b):null===
(d=a.Uo)||void 0===d?void 0:d.captureMessage(b)},ZGb=function(a,b,c){if(null==b)return Error((c?c+" ":"")+"[null error thrown]");if("object"===typeof b){const e=b instanceof __c.gM?new __c.gM(b.message,b.sampleRate):Error(b.message);b.stack&&(e.stack=b.stack);b.cause&&(e.cause=b.cause);if(c){var d;if(null===(d=b.message)||void 0===d?0:d.startsWith(c))return a.setTag("prefixCollision","true"),b;a=c+" "+(e.message||"[no message on error]");try{e.message=a}catch(f){if(f instanceof TypeError)return Error(a);
throw f;}}return e}return b.toString()},z0=function(a,b,c,d){null==a.Uo?(console.error(c),d&&console.log("errorParams",d)):a.Uo&&a.Uo.withScope(e=>{"string"===typeof d&&(d={Zf:d});c=ZGb(e,c,"string"===typeof d?d:null===d||void 0===d?void 0:d.Zf);null!=d&&(d.fingerprint&&e.setFingerprint(d.fingerprint),d.Jha&&e.setTag("userFlow",d.Jha),d.extra&&d.extra.forEach((f,g)=>e.setExtra(g,f)),d.tags&&d.tags.forEach((f,g)=>e.setTag(g,f)));0<a.componentStack.length&&e.setTag("component",a.componentStack.join("."));
e.setLevel(b);YGb(a,c)})},UGb=__webpack_require__(681196).ExtraErrorData;var VGb=__webpack_require__(802011).Dedupe;var KGb=__webpack_require__(336105).RewriteFrames;var $Gb=class{aW(a){let b=a;Object.entries(this.Mfa).forEach(([c,d])=>{b=b.split(d).join(c)});return b}Xwa(a={}){Object.keys(a).forEach(b=>{const c=a[b];"string"===typeof c&&(a[b]=this.aW(c))})}constructor(){this.Mfa={}}};var y0=class{setupOnce(a,b){a(c=>{const d=b().getIntegration(y0);return d?GGb(d,c)?null:c:c})}constructor(a=[]){this.Y1a=a;this.name=y0.id}};y0.id="FilterErrors";var v0=class{setupOnce(a,b){a(c=>{b().getIntegration(v0);return c})}constructor(){this.name=v0.id}};v0.id="HostRpcServiceErrors";var w0=class{setupOnce(a,b){a((c,d)=>{b().getIntegration(w0)&&d&&d.originalException instanceof __c.wR&&(d=d.originalException,c.tags||(c.tags={}),Object.assign(c.tags,{http_service_error:!0,statusCode:d.statusCode,...(d.requestId?{requestId:d.requestId}:{})}),d.requestUrl&&(c.tags.phase=d.requestUrl.includes("/csrf3/")?"csrf":"request"));return c})}constructor(){this.name=w0.id}};w0.id="HttpServiceErrors";var aHb=class{add(a){this.LZ=this.G$a(this.LZ);this.list[this.LZ]=a}find(a){let b=this.LZ;do{if(this.list[b]&&a(this.list[b]))return this.list[b];b=this.M$a(b)}while(b!==this.LZ)}constructor(){this.Mla=10;this.LZ=0;this.G$a=a=>(a+1)%this.Mla;this.M$a=a=>(a+this.Mla-1)%this.Mla;this.list=Array(10)}},u0=class{setupOnce(a,b){a(c=>{const d=b().getIntegration(u0);d&&(IGb(d,c)?c=null:d.history.add({event:c,timestamp:__c.qt.now()}));return c})}constructor(a){this.fqb=a;this.name=u0.id;this.history=new aHb}};
u0.id="NoSuccessiveEvent";var t0=class{setupOnce(a,b){a(c=>{var d,e;if(!b().getIntegration(t0))return c;var f;c.tags=null!==(f=c.tags)&&void 0!==f?f:{};c.tags["prior.unhandled.error.count"]=this.CTa;(null===(e=c.exception)||void 0===e?0:null===(d=e.values)||void 0===d?0:d.some(g=>{var h;return!1===(null===(h=g.mechanism)||void 0===h?void 0:h.handled)}))&&this.CTa++;return c})}constructor(){this.name=t0.id;this.CTa=0}};var x0=class{setupOnce(a,b){a(c=>{const d=b().getIntegration(x0);return d?NGb(d,c):c})}Owa(a){var b,c,d;const e=(null===a||void 0===a?0:a.url)?s0(this,null===a||void 0===a?void 0:a.url):void 0,f={};if(null===a||void 0===a?0:null===(b=a.headers)||void 0===b?0:b["User-Agent"])f["User-Agent"]=null===a||void 0===a?void 0:a.headers["User-Agent"];if(null===a||void 0===a?0:null===(c=a.headers)||void 0===c?0:c.Referer)f.Referer=s0(this,null===a||void 0===a?void 0:null===(d=a.headers)||void 0===d?void 0:d.Referer);
return{url:e,headers:f}}constructor(a,b){this.Z1a=a;this.location=b;this.name=x0.id}};x0.id="UrlScrubber";var OGb=[function(a){if(a=/canvaeditor\/(\d+\.\d+\.\d+)/.exec(a))return{name:"mobile_app_version",value:a[1]}},function(a){if(a=/com.canva.editor\s\(version\/(\d+\.\d+\.\d+)/.exec(a))return{name:"mobile_app_version",value:a[1]}}];var WGb;
WGb=["TimeoutError","HttpTimeoutError",/^ResizeObserver loop/,/^WHEN_CANCELLED$/,"ChunkLoadError",/^NetworkError: Failed to execute 'importScripts' on 'WorkerGlobalScope':/,/Failed to register a ServiceWorker.*(The document is in an invalid state|An unknown error occurred when fetching the script|Failed to access storage|The URL protocol of the current origin \('null'\) is not supported|Timed out while trying to start the Service Worker)\.$/,/^(Can't find variable: indexedDB|Internal error opening backing store for indexedDB.open.|Encountered full disk while opening backing store for indexedDB.open.|An internal error was encountered in the Indexed Database server)/,/Non-Error promise rejection captured with value: [Tt]imeout( \(.\))?/];
__c.ld=class{Owa(a){var b,c,d;if(!a.url)return{headers:{"User-Agent":null!==(d=null===a||void 0===a?void 0:null===(b=a.headers)||void 0===b?void 0:b["User-Agent"])&&void 0!==d?d:""}};b=/^(\/design\/[a-zA-Z0-9_-]+\/)([a-zA-Z0-9_-]{22})(.*)/;d=new URL(a.url);d.search="";b.test(d.pathname)&&(d.pathname=d.pathname.replace(b,"$1<REDACTED>$3"));var e;return{url:d.toString(),headers:{"User-Agent":null!==(e=null===a||void 0===a?void 0:null===(c=a.headers)||void 0===c?void 0:c["User-Agent"])&&void 0!==e?e:
""}}}H7(a){this.dla.push(a)}Dh(a){return new __c.ld(this.bootstrap,this.componentStack.concat(a),this.T$,this.Uo,this.N9,this.dla,!0,this.fb)}setContext({user:a,locale:b,J8a:c}){var d,e;null===(e=this.Uo)||void 0===e?void 0:null===(d=e.getCurrentHub())||void 0===d?void 0:d.configureScope(f=>{a&&(f.setUser(a),f.setExtra("isAnonymousUser",!1));b&&f.setTag("locale",b);null===c||void 0===c?void 0:c.forEach((g,h)=>f.setExtra(h,g))})}setTags(a){for(const b of a)this.setTag(b.name,b.value)}setTag(a,b){if(null!=
this.Uo){{var c=32>=a.length;const d=200>=b.length;c&&d?c=(0,__c.Ha)(!0):(c=(c?"":"Key name length cannot exceed 32 characters.\n")+(d?"":"Key value length cannot exceed 200 characters.\n"),c=(0,__c.Ia)(Error(c+`Tag: ${a}:${b}`)))}c.ok?this.Uo.setTag(a,b):YGb(this,c.error)}}setExtras(a){for(const b of a)this.setExtra(b.name,b.value)}setExtra(a,b){null!=this.Uo&&this.Uo.setExtra(a,r0(b))}I7(a){var b;null!=this.Uo&&(null===(b=this.Uo)||void 0===b?void 0:b.addBreadcrumb({...a,level:a.level}))}E9(a,b){z0(this,
"fatal",a instanceof Error?a:Error(a),b)}error(a,b){z0(this,"error",a instanceof Error?a:Error(a),b)}oc(a,b){z0(this,"error",a,b)}DQ(a,b){z0(this,"warning",a instanceof Error?a:Error(a),b)}qX(a,b){z0(this,"warning",a,b)}info(a,b){z0(this,"info",a instanceof Error?a:Error(a),b)}debug(a,b){z0(this,"debug",a instanceof Error?a:Error(a),b)}constructor(a,b=[],c=[],d=self.Sentry,e=new $Gb,f=[],g=!1,h,k,l=QGb()){this.bootstrap=a;this.componentStack=b;this.T$=c;this.Uo=d;this.N9=e;this.dla=f;this.fb=h;this.WMa=
k;this.allowUrls="/dist/renderer/ canva.com canva.cn canva-dev.com canva-staging.com canva-staging.cn www.features.canva-internal.com www.features.canva-internal-staging.com canva-apps.com canva-apps.cn canva-apps-dev.com canva-apps-staging.com canva-apps-staging.cn".split(" ");this.Uo?g||XGb(this,a,{HRa:l}):"undefined"!==typeof self.suppressSentryInitializationError&&!0===self.suppressSentryInitializationError||console.error("Sentry can not be found on the global scope.")}};
}).call(self, self._7ccc7343da2ae983607b3819c7bc1f93);}

}])
//# sourceMappingURL=sourcemaps/ad2d1c5a4c99f558.js.map