import 'bootstrap/dist/css/bootstrap.min.css';
import { App } from './App/App';

const root = document.getElementById('root');

const app = new App();
root.append(app.element);
