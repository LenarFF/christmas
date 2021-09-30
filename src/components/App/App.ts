import { BaseComponent } from '../BaseComponent/BaseComponent';
import { ExploreSection } from '../ExploreSection/ExploreSection';
import { Header } from '../Header/Header';
import { Main } from '../Main/Main';
import { VideoSection } from '../VideoSection/VideoSection';
import { Visiting } from '../Visting/Visting';

export class App extends BaseComponent {
  header: Header;

  main: Main;

  visinting: Visiting;
  explore: ExploreSection;
  videoSection: VideoSection

  constructor() {
    super('div', ['app']);

    this.header = new Header();
    this.main = new Main();
    this.visinting = new Visiting();
    this.explore = new ExploreSection();
    this.videoSection = new VideoSection;

    this.element.append(
      this.header.element,
      this.main.element,
      this.visinting.element,
      this.explore.element,
      this.videoSection.element
    );
  }
}
