import Page from './page';

const Navigation: React.FC = () => {
  return (
    <header className="container mx-auto px-5 bg-slate-100">
      <nav className="pt-5 flex justify-between">
        <div className="basis-1/2 self-center">
          <h1 className="font-pier-sans text-2xl">Books Collection</h1>
        </div>
        <ul className="basis-1/2 flex flex-row gap-5">
          <Page label="Homepage" path="/" />
          <Page label="Error page" path="/error" />
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
