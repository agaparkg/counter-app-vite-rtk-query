import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postsApiSlice = createApi({
  reducerPath: "posts",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://61008c3dbca46600171cf917.mockapi.io/api/v1",
  }),
  endpoints: (builder) => {
    return {
      getPosts: builder.query({
        query: () => `/fake-posts`,
      }),
      createPost: builder.mutation({
        query: (post) => ({
          url: "/fake-posts",
          method: "POST",
          body: post,
        }),
      }),
    };
  },
});

export const { useGetPostsQuery, useCreatePostMutation } = postsApiSlice;
