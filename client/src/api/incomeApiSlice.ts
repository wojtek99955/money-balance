import { IncomeType } from "../Interfaces/Income";
import { apiSlice } from "./apiSlice";

const incomeApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getIncomes: builder.query<
      { incomes: IncomeType[]; totalPages: number },
      any
    >({
      query: ({ page, category, amount, timestamp, limit, date }) =>
        `/income?p=${page}&limit=${limit}&category=${category}&timestamp=${timestamp}&amount=${amount}&date=${date}`,
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
    getLatestIncomes: builder.query<{ incomes: IncomeType[] }, undefined>({
      query: () => "/income/latest",
      providesTags: ["Incomes"],
    }),
    getTotalIncome: builder.query<
      { _id: number; totalIncome: number }[],
      undefined
    >({
      query: () => "income/total",
      providesTags: ["Incomes"],
    }),
    getDailySumIncomes: builder.query<any, any>({
      query: ({ dateRange }) => `income/dailySum?dateRange=${dateRange}`,
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
  useGetDailySumIncomesQuery,
} = incomeApiSlice;
