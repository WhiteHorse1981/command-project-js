function e(e,t){if(null===localStorage.getItem(e)){let n=[];n.push(t),localStorage.setItem(e,JSON.stringify(n))}else{let n=JSON.parse(localStorage.getItem(e));n.push(t),localStorage.setItem(e,JSON.stringify(n))}}async function t(e){const t=await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${e}`);return await t.json()}async function n(e){const t=await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${e}`);return await t.json()}async function o(){const e=await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php");return await e.json()}const r=document.querySelector(".dropdown-content"),a=document.querySelector(".list-cocktail");function c(e){const t=document.querySelector(".div-icon-heart1"),n=document.querySelector(".div-icon-heart2"),o=t.href.baseVal,r=n.href.baseVal,a=e.map((e=>{const{strDrinkThumb:t,strImageAttribution:n,strDrink:a,idDrink:c}=e;return`\n        <a class="gallery__link">\n          <div class="gallery-item">\n            <img class="gallery-item__img" src="${t}" alt="${n}" loading="lazy" />\n            <div class="info">\n              <div class="info-item">\n                <p class="info-descr">${a}</p>\n              </div>\n              <div class="btn-item">\n                \n                  <button type="button" class="info-btn-descr info-btn js-learn-btn" data-modal-open="${a}" data-id="${c}">Learn more</button>\n                \n                \n                  <button type="button" data-id="${c}" class="add-descr add-favorite js_btn_fav_add" data-cocktail-name="${a}">\n                  Add to\n                \n                  <svg class="icon-svg" width="17" height="16">\n                    <use class="use-heart1" href='${o}'></use>\n                  </svg>\n                            \n                  </button>\n                   <button type="button" id=${c} class="add-descr add-favorite js_btn_fav_remove" data-cocktail-name-remove="${a}">\n                  Remove\n                    \n                  <svg class="icon-svg" width="17" height="16">\n                    <use class="use-heart1" href='${r}'></use>\n                  </svg>\n                \n                  </button>\n               \n              </div>\n            </div>\n          </div>\n        </a>\n      `})).join("");document.querySelector(".gallery").insertAdjacentHTML("beforeend",a)}function l(e){if(e.target.classList.contains("js-learn-btn")){document.querySelector("[data-modal]").classList.toggle("is-hidden"),document.querySelector("[data-modal-close]").addEventListener("click",(e=>{document.querySelector("[data-modal]").classList.add("is-hidden"),console.log(e.target)}))}}const s={searchForm:document.querySelector("#search-form"),searchFormMobile:document.querySelector("#mobile-search-form"),gallery:document.querySelector(".gallery"),loadMoreBtn:document.querySelector(".btn-load-more"),searchLetterCocktailMobile:document.querySelector(".js-letter-cocktail-1"),searchLetterCocktail:document.querySelector(".js-letter-cocktail-2"),modal:document.querySelector(".modal"),closeModalBtn:document.querySelector(".modal-close-btn"),modalCreateCocktail:document.querySelector(".modal-create-cocktail"),titleContainer2:document.querySelector(".title-2"),titleContainer1:document.querySelector(".title-1"),modalIngredient:document.querySelector(".modal-ingredient"),modalCreateIngredient:document.querySelector(".modal-create-ingredient"),boxContainerTheme:document.querySelector(".js-theme-box"),btnDarkTheme:document.querySelector(".js-dark-them"),btnTheme1:document.querySelector(".btn-them-1"),btnTheme2:document.querySelector(".btn-them-2")};function d(e){s.modalCreateCocktail.innerHTML="";e.target.getAttribute("data-id");const{id:t}=e.target.dataset}function u(e){s.gallery.innerHTML="";n(e.target.textContent).then((e=>{null===e.drinks?(s.titleContainer1.style.display="none",s.gallery.innerHTML="<div><h2 class='title-error'>Sorry, we didn't find any cocktail for you</h2><div class='containerImg'></div></div >"):c(e.drinks);const t=document.querySelectorAll(".js_btn_fav_remove");for(let e of t)e.style.display="none"}))}!function(){const e=document.querySelector(".menu__icon");if(e){const t=document.querySelector(".mobile-menu");e.addEventListener("click",(function(n){document.body.classList.toggle("_lock"),e.classList.toggle("_active"),t.classList.toggle("_active")}))}}(),function(){const e="ABCDEFGHIJKLMN0PQRSTUVWXYZ1234567890".split("").map((e=>`\n      <span href="#">${e}</span>`)).join("");r.insertAdjacentHTML("beforeend",e)}(),function(){const e="ABCDEFGHIJKLMN0PQRSTUVWXYZ1234567890".split("").map((e=>`\n      <li class="list-cocktail__item" href="#">\n        <button class="list-cocktail__btn">${e}</button>\n      </li>`)).join("");a.insertAdjacentHTML("beforeend",e)}(),window.addEventListener("load",(()=>{o().then((e=>{c(e.drinks);const t=document.querySelectorAll(".js_btn_fav_remove");for(let e of t)e.style.display="none"}))})),s.searchForm.addEventListener("submit",(function(e){e.preventDefault(),s.gallery.innerHTML="";t(e.currentTarget.searchQuery.value.trim()).then((e=>{c(e.drinks);const t=document.querySelectorAll(".js_btn_fav_remove");for(let e of t)e.style.display="none"}))})),s.searchFormMobile.addEventListener("submit",(function(e){e.preventDefault(),s.gallery.innerHTML="";t(e.currentTarget.searchQuery.value.trim()).then((e=>{c(e.drinks);const t=document.querySelectorAll(".js_btn_fav_remove");for(let e of t)e.style.display="none"}))})),s.searchLetterCocktailMobile.addEventListener("click",u),s.searchLetterCocktail.addEventListener("click",u),s.gallery.addEventListener("click",(function(t){let n=[];n=t.target.getAttribute("data-cocktail-name"),e("FavoriteCocktails",n)})),s.gallery.addEventListener("click",l),s.modal.addEventListener("click",l),s.gallery.addEventListener("click",d),s.gallery.addEventListener("click",d),s.modal.addEventListener("click",(function(e){s.modalCreateIngredient.innerHTML="";const{name:t}=e.target.dataset;console.log(t),fetchNameIngredientCocktail(t).then((e=>{console.log(e),createIngredientCard(e.ingredients)}))})),s.titleContainer2.style.display="none",document.addEventListener("DOMContentLoaded",(()=>{localStorage.getItem("theme")?document.documentElement.setAttribute("theme","dark"):document.documentElement.removeAttribute("theme")}));document.querySelector("#toggle-theme").addEventListener("click",(function(){document.documentElement.hasAttribute("theme")?(document.documentElement.removeAttribute("theme"),localStorage.removeItem("theme")):(document.querySelectorAll(".checkboxBtn").forEach((e=>{e.onchange=()=>localStorage.setItem(e.id,e.checked),e.checked=localStorage.getItem("true"===e.id)})),document.documentElement.setAttribute("theme","dark"),localStorage.setItem("theme","black"))}));let m={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return m.Android()||m.BlackBerry()||m.iOS()||m.Opera()||m.Windows()}},g=document.querySelector("body");if(m.any()){g.classList.add("touch");let e=document.querySelectorAll(".arrow");for(i=0;i<e.length;i++){let t=e[i].previousElementSibling,n=e[i].nextElementSibling,o=e[i];t.classList.add("parent"),e[i].addEventListener("click",(function(){n.classList.toggle("open"),o.classList.toggle("active")}))}}else g.classList.add("mouse");
//# sourceMappingURL=index.2e19bfc0.js.map
