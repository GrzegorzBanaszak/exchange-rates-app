import React, { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Rates } from "../../types";
import "./currenct.styled.scss";
import { MdOutlineFavoriteBorder, MdFavorite } from "react-icons/md";
import { addFavoriteCurrency } from "../../features/user/userSlice";
import { addToSelected } from "../../features/currencies/currenciesSlice";
const Currency: FC<Rates> = ({ currency, code, mid }) => {
  const { favoritesCurrencies } = useAppSelector((state) => state.user);
  const { selectedRates } = useAppSelector((state) => state.currencies);
  const dispatch = useAppDispatch();
  const handleFavoriteAdd = (e: React.MouseEvent<SVGElement>) => {
    e.stopPropagation();
    dispatch(addFavoriteCurrency({ currency, code, mid }));
  };

  const handelSelected = () => {
    dispatch(addToSelected({ currency, code, mid }));
  };

  return (
    <div
      className={`currency ${
        selectedRates.some((c) => c.code === code) ? "currency__selected" : ""
      }`}
      onClick={handelSelected}
    >
      <h4 className="currency__name">{currency}</h4>
      <div className="currency__value">
        {favoritesCurrencies.some((item) => item.currency === currency) ? (
          <MdFavorite
            size={24}
            color={"red"}
            onClick={(e) => handleFavoriteAdd(e)}
          />
        ) : (
          <MdOutlineFavoriteBorder
            size={24}
            onClick={(e) => handleFavoriteAdd(e)}
          />
        )}
        <p>
          {mid} {code}
        </p>
      </div>
    </div>
  );
};

export default Currency;
