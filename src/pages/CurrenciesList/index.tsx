import Currency from "../../components/Currency";
import { addManyFavoritesCurrencies } from "../../features/user/userSlice";
import { resetSelected } from "../../features/currencies/currenciesSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

import AddMany from "../../components/AddMany";
const CurrenciesList = () => {
  const { rates, reducedRates, selectedRates } = useAppSelector(
    (state) => state.currencies
  );
  const dispatch = useAppDispatch();
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
      {selectedRates.length > 0 && <AddMany clickHandler={addManyHandler} />}
    </>
  );
};

export default CurrenciesList;
