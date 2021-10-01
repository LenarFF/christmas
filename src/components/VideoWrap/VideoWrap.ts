import { BaseComponent } from '../BaseComponent/BaseComponent';
import './VideoWrap.sass';

export class VideoWrap extends BaseComponent {
  controls: BaseComponent;
  play: BaseComponent;
  volume: BaseComponent;
  fullScreen: BaseComponent;
  progressBar: HTMLInputElement;
  volumeBar: HTMLInputElement;
  videoWrapper: BaseComponent;

  constructor(video: HTMLImageElement) {
    super('div', ['video__player']);

    this.videoWrapper = new BaseComponent('div', ['video__player__wrap']);
    this.videoWrapper.element.append(video);

    this.element.append(this.videoWrapper.element);
    this.controls = new BaseComponent('div', ['video__controls']);

    this.play = new BaseComponent('div', ['video__play', 'video__control']);
    this.volume = new BaseComponent('div', ['video__volume', 'video__control']);
    this.fullScreen = new BaseComponent('div', ['video__fullscreen', 'video__control']);
    this.progressBar = document.createElement('input');
    this.progressBar.type = 'range';
    this.progressBar.classList.add('video__bar', 'video__progress-bar');
    this.progressBar.addEventListener('input', (e) => this.changeBarColor(e));
    this.volumeBar = document.createElement('input');
    this.volumeBar.type = 'range';
    this.volumeBar.classList.add('video__bar', 'video__volume-bar');
    this.volumeBar.addEventListener('input', (e) => this.changeBarColor(e));

    this.controls.element.append(
      this.play.element,
      this.progressBar,
      this.volume.element,
      this.volumeBar,
      this.fullScreen.element,
    );

    this.element.append(this.controls.element);
  }

  changeBarColor = (e: Event) => {
    const input = e.target as HTMLInputElement;
    input.style.background = `linear-gradient(to right, #710707 0%, #710707 ${input.value}%, #fff ${input.value}%, white 100%)`;
  };
}
