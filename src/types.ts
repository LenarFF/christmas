export interface IArticle {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: { id: string; name: string };
    title: string;
    url: string;
    urlToImage: string;
}

export interface IDataArticles {
    articles: IArticle[];
    status: string;
    totalResults: number;
}

export interface ISources {
    category: string;
    country: string;
    description: string;
    id: string;
    language: string;
    name: string;
    url: string;
}

export interface IDataSources {
    sources: ISources[];
    status: string;
}

export enum Methods {
    GET = 'GET',
    POST = 'POST',
    DELETE = 'DELETE',
    Patch = 'PATCH',
}

export enum Endpoints {
    everything = 'everything',
    sources = 'sources',
}

export type OptionsType = {
    [prop: string]: string;
};

export type CallbackSources = (data: IDataSources) => void;
export type CallbackNews = (data: IDataArticles) => void;
