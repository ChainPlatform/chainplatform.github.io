(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[74734],{

/***/ 154279:
function(_, __, __webpack_require__) {__webpack_require__.n_x = __webpack_require__.n;const __web_req__ = __webpack_require__;__web_req__(813110);self._7ccc7343da2ae983607b3819c7bc1f93 = self._7ccc7343da2ae983607b3819c7bc1f93 || {};(function(__c) {var c1=__webpack_require__(519427),d1=c1.action,RIb=c1.computed,e1=c1.observable;var f1,SIb;
f1=class{static A(a){__c.Q(a,{definition:e1.ref,MC:e1.ref,playing:e1.ref,Ms:e1.ref,play:d1,pause:d1,oG:RIb,tick:d1,update:d1,xr:d1,$$:d1,Pqb:d1})}play(){this.playing=!0;this.X.play()}pause(){this.playing=!1}get oG(){const a=this.Ms;var b=this.definition;const c=b.Hk,d=b.Ac;b=b.Up;const e=this.MC;return a?a.get()*b*(c+d):e}tick(a){const b=this.definition.Ac,c=this.definition.Hk,d=this.definition.$j;this.MC+=a;this.MC>=b+c&&(this.MC=b+c,this.pause(),null===d||void 0===d?void 0:d())}update({end:a,Ac:b,
Hk:c,Up:d,easing:e,$j:f,yka:g}){const h=this.state.get();this.definition={start:h,end:a,Ac:b,Hk:c,Up:d,easing:e,$j:f};g||h!==a?(this.MC=0,this.play()):(this.MC=b+c,this.pause(),null===f||void 0===f?void 0:f())}xr(a){const b=this.definition.Ac,c=this.definition.Hk;__c.w(0<=a&&a<=b+c);this.MC=a}$$(a){this.Ms=a;this.pause()}Pqb(){const a=this.Ms;var b=this.definition;const c=b.Hk,d=b.Ac;b=b.Up;a&&(this.MC=a.get()*b*(c+d),this.Ms=void 0)}constructor(a,b,c){this.X=b;this.definition=(f1.A(this),void 0);
this.MC=0;this.playing=!1;this.definition=a;this.hg=c;this.state=RIb(()=>{var d,e=this.definition,f=e.start;const g=e.end;var h=e.Hk,k=e.Ac;e=e.easing;var l=this.oG;if(l<h)return f;if(l>=h+k)return g;h=l-h;return(l=null===(d=this.hg)||void 0===d?void 0:d.get())?(d=l.start,e=l.end,l=l.easing,f=l(d*f,e*g,h,k),k=l(d,e,h,k),f/k):e(f,g,h,k)})}};
SIb=class{static A(a){__c.Q(a,{tick:d1})}play(){this.playing||(this.$ra=this.now(),this.playing=!0,this.requestAnimationFrame(this.tick))}pause(){this.playing=!1}GEa(a,b){a=new f1(a,this,b);this.M.add(a);return a}sTa(a){this.M.delete(a)}constructor(a=c=>window.requestAnimationFrame(c),b=()=>performance.now()){this.requestAnimationFrame=a;this.now=b;this.playing=(SIb.A(this),!1);this.M=new Set;this.$ra=0;this.tick=c=>{if(this.playing){var d=!1,e=c-this.$ra;for(const f of this.M)f.playing&&(f.tick(e),
d=d||f.playing);this.$ra=c;d?this.requestAnimationFrame(this.tick):this.pause()}}}};__c.KB={};__c.KB.ltb=f1;__c.KB.GCa=SIb;
}).call(self, self._7ccc7343da2ae983607b3819c7bc1f93);}

}])