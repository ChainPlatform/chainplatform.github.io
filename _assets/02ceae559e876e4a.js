(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[53508],{

/***/ 547488:
function(_, __, __webpack_require__) {__webpack_require__.n_x = __webpack_require__.n;const __web_req__ = __webpack_require__;__web_req__(813110);__web_req__(742125);__web_req__(25518);__web_req__(338532);self._7ccc7343da2ae983607b3819c7bc1f93 = self._7ccc7343da2ae983607b3819c7bc1f93 || {};(function(__c) {var ZAb,bBb,cBb,dBb,kBb,aZ,lBb;__c.XAb=function(a,b){const c=new Map;b.forEach(d=>{if(!c.has(d)){const e=a.get(d);c.set(d,__c.ZW(e))}});return c};
__c.YAb=function(a,b){const c=new Map;for(const [g,h]of a.entries()){const k=g===a.length-1;for(const [l,m]of h.entries()){var d,e=c;for(var f=0;f<g;f++)e=__c.D(e.get(a[f][l].v0)),__c.C(!e.DU),e=e.children;f=b[l];const n=null===(d=e.get(m.v0))||void 0===d?void 0:d.children;n?k&&(__c.C(Array.isArray(n)),n.push(f)):e.set(m.v0,k?{Xg:m.Xg,DU:!0,children:[f]}:{Xg:m.Xg,DU:!1,children:new Map})}}return c};
__c.ZY=function(a,b){const c=new Map;for(const [d,e]of a)e.DU?c.set(d,{Xg:e.Xg,DU:!0,children:b(e.children)}):c.set(d,{Xg:e.Xg,DU:!1,children:__c.ZY(e.children,b)});return c};ZAb=function(a,b){const c=[];for(const [d,e]of a)a=b?`${b}.${d}`:d,e.DU?c.push({name:d,Xg:e.Xg,key:a,value:e.children}):c.push({name:d,Xg:e.Xg,key:a,children:ZAb(e.children,a)});return c};__c.$Ab=function(a){return{name:"root",Xg:"root",key:"root",children:ZAb(a)}};__c.aBb=function(a){return Array.from({length:a},()=>1)};
bBb=function(a){return a.every(b=>void 0!==b)};cBb=function(a){return bBb(a.groupBy)&&void 0!==a.Pd};dBb=function(a){return a.groupBy.some(b=>""!==b.v0)};__c.eBb=function(a,b,c,d){a=__c.VW(a).map((f,g)=>({groupBy:f,Pd:b[g],color:c[g]})).filter(cBb);var e=d?a.filter(dBb):a;d=__c.VW(e.map(({groupBy:f})=>f));a=e.map(({Pd:f})=>f);e=e.map(({color:f})=>f);return{groupBy:d,Pd:a,Ra:e}};
__c.jBb=function({M0:a,Ga:b,position:c,VH:d,iQa:e,ij:f,CXa:g}){const h=new fBb(a,d),k=new gBb(b,c);return hBb(function(){const l=c.Ib,m=c.vertical,n=$Y(()=>k.onClick(e,f,g),[]),p=$Y(()=>k.onMouseEnter(h,f,g),[]),q=$Y(()=>k.onMouseLeave(h,f,g),[]),r=h.pF?"var(--QADODw)":"var(--KtXlRg)";return h.FVa?aZ("g",{transform:`translate(${"left"===l?0:-32}, ${"top"===m?0:-32})`,onMouseEnter:p,onMouseLeave:q,children:aZ(__c.AX,{icon:iBb,aba:{color:"var(--6u-yJQ)"},ariaLabel:__c.O("7+kJ1A"),fill:r,onClick:n,width:32,
height:32})}):null})};kBb=__webpack_require__(443763);aZ=kBb.jsx;lBb=kBb.jsxs;var mBb=__webpack_require__(875604),nBb=mBb.memo,$Y=mBb.useCallback;var hBb=__webpack_require__(214645).Pi;var bZ=__webpack_require__(519427),cZ=bZ.action,oBb=bZ.computed,pBb=bZ.observable;__c.qBb=nBb(({label:a,value:b})=>lBb("div",{children:[aZ(__c.Vy,{size:"small",tagName:"div",lineClamp:0,tone:"primary",className:"EXY4fA",alignment:"center",weight:"bold",children:a}),aZ(__c.Vy,{size:"small",tagName:"div",lineClamp:0,tone:"primary",className:"EXY4fA",alignment:"center",children:b})]}));var rBb='<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M15.202 16.343a7.5 7.5 0 1 1 1.378-1.45l4.193 4.193a1 1 0 1 1-1.415 1.414l-4.156-4.157zM10.5 16.5a6 6 0 1 0 0-12 6 6 0 0 0 0 12zM7.25 9.75h6.5a.75.75 0 1 1 0 1.5h-6.5a.75.75 0 1 1 0-1.5z"/></svg>';var iBb=__c.BX(rBb);var sBb=()=>aZ(__c.Vy,{size:"small",tagName:"div",lineClamp:0,tone:"primary",alignment:"center",weight:"bold",children:__c.O("W5NwSg")}),gBb=class{static A(a){__c.Q(a,{onMouseEnter:cZ,onMouseLeave:cZ,Pk:cZ,Hm:cZ})}onClick(a,b,c){a();b&&c&&this.Pk(b,c)}onMouseEnter(a,b,c){a.pF=!0;b&&c&&this.Hm(a,b,c)}onMouseLeave(a,b,c){a.pF=!1;b&&c&&this.Pk(b,c)}Pk(a,b){__c.GW(b,a)}Hm(a,b,c){var d=a.M0;const {top:e,right:f,bottom:g,left:h}=this.Ga.get();a=d.j.Vc;var k=d.j.We;const l=32/d.Rf.vertical;d=32/d.Rf.Ib;
k="top"===this.position.vertical?e+l:k-g;a="left"===this.position.Ib?h+d/2:a-f-d/2;__c.FW(c,b,{content:aZ(sBb,{}),vv:{width:0,height:0,top:k,left:a},placement:"bottom-center",arrow:!0,key:"Zoom out"})}constructor(a,b){this.Ga=a;this.position=b;gBb.A(this)}};var fBb=class{static A(a){__c.Q(a,{pF:pBb.ref,FVa:oBb})}get FVa(){return!!this.M0.fq&&!this.VH.get()}constructor(a,b){this.M0=a;this.VH=b;this.pF=(fBb.A(this),!1)}};var tBb;tBb=({iL:a,fontSize:b,r8:c,rla:d})=>{const e=a.width;a=a.height;d=null!==d&&void 0!==d?d:a;if(e<=c&&a<=d)return{width:e,height:a,fontSize:b,Hla:!0};d=Math.min(Math.min(1,c/e),Math.min(1,d/a));const f=b*d;c=.5*b;return f<c?(b=c/b,{width:e*b,height:a*b,fontSize:c,Hla:!1}):{width:e*d,height:a*d,fontSize:f,Hla:!0}};
__c.uBb=({text:a,iL:b,fontSize:c,r8:d,rla:e,fontFamily:f,fontWeight:g})=>{const {fontSize:h,width:k,height:l,Hla:m}=tBb({iL:b,fontSize:c,r8:d,rla:e});if(m)return{text:a,width:k,height:l,fontSize:h};const {text:n,width:p,height:q}=__c.YY({text:a,maxWidth:d,fontSize:h,fontFamily:f,fontWeight:g});return{text:n,width:p,height:q,fontSize:h}};
}).call(self, self._7ccc7343da2ae983607b3819c7bc1f93);}

}])