import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { type RootState } from ".";
import { type Product, type Cart } from "../types";

const initialState: Cart = {
  items: [],
};
// TODO
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (
      state,
      { payload }: PayloadAction<Pick<Product, "_id"> & { quantity?: number }>
    ) => {
      const item = state.items.find((item) => item.product === payload._id);
      if (item) {
        item.quantity += payload.quantity ? payload.quantity : 1;
      } else {
        state.items.push({ product: payload._id, quantity: 1 });
      }
    },
    removeFromCart: (
      state,
      { payload }: PayloadAction<Pick<Product, "_id"> & { removeAll?: boolean }>
    ) => {
      const item = state.items.find((item) => item.product === payload._id);
      if (item) {
        if (item.quantity > 1 && !payload.removeAll) {
          item.quantity -= 1;
        } else {
          state.items = state.items.filter(
            (item) => item.product !== payload._id
          );
        }
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
    getTotalCartPrice: () => {},
    // getTotalProductQuantityPrice: () => {},
  },
});

export const { addToCart } = cartSlice.actions;
export const selectCart = (state: RootState) => state.cartSlice.items;
export default cartSlice.reducer;
