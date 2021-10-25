import './css/owfont-regular.css';
import './css/style.css';
import { crossCheckText } from './data/crossCheck';

import { addToLocalStorage, saveData } from './script/addToLocalStorage';
import { handleWeather } from './script/weather';

addToLocalStorage();
handleWeather();

if (!localStorage['momentumLoad']) {
  saveData();
  localStorage['momentumLoad'] = true;
}


