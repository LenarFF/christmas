import { images } from '../../data/images';
import { state } from '../../state';
import { BaseComponent } from '../BaseComponent/BaseComponent';
import { Modal } from '../Modal/Modal';
import './QuestionCard.scss';

export class QuestionCard extends BaseComponent {
  constructor(category, cardNumber) {
    super('div', ['question-card']);

    this.time = Number(state.timer) + 1;
    console.log(this.time)
    this.category = category;
    this.cardNumber = cardNumber;
    this.timerStop = false;

    this.counterSpan = new BaseComponent(
      'span',
      ['question-card__counter'],
      `${state.currentSlide} / ${images[state.currentCategory - 1].length}`,
    );

    this.timer = new BaseComponent('span', ['question-card__timer'], state.timer);

    this.cardInfo = new BaseComponent('div', ['question-card__info']);
    this.cardInfo.element.append(this.counterSpan.element, this.timer.element);

    this.modalBackdrop = new BaseComponent('div', ['modal-window__backdrop', 'hidden']);

    this.element.append(this.cardInfo.element, this.modalBackdrop.element);
    this.showTimer();
  }

  showTimer = () => {
    if (this.timerStop) return
    this.time--;
    this.timer.element.innerText = this.time;
    console.log(this.time);
    if (this.time === 0) {
      this.showModal(this.createModal(false));
      this.playAudio(false);
      return;
    }
    setTimeout(this.showTimer, 1000);
  };

  shuffleArray = (arr) => {
    arr.sort(() => Math.random() - 0.5);
  };

  checkCorrectnessAnswer = (currentImg, rightImageNum) => {
    const correctness = currentImg.getAttribute('data-imgNum') === String(rightImageNum);
    if (correctness) this.setRightAnswersInState();
    return correctness;
  };

  setRightAnswersInState = () => {
    if (state.currentCategory === 'artists') {
      state.artistsRightAnswers[this.category + 1]++;
    } else if (state.currentCategory === 'paintings') {
      state.paintingsRightAnswers[this.category + 1]++;
    }
  };

  showModal = (modal) => {
    modal.element.classList.add('show');
    this.modalBackdrop.element.classList.remove('hidden');
  };

  checkEndSlides = () => {
    return this.cardNumber === images[this.category].length - 1;
  };

  playAudio = (correctness) => {
    const audio = new Audio(`./sound/${correctness ? 'correct.mp3' : 'incorrect.wav'}`);
    audio.volume = state.soundVolume;
    audio.play();
  };

  createModal = (correctness) => {
    const modal = new Modal(
      this.modalBackdrop.element,
      this.element,
      images[this.category][this.cardNumber],
      correctness,
      this.checkEndSlides(),
    );

    this.element.append(modal.element);
    return modal;
  };
}
