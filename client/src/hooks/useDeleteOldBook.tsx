import { DeleteOldBookMutation } from '../types/graphql/graphql';
import { FetchResult, useMutation } from '@apollo/client';
import { DELETE_OLD_BOOK } from '../graphql/mutations';
import { GET_CURRENT_BOOKS } from '../graphql/queries';

interface deleteBookDatabaseProps {
  id: string;
}

interface useDeleteOldBookProps {
  deleteBookDatabase: ({ id }: deleteBookDatabaseProps) => Promise<FetchResult<DeleteOldBookMutation>>;
  deleteBookLoading: boolean;
}

const useDeleteOldBook = (getCurrentID: string): useDeleteOldBookProps => {

  const [deleteOldBook, { loading }] = useMutation(DELETE_OLD_BOOK, {
    update: (cache) => {
      const chosenBookForDelete = getCurrentID;
      const getCurrentBooks = cache.readQuery({
        query: GET_CURRENT_BOOKS,
      });

      const updateBooksCache = getCurrentBooks?.getCurrentBooks?.filter((book) => book?.id !== chosenBookForDelete);
      cache.writeQuery({
        query: GET_CURRENT_BOOKS,
        data: {
          getCurrentBooks: updateBooksCache,
        },
      });
    },
  });

  const deleteBookDatabase = async ({ id }: deleteBookDatabaseProps): Promise<FetchResult<DeleteOldBookMutation>> => {
    try {
      const response = await deleteOldBook({
        variables: {
          id: id,
        },
      });

      return response;
    } catch (error) {
      throw error;
    }
  };

  return { deleteBookDatabase, deleteBookLoading: loading };
};

export default useDeleteOldBook;
