import { BaseComponent } from '../../components/BaseComponent/BaseComponent';
import './CategoriesPage.scss';
import { categories } from './../../data/categories';
import { CategoryItem } from '../../components/CategoryItem/CategoryItem';

export class CategoriesPage extends BaseComponent {
  constructor() {
    super('div', ['container', 'categories'])
    this.title = new BaseComponent('h2', ['categories__title'], 'Category');
    this.categoriesWrap = new BaseComponent('div', ['categories__wrap']);
    categories.map((item) => {
      const category = new CategoryItem(item);
      this.categoriesWrap.element.append(category.element);
    })

    this.element.append(this.title.element, this.categoriesWrap.element);
  }
}