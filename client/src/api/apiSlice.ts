import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "expenses",

  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3500",
    credentials: "include",
  }),
  tagTypes: ["Expenses", "Incomes"],
  endpoints: (builder) => ({
    getExpenses: builder.query<any, any>({
      query: (page = 1) => `/expense?p=${page}`,
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
    updateExpense: builder.mutation({
      query: ({ id, amount, username, category }) => ({
        url: "/expense",
        method: "PATCH",
        body: {
          id,
          amount,
          username,
          category,
        },
      }),
      invalidatesTags: ["Expenses"],
    }),
    getLatestExpenses: builder.query<any, undefined>({
      query: () => "/expense/latest",
      providesTags: ["Expenses"],
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
      invalidatesTags: ["Incomes"],
    }),
    deleteIncome: builder.mutation({
      query: ({ id }) => ({
        url: "/income",
        method: "DELETE",
        body: { id },
      }),
      invalidatesTags: ["Incomes"],
    }),
    updateIncome: builder.mutation({
      query: ({ id, amount, username, category }) => ({
        url: "/income",
        method: "PATCH",
        body: {
          id,
          amount,
          username,
          category,
        },
      }),
      invalidatesTags: ["Incomes"],
    }),
    getLatestIncomes: builder.query<any, undefined>({
      query: () => "/income/latest",
      providesTags: ["Incomes"],
    }),
  }),
});

export const {
  useGetExpensesQuery,
  useAddExpensesMutation,
  useDeleteExpenseMutation,
  useGetIncomesQuery,
  useAddIncomesMutation,
  useDeleteIncomeMutation,
  useUpdateExpenseMutation,
  useUpdateIncomeMutation,
  useGetLatestExpensesQuery,
  useGetLatestIncomesQuery,
} = apiSlice;
