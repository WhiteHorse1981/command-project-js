!function(){function t(t){return t&&t.__esModule?t.default:t}var e={};function r(t,e,r,n,o,a,c){try{var i=t[a](c),u=i.value}catch(t){return void r(t)}i.done?e(u):Promise.resolve(u).then(n,o)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(){var e=this,n=arguments;return new Promise((function(o,a){var c=t.apply(e,n);function i(t){r(c,o,a,i,u,"next",t)}function u(t){r(c,o,a,i,u,"throw",t)}i(void 0)}))}};var n={},o=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",i=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof p?e:p,a=Object.create(o.prototype),c=new j(n||[]);return a._invoke=function(t,e,r){var n=d;return function(o,a){if(n===f)throw new Error("Generator is already running");if(n===v){if("throw"===o)throw a;return O()}for(r.method=o,r.arg=a;;){var c=r.delegate;if(c){var i=x(c,r);if(i){if(i===m)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===d)throw n=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=f;var u=l(t,e,r);if("normal"===u.type){if(n=r.done?v:h,u.arg===m)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=v,r.method="throw",r.arg=u.arg)}}}(t,r,c),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var d="suspendedStart",h="suspendedYield",f="executing",v="completed",m={};function p(){}function y(){}function g(){}var b={};u(b,a,(function(){return this}));var w=Object.getPrototypeOf,L=w&&w(w(A([])));L&&L!==r&&n.call(L,a)&&(b=L);var k=g.prototype=p.prototype=Object.create(b);function S(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function r(o,a,c,i){var u=l(t[o],t,a);if("throw"!==u.type){var s=u.arg,d=s.value;return d&&"object"==typeof d&&n.call(d,"__await")?e.resolve(d.__await).then((function(t){r("next",t,c,i)}),(function(t){r("throw",t,c,i)})):e.resolve(d).then((function(t){s.value=t,c(s)}),(function(t){return r("throw",t,c,i)}))}i(u.arg)}var o;this._invoke=function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}}function x(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,x(t,r),"throw"===r.method))return m;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,m;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,m):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function q(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function A(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,c=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return c.next=c}}return{next:O}}function O(){return{value:e,done:!0}}return y.prototype=g,u(k,"constructor",g),u(g,"constructor",y),y.displayName=u(g,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,u(t,i,"GeneratorFunction")),t.prototype=Object.create(k),t},t.awrap=function(t){return{__await:t}},S(_.prototype),u(_.prototype,c,(function(){return this})),t.AsyncIterator=_,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var c=new _(s(e,r,n,o),a);return t.isGeneratorFunction(r)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},S(k),u(k,i,"Generator"),u(k,a,(function(){return this})),u(k,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=A,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(q),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return i.type="throw",i.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var c=this.tryEntries[a],i=c.completion;if("root"===c.tryLoc)return o("end");if(c.tryLoc<=this.prev){var u=n.call(c,"catchLoc"),s=n.call(c,"finallyLoc");if(u&&s){if(this.prev<c.catchLoc)return o(c.catchLoc,!0);if(this.prev<c.finallyLoc)return o(c.finallyLoc)}else if(u){if(this.prev<c.catchLoc)return o(c.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return o(c.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var c=a?a.completion:{};return c.type=t,c.arg=e,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),q(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;q(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:A(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),m}},t}(n);try{regeneratorRuntime=o}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=o:Function("r","regeneratorRuntime = r")(o)}function a(t,e){if(null===localStorage.getItem(t)){var r=[];r.push(e),localStorage.setItem(t,JSON.stringify(r))}else{var n=JSON.parse(localStorage.getItem(t));n.push(e),localStorage.setItem(t,JSON.stringify(n))}}var c="https://www.thecocktaildb.com/api/json/v1/1/search.php?",i="https://www.thecocktaildb.com/api/json/v1/1/random.php";function u(t){return s.apply(this,arguments)}function s(){return(s=t(e)(t(n).mark((function e(r){var o,a;return t(n).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(c,"s=").concat(r));case 2:return o=t.sent,t.next=5,o.json();case 5:return a=t.sent,t.abrupt("return",a);case 7:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function l(){return d.apply(this,arguments)}function d(){return(d=t(e)(t(n).mark((function e(){var r,o;return t(n).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(i));case 2:return r=t.sent,t.next=5,r.json();case 5:return o=t.sent,t.abrupt("return",o);case 7:case"end":return t.stop()}}),e)})))).apply(this,arguments)}var h=document.querySelector(".dropdown-content"),f=document.querySelector(".list-cocktail");function v(t){var e=document.querySelector(".div-icon-heart1"),r=document.querySelector(".div-icon-heart2"),n=e.href.baseVal,o=r.href.baseVal,a=t.map((function(t){var e=t.strDrinkThumb,r=t.strImageAttribution,a=t.strDrink,c=t.idDrink;return'\n        \n          <div class="gallery-item gallery__link">\n            <img class="gallery-item__img" src="'.concat(e,'" alt="').concat(r,'" loading="lazy" />\n            <div class="info">\n              <div class="info-item">\n                <p class="info-descr">').concat(a,'</p>\n              </div>\n              <div class="btn-item">\n                \n                  <button type="button" class="info-btn-descr info-btn js-learn-btn" data-modal-open="').concat(a,'" data-id="').concat(c,'">Learn more</button>\n                \n                \n                  <button type="button" data-id="').concat(c,'" class="add-descr add-favorite js_btn_fav_add" data-cocktail-name="').concat(a,'">\n                  Add to\n                  \n                \n                  <svg class="icon-svg svg-add" width="17" height="16">\n                    <use class="use-heart1" href=\'').concat(n,'\'></use>\n                  </svg>\n\n                \n                            \n                  </button>\n                   <button type="button" id=').concat(c,' class="add-descr add-favorite js_btn_fav_remove" data-cocktail-name-remove="').concat(a,'">\n                  Remove\n                    \n                  <svg class="icon-svg svg-remove" width="17" height="16">\n                    <use class="use-heart1" href=\'').concat(o,"'></use>\n                  </svg>\n                \n                  </button>\n               \n              </div>\n            </div>\n          </div>\n       \n      ")})).join("");document.querySelector(".gallery").insertAdjacentHTML("beforeend",a)}function m(t){t.target.classList.contains("js-learn-btn")&&(document.querySelector("[data-modal]").classList.toggle("is-hidden"),document.querySelector("[data-modal-close]").addEventListener("click",(function(t){document.querySelector("[data-modal]").classList.add("is-hidden"),console.log(t.target)})))}var p,y,g,b,w={gallery:document.querySelector(".gallery"),searchForm:document.querySelector("#search-form"),searchFormMobile:document.querySelector("#mobile-search-form"),searchLetterCocktailMobile:document.querySelector(".js-letter-cocktail-1"),searchLetterCocktail:document.querySelector(".js-letter-cocktail-2"),modal:document.querySelector(".modal"),titleContainer2:document.querySelector(".title-2"),titleContainer1:document.querySelector(".title-1"),btnDarkTheme:document.querySelector(".js-dark-them"),arrow:document.querySelector(".arrow"),arrowMobile:document.querySelector(".arrow-mobile")};function L(){return(L=t(e)(t(n).mark((function e(r){var o,a,c,i,s,l,d;return t(n).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.preventDefault(),w.gallery.innerHTML="",t.prev=2,o=r.currentTarget.searchQuery.value.trim(),t.next=6,u(o);case 6:for(v(t.sent.drinks),a=document.querySelectorAll(".js_btn_fav_remove"),c=!0,i=!1,s=void 0,t.prev=10,l=a[Symbol.iterator]();!(c=(d=l.next()).done);c=!0)d.value.style.display="none";t.next=18;break;case 14:t.prev=14,t.t0=t.catch(10),i=!0,s=t.t0;case 18:t.prev=18,t.prev=19,c||null==l.return||l.return();case 21:if(t.prev=21,!i){t.next=24;break}throw s;case 24:return t.finish(21);case 25:return t.finish(18);case 26:t.next=31;break;case 28:t.prev=28,t.t1=t.catch(2),console.log(t.t1);case 31:case"end":return t.stop()}}),e,null,[[2,28],[10,14,18,26],[19,,21,25]])})))).apply(this,arguments)}function k(){return(k=t(e)(t(n).mark((function e(r){var o,a,c,i,s,l,d;return t(n).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.preventDefault(),w.gallery.innerHTML="",t.prev=2,o=r.currentTarget.searchQuery.value.trim(),t.next=6,u(o);case 6:for(v(t.sent.drinks),a=document.querySelectorAll(".js_btn_fav_remove"),c=!0,i=!1,s=void 0,t.prev=10,l=a[Symbol.iterator]();!(c=(d=l.next()).done);c=!0)d.value.style.display="none";t.next=18;break;case 14:t.prev=14,t.t0=t.catch(10),i=!0,s=t.t0;case 18:t.prev=18,t.prev=19,c||null==l.return||l.return();case 21:if(t.prev=21,!i){t.next=24;break}throw s;case 24:return t.finish(21);case 25:return t.finish(18);case 26:t.next=31;break;case 28:t.prev=28,t.t1=t.catch(2),console.log(t.t1);case 31:case"end":return t.stop()}}),e,null,[[2,28],[10,14,18,26],[19,,21,25]])})))).apply(this,arguments)}function S(t){return _.apply(this,arguments)}function _(){return(_=t(e)(t(n).mark((function e(r){var o,a,c,i,s,l,d,h;return t(n).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return w.gallery.innerHTML="",t.prev=1,o=r.target.textContent,t.next=5,u(o);case 5:for(null===(a=t.sent).drinks?(w.titleContainer1.style.display="none",w.gallery.innerHTML="<div><h2 class='title-error'>Sorry, we didn't find any cocktail for you</h2><div class='containerImg'></div></div >"):v(a.drinks),c=document.querySelectorAll(".js_btn_fav_remove"),i=!0,s=!1,l=void 0,t.prev=9,d=c[Symbol.iterator]();!(i=(h=d.next()).done);i=!0)h.value.style.display="none";t.next=17;break;case 13:t.prev=13,t.t0=t.catch(9),s=!0,l=t.t0;case 17:t.prev=17,t.prev=18,i||null==d.return||d.return();case 20:if(t.prev=20,!s){t.next=23;break}throw l;case 23:return t.finish(20);case 24:return t.finish(17);case 25:t.next=30;break;case 27:t.prev=27,t.t1=t.catch(1),console.log(t.t1);case 30:case"end":return t.stop()}}),e,null,[[1,27],[9,13,17,25],[18,,20,24]])})))).apply(this,arguments)}!function(){var t=document.querySelector(".menu__icon");if(t){var e=document.querySelector(".mobile-menu");t.addEventListener("click",(function(r){document.body.classList.toggle("_lock"),t.classList.toggle("_active"),e.classList.toggle("_active")}))}}(),p=document.querySelector(".mobile-search-header__btn"),y=document.querySelector(".menu__icon"),g=document.querySelector(".mobile-menu"),p.addEventListener("click",(function(t){document.body.classList.remove("_lock"),y.classList.remove("_active"),g.classList.remove("_active")})),b="ABCDEFGHIJKLMN0PQRSTUVWXYZ1234567890".split("").map((function(t){return'\n      <span href="#">'.concat(t,"</span>")})).join(""),h.insertAdjacentHTML("beforeend",b),function(){var t="ABCDEFGHIJKLMN0PQRSTUVWXYZ1234567890".split("").map((function(t){return'\n      <li class="list-cocktail__item" href="#">\n        <button class="list-cocktail__btn">'.concat(t,"</button>\n      </li>")})).join("");f.insertAdjacentHTML("beforeend",t)}(),window.addEventListener("load",(function(){l().then((function(t){v(t.drinks);var e=document.querySelectorAll(".js_btn_fav_remove"),r=!0,n=!1,o=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done);r=!0){a.value.style.display="none"}}catch(t){n=!0,o=t}finally{try{r||null==c.return||c.return()}finally{if(n)throw o}}}))})),w.searchForm.addEventListener("submit",(function(t){return L.apply(this,arguments)})),w.searchFormMobile.addEventListener("submit",(function(t){return k.apply(this,arguments)})),w.searchLetterCocktailMobile.addEventListener("click",S),w.searchLetterCocktail.addEventListener("click",S),w.gallery.addEventListener("click",(function(t){var e;e=t.target.getAttribute("data-cocktail-name"),console.log(e),a("FavoriteCocktails",e)})),w.gallery.addEventListener("click",m),w.modal.addEventListener("click",m),w.arrow.addEventListener("click",(function(){var t=document.querySelector(".favorite-wrapper"),e=document.querySelector(".menu-arrow");t.classList.toggle("open"),e.classList.toggle("active")})),w.arrowMobile.addEventListener("click",(function(){var t=document.querySelector(".mobile-favorite-list"),e=document.querySelector(".arrow-mobile");t.classList.toggle("open"),e.classList.toggle("active")})),w.titleContainer2.style.display="none",document.addEventListener("DOMContentLoaded",(function(){localStorage.getItem("theme")?document.documentElement.setAttribute("theme","dark"):document.documentElement.removeAttribute("theme")})),document.querySelector("#toggle-theme").addEventListener("click",(function(){document.documentElement.hasAttribute("theme")?(document.documentElement.removeAttribute("theme"),localStorage.removeItem("theme")):(document.documentElement.setAttribute("theme","dark"),localStorage.setItem("theme","black"))}));var x,E=localStorage.getItem("theme");x=document.querySelector("#highload1"),"black"===E&&(x.classList.remove("checkboxBtn"),x.classList.add("checkboxBtnOrange"));var q={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return q.Android()||q.BlackBerry()||q.iOS()||q.Opera()||q.Windows()}},j=document.querySelector("body");q.any()?j.classList.add("touch"):j.classList.add("mouse")}();
//# sourceMappingURL=index.c7ee2193.js.map
