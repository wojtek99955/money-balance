import { apiSlice } from "./apiSlice";

const goalPaymentSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getGoalPayment: builder.query<any, any>({
      query: ({ id }) => `/goalPayment?id=${id}`,
      providesTags: ["GoalPayment"],
    }),
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

export const { useGetGoalPaymentQuery, useAddGoalPaymentMutation } =
  goalPaymentSlice;
