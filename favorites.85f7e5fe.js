function e(e){const t=localStorage.getItem(e);try{return JSON.parse(t)}catch{return t}}function t(e){const t=localStorage.removeItem(e);try{return JSON.parse(t)}catch{return t}}document.querySelector(".dropdown-content"),document.querySelector(".list-cocktail");function n(e){const t=document.querySelector(".add-favorite__icon use").href.baseVal,n=e.map((e=>{const{strDrinkThumb:n,strImageAttribution:o,strDrink:r,idDrink:c}=e;return`\n        <a class="gallery__link">\n          <div class="gallery-item">\n            <img class="gallery-item__img" src="${n}" alt="${o}" loading="lazy" />\n            <div class="info">\n              <div class="info-item">\n                <p class="info-descr">${r}</p>\n              </div>\n              <div class="btn-item">\n                \n                  <button type="button" class="info-btn-descr info-btn js-learn-btn" data-modal-open="${r}" data-id="${c}">Learn more</button>\n                \n                \n                  <button type="button" class="add-descr add-favorite js_btn_fav_add" data-cocktail-name="${r}">\n                  Add to\n                \n                  <svg class="add-favorite__icon" width=21 height=19>\n                      <use href="${t}"></use>\n                    </svg>\n             \n                    \n                  </button>\n                   <button type="button" class="add-descr add-favorite js_btn_fav_remove" data-cocktail-name-remove="${r}">\n                  Remove\n                    \n                      <svg class="add-favorite__icon" width=21 height=19>\n                          <use href="${t}"></use>\n                      </svg>\n                \n                  </button>\n               \n              </div>\n            </div>\n          </div>\n        </a>\n      `})).join("");document.querySelector(".gallery").insertAdjacentHTML("beforeend",n),document.getElementById("opacity").style.opacity="0"}const o={searchForm:document.querySelector("#search-form"),gallery:document.querySelector(".gallery"),loadMoreBtn:document.querySelector(".btn-load-more"),searchLetterCocktailMobile:document.querySelector(".js-letter-cocktail-1"),searchLetterCocktail:document.querySelector(".js-letter-cocktail-2"),favoritCocktails:document.querySelector(".favorit"),btnLS:document.querySelector(".add-descr"),titleContainer1:document.querySelector(".title-1")},r=[];o.searchForm.addEventListener("submit",(function(e){e.preventDefault()})),o.titleContainer1.style.display="none",o.gallery.addEventListener("click",(function(e){const c=e.target.getAttribute("data-cocktail-name-remove");t(c);const a=r.findIndex((({strDrink:e})=>e===c));r.splice(a,1),o.gallery.innerHTML="",n(r);const l=document.querySelectorAll(".js_btn_fav_add");for(let e of l)e.style.display="none"})),function(){const t=e("FavoriteCocktails").map((e=>fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${e}`).then((e=>e.json()))));Promise.all(t).then((e=>{e=e.map((e=>e.drinks[0])),r.push(...e),n(r);const t=document.querySelectorAll(".js_btn_fav_add");for(let e of t)e.style.display="none"}))}(),document.addEventListener("DOMContentLoaded",(()=>{localStorage.getItem("theme")?document.documentElement.setAttribute("theme","dark"):document.documentElement.removeAttribute("theme")}));document.querySelector("#toggle-theme").addEventListener("click",(function(){document.documentElement.hasAttribute("theme")?(document.documentElement.removeAttribute("theme"),localStorage.removeItem("theme")):(document.documentElement.setAttribute("theme","dark"),localStorage.setItem("theme",1))}));
//# sourceMappingURL=favorites.85f7e5fe.js.map
