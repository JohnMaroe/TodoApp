class Class {
  static randomNumFromArray(array) {
    return Math.floor(Math.random() * array.length);
  }

  static setLocalStorageFromArray(array) {
    let key = 0;
    for (const item of array) {
      localStorage.setItem(key, JSON.stringify(item));
      key++;
    }
  }
}

export default Class;