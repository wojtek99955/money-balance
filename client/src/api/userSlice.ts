import { apiSlice } from "./apiSlice";

const userSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (user) => ({
        url: "/users",
        method: "POST",
        body: user,
      }),
    }),
    getUser: builder.query<any, any>({
      query: () => "/users",
      providesTags: ["User"],
    }),
  }),
  overrideExisting: false,
});

export const { useCreateUserMutation, useGetUserQuery } = userSlice;
