import { apiSlice } from "./apiSlice";

const expenseApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getExpenses: builder.query<any, any>({
      query: ({ page, category, amount, date, limit }) =>
        `/expense?p=${page}&limit=${limit}&category=${category}&date=${date}&amount=${amount}`,
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
    getTotalExpense: builder.query<any, undefined>({
      query: () => "expense/total",
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
} = expenseApiSlice;
