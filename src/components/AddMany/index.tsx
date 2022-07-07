import { FC } from "react";
import { MdLibraryAdd } from "react-icons/md";
import "./addMany.styled.scss";
const AddMany: FC<{ clickHandler: () => void }> = ({ clickHandler }) => {
  return (
    <div className="add-many" onClick={clickHandler}>
      <MdLibraryAdd />
    </div>
  );
};

export default AddMany;
