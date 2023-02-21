import { makeExecutableSchema } from '@graphql-tools/schema';
import merge from 'lodash.merge';

import schemaBooks from './books/index.js';

const schema = makeExecutableSchema({
  typeDefs: [
    schemaBooks.typeDefs,
  ],
  resolvers: merge(
    schemaBooks.resolvers,
  )
});

export default schema;