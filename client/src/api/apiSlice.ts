import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "expenses",

  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3500",
    credentials: "include",
  }),
  tagTypes: ["Expenses", "Incomes", "Avatar", "User"],
  endpoints: () => ({}),
});
