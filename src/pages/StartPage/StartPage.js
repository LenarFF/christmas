import { BaseComponent } from '../../components/BaseComponent/BaseComponent';
import { ImgWrap } from '../../components/ImgWrap/ImgWrap';
import { StartNav } from '../../components/StartNav/StartNav';
import './StartPage.scss';

export class StartPage extends BaseComponent {
  constructor() {
    super('main', ['container', 'main', 'hidden']);
    this.title = new BaseComponent('h1', ['main-title'], 'art quiz');
    this.ul = new StartNav();
    this.imgWrap = new ImgWrap('./img/0.jpg', ['col-8']);
    this.element.append(this.title.element, this.ul.element, this.imgWrap.element);
  }
}
