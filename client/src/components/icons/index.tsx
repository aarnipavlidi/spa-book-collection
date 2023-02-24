import { HeroIconsProps, HeroIconsArrayProps } from '../../types/svg/HeroIcons.props';

import ArrowPath from '../svg/HeroIcons/ArrowPath';

const HeroIcons: React.FC<HeroIconsProps> = ({ variant = 'outline', name, ...props }) => {

  const HeroIconsArray: HeroIconsArrayProps = {
    'arrow-path': ArrowPath,
  };

  const HeroIcon = HeroIconsArray[name];


  return (
    <HeroIcon
      name={name}
      variant={variant}
      {...props}
    />
  );
};

export default HeroIcons;
