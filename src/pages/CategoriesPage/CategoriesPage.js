import { BaseComponent } from '../../components/BaseComponent/BaseComponent';
import './CategoriesPage.scss';
import { categories } from './../../data/categories';
import { CategoryItem } from '../../components/CategoryItem/CategoryItem';
import { Button } from '../../components/Button/Button';

export class CategoriesPage extends BaseComponent {
  constructor() {
    super('div', ['container', 'categories']);
    this.title = new BaseComponent('h2', ['categories__title'], 'Category');
    this.backBtn = new Button('back', ['btn-info']);
    this.top = new BaseComponent('div', ['categories__top']);

    this.categoriesWrap = new BaseComponent('div', ['categories__wrap']);
    categories.map((item) => {
      const category = new CategoryItem(item);
      this.categoriesWrap.element.append(category.element);
    });

    this.top.element.append(this.backBtn.element, this.title.element);
    this.element.append(this.top.element, this.categoriesWrap.element);

    this.backBtn.element.addEventListener('click', () => this.handleBackBtn());
  }

  handleBackBtn = () => {
    location.hash = '#/start-page/';
    console.log(1)
  };
}