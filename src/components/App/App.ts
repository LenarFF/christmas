import { BaseComponent } from '../BaseComponent/BaseComponent';
import { Header } from '../Header/Header';
import { Main } from '../Main/Main';

export class App extends BaseComponent {
  header: Header;
  main: Main;

  constructor() {
    super('div', ['app']);

    this.header = new Header();
    this.main = new Main();

    this.element.append(this.header.element, this.main.element);
  }
}
