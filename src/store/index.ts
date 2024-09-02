import { configureStore } from '@reduxjs/toolkit';
// import thunkMiddleware from 'redux-thunk';

//My redux
import { userDataReducer } from './user/userSlice';

const store = configureStore({
  reducer: {
    userReducer: userDataReducer,
  },
  // middleware: [
  //   thunkMiddleware,
  //   // loggerMiddleware
  // ],
});

export default store;
