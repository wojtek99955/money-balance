import { ExpenseType } from "../Interfaces/Expense";
import { apiSlice } from "./apiSlice";

const expenseApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getExpenses: builder.query<ExpenseType[], any>({
      query: ({ page, category, amount, date, limit, timestamp }) =>
        `/expense?p=${page}&limit=${limit}&category=${category}&timestamp=${timestamp}&amount=${amount}&date=${date}`,
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
    getLatestExpenses: builder.query<ExpenseType[], undefined>({
      query: () => "/expense/latest",
      providesTags: ["Expenses"],
    }),
    getTotalExpense: builder.query<number, undefined>({
      query: () => "expense/total",
      providesTags: ["Expenses"],
    }),
    getSumCategoryExpenses: builder.query<any, undefined>({
      query: () => "expense/sumCategories",
      providesTags: ["Expenses"],
    }),
    getDailySumExpenses: builder.query<number, undefined>({
      query: () => "expense/getDailySum",
      providesTags: ["Expenses"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetExpensesQuery,
  useAddExpensesMutation,
  useUpdateExpenseMutation,
  useGetLatestExpensesQuery,
  useGetTotalExpenseQuery,
  useDeleteExpenseMutation,
  useGetSumCategoryExpensesQuery,
  useGetDailySumExpensesQuery,
} = expenseApiSlice;
