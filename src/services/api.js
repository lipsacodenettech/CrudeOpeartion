/* eslint-disable no-labels */
/* eslint-disable no-unused-expressions */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
let headers = {}
if (localStorage.token) {
    headers = { 'Authorization': `bearer ` +  (localStorage.token) }
    console.log("token from api ",headers);
}
export const carApi = createApi({
  reducerPath: "carApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
     headers: headers 
    // prepareHeaders: (headers) => {
    //   headers.set(
    //     "Authorization",
    //     "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImxpcHNhQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiMTIzNDUiLCJpYXQiOjE2ODExODg3MTR9.UjwNxXB8fz6pbf1LbZX27oNmxzngT56AU_w4B4qY-Vk"
    //   );
    //   return headers;
    // },
  }),
  endpoints: (builder) => ({
    getAllCar: builder.query({
      query: () => ({
        url: `getdata`,
        method: "GET",
      }),
    }),
    DeleteCar: builder.mutation({
      query: (id) => ({
        url: `deletedata/${id}`,
        method: "DELETE",
      }),
    }),
    InsertNewCar: builder.mutation({
      query: (newcar) => ({
        url: "insert",
        method: "POST",
        body: newcar,
      }),
    }),
    UpdateCar: builder.mutation({
      query: (update) => ({
        url: `update/${update.SelectedId}`,
        method: "PUT",
        body: update.carData,
      }),
    }),
  }),
});
export const {
  useLazyGetAllCarQuery,
  useDeleteCarMutation,
  useInsertNewCarMutation,
  useUpdateCarMutation,
} = carApi;
