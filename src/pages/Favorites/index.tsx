import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import ButtonFavorites from "../../components/ButtonFavorites";
import Currency from "../../components/Currency";
import { resetSelected } from "../../features/currencies/currenciesSlice";
import { ButtonFavoritesTypeEnum } from "../../types";
import { MdOutlineRemoveCircle } from "react-icons/md";
const Favorites = () => {
  const { favoritesCurrencies } = useAppSelector((state) => state.user);
  const { selectedRates } = useAppSelector((state) => state.currencies);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (selectedRates.length > 0) {
      dispatch(resetSelected());
    }
  }, []);

  const removeManyHandler = () => {};
  return (
    <>
      {favoritesCurrencies.map(({ currency, code, mid }, index) => (
        <Currency
          key={index}
          currency={currency}
          code={code}
          mid={mid}
          hasFavorite={false}
        />
      ))}
      {selectedRates.length > 0 && (
        <ButtonFavorites
          clickHandler={removeManyHandler}
          buttonType={ButtonFavoritesTypeEnum.REMOVE}
        >
          <MdOutlineRemoveCircle />
        </ButtonFavorites>
      )}
    </>
  );
};

export default Favorites;
