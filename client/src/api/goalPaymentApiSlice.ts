import { apiSlice } from "./apiSlice";

const goalPaymentSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addGoalPayment: builder.mutation({
      query: ({ id, deposit }) => ({
        url: "/goalPayment",
        method: "POST",
        body: { id, deposit },
      }),
      invalidatesTags: ["GoalPayment"],
    }),
  }),
});

export const { useAddGoalPaymentMutation } = goalPaymentSlice;
