export function getItemFromLocalStorage(key) {
  return window.localStorage.getItem(key);
}

export function setItemToLocalStorage(key, item) {
  window.localStorage.setItem(key, JSON.stringify(item));
}
