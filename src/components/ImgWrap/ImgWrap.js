import { BaseComponent } from '../BaseComponent/BaseComponent';

export class ImgWrap extends BaseComponent {
  constructor(src, styles = []) {
    super('div', ['img-wrap']);

    this.element.classList.add(...styles);
    this.img = new BaseComponent('img', ['w-100']);
    this.img.element.src = src;

    this.element.append(this.img.element);
  }
}
