import { BaseComponent } from '../BaseComponent/BaseComponent';
import './CategoryItem.scss';

export class CategoryItem extends BaseComponent {
  constructor(text) {
    super('div', ['category__item'], text);

  }
}