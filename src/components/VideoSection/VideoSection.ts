import { videoContent } from '../../content/videoContent';
import { BaseComponent } from '../BaseComponent/BaseComponent';
import './VideoSection.sass';
import { VideoWrap } from '../VideoWrap/VideoWrap';

export class VideoSection extends BaseComponent {
  container: BaseComponent;

  header: BaseComponent;

  title: BaseComponent;

  text: BaseComponent;

  videosWrap: BaseComponent;

  videos: HTMLImageElement[];

  mainVideo: VideoWrap;

  additionalVideos: BaseComponent;

  videoSlider: BaseComponent;

  leftArrow: BaseComponent;

  rightArrow: BaseComponent;

  mainVideoIndex: number;

  constructor() {
    super('section', ['video']);

    this.container = new BaseComponent('div', ['video-container', 'container']);
    this.header = new BaseComponent('div', ['video__header']);
    this.title = new BaseComponent('h2', ['section-title']);
    this.title.element.innerText = 'Video journey';
    this.text = new BaseComponent('p', ['video__text']);
    this.text.element.innerText = "Enter and visit one of the most famous museums in the world and enjoy masterpieces such as Mona Lisa or Hammurabi's Code";

    this.videoSlider = new BaseComponent('div', ['video__slider']);
    this.leftArrow = new BaseComponent('div', ['video__left-arrow', 'video__arrows']);
    this.rightArrow = new BaseComponent('div', ['video__right-arrow', 'video__arrows']);
    this.videoSlider.element.append(this.leftArrow.element);
    this.videosWrap = new BaseComponent('div', ['video__videos-wrap']);
    this.videos = [];
    this.additionalVideos = new BaseComponent('div', ['video__additional']);
    videoContent.map((video) => {
      const videoSample = document.createElement('img');
      videoSample.src = `./video/${video}`;
      this.videos.push(videoSample);
      return null;
    });

    this.mainVideoIndex = 0;
    this.mainVideo = new VideoWrap(this.videos[this.mainVideoIndex]);

    this.videos.map((video, index) => {
      if (index !== this.mainVideoIndex) {
        const otherVideoWrap = new BaseComponent('div', ['video__other-wrap']);
        otherVideoWrap.element.append(video);
        this.additionalVideos.element.append(otherVideoWrap.element);
        const circle = new BaseComponent('div', ['video__circle']);
        this.videoSlider.element.append(circle.element);
      }
      return null;
    });
    this.videoSlider.element.append(this.rightArrow.element);
    this.videosWrap.element.append(
      this.mainVideo.element,
      this.additionalVideos.element,
      this.videoSlider.element,
    );
    this.header.element.append(this.title.element, this.text.element);
    this.container.element.append(this.header.element, this.videosWrap.element);
    this.element.append(this.container.element);
  }
}
