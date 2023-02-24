import { gql } from 'apollo-server';

const typeDefs = gql`
  type Response {
    message: String!
  }

  type Books {
    id: String!
    title: String!
    author: String!
    description: String!
  }

  type Query {
    getCurrentBooks: [Books]
    getBookByID(id: String!): Books
  }

  type Mutation {
    createNewBook(title: String, author: String, description: String): Response
  }
`

export default typeDefs;