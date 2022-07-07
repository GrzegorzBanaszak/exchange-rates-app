import Navbar from "../../components/Navbar";
import "./dashboard.styles.scss";
import { getCurrencies } from "../../features/currencies/currenciesSlice";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Currency from "../../components/Currency";
const Dashboard = () => {
  const dispatch = useAppDispatch();
  const { rates, reducedRates } = useAppSelector((state) => state.currencies);
  useEffect(() => {
    dispatch(getCurrencies());
  }, []);

  return (
    <section className="dashboard">
      <Navbar />
      {rates &&
        reducedRates.map((rate, index) => (
          <Currency
            key={index}
            currency={rate.currency}
            code={rate.code}
            mid={rate.mid}
          />
        ))}
    </section>
  );
};

export default Dashboard;
