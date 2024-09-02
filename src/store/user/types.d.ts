import { User as UserTypeFirebase } from 'firebase/auth';

export type User = UserTypeFirebase | null;

export type UserReducerInterface = {
  user: User;
  isUserLoggedIn: boolean;
  token: string | null;
  isLeftDrawerOpen: boolean;
};
