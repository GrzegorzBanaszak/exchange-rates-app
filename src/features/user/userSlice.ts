import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Rates, UserState } from "../../types";

const initialState: UserState = {
  user: "",
  favoritesCurrencies: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<string>) => {
      state.user = action.payload;
    },
    removeUser: (state) => {
      state.user = "";
    },
    addFavoriteCurrency: (state, action: PayloadAction<Rates>) => {
      const currency = state.favoritesCurrencies.find(
        (c) => c.currency === action.payload.currency
      );

      if (currency) {
        state.favoritesCurrencies.splice(
          state.favoritesCurrencies.indexOf(currency),
          1
        );
      } else {
        state.favoritesCurrencies.push(action.payload);
      }
    },
    addManyFavoritesCurrencies: (state, action: PayloadAction<Rates[]>) => {
      action.payload.forEach((currency) => {
        if (
          !state.favoritesCurrencies.some(
            (c) => c.currency === currency.currency
          )
        ) {
          state.favoritesCurrencies.push(currency);
        }
      });
    },
    removeManyFavoritesCurrencies: (state, action: PayloadAction<Rates[]>) => {
      action.payload.forEach((currency) => {
        const currencyToRemove = state.favoritesCurrencies.find(
          (c) => c.currency === currency.currency
        );

        if (currencyToRemove) {
          state.favoritesCurrencies.splice(
            state.favoritesCurrencies.indexOf(currencyToRemove),
            1
          );
        }
      });
    },
  },
});
export const {
  addUser,
  removeUser,
  addFavoriteCurrency,
  addManyFavoritesCurrencies,
  removeManyFavoritesCurrencies,
} = userSlice.actions;
export default userSlice.reducer;
