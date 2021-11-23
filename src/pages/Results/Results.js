import './Results.scss';
import { BaseComponent } from '../../components/BaseComponent/BaseComponent';
import { Button } from '../../components/Button/Button';
import { state } from '../../state';

export class Results extends BaseComponent {
  constructor() {
    super('div', ['results']);

    this.rightAnswers = 0;
    this.currentCategory = state.currentCategory;

    console.log(state)
    this.getRightAnswersNumber();

    this.resultSpan = new BaseComponent(
      'span',
      ['results__result'],
      `${this.rightAnswers} / ${state.allAnswers}`,
    );
    this.homeBtn = new Button('Home');
    this.homeBtn.element.addEventListener('click', this.handleHomeBtn);

    this.element.append(this.resultSpan.element, this.homeBtn.element);
  }

  handleHomeBtn = () => {
    location.hash = '#/start-page/';
  };

  getRightAnswersNumber = () => {
    if (state.currentQuizVariant === 'artists') {
      this.rightAnswers = state.artistsRightAnswers[this.currentCategory];
    } else if (state.currentQuizVariant === 'paintings') {
      this.rightAnswers = state.paintingsRightAnswers[this.currentCategory];
    }
  };
}
