/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation createNewBook($title: String, $author: String, $description: String) {\n    createNewBook(title: $title, author: $author, description: $description) {\n      message\n    }\n  }\n": types.CreateNewBookDocument,
    "\n  mutation deleteOldBook($id: String!) {\n    deleteOldBook(id: $id) {\n      message\n    }\n  }\n": types.DeleteOldBookDocument,
    "\n  mutation updateOldBook($id: String!, $title: String, $author: String, $description: String) {\n    updateOldBook(id: $id, title: $title, author: $author, description: $description) {\n      message\n    }\n  }\n": types.UpdateOldBookDocument,
    "\n  query getCurrentBooks {\n    getCurrentBooks {\n      id\n      title\n      author\n      description\n    }\n  }\n": types.GetCurrentBooksDocument,
    "\n  query getBookByID($id: String!) {\n    getBookByID(id: $id) {\n      id\n      title\n      author\n      description\n    }\n  }\n": types.GetBookByIdDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation createNewBook($title: String, $author: String, $description: String) {\n    createNewBook(title: $title, author: $author, description: $description) {\n      message\n    }\n  }\n"): (typeof documents)["\n  mutation createNewBook($title: String, $author: String, $description: String) {\n    createNewBook(title: $title, author: $author, description: $description) {\n      message\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation deleteOldBook($id: String!) {\n    deleteOldBook(id: $id) {\n      message\n    }\n  }\n"): (typeof documents)["\n  mutation deleteOldBook($id: String!) {\n    deleteOldBook(id: $id) {\n      message\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation updateOldBook($id: String!, $title: String, $author: String, $description: String) {\n    updateOldBook(id: $id, title: $title, author: $author, description: $description) {\n      message\n    }\n  }\n"): (typeof documents)["\n  mutation updateOldBook($id: String!, $title: String, $author: String, $description: String) {\n    updateOldBook(id: $id, title: $title, author: $author, description: $description) {\n      message\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getCurrentBooks {\n    getCurrentBooks {\n      id\n      title\n      author\n      description\n    }\n  }\n"): (typeof documents)["\n  query getCurrentBooks {\n    getCurrentBooks {\n      id\n      title\n      author\n      description\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getBookByID($id: String!) {\n    getBookByID(id: $id) {\n      id\n      title\n      author\n      description\n    }\n  }\n"): (typeof documents)["\n  query getBookByID($id: String!) {\n    getBookByID(id: $id) {\n      id\n      title\n      author\n      description\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;