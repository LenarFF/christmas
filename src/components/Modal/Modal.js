import { state } from '../../state';
import { BaseComponent } from '../BaseComponent/BaseComponent';
import { ModalCard } from '../ModalCard/ModalCard';
import { PainterCard } from '../PainterCard/PainterCard';
import { PictureCard } from '../PictureCard/PictureCard';
import './Modal.scss';

export class Modal extends BaseComponent {
  constructor(backdrop, currentSlide, rightCardInfo, correctness, isEndSlides) {
    super('div', ['modal-window']);
    this.backdrop = backdrop;
    this.currentSlide = currentSlide;
    this.isEndSlides = isEndSlides;
    this.nextBtn = new BaseComponent('button', ['btn', 'btn-warning', 'modal-close'], 'Следующая');

    this.modalCard = new ModalCard(rightCardInfo, correctness);

    this.nextBtn.element.addEventListener('click', () => this.handleNextBtn());

    this.element.append(this.modalCard.element, this.nextBtn.element);
  }

  hideModal = () => {
    this.element.classList.remove('show');
    this.backdrop.classList.add('hidden');
  };

  changeSlide = () => {
    if (this.currentSlide) {
      state.currentSlide++;
      let card = null;
      if (state.currentQuizVariant === 'artists') {
        card = new PainterCard(state.currentCategory, state.currentSlide);
      } else if (state.currentQuizVariant === 'paintings') {
        card = new PictureCard(state.currentCategory, state.currentSlide);
      }
      this.currentSlide.style.left = '2000px';
      this.currentSlide.addEventListener('transitionend', (e) => {
        if (e.propertyName !== 'left') return;
        card.element.style.left = '0px';
      });

      this.currentSlide.parentNode.append(card.element);
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
