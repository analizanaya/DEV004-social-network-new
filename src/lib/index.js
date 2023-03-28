import { Welcome } from '../components/Welcome.js';
import { wall } from '../components/wall.js';
import { register } from '../components/Register.js';

export const routes = {
  '/': Welcome,
  '/wall': wall,
  '/register': register,
};