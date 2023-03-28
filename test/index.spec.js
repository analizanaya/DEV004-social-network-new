// importamos la funcion que vamos a testear
import { Welcome } from '../src/components/Welcome.js';
import * as authentication from '../src/Firebase/firebase.js';
import * as router from '../src/main.js';

// mock

describe('Pruebas de login', () => {
  beforeEach(() => {
    document.body.innerHTML = '<main id="root"></main>'
    authentication.loginWithEmailAndPassword = jest.fn();
    router.onNavigate = jest.fn(() => console.log('mock de onNavigate usado'));

  });
  it('Autenticación con correo electrónico y contraseña correcta, debería redireccionar a /wall', () => {
    const root = document.createElement('main');
    root.id = 'root';
    document.body.append(root);
    // preparamos el mock
    authentication.loginWithEmailAndPassword.mockResolvedValueOnce({
      user: { email: 'p@gmail.com' },
    });
    console.log(document.body.innerHTML = "<main id='root'></main>")
    // Paso 1: Visualizar el formulario de login.
    const divLogin = Welcome(router.onNavigate);

    // Paso 2: Completamos el formulario con un correo electrónico y contraseña correctos.
    divLogin.querySelector('#username').value = 'p@gmail.com';
    divLogin.querySelector('#password').value = '123456';

    // Paso 3: Enviamos el formulario dando clic en el botón `Login`.

    divLogin.querySelector('.buttonGetinto').dispatchEvent(new Event('click'));

    // Paso 4: Verificamos visualmente que la aplicación redija a `/home`.
   return Promise.resolve().then(() => expect(router.onNavigate).toHaveBeenCalledWith('/wall'));
  });
}); 
