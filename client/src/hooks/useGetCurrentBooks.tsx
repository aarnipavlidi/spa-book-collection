import { useQuery } from '@apollo/client';
import { GET_CURRENT_BOOKS } from '../graphql/queries';

const useGetCurrentBooks = () => {
  const { data, loading, error } = useQuery(GET_CURRENT_BOOKS);

  console.log('Current books data:', data);

  return {
    booksData: data,
    booksLoading: loading,
    booksError: error,
  };
};

export default useGetCurrentBooks;
