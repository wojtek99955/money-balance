import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const expensesApiSlice = createApi({
  reducerPath: "expenses",

  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3500",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    getExpenses: builder.query<any, undefined>({
      query: () => "/expense",
    }),
    addExpenses: builder.mutation({
      query: (expense) => ({
        url: "/expense",
        method: "POST",
        body: expense,
      }),
    }),
  }),
});

export const { useGetExpensesQuery, useAddExpensesMutation } = expensesApiSlice;
