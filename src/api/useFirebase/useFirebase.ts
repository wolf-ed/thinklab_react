import {
  getFirestore,
  collection,
  doc,
  setDoc,
  updateDoc,
  deleteDoc,
  deleteField,
  getDoc,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
import {
  CreateNewItemInACollectionPropsInterface,
  CreateOrEditMultiplePropertiesInItemPropsInterface,
  CreateOrEditNewPropertyInAnItemInACollectionPropsInterface,
  DeleteOneItemFromAColecctionPropsInterface,
  DeleteOnePropertyFromAnItemInACollectionPropsInterface,
  GetAllItemsFromACollectionPropsInterface,
  GetItemsWithFilterFromFirebaseCollectionPropsInterface,
  GetOneItemFromACollectionPropsInterface,
} from './types';

import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { Auth } from 'firebase/auth';

import 'firebase/storage';

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

export const useFirebase = () => {
  const firestore = getFirestore();

  const createNewItemInACollection = async ({
    newItem,
    collectionName,
    onSuccess,
    onError,
  }: CreateNewItemInACollectionPropsInterface) => {
    try {
      const collectionRef = collection(firestore, collectionName);
      const docRef = doc(collectionRef);
      await setDoc(docRef, newItem);
      onSuccess(docRef.id);
    } catch (error) {
      onError(error);
    }
  };

  const createOrEditNewPropertyInAnItemInACollection = async ({
    newProperty,
    collectionName,
    itemId,
    propertyName,
    onSuccess,
    onError,
  }: CreateOrEditNewPropertyInAnItemInACollectionPropsInterface) => {
    try {
      const docRef = doc(firestore, collectionName, itemId);
      await updateDoc(docRef, { [propertyName]: newProperty });
      onSuccess();
    } catch (error) {
      onError(error);
    }
  };

  const createOrEditMultiplePropertiesInItem = async ({
    properties,
    collectionName,
    itemId,
    onSuccess,
    onError,
  }: CreateOrEditMultiplePropertiesInItemPropsInterface) => {
    try {
      const docRef = doc(firestore, collectionName, itemId);
      await updateDoc(docRef, properties);
      onSuccess();
    } catch (error) {
      onError(error);
    }
  };

  const deleteOneItemFromAColecction = async ({
    collectionName,
    itemId,
    onSuccess,
    onError,
  }: DeleteOneItemFromAColecctionPropsInterface) => {
    try {
      const docRef = doc(firestore, collectionName, itemId);
      await deleteDoc(docRef);
      onSuccess();
    } catch (error) {
      onError(error);
    }
  };

  const deleteOnePropertyFromAnItemInACollection = async ({
    collectionName,
    itemId,
    propertyName,
    onSuccess,
    onError,
  }: DeleteOnePropertyFromAnItemInACollectionPropsInterface) => {
    try {
      const docRef = doc(firestore, collectionName, itemId);
      await updateDoc(docRef, { [propertyName]: deleteField() });
      onSuccess();
    } catch (error) {
      onError(error);
    }
  };

  const getOneItemFromACollectionCollection = async ({
    collectionName,
    itemId,
    propertyName,
    onSuccess,
    onError,
  }: GetOneItemFromACollectionPropsInterface) => {
    try {
      const docRef = doc(firestore, collectionName, itemId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();

        if (propertyName) {
          onSuccess(data);
        } else {
          onSuccess(data);
        }
      } else {
        onError(new Error('No document found.'));
      }
    } catch (error) {
      onError(error);
    }
  };

  const getAllItemsFromACollection = async ({
    collectionName,
    onSuccess,
    onError,
  }: GetAllItemsFromACollectionPropsInterface) => {
    try {
      const collectionRef = collection(firestore, collectionName);
      const querySnapshot = await getDocs(collectionRef);

      const allItems = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      onSuccess(allItems);
    } catch (error) {
      onError(error);
    }
  };

  const getItemsWithFilterFromFirebaseCollection = async ({
    collectionName,
    filterField,
    filterValue,
    onSuccess,
    onError,
  }: GetItemsWithFilterFromFirebaseCollectionPropsInterface) => {
    try {
      const collectionRef = collection(firestore, collectionName);
      const q = query(collectionRef, where(filterField, '==', filterValue));
      const querySnapshot = await getDocs(q);

      const filteredItems = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      onSuccess(filteredItems);
    } catch (error) {
      onError(error);
    }
  };

  return {
    createNewItemInACollection,
    createOrEditNewPropertyInAnItemInACollection,
    createOrEditMultiplePropertiesInItem,
    deleteOneItemFromAColecction,
    deleteOnePropertyFromAnItemInACollection,
    getOneItemFromACollectionCollection,
    getAllItemsFromACollection,
    getItemsWithFilterFromFirebaseCollection,
  };
};
