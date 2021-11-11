import { BaseComponent } from '../components/BaseComponent/BaseComponent';
import { Footer } from '../components/Footer/Footer';
import { Router } from '../routing';
import './App.scss';

export class App extends BaseComponent {
  constructor() {
    super('div', ['app']);
    this.footer = new Footer();
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
