import { state } from '../../state';
import { BaseComponent } from '../BaseComponent/BaseComponent';
import './CategoryItem.scss';

export class CategoryItem extends BaseComponent {
  constructor(text) {
    super('div', ['category__item'], text);
    if (state.currentQuizVariant === 'artists') {
      this.element.classList.add('category__item_artists');
    } else if (state.currentQuizVariant === 'paintings') {
      this.element.classList.add('category__item_paintings');
    }
  }
}