import { FC } from "react";
import "./spinner.styles.scss";
const aplliedStyles = (color: string) => {
  return {
    borderColor: `${color} transparent transparent transparent`,
  };
};

const Spinner: FC<{ color: string }> = ({ color }) => {
  return (
    <div className="spinner">
      <div className="lds-ring">
        <div style={aplliedStyles(color)}></div>
        <div style={aplliedStyles(color)}></div>
        <div style={aplliedStyles(color)}></div>
        <div style={aplliedStyles(color)}></div>
      </div>
    </div>
  );
};

export default Spinner;
