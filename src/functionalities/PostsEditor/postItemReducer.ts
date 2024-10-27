import { PostItemInterface } from './types';

export enum PostItemActionTypes {
  UpdateOneItem = 'updateOneItem',
  SetAllItems = 'setAllItems',
  AddItem = 'addItem',
  RemoveItem = 'removeItem',
}

export type PostItemAction =
  | {
      type: PostItemActionTypes.UpdateOneItem;
      id: string;
      propertyName: keyof PostItemInterface;
      value: any;
    }
  | {
      type: PostItemActionTypes.SetAllItems;
      payload: Record<string, PostItemInterface>;
    }
  | { type: PostItemActionTypes.AddItem; item: PostItemInterface }
  | { type: PostItemActionTypes.RemoveItem; id: string };

export function postItemReducer(
  state: Record<string, PostItemInterface>,
  action: PostItemAction
): Record<string, PostItemInterface> {
  switch (action.type) {
    case PostItemActionTypes.UpdateOneItem:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          [action.propertyName]: action.value,
        },
      };
    case PostItemActionTypes.SetAllItems:
      return action.payload;
    case PostItemActionTypes.AddItem:
      return { ...state, [action.item.id]: action.item };
    case PostItemActionTypes.RemoveItem:
      const newState = { ...state };
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
}
