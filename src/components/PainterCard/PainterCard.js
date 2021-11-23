import { images } from '../../data/images';
import { BaseComponent } from '../BaseComponent/BaseComponent';
import { ImageWrapper } from '../ImageWrapper/ImageWrapper';
import './PainterCard.scss';
import { Modal } from '../Modal/Modal';
import { state } from './../../state';
import { QuestionCard } from '../QuestionCard/QuestionCard';

export class PainterCard extends QuestionCard {
  constructor(category, cardNumber) {
    super(category, cardNumber);

    this.numberPicturesOnPage = 4;
    this.numberAllPictures = 240;
    state.allAnswers = images[category].length;
    this.trueImageNum = Number(images[category][cardNumber].imageNum);
    this.imagesNum = [this.trueImageNum];
    if (this.cardNumber === 0) state.artistsRightAnswers[this.category] = 0;
    this.fillImagesNum();
    this.shuffleArray(this.imagesNum);
    this.title = new BaseComponent(
      'h3',
      ['painter-card__title', 'card-title'],
      `Какую из этих картин написал ${images[category][cardNumber].author}?`,
    );

    this.picturesWrap = new BaseComponent('div', ['painter-card__pictures']);

    this.imagesNum.map((number) => {
      const picture = new ImageWrapper(`./img/${number}.webp`, ['inner-img-wrapper']);
      picture.element.setAttribute('data-imgNum', `${number}`);

      picture.element.addEventListener('click', (e) => this.handleModal(e));
      this.picturesWrap.element.append(picture.element);
    });

    this.content.element.prepend(
      this.title.element,
      this.cardInfo.element,
      this.picturesWrap.element,
    );
  }

  fillImagesNum = () => {
    for (let i = 0; this.imagesNum.length < this.numberPicturesOnPage; i++) {
      const newNum = this.getRandomImageNum();
      if (!this.imagesNum.includes(newNum)) {
        this.imagesNum.push(newNum);
      }
    }
  };

  getRandomImageNum = () => {
    return Math.floor(Math.random() * this.numberAllPictures);
  };

  handleModal = (e) => {
    if (!e.target.parentElement.getAttribute('data-imgNum')) return;
    this.isTimerStop = true;

    const correctness = this.checkCorrectnessAnswer(e.target.parentElement, this.trueImageNum);
    const modal = this.createModal(correctness);
    this.showModal(modal);
    this.playAudio(correctness);
  };
}
