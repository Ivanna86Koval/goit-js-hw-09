!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var r={id:e,exports:{}};return o[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){t[e]=o},e.parcelRequired7c6=n);var r=n("h6c0i");document.body.style.backgroundColor="#f7eff4";var i=document.querySelector("form.form"),a={position:"center-bottom",distance:"15px",borderRadius:"15px",timeout:1e4,clickToClose:!0,cssAnimationStyle:"from-right"};function c(e,o){return new Promise((function(t,n){var r=Math.random()>.3;setTimeout((function(){r?t({position:e,delay:o}):n({position:e,delay:o})}),o)}))}i.addEventListener("click",(function(e){e.preventDefault();for(var o=e.currentTarget.elements,t=o.delay,n=o.step,i=o.amount,u=Number(t.value),l=Number(n.value),d=Number(i.value),f=1;f<=d;f+=1)c(f,u+=l).then((function(e){var o=e.position,t=e.delay;r.Notify.success("✅ Fulfilled promise ".concat(o," in ").concat(t,"ms"),a)})).catch((function(e){var o=e.position,t=e.delay;r.Notify.failure("❌ Rejected promise ".concat(o," in ").concat(t,"ms"),a)})),e.currentTarget.reset()}))}();
//# sourceMappingURL=03-promises.8a533a49.js.map
