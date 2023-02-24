interface LabelProps {
  id: string;
  className?: string;
  value: string;
}

const Label: React.FC<LabelProps> = (props, { className = '' }) => {
  return (
    <label id={props.id} className={className}>
      {props.value}
    </label>
  );
};

export default Label;
