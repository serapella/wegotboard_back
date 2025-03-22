import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product, ProductQuery } from "../types";

const productAPI = createApi({
  tagTypes: ["Product"],
  reducerPath: "productAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/p",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], ProductQuery>({
      query: ({
        products = "products",
        page = 0,
        limit = 15,
        sort = undefined,
        order = undefined,
        priceMax = 999,
        playerMin = 1,
        playerMax = 99,
        tags = undefined,
        categories = undefined,
        difficulty = undefined,
        duration = undefined,
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
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = productAPI;
export default productAPI;
