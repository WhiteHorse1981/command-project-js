import { saveToLS, removeFromLS } from './js/localSt.js';
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
  searchLetterCocktail: document.querySelector('.js-letter-cocktail-2'),
  modal: document.querySelector('.modal'),
  modalCreateCocktail: document.querySelector('.modal-create-cocktail'),
  modalingredient: document.querySelector('.modal-create-ingredient'),
  titleContainer2: document.querySelector('.title-2'),
  titleContainer3: document.querySelector('.title-3'),
  titleContainer1: document.querySelector('.title-1'),
  modalCreateIngredient: document.querySelector('.modal-create-ingredient'),
  btnDarkTheme: document.querySelector('.js-dark-them'),
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
refs.modalCreateIngredient.addEventListener(
  'click',
  saveAndRemoveFavoritIngredientsLS
);
refs.gallery.addEventListener('click', openModalIngredient);
refs.modal.addEventListener('click', openModalIngredient);
refs.gallery.addEventListener('click', onClickCocktailBtn);
refs.modal.addEventListener('click', onClickIngredientBtn);
refs.arrow.addEventListener('click', onClickMenuHeader);
refs.arrowMobile.addEventListener('click', onClickMobileMenuHeader);
refs.titleContainer2.style.display = 'none';
refs.titleContainer3.style.display = 'none';

//==================== ФОРМА ПОИСКА КОКТЕЙЛЕЙ =======================================================
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

//==================== ФОРМА ПОИСКА КОКТЕЙЛЕЙ В МОБИЛЬНОМ МЕНЮ =======================================================
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

//======== СОХРАНЯЕТ И УДАЛЯЕТ КОКТЕЙЛИ В LS =======================================================================
let favoriteDrinks;
if (JSON.parse(localStorage.getItem('FavoriteCocktails')) === null) {
  favoriteDrinks = [];
} else {
  favoriteDrinks = JSON.parse(localStorage.getItem('FavoriteCocktails'));
}
async function saveAndRemoveFavoritCocktailsLS(event) {
  const elParent = event.target.closest('.gallery-item');
  if (event.target.classList.contains('js_btn_fav_add')) {
    const cocktailName =
      elParent.children[1].children[0].children[0].textContent;

    const data = await fetchCocktails(cocktailName);
    let drink = { ...data.drinks[0] };
    // favoriteDrinks.push(drink);
    saveToLS('FavoriteCocktails', drink);
    const btnRemove = elParent.children[1].children[1].children[2];
    btnRemove.style.display = 'flex';
    const btnAdd = elParent.children[1].children[1].children[1];
    btnAdd.style.display = 'none';
  } else if (event.target.classList.contains('js_btn_fav_remove')) {
    let favorites = JSON.parse(localStorage.getItem('FavoriteCocktails'));

    favorites = favorites.filter(drink => drink.idDrink !== elParent.id);
    removeFromLS('FavoriteCocktails', favorites);

    const btnRemove = elParent.children[1].children[1].children[2];
    btnRemove.style.display = 'none';
    const btnAdd = elParent.children[1].children[1].children[1];
    btnAdd.style.display = 'flex';
  }
}

//==================== СОХРАНЯЕТ И УДАЛЯЕТ КОКТЕЙЛИ В LS ИЗ МОБИЛЬНОГО МОДАЛЬНОГО ОКНА ====================================
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
//==================== СОХРАНЯЕТ И УДАЛЯЕТ ИНГРИДИЕНТЫ В LS ИЗ МОДАЛЬНОГО ОКНА ============================================

let favoriteIngredient;
if (JSON.parse(localStorage.getItem('FavoriteIngredient')) === null) {
  favoriteIngredient = [];
} else {
  favoriteIngredient = JSON.parse(localStorage.getItem('FavoriteIngredient'));
}

async function saveAndRemoveFavoritIngredientsLS(event) {
  const elParent = event.target.closest('.modal-container-ingredient');
  if (event.target.classList.contains('js-add-to-favorite-ingredient-2')) {
    const ingredientName = elParent.children[0].children[0].textContent;

    const data = await fetchNameIngredientCocktail(ingredientName);
    let ingredient = { ...data.ingredients[0] };

    saveToLS('FavoriteIngredients', ingredient);

    const btnRemove = elParent.children[0].children[5].children[1];
    btnRemove.style.display = 'flex';
    const btnAdd = elParent.children[0].children[5].children[0];
    btnAdd.style.display = 'none';
  } else if (
    event.target.classList.contains('js-remove-from-favorite-ingredient')
  ) {
    const ingredientName = elParent.children[0].children[0].textContent;

    let ingredients = JSON.parse(localStorage.getItem('FavoriteIngredients'));
    ingredients = ingredients.filter(
      ingredient => ingredient.strIngredient !== ingredientName
    );

    removeFromLS('FavoriteIngredients', ingredients);

    const btnRemove = elParent.children[0].children[5].children[1];
    btnRemove.style.display = 'none';
    const btnAdd = elParent.children[0].children[5].children[0];
    btnAdd.style.display = 'flex';
  }
}

//==================== ФУНКЦИЯ ОТКРЫТИЯ МОДАЛЬНОГО ОКНА КОКТЕЙЛЛЯ =========================================================
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

//==================== ФУНКЦИЯ ОТКРЫТИЯ МОДАЛЬНОГО ОКНА ИНГРИДИЕНТА В МОДАЛЬНОМ ОКНЕ КОКТЕЛЯ ===================================
function onClickIngredientBtn(event) {
  refs.modalCreateIngredient.innerHTML = '';
  const nameIngredient = event.target.getAttribute('data-ingredient-name');

  fetchNameIngredientCocktail(nameIngredient).then(data => {
    createIngredientCard(data.ingredients);

    const btnRemove = document.querySelectorAll(
      '.js-remove-from-favorite-ingredient-2'
    );
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

//========== КНОПКА ВВЕРХ ===============================================================
export const btnUp = {
  el: document.querySelector('.btn-up'),
  scrolling: false,
  show() {
    if (
      this.el.classList.contains('btn-up_hide') &&
      !this.el.classList.contains('btn-up_hiding')
    ) {
      this.el.classList.remove('btn-up_hide');
      this.el.classList.add('btn-up_hiding');
      window.setTimeout(() => {
        this.el.classList.remove('btn-up_hiding');
      }, 300);
    }
  },
  hide() {
    if (
      !this.el.classList.contains('btn-up_hide') &&
      !this.el.classList.contains('btn-up_hiding')
    ) {
      this.el.classList.add('btn-up_hiding');
      window.setTimeout(() => {
        this.el.classList.add('btn-up_hide');
        this.el.classList.remove('btn-up_hiding');
      }, 300);
    }
  },
  addEventListener() {
    // при прокрутке окна (window)
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      if (this.scrolling && scrollY > 0) {
        return;
      }
      this.scrolling = false;
      // если пользователь прокрутил страницу более чем на 200px
      if (scrollY > 400) {
        // сделаем кнопку .btn-up видимой
        this.show();
      } else {
        // иначе скроем кнопку .btn-up
        this.hide();
      }
    });
    // при нажатии на кнопку .btn-up
    document.querySelector('.btn-up').onclick = () => {
      this.scrolling = true;
      this.hide();
      // переместиться в верхнюю часть страницы
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    };
  },
};

btnUp.addEventListener();
