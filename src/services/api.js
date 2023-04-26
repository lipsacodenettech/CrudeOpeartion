/* eslint-disable no-labels */
/* eslint-disable no-unused-expressions */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import secureLocalStorage from "react-secure-storage";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_BASE_URL,
  prepareHeaders: (headers) => {
    let token = secureLocalStorage.getItem("token");
    headers.set("Authorization", `Bearer ${token}`);
    return headers;
  },
});
export const carApi = createApi({
  reducerPath: "carApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (data) => ({
        url: `login`,
        method: "post",
        body: data,
      }),
    }),
    registerUser: builder.mutation({
      query: (data) => ({
        url: `register`,
        method: "post",
        body: data,
      }),
    }),
    getAllCar: builder.query({
      query: () => ({
        url: `cars/getdata`,
        method: "GET",
      }),
    }),
    DeleteCar: builder.mutation({
      query: (id) => ({
        url: `cars/deletedata/${id}`,
        method: "DELETE",
      }),
    }),
    InsertNewCar: builder.mutation({
      query: (newcar) => ({
        url: "cars/insert",
        method: "POST",
        body: newcar,
      }),
    }),
    UpdateCar: builder.mutation({
      query: (update) => ({
        url: `cars/update/${update.SelectedId}`,
        method: "PUT",
        body: update.formdata,
      }),
    }),
  }),
});
export const {
  useLoginUserMutation,
  useRegisterUserMutation,
  useLazyGetAllCarQuery,
  useDeleteCarMutation,
  useInsertNewCarMutation,
  useUpdateCarMutation,
} = carApi;
