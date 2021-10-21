import { showDate } from './date';
import { showGreeting } from './greeting';

const time = document.querySelector('.time');

export const showTime = () => {
  const date = new Date();
  const currentTime = date.toLocaleTimeString();
  if (time) time.textContent = currentTime;
  showDate();
  showGreeting();
  setTimeout(showTime, 1000);
};
