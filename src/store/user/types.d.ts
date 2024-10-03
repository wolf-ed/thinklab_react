import { User as UserTypeFirebase } from 'firebase/auth';

export type UserInterface = {
  name: string;
  id: string;
  email: string;
};

export type UserReducerInterface = {
  user: UserInterface | null;
  isUserLoggedIn: boolean;
  token: string | null;
  isLeftDrawerOpen: boolean;
};
