import { BaseComponent } from '../BaseComponent/BaseComponent';
import { ModalCard } from '../ModalCard/ModalCard';
import './Modal.scss';

export class Modal extends BaseComponent {
  constructor(backdrop, currentSlide, rightCardInfo, correctness) {
    super('div', ['modal-window']);
    this.backdrop = backdrop;
    this.currentSlide = currentSlide;
    this.nextBtn = new BaseComponent('button', ['modal-close'], 'next');

    this.modalCard = new ModalCard(rightCardInfo, correctness);

    this.nextBtn.element.addEventListener('click', () => this.handleNextBtn());

    this.element.append(this.modalCard.element, this.nextBtn.element);
  }

  hideModal = () => {
    this.element.classList.remove('show');
    this.backdrop.classList.add('hidden');
  };

  changeSlide = () => {
    if (this.currentSlide.nextSibling) {
      this.currentSlide.classList.add('hidden');
      this.currentSlide.nextSibling.classList.remove('hidden');
    }
  };

  handleNextBtn = () => {
    this.hideModal();
    this.changeSlide();
  };
}
