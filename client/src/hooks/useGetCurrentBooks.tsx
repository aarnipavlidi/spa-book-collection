import { useQuery } from '@apollo/client';
import { GET_CURRENT_BOOKS } from '../graphql/queries';

const useGetCurrentBooks = () => {
  const { data } = useQuery(GET_CURRENT_BOOKS);

  return {
    booksData: data,
  };
};

export default useGetCurrentBooks;
