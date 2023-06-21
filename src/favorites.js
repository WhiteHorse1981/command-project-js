import { loadFromLS, removeFromLS, saveToLS } from './js/localSt.js';
import { callMobileMenu } from './js/menuMobile.js';
import { openModalWindow } from './js/modalWindow.js';
import { fetchIngredientCocktails } from './js/fetchCocktails';
import { createCocktail, createIngredientCocktail } from './js/createMarkap.js';

// =======================LISTENER =========================================================
const refs = {
  searchForm: document.querySelector('#search-form'),
  gallery: document.querySelector('.gallery'),
  loadMoreBtn: document.querySelector('.btn-load-more'),
  searchLetterCocktailMobile: document.querySelector('.js-letter-cocktail-1'),
  searchLetterCocktail: document.querySelector('.js-letter-cocktail-2'),
  favoritCocktails: document.querySelector('.favorit'),
  modalCreateCocktail: document.querySelector('.modal-create-cocktail'),
  modal: document.querySelector('.modal'),
  // btnFavRemove: document.querySelector('.js_btn_fav_remove'),
  btnLS: document.querySelector('.add-descr'),
  titleContainer1: document.querySelector('.title-1'),
  arrow: document.querySelector('.arrow'),
  arrowMobile: document.querySelector('.arrow-mobile'),
};

refs.searchForm.addEventListener('submit', onSearchFormCoctailsLS);
refs.titleContainer1.style.display = 'none';
refs.gallery.addEventListener('click', removeLSFavoritCocktailLS);
refs.arrow.addEventListener('click', onClickMenuHeader);
refs.arrowMobile.addEventListener('click', onClickMobileMenuHeader);
refs.gallery.addEventListener('click', openModalWindow);
refs.modal.addEventListener('click', openModalWindow);
refs.gallery.addEventListener('click', onClickCocktailBtn);

// ======================================================================================

//====================ФУНКЦИЯ ОТКРЫТИЯ МОБИЛЬНОГО МЕНЮ =============================================================
callMobileMenu();

// function onSearchForm(event) {
//   event.preventDefault();
// }

// let cocktailsFavorites = [];

// BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?';

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
//       // const titleNoCocktails = document.querySelector('.title-cocktails-now');
//       // titleNoCocktails.style.display = 'none';
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

let favorites = JSON.parse(localStorage.getItem('FavoriteCocktails'));

function onSearchFormCoctailsLS(event) {
  event.preventDefault();
  refs.gallery.innerHTML = '';
  // page = 1;

  try {
    const cocktailName = event.currentTarget.searchQuery.value.trim();
    console.log(cocktailName);

    const newCocktailsArray = favorites.filter(
      favorites => favorites.strDrink === cocktailName
    );

    createCocktail(newCocktailsArray);
    const btnAdd = document.querySelectorAll('.js_btn_fav_add');
    for (let btn of btnAdd) {
      btn.style.display = 'none';
    }
  } catch (error) {
    console.log(error);
  }
}

window.addEventListener('load', loadLSCocktails);
function loadLSCocktails() {
  if (!favorites || favorites.length === 0) {
    refs.gallery.innerHTML =
      "<div class='container'><h2 class='title-favorite-cocktails'>Sorry, you haven't chosen your favorite cocktails yet.</h2></div >";
  } else {
    createCocktail(favorites);

    const btnAdd = document.querySelectorAll('.js_btn_fav_add');
    for (let btn of btnAdd) {
      btn.style.display = 'none';
    }
  }
}

async function removeLSFavoritCocktailLS(event) {
  const elParent = event.target.closest('.gallery-item');

  if (event.target.classList.contains('js_btn_fav_remove')) {
    favorites = favorites.filter(drink => drink.idDrink !== elParent.id);

    refs.gallery.innerHTML = '';
    createCocktail(favorites);

    removeFromLS('FavoriteCocktails', favorites);
    const btnAdd = document.querySelectorAll('.js_btn_fav_add');
    for (let btn of btnAdd) {
      btn.style.display = 'none';
    }
  }
}

function onClickCocktailBtn(event) {
  refs.modalCreateCocktail.innerHTML = '';
  const elParent = event.target.closest('.gallery-item');

  if (event.target.classList.contains('js-learn-btn')) {
    fetchIngredientCocktails(elParent.id).then(data => {
      createIngredientCocktail(data.drinks);

      const ingredients = document.querySelectorAll('.modal-ingredient-link');

      for (let i = 0; i < ingredients.length; i++) {
        if (ingredients[i].dataset.ingredientName == 'null') {
          ingredients[i].textContent = '';
        }
      }
      console.log(data);
      const btnRemove = document.querySelectorAll('.js-remove-from-favorite');
      for (let btn of btnRemove) {
        btn.style.display = 'none';
      }
    });
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
