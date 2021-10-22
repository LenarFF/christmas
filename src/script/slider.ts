import { getTimeOfDay } from './timeOfDay';

const body = document.querySelector('body') as HTMLElement;
const slideNext = document.querySelector('.slide-next') as HTMLElement;
const slidePrev = document.querySelector('.slide-prev') as HTMLElement;
const bckgrQuantity = 20;

const getRandomNum = (max: number) => {
  return Math.ceil(Math.random() * max);
};

let randomNum = getRandomNum(bckgrQuantity);

export const setBg = () => {
  const timeOfDay = getTimeOfDay();
  const img = new Image();
  const rndNumString = String(randomNum).padStart(2, '0');
  img.src = `https://raw.githubusercontent.com/LenarFF/stage1-tasks/assets/images/${timeOfDay}/${rndNumString}.jpg`;

  img.onload = () => {
    body.style.backgroundImage = `url('${img.src}')`;
  };
};

const getSlideNext = () => {
  randomNum < 20 ? randomNum++ : (randomNum = 1);
  setBg();
};

const getSlidePrev = () => {
  randomNum > 1 ? randomNum-- : (randomNum = 20);
  setBg();
};

export const changeSlide = () => {
  slideNext.addEventListener('click', getSlideNext);
  slidePrev.addEventListener('click', getSlidePrev);
};
