(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[983],{

/***/ 338532:
function(_, __, __webpack_require__) {__webpack_require__.n_x = __webpack_require__.n;const __web_req__ = __webpack_require__;__web_req__(813110);self._7ccc7343da2ae983607b3819c7bc1f93 = self._7ccc7343da2ae983607b3819c7bc1f93 || {};(function(__c) {var NAb=function({text:a,fontSize:b,fontFamily:c,fontWeight:d,textAlign:e,textBaseline:f}){return`${a}.${b.toFixed(1)}.${c}.${__c.Gs(d)}.${e}.${f}`},VY=function({text:a,fontSize:b,fontFamily:c,fontWeight:d,textAlign:e="start",textBaseline:f="alphabetic",Jq:g}){__c.C(OAb(),"baseMeasureText should only be called from within a reactive context");const h=NAb({text:a,fontSize:b,fontFamily:c,fontWeight:d,textAlign:e,textBaseline:f});var k=UY.get(h);if(k)return{Wp:k.get(),Jq:g};k=PAb(()=>{g=g||QAb({fontSize:b,
fontFamily:c,textAlign:e,textBaseline:f,fontWeight:d});const l=g.measureText(a),m=Math.ceil(l.actualBoundingBoxAscent+1),n=Math.ceil(l.actualBoundingBoxDescent+1),p=Math.ceil(l.actualBoundingBoxLeft),q=Math.ceil(l.actualBoundingBoxRight);return{actualBoundingBoxAscent:m,actualBoundingBoxDescent:n,actualBoundingBoxLeft:p,actualBoundingBoxRight:q,fontBoundingBoxAscent:l.fontBoundingBoxAscent,fontBoundingBoxDescent:l.fontBoundingBoxDescent,height:m+n,width:p+q,zR:l.width}});UY.set(h,k);RAb(k,()=>{UY.delete(h)});
return{Wp:k.get(),Jq:g}},SAb=function({maxWidth:a,...b}){return`${NAb(b)}.${a}`},TAb=function({text:a,fontSize:b,fontFamily:c,fontWeight:d,textAlign:e="start",textBaseline:f="alphabetic",maxWidth:g,Jq:h}){__c.C(OAb(),"baseTruncateText should only be called from within a reactive context");const k=SAb({text:a,maxWidth:g,fontSize:b,fontWeight:d,fontFamily:c,textAlign:e,textBaseline:f});var l=WY.get(k);if(l)return{oBa:l.get(),Jq:h};l=PAb(()=>{let m;({Wp:m,Jq:h}=VY({text:a,fontSize:b,fontFamily:c,fontWeight:d,
textAlign:e,textBaseline:f,Jq:h}));if(m.width<=g)return{...m,text:a};do{a=a.substring(0,a.length-1).trim();if(!a.length)return{text:a,width:0,height:0,actualBoundingBoxAscent:0,actualBoundingBoxDescent:0,actualBoundingBoxLeft:0,actualBoundingBoxRight:0,zR:0,fontBoundingBoxAscent:0,fontBoundingBoxDescent:0};({Jq:h,Wp:m}=VY({text:a+"\u2026",fontSize:b,fontFamily:c,fontWeight:d,textAlign:e,textBaseline:f,Jq:h}))}while(m.width>g);return{...m,text:a+"\u2026"}});WY.set(k,l);RAb(l,()=>{WY.delete(k)});return{oBa:l.get(),
Jq:h}},QAb=function({fontSize:a,fontFamily:b,textAlign:c,textBaseline:d,fontWeight:e}){var f=document.createElement("canvas");f=__c.D(f.getContext("2d"),"could not initialize measuring canvas context");f.font=`${e?__c.Gs(e)+" ":""}${a}px '${b}'`;f.textAlign=c;f.textBaseline=d;return f},XY=__webpack_require__(519427),OAb=XY._isComputingDerivation,PAb=XY.computed,RAb=XY.onBecomeUnobserved;var UY,UAb,VAb,WY,WAb;UY=new Map;UAb=({text:a,fontSize:b,fontFamily:c,fontWeight:d,textAlign:e,textBaseline:f})=>VY({text:a,fontSize:b,fontFamily:c,fontWeight:d,textAlign:e,textBaseline:f,Jq:void 0}).Wp;VAb=({Jn:a,fontSize:b,fontFamily:c,fontWeight:d,textAlign:e,textBaseline:f})=>{let g;return a.map(h=>{h=VY({text:h,fontSize:b,fontFamily:c,fontWeight:d,textAlign:e,textBaseline:f,Jq:g});({Jq:g}=h);return h.Wp})};WY=new Map;
__c.YY=({text:a,maxWidth:b,fontSize:c,fontFamily:d,fontWeight:e,textAlign:f,textBaseline:g})=>TAb({text:a,maxWidth:b,fontSize:c,fontFamily:d,fontWeight:e,textAlign:f,textBaseline:g,Jq:void 0}).oBa;WAb=({Jn:a,maxWidth:b,fontSize:c,fontFamily:d,fontWeight:e,textAlign:f,textBaseline:g})=>{let h;return a.map(k=>{k=TAb({text:k,fontSize:c,fontFamily:d,fontWeight:e,maxWidth:b,textAlign:f,textBaseline:g,Jq:h});({Jq:h}=k);return k.oBa})};
__c.Xta={Wf:VAb,Un:WAb,measureText:UAb,Pa:{measureText:UAb,Wf:VAb,Ph:__c.YY,Un:WAb},Ph:__c.YY};
}).call(self, self._7ccc7343da2ae983607b3819c7bc1f93);}

}])