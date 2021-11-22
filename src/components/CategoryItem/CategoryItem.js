import { images } from '../../data/images';
import { state } from '../../state';
import { BaseComponent } from '../BaseComponent/BaseComponent';
import { ImageWrapper } from '../ImageWrapper/ImageWrapper';
import './CategoryItem.scss';

export class CategoryItem extends BaseComponent {
  constructor(category) {
    super('div', ['category__item']);

    this.rightAnswers = null;

    this.categoryName = new BaseComponent('h3', ['category__item-title'], String(category));
    this.img = null;
    if (state.currentQuizVariant === 'artists') {
      this.rightAnswers = state.artistsRightAnswers[category];
      this.img = new ImageWrapper(`./img/${images[category][9].imageNum}.webp`);
    } else if (state.currentQuizVariant === 'paintings') {
      this.rightAnswers = state.paintingsRightAnswers[category];
      this.img = new ImageWrapper(`./img/${images[category][0].imageNum}.webp`);
    }
    if (this.img) this.element.append(this.img.element, this.categoryName.element);

    if (this.rightAnswers) {
      this.result = new BaseComponent(
        'span',
        ['category__item-result'],
        `${this.rightAnswers} / ${state.allAnswers}`,
      );

      this.element.append(this.result.element);
    }
  }
}
