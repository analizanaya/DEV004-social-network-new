import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import {
  collection,
  addDoc,
  query,
  onSnapshot,
  doc,
  deleteDoc,
  updateDoc,
} from 'firebase/firestore';
import { db } from './firebase';

const provider = new GoogleAuthProvider();
export const logincreateUserWithEmailAndPassword = (email, password) => createUserWithEmailAndPassword(getAuth(), email, password)
  .then((userCredential) => {
    const { user } = userCredential;
    // eslint-disable-next-line no-console
    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // eslint-disable-next-line no-console
    console.log(errorCode, errorMessage);
  });

export const loginWithEmailAndPassword = (password, email) => signInWithEmailAndPassword(getAuth(), email, password)
  .then((userCredential) => {
    const { user } = userCredential;
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
    const { user } = result;
    console.log(user, token, credential);
    return result;
  })

  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const { email } = error.customData;
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log(errorCode, errorMessage, email, credential);
  });

export function post(inputShowModal) {
  const user = getAuth().currentUser;
  if (user) {
    const { email } = user;
    const autor = user.displayName;
    const id = user.uid;
    const document = addDoc(collection(db, 'Publicaciones'), {
      contenido: inputShowModal,
      autor,
      email,
      id,
    });
    return document;
  }
}
export function getPost(callBack) {
  const consulta = query(collection(db, 'Publicaciones'));
  onSnapshot(consulta, callBack);
}
export const deletePosta = (id) => deleteDoc(doc(db, 'Publicaciones', id));

export async function editPost(postId, contenido) {
  const postRef = doc(db, 'Publicaciones', postId);
  await updateDoc(postRef, {
    contenido,
  });
}
