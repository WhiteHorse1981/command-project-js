!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},a=t.parcelRequiree9a5;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var a={id:e,exports:{}};return r[e]=a,t.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},t.parcelRequiree9a5=a);var o=a("bpxeT"),i=a("dDDEV"),l=a("2TvXO"),c=a("hxfSy"),s=a("iCYlO"),d=a("lMEm8"),u=a("5h39L"),m=a("6mEDC"),v=(m=a("6mEDC"),{gallery:document.querySelector(".gallery"),searchForm:document.querySelector("#search-form"),searchFormMobile:document.querySelector("#mobile-search-form"),searchLetterCocktailMobile:document.querySelector(".js-letter-cocktail-1"),searchLetterCocktail:document.querySelector(".js-letter-cocktail-2"),modal:document.querySelector(".modal"),modalCreateCocktail:document.querySelector(".modal-create-cocktail"),modalingredient:document.querySelector(".modal-create-ingredient"),titleContainer2:document.querySelector(".title-2"),titleContainer3:document.querySelector(".title-3"),titleContainer1:document.querySelector(".title-1"),modalCreateIngredient:document.querySelector(".modal-create-ingredient"),btnDarkTheme:document.querySelector(".js-dark-them"),arrow:document.querySelector(".arrow"),arrowMobile:document.querySelector(".arrow-mobile")});function f(){return(f=e(o)(e(l).mark((function t(r){var n,a,o,i,c,u,m,f;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),v.gallery.innerHTML="",e.prev=2,n=r.currentTarget.searchQuery.value.trim(),e.next=6,(0,s.fetchCocktails)(n);case 6:for(a=e.sent,(0,d.createCocktail)(a.drinks),o=document.querySelectorAll(".js_btn_fav_remove"),i=!0,c=!1,u=void 0,e.prev=10,m=o[Symbol.iterator]();!(i=(f=m.next()).done);i=!0)f.value.style.display="none";e.next=18;break;case 14:e.prev=14,e.t0=e.catch(10),c=!0,u=e.t0;case 18:e.prev=18,e.prev=19,i||null==m.return||m.return();case 21:if(e.prev=21,!c){e.next=24;break}throw u;case 24:return e.finish(21);case 25:return e.finish(18);case 26:e.next=31;break;case 28:e.prev=28,e.t1=e.catch(2),console.log(e.t1);case 31:case"end":return e.stop()}}),t,null,[[2,28],[10,14,18,26],[19,,21,25]])})))).apply(this,arguments)}function h(){return(h=e(o)(e(l).mark((function t(r){var n,a,o,i,c,u,m,f;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),v.gallery.innerHTML="",e.prev=2,n=r.currentTarget.searchQuery.value.trim(),e.next=6,(0,s.fetchCocktails)(n);case 6:for(a=e.sent,(0,d.createCocktail)(a.drinks),o=document.querySelectorAll(".js_btn_fav_remove"),i=!0,c=!1,u=void 0,e.prev=10,m=o[Symbol.iterator]();!(i=(f=m.next()).done);i=!0)f.value.style.display="none";e.next=18;break;case 14:e.prev=14,e.t0=e.catch(10),c=!0,u=e.t0;case 18:e.prev=18,e.prev=19,i||null==m.return||m.return();case 21:if(e.prev=21,!c){e.next=24;break}throw u;case 24:return e.finish(21);case 25:return e.finish(18);case 26:e.next=31;break;case 28:e.prev=28,e.t1=e.catch(2),console.log(e.t1);case 31:case"end":return e.stop()}}),t,null,[[2,28],[10,14,18,26],[19,,21,25]])})))).apply(this,arguments)}function p(e){return y.apply(this,arguments)}function y(){return(y=e(o)(e(l).mark((function t(r){var n,a,o,i,c,u,m,f;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v.gallery.innerHTML="",e.prev=1,n=r.target.textContent,e.next=5,(0,s.fetchLetterCocktails)(n);case 5:for(null===(a=e.sent).drinks?(v.titleContainer1.style.display="none",v.gallery.innerHTML="<div><h2 class='title-error'>Sorry, we didn't find any cocktail for you</h2><div class='containerImg'></div></div >"):(0,d.createCocktail)(a.drinks),o=document.querySelectorAll(".js_btn_fav_remove"),i=!0,c=!1,u=void 0,e.prev=9,m=o[Symbol.iterator]();!(i=(f=m.next()).done);i=!0)f.value.style.display="none";e.next=17;break;case 13:e.prev=13,e.t0=e.catch(9),c=!0,u=e.t0;case 17:e.prev=17,e.prev=18,i||null==m.return||m.return();case 20:if(e.prev=20,!c){e.next=23;break}throw u;case 23:return e.finish(20);case 24:return e.finish(17);case 25:e.next=30;break;case 27:e.prev=27,e.t1=e.catch(1),console.log(e.t1);case 30:case"end":return e.stop()}}),t,null,[[1,27],[9,13,17,25],[18,,20,24]])})))).apply(this,arguments)}function k(){return(k=e(o)(e(l).mark((function t(r){var n,a,o,d,u,m,v;return e(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=r.target.closest(".gallery-item"),!r.target.classList.contains("js_btn_fav_add")){t.next=16;break}return a=n.children[1].children[0].children[0].textContent,console.log(a),t.next=6,(0,s.fetchCocktails)(a);case 6:o=t.sent,d=e(i)({},o.drinks[0]),(0,c.saveToLS)("FavoriteCocktails",d),n.children[1].children[1].children[2].style.display="flex",u=n.children[1].children[1].children[1],console.log(u),u.style.display="none",t.next=17;break;case 16:r.target.classList.contains("js_btn_fav_remove")&&(m=(m=JSON.parse(localStorage.getItem("FavoriteCocktails"))).filter((function(e){return e.idDrink!==n.id})),(0,c.removeFromLS)("FavoriteCocktails",m),v=n.children[1].children[1].children[2],console.log(v),v.style.display="none",n.children[1].children[1].children[1].style.display="flex");case 17:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function g(){return(g=e(o)(e(l).mark((function t(r){var n,a,o,d,u,m;return e(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=r.target.closest(".modal-container-mobile"),!r.target.classList.contains("js-add-to-favorite")){t.next=14;break}return a=n.children[0].textContent,t.next=5,(0,s.fetchCocktails)(a);case 5:o=t.sent,d=e(i)({},o.drinks[0]),(0,c.saveToLS)("FavoriteCocktails",d),n.children[4].children[1].style.display="flex",n.children[4].children[0].style.display="none",t.next=15;break;case 14:r.target.classList.contains("js-remove-from-favorite")&&(u=n.children[0].textContent,m=(m=JSON.parse(localStorage.getItem("FavoriteCocktails"))).filter((function(e){return e.strDrink!==u})),(0,c.removeFromLS)("FavoriteCocktails",m),n.children[4].children[1].style.display="none",n.children[4].children[0].style.display="flex");case 15:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function b(){return(b=e(o)(e(l).mark((function t(r){var n,a,o,d,u,m;return e(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=r.target.closest(".modal-container"),!r.target.classList.contains("js-add-to-favorite")){t.next=14;break}return a=n.children[0].children[1].children[0].textContent,t.next=5,(0,s.fetchCocktails)(a);case 5:o=t.sent,d=e(i)({},o.drinks[0]),(0,c.saveToLS)("FavoriteCocktails",d),n.children[2].children[1].style.display="flex",n.children[2].children[0].style.display="none",t.next=15;break;case 14:r.target.classList.contains("js-remove-from-favorite")&&(u=n.children[0].children[1].children[0].textContent,m=(m=JSON.parse(localStorage.getItem("FavoriteCocktails"))).filter((function(e){return e.strDrink!==u})),(0,c.removeFromLS)("FavoriteCocktails",m),n.children[2].children[1].style.display="none",n.children[2].children[0].style.display="flex");case 15:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(){return(x=e(o)(e(l).mark((function t(r){var n,a,o,i,c,u,m,f,h,p;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(v.modalCreateCocktail.innerHTML="",n=r.target.closest(".gallery-item"),!r.target.classList.contains("js-learn-btn")){e.next=28;break}return e.next=5,(0,s.fetchIngredientCocktails)(n.id);case 5:for(a=e.sent,(0,d.createIngredientCocktail)(a.drinks),o=document.querySelectorAll(".modal-ingredient-btn"),i=0;i<o.length;i++)"null"==o[i].dataset.ingredientName&&(o[i].textContent="");for(c=document.querySelectorAll(".js-remove-from-favorite"),console.log(c),u=!0,m=!1,f=void 0,e.prev=12,h=c[Symbol.iterator]();!(u=(p=h.next()).done);u=!0)p.value.style.display="none";e.next=20;break;case 16:e.prev=16,e.t0=e.catch(12),m=!0,f=e.t0;case 20:e.prev=20,e.prev=21,u||null==h.return||h.return();case 23:if(e.prev=23,!m){e.next=26;break}throw f;case 26:return e.finish(23);case 27:return e.finish(20);case 28:case"end":return e.stop()}}),t,null,[[12,16,20,28],[21,,23,27]])})))).apply(this,arguments)}(0,m.callMobileMenu)(),(0,m.disableMobileMenuSearch)(),(0,d.createMarkup)(),(0,d.createMarkupDesktop)(),window.addEventListener("load",(function(){(0,s.fetchRandomCocktails)().then((function(e){(0,d.createCocktail)(e.drinks);var t=document.querySelectorAll(".js_btn_fav_remove"),r=!0,n=!1,a=void 0;try{for(var o,i=t[Symbol.iterator]();!(r=(o=i.next()).done);r=!0){o.value.style.display="none"}}catch(e){n=!0,a=e}finally{try{r||null==i.return||i.return()}finally{if(n)throw a}}}))})),v.searchForm.addEventListener("submit",(function(e){return f.apply(this,arguments)})),v.searchFormMobile.addEventListener("submit",(function(e){return h.apply(this,arguments)})),v.searchLetterCocktailMobile.addEventListener("click",p),v.searchLetterCocktail.addEventListener("click",p),v.gallery.addEventListener("click",(function(e){return k.apply(this,arguments)})),v.gallery.addEventListener("click",u.openModalWindow),v.modal.addEventListener("click",u.openModalWindow),v.modal.addEventListener("click",(function(e){return g.apply(this,arguments)})),v.modal.addEventListener("click",(function(e){return b.apply(this,arguments)})),v.gallery.addEventListener("click",u.openModalIngredient),v.modal.addEventListener("click",u.openModalIngredient),v.gallery.addEventListener("click",(function(e){return x.apply(this,arguments)})),v.modal.addEventListener("click",(function(e){v.modalCreateIngredient.innerHTML="";var t=e.target.getAttribute("data-ingredient-name");(0,s.fetchNameIngredientCocktail)(t).then((function(e){console.log(e.ingredients),(0,d.createIngredientCard)(e.ingredients);var t=document.querySelectorAll(".js-remove-from-favorite-ingredient-2");console.log(t);var r=!0,n=!1,a=void 0;try{for(var o,i=t[Symbol.iterator]();!(r=(o=i.next()).done);r=!0){o.value.style.display="none"}}catch(e){n=!0,a=e}finally{try{r||null==i.return||i.return()}finally{if(n)throw a}}}))})),v.arrow.addEventListener("click",(function(){var e=document.querySelector(".favorite-wrapper"),t=document.querySelector(".menu-arrow");e.classList.toggle("open"),t.classList.toggle("active")})),v.arrowMobile.addEventListener("click",(function(){var e=document.querySelector(".mobile-favorite-list"),t=document.querySelector(".arrow-mobile");e.classList.toggle("open"),t.classList.toggle("active")})),v.titleContainer2.style.display="none",v.titleContainer3.style.display="none",null===JSON.parse(localStorage.getItem("FavoriteCocktails"))||JSON.parse(localStorage.getItem("FavoriteCocktails")),document.addEventListener("DOMContentLoaded",(function(){localStorage.getItem("theme")?document.documentElement.setAttribute("theme","dark"):document.documentElement.removeAttribute("theme")})),document.querySelector("#toggle-theme").addEventListener("click",(function(){document.documentElement.hasAttribute("theme")?(document.documentElement.removeAttribute("theme"),localStorage.removeItem("theme")):(document.documentElement.setAttribute("theme","dark"),localStorage.setItem("theme","black"))}));var S,C=localStorage.getItem("theme");S=document.querySelector("#highload1"),"black"===C&&(S.classList.remove("checkboxBtn"),S.classList.add("checkboxBtnOrange"));var L={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return L.Android()||L.BlackBerry()||L.iOS()||L.Opera()||L.Windows()}},w=document.querySelector("body");L.any()?w.classList.add("touch"):w.classList.add("mouse")}();
//# sourceMappingURL=index.77a0c294.js.map
