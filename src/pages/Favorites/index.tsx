import "./favorites.styles.scss";
import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import ButtonFavorites from "../../components/ButtonFavorites";
import Currency from "../../components/Currency";
import { resetSelected } from "../../features/currencies/currenciesSlice";
import { ButtonFavoritesTypeEnum } from "../../types";
import { removeManyFavoritesCurrencies } from "../../features/user/userSlice";
import { MdOutlineRemoveCircle } from "react-icons/md";
const Favorites = () => {
  const { favoritesCurrencies } = useAppSelector((state) => state.user);
  const { selectedRates } = useAppSelector((state) => state.currencies);
  const [displayPopup, setDisplayPopup] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (selectedRates.length > 0) {
      dispatch(resetSelected());
    }
  }, []);

  const displayPopupHandle = () => {
    setDisplayPopup(true);
  };

  const removeManyHandler = () => {
    dispatch(removeManyFavoritesCurrencies(selectedRates));
    dispatch(resetSelected());
    setDisplayPopup(false);
  };
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
          clickHandler={displayPopupHandle}
          buttonType={ButtonFavoritesTypeEnum.REMOVE}
        >
          <MdOutlineRemoveCircle />
        </ButtonFavorites>
      )}
      {displayPopup && (
        <div className="popup">
          <h4>Czy napewno chcesz usunąć zaznaczone waluty z ulubionych?</h4>
          <div className="popup__buttons">
            <button className="btn-yes" onClick={removeManyHandler}>
              Tak
            </button>
            <button className="btn-no" onClick={() => setDisplayPopup(false)}>
              Nie
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Favorites;
