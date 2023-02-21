import { gql } from 'apollo-server';

const typeDefs = gql`
  type Books {
    id: Int!
    title: String!
    author: String!
    description: String!
  }

  type Query {
    getCurrentBooks: [Books]
  }
`

export default typeDefs;