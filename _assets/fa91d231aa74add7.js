(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([[78423],{

/***/ 908647:
function(_, __, __webpack_require__) {__webpack_require__.n_x = __webpack_require__.n;const __web_req__ = __webpack_require__;__web_req__(813110);__web_req__(523795);__web_req__(616574);__web_req__(190240);__web_req__(980938);__web_req__(22572);self._7ccc7343da2ae983607b3819c7bc1f93 = self._7ccc7343da2ae983607b3819c7bc1f93 || {};(function(__c) {var QW=__c.QW;var MX=__c.MX;var uA=__c.uA;var tA=__c.tA;var dv=__c.dv;var F=__c.F;var Ju=__c.Ju;var UX,ozb,qzb,rzb,szb,nzb,tzb,uzb,mzb,pzb,vzb,wzb,yzb,xzb,zzb,WX,XX,YX,ZX,Azb,Bzb,Czb,$X,aY,cY,dY,fY,gY,Fzb,Hzb,Ezb,Gzb,iY,jY,Jzb,Lzb,Kzb,Nzb,eY,mY;
UX=function({scale:a,maxWidth:b,fontSize:c,fontFamily:d,fontWeight:e,Un:f}){const g=mzb(a);a=f({Jn:g.values.map(({text:h})=>h),maxWidth:b,fontSize:c,fontFamily:d,fontWeight:e,textAlign:"center",textBaseline:"alphabetic"}).map((h,k)=>({...h,index:k,count:g.values.length,Cha:g.values[k].text,key:g.values[k].key}));return"linear"===g.sx?{sx:g.sx,measurements:a.map((h,k)=>{const {hga:l,HO:m}=g.values[k];return{...h,hga:l,HO:m}})}:{sx:g.sx,measurements:a.filter(({text:h})=>""!==h)}};
ozb=function({direction:a,fontSize:b,fontFamily:c,fontWeight:d,measureText:e}){a=nzb({direction:a,fontSize:b,fontFamily:c,fontWeight:d,measureText:e});return.5*b+a};
qzb=function({float:a,tC:b,maxHeight:c,wt:d,Qya:e,dqa:f}){return function(g,h){switch(a){case "left":return new Ju(-h.width/2-d-e,pzb(h,g,b,c));case "right":return new Ju(f+h.width/2+d+e,pzb(h,g,b,c));case "top":return new Ju(g,-e-c+b-h.actualBoundingBoxAscent+h.height/2);case "bottom":return new Ju(g,f+e+b-h.actualBoundingBoxAscent+h.height/2);default:throw new F(a);}}};
rzb=function({config:a,labels:b,Ypb:c,dqa:d,Qya:e}){const f=a.float;a=a.wt;const g=Math.max(...b.measurements.map(({actualBoundingBoxAscent:m})=>m)),h=Math.max(...b.measurements.map(({actualBoundingBoxDescent:m})=>m)),k=qzb({float:f,tC:g,maxHeight:g+h,wt:a,Qya:e,dqa:d}),l=(m,n)=>__c.jv({center:k(m,n),width:n.width,height:n.height});return{labels:b.measurements.map(m=>({Wp:m,position:l(c[m.index],m)})),TWa:l,sx:b.sx}};
szb=function(a,b){const c=b*__c.Hu/180;return a.map(d=>{d.position=d.position.translate(-d.position.width/2,0);d.position=d.position.transform(__c.$u(d.position.r,c));const e=d.position.translate(Math.abs(d.position.tr.x-d.position.br.x)/2,0);return{...d,position:e}})};nzb=function({direction:a,fontSize:b,fontFamily:c,fontWeight:d,measureText:e}){switch(a){case "vertical":return e({text:" ",fontSize:b,fontFamily:c,fontWeight:d}).zR;case "horizontal":return 0;default:throw new F(a);}};
tzb=function(a,b,c){const d="horizontal"===a.direction?b:c;return a.scale.clone({rc:"vertical"!==a.direction||a.jN?()=>[0,d]:()=>[d,0]})};uzb=function(a){const b=a.kind;switch(b){case "band":return a.Xb().map(c=>a.get(c)+a.Nt/2);case "point":return a.Xb().map(c=>a.get(c));case "linear":return a.Tr().map(c=>a.get(c));default:throw new F(b);}};
mzb=function(a){const b=a.kind;switch(b){case "band":case "point":var c=a.Xb().map(e=>a.Ad(e));const d=__c.PX(c);c=c.map((e,f)=>({text:e,key:d[f]}));return{sx:b,values:c};case "linear":return c=a.Tr().map(e=>{const f=a.Ad(e);return{hga:!!f.length,HO:e,text:f,key:e.toString()}}),{sx:b,values:c};default:throw new F(b);}};pzb=function(a,b,c,d){b+=a.height/2;b+=c-a.actualBoundingBoxAscent;return b-d/2};
vzb=function(a,b){if(0===a.length)return{labels:a,cA:new Set};const c={labels:[a[0]],cA:new Set};let d=a[0];for(let e=1;e<a.length;e++){const f=a[e],g=0===d.position.rotation?dv(d.position.tl.x-b.left,d.position.tl.y-b.top,d.position.br.x+b.right,d.position.br.y+b.bottom):d.position;(0===f.position.rotation?dv(f.position.tl.x-b.left,f.position.tl.y-b.top,f.position.br.x+b.right,f.position.br.y+b.bottom):f.position).Op(g)?c.cA.add(f.Wp.index):(c.labels.push(f),d=f)}return c};
wzb=function({items:a}){let b=0,c=1;for(let d=b;d<a.length;d++){const e=a[b+c];if(!e)break;a[b].position.Op(e.position)?c+=1:b=d}return c};
yzb=function(a,b){var c=a.map(k=>{if(0===k.position.rotation){const l=dv(k.position.tl.x-b.left,k.position.tl.y-b.top,k.position.br.x+b.right,k.position.br.y+b.bottom);return{...k,position:l}}return k});const [d,e]=xzb(c);c=wzb({items:d.map(k=>k.label)});var f=wzb({items:e.map(k=>k.label)});const g=new Set,h=Math.max(c,f);c=1<e.length?e.reduce((k,{label:l,index:m},n)=>{0===n%h&&l.Wp.hga?k.push(a[m]):g.add(l.Wp.index);return k},[]):[];f=1<d.length?d.reduce((k,{label:l,index:m},n)=>{0===n%h&&l.Wp.hga?
k.push(a[m]):g.add(l.Wp.index);return k},[]):[];return{labels:[...c,...f],cA:g}};xzb=function(a){const [b,c]=a.reduce(([d,e],f,g)=>{0===f.Wp.HO?(d.push({label:f,index:g}),e.push({label:f,index:g})):0>f.Wp.HO?e.push({label:f,index:g}):0<f.Wp.HO&&d.push({label:f,index:g});return[d,e]},[[],[]]);return[b,c.reverse()]};
zzb=function(a,b=tA){for(let e=0;e<a.length;e++){var c=a[e].position;c=dv(c.tl.x-b.left,c.tl.y-b.top,c.br.x+b.right,c.br.y+b.bottom);for(let f=e+1;f<a.length;f++){var d=a[f].position;d=dv(d.tl.x-b.left,d.tl.y-b.top,d.br.x+b.right,d.br.y+b.bottom);if(c.Op(d))return!0}}return!1};
WX=function({config:a,JF:b,width:c,height:d,rotate:e,fontFamily:f,fontSize:g,fontWeight:h,measureText:k}){const l=a.direction,m=a.float,n=tzb(a,c,d),p=uzb(n),q=ozb({direction:l,fontFamily:f,fontSize:g,fontWeight:h,measureText:k}),r=rzb({config:a,labels:b,Ypb:p,dqa:"horizontal"===l?d:c,Qya:q});a=k({text:" ",fontSize:g,fontFamily:f,fontWeight:h}).zR;b={...tA,left:2*a};a=0;e&&zzb(r.labels,b)&&(a="top"===m?45:-45,r.labels=szb(r.labels,a));const {labels:t,cA:u}="linear"===r.sx?yzb(r.labels,b):vzb(r.labels,
b);r.labels=t;c=__c.VX(t.map(v=>v.position),{width:c,height:d});return{fontSize:g,labels:t.map(v=>{const x=v.Wp;return{position:__c.uv(v.position).transform(x.actualBoundingBoxLeft,x.actualBoundingBoxAscent),text:x.text,Cha:x.Cha,key:x.key,cP:(y,z)=>{v={...v,position:r.TWa(y,x)};0!==z&&(v=szb([v],z)[0]);return __c.uv(v.position).transform(x.actualBoundingBoxLeft,x.actualBoundingBoxAscent)},olb:p[x.index],a7a:x.index}}),Gr:a,Ga:c,cA:u,direction:l,scale:n}};
XX=function({scale:a,labels:b,fontSize:c,Gr:d,direction:e}){if("linear"===a.kind){const f=a.va(),g=f.Tr();return{numeric:b.map(({text:h,key:k,Cha:l,cP:m,a7a:n})=>({text:h,value:g[n],fontSize:c,cP:m,textAnchor:"middle",dominantBaseline:"alphabetic",Gr:d,key:k,xd:h.length&&h!==l?l:void 0,axis:{scale:f,direction:e}})),Tu:[]}}return{numeric:[],Tu:b.map(({text:f,key:g,Cha:h,cP:k,olb:l})=>{const {x:m,y:n}=k(l,d);return{x:m,y:n,text:f,value:f,fontSize:c,textAnchor:"middle",dominantBaseline:"alphabetic",
Gr:d,key:g,xd:f.length&&f!==h?h:void 0,axis:{scale:a,direction:e}}})}};__c.VX=function(a,{width:b,height:c}){return 0===a.length?tA:a.map(d=>__c.gv(d)).reduce((d,e)=>({left:Math.max(d.left,0-e.tl.x),right:Math.max(d.right,e.br.x-b),bottom:Math.max(d.bottom,e.br.y-c),top:Math.max(d.top,0-e.tl.y)}),tA)};YX=function(a){return a.reduce((b,c)=>({top:Math.max(b.top,c.top),right:Math.max(b.right,c.right),bottom:Math.max(b.bottom,c.bottom),left:Math.max(b.left,c.left)}),tA)};
ZX=function({n3:a,uCa:b,QQ:c,L6:d,RQ:e,wD:f,P6:g,Q6:h}){d=uA([b,d]);const k=uA([c,e]);d={top:Math.max(a.top,c.top,e.top),right:(null===h||void 0===h?0:h.SD)?Math.max(k.right,d.right-a.right):Math.max(k.right,d.right,a.right),bottom:(null===f||void 0===f?0:f.SD)?Math.max(d.bottom,k.bottom-a.bottom):Math.max(d.bottom,k.bottom,a.bottom),left:(null===g||void 0===g?0:g.SD)?Math.max(k.left,d.left-a.left):Math.max(k.left,d.left,a.left)};h={top:0,right:(null===h||void 0===h?0:h.SD)?a.right:0,bottom:(null===
f||void 0===f?0:f.SD)?a.bottom:0,left:(null===g||void 0===g?0:g.SD)?a.left:0};return{Ga:uA([d,h]),bG:d,IN:h,QF:Math.max(c.top,e.top),HQ:(null===f||void 0===f?0:f.SD)?b.bottom+a.bottom:b.bottom,PQ:(null===g||void 0===g?0:g.SD)?c.left+a.left:c.left}};
Azb=function({Da:a,On:b,KL:c,width:d,height:e,color:f}){const g=__c.Et(__c.At(f),.6);f=__c.Et(__c.At(f),.25);let h=[],k=[],l=[],m=[],n=[],p=[];if(null===a||void 0===a?0:a.Ej)"linear"===a.scale.kind?h=$X({scale:a.scale,direction:a.direction,height:e,width:d,Yka:g,tN:f}):k=aY({scale:a.scale,direction:a.direction,height:e,width:d,tN:f});if(null===b||void 0===b?0:b.Ej)"linear"===b.scale.kind?l=$X({scale:b.scale,direction:b.direction,height:e,width:d,Yka:g,tN:f}):m=aY({scale:b.scale,direction:b.direction,
height:e,width:d,tN:f});if(null===c||void 0===c?0:c.Ej)"linear"===c.scale.kind?n=$X({scale:c.scale,direction:c.direction,height:e,width:d,Yka:g,tN:f}):p=aY({scale:c.scale,direction:c.direction,height:e,width:d,tN:f});return{WJ:h,QJ:k,XJ:l,RJ:m,YJ:n,SJ:p}};Bzb=function(a){return a.Tr().map(b=>[b,a.get(b)])};Czb=function(a){return a.Xb().map(b=>[b,a.get(b)])};
$X=function({scale:a,direction:b,height:c,width:d,Yka:e,tN:f}){const g=a.va();switch(b){case "horizontal":return Bzb(g).map(([h,k])=>({key:`${h}`,tra:0===h,start:new Ju(k,c),end:new Ju(k,0),value:h,axis:{scale:g,direction:b},color:0===h?e:f}));case "vertical":return Bzb(g).map(([h,k])=>({key:`${h}`,tra:0===h,start:new Ju(0,k),end:new Ju(d,k),value:h,axis:{scale:g,direction:b},color:0===h?e:f}));default:throw new F(b);}};
aY=function({direction:a,scale:b,height:c,width:d,tN:e}){switch(a){case "horizontal":return Czb(b).map(([f,g])=>({key:`${f}`,tra:!1,start:new Ju(g,c),end:new Ju(g,0),value:f,axis:{scale:b,direction:a},color:e}));case "vertical":return Czb(b).map(([f,g])=>({key:`${f}`,tra:!1,start:new Ju(0,g),end:new Ju(d,g),value:f,axis:{scale:b,direction:a},color:e}));default:throw new F(a);}};__c.bY=function({point:{x:a,y:b},bounds:{IL:c,KQ:d,Pn:e,Pm:f}}){return a>=c&&a<=d&&b>=e&&b<=f};
cY=function({d:a,diff:b}){var c,d;return(null!==(d=null===(c=MX(b.prev.values()))||void 0===c?void 0:c.axis.scale)&&void 0!==d?d:a.axis.scale).get(a.value)};dY=function({d:a,diff:b}){var c,d,e;return(null!==(e=null===(c=null!==(d=MX(b.enter.values()))&&void 0!==d?d:MX(b.update.values()))||void 0===c?void 0:c.axis.scale)&&void 0!==e?e:a.axis.scale).get(a.value)};
fY=function({j:a,Eu:b,Vx:c,X:d,Ia:e}){a=new QW({Lb:{enter:{Pl:{value:(g,h)=>"horizontal"===g.axis.direction?cY({d:g,diff:h}):g.start.x},Ql:{value:(g,h)=>"vertical"===g.axis.direction?cY({d:g,diff:h}):g.start.y},Uq:{value:(g,h)=>"horizontal"===g.axis.direction?cY({d:g,diff:h}):g.end.x},Vq:{value:(g,h)=>"vertical"===g.axis.direction?cY({d:g,diff:h}):g.end.y},cI:{value:g=>g.color.r},bI:{value:g=>g.color.g},Na:{value:g=>g.color.b},Ma:{value:()=>0}},update:{Pl:{value:g=>g.start.x},Ql:{value:g=>g.start.y},
Uq:{value:g=>g.end.x},Vq:{value:g=>g.end.y},cI:{value:g=>g.color.r},bI:{value:g=>g.color.g},Na:{value:g=>g.color.b},Ma:{value:g=>g.color.a}},exit:{Pl:{value:(g,h)=>"horizontal"===g.axis.direction?dY({d:g,diff:h}):g.start.x},Ql:{value:(g,h)=>"vertical"===g.axis.direction?dY({d:g,diff:h}):g.start.y},Uq:{value:(g,h)=>"horizontal"===g.axis.direction?dY({d:g,diff:h}):g.end.x},Vq:{value:(g,h)=>"vertical"===g.axis.direction?dY({d:g,diff:h}):g.end.y},cI:{value:g=>g.color.r},bI:{value:g=>g.color.g},Na:{value:g=>
g.color.b},Ma:{value:()=>0}},jf:{Pl:!0,Ql:!0,Uq:!0,Vq:!0,cI:!1,bI:!1,Na:!1,Ma:!1}},data:b,X:d,j:a,we:500,Ue:500,xe:500,getKey:g=>g.key,Oj:0,sm:0});const {Rb:f}=e(a);return function(){return eY(c,{children:eY(Dzb,{Rb:f})})}};
gY=function({j:a,Eu:b,X:c,Ia:d}){a=new QW({Lb:{enter:{Pl:{value:f=>f.start.x},Ql:{value:f=>f.start.y},Uq:{value:f=>f.end.x},Vq:{value:f=>f.end.y},cI:{value:f=>f.color.r},bI:{value:f=>f.color.g},Na:{value:f=>f.color.b},Ma:{value:()=>0}},update:{Pl:{value:f=>f.start.x},Ql:{value:f=>f.start.y},Uq:{value:f=>f.end.x},Vq:{value:f=>f.end.y},cI:{value:f=>f.color.r},bI:{value:f=>f.color.g},Na:{value:f=>f.color.b},Ma:{value:f=>f.color.a}},exit:{Pl:{value:f=>f.start.x},Ql:{value:f=>f.start.y},Uq:{value:f=>f.end.x},
Vq:{value:f=>f.end.y},cI:{value:f=>f.color.r},bI:{value:f=>f.color.g},Na:{value:f=>f.color.b},Ma:{value:()=>0}},jf:{Pl:!0,Ql:!0,Uq:!0,Vq:!0,cI:!1,bI:!1,Na:!1,Ma:!1}},data:b,X:c,j:a,we:500,Ue:500,xe:500,getKey:f=>f.key,Oj:0,sm:0});const {Rb:e}=d(a);return function(){return eY(Dzb,{Rb:e})}};Fzb=function(a,b,c){var d,e;c=c?null!==(e=null===(d=MX(b.prev.values()))||void 0===d?void 0:d.axis.scale)&&void 0!==e?e:a.axis.scale:a.axis.scale;return a.cP(c.get(a.value),Ezb(a,b))};
Hzb=function(a,b,c){var d,e,f;c=c?null!==(f=null===(d=null!==(e=MX(b.enter.values()))&&void 0!==e?e:MX(b.update.values()))||void 0===d?void 0:d.axis.scale)&&void 0!==f?f:a.axis.scale:a.axis.scale;return a.cP(c.get(a.value),Gzb(a,b))};Ezb=function(a,b){var c,d;return null!==(d=null===(c=MX(b.prev.values()))||void 0===c?void 0:c.Gr)&&void 0!==d?d:a.Gr};
Gzb=function(a,b){var c,d,e;return null!==(e=null===(c=null!==(d=MX(b.enter.values()))&&void 0!==d?d:MX(b.update.values()))||void 0===c?void 0:c.Gr)&&void 0!==e?e:a.Gr};
iY=function({j:a,It:b,Vx:c,Hm:d,Pk:e,labels:f,X:g,Ia:h}){a=new QW({Lb:{enter:{x:{value:(m,n)=>Fzb(m,n,"horizontal"===m.axis.direction).x},y:{value:(m,n)=>Fzb(m,n,"vertical"===m.axis.direction).y},rotation:{value:(m,n)=>Ezb(m,n)},fontSize:{value:m=>m.fontSize},opacity:{value:()=>0}},update:{x:{value:m=>m.cP(m.axis.scale.get(m.value),m.Gr).x},y:{value:m=>m.cP(m.axis.scale.get(m.value),m.Gr).y},rotation:{value:m=>m.Gr},fontSize:{value:m=>m.fontSize},opacity:{value:()=>1,end:0}},exit:{x:{value:(m,n)=>
Hzb(m,n,"horizontal"===m.axis.direction).x},y:{value:(m,n)=>Hzb(m,n,"vertical"===m.axis.direction).y},rotation:{value:(m,n)=>Gzb(m,n)},fontSize:{value:m=>m.fontSize},opacity:{value:()=>0}},jf:{x:!0,y:!0,rotation:!1,fontSize:!0,opacity:!1}},data:f,X:g,j:a,we:500,Ue:500,xe:500,getKey:m=>m.key,Oj:0,sm:0});const k=__c.PW(b,new Set(["transform","fontSize","opacity"])),{Rb:l}=h(a);return hY(function(){return eY(c,{children:eY(Izb,{Rb:l,Pv:k,Hm:d,Pk:e})})})};
jY=function({j:a,It:b,Hm:c,Pk:d,labels:e,X:f,Ia:g}){a=new QW({Lb:{enter:{x:{value:l=>l.x},y:{value:l=>l.y},rotation:{value:l=>l.Gr},fontSize:{value:l=>l.fontSize},opacity:{value:()=>0}},update:{x:{value:l=>l.x},y:{value:l=>l.y},rotation:{value:l=>l.Gr},fontSize:{value:l=>l.fontSize},opacity:{value:()=>1,end:0}},exit:{x:{value:l=>l.x,end:0},y:{value:l=>l.y,end:0},rotation:{value:l=>l.Gr,end:0},fontSize:{value:l=>l.fontSize,end:0},opacity:{value:()=>0,end:0}},jf:{x:!0,y:!0,rotation:!1,fontSize:!0,opacity:!1}},
data:e,X:f,j:a,we:500,Ue:500,xe:500,getKey:l=>l.key,Oj:0,sm:0});const h=__c.PW(b,new Set(["transform","fontSize","opacity"])),{Rb:k}=g(a);return hY(function(){return eY(Izb,{Rb:k,Pv:h,Hm:c,Pk:d})})};
Jzb=function({Da:a,P6:b,Q6:c,width:d,height:e,QQ:f,RQ:g,rN:h,Lp:k}){var l=uA([f,g]);const m=d-l.left-l.right;h=h(m,e);e=k(m,e,new Ju(0,0));({Ga:b}=ZX({n3:h,uCa:tA,QQ:f,RQ:g,L6:e,wD:null===a||void 0===a?void 0:a.wD,P6:b,Q6:c}));if(null!=a)if(e=a.vCa,f=a.wD.scale,0===e.length)var n=[b.left,d-b.right];else if(a=e[0],g=a.index,c=a.width/2,k=e[e.length-1],e=k.index,k=d-k.width/2,g===e){var p;[g]=null!==(p=f.p9({center:c,index:g},d-b.right,a.count))&&void 0!==p?p:[c,d-l.right];[,l]=null!==(n=f.q9({center:k,
index:e},b.left,a.count))&&void 0!==n?n:[b.left,k];n=[g,l]}else n=f.r9({center:c,index:g},{center:k,index:e},a.count);else n=[Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY];const [q,r]=n;return Math.min(r,d-b.right)-Math.max(q,b.left)};
Lzb=function({wD:a,Qsb:b,width:c,height:d,QQ:e,RQ:f,fontFamily:g,fontSize:h,fontWeight:k,rN:l,Lp:m,measureText:n}){e=uA([e,f]);f=c-e.left-e.right;l=l(f,d);m=m(f,d,new Ju(0,0));do{var p=Kzb({wD:a,vCa:b.measurements,width:c,Usb:e,n3:l,L6:m});({width:f}=p);const r=p.Xga;p=WX({config:a,JF:b,width:f,height:d,fontFamily:g,fontSize:h,fontWeight:k,rotate:!0,measureText:n});if(null==r)break;var q=p.cA;if(q=null!=r&&q.has(r))b.measurements=b.measurements.filter(t=>t.index!==r)}while(q);return{axis:p,width:f}};
Kzb=function({wD:a,vCa:b,Usb:c,n3:d,L6:e,width:f}){const g=YX([c,d,e]),h=a.scale,k=b[b.length-1];a=b.map(n=>{const p=n.index,q=Math.SQRT1_2*n.width,r=k.index,t=f-Math.SQRT1_2*k.height;if(p===r){var u;const [x]=null!==(u=h.p9({center:q,index:p},f-g.right,n.count))&&void 0!==u?u:[q,f-g.right];var v;[,n]=null!==(v=h.q9({center:t,index:r},g.left,n.count))&&void 0!==v?v:[g.left,t];return{range:[x,n],Xga:p}}return{range:h.r9({center:q,index:p},{center:t,index:r},n.count),Xga:p}});a=__c.ys(a,({range:n})=>
n[0]);const [l,m]=a.range;return{width:Math.min(m,f-g.right)-Math.max(l,g.left),Xga:l>g.left?a.Xga:void 0}};
__c.Mzb=function({j:a,X:b,Ia:c,Ga:d}){a=new QW({Lb:{enter:{top:{value:f=>f.top},right:{value:f=>f.right},bottom:{value:f=>f.bottom},left:{value:f=>f.left}},update:{top:{value:f=>f.top,Jb:!0},right:{value:f=>f.right,Jb:!0},bottom:{value:f=>f.bottom,Jb:!0},left:{value:f=>f.left,Jb:!0}},exit:{top:{value:f=>f.top},right:{value:f=>f.right},bottom:{value:f=>f.bottom},left:{value:f=>f.left}},jf:{top:!0,right:!0,bottom:!0,left:!0}},data:d,X:b,j:a,Oj:0,sm:0,we:500,Ue:500,xe:500,getKey:()=>"margin"});const {KA:e}=
c(a);return{LYa(){const f=e();return kY(()=>lY(()=>{const g=f.get().at(0);return g?{top:g.Tf.top.get(),right:g.Tf.right.get(),bottom:g.Tf.bottom.get(),left:g.Tf.left.get()}:tA}),[f])}}};Nzb=__webpack_require__(443763);eY=Nzb.jsx;mY=Nzb.jsxs;var hY=__webpack_require__(214645).Pi;var Ozb=__webpack_require__(875604),Pzb=Ozb.memo,kY=Ozb.useMemo;var nY=__webpack_require__(519427),Qzb=nY.action,lY=nY.computed,Rzb=nY.observable;var Szb=class{rLa(a,b,c,d,e,f,g){e=e(c,d);if(!b.Lr){var h=f(c,d,new Ju(0,0));c=g(c,d,new Ju(0,0));e=YX([e,h,c]);return{Ga:e,bG:e,IN:tA,QF:c.top,HQ:0,PQ:0,labels:{WJ:[],QJ:[],XJ:[],RJ:[],YJ:[],SJ:[]}}}var k={fontFamily:b.lf,fontSize:b.fontSize,fontWeight:b.fontWeight},l={...k,width:c,height:d};(b=a.Da)&&(h=WX({config:b,JF:UX({scale:b.scale,maxWidth:b.Qs||Infinity,...k,Un:this.Pa.Un}),...l,rotate:!0,measureText:this.Pa.measureText}));const m=a.On;let n;m&&(n=WX({config:m,JF:UX({scale:m.scale,maxWidth:m.Qs||
Infinity,...k,Un:this.Pa.Un}),...l,rotate:!1,measureText:this.Pa.measureText}));a=a.KL;let p;a&&(p=WX({config:a,JF:UX({scale:a.scale,maxWidth:a.Qs||Infinity,...k,Un:this.Pa.Un}),...l,rotate:!1,measureText:this.Pa.measureText}));k=(null===h||void 0===h?void 0:h.Ga)||tA;l=YX([null===n||void 0===n?void 0:n.Ga,null===p||void 0===p?void 0:p.Ga].filter(__c.yb));f=f(c,d,new Ju(0,k.bottom));c=g(c,d,new Ju(-l.left,0));const {Ga:q,bG:r,IN:t,QF:u,HQ:v,PQ:x}=ZX({n3:e,uCa:k,QQ:l,L6:f,RQ:c,wD:b,P6:m,Q6:a}),{numeric:y,
Tu:z}=null!=h?XX(h):{numeric:[],Tu:[]},{numeric:A,Tu:B}=null!=n?XX(n):{numeric:[],Tu:[]},{numeric:E,Tu:I}=null!=p?XX(p):{numeric:[],Tu:[]};return{Ga:q,bG:r,IN:t,QF:u,HQ:v,PQ:x,labels:{WJ:y,QJ:z,XJ:A,RJ:B,YJ:E,SJ:I}}}mLa(a,b,c,d){return b.Ej?Azb({Da:a.Da,On:a.On,KL:a.KL,width:c,height:d,color:b.Mk}):{WJ:[],QJ:[],XJ:[],RJ:[],YJ:[],SJ:[]}}constructor(a){this.Pa=a}};var Tzb=__c.PW("line",new Set(["x1","x2","y1","y2","stroke"])),Dzb=({Rb:a})=>eY(a,{children:({Tf:b,key:c})=>eY(Uzb,{...b},c)}),Uzb=Pzb(({cI:a,bI:b,Na:c,Ma:d,Pl:e,Ql:f,Uq:g,Vq:h})=>{const k=lY(()=>__c.Kt(new __c.It(a.get(),b.get(),c.get(),d.get())));return eY(Tzb,{x1:e,x2:g,y1:f,y2:h,stroke:k,strokeWidth:1})});var Izb=({Rb:a,Pv:b,Hm:c,Pk:d})=>eY(a,{children:({Tf:e,key:f,Gk:g})=>eY(Vzb,{Pv:b,Hm:c,Pk:d,label:g,...e},f)}),Vzb=Pzb(({label:{textAnchor:a,dominantBaseline:b,text:c,key:d,xd:e},Pv:f,Hm:g,Pk:h,x:k,y:l,rotation:m,fontSize:n,opacity:p})=>{const q=lY(()=>`translate(${k.get()}, ${l.get()}) rotate(${m.get()})`);return eY(f,{textAnchor:a,dominantBaseline:b,transform:q,fontSize:n,opacity:p,onMouseEnter:e&&g?r=>g(e,{mG:r.currentTarget.getBoundingClientRect(),key:d,Gr:m.get()}):void 0,onMouseLeave:e?h:void 0,
children:c},d)});var Wzb=class{rLa(a,b,c,d,e,f,g){if(!b.Lr){var h=g(c,d,new Ju(0,0));f=f(c-h.left,d,new Ju(0,0));d=e(c-h.left,d);d=YX([d,f,h]);return{Ga:d,bG:d,IN:tA,QF:d.top,HQ:0,PQ:0,labels:{WJ:[],QJ:[],XJ:[],RJ:[],YJ:[],SJ:[]}}}const k=b.lf,l=b.fontSize,m=b.fontWeight,n={fontFamily:k,fontSize:l,fontWeight:m};var p={...n,width:c,height:d};b=a.Da;let q;b&&(q=UX({scale:b.scale,maxWidth:Math.min(b.Qs||Infinity,c),...n,Un:this.Pa.Un}));const r=a.On;let t;r&&(t=UX({scale:r.scale,maxWidth:Math.min(r.Qs||Infinity,c),...n,
Un:this.Pa.Un}),h=WX({config:r,JF:t,...p,rotate:!1,measureText:this.Pa.measureText}));a=a.KL;let u,v;a&&(u=UX({scale:a.scale,maxWidth:Math.min(a.Qs||Infinity,c),...n,Un:this.Pa.Un}),v=WX({config:a,JF:u,...p,rotate:!1,measureText:this.Pa.measureText}));p=YX([null===h||void 0===h?void 0:h.Ga,null===v||void 0===v?void 0:v.Ga].filter(__c.yb));g=g(c,d,new Ju(-p.left,0));let x=Jzb({Da:null!=b&&null!=(null===q||void 0===q?void 0:q.measurements)?{wD:b,vCa:q.measurements}:void 0,P6:r,Q6:a,width:c,height:d,
QQ:p,RQ:g,rN:e,Lp:f}),y;b&&q&&(y=WX({config:b,JF:q,width:x,height:d,...n,rotate:!1,measureText:this.Pa.measureText}));null!=y&&0<y.cA.size&&b&&q&&({axis:y,width:x}=Lzb({wD:b,Qsb:q,width:c,height:d,QQ:p,RQ:g,rN:e,Lp:f,fontFamily:k,fontSize:l,fontWeight:m,measureText:this.Pa.measureText}));r&&t&&(h=WX({config:r,JF:t,width:x,height:d,fontFamily:k,fontSize:l,fontWeight:m,rotate:!1,measureText:this.Pa.measureText}));a&&u&&(v=WX({config:a,JF:u,width:x,height:d,fontFamily:k,fontSize:l,fontWeight:m,rotate:!1,
measureText:this.Pa.measureText}));c=e(x,d);p=YX([null===h||void 0===h?void 0:h.Ga,null===v||void 0===v?void 0:v.Ga].filter(__c.yb));e=(null===y||void 0===y?void 0:y.Ga)||tA;d=f(x,d,new Ju(0,e.bottom));const {Ga:z,bG:A,IN:B,QF:E,HQ:I,PQ:H}=ZX({n3:c,uCa:e,QQ:p,L6:d,RQ:g,wD:b,P6:r,Q6:a}),{numeric:J,Tu:M}=null!=y?XX(y):{numeric:[],Tu:[]},{numeric:P,Tu:T}=null!=h?XX(h):{numeric:[],Tu:[]},{numeric:V,Tu:ba}=null!=v?XX(v):{numeric:[],Tu:[]};return{Ga:z,bG:A,IN:B,QF:E,HQ:I,PQ:H,labels:{WJ:J,QJ:M,XJ:P,RJ:T,
YJ:V,SJ:ba}}}mLa(a,b,c,d){return b.Ej?Azb({Da:a.Da,On:a.On,KL:a.KL,width:c,height:d,color:b.Mk}):{WJ:[],QJ:[],XJ:[],RJ:[],YJ:[],SJ:[]}}constructor(a){this.Pa=a}};__c.oY=({j:a,OR:b,ij:c,qb:d,Pa:e,Wt:f,width:g,height:h,mc:k,Ia:l,rN:m=()=>tA,Lp:n=()=>tA,Du:p=()=>tA})=>{function q(){const Mb=Ya(),hc=kY(()=>lY(()=>{var Wb;return null===(Wb=Mb.get().at(0))||void 0===Wb?void 0:Wb.Tf}),[Mb]);return kY(()=>Rzb({get top(){var Wb,bc;return null!==(bc=null===(Wb=hc.get())||void 0===Wb?void 0:Wb.top.get())&&void 0!==bc?bc:0},get left(){var Wb,bc;return null!==(bc=null===(Wb=hc.get())||void 0===Wb?void 0:Wb.left.get())&&void 0!==bc?bc:0},get right(){var Wb,bc;return null!==
(bc=null===(Wb=hc.get())||void 0===Wb?void 0:Wb.right.get())&&void 0!==bc?bc:0},get bottom(){var Wb,bc;return null!==(bc=null===(Wb=hc.get())||void 0===Wb?void 0:Wb.bottom.get())&&void 0!==bc?bc:0}}),[hc])}const r=a.Gd?new Wzb(e):new Szb(e),t=lY(()=>r.rLa(b,a,g.get(),h.get(),m,n,p));e=lY(()=>t.get().labels.WJ);const u=lY(()=>t.get().labels.QJ),v=lY(()=>t.get().labels.XJ),x=lY(()=>t.get().labels.RJ),y=lY(()=>t.get().labels.YJ),z=lY(()=>t.get().labels.SJ),A=lY(()=>t.get().Ga),B=lY(()=>t.get().bG),E=
lY(()=>t.get().IN),I=lY(()=>t.get().QF),H=lY(()=>new Ju(0,t.get().HQ)),J=lY(()=>new Ju(-t.get().PQ,0)),{LYa:M}=__c.Mzb({j:a,X:k,Ia:l,Ga:lY(()=>[E.get()])}),P=lY(()=>{const {left:Mb,right:hc}=A.get();return a.Gd?g.get()-Mb-hc:g.get()}),T=lY(()=>{const {top:Mb,bottom:hc}=A.get();return a.zga?h.get()-Mb-hc:h.get()}),V=lY(()=>r.mLa(b,a,P.get(),T.get())),ba=lY(()=>V.get().WJ),la=lY(()=>V.get().QJ),ma=lY(()=>V.get().XJ),qa=lY(()=>V.get().RJ),ja=lY(()=>V.get().YJ),ta=lY(()=>V.get().SJ),W=c?new __c.RW:void 0,
aa=c&&W?Qzb((Mb,{mG:hc,key:Wb,Gr:bc})=>{const ec=a.sN();if(null!=ec){var dd=a.zoom,yf=hc.width/dd,Ld=hc.height/dd,Ub=hc.left/dd-ec.left;hc=hc.top/dd-ec.top;__c.FW(W,c,{content:Mb,vv:0===bc?{top:hc,left:Ub,width:yf,height:Ld}:{top:hc+Ld/2,left:Ub+yf/2,width:0,height:0},placement:"top-center",arrow:!0,key:Wb})}}):void 0,sa=c&&W?Qzb(()=>{__c.GW(W,c)}):void 0;var Fa=lY(()=>[A.get()]);Fa=new QW({Lb:{enter:{top:{value:Mb=>Mb.top},left:{value:Mb=>Mb.left},right:{value:Mb=>Mb.right},bottom:{value:Mb=>Mb.bottom}},
update:{top:{value:(Mb,hc)=>{var Wb,bc;return Math.max(Mb.top,null!==(bc=null===(Wb=MX(hc.prev.values()))||void 0===Wb?void 0:Wb.top)&&void 0!==bc?bc:0)}},left:{value:(Mb,hc)=>{var Wb,bc;return Math.max(Mb.left,null!==(bc=null===(Wb=MX(hc.prev.values()))||void 0===Wb?void 0:Wb.left)&&void 0!==bc?bc:0)}},right:{value:(Mb,hc)=>{var Wb,bc;return Math.max(Mb.right,null!==(bc=null===(Wb=MX(hc.prev.values()))||void 0===Wb?void 0:Wb.right)&&void 0!==bc?bc:0)}},bottom:{value:(Mb,hc)=>{var Wb,bc;return Math.max(Mb.bottom,
null!==(bc=null===(Wb=MX(hc.prev.values()))||void 0===Wb?void 0:Wb.bottom)&&void 0!==bc?bc:0)}}},exit:{top:{value:Mb=>Mb.top},left:{value:Mb=>Mb.left},right:{value:Mb=>Mb.right},bottom:{value:Mb=>Mb.bottom}},jf:{top:!0,left:!0,right:!0,bottom:!0}},data:Fa,X:k,j:a,we:0,Ue:0,xe:0,getKey:()=>"margins",Oj:0,sm:0});const {KA:Ya}=l(Fa);Fa=hY(function({children:Mb}){const hc=q(),Wb=kY(()=>__c.RX(function(){const bc=a.Ec;return{width:hc.left+a.Bq+hc.right,height:bc.top+a.vl+bc.bottom,left:-hc.left,top:-bc.top}}),
[hc]);return eY(Wb,{children:Mb})});const bb=hY(function({children:Mb}){const hc=q(),Wb=kY(()=>__c.RX(function(){const bc=a.Ec;return{width:bc.left+a.Bq+bc.right,height:hc.top+a.vl+hc.bottom,left:-bc.left,top:-hc.top}}),[hc]);return eY(Wb,{children:Mb})});k={j:a,X:k,Ia:l};d={...k,It:d,Hm:aa,Pk:sa};const zb=iY({...d,Vx:bb,labels:e}),fb=jY({...d,labels:u}),Ua=iY({...d,Vx:Fa,labels:v}),Pa=jY({...d,labels:x}),wb=iY({...d,Vx:Fa,labels:y}),Eb=jY({...d,labels:z}),Rb=fY({...k,Eu:ba,Vx:bb}),gb=gY({...k,Eu:la}),
lb=fY({...k,Eu:ma,Vx:Fa}),xb=gY({...k,Eu:qa}),Tc=fY({...k,Eu:ja,Vx:Fa}),Je=gY({...k,Eu:ta});return{OH:A,bG:B,Orb:M,QF:I,M6:H,tX:J,FX:__c.RX(()=>f.get()),UQ:hY(function(){const Mb=M(),hc=kY(()=>__c.SW(function(){return{top:0,left:Mb.get().left}}),[Mb]);return mY(hc,{children:[eY(Rb,{}),eY(gb,{}),eY(lb,{}),eY(xb,{}),eY(Tc,{}),eY(Je,{})]})}),VQ:hY(function(){const Mb=M(),hc=kY(()=>__c.SW(function(){return{top:Mb.get().bottom,left:Mb.get().left}}),[Mb]),Wb=kY(()=>__c.SW(function(){return{top:0,left:Mb.get().left+
Mb.get().right}}),[Mb]);return mY("g",{children:[mY(hc,{children:[eY(zb,{}),eY(fb,{})]}),eY(Ua,{}),eY(Pa,{}),mY(Wb,{children:[eY(wb,{}),eY(Eb,{})]})]})}),Kh:P,Fg:T}};
}).call(self, self._7ccc7343da2ae983607b3819c7bc1f93);}

}])