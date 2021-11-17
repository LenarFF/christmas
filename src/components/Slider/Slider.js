import { images } from '../../data/images';
import { BaseComponent } from '../BaseComponent/BaseComponent';
import { PainterCard } from '../PainterCard/PainterCard';
import './Slider.scss'

export class Slider extends BaseComponent {
  constructor(category) {
    super('div', ['slider-wrap']);
    images[category].map((item, index) => {
      const painterCard = new PainterCard(category, index);
      if (index === 0) painterCard.element.classList.remove('hidden')
       this.element.append(painterCard.element);
    });
  }
}
