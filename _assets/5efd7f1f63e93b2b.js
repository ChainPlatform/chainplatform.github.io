(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[97607],{

/***/ 950918:
function(_, __, __webpack_require__) {__webpack_require__.n_x = __webpack_require__.n;const __web_req__ = __webpack_require__;__web_req__(813110);__web_req__(512118);__web_req__(25518);self._7ccc7343da2ae983607b3819c7bc1f93 = self._7ccc7343da2ae983607b3819c7bc1f93 || {};(function(__c) {var oX=__c.oX;var vBb;vBb=function(a,b,c){const d=new Map(a.map(m=>[m.id,m])),e=[];let f=0,g=0;const h=new Map;let k=!1,l;if(!b.first(m=>{++f;if(c.has(m)){const n=m.id||oX();h.set(m,n);e.push(n);m=f-g++;l!==m&&(k=!0);l=m;return!1}m=m.id?d.get(m.id):void 0;if(null!=m){e.push(m.id);m=f-g++;if(k){if(l!==m)return!0;k=!1}l=m}return!1})&&!k)return c.forEach(m=>{m.id=__c.D(h.get(m))}),e};__c.dZ=__webpack_require__(519427).computed;__c.wBb=a=>({label_by:a.one(b=>b.Ab,(b,c)=>b.Ab=c,{required:__c.jX(!1)})(["string","number","date"]),value_by:__c.iX(b=>b.Pb,(b,c)=>b.Pb=c,{minLength:b=>__c.OX(b)?1:0})(["number"]),filter_by:__c.sX()});
__c.xBb=(a,b,c)=>{var d;const e=a.Xa;var f=a.data;const g=c.VB(a);var h=c.Rx(a);let k=b.Dn||h.label_by.ok?null===(d=g.label_by)||void 0===d?void 0:d.id:void 0;const l=b.Dn&&0<g.value_by.length;d=b.action;h="new_data"===d.kind&&d.qbb.some(n=>k!==n.jb.id&&null!=n.format&&c.Be.value_by.QG(n.format.kind));if(!k||!l||h){var m=f.reduce((n,p)=>{if(null==p.Fa)return n;var q=__c.dX(p.Fa);switch(q.kind){case "string":case "date":if(k)break;k=p.id||oX();p.id=k;c.Be.label_by.set(e,k);break;case "number":if(l)break;
q=p.id||oX();p.id=q;n.push(q);break;default:throw new __c.F(q);}return n},[]);b=c.Be.value_by;0<m.length?b.set(e,m):h&&(f=vBb(g.value_by,f,new Set(d.qbb.map(n=>n.jb).filter(n=>n.id!==k))),null!=f&&b.set(e,f));__c.nX(c,a)}};
__c.yBb=()=>{const a=__c.kX.create()(b=>({label_by:b.one(c=>c.Ab,(c,d)=>c.Ab=d,{required:__c.jX(!1)})(["string","number","date"]),value_by:b.one(c=>c.Pb,(c,d)=>c.Pb=d,{required:c=>__c.OX(c)})(["number"]),filter_by:__c.sX()}),{init(b,c){const d=b.Xa,e=b.data,f=a.VB(b),g=a.Rx(b);let h=null!=f.label_by&&(c.Dn||g.label_by.ok),k=null!=f.value_by&&(c.Dn||g.value_by.ok);h&&k||(e.first(l=>{if(null==l.Fa)return!1;if(h&&k)return!0;var m=__c.dX(l.Fa);switch(m.kind){case "string":case "date":if(h)break;m=l.id||
oX();h=!0;l.id=m;a.Be.label_by.set(d,m);break;case "number":if(k)break;m=l.id||oX();k=!0;l.id=m;a.Be.value_by.set(d,m);break;default:throw new __c.F(m);}return!1}),__c.nX(a,b))}});return a};
}).call(self, self._7ccc7343da2ae983607b3819c7bc1f93);}

}])
//# sourceMappingURL=sourcemaps/5efd7f1f63e93b2b.js.map