!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},n.parcelRequired7c6=i);var r=i("iU1Pc"),a=document.querySelector(".form"),u={delay:0,step:0,amount:0,position:0};function l(e,n){var t=Math.random()>.3;return new Promise((function(o,i){setTimeout((function(){var r={position:e,delay:n};t?o(r):i(r)}),n)}))}a.addEventListener("input",(function(e){u[e.target.name]=Number(e.target.value),console.log(u)})),a.addEventListener("submit",(function(n){n.preventDefault();for(var t=0;t<u.amount;t+=1)l(u.position,u.delay).then((function(n){var t=n.position,o=n.delay;e(r).Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(o,"ms"))})).catch((function(n){var t=n.position,o=n.delay;e(r).Notify.failure("❌ Rejected promise ".concat(t," in ").concat(o,"ms"))})),u.delay+=u.step}))}();
//# sourceMappingURL=03-promises.e781e75e.js.map