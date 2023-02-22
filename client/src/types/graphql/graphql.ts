/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Books = {
  __typename?: 'Books';
  author: Scalars['String'];
  description: Scalars['String'];
  id: Scalars['Int'];
  title: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getBookByID?: Maybe<Books>;
  getCurrentBooks?: Maybe<Array<Maybe<Books>>>;
};


export type QueryGetBookByIdArgs = {
  id: Scalars['Int'];
};

export type GetCurrentBooksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrentBooksQuery = { __typename?: 'Query', getCurrentBooks?: Array<{ __typename?: 'Books', id: number, title: string, author: string, description: string } | null> | null };

export type GetBookByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetBookByIdQuery = { __typename?: 'Query', getBookByID?: { __typename?: 'Books', id: number, title: string, author: string, description: string } | null };


export const GetCurrentBooksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCurrentBooks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCurrentBooks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"author"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<GetCurrentBooksQuery, GetCurrentBooksQueryVariables>;
export const GetBookByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getBookByID"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getBookByID"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"author"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<GetBookByIdQuery, GetBookByIdQueryVariables>;