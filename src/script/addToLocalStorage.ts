import { data } from '../data/state';
import { createPlaylist, playMusic } from './audio';
import { changeSlideApi, getLinkToImage } from './backgroundImage';
import { changeQuote, getQuotes } from './quote';
import { handleImage, handleLanguage, handleSettings, hideElement } from './settings';
import { changeSlide, setBg } from './slider';
import { showTime } from './time';
import { getWeather } from './weather';
import { addUserName } from './userName';
import { translateSettings } from './translatePage';

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
      getWeather();
      handleLanguage();
      handleImage();
      hideElement();
      translateSettings();
      // document.addEventListener('DOMContentLoaded', getWeather);
    }
  };
  window.addEventListener('load', getLocalStorage);
};

export const addToLocalStorage = () => {
  saveData();
  showData();
};
