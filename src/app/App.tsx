import { ApolloProvider } from '@apollo/client';
import { CssBaseline } from '@mui/material';

// LOCAL
import { useAuth } from '../hooks/useAuth/useAuth';
import { Routes } from '../navigation/Routes/Routes';
import { apolloClient } from '../api/ApolloClient';
import { useEffect } from 'react';

function App() {
  const auth = useAuth();
  useEffect(() => {
    auth.checkLocalstorageTokenAndIfSoLogIn();
  }, []);

  return (
    <ApolloProvider client={apolloClient}>
      <CssBaseline />
      <Routes />
    </ApolloProvider>
  );
}

export default App;
