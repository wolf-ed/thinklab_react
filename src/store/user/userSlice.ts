import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserReducerInterface, User } from './types';

const userReducerInitialState: UserReducerInterface = {
  user: null,
  token: null,
  isUserLoggedIn: false,
  isLeftDrawerOpen: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState: userReducerInitialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
    },
    setIsUserLoggedIn: (
      state,
      action: PayloadAction<{ isLoggedIn: boolean; token: string }>
    ) => {
      state.isUserLoggedIn = action.payload.isLoggedIn;
      state.token = action.payload.token;
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setUserAuth: (
      state,
      action: PayloadAction<{ isLoggedIn: boolean; token: string }>
    ) => {
      state.isUserLoggedIn = action.payload.isLoggedIn;
      state.token = action.payload.token;
    },
    setUserLogOut: (state) => {
      state.isUserLoggedIn = false;
      state.token = null;
    },
    setIsLetDrawerOpen: (state) => {
      state.isLeftDrawerOpen = !state.isLeftDrawerOpen;
    },
  },
});

export const {
  setUser,
  setIsUserLoggedIn,
  setIsLetDrawerOpen,
  setUserAuth,
  setToken,
  setUserLogOut,
} = userSlice.actions;

export const userDataReducer = userSlice.reducer;
