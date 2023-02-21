import { gql } from '../types/graphql';

export const GET_CURRENT_BOOKS = gql(`
  query getCurrentBooks {
    getCurrentBooks {
      id
      title
      author
      description
    }
  }
`);
