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
  }),
});

export const { useGetGoalsQuery, useAddGoalMutation, useDeleteGoalMutation } =
  goalApiSlice;
