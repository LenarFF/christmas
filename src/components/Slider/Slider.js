import { images } from '../../data/images';
import { state } from '../../state';
import { BaseComponent } from '../BaseComponent/BaseComponent';
import { PainterCard } from '../PainterCard/PainterCard';
import { PictureCard } from '../PictureCard/PictureCard';
import './Slider.scss';

export class Slider extends BaseComponent {
  constructor(category) {
    super('div', ['slider-wrap']);
    images[category].map((item, index) => {
      let card = null;
      if (state.currentQuizVariant === 'artists') {
        card = new PainterCard(category, index);
      } else if (state.currentQuizVariant === 'paintings') {
        card = new PictureCard(category, index);
      }
      if (index === 0) card.element.classList.remove('hidden');
      this.element.append(card.element);
    });
  }
}
