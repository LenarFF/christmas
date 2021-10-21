const greeting = document.querySelector('.greeting');

const getTimeOfDay = () => {
  const date = new Date();
  const hours = date.getHours();
  switch (true) {
    case hours < 6:
      return 'night';
    case hours < 12:
      return 'morning';
    case hours < 18:
      return 'day';
    default:
      return 'evening';
  }
};

export const showGreeting = () => {
  const timeOfDay = getTimeOfDay();
  const greetingText = `Good ${timeOfDay}`;
  if (greeting) greeting.textContent = greetingText;
};
