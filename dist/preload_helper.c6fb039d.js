!function(){"use strict";var t="/".replace(/([^/])$/,"$1/"),e=location.pathname,n=e.startsWith(t)&&decodeURI("/".concat(e.slice(t.length)));if(n){var a=document,c=a.head,r=a.createElement.bind(a),i=function(t,e,n){var a,c=e.r[t]||(null===(a=Object.entries(e.r).find((function(e){var n=e[0];return new RegExp("^".concat(n.replace(/\/:[^/]+/g,"/[^/]+").replace("/*","/.+"),"$")).test(t)})))||void 0===a?void 0:a[1]);return null==c?void 0:c.map((function(t){var a=e.f[t][1],c=e.f[t][0];return{type:c.split(".").pop(),url:"".concat(n.publicPath).concat(c),attrs:[["data-".concat(e.b),"".concat(e.p,":").concat(a)]]}}))}(n,{"p":"rc-virtual-list","b":"webpack","f":[["nm__dumi__dist__client__pages__Demo__index.578aa5c0.chunk.css",9],["nm__dumi__dist__client__pages__Demo__index.432d9825.async.js",9],["nm__dumi__dist__client__pages__404.8b85f2d9.chunk.css",65],["nm__dumi__dist__client__pages__404.10044b7a.async.js",65],["docs__demo__basic.md.21a7638d.async.js",166],["docs__demo__no-virtual.md.6ab20ad9.async.js",426],["nm__dumi__theme-default__layouts__DocLayout__index.99f9caa4.async.js",519],["docs__demo__animate.md.49810b50.async.js",683],["776.e8c51481.chunk.css",776],["776.533bb9fd.async.js",776],["docs__demo__switch.md.feeea627.async.js",789],["dumi__tmp-production__dumi__theme__ContextWrapper.bc190f12.async.js",923],["docs__demo__horizontal-scroll.md.f54efbf6.async.js",934],["docs__index.md.015143a1.async.js",935],["docs__demo__height.md.51141dd6.async.js",963]],"r":{"/*":[2,3,6,8,9,11],"/":[13,6,8,9,11],"/~demos/:id":[0,1,11],"/demo/horizontal-scroll":[12,6,8,9,11],"/demo/no-virtual":[5,6,8,9,11],"/demo/animate":[7,6,8,9,11],"/demo/height":[14,6,8,9,11],"/demo/switch":[10,6,8,9,11],"/demo/basic":[4,6,8,9,11]}},{publicPath:"/"});null==i||i.forEach((function(t){var e,n=t.type,a=t.url;if("js"===n)(e=r("script")).src=a,e.async=!0;else{if("css"!==n)return;(e=r("link")).href=a,e.rel="preload",e.as="style"}t.attrs.forEach((function(t){e.setAttribute(t[0],t[1]||"")})),c.appendChild(e)}))}}();