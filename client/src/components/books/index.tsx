import { GetCurrentBooksQuery } from '../../types/graphql/graphql';

import TableHeading from './table.heading';
import BookItem from './item';

interface BooksProps {
  currentBooks: GetCurrentBooksQuery | undefined;
  loadingBooks: boolean;
}

const Books: React.FC<BooksProps> = ({ currentBooks, loadingBooks }) => {

  return (
    <section className="container mx-auto px-5 py-10">
      <table className="table-auto container">
        <thead>
          <tr>
            <TableHeading label="Title" />
            <TableHeading label="Author" />
          </tr>
        </thead>
        <tbody>
          {
            currentBooks?.getCurrentBooks && <>
              {
                currentBooks.getCurrentBooks.map((item) => {
                  return (
                    <BookItem
                      id={item?.id}
                      title={item?.title}
                      author={item?.author}
                    />
                  );
                })
              }
            </>
          }
        </tbody>
      </table>
    </section>
  );
};

export default Books;
