import { apiSlice } from "./apiSlice";

export const avatarSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addAvatar: builder.mutation({
      query: (formData) => ({
        url: "/avatar",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["Avatar"],
    }),
    getAvatar: builder.query<any, undefined>({
      query: () => "/avatar",
      providesTags: ["Avatar"],
    }),
    deleteAvatar: builder.mutation({
      query: () => ({
        url: "/avatar",
        method: "DELETE",
      }),
      invalidatesTags: ["Avatar"],
    }),
  }),
});

export const {
  useGetAvatarQuery,
  useAddAvatarMutation,
  useDeleteAvatarMutation,
} = avatarSlice;
