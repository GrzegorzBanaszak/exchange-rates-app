import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "../../types";

const initialState: UserState = {
  user: "",
  favoritesCurrencies: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
