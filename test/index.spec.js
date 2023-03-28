// importamos la funcion que vamos a testear
import { main } from "../src/components/Welcome.js";
import { logincreateUserWithEmailAndPassword } from "../src/Firebase/firebase.js";
//mock
describe("Pruebas de login", () => {
  beforeEach(() => {
    authentication.signInWithEmailAndPassword = jest.fn();
    authentication.signInWithPopup = jest.fn();
    router.onNavigate = jest.fn(() => console.log("mock de onNavigate usado"));
  });
  it("Autenticación con correo electrónico y contraseña correcta, debería redireccionar a /wall", () => {
    //preparamos el mock
    authentication.signInWithEmailAndPassword.mockResolvedValueOnce({
      user: { email: "p@gmail.com" },
    });

    //Paso 1: Visualizar el formulario de login.
    const divLogin = Welcome();

    //Paso 2: Completamos el formulario con un correo electrónico y contraseña correctos.
    divLogin.querySelector("#username").value = "p@gmail.com";
    divLogin.querySelector("#password").value = "123456";

    //Paso 3: Enviamos el formulario dando clic en el botón `Login`.
    div.querySelector("#section").dispatchEvent(new Event("click"));

    //Paso 4: Verificamos visualmente que la aplicación redija a `/home`.
    return Promise.resolve().then(() =>
      expect(router.onNavigate).toHaveBeenCalledWith("/wall")
    );
  });
});

describe("myFunction", () => {
  it("debería ser una función", () => {
    expect(window.location.pathname).toEqual("/wall");
  });
});