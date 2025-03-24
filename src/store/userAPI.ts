import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User, Review, RegisterCredentials } from "../types";

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
    register: builder.mutation<User, RegisterCredentials>({
      query: (credentials) => ({
        url: "/users/register",
        method: "POST",
        body: credentials,
      }),
    }),
    login: builder.mutation<
      { user: User; token: string },
      { email: string; password: string }
    >({
      query: (credentials) => ({
        url: "/users/login",
        method: "POST",
        body: credentials,
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
  useLoginMutation,
} = userAPI;

export default userAPI;
