import { state } from '../../state';
import { BaseComponent } from '../BaseComponent/BaseComponent';
import { ImageWrapper } from '../ImageWrapper/ImageWrapper';
import './SettingsCard.scss';

export class SettingsCard extends BaseComponent {
  constructor(
    title,
    stateSetting,
    iconClassOn,
    iconClassOff,
    imgSrc,
    rangeMin,
    rangeMax,
    rangeStep,
  ) {
    super('div', ['settings-card']);

    this.rangeValue = state[stateSetting];
    this.stateSetting = stateSetting;
    this.iconClassOff = iconClassOff;
    this.cardImg = new ImageWrapper(imgSrc, ['settings-card__img-wrapper']);
    this.card = new BaseComponent('div', ['settings-card__controls']);
    this.cardBtnWrap = new BaseComponent('div', ['settings-card__controls-btn-wrap']);
    this.cardBtn = new BaseComponent('div', ['settings-card__controls-btn', iconClassOn]);

    this.cardBtnWrap.element.append(this.cardBtn.element);

    this.cardRange = new BaseComponent('input', ['settings-card__controls-range']);
    this.cardRange.element.type = 'range';
    this.cardRange.element.min = rangeMin;
    this.cardRange.element.max = rangeMax;
    this.cardRange.element.step = rangeStep;
    this.cardRange.element.value = state[stateSetting];
    this.cardTitle = new BaseComponent('h3', ['settings-card__title'], title);

    this.cardRange.element.addEventListener('change', () => this.handleRange());
    this.cardBtn.element.addEventListener('click', () => this.toggleControl());

    this.card.element.append(this.cardBtnWrap.element, this.cardRange.element);

    this.element.append(this.cardImg.element, this.card.element, this.cardTitle.element);
  }

  handleRange = () => {
    this.rangeValue = this.cardRange.element.value;
    state[this.stateSetting] = this.rangeValue;
    this.toggleIcon();
  };

  toggleControl = () => {
    if (state[this.stateSetting] === 0) {
      state[this.stateSetting] = this.rangeValue;
      this.cardRange.element.value = this.rangeValue;
    } else {
      state[this.stateSetting] = 0;
      this.cardRange.element.value = 0;
    }
    this.toggleIcon();
  };

  toggleIcon = () => {
    state[this.stateSetting] === 0
      ? this.cardBtn.element.classList.add(this.iconClassOff)
      : this.cardBtn.element.classList.remove(this.iconClassOff);
  };
}
