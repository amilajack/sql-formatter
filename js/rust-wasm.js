!function(e){function n(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,n),s.l=!0,s.exports}var t={};return n.m=e,n.c=t,n.i=function(e){return e},n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="/Users/mrdziuban/sql-formatter/dist/",n(n.s=639)}({461:function(e,n){},639:function(e,n,t){"use strict";t(461);var r=document.createElement("script");r.text="\n  if (typeof WebAssembly === 'object') {\n    var Module = {};\n    var req = new XMLHttpRequest();\n    req.open('GET', '/js/rust-wasm/out.wasm');\n    req.responseType = 'arraybuffer';\n    req.send();\n\n    req.onload = function() {\n      Module.wasmBinary = req.response;\n      var script = document.createElement('script');\n      script.src = '/js/rust-wasm/out.js';\n      document.body.appendChild(script);\n    };\n  } else {\n    document.getElementById('main').innerHTML = '<div class=\"container text-center\">' +\n        '<h2 class=\"text-danger mt-3 mb-4\">Your browser doesn\\'t support WebAssembly!</h2>' +\n        '<h5 class=\"text-center\">' +\n          'Check out the ' +\n          '<a href=\"http://webassembly.org/roadmap/\" target=\"_blank\">WebAssembly roadmap</a> ' +\n          'and the <a href=\"http://caniuse.com/#feat=wasm\" target=\"_blank\">currently supported browsers</a>.'\n        '</h5>' +\n      '</div>';\n  }\n",document.body.appendChild(r)}});