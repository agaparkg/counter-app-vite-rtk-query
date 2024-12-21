import {
  useCreatePostMutation,
  useGetPostsQuery,
} from "../redux/postsApiSlice";

const PostsList = () => {
  const { data: posts, isLoading, isError } = useGetPostsQuery();

  console.log(posts);

  const [createPostMutation, { isLoading: isCreatingPost }] =
    useCreatePostMutation();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error...</div>;
  }

  return (
    <div>
      <button
        onClick={() => {
          const post = {
            userId: posts[0].userId,
            id: posts[posts.length - 1].id + 1,
            title: "My new post",
            body: "My new custom body",
          };
          createPostMutation(post);
        }}
      >
        {isCreatingPost ? "Creating..." : "Create Post"}
      </button>
      <ul>
        {posts?.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default PostsList;
