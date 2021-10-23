import { data } from '../data/state';

const userName = document.querySelector('.name') as HTMLInputElement;

export const addUserName = () => {
  userName.value = data.state.userName;
  userName.addEventListener('change', () => {
    data.state.userName = userName.value;
  });
};
