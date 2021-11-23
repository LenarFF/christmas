import { CategoriesPage } from './pages/CategoriesPage/CategoriesPage';
import { StartPage } from './pages/StartPage/StartPage';
import { Results } from './pages/Results/Results';
import { SettingsPage } from './pages/SettingsPage/SettingsPage';
import { BaseComponent } from './components/BaseComponent/BaseComponent';
import { ScorePage } from './pages/ScorePage/ScorePage';
import { state } from './state';

export class Router {
  addListener(pageWrap) {
    if (!pageWrap) throw Error('App root element not found');
    if (window.location) {
      window.addEventListener('hashchange', () => {
        this.locationResolver(window.location.hash, pageWrap);
      });
    }
  }

  locationResolver = (locationHash, parent) => {
    const pageContainer = parent.firstChild;
    const newPageContainer = this.createNewContainer(parent);
    const startPage = new StartPage();
    const categoriesPage = new CategoriesPage();
    const results = new Results();
    const settingsPage = new SettingsPage();
    const scorePage = new ScorePage(state.currentCategory || 0);
    switch (locationHash) {
      case '#/start-page/':
        newPageContainer.element.append(startPage.element);
        break;
      case '#/categories/':
        newPageContainer.element.append(categoriesPage.element);
        break;
      case '#/results/':
        newPageContainer.element.append(results.element);
        break;
      case '#/settings/':
        newPageContainer.element.append(settingsPage.element);
        break;
      case '#/score/':
        newPageContainer.element.append(scorePage.element);
        break;
      default:
        newPageContainer.element.append(startPage.element);
    }
    this.scrollPage(parent);
    this.removeOldPage(parent, pageContainer);
  };

  createNewContainer = (parent) => {
    const newPageContainer = new BaseComponent('div', ['page-container']);
    parent.append(newPageContainer.element);
    return newPageContainer;
  };

  scrollPage = (pageWrap) => {
    pageWrap.scrollTo({
      top: 2000,
      behavior: 'smooth',
    });
  };

  removeOldPage = (parent, oldPage) => {
    setTimeout(() => {
      parent.removeChild(oldPage);
    }, 500);
  };
}
