import { initFirebase } from "../src/Firebase/firebase.js";
import { initRouter } from "../src/router.js";
import { ROUTES } from "../src/lib/routes.js";

// Initialize Firebase
initFirebase();

// Initialize Router
initRouter(ROUTES);