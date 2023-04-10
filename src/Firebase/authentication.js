import {getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup,
    signInWithEmailAndPassword , onAuthStateChanged} from 'firebase/auth';
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


  const user = auth.currentUser;
  if (user) {
    // Obtener la referencia al documento del usuario en Firestore
    const userDocRef = doc(db, "usuarios", user.uid);
  
    // Actualizar el campo "nombre" del documento con el nombre del usuario
    updateDoc(userDocRef, { nombre: user.displayName })
      .then(() => {
        console.log("Nombre actualizado exitosamente");
      })
      .catch((error) => {
        console.error("Error al actualizar el nombre:", error);
      });
  }

  export function post(inputShowModal) {
      const document = addDoc(collection(db, "Publicaciones"), {
        contenido: inputShowModal,
      // autor: 
      });
      return document
    }