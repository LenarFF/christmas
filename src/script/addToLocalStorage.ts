const saveData = (dataName: string, elem: HTMLInputElement) => {
  function setLocalStorage() {
    localStorage.setItem(dataName, elem.value);
  }
  window.addEventListener('beforeunload', setLocalStorage);
};

const showData = (dataName: string, elem: HTMLInputElement) => {
  function getLocalStorage() {
    if (localStorage.getItem(dataName)) {
      elem.value = localStorage.getItem(dataName) as string;
    }
  }
  window.addEventListener('load', getLocalStorage);
};

export const addToLocalStorage = (dataName: string, elem: HTMLInputElement) => {
  saveData(dataName, elem);
  showData(dataName, elem);
};
