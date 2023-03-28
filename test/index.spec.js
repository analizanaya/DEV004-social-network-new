// importamos la funcion que vamos a testear
import { Welcome } from '../src/components/Welcome.js';
import { onNavigate } from '../src/main.js';
//mock
describe("Pruebas de login", () => {
  beforeEach(() => {
    authentication.loginWithEmailAndPassword = jest.fn();
    authentication.loginGoogl = jest.fn();
    routes.onNavigate = jest.fn(() => console.log("mock de onNavigate usado"));
  });
  it.only("Autenticación con correo electrónico y contraseña correcta, debería redireccionar a /wall", () => {
    //preparamos el mock
    authentication.signInWithEmailAndPassword.mockResolvedValueOnce({
      user: { email: "p@gmail.com" },
    });

    //Paso 1: Visualizar el formulario de login.
    const div = Welcome();

    //Paso 2: Completamos el formulario con un correo electrónico y contraseña correctos.
    div.querySelector("#username").value = "p@gmail.com";
    div.querySelector("#password").value = "123456";

    //Paso 3: Enviamos el formulario dando clic en el botón `Login`.
    div.querySelector("#section").dispatchEvent(new Event("submit"));

    //Paso 4: Verificamos visualmente que la aplicación redija a `/home`.
    return Promise.resolve().then(() =>
      expect(routes.onNavigate).toHaveBeenCalledWith("/wall")
    );
  });
});


describe('myFunction', () => {
  it('debería ser una función', () => {
    expect(window.location.pathname).toEqual('/wall');
  });
});
