!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequiree9a5;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},t.parcelRequiree9a5=o),o.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e}}));var a={};function i(e,t,r,n,o,a,i){try{var c=e[a](i),u=c.value}catch(e){return void r(e)}c.done?t(u):Promise.resolve(u).then(n,o)}Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function c(e){i(a,n,o,c,u,"next",e)}function u(e){i(a,n,o,c,u,"throw",e)}c(void 0)}))}};var c={};Object.defineProperty(c,"__esModule",{value:!0}),c.default=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){l.default(e,t,r[t])}))}return e};var u,l=(u=o("hKHmD"))&&u.__esModule?u:{default:u};var s={},d=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var o=t&&t.prototype instanceof m?t:m,a=Object.create(o.prototype),i=new q(n||[]);return a._invoke=function(e,t,r){var n=d;return function(o,a){if(n===h)throw new Error("Generator is already running");if(n===v){if("throw"===o)throw a;return A()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=S(i,r);if(c){if(c===p)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===d)throw n=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var u=s(e,t,r);if("normal"===u.type){if(n=r.done?v:f,u.arg===p)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=v,r.method="throw",r.arg=u.arg)}}}(e,r,i),a}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var d="suspendedStart",f="suspendedYield",h="executing",v="completed",p={};function m(){}function y(){}function g(){}var b={};u(b,a,(function(){return this}));var w=Object.getPrototypeOf,k=w&&w(w(O([])));k&&k!==r&&n.call(k,a)&&(b=k);var L=g.prototype=m.prototype=Object.create(b);function _(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function x(e,t){function r(o,a,i,c){var u=s(e[o],e,a);if("throw"!==u.type){var l=u.arg,d=l.value;return d&&"object"==typeof d&&n.call(d,"__await")?t.resolve(d.__await).then((function(e){r("next",e,i,c)}),(function(e){r("throw",e,i,c)})):t.resolve(d).then((function(e){l.value=e,i(l)}),(function(e){return r("throw",e,i,c)}))}c(u.arg)}var o;this._invoke=function(e,n){function a(){return new t((function(t,o){r(e,n,t,o)}))}return o=o?o.then(a,a):a()}}function S(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,S(e,r),"throw"===r.method))return p;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var o=s(n,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,p;var a=o.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,p):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,p)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function q(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function O(e){if(e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}return{next:A}}function A(){return{value:t,done:!0}}return y.prototype=g,u(L,"constructor",g),u(g,"constructor",y),y.displayName=u(g,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,u(e,c,"GeneratorFunction")),e.prototype=Object.create(L),e},e.awrap=function(e){return{__await:e}},_(x.prototype),u(x.prototype,i,(function(){return this})),e.AsyncIterator=x,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new x(l(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},_(L),u(L,c,"Generator"),u(L,a,(function(){return this})),u(L,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=O,q.prototype={constructor:q,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(j),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(u&&l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),j(r),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:O(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),p}},e}(s);try{regeneratorRuntime=d}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=d:Function("r","regeneratorRuntime = r")(d)}function f(e,t){if(null===localStorage.getItem(e)){var r=[];r.push(t),localStorage.setItem(e,JSON.stringify(r))}else{var n=JSON.parse(localStorage.getItem(e));n.push(t),localStorage.setItem(e,JSON.stringify(n))}}var h="https://www.thecocktaildb.com/api/json/v1/1/search.php?",v="https://www.thecocktaildb.com/api/json/v1/1/random.php";function p(e){return m.apply(this,arguments)}function m(){return(m=e(a)(e(s).mark((function t(r){var n,o;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(h,"s=").concat(r));case 2:return n=e.sent,e.next=5,n.json();case 5:return o=e.sent,e.abrupt("return",o);case 7:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function y(){return g.apply(this,arguments)}function g(){return(g=e(a)(e(s).mark((function t(){var r,n;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(v));case 2:return r=e.sent,e.next=5,r.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),t)})))).apply(this,arguments)}var b=document.querySelector(".dropdown-content"),w=document.querySelector(".list-cocktail");function k(e){var t=document.querySelector(".div-icon-heart1"),r=document.querySelector(".div-icon-heart2"),n=t.href.baseVal,o=r.href.baseVal,a=e.map((function(e){var t=e.strDrinkThumb,r=e.strImageAttribution,a=e.strDrink,i=e.idDrink;return'\n        \n          <div class="gallery-item gallery__link">\n            <img class="gallery-item__img" src="'.concat(t,'" alt="').concat(r,'" loading="lazy" />\n            <div class="info">\n              <div class="info-item">\n                <p class="info-descr">').concat(a,'</p>\n              </div>\n              <div class="btn-item">\n                \n                  <button type="button" class="info-btn-descr info-btn js-learn-btn" data-modal-open="').concat(a,'" data-id="').concat(i,'">Learn more</button>\n                \n                \n                  <button type="button" data-id="').concat(i,'" class="add-descr add-favorite js_btn_fav_add" data-cocktail-name="').concat(a,'">\n                  Add to\n                  \n                \n                  <svg class="icon-svg svg-add" width="17" height="16">\n                    <use class="use-heart1" href=\'').concat(n,'\'></use>\n                  </svg>\n\n                \n                            \n                  </button>\n                   <button type="button" id=').concat(i,' class="add-descr add-favorite js_btn_fav_remove" data-cocktail-name-remove="').concat(a,'">\n                  Remove\n                    \n                  <svg class="icon-svg svg-remove" width="17" height="16">\n                    <use class="use-heart1" href=\'').concat(o,"'></use>\n                  </svg>\n                \n                  </button>\n               \n              </div>\n            </div>\n          </div>\n       \n      ")})).join("");document.querySelector(".gallery").insertAdjacentHTML("beforeend",a)}function L(e){e.target.classList.contains("js-learn-btn")&&(document.querySelector("[data-modal]").classList.toggle("is-hidden"),document.querySelector("[data-modal-close]").addEventListener("click",(function(e){document.querySelector("[data-modal]").classList.add("is-hidden"),console.log(e.target)})))}var _,x,S,E,j={gallery:document.querySelector(".gallery"),searchForm:document.querySelector("#search-form"),searchFormMobile:document.querySelector("#mobile-search-form"),searchLetterCocktailMobile:document.querySelector(".js-letter-cocktail-1"),searchLetterCocktail:document.querySelector(".js-letter-cocktail-2"),modal:document.querySelector(".modal"),titleContainer2:document.querySelector(".title-2"),titleContainer1:document.querySelector(".title-1"),btnDarkTheme:document.querySelector(".js-dark-them"),arrow:document.querySelector(".arrow"),arrowMobile:document.querySelector(".arrow-mobile")};function q(){return(q=e(a)(e(s).mark((function t(r){var n,o,a,i,c,u,l;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),j.gallery.innerHTML="",e.prev=2,n=r.currentTarget.searchQuery.value.trim(),e.next=6,p(n);case 6:for(k(e.sent.drinks),o=document.querySelectorAll(".js_btn_fav_remove"),a=!0,i=!1,c=void 0,e.prev=10,u=o[Symbol.iterator]();!(a=(l=u.next()).done);a=!0)l.value.style.display="none";e.next=18;break;case 14:e.prev=14,e.t0=e.catch(10),i=!0,c=e.t0;case 18:e.prev=18,e.prev=19,a||null==u.return||u.return();case 21:if(e.prev=21,!i){e.next=24;break}throw c;case 24:return e.finish(21);case 25:return e.finish(18);case 26:e.next=31;break;case 28:e.prev=28,e.t1=e.catch(2),console.log(e.t1);case 31:case"end":return e.stop()}}),t,null,[[2,28],[10,14,18,26],[19,,21,25]])})))).apply(this,arguments)}function O(){return(O=e(a)(e(s).mark((function t(r){var n,o,a,i,c,u,l;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),j.gallery.innerHTML="",e.prev=2,n=r.currentTarget.searchQuery.value.trim(),e.next=6,p(n);case 6:for(k(e.sent.drinks),o=document.querySelectorAll(".js_btn_fav_remove"),a=!0,i=!1,c=void 0,e.prev=10,u=o[Symbol.iterator]();!(a=(l=u.next()).done);a=!0)l.value.style.display="none";e.next=18;break;case 14:e.prev=14,e.t0=e.catch(10),i=!0,c=e.t0;case 18:e.prev=18,e.prev=19,a||null==u.return||u.return();case 21:if(e.prev=21,!i){e.next=24;break}throw c;case 24:return e.finish(21);case 25:return e.finish(18);case 26:e.next=31;break;case 28:e.prev=28,e.t1=e.catch(2),console.log(e.t1);case 31:case"end":return e.stop()}}),t,null,[[2,28],[10,14,18,26],[19,,21,25]])})))).apply(this,arguments)}function A(e){return M.apply(this,arguments)}function M(){return(M=e(a)(e(s).mark((function t(r){var n,o,a,i,c,u,l,d;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j.gallery.innerHTML="",e.prev=1,n=r.target.textContent,e.next=5,p(n);case 5:for(null===(o=e.sent).drinks?(j.titleContainer1.style.display="none",j.gallery.innerHTML="<div><h2 class='title-error'>Sorry, we didn't find any cocktail for you</h2><div class='containerImg'></div></div >"):k(o.drinks),a=document.querySelectorAll(".js_btn_fav_remove"),i=!0,c=!1,u=void 0,e.prev=9,l=a[Symbol.iterator]();!(i=(d=l.next()).done);i=!0)d.value.style.display="none";e.next=17;break;case 13:e.prev=13,e.t0=e.catch(9),c=!0,u=e.t0;case 17:e.prev=17,e.prev=18,i||null==l.return||l.return();case 20:if(e.prev=20,!c){e.next=23;break}throw u;case 23:return e.finish(20);case 24:return e.finish(17);case 25:e.next=30;break;case 27:e.prev=27,e.t1=e.catch(1),console.log(e.t1);case 30:case"end":return e.stop()}}),t,null,[[1,27],[9,13,17,25],[18,,20,24]])})))).apply(this,arguments)}function T(){return(T=e(a)(e(s).mark((function t(r){var n;return e(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return cocktailName=r.target.getAttribute("data-cocktail-name"),console.log(cocktailName),t.next=4,p(cocktailName);case 4:n=t.sent,f("FavoriteCocktails",e(c)({},n.drinks[0]));case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){var e=document.querySelector(".menu__icon");if(e){var t=document.querySelector(".mobile-menu");e.addEventListener("click",(function(r){document.body.classList.toggle("_lock"),e.classList.toggle("_active"),t.classList.toggle("_active")}))}}(),_=document.querySelector(".mobile-search-header__btn"),x=document.querySelector(".menu__icon"),S=document.querySelector(".mobile-menu"),_.addEventListener("click",(function(e){document.body.classList.remove("_lock"),x.classList.remove("_active"),S.classList.remove("_active")})),E="ABCDEFGHIJKLMN0PQRSTUVWXYZ1234567890".split("").map((function(e){return'\n      <span href="#">'.concat(e,"</span>")})).join(""),b.insertAdjacentHTML("beforeend",E),function(){var e="ABCDEFGHIJKLMN0PQRSTUVWXYZ1234567890".split("").map((function(e){return'\n      <li class="list-cocktail__item" href="#">\n        <button class="list-cocktail__btn">'.concat(e,"</button>\n      </li>")})).join("");w.insertAdjacentHTML("beforeend",e)}(),window.addEventListener("load",(function(){y().then((function(e){k(e.drinks);var t=document.querySelectorAll(".js_btn_fav_remove"),r=!0,n=!1,o=void 0;try{for(var a,i=t[Symbol.iterator]();!(r=(a=i.next()).done);r=!0){a.value.style.display="none"}}catch(e){n=!0,o=e}finally{try{r||null==i.return||i.return()}finally{if(n)throw o}}}))})),j.searchForm.addEventListener("submit",(function(e){return q.apply(this,arguments)})),j.searchFormMobile.addEventListener("submit",(function(e){return O.apply(this,arguments)})),j.searchLetterCocktailMobile.addEventListener("click",A),j.searchLetterCocktail.addEventListener("click",A),j.gallery.addEventListener("click",(function(e){return T.apply(this,arguments)})),j.gallery.addEventListener("click",L),j.modal.addEventListener("click",L),j.arrow.addEventListener("click",(function(){var e=document.querySelector(".favorite-wrapper"),t=document.querySelector(".menu-arrow");e.classList.toggle("open"),t.classList.toggle("active")})),j.arrowMobile.addEventListener("click",(function(){var e=document.querySelector(".mobile-favorite-list"),t=document.querySelector(".arrow-mobile");e.classList.toggle("open"),t.classList.toggle("active")})),j.titleContainer2.style.display="none",document.addEventListener("DOMContentLoaded",(function(){localStorage.getItem("theme")?document.documentElement.setAttribute("theme","dark"):document.documentElement.removeAttribute("theme")})),document.querySelector("#toggle-theme").addEventListener("click",(function(){document.documentElement.hasAttribute("theme")?(document.documentElement.removeAttribute("theme"),localStorage.removeItem("theme")):(document.documentElement.setAttribute("theme","dark"),localStorage.setItem("theme","black"))}));var P,N=localStorage.getItem("theme");P=document.querySelector("#highload1"),"black"===N&&(P.classList.remove("checkboxBtn"),P.classList.add("checkboxBtnOrange"));var I={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return I.Android()||I.BlackBerry()||I.iOS()||I.Opera()||I.Windows()}},C=document.querySelector("body");I.any()?C.classList.add("touch"):C.classList.add("mouse")}();
//# sourceMappingURL=index.e9a5e893.js.map
