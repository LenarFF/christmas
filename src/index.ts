import './css/owfont-regular.css';
import './css/style.css';
import { crossCheckText } from './data/crossCheck';

import { addToLocalStorage } from './script/addToLocalStorage';
import { handleWeather } from './script/weather';

addToLocalStorage();
handleWeather();

console.log(crossCheckText);
