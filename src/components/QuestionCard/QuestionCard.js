import { state } from '../../state';
import { BaseComponent } from '../BaseComponent/BaseComponent';
import './QuestionCard.scss';

export class QuestionCard extends BaseComponent {
  constructor() {
    super('div', ['question-card']);
  }

  shuffleArray = (arr) => {
    arr.sort(() => Math.random() - 0.5);
  };

  checkCorrectnessAnswer = (currentImg, rightImageNum) => {
    const correctness = currentImg.getAttribute('data-imgNum') === String(rightImageNum);
    if (correctness) this.setRightAnswersInState();
    return correctness;
  };

  setRightAnswersInState = () => {
    if (state.currentCategory === 'artists') {
      state.artistsRightAnswers[this.category + 1]++;
    } else if (state.currentCategory === 'paintings') {
      state.paintingsRightAnswers[this.category + 1]++;
    }
  };
}
