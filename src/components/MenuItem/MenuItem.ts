import { BaseComponent } from '../BaseComponent/BaseComponent';
import './MenuItem.sass';

export class MenuItem extends BaseComponent {
  link: HTMLAnchorElement;

  constructor(text: string, linkSrc: string) {
    super('li', ['nav__item']);
    this.link = document.createElement('a') as HTMLAnchorElement;
    this.link.classList.add('nav__link');
    this.link.href = linkSrc;
    this.link.innerText = text;
    this.element.append(this.link);
  }
}
