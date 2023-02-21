import { Routes, Route } from 'react-router-dom';

import Layout from './layout';
import Error from './error';

import useGetCurrentBooks from '../hooks/useGetCurrentBooks';

const Main: React.FC = () => {
  const { booksData } = useGetCurrentBooks();
  console.log('Books data from main component??', booksData);

  return (
    <div className="bg-slate-100 min-h-screen">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Main;
