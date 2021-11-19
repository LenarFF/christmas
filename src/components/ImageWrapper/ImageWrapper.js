import { BaseComponent } from '../BaseComponent/BaseComponent';
import './ImageWrapper.scss';

export class ImageWrapper extends BaseComponent {
  constructor(src, styles = []) {
    super('div');

    this.img = new BaseComponent('img', ['inner-img']);
    this.element.classList.add(...styles);
    this.img.element.src = src;

    this.element.append(this.img.element);
  }
}
