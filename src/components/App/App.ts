import { BaseComponent } from '../BaseComponent/BaseComponent';
import { Menu } from './../Menu/Menu';

export class App extends BaseComponent {
  menu: Menu;
  constructor() {
    super('div', ['app']);

    this.menu = new Menu();

    this.element.append(this.menu.element);
  }
}
