import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';
import { App } from './App/App';

const root = document.getElementById('root');

const app = new App();
root.append(app.element);
