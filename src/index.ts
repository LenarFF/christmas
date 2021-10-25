import './css/owfont-regular.css';
import './css/style.css';
import { crossCheckText } from './data/crossCheck';

import { addToLocalStorage } from './script/addToLocalStorage';
import { createPlaylist, playMusic } from './script/audio';
import { addLinkListener, fillList, handleLink } from './script/links';
import { changeQuote, getQuotes } from './script/quote';
import { handleImage, handleLanguage, handleSettings, hideElement, showImageTheme } from './script/settings';
import { changeSlide, setBg } from './script/slider';
import { showTime } from './script/time';
import { translateLinks, translateSettings } from './script/translatePage';
import { addUserName } from './script/userName';
import { getWeather, handleWeather } from './script/weather';



const init = () => {
  getQuotes();
  changeQuote();
  handleSettings();
  getWeather();
  handleLanguage();
  handleImage();
  hideElement();
  translateSettings();
  playMusic();
  fillList();
  handleLink();
  translateLinks();
  addLinkListener();
  showImageTheme();
  setBg();
  addUserName();
  showTime();
  changeSlide();
}


if (!localStorage['momentum-first5']) {
  init();
  localStorage['momentum-first5'] = true;
}


handleWeather();
createPlaylist();
addToLocalStorage();
console.log(crossCheckText);
