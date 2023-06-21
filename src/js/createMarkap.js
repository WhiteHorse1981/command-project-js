const markupMobile = document.querySelector('.dropdown-content');
const markupDesktop = document.querySelector('.list-cocktail');

// ==================ФУНЦИЯ ДОБАВЛЕНИЯ РАЗМЕТКИ ПО ПОИСКУ=======================
export function createCocktail(cocktails) {
  const iconHeart1 = document.querySelector('.div-icon-heart1');
  const iconHeart2 = document.querySelector('.div-icon-heart2');
  const useHeart1 = iconHeart1.href.baseVal;
  const useHeart2 = iconHeart2.href.baseVal;

  const markup = cocktails
    .map(cocktail => {
      const { strDrinkThumb, strImageAttribution, strDrink, idDrink } =
        cocktail;
      return `
        
          <div id="${idDrink}" class="gallery-item gallery__link">
            <img class="gallery-item__img" src="${strDrinkThumb}" alt="${strImageAttribution}" loading="lazy" />
            <div class="info">
              <div class="info-item">
                <p class="info-descr">${strDrink}</p>
              </div>
              <div class="btn-item">
                
                  <button type="button" class="info-btn-descr info-btn js-learn-btn" data-modal-open="${strDrink}" data-id="${idDrink}">Learn more</button>
                
                
                  <button type="button" class="add-descr add-favorite js_btn_fav_add" data-cocktail-name="${strDrink}">
                  Add to
                  
                
                  <svg class="icon-svg svg-add" width="17" height="16">
                    <use class="use-heart1" href='${useHeart1}'></use>
                  </svg>

                
                            
                  </button>
                   <button type="button" id=${idDrink} class="add-descr add-favorite js_btn_fav_remove" data-cocktail-name-remove="${strDrink}">
                  Remove
                    
                  <svg class="icon-svg svg-remove" width="17" height="16">
                    <use class="use-heart1" href='${useHeart2}'></use>
                  </svg>
                
                  </button>
               
              </div>
            </div>
          </div>
       
      `;
    })
    .join('');
  const gallery = document.querySelector('.gallery');
  gallery.insertAdjacentHTML('beforeend', markup);
}

// ==================ФУНЦИЯ ДОБАВЛЕНИЯ РАЗМЕТКИ ИНГРИДИЕНТОВ В МОДАЛЬНОМ ОКНЕ=======================
export function createIngredientCocktail(ingredients) {
  const markup = ingredients
    .map(ingredient => {
      const {
        strDrinkThumb,
        strImageAttribution,
        strDrink,
        strInstructions,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
        strIngredient6,
        strIngredient7,
        strIngredient8,
        strIngredient9,
        strIngredient10,
        strIngredient11,
        strIngredient12,
        strIngredient13,
        strIngredient14,
        strIngredient15,
      } = ingredient;

      return `
    <div class="modal-container-mobile">
        <h2 class="modal-container__header">${strDrink}</h2>
        <div class="modal-container__descr">
          <h3 class="modal-container__descr-header">Instractions:</h3>
          <p class="info-descr">${strInstructions}</p>
        </div>
        <img class="modal-container__img" src="${strDrinkThumb}" alt="${strImageAttribution}" loading="lazy"/>
        <div class="modal-ingredients">
          <h3 class="modal-ingredients__header">INGREDIENTS</h3>
          <h4 class="modal-ingredients__subheader">Per cocktail:</h4>
          <ul class="modal-ingredients__list">
            <li>
              <a class="modal-ingredient-link" data-ingredient-name="${strIngredient1}" href="" >${strIngredient1}</a>
            </li>
            <li>
              <a class="modal-ingredient-link" data-ingredient-name="${strIngredient2}" href="" >${strIngredient2}</a>
            </li>
            <li>
              <a class="modal-ingredient-link" data-ingredient-name="${strIngredient3}" href="" >${strIngredient3}</a>
            </li>
            <li>
              <a class="modal-ingredient-link" data-ingredient-name="${strIngredient4}" href="" >${strIngredient4}</a>
            </li>
            <li>
              <a class="modal-ingredient-link" data-ingredient-name="${strIngredient5}"  href="" >${strIngredient5}</a>
            </li>
          </ul>

          <button type="button" class="add-favorite modal-btn js-add-to-favorite">Add To Favorite</button>
          <button type="button" class="add-favorite modal-btn js-remove-from-favorite">Remove from favorite</button>
      </div>
    </div>

    <div class="modal-container">
      <div class="modal-container-flex">
        <div class="modal-container__img">
          <img class="modal-img" src="${strDrinkThumb}" alt="${strImageAttribution}" loading="lazy"/>
        </div>
        <div>
          <h2 class="modal-container__header">${strDrink}</h2>
          <div class="modal-ingredients">
            <h3 class="modal-ingredients__header">INGREDIENTS</h3>
            <h4 class="modal-ingredients__subheader">Per cocktail:</h4>
            <ul class="modal-ingredients__list">
              <li>
                <a class="modal-ingredient-link" data-ingredient-name="${strIngredient1}" href="" >${strIngredient1}</a>
              </li>
              <li>
                <a class="modal-ingredient-link" data-ingredient-name="${strIngredient2}" href="" >${strIngredient2}</a>
              </li>
              <li>
                <a class="modal-ingredient-link" data-ingredient-name="${strIngredient3}" href="" >${strIngredient3}</a>
              </li>
              <li>
                <a class="modal-ingredient-link" data-ingredient-name="${strIngredient4}" href="" >${strIngredient4}</a>
              </li>
              <li>
                <a class="modal-ingredient-link" data-ingredient-name="${strIngredient5}" href="" >${strIngredient5}</a>
              </li>
            </ul>
        </div>
      </div>
    </div>
    <div class="modal-container__descr">
      <h3 class="modal-container__descr-header">Instractions:</h3>
      <p class="info-descr">${strInstructions}</p>
    </div>
    <button type="button" class="add-favorite modal-btn js-add-to-favorite">Add To Favorite</button>
    <button type="button" class="add-favorite modal-btn js-remove-from-favorite">Remove from favorite</button>
      `;
    })
    .join('');
  const modal = document.querySelector('.modal-create-cocktail');
  modal.insertAdjacentHTML('beforeend', markup);
}

// ==================ФУНЦИЯ ДОБАВЛЕНИЯ РАЗМЕТКИ ДЛЯ МОБИЛЬНОЙ ВЕРСИИ (ВЫПЫДАЮЩИЙ СПИСОК)=======================
export function createMarkup() {
  let str = 'ABCDEFGHIJKLMN0PQRSTUVWXYZ1234567890';
  const result = str
    .split('')
    .map(letter => {
      return `
      <span href="#">${letter}</span>`;
    })
    .join('');
  markupMobile.insertAdjacentHTML('beforeend', result);
}

// ====================ФУНКЦИЯ ДОБАВЛЕНИЯ РАЗМЕТКИ ДЛЯ DEKSTOP, TABLET==============================================
export function createMarkupDesktop() {
  let str = 'ABCDEFGHIJKLMN0PQRSTUVWXYZ1234567890';
  const result = str
    .split('')
    .map(letter => {
      return `
      <li class="list-cocktail__item" href="#">
        <button class="list-cocktail__btn">${letter}</button>
      </li>`;
    })
    .join('');
  markupDesktop.insertAdjacentHTML('beforeend', result);
}
