import { getTimeOfDay } from "./timeOfDay";

const greeting = document.querySelector('.greeting');



export const showGreeting = () => {
  const timeOfDay = getTimeOfDay();
  const greetingText = `Good ${timeOfDay}`;
  if (greeting) greeting.textContent = greetingText;
};
