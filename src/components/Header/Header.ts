import { menuContent } from '../../content/menuContent';
import { BaseComponent } from '../BaseComponent/BaseComponent';
import { Menu } from '../Menu/Menu';
import './Header.sass';
import './Header.css';

export class Header extends BaseComponent {
  menu: Menu;

  logo: BaseComponent;

  constructor() {
    super('div', ['header-container']);

    this.logo = new BaseComponent('div', ['logo']);
    this.menu = new Menu(menuContent);
    this.element.append(this.logo.element, this.menu.element);
  }
}
