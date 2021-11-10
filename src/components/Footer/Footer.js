import './Footer.scss';
import { BaseComponent } from '../BaseComponent/BaseComponent';
import { ControlWrapper } from '../ControlWrapper/ControlWrapper';

export class Footer extends BaseComponent {
  constructor() {
    super('footer', ['footer']);

    this.github = new ControlWrapper('a', 'https://github.com/LenarFF?tab=repositories', [
      'github',
    ]);
    this.rsschool = new ControlWrapper('a', 'https://rs.school/js/', ['rsschool']);
    this.year = new BaseComponent('span', ['year'], '2021');

    this.element.append(this.github.element, this.year.element, this.rsschool.element);
  }
}
