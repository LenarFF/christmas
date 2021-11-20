import { state } from '../../state';
import { BaseComponent } from '../BaseComponent/BaseComponent';
import { ModalCard } from '../ModalCard/ModalCard';
import './Modal.scss';

export class Modal extends BaseComponent {
  constructor(backdrop, currentSlide, rightCardInfo, correctness, isEndSlides) {
    super('div', ['modal-window']);
    this.backdrop = backdrop;
    this.currentSlide = currentSlide;
    this.isEndSlides = isEndSlides;
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
    if (this.isEndSlides) {
      location.hash = '#/results/';
      this.playEndSound();
      return;
    }
    this.hideModal();
    this.changeSlide();
  };

  playEndSound = () => {
    this.audio = new Audio('./sound/end.mp3');
    this.audio.volume = state.soundVolume;
    this.audio.play();
  };
}
