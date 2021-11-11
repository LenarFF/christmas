import { images } from '../../data/images';
import { BaseComponent } from '../BaseComponent/BaseComponent';
import { ImageWrapper } from '../ImageWrapper/ImageWrapper';
import './PainterCard.scss';

export class PainterCard extends BaseComponent {
  constructor(category, cardNumber) {
    super('div', ['container', 'painter-card']);

    this.numberPicturesOnPage = 4;
    this.numberAllPictures = 240;
    this.trueImageNum = Number(images[category][cardNumber].imageNum);
    this.imagesNum = [this.trueImageNum];
    this.fillImagesNum();
    this.shuffleArray(this.imagesNum);

    this.title = new BaseComponent(
      'h3',
      ['painter-card__title'],
      `Какую из этих картин написал ${images[category][0].author}?`,
    );

    this.picturesWrap = new BaseComponent('div', ['painter-card__pictures']);

    this.imagesNum.map((number) => {
      const picture = new ImageWrapper(`./img/${number}.webp`, ['painter-card__img-wrapper']);
      this.picturesWrap.element.append(picture.element);
    });

    this.element.append(this.title.element, this.picturesWrap.element);
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
}
