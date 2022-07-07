import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Rates } from "../../types";
import "./currenct.styled.scss";
import { MdOutlineFavoriteBorder, MdFavorite } from "react-icons/md";
import { addFavoriteCurrency } from "../../features/user/userSlice";
const Currency: FC<Rates> = ({ currency, code, mid }) => {
  const { favoritesCurrencies } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const handleFavoriteAdd = () => {
    dispatch(addFavoriteCurrency({ currency, code, mid }));
  };

  return (
    <div className="currency">
      <h4 className="currency__name">{currency}</h4>
      <div className="currency__value">
        {favoritesCurrencies.some((item) => item.currency === currency) ? (
          <MdFavorite size={24} color={"red"} onClick={handleFavoriteAdd} />
        ) : (
          <MdOutlineFavoriteBorder size={24} onClick={handleFavoriteAdd} />
        )}
        <p>
          {mid} {code}
        </p>
      </div>
    </div>
  );
};

export default Currency;
