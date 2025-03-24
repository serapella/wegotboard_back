import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User, Review } from "../types";

export const userAPI = createApi({
  reducerPath: "userAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api",
    prepareHeaders: (headers) => {
      // httponly
      return headers;
    },
  }),
  tagTypes: ["User", "Review"],
  endpoints: (builder) => ({
    getProfile: builder.query<User, void>({
      query: () => "/users/profile",
      providesTags: ["User"],
    }),
    updateProfile: builder.mutation<User, Partial<User>>({
      query: (updates) => ({
        url: "/users/profile",
        method: "PATCH",
        body: updates,
      }),
      invalidatesTags: ["User"],
    }),
    getUserReviews: builder.query<Review[], void>({
      query: () => "/users/reviews",
      providesTags: ["Review"],
    }),
    deleteReview: builder.mutation<void, string>({
      query: (reviewId) => ({
        url: `/reviews/${reviewId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Review"],
    }),
    register: builder.mutation<
      User,
      {
        first: string;
        last: string;
        email: string;
        pnumber: string;
        address: string;
        city: string;
        pcode: string;
        country: string;
        region: string;
      }
    >({
      query: (newUser) => ({
        url: "/users/register",
        method: "POST",
        body: newUser,
      }),
    }),
  }),
});

export const {
  useGetProfileQuery,
  useUpdateProfileMutation,
  useGetUserReviewsQuery,
  useDeleteReviewMutation,
  useRegisterMutation,
} = userAPI;

export default userAPI;
