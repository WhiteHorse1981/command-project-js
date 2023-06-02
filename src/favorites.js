const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?';
import { loadFromLS, removeFromLS, saveToLS } from './js/localSt.js';
import { createCocktail } from './js/createCocktail';
import { callMobileMenu } from './js/menuMobileOpen.js';

// =======================LISTENER =========================================================
const refs = {
  searchForm: document.querySelector('#search-form'),
  gallery: document.querySelector('.gallery'),
  loadMoreBtn: document.querySelector('.btn-load-more'),
  searchLetterCocktailMobile: document.querySelector('.js-letter-cocktail-1'),
  searchLetterCocktail: document.querySelector('.js-letter-cocktail-2'),
  favoritCocktails: document.querySelector('.favorit'),
  btnLS: document.querySelector('.add-descr'),
  titleContainer1: document.querySelector('.title-1'),
  arrow: document.querySelector('.arrow'),
  arrowMobile: document.querySelector('.arrow-mobile'),
};

refs.searchForm.addEventListener('submit', onSearchForm);
refs.titleContainer1.style.display = 'none';
refs.gallery.addEventListener('click', removeLSFavoritCocktailLS);
refs.arrow.addEventListener('click', onClickMenuHeader);
refs.arrowMobile.addEventListener('click', onClickMobileMenuHeader);

// ======================================================================================

//====================ФУНКЦИЯ ОТКРЫТИЯ МОБИЛЬНОГО МЕНЮ =============================================================
callMobileMenu();

function onSearchForm(event) {
  event.preventDefault();
}

// window.addEventListener('load', loadLSCocktails);

let cocktailsFavorites = [];

function loadLSCocktails() {
  let arr = loadFromLS('FavoriteCocktails');
  // const galleryContainer = refs.gallery;
  // console.log(galleryContainer);

  const fetches = arr.map(cocktailName => {
    return fetch(`${BASE_URL}s=${cocktailName}`).then(res => res.json());
  });

  if (!arr || arr?.length === 0) {
    refs.gallery.innerHTML =
      "<div class='container'><h2 class='title-favorite-cocktails'>Sorry, you haven't chosen your favorite cocktails yet.</h2></div >";
  } else {
    Promise.all(fetches).then(arr => {
      arr = arr.map(obj => {
        return obj.drinks[0];
      });
      cocktailsFavorites.push(...arr);
      //console.log(arr);
      createCocktail(cocktailsFavorites);

      const btnAdd = document.querySelectorAll('.js_btn_fav_add');
      for (let btn of btnAdd) {
        btn.style.display = 'none';
      }
      // addSvgUseHearts();
    });
  }
}

loadLSCocktails();

function removeLSFavoritCocktailLS(event) {
  const cocktailNameRemove = event.target.getAttribute(
    'data-cocktail-name-remove'
  );

  const index = cocktailsFavorites.findIndex(
    ({ strDrink }) => strDrink === cocktailNameRemove
  );

  cocktailsFavorites.splice(index, 1);

  refs.gallery.innerHTML = '';

  createCocktail(cocktailsFavorites);

  removeFromLS('FavoriteCocktails', cocktailNameRemove);

  const btnAdd = document.querySelectorAll('.js_btn_fav_add');
  for (let btn of btnAdd) {
    btn.style.display = 'none';
  }
}

// ==================== ТЕМНАЯ ТЕМА =========================================
document.addEventListener('DOMContentLoaded', () => {
  init();
});
function init() {
  if (localStorage.getItem('theme')) {
    document.documentElement.setAttribute('theme', 'dark');
  } else {
    document.documentElement.removeAttribute('theme');
  }
}
const toggleBtn = document.querySelector('#toggle-theme');
toggleBtn.addEventListener('click', function () {
  if (document.documentElement.hasAttribute('theme')) {
    document.documentElement.removeAttribute('theme');
    localStorage.removeItem('theme');
  } else {
    document.querySelectorAll('.checkboxBtn').forEach(el => {
      el.onchange = () => localStorage.setItem(el.id, el.checked);
      el.checked = localStorage.getItem(el.id === 'true');
    });

    document.documentElement.setAttribute('theme', 'dark');
    localStorage.setItem('theme', 'black');
  }
});

//================  SVG  =====================================//

// function addSvgUseHearts() {
//   const addBtnsSvg = document.querySelectorAll('.card-btn__add svg');
//   for (let svg of addBtnsSvg) {
//     svg.innerHTML = `<use class="use-heart1" href='${useHeart1}'></use>`;
//   }
//   const removeBtnsSvg = document.querySelectorAll('.card-btn__remove svg');
//   for (let svg of removeBtnsSvg) {
//     svg.innerHTML = `<use class="use-heart1" href='${useHeart2}'></use>`;
//   }
// }

//============ Скрипт меню открытия с помощью тачcкрина на планшетах и мобильных устройствах =====//
let isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  },
};

// let body = document.querySelector('body');
// if (isMobile.any()) {
//   body.classList.add('touch');
//   let arrow = document.querySelectorAll('.arrow');
//   for (i = 0; i < arrow.length; i++) {
//     let thisLink = arrow[i].previousElementSibling;
//     let subMenu = arrow[i].nextElementSibling;
//     let thisArrow = arrow[i];

//     // thisLink.classList.add('parent');
//     arrow[i].addEventListener('click', function () {
//       subMenu.classList.toggle('open');
//       thisArrow.classList.toggle('active');
//     });
//   }
// } else {
//   body.classList.add('mouse');
// }

let body = document.querySelector('body');
if (isMobile.any()) {
  body.classList.add('touch');
} else {
  body.classList.add('mouse');
}

function onClickMenuHeader() {
  const subMenu = document.querySelector('.favorite-wrapper');
  const thisArrow = document.querySelector('.menu-arrow');

  subMenu.classList.toggle('open');
  thisArrow.classList.toggle('active');
}

function onClickMobileMenuHeader() {
  const subMenu = document.querySelector('.mobile-favorite-list');
  const thisArrow = document.querySelector('.arrow-mobile');

  subMenu.classList.toggle('open');
  thisArrow.classList.toggle('active');
}
//========================================================//
