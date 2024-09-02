import { useDispatch } from 'react-redux';

// LOCAL
import { AUTH_TOKEN_KEY } from './const';
import { setIsUserLoggedIn, setUserLogOut } from '../../store/user/userSlice';

export const useAuth = () => {
  const dispatch = useDispatch();

  const authUser = (token: string): void => {
    saveToken(token);
    dispatch(setIsUserLoggedIn({ isLoggedIn: true, token: token }));
  };

  const logOutUser = () => {
    deleteToken();
    dispatch(setUserLogOut());
  };

  const saveToken = (token: string): void => {
    localStorage.setItem('authToken', token);
  };

  const deleteToken = (): void => {
    localStorage.removeItem(AUTH_TOKEN_KEY);
  };

  const getToken = (): string | null => {
    return localStorage.getItem(AUTH_TOKEN_KEY);
  };

  const checkLocalstorageTokenAndIfSoLogIn = (): void => {
    const token = getToken();
    if (token) {
      dispatch(setIsUserLoggedIn({ isLoggedIn: true, token: token }));
    }
  };

  const isAuth = () => getToken();

  return {
    saveToken,
    deleteToken,
    getToken,
    isAuth,
    authUser,
    logOutUser,
    checkLocalstorageTokenAndIfSoLogIn,
  };
};
