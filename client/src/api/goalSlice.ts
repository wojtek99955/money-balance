import { Goal } from "../Interfaces/Goal";
import { apiSlice } from "./apiSlice";

const goalApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getGoals: builder.query<{ goal: Goal; daysLeft: number }[], any>({
      query: ({ acheived }) => `/goal?acheived=${acheived}`,
      providesTags: ["Goals"],
    }),
    addGoal: builder.mutation({
      query: (goal) => ({
        url: "/goal",
        method: "POST",
        body: goal,
      }),
      invalidatesTags: ["Goals"],
    }),
    deleteGoal: builder.mutation({
      query: ({ id }) => ({
        url: "/goal",
        method: "DELETE",
        body: { id },
      }),
      invalidatesTags: ["Goals"],
    }),
    updateGoal: builder.mutation({
      query: ({ id, amount, category, description }) => ({
        url: "/goal",
        method: "PATCH",
        body: {
          id,
          amount,
          description,
          category,
        },
      }),
      invalidatesTags: ["Goals"],
    }),
    getTotalAmount: builder.query<number, undefined>({
      query: () => "/goal/get-total-amount",
      providesTags: ["Goals"],
    }),
  }),
});

export const {
  useGetGoalsQuery,
  useAddGoalMutation,
  useDeleteGoalMutation,
  useUpdateGoalMutation,
  useGetTotalAmountQuery,
} = goalApiSlice;
