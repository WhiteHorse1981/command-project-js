import { saveToLS, loadFromLS, removeFromLS } from './js/localSt.js';

import {
  fetchCocktails,
  fetchLetterCocktails,
  fetchRandomCocktails,
  fetchIngredientCocktails,
} from './js/fetchCocktails';
import {
  createCocktail,
  createIngredientCocktail,
  createMarkup,
  createMarkupDesktop,
} from './js/createMarkap.js';

import { openModalWindow } from './js/modalWindow.js';
import { callMobileMenu } from './js/menuMobile.js';
import { disableMobileMenuSearch } from './js/menuMobile.js';

const refs = {
  searchForm: document.querySelector('#search-form'),
  searchFormMobile: document.querySelector('#mobile-search-form'),
  gallery: document.querySelector('.gallery'),
  loadMoreBtn: document.querySelector('.btn-load-more'),
  searchLetterCocktailMobile: document.querySelector('.js-letter-cocktail-1'),
  searchLetterCocktail: document.querySelector('.js-letter-cocktail-2'),
  modal: document.querySelector('.modal'),
  closeModalBtn: document.querySelector('.modal-close-btn'),
  modalCreateCocktail: document.querySelector('.modal-create-cocktail'),
  titleContainer2: document.querySelector('.title-2'),
  titleContainer1: document.querySelector('.title-1'),
  modalIngredient: document.querySelector('.modal-ingredient'),
  modalCreateIngredient: document.querySelector('.modal-create-ingredient'),
  boxContainerTheme: document.querySelector('.js-theme-box'),
  btnDarkTheme: document.querySelector('.js-dark-them'),
  btnTheme1: document.querySelector('.btn-them-1'),
  btnTheme2: document.querySelector('.btn-them-2'),
  arrow: document.querySelector('.arrow'),
  arrowMobile: document.querySelector('.arrow-mobile'),
};

//====================ФУНКЦИЯ ОТКРЫТИЯ МОБИЛЬНОГО МЕНЮ =============================================================
callMobileMenu();
//====================ФУНКЦИЯ ЗАКРЫТИЯ МОБИЛЬНОГО МЕНЮ ПОСЛЕ НАЖАИТИЯ ПОИСКА КОКТЕЙЛЕЙ В ИНПУТЕ ====================
disableMobileMenuSearch();
// ==================ФУНЦИЯ ДОБАВЛЕНИЯ РАЗМЕТКИ ДЛЯ МОБИЛЬНОЙ ВЕРСИИ (ВЫПЫДАЮЩИЙ СПИСОК)============================
createMarkup();
// ====================ФУНКЦИЯ ДОБАВЛЕНИЯ РАЗМЕТКИ ДЛЯ DEKSTOP, TABLET==============================================
createMarkupDesktop();

// ====================ВЫВОД РАНДОМНЫХ КОКТЕЙЛЕЙ====================================================================
window.addEventListener('load', () => {
  fetchRandomCocktails().then(data => {
    // console.log(data.drinks);
    createCocktail(data.drinks);

    const btnRemove = document.querySelectorAll('.js_btn_fav_remove');
    for (let btn of btnRemove) {
      btn.style.display = 'none';
    }
  });
});
// =======================LISTENER =================================================================================
refs.searchForm.addEventListener('submit', onSearchForm);
refs.searchFormMobile.addEventListener('submit', searchFormMobile);
refs.searchLetterCocktailMobile.addEventListener(
  'click',
  onClickLetterCocktail
);
refs.searchLetterCocktail.addEventListener('click', onClickLetterCocktail);
refs.gallery.addEventListener('click', saveAndRemoveFavoritCocktailsLS);
refs.gallery.addEventListener('click', openModalWindow);
refs.modal.addEventListener('click', openModalWindow);
refs.gallery.addEventListener('click', onClickCocktailBtn);
refs.gallery.addEventListener('click', onClickCocktailBtn);
refs.modal.addEventListener('click', onClickIngredientBtn);
refs.arrow.addEventListener('click', onClickMenuHeader);
refs.arrowMobile.addEventListener('click', onClickMobileMenuHeader);
refs.titleContainer2.style.display = 'none';

function onSearchForm(event) {
  event.preventDefault();
  refs.gallery.innerHTML = '';
  // page = 1;
  const query = event.currentTarget.searchQuery.value.trim();

  fetchCocktails(query).then(data => {
    createCocktail(data.drinks);
    const btnRemove = document.querySelectorAll('.js_btn_fav_remove');
    for (let btn of btnRemove) {
      btn.style.display = 'none';
    }
  });
}

