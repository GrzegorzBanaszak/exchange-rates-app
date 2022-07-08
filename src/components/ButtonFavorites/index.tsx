import { FC } from "react";

import { ButtonFavoritesTypeEnum } from "../../types";
import "./buttonFavorites.styled.scss";
const ButtonFavorites: FC<{
  children: React.ReactNode;
  clickHandler: () => void;
  buttonType: ButtonFavoritesTypeEnum;
}> = ({ clickHandler, buttonType, children }) => {
  return (
    <div className={`button ${buttonType}`} onClick={clickHandler}>
      {children}
    </div>
  );
};

export default ButtonFavorites;
