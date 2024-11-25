import { FieldValue } from 'firebase/firestore';

// LOCAL
import { FIREBASE_COLLECTIONS_ENUM } from './const';

/**
 * Create a new item in a specified Firestore collection
 */
export interface CreateNewItemInACollectionPropsInterface {
  newItem: unknown;
  collectionName: FIREBASE_COLLECTIONS_ENUM;
  onSuccess: (documentId: string) => void;
  onError: (error: unknown) => void;
}

/**
 * Create or edit a new property in an existing item in a Firestore collection
 */
export interface CreateOrEditNewPropertyInAnItemInACollectionPropsInterface {
  newProperty: FieldValue | Partial<unknown>;
  collectionName: FIREBASE_COLLECTIONS_ENUM;
  itemId: string;
  propertyName: string;
  onSuccess: () => void;
  onError: (error: unknown) => void;
}

/**
 * Delete an item from a Firestore collection
 */
export interface DeleteOneItemFromAColecctionPropsInterface {
  collectionName: FIREBASE_COLLECTIONS_ENUM;
  itemId: string;
  onSuccess: () => void;
  onError: (error: unknown) => void;
}

/**
 * Delete a specific property from an item in a Firestore collection
 */
export interface DeleteOnePropertyFromAnItemInACollectionPropsInterface {
  collectionName: FIREBASE_COLLECTIONS_ENUM;
  itemId: string;
  propertyName: string;
  onSuccess: () => void;
  onError: (error: unknown) => void;
}

/**
 * Get a specific Item from an item in a Firestore collection
 */
export interface GetOneItemFromACollectionPropsInterface {
  collectionName: FIREBASE_COLLECTIONS_ENUM;
  itemId: string;
  propertyName: string;
  onSuccess: <T>(data: T) => void;
  onError: (error: unknown) => void;
}

/**
 * Interface for getting all items from a Firestore collection
 */
export interface GetAllItemsFromACollectionPropsInterface {
  collectionName: FIREBASE_COLLECTIONS_ENUM;
  onSuccess: (data: any[]) => void;
  onError: (error: unknown) => void;
}

/**
 * Interface for getting filtered items from a Firestore collection
 */
export interface GetItemsWithFilterFromFirebaseCollectionPropsInterface {
  collectionName: FIREBASE_COLLECTIONS_ENUM;
  filterField: string;
  filterValue: string;
  onSuccess: (data: any) => void;
  onError: (error: unknown) => void;
}

/**
 * Create or edit multiple properties in an existing item in a Firestore collection
 */
export interface CreateOrEditMultiplePropertiesInItemPropsInterface {
  properties: { [key: string]: FieldValue | Partial<unknown> | undefined };
  collectionName: FIREBASE_COLLECTIONS_ENUM;
  itemId: string;
  onSuccess: () => void;
  onError: (error: unknown) => void;
}
