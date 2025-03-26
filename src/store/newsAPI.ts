import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { NewsFeed } from "../types";

const newsAPI = createApi({
  reducerPath: "newsAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://wegotboard-back-j6lv.onrender.com/api/news",
  }),
  endpoints: (builder) => ({
    getNews: builder.query<NewsFeed, void>({
      query: () => ({
        url: "/",
        method: "GET",
      }),
    }),
  }),
});

export default newsAPI;
export const { useGetNewsQuery } = newsAPI;
