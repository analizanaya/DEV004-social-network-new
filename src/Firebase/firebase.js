// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
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
