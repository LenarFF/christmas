import { images } from '../../data/images';
import { BaseComponent } from '../BaseComponent/BaseComponent';
import { ImageWrapper } from '../ImageWrapper/ImageWrapper';
import './PainterCard.scss';
import { Modal } from '../Modal/Modal';
import { state } from './../../state';

export class PainterCard extends BaseComponent {
  constructor(category, cardNumber) {
    super('div', ['painter-card', 'hidden']);

    this.numberPicturesOnPage = 4;
    this.numberAllPictures = 240;
    state.allAnswers = images[category].length;
    state.currentCategory = category + 1;
    this.category = category;
    this.cardNumber = cardNumber;
    this.trueImageNum = Number(images[category][cardNumber].imageNum);
    this.imagesNum = [this.trueImageNum];
    this.fillImagesNum();
    this.shuffleArray(this.imagesNum);
    this.title = new BaseComponent(
      'h3',
      ['painter-card__title', 'card-title'],
      `Какую из этих картин написал ${images[category][cardNumber].author}?`,
    );

    this.picturesWrap = new BaseComponent('div', ['painter-card__pictures']);
    this.modalBackdrop = new BaseComponent('div', ['modal-window__backdrop', 'hidden']);

    this.imagesNum.map((number) => {
      const picture = new ImageWrapper(`./img/${number}.webp`, ['inner-img-wrapper']);
      picture.element.setAttribute('data-imgNum', `${number}`);

      picture.element.addEventListener('click', (e) => this.handleModal(e));
      this.picturesWrap.element.append(picture.element);
    });

    this.counterSpan = new BaseComponent(
      'span',
      ['painter-card__counter'],
      `${this.cardNumber + 1} / ${images[this.category].length}`,
    );

    this.element.append(
      this.title.element,
      this.picturesWrap.element,
      this.counterSpan.element,
      this.modalBackdrop.element,
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

  shuffleArray = (arr) => {
    arr.sort(() => Math.random() - 0.5);
  };

  checkCorrectnessAnswer = (currentImg) => {
    const correctness = currentImg.getAttribute('data-imgNum') === String(this.trueImageNum);
    if (correctness) {
      if (state.artistsRightAnswers[this.category]) {
        state.artistsRightAnswers[this.category + 1]++;
      } else {
        state.artistsRightAnswers[this.category + 1] = 1;
      }
    }
    return correctness;
  };

  createModal = (correctness) => {
    const modal = new Modal(
      this.modalBackdrop.element,
      this.element,
      images[this.category][this.cardNumber],
      correctness,
      this.cardNumber === images[this.category].length - 1,
    );

    this.element.append(modal.element);
    return modal;
  };

  showModal = (modal) => {
    modal.element.classList.add('show');
    this.modalBackdrop.element.classList.remove('hidden');
  };

  handleModal = (e) => {
    if (!e.target.parentElement.getAttribute('data-imgNum')) return;

    const correctness = this.checkCorrectnessAnswer(e.target.parentElement);
    const modal = this.createModal(correctness);
    this.showModal(modal);
  };
}
