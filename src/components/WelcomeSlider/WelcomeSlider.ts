import { BaseComponent } from '../BaseComponent/BaseComponent';
import './WelcomeSlider.sass';

export class WelcomeSlider extends BaseComponent {
  pageCounter: BaseComponent;
  pageField: BaseComponent;
  pageSquares: BaseComponent[];
  pageControls: BaseComponent;
  leftArrow: BaseComponent;
  rightArrow: BaseComponent;

  constructor(
    imageCount: number,
    currentImg: number,
    incCounter: () => void,
    decCounter: () => void,
  ) {
    super('div', ['welcome-slider']);

    this.pageCounter = new BaseComponent('div', ['welcome-slider__counter']);
    this.pageField = new BaseComponent('div', ['welcome-slider__field']);
    this.pageControls = new BaseComponent('div', ['welcome-slider__controls']);
    this.leftArrow = new BaseComponent('div', [
      'welcome-slider__arrow',
      'welcome-slider__arrow_left',
    ]);
    this.leftArrow.element.addEventListener('click', decCounter);
    this.rightArrow = new BaseComponent('div', [
      'welcome-slider__arrow',
      'welcome-slider__arrow_right',
    ]);
    this.rightArrow.element.addEventListener('click', incCounter);

    this.pageSquares = [];
    this.renderSquare(imageCount);

    this.pageSquares.map((square) => this.pageField.element.append(square.element));

    console.log(this.pageSquares);

    this.pageControls.element.append(this.leftArrow.element, this.rightArrow.element);
    this.element.append(
      this.pageCounter.element,
      this.pageField.element,
      this.pageControls.element,
    );

    this.renderCount(imageCount, currentImg);
  }

  renderCount = (imageCounter: number, currentImage: number) => {
    this.pageCounter.element.innerText = `${currentImage > 9 ? '' : '0'}${currentImage + 1} | ${
      imageCounter > 9 ? '' : '0'
    }${imageCounter}`;
  };

  renderSquare(imageCounter: number) {
    for (let i = 0; i < imageCounter; i++) {
      this.pageSquares.push(new BaseComponent('div', ['welcome-slider__square']));
    }
  }
}
