import { useParams } from 'react-router-dom';

import useGetBookByID from '../../hooks/useGetBookByID';

const Book: React.FC = () => {
  const params = useParams();

  const getCurrentID = params.id ? parseInt(params.id) : 0;

  const { bookData } = useGetBookByID(getCurrentID);

  return (
    <div className="container mx-auto px-5 py-10 basis-1/2">
      <div>
        <label className="text-md font-pier-sans">Title</label>
        <input
          id="title-input"
          type="text"
          className="border-solid border-2 text-md font-pier-sans rounded-lg block w-full p-2 mt-2"
          value={bookData?.getBookByID?.title}
        />
      </div>
      <div className="py-5">
        <label className="text-md font-pier-sans">Author</label>
        <input
          id="author-input"
          type="text"
          className="border-solid border-2 text-md font-pier-sans rounded-lg block w-full p-2 mt-2"
          value={bookData?.getBookByID?.author}
        />
      </div>
      <div>
        <textarea
          id="description-input"
          rows={4}
          className="border-solid border-2 text-md font-pier-sans rounded-lg block w-full p-2 mt-2"
          value={bookData?.getBookByID?.description}
          placeholder="Write your thoughts here..."
        />
      </div>
    </div>
  );
};

export default Book;
