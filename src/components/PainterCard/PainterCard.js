import { images } from '../../data/images';
import { BaseComponent } from '../BaseComponent/BaseComponent';
import { ImageWrapper } from '../ImageWrapper/ImageWrapper';
import './PainterCard.scss';

export class PainterCard extends BaseComponent {
  constructor(painter, category) {
    super('div', ['container', 'painter-card', 'hidden']);
    this.title = new BaseComponent(
      'h3',
      ['painter-card__title'],
      `Какую из этих картин написал ${painter}?`,
    );

    this.picturesWrap = new BaseComponent('div', ['painter-card__pictures']);

    for (let i = 0; i < 4; i++) {
      const picture = new ImageWrapper(`./img/${images[0][i].imageNum}.webp`, [
        'painter-card__img-wrapper',
      ]);
      this.picturesWrap.element.append(picture.element)
    }

    this.element.append(this.title.element, this.picturesWrap.element);
  }
}