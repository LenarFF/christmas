import { BaseComponent } from '../BaseComponent/BaseComponent';
import './WelcomeSlider.sass';

export class WelcomeSlider extends BaseComponent {
  pageCounter: BaseComponent;
  pageField: BaseComponent;
  pageSquares: BaseComponent[];
  pageControls: BaseComponent;
  currentPage: number;
  imageCount: number;
  leftArrow: BaseComponent;
  rightArrow: BaseComponent;

  constructor(imageCount: number) {
    super('div', ['welcome-slider']);

    this.pageCounter = new BaseComponent('div', ['welcome-slider__counter']);
    this.pageField = new BaseComponent('div', ['welcome-slider__field']);
    this.pageControls = new BaseComponent('div', ['welcome-slider__controls']);
    this.currentPage = 1;
    this.imageCount = imageCount;
    this.leftArrow = new BaseComponent('div', [
      'welcome-slider__arrow',
      'welcome-slider__arrow_left',
    ]);
    this.rightArrow = new BaseComponent('div', [
      'welcome-slider__arrow',
      'welcome-slider__arrow_right',
    ]);

    this.pageSquares = [];
    this.renderSquare();

    this.pageSquares.map((square) => this.pageField.element.append(square.element));

    console.log(this.pageSquares);

    this.pageControls.element.append(this.leftArrow.element, this.rightArrow.element);
    this.element.append(
      this.pageCounter.element,
      this.pageField.element,
      this.pageControls.element,
    );

    this.renderCount();
  }

  countPage(imageCount: number) {
    this.currentPage = this.currentPage === imageCount ? 1 : this.currentPage + 1;
  }

  renderCount() {
    this.pageCounter.element.innerText = `${this.currentPage > 9 ? '' : '0'}${this.currentPage} | ${
      this.imageCount > 9 ? '' : '0'
    }${this.imageCount}`;
  }

  renderSquare() {
    for (let i = 0; i < this.imageCount; i++) {
      this.pageSquares.push(new BaseComponent('div', ['welcome-slider__square']));
    }
  }
}
