import { images } from '../../data/images';
import { state } from '../../state';
import { BaseComponent } from '../BaseComponent/BaseComponent';
import { Modal } from '../Modal/Modal';
import './QuestionCard.scss';

export class QuestionCard extends BaseComponent {
  constructor(category, cardNumber) {
    super('div', ['question-card']);

    this.time = Number(state.timer) + 1;
    this.category = category;
    this.cardNumber = cardNumber;
    this.isTimerStop = false;

    this.counterSpan = new BaseComponent(
      'span',
      ['question-card__counter'],
      `${state.currentSlide} / ${images[state.currentCategory].length}`,
    );

    this.cardInfo = new BaseComponent('div', ['question-card__info']);
    this.modalBackdrop = new BaseComponent('div', ['modal-window__backdrop', 'hidden']);

    if (state.timer !== '0') {
      this.timer = new BaseComponent('span', ['question-card__timer'], state.timer);
      this.showTimer();
    }
    this.cardInfo.element.append(this.counterSpan.element, this.timer.element);
    this.element.append(this.cardInfo.element, this.modalBackdrop.element);
    window.addEventListener(
      'popstate',
      () => {
        this.isTimerStop = true;
      },
      false,
    );
  }

  showTimer = () => {
    if (this.isTimerStop) return;
    this.time--;
    this.timer.element.innerText = this.time;
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
    console.log(currentImg.getAttribute('data-imgNum'), String(rightImageNum));
    console.log(state.paintingsRightAnswers);
    const correctness = currentImg.getAttribute('data-imgNum') === String(rightImageNum);
    if (correctness) this.setRightAnswersInState();
    return correctness;
  };

  setRightAnswersInState = () => {
    if (state.currentQuizVariant === 'artists') {
      state.artistsRightAnswers[String(this.category)]++;
    } else if (state.currentQuizVariant === 'paintings') {
      state.paintingsRightAnswers[String(this.category)]++;
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
    const audio = new Audio(`./sound/${correctness ? 'correct.mp3' : 'incorrect.mp3'}`);
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
