function e(e,t){let n=JSON.parse(localStorage.getItem(e));n.splice(t,1),localStorage.setItem(e,JSON.stringify(n))}document.querySelector(".dropdown-content"),document.querySelector(".list-cocktail");function t(e){const t=document.querySelector(".div-icon-heart1"),n=document.querySelector(".div-icon-heart2"),o=t.href.baseVal,r=n.href.baseVal,c=e.map((e=>{const{strDrinkThumb:t,strImageAttribution:n,strDrink:c,idDrink:a}=e;return`\n        <a class="gallery__link">\n          <div class="gallery-item">\n            <img class="gallery-item__img" src="${t}" alt="${n}" loading="lazy" />\n            <div class="info">\n              <div class="info-item">\n                <p class="info-descr">${c}</p>\n              </div>\n              <div class="btn-item">\n                \n                  <button type="button" class="info-btn-descr info-btn js-learn-btn" data-modal-open="${c}" data-id="${a}">Learn more</button>\n                \n                \n                  <button type="button" data-id="${a}" class="add-descr add-favorite js_btn_fav_add" data-cocktail-name="${c}">\n                  Add to\n                  \n                \n                  <svg class="icon-svg svg-add" width="17" height="16">\n                    <use class="use-heart1" href='${o}'></use>\n                  </svg>\n\n                \n                            \n                  </button>\n                   <button type="button" id=${a} class="add-descr add-favorite js_btn_fav_remove" data-cocktail-name-remove="${c}">\n                  Remove\n                    \n                  <svg class="icon-svg svg-remove" width="17" height="16">\n                    <use class="use-heart1" href='${r}'></use>\n                  </svg>\n                \n                  </button>\n               \n              </div>\n            </div>\n          </div>\n        </a>\n      `})).join("");document.querySelector(".gallery").insertAdjacentHTML("beforeend",c)}const n={searchForm:document.querySelector("#search-form"),gallery:document.querySelector(".gallery"),loadMoreBtn:document.querySelector(".btn-load-more"),searchLetterCocktailMobile:document.querySelector(".js-letter-cocktail-1"),searchLetterCocktail:document.querySelector(".js-letter-cocktail-2"),favoritCocktails:document.querySelector(".favorit"),btnLS:document.querySelector(".add-descr"),titleContainer1:document.querySelector(".title-1"),arrow:document.querySelector(".arrow"),arrowMobile:document.querySelector(".arrow-mobile")};n.searchForm.addEventListener("submit",(function(e){e.preventDefault()})),n.titleContainer1.style.display="none",n.gallery.addEventListener("click",(function(r){const c=r.target.getAttribute("data-cocktail-name-remove"),a=o.findIndex((e=>e.strDrink===c));o.splice(a,1),n.gallery.innerHTML="",t(o),e("FavoriteCocktails",o);const i=document.querySelectorAll(".js_btn_fav_add");for(let e of i)e.style.display="none"})),n.arrow.addEventListener("click",(function(){const e=document.querySelector(".favorite-wrapper"),t=document.querySelector(".menu-arrow");e.classList.toggle("open"),t.classList.toggle("active")})),n.arrowMobile.addEventListener("click",(function(){const e=document.querySelector(".mobile-favorite-list"),t=document.querySelector(".arrow-mobile");e.classList.toggle("open"),t.classList.toggle("active")})),(()=>{const e=document.querySelector(".menu__icon");if(e){const t=document.querySelector(".mobile-menu");e.addEventListener("click",(function(n){document.body.classList.toggle("_lock"),e.classList.toggle("_active"),t.classList.toggle("_active")}))}})(),window.addEventListener("load",(function(){o&&0!==o.length?t(o):n.gallery.innerHTML="<div class='container'><h2 class='title-favorite-cocktails'>Sorry, you haven't chosen your favorite cocktails yet.</h2></div >";const e=document.querySelectorAll(".js_btn_fav_add");for(let t of e)t.style.display="none"}));let o=JSON.parse(localStorage.getItem("FavoriteCocktails"));document.addEventListener("DOMContentLoaded",(()=>{localStorage.getItem("theme")?document.documentElement.setAttribute("theme","dark"):document.documentElement.removeAttribute("theme")}));document.querySelector("#toggle-theme").addEventListener("click",(function(){document.documentElement.hasAttribute("theme")?(document.documentElement.removeAttribute("theme"),localStorage.removeItem("theme")):(document.querySelectorAll(".checkboxBtn").forEach((e=>{e.onchange=()=>localStorage.setItem(e.id,e.checked),e.checked=localStorage.getItem("true"===e.id)})),document.documentElement.setAttribute("theme","dark"),localStorage.setItem("theme","black"))}));let r={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return r.Android()||r.BlackBerry()||r.iOS()||r.Opera()||r.Windows()}},c=document.querySelector("body");r.any()?c.classList.add("touch"):c.classList.add("mouse");
//# sourceMappingURL=favorites.eae5ce24.js.map