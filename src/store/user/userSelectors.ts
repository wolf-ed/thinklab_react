import { store } from '..';

export function getUserId() {
  const state = store.getState();
  return state.userReducer.user?.id;
}

export function getIsLeftDrawerOpen() {
  const state = store.getState();
  return state.userReducer.isLeftDrawerOpen;
}

export function getIsAuth() {
  const state = store.getState();
  return !!state.userReducer.token;
}

export function getToken() {
  const state = store.getState();
  return state.userReducer.token;
}

export const userSelectors = {
  getIsLeftDrawerOpen,
  getIsAuth,
  getToken,
};
