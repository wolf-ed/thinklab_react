import { useDispatch } from 'react-redux';

import { useFirebase } from '../../api/useFirebase/useFirebase';
import { PostInterface, setMorePosts } from '../../store/posts/postsSlice';
import { useSnackbarNotification } from '../SnackbarNotification/useSnackbarNotification';
import { FIREBASE_COLLECTIONS_ENUM } from '../../api/useFirebase/const';

export const useGetFirebasePosts = () => {
  const firebase = useFirebase();
  const dispatch = useDispatch();
  const snackbar = useSnackbarNotification();

  const getFirebasePosts = async () => {
    await firebase.getAllItemsFromACollection({
      collectionName: FIREBASE_COLLECTIONS_ENUM.POSTS,
      onSuccess: (data: PostInterface[]) => {
        dispatch(setMorePosts(data));
      },
      onError: () => {
        snackbar.showSnackbar({
          message: 'Error fetching',
          severity: 'error',
          duration: 3000,
        });
      },
    });
  };

  return {
    getFirebasePosts,
  };
};
