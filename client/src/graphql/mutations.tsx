import { gql } from '../types/graphql';

export const CREATE_NEW_BOOK = gql(`
  mutation createNewBook($title: String, $author: String, $description: String) {
    createNewBook(title: $title, author: $author, description: $description) {
      message
    }
  }
`);
