import { useQuery } from '@apollo/client';
import { GET_BOOK_BY_ID } from '../graphql/queries';

const useGetBookByID = (chosenBookID: number) => {
  const { data, loading, error } = useQuery(GET_BOOK_BY_ID, {
    variables: {
      id: chosenBookID,
    },
  });

  return {
    bookData: data,
    bookLoading: loading,
    booksError: error,
  };
};

export default useGetBookByID;
