import { UpdateOldBookMutation } from '../types/graphql/graphql';
import { FetchResult, useMutation } from '@apollo/client';
import { UPDATE_OLD_BOOK } from '../graphql/mutations';
import { GET_CURRENT_BOOKS } from '../graphql/queries';

interface updateBookDatabaseProps {
  id: string;
  title?: string;
  author?: string;
  description?: string;
}

interface useUpdateOldBookProps {
  updateBookDatabase: ({ id, title, author, description }: updateBookDatabaseProps) => Promise<FetchResult<UpdateOldBookMutation>>
  updateBookLoading: boolean;
}

const useUpdateOldBook = (): useUpdateOldBookProps => {

  const [updateOldBook, { loading }] = useMutation(UPDATE_OLD_BOOK, {
    refetchQueries: [{
      query: GET_CURRENT_BOOKS,
    }],
  });

  const updateBookDatabase = async ({ id, title, author, description }: updateBookDatabaseProps): Promise<FetchResult<UpdateOldBookMutation>> => {
    try {
      const response = await updateOldBook({
        variables: {
          id: id,
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

  return { updateBookDatabase, updateBookLoading: loading };
};

export default useUpdateOldBook;
