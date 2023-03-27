import { Welcome } from './components/welcome.js';
import { wall } from './components/wall.js';
import { register } from './components/Register.js';
import { app, db } from './Firebase/firebase.js';

const root = document.getElementById('root');

const routes = {
  '/': Welcome,
  '/wall': wall,
  '/register': register,
};
export const onNavigate = (pathname) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  root.removeChild(root.firstChild);
  root.appendChild(routes[pathname](onNavigate));
};

const component = routes[window.location.pathname];

window.onpopstate = () => {
  root.removeChild(root.firstChild);
  root.append(component(onNavigate));
};

root.appendChild(component(onNavigate));
