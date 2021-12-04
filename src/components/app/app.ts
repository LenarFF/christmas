import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { IDataArticles, IDataSources } from '../../types';

class App {
    controller: AppController;
    view: AppView;
    sources: HTMLElement | null;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
        this.sources = document.querySelector('.sources');
    }

    start() {
        if (this.sources) {
            this.sources.addEventListener('click', (e) =>
                this.controller.getNews(e, (data: IDataArticles) => {
                    this.view.drawNews(data);
                    console.log(data);
                })
            );
            this.controller.getSources((data: IDataSources) => this.view.drawSources(data));
        }
    }
}

export default App;
