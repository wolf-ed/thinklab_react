export interface SignUpUserInterface {
  name: string;
  email: string;
  password: string;
}

export interface SignUpUserFormInputsInterface extends SignUpUserInterface {
  confirmPassword: string;
}

export interface SignUpReturnInterface {
  _id: string;
  name: string;
  token: string;
}
