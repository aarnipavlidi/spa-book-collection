import { Routes, Route } from 'react-router-dom';

import Layout from './layout';
import Book from './book';
import Error from './error';

import useGetCurrentBooks from '../hooks/useGetCurrentBooks';

const Main: React.FC = () => {
  const { booksData, booksLoading } = useGetCurrentBooks();

  return (
    <div className="bg-slate-100 min-h-screen">
      <Routes>
        <Route path="/" element={<Layout currentBooks={booksData} loadingBooks={booksLoading} />}>
          <Route index path="/" element={<Book />} />
          <Route path="/:id" element={<Book />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Main;
