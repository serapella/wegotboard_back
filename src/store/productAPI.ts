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
        search = undefined,
      }) => {
        console.log("API Query - GetProducts: ");
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

export default productAPI;

export const { useGetProductsQuery } = productAPI;
