import './Visiting.sass';
import { BaseComponent } from '../BaseComponent/BaseComponent';
import { cardContent } from '../../content/visitingContent';
import { VisitingCard } from '../VisitingCard/VisitingCard';

export class Visiting extends BaseComponent {
  header: BaseComponent;

  horizontal: BaseComponent;

  cardField: BaseComponent;
  container: BaseComponent;

  constructor() {
    super('div', ['visiting']);
    this.container = new BaseComponent('div', ['visiting-container', 'container']);
    this.header = new BaseComponent('h2', ['section-title']);
    this.header.element.innerText = 'Virtual tour';
    this.horizontal = new BaseComponent('hr', ['horizontal']);
    this.cardField = new BaseComponent('div', ['visiting__card-field']);
    cardContent.map((card) =>
      this.cardField.element.append(new VisitingCard(card.imgSrc, card.titleContent).element),
    );

    this.container.element.append(
      this.header.element,
      this.horizontal.element,
      this.cardField.element,
    );

    this.element.append(this.container.element)
  }
}
