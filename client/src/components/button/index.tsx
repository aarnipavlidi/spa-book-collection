import { HeroIconNameType } from '../../types/svg/HeroIcons.props';
import HeroIcons from '../icons';

interface IconProps {
  iconName?: HeroIconNameType;
  iconStyling?: string;
}

interface ButtonProps extends IconProps {
  variant?: 'primary';
  label: string;
  buttonStyling?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  buttonLoading?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', label, buttonStyling, onClick, buttonLoading, disabled, iconName, iconStyling }) => {
  return (
    <>
      {
        variant === 'primary' && <button type="button" disabled={disabled} className={`${'p-2 border-solid border-2 rounded-lg border-slate-500 bg-slate-300 disabled:opacity-50'} ${buttonStyling}`} onClick={onClick}>
          <span className="font-pier-sans flex flex-row text-md">
            {
              iconName && buttonLoading && <>
                <HeroIcons
                  name={iconName}
                  color="#0F172A"
                  className={`${iconStyling} ${buttonLoading ? 'animate-spin' : ''}`}
                />
              </>
            }
            {buttonLoading ? 'Saving book...' : label}
          </span>
        </button>
      }
    </>
  );
};

export default Button;
