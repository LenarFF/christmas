import { IDataArticles, ISources } from '../../../types';
import './sources.css';

class Sources {
    draw(data: ISources[]) {
        console.log(data);
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        data.forEach((item: any) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;

            (sourceClone.querySelector('.source__item-name') as HTMLElement).textContent = item.name;
            sourceClone.querySelector('.source__item')?.setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        document.querySelector('.sources')?.append(fragment);
    }
}

export default Sources;
