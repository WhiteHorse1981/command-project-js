import { loadFromLS, removeFromLS, saveToLS } from './js/localSt.js';
import { createCocktail } from './js/createMarkap.js';
import { callMobileMenu } from './js/menuMobile.js';

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

window.addEventListener('load', loadLSCocktails);

// let cocktailsFavorites = [];

// function loadLSCocktails() {
//   if (loadFromLS('FavoriteCocktails') === null) {
//     saveToLS('FavoriteCocktails', '');
//   } else {
//     let arr = loadFromLS('FavoriteCocktails');
//     const fetches = arr.map(cocktailName => {
//       return fetch(`${BASE_URL}s=${cocktailName}`).then(res => res.json());
//     });
//     if (!arr || arr?.length === 0) {
//       refs.gallery.innerHTML =
//         "<div class='container'><h2 class='title-favorite-cocktails'>Sorry, you haven't chosen your favorite cocktails yet.</h2></div >";
//     }
//     if (arr) {
//       const titleNoCocktails = document.querySelector('.title-cocktails-now');
//       titleNoCocktails.style.display = 'none';
//       Promise.all(fetches).then(arr => {
//         arr = arr?.map(obj => {
//           return obj.drinks[0];
//         });
//         cocktailsFavorites.push(...arr);
//         //console.log(arr);
//         createCocktail(cocktailsFavorites);
//         const btnAdd = document.querySelectorAll('.js_btn_fav_add');
//         for (let btn of btnAdd) {
//           btn.style.display = 'none';
//         }
//         // addSvgUseHearts();
//       });
//     }
//   }
// }
// BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?';
let favorite = JSON.parse(localStorage.getItem('FavoriteCocktails'));
console.log(favorite);
// let cocktailsFavorites = [];

function loadLSCocktails() {
  if (!favorite || favorite.length === 0) {
    refs.gallery.innerHTML =
      "<div class='container'><h2 class='title-favorite-cocktails'>Sorry, you haven't chosen your favorite cocktails yet.</h2></div >";
  } else {
    // let arr = loadFromLS('FavoriteCocktails');
    // const fetches = arr.map(cocktailName => {
    //   return fetch(`${BASE_URL}s=${cocktailName}`).then(res => res.json());
    // });

    // Promise.all(fetches).then(arr => {
    //   arr = arr?.map(obj => {
    //     return obj.drinks[0];
    //   });
    //   cocktailsFavorites.push(...arr);
    //   //console.log(arr);
    //   createCocktail(cocktailsFavorites);

    const btnAdd = document.querySelectorAll('.js_btn_fav_add');
    for (let btn of btnAdd) {
      btn.style.display = 'none';
    }

    createCocktail(favorite);
    // });
  }
}

loadLSCocktails();

function removeLSFavoritCocktailLS(event) {
  const cocktailNameRemove = event.target.getAttribute(
    'data-cocktail-name-remove'
  );

  const index = favorite.findIndex(
    data => data.strDrink === cocktailNameRemove
  );

  favorite.splice(index, 1);

  refs.gallery.innerHTML = '';

  createCocktail(favorite);

  removeFromLS('FavoriteCocktails', favorite);

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

function readLSTheme() {
  const toggleBtn = document.querySelector('#toggle-theme');
  toggleBtn.addEventListener('click', function () {
    if (document.documentElement.hasAttribute('theme')) {
      document.documentElement.removeAttribute('theme');
      localStorage.removeItem('theme');
    } else {
      document.documentElement.setAttribute('theme', 'dark');
      localStorage.setItem('theme', 'black');
    }
  });
}

readLSTheme();

const btnThemePosition = localStorage.getItem('theme');

function saveButtonPositionDarkTheme() {
  const btnDarkTheme = document.querySelector('#highload1');

  if (btnThemePosition === 'black') {
    btnDarkTheme.classList.remove('checkboxBtn');
    btnDarkTheme.classList.add('checkboxBtnOrange');
  }
}

saveButtonPositionDarkTheme();

//========================================================================================//

//============ Скрипт меню открытия тачcкрином на планшетах и мобильных устройствах =====//
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
