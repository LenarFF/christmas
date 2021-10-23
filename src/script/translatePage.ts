import { data } from '../data/state';
import { settingsTranslation } from '../data/translate';

const settings = document.querySelectorAll('.settings__blocks label');

export const translateSettings = () => {

  settings.forEach((item, index) => {
    const text = document.createElement('span');
    text.innerText = `${settingsTranslation[data.state.language][index]}`;
    if (item.firstChild) item.replaceChild(text, item.firstChild);
  });
};
