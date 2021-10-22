import './css/owfont-regular.css';
import './css/style.css';
import { createPlaylist, playMusic } from './script/audio';
import { changeQuote, getQuotes } from './script/quote';
import { changeSlide, setBg } from './script/slider';
import { showTime } from './script/time';
import { addUserName } from './script/userName';
import { addCity, getWeather } from './script/weather';

showTime();
addUserName();
addCity();
setBg();
changeSlide();
getQuotes();
changeQuote();
playMusic();
createPlaylist();
document.addEventListener('DOMContentLoaded', getWeather);
