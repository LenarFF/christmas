import { BaseComponent } from '../components/BaseComponent/BaseComponent';
import { Footer } from '../components/Footer/Footer';
import { Router } from '../routing';
import { state } from '../state';
import './App.scss';

export class App extends BaseComponent {
  constructor() {
    super('div', ['app']);
    this.footer = new Footer();
    this.pageWrap = new BaseComponent('div', ['page-wrapper']);
    this.router = new Router();
    this.router.addListener(this.pageWrap.element);
    window.onload = () => {
      window.location.hash = '#/start-page/';
    };

    this.element.append(this.pageWrap.element, this.footer.element);
    window.addEventListener('beforeunload', this.setLocalStorage);
    window.addEventListener('DOMContentLoaded', this.getLocalStorage);
  }

  setLocalStorage = () => {
    localStorage.setItem('ArtQuiz_state_LenarFF', JSON.stringify(state));
  };

  getLocalStorage = () => {
    if (localStorage.getItem('ArtQuiz_state_LenarFF')) {
      const state = JSON.parse(localStorage.getItem('ArtQuiz_state_LenarFF'));
      // console.log(x);
    }
  };
}
