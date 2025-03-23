import { createSlice } from "@reduxjs/toolkit/react";
import { type RootState } from ".";
import { type Cart } from "../types";

const initialState: Cart = { itemList: [], totalQuantity: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.itemList.find(
        (item) => item.product._id === newItem.product._id
      );
      if (existingItem) {
        console.log("existingItem", existingItem, existingItem.quantity);
        existingItem.quantity += action.payload.quantity
          ? action.payload.quantity
          : 1;
        existingItem.totalPrice =
          existingItem.product.price * existingItem.quantity;
      } else {
        state.itemList.push({
          ...action.payload,
          totalPrice: action.payload.totalPrice,
          quantity: 1,
        });
      }
    },
    removeFromCart(state, action) {
      const findItem = state.itemList.filter(
        (item) => item.product._id === action.payload.product._id
      )[0];
      // console.log("findItem", findItem.product._id);
      if (findItem)
        if (findItem.quantity == 1) {
          state.itemList = state.itemList.filter(
            (item) => item.product._id != action.payload.product._id
          );
        } else {
          findItem.quantity--;
          findItem.totalPrice -= findItem.product.price;
        }
    },
    deleteFromCart(state, action) {
      state.itemList = state.itemList.filter(
        (item) => item.product._id != action.payload._id
      );
    },
    clearCart(state) {
      state.itemList = [];
      state.totalQuantity = 0;
    },
  },
});

export const { addToCart, removeFromCart, deleteFromCart, clearCart } =
  cartSlice.actions;
export const getCartItems = (state: RootState) => state.cartSlice.itemList;
export default cartSlice.reducer;
