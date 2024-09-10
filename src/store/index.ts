import { configureStore } from '@reduxjs/toolkit';

import { userDataReducer } from './user/userSlice';
import { snackbarNotificationReducer } from './snackbarNotification/snackbarNotificationSlice';
import { postsReducer } from './posts/postsSlice';

export const store = configureStore({
  reducer: {
    SnackBarNotification: snackbarNotificationReducer,
    userReducer: userDataReducer,
    postsReducer: postsReducer,
  },
});

export type RootReduxState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
