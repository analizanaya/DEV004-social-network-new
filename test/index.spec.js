// importamos la funcion que vamos a testear
  import * as router from "../src/router";

  import { Welcome } from '../src/components/Welcome.js';

  describe('Pruebas de login', () => {

    beforeEach(() => {
      //authentication.signInWithGoogle = jest.fn();
      signInWithEmailAndPassword = jest.fn();
      router.onNavigate = jest.fn(() => console.log('mock de onNavigate usado'));
    });  

    it('Autenticación con correo electrónico y contraseña correcta, debería redireccionar a /wall', () => {
      //preparamos el mock
      signInWithEmailAndPassword.mockResolvedValueOnce({ user: { email: 'p@gmail.com' } });

      //Paso 1: Visualizar el formulario de login.
      const divLogin = Welcome();

      //Paso 2: Completamos el formulario con un correo electrónico y contraseña correctos.
      divLogin.querySelector('#username').value = 'p@gmail.com';
      divLogin.querySelector('#password').value = '123456';  
      
      //Paso 3: Enviamos el formulario dando clic en el botón `Login`.
      divLogin.querySelector('.buttonGetinto').dispatchEvent(new Event('click'));

      //Paso 4: Verificamos visualmente que la aplicación redija a `/home`.
      return Promise.resolve().then(() => expect(router.onNavigate).toHaveBeenCalledWith('/wall'));
    });
  });