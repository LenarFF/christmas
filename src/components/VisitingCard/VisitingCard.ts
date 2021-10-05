import './VisitingCard.sass';
import { BaseComponent } from '../BaseComponent/BaseComponent';

export class VisitingCard extends BaseComponent {
  img: HTMLImageElement;

  title: BaseComponent;

  horizontal: BaseComponent;

  text1: BaseComponent;

  text2: BaseComponent;

  info: BaseComponent;

  constructor(imgSrc: string, titleContent: string) {
    super('div', ['visiting__card']);
    this.img = document.createElement('img');
    this.img.classList.add('visiting__card__img');
    this.img.src = `./img/visiting/${imgSrc}`;

    this.info = new BaseComponent('div', ['visiting__card__info']);

    this.title = new BaseComponent('h3', ['visiting__card__title']);
    this.title.element.innerText = titleContent;

    this.horizontal = new BaseComponent('hr', ['visiting__card__hr']);

    this.text1 = new BaseComponent('p', ['visiting__card__text1']);
    this.text1.element.innerText = '360° Virtual Tour';
    this.text2 = new BaseComponent('p', ['visiting__card__text2']);
    this.text2.element.innerText = 'Google Street Panorama View';

    this.info.element.append(
      this.title.element,
      this.horizontal.element,
      this.text1.element,
      this.text2.element,
    );

    this.element.append(this.img, this.info.element);
  }
}
