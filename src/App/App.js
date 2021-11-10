import { BaseComponent } from '../components/BaseComponent/BaseComponent';
import { Footer } from '../components/Footer/Footer';
import { StartPage } from '../pages/StartPage';
import './App.scss';

export class App extends BaseComponent {
  constructor() {
    super('div', ['app']);
    this.startPage = new StartPage();
    this.footer = new Footer();
    this.element.append(this.startPage.element, this.footer.element);
  }
}
