import { BaseComponent } from '../BaseComponent/BaseComponent';
import './ListItem.scss';

export class ListItem extends BaseComponent {
  constructor(text) {
    super(
      'li',
      ['list-group-item', 'list-group-item-action', 'list-group-item-warning', 'nav__item'],
      text,
    );
  }
}
