import './Main.sass';
import { BaseComponent } from './../BaseComponent/BaseComponent';
import { WelcomeSection } from './../WelcomeSection/WelcomeSection';

export class Main extends BaseComponent {
  welcomeSection: BaseComponent;

  constructor() {
    super('main', ['main']);

    this.welcomeSection = new WelcomeSection();
    this.element.append(this.welcomeSection.element);
  }
}