import './GalleryRoll.sass';
import { BaseComponent } from '../BaseComponent/BaseComponent';

export class GalleryRoll extends BaseComponent {
  constructor(imagesSrc: string[], classes: string[] = []) {
    super('div', ['gallery__roll', ...classes]);

    imagesSrc.map((imageSrc) => {
      const imageWrap = new BaseComponent('div', ['gallery__image-wrap' ]);
      const image = document.createElement('img');
      image.src = `./img/galery/${imageSrc}`;
      image.classList.add('gallery__image');
      imageWrap.element.append(image);
      this.element.append(imageWrap.element);
    });
  }
}
