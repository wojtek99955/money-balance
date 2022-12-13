import { apiSlice } from "./apiSlice";

const goalApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getGoals: builder.query<any, undefined>({
      query: () => "/goal",
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
      query: ({ id, amount, deposit, category, description }) => ({
        url: "/goal",
        method: "PATCH",
        body: {
          id,
          amount,
          deposit,
          description,
          category,
        },
      }),
      invalidatesTags: ["Goals"],
    }),
    updateDeposit: builder.mutation({
      query: ({ id, amount, deposit }) => ({
        url: "/goal/updateDeposit",
        method: "PATCH",
        body: {
          id,
          amount,
          deposit,
        },
      }),
      invalidatesTags: ["Goals"],
    }),
  }),
});

export const {
  useGetGoalsQuery,
  useAddGoalMutation,
  useDeleteGoalMutation,
  useUpdateGoalMutation,
  useUpdateDepositMutation,
} = goalApiSlice;
