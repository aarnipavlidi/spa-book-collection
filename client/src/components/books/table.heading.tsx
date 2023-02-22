interface TableHeadingProps {
  label: string;
}

const TableHeading: React.FC<TableHeadingProps> = (props) => {
  return (
    <th className="pb-3 text-left">{props.label}</th>
  );
};

export default TableHeading;
