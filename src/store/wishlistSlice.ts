import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../types";

interface WishlistState {
  items: Product[]; // Ensure `items` exists in the state
}

const initialState: WishlistState = {
  items: [], // Initialize an empty array
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<Product>) => {
      if (!state.items.find((item) => item._id === action.payload._id)) {
        state.items.push(action.payload);
      }
    },
    removeFromWishlist: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item._id !== action.payload);
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;

export type { WishlistState };
