import {getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup,
    signInWithEmailAndPassword} from 'firebase/auth';

const provider = new GoogleAuthProvider();

export const logincreateUserWithEmailAndPassword = (email, password) => createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
  });

export const loginWithEmailAndPassword = (password, email) => signInWithEmailAndPassword(getAuth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
  });
export const loginGoogle = () => signInWithPopup(getAuth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    //const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
