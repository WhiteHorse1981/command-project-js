function e(e,t){if(null===localStorage.getItem(e)){let n=[];n.push(t),localStorage.setItem(e,JSON.stringify(n))}else{let n=JSON.parse(localStorage.getItem(e));n.push(t),localStorage.setItem(e,JSON.stringify(n))}}function t(e,t){let n=JSON.parse(localStorage.getItem(e));n.splice(t,1),localStorage.setItem(e,JSON.stringify(n))}async function n(e){const t=await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${e}`);return await t.json()}async function o(){const e=await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php");return await e.json()}const r=document.querySelector(".dropdown-content"),c=document.querySelector(".list-cocktail");function a(e){const t=document.querySelector(".div-icon-heart1"),n=document.querySelector(".div-icon-heart2"),o=t.href.baseVal,r=n.href.baseVal,c=e.map((e=>{const{strDrinkThumb:t,strImageAttribution:n,strDrink:c,idDrink:a}=e;return`\n        \n          <div class="gallery-item gallery__link">\n            <img class="gallery-item__img" src="${t}" alt="${n}" loading="lazy" />\n            <div class="info">\n              <div class="info-item">\n                <p class="info-descr">${c}</p>\n              </div>\n              <div class="btn-item">\n                \n                  <button type="button" class="info-btn-descr info-btn js-learn-btn" data-modal-open="${c}" data-id="${a}">Learn more</button>\n                \n                \n                  <button type="button" data-id="${a}" class="add-descr add-favorite js_btn_fav_add" data-cocktail-name="${c}">\n                  Add to\n                  \n                \n                  <svg class="icon-svg svg-add" width="17" height="16">\n                    <use class="use-heart1" href='${o}'></use>\n                  </svg>\n\n                \n                            \n                  </button>\n                   <button type="button" id=${a} class="add-descr add-favorite js_btn_fav_remove" data-cocktail-name-remove="${c}">\n                  Remove\n                    \n                  <svg class="icon-svg svg-remove" width="17" height="16">\n                    <use class="use-heart1" href='${r}'></use>\n                  </svg>\n                \n                  </button>\n               \n              </div>\n            </div>\n          </div>\n       \n      `})).join("");document.querySelector(".gallery").insertAdjacentHTML("beforeend",c)}function l(e){if(e.target.classList.contains("js-learn-btn")){document.querySelector("[data-modal]").classList.toggle("is-hidden"),document.querySelector("[data-modal-close]").addEventListener("click",(e=>{document.querySelector("[data-modal]").classList.add("is-hidden"),console.log(e.target)}))}}const i={searchForm:document.querySelector("#search-form"),searchFormMobile:document.querySelector("#mobile-search-form"),gallery:document.querySelector(".gallery"),loadMoreBtn:document.querySelector(".btn-load-more"),searchLetterCocktailMobile:document.querySelector(".js-letter-cocktail-1"),searchLetterCocktail:document.querySelector(".js-letter-cocktail-2"),modal:document.querySelector(".modal"),closeModalBtn:document.querySelector(".modal-close-btn"),modalCreateCocktail:document.querySelector(".modal-create-cocktail"),titleContainer2:document.querySelector(".title-2"),titleContainer1:document.querySelector(".title-1"),modalIngredient:document.querySelector(".modal-ingredient"),modalCreateIngredient:document.querySelector(".modal-create-ingredient"),boxContainerTheme:document.querySelector(".js-theme-box"),btnDarkTheme:document.querySelector(".js-dark-them"),btnTheme1:document.querySelector(".btn-them-1"),btnTheme2:document.querySelector(".btn-them-2"),arrow:document.querySelector(".arrow"),arrowMobile:document.querySelector(".arrow-mobile")};function s(e){i.modalCreateCocktail.innerHTML="";e.target.getAttribute("data-id");const{id:t}=e.target.dataset}async function d(e){i.gallery.innerHTML="";try{const t=e.target.textContent,o=await n(t);null===o.drinks?(i.titleContainer1.style.display="none",i.gallery.innerHTML="<div><h2 class='title-error'>Sorry, we didn't find any cocktail for you</h2><div class='containerImg'></div></div >"):a(o.drinks);const r=document.querySelectorAll(".js_btn_fav_remove");for(let e of r)e.style.display="none"}catch(e){console.log(e)}}let u;(()=>{const e=document.querySelector(".menu__icon");if(e){const t=document.querySelector(".mobile-menu");e.addEventListener("click",(function(n){document.body.classList.toggle("_lock"),e.classList.toggle("_active"),t.classList.toggle("_active")}))}})(),(()=>{const e=document.querySelector(".mobile-search-header__btn"),t=document.querySelector(".menu__icon"),n=document.querySelector(".mobile-menu");e.addEventListener("click",(function(e){document.body.classList.remove("_lock"),t.classList.remove("_active"),n.classList.remove("_active")}))})(),function(){const e="ABCDEFGHIJKLMN0PQRSTUVWXYZ1234567890".split("").map((e=>`\n      <span href="#">${e}</span>`)).join("");r.insertAdjacentHTML("beforeend",e)}(),function(){const e="ABCDEFGHIJKLMN0PQRSTUVWXYZ1234567890".split("").map((e=>`\n      <li class="list-cocktail__item" href="#">\n        <button class="list-cocktail__btn">${e}</button>\n      </li>`)).join("");c.insertAdjacentHTML("beforeend",e)}(),window.addEventListener("load",(()=>{o().then((e=>{a(e.drinks);const t=document.querySelectorAll(".js_btn_fav_remove");for(let e of t)e.style.display="none"}))})),i.searchForm.addEventListener("submit",(async function(e){e.preventDefault(),i.gallery.innerHTML="";try{const t=e.currentTarget.searchQuery.value.trim();a((await n(t)).drinks);const o=document.querySelectorAll(".js_btn_fav_remove");for(let e of o)e.style.display="none"}catch(e){console.log(e)}})),i.searchFormMobile.addEventListener("submit",(async function(e){e.preventDefault(),i.gallery.innerHTML="";try{const t=e.currentTarget.searchQuery.value.trim();a((await n(t)).drinks);const o=document.querySelectorAll(".js_btn_fav_remove");for(let e of o)e.style.display="none"}catch(e){console.log(e)}})),i.searchLetterCocktailMobile.addEventListener("click",d),i.searchLetterCocktail.addEventListener("click",d),i.gallery.addEventListener("click",(async function(o){const r=o.target.closest(".gallery-item");if(o.target.classList.contains("js_btn_fav_add")){cocktailName=r.children[1].children[0].children[0].textContent,console.log(cocktailName);let t={...(await n(cocktailName)).drinks[0]};u.push(t),e("FavoriteCocktails",u);r.children[1].children[1].children[2].style.display="flex";r.children[1].children[1].children[1].style.display="none"}else if(o.target.classList.contains("js_btn_fav_remove")){let e=JSON.parse(localStorage.getItem("FavoriteCocktails"));console.log(e);const n=o.target.getAttribute("data-cocktail-name-remove"),c=await e.findIndex((e=>e.strDrink===n));e.splice(c,1),t("FavoriteCocktails",e);const a=r.children[1].children[1].children[2];console.log(a),a.style.display="none";r.children[1].children[1].children[1].style.display="flex"}})),i.gallery.addEventListener("click",l),i.modal.addEventListener("click",l),i.gallery.addEventListener("click",s),i.gallery.addEventListener("click",s),i.modal.addEventListener("click",(function(e){i.modalCreateIngredient.innerHTML="";const{name:t}=e.target.dataset;console.log(t),fetchNameIngredientCocktail(t).then((e=>{console.log(e),createIngredientCard(e.ingredients)}))})),i.arrow.addEventListener("click",(function(){const e=document.querySelector(".favorite-wrapper"),t=document.querySelector(".menu-arrow");e.classList.toggle("open"),t.classList.toggle("active")})),i.arrowMobile.addEventListener("click",(function(){const e=document.querySelector(".mobile-favorite-list"),t=document.querySelector(".arrow-mobile");e.classList.toggle("open"),t.classList.toggle("active")})),i.titleContainer2.style.display="none",u=null===JSON.parse(localStorage.getItem("favorites"))?[]:JSON.parse(localStorage.getItem("favorites")),document.addEventListener("DOMContentLoaded",(()=>{localStorage.getItem("theme")?document.documentElement.setAttribute("theme","dark"):document.documentElement.removeAttribute("theme")})),document.querySelector("#toggle-theme").addEventListener("click",(function(){document.documentElement.hasAttribute("theme")?(document.documentElement.removeAttribute("theme"),localStorage.removeItem("theme")):(document.documentElement.setAttribute("theme","dark"),localStorage.setItem("theme","black"))}));const m=localStorage.getItem("theme");!function(){const e=document.querySelector("#highload1");"black"===m&&(e.classList.remove("checkboxBtn"),e.classList.add("checkboxBtnOrange"))}();let g={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return g.Android()||g.BlackBerry()||g.iOS()||g.Opera()||g.Windows()}},y=document.querySelector("body");g.any()?y.classList.add("touch"):y.classList.add("mouse");
//# sourceMappingURL=index.aebd8bf1.js.map