import { CurrenciesState } from "./../../types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: CurrenciesState = {
  effectiveDate: "",
  rates: [],
};

export const currenciesSlice = createSlice({
  name: "currencies",
  initialState,
  reducers: {},
});

export default currenciesSlice.reducer;
