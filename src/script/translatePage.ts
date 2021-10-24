import { data } from '../data/state';
import { settingsTranslation } from '../data/translate';

const settings = document.querySelectorAll('.settings__blocks label');
const linksSave = document.querySelector('.links__save') as HTMLElement;
const linkName = document.getElementById('link-name') as HTMLInputElement;
const linkHref = document.getElementById('link-href') as HTMLInputElement;
const linkBTN = document.querySelector('.links__button') as HTMLElement;
const cancelBTN = document.querySelector('.links__cancel') as HTMLElement;
const nameLabel = document.getElementById('name-label') as HTMLElement;
const hrefLabel = document.getElementById('href-label') as HTMLElement;
const themeLabel = document.getElementById('theme') as HTMLElement;


export const translateSettings = () => {

  settings.forEach((item, index) => {
    const text = document.createElement('span');
    text.innerText = `${settingsTranslation[data.state.language][index]}`;
    if (item.firstChild) item.replaceChild(text, item.firstChild);
  });
};

export const translateLinks = () => {
  linksSave.textContent = (data.state.language === 'en') ? 'save': 'сохранить';
  linkName.placeholder = (data.state.language === 'en') ? 'name' : 'название';
  linkHref.placeholder = (data.state.language === 'en') ? 'link' : 'ссылка';
  linkBTN.textContent = (data.state.language === 'en') ? 'link' : 'ссылка';
  cancelBTN.textContent = data.state.language === 'en' ? 'cancel' : 'отмена';
  if (nameLabel.firstChild){
    nameLabel.firstChild.textContent = data.state.language === 'en' ? 'Name' : 'Название';}
  if (hrefLabel.firstChild) {
    hrefLabel.firstChild.textContent = data.state.language === 'en' ? 'Link' : 'Ссылка';
  }
  if (themeLabel.firstChild) {
    themeLabel.firstChild.textContent = data.state.language === 'en' ? 'Background theme' : 'Фоновая тема';
  }
}