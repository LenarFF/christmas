import { BaseComponent } from '../BaseComponent/BaseComponent';

export class MenuItem extends BaseComponent {
  item: HTMLAnchorElement;

  constructor(text: string, link: string) {
    super('li');
    this.item = document.createElement('a');
    this.item.href = link;
    this.item.innerText = text;
    this.element.append(this.item)
  }
}
