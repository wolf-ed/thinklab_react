import { useEffect } from 'react';
import { CssBaseline } from '@mui/material';

// LOCAL
import { useAuth } from '../hooks/useAuth/useAuth';
import { Routes } from '../navigation/Routes/Routes';
import { useGetPosts } from '../functionalities/Posts/useGetPosts';
import { useGetFirebasePosts } from '../functionalities/Posts/useGetFirebasePosts';

function App() {
  const { getPosts } = useGetPosts();
  const { getFirebasePosts } = useGetFirebasePosts();

  const auth = useAuth();
  useEffect(() => {
    auth.checkLocalstorageTokenAndIfSoLogIn();
    getPosts(null);
    getFirebasePosts();
  }, []);

  return (
    <>
      <CssBaseline />
      <Routes />
    </>
  );
}

export default App;
