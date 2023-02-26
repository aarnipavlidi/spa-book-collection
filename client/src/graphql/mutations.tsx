import { gql } from '../types/graphql';

export const CREATE_NEW_BOOK = gql(`
  mutation createNewBook($title: String, $author: String, $description: String) {
    createNewBook(title: $title, author: $author, description: $description) {
      message
    }
  }
`);

export const DELETE_OLD_BOOK = gql(`
  mutation deleteOldBook($id: String!) {
    deleteOldBook(id: $id) {
      message
    }
  }
`);
