import { GoalPayment } from "../Interfaces/GoalPayment";
import { apiSlice } from "./apiSlice";

const goalPaymentSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getGoalPayment: builder.query<
      { payments: GoalPayment[]; totalPages: number },
      any
    >({
      query: ({ id, page }) => `/goalPayment?id=${id}&p=${page}`,
      providesTags: ["GoalPayment"],
    }),
    addGoalPayment: builder.mutation({
      query: ({ id, deposit }) => ({
        url: "/goalPayment",
        method: "POST",
        body: { id, deposit },
      }),
      invalidatesTags: ["GoalPayment", "Goals"],
    }),
  }),
});

export const { useGetGoalPaymentQuery, useAddGoalPaymentMutation } =
  goalPaymentSlice;
