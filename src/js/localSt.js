export function saveToLS(key, value) {
  let dataInLocalStorage = localStorage.getItem(key);
  if (dataInLocalStorage === null) {
    let arrayOfFavorite = [];
    arrayOfFavorite.push(value);
    localStorage.setItem(key, JSON.stringify(arrayOfFavorite));
  } else {
    let arrayFromLocalStorage = JSON.parse(localStorage.getItem(key));
    arrayFromLocalStorage.push(value);
    localStorage.setItem(key, JSON.stringify(arrayFromLocalStorage));
  }
}

export function loadFromLS(key) {
  const item = localStorage.getItem(key);
  try {
    const parseItem = JSON.parse(item);
    return parseItem;
  } catch {
    return item;
  }
}

export function removeFromLS(key, value) {
  let arrayFromLocalStorage = JSON.parse(localStorage.getItem(key));

  arrayFromLocalStorage.splice(value, 1);

  localStorage.setItem(key, JSON.stringify(arrayFromLocalStorage));
}
