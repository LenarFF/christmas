import { BaseComponent } from '../components/BaseComponent/BaseComponent';
import { Footer } from '../components/Footer/Footer';
import { StartPage } from '../pages/StartPage/StartPage';
import { Router } from '../routing';
import { state } from '../state';
import './App.scss';

export class App extends BaseComponent {
  constructor() {
    super('div', ['app']);
    this.footer = new Footer();
    this.pageWrap = new BaseComponent('div', ['page-wrapper']);
    this.router = new Router();
    this.startPage = new StartPage();
    this.router.addListener(this.pageWrap.element);
    window.onload = () => {
      window.location.hash = '#/start-page/';
    };

    this.pageWrap.element.append(this.startPage.element);

    this.element.append(this.pageWrap.element, this.footer.element);

    window.addEventListener('beforeunload', this.setLocalStorage);
    window.addEventListener('DOMContentLoaded', this.getLocalStorage);
  }

  setLocalStorage = () => {
    localStorage.setItem('ArtQuiz_state_LenarFF', JSON.stringify(state));
  };

  getLocalStorage = () => {
    if (localStorage.getItem('ArtQuiz_state_LenarFF')) {
      const localStorageInfo = JSON.parse(localStorage.getItem('ArtQuiz_state_LenarFF'));
      state.paintingsRightAnswers = localStorageInfo.paintingsRightAnswers;
      state.artistsRightAnswers = localStorageInfo.artistsRightAnswers;
    }
  };
}
