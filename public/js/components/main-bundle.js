(()=>{var e,t,r={964:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});const o=function(e){var t;function o(e){e.forEach((function(e){var o=e.getAttribute(t.moduleDataAttr),n={containerElement:e};r(200)("./".concat(o)).then((function(e){(0,e.default)(n)})).catch((function(e){return"An error occurred while loading the component"}))}))}return(t=Object.assign({},{loadImmediately:!0,moduleDataAttr:"data-module"},void 0)).loadImmediately&&o(Array.from(document.querySelectorAll("[".concat(t.moduleDataAttr,"]")))),{load:o}}()},200:(e,t,r)=>{var o={"./components/header":[462,462],"./components/header.js":[462,462],"./main":[964],"./main.js":[964]};function n(e){if(!r.o(o,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=o[e],n=t[0];return Promise.all(t.slice(1).map(r.e)).then((()=>r(n)))}n.keys=()=>Object.keys(o),n.id=200,e.exports=n}},o={};function n(e){if(o[e])return o[e].exports;var t=o[e]={exports:{}};return r[e](t,t.exports,n),t.exports}n.m=r,n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[])),n.u=e=>"js/components/"+e+"-bundle.js",n.miniCssF=e=>(179===e?"main":e)+"."+{462:"31d6cfe0d16ae931b73c"}[e]+".css",n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="webpack-practice:",n.l=(r,o,a)=>{if(e[r])e[r].push(o);else{var i,c;if(void 0!==a)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var s=u[l];if(s.getAttribute("src")==r||s.getAttribute("data-webpack")==t+a){i=s;break}}i||(c=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.setAttribute("data-webpack",t+a),i.src=r),e[r]=[o];var d=(t,o)=>{i.onerror=i.onload=null,clearTimeout(p);var n=e[r];if(delete e[r],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((e=>e(o))),t)return t(o)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),c&&document.head.appendChild(i)}},n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e+"../../"})(),(()=>{var e={179:0};n.f.j=(t,r)=>{var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise(((r,n)=>{o=e[t]=[r,n]}));r.push(o[2]=a);var i=n.p+n.u(t),c=new Error;n.l(i,(r=>{if(n.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;c.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",c.name="ChunkLoadError",c.type=a,c.request=i,o[1](c)}}),"chunk-"+t)}};var t=self.webpackChunkwebpack_practice=self.webpackChunkwebpack_practice||[],r=t.push.bind(t);t.push=t=>{for(var o,a,[i,c,u]=t,l=0,s=[];l<i.length;l++)a=i[l],n.o(e,a)&&e[a]&&s.push(e[a][0]),e[a]=0;for(o in c)n.o(c,o)&&(n.m[o]=c[o]);for(u&&u(n),r(t);s.length;)s.shift()()}})(),n(964)})();