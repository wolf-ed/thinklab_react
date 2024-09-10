import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/client';

import { apolloClient } from './api/ApolloClient.ts';
import { store } from './store/index.ts';
import App from './app/App.tsx';
import { SnackBarNotification } from './functionalities/SnackbarNotification/SnackbarNotification.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={apolloClient}>
        <App />
      </ApolloProvider>
      <SnackBarNotification />
    </Provider>
  </React.StrictMode>
);
