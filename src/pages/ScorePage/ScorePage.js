import './ScorePage.scss';
import { BaseComponent } from '../../components/BaseComponent/BaseComponent';
import { images } from '../../data/images';
import { ImageWrapper } from '../../components/ImageWrapper/ImageWrapper';
import { state } from '../../state';
import { Button } from '../../components/Button/Button';

export class ScorePage extends BaseComponent {
  constructor(category) {
    super('div', ['score-page']);

    this.rightAnswers = null;
    if (state.currentQuizVariant === 'artists') {
      this.rightAnswers = state.artistsRightAnswers[category];
    } else if (state.currentQuizVariant === 'paintings') {
      this.rightAnswers = state.paintingsRightAnswers[category];
    }

    this.info = new BaseComponent('div', ['score-page__info']);
    this.categoryName = new BaseComponent(
      'h3',
      ['score-page__category-name'],
      `Категория ${category}`,
    );

    this.result = new BaseComponent(
      'span',
      ['score-page__result'],
      `${this.rightAnswers} / ${state.allAnswers}`,
    );

    this.info.element.append(this.categoryName.element, this.result.element);

    this.header = new BaseComponent('h2', ['score-page__header'], 'Результаты');
    this.startPageBtn = new Button('На главную', ['btn-info', 'btn-sm']);
    this.categoryPageBtn = new Button('Категории', ['btn-info', 'btn-sm']);
    this.top = new BaseComponent('div', ['score-page__top']);

    this.startPageBtn.element.addEventListener('click', this.goToStart);
    this.categoryPageBtn.element.addEventListener('click', this.goToCategory);

    this.top.element.append(
      this.startPageBtn.element,
      this.header.element,
      this.categoryPageBtn.element,
    );

    this.imagesWrap = new BaseComponent('div', ['score-page__images']);

    images[category].map((item) => {
      const image = new ImageWrapper(`./img/${item.imageNum}.webp`, ['score-page__image']);
      this.imagesWrap.element.append(image.element);
    });

    this.element.append(this.top.element, this.info.element, this.imagesWrap.element);
  }

  goToStart = () => {
    location.hash = '#/start-page/';
  };

  goToCategory = () => {
    location.hash = '#/categories/';
  };
}
