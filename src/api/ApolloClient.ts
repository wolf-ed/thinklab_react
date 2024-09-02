import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

export const API_URL = import.meta.env.VITE_API_URL;

export const URL_GRAPHQL = API_URL + '/graphql';

export const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: URL_GRAPHQL,
  }),
  cache: new InMemoryCache(),
});
