import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UserReview, CreateReviewDto } from "../types";

const reviewAPI = createApi({
  reducerPath: "reviewAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as any).auth?.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Review"],
  endpoints: (builder) => ({
    getUserReviews: builder.query<UserReview[], void>({
      query: () => "/users/reviews",
      providesTags: ["Review"],
    }),
    getUserReviewById: builder.query<UserReview[], string>({
      query: (userId) => `/users/${userId}/reviews`,
      providesTags: ["Review"],
    }),
    createReview: builder.mutation<
      UserReview,
      { userId: string; review: CreateReviewDto }
    >({
      query: ({ userId, review }) => ({
        url: `/users/${userId}/reviews`,
        method: "POST",
        body: review,
      }),
      invalidatesTags: ["Review"],
    }),
  }),
});

export const {
  useGetUserReviewsQuery,
  useGetUserReviewByIdQuery,
  useCreateReviewMutation,
} = reviewAPI;

export default reviewAPI;
