(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[98272],{

/***/ 196731:
function(_, __, __webpack_require__) {__webpack_require__.n_x = __webpack_require__.n;const __web_req__ = __webpack_require__;__web_req__(813110);__web_req__(25518);__web_req__(523795);__web_req__(955885);__web_req__(867014);__web_req__(195012);__web_req__(950918);__web_req__(606911);__web_req__(418410);__web_req__(908647);__web_req__(913437);__web_req__(190240);__web_req__(943970);__web_req__(122589);__web_req__(983530);__web_req__(546212);__web_req__(883214);__web_req__(9032);self._7ccc7343da2ae983607b3819c7bc1f93 = self._7ccc7343da2ae983607b3819c7bc1f93 || {};(function(__c) {var Ju=__c.Ju;var QZ=__c.QZ;var PX=__c.PX;
var z1=function(a){return a.map(([b,c])=>[b,c.reduce((d,e)=>[e+(d[0]||0),...d],[])])},hKb=function(a,b){__c.w(0<a.length);return a.reduce((c,d)=>Math.abs(d.x-b)<Math.abs(c.x-b)?d:c,a[0])},iKb=function(a,b,c,d){const e=a.nh,f=a.ji;var g=a.mia;a=g.jb;g=g.labels;const h=PX(e.map(v=>v.text)),k=PX(g),l=__c.VW(a).map(v=>Math.max(...v)),m=Math.max(...l)/2,n=c.get(m),p=1<a.length?.65:1,q=[];for(const [v,x]of a.entries()){var {key:r}=e[e.length-1-v];const y=h[e.length-1-v];r=QZ(d,r);const z=f[v],{ma:A,a:B,
b:E}=__c.Ut(z),I=v===a.length-1?void 0:a[v+1],H=[];for(let J=0;J<x.length-1;J++){var t=J+1;const M=`${y}.${k[J]}`,P=b.get(`${J}.${g[J]}`),T=b.get(`${t}.${g[t]}`);var u=l[J]/2;const V=l[t]/2,ba=c.get((I?I[J]:0)-u+m);u=c.get(x[J]-u+m);const la=c.get(x[t]-V+m);t=c.get((I?I[t]:0)-V+m);H.push({oa:{Kg:new Ju(P,ba),qd:new Ju(P,u),wh:new Ju(T,t),cd:new Ju(T,la)},color:z,Ua:A,Ma:B,Na:E,$C:r?.3:p,key:M,column:J,ya:v,data:q,xD:n,mq:!0})}q.push(H)}return q.flat()},jKb=function(a,b,c,d,e){const f=a.nh,g=b.jb;
b=b.labels;const h=PX(f.map(q=>q.text)),k=PX(b),[l]=d.rc(),m=[],n=1<g.length?.65:1;for(const [q,r]of g.entries()){var {key:p}=f[f.length-1-q];const t=h[f.length-1-q];p=QZ(e,p);const u=a.ji[q],{ma:v,a:x,b:y}=__c.Ut(u),z=q===g.length-1?void 0:g[q+1],A=[];for(let B=0;B<r.length-1;B++){const E=`${t}.${k[B]}`,I=c.get(`${B}.${b[B]}`),H=c.get(`${B+1}.${b[B+1]}`),J=d.get(z?z[B]:0),M=d.get(r[B]),P=d.get(r[B+1]),T=d.get(z?z[B+1]:0);A.push({oa:{Kg:new Ju(I,J),qd:new Ju(I,M),wh:new Ju(H,T),cd:new Ju(H,P)},color:u,
Ua:v,Ma:x,Na:y,$C:p?.3:n,key:E,xD:l,column:B,ya:q,data:m,mq:!0})}m.push(A)}return m.flat()},kKb=function(a,b,c,d){const e=a.nh;var f=a.Hh,g=f.jb;f=f.labels;const h=PX(e.map(q=>q.text)),k=PX(f),l=1<g.length?.5:1,m=[],[n]=c.rc();for(const [q,r]of g.entries()){var {key:p}=e[q];g=h[q];p=QZ(d,p);const t=a.xBa[q],{ma:u,a:v,b:x}=__c.Ut(t),y=[];for(let z=0;z<r.length-1;z++){const A=`${g}.${k[z]}`,B=b.get(`${z}.${f[z]}`),E=b.get(`${z+1}.${f[z+1]}`),I=c.get(0),H=c.get(r[z]),J=c.get(r[z+1]),M=c.get(0);y.push({oa:{Kg:new Ju(B,
I),qd:new Ju(B,H),wh:new Ju(E,M),cd:new Ju(E,J)},color:t,Ua:u,Ma:v,Na:x,$C:p?.3:l,key:A,column:z,ya:q,data:m,xD:n,mq:!1})}m.push(y)}return m.flat()},A1=function(a,b,c,d,e,f){const g=c.Xb(),h=a.nh;return b.jb.flatMap((k,l)=>{const {key:m,text:n}=h[h.length-1-l],p=f[l];return k.map((q,r)=>{if(Number.isFinite(q)){q=new Ju(c.get(g[r]),d.get(q));r=`${m}.${r}`;var t=QZ(e,m);return t||null==a.pn||a.pn!==q.x?void 0:{key:r,position:q,color:p,strokeWidth:t?0:5,label:n,jb:m}}})}).filter(__c.yb)},lKb=function(a,
b,c,d){const e=b.Xb(),f=a.ji,g=a.nh,h=a.mia.jb,k=__c.VW(h).map(m=>Math.max(...m)),l=Math.max(...k)/2;return h.flatMap((m,n)=>{const {key:p,text:q}=g[g.length-1-n],r=f[n];return m.map((t,u)=>{if(Number.isFinite(t)){var v=k[u]/2;t=new Ju(b.get(e[u]),c.get(t-v+l));u=`${p}.${u}`;return(v=QZ(d,p))||null==a.pn||a.pn!==t.x?void 0:{key:u,position:t,color:r,strokeWidth:v?0:5,label:q,jb:p}}})}).filter(__c.yb)},nKb=function({markers:a,Od:b,Tc:c}){return B1("g",{children:a.map(d=>B1(mKb,{marker:d,Od:b,Tc:c},
d.key))})},oKb=function(a){return C1(()=>B1(nKb,{markers:a.get(),Od:1,Tc:10}))},qKb=function({Rb:a}){return B1(a,{children:({Tf:b,key:c})=>B1(pKb,{...b},c)})},sKb=function({Rb:a}){return B1(a,{children:({Tf:b,key:c})=>B1(rKb,{...b},c)})},D1=function*(a,b){for(let c=a.ya+1;c<a.data.length;++c)yield b(a.data[c][a.column])},E1=function*(a,b){for(let c=a.ya-1;0<=c;--c)yield b(a.data[c][a.column])},tKb=function*(a,b){for(let c=0;c<a.data.length;++c)c!==a.ya&&(yield b(a.data[c][a.column]))},F1=function*(a,
b){for(let c=a.column-1;0<=c;--c)yield b(a.data[a.ya][c])},G1=function*(a,b){var c,d;for(let e=a.column+1;e<(null!==(d=null===(c=a.data.at(0))||void 0===c?void 0:c.length)&&void 0!==d?d:0);++e)yield b(a.data[a.ya][e])},uKb=function(a,b,c){for(const d of E1(a,c))if(a=b.update.get(d))return a},H1=function(a,b,c){for(const d of D1(a,c))if(a=b.update.get(d))return a},I1=function(a,b,c){if(a=uKb(a,b,c)){var d=b.prev.get(c(a));if(d){a={left:d.oa.Kg.y,right:d.oa.wh.y};for(const e of D1(d,c)){c=b.exit.get(e);
if(!c)break;a={left:c.oa.qd.y,right:c.oa.cd.y}}return a}}},J1=function(a,b,c){if(a=H1(a,b,c)){var d=b.prev.get(c(a));if(d){a=d;for(const e of E1(d,c)){c=b.exit.get(e);if(!c)break;a=c}return a}}},K1=function(a,b,c){for(const d of tKb(a,c))if(null!=b.update.get(d)&&(a=b.prev.get(d)))return a},L1=function(a,b,c){let d;for(var e of F1(a,c))if(d=b.update.get(e)){var f=e;break}if(d&&null!=f&&(f=b.prev.get(f))){e=f;for(const g of G1(f,c)){c=b.exit.get(g);if(!c)break;if(c.column-f.column>a.column-d.column)break;
e=c}return e}},M1=function(a,b,c){let d;for(var e of G1(a,c))if(d=b.update.get(e)){var f=e;break}if(d&&null!=f&&(f=b.prev.get(f))){e=f;for(const g of F1(f,c)){c=b.exit.get(g);if(!c)break;if(c.column-f.column<=a.column-d.column)break;e=c}return e}},N1=function(a,b,c){for(const d of E1(a,c))if(a=b.enter.get(d),null!=a&&(a=L1(a,b,c)))return a},O1=function(a,b,c){for(const d of D1(a,c))if(a=b.enter.get(d),null!=a&&(a=L1(a,b,c)))return a},P1=function(a,b,c){for(const d of E1(a,c))if(a=b.enter.get(d),null!=
a&&(a=M1(a,b,c)))return a},Q1=function(a,b,c){for(const d of D1(a,c))if(a=b.enter.get(d),null!=a&&(a=M1(a,b,c)))return a},R1=function(a,b,c){const d=uKb(a,b,c);if(d){a=d;for(const e of D1(d,c)){c=b.enter.get(e);if(!c)break;a=c}return a}},S1=function(a,b,c){for(const d of tKb(a,c))if(a=b.update.get(d),null!=a)return a},T1=function(a,b,c){let d;for(var e of F1(a,c))if(d=b.update.get(e)){var f=e;break}if(d&&null!=f&&(f=b.prev.get(f))){e=d;for(const g of G1(d,c)){c=b.enter.get(g);if(!c)return;if(c.column-
f.column>=a.column-d.column)break;e=c}return e}},U1=function(a,b,c){let d;for(var e of G1(a,c))if(d=b.update.get(e)){var f=e;break}if(d&&null!=f&&(f=b.prev.get(f))){e=d;for(const g of F1(d,c)){c=b.enter.get(g);if(!c)return;if(c.column-f.column>a.column-d.column)break;e=c}return e}},V1=function(a,b,c){for(const d of F1(a,c))if(a=b.prev.get(d))for(const e of E1(a,c))if(a=b.update.get(e))return a},W1=function(a,b,c){for(const d of F1(a,c))if(a=b.prev.get(d))for(const e of D1(a,c))if(a=b.update.get(e))return a},
X1=function(a,b,c){for(const d of G1(a,c))if(a=b.prev.get(d))for(const e of E1(a,c))if(a=b.update.get(e))return a},Y1=function(a,b,c){for(const d of G1(a,c))if(a=b.prev.get(d))for(const e of D1(a,c))if(a=b.update.get(e))return a},vKb=function({segments:a,X:b,Ia:c,j:d}){const e={enter:{L5:{value:(l,m,n)=>{var p,q,r,t,u,v,x,y,z,A,B,E,I,H;return null!==(H=null!==(I=null!==(E=null!==(B=null!==(A=null!==(z=null!==(y=null===(p=K1(l,m,n))||void 0===p?void 0:p.oa.qd.x)&&void 0!==y?y:null===(q=L1(l,m,n))||
void 0===q?void 0:q.oa.cd.x)&&void 0!==z?z:null===(r=M1(l,m,n))||void 0===r?void 0:r.oa.qd.x)&&void 0!==A?A:null===(t=N1(l,m,n))||void 0===t?void 0:t.oa.cd.x)&&void 0!==B?B:null===(u=O1(l,m,n))||void 0===u?void 0:u.oa.cd.x)&&void 0!==E?E:null===(v=P1(l,m,n))||void 0===v?void 0:v.oa.qd.x)&&void 0!==I?I:null===(x=Q1(l,m,n))||void 0===x?void 0:x.oa.qd.x)&&void 0!==H?H:l.oa.qd.x}},O5:{value:(l,m,n)=>{var p,q,r,t,u,v,x,y,z,A,B,E,I,H;return null!==(H=null!==(I=null!==(E=null!==(B=null!==(A=null!==(z=null!==
(y=null===(p=K1(l,m,n))||void 0===p?void 0:p.oa.cd.x)&&void 0!==y?y:null===(q=M1(l,m,n))||void 0===q?void 0:q.oa.qd.x)&&void 0!==z?z:null===(r=L1(l,m,n))||void 0===r?void 0:r.oa.cd.x)&&void 0!==A?A:null===(t=P1(l,m,n))||void 0===t?void 0:t.oa.qd.x)&&void 0!==B?B:null===(u=Q1(l,m,n))||void 0===u?void 0:u.oa.qd.x)&&void 0!==E?E:null===(v=N1(l,m,n))||void 0===v?void 0:v.oa.cd.x)&&void 0!==I?I:null===(x=O1(l,m,n))||void 0===x?void 0:x.oa.cd.x)&&void 0!==H?H:l.oa.cd.x}},m8:{value:(l,m,n)=>{var p,q,r,t,
u,v,x,y,z,A,B,E,I,H;return null!==(H=null!==(I=null!==(E=null!==(B=null!==(A=null!==(z=null!==(y=null===(p=K1(l,m,n))||void 0===p?void 0:p.oa.Kg.x)&&void 0!==y?y:null===(q=L1(l,m,n))||void 0===q?void 0:q.oa.wh.x)&&void 0!==z?z:null===(r=M1(l,m,n))||void 0===r?void 0:r.oa.qd.x)&&void 0!==A?A:null===(t=N1(l,m,n))||void 0===t?void 0:t.oa.cd.x)&&void 0!==B?B:null===(u=O1(l,m,n))||void 0===u?void 0:u.oa.cd.x)&&void 0!==E?E:null===(v=P1(l,m,n))||void 0===v?void 0:v.oa.qd.x)&&void 0!==I?I:null===(x=Q1(l,
m,n))||void 0===x?void 0:x.oa.qd.x)&&void 0!==H?H:l.oa.Kg.x}},o8:{value:(l,m,n)=>{var p,q,r,t,u,v,x,y,z,A,B,E,I,H;return null!==(H=null!==(I=null!==(E=null!==(B=null!==(A=null!==(z=null!==(y=null===(p=K1(l,m,n))||void 0===p?void 0:p.oa.wh.x)&&void 0!==y?y:null===(q=M1(l,m,n))||void 0===q?void 0:q.oa.Kg.x)&&void 0!==z?z:null===(r=L1(l,m,n))||void 0===r?void 0:r.oa.wh.x)&&void 0!==A?A:null===(t=P1(l,m,n))||void 0===t?void 0:t.oa.qd.x)&&void 0!==B?B:null===(u=Q1(l,m,n))||void 0===u?void 0:u.oa.qd.x)&&
void 0!==E?E:null===(v=N1(l,m,n))||void 0===v?void 0:v.oa.cd.x)&&void 0!==I?I:null===(x=O1(l,m,n))||void 0===x?void 0:x.oa.cd.x)&&void 0!==H?H:l.oa.wh.x}},M5:{value:(l,m,n)=>{var p,q,r,t,u,v,x,y,z,A,B,E,I,H,J,M,P,T,V;return null!==(V=l.mq?null!==(P=null!==(M=null!==(J=null!==(H=null!==(I=null!==(E=null!==(B=null===(p=J1(l,m,n))||void 0===p?void 0:p.oa.qd.y)&&void 0!==B?B:null===(q=I1(l,m,n))||void 0===q?void 0:q.left)&&void 0!==E?E:null===(r=L1(l,m,n))||void 0===r?void 0:r.oa.cd.y)&&void 0!==I?I:
null===(t=M1(l,m,n))||void 0===t?void 0:t.oa.qd.y)&&void 0!==H?H:null===(u=N1(l,m,n))||void 0===u?void 0:u.oa.wh.y)&&void 0!==J?J:null===(v=O1(l,m,n))||void 0===v?void 0:v.oa.cd.y)&&void 0!==M?M:null===(x=P1(l,m,n))||void 0===x?void 0:x.oa.Kg.y)&&void 0!==P?P:null===(y=Q1(l,m,n))||void 0===y?void 0:y.oa.qd.y:null!==(T=null===(z=L1(l,m,n))||void 0===z?void 0:z.oa.cd.y)&&void 0!==T?T:null===(A=M1(l,m,n))||void 0===A?void 0:A.oa.qd.y)&&void 0!==V?V:l.xD}},P5:{value:(l,m,n)=>{var p,q,r,t,u,v,x,y,z,A,
B,E,I,H,J,M,P,T,V;return null!==(V=l.mq?null!==(P=null!==(M=null!==(J=null!==(H=null!==(I=null!==(E=null!==(B=null===(p=J1(l,m,n))||void 0===p?void 0:p.oa.cd.y)&&void 0!==B?B:null===(q=I1(l,m,n))||void 0===q?void 0:q.right)&&void 0!==E?E:null===(r=M1(l,m,n))||void 0===r?void 0:r.oa.qd.y)&&void 0!==I?I:null===(t=L1(l,m,n))||void 0===t?void 0:t.oa.cd.y)&&void 0!==H?H:null===(u=P1(l,m,n))||void 0===u?void 0:u.oa.Kg.y)&&void 0!==J?J:null===(v=Q1(l,m,n))||void 0===v?void 0:v.oa.qd.y)&&void 0!==M?M:null===
(x=N1(l,m,n))||void 0===x?void 0:x.oa.wh.y)&&void 0!==P?P:null===(y=O1(l,m,n))||void 0===y?void 0:y.oa.cd.y:null!==(T=null===(z=M1(l,m,n))||void 0===z?void 0:z.oa.qd.y)&&void 0!==T?T:null===(A=L1(l,m,n))||void 0===A?void 0:A.oa.cd.y)&&void 0!==V?V:l.xD}},n8:{value:(l,m,n)=>{var p,q,r,t,u,v,x,y,z,A,B,E,I,H,J,M,P,T,V;return null!==(V=l.mq?null!==(P=null!==(M=null!==(J=null!==(H=null!==(I=null!==(E=null!==(B=null===(p=J1(l,m,n))||void 0===p?void 0:p.oa.qd.y)&&void 0!==B?B:null===(q=I1(l,m,n))||void 0===
q?void 0:q.left)&&void 0!==E?E:null===(r=L1(l,m,n))||void 0===r?void 0:r.oa.wh.y)&&void 0!==I?I:null===(t=M1(l,m,n))||void 0===t?void 0:t.oa.Kg.y)&&void 0!==H?H:null===(u=N1(l,m,n))||void 0===u?void 0:u.oa.wh.y)&&void 0!==J?J:null===(v=O1(l,m,n))||void 0===v?void 0:v.oa.cd.y)&&void 0!==M?M:null===(x=P1(l,m,n))||void 0===x?void 0:x.oa.Kg.y)&&void 0!==P?P:null===(y=Q1(l,m,n))||void 0===y?void 0:y.oa.qd.y:null!==(T=null===(z=L1(l,m,n))||void 0===z?void 0:z.oa.wh.y)&&void 0!==T?T:null===(A=M1(l,m,n))||
void 0===A?void 0:A.oa.Kg.y)&&void 0!==V?V:l.xD}},p8:{value:(l,m,n)=>{var p,q,r,t,u,v,x,y,z,A,B,E,I,H,J,M,P,T,V;return null!==(V=l.mq?null!==(P=null!==(M=null!==(J=null!==(H=null!==(I=null!==(E=null!==(B=null===(p=J1(l,m,n))||void 0===p?void 0:p.oa.cd.y)&&void 0!==B?B:null===(q=I1(l,m,n))||void 0===q?void 0:q.right)&&void 0!==E?E:null===(r=M1(l,m,n))||void 0===r?void 0:r.oa.Kg.y)&&void 0!==I?I:null===(t=L1(l,m,n))||void 0===t?void 0:t.oa.wh.y)&&void 0!==H?H:null===(u=P1(l,m,n))||void 0===u?void 0:
u.oa.Kg.y)&&void 0!==J?J:null===(v=Q1(l,m,n))||void 0===v?void 0:v.oa.qd.y)&&void 0!==M?M:null===(x=N1(l,m,n))||void 0===x?void 0:x.oa.wh.y)&&void 0!==P?P:null===(y=O1(l,m,n))||void 0===y?void 0:y.oa.cd.y:null!==(T=null===(z=M1(l,m,n))||void 0===z?void 0:z.oa.Kg.y)&&void 0!==T?T:null===(A=L1(l,m,n))||void 0===A?void 0:A.oa.wh.y)&&void 0!==V?V:l.xD}},Ua:{value:l=>l.Ua},Ma:{value:l=>l.Ma},Na:{value:l=>l.Na},Wc:{value:()=>0},$C:{value:l=>l.$C,end:0}},update:{L5:{value:l=>l.oa.qd.x},M5:{value:l=>l.oa.qd.y},
O5:{value:l=>l.oa.cd.x},P5:{value:l=>l.oa.cd.y},m8:{value:l=>l.oa.Kg.x},n8:{value:l=>l.oa.Kg.y},o8:{value:l=>l.oa.wh.x},p8:{value:l=>l.oa.wh.y},Ua:{value:l=>l.Ua,Jb:!0},Ma:{value:l=>l.Ma,Jb:!0},Na:{value:l=>l.Na,Jb:!0},Wc:{value:()=>1,end:0},$C:{value:l=>l.$C,end:.6}},exit:{L5:{value:(l,m,n)=>{var p,q,r,t,u,v,x,y,z,A,B,E,I,H;return null!==(H=null!==(I=null!==(E=null!==(B=null!==(A=null!==(z=null!==(y=null===(p=S1(l,m,n))||void 0===p?void 0:p.oa.qd.x)&&void 0!==y?y:null===(q=T1(l,m,n))||void 0===q?
void 0:q.oa.cd.x)&&void 0!==z?z:null===(r=U1(l,m,n))||void 0===r?void 0:r.oa.Kg.x)&&void 0!==A?A:null===(t=V1(l,m,n))||void 0===t?void 0:t.oa.cd.x)&&void 0!==B?B:null===(u=W1(l,m,n))||void 0===u?void 0:u.oa.cd.x)&&void 0!==E?E:null===(v=X1(l,m,n))||void 0===v?void 0:v.oa.qd.x)&&void 0!==I?I:null===(x=Y1(l,m,n))||void 0===x?void 0:x.oa.qd.x)&&void 0!==H?H:l.oa.Kg.x}},O5:{value:(l,m,n)=>{var p,q,r,t,u,v,x,y,z,A,B,E,I,H;return null!==(H=null!==(I=null!==(E=null!==(B=null!==(A=null!==(z=null!==(y=null===
(p=S1(l,m,n))||void 0===p?void 0:p.oa.cd.x)&&void 0!==y?y:null===(q=U1(l,m,n))||void 0===q?void 0:q.oa.Kg.x)&&void 0!==z?z:null===(r=T1(l,m,n))||void 0===r?void 0:r.oa.cd.x)&&void 0!==A?A:null===(t=X1(l,m,n))||void 0===t?void 0:t.oa.qd.x)&&void 0!==B?B:null===(u=Y1(l,m,n))||void 0===u?void 0:u.oa.qd.x)&&void 0!==E?E:null===(v=V1(l,m,n))||void 0===v?void 0:v.oa.cd.x)&&void 0!==I?I:null===(x=W1(l,m,n))||void 0===x?void 0:x.oa.cd.x)&&void 0!==H?H:l.oa.cd.x}},m8:{value:(l,m,n)=>{var p,q,r,t,u,v,x,y,z,
A,B,E,I,H;return null!==(H=null!==(I=null!==(E=null!==(B=null!==(A=null!==(z=null!==(y=null===(p=S1(l,m,n))||void 0===p?void 0:p.oa.Kg.x)&&void 0!==y?y:null===(q=T1(l,m,n))||void 0===q?void 0:q.oa.cd.x)&&void 0!==z?z:null===(r=U1(l,m,n))||void 0===r?void 0:r.oa.Kg.x)&&void 0!==A?A:null===(t=V1(l,m,n))||void 0===t?void 0:t.oa.cd.x)&&void 0!==B?B:null===(u=W1(l,m,n))||void 0===u?void 0:u.oa.cd.x)&&void 0!==E?E:null===(v=X1(l,m,n))||void 0===v?void 0:v.oa.qd.x)&&void 0!==I?I:null===(x=Y1(l,m,n))||void 0===
x?void 0:x.oa.qd.x)&&void 0!==H?H:l.oa.qd.x}},o8:{value:(l,m,n)=>{var p,q,r,t,u,v,x,y,z,A,B,E,I,H;return null!==(H=null!==(I=null!==(E=null!==(B=null!==(A=null!==(z=null!==(y=null===(p=S1(l,m,n))||void 0===p?void 0:p.oa.wh.x)&&void 0!==y?y:null===(q=U1(l,m,n))||void 0===q?void 0:q.oa.Kg.x)&&void 0!==z?z:null===(r=T1(l,m,n))||void 0===r?void 0:r.oa.cd.x)&&void 0!==A?A:null===(t=X1(l,m,n))||void 0===t?void 0:t.oa.qd.x)&&void 0!==B?B:null===(u=Y1(l,m,n))||void 0===u?void 0:u.oa.qd.x)&&void 0!==E?E:null===
(v=V1(l,m,n))||void 0===v?void 0:v.oa.cd.x)&&void 0!==I?I:null===(x=W1(l,m,n))||void 0===x?void 0:x.oa.cd.x)&&void 0!==H?H:l.oa.wh.x}},M5:{value:(l,m,n)=>{var p,q,r,t,u,v,x,y,z,A,B,E,I,H,J,M,P,T,V;return null!==(V=l.mq?null!==(P=null!==(M=null!==(J=null!==(H=null!==(I=null!==(E=null!==(B=null===(p=H1(l,m,n))||void 0===p?void 0:p.oa.qd.y)&&void 0!==B?B:null===(q=R1(l,m,n))||void 0===q?void 0:q.oa.Kg.y)&&void 0!==E?E:null===(r=T1(l,m,n))||void 0===r?void 0:r.oa.cd.y)&&void 0!==I?I:null===(t=U1(l,m,
n))||void 0===t?void 0:t.oa.qd.y)&&void 0!==H?H:null===(u=V1(l,m,n))||void 0===u?void 0:u.oa.wh.y)&&void 0!==J?J:null===(v=X1(l,m,n))||void 0===v?void 0:v.oa.Kg.y)&&void 0!==M?M:null===(x=W1(l,m,n))||void 0===x?void 0:x.oa.cd.y)&&void 0!==P?P:null===(y=Y1(l,m,n))||void 0===y?void 0:y.oa.qd.y:null!==(T=null===(z=T1(l,m,n))||void 0===z?void 0:z.oa.cd.y)&&void 0!==T?T:null===(A=U1(l,m,n))||void 0===A?void 0:A.oa.qd.y)&&void 0!==V?V:l.xD}},P5:{value:(l,m,n)=>{var p,q,r,t,u,v,x,y,z,A,B,E,I,H,J,M,P,T,V;
return null!==(V=l.mq?null!==(P=null!==(M=null!==(J=null!==(H=null!==(I=null!==(E=null!==(B=null===(p=H1(l,m,n))||void 0===p?void 0:p.oa.cd.y)&&void 0!==B?B:null===(q=R1(l,m,n))||void 0===q?void 0:q.oa.wh.y)&&void 0!==E?E:null===(r=U1(l,m,n))||void 0===r?void 0:r.oa.qd.y)&&void 0!==I?I:null===(t=T1(l,m,n))||void 0===t?void 0:t.oa.cd.y)&&void 0!==H?H:null===(u=X1(l,m,n))||void 0===u?void 0:u.oa.Kg.y)&&void 0!==J?J:null===(v=V1(l,m,n))||void 0===v?void 0:v.oa.wh.y)&&void 0!==M?M:null===(x=Y1(l,m,n))||
void 0===x?void 0:x.oa.qd.y)&&void 0!==P?P:null===(y=W1(l,m,n))||void 0===y?void 0:y.oa.cd.y:null!==(T=null===(z=U1(l,m,n))||void 0===z?void 0:z.oa.qd.y)&&void 0!==T?T:null===(A=T1(l,m,n))||void 0===A?void 0:A.oa.cd.y)&&void 0!==V?V:l.xD}},n8:{value:(l,m,n)=>{var p,q,r,t,u,v,x,y,z,A,B,E,I,H,J;return null!==(J=l.mq?null!==(I=null!==(E=null!==(B=null!==(A=null!==(z=null===(p=H1(l,m,n))||void 0===p?void 0:p.oa.qd.y)&&void 0!==z?z:null===(q=R1(l,m,n))||void 0===q?void 0:q.oa.Kg.y)&&void 0!==A?A:null===
(r=T1(l,m,n))||void 0===r?void 0:r.oa.wh.y)&&void 0!==B?B:null===(t=U1(l,m,n))||void 0===t?void 0:t.oa.Kg.y)&&void 0!==E?E:null===(u=W1(l,m,n))||void 0===u?void 0:u.oa.cd.y)&&void 0!==I?I:null===(v=Y1(l,m,n))||void 0===v?void 0:v.oa.qd.y:null!==(H=null===(x=T1(l,m,n))||void 0===x?void 0:x.oa.wh.y)&&void 0!==H?H:null===(y=U1(l,m,n))||void 0===y?void 0:y.oa.Kg.y)&&void 0!==J?J:l.xD}},p8:{value:(l,m,n)=>{var p,q,r,t,u,v,x,y,z,A,B,E,I,H,J;return null!==(J=l.mq?null!==(I=null!==(E=null!==(B=null!==(A=
null!==(z=null===(p=H1(l,m,n))||void 0===p?void 0:p.oa.cd.y)&&void 0!==z?z:null===(q=R1(l,m,n))||void 0===q?void 0:q.oa.wh.y)&&void 0!==A?A:null===(r=U1(l,m,n))||void 0===r?void 0:r.oa.Kg.y)&&void 0!==B?B:null===(t=T1(l,m,n))||void 0===t?void 0:t.oa.wh.y)&&void 0!==E?E:null===(u=Y1(l,m,n))||void 0===u?void 0:u.oa.qd.y)&&void 0!==I?I:null===(v=W1(l,m,n))||void 0===v?void 0:v.oa.cd.y:null!==(H=null===(x=U1(l,m,n))||void 0===x?void 0:x.oa.Kg.y)&&void 0!==H?H:null===(y=T1(l,m,n))||void 0===y?void 0:y.oa.wh.y)&&
void 0!==J?J:l.xD}},Ua:{value:l=>l.Ua},Ma:{value:l=>l.Ma},Na:{value:l=>l.Na},Wc:{value:()=>0},$C:{value:l=>l.$C,end:0}},jf:{L5:!0,M5:!0,O5:!0,P5:!0,m8:!0,n8:!0,o8:!0,p8:!0,Ua:!1,Ma:!1,Na:!1,Wc:!1,$C:!1}},f=__c.p_([a],2),g=new __c.QW({Lb:e,data:a,X:b,j:d,Mh:f,we:500,Ue:500,xe:500,getKey:l=>l.key});a=new __c.QW({Lb:e,data:a,X:b,j:d,Mh:f,we:500,Ue:500,xe:500,getKey:l=>l.key+"_line"});const {Rb:h}=c(g),{Rb:k}=c(a);return{Wx:()=>B1(qKb,{Rb:h}),Wia:()=>B1("g",{clipPath:"inset(0px 2px 2px 1px)",children:B1(sKb,
{Rb:k})})}},wKb=__webpack_require__(443763),B1=wKb.jsx,Z1=wKb.jsxs;var C1=__webpack_require__(214645).Pi;var $1=__webpack_require__(875604),a2=$1.memo,xKb=$1.useCallback,yKb=$1.useMemo;var b2=__webpack_require__(519427),zKb=b2.action,c2=b2.computed,AKb=b2.observable;var BKb=({Wx:a,Wia:b,Ria:c,Xia:d,Qia:e})=>Z1("g",{children:[B1(a,{}),b&&B1(b,{}),e&&B1(e,{}),d&&B1(d,{}),B1(c,{})]}),CKb=({width:a,height:b})=>Z1("svg",{viewBox:"0 0 100 100",fill:"none",filter:"grayscale(1)",opacity:"0.5",width:a,height:b,children:[B1("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M80 8H0V8.90141H80V8ZM0 20.6197H80V21.5211H0V20.6197ZM80 33.2394H0V34.1408H80V33.2394ZM0 45.8592H80V46.7606H0V45.8592ZM80 58.4789H0V59.3803H80V58.4789ZM80 71.0986H0V72H80V71.0986Z",fill:"white",fillOpacity:"0.1"}),
B1("path",{d:"M28 33.5L22 30.5L15 34.5L11 46L6.5 57L4 72H62L58.9474 69.2958L50.2256 60.7324L45.4286 56.2253L34 39.5L28 33.5Z",fill:"#2979AE"}),B1("path",{d:"M64 41.5L62.5 39L55.6434 11.2941L47.5 9L42.5 16L36 20.5L32 36.0938L26.5 47.5L21.5 57.4118L13 68L5 72H76V57.4118L71 52L64 41.5Z",fill:"#6CE4E7"}),B1("path",{d:"M5 72H76L67.5 67.5L62 60L55 55.5L49 48L40 43.5L31.5 37L26.5 47.5L21.5 57.4117L13 68L5 72Z",fill:"#4BAECB"})]});var DKb=class{static A(a){__c.Q(a,{nO:c2,Da:c2,On:c2})}get nO(){return this.j.Gd?2/3*this.j.width:Infinity}get Da(){return{wt:0,scale:this.vk,direction:"horizontal",float:"bottom",Qs:this.nO,Ej:!1}}get On(){if("stream"!==this.j.Xa.Sd)return{wt:0,scale:this.wk,direction:"vertical",float:"left",Ej:!0,Qs:this.nO,jN:!1}}constructor(a,b,c){this.vk=a;this.wk=b;this.j=c;DKb.A(this)}};var HKb=class{static A(a){__c.Q(a,{HL:c2,vX:c2,Hh:c2,vB:c2,mia:c2,ACa:c2,nh:c2,ji:c2,xBa:c2,Do:c2,Ra:c2,Uk:c2,Eo:c2,$sb:c2,pn:AKb.ref})}get format(){return this.bindings.format}get tm(){return this.bindings.tm}get Cb(){return this.j.Cb}get HL(){return this.vB.labels.map((a,b)=>`${b}.${a}`)}get vX(){if("proportional"===this.j.Xa.Sd)return __c.wZ;let a;switch(this.j.Xa.Sd){case "stream":a=__c.xZ({min:void 0,max:void 0,lC:!0,data:this.mia.jb.flat()});break;case "unstacked":a=__c.xZ({...this.fl,lC:!1,
data:this.Hh.jb.flat()});break;default:a=__c.xZ({...this.fl,lC:!1,data:this.vB.jb.flat()})}return a[0].value===a[1].value?__c.wZ:a}get fl(){return this.j.Xa.za.scale}get Hh(){return __c.AZ(this.bindings.labels,this.bindings.values,d2,this.bindings.TH)}get vB(){return __c.AZ(this.bindings.labels,this.bindings.values,EKb,this.bindings.TH)}get mia(){return __c.AZ(this.bindings.labels,this.bindings.values,FKb,this.bindings.TH)}get ACa(){return __c.AZ(this.bindings.labels,this.bindings.values,GKb,this.bindings.TH)}get nh(){return this.vB.Kv.map(({key:a,
Sq:b})=>({key:a,text:b.label||""}))}get ji(){return[...this.Ra].reverse()}get xBa(){return this.Ra}get Do(){return 0===this.vB.jb.length?[]:this.vB.Kv.map(a=>__c.D(a.Sq.F)).map(__c.NX).map(a=>a.from)}get Ra(){const a=this.j.Xa.F.ref;if(null==a)return this.Do;__c.C("single"!==a.type,"SINGLE color mode is not yet supported in area charts");return this.vB.Kv.map(({Sq:b})=>__c.ZW(null!=b.id?a.Ra.get(b.id):void 0))}get Uk(){const a=PX(this.nh.map(b=>b.text));return this.nh.map((b,c)=>({text:b.text,NB:b.key,
Qq:a[c]}))}get Eo(){return this.Ra}get $sb(){const [a,b]=this.vX;return b.value/(b.value-a.value)*this.Cb.height}constructor(a){this.j=a;this.xu=(HKb.A(this),"column");this.bindings=new __c.CZ(this.j,IKb);this.pn=void 0}},d2=[__c.$Bb,__c.zZ,__c.ZBb],EKb=[...d2,z1],FKb=[...d2,__c.yZ,z1],GKb=[...d2,__c.yZ,function(a){const b=a.map(([,c])=>c.reduce((d,e)=>d+e,0));return a.map(([c,d],e)=>[c,d.map(f=>0<b[e]?f/b[e]*100:0)])},z1],IKb=__c.BZ();__c.lX(IKb,{filter_by:!0});var JKb=class{fz(a,b,c,d){if(!a.j.Ag)return[];const e=b.Xb(),{nh:f,Hh:g,vB:h,j:{Xa:{za:{scale:{min:k=-Infinity,max:l=Infinity}}}}}=a,m=h.labels,n=new Map;g.jb.forEach((p,q,r)=>{const {key:t,text:u}=f[q],v=h.jb[r.length-1-q],x=QZ(d,t),y=[];p.forEach((z,A)=>{if(Number.isFinite(z)){var B=v[A],E=B-z,I=Math.max(B,E);if(Math.min(B,E)<=l&&I>=k){E=m[A];var H=`${t}.${A}`;A=b.get(e[A]);B=c.get(B);I=n.get(A);z=u.length?`${u}: ${a.format(z)}`:a.format(z);E={header:E||void 0,body:x||null!=I?[]:[z]};null==I?(n.set(A,
{x:A,xd:E,key:H,Pn:B,Pm:B}),y.push(H)):y.some(J=>J===H)||x||(I.xd.body.push(z),I.Pn=Math.min(I.Pn,B),I.Pm=Math.max(I.Pm,B),y.push(H))}}})});return Array.from(n.values())}xx(a,b){a.pn=b}Jpa(a,b,c){if(b.length){var d=a.j.$E();if(null!=d){a=a.j.Cb;var e=c.clientX;c=c.clientY;d=d.then(__c.Xu(-a.left,-a.top)).transform(e,c).x;b=hKb(b,d);d=Math.max(b.Pn-55,-5);a=__c.iv({top:d,left:b.x,width:0,height:Math.min(b.Pm+50+5,a.height+5)-d}).transform(__c.Xu(a.left,a.top));return{I2:b,...__c.qv(a)}}}}};var KKb=class{segments(a,b,c,d){if(!a.j.Ag)return[];switch(a.j.Xa.Sd){case "stream":return iKb(a,b,c,d);case "proportional":return jKb(a,a.ACa,b,c,d);case "unstacked":return kKb(a,b,c,d);case "stacked":case void 0:return jKb(a,a.vB,b,c,d);default:throw new __c.F(a.j.Xa.Sd);}}markers(a,b,c,d){if(!a.j.Ag)return[];switch(a.j.Xa.Sd){case "proportional":return A1(a,a.ACa,b,c,d,a.ji);case "stream":return lKb(a,b,c,d);case "unstacked":return A1(a,a.Hh,b,c,d,a.xBa);case "stacked":case void 0:return A1(a,
a.vB,b,c,d,a.ji);default:throw new __c.F(a.j.Xa.Sd);}}};var mKb=a2(({marker:a,Od:b,Tc:c})=>B1("path",{fill:a.color,d:__c.U_[b](a.position,c),stroke:a.color,strokeWidth:a.strokeWidth,strokeOpacity:.5}));var LKb=__c.PW("path",new Set(["d","fill","opacity"])),pKb=a2(({L5:a,M5:b,O5:c,P5:d,m8:e,n8:f,o8:g,p8:h,Ua:k,Ma:l,Na:m,$C:n})=>{const p=c2(()=>`M ${e.get()} ${f.get()} L ${a.get()} ${b.get()} L ${c.get()} ${d.get()} L ${g.get()} ${h.get()} Z`),q=c2(()=>__c.Xt(new __c.Ot(k.get(),l.get(),m.get())));return B1("g",{children:B1(LKb,{d:p,fill:q,opacity:n,shapeRendering:"crispEdges"})})}),MKb=__c.PW("line",new Set("x1 y1 x2 y2 stroke strokeWidth".split(" "))),rKb=a2(({L5:a,M5:b,O5:c,P5:d,Ua:e,Ma:f,Na:g,
Wc:h})=>{const k=c2(()=>__c.Xt(new __c.Ot(e.get(),f.get(),g.get()))),l=c2(()=>3*h.get());return B1(MKb,{x1:a,y1:b,x2:c,y2:d,stroke:k,strokeWidth:l,opacity:1,strokeLinejoin:"round",strokeLinecap:"round"})});var NKb=a2(({content:a})=>Z1("div",{children:[null!=a.header?B1(__c.Vy,{weight:"bold",size:"small",tagName:"div",lineClamp:0,tone:"primary",className:"iLuPVg",alignment:"center",children:a.header}):void 0,a.body.map((b,c)=>B1(__c.Vy,{size:"small",tagName:"div",lineClamp:0,tone:"primary",className:"iLuPVg",alignment:"center",children:b},c))]}));__c.ugb={k5a:({store:a,mc:b,Ia:c,Pa:d,Rg:e,ij:f,rn:g})=>{const h=new HKb(a),k=new KKb,l=new JKb,m=f?new __c.RW:void 0,n=new __c.MZ({rc:()=>[0,A.get()],Xb:()=>h.HL,zg:()=>.5,Ad:gb=>gb.slice(gb.indexOf(".")+1)}),p=new __c.uZ({rc:()=>[B.get(),0],Xb:()=>h.vX,Ad:gb=>h.tm(gb,p.Rs()),Aq:gb=>__c.vZ(gb),jn:()=>{var gb;return{mode:"TARGET_TICKS",count:null!==(gb=h.fl.spacing.jD)&&void 0!==gb?gb:6}}}),q=__c.KW({store:a}),r=c2(()=>({top:-.5,left:0,width:a.TD,height:a.cB+1})),{FX:t,UQ:u,VQ:v,OH:x,M6:y,tX:z,Kh:A,
Fg:B}=__c.oY({j:a,OR:new DKb(n,p,a),ij:f,qb:q,Pa:d,Wt:r,width:c2(()=>a.Vc),height:c2(()=>a.We),Lp:(gb,lb,xb)=>E(gb,lb,xb),Du:(gb,lb,xb)=>I(gb,lb,xb),mc:b,Ia:c}),{Lp:E,Du:I,fR:H,gR:J}=__c.sY({store:a,config:__c.RY(),Pa:d,Rg:e,Kh:A,Fg:B,sX:y,uX:z,mc:b,Ia:c}),M=__c.SW(function(){return{top:a.Ec.top+a.vl,left:a.Ec.left}}),P=__c.SW(function(){return{top:a.Ec.top,left:a.Ec.left}}),{QL:T,Il:V,Ns:ba,YW:la}=__c.XZ({zj:h,X:b,Ia:c,j:a,Pa:d,qb:q,width:c2(()=>a.Vc),rn:g}),{size:ma,ZW:qa}=__c.r_({j:a,X:b,Ia:c,
size:c2(()=>0!==ba.get()?.8:0),BR:!1,CR:!1}),ja=c2(()=>k.segments(h,n,p,V));e=c2(()=>k.markers(h,n,p,V));const ta=c2(()=>l.fz(h,n,p,V)),W=f&&m?zKb(({client:gb,fz:lb})=>{gb=l.Jpa(h,lb,gb);if(null!=gb){var {I2:xb,...Tc}=gb;l.xx(h,xb.x);__c.FW(m,f,{content:B1(NKb,{content:xb.xd}),vv:Tc,placement:"top-center",arrow:!0,key:xb.key})}}):void 0,aa=f&&m?zKb(()=>{l.xx(h);__c.GW(m,f)}):void 0,sa=__c.SW(function(){return{top:a.Ec.top,left:a.Ec.left}}),Fa=__c.XW({j:a,Ph:d.Ph,Qv:CKb,width:A,height:B}),Ya=c2(()=>
a.Ag&&0===ja.get().length),bb=c2(()=>vKb({segments:ja,X:b,Ia:c,j:a})),zb=oKb(e),fb=C1(function(){const gb=ta.get(),lb=xKb(Tc=>null===W||void 0===W?void 0:W({client:Tc,fz:gb}),[gb]),xb=xKb(Tc=>{f&&"changedTouches"in Tc&&0!==Tc.changedTouches.length&&(f.open?null===aa||void 0===aa?void 0:aa():null===W||void 0===W?void 0:W({client:Tc.changedTouches[0],fz:gb}))},[gb]);return B1("g",{onMouseMove:lb,onMouseLeave:aa,children:B1(__c.yX,{onClick:xb,children:B1("rect",{fill:"transparent",width:h.Cb.width,height:h.Cb.height})})})}),
Ua=C1(function(){return void 0!==h.pn?B1("line",{x1:h.pn,y1:"0",x2:h.pn,y2:h.Cb.height,stroke:"#000000",strokeDasharray:2}):null}),Pa=c2(()=>void 0!==h.pn),wb=C1(()=>B1(BKb,{Wx:bb.get().Wx,Wia:bb.get().Wia,Ria:fb,Xia:Pa.get()?zb:void 0,Qia:Ua})),Eb=c2(()=>a.Gd?x.get().top:0),Rb=c2(()=>{const gb=x.get().top,lb=ba.get()+ma.get();return a.Gd?gb+lb:Math.max(gb,lb)});return{Hl:()=>{if(Ya.get())return __c.tA;const gb=x.get();return{left:gb.left,top:Rb.get(),right:gb.right,bottom:gb.bottom}},Ht:C1(function(){const gb=
la(),lb=qa(),xb=yKb(()=>__c.SW(function(){return{top:a.Ec.top-gb.get()-lb.get()-Eb.get(),left:a.iD}}),[gb,lb]);return Ya.get()?B1(Fa,{}):Z1("g",{children:[B1(xb,{children:B1(T,{})}),B1(M,{children:B1(H,{})}),B1(P,{children:B1(J,{})}),Z1(sa,{children:[Z1(t,{children:[B1(u,{}),B1(wb,{})]}),B1(v,{})]})]})})}}};
}).call(self, self._7ccc7343da2ae983607b3819c7bc1f93);}

}])