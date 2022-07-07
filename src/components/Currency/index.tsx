import { FC } from "react";
import { Rates } from "../../types";
import "./currenct.styled.scss";
const Currency: FC<Rates> = ({ currency, code, mid }) => {
  return (
    <div className="currency">
      <h4 className="currency__name">{currency}</h4>
      <div className="currency__value">
        {mid} {code}
      </div>
    </div>
  );
};

export default Currency;
