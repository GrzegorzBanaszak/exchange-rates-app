import { useAppSelector } from "../../app/hooks";
import Currency from "../../components/Currency";

const Favorites = () => {
  const { favoritesCurrencies } = useAppSelector((state) => state.user);
  return (
    <>
      {favoritesCurrencies.map(({ currency, code, mid }) => (
        <Currency
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
