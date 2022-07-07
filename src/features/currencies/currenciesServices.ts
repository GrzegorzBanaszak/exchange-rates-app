import axios from "axios";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

const getCurrencies = async () => {
  const res1 = await axios.get(
    "http://api.nbp.pl/api/exchangerates/tables/a/",
    config
  );
  const res2 = await axios.get(
    "http://api.nbp.pl/api/exchangerates/tables/b/",
    config
  );

  const res3 = await axios.get(
    "http://api.nbp.pl/api/exchangerates/tables/c/",
    config
  );

  return [...res1.data[0].rates, ...res2.data[0].rates, ...res2.data[0].rates];
};

const currenciesServices = { getCurrencies };
export default currenciesServices;
