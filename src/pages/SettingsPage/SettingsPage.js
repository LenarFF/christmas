import './SettingsPage.scss';
import { BaseComponent } from '../../components/BaseComponent/BaseComponent';
import { Button } from '../../components/Button/Button';
import { SettingsCard } from '../../components/SettingsCard/SettingsCard';

export class SettingsPage extends BaseComponent {
  constructor() {
    super('div', ['settings']);
    this.title = new BaseComponent('h2', ['settings__title'], 'Settings');
    this.homeBtn = new Button('home');

    this.homeBtn.element.addEventListener('click', this.handleHomeBtn);

    this.top = new BaseComponent('div', ['settings__top']);
    this.top.element.append(this.homeBtn.element, this.title.element);

    this.volumeCard = new SettingsCard(
      'Volume',
      'soundVolume',
      'settings-card__controls-btn_volume-on',
      'settings-card__controls-btn_volume-off',
      './settingImg/volume.jpg',
      '0',
      '1',
      '0.01',
    );

    this.timerCard = new SettingsCard(
      'Timer',
      'timer',
      'settings-card__controls-btn_timer-on',
      'settings-card__controls-btn_timer-off',
      './settingImg/timer.webp',
      '0',
      '30',
      '5'
    );


    this.element.append(this.title.element, this.homeBtn.element, this.volumeCard.element, this.timerCard.element);
  }

  handleHomeBtn = () => {
    location.hash = '#/start-page/';
  };
}
