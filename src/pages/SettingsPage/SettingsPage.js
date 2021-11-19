import './SettingsPage.scss';
import { BaseComponent } from '../../components/BaseComponent/BaseComponent';
import { Button } from '../../components/Button/Button';

export class SettingsPage extends BaseComponent {
  constructor() {
    super('div', ['settings']);
    this.title = new BaseComponent('h2', ['settings__title'], 'Settings');
    this.homeBtn = new Button('home');

    this.homeBtn.element.addEventListener('click', this.handleHomeBtn);

    this.element.append(this.title.element, this.homeBtn.element);
  }

  handleHomeBtn = () => {
    location.hash = '#/start-page/';
  };
}
