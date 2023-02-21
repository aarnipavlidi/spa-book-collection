import { Link, useMatch, useResolvedPath } from 'react-router-dom';

interface PageProps {
  label: string;
  path: string;
}

const Page: React.FC<PageProps> = ({ label, path }) => {
  const resolved = useResolvedPath(path);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <li>
      <Link
        to={path}
        className={match ? 'font-pier-sans underline underline-offset-4 decoration-slate-900 text-xl' : 'font-pier-sans text-xl'}
      >
        {label}
      </Link>
    </li>
  );
};

export default Page;
