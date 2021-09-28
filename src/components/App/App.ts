import { BaseComponent } from '../BaseComponent/BaseComponent';
import { Header } from '../Header/Header';

export class App extends BaseComponent {
  header: Header;

  constructor() {
    super('div', ['app']);

    this.header = new Header();

    this.element.append(this.header.element);
  }
}
