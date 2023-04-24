import * as router from "../src/router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Welcome } from '../src/components/Welcome.js';
import {loginWithEmailAndPassword} from '../src/Firebase/authentication.js';

//const mockSignInWithEmailAndPassword =jest.fn();
jest.mock('firebase/auth', ()=>({
    getAuth: jest.fn(),
    signInWithEmailAndPassword:jest.fn(),
    GoogleAuthProvider:jest.fn(),
}))

jest.mock('../src/Firebase/authentication.js', ()=>({
  loginWithEmailAndPassword:jest.fn(() => Promise.resolve())
}))

  describe('Pruebas de login', () => {

    it('Autenticación con correo electrónico y contraseña correcta, debería redireccionar a /wall', (done) => {
      //mocks

      //loginWithEmailAndPassword = jest.fn(() => Promise.resolve())
      router.onNavigate = jest.fn((route) => console.log(route,'mock de onNavigate usado'));
      //preparamos el mock
      //signInWithEmailAndPassword.mockResolvedValueOnce({ user: { email: 'd@gmail.com' } })

      const divLogin = Welcome();

      divLogin.querySelector('#username').value = 'd@gmail.com';
      divLogin.querySelector('#password').value = '123456';  
      divLogin.querySelector('.buttonGetinto').click();

      setTimeout(() => {
        expect(router.onNavigate).toHaveBeenCalledWith('/wall');
        done();
      }, 0);
      
    });
  });
