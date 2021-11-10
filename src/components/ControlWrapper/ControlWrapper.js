import { BaseComponent } from '../BaseComponent/BaseComponent';
import './ControlWrapper.scss';

export class ControlWrapper extends BaseComponent {
  constructor(tag, href = '', styles = []) {
    super(tag, ['control-wrapper']);

    this.control = new BaseComponent('div', ['control']);
    this.control.element.classList.add(...styles);
    if (href && tag === 'a') {
      this.element.href = href;
      this.element.target = '_blank';
    }

    this.element.append(this.control.element);
  }
}
