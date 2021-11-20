import { BaseComponent } from '../../components/BaseComponent/BaseComponent';
import './CategoriesPage.scss';
import { categories } from './../../data/categories';
import { CategoryItem } from '../../components/CategoryItem/CategoryItem';
import { Button } from '../../components/Button/Button';
import { Slider } from '../../components/Slider/Slider';

export class CategoriesPage extends BaseComponent {
  constructor() {
    super('div', ['container', 'categories']);
    this.title = new BaseComponent('h2', ['categories__title'], 'Category');
    this.backBtn = new Button('back', ['btn-info']);
    this.top = new BaseComponent('div', ['categories__top']);

    this.categoriesWrap = new BaseComponent('div', ['categories__wrap']);

    categories.map((item, index) => {
      const category = new CategoryItem(item, index + 1);
      category.element.setAttribute('data-category', index + 1);
      this.categoriesWrap.element.append(category.element);
    });

    this.top.element.append(this.backBtn.element, this.title.element);
    this.element.append(this.top.element, this.categoriesWrap.element);

    this.backBtn.element.addEventListener('click', () => this.handleBackBtn());
    this.categoriesWrap.element.addEventListener('click', (e) => this.handleCategoryCard(e));
  }

  handleBackBtn = () => {
    location.hash = '#/start-page/';
  };

  handleCategoryCard = (e) => {
    if (e.target.dataset.category) {
      const slider = new Slider(Number(e.target.dataset.category) - 1);
      const pageWrap = this.categoriesWrap.element.parentElement;
      pageWrap.innerHTML = '';
      pageWrap.append(slider.element);
    }
  };
}
