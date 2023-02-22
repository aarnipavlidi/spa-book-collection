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

export const GET_BOOK_BY_ID = gql(`
  query getBookByID($id: Int!) {
    getBookByID(id: $id) {
      id
      title
      author
      description
    }
  }
`);
