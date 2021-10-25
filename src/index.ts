import './css/owfont-regular.css';
import './css/style.css';

import { addToLocalStorage } from './script/addToLocalStorage';
import { handleWeather } from './script/weather';

addToLocalStorage();
handleWeather();

window.onload = function() {
    if(!window.location.hash) {
        window.location = window.location + '#loaded';
        window.location.reload();
    }
}