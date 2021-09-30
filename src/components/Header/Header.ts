import { menuContent } from '../../content/menuContent';
import { BaseComponent } from '../BaseComponent/BaseComponent';
import { Logo } from '../Logo/Logo';
import { Menu } from '../Menu/Menu';
import './Header.sass';

export class Header extends BaseComponent {
  menu: Menu;
  burgerMenu: Menu;
  container: BaseComponent;
  logo: BaseComponent;
  burger: BaseComponent;

  constructor() {
    super('header', ['dark-section']);

    this.container = new BaseComponent('div', ['header-container', 'container']);
    this.logo = new Logo();
    this.menu = new Menu(menuContent, false, ['nav']);
    this.burgerMenu = new Menu(menuContent, true, ['burger-menu']);
    this.burger = new BaseComponent('div', ['burger']);
    this.container.element.append(
      this.logo.element,
      this.menu.element,
      this.burger.element,
      this.burgerMenu.element,
    );
    this.element.append(this.container.element);

    this.burger.element.addEventListener('click', this.openMenu);
  }

  openMenu = () => {
    const welcomeContent = document.querySelector('.welcome__content');
    welcomeContent?.classList.toggle('hidden');
    this.burgerMenu.element.classList.toggle('burger-menu_open');
    this.burger.element.classList.toggle('burger_cross')
  };
}
