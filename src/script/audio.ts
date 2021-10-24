import { playList } from '../data/playList';

const btnPlay = document.querySelector('.play') as HTMLElement;
const btnNext = document.querySelector('.play-next') as HTMLElement;
const btnPrev = document.querySelector('.play-prev') as HTMLElement;
const playListContainer = document.querySelector('.play-list') as HTMLUListElement;

let playNum = 0;
let isPlay = false;
const audio = new Audio();

const changeBtn = () => {
  isPlay ? btnPlay.classList.remove('pause') : btnPlay.classList.add('pause');
};

const activePlayList = () => {
  Array.from(playListContainer.children).forEach((item) => item.classList.remove('item-active'));
  playListContainer.children[playNum].classList.add('item-active');
};

const playAudio = () => {
  changeBtn();
  if (isPlay) {
    audio.pause();
    isPlay = false;
  } else {
    audio.src = playList[playNum].src;
    audio.currentTime = 0;
    audio.play();
    isPlay = true;
  }
  activePlayList();
};

const playNext = () => {
  isPlay = false;
  playNum < playList.length - 1 ? playNum++ : (playNum = 0);
  playAudio();
};

const playPrev: () => void = () => {
  isPlay = false;
  playNum > 0 ? playNum-- : (playNum = playList.length - 1);
  playAudio();
};

export const createPlaylist: () => void = () => {
  playList.map((item) => {
    const li = document.createElement('li');
    li.classList.add('play-item');
    li.innerText = item.title;
    playListContainer.append(li);
    return null;
  });
};

export const playMusic: () => void = () => {
  btnPlay.addEventListener('click', playAudio);
  btnNext.addEventListener('click', playNext);
  btnPrev.addEventListener('click', playPrev);
};
