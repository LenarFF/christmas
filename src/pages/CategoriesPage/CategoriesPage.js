import { BaseComponent } from '../../components/BaseComponent/BaseComponent';
import './CategoriesPage.scss';
import { categories } from './../../data/categories';
import { CategoryItem } from '../../components/CategoryItem/CategoryItem';
import { Button } from '../../components/Button/Button';
import { PainterCard } from '../../components/PainterCard/PainterCard';
import { images } from '../../data/images';

export class CategoriesPage extends BaseComponent {
  constructor() {
    super('div', ['container', 'categories']);
    this.title = new BaseComponent('h2', ['categories__title'], 'Category');
    this.backBtn = new Button('back', ['btn-info']);
    this.top = new BaseComponent('div', ['categories__top']);

    this.categoriesWrap = new BaseComponent('div', ['categories__wrap']);
    categories.map((item, index) => {
      const category = new CategoryItem(item);
      category.element.setAttribute('data-category', index);
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
        const painterCard = new PainterCard(Number(e.target.dataset.category), 0);
        const pageWrap = this.categoriesWrap.element.parentElement;
        pageWrap.innerHTML = '';
        pageWrap.append(painterCard.element);
      }
  };
}