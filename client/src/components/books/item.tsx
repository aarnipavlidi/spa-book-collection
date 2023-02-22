import { Link } from 'react-router-dom';

interface BookItemProps {
  id?: number;
  title?: string;
  author?: string;
}

const BookItem: React.FC<BookItemProps> = (props) => {
  return (
    <tr id={props.id?.toString()} className="font-pier-sans text-left">
      <Link to={`${props.id}`}>
        <th>{props.title}</th>
      </Link>
      <th>{props.author}</th>
    </tr>
  );
};

export default BookItem;
