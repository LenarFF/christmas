import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '9a8df433296640e393f8ec6d28eb2a98', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
