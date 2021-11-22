import './PictureCard.scss';
import { BaseComponent } from '../BaseComponent/BaseComponent';
import { ImageWrapper } from '../ImageWrapper/ImageWrapper';
import { images } from '../../data/images';
import { Button } from '../Button/Button';
import { state } from '../../state';
import { QuestionCard } from '../QuestionCard/QuestionCard';

export class PictureCard extends QuestionCard {
  constructor(category, cardNumber) {
    super(category, cardNumber);

    state.allAnswers = images[category].length;
    this.numberAnswersOnPage = 4;
    if (this.cardNumber === 0) state.paintingsRightAnswers[this.category] = 0;
    console.log(category, cardNumber)
    this.trueAnswerNum = Number(images[category][cardNumber].imageNum);
    this.answersObj = [images[category][cardNumber]];
    this.answers = [images[category][cardNumber].author];
    this.fillAnswersArray();
    this.shuffleArray(this.answersObj);

    this.title = new BaseComponent(
      'h3',
      ['picture-card__title', 'card-title'],
      'Кто автор картины?',
    );

    this.img = new ImageWrapper(`./img/${this.trueAnswerNum}.webp`, ['picture-card__img']);
    this.answersWrap = new BaseComponent('div', ['picture-card__answers-wrap']);

    this.answersWrap.element.addEventListener('click', (e) => this.handleModal(e));
    this.answersObj.map((item) => {
      const answerBtn = new Button(item.author, ['picture-card__answers-btn']);
      answerBtn.element.setAttribute('data-imgNum', `${item.imageNum}`);
      this.answersWrap.element.append(answerBtn.element);
    });

    this.element.prepend(
      this.title.element,
      this.img.element,
      this.answersWrap.element,
    );
  }

  getRandomCategory = () => {
    return Math.floor(Math.random() * images.length);
  };

  getRandomCardInCategory = (category) => {
    return Math.floor(Math.random() * images[category].length);
  };

  fillAnswersArray = () => {
    for (let i = 0; this.answersObj.length < this.numberAnswersOnPage; i++) {
      const randomCategory = this.getRandomCategory();
      const newAnswerObj = images[randomCategory][this.getRandomCardInCategory(randomCategory)];
      if (!this.answers.includes(newAnswerObj.author)) {
        this.answersObj.push(newAnswerObj);
      }
    }
  };


  handleModal = (e) => {
    if (!e.target.getAttribute('data-imgNum')) return;
    this.isTimerStop = true;
    const correctness = this.checkCorrectnessAnswer(e.target, this.trueAnswerNum);
    const modal = this.createModal(correctness);
    this.showModal(modal);
    this.playAudio(correctness);
  };
}
