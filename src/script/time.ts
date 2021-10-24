import { showDate } from './date';
import { showGreeting } from './greeting';
import { data } from '../data/state';

const time = document.querySelector('.time');

export const showTime: () => void = () => {
  const date = new Date();
  const currentTime = date.toLocaleTimeString();
  if (time) time.textContent = currentTime;
  showDate();
  showGreeting(data.state.language);
  setTimeout(showTime, 1000);
};
