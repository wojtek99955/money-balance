import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const expensesApiSlice = createApi({
  reducerPath: "expenses",

  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3500",
    credentials: "include",
  }),
  tagTypes: ["Expenses"],
  endpoints: (builder) => ({
    getExpenses: builder.query<any, undefined>({
      query: () => "/expense",
      providesTags: ["Expenses"],
    }),
    addExpenses: builder.mutation({
      query: (expense) => ({
        url: "/expense",
        method: "POST",
        body: expense,
      }),
      invalidatesTags: ["Expenses"],
    }),
  }),
});

export const { useGetExpensesQuery, useAddExpensesMutation } = expensesApiSlice;
