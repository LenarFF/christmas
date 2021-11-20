import './ScorePage.scss';
import { BaseComponent } from '../../components/BaseComponent/BaseComponent';
import { images } from '../../data/images';
import { ImageWrapper } from './../../components/ImageWrapper/ImageWrapper';

export class ScorePage extends BaseComponent {
  constructor(category) {
    super('div', ['score-page']);

    this.imagesWrap = new BaseComponent('div', ['score-page__images']);

    images[category].map((item) => {
      const image = new ImageWrapper(`./img/${item.imageNum}.webp`, ['score-page__image']);
      this.imagesWrap.element.append(image.element)
    })

    this.element.append(this.imagesWrap.element)
  }
}