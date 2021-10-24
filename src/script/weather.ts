import { data } from '../data/state';

const weatherIcon = document.querySelector('.weather-icon') as HTMLElement;
const temperature = document.querySelector('.temperature') as HTMLElement;
const weatherDescription = document.querySelector('.weather-description') as HTMLElement;
const wind = document.querySelector('.wind') as HTMLElement;
const humidity = document.querySelector('.humidity') as HTMLElement;
const city = document.querySelector('.city') as HTMLInputElement;

const key = 'bd092b21aa906492fea3e9bdbd0ba960';
const units = 'metric';

export async function getWeather(): Promise<void> {
  if (data.state.city === "Minsk") {
    city.value = (data.state.language === 'en') ? 'Minsk' : 'Минск';
  } else {
    city.value = data.state.city;
  }
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${data.state.city}&lang=${data.state.language}&appid=${key}&units=${units}`;

  const res = await fetch(url);
  const weatherData = await res.json();
  console.log(weatherData);
  if (weatherData.cod !== 200) {
    temperature.textContent = "Нет данных";
    wind.textContent = '';
    humidity.textContent = '';
    weatherDescription.textContent = ''
    return
  }
  weatherIcon.className = 'weather-icon owf';
  weatherIcon.classList.add(`owf-${weatherData.weather[0].id}`);
  temperature.textContent = `${Math.round(weatherData.main.temp)}°C`;
  wind.textContent = `${
    data.state.language === 'en' ? 'Wind speed' : 'Скорость ветра'
  }: ${Math.round(weatherData.wind.speed)} m/s`;
  humidity.textContent = `${data.state.language === 'en' ? 'Humidity' : 'Влажность'}: ${
    weatherData.main.humidity
  }%`;
  weatherDescription.textContent = weatherData.weather[0].description;
}

const setCity = (event: KeyboardEvent) => {
  if (event.code === 'Enter') {
    data.state.city = city.value;
    getWeather();
    city.blur();
  }
};

export const handleWeather: () => void = () => {
  city.addEventListener('keypress', setCity);
  city.addEventListener('focusout', () => {
    data.state.city = city.value;
    getWeather();
  });
};
