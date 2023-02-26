import { SVGProps } from 'react';

export type unDrawNameType = 'book-reading';

export interface unDrawProps extends SVGProps<SVGSVGElement> {
  name: unDrawNameType;
  color?: string;
  variant?: 'primary';
};

export type unDrawArrayProps = {
  [key in unDrawNameType]: React.FC<unDrawProps>;
};
