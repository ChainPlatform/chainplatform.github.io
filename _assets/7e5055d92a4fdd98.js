(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[89047],{

/***/ 108061:
function(_, __, __webpack_require__) {__webpack_require__.n_x = __webpack_require__.n;const __web_req__ = __webpack_require__;__web_req__(813110);__web_req__(980938);self._7ccc7343da2ae983607b3819c7bc1f93 = self._7ccc7343da2ae983607b3819c7bc1f93 || {};(function(__c) {var D=__c.D;var Hf=__c.Hf;
var R0=function*(a){let b=0;for(const c of a)yield[b++,c]},wIb=function(a){return S0("g",{children:a.T8.map(b=>a.render(b))})},AIb=function(a,{kC:b,iP:c,kK:d,lK:e}={kC:!1,iP:!1,kK:new Map,lK:new Map}){const f=a.Lb,g=a.Ue,h=a.WK,k=a.As.diff,l=0<k.enter.size&&0===k.update.size&&0===k.exit.size&&!b;xIb({X:a.X,M:a.M,Lb:{enter:l&&f.nT||f.enter,update:f.update,exit:f.exit,jf:f.jf},getKey:a.getKey,rl:a.rl,Zm:a.Zm,we:yIb({WK:h,wcb:l,we:a.we,Oj:a.Oj}),Ue:h?g:0,xe:zIb({WK:h,ycb:0===k.enter.size&&0===k.update.size&&
0<k.exit.size&&!b,xe:a.xe,sm:a.sm}),Ms:a.Ms,mz:a.mz&&c,hg:a.hg,diff:k,kK:d,lK:e,kC:b})},BIb=function(a,b){const c=new Map;if(null==a)return c;for(const d of a)c.set(b.getKey(d),d);return c},CIb=function(a){const b=a.Lb,c=a.As,d=a.getKey,e=a.data.get();return e.map((f,g)=>({Gk:f,index:g,key:d(f),data:e,Tf:Hf(b.update,({value:h})=>T0(()=>h(f,c.diff,d)))}))},yIb=function({WK:a,wcb:b,we:c,Oj:d}){return a?b&&null!=d?d:c:0},zIb=function({WK:a,ycb:b,xe:c,sm:d}){return a?b&&null!=d?d:c:0},U0=function(a,b){return D(a.get(b),
"Could not find animations for key {}",b)},DIb=function*(a,b){for(const c of a.keys()){const d=U0(a,c);for(const e of b)yield d[e]}},EIb=function({Gk:a,M:b,Lb:c,diff:d,getKey:e,fSa:f}){return Object.keys(c).some(g=>{const h=c[g];if("exit"===f&&h.lY)return!0;g=b[g];return h.value(a,d,e)!==g.definition.end})},V0=function(a,b){const c=new Set;for(const [d,e]of R0(b.values()))c.add(a.group(e,d));return new Map(Array.from(c,(d,e)=>[d,e]))},W0=function(a,b,c,d,e,f){var g=a.start,h=a.end;const k=a.kg;__c.w(0<
d,"count should be non-zero");__c.w(0<=g&&1>=g,"start should be between 0 and 1");__c.w(0<=h&&1>=h,"end should be between 0 and 1");__c.w(0<=k&&1>=k,"stagger should be between 0 and 1");g*=b;h=b*h-g;if(a.Jb&&!e)return{Ac:0,Hk:0,Up:1};if(f&&e)return{Ac:b,Hk:0,Up:1};if(1===d)return{Ac:h,Hk:g,Up:1};a=h/(1+(d-1)*k);c=g+(h-a)/(d-1)*c;return{Ac:a,Hk:c,Up:0===b||0===a+c?1:b/(a+c)}},xIb=function({X:a,M:b,Lb:c,getKey:d,rl:e,Zm:f,we:g,Ue:h,xe:k,Ms:l,mz:m,hg:n,diff:p,kK:q,lK:r,kC:t}){FIb({X:a,M:b,Lb:c,rl:e,
Zm:f,we:g,Ms:l,mz:m,hg:n,diff:p,kK:q,getKey:d,kC:t});GIb({M:b,Lb:c,rl:e,Ue:h,Ms:l,mz:m,diff:p,getKey:d,kC:t});HIb({X:a,M:b,Lb:c,rl:e,Zm:f,xe:k,Ms:l,mz:m,diff:p,lK:r,getKey:d,kC:t})},FIb=function({X:a,M:b,Lb:c,rl:d,Zm:e,we:f,Ms:g,mz:h,hg:k,diff:l,kK:m,getKey:n,kC:p}){const q=Hf(c.enter,t=>V0(t,l.enter));for(const [t,[u,v]]of R0(l.enter)){var r;const x=null!==(r=m.get(u))&&void 0!==r?r:v;d.set(u,v);const y=b.get(u);y&&e.delete(u);const z=Hf(c.enter,(A,B)=>{var E,I=c.update[B];const H=A.value(x,l,n),
J=I.value(v,l,n);var M=A.group(x,t),P;const T=null!==(P=null===(E=c.jf)||void 0===E?void 0:E[B])&&void 0!==P?P:!1;E=q[B];M=D(E.get(M));P=A.easing;if(y){A=y[B];const {Ac:ma,Hk:qa,Up:ja}=W0(I,f,M,E.size,p,T);A.update({end:J,Ac:ma,Hk:qa,Up:ja,easing:P,yka:!1});return A}const {Ac:V,Hk:ba,Up:la}=W0(A,H===J?0:f,M,E.size,p,T);I=D(a).GEa({start:H,end:J,Ac:V,Hk:ba,Up:la,easing:P},T?k:void 0);I.play();g&&h&&I.$$(g);return I});b.set(u,z)}},GIb=function({M:a,Lb:b,rl:c,Ue:d,Ms:e,mz:f,diff:g,getKey:h,kC:k}){for(const [n,
p]of g.update)c.set(n,p);const l=new Map;for(const [n,p]of g.update)c=U0(a,n),EIb({Gk:p,M:c,Lb:b.update,diff:g,getKey:h,fSa:"update"})&&l.set(n,p);const m=Hf(b.update,n=>V0(n,l));for(const [n,[p,q]]of R0(l)){const r=U0(a,p);c=Hf(b.update,(t,u)=>{var v;const x=r[u],y=t.value(q,g,h);if(y===x.definition.end)return x;var z=t.group(q,n);const A=m[u];z=D(A.get(z));var B;const E=null!==(B=null===(v=b.jf)||void 0===v?void 0:v[u])&&void 0!==B?B:!1,{Ac:I,Hk:H,Up:J}=W0(t,d,z,A.size,k,E);x.update({end:y,Ac:I,
Hk:H,Up:J,easing:t.easing,yka:!1});e&&f&&x.$$(e);return x});a.set(p,c)}},HIb=function({X:a,M:b,Lb:c,rl:d,Zm:e,xe:f,Ms:g,mz:h,diff:k,lK:l,getKey:m,kC:n}){const p=new Map;var q=new Map;for(const [B,E]of k.exit){var r=U0(b,B),t;EIb({Gk:null!==(t=l.get(B))&&void 0!==t?t:E,M:r,Lb:c.exit,diff:k,getKey:m,fSa:"exit"})?p.set(B,E):q.set(B,E)}const u=Object.keys(c.enter);for(var v of q.keys())X0({M:b,X:a,rl:d,Zm:e,Yz:u,key:v});q=Hf(c.exit,B=>V0(B,p));for(const [B,[E,I]]of R0(p)){d.delete(E);e.set(E,I);var x;
r=null!==(x=l.get(E))&&void 0!==x?x:I;v=U0(b,E);t=[];for(const H in c.exit){var y;const J=c.exit[H],M=v[H],P=J.value(r,k,m);if(!J.lY&&P===M.definition.end)continue;var z=J.group(r,B);const T=q[H];z=D(T.get(z));var A;const V=null!==(A=null===(y=c.jf)||void 0===y?void 0:y[H])&&void 0!==A?A:!1,{Ac:ba,Hk:la,Up:ma}=W0(J,f,z,T.size,n,V);t.push({animation:M,definition:{end:P,Ac:ba,Hk:la,Up:ma,easing:J.easing,yka:J.lY}})}({animation:r}=__c.ys(t,({definition:H})=>H.Hk+H.Ac));for(const {animation:H,definition:J}of t)H.update({...J,
$j:H===r?()=>X0({M:b,X:a,rl:d,Zm:e,Yz:u,key:E}):void 0}),g&&h&&H.$$(g)}},X0=function({M:a,X:b,rl:c,Zm:d,Yz:e,key:f}){const g=U0(a,f);for(const h of e)e=g[h],D(b).sTa(e);a.delete(f);c.delete(f);d.delete(f)},IIb=function({M:a,X:b,rl:c,Zm:d,As:e,Yz:f}){for(const g of a.keys())X0({M:a,X:b,rl:c,Zm:d,Yz:f,key:g});e.clear()},MIb=function(a,b,c){function d(){Y0(()=>Z0(()=>[a.data.get(),a.j.goa],()=>{var m=a.j;const n=m.Ut;m=m.goa;const p=a.Wkb,q=a.BSa;a.BSa=m;a.Wkb=n;null!=q&&(a.WK=JIb.structural(m,q)||p!==
n)},{fireImmediately:!0}),[])}KIb(()=>a.As.clear());const e=new LIb,f=T0(()=>e.T8(a)),g=m=>{e.flush(a,m)},h=()=>{e.reset(a)},k=()=>a.data.get(),l=$0(function({children:m}){d();Y0(()=>e.subscribe(a),[]);return S0(wIb,{render:m,T8:f.get()})});return{Rb:function({children:m}){Y0(()=>{null===b||void 0===b?void 0:b(a,{flush:g,reset:h,capture:k});return()=>null===c||void 0===c?void 0:c(a)},[]);return S0(l,{children:m})},KA:function(){d();Y0(()=>{const m=e.subscribe(a);null===b||void 0===b?void 0:b(a,{flush:g,
reset:h,capture:k});return()=>{null===c||void 0===c?void 0:c(a);m()}},[]);return f}}},a1=function(a){KIb(()=>a.As.clear());const b=T0(()=>CIb(a)),c=$0(function({children:d}){Y0(()=>a.As.subscribe(),[]);return S0(wIb,{render:d,T8:b.get()})});return{Rb:function({children:d}){return S0(c,{children:d})},KA:function(){Y0(()=>a.As.subscribe(),[]);return b}}},OIb=function(a){return b=>null==b.X?a1(b):{KA:()=>{const c=b.Mh.get(),{KA:d}=NIb(()=>c?a(b):a1(b),[c]);return d()},Rb:$0(function(c){const d=b.Mh.get(),
{Rb:e}=NIb(()=>d?a(b):a1(b),[d]);return S0(e,{...c})})}},S0=__webpack_require__(443763).jsx;var $0=__webpack_require__(214645).Pi;var PIb=__webpack_require__(875604),Y0=PIb.useEffect,NIb=PIb.useMemo;var b1=__webpack_require__(519427),QIb=b1.action,JIb=b1.comparer,T0=b1.computed,Z0=b1.reaction,KIb=b1.runInAction;var LIb=class{subscribe(a){__c.C(null!=a.X,"Only animated groups should subscribe");const b=a.As.subscribe(),c=Z0(()=>a.As.diff,()=>{a.mz||AIb(a)},{fireImmediately:!0});return QIb(()=>{const d=a.M,e=a.X,f=a.rl,g=a.Zm,h=a.As,k=Object.keys(a.Lb.enter);IIb({M:d,X:e,rl:f,Zm:g,Yz:k,As:h});b();a.BSa=void 0;c()})}reset(a){const b=a.M,c=a.X,d=a.rl,e=a.Zm,f=a.As;a=Object.keys(a.Lb.enter);IIb({M:b,X:c,rl:d,Zm:e,Yz:a,As:f})}flush(a,{iP:b,kK:c,lK:d}){a.WK=!0;a.As.flush();const e=a.M,f=Object.keys(a.Lb.enter);
for(const g of DIb(e,f))g.xr(g.definition.Ac+g.definition.Hk);AIb(a,{kC:!0,iP:b,kK:BIb(c,a),lK:BIb(d,a)})}T8(a){const b=a.M,c=a.rl;a=a.Zm;const d=[...c.values(),...a.values()];return[...c.entries(),...a.entries()].map(([e,f],g)=>({Tf:Hf(U0(b,e),h=>h.state),Gk:f,index:g,key:e,data:d}))}};__c.JB={};__c.JB.Ia=OIb(a=>MIb(a));
__c.JB.EZ=function(){const a=[],b=new Map;let c=0;const d=(f,{flush:g,reset:h,capture:k})=>{const l=new Map;for(const {id:m,OI:n,effect:p}of a)l.set(m,Z0(n,q=>p(q,{flush:g,reset:h,capture:k}),{fireImmediately:!0}));b.set(f,{flush:g,reset:h,capture:k,Xva:l})},e=f=>{const g=b.get(f);if(g)for(const h of g.Xva.values())h();b.delete(f)};return{Ia:OIb(f=>MIb(f,d,e)),Sbb:function(f,g){const h=c++;a.push({id:h,OI:f,effect:g});for(const {flush:k,reset:l,capture:m,Xva:n}of b.values())n.set(h,Z0(f,p=>g(p,{flush:k,
reset:l,capture:m}),{fireImmediately:!0}));return()=>{for(const {Xva:k}of b.values()){const l=k.get(h);l&&(l(),k.delete(h))}}}}};
}).call(self, self._7ccc7343da2ae983607b3819c7bc1f93);}

}])