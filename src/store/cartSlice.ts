import { createSlice } from "@reduxjs/toolkit";
import { type RootState } from ".";

// TODO
const cartSlice = createSlice({
  name: "cart",
  initialState: { cart: null },
  reducers: {},
});

export const {} = cartSlice.actions;
export const selectCart = (state: RootState) => state.cartSlice.cart;
export default cartSlice.reducer;
