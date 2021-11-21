import './PictureCard.scss';
import { BaseComponent } from '../BaseComponent/BaseComponent';
import { ImageWrapper } from '../ImageWrapper/ImageWrapper';
import { images } from '../../data/images';
import { Button } from '../Button/Button';
import { Modal } from '../Modal/Modal';
import { state } from '../../state';

export class PictureCard extends BaseComponent {
  constructor(category, cardNumber) {
    super('div', ['picture-card', 'hidden']);

    state.currentCategory = category + 1;
    state.allAnswers = images[category].length;
    this.category = category;
    this.cardNumber = cardNumber;
    this.numberAnswersOnPage = 4;
    if (this.cardNumber === 0) state.paintingsRightAnswers[this.category + 1] = 0;
    this.trueAnswerNum = Number(images[category][cardNumber].imageNum);
    this.answersObj = [images[category][cardNumber]];
    this.answers = [images[category][cardNumber].author];
    this.fillAnswersArray();

    this.title = new BaseComponent(
      'h3',
      ['picture-card__title', 'card-title'],
      'Кто автор картины?',
    );

    this.img = new ImageWrapper(`./img/${this.trueAnswerNum}.webp`, ['picture-card__img']);
    this.answersWrap = new BaseComponent('div', ['picture-card__answers-wrap']);

    this.answersWrap.element.addEventListener('click', (e) => this.handleModal(e));
    this.answersObj.map((item) => {
      const answerBtn = new Button(item.author, ['picture-card__answers-btn']);
      answerBtn.element.setAttribute('data-imgNum', `${item.imageNum}`);
      this.answersWrap.element.append(answerBtn.element);
    });

    this.counterSpan = new BaseComponent(
      'span',
      ['painter-card__counter'],
      `${cardNumber + 1} / ${images[category].length}`,
    );

    this.modalBackdrop = new BaseComponent('div', ['modal-window__backdrop', 'hidden']);

    this.element.append(
      this.title.element,
      this.img.element,
      this.answersWrap.element,
      this.counterSpan.element,
      this.modalBackdrop.element,
    );
  }

  getRandomCategory = () => {
    return Math.floor(Math.random() * images.length);
  };

  getRandomCardInCategory = (category) => {
    return Math.floor(Math.random() * images[category].length);
  };

  fillAnswersArray = () => {
    for (let i = 0; this.answersObj.length < this.numberAnswersOnPage; i++) {
      const randomCategory = this.getRandomCategory();
      const newAnswerObj = images[randomCategory][this.getRandomCardInCategory(randomCategory)];
      if (!this.answers.includes(newAnswerObj.author)) {
        this.answersObj.push(newAnswerObj);
      }
    }
  };

  checkCorrectnessAnswer = (currentImg) => {
    const correctness = currentImg.getAttribute('data-imgNum') === String(this.trueAnswerNum);
    if (correctness) this.setRightAnswersInState();
    return correctness;
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

  setRightAnswersInState = () => {
    state.paintingsRightAnswers[this.category + 1]++;
  };

  checkEndSlides = () => {
    return this.cardNumber === images[this.category].length - 1;
  };

  showModal = (modal) => {
    modal.element.classList.add('show');
    this.modalBackdrop.element.classList.remove('hidden');
  };

  playAudio = (correctness) => {
    const audio = new Audio(`./sound/${correctness ? 'correct.mp3' : 'incorrect.wav'}`);
    console.log(state.soundVolume);
    audio.volume = state.soundVolume;
    audio.play();
  };

  handleModal = (e) => {
    if (!e.target.getAttribute('data-imgNum')) return;
    const correctness = this.checkCorrectnessAnswer(e.target);
    const modal = this.createModal(correctness);
    this.showModal(modal);
    this.playAudio(correctness);
  };
}
