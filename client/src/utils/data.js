export const getDataFromLocalStorage = () => {
  const notes = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    try {
      const value = JSON.parse(localStorage.getItem(key));
      if (value && value._id) {
        notes.push(value);
      }
    } catch (e) {
      console.error(`Error parsing localStorage item with key "${key}":`, e);
    }
  }

  return notes;
};
