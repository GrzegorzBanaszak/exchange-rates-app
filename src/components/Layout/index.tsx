import { Outlet } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import AddMany from "../AddMany";
import "./layout.styles.scss";
import { addManyFavoritesCurrencies } from "../../features/user/userSlice";
import { resetSelected } from "../../features/currencies/currenciesSlice";
const Layout = () => {
  const { selectedRates } = useAppSelector((state) => state.currencies);
  const dispatch = useAppDispatch();
  const addManyHandler = () => {
    dispatch(addManyFavoritesCurrencies(selectedRates));
    dispatch(resetSelected());
  };
  return (
    <section className="layout" style={{ backgroundImage: `url(bg.jpg)` }}>
      <span
        className="layout__info"
        role="img"
        aria-label="Photo by Nick Chong on Unsplash"
      ></span>
      <Outlet />
      {selectedRates.length > 0 && <AddMany clickHandler={addManyHandler} />}
    </section>
  );
};

export default Layout;
