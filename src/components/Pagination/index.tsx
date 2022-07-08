import {
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlineDoubleRight,
  AiOutlineDoubleLeft,
} from "react-icons/ai";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import "./pagination.styles.scss";
import {
  setLimit,
  setReducedRates,
} from "../../features/currencies/currenciesSlice";
import { useEffect } from "react";
const Pagination = () => {
  const { limit, rates } = useAppSelector((state) => state.currencies);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setReducedRates());
  }, [limit]);

  const handleChangeLimit = (number: number, type: string) => {
    const upperLimit = Math.floor(rates.length / 10);
    if (type === "increase" && number <= upperLimit) {
      dispatch(setLimit([limit[0] + 10, limit[1] + 10]));
    }
    if (type === "decrease" && number > 0) {
      dispatch(setLimit([limit[0] - 10, limit[1] - 10]));
    }
  };

  return (
    <div className="pagination">
      <AiOutlineLeft
        onClick={() => handleChangeLimit((limit[1] - 10) / 10, "decrease")}
      />
      <div className="pagination__location">{limit[1] / 10}</div>
      <AiOutlineRight
        onClick={() => handleChangeLimit((limit[1] + 10) / 10, "increase")}
      />
    </div>
  );
};

export default Pagination;
