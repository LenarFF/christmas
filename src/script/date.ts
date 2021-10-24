import { data } from '../data/state';

const calendar = document.querySelector('.date');

export const showDate: () => void = () => {
  const date = new Date();

  const options: {
    weekday: 'narrow' | 'short' | 'long';
    month: 'long' | 'numeric' | '2-digit' | 'short' | 'narrow' | undefined;
    day: 'numeric' | '2-digit' | undefined;
    hour: 'numeric' | '2-digit' | undefined;
    minute: 'numeric' | '2-digit' | undefined;
  } = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    hour: undefined,
    minute: undefined,
  };
  const currentDate = date.toLocaleDateString(data.state.language, options);
  if (calendar) calendar.textContent = currentDate;
};
