import { videoContent } from '../../content/videoContent';
import { BaseComponent } from '../BaseComponent/BaseComponent';
import './VideoSection.sass';
import { VideoWrap } from './../VideoWrap/VideoWrap';

export class VideoSection extends BaseComponent {
  container: BaseComponent;
  header: BaseComponent;
  title: BaseComponent;
  text: BaseComponent;
  videosWrap: BaseComponent;
  videos: HTMLImageElement[];
  mainVideo: VideoWrap;
  additionalVideos: BaseComponent;
  constructor() {
    super('section', ['video']);

    this.container = new BaseComponent('div', ['video-container', 'container']);
    this.header = new BaseComponent('div', ['video__header']);
    this.title = new BaseComponent('h2', ['section-title']);
    this.title.element.innerText = 'Video journey';
    this.text = new BaseComponent('p', ['video__text']);
    this.text.element.innerText =
      "Enter and visit one of the most famous museums in the world and enjoy masterpieces such as Mona Lisa or Hammurabi's Code";

    this.videosWrap = new BaseComponent('div', ['video__videos-wrap']);
    this.videos = [];
    videoContent.map((video) => {
      const videoSample = document.createElement('img');
      videoSample.src = `./video/${video}`;

      this.videos.push(videoSample);
    });

    this.mainVideo = new VideoWrap(this.videos[0]);

    this.additionalVideos = new BaseComponent('div', ['video__additional']);
    this.additionalVideos.element.append(this.videos[1], this.videos[2], this.videos[3]);

    this.videosWrap.element.append(this.mainVideo.element, this.additionalVideos.element);
    this.header.element.append(this.title.element, this.text.element);
    this.container.element.append(this.header.element, this.videosWrap.element);
    this.element.append(this.container.element)
  }
}
