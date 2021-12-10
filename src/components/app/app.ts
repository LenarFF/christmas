import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { IDataArticles, IDataSources } from '../../types';

class App {
    private controller: AppController;
    private view: AppView;
    private sources: HTMLElement | null;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
        this.sources = document.querySelector('.sources');
    }

    start() {
        if (this.sources) {
            this.sources.addEventListener('click', (e) =>
                this.controller.getNews(e, (data: IDataArticles) => this.view.drawNews(data))
            );
            this.controller.getSources((data: IDataSources) => this.view.drawSources(data));
        }
    }
}

export default App;
