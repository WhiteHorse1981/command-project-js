function n(n,e,t,i){Object.defineProperty(n,e,{get:t,set:i,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},o=e.parcelRequiree9a5;null==o&&((o=function(n){if(n in t)return t[n].exports;if(n in i){var e=i[n];delete i[n];var o={id:n,exports:{}};return t[n]=o,e.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+n+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(n,e){i[n]=e},e.parcelRequiree9a5=o),o.register("lg1y7",(function(e,t){function i(n,e){if(null===localStorage.getItem(n)){let t=[];t.push(e),localStorage.setItem(n,JSON.stringify(t))}else{let t=JSON.parse(localStorage.getItem(n));t.push(e),localStorage.setItem(n,JSON.stringify(t))}}function o(n,e){localStorage.setItem(n,JSON.stringify(e))}n(e.exports,"saveToLS",(function(){return i})),n(e.exports,"removeFromLS",(function(){return o}))})),o.register("2L5NI",(function(e,t){n(e.exports,"callMobileMenu",(function(){return i})),n(e.exports,"disableMobileMenuSearch",(function(){return o}));const i=()=>{const n=document.querySelector(".menu__icon");if(n){const e=document.querySelector(".mobile-menu");n.addEventListener("click",(function(t){document.body.classList.toggle("_lock"),n.classList.toggle("_active"),e.classList.toggle("_active")}))}},o=()=>{const n=document.querySelector(".mobile-search-header__btn"),e=document.querySelector(".menu__icon"),t=document.querySelector(".mobile-menu");n.addEventListener("click",(function(n){document.body.classList.remove("_lock"),e.classList.remove("_active"),t.classList.remove("_active")}))}})),o.register("1wewW",(function(e,t){function i(n){if(n.target.classList.contains("js-learn-btn")){document.querySelector("[data-modal]").classList.toggle("is-hidden");const n=document.documentElement.style.getPropertyValue("--scroll-y");document.body.style.top=`-${n}`,document.querySelector("[data-modal-close]").addEventListener("click",(()=>{const n=document.body,e=n.style.top;n.style.position="",n.style.top="",window.scrollTo(0,-1*parseInt(e||"0")),document.querySelector("[data-modal]").classList.add("is-hidden")})),document.querySelector("[data-modal-close-backdrop]").addEventListener("click",(n=>{if(n.currentTarget===n.target){const n=document.body,e=n.style.top;n.style.position="",n.style.top="",window.scrollTo(0,-1*parseInt(e||"0")),document.querySelector("[data-modal]").classList.add("is-hidden")}})),document.addEventListener("keydown",(function(n){if("Escape"===n.key){const n=document.body,e=n.style.top;n.style.position="",n.style.top="",window.scrollTo(0,-1*parseInt(e||"0")),document.querySelector("[data-modal]").classList.add("is-hidden")}}))}}function o(n){if(n.target.classList.contains("js-btn-modal-ingredient")){document.querySelector("[data-modal-ingredient]").classList.toggle("is-hidden");const n=document.documentElement.style.getPropertyValue("--scroll-y");document.body.style.top=`-${n}`,document.querySelector("[data-modal-ingredient-close]").addEventListener("click",(()=>{const n=document.body,e=n.style.top;n.style.position="",n.style.top="",window.scrollTo(0,-1*parseInt(e||"0")),document.querySelector("[data-modal-ingredient]").classList.add("is-hidden")})),document.querySelector("[data-modal-ingr-close-backdrop]").addEventListener("click",(n=>{if(n.currentTarget===n.target){const n=document.body,e=n.style.top;n.style.position="",n.style.top="",window.scrollTo(0,-1*parseInt(e||"0")),document.querySelector("[data-modal-ingredient]").classList.add("is-hidden")}})),document.addEventListener("keydown",(function(n){if("Escape"===n.key){const n=document.body,e=n.style.top;n.style.position="",n.style.top="",window.scrollTo(0,-1*parseInt(e||"0")),document.querySelector("[data-modal-ingredient]").classList.add("is-hidden")}}))}}n(e.exports,"openModalWindow",(function(){return i})),n(e.exports,"openModalIngredient",(function(){return o})),window.addEventListener("scroll",(()=>{document.documentElement.style.setProperty("--scroll-y",`${window.scrollY}px`)}))})),o.register("7o6rk",(function(e,t){n(e.exports,"fetchCocktails",(function(){return o})),n(e.exports,"fetchLetterCocktails",(function(){return a})),n(e.exports,"fetchRandomCocktails",(function(){return d})),n(e.exports,"fetchIngredientCocktails",(function(){return s})),n(e.exports,"fetchNameIngredientCocktail",(function(){return r}));const i="https://www.thecocktaildb.com/api/json/v1/1/search.php?";async function o(n){const e=await fetch(`${i}s=${n}`);return await e.json()}async function a(n){const e=await fetch(`${i}f=${n}`);return await e.json()}async function d(){const n=await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php");return await n.json()}async function s(n){const e=await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${n}`);return await e.json()}async function r(n){const e=await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${n}`);return await e.json()}})),o.register("fw9vo",(function(e,t){n(e.exports,"createCocktail",(function(){return a})),n(e.exports,"createIngredientCocktail",(function(){return d})),n(e.exports,"createIngredientCard",(function(){return s})),n(e.exports,"createIngredient",(function(){return r})),n(e.exports,"createMarkup",(function(){return l})),n(e.exports,"createMarkupDesktop",(function(){return c}));const i=document.querySelector(".dropdown-content"),o=document.querySelector(".list-cocktail");function a(n){const e=document.querySelector(".div-icon-heart1"),t=document.querySelector(".div-icon-heart2"),i=e.href.baseVal,o=t.href.baseVal,a=n.map((n=>{const{strDrinkThumb:e,strImageAttribution:t,strDrink:a,idDrink:d}=n;return`\n        \n          <div id="${d}" class="gallery-item gallery__link">\n            <img class="gallery-item__img" src="${e}" alt="${t}" loading="lazy" />\n            <div class="info">\n              <div class="info-item">\n                <p class="info-descr">${a}</p>\n              </div>\n              <div class="btn-item">\n                \n                  <button type="button" class="info-btn-descr info-btn js-learn-btn" data-modal-open="${a}" data-id="${d}">Learn more</button>\n                \n                \n                  <button type="button" class="add-descr add-favorite js_btn_fav_add" data-cocktail-name="${a}">\n                  Add to\n                  \n                \n                  <svg class="icon-svg svg-add" width="17" height="16">\n                    <use class="use-heart1" href='${i}'></use>\n                  </svg>\n\n                \n                            \n                  </button>\n                   <button type="button" id=${d} class="add-descr add-favorite js_btn_fav_remove" data-cocktail-name-remove="${a}">\n                  Remove\n                    \n                  <svg class="icon-svg svg-remove" width="17" height="16">\n                    <use class="use-heart1" href='${o}'></use>\n                  </svg>\n                \n                  </button>\n               \n              </div>\n            </div>\n          </div>\n       \n      `})).join("");document.querySelector(".gallery").insertAdjacentHTML("beforeend",a)}function d(n){const e=n.map((n=>{const{strDrinkThumb:e,strImageAttribution:t,strDrink:i,strInstructions:o,strIngredient1:a,strIngredient2:d,strIngredient3:s,strIngredient4:r,strIngredient5:l,strIngredient6:c,strIngredient7:m,strIngredient8:u,strIngredient9:g,strIngredient10:b,strIngredient11:f,strIngredient12:p,strIngredient13:v,strIngredient14:h,strIngredient15:y}=n;return`\n    <div class="modal-container-mobile">\n        <h2 class="modal-container__header">${i}</h2>\n        <div class="modal-container__descr">\n          <h3 class="modal-container__descr-header">Instractions:</h3>\n          <p class="info-descr">${o}</p>\n        </div>\n        <img class="modal-container__img" src="${e}" alt="${t}" loading="lazy"/>\n        <div class="modal-ingredients">\n          <h3 class="modal-ingredients__header">INGREDIENTS</h3>\n          <h4 class="modal-ingredients__subheader">Per cocktail:</h4>\n          <ul class="modal-ingredients__list">\n            <li class="modal-ingredient-btn js-btn-modal-ingredient" data-ingredient-name="${a}">\n                ${a}\n              </li>\n              <li class="modal-ingredient-btn js-btn-modal-ingredient" data-ingredient-name="${d}">\n                ${d}\n              </li>\n              <li a class="modal-ingredient-btn js-btn-modal-ingredient" data-ingredient-name="${s}">\n                ${s}\n              </li>\n              <li class="modal-ingredient-btn js-btn-modal-ingredient" data-ingredient-name="${r}">\n                ${r}\n              </li>\n              <li class="modal-ingredient-btn js-btn-modal-ingredient" data-ingredient-name="${l}">\n                ${l}\n              </li>\n              <li class="modal-ingredient-btn js-btn-modal-ingredient" data-ingredient-name="${c}">\n                ${c}\n              </li>\n              <li class="modal-ingredient-btn js-btn-modal-ingredient" data-ingredient-name="${m}">\n                ${m}\n              </li>\n              <li class="modal-ingredient-btn js-btn-modal-ingredient" data-ingredient-name="${u}">\n                ${u}\n              </li>\n              <li class="modal-ingredient-btn js-btn-modal-ingredient" data-ingredient-name="${g}">\n                ${g}\n              </li>\n              <li class="modal-ingredient-btn js-btn-modal-ingredient" data-ingredient-name="${b}">\n                ${b}\n              </li>\n              <li class="modal-ingredient-btn js-btn-modal-ingredient" data-ingredient-name="${f}">\n                ${f}\n              </li>\n              <li class="modal-ingredient-btn js-btn-modal-ingredient" data-ingredient-name="${p}">\n                ${p}\n              </li>\n              <li class="modal-ingredient-btn js-btn-modal-ingredient" data-ingredient-name="${v}">\n                ${v}\n              </li>\n              <li class="modal-ingredient-btn js-btn-modal-ingredient" data-ingredient-name="${h}">\n                ${h}\n              </li>\n              <li class="modal-ingredient-btn js-btn-modal-ingredient" data-ingredient-name="${y}">\n                ${y}\n              </li>\n          </ul>\n      </div>\n      <div class="btn-bottom-wrapper-mobile">\n        <button type="button" class="add-favorite modal-btn js-add-to-favorite js-add-to-favorite-2">Add To Favorite</button>\n        <button type="button" class="add-favorite modal-btn js-remove-from-favorite">Remove from favorite</button>\n      </div>\n    </div>\n\n    <div class="modal-container">\n      <div class="modal-container-flex">      \n        <img class="modal-img" src="${e}" alt="${t}" loading="lazy"/>\n        <div class="modal-ingredients">\n          <h2 class="modal-container__header">${i}</h2>\n          <h3 class="modal-ingredients__header">INGREDIENTS</h3>\n          <h4 class="modal-ingredients__subheader">Per cocktail:</h4>\n          <ul class="modal-ingredients__list">\n            <li class="modal-ingredient-btn js-btn-modal-ingredient" data-ingredient-name="${a}">\n              ${a}\n            </li>\n            <li class="modal-ingredient-btn js-btn-modal-ingredient" data-ingredient-name="${d}">\n              ${d}\n            </li>\n            <li a class="modal-ingredient-btn js-btn-modal-ingredient" data-ingredient-name="${s}">\n              ${s}\n            </li>\n            <li class="modal-ingredient-btn js-btn-modal-ingredient" data-ingredient-name="${r}">\n              ${r}\n            </li>\n            <li class="modal-ingredient-btn js-btn-modal-ingredient" data-ingredient-name="${l}">\n              ${l}\n            </li>\n            <li class="modal-ingredient-btn js-btn-modal-ingredient" data-ingredient-name="${c}">\n              ${c}\n            </li>\n            <li class="modal-ingredient-btn js-btn-modal-ingredient" data-ingredient-name="${m}">\n              ${m}\n            </li>\n            <li class="modal-ingredient-btn js-btn-modal-ingredient" data-ingredient-name="${u}">\n              ${u}\n            </li>\n            <li class="modal-ingredient-btn js-btn-modal-ingredient" data-ingredient-name="${g}">\n              ${g}\n            </li>\n            <li class="modal-ingredient-btn js-btn-modal-ingredient" data-ingredient-name="${b}">\n              ${b}\n            </li>\n            <li class="modal-ingredient-btn js-btn-modal-ingredient" data-ingredient-name="${f}">\n              ${f}\n            </li>\n            <li class="modal-ingredient-btn js-btn-modal-ingredient" data-ingredient-name="${p}">\n              ${p}\n            </li>\n            <li class="modal-ingredient-btn js-btn-modal-ingredient" data-ingredient-name="${v}">\n              ${v}\n            </li>\n            <li class="modal-ingredient-btn js-btn-modal-ingredient" data-ingredient-name="${h}">\n              ${h}\n            </li>\n            <li class="modal-ingredient-btn js-btn-modal-ingredient" data-ingredient-name="${y}">\n              ${y}\n            </li>\n          </ul>\n        </div>\n      </div>\n      <div class="modal-container__descr">\n          <h3 class="modal-container__descr-header">Instractions:</h3>\n          <p class="info-descr">${o}</p>\n      </div>\n      <div class="btn-bottom-wrapper">\n        <button type="button" class="add-favorite modal-btn js-add-to-favorite js-add-to-favorite-2">Add To Favorite</button>\n        <button type="button" class="add-favorite modal-btn js-remove-from-favorite">Remove from favorite</button>\n      </div>\n    </div>   \n      `})).join("");document.querySelector(".modal-create-cocktail").insertAdjacentHTML("beforeend",e)}function s(n){const e=n.map((n=>{const{strIngredient:e,strType:t,strDescription:i,strAlcohol:o}=n;return`\n    <div class="ingredient-backdrop is-hidden modal-container-ingredient">\n      <div class="ingredient-modal">\n        <h3 class="ingredient-title">${e}</h3>\n        <h4 class="ingredient-subtitle">${t}</h4>\n        <div class="horiontal-line"></div>\n        <p class="ingredient-description">${i}</p>\n        <p class="ingredient-alcohol">Alcohol - ${o}</p>\n        <div class="btn-bottom-wrapper">\n          <button type="button" class="add-favorite modal-btn js-add-to-favorite-ingredient js-add-to-favorite-ingredient-2">Add To Favorite</button>\n          <button type="button" class="add-favorite modal-btn js-remove-from-favorite-ingredient js-remove-from-favorite-ingredient-2">Remove from favorite</button>\n        </div>\n      </div>\n    </div>\n      `})).join("");document.querySelector(".modal-create-ingredient").insertAdjacentHTML("beforeend",e)}function r(n){const e=document.querySelector(".div-icon-heart1"),t=document.querySelector(".div-icon-heart2"),i=e.href.baseVal,o=t.href.baseVal,a=n.map((n=>{const{strIngredient:e,strType:t}=n;return`\n    <div class="ingredient-box">\n      <div class="ingredient-box-second">\n        <h3 class="ingredient-title-card">${e}</h3>\n        <h4 class="subtitle-ingredient">${t}</h4>\n        <div class="btn-bottom-wrapper">\n          <button type="button" class="info-btn-descr info-btn js-learn-btn js-btn-modal-ingredient">Learn more</button>\n          <button type="button" class="add-descr add-favorite modal-btn js-add-to-favorite-ingredient">\n            Add To\n            <svg class="icon-svg svg-add" width="17" height="16">\n              <use class="use-heart1" href='${i}'></use>\n            </svg>\n          </button>\n          <button type="button" class="add-descr add-favorite js-remove-from-favorite-ingredient js-remove-from-favorite-ingredient-2">\n            Remove\n            <svg class="icon-svg svg-remove" width="17" height="16">\n              <use class="use-heart1" href='${o}'></use>\n            </svg>\n          </button>\n        </div>\n      </div>\n    </div>\n      `})).join("");document.querySelector(".gallery").insertAdjacentHTML("beforeend",a)}function l(){const n="ABCDEFGHIJKLMN0PQRSTUVWXYZ1234567890".split("").map((n=>`\n      <span href="#">${n}</span>`)).join("");i.insertAdjacentHTML("beforeend",n)}function c(){const n="ABCDEFGHIJKLMN0PQRSTUVWXYZ1234567890".split("").map((n=>`\n      <li class="list-cocktail__item" href="#">\n        <button class="list-cocktail__btn">${n}</button>\n      </li>`)).join("");o.insertAdjacentHTML("beforeend",n)}}));
//# sourceMappingURL=ingredient.126119fb.js.map
