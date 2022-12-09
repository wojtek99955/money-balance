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
  }),
});

export const { useGetGoalsQuery, useAddGoalMutation } = goalApiSlice;
