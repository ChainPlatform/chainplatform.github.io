"use strict";(self.webpackChunk_canva_web=self.webpackChunk_canva_web||[]).push([[77330],{277204:(n,t,e)=>{function r(n,t,e,r,u){var a,i,o=n.children,d=o.length,f=new Array(d+1);for(f[0]=i=a=0;a<d;++a)f[a+1]=i+=o[a].value;!function n(t,e,r,u,a,i,d){if(t>=e-1){var c=o[t];return c.x0=u,c.y0=a,c.x1=i,void(c.y1=d)}var h=f[t],l=r/2+h,g=t+1,p=e-1;for(;g<p;){var v=g+p>>>1;f[v]<l?g=v+1:p=v}l-f[g-1]<f[g]-l&&t+1<g&&--g;var y=f[g]-h,x=r-y;if(i-u>d-a){var Z=r?(u*x+i*y)/r:i;n(t,g,y,u,a,Z,d),n(g,e,x,Z,a,i,d)}else{var s=r?(a*x+d*y)/r:d;n(t,g,y,u,a,i,s),n(g,e,x,u,s,i,d)}}(0,d,n.value,t,e,r,u)}e.d(t,{Z:()=>r})},324991:(n,t,e)=>{function r(n,t,e,r,u){for(var a,i=n.children,o=-1,d=i.length,f=n.value&&(r-t)/n.value;++o<d;)(a=i[o]).y0=e,a.y1=u,a.x0=t,a.x1=t+=a.value*f}e.d(t,{Z:()=>r})},401261:(n,t,e)=>{e.d(t,{Z:()=>o});var r=e(94622),u=e(921591),a=e(40705),i=e(626438);function o(){var n=u.ZP,t=!1,e=1,o=1,d=[0],f=i.G,c=i.G,h=i.G,l=i.G,g=i.G;function p(n){return n.x0=n.y0=0,n.x1=e,n.y1=o,n.eachBefore(v),d=[0],t&&n.eachBefore(r.Z),n}function v(t){var e=d[t.depth],r=t.x0+e,u=t.y0+e,a=t.x1-e,i=t.y1-e;a<r&&(r=a=(r+a)/2),i<u&&(u=i=(u+i)/2),t.x0=r,t.y0=u,t.x1=a,t.y1=i,t.children&&(e=d[t.depth+1]=f(t)/2,r+=g(t)-e,u+=c(t)-e,(a-=h(t)-e)<r&&(r=a=(r+a)/2),(i-=l(t)-e)<u&&(u=i=(u+i)/2),n(t,r,u,a,i))}return p.round=function(n){return arguments.length?(t=!!n,p):t},p.size=function(n){return arguments.length?(e=+n[0],o=+n[1],p):[e,o]},p.tile=function(t){return arguments.length?(n=(0,a.C)(t),p):n},p.padding=function(n){return arguments.length?p.paddingInner(n).paddingOuter(n):p.paddingInner()},p.paddingInner=function(n){return arguments.length?(f="function"==typeof n?n:(0,i.Z)(+n),p):f},p.paddingOuter=function(n){return arguments.length?p.paddingTop(n).paddingRight(n).paddingBottom(n).paddingLeft(n):p.paddingTop()},p.paddingTop=function(n){return arguments.length?(c="function"==typeof n?n:(0,i.Z)(+n),p):c},p.paddingRight=function(n){return arguments.length?(h="function"==typeof n?n:(0,i.Z)(+n),p):h},p.paddingBottom=function(n){return arguments.length?(l="function"==typeof n?n:(0,i.Z)(+n),p):l},p.paddingLeft=function(n){return arguments.length?(g="function"==typeof n?n:(0,i.Z)(+n),p):g},p}},94622:(n,t,e)=>{function r(n){n.x0=Math.round(n.x0),n.y0=Math.round(n.y0),n.x1=Math.round(n.x1),n.y1=Math.round(n.y1)}e.d(t,{Z:()=>r})},35223:(n,t,e)=>{function r(n,t,e,r,u){for(var a,i=n.children,o=-1,d=i.length,f=n.value&&(u-e)/n.value;++o<d;)(a=i[o]).x0=t,a.x1=r,a.y0=e,a.y1=e+=a.value*f}e.d(t,{Z:()=>r})},921591:(n,t,e)=>{e.d(t,{ZP:()=>a});var r=e(324991),u=e(35223);const a=function n(t){function e(n,e,a,i,o){!function(n,t,e,a,i,o){for(var d,f,c,h,l,g,p,v,y,x,Z,s=[],M=t.children,w=0,b=0,k=M.length,m=t.value;w<k;){c=i-e,h=o-a;do{l=M[b++].value}while(!l&&b<k);for(g=p=l,Z=l*l*(x=Math.max(h/c,c/h)/(m*n)),y=Math.max(p/Z,Z/g);b<k;++b){if(l+=f=M[b].value,f<g&&(g=f),f>p&&(p=f),Z=l*l*x,(v=Math.max(p/Z,Z/g))>y){l-=f;break}y=v}s.push(d={value:l,dice:c<h,children:M.slice(w,b)}),d.dice?(0,r.Z)(d,e,a,i,m?a+=h*l/m:o):(0,u.Z)(d,e,a,m?e+=c*l/m:i,o),m-=l,w=b}}(t,n,e,a,i,o)}return e.ratio=function(t){return n((t=+t)>1?t:1)},e}((1+Math.sqrt(5))/2)}}]);
//# sourceMappingURL=sourcemaps/f65aa83e7adbd161.vendor.js.map