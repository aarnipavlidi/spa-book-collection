import { unDrawProps, unDrawArrayProps } from '../../types/svg/unDraw.props';

import BookReading from '../svg/unDraws/BookReading';

const unDraws: React.FC<unDrawProps> = ({ name, color, variant = 'primary', ...props }) => {

  const unDrawArray: unDrawArrayProps = {
    'book-reading': BookReading,
  };

  const UnDraw = unDrawArray[name];

  return (
    <UnDraw
      name={name}
      variant={variant}
      {...props}
    />
  );
};

export default unDraws;
