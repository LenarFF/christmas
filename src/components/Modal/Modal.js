import { BaseComponent } from '../BaseComponent/BaseComponent';
import './Modal.scss';

export class Modal extends BaseComponent {
  constructor(backdrop) {
    super('div', ['modal-window']);
    this.closeBtn = new BaseComponent('button', ['modal-close'], 'close');

    this.closeBtn.element.addEventListener('click', () => this.hideModal(backdrop));

    this.element.append(this.closeBtn.element);
  }

  hideModal = (backdrop) => {
    this.element.classList.remove('show');
    backdrop.classList.add('hidden');
  };
}
