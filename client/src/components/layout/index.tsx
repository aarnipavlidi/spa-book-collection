import { GetCurrentBooksQuery } from '../../types/graphql/graphql';
import { Outlet } from 'react-router-dom';
import Navigation from '../navigation';

import Books from '../books';

interface LayoutProps {
  currentBooks: GetCurrentBooksQuery | undefined;
}

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <>
      <Navigation />
      <main className="flex flex-row">
        <Outlet />
        <Books
          currentBooks={props.currentBooks}
        />
      </main>
    </>
  );
};

export default Layout;
