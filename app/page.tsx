import PostItem from "@/components/PostItem";

type Post = {
  title: string;
  href: string;
  postDate: Date;
};

const posts: Post[] = [
  {
    title: `Why I've been avoiding next.js`,
    href: "/next",
    postDate: new Date("2024-10-14"),
  },
];

export default function Home() {
  return (
    <div className={`flex flex-col gap-6`}>
      <h1>Posts</h1>
      <ul className="list-none space-y-3">
        {posts.map((post) => (
          <PostItem
            key={post.title}
            postDate={post.postDate}
            href={post.href}
            title={post.title}
          />
        ))}
      </ul>
    </div>
  );
}
