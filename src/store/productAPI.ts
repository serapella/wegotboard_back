import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product, ProductQuery } from "../types";

const productAPI = createApi({
  tagTypes: ["Product", "Wishlist"],
  reducerPath: "productAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/p",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], ProductQuery>({
      query: ({
        products = "products",
        page = undefined,
        limit = undefined,
        sort = undefined,
        order = undefined,
        priceMax = undefined,
        playerMin = undefined,
        playerMax = undefined,
        tags = undefined,
        categories = undefined,
        difficulty = undefined,
        duration = undefined,
        ageMin = undefined,
        ageMax = undefined,
        search = undefined,
      }) => {
        return {
          url: `/${products}`,
          method: "GET",
          params: {
            page,
            limit,
            sort,
            order,
            priceMax,
            playerMin,
            playerMax,
            tags,
            categories,
            difficulty,
            duration,
            ageMin,
            ageMax,
            search,
          },
        };
      },
      providesTags: ["Product"],
    }),
    getProductById: builder.query<Product, string>({
      query: (id) => `/products/${id}`,
      providesTags: ["Product"],
    }),
    getWishlist: builder.query<Product[], void>({
      query: () => "/wishlist",
      providesTags: ["Wishlist"],
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery, useGetWishlistQuery } = productAPI;
export default productAPI;
