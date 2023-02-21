import { ApolloServer } from 'apollo-server';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';

import schema from './schema/index.js';

const server = new ApolloServer({
  schema,
  plugins: [
    ApolloServerPluginLandingPageGraphQLPlayground(),
  ]
});

server.listen().then(({ url }) => {
  console.log(`Server is ready at ${url}`)
});