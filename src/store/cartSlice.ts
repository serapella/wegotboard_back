import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { type RootState } from ".";
import { type Product, type Cart } from "../types";

const initialState: Cart = {
  _id: "",
  products: [],
  quantity: 0,
};
// TODO
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const existingProduct = state.products.find((product) => product._id === action.payload._id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
      state.quantity += action.payload.quantity;
    },
    deleteProductFromCart: (state, action) => {
      state.cart = state.cart.filter((product) => product._id !== action.payload.id);
    },
    emptyCart: (state) => {
      state.cart = [];
    },
    increment: (state) => {
      state.quantity += 1;
    },
    decrement: (state) => {
      state.quantity -= 1;
    },
    geTotalCartPrice: (state) => {
      state.total = state.products.reduce((acc, product) => acc + product.price, 0);
    },
    // getTotalProductQuantityPrice: (state) => {},
  },
});

export const { deleteProductFromCart, geTotalCartPrice, emptyCart, increment, decrement, addToCart, getTotalProductQuantityPrice } =
  cartSlice.actions;
export const selectCart = (state: RootState) => state.cartSlice.cart;
export default cartSlice.reducer;
