import { BaseComponent } from '../../components/BaseComponent/BaseComponent';
import { ImageWrapper } from '../../components/ImageWrapper/ImageWrapper';
import { StartNav } from '../../components/StartNav/StartNav';
import { state } from '../../state';
import './StartPage.scss';

export class StartPage extends BaseComponent {
  constructor() {
    super('main', ['container', 'main']);
    this.title = new BaseComponent('h1', ['main-title'], 'art quiz');
    this.ul = new StartNav();
    this.imgWrap = new ImageWrapper('./startPageImg/240.webp', ['col-8']);
    this.element.append(this.title.element, this.ul.element, this.imgWrap.element);

    this.ul.element.addEventListener('click', (e) => this.handleBtn(e));
  }

  handleBtn = (e) => {
    if (e.target.dataset) {
      if (e.target.dataset.value === 'artists') {
        state.currentQuizVariant = 'artists';
        location.hash = '#/categories/';
      } else if (e.target.dataset.value === 'paintings') {
        state.currentQuizVariant = 'paintings';
        location.hash = '#/categories/';
      } else if (e.target.dataset.value === 'settings') {
        location.hash = '#/settings/';
      }
    }
  };
}