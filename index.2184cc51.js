!function(){function e(e){return e&&e.__esModule?e.default:e}var t={};function r(e,t,r,n,o,a,c){try{var i=e[a](c),l=i.value}catch(e){return void r(e)}i.done?t(l):Promise.resolve(l).then(n,o)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(){var t=this,n=arguments;return new Promise((function(o,a){var c=e.apply(t,n);function i(e){r(c,o,a,i,l,"next",e)}function l(e){r(c,o,a,i,l,"throw",e)}i(void 0)}))}};var n={},o=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",i=o.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,r){return e[t]=r}}function s(e,t,r,n){var o=t&&t.prototype instanceof p?t:p,a=Object.create(o.prototype),c=new j(n||[]);return a._invoke=function(e,t,r){var n=d;return function(o,a){if(n===f)throw new Error("Generator is already running");if(n===m){if("throw"===o)throw a;return O()}for(r.method=o,r.arg=a;;){var c=r.delegate;if(c){var i=_(c,r);if(i){if(i===v)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===d)throw n=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=f;var l=u(e,t,r);if("normal"===l.type){if(n=r.done?m:h,l.arg===v)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n=m,r.method="throw",r.arg=l.arg)}}}(e,r,c),a}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=s;var d="suspendedStart",h="suspendedYield",f="executing",m="completed",v={};function p(){}function y(){}function g(){}var b={};l(b,a,(function(){return this}));var w=Object.getPrototypeOf,k=w&&w(w(A([])));k&&k!==r&&n.call(k,a)&&(b=k);var L=g.prototype=p.prototype=Object.create(b);function S(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function x(e,t){function r(o,a,c,i){var l=u(e[o],e,a);if("throw"!==l.type){var s=l.arg,d=s.value;return d&&"object"==typeof d&&n.call(d,"__await")?t.resolve(d.__await).then((function(e){r("next",e,c,i)}),(function(e){r("throw",e,c,i)})):t.resolve(d).then((function(e){s.value=e,c(s)}),(function(e){return r("throw",e,c,i)}))}i(l.arg)}var o;this._invoke=function(e,n){function a(){return new t((function(t,o){r(e,n,t,o)}))}return o=o?o.then(a,a):a()}}function _(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,_(e,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=u(n,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var a=o.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function q(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function A(e){if(e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,c=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return c.next=c}}return{next:O}}function O(){return{value:t,done:!0}}return y.prototype=g,l(L,"constructor",g),l(g,"constructor",y),y.displayName=l(g,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,l(e,i,"GeneratorFunction")),e.prototype=Object.create(L),e},e.awrap=function(e){return{__await:e}},S(x.prototype),l(x.prototype,c,(function(){return this})),e.AsyncIterator=x,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var c=new x(s(t,r,n,o),a);return e.isGeneratorFunction(r)?c:c.next().then((function(e){return e.done?e.value:c.next()}))},S(L),l(L,i,"Generator"),l(L,a,(function(){return this})),l(L,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=A,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(q),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return i.type="throw",i.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var c=this.tryEntries[a],i=c.completion;if("root"===c.tryLoc)return o("end");if(c.tryLoc<=this.prev){var l=n.call(c,"catchLoc"),s=n.call(c,"finallyLoc");if(l&&s){if(this.prev<c.catchLoc)return o(c.catchLoc,!0);if(this.prev<c.finallyLoc)return o(c.finallyLoc)}else if(l){if(this.prev<c.catchLoc)return o(c.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return o(c.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var c=a?a.completion:{};return c.type=e,c.arg=t,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),q(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;q(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:A(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}(n);try{regeneratorRuntime=o}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=o:Function("r","regeneratorRuntime = r")(o)}function a(e,t){var r=JSON.parse(localStorage.getItem(e));r.splice(t,1),localStorage.setItem(e,JSON.stringify(r))}var c="https://www.thecocktaildb.com/api/json/v1/1/search.php?",i="https://www.thecocktaildb.com/api/json/v1/1/random.php";function l(e){return s.apply(this,arguments)}function s(){return(s=e(t)(e(n).mark((function t(r){var o,a;return e(n).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(c,"s=").concat(r));case 2:return o=e.sent,e.next=5,o.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function u(){return d.apply(this,arguments)}function d(){return(d=e(t)(e(n).mark((function t(){var r,o;return e(n).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(i));case 2:return r=e.sent,e.next=5,r.json();case 5:return o=e.sent,e.abrupt("return",o);case 7:case"end":return e.stop()}}),t)})))).apply(this,arguments)}var h=document.querySelector(".dropdown-content"),f=document.querySelector(".list-cocktail");function m(e){var t=document.querySelector(".div-icon-heart1"),r=document.querySelector(".div-icon-heart2"),n=t.href.baseVal,o=r.href.baseVal,a=e.map((function(e){var t=e.strDrinkThumb,r=e.strImageAttribution,a=e.strDrink,c=e.idDrink;return'\n        \n          <div class="gallery-item gallery__link">\n            <img class="gallery-item__img" src="'.concat(t,'" alt="').concat(r,'" loading="lazy" />\n            <div class="info">\n              <div class="info-item">\n                <p class="info-descr">').concat(a,'</p>\n              </div>\n              <div class="btn-item">\n                \n                  <button type="button" class="info-btn-descr info-btn js-learn-btn" data-modal-open="').concat(a,'" data-id="').concat(c,'">Learn more</button>\n                \n                \n                  <button type="button" data-id="').concat(c,'" class="add-descr add-favorite js_btn_fav_add" data-cocktail-name="').concat(a,'">\n                  Add to\n                  \n                \n                  <svg class="icon-svg svg-add" width="17" height="16">\n                    <use class="use-heart1" href=\'').concat(n,'\'></use>\n                  </svg>\n\n                \n                            \n                  </button>\n                   <button type="button" id=').concat(c,' class="add-descr add-favorite js_btn_fav_remove" data-cocktail-name-remove="').concat(a,'">\n                  Remove\n                    \n                  <svg class="icon-svg svg-remove" width="17" height="16">\n                    <use class="use-heart1" href=\'').concat(o,"'></use>\n                  </svg>\n                \n                  </button>\n               \n              </div>\n            </div>\n          </div>\n       \n      ")})).join("");document.querySelector(".gallery").insertAdjacentHTML("beforeend",a)}function v(e){e.target.classList.contains("js-learn-btn")&&(document.querySelector("[data-modal]").classList.toggle("is-hidden"),document.querySelector("[data-modal-close]").addEventListener("click",(function(e){document.querySelector("[data-modal]").classList.add("is-hidden"),console.log(e.target)})))}var p,y,g,b,w={searchForm:document.querySelector("#search-form"),searchFormMobile:document.querySelector("#mobile-search-form"),gallery:document.querySelector(".gallery"),loadMoreBtn:document.querySelector(".btn-load-more"),searchLetterCocktailMobile:document.querySelector(".js-letter-cocktail-1"),searchLetterCocktail:document.querySelector(".js-letter-cocktail-2"),modal:document.querySelector(".modal"),closeModalBtn:document.querySelector(".modal-close-btn"),modalCreateCocktail:document.querySelector(".modal-create-cocktail"),titleContainer2:document.querySelector(".title-2"),titleContainer1:document.querySelector(".title-1"),modalIngredient:document.querySelector(".modal-ingredient"),modalCreateIngredient:document.querySelector(".modal-create-ingredient"),boxContainerTheme:document.querySelector(".js-theme-box"),btnDarkTheme:document.querySelector(".js-dark-them"),btnTheme1:document.querySelector(".btn-them-1"),btnTheme2:document.querySelector(".btn-them-2"),arrow:document.querySelector(".arrow"),arrowMobile:document.querySelector(".arrow-mobile")};function k(){return(k=e(t)(e(n).mark((function t(r){var o,a,c,i,s,u,d;return e(n).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),w.gallery.innerHTML="",e.prev=2,o=r.currentTarget.searchQuery.value.trim(),e.next=6,l(o);case 6:for(m(e.sent.drinks),a=document.querySelectorAll(".js_btn_fav_remove"),c=!0,i=!1,s=void 0,e.prev=10,u=a[Symbol.iterator]();!(c=(d=u.next()).done);c=!0)d.value.style.display="none";e.next=18;break;case 14:e.prev=14,e.t0=e.catch(10),i=!0,s=e.t0;case 18:e.prev=18,e.prev=19,c||null==u.return||u.return();case 21:if(e.prev=21,!i){e.next=24;break}throw s;case 24:return e.finish(21);case 25:return e.finish(18);case 26:e.next=31;break;case 28:e.prev=28,e.t1=e.catch(2),console.log(e.t1);case 31:case"end":return e.stop()}}),t,null,[[2,28],[10,14,18,26],[19,,21,25]])})))).apply(this,arguments)}function L(){return(L=e(t)(e(n).mark((function t(r){var o,a,c,i,s,u,d;return e(n).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),w.gallery.innerHTML="",e.prev=2,o=r.currentTarget.searchQuery.value.trim(),e.next=6,l(o);case 6:for(m(e.sent.drinks),a=document.querySelectorAll(".js_btn_fav_remove"),c=!0,i=!1,s=void 0,e.prev=10,u=a[Symbol.iterator]();!(c=(d=u.next()).done);c=!0)d.value.style.display="none";e.next=18;break;case 14:e.prev=14,e.t0=e.catch(10),i=!0,s=e.t0;case 18:e.prev=18,e.prev=19,c||null==u.return||u.return();case 21:if(e.prev=21,!i){e.next=24;break}throw s;case 24:return e.finish(21);case 25:return e.finish(18);case 26:e.next=31;break;case 28:e.prev=28,e.t1=e.catch(2),console.log(e.t1);case 31:case"end":return e.stop()}}),t,null,[[2,28],[10,14,18,26],[19,,21,25]])})))).apply(this,arguments)}function S(e){w.modalCreateCocktail.innerHTML="";e.target.getAttribute("data-id"),e.target.dataset.id}function x(e){return _.apply(this,arguments)}function _(){return(_=e(t)(e(n).mark((function t(r){var o,a,c,i,s,u,d,h;return e(n).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w.gallery.innerHTML="",e.prev=1,o=r.target.textContent,e.next=5,l(o);case 5:for(null===(a=e.sent).drinks?(w.titleContainer1.style.display="none",w.gallery.innerHTML="<div><h2 class='title-error'>Sorry, we didn't find any cocktail for you</h2><div class='containerImg'></div></div >"):m(a.drinks),c=document.querySelectorAll(".js_btn_fav_remove"),i=!0,s=!1,u=void 0,e.prev=9,d=c[Symbol.iterator]();!(i=(h=d.next()).done);i=!0)h.value.style.display="none";e.next=17;break;case 13:e.prev=13,e.t0=e.catch(9),s=!0,u=e.t0;case 17:e.prev=17,e.prev=18,i||null==d.return||d.return();case 20:if(e.prev=20,!s){e.next=23;break}throw u;case 23:return e.finish(20);case 24:return e.finish(17);case 25:e.next=30;break;case 27:e.prev=27,e.t1=e.catch(1),console.log(e.t1);case 30:case"end":return e.stop()}}),t,null,[[1,27],[9,13,17,25],[18,,20,24]])})))).apply(this,arguments)}function E(){return(E=e(t)(e(n).mark((function t(r){var o,c,i,l,s;return e(n).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=r.target.closest(".gallery-item"),!r.target.classList.contains("js_btn_fav_add")){e.next=5;break}o.children[1].children[1].children[2].style.display="flex",o.children[1].children[1].children[1].style.display="none",e.next=19;break;case 5:if(!r.target.classList.contains("js_btn_fav_remove")){e.next=19;break}return c=JSON.parse(localStorage.getItem("FavoriteCocktails")),console.log(c),i=r.target.getAttribute("data-cocktail-name-remove"),e.next=11,c.findIndex((function(e){return e.strDrink===i}));case 11:l=e.sent,c.splice(l,1),a("FavoriteCocktails",c),s=o.children[1].children[1].children[2],console.log(s),s.style.display="none",o.children[1].children[1].children[1].style.display="flex";case 19:case"end":return e.stop()}}),t)})))).apply(this,arguments)}!function(){var e=document.querySelector(".menu__icon");if(e){var t=document.querySelector(".mobile-menu");e.addEventListener("click",(function(r){document.body.classList.toggle("_lock"),e.classList.toggle("_active"),t.classList.toggle("_active")}))}}(),p=document.querySelector(".mobile-search-header__btn"),y=document.querySelector(".menu__icon"),g=document.querySelector(".mobile-menu"),p.addEventListener("click",(function(e){document.body.classList.remove("_lock"),y.classList.remove("_active"),g.classList.remove("_active")})),b="ABCDEFGHIJKLMN0PQRSTUVWXYZ1234567890".split("").map((function(e){return'\n      <span href="#">'.concat(e,"</span>")})).join(""),h.insertAdjacentHTML("beforeend",b),function(){var e="ABCDEFGHIJKLMN0PQRSTUVWXYZ1234567890".split("").map((function(e){return'\n      <li class="list-cocktail__item" href="#">\n        <button class="list-cocktail__btn">'.concat(e,"</button>\n      </li>")})).join("");f.insertAdjacentHTML("beforeend",e)}(),window.addEventListener("load",(function(){u().then((function(e){m(e.drinks);var t=document.querySelectorAll(".js_btn_fav_remove"),r=!0,n=!1,o=void 0;try{for(var a,c=t[Symbol.iterator]();!(r=(a=c.next()).done);r=!0){a.value.style.display="none"}}catch(e){n=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(n)throw o}}}))})),w.searchForm.addEventListener("submit",(function(e){return k.apply(this,arguments)})),w.searchFormMobile.addEventListener("submit",(function(e){return L.apply(this,arguments)})),w.searchLetterCocktailMobile.addEventListener("click",x),w.searchLetterCocktail.addEventListener("click",x),w.gallery.addEventListener("click",(function(e){return E.apply(this,arguments)})),w.gallery.addEventListener("click",v),w.modal.addEventListener("click",v),w.gallery.addEventListener("click",S),w.gallery.addEventListener("click",S),w.modal.addEventListener("click",(function(e){w.modalCreateIngredient.innerHTML="";var t=e.target.dataset.name;console.log(t),fetchNameIngredientCocktail(t).then((function(e){console.log(e),createIngredientCard(e.ingredients)}))})),w.arrow.addEventListener("click",(function(){var e=document.querySelector(".favorite-wrapper"),t=document.querySelector(".menu-arrow");e.classList.toggle("open"),t.classList.toggle("active")})),w.arrowMobile.addEventListener("click",(function(){var e=document.querySelector(".mobile-favorite-list"),t=document.querySelector(".arrow-mobile");e.classList.toggle("open"),t.classList.toggle("active")})),w.titleContainer2.style.display="none",null===JSON.parse(localStorage.getItem("favorites"))||JSON.parse(localStorage.getItem("favorites")),document.addEventListener("DOMContentLoaded",(function(){localStorage.getItem("theme")?document.documentElement.setAttribute("theme","dark"):document.documentElement.removeAttribute("theme")})),document.querySelector("#toggle-theme").addEventListener("click",(function(){document.documentElement.hasAttribute("theme")?(document.documentElement.removeAttribute("theme"),localStorage.removeItem("theme")):(document.documentElement.setAttribute("theme","dark"),localStorage.setItem("theme","black"))}));var q,j=localStorage.getItem("theme");q=document.querySelector("#highload1"),"black"===j&&(q.classList.remove("checkboxBtn"),q.classList.add("checkboxBtnOrange"));var A={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return A.Android()||A.BlackBerry()||A.iOS()||A.Opera()||A.Windows()}},O=document.querySelector("body");A.any()?O.classList.add("touch"):O.classList.add("mouse")}();
//# sourceMappingURL=index.2184cc51.js.map