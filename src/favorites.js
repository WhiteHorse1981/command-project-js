const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?';
import { loadFromLS, removeFromLS, saveToLS } from './js/localSt.js';

import { createCocktail } from './js/createCocktail';

const refs = {
  searchForm: document.querySelector('#search-form'),
  gallery: document.querySelector('.gallery'),
  loadMoreBtn: document.querySelector('.btn-load-more'),
  searchLetterCocktailMobile: document.querySelector('.js-letter-cocktail-1'),
  searchLetterCocktail: document.querySelector('.js-letter-cocktail-2'),
  favoritCocktails: document.querySelector('.favorit'),
  btnLS: document.querySelector('.add-descr'),
  titleContainer1: document.querySelector('.title-1'),
};

const cocktails = [];

// =======================LISTENER =========================================================
refs.searchForm.addEventListener('submit', onSearchForm);
refs.titleContainer1.style.display = 'none';
refs.gallery.addEventListener('click', removeLSFavoritCocktailLS);
// ======================================================================================
function onSearchForm(event) {
  event.preventDefault();
}

function loadLSCocktails() {
  const arr = loadFromLS('FavoriteCocktails');
  const fetches = arr.map(cocktailName => {
    return fetch(`${BASE_URL}s=${cocktailName}`).then(res => res.json());
  });
  Promise.all(fetches).then(arr => {
    arr = arr.map(obj => {
      return obj.drinks[0];
    });
    cocktails.push(...arr);
    //console.log(arr);
    createCocktail(cocktails);

    const btnAdd = document.querySelectorAll('.js_btn_fav_add');
    for (let btn of btnAdd) {
      btn.style.display = 'none';
    }
  });
}
loadLSCocktails();

function removeLSFavoritCocktailLS(event) {
  const cocktailNameRemove = event.target.getAttribute(
    'data-cocktail-name-remove'
  );
  removeFromLS(cocktailNameRemove);
  const index = cocktails.findIndex(
    ({ strDrink }) => strDrink === cocktailNameRemove
  );
  cocktails.splice(index, 1);

  refs.gallery.innerHTML = '';
  // console.log(arr);
  createCocktail(cocktails);

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
  console.log(localStorage.setItem('theme', '"15151551551"'));
  if (document.documentElement.hasAttribute('theme')) {
    document.documentElement.removeAttribute('theme');
    localStorage.removeItem('theme');
  } else {
    document.querySelectorAll('.checkboxBtn').forEach(el => {
      el.onchange = () => localStorage.setItem(el.id, el.checked);
      el.checked = localStorage.getItem(el.id === 'true');
    });

    document.documentElement.setAttribute('theme', 'dark');
    localStorage.setItem('theme', 1);
  }
});
