!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequiree9a5;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},t.parcelRequiree9a5=o),o.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return n.default(e)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}})),o.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}})),o.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),o.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return n.default(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n.default(e,t)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}}));var a={};Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return c.default(e)||i.default(e)||u.default(e)||l.default()};var c=s(o("kMC0W")),i=s(o("7AJDX")),l=s(o("8CtQK")),u=s(o("auk6i"));function s(e){return e&&e.__esModule?e:{default:e}}function d(e){var t=localStorage.getItem(e);try{return JSON.parse(t)}catch(e){return t}}document.querySelector(".dropdown-content"),document.querySelector(".list-cocktail");function f(e){var t=document.querySelector(".div-icon-heart1"),r=document.querySelector(".div-icon-heart2"),n=t.href.baseVal,o=r.href.baseVal,a=e.map((function(e){var t=e.strDrinkThumb,r=e.strImageAttribution,a=e.strDrink,c=e.idDrink;return'\n        \n          <div class="gallery-item gallery__link">\n            <img class="gallery-item__img" src="'.concat(t,'" alt="').concat(r,'" loading="lazy" />\n            <div class="info">\n              <div class="info-item">\n                <p class="info-descr">').concat(a,'</p>\n              </div>\n              <div class="btn-item">\n                \n                  <button type="button" class="info-btn-descr info-btn js-learn-btn" data-modal-open="').concat(a,'" data-id="').concat(c,'">Learn more</button>\n                \n                \n                  <button type="button" data-id="').concat(c,'" class="add-descr add-favorite js_btn_fav_add" data-cocktail-name="').concat(a,'">\n                  Add to\n                  \n                \n                  <svg class="icon-svg svg-add" width="17" height="16">\n                    <use class="use-heart1" href=\'').concat(n,'\'></use>\n                  </svg>\n\n                \n                            \n                  </button>\n                   <button type="button" id=').concat(c,' class="add-descr add-favorite js_btn_fav_remove" data-cocktail-name-remove="').concat(a,'">\n                  Remove\n                    \n                  <svg class="icon-svg svg-remove" width="17" height="16">\n                    <use class="use-heart1" href=\'').concat(o,"'></use>\n                  </svg>\n                \n                  </button>\n               \n              </div>\n            </div>\n          </div>\n       \n      ")})).join("");document.querySelector(".gallery").insertAdjacentHTML("beforeend",a)}var m={searchForm:document.querySelector("#search-form"),gallery:document.querySelector(".gallery"),loadMoreBtn:document.querySelector(".btn-load-more"),searchLetterCocktailMobile:document.querySelector(".js-letter-cocktail-1"),searchLetterCocktail:document.querySelector(".js-letter-cocktail-2"),favoritCocktails:document.querySelector(".favorit"),btnLS:document.querySelector(".add-descr"),titleContainer1:document.querySelector(".title-1"),arrow:document.querySelector(".arrow"),arrowMobile:document.querySelector(".arrow-mobile")};m.searchForm.addEventListener("submit",(function(e){e.preventDefault()})),m.titleContainer1.style.display="none",m.gallery.addEventListener("click",(function(e){var t=e.target.getAttribute("data-cocktail-name-remove"),r=v.findIndex((function(e){return e.strDrink===t}));v.splice(r,1),m.gallery.innerHTML="",f(v),n="FavoriteCocktails",o=v,a=JSON.parse(localStorage.getItem(n)),a.splice(o,1),localStorage.setItem(n,JSON.stringify(a));var n,o,a;var c=document.querySelectorAll(".js_btn_fav_add"),i=!0,l=!1,u=void 0;try{for(var s,d=c[Symbol.iterator]();!(i=(s=d.next()).done);i=!0){s.value.style.display="none"}}catch(e){l=!0,u=e}finally{try{i||null==d.return||d.return()}finally{if(l)throw u}}})),m.arrow.addEventListener("click",(function(){var e=document.querySelector(".favorite-wrapper"),t=document.querySelector(".menu-arrow");e.classList.toggle("open"),t.classList.toggle("active")})),m.arrowMobile.addEventListener("click",(function(){var e=document.querySelector(".mobile-favorite-list"),t=document.querySelector(".arrow-mobile");e.classList.toggle("open"),t.classList.toggle("active")})),function(){var e=document.querySelector(".menu__icon");if(e){var t=document.querySelector(".mobile-menu");e.addEventListener("click",(function(r){document.body.classList.toggle("_lock"),e.classList.toggle("_active"),t.classList.toggle("_active")}))}}(),window.addEventListener("load",(function(){if(v&&0!==v.length){var t=d("FavoriteCocktails").map((function(e){return fetch("".concat(BASE_URL,"s=").concat(e)).then((function(e){return e.json()}))}));Promise.all(t).then((function(t){var r;t=null==t?void 0:t.map((function(e){return e.drinks[0]})),(r=y).push.apply(r,e(a)(t)),f(y);var n=document.querySelectorAll(".js_btn_fav_add"),o=!0,c=!1,i=void 0;try{for(var l,u=n[Symbol.iterator]();!(o=(l=u.next()).done);o=!0){l.value.style.display="none"}}catch(e){c=!0,i=e}finally{try{o||null==u.return||u.return()}finally{if(c)throw i}}}))}else m.gallery.innerHTML="<div class='container'><h2 class='title-favorite-cocktails'>Sorry, you haven't chosen your favorite cocktails yet.</h2></div >"})),BASE_URL="https://www.thecocktaildb.com/api/json/v1/1/search.php?";var v=JSON.parse(localStorage.getItem("FavoriteCocktails"));console.log(v);var y=[];document.addEventListener("DOMContentLoaded",(function(){localStorage.getItem("theme")?document.documentElement.setAttribute("theme","dark"):document.documentElement.removeAttribute("theme")})),document.querySelector("#toggle-theme").addEventListener("click",(function(){document.documentElement.hasAttribute("theme")?(document.documentElement.removeAttribute("theme"),localStorage.removeItem("theme")):(document.documentElement.setAttribute("theme","dark"),localStorage.setItem("theme","black"))}));var g,p=localStorage.getItem("theme");g=document.querySelector("#highload1"),"black"===p&&(g.classList.remove("checkboxBtn"),g.classList.add("checkboxBtnOrange"));var h={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return h.Android()||h.BlackBerry()||h.iOS()||h.Opera()||h.Windows()}},b=document.querySelector("body");h.any()?b.classList.add("touch"):b.classList.add("mouse")}();
//# sourceMappingURL=favorites.6c03e154.js.map
