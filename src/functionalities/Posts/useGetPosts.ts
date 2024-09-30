import { useState, useCallback } from 'react';
import { useQuery, gql } from '@apollo/client';
import { useDispatch } from 'react-redux';

// LOCAL
import { getToken } from '../../store/user/userSelectors';
import { useSnackbarNotification } from '../SnackbarNotification/useSnackbarNotification';
import { PostInterfaceEncoded } from '../PostsEditor/types';
import { setPosts } from '../../store/posts/postsSlice';

const GET_POSTS_QUERY = gql`
  query GetPosts($id: String) {
    GetPosts(id: $id) {
      posts {
        id
        title
        content
        userName
        userId
        visibility
      }
    }
  }
`;

interface GetPostsData {
  GetPosts: {
    posts: PostInterfaceEncoded[];
  };
}

export const useGetPosts = () => {
  const dispatch = useDispatch();
  const token = getToken();
  const snackbarNotif = useSnackbarNotification();
  const [retryCount, setRetryCount] = useState(0);

  let finalContext = token
    ? {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    : {};

  const { data, loading, error, refetch } = useQuery<GetPostsData>(
    GET_POSTS_QUERY,
    {
      context: finalContext,
      onError: (apolloError) => {
        if (
          apolloError.networkError &&
          'statusCode' in apolloError.networkError &&
          apolloError.networkError.statusCode === 429
        ) {
          const retryDelay = Math.min(1000 * 2 ** retryCount, 30000);
          setTimeout(() => {
            setRetryCount(retryCount + 1);
            refetch();
          }, retryDelay);
        } else {
          snackbarNotif.showSnackbar({
            message: 'Failed to load posts',
            duration: 3000,
          });
        }
      },
      fetchPolicy: 'cache-and-network',
      onCompleted: (data) => {
        if (data && data.GetPosts && data.GetPosts.posts) {
          dispatch(setPosts(data.GetPosts.posts));
        }
      },
    }
  );

  const getPosts = useCallback(
    async (id: string | null) => {
      try {
        await refetch({ id });
      } catch (e) {
        snackbarNotif.showSnackbar({
          message: 'Failed to load posts',
          duration: 3000,
        });
      }
    },
    [refetch, snackbarNotif]
  );

  return {
    getPosts,
    data,
    loading,
    error,
    retryCount,
  };
};
