import { BaseComponent } from '../BaseComponent/BaseComponent';
import './Logo.sass';

export class Logo extends BaseComponent {
  logoImg: BaseComponent;

  logoText: BaseComponent;

  constructor() {
    super('div', ['logo']);
    this.logoImg = new BaseComponent('div', ['logo__img']);
    this.logoText = new BaseComponent('h1', ['logo__text']);
    this.logoText.element.innerText = 'louvre';
    this.element.append(this.logoImg.element, this.logoText.element);
  }
}
