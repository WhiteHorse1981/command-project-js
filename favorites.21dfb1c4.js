!function(){document.querySelector(".dropdown-content"),document.querySelector(".list-cocktail");function e(e){var t=document.querySelector(".div-icon-heart1"),n=document.querySelector(".div-icon-heart2"),o=t.href.baseVal,r=n.href.baseVal,a=e.map((function(e){var t=e.strDrinkThumb,n=e.strImageAttribution,a=e.strDrink,c=e.idDrink;return'\n        \n          <div class="gallery-item gallery__link gallery">\n            <img class="gallery-item__img" src="'.concat(t,'" alt="').concat(n,'" loading="lazy" />\n            <div class="info">\n              <div class="info-item">\n                <p class="info-descr">').concat(a,'</p>\n              </div>\n              <div class="btn-item">\n                \n                  <button type="button" class="info-btn-descr info-btn js-learn-btn" data-modal-open="').concat(a,'" data-id="').concat(c,'">Learn more</button>\n                \n                \n                  <button type="button" data-id="').concat(c,'" class="add-descr add-favorite js_btn_fav_add" data-cocktail-name="').concat(a,'">\n                  Add to\n                  \n                \n                  <svg class="icon-svg svg-add" width="17" height="16">\n                    <use class="use-heart1" href=\'').concat(o,'\'></use>\n                  </svg>\n\n                \n                            \n                  </button>\n                   <button type="button" id=').concat(c,' class="add-descr add-favorite js_btn_fav_remove" data-cocktail-name-remove="').concat(a,'">\n                  Remove\n                    \n                  <svg class="icon-svg svg-remove" width="17" height="16">\n                    <use class="use-heart1" href=\'').concat(r,"'></use>\n                  </svg>\n                \n                  </button>\n               \n              </div>\n            </div>\n          </div>\n       \n      ")})).join("");document.querySelector(".gallery").insertAdjacentHTML("beforeend",a)}var t={searchForm:document.querySelector("#search-form"),gallery:document.querySelector(".gallery"),loadMoreBtn:document.querySelector(".btn-load-more"),searchLetterCocktailMobile:document.querySelector(".js-letter-cocktail-1"),searchLetterCocktail:document.querySelector(".js-letter-cocktail-2"),favoritCocktails:document.querySelector(".favorit"),btnLS:document.querySelector(".add-descr"),titleContainer1:document.querySelector(".title-1"),arrow:document.querySelector(".arrow"),arrowMobile:document.querySelector(".arrow-mobile")};t.searchForm.addEventListener("submit",(function(e){e.preventDefault()})),t.titleContainer1.style.display="none",t.gallery.addEventListener("click",(function(o){var r=o.target.getAttribute("data-cocktail-name-remove"),a=n.findIndex((function(e){return e.strDrink===r}));n.splice(a,1),t.gallery.innerHTML="",e(n),c="FavoriteCocktails",i=n,l=JSON.parse(localStorage.getItem(c)),l.splice(i,1),localStorage.setItem(c,JSON.stringify(l));var c,i,l;var d=document.querySelectorAll(".js_btn_fav_add"),s=!0,u=!1,m=void 0;try{for(var v,g=d[Symbol.iterator]();!(s=(v=g.next()).done);s=!0){v.value.style.display="none"}}catch(e){u=!0,m=e}finally{try{s||null==g.return||g.return()}finally{if(u)throw m}}})),t.arrow.addEventListener("click",(function(){var e=document.querySelector(".favorite-wrapper"),t=document.querySelector(".menu-arrow");e.classList.toggle("open"),t.classList.toggle("active")})),t.arrowMobile.addEventListener("click",(function(){var e=document.querySelector(".mobile-favorite-list"),t=document.querySelector(".arrow-mobile");e.classList.toggle("open"),t.classList.toggle("active")})),function(){var e=document.querySelector(".menu__icon");if(e){var t=document.querySelector(".mobile-menu");e.addEventListener("click",(function(n){document.body.classList.toggle("_lock"),e.classList.toggle("_active"),t.classList.toggle("_active")}))}}(),window.addEventListener("load",(function(){if(n&&0!==n.length){e(n);var o=document.querySelectorAll(".js_btn_fav_add"),r=!0,a=!1,c=void 0;try{for(var i,l=o[Symbol.iterator]();!(r=(i=l.next()).done);r=!0){i.value.style.display="none"}}catch(e){a=!0,c=e}finally{try{r||null==l.return||l.return()}finally{if(a)throw c}}}else t.gallery.innerHTML="<div class='container'><h2 class='title-favorite-cocktails'>Sorry, you haven't chosen your favorite cocktails yet.</h2></div >"}));var n=JSON.parse(localStorage.getItem("FavoriteCocktails"));console.log(n),document.addEventListener("DOMContentLoaded",(function(){localStorage.getItem("theme")?document.documentElement.setAttribute("theme","dark"):document.documentElement.removeAttribute("theme")})),document.querySelector("#toggle-theme").addEventListener("click",(function(){document.documentElement.hasAttribute("theme")?(document.documentElement.removeAttribute("theme"),localStorage.removeItem("theme")):(document.documentElement.setAttribute("theme","dark"),localStorage.setItem("theme","black"))}));var o,r=localStorage.getItem("theme");o=document.querySelector("#highload1"),"black"===r&&(o.classList.remove("checkboxBtn"),o.classList.add("checkboxBtnOrange"));var a={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return a.Android()||a.BlackBerry()||a.iOS()||a.Opera()||a.Windows()}},c=document.querySelector("body");a.any()?c.classList.add("touch"):c.classList.add("mouse")}();
//# sourceMappingURL=favorites.21dfb1c4.js.map
