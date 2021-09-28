import { App } from './components/App/App';
import './style.sass';

const app = new App();

document.getElementById('root')?.append(app.element);
