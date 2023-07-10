const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?';
const RANDOM_URL = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
const ID_URL = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?';
const INGR_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php';

export async function fetchCocktails(query) {
  const response = await fetch(`${BASE_URL}s=${query}`);
  const data = await response.json();
  // console.log(data);
  return data;
}

export async function fetchLetterCocktails(letter) {
  const response = await fetch(`${BASE_URL}f=${letter}`);
  const data = await response.json();
  // console.log(data);
  return data;
}

export async function fetchRandomCocktails() {
  const response = await fetch(`${RANDOM_URL}`);
  const data = await response.json();
  // console.log(data);
  return data;
}

export async function fetchIngredientCocktails(idCocktail) {
  const response = await fetch(`${ID_URL}i=${idCocktail}`);
  const data = await response.json();
  // console.log(data);
  return data;
}

export async function fetchNameIngredientCocktail(ingredient) {
  const response = await fetch(`${INGR_URL}?i=${ingredient}`);
  const data = await response.json();
  // console.log(data);
  return data;
}
