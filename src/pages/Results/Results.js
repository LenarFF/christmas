import './Results.scss';
import { BaseComponent } from '../../components/BaseComponent/BaseComponent';
import { Button } from '../../components/Button/Button';
import { state } from '../../state';
import { ImageWrapper } from '../../components/ImageWrapper/ImageWrapper';

export class Results extends BaseComponent {
  constructor() {
    super('div', ['results']);

    this.rightAnswers = 0;
    this.currentCategory = state.currentCategory;

    this.getRightAnswersNumber();

    this.resultSpan = new BaseComponent(
      'h3',
      ['results__result'],
      `Ваш результат: ${this.rightAnswers} / ${state.allAnswers}`,
    );
    this.homeBtn = new Button('На главную', ['btn-info']);
    this.categoryBtn = new Button('Категории', ['btn-info']);
    this.homeBtn.element.addEventListener('click', this.handleHomeBtn);
    this.categoryBtn.element.addEventListener('click', this.handleCategoryBtn);
    this.top = new BaseComponent('div', ['results__top']);

    this.image = new ImageWrapper(this.getImageSrc(), ['results__img']);

    this.controls = new BaseComponent('div', ['results__controls']);

    this.controls.element.append(this.homeBtn.element, this.categoryBtn.element);

    this.top.element.append(this.resultSpan.element);
    this.element.append(this.top.element, this.image.element, this.controls.element);
  }

  handleHomeBtn = () => {
    location.hash = '#/start-page/';
  };

  handleCategoryBtn = () => {
    location.hash = '#/categories/';
  };

  getRightAnswersNumber = () => {
    if (state.currentQuizVariant === 'artists') {
      this.rightAnswers = state.artistsRightAnswers[this.currentCategory];
    } else if (state.currentQuizVariant === 'paintings') {
      this.rightAnswers = state.paintingsRightAnswers[this.currentCategory];
    }
  };

  getImageSrc = () => {
    let src = '';
    switch (true) {
      case this.rightAnswers < 2:
        src = './resultImg/1.jpg';
        break;
      case this.rightAnswers < 4:
        src = './resultImg/2.jpg';
        break;
      case this.rightAnswers < 6:
        src = './resultImg/3.jpg';
        break;
      case this.rightAnswers < 8:
        src = './resultImg/4.jpg';
        break;
      case this.rightAnswers < 10:
        src = './resultImg/5.jpg';
        break;
      default:
        src = './resultImg/6.jpg';
        break;
    }
    return src;
  };
}
