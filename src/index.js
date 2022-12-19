import { saveToLS, loadFromLS } from './js/localSt.js';
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
} from './js/createCocktail';
import { toggleList, togglemList } from './js/openMenuAndFavorite.js';

import { openModalWindow } from './js/modalWindow.js';

const refs = {
  searchForm: document.querySelector('#search-form'),
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
};

toggleList();
togglemList();

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
// ==================ФУНЦИЯ ДОБАВЛЕНИЯ РАЗМЕТКИ ДЛЯ МОБИЛЬНОЙ ВЕРСИИ (ВЫПЫДАЮЩИЙ СПИСОК)============================
createMarkup();
// ====================ФУНКЦИЯ ДОБАВЛЕНИЯ РАЗМЕТКИ ДЛЯ DEKSTOP, TABLET==============================================
createMarkupDesktop();
// ====================ВЫВОД РАНДОМНЫХ КОКТЕЙЛЕЙ====================================================================

// =======================LISTENER =================================================================================
refs.searchForm.addEventListener('submit', onSearchForm);
refs.searchLetterCocktailMobile.addEventListener(
  'click',
  onClickLetterCocktail
);
refs.searchLetterCocktail.addEventListener('click', onClickLetterCocktail);
refs.gallery.addEventListener('click', saveFavoritCocktailLS);
refs.gallery.addEventListener('click', openModalWindow);
refs.modal.addEventListener('click', openModalWindow);
refs.gallery.addEventListener('click', onClickCocktailBtn);
refs.gallery.addEventListener('click', onClickCocktailBtn);
refs.modal.addEventListener('click', onClickIngredientBtn);
refs.titleContainer2.style.display = 'none';

function onSearchForm(event) {
  event.preventDefault();
  refs.gallery.innerHTML = '';
  page = 1;
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
  page = 1;
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
  page = 1;
  const letter = event.target.textContent;

  fetchLetterCocktails(letter).then(data => {
    if (data.drinks === null) {
      // console.log(123);
      refs.titleContainer1.style.display = 'none';
      refs.gallery.innerHTML =
        "<div><h2 class='title-error'>Sorry, we didn't find any cocktail for you</h2><div class='containerImg'></div></div >";
      // <img src='./images/error-img.jpg'></img>
    } else {
      createCocktail(data.drinks);
    }
    const btnRemove = document.querySelectorAll('.js_btn_fav_remove');
    for (let btn of btnRemove) {
      btn.style.display = 'none';
    }
  });

  // fetchLetterCocktails(letter).then(data => {
  //   createCocktail(data.drinks);
  //   const btnRemove = document.querySelectorAll('.js_btn_fav_remove');
  //   for (let btn of btnRemove) {
  //     btn.style.display = 'none';
  //   }
  // });
}

// =====================================================

function saveFavoritCocktailLS(event) {
  const cocktailName = event.target.getAttribute('data-cocktail-name');
  // console.log(cocktailName);
  saveToLS('FavoriteCocktails', cocktailName);
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
const toggleBtn = document.querySelector('#toggle-theme');
toggleBtn.addEventListener('click', function () {
  if (document.documentElement.hasAttribute('theme')) {
    document.documentElement.removeAttribute('theme');
    localStorage.removeItem('theme');
  } else {
    document.documentElement.setAttribute('theme', 'dark');
    localStorage.setItem('theme', 1);
  }
});
