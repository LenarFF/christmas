const userName = document.querySelector('.name') as HTMLInputElement;

const saveUseName = () => {
  function setLocalStorage() {
    localStorage.setItem('name', userName.value);
  }
  window.addEventListener('beforeunload', setLocalStorage);
}

const showUserName = () => {
  function getLocalStorage() {
    if (localStorage.getItem('name')) {
      userName.value = localStorage.getItem('name') as string;
    }
  }
  window.addEventListener('load', getLocalStorage);
}

export const addUserName = () => {
  saveUseName();
  showUserName();
}