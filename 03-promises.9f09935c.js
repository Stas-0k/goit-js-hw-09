function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},t.parcelRequired7c6=i);var r=i("eWCmQ");const l=document.querySelector(".form"),s={delay:0,step:0,amount:0,position:0};function a(e,t){const n=Math.random()>.3;return new Promise(((o,i)=>{setTimeout((()=>{const r={position:e,delay:t};n?o(r):i(r)}),t)}))}l.addEventListener("input",(function(e){s[e.target.name]=e.target.value,console.log(s)})),l.addEventListener("submit",(function(t){t.preventDefault();for(let t=0;t<s.amount;t+=1)a(s.position,s.delay).then((({position:t,delay:n})=>{e(r).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`)})).catch((({position:t,delay:n})=>{e(r).Notify.failure(`❌ Rejected promise ${t} in ${n}ms`)})),s.position+=1}));
//# sourceMappingURL=03-promises.9f09935c.js.map
