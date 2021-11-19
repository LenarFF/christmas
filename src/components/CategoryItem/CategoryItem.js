import { state } from '../../state';
import { BaseComponent } from '../BaseComponent/BaseComponent';
import './CategoryItem.scss';

export class CategoryItem extends BaseComponent {
  constructor(text, category) {
    super('div', ['category__item'], text);

    this.rightAnswers = null;
    if (state.currentQuizVariant === 'artists') {
      this.rightAnswers = state.artistsRightAnswers[category];
      this.element.classList.add('category__item_artists');
    } else if (state.currentQuizVariant === 'paintings') {
      this.rightAnswers = state.paintingsRightAnswers[category];
      this.element.classList.add('category__item_paintings');
    }

    if (this.rightAnswers) {
      this.resultSpan = new BaseComponent(
        'span',
        ['results__result'],
        `${this.rightAnswers} / ${state.allAnswers}`,
      );

      this.element.append(this.resultSpan.element);
    }
  }
}
