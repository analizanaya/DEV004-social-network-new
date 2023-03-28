// Import the functions you need from the SDKs you need
import { signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDGcIilwnSYWgKmBHUYlbTMNw8tcVNdSZo',
  authDomain: 'social-network-e1b86.firebaseapp.com',
  projectId: 'social-network-e1b86',
  storageBucket: 'social-network-e1b86.appspot.com',
  messagingSenderId: '413132530610',
  appId: '1:413132530610:web:b552df6dff190969123aab',
  measurementId: 'G-XRY864RG09',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
const provider = new GoogleAuthProvider();
export const loginWithEmailAndPassword = (auth,email,password) =>{
  return signInWithEmailAndPassword(auth,email,password);
}
export const loginGoogle = () =>{
  
return signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}