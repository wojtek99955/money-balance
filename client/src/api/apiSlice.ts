import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "expenses",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://money-balance.netlify.app/",
    credentials: "include",
  }),
  tagTypes: ["Expenses", "Incomes", "Avatar", "User", "Goals", "GoalPayment"],
  endpoints: () => ({}),
});
