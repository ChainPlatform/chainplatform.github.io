(self.webpackChunk_canva_web=self.webpackChunk_canva_web||[]).push([[81615],{572628:(t,e,o)=>{"use strict";function l(t,e,o,l=(t=>t)){return t*l(.5-e*(.5-o))}function r(t,e){return[t[0]+e[0],t[1]+e[1]]}function n(t,e){return[t[0]-e[0],t[1]-e[1]]}function i(t,e){return[t[0]*e,t[1]*e]}function s(t){return[t[1],-t[0]]}function c(t,e){return t[0]*e[0]+t[1]*e[1]}function f(t,e){return t[0]===e[0]&&t[1]===e[1]}function u(t,e){return function(t){return t[0]*t[0]+t[1]*t[1]}(n(t,e))}function a(t){return function(t,e){return[t[0]/e,t[1]/e]}(t,function(t){return Math.hypot(t[0],t[1])}(t))}function p(t,e){return Math.hypot(t[1]-e[1],t[0]-e[0])}function h(t,e,o){let l=Math.sin(o),r=Math.cos(o),n=t[0]-e[0],i=t[1]-e[1],s=n*l+i*r;return[n*r-i*l+e[0],s+e[1]]}function v(t,e,o){return r(t,i(n(e,t),o))}function d(t,e,o){return r(t,i(e,o))}o.d(e,{mx:()=>w});var{min:g,PI:y}=Math,m=.275,b=y+1e-4;function w(t,e={}){return function(t,e={}){let{size:o=16,smoothing:f=.5,thinning:p=.5,simulatePressure:y=!0,easing:w=(t=>t),start:T={},end:M={},last:X=!1}=e,{cap:Y=!0,easing:L=(t=>t*(2-t))}=T,{cap:x=!0,easing:B=(t=>--t*t*t+1)}=M;if(0===t.length||o<=0)return[];let S,O=t[t.length-1].runningLength,E=!1===T.taper?0:!0===T.taper?Math.max(o,O):T.taper,_=!1===M.taper?0:!0===M.taper?Math.max(o,O):M.taper,I=Math.pow(o*f,2),j=[],C=[],V=t.slice(0,10).reduce(((t,e)=>{let l=e.pressure;if(y){let r=g(1,e.distance/o),n=g(1,1-r);l=g(1,t+r*m*(n-t))}return(t+l)/2}),t[0].pressure),k=l(o,p,t[t.length-1].pressure,w),A=t[0].vector,P=t[0].point,H=P,R=P,z=H,W=!1;for(let a=0;a<t.length;a++){let{pressure:e}=t[a],{point:f,vector:d,distance:T,runningLength:M}=t[a];if(a<t.length-1&&O-M<3)continue;if(p){if(y){let t=g(1,T/o),l=g(1,1-t);e=g(1,V+t*m*(l-V))}k=l(o,p,e,w)}else k=o/2;void 0===S&&(S=k);let X=M<E?L(M/E):1,Y=O-M<_?B((O-M)/_):1;k=Math.max(.01,k*Math.min(X,Y));let x=(a<t.length-1?t[a+1]:t[a]).vector,q=a<t.length-1?c(d,x):1,D=null!==q&&q<0;if(c(d,A)<0&&!W||D){let t=i(s(A),k);for(let e=1/13,o=0;o<=1;o+=e)R=h(n(f,t),f,b*o),j.push(R),z=h(r(f,t),f,b*-o),C.push(z);P=R,H=z,D&&(W=!0);continue}if(W=!1,a===t.length-1){let t=i(s(d),k);j.push(n(f,t)),C.push(r(f,t));continue}let F=i(s(v(x,d,q)),k);R=n(f,F),(a<=1||u(P,R)>I)&&(j.push(R),P=R),z=r(f,F),(a<=1||u(H,z)>I)&&(C.push(z),H=z),V=e,A=d}let q=t[0].point.slice(0,2),D=t.length>1?t[t.length-1].point.slice(0,2):r(t[0].point,[1,1]),F=[],N=[];if(1===t.length){if(!E&&!_||X){let t=d(q,a(s(n(q,D))),-(S||k)),e=[];for(let o=1/13,l=o;l<=1;l+=o)e.push(h(t,q,2*b*l));return e}}else{if(!(E||_&&1===t.length))if(Y)for(let t=1/13,o=t;o<=1;o+=t){let t=h(C[0],q,b*o);F.push(t)}else{let t=n(j[0],C[0]),e=i(t,.5),o=i(t,.51);F.push(n(q,e),n(q,o),r(q,o),r(q,e))}let e=s(function(t){return[-t[0],-t[1]]}(t[t.length-1].vector));if(_||E&&1===t.length)N.push(D);else if(x){let t=d(D,e,k);for(let e=1/29,o=e;o<1;o+=e)N.push(h(t,D,3*b*o))}else N.push(r(D,i(e,k)),r(D,i(e,.99*k)),n(D,i(e,.99*k)),n(D,i(e,k)))}return j.concat(N,C.reverse(),F)}(function(t,e={}){var o;let{streamline:l=.5,size:i=16,last:s=!1}=e;if(0===t.length)return[];let c=.15+.85*(1-l),u=Array.isArray(t[0])?t:t.map((({x:t,y:e,pressure:o=.5})=>[t,e,o]));if(2===u.length){let t=u[1];u=u.slice(0,-1);for(let e=1;e<5;e++)u.push(v(u[0],t,e/4))}1===u.length&&(u=[...u,[...r(u[0],[1,1]),...u[0].slice(2)]]);let h=[{point:[u[0][0],u[0][1]],pressure:u[0][2]>=0?u[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],d=!1,g=0,y=h[0],m=u.length-1;for(let r=1;r<u.length;r++){let t=s&&r===m?u[r].slice(0,2):v(y.point,u[r],c);if(f(y.point,t))continue;let e=p(t,y.point);if(g+=e,r<m&&!d){if(g<i)continue;d=!0}y={point:t,pressure:u[r][2]>=0?u[r][2]:.5,vector:a(n(y.point,t)),distance:e,runningLength:g},h.push(y)}return h[0].vector=(null==(o=h[1])?void 0:o.vector)||[0,0],h}(t,e),e)}},112581:t=>{!function(){"use strict";t.exports={polyfill:function(){var t=window,e=document;if(!("scrollBehavior"in e.documentElement.style)||!0===t.__forceSmoothScrollPolyfill__){var o,l=t.HTMLElement||t.Element,r=468,n={scroll:t.scroll||t.scrollTo,scrollBy:t.scrollBy,elementScroll:l.prototype.scroll||c,scrollIntoView:l.prototype.scrollIntoView},i=t.performance&&t.performance.now?t.performance.now.bind(t.performance):Date.now,s=(o=t.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(o)?1:0);t.scroll=t.scrollTo=function(){void 0!==arguments[0]&&(!0!==f(arguments[0])?v.call(t,e.body,void 0!==arguments[0].left?~~arguments[0].left:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:t.scrollY||t.pageYOffset):n.scroll.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:t.scrollY||t.pageYOffset))},t.scrollBy=function(){void 0!==arguments[0]&&(f(arguments[0])?n.scrollBy.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):v.call(t,e.body,~~arguments[0].left+(t.scrollX||t.pageXOffset),~~arguments[0].top+(t.scrollY||t.pageYOffset)))},l.prototype.scroll=l.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==f(arguments[0])){var t=arguments[0].left,e=arguments[0].top;v.call(this,this,void 0===t?this.scrollLeft:~~t,void 0===e?this.scrollTop:~~e)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");n.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},l.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==f(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):n.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},l.prototype.scrollIntoView=function(){if(!0!==f(arguments[0])){var o=function(t){for(;t!==e.body&&!1===p(t);)t=t.parentNode||t.host;return t}(this),l=o.getBoundingClientRect(),r=this.getBoundingClientRect();o!==e.body?(v.call(this,o,o.scrollLeft+r.left-l.left,o.scrollTop+r.top-l.top),"fixed"!==t.getComputedStyle(o).position&&t.scrollBy({left:l.left,top:l.top,behavior:"smooth"})):t.scrollBy({left:r.left,top:r.top,behavior:"smooth"})}else n.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function c(t,e){this.scrollLeft=t,this.scrollTop=e}function f(t){if(null===t||"object"!=typeof t||void 0===t.behavior||"auto"===t.behavior||"instant"===t.behavior)return!0;if("object"==typeof t&&"smooth"===t.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+t.behavior+" is not a valid value for enumeration ScrollBehavior.")}function u(t,e){return"Y"===e?t.clientHeight+s<t.scrollHeight:"X"===e?t.clientWidth+s<t.scrollWidth:void 0}function a(e,o){var l=t.getComputedStyle(e,null)["overflow"+o];return"auto"===l||"scroll"===l}function p(t){var e=u(t,"Y")&&a(t,"Y"),o=u(t,"X")&&a(t,"X");return e||o}function h(e){var o,l,n,s,c=(i()-e.startTime)/r;s=c=c>1?1:c,o=.5*(1-Math.cos(Math.PI*s)),l=e.startX+(e.x-e.startX)*o,n=e.startY+(e.y-e.startY)*o,e.method.call(e.scrollable,l,n),l===e.x&&n===e.y||t.requestAnimationFrame(h.bind(t,e))}function v(o,l,r){var s,f,u,a,p=i();o===e.body?(s=t,f=t.scrollX||t.pageXOffset,u=t.scrollY||t.pageYOffset,a=n.scroll):(s=o,f=o.scrollLeft,u=o.scrollTop,a=c),h({scrollable:s,method:a,startTime:p,startX:f,startY:u,x:l,y:r})}}}}()}}]);