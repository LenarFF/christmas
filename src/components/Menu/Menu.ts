import { menuContent } from '../../content/menuContent';
import { BaseComponent } from '../BaseComponent/BaseComponent';
import { MenuItem } from './../MenuItem/MenuItem';
import './Menu.sass';

export class Menu extends BaseComponent {
  constructor(styles: string[] = []) {
    super('ul', ['nav']);
    this.element.classList.add(...styles);

    menuContent.map((item) => this.element.append(new MenuItem(item.text, item.link).element));
  }
}
