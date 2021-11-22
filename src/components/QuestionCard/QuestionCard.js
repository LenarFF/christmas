import { images } from '../../data/images';
import { state } from '../../state';
import { BaseComponent } from '../BaseComponent/BaseComponent';
import { Button } from '../Button/Button';
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
      `${state.currentSlide + 1} / ${images[state.currentCategory].length}`,
    );

    this.cardInfo = new BaseComponent('div', ['question-card__info']);
    this.modalBackdrop = new BaseComponent('div', ['modal-window__backdrop', 'hidden']);

    if (state.timer != '0') {
      this.timer = new BaseComponent('span', ['question-card__timer'], this.time);
      this.showTimer();
      this.cardInfo.element.classList.add('question-card__info_space');
      this.cardInfo.element.append(this.timer.element);
    }

    this.controls = new BaseComponent('div', ['question-card__controls']);
    this.startPageBtn = new Button('На главную', ['btn-info', 'question-card__btn-start-page']);
    this.categoryBtn = new Button('Категории', ['btn-info', 'question-card__btn-category']);
    this.controls.element.append(this.startPageBtn.element, this.categoryBtn.element);

    this.startPageBtn.element.addEventListener('click', this.goStartPage);
    this.categoryBtn.element.addEventListener('click', this.goCategoryPage);

    this.content = new BaseComponent('div', ['question-card__content']);

    this.content.element.append(this.controls.element, this.modalBackdrop.element);

    this.cardInfo.element.append(this.counterSpan.element);
    this.element.append(this.content.element);
    window.addEventListener(
      'popstate',
      () => {
        this.isTimerStop = true;
      },
      false,
    );
  }

  goCategoryPage = () => {
    window.dispatchEvent(new HashChangeEvent('hashchange'));
  };

  goStartPage = () => {
    location.hash = '#/start-page/';
  };

  showTimer = () => {
    if (this.isTimerStop) return;
    this.time--;
    if (this.time < 6) this.timer.element.classList.add('question-card__timer_red');
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
    const correctness = currentImg.getAttribute('data-imgNum') === String(rightImageNum);
    if (correctness) this.setRightAnswersInState();
    return correctness;
  };

  setRightAnswersInState = () => {
    console.log(this.category);
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
    return this.cardNumber + 1 === images[this.category].length;
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
