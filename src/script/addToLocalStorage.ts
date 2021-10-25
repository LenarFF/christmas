import { data } from '../data/state';
import { playMusic } from './audio';
import { changeSlideApi, getLinkToImage } from './backgroundImage';
import { changeQuote, getQuotes } from './quote';
import {
  handleImage,
  handleLanguage,
  handleSettings,
  hideElement,
  showImageTheme,
} from './settings';
import { changeSlide, setBg } from './slider';
import { showTime } from './time';
import { getWeather } from './weather';
import { addUserName } from './userName';
import { translateLinks, translateSettings } from './translatePage';
import {
  addLinkListener, changeLinksState, fillList, handleLink,
} from './links';

export const saveData = () => {
  function setLocalStorage() {
    changeLinksState();
    localStorage.setItem('momentum_state_LenarFF23', JSON.stringify(data.state));
  }

  window.addEventListener('beforeunload', setLocalStorage);
};

const showData = async () => {
  const getLocalStorage = () => {
    if (localStorage.getItem('momentum_state_LenarFF23')) {
      data.state = JSON.parse(localStorage.getItem('momentum_state_LenarFF23') as string);
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
      handleSettings();
      getWeather();
      handleLanguage();
      handleImage();
      hideElement();
      translateSettings();
      fillList();
      handleLink();
      translateLinks();
      addLinkListener();
      showImageTheme();
    }
  };
  window.addEventListener('load', getLocalStorage);
};

export const addToLocalStorage: () => void = () => {
  saveData();
  showData();
};
