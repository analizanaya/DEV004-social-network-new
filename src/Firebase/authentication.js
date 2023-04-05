import {getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup,
    signInWithEmailAndPassword} from 'firebase/auth';
import { collection, addDoc } from "firebase/firestore";
import { db } from './firebase';

const provider = new GoogleAuthProvider();

export const logincreateUserWithEmailAndPassword = (email, password) => createUserWithEmailAndPassword(getAuth(), email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
  });

export const loginWithEmailAndPassword = (password, email) => signInWithEmailAndPassword(getAuth(), email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
  });
export const loginGoogle = () => signInWithPopup(getAuth(), provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    //console.log(user, token, credential);
    return result
  })

  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log(errorCode, errorMessage, email, credential);
  });


  export function post(inputShowModal) {
      const document = addDoc(collection(db, "Publicaciones"), {
        contenido: inputShowModal,
        //autor:currentUser,
      });
      return document
    }