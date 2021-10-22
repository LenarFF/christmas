import { addToLocalStorage } from "./addToLocalStorage";

const weatherIcon = document.querySelector('.weather-icon') as HTMLElement;
const temperature = document.querySelector('.temperature') as HTMLElement;
const weatherDescription = document.querySelector('.weather-description') as HTMLElement;
const wind = document.querySelector('.wind') as HTMLElement;
const humidity = document.querySelector('.humidity') as HTMLElement;
const city = document.querySelector('.city') as HTMLInputElement;

const key = 'bd092b21aa906492fea3e9bdbd0ba960';
const lang = 'en';
const units = 'metric';

export async function getWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=${lang}&appid=${key}&units=${units}`;

  const res = await fetch(url);
  const data = await res.json();

  weatherIcon.className = 'weather-icon owf';
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${Math.round(data.main.temp)}°C`;
  wind.textContent = `Wind speed: ${Math.round(data.wind.speed)} m/s`;
  humidity.textContent = `Humidity: ${data.main.humidity}%`;
  weatherDescription.textContent = data.weather[0].description;
}

const setCity = (event: KeyboardEvent) => {
  if (event.code === 'Enter') {
    getWeather();
    city.blur();
  }
};

export const addCity = () => {
  addToLocalStorage('city', city);
}

city.addEventListener('keypress', setCity);
city.addEventListener('focusout', getWeather);

