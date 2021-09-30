import { BaseComponent } from '../BaseComponent/BaseComponent';
import './ExploreSection.sass';

export class ExploreSection extends BaseComponent {
  container: BaseComponent;
  title: BaseComponent;
  horizontal: BaseComponent;
  description: BaseComponent;
  textWrap: BaseComponent;
  text1: BaseComponent;
  text2: BaseComponent;
  text3: BaseComponent;
  img: HTMLImageElement;
  imgWrap: BaseComponent;
  constructor() {
    super('section', ['explore', 'dark-section']);
    this.container = new BaseComponent('div', ['explore-container', 'container']);

    this.description = new BaseComponent('div', ['explore__description']);
    this.title = new BaseComponent('h2', ['section-title', 'section-title_dark']);
    this.title.element.innerText = 'Picture explore';
    this.horizontal = new BaseComponent('hr', ['explore__hr']);

    this.imgWrap = new BaseComponent('div', ['explore__img-wrap']);
    this.img = document.createElement('img');
    this.img.classList.add('explore__img');
    this.img.src = './img/explore-slider/before.jpg';

    this.textWrap = new BaseComponent('div', ['explore__text-wrap']);
    this.text1 = new BaseComponent('p', [
      'explore__text',
      'explore__text_short'
    ]);
    this.text1.element.innerText =
      'Las Meninas is a 1656 painting by Diego Velázquez, the leading artist of the Spanish Golden Age.';
    this.text2 = new BaseComponent('p', ['explore__text']);
    this.text2.element.innerHTML =
      'It was cleaned in 1984 to remove a <span class="explore__text_yellow">"yellow veil"</span> of dust that had gathered since the previous restoration in the 19th century.';
    this.text3 = new BaseComponent('p', ['explore__text', 'explore__text_text3']);
    this.text3.element.innerText =
      'The cleaning provoked furious protests, not because the picture had been damaged in any way, but because it looked different.';

    this.imgWrap.element.append(this.img);
    this.description.element.append(
      this.title.element,
      this.horizontal.element,
      this.textWrap.element,
    );

    this.textWrap.element.append(this.text1.element, this.text2.element, this.text3.element);
    this.container.element.append(this.description.element, this.imgWrap.element);

    this.element.append(this.container.element);
  }
}