//====================ФОРМА ПОИСКА КОКТЕЙЛЕЙ В МОБИЛЬНОМ МЕНЮ=======================================================
function searchFormMobile(event) {
  event.preventDefault();
  refs.gallery.innerHTML = '';
  // page = 1;
  const query = event.currentTarget.searchQuery.value.trim();

  fetchCocktails(query).then(data => {
    createCocktail(data.drinks);
    const btnRemove = document.querySelectorAll('.js_btn_fav_remove');
    for (let btn of btnRemove) {
      btn.style.display = 'none';
    }
  });
}

function onClickCocktailBtn(event) {
  refs.modalCreateCocktail.innerHTML = '';
  // page = 1;
  const ingredient = event.target.getAttribute('data-id');
  const { id } = event.target.dataset;
}

function onClickIngredientBtn(event) {
  refs.modalCreateIngredient.innerHTML = '';
  const { name } = event.target.dataset;
  console.log(name);
  fetchNameIngredientCocktail(name).then(data => {
    console.log(data);
    createIngredientCard(data.ingredients);
  });
}

function onClickLetterCocktail(event) {
  refs.gallery.innerHTML = '';
  // page = 1;
  const letter = event.target.textContent;

  fetchLetterCocktails(letter).then(data => {
    if (data.drinks === null) {
      refs.titleContainer1.style.display = 'none';
      refs.gallery.innerHTML =
        "<div><h2 class='title-error'>Sorry, we didn't find any cocktail for you</h2><div class='containerImg'></div></div >";
    } else {
      createCocktail(data.drinks);
    }

    const btnRemove = document.querySelectorAll('.js_btn_fav_remove');
    for (let btn of btnRemove) {
      btn.style.display = 'none';
    }
  });
}

// =====================================================

// function saveAndRemoveFavoritCocktailsLS(event) {
//   let cocktailName = [];
//   cocktailName = event.target.getAttribute('data-cocktail-name');

//   // cocktails.push(index);
//   // console.log(cocktailName);
//   saveToLS('FavoriteCocktails', cocktailName);

//   // localStorage.setItem('FavoriteCocktails', JSON.stringify(cocktails));

//   // if (!cocktails.includes(cocktailName)) {
//   //   cocktails.push(cocktailName);
//   //   localStorage.setItem('FavoriteCocktails', cocktails);
//   // } else {
//   //   cocktails.splice(cocktails.indexOf(cocktailName), 1);
//   //   localStorage.setItem('FavoriteCocktails', cocktails);
//   // }
// }
//========СОХРАНЯЕТ И УДАЛЯЕТ КОКТЕЙЛИ В ls==================//
async function saveAndRemoveFavoritCocktailsLS(event) {
  const elParent = event.target.closest('.gallery-item');

  if (event.target.classList.contains('js_btn_fav_add')) {
    cocktailName = event.target.getAttribute('data-cocktail-name');
    console.log(cocktailName);

    const data = await fetchCocktails(cocktailName);
    let drink = { ...data.drinks[0] };
    saveToLS('FavoriteCocktails', drink);
    const btnRemove = elParent.children[1].children[1].children[2];

    btnRemove.style.display = 'flex';
    const btnAdd = elParent.children[1].children[1].children[1];
    btnAdd.style.display = 'none';
  } else if (event.target.classList.contains('js_btn_fav_remove')) {
    let favorite = JSON.parse(localStorage.getItem('FavoriteCocktails'));
    console.log(favorite);

    const cocktailNameRemove = event.target.getAttribute(
      'data-cocktail-name-remove'
    );

    const index = await favorite.findIndex(
      data => data.strDrink === cocktailNameRemove
    );

    favorite.splice(index, 1);

    removeFromLS('FavoriteCocktails', favorite);

    const btnRemove = elParent.children[1].children[1].children[2];
    console.log(btnRemove);
    btnRemove.style.display = 'none';
    const btnAdd = elParent.children[1].children[1].children[1];
    btnAdd.style.display = 'flex';
  }
}

// ====================ТЕМНАЯ ТЕМА=========================================
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

//============ Скрипт меню открытия тачкрином на планшетах и мобильных устройствах =====//
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

//=========== Открытие меню нажатием на стрелку для планшетов ================//
function onClickMenuHeader() {
  const subMenu = document.querySelector('.favorite-wrapper');
  const thisArrow = document.querySelector('.menu-arrow');

  subMenu.classList.toggle('open');
  thisArrow.classList.toggle('active');
}

//=========== Открытие меню нажатием на стрелку для мобилных устройств ================//
function onClickMobileMenuHeader() {
  const subMenu = document.querySelector('.mobile-favorite-list');
  const thisArrow = document.querySelector('.arrow-mobile');

  subMenu.classList.toggle('open');
  thisArrow.classList.toggle('active');
}
