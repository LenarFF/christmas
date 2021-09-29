import './WelcomeSection.sass';
import { BaseComponent } from '../BaseComponent/BaseComponent';
import { WelcomeSlider } from './../WelcomeSlider/WelcomeSlider';

export class WelcomeSection extends BaseComponent {
  title: BaseComponent;
  text: BaseComponent;
  container: BaseComponent;
  button: HTMLAnchorElement;
  contentWrap: BaseComponent;
  welcomeSlider: WelcomeSlider;

  constructor() {
    super('section', ['dark-section', 'welcome']);

    this.container = new BaseComponent('div', ['welcome-container', 'container']);
    this.title = new BaseComponent('h2', ['section-title', 'section-title_dark']);
    this.title.element.innerHTML = 'Welcome <br> to the Louvre';
    this.text = new BaseComponent('p', ['welcome__text']);
    this.text.element.innerText = 'From the castle to the museum';
    this.button = document.createElement('a') as HTMLAnchorElement;
    this.button.classList.add('welcome__button');
    this.button.innerText = 'Discover the Louvre';
    this.contentWrap = new BaseComponent('div', ['welcome__content']);
    this.welcomeSlider = new WelcomeSlider(5);

    this.contentWrap.element.append(this.title.element, this.text.element, this.button);
    this.container.element.append(this.contentWrap.element, this.welcomeSlider.element);
    this.element.append(this.container.element);
  }
}
