import { galleryImages } from '../../content/galleryContent';
import { BaseComponent } from '../BaseComponent/BaseComponent';
import { GalleryRoll } from '../GalleryRoll/GalleryRoll';
import './Gallery.sass';

export class Gallery extends BaseComponent {
  container: BaseComponent;
  header: BaseComponent;
  imagesContainer: BaseComponent;
  shade: BaseComponent;
  galleryRolls: GalleryRoll[];
  rollImages: string[]

  constructor(rollNumber: number) {
    super('section', ['gallery', 'dark-section']);
    this.container = new BaseComponent('div', ['gallery-container', 'container']);
    this.header = new BaseComponent('h2', ['section-title', 'section-title_dark', 'gallery__header']);
    this.header.element.innerText = 'Art Gallery';
    this.imagesContainer = new BaseComponent('div', ['gallery__images']);
    this.shade = new BaseComponent('div', ['gallery__shade']);
    this.galleryRolls = [];
    this.rollImages = [];
    for (let i = 0, y = 0; i < galleryImages.length; i++) {
      this.rollImages.push(galleryImages[i]);
      if (this.rollImages.length % (galleryImages.length / rollNumber) === 0) {
        this.galleryRolls.push(new GalleryRoll(this.rollImages, [`gallery__roll_${++y}`]));
         this.rollImages = [];
      }
    }

    this.galleryRolls.map((roll) => {
      this.imagesContainer.element.append(roll.element);
    });

    this.imagesContainer.element.append(this.shade.element);
    this.container.element.append(this.header.element, this.imagesContainer.element);
    this.element.append(this.container.element);
  }
}