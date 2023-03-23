import { createUserWithEmailAndPassword } from "firebase/auth";
//import { async } from 'regenerator-runtime';
import { auth } from "../Firebase/firebase.js";

export const register = (onNavigate) => {
  const div = document.createElement("div");
  const logo = document.createElement("img");
  const fondo = document.createElement("img");
  const title = document.createElement("h2");
  const buttonRegister = document.createElement("button");
  const inputEmail = document.createElement("input");
  const inputPass = document.createElement("input");
  const inputCreate = document.createElement("input");

  inputEmail.placeholder = "e-mail";
  inputPass.placeholder = "password";
  inputCreate.placeholder = "Username";

  inputPass.type = "password";

  div.className = "section";
  buttonRegister.className = "buttonRegister";
  inputEmail.className = "E-mail";
  inputPass.className = "password";
  inputCreate.className = "username";
  fondo.id = "fondo";

  buttonRegister.textContent = "REGISTER";

  logo.src = "./imagenes/logo.png";
  logo.alt = "Logo";

  fondo.src = "./imagenes/fondo-cel.png";
  fondo.alt = "Fondo";

  buttonRegister.addEventListener("click", async (e) => {
    e.preventDefault();
    // const auth = getAuth(onNavigate);
    const username = inputCreate.value;
    const email = inputEmail.value;
    const password = inputPass.value;
    try {
      const userinfo = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      alert("correo valido");
      onNavigate("/wall");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (error.code === "auth/email-already-in-use") {
       
        //document.getElementById('password').innerHTML = "Todos los campos son obligatorios ";
      } else if (error.code === "auth/invalid-email") {
        alert("correo invalido");
        // document.getElementById('username').innerHTML = "aaaaaaaaa";
      }
    }
  });

  // onNavigate('/login');

  div.append(
    title,
    logo,
    fondo,
    inputCreate,
    inputEmail,
    inputPass,
    buttonRegister
  );

  return div;
};
