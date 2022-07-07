import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "../../types";

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
  },
});
export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
