import { data } from '../data/state';

const settingsBtn = document.querySelector('.settings__btn') as HTMLElement;
const settingsContainer = document.querySelector('.settings') as HTMLElement;
const dateContainer = document.querySelector('.date') as HTMLElement;
const dateInput = document.getElementById('date') as HTMLInputElement;
const timeContainer = document.querySelector('.time') as HTMLElement;
const greetingContainer = document.querySelector('.greeting-container') as HTMLElement;
const weatherContainer = document.querySelector('.weather') as HTMLElement;
const audioContainer = document.querySelector('.player') as HTMLElement;
const imageThemeInput = document.querySelector('.settings__img-theme') as HTMLElement;
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

const showElement = (
  element: HTMLElement,
  name: 'time' | 'date' | 'greeting' | 'weather' | 'audio' | 'quote',
  event: Event,
) => {
  element.classList.toggle('visibility');
  data.state[name] = Boolean((event.target as HTMLInputElement).value);
};

const changeToEnglish = (e: Event) => {
  data.state.language =  'en'
}
const changeToRussian = (e: Event) => {
  data.state.language =  'ru'
}

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
};
