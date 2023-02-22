import { useQuery } from '@apollo/client';
import { GET_CURRENT_BOOKS } from '../graphql/queries';

const useGetCurrentBooks = () => {
  const { data, loading, error } = useQuery(GET_CURRENT_BOOKS);

  return {
    booksData: data,
    booksLoading: loading,
    booksError: error,
  };
};

export default useGetCurrentBooks;
