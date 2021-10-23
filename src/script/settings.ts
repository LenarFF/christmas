import { data } from '../data/state';
import { getQuotes } from './quote';
import { translateSettings } from './translatePage';
import { getWeather } from './weather';

const settingsBtn = document.querySelector('.settings__btn') as HTMLElement;
const settingsContainer = document.querySelector('.settings') as HTMLElement;
const dateContainer = document.querySelector('.date') as HTMLElement;
const dateInput = document.getElementById('date') as HTMLInputElement;
const timeContainer = document.querySelector('.time') as HTMLElement;
const greetingContainer = document.querySelector('.greeting-container') as HTMLElement;
const weatherContainer = document.querySelector('.weather') as HTMLElement;
const audioContainer = document.querySelector('.player') as HTMLElement;
const imageThemeInput = document.querySelector('.settings__img-theme') as HTMLInputElement;
const name = document.querySelector('.name') as HTMLInputElement;

const quoteContainer = [
  document.querySelector('.quote') as HTMLElement,
  document.querySelector('.author') as HTMLElement,
  document.querySelector('.change-quote') as HTMLElement,
];
const timeInput = document.getElementById('time') as HTMLInputElement;
const greetingInput = document.getElementById('greeting') as HTMLInputElement;
const weatherInput = document.getElementById('weather') as HTMLInputElement;
const audioInput = document.getElementById('audio') as HTMLInputElement;
const quoteInput = document.getElementById('quote') as HTMLInputElement;
const english = document.getElementById('en') as HTMLInputElement;
const russian = document.getElementById('ru') as HTMLInputElement;
const photoSource = document.getElementById('photoSource') as HTMLSelectElement;

const showElement = (
  element: HTMLElement,
  name: 'time' | 'date' | 'greeting' | 'weather' | 'audio' | 'quote',
  event: Event,
) => {

  data.state[name] = (event.target as HTMLInputElement).checked;
  element.classList.toggle('visibility');
};

export const hideElement = () => {
  if (!data.state.date) dateContainer.classList.add('visibility');
  if (!data.state.time) timeContainer.classList.add('visibility');
  if (!data.state.greeting) greetingContainer.classList.add('visibility');
  if (!data.state.weather) weatherContainer.classList.add('visibility');
  if (!data.state.audio) audioContainer.classList.add('visibility');
  if (!data.state.quote) quoteContainer.forEach((item) => item.classList.add('visibility'));
  dateInput.checked = data.state.date;
  timeInput.checked = data.state.time;
  greetingInput.checked = data.state.greeting;
  weatherInput.checked = data.state.weather;
  audioInput.checked = data.state.audio;
  quoteInput.checked = data.state.quote;
}

const changeToEnglish = () => {
  data.state.language = 'en';
  translateSettings();
  imageThemeInput.placeholder = 'background theme';
  name.placeholder = 'input name';
  getQuotes();
  getWeather();
};
const changeToRussian = () => {
  data.state.language = 'ru';
  translateSettings();
  getQuotes();
  imageThemeInput.placeholder = 'фоновая тема';
  name.placeholder = 'введите имя';
  getWeather();
};

export const handleLanguage = () => {
  data.state.language === 'en' ? (english.checked = true) : (russian.checked = true);
};

export const handleImage = () => {
  photoSource.value = data.state.photoSource;
};

const handlePhotoSource = (e: Event) => {
  switch ((e.target as HTMLSelectElement).value) {
    case 'github':
      data.state.photoSource = 'github';
      break;
    case 'flickr':
      data.state.photoSource = 'flickr';
      break;
    case 'unsplash':
      data.state.photoSource = 'unsplash';
      break;
  }
};

export const handleSettings = () => {
  settingsBtn.addEventListener('click', () => settingsContainer.classList.toggle('visibility'));
  dateInput.addEventListener('change', (event) => showElement(dateContainer, 'date', event));
  timeInput.addEventListener('change', (event) => showElement(timeContainer, 'time', event));
  greetingInput.addEventListener('change', (event) =>
    showElement(greetingContainer, 'greeting', event),
  );
  weatherInput.addEventListener('change', (event) =>
    showElement(weatherContainer, 'weather', event),
  );
  audioInput.addEventListener('change', (event) => showElement(audioContainer, 'audio', event));
  quoteInput.addEventListener('change', (event) => {
    quoteContainer.forEach((item) => showElement(item, 'quote', event));
  });
  imageThemeInput.addEventListener(
    'change',
    (e) => (data.state.bcgrdTag = (e.target as HTMLInputElement).value),
  );
  english.addEventListener('change', changeToEnglish);
  russian.addEventListener('change', changeToRussian);
  photoSource.addEventListener('change', handlePhotoSource);
};
