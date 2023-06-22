import { loginGoogle } from './Firebase/authentication';
import { ROUTES } from './lib/routes';

export const onNavigate = (pathname, updateHistory = true) => {
  const path = typeof ROUTES[pathname] !== 'function' ? pathname : '/';

  // Update the history
  if (updateHistory) {
    window.history.pushState({}, path, window.location.origin + pathname);
  }

  // Clear the root section and render the new component
  const rootSection = document.getElementById('root');
  rootSection.innerHTML = '';
  console.log(ROUTES);
  console.log(pathname);
  rootSection.append(ROUTES[pathname]());
};

// Initialize the router with the routes
export const initRouter = (routes) => {
  // Add routes to ROUTES
  Object.keys(routes).reduce((currentRoutes, pathname) => {
    currentRoutes[pathname] = routes[pathname];
    return currentRoutes;
  }, ROUTES);

  window.addEventListener('popstate', () => {
    onNavigate(window.location.pathname, false);
  });

  // Add event listener to handle page load
  window.addEventListener('load', () => {
    onNavigate(window.location.pathname, false);
  });
};
