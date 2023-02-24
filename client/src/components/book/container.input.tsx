import Label from '../label';
import Input from '../input';

interface ContainerProps {
  containerStyle?: string;
  labelID: string;
  labelStyle?: string;
  labelValue: string;
  inputID: string;
  inputElement: 'input' | 'textarea';
  inputStyle?: string;
  inputPlaceholder?: string;
  inputValue?: string;
  inputUpdate?: (value: string) => void;
  inputRows?: number;
}

const ContainerInput: React.FC<ContainerProps> = (props) => {
  return (
    <div className={props.containerStyle}>
      <Label
        id={props.labelID}
        className={props.labelStyle}
        value={props.labelValue}
      />
      <Input
        id={props.inputID}
        element={props.inputElement}
        className={props.inputStyle}
        placeholder={props.inputPlaceholder}
        value={props.inputValue}
        update={props.inputUpdate}
        rows={props.inputRows}
      />
    </div>
  );
};

export default ContainerInput;
