import { initFirebase } from './Firebase/firebase.js';
import { initRouter } from './router.js';
import { ROUTES } from './lib/routes.js';

// Initialize Firebase
initFirebase();

// Initialize Router
initRouter(ROUTES);
