!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequiree9a5;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequiree9a5=o);var i=o("bpxeT"),a=o("dDDEV"),l=o("2TvXO"),c=o("hxfSy"),d=o("6mEDC"),s=o("5h39L"),u=o("iCYlO"),m=o("lMEm8"),v={searchForm:document.querySelector("#search-form"),gallery:document.querySelector(".gallery"),loadMoreBtn:document.querySelector(".btn-load-more"),searchLetterCocktailMobile:document.querySelector(".js-letter-cocktail-1"),searchLetterCocktail:document.querySelector(".js-letter-cocktail-2"),favoritCocktails:document.querySelector(".favorit"),modalCreateCocktail:document.querySelector(".modal-create-cocktail"),modal:document.querySelector(".modal"),modalCreateIngredient:document.querySelector(".modal-create-ingredient"),btnLS:document.querySelector(".add-descr"),titleContainer1:document.querySelector(".title-1"),titleContainer2:document.querySelector(".title-2"),arrow:document.querySelector(".arrow"),arrowMobile:document.querySelector(".arrow-mobile")};v.searchForm.addEventListener("submit",(function(e){e.preventDefault(),v.gallery.innerHTML="";try{var t=e.currentTarget.searchQuery.value.trim(),r=f.filter((function(e){return e.strIngredient===t}));(0,m.createIngredient)(r);var n=document.querySelectorAll(".js-add-to-favorite-ingredient"),o=!0,i=!1,a=void 0;try{for(var l,c=n[Symbol.iterator]();!(o=(l=c.next()).done);o=!0){l.value.style.display="none"}}catch(e){i=!0,a=e}finally{try{o||null==c.return||c.return()}finally{if(i)throw a}}}catch(e){console.log(e)}})),v.titleContainer1.style.display="none",v.titleContainer2.style.display="none",v.gallery.addEventListener("click",(function(e){return g.apply(this,arguments)})),v.arrow.addEventListener("click",(function(){var e=document.querySelector(".favorite-wrapper"),t=document.querySelector(".menu-arrow");e.classList.toggle("open"),t.classList.toggle("active")})),v.arrowMobile.addEventListener("click",(function(){var e=document.querySelector(".mobile-favorite-list"),t=document.querySelector(".arrow-mobile");e.classList.toggle("open"),t.classList.toggle("active")})),v.gallery.addEventListener("click",s.openModalIngredient),v.modal.addEventListener("click",s.openModalIngredient),v.gallery.addEventListener("click",(function(e){v.modalCreateIngredient.innerHTML="";var t=e.target.closest(".ingredient-box");if(e.target.classList.contains("js-learn-btn")){var r=t.children[0].children[0].textContent;(0,u.fetchNameIngredientCocktail)(r).then((function(e){(0,m.createIngredientCard)(e.ingredients);var t=document.querySelectorAll(".js-add-to-favorite-ingredient"),r=!0,n=!1,o=void 0;try{for(var i,a=t[Symbol.iterator]();!(r=(i=a.next()).done);r=!0){i.value.style.display="none"}}catch(e){n=!0,o=e}finally{try{r||null==a.return||a.return()}finally{if(n)throw o}}}))}})),v.modalCreateIngredient.addEventListener("click",(function(e){return y.apply(this,arguments)})),(0,d.callMobileMenu)();var f=JSON.parse(localStorage.getItem("FavoriteIngredients"));function g(){return(g=e(i)(e(l).mark((function t(r){var n,o,i,a,d,s,u,g;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=r.target.closest(".ingredient-box"),!r.target.classList.contains("js-remove-from-favorite-ingredient")){e.next=25;break}for(o=n.children[0].children[0].textContent,f=f.filter((function(e){return e.strIngredient!==o})),v.gallery.innerHTML="",(0,m.createIngredient)(f),(0,c.removeFromLS)("FavoriteIngredients",f),i=document.querySelectorAll(".js-add-to-favorite-ingredient"),a=!0,d=!1,s=void 0,e.prev=9,u=i[Symbol.iterator]();!(a=(g=u.next()).done);a=!0)g.value.style.display="none";e.next=17;break;case 13:e.prev=13,e.t0=e.catch(9),d=!0,s=e.t0;case 17:e.prev=17,e.prev=18,a||null==u.return||u.return();case 20:if(e.prev=20,!d){e.next=23;break}throw s;case 23:return e.finish(20);case 24:return e.finish(17);case 25:case"end":return e.stop()}}),t,null,[[9,13,17,25],[18,,20,24]])})))).apply(this,arguments)}function y(){return(y=e(i)(e(l).mark((function t(r){var n,o,i,d,s,g,y,h,p,S,b,k,L,x,I,q,w,C;return e(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=r.target.closest(".modal-container-ingredient"),!r.target.classList.contains("js-remove-from-favorite-ingredient")){t.next=32;break}for(o=n.children[0].children[0].textContent,i=(i=JSON.parse(localStorage.getItem("FavoriteIngredients"))).filter((function(e){return e.strIngredient!==o})),(0,c.removeFromLS)("FavoriteIngredients",i),v.gallery.innerHTML="",(0,m.createIngredient)(i),d=document.querySelectorAll(".js-add-to-favorite-ingredient"),s=!0,g=!1,y=void 0,t.prev=10,h=d[Symbol.iterator]();!(s=(p=h.next()).done);s=!0)p.value.style.display="none";t.next=18;break;case 14:t.prev=14,t.t0=t.catch(10),g=!0,y=t.t0;case 18:t.prev=18,t.prev=19,s||null==h.return||h.return();case 21:if(t.prev=21,!g){t.next=24;break}throw y;case 24:return t.finish(21);case 25:return t.finish(18);case 26:n.children[0].children[5].children[1].style.display="none",n.children[0].children[5].children[0].style.display="flex",t.next=63;break;case 32:if(!r.target.classList.contains("js-add-to-favorite-ingredient-2")){t.next=63;break}return S=n.children[0].children[0].textContent,t.next=36,(0,u.fetchNameIngredientCocktail)(S);case 36:for(b=t.sent,k=e(a)({},b.ingredients[0]),(0,c.saveToLS)("FavoriteIngredients",k),v.gallery.innerHTML="",(0,m.createIngredient)(f),L=document.querySelectorAll(".js-add-to-favorite-ingredient"),x=!0,I=!1,q=void 0,t.prev=43,w=L[Symbol.iterator]();!(x=(C=w.next()).done);x=!0)C.value.style.display="none";t.next=51;break;case 47:t.prev=47,t.t1=t.catch(43),I=!0,q=t.t1;case 51:t.prev=51,t.prev=52,x||null==w.return||w.return();case 54:if(t.prev=54,!I){t.next=57;break}throw q;case 57:return t.finish(54);case 58:return t.finish(51);case 59:n.children[0].children[5].children[1].style.display="flex",n.children[0].children[5].children[0].style.display="none";case 63:case"end":return t.stop()}}),t,null,[[10,14,18,26],[19,,21,25],[43,47,51,59],[52,,54,58]])})))).apply(this,arguments)}window.addEventListener("load",(function(){if(f&&0!==f.length){(0,m.createIngredient)(f);var e=document.querySelectorAll(".js-add-to-favorite-ingredient"),t=!0,r=!1,n=void 0;try{for(var o,i=e[Symbol.iterator]();!(t=(o=i.next()).done);t=!0){o.value.style.display="none"}}catch(e){r=!0,n=e}finally{try{t||null==i.return||i.return()}finally{if(r)throw n}}}else v.gallery.innerHTML="<div class='container'><h2 class='title-favorite-cocktails'>Sorry, you haven't chosen your favorite ingridients yet.</h2></div >"})),null===JSON.parse(localStorage.getItem("FavoriteIngredient"))||JSON.parse(localStorage.getItem("FavoriteIngredient")),document.addEventListener("DOMContentLoaded",(function(){localStorage.getItem("theme")?document.documentElement.setAttribute("theme","dark"):document.documentElement.removeAttribute("theme")})),document.querySelector("#toggle-theme").addEventListener("click",(function(){document.documentElement.hasAttribute("theme")?(document.documentElement.removeAttribute("theme"),localStorage.removeItem("theme")):(document.documentElement.setAttribute("theme","dark"),localStorage.setItem("theme","black"))}));var h,p=localStorage.getItem("theme");h=document.querySelector("#highload1"),"black"===p&&(h.classList.remove("checkboxBtn"),h.classList.add("checkboxBtnOrange"));var S={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return S.Android()||S.BlackBerry()||S.iOS()||S.Opera()||S.Windows()}},b=document.querySelector("body");S.any()?b.classList.add("touch"):b.classList.add("mouse")}();
//# sourceMappingURL=ingredient.3c7a0483.js.map
