if(!self.define){let e,i={};const a=(a,n)=>(a=new URL(a+".js",n).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,s)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let c={};const d=e=>a(e,r),o={module:{uri:r},exports:c,require:d};i[r]=Promise.all(n.map((e=>o[e]||d(e)))).then((e=>(s(...e),c)))}}define(["./workbox-3ca83693"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"39.bundle.js",revision:"ec5b3425029fa1708242cf43d6a15c46"},{url:"608.bundle.js",revision:"e2677510f0b1939e5a1ba12db7ea6965"},{url:"app.webmanifest",revision:"39effcc76a227c2778f8ca7f9f3e11a0"},{url:"app~309f7e27.bundle.js",revision:"06e1b02e4497dabf7a63b0e7590b7d82"},{url:"app~309f7e27.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~49ea73a0.bundle.js",revision:"3aa8fec0cba9b91e35d3326ac5e27a04"},{url:"app~49ea73a0.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~ca0940c6.bundle.js",revision:"ebd7fee69bb8073b998bfa0a5a850ee6"},{url:"app~ca0940c6.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~d1658f4b.bundle.js",revision:"7d74b8e298b936c08a324451fb69b04e"},{url:"app~e4317507.bundle.js",revision:"7308844d99b1c4c3ef869be2551ebebe"},{url:"app~e4317507.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"icon.png",revision:"d85475538502bec3d08393f1e7a7b03f"},{url:"icons/icon-x128.png",revision:"d65afaf735b01bad62c1520e81b1aa4b"},{url:"icons/icon-x144.png",revision:"b7fe73155d9499c951238521828ba0a9"},{url:"icons/icon-x152.png",revision:"1063e5128d6b05005441a87e7d01ce47"},{url:"icons/icon-x192.png",revision:"4d0714443ffdff7e98081c77a3ad9676"},{url:"icons/icon-x384.png",revision:"1ef478d99cdd76ab629fa5ff02640395"},{url:"icons/icon-x48.png",revision:"b8735c5c56ced428c411dc6868a47ae5"},{url:"icons/icon-x512.png",revision:"c9fd294f385a64ac69071ff057be596d"},{url:"icons/icon-x72.png",revision:"50d30b1ed83b3f59e1b8641c630448b9"},{url:"icons/icon-x96.png",revision:"427016c08395b1f9d16efdeb2ad93cdc"},{url:"images/heros/hero-image_2.jpg",revision:"49f78cae81de4f48caf1c2fe0271c828"},{url:"images/logo.png",revision:"853c923b0a4774fae1f00e0d4f2a8d94"},{url:"images/resto-type/Chinese.png",revision:"326896bf95b1b9346ae51ec9bc7b5862"},{url:"images/resto-type/Indonesian.png",revision:"3f9698eab10a28c9057ae4b91b1c0b6a"},{url:"images/resto-type/Japanese.png",revision:"e5035787c61b27bc92b5c63b9efcb464"},{url:"images/resto-type/Korean.png",revision:"9f1daf1860bc31e405bc09ecd029a521"},{url:"index.html",revision:"bfad847e622e4b945d4ec47aaf9236a8"}],{}),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev")),new e.StaleWhileRevalidate({cacheName:"restodb-api",plugins:[]}),"GET"),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev/images/small")),new e.StaleWhileRevalidate({cacheName:"restodb-image-small-api",plugins:[]}),"GET"),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev/images/medium")),new e.StaleWhileRevalidate({cacheName:"restodb-image-medium-api",plugins:[]}),"GET"),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev/images/large")),new e.StaleWhileRevalidate({cacheName:"restodb-image-large-api",plugins:[]}),"GET")}));
//# sourceMappingURL=sw.bundle.js.map
