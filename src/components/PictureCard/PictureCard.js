import './PictureCard.scss';
import { BaseComponent } from '../BaseComponent/BaseComponent';
import { ImageWrapper } from '../ImageWrapper/ImageWrapper';
import { images } from '../../data/images';
import { Button } from '../Button/Button';

export class PictureCard extends BaseComponent {
  constructor(category, cardNumber) {
    super('div', ['picture-card', 'hidden']);

    this.numberAnswersOnPage = 4;
    this.trueAnswerNum = Number(images[category][cardNumber].imageNum);
    this.answers = [images[category][cardNumber].author];
    this.fillAnswersArray();

    this.title = new BaseComponent(
      'h3',
      ['picture-card__title', 'card-title'],
      'Кто автор картины?',
    );

    this.img = new ImageWrapper(`./img/${this.trueAnswerNum}.webp`, ['picture-card__img']);
    this.answersWrap = new BaseComponent('div', ['picture-card__answers-wrap']);

    this.answers.map((item) => {
      const answerBtn = new Button(item, ['picture-card__answers-btn']);
      this.answersWrap.element.append(answerBtn.element);
    })

    this.element.append(this.title.element, this.img.element, this.answersWrap.element);
  }

  getRandomCategory = () => {
    return Math.floor(Math.random() * images.length)
  }

  getRandomCardInCategory = (category) => {
    return Math.floor(Math.random() * images[category].length)
  }

  fillAnswersArray = () => {
    for (let i = 0; this.answers.length < this.numberAnswersOnPage; i++) {
      const randomCategory = this.getRandomCategory();
      const newAnswer = images[randomCategory][this.getRandomCardInCategory(randomCategory)].author
      if (!this.answers.includes(newAnswer)) {
        this.answers.push(newAnswer);
      }
    }
  }

}