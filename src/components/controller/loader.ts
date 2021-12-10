import {
    CallbackNews,
    CallbackSources,
    Endpoints,
    IDataArticles,
    IDataSources,
    Methods,
    OptionsType,
} from '../../types';

class Loader {
    private baseLink: string;
    private options: OptionsType;

    constructor(baseLink: string, options: OptionsType) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp(
        { endpoint, options = {} }: { endpoint: Endpoints; options?: OptionsType },
        callback: CallbackSources | CallbackNews = (): void => {
            console.error('No callback for GET response');
        }
    ) {
        this.load(Methods.GET, endpoint, callback, options);
    }

    private errorHandler = (res: Response) => {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    };

    private makeUrl(options: object, endpoint: Endpoints) {
        const urlOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    private load = (method: Methods, endpoint: Endpoints, callback: CallbackSources | CallbackNews, options = {}) => {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data: IDataArticles & IDataSources) => callback(data))
            .catch((err) => console.error(err));
    };
}

export default Loader;
