import { CurrenciesState, Rates } from "./../../types";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import currenciesServices from "./currenciesServices";

const initialState: CurrenciesState = {
  effectiveDate: "",
  rates: [],
  reducedRates: [],
  limit: [0, 10],
};

export const getCurrencies = createAsyncThunk(
  "currencies/getcurrencies",
  async (_, thunkAPI) => {
    try {
      return await currenciesServices.getCurrencies();
    } catch (error: any) {
      const message =
        error.response.data.message || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const currenciesSlice = createSlice({
  name: "currencies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        getCurrencies.fulfilled,
        (state, action: PayloadAction<Rates[]>) => {
          state.rates = action.payload;
          state.reducedRates = action.payload.slice(
            state.limit[0],
            state.limit[1]
          );
        }
      )
      .addCase(getCurrencies.rejected, (state, action) => {
        console.log(action.payload);
      });
  },
});

export default currenciesSlice.reducer;
