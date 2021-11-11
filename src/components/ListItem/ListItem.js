import { BaseComponent } from '../BaseComponent/BaseComponent';
import './ListItem.scss';

export class ListItem extends BaseComponent {
  constructor(itemInfo) {
    super(
      'li',
      ['list-group-item', 'list-group-item-action', 'list-group-item-warning', 'nav__item'],
      itemInfo.text,
    );
    this.element.setAttribute('data-value', `${itemInfo.attribute}`)
  }
}
