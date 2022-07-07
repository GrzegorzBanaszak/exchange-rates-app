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
      <Outlet />
    </section>
  );
};

export default Dashboard;
