const LOCAL_ROUTES = {};

export const onNavigate = (pathname, updateHistory = true) => {
  const path = typeof LOCAL_ROUTES[pathname] !== "fuction" ? pathname : "/";
  if (updateHistory) {
    window.history.pushState({}, path, window.location.origin + pathname);
  }
  const rootSection = document.getElementById("root");
  rootSection.innerHTML = "";
  rootSection.append(LOCAL_ROUTES[pathname]());
};
export const initRouter = (routes) => {
  // Add routes to LOCAL_ROUTES
  Object.keys(routes).reduce((currentRoutes, pathname) => {
    currentRoutes[pathname] = routes[pathname];
    return currentRoutes;
  }, LOCAL_ROUTES);

  // Add event listener to handle back/forward button
  window.addEventListener("popstate", (e) => {
    onNavigate(window.location.pathname, false);
  });

  // Add event listener to handle page load
  window.addEventListener("load", () => {
    onNavigate(window.location.pathname, false);
  });
};

/* const component = routes[window.location.pathname];

window.onpopstate = () => {
  root.removeChild(root.firstChild);
  root.append(component(onNavigate));
};

root.appendChild(component(onNavigate)); */
