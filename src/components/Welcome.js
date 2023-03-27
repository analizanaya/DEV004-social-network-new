
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, loginGoogle } from "../Firebase/firebase.js";
import {loginWithEmailAndPassword} from "../Firebase/firebase.js"
export const Welcome = (onNavigate) => {
  const div = document.createElement("div");
  const logo = document.createElement("img");
  const fondo = document.createElement("img");
  const title = document.createElement("h2");
  const buttonGetinto = document.createElement("button");
  const line = document.createElement("img");
  const buttonGoogle = document.createElement("img","input");
  const buttonCreate = document.createElement("button");
  const inputPassword = document.createElement("input");
  const inputUsername = document.createElement("input");
  //console.log(buttonGoogle);
  // inputUsername.className.type = "username", "e-mail" ;
  // inputUsername.pattern = "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$";
  inputUsername.type = "email";
  inputPassword.type = "password";

  inputUsername.placeholder = "e-mail";
  inputPassword.placeholder = "password";

  fondo.id = "fondo";
  title.className = "title";
  div.className = "section";
  inputPassword.id = "password";
  inputUsername.id = "username";
  buttonGetinto.className = "buttonGetinto";
  buttonCreate.className = "buttonCreate";
  buttonGoogle.className = "buttonGoogle";
  line.className = "line";

  buttonGetinto.textContent = "LOGIN";
  buttonCreate.textContent = "CREATE ACCOUNT";

  logo.src = "./imagenes/logo.png";
  logo.alt = "Logo";

  fondo.src = "./imagenes/fondo-cel.png";
  fondo.alt = "Fondo";

  line.src = "./imagenes/rayita2-05.png";
  line.alt = "line";

  buttonGoogle.src = "./imagenes/buttonGoogle.png";
  buttonGoogle.alt = "buttonGoogle";

  buttonGetinto.addEventListener("click",  () => {

    //const auth = getAuth(onNavigate);
    const email = inputUsername.value;
    const password = inputPassword.value;
    signInWithEmailAndPassword().then(()=>{
      onNavigate("/wall");
    });
    
  });
  // onNavigate('/login');
  buttonCreate.addEventListener("click", () => {
    onNavigate("/register");
  });

 buttonGoogle.addEventListener("click", () => {
    loginGoogle().then(()=>{
      onNavigate("/wall");
    });
   
  }); 

  div.append(
    title,
    logo,
    fondo,
    inputUsername,
    inputPassword,
    buttonGetinto,
    line,
    buttonGoogle,
    buttonCreate
  );

  return div;
};
