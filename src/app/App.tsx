import { useEffect } from 'react';
import { CssBaseline } from '@mui/material';

// LOCAL
import { useAuth } from '../hooks/useAuth/useAuth';
import { Routes } from '../navigation/Routes/Routes';
import { useGetPosts } from '../functionalities/Posts/useGetPosts';

function App() {
  const { getPosts } = useGetPosts();

  const auth = useAuth();
  useEffect(() => {
    auth.checkLocalstorageTokenAndIfSoLogIn();
    getPosts(null);
  }, []);

  return (
    <>
      <CssBaseline />
      <Routes />
    </>
  );
}

export default App;
