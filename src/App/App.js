import { BaseComponent } from '../components/BaseComponent/BaseComponent';
import { Footer } from '../components/Footer/Footer';
import { CategoriesPage } from '../pages/CategoriesPage/CategoriesPage';
import { StartPage } from '../pages/StartPage/StartPage';
import './App.scss';

export class App extends BaseComponent {
  constructor() {
    super('div', ['app']);
    this.startPage = new StartPage();
    this.footer = new Footer();
    this.categoriesPage = new CategoriesPage()

    this.element.append(this.startPage.element, this.categoriesPage.element, this.footer.element);

  }
}
