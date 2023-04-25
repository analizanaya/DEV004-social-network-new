import { welcome } from '../components/welcome.js';
import { wall } from '../components/wall.js';
import { register } from '../components/Register.js';

export const ROUTES = {
    '/': welcome,
    '/wall': wall,
    '/register': register,
  };