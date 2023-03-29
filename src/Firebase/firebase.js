import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDGcIilwnSYWgKmBHUYlbTMNw8tcVNdSZo',
  authDomain: 'social-network-e1b86.firebaseapp.com',
  projectId: 'social-network-e1b86',
  storageBucket: 'social-network-e1b86.appspot.com',
  messagingSenderId: '413132530610',
  appId: '1:413132530610:web:b552df6dff190969123aab',
  measurementId: 'G-XRY864RG09',
};
export const initFirebase = () => {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Initialize Firebase Authentication and get a reference to the service
  const auth = getAuth(app);

  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);

  return {
    app,
    auth,
    db,

  };
};


