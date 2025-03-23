import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Review, CreateReviewDto } from "../types";

const reviewAPI = createApi({
  reducerPath: "reviewAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/r",
  }),
  tagTypes: ["Review"],
  endpoints: (builder) => ({
    getProductReviews: builder.query<Review[], string>({
      query: (productId) => ({
        url: `/${productId}/reviews`,
        method: "GET",
      }),
      providesTags: ["Review"],
    }),

    getUserReviews: builder.query<Review[], void>({
      query: () => ({
        url: "/reviews",
        method: "GET",
      }),
      providesTags: ["Review"],
    }),

    getUserReviewById: builder.query<Review[], string>({
      query: (userId) => ({
        url: `/${userId}/reviews`,
        method: "GET",
      }),
      providesTags: ["Review"],
    }),

    createReview: builder.mutation<
      Review,
      { productId: string; review: CreateReviewDto }
    >({
      query: ({ productId, review }) => ({
        url: `/${productId}/reviews`,
        method: "POST",
        body: review,
      }),
      invalidatesTags: ["Review"],
    }),

    updateReview: builder.mutation<
      Review,
      { productId: string; reviewId: string; review: Partial<CreateReviewDto> }
    >({
      query: ({ productId, reviewId, review }) => ({
        url: `/${productId}/reviews/${reviewId}`,
        method: "PATCH",
        body: review,
      }),
      invalidatesTags: ["Review"],
    }),

    deleteReview: builder.mutation<
      void,
      { productId: string; reviewId: string }
    >({
      query: ({ productId, reviewId }) => ({
        url: `/${productId}/reviews/${reviewId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Review"],
    }),
  }),
});

export const {
  useGetProductReviewsQuery,
  useGetUserReviewsQuery,
  useGetUserReviewByIdQuery,
  useCreateReviewMutation,
  useUpdateReviewMutation,
  useDeleteReviewMutation,
} = reviewAPI;

export default reviewAPI;
