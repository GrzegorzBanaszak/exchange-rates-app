import Navbar from "../../components/Navbar";
import "./dashboard.styles.scss";
import { getCurrencies } from "../../features/currencies/currenciesSlice";
import { useEffect } from "react";
import { useAppDispatch } from "../../app/hooks";
import { Outlet } from "react-router-dom";
const Dashboard = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCurrencies());
  }, []);

  return (
    <section className="dashboard">
      <Navbar />
      <header className="dashboard__header">
        <div className="dashboard__header--title">Nazwa</div>
        <div className="dashboard__header--title">Kurs</div>
      </header>
      <Outlet />
    </section>
  );
};

export default Dashboard;
