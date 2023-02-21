import { ApolloClient, createHttpLink, InMemoryCache, ApolloProvider as Apollo } from '@apollo/client';

interface ApolloProviderProps {
  children: React.ReactNode;
}

const ApolloProvider: React.FC<ApolloProviderProps> = ({ children }) => {
  const apolloServer = process.env.REACT_APP_APOLLO_SERVER_URL || '';

  const client = new ApolloClient({
    link: createHttpLink({
      uri: apolloServer,
    }),
    cache: new InMemoryCache(),
    connectToDevTools: true,
  });

  return (
    <Apollo client={client}>
      {children}
    </Apollo>
  );
};

export default ApolloProvider;
