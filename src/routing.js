import { CategoriesPage } from './pages/CategoriesPage/CategoriesPage';
import { StartPage } from './pages/StartPage/StartPage';
import { Results } from './pages/Results/Results';
import { SettingsPage } from './pages/SettingsPage/SettingsPage';

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
    const settingsPage = new SettingsPage();
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
      case '#/settings/':
        pageWrap.append(settingsPage.element);
        break;
      default:
        pageWrap.append(startPage.element);
    }
  };
}
