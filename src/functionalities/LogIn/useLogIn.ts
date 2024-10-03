import { useLazyQuery, gql } from '@apollo/client';
import { useAuth } from '../../hooks/useAuth/useAuth';
import { LogInUserPropsInterface } from './types';
import { UserInterface } from '../../store/user/types';

const LOG_IN_USER = gql`
  query LogIn($email: String!, $password: String!) {
    LogIn(email: $email, password: $password) {
      _id
      name
      token
      email
    }
  }
`;

export const useLogIn = () => {
  const auth = useAuth();
  const [logInUser, { data: userAuthData, loading, error }] = useLazyQuery(
    LOG_IN_USER,
    {
      fetchPolicy: 'network-only',
      onError: (apolloError) => {
        console.log('GraphQL Error:', apolloError.graphQLErrors);
      },
    }
  );

  const logIn = async ({ userData, onSuccess }: LogInUserPropsInterface) => {
    try {
      const { data } = await logInUser({
        variables: { email: userData.email, password: userData.password },
      });

      if (data && data.LogIn && data.LogIn.token) {
        const user: UserInterface = {
          id: data.LogIn._id,
          name: data.LogIn.name,
          email: data.LogIn.email,
        };
        auth.authUser(data.LogIn.token, user);
        onSuccess();
      } else {
        console.log('Login failed or token missing in response');
      }
    } catch (e) {
      console.error('Error during LogIn:', e);
    }
  };

  return {
    logIn,
    userAuthData,
    loading,
    error,
  };
};
