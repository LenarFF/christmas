import { BaseComponent } from '../components/BaseComponent/BaseComponent';
import { Footer } from '../components/Footer/Footer';
import { PainterCard } from '../components/PainterCard/PainterCard';
import { CategoriesPage } from '../pages/CategoriesPage/CategoriesPage';
import { StartPage } from '../pages/StartPage/StartPage';
import { Router } from '../routing';
import './App.scss';

export class App extends BaseComponent {
  constructor() {
    super('div', ['app']);
    this.startPage = new StartPage();
    this.footer = new Footer();
    this.categoriesPage = new CategoriesPage();
    this.painterCard = new PainterCard('gitler');
    this.pageWrap = new BaseComponent('div', ['page-wrapper']);
    this.router = new Router();
    this.router.addListener(this.pageWrap.element);
    window.onload = () => {
      console.log('change');
      window.location.hash = '#/start-page/';
    };

    this.element.append(this.pageWrap.element, this.footer.element);
  }
}
