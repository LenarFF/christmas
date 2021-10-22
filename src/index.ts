import './css/owfont-regular.css';
import './css/style.css';
import { changeSlide, setBg } from './script/slider';
import { showTime } from './script/time';
import { addUserName } from './script/userName';
import { addCity, getWeather } from './script/weather';

showTime();
addUserName();
addCity();
setBg();
changeSlide();
document.addEventListener('DOMContentLoaded', getWeather);