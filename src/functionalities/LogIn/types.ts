import { SignUpUserInterface } from '../SignUp/types';

export interface LogInUserInterface
  extends Pick<SignUpUserInterface, 'email' | 'password'> {}

export interface LogInUserPropsInterface {
  userData: LogInUserInterface;
  onSuccess: () => void;
}
