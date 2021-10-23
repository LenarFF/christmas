import { data } from '../data/state';
import { createPlaylist, playMusic } from './audio';
import { changeSlideApi, getLinkToImage } from './backgroundImage';
import { changeQuote, getQuotes } from './quote';
import { handleSettings } from './settings';
import { changeSlide, setBg } from './slider';
import { showTime } from './time';
import { getWeather } from './weather';
import { addUserName } from './userName';

const saveData = () => {
  function setLocalStorage() {
    localStorage.setItem('momentum_state_LenarFF', JSON.stringify(data.state));
  }

  window.addEventListener('beforeunload', setLocalStorage);
};

const showData = async () => {
  const getLocalStorage = () => {
    if (localStorage.getItem('momentum_state_LenarFF')) {
      data.state = JSON.parse(
        localStorage.getItem('momentum_state_LenarFF') as string,
      );
      console.log(data.state);
      addUserName();

      showTime();
      if (data.state.photoSource === 'github') {
        setBg();
        changeSlide();
      } else {
        getLinkToImage();
        changeSlideApi();
      }
      getQuotes();
      changeQuote();
      playMusic();
      createPlaylist();
      handleSettings();
      console.log(data.state.city)
      getWeather();
      // document.addEventListener('DOMContentLoaded', getWeather);
    }
  };
  window.addEventListener('load', getLocalStorage);
};

export const addToLocalStorage = () => {
  saveData();
  showData();
};
