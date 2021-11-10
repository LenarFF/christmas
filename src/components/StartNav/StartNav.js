import { StartPageNavData } from '../../data/startPageData';
import { BaseComponent } from '../BaseComponent/BaseComponent';
import { ListItem } from '../ListItem/ListItem';
import './StartNav.scss';

export class StartNav extends BaseComponent {
  constructor() {
    super('ul', ['list-group', 'col-8', 'main__nav']);

    StartPageNavData.map((item) => this.element.append(new ListItem(item).element));
  }
}
