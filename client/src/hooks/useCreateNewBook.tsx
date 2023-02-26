import { CreateNewBookMutation } from '../types/graphql/graphql';
import { FetchResult, useMutation } from '@apollo/client';
import { CREATE_NEW_BOOK } from '../graphql/mutations';
import { GET_CURRENT_BOOKS } from '../graphql/queries';

interface createBookDatabaseProps {
  title?: string;
  author?: string;
  description?: string
}

interface useCreateNewBookProps {
  createBookDatabase: ({ title, author, description }: createBookDatabaseProps) => Promise<FetchResult<CreateNewBookMutation>>;
  createBookLoading: boolean;
}

const useCreateNewBook = (): useCreateNewBookProps => {

  const [createnewBook, { loading }] = useMutation(CREATE_NEW_BOOK, {
    refetchQueries: [{
      query: GET_CURRENT_BOOKS,
    }],
  });

  const createBookDatabase = async ({ title, author, description }: createBookDatabaseProps): Promise<FetchResult<CreateNewBookMutation>> => {
    try {
      const response = await createnewBook({
        variables: {
          title: title,
          author: author,
          description: description,
        },
      });

      return response;
    } catch (error) {
      throw error;
    }
  };

  return { createBookDatabase, createBookLoading: loading };
};

export default useCreateNewBook;
