import { BaseComponent } from '../BaseComponent/BaseComponent';
import './MenuItem.sass';

export class MenuItem extends BaseComponent {
  link: HTMLAnchorElement;
  arrow: BaseComponent;

  constructor(text: string, linkSrc: string, vertical: boolean) {
    super('li', ['nav__item']);
    this.link = document.createElement('a') as HTMLAnchorElement;
    this.link.classList.add('nav__link');
    this.link.href = linkSrc;
    this.link.innerText = text;
    this.arrow = new BaseComponent('div', ['nav__arrow']);
    if (vertical) this.link.append(this.arrow.element);
    this.element.append(this.link);
  }
}
