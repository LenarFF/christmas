import { BaseComponent } from '../BaseComponent/BaseComponent';

export class Button extends BaseComponent {
  constructor(text, styles = []) {
    super('button', ['btn'], text);
    this.element.classList.add(...styles);
  }
}
