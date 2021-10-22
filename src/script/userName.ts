import { addToLocalStorage } from './addToLocalStorage';

const userName = document.querySelector('.name') as HTMLInputElement;

export const addUserName = () => {
  addToLocalStorage('name', userName);
};
