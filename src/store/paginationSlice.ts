import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../types";

interface ProductListState {
  currentPage: number;
  productsPerPage: number;
  totalPages: number;
  products: Product[];
}

const initialState: ProductListState = {
  currentPage: 1,
  productsPerPage: 9,
  totalPages: 1,
  products: [],
};

const productGridSlice = createSlice({
  name: "productGrid",
  initialState, // Set the initial state
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      console.log("Set Current Page was called !", action.payload);
      state.currentPage = action.payload;
    },
    setTotalPages: (state, action: PayloadAction<number>) => {
      console.log("Set Total Pages was called !", action.payload);
      state.totalPages = action.payload;
    },
    setProducts: (state, action: PayloadAction<Product[]>) => {
      console.log("Set Products was called !");
      state.products = action.payload;
    },
  },
});

export const { setCurrentPage, setTotalPages, setProducts } =
  productGridSlice.actions;
export default productGridSlice.reducer;
