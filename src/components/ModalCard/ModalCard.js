import './ModalCard.scss';
import { BaseComponent } from './../BaseComponent/BaseComponent';
import { ImageWrapper } from '../ImageWrapper/ImageWrapper';

export class ModalCard extends BaseComponent {
  constructor(cardInfo, correctness) {
    super('div', ['modal-card']);

    this.correctnessImg = new BaseComponent('div', ['modal-card__correctness']);
    if (correctness) this.correctnessImg.element.classList.add('modal-card__correctness_correct');

    this.img = new ImageWrapper(`./img/${cardInfo.imageNum}.webp`, ['modal-card__img-wrapper']);
    this.imgName = new BaseComponent('p', ['modal-card__text'], `${cardInfo.name}`);
    this.imgAuthor = new BaseComponent('p', ['modal-card__text'], `${cardInfo.author}`);
    this.imgYear = new BaseComponent('p', ['modal-card__text'], `${cardInfo.year}`);

    this.element.append(
      this.correctnessImg.element,
      this.img.element,
      this.imgName.element,
      this.imgName.element,
      this.imgAuthor.element,
      this.imgYear.element,
    );
  }
}
