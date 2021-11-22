import { images } from '../../data/images';
import { state } from '../../state';
import { BaseComponent } from '../BaseComponent/BaseComponent';
import { PainterCard } from '../PainterCard/PainterCard';
import { PictureCard } from '../PictureCard/PictureCard';
import './Slider.scss';

export class Slider extends BaseComponent {
  constructor(category) {
    super('div', ['slider-wrap']);

    state.currentSlide = 0;
    let card = null;
    state.currentCategory = category;
    if (state.currentQuizVariant === 'artists') {
      card = new PainterCard(category, state.currentSlide);
    } else if (state.currentQuizVariant === 'paintings') {
      card = new PictureCard(category, state.currentSlide);
    }

    this.element.append(card.element);
    card.element.style.left = '0px'
  }
}