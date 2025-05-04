import PostItem from "@/components/PostItem";
import { getPostsWithMetadata } from "@/utils/getPostsWithMetadata";

export default async function Home() {
  const posts = await getPostsWithMetadata();

  return (
    <div className={`flex flex-col gap-6`}>
      <h1>Posts</h1>
      <ul className="list-none space-y-3">
        {posts
          .sort((a, b) => b.postDate.getTime() - a.postDate.getTime())
          .map((post) => (
            <PostItem
              key={post.title}
              postDate={post.postDate}
              href={`/posts/${post.slug}`}
              title={post.title}
              tags={post.tags}
            />
          ))}
      </ul>
    </div>
  );
}
