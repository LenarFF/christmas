import { playList } from '../data/playList';

const btnPlay = document.getElementById('play') as HTMLElement;
const btnNext = document.querySelector('.play-next') as HTMLElement;
const btnPrev = document.querySelector('.play-prev') as HTMLElement;
const playListContainer = document.querySelector('.play-list') as HTMLUListElement;
const progressContainer = document.querySelector('.progress__container') as HTMLElement;
const progress = document.querySelector('.progress') as HTMLElement;
const title = document.querySelector('.song') as HTMLElement;
const playerTimer = document.querySelector('.player__timer') as HTMLElement;
const volumeBtn = document.querySelector('.volume-btn') as HTMLElement;
const volumeRange = document.getElementById('volume') as HTMLInputElement;


let playNum = 0;
let isPlay = false;
const audio = new Audio();
audio.volume = 0.5;
let currentVolume = audio.volume;

const changeBtn = (btn: HTMLElement) => {
  const playListButtons = document.querySelectorAll('.play_small');
  playListButtons.forEach((btn) => btn.classList.remove('pause'));
  if (isPlay) {
    btn.classList.remove('pause');
    playListButtons[playNum].classList.remove('pause');
  } else {
    btn.classList.add('pause');
    playListButtons[playNum].classList.add('pause');
  }
};

const activePlayList = () => {
  Array.from(playListContainer.children).forEach((item) => item.classList.remove('item-active'));
  playListContainer.children[playNum].classList.add('item-active');
};

const playAudio = () => {
  changeBtn(btnPlay);
  if (isPlay) {
    audio.pause();
    isPlay = false;
  } else {
    title.innerHTML = playList[playNum].title;
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
  playList.map((item, index) => {
    const playThisMusicBtn = document.createElement('button');
    playThisMusicBtn.classList.add('play', 'player-icon', 'play_small');
    playThisMusicBtn.setAttribute('data-index', String(index));
    const li = document.createElement('li');
    li.classList.add('play-item');
    li.innerText = item.title;
    li.prepend(playThisMusicBtn);
    playListContainer.append(li);
    return null;
  });
};

const handleVolume = () => {
  audio.volume = Number(volumeRange.value);
  if (audio.volume === 0) {
    volumeBtn.classList.add('volume-btn_off');
  } else {
    volumeBtn.classList.remove('volume-btn_off');
  }
};

const switchVolume = () => {
  if (audio.volume > 0) {
    currentVolume = audio.volume;
    volumeRange.value = '0';
    audio.volume = 0;
    volumeBtn.classList.add('volume-btn_off');
  } else {
    audio.volume = currentVolume;
    volumeRange.value = String(currentVolume);
    volumeBtn.classList.remove('volume-btn_off');
  }
};

const playFromPlaylist = (e: Event) => {
  const playListBtn = e.target as HTMLElement;
  if (playListBtn.classList.contains('play_small')) {
    if (playListBtn.classList.contains('pause')) {
      playListBtn.classList.remove('pause');
      isPlay = true;
    } else {

      isPlay = false;
      playListBtn.classList.add('pause');
    }
    playNum = Number(playListBtn.dataset.index);
    playAudio();
  }
};

export const playMusic: () => void = () => {
  playListContainer.addEventListener('click', playFromPlaylist);
  volumeBtn.addEventListener('click', switchVolume);
  volumeRange.addEventListener('change', handleVolume);
  btnPlay.addEventListener('click', playAudio);
  btnNext.addEventListener('click', playNext);
  btnPrev.addEventListener('click', playPrev);
};

const secondsToTime = (secs: number) => {
  const minutes = Math.floor(secs / 60);
  const seconds = secs - minutes * 60;
  return {
    min: minutes,
    sec: String(seconds).padStart(2, '0'),
  };
};

const updateProgress = () => {
  const duration = audio.duration;
  const currentTime = audio.currentTime;
  const progressPercent = (currentTime / duration) * 100;
  const currentMinSec = secondsToTime(Math.floor(currentTime));
  const durationMinSec = secondsToTime(Math.floor(duration));
  if (!isNaN(durationMinSec.min)) {
    playerTimer.innerText = `${currentMinSec.min}:${currentMinSec.sec} / ${durationMinSec.min}:${durationMinSec.sec}`;
  }
  progress.style.width = `${progressPercent}%`;
};

audio.addEventListener('timeupdate', updateProgress);

function setProgress(e: MouseEvent) {
  const width = progressContainer.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;
  audio.currentTime = (clickX / width) * duration;
}

progressContainer.addEventListener('click', setProgress);

audio.addEventListener('ended', playNext);
