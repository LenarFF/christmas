import { data } from "../data/state";
import { greetingTranslation } from "../data/translate";
import { getTimeOfDay } from "./timeOfDay";

const greeting = document.querySelector('.greeting');



export const showGreeting = (language: "ru" | "en") => {
  data.state.timeOfDay = getTimeOfDay();
  const greetingText = greetingTranslation[language][data.state.timeOfDay];
  if (greeting) greeting.textContent = greetingText;
};
