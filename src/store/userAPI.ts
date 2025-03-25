import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  User,
  UserResponse,
  LoginCredentials,
  RegisterCredentials,
  ApiError,
  Product,
} from "../types";

export const userAPI = createApi({
  reducerPath: "userAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://wegotboard-back-j6lv.onrender.com/u",
    // credentials: "include",
    // prepareHeaders: (headers, { getState }) => {
    //   const token = (getState() as any).auth?.token;
    //   if (token) {
    //     headers.set("authorization", `Bearer ${token}`);
    //   }
    //   return headers;
    // },
  }),
  tagTypes: ["User", "Wishlist"],
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
    register: builder.mutation<UserResponse, RegisterCredentials>({
      query: (credentials) => ({
        url: "/user/create",
        method: "POST",
        body: credentials,
      }),
      transformErrorResponse: (response: ApiError) => {
        console.log(response);
        return {
          status: response.status,
          message: response?.data?.message || "Registration failed",
        };
      },
    }),
    login: builder.mutation<UserResponse, LoginCredentials>({
      query: (credentials) => ({
        url: "/user/login",
        method: "POST",
        body: credentials,
      }),
      transformErrorResponse: (response: ApiError) => {
        return {
          status: response.status,
          message: response?.data?.message || "Login failed",
        };
      },
    }),
    getWishlist: builder.query<Product[], { id: string; token: string }>({
      query: ({ id, token }) => `/users/${id}/wishlist?token=${token}`,
      providesTags: ["Wishlist"],
    }),
    addToWishlist: builder.mutation<
      void,
      { userId: string; token: string; productId: string }
    >({
      query: ({ userId, token, productId }) => ({
        url: `/users/${userId}/wishlist?token=${token}`,
        method: "POST",
        body: { productId },
      }),
      invalidatesTags: ["Wishlist"],
    }),
    removeFromWishlist: builder.mutation<
      void,
      { productId: string; userId: string; token: string }
    >({
      query: ({ productId, userId, token }) => ({
        url: `/users/${userId}/wishlist/${productId}?token=${token}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Wishlist"],
    }),
  }),
});

export const {
  useGetProfileQuery,
  useUpdateProfileMutation,
  useRegisterMutation,
  useLoginMutation,
  useGetWishlistQuery,
  useAddToWishlistMutation,
  useRemoveFromWishlistMutation,
} = userAPI;

export default userAPI;
