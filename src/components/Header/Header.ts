import { menuContent } from '../../content/menuContent';
import { BaseComponent } from '../BaseComponent/BaseComponent';
import { Logo } from '../Logo/Logo';
import { Menu } from '../Menu/Menu';
import './Header.sass';

export class Header extends BaseComponent {
  menu: Menu;
  container: BaseComponent;
  logo: BaseComponent;

  constructor() {
    super('header', ['dark-section']);

    this.container = new BaseComponent('div', ['header-container', 'container']);
    this.logo = new Logo();
    this.menu = new Menu(menuContent);
    this.container.element.append(this.logo.element, this.menu.element);
    this.element.append(this.container.element)
  }
}
