import { useMutation, gql } from '@apollo/client';

import { useAuth } from '../../hooks/useAuth/useAuth';
import { SignUpUserInterface } from './types';

const SIGN_UP_USER = gql`
  mutation SignUpUser($email: String!, $name: String!, $password: String!) {
    SignUpUser(email: $email, name: $name, password: $password) {
      _id
      name

      token
    }
  }
`;

export const useSignUp = () => {
  const auth = useAuth();
  const [signUp, { data: userAuthData, loading, error }] =
    useMutation(SIGN_UP_USER);

  if (loading) {
    console.log('loading');
  }
  if (error) {
    console.log('signUpError', error);
  }

  const signUpUser = async ({ email, name, password }: SignUpUserInterface) => {
    try {
      const { data } = await signUp({
        variables: { email, name, password },
      });
      if (data && data.SignUpUser.token) {
        const token = data.SignUpUser.token;
        auth.authUser(token);
      }
    } catch (e) {
      console.error('Error during SignUp:', e);
    }
  };

  return {
    signUpUser: signUpUser,
    data: userAuthData,
    loading: loading,
  };
};
