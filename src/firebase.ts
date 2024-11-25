import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { Auth } from 'firebase/auth';

import 'firebase/storage';

import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
  measurementId: import.meta.env.VITE_measurementId,
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth: Auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const firebaseStorage = getStorage(app);
