/*! For license information please see 5f688bae1acff436.vendor.js.LICENSE.txt */
(self.webpackChunk_canva_web=self.webpackChunk_canva_web||[]).push([[28595],{448528:function(t){t.exports=function(){"use strict";function t(t,n){var r,e,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(t){return function(n){return l([t,n])}}function l(o){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,e&&(i=2&o[0]?e.return:o[0]?e.throw||((i=e.return)&&i.call(e),0):e.next)&&!(i=i.call(e,o[1])).done)return i;switch(e=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,e=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!((i=(i=s.trys).length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=n.call(t,s)}catch(u){o=[6,u],e=0}finally{r=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}}var n=function(){function t(t,n){this.next=null,this.key=t,this.data=n,this.left=null,this.right=null}return t}();function r(t,n){return t>n?1:t<n?-1:0}function e(t,r,e){for(var i=new n(null,null),o=i,s=i;;){var u=e(t,r.key);if(u<0){if(null===r.left)break;if(e(t,r.left.key)<0){var l=r.left;if(r.left=l.right,l.right=r,null===(r=l).left)break}s.left=r,s=r,r=r.left}else{if(!(u>0))break;if(null===r.right)break;if(e(t,r.right.key)>0&&(l=r.right,r.right=l.left,l.left=r,null===(r=l).right))break;o.right=r,o=r,r=r.right}}return o.right=r.left,s.left=r.right,r.left=i.right,r.right=i.left,r}function i(t,r,i,o){var s=new n(t,r);if(null===i)return s.left=s.right=null,s;var u=o(t,(i=e(t,i,o)).key);return u<0?(s.left=i.left,s.right=i,i.left=null):u>=0&&(s.right=i.right,s.left=i,i.right=null),s}function o(t,n,r){var i=null,o=null;if(n){var s=r((n=e(t,n,r)).key,t);0===s?(i=n.left,o=n.right):s<0?(o=n.right,n.right=null,i=n):(i=n.left,n.left=null,o=n)}return{left:i,right:o}}function s(t,n,r){return null===n?t:(null===t||((n=e(t.key,n,r)).left=t),n)}function u(t,n,r,e,i){if(t){e(n+(r?"└── ":"├── ")+i(t)+"\n");var o=n+(r?"    ":"│   ");t.left&&u(t.left,o,!1,e,i),t.right&&u(t.right,o,!0,e,i)}}function l(t,r,e,i){var o=i-e;if(o>0){var s=e+Math.floor(o/2),u=t[s],h=r[s],f=new n(u,h);return f.left=l(t,r,e,s),f.right=l(t,r,s+1,i),f}return null}function h(t,r){for(var e=new n(null,null),i=e,o=0;o<t.length;o++)i=i.next=new n(t[o],r[o]);return i.next=null,e.next}function f(t){for(var r=t,e=[],i=!1,o=new n(null,null),s=o;!i;)r?(e.push(r),r=r.left):e.length>0?r=(r=s=s.next=e.pop()).right:i=!0;return s.next=null,o.next}function a(t,n,r){var e=r-n;if(e>0){var i=n+Math.floor(e/2),o=a(t,n,i),s=t.head;return s.left=o,t.head=t.head.next,s.right=a(t,i+1,r),s}return null}function p(t,r,e){for(var i=new n(null,null),o=i,s=t,u=r;null!==s&&null!==u;)e(s.key,u.key)<0?(o.next=s,s=s.next):(o.next=u,u=u.next),o=o.next;return null!==s?o.next=s:null!==u&&(o.next=u),i.next}function c(t,n,r,e,i){if(!(r>=e)){for(var o=t[r+e>>1],s=r-1,u=e+1;;){do{s++}while(i(t[s],o)<0);do{u--}while(i(t[u],o)>0);if(s>=u)break;var l=t[s];t[s]=t[u],t[u]=l,l=n[s],n[s]=n[u],n[u]=l}c(t,n,r,u,i),c(t,n,u+1,e,i)}}return function(){function g(t){void 0===t&&(t=r),this._root=null,this._size=0,this._comparator=t}return g.prototype.insert=function(t,n){return this._size++,this._root=i(t,n,this._root,this._comparator)},g.prototype.add=function(t,r){var i=new n(t,r);null===this._root&&(i.left=i.right=null,this._size++,this._root=i);var o=this._comparator,s=e(t,this._root,o),u=o(t,s.key);return 0===u?this._root=s:(u<0?(i.left=s.left,i.right=s,s.left=null):u>0&&(i.right=s.right,i.left=s,s.right=null),this._size++,this._root=i),this._root},g.prototype.remove=function(t){this._root=this._remove(t,this._root,this._comparator)},g.prototype._remove=function(t,n,r){var i;return null===n?null:0===r(t,(n=e(t,n,r)).key)?(null===n.left?i=n.right:(i=e(t,n.left,r)).right=n.right,this._size--,i):n},g.prototype.pop=function(){var t=this._root;if(t){for(;t.left;)t=t.left;return this._root=e(t.key,this._root,this._comparator),this._root=this._remove(t.key,this._root,this._comparator),{key:t.key,data:t.data}}return null},g.prototype.findStatic=function(t){for(var n=this._root,r=this._comparator;n;){var e=r(t,n.key);if(0===e)return n;n=e<0?n.left:n.right}return null},g.prototype.find=function(t){return this._root&&(this._root=e(t,this._root,this._comparator),0!==this._comparator(t,this._root.key))?null:this._root},g.prototype.contains=function(t){for(var n=this._root,r=this._comparator;n;){var e=r(t,n.key);if(0===e)return!0;n=e<0?n.left:n.right}return!1},g.prototype.forEach=function(t,n){for(var r=this._root,e=[],i=!1;!i;)null!==r?(e.push(r),r=r.left):0!==e.length?(r=e.pop(),t.call(n,r),r=r.right):i=!0;return this},g.prototype.range=function(t,n,r,e){for(var i=[],o=this._comparator,s=this._root;0!==i.length||s;)if(s)i.push(s),s=s.left;else{if(o((s=i.pop()).key,n)>0)break;if(o(s.key,t)>=0&&r.call(e,s))return this;s=s.right}return this},g.prototype.keys=function(){var t=[];return this.forEach((function(n){var r=n.key;return t.push(r)})),t},g.prototype.values=function(){var t=[];return this.forEach((function(n){var r=n.data;return t.push(r)})),t},g.prototype.min=function(){return this._root?this.minNode(this._root).key:null},g.prototype.max=function(){return this._root?this.maxNode(this._root).key:null},g.prototype.minNode=function(t){if(void 0===t&&(t=this._root),t)for(;t.left;)t=t.left;return t},g.prototype.maxNode=function(t){if(void 0===t&&(t=this._root),t)for(;t.right;)t=t.right;return t},g.prototype.at=function(t){for(var n=this._root,r=!1,e=0,i=[];!r;)if(n)i.push(n),n=n.left;else if(i.length>0){if(n=i.pop(),e===t)return n;e++,n=n.right}else r=!0;return null},g.prototype.next=function(t){var n=this._root,r=null;if(t.right){for(r=t.right;r.left;)r=r.left;return r}for(var e=this._comparator;n;){var i=e(t.key,n.key);if(0===i)break;i<0?(r=n,n=n.left):n=n.right}return r},g.prototype.prev=function(t){var n=this._root,r=null;if(null!==t.left){for(r=t.left;r.right;)r=r.right;return r}for(var e=this._comparator;n;){var i=e(t.key,n.key);if(0===i)break;i<0?n=n.left:(r=n,n=n.right)}return r},g.prototype.clear=function(){return this._root=null,this._size=0,this},g.prototype.toList=function(){return f(this._root)},g.prototype.load=function(t,n,r){void 0===n&&(n=[]),void 0===r&&(r=!1);var e=t.length,i=this._comparator;if(r&&c(t,n,0,e-1,i),null===this._root)this._root=l(t,n,0,e),this._size=e;else{var o=p(this.toList(),h(t,n),i);e=this._size+e,this._root=a({head:o},0,e)}return this},g.prototype.isEmpty=function(){return null===this._root},Object.defineProperty(g.prototype,"size",{get:function(){return this._size},enumerable:!0,configurable:!0}),Object.defineProperty(g.prototype,"root",{get:function(){return this._root},enumerable:!0,configurable:!0}),g.prototype.toString=function(t){void 0===t&&(t=function(t){return String(t.key)});var n=[];return u(this._root,"",!0,(function(t){return n.push(t)}),t),n.join("")},g.prototype.update=function(t,n,r){var e=this._comparator,u=o(t,this._root,e),l=u.left,h=u.right;e(t,n)<0?h=i(n,r,h,e):l=i(n,r,l,e),this._root=s(l,h,e)},g.prototype.split=function(t){return o(t,this._root,this._comparator)},g.prototype[Symbol.iterator]=function(){var n,r,e;return t(this,(function(t){switch(t.label){case 0:n=this._root,r=[],e=!1,t.label=1;case 1:return e?[3,6]:null===n?[3,2]:(r.push(n),n=n.left,[3,5]);case 2:return 0===r.length?[3,4]:[4,n=r.pop()];case 3:return t.sent(),n=n.right,[3,5];case 4:e=!0,t.label=5;case 5:return[3,1];case 6:return[2]}}))},g}()}()},627433:(t,n,r)=>{"use strict";r.d(n,{PolygonClipping:()=>C});var e=r(448528),i={d:(t,n)=>{for(var r in n)i.o(n,r)&&!i.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(t,n)=>Object.prototype.hasOwnProperty.call(t,n)},o={};i.d(o,{o:()=>A});const s=(t=>{var n={};return i.d(n,t),n})({default:()=>e});var u=function(t,n){return t.ll.x<=n.x&&n.x<=t.ur.x&&t.ll.y<=n.y&&n.y<=t.ur.y},l=function(t,n){if(n.ur.x<t.ll.x||t.ur.x<n.ll.x||n.ur.y<t.ll.y||t.ur.y<n.ll.y)return null;var r=t.ll.x<n.ll.x?n.ll.x:t.ll.x,e=t.ur.x<n.ur.x?t.ur.x:n.ur.x;return{ll:{x:r,y:t.ll.y<n.ll.y?n.ll.y:t.ll.y},ur:{x:e,y:t.ur.y<n.ur.y?t.ur.y:n.ur.y}}},h=function(){function t(t,n){this.x=t,this.y=n}return t.of=function(n){return new t(n.x,n.y)},t.prototype.toString=function(){return"(".concat(this.x,",").concat(this.y,")")},t}(),f=function(t,n,r){if(void 0===r&&(r=Number.EPSILON),a(t)&&a(n))return 0;var e=t-n;return e*e<Math.pow(r,2)*t*n?0:t<n?-1:1};function a(t,n){return void 0===n&&(n=Number.EPSILON),Math.abs(t)<n}var p=function(){function t(){this.xRounder=new c,this.yRounder=new c}return t.prototype.reset=function(){this.xRounder=new c,this.yRounder=new c},t.prototype.round=function(t,n){return h.of({x:this.xRounder.round(t),y:this.yRounder.round(n)})},t}(),c=function(){function t(){this.tree=new s.default,this.round(0)}return t.prototype.round=function(t){var n=this.tree.add(t),r=this.tree.prev(n);if(null!=r&&0===f(n.key,r.key))return this.tree.remove(t),r.key;var e=this.tree.next(n);return null!=e&&0===f(n.key,e.key)?(this.tree.remove(t),e.key):t},t}(),g=new p,v=Math.PI,y=2*v,x=function(){function t(){}return t.subtract=function(t,n){return new h(t.x-n.x,t.y-n.y)},t.innerProduct=function(t,n){return t.x*n.x+t.y*n.y},t.crossProduct=function(t,n){return t.x*n.y-t.y*n.x},t.magnitude=function(t){return Math.sqrt(t.x*t.x+t.y*t.y)},t.angleBetween=function(t,n,r){var e=Math.atan2(n.y-t.y,n.x-t.x),i=Math.atan2(r.y-t.y,r.x-t.x)-e;return i>=v?i-y:i<-v?i+y:i},t}();function d(t,n){return void 0===n&&(n=1e-10),Math.abs(t)<n?0*Math.sign(t):t}var m,b=function(){function t(){}return t.perpendicular=function(t){return{x:-t.y,y:t.x}},t.compareAngles=function(t,n,r){var e={x:n.x-t.x,y:n.y-t.y},i={x:r.x-t.x,y:r.y-t.y};return f(x.crossProduct(e,i),0)},t}(),E=function(t,n,r){return 0===n.y?null:{x:t.x+n.x/n.y*(r-t.y),y:r}},S=function(t,n,r){return 0===n.x?null:{x:r,y:t.y+n.y/n.x*(r-t.x)}},w=(m=function(t,n){return m=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])},m(t,n)},function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=t}m(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}),_=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return w(n,t),n.of=function(t){return new n(t.x,t.y)},n}(h),R=function(){function t(t,n){void 0===n&&(n=!1),void 0===t.events?t.events=[this]:t.events.push(this),this.point=t,this.isLeft=n}return t.compare=function(n,r){var e=t.comparePoints(n.point,r.point);return 0!==e?e:(n.point!==r.point&&n.link(r),n.isLeft!==r.isLeft?n.isLeft?1:-1:n.segment&&r.segment?P.compare(n.segment,r.segment):0)},t.comparePoints=function(t,n){return t.x<n.x?-1:t.x>n.x?1:t.y<n.y?-1:t.y>n.y?1:0},t.prototype.link=function(t){var n,r;if(t.point===this.point)throw new Error("Tried to link already linked events");for(var e=null!==(n=t.point.events)&&void 0!==n?n:[],i=0;i<e.length;i++){var o=e[i];null===(r=this.point.events)||void 0===r||r.push(o),o.point=this.point}this.updateSegmentConsumers()},t.prototype.updateSegmentConsumers=function(){for(var t,n,r,e,i,o=null!==(t=this.point.events)&&void 0!==t?t:[],s=o.length,u=0;u<s;u++){var l=o[u];if(void 0===(null===(n=l.segment)||void 0===n?void 0:n.consumedBy))for(var h=u+1;h<s;h++){var f=o[h];void 0===f.consumedBy&&(null===(r=l.otherSE)||void 0===r?void 0:r.point.events)===(null===(e=f.otherSE)||void 0===e?void 0:e.point.events)&&f.segment&&(null===(i=l.segment)||void 0===i||i.consume(f.segment))}}},t.prototype.getLinkedSweepEvents=function(){for(var t,n,r,e=[],i=null!==(t=this.point.events)&&void 0!==t?t:[],o=0;o<i.length;o++){var s=i[o];s!==this&&!(null===(n=s.segment)||void 0===n?void 0:n.ringOut)&&(null===(r=s.segment)||void 0===r?void 0:r.isInResult())&&e.push(s)}return e},t.prototype.getLeftmostComparator=function(t){var n=this,r=new Map,e=function(e){var i=e.otherSE;if((null==i?void 0:i.point)&&t){var o=x.angleBetween(n.point,i.point,t.point),s=d(Math.sin(o)),u=d(Math.cos(o));r.set(e,{sine:s,cosine:u})}};return function(t,n){r.has(t)||e(t),r.has(n)||e(n);var i=r.get(t),o=i.sine,s=i.cosine,u=r.get(n),l=u.sine,h=u.cosine;return o>=0&&l>=0?s<h?1:s>h?-1:0:o<0&&l<0?s<h?-1:s>h?1:0:l<o?-1:l>o?1:0}},t}(),k=0,P=function(){function t(t,n,r,e){void 0===r&&(r=null),void 0===e&&(e=null),this.id=++k,this.leftSE=t,t.segment=this,t.otherSE=n,this.rightSE=n,n.segment=this,n.otherSE=t,this.rings=r,this.windings=e}return t.compare=function(t,n){var r=t.leftSE.point.x,e=n.leftSE.point.x,i=t.rightSE.point.x,o=n.rightSE.point.x;if(o<r)return 1;if(i<e)return-1;var s=t.leftSE.point.y,u=n.leftSE.point.y,l=t.rightSE.point.y,h=n.rightSE.point.y;if(r<e){if(u<s&&u<l)return 1;if(u>s&&u>l)return-1;var f,a=t.comparePoint(n.leftSE.point);return a<0?1:a>0?-1:0!==(f=n.comparePoint(t.rightSE.point))?f:-1}if(r>e){if(s<u&&s<h)return-1;if(s>u&&s>h)return 1;var p=n.comparePoint(t.leftSE.point);return 0!==p?p:(c=t.comparePoint(n.rightSE.point))<0?1:c>0?-1:1}if(s<u)return-1;if(s>u)return 1;if(i<o&&0!==(f=n.comparePoint(t.rightSE.point)))return f;if(i>o){var c;if((c=t.comparePoint(n.rightSE.point))<0)return 1;if(c>0)return-1}if(i!==o){var g=l-s,v=i-r,y=h-u,x=o-e;if(g>v&&y<x)return 1;if(g<v&&y>x)return-1}return i>o?1:i<o||l<h?-1:l>h?1:t.id<n.id?-1:t.id>n.id?1:0},t.fromRing=function(n,r,e){var i,o,s,u=R.comparePoints(n,r);if(u<0)i=n,o=r,s=1;else{if(!(u>0))throw new Error("Tried to create degenerate segment at [".concat(n.x,", ").concat(n.y,"]"));i=r,o=n,s=-1}return new t(new R(i,!0),new R(o,!1),e?[e]:[],[s])},t.prototype.replaceRightSE=function(t){this.rightSE=t,this.rightSE.segment=this,this.rightSE.otherSE=this.leftSE,this.leftSE.otherSE=this.rightSE},t.prototype.bbox=function(){var t=this.leftSE.point.y,n=this.rightSE.point.y;return{ll:{x:this.leftSE.point.x,y:t<n?t:n},ur:{x:this.rightSE.point.x,y:t>n?t:n}}},t.prototype.vector=function(){return{x:this.rightSE.point.x-this.leftSE.point.x,y:this.rightSE.point.y-this.leftSE.point.y}},t.prototype.getIntersection=function(t){var n=this.bbox(),r=t.bbox(),e=l(n,r);if(null==e)return null;var i=this.leftSE.point,o=this.rightSE.point,s=t.leftSE.point,h=t.rightSE.point,f=u(n,s)&&0===this.comparePoint(s),a=u(r,i)&&0===t.comparePoint(i),p=u(n,h)&&0===this.comparePoint(h),c=u(r,o)&&0===t.comparePoint(o);if(a&&f)return c&&!p?o:!c&&p?h:null;if(a)return p&&i.x===h.x&&i.y===h.y?null:i;if(f)return c&&o.x===s.x&&o.y===s.y?null:s;if(c&&p)return null;if(c)return o;if(p)return h;var v=function(t,n,r,e){if(0===n.x)return S(r,e,t.x);if(0===e.x)return S(t,n,r.x);if(0===n.y)return E(r,e,t.y);if(0===e.y)return E(t,n,r.y);var i=x.crossProduct(n,e);if(0===i)return null;var o=x.subtract(r,t),s=x.crossProduct(o,n)/i,u=x.crossProduct(o,e)/i;return{x:(t.x+u*n.x+(r.x+s*e.x))/2,y:(t.y+u*n.y+(r.y+s*e.y))/2}}(i,this.vector(),s,t.vector());return null==v?null:u(e,v)?_.of(g.round(v.x,v.y)):null},t.prototype.hasEndpointEqualTo=function(t){return t.x===this.leftSE.point.x&&t.y===this.leftSE.point.y||t.x===this.rightSE.point.x&&t.y===this.rightSE.point.y},t.prototype.comparePoint=function(t){if(this.hasEndpointEqualTo(t))return 0;var n=this.leftSE.point,r=this.rightSE.point,e=this.vector();if(n.x===r.x)return t.x===n.x?0:t.x<n.x?1:-1;var i=(t.y-n.y)/e.y,o=n.x+i*e.x;if(t.x===o)return 0;var s=(t.x-n.x)/e.x,u=n.y+s*e.y;return t.y===u?0:t.y<u?-1:1},t.prototype.split=function(n){var r,e,i,o,s=[],u=void 0!==n.events,l=new R(n,!0),h=new R(n,!1),f=this.rightSE;this.replaceRightSE(h),s.push(h),s.push(l);var a=new t(l,f,null!==(e=null===(r=this.rings)||void 0===r?void 0:r.slice())&&void 0!==e?e:null,null!==(o=null===(i=this.windings)||void 0===i?void 0:i.slice())&&void 0!==o?o:null);return R.comparePoints(a.leftSE.point,a.rightSE.point)>0&&a.swapEvents(),R.comparePoints(this.leftSE.point,this.rightSE.point)>0&&this.swapEvents(),u&&(l.updateSegmentConsumers(),h.updateSegmentConsumers()),s},t.prototype.swapEvents=function(){var t=this.rightSE;if(this.rightSE=this.leftSE,this.leftSE=t,this.leftSE.isLeft=!0,this.rightSE.isLeft=!1,this.windings)for(var n=0;n<this.windings.length;n++)this.windings[n]*=-1},t.prototype.consume=function(n){for(var r=this,e=n;r.consumedBy;)r=r.consumedBy;for(;e.consumedBy;)e=e.consumedBy;var i=t.compare(r,e);if(0!==i){if(i>0){var o=r;r=e,e=o}if(r.prev===e&&(o=r,r=e,e=o),r.rings&&r.windings&&e.rings&&e.windings)for(var s=0;s<e.rings.length;s++){var u=e.rings[s],l=e.windings[s],h=r.rings.indexOf(u);-1===h?(r.rings.push(u),r.windings.push(l)):r.windings[h]+=l}e.rings=null,e.windings=null,e.consumedBy=r,e.leftSE.consumedBy=r.leftSE,e.rightSE.consumedBy=r.rightSE}},t.prototype.prevInResult=function(){return void 0!==this._prevInResult||(this.prev?this.prev.isInResult()?this._prevInResult=this.prev:this._prevInResult=this.prev.prevInResult():this._prevInResult=null),this._prevInResult},t.prototype.beforeState=function(){if(void 0!==this._beforeState)return this._beforeState;if(this.prev){var t=this.prev.consumedBy||this.prev;this._beforeState=t.afterState()}else this._beforeState={rings:[],windings:[],multiPolys:[]};return this._beforeState},t.prototype.afterState=function(){if(void 0!==this._afterState)return this._afterState;var t=this.beforeState();if(!t)return this._afterState;this._afterState={rings:t.rings.slice(0),windings:t.windings.slice(0),multiPolys:[]};var n=this._afterState.rings,r=this._afterState.windings,e=this._afterState.multiPolys;if(this.rings&&this.windings)for(var i=0;i<this.rings.length;i++){var o=this.rings[i],s=this.windings[i];-1===(h=n.indexOf(o))?(n.push(o),r.push(s)):r[h]+=s}var u=[],l=[];for(i=0;i<n.length;i++)if(0!==r[i]){var h,f=(o=n[i]).poly;-1===l.indexOf(f)&&(o.isExterior?u.push(f):(-1===l.indexOf(f)&&l.push(f),-1!==(h=u.indexOf(o.poly))&&u.splice(h,1)))}for(i=0;i<u.length;i++){var a=u[i].multiPoly;a&&-1===e.indexOf(a)&&e.push(a)}return this._afterState},t.prototype.isInResult=function(){var t,n;if(this.consumedBy)return!1;if(void 0!==this._isInResult)return this._isInResult;var r=null===(t=this.beforeState())||void 0===t?void 0:t.multiPolys,e=null===(n=this.afterState())||void 0===n?void 0:n.multiPolys;if(!r||!e)return this._isInResult;switch(j.type){case"union":var i=0===r.length,o=0===e.length;this._isInResult=i!==o;break;case"intersection":var s=void 0,u=void 0;r.length<e.length?(s=r.length,u=e.length):(s=e.length,u=r.length),this._isInResult=u===j.numMultiPolys&&s<u;break;case"xor":var l=Math.abs(r.length-e.length);this._isInResult=l%2==1;break;case"difference":var h=function(t){return 1===t.length&&t[0].isSubject};this._isInResult=h(r)!==h(e);break;default:throw new Error("Unrecognized operation type found ".concat(j.type))}return this._isInResult},t}(),I=function(){function t(t,n){if(void 0===n&&(n=!1),this.polys=[],this.bbox={ll:{x:1/0,y:1/0},ur:{x:-1/0,y:-1/0}},!Array.isArray(t))throw new Error("Input geometry is not valid Polygon or MultiPolygon");try{if(this.isSubject=n,0===t.length)return;(function(t){return"number"==typeof t[0][0][0]})(t)&&(t=[t]);for(var r=0;r<t.length;r++){var e=new M(t[r],this);this.bbox.ll.x=Math.min(this.bbox.ll.x,e.bbox.ll.x),this.bbox.ll.y=Math.min(this.bbox.ll.y,e.bbox.ll.y),this.bbox.ur.x=Math.max(this.bbox.ur.x,e.bbox.ur.x),this.bbox.ur.y=Math.max(this.bbox.ur.y,e.bbox.ur.y),this.polys.push(e)}}catch(t){throw new Error("Input geometry is not valid Polygon or MultiPolygon")}}return t.prototype.getSweepEvents=function(){for(var t=[],n=0;n<this.polys.length;n++)for(var r=this.polys[n].getSweepEvents(),e=0;e<r.length;e++)t.push(r[e]);return t},t}(),M=function(){function t(t,n){if(this.interiorRings=[],!Array.isArray(t))throw new Error("Input geometry is not valid Polygon");this.exteriorRing=new O(t[0],this,!0),this.bbox={ll:{x:this.exteriorRing.bbox.ll.x,y:this.exteriorRing.bbox.ll.y},ur:{x:this.exteriorRing.bbox.ur.x,y:this.exteriorRing.bbox.ur.y}};for(var r=1;r<t.length;r++){var e=new O(t[r],this,!1);this.bbox.ll.x=Math.min(this.bbox.ll.x,e.bbox.ll.x),this.bbox.ll.y=Math.min(this.bbox.ll.y,e.bbox.ll.y),this.bbox.ur.x=Math.max(this.bbox.ur.x,e.bbox.ur.x),this.bbox.ur.y=Math.max(this.bbox.ur.y,e.bbox.ur.y),this.interiorRings.push(e)}this.multiPoly=n}return t.prototype.getSweepEvents=function(){for(var t=this.exteriorRing.getSweepEvents(),n=0;n<this.interiorRings.length;n++)for(var r=this.interiorRings[n].getSweepEvents(),e=0;e<r.length;e++)t.push(r[e]);return t},t}(),O=function(){function t(t,n,r){if(this.segments=[],!Array.isArray(t)||0===t.length)throw new Error("Input geometry is not valid Ring");if(this.poly=n,this.isExterior=r,"number"!=typeof t[0][0]||"number"!=typeof t[0][1])throw new Error("Input geometry is not valid Ring");var e=_.of(g.round(t[0][0],t[0][1]));this.bbox={ll:{x:e.x,y:e.y},ur:{x:e.x,y:e.y}};for(var i=e,o=1;o<t.length;o++){var s=t[o],u=s[0],l=s[1];if("number"!=typeof u||"number"!=typeof l)throw new Error("Input geometry is not valid Ring");var h=_.of(g.round(u,l));h.x===i.x&&h.y===i.y||(this.segments.push(P.fromRing(i,h,this)),this.bbox.ll.x=Math.min(this.bbox.ll.x,h.x),this.bbox.ll.y=Math.min(this.bbox.ll.y,h.y),this.bbox.ur.x=Math.max(this.bbox.ur.x,h.x),this.bbox.ur.y=Math.max(this.bbox.ur.y,h.y),i=h)}e.x===i.x&&e.y===i.y||this.segments.push(P.fromRing(i,e,this))}return t.prototype.getSweepEvents=function(){for(var t=[],n=0;n<this.segments.length;n++){var r=this.segments[n];t.push(r.leftSE),t.push(r.rightSE)}return t},t}(),L=function(){function t(t){this.rings=t,this.polys=this.composePolys(t)}return t.prototype.getGeom=function(){for(var t=[],n=0;n<this.polys.length;n++){var r=this.polys[n].getGeom();null!=r&&t.push(r)}return t},t.prototype.composePolys=function(t){for(var n,r=[],e=0;e<t.length;e++){var i=t[e];if(!i.poly)if(i.isExteriorRing())r.push(new z(i));else{var o=i.enclosingRing();o&&!o.poly&&r.push(new z(o)),null===(n=null==o?void 0:o.poly)||void 0===n||n.addInterior(i)}}return r},t}(),z=function(){function t(t){this.interiorRings=[],this.exteriorRing=t,t.poly=this}return t.prototype.addInterior=function(t){this.interiorRings.push(t),t.poly=this},t.prototype.getGeom=function(){var t=[],n=this.exteriorRing.getGeom();if(null==n)return null;t.push(n);for(var r=0;r<this.interiorRings.length;r++){var e=this.interiorRings[r].getGeom();null!=e&&t.push(e)}return t},t}(),B=function(){function t(t){this.poly=null,this.events=t;for(var n=0;n<t.length;n++){var r=t[n].segment;r&&(r.ringOut=this)}}return t.factory=function(n){for(var r,e,i=[],o=0;o<n.length;o++){var s=n[o];if(s.isInResult()&&!s.ringOut){for(var u=null,l=s.leftSE,h=s.rightSE,f=[l],a=l.point,p=[];u=l,(l=h)&&f.push(l),(null==l?void 0:l.point)!==a;)for(;;){var c=null!==(r=null==l?void 0:l.getLinkedSweepEvents())&&void 0!==r?r:[];if(0===c.length){var g=f[0].point,v=f[f.length-1].point;throw new Error("Unable to complete output ring starting at [".concat(g.x,", ").concat(g.y,"]. Last matching segment found ends at [").concat(v.x,", ").concat(v.y,"]."))}if(1===c.length){h=c[0].otherSE;break}for(var y=null,x=0;x<p.length;x++)if(p[x].point===(null==l?void 0:l.point)){y=x;break}if(null==y){p.push({index:f.length,point:null==l?void 0:l.point});var d=null==l?void 0:l.getLeftmostComparator(u);h=c.sort(d)[0].otherSE;break}var m=p.splice(y)[0],b=f.splice(m.index);(null===(e=b[0])||void 0===e?void 0:e.otherSE)&&b.unshift(b[0].otherSE),i.push(new t(b.reverse()))}i.push(new t(f))}}return i},t.prototype.getGeom=function(){for(var t,n=null===(t=this.events[0])||void 0===t?void 0:t.point,r=[n],e=1;e<this.events.length-1;e++){var i=this.events[e].point,o=this.events[e+1].point;0!==b.compareAngles(i,n,o)&&(r.push(i),n=i)}if(1===r.length)return null;var s=r[0],u=r[1];0===b.compareAngles(s,n,u)&&r.shift(),r.push(r[0]);var l=this.isExteriorRing()?1:-1,h=this.isExteriorRing()?0:r.length-1,f=this.isExteriorRing()?r.length:-1,a=[];for(e=h;e!==f;e+=l)a.push([r[e].x,r[e].y]);return a},t.prototype.isExteriorRing=function(){if(void 0===this._isExteriorRing){var t=this.enclosingRing();this._isExteriorRing=!t||!t.isExteriorRing()}return this._isExteriorRing},t.prototype.enclosingRing=function(){return void 0===this._enclosingRing&&(this._enclosingRing=this.calcEnclosingRing()),this._enclosingRing},t.prototype.calcEnclosingRing=function(){for(var t,n,r,e=this.events[0],i=1;i<this.events.length;i++){var o=this.events[i];R.compare(e,o)>0&&(e=o)}for(var s=null===(t=e.segment)||void 0===t?void 0:t.prevInResult(),u=s?s.prevInResult():null;;){if(!s)return null;if(!u)return s.ringOut;if(u.ringOut!==s.ringOut)return(null===(n=u.ringOut)||void 0===n?void 0:n.enclosingRing())!==s.ringOut?s.ringOut:null===(r=s.ringOut)||void 0===r?void 0:r.enclosingRing();s=u.prevInResult(),u=s?s.prevInResult():null}},t}(),q=function(){function t(t,n){void 0===n&&(n=P.compare),this.segments=[],this.queue=t,this.tree=new s.default(n)}return t.prototype.process=function(t){var n=t.segment,r=[];if(t.consumedBy)return t.isLeft?this.queue.remove(t.otherSE):n&&this.tree.remove(n),r;if(!n)return r;var e=t.isLeft?this.tree.add(n):this.tree.find(n);if(!e)throw new Error("Unable to find segment #".concat(n.id," ")+"[".concat(n.leftSE.point.x,", ").concat(n.leftSE.point.y,"] -> ")+"[".concat(n.rightSE.point.x,", ").concat(n.rightSE.point.y,"] ")+"in SweepLine tree.");for(var i,o,s=e,u=e;void 0===i;)null==(s=this.tree.prev(s))?i=null:void 0===s.key.consumedBy&&(i=s.key);for(;void 0===o;)null==(u=this.tree.next(u))?o=null:void 0===u.key.consumedBy&&(o=u.key);if(t.isLeft){var l=null;if(i&&null!=(c=i.getIntersection(n))&&(n.hasEndpointEqualTo(c)||(l=c),!i.hasEndpointEqualTo(c)))for(var h=this.splitSegment(i,c),f=0;f<h.length;f++)r.push(h[f]);var a=null;if(o&&null!=(c=o.getIntersection(n))&&(n.hasEndpointEqualTo(c)||(a=c),!o.hasEndpointEqualTo(c)))for(h=this.splitSegment(o,c),f=0;f<h.length;f++)r.push(h[f]);if(null!=l||null!=a){var p;for(p=null==l?a:null==a||R.comparePoints(l,a)<=0?l:a,this.queue.remove(n.rightSE),r.push(n.rightSE),h=p?n.split(p):[],f=0;f<h.length;f++)r.push(h[f])}r.length>0?(this.tree.remove(n),r.push(t)):(this.segments.push(n),n.prev=i)}else{var c;if(i&&o&&null!=(c=i.getIntersection(o))){if(!i.hasEndpointEqualTo(c))for(h=this.splitSegment(i,c),f=0;f<h.length;f++)r.push(h[f]);if(!o.hasEndpointEqualTo(c))for(h=this.splitSegment(o,c),f=0;f<h.length;f++)r.push(h[f])}this.tree.remove(n)}return r},t.prototype.splitSegment=function(t,n){this.tree.remove(t);var r=t.rightSE;this.queue.remove(r);var e=t.split(n);return e.push(r),void 0===t.consumedBy&&this.tree.add(t),e},t}(),T=1e6,j=new(function(){function t(){}return t.prototype.run=function(t,n,r){this.type=t,g.reset();for(var e=[new I(n,!0)],i=0;i<r.length;i++)e.push(new I(r[i],!1));if(this.numMultiPolys=e.length,"difference"===t){var o=e[0];for(i=1;i<e.length;)null!=l(e[i].bbox,o.bbox)?i++:e.splice(i,1)}if("intersection"===t)for(i=0;i<e.length;i++)for(var u=e[i],h=i+1;h<e.length;h++)if(null==l(u.bbox,e[h].bbox))return[];var f=new s.default(R.compare);for(i=0;i<e.length;i++){var a=e[i].getSweepEvents();for(h=0;h<a.length;h++)if(f.insert(a[h]),f.size>T)throw new Error("Infinite loop when putting segment endpoints in a priority queue (queue size too big).")}for(var p=new q(f),c=f.size,v=f.pop();v;){var y=v.key;if(f.size===c){var x=y.segment;throw new Error("Unable to pop() ".concat(y.isLeft?"left":"right"," SweepEvent [").concat(y.point.x,", ").concat(y.point.y,"] from segment #").concat(null==x?void 0:x.id," [").concat(null==x?void 0:x.leftSE.point.x,", ").concat(null==x?void 0:x.leftSE.point.y,"] -> [").concat(null==x?void 0:x.rightSE.point.x,", ").concat(null==x?void 0:x.rightSE.point.y,"] from queue."))}if(f.size>T)throw new Error("Infinite loop when passing sweep line over endpoints (queue size too big).");if(p.segments.length>1e6)throw new Error("Infinite loop when passing sweep line over endpoints (too many sweep line segments).");var d=p.process(y);for(i=0;i<d.length;i++){var m=d[i];void 0===m.consumedBy&&f.insert(m)}c=f.size,v=f.pop()}g.reset();var b=B.factory(p.segments);return new L(b).getGeom()},t}()),A=function(){function t(){}return t.union=function(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];return j.run("union",t,n)},t.intersection=function(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];return j.run("intersection",t,n)},t.xor=function(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];return j.run("xor",t,n)},t.difference=function(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];return j.run("difference",t,n)},t}(),C=o.o}}]);
//# sourceMappingURL=sourcemaps/5f688bae1acff436.vendor.js.map