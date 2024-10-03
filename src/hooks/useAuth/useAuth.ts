import { useDispatch } from 'react-redux';

// LOCAL
import { LOCAL_HOST_KEYS } from './const';
import {
  setIsUserLoggedIn,
  setUser,
  setUserLogOut,
} from '../../store/user/userSlice';
import { UserInterface } from '../../store/user/types';

export const useAuth = () => {
  const dispatch = useDispatch();

  const authUser = (token: string, user?: UserInterface | undefined): void => {
    saveToken(token);
    saveToken(token);
    dispatch(setIsUserLoggedIn({ isLoggedIn: true, token: token }));
    if (user) {
      dispatch(setUser(user));
      saveUser(user);
    }
  };

  const logOutUser = () => {
    deleteTokenAndUserData();
    dispatch(setUserLogOut());
  };

  const saveToken = (token: string): void => {
    localStorage.setItem(LOCAL_HOST_KEYS.AUTH_TOKEN, token);
  };

  const saveUser = (user: UserInterface): void => {
    localStorage.setItem(LOCAL_HOST_KEYS.USER, JSON.stringify(user));
  };

  const deleteTokenAndUserData = (): void => {
    localStorage.removeItem(LOCAL_HOST_KEYS.AUTH_TOKEN);
    localStorage.removeItem(LOCAL_HOST_KEYS.USER);
  };

  const getToken = (): string | null => {
    return localStorage.getItem(LOCAL_HOST_KEYS.AUTH_TOKEN);
  };

  const getUser = (): UserInterface | null => {
    const userJsonFormat = localStorage.getItem(LOCAL_HOST_KEYS.USER);
    return userJsonFormat ? JSON.parse(userJsonFormat) : null;
  };

  const checkLocalstorageTokenAndIfSoLogIn = (): void => {
    const token = getToken();
    const user: UserInterface | null = getUser();
    if (token && user) {
      dispatch(setIsUserLoggedIn({ isLoggedIn: true, token: token }));
      dispatch(setUser(user));
    }
  };

  const isAuth = () => getToken();

  return {
    saveToken,
    deleteToken: deleteTokenAndUserData,
    getToken,
    isAuth,
    authUser,
    logOutUser,
    checkLocalstorageTokenAndIfSoLogIn,
  };
};
