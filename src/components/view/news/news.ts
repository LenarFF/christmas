import { IArticle, IDataArticles } from '../../../types';
import './news.css';

class News {
    draw(data: IArticle[]) {
        const news = data.length >= 10 ? data.filter((_item: any, idx: any) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp: any = document.querySelector('#newsItemTemp');

        news.forEach((item: any, idx: any) => {
            if (!newsItemTemp) return;
            const newsClone = newsItemTemp.content.cloneNode(true);

            if (idx % 2) newsClone.querySelector('.news__item').classList.add('alt');

            newsClone.querySelector('.news__meta-photo').style.backgroundImage = `url(${
                item.urlToImage || 'img/news_placeholder.jpg'
            })`;
            newsClone.querySelector('.news__meta-author').textContent = item.author || item.source.name;
            newsClone.querySelector('.news__meta-date').textContent = item.publishedAt
                .slice(0, 10)
                .split('-')
                .reverse()
                .join('-');

            newsClone.querySelector('.news__description-title').textContent = item.title;
            newsClone.querySelector('.news__description-source').textContent = item.source.name;
            newsClone.querySelector('.news__description-content').textContent = item.description;
            newsClone.querySelector('.news__read-more a').setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        (document.querySelector('.news') as HTMLElement).innerHTML = '';
        document.querySelector('.news')?.appendChild(fragment);
    }
}

export default News;
