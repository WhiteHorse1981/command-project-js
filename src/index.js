import axios from 'axios';
import { saveToLS, loadFromLS, removeFromLS } from './js/localSt.js';
import {
  fetchCocktails,
  fetchLetterCocktails,
  fetchRandomCocktails,
  fetchIngredientCocktails,
  fetchNameIngredientCocktail,
} from './js/fetchCocktails';
import {
  createCocktail,
  createIngredientCocktail,
  createMarkup,
  createMarkupDesktop,
  createIngredientCard,
} from './js/createMarkap.js';

import { openModalWindow, openModalIngredient } from './js/modalWindow.js';
import { callMobileMenu } from './js/menuMobile.js';
import { disableMobileMenuSearch } from './js/menuMobile.js';

const refs = {
  gallery: document.querySelector('.gallery'),
  searchForm: document.querySelector('#search-form'),
  searchFormMobile: document.querySelector('#mobile-search-form'),
  searchLetterCocktailMobile: document.querySelector('.js-letter-cocktail-1'),
  // loadMoreBtn: document.querySelector('.btn-load-more'),
  searchLetterCocktail: document.querySelector('.js-letter-cocktail-2'),
  modal: document.querySelector('.modal'),
  // closeModalBtn: document.querySelector('.modal-close-btn'),
  modalCreateCocktail: document.querySelector('.modal-create-cocktail'),
  modalingredient: document.querySelector('.modal-create-ingredient'),
  titleContainer2: document.querySelector('.title-2'),
  titleContainer3: document.querySelector('.title-3'),
  titleContainer1: document.querySelector('.title-1'),
  // modalIngredient: document.querySelector('.modal-ingredient'),
  modalCreateIngredient: document.querySelector('.modal-create-ingredient'),
  // boxContainerTheme: document.querySelector('.js-theme-box'),
  btnDarkTheme: document.querySelector('.js-dark-them'),
  // btnTheme1: document.querySelector('.btn-them-1'),
  // btnTheme2: document.querySelector('.btn-them-2'),
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
refs.modal.addEventListener(
  'click',
  saveAndRemoveFavoritCocktailsLStoModalMobile
);
refs.modal.addEventListener(
  'click',
  saveAndRemoveFavoritCocktailsLStoModalDesktop
);
refs.gallery.addEventListener('click', openModalIngredient);
refs.modal.addEventListener('click', openModalIngredient);
refs.gallery.addEventListener('click', onClickCocktailBtn);
refs.modal.addEventListener('click', onClickIngredientBtn);
refs.arrow.addEventListener('click', onClickMenuHeader);
refs.arrowMobile.addEventListener('click', onClickMobileMenuHeader);
refs.titleContainer2.style.display = 'none';
refs.titleContainer3.style.display = 'none';

async function onSearchForm(event) {
  event.preventDefault();
  refs.gallery.innerHTML = '';
  // page = 1;

  try {
    const query = event.currentTarget.searchQuery.value.trim();

    const data = await fetchCocktails(query);
    createCocktail(data.drinks);

    const btnRemove = document.querySelectorAll('.js_btn_fav_remove');
    for (let btn of btnRemove) {
      btn.style.display = 'none';
    }

    // fetchCocktails(query).then(data => {
    //   createCocktail(data.drinks);
    //   const btnRemove = document.querySelectorAll('.js_btn_fav_remove');
    //   for (let btn of btnRemove) {
    //     btn.style.display = 'none';
    //   }
    // });
  } catch (error) {
    console.log(error);
  }
}

//====================ФОРМА ПОИСКА КОКТЕЙЛЕЙ В МОБИЛЬНОМ МЕНЮ=======================================================
async function searchFormMobile(event) {
  event.preventDefault();
  refs.gallery.innerHTML = '';
  // page = 1;
  try {
    const query = event.currentTarget.searchQuery.value.trim();

    const data = await fetchCocktails(query);
    createCocktail(data.drinks);

    const btnRemove = document.querySelectorAll('.js_btn_fav_remove');
    for (let btn of btnRemove) {
      btn.style.display = 'none';
    }

    // fetchCocktails(query).then(data => {
    //   createCocktail(data.drinks);
    //   const btnRemove = document.querySelectorAll('.js_btn_fav_remove');
    //   for (let btn of btnRemove) {
    //     btn.style.display = 'none';
    //   }
    // });
  } catch (error) {
    console.log(error);
  }
}

async function onClickLetterCocktail(event) {
  refs.gallery.innerHTML = '';
  // page = 1;

  try {
    const letter = event.target.textContent;

    const data = await fetchLetterCocktails(letter);
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

    // fetchLetterCocktails(letter).then(data => {
    //   if (data.drinks === null) {
    //     refs.titleContainer1.style.display = 'none';
    //     refs.gallery.innerHTML =
    //       "<div><h2 class='title-error'>Sorry, we didn't find any cocktail for you</h2><div class='containerImg'></div></div >";
    //   } else {
    //     createCocktail(data.drinks);
    //   }

    //   const btnRemove = document.querySelectorAll('.js_btn_fav_remove');
    //   for (let btn of btnRemove) {
    //     btn.style.display = 'none';
    //   }
    // });
  } catch (error) {
    console.log(error);
  }
}

// =====================================================

// function saveAndRemoveFavoritCocktailsLS(event) {

//   const elParent = event.target.closest('.gallery-item');
//   let cocktailName = [];
//   cocktailName = event.target.getAttribute('data-cocktail-name');
//   console.log(cocktailName);

//   if (event.target.classList.contains('js_btn_fav_add')) {
//     const btnRemove = elParent.children[1].children[1].children[2];
//     btnRemove.style.display = 'flex';
//     const btnAdd = elParent.children[1].children[1].children[1];
//     btnAdd.style.display = 'none';
//   } else if (event.target.classList.contains('js_btn_fav_remove')) {
//     let favorite = JSON.parse(localStorage.getItem('FavoriteCocktails'));
//     console.log(favorite);
//     const cocktailNameRemove = event.target.getAttribute(
//       'data-cocktail-name-remove'
//     );
//     const index = favorite.findIndex(drink => drink === cocktailNameRemove);
//     favorite.splice(index, 1);
//     removeFromLS('FavoriteCocktails', favorite);
//     const btnRemove = elParent.children[1].children[1].children[2];
//     console.log(btnRemove);
//     btnRemove.style.display = 'none';
//     const btnAdd = elParent.children[1].children[1].children[1];
//     btnAdd.style.display = 'flex';
//   }

//   // fetchCocktails(cocktailName).then(data => {
//   //   let drink = { ...data.drinks[0] };
//   //   saveToLS('FavoriteCocktails', drink);
//   // });

//   saveToLS('FavoriteCocktails', cocktailName);

// }
//======== СОХРАНЯЕТ И УДАЛЯЕТ КОКТЕЙЛИ В LS ==================//
let favoriteDrinks;
if (JSON.parse(localStorage.getItem('FavoriteCocktails')) === null) {
  favoriteDrinks = [];
} else {
  favoriteDrinks = JSON.parse(localStorage.getItem('FavoriteCocktails'));
}
async function saveAndRemoveFavoritCocktailsLS(event) {
  // const cocktailName = event.target.getAttribute('data-cocktail-name');
  // saveToLS('FavoriteCocktails', cocktailName);
  const elParent = event.target.closest('.gallery-item');
  if (event.target.classList.contains('js_btn_fav_add')) {
    const cocktailName =
      elParent.children[1].children[0].children[0].textContent;
    console.log(cocktailName);

    const data = await fetchCocktails(cocktailName);
    let drink = { ...data.drinks[0] };
    // favoriteDrinks.push(drink);
    saveToLS('FavoriteCocktails', drink);
    const btnRemove = elParent.children[1].children[1].children[2];
    btnRemove.style.display = 'flex';
    const btnAdd = elParent.children[1].children[1].children[1];
    console.log(btnAdd);
    btnAdd.style.display = 'none';
  } else if (event.target.classList.contains('js_btn_fav_remove')) {
    let favorites = JSON.parse(localStorage.getItem('FavoriteCocktails'));

    favorites = favorites.filter(drink => drink.idDrink !== elParent.id);
    removeFromLS('FavoriteCocktails', favorites);

    const btnRemove = elParent.children[1].children[1].children[2];
    console.log(btnRemove);
    btnRemove.style.display = 'none';
    const btnAdd = elParent.children[1].children[1].children[1];
    btnAdd.style.display = 'flex';
  }
}

//==================== СОХРАНЯЕТ И УДАЛЯЕТ КОКТЕЙЛИ В LS ИЗ МОБИЛЬНОГО МОДАЛЬНОГО ОКНА =====================

async function saveAndRemoveFavoritCocktailsLStoModalMobile(event) {
  const elParent = event.target.closest('.modal-container-mobile');
  if (event.target.classList.contains('js-add-to-favorite')) {
    const cocktailName = elParent.children[0].textContent;

    const data = await fetchCocktails(cocktailName);
    let drink = { ...data.drinks[0] };

    saveToLS('FavoriteCocktails', drink);
    const btnRemove = elParent.children[4].children[1];
    btnRemove.style.display = 'flex';
    const btnAdd = elParent.children[4].children[0];
    btnAdd.style.display = 'none';
  } else if (event.target.classList.contains('js-remove-from-favorite')) {
    const cocktailName = elParent.children[0].textContent;

    let favorites = JSON.parse(localStorage.getItem('FavoriteCocktails'));
    favorites = favorites.filter(drink => drink.strDrink !== cocktailName);

    removeFromLS('FavoriteCocktails', favorites);

    const btnRemove = elParent.children[4].children[1];
    btnRemove.style.display = 'none';
    const btnAdd = elParent.children[4].children[0];
    btnAdd.style.display = 'flex';
  }
}

//============================================================================================
//==================== СОХРАНЯЕТ И УДАЛЯЕТ КОКТЕЙЛИ В LS ИЗ ДЕСКТОПНОГО И ПЛАНШЕТНОГО МОДАЛЬНОГО ОКНА =====================

async function saveAndRemoveFavoritCocktailsLStoModalDesktop(event) {
  const elParent = event.target.closest('.modal-container');
  if (event.target.classList.contains('js-add-to-favorite')) {
    const cocktailName =
      elParent.children[0].children[1].children[0].textContent;

    const data = await fetchCocktails(cocktailName);
    let drink = { ...data.drinks[0] };

    saveToLS('FavoriteCocktails', drink);
    const btnRemove = elParent.children[2].children[1];
    btnRemove.style.display = 'flex';
    const btnAdd = elParent.children[2].children[0];
    btnAdd.style.display = 'none';
  } else if (event.target.classList.contains('js-remove-from-favorite')) {
    const cocktailName =
      elParent.children[0].children[1].children[0].textContent;

    let favorites = JSON.parse(localStorage.getItem('FavoriteCocktails'));
    favorites = favorites.filter(drink => drink.strDrink !== cocktailName);

    removeFromLS('FavoriteCocktails', favorites);

    const btnRemove = elParent.children[2].children[1];
    btnRemove.style.display = 'none';
    const btnAdd = elParent.children[2].children[0];
    btnAdd.style.display = 'flex';
  }
}

//============================================================================================

async function onClickCocktailBtn(event) {
  refs.modalCreateCocktail.innerHTML = '';
  const elParent = event.target.closest('.gallery-item');
  if (event.target.classList.contains('js-learn-btn')) {
    const data = await fetchIngredientCocktails(elParent.id);

    createIngredientCocktail(data.drinks);

    const ingredients = document.querySelectorAll('.modal-ingredient-btn');

    for (let i = 0; i < ingredients.length; i++) {
      if (ingredients[i].dataset.ingredientName == 'null') {
        ingredients[i].textContent = '';
      }
    }

    const btnRemove = document.querySelectorAll('.js-remove-from-favorite');
    console.log(btnRemove);

    for (let btn of btnRemove) {
      btn.style.display = 'none';
    }

    // fetchIngredientCocktails(elParent.id).then(data => {
    //   createIngredientCocktail(data.drinks);
    //   console.log(data.drinks);
    //   const btnRemove = document.querySelectorAll('.js-remove-from-favorite');
    //   for (let btn of btnRemove) {
    //     btn.style.display = 'none';
    //   }
    // });
  }
}

function onClickIngredientBtn(event) {
  refs.modalCreateIngredient.innerHTML = '';
  const nameIngredient = event.target.getAttribute('data-ingredient-name');
  fetchNameIngredientCocktail(nameIngredient).then(data => {
    console.log(data.ingredients);
    createIngredientCard(data.ingredients);

    const btnRemove = document.querySelectorAll(
      '.js-remove-from-favorite-ingredient-2'
    );
    console.log(btnRemove);
    for (let btn of btnRemove) {
      btn.style.display = 'none';
    }
  });
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
