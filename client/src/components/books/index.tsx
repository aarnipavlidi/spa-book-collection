import { GetCurrentBooksQuery } from '../../types/graphql/graphql';

import TableHeading from './table.heading';
import BookItem from './item';

import UnDraws from '../unDraws';

interface BooksProps {
  currentBooks: GetCurrentBooksQuery | undefined;
}

const Books: React.FC<BooksProps> = ({ currentBooks }) => {

  return (
    <section className="container mx-auto px-5 py-10">
      {
        (currentBooks?.getCurrentBooks === undefined || currentBooks?.getCurrentBooks?.length === 0) && <>
          <div>
            <UnDraws
              name="book-reading"
            />
            <div className="font-pier-sans text-xl text-left mt-10">
              <h2>There are currently no books being listed on the collection. Please add new book into collection!</h2>
            </div>
          </div>
        </>
      }
      {
        currentBooks?.getCurrentBooks && currentBooks?.getCurrentBooks?.length !== 0 && <>
          <table className="table-auto container">
            <thead>
              <tr>
                <TableHeading label="Title" />
                <TableHeading label="Author" />
              </tr>
            </thead>
            <tbody>
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
            </tbody>
          </table>
        </>
      }
    </section>
  );
};

export default Books;
