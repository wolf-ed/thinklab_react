import { useMutation } from '@apollo/client';
import { gql } from '@apollo/client';

// LOCAL
import { getToken } from '../../store/user/userSelectors';
import { SavePostPropsInterface } from './types';
import { useSnackbarNotification } from '../SnackbarNotification/useSnackbarNotification';

const POST_MUTATION = gql`
  mutation SavePost(
    $title: String!
    $content: String!
    $visibility: String!
    $id: String
  ) {
    SavePost(
      title: $title
      content: $content
      visibility: $visibility
      id: $id
    ) {
      id
    }
  }
`;

export const useSavePost = () => {
  const token = getToken();
  const snackbarNotif = useSnackbarNotification();
  const [postMutation, { data, loading, error }] = useMutation(POST_MUTATION, {
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
    onError: (apolloError) => {
      console.log('GraphQL Error:', apolloError.graphQLErrors);
    },
  });
  const savePost = async ({
    id,
    title,
    content,
    visibility,
  }: SavePostPropsInterface) => {
    try {
      const { data } = await postMutation({
        variables: {
          id,
          title,
          content,
          visibility,
        },
      });

      if (data && data.SavePost) {
        snackbarNotif.showSnackbar({
          message: 'Post created successfully',
          duration: 3000,
          severity: 'success',
        });
        return data.SavePost;
      } else {
        snackbarNotif.showSnackbar({
          message: 'Post could not be saved',
          duration: 3000,
          severity: 'error',
        });
      }
    } catch (e) {
      snackbarNotif.showSnackbar({
        message: 'Post could not be saved',
        duration: 3000,
        severity: 'error',
      });
    }
  };

  return {
    savePost,
    data,
    loading,
    error,
  };
};
