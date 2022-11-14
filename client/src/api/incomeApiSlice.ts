import { apiSlice } from "./apiSlice";

const incomeApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getIncomes: builder.query<any, any>({
      query: (page = 0) => `/income?p=${page}`,
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
    getTotalIncome: builder.query<any, undefined>({
      query: () => "income/total",
      providesTags: ["Incomes"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetIncomesQuery,
  useAddIncomesMutation,
  useDeleteIncomeMutation,
  useUpdateIncomeMutation,
  useGetLatestIncomesQuery,
  useGetTotalIncomeQuery,
} = incomeApiSlice;