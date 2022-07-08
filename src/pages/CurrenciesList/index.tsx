import Currency from "../../components/Currency";
import { addManyFavoritesCurrencies } from "../../features/user/userSlice";
import { resetSelected } from "../../features/currencies/currenciesSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import ButtonFavorites from "../../components/ButtonFavorites";
import { useEffect } from "react";
import { ButtonFavoritesTypeEnum } from "../../types";
import { MdLibraryAdd } from "react-icons/md";
const CurrenciesList = () => {
  const { rates, reducedRates, selectedRates } = useAppSelector(
    (state) => state.currencies
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (selectedRates.length > 0) {
      dispatch(resetSelected());
    }
  }, []);

  const addManyHandler = () => {
    dispatch(addManyFavoritesCurrencies(selectedRates));
    dispatch(resetSelected());
  };
  return (
    <>
      {rates &&
        reducedRates.map((rate, index) => (
          <Currency
            key={index}
            currency={rate.currency}
            code={rate.code}
            mid={rate.mid}
            hasFavorite={true}
          />
        ))}
      {selectedRates.length > 0 && (
        <ButtonFavorites
          clickHandler={addManyHandler}
          buttonType={ButtonFavoritesTypeEnum.ADD}
        >
          <MdLibraryAdd />
        </ButtonFavorites>
      )}
    </>
  );
};

export default CurrenciesList;
