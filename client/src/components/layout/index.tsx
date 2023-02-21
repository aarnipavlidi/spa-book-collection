import { Outlet } from 'react-router-dom';
import Navigation from '../navigation';

const Layout: React.FC = () => {
  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
