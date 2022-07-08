import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import Currency from "../../components/Currency";
import { resetSelected } from "../../features/currencies/currenciesSlice";

const Favorites = () => {
  const { favoritesCurrencies } = useAppSelector((state) => state.user);
  const { selectedRates } = useAppSelector((state) => state.currencies);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (selectedRates.length > 0) {
      dispatch(resetSelected());
    }
  }, []);
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
    </>
  );
};

export default Favorites;
