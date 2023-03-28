import { logincreateUserWithEmailAndPassword, auth } from '../Firebase/firebase.js';

export const register = (onNavigate) => {
  const div = document.createElement('div');
  const logo = document.createElement('img');
  const fondo = document.createElement('img');
  const title = document.createElement('h2');
  const buttonRegister = document.createElement('button');
  const inputEmail = document.createElement('input');
  const emailError = document.createElement('span'); // agregado
  const inputPass = document.createElement('input');
  const inputCreate = document.createElement('input');

  inputEmail.placeholder = 'e-mail';
  inputPass.placeholder = 'password';
  inputCreate.placeholder = 'Username';

  inputPass.type = 'password';

  div.id = 'section';
  buttonRegister.className = 'buttonRegister';
  inputEmail.className = 'E-mail';
  inputPass.className = 'password';
  inputCreate.className = 'username';
  fondo.id = 'fondo';
  emailError.id = 'email-error'; // agregado

  buttonRegister.textContent = 'REGISTER';

  logo.src = './imagenes/logo.png';
  logo.alt = 'Logo';

  fondo.src = './imagenes/fondo-cel.png';
  fondo.alt = 'Fondo';

  buttonRegister.addEventListener('click', () => {
    logincreateUserWithEmailAndPassword(inputEmail.value, inputPass.value).then(
      () => {
        onNavigate('/wall');
      },
    );

    inputEmail.after(emailError); // agregar el elemento después del input
    emailError.style.display = 'none'; // ocultar el mensaje por defecto
  });

  div.append(
    title,
    logo,
    fondo,
    inputCreate,
    inputEmail,
    inputPass,
    buttonRegister,
  );

  return div;
};
