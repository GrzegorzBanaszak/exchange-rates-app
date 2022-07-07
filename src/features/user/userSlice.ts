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
  },
});
export const { addUser, removeUser, addFavoriteCurrency } = userSlice.actions;
export default userSlice.reducer;
