import './Results.scss';
import { BaseComponent } from '../../components/BaseComponent/BaseComponent';
import { Button } from '../../components/Button/Button';
import { state } from '../../state';

export class Results extends BaseComponent {
  constructor() {
    super('div', ['results']);
    console.log(state)
    this.resultSpan = new BaseComponent('span', ['results__result'], `${state.rightAnswers} / ${state.allAnswers}`)
    this.homeBtn = new Button('Home')
    this.homeBtn.element.addEventListener('click', this.handleHomeBtn);

    this.element.append(this.resultSpan.element, this.homeBtn.element);
  }

  handleHomeBtn = () => {
    location.hash = '#/start-page/'
  }
}