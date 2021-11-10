import { BaseComponent } from '../BaseComponent/BaseComponent';

export class Button extends BaseComponent {
  constructor(styles) {
    super('button', ['btn']);
    this.element.classList.add(...styles);
  }
}
