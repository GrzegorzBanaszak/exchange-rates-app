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
  },
});
export const {
  addUser,
  removeUser,
  addFavoriteCurrency,
  addManyFavoritesCurrencies,
} = userSlice.actions;
export default userSlice.reducer;
