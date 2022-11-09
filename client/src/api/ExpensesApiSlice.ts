import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const expensesApiSlice = createApi({
  reducerPath: "expenses",

  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3500",
    credentials: "include",
  }),
  tagTypes: ["Expenses", "Incomes"],
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
    deleteExpense: builder.mutation({
      query: ({ id }) => ({
        url: "/expense",
        method: "DELETE",
        body: { id },
      }),
      invalidatesTags: ["Expenses"],
    }),
    getIncomes: builder.query<any, undefined>({
      query: () => "/income",
      providesTags: ["Incomes"],
    }),
    addIncomes: builder.mutation({
      query: (income) => ({
        url: "/income",
        method: "POST",
        body: income,
      }),
    }),
  }),
});

export const {
  useGetExpensesQuery,
  useAddExpensesMutation,
  useDeleteExpenseMutation,
  useGetIncomesQuery,
  useAddIncomesMutation,
} = expensesApiSlice;
