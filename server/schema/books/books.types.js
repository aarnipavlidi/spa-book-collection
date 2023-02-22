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
    getBookByID(id: Int!): Books
  }
`

export default typeDefs;