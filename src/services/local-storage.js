function setItem(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getFromLocalStorage(key) {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : [];
}

function addToLocalStorage(key, value) {
  const data = getFromLocalStorage(key) || [];
  const isDuplicate = data.some((item) => item.id === value.id);
  if (!isDuplicate) {
    data.push(value);
    setItem(key, data);
  }
}

function removeFromLocalStorageById(key, id) {
  const data = getFromLocalStorage(key) || [];
  const updatedData = data.filter((item) => item.id !== id);
  setItem(key, updatedData);
}

export { setItem, addToLocalStorage, getFromLocalStorage, removeFromLocalStorageById };