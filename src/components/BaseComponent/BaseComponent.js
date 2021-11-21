export class BaseComponent {
  constructor(tag = 'div', styles = [], text = '') {
    this.element = document.createElement(tag);
    this.element.classList.add(...styles);
    if (text) this.element.innerText = text;
  }

}
