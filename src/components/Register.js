import { getAuth, updateProfile } from 'firebase/auth';
import { logincreateUserWithEmailAndPassword } from '../Firebase/authentication';
import { onNavigate } from '../router';
import logoImage from '../imagenes/logo.png';
import fondoImage from '../imagenes/fondo-cel.png';

export const register = () => {
  const section = document.createElement('section');
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

  section.id = 'registerStyle';
  fondo.id = 'fondo';
  emailError.id = 'email-error';
  logo.id = 'logoRegister';

  buttonRegister.className = 'buttonRegister';
  inputEmail.className = 'email';
  inputPass.className = 'password';
  inputCreate.className = 'username';

  buttonRegister.textContent = 'REGISTER';

  logo.src = logoImage;
  logo.alt = 'Logo';

  fondo.src = fondoImage;
  fondo.alt = 'Fondo';

  buttonRegister.addEventListener('click', () => {
    if (inputCreate.value === '' || inputPass.value === '') {
      swal('Ingresa tus datos');
    } else {
      logincreateUserWithEmailAndPassword(inputPass.value, inputCreate.value).then(
        () => {
          onNavigate('/wall');
        },
      );
    }
  });

  const auth = getAuth();
  buttonRegister.addEventListener('click', () => {
    logincreateUserWithEmailAndPassword(inputEmail.value, inputPass.value)
      .then(() => updateProfile(auth.currentUser, {
        displayName: inputCreate.value,
      }))
      .then(
        () => {
          onNavigate('/wall');
        },
        // Aquí debería ir catch
      );

    inputEmail.after(emailError); // agregar el elemento después del input
    emailError.style.display = 'none'; // ocultar el mensaje por defecto

    /* const datosRegister = document.createElement('div');
    datosRegister.classList = 'datosRegister';

    datosRegister.append(
      inputCreate,
      inputEmail,
      inputPass,
      buttonRegister,
    ); */

  });


  section.append(
    title,
    logo,
    fondo,
    inputCreate,
    inputEmail,
    inputPass,
    buttonRegister,
  );

  return section

};
