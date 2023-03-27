import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/firebase.js';

export const Welcome = (onNavigate) => {
  const div = document.createElement('div');
  const logo = document.createElement('img');
  const fondo = document.createElement('img');
  const title = document.createElement('h2');
  const buttonGetinto = document.createElement('button');
  const line = document.createElement("img");
  const buttongoggle = document.createElement("img");
  const buttonCreate = document.createElement('button');
  const inputPassword = document.createElement('input');
  const inputUsername = document.createElement('input');
  //console.log(button);
  // inputUsername.className.type = "username", "e-mail" ;
  // inputUsername.pattern = "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$";
  inputUsername.type = 'email';
  inputPassword.type = 'password';

  inputUsername.placeholder = 'e-mail';
  inputPassword.placeholder = 'password';

  fondo.id = 'fondo';
  title.className = 'title';
  div.className = 'section';
  inputPassword.id = 'password';
  inputUsername.id = 'username';
  buttonGetinto.className = 'buttonGetinto';
  buttonCreate.className = 'buttonCreate';
  buttongoggle.className = "goggle";
  line.className = "line";

  buttonGetinto.textContent = 'LOGIN';
  buttonCreate.textContent = 'CREATE ACCOUNT';

  logo.src = "./imagenes/logo.png";
  logo.alt = 'Logo';

  fondo.src = './imagenes/fondo-cel.png';
  fondo.alt = 'Fondo';

  line.src = "./imagenes/rayita2-05.png";
  line.alt = 'line';

  buttongoggle.src = "./imagenes/goggle.png";
  buttongoggle.alt = 'goggle';

  buttonGetinto.addEventListener('click', async (e) => {
    e.preventDefault();
    //const auth = getAuth(onNavigate);
    const email = inputUsername.value;
    const password = inputPassword.value;
    
    try { const userCredenciales =  await signInWithEmailAndPassword(auth, email, password)
      alert("bienvenido")
        onNavigate('/wall');
        // ...
      } catch(error){
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage); 
        
        }
      });
    // onNavigate('/login');
  buttonCreate.addEventListener('click', () => {
    onNavigate('/register');
  });
  buttongoggle.addEventListener('click', () => {
    onNavigate('/wall');
  });

  div.append(
    title,
    logo,
    fondo,
    inputUsername,
    inputPassword,
    buttonGetinto,
    line,
    goggle,
    buttonCreate,
  );

  return div;
};