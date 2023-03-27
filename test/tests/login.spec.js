import * as routes from "../src/main.js";
import { Login } from '../src/components/firebase.js';

describe('Pruebas de login', () => {

  beforeEach(() => {
    authentication.signInWithGoogle = jest.fn();
    authentication.loginWithEmailAndPassword = jest.fn();
    routes.onNavigate = jest.fn(() => console.log('mock de onNavigate usado'));
  });  

  it('Autenticación con correo electrónico y contraseña correcta, debería redireccionar a '/', () => {
    //preparamos el mock
    authentication.loginWithEmailAndPassword.mockResolvedValueOnce({ user: { email: 'ana@gmail.com' } });

    //Paso 1: Visualizar el formulario de login.
    const divLogin = Login();

    //Paso 2: Completamos el formulario con un correo electrónico y contraseña correctos.
    loginDiv.querySelector('#username').value = 'ana@gmail.com';
    loginDiv.querySelector('#password').value = '123456';  
    
    //Paso 3: Enviamos el formulario dando clic en el botón `Login`.
    loginDiv.querySelector('#loginForm').dispatchEvent(new Event('submit'));

    //Paso 4: Verificamos visualmente que la aplicación redija a `/home`.
    return Promise.resolve().then(() => expect(routes.onNavigate).toHaveBeenCalledWith('/'));
  });
});