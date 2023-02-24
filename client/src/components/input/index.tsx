interface InputProps {
  id: string;
  element: 'input' | 'textarea';
  className?: string;
  placeholder?: string;
  value?: string;
  update?: (value: string) => void;
  rows?: number;
}

const Input: React.FC<InputProps> = (props) => {
  const InputTag = props.element as keyof JSX.IntrinsicElements;

  // TODO Try find a solution for "event" parameter. Was not
  // able to figure it out "right" type for the variable.
  const handleInputChange = (event: any) => {
    const currentTarget = event.target as HTMLInputElement | HTMLTextAreaElement;
    props.update?.(currentTarget.value);
  };

  return (
    <InputTag
      id={props.id}
      className={props.className}
      placeholder={props.placeholder}
      value={props.value}
      onChange={handleInputChange}
      rows={props.rows}
    />
  );
};

export default Input;
