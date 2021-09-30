import './WelcomeSection.sass';
import { BaseComponent } from '../BaseComponent/BaseComponent';
import { WelcomeSlider } from '../WelcomeSlider/WelcomeSlider';
import { welcomeSliderImg } from '../../content/welcomeContent';

export class WelcomeSection extends BaseComponent {
  title: BaseComponent;

  text: BaseComponent;

  container: BaseComponent;

  button: HTMLAnchorElement;

  contentWrap: BaseComponent;

  welcomeSlider: WelcomeSlider;

  currentImg: number;

  imageCount: number;

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
    this.currentImg = 0;
    this.imageCount = welcomeSliderImg.length;
    this.welcomeSlider = new WelcomeSlider(
      this.imageCount,
      this.currentImg,
      this.incCounter,
      this.decCounter,
    );

    this.contentWrap.element.append(this.title.element, this.text.element, this.button);
    this.container.element.append(this.contentWrap.element, this.welcomeSlider.element);
    this.element.append(this.container.element);
  }

  incCounter = () => {
    this.currentImg = (this.currentImg === this.imageCount - 1) ? 0 : this.currentImg + 1;
    console.log(this.currentImg);
    this.changeBackground();
  };

  decCounter = () => {
    this.currentImg = (this.currentImg === 0) ? this.imageCount : this.currentImg - 1;
    console.log(this.currentImg);
    this.changeBackground();
  };

  changeBackground = () => {
    this.container.element.style.background = `linear-gradient(270deg, rgba(255,0,0,0) 61%, rgba(0,0,0,1) 100%), url(../../assets/img/welcome-slider/${
      welcomeSliderImg[this.currentImg]
    })`;
  };
}
