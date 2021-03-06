import { CurrenciesState, Rates } from "./../../types";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import currenciesServices from "./currenciesServices";

const initialState: CurrenciesState = {
  effectiveDate: "",
  isLoading: false,
  rates: [],
  reducedRates: [],
  limit: [0, 10],
  selectedRates: [],
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
  reducers: {
    addToSelected: (state, action: PayloadAction<Rates>) => {
      const rate = state.selectedRates.find(
        (rate) => rate.code === action.payload.code
      );
      if (rate) {
        state.selectedRates.splice(state.selectedRates.indexOf(rate), 1);
      } else {
        state.selectedRates.push(action.payload);
      }
    },
    resetSelected: (state) => {
      state.selectedRates = [];
    },
    setLimit: (state, action: PayloadAction<[number, number]>) => {
      state.limit = action.payload;
    },
    setReducedRates: (state) => {
      state.reducedRates = state.rates.slice(state.limit[0], state.limit[1]);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCurrencies.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getCurrencies.fulfilled,
        (state, action: PayloadAction<Rates[]>) => {
          state.isLoading = false;
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
export const { addToSelected, resetSelected, setLimit, setReducedRates } =
  currenciesSlice.actions;
export default currenciesSlice.reducer;
