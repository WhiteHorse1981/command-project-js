import { removeFromLS, saveToLS } from './js/localSt.js';
import { callMobileMenu } from './js/menuMobile.js';
import { openModalIngredient } from './js/modalWindow.js';
import { fetchNameIngredientCocktail } from './js/fetchCocktails';
import { createIngredientCard, createIngredient } from './js/createMarkap.js';

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
  modalCreateIngredient: document.querySelector('.modal-create-ingredient'),
  btnLS: document.querySelector('.add-descr'),
  titleContainer1: document.querySelector('.title-1'),
  titleContainer2: document.querySelector('.title-2'),
  arrow: document.querySelector('.arrow'),
  arrowMobile: document.querySelector('.arrow-mobile'),
};

refs.searchForm.addEventListener('submit', onSearchFormIngredientLS);
refs.titleContainer1.style.display = 'none';
refs.titleContainer2.style.display = 'none';
refs.gallery.addEventListener('click', removeLSFavoritIngredient);
refs.arrow.addEventListener('click', onClickMenuHeader);
refs.arrowMobile.addEventListener('click', onClickMobileMenuHeader);
refs.gallery.addEventListener('click', openModalIngredient);
refs.modal.addEventListener('click', openModalIngredient);
refs.gallery.addEventListener('click', onClickLearntMoreBtn);
refs.modalCreateIngredient.addEventListener(
  'click',
  saveAndRemoveFavoritIngredientsLSFavoritesToIngredienthtml
);

//====================ФУНКЦИЯ ОТКРЫТИЯ МОБИЛЬНОГО МЕНЮ =============================================================
callMobileMenu();

//==================== ФУНКЦИЯ ПОИСКА ИНГРИДИЕНТА ИЗ ФАВОРИТОВ ИНГРИДИЕНТОВ ingredient.html ================================
let favoritesIngredient = JSON.parse(
  localStorage.getItem('FavoriteIngredients')
);

function onSearchFormIngredientLS(event) {
  event.preventDefault();
  refs.gallery.innerHTML = '';
  // page = 1;

  try {
    const ingredientName = event.currentTarget.searchQuery.value.trim();

    const newIngredientArray = favoritesIngredient.filter(
      favoritesIngredient =>
        favoritesIngredient.strIngredient === ingredientName
    );

    createIngredient(newIngredientArray);
    const btnAdd = document.querySelectorAll('.js-add-to-favorite-ingredient');
    for (let btn of btnAdd) {
      btn.style.display = 'none';
    }
  } catch (error) {
    console.log(error);
  }
}

//==================== ФУНКЦИЯ РЕНДЕРИТ ИНГРИДИЕНТЫ НА СТРАНИЦЕ ingredient.html=====================
window.addEventListener('load', loadLSIngredient);
function loadLSIngredient() {
  if (!favoritesIngredient || favoritesIngredient.length === 0) {
    refs.gallery.innerHTML =
      "<div class='container'><h2 class='title-favorite-cocktails'>Sorry, you haven't chosen your favorite ingridients yet.</h2></div >";
  } else {
    createIngredient(favoritesIngredient);

    const btnAdd = document.querySelectorAll('.js-add-to-favorite-ingredient');
    for (let btn of btnAdd) {
      btn.style.display = 'none';
    }
  }
}

//==================== ФУНКЦИЯ УДАЛЕНИЯ ИНГРИДИЕНТА НА СТРАНИЦЕ ingredient.html=====================
async function removeLSFavoritIngredient(event) {
  const elParent = event.target.closest('.ingredient-box');

  if (event.target.classList.contains('js-remove-from-favorite-ingredient')) {
    const ingredientName = elParent.children[0].children[0].textContent;

    favoritesIngredient = favoritesIngredient.filter(
      ingredient => ingredient.strIngredient !== ingredientName
    );

    refs.gallery.innerHTML = '';
    createIngredient(favoritesIngredient);

    removeFromLS('FavoriteIngredients', favoritesIngredient);
    const btnAdd = document.querySelectorAll('.js-add-to-favorite-ingredient');
    for (let btn of btnAdd) {
      btn.style.display = 'none';
    }
  }
}

//==================== ФУНКЦИЯ ОТКРЫТИЯ МОДАЛЬНОГО НА СТРАНИЦЕ ingredient.html =====================
function onClickLearntMoreBtn(event) {
  refs.modalCreateIngredient.innerHTML = '';
  const elParent = event.target.closest('.ingredient-box');
  if (event.target.classList.contains('js-learn-btn')) {
    const nameIngredient = elParent.children[0].children[0].textContent;

    fetchNameIngredientCocktail(nameIngredient).then(data => {
      createIngredientCard(data.ingredients);

      const btnAdd = document.querySelectorAll(
        '.js-add-to-favorite-ingredient'
      );
      for (let btn of btnAdd) {
        btn.style.display = 'none';
      }
    });
  }
}

//==================== СОХРАНЯЕТ И УДАЛЯЕТ ИНГРИДИЕНТЫ В LS ИЗ МОДАЛЬНОГО ОКНА НА СТРАНИЦЕ ingredient.html =====================
let favoriteIngredient;
if (JSON.parse(localStorage.getItem('FavoriteIngredient')) === null) {
  favoriteIngredient = [];
} else {
  favoriteIngredient = JSON.parse(localStorage.getItem('FavoriteIngredient'));
}

async function saveAndRemoveFavoritIngredientsLSFavoritesToIngredienthtml(
  event
) {
  const elParent = event.target.closest('.modal-container-ingredient');
  if (event.target.classList.contains('js-remove-from-favorite-ingredient')) {
    const ingredientName = elParent.children[0].children[0].textContent;

    let ingredients = JSON.parse(localStorage.getItem('FavoriteIngredients'));
    ingredients = ingredients.filter(
      ingredient => ingredient.strIngredient !== ingredientName
    );

    removeFromLS('FavoriteIngredients', ingredients);
    refs.gallery.innerHTML = '';
    createIngredient(ingredients);

    const btnAddIngredient = document.querySelectorAll(
      '.js-add-to-favorite-ingredient'
    );
    for (let btn of btnAddIngredient) {
      btn.style.display = 'none';
    }

    const btnRemove = elParent.children[0].children[5].children[1];
    btnRemove.style.display = 'none';
    const btnAdd = elParent.children[0].children[5].children[0];
    btnAdd.style.display = 'flex';
  } else if (
    event.target.classList.contains('js-add-to-favorite-ingredient-2')
  ) {
    const ingredientName = elParent.children[0].children[0].textContent;

    const data = await fetchNameIngredientCocktail(ingredientName);
    let ingredient = { ...data.ingredients[0] };

    saveToLS('FavoriteIngredients', ingredient);
    refs.gallery.innerHTML = '';
    createIngredient(favoritesIngredient);

    const btnAddIngredient = document.querySelectorAll(
      '.js-add-to-favorite-ingredient'
    );
    for (let btn of btnAddIngredient) {
      btn.style.display = 'none';
    }

    const btnRemove = elParent.children[0].children[5].children[1];
    btnRemove.style.display = 'flex';
    const btnAdd = elParent.children[0].children[5].children[0];
    btnAdd.style.display = 'none';
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

//======= ФУНКЦИЯ СОХРАНЕНИЯ ПОЗИЦИИ КНОПКИ ВКЛЮЧЕНИЯ ТЕМНОЙ ТЕМЫ ПОСЛЕ ПЕРЕЗАГРУЗКИ СТРАНИЦЫ ==============================
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
//========================================================//
