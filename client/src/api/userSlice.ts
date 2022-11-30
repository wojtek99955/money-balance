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
    deleteUser: builder.mutation({
      query: ({ username }) => ({
        url: "/users",
        method: "DELETE",
        body: { username },
      }),
      invalidatesTags: ["User"],
    }),
    updateUsername: builder.mutation({
      query: ({ username, newUsername }) => ({
        url: "/users",
        method: "PATCH",
        body: {
          username,
          newUsername,
        },
      }),
      invalidatesTags: ["User"],
    }),
  }),

  overrideExisting: false,
});

export const {
  useCreateUserMutation,
  useGetUserQuery,
  useDeleteUserMutation,
  useUpdateUsernameMutation,
} = userSlice;
