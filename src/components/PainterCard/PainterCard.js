import { images } from '../../data/images';
import { BaseComponent } from '../BaseComponent/BaseComponent';
import { ImageWrapper } from '../ImageWrapper/ImageWrapper';
import './PainterCard.scss';
import { Modal } from '../Modal/Modal';

export class PainterCard extends BaseComponent {
  constructor(category, cardNumber) {
    super('div', ['painter-card', 'hidden']);

    this.numberPicturesOnPage = 4;
    this.numberAllPictures = 240;
    this.trueImageNum = Number(images[category][cardNumber].imageNum);
    this.imagesNum = [this.trueImageNum];
    this.fillImagesNum();
    this.shuffleArray(this.imagesNum);
    this.title = new BaseComponent(
      'h3',
      ['painter-card__title'],
      `Какую из этих картин написал ${images[category][cardNumber].author}?`,
    );

    this.picturesWrap = new BaseComponent('div', ['painter-card__pictures']);
    this.modalBackdrop = new BaseComponent('div', ['modal-window__backdrop', 'hidden']);
    this.modal = new Modal(this.modalBackdrop.element);


    this.imagesNum.map((number) => {
      const picture = new ImageWrapper(`./img/${number}.webp`, ['painter-card__img-wrapper']);
      picture.element.setAttribute('data-bs-toggle', 'modal');
      picture.element.setAttribute('data-bs-target', '#exampleModal');

      picture.element.addEventListener('click', () => this.showModal());
      this.picturesWrap.element.append(picture.element);
    });

    this.element.append(
      this.title.element,
      this.picturesWrap.element,
      this.modal.element,
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

   showModal = () => {
    this.modal.element.classList.add('show');
    this.modalBackdrop.element.classList.remove('hidden');
  }

}
