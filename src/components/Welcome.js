import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/firebase.js';

export const Welcome = (onNavigate) => {
  const div = document.createElement('div');
  const logo = document.createElement('img');
  const fondo = document.createElement('img');
  const title = document.createElement('h2');
  const buttonGetinto = document.createElement('button');
  const line = document.createElement("img");
<<<<<<< HEAD
  const buttongoggle = document.createElement("img");
  const buttonCreate = document.createElement('button');
  const inputPassword = document.createElement('input');
  const inputUsername = document.createElement('input');
  //console.log(button);
=======
  const buttonGoogle = document.createElement('img','input');
  const buttonCreate = document.createElement('button');
  const inputPassword = document.createElement('input');
  const inputUsername = document.createElement('input');
  //console.log(buttonGoogle);
>>>>>>> 62b39cb85710e1858a0737a01d23fe6ff411057a
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
<<<<<<< HEAD
  buttongoggle.className = "goggle";
=======
  buttonGoogle.className = "buttonGoogle";
>>>>>>> 62b39cb85710e1858a0737a01d23fe6ff411057a
  line.className = "line";

  buttonGetinto.textContent = 'LOGIN';
  buttonCreate.textContent = 'CREATE ACCOUNT';

  logo.src = "./imagenes/logo.png";
  logo.alt = 'Logo';

  fondo.src = './imagenes/fondo-cel.png';
  fondo.alt = 'Fondo';

  line.src = "./imagenes/rayita2-05.png";
  line.alt = 'line';

<<<<<<< HEAD
  buttongoggle.src = "./imagenes/goggle.png";
  buttongoggle.alt = 'goggle';
=======
  buttonGoogle.src = "./imagenes/buttonGoogle.png";
  buttonGoogle.alt = 'buttonGoogle';
>>>>>>> 62b39cb85710e1858a0737a01d23fe6ff411057a

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

  buttonGoogle.addEventListener('click', () => {
    onNavigate('/wall');
  });
console.log(buttonGoogle)

  div.append(
    title,
    logo,
    fondo,
    inputUsername,
    inputPassword,
    buttonGetinto,
    line,
<<<<<<< HEAD
    goggle,
=======
    buttonGoogle,
>>>>>>> 62b39cb85710e1858a0737a01d23fe6ff411057a
    buttonCreate,
  );

  return div;
};