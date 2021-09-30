import { BaseComponent } from '../BaseComponent/BaseComponent';
import './VideoWrap.sass';

export class VideoWrap extends BaseComponent {
  controls: BaseComponent;
  play: BaseComponent;
  volume: BaseComponent;
  fullScreen: BaseComponent;
  progressBar: HTMLInputElement;
  volumeBar: HTMLInputElement;

  constructor(video: HTMLImageElement) {
    super('div', ['video__video-wrap']);
    this.element.append(video);
    this.controls = new BaseComponent('div', ['video__controls']);

    this.play = new BaseComponent('div', ['video__play','video__control']);
    this.volume = new BaseComponent('div', ['video__volume','video__control']);
    this.fullScreen = new BaseComponent('div', ['video__fullscreen','video__control']);
    this.progressBar = document.createElement('input');
    this.progressBar.type = 'range';
    this.progressBar.classList.add('video__bar');
    this.volumeBar = document.createElement('input');
    this.volumeBar.type = 'range';
    this.volumeBar.classList.add('video__bar');

    this.controls.element.append(
      this.play.element,
      this.progressBar,
      this.volume.element,
      this.volumeBar,
      this.fullScreen.element,
    );

    this.element.append(this.controls.element)
  }
}
