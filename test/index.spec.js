import * as router from "../src/router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Welcome } from '../src/components/Welcome.js';

  describe('Pruebas de login', () => {

    it('Autenticación con correo electrónico y contraseña correcta, debería redireccionar a /wall', async () => {
      //mocks
      const mockSignInWithEmailAndPassword =jest.fn();
      jest.mock('firebase/auth', ()=>({
          getAut: jest.fn(),
          signInWithEmailAndPassword:mockSignInWithEmailAndPassword
       
      }))
      router.onNavigate = jest.fn(() => console.log('mock de onNavigate usado'));
      //preparamos el mock
      mockSignInWithEmailAndPassword.mockResolvedValueOnce({ user: { email: 'd@gmail.com' } });

      const divLogin = Welcome();

      divLogin.querySelector('#username').value = 'd@gmail.com';
      divLogin.querySelector('#password').value = '123456';  
      divLogin.querySelector('.buttonGetinto').dispatchEvent(new Event('click'));

      await Promise.resolve().then(() => expect(router.onNavigate).toHaveBeenCalledWith('/wall'));
    });
  });
