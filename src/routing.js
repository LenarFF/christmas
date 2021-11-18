import { CategoriesPage } from './pages/CategoriesPage/CategoriesPage';
import { StartPage } from './pages/StartPage/StartPage';
import { Results } from './pages/Results/Results';

export class Router {
  addListener(pageWrap) {
    if (!pageWrap) throw Error('App root element not found');
    if (window.location) {
      window.addEventListener('hashchange', () => {
        this.locationResolver(window.location.hash, pageWrap);
      });
    }
  }

  locationResolver = (locationHash, pageWrap) => {
    pageWrap.innerHTML = '';
    const startPage = new StartPage();
    const categoriesPage = new CategoriesPage();
    const results = new Results();
    switch (locationHash) {
      case '#/start-page/':
        pageWrap.append(startPage.element);
        break;
      case '#/categories/':
        pageWrap.append(categoriesPage.element);
        break;
      case '#/results/':
        pageWrap.append(results.element);
        break;
      default:
        pageWrap.append(startPage.element);
    }
  };
}
