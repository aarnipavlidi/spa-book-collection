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

export const UPDATE_OLD_BOOK = gql(`
  mutation updateOldBook($id: String!, $title: String, $author: String, $description: String) {
    updateOldBook(id: $id, title: $title, author: $author, description: $description) {
      message
    }
  }
`);
