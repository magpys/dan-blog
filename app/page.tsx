import PostItem from "@/components/PostItem";

type Post = {
  title: string;
  href: string;
  postDate: Date;
};

const posts: Post[] = [
  {
    title: "Retrospectives are the most important Agile meetings",
    href: "/retrospectives-are-most-important",
    postDate: new Date("2024-10-29"),
  },
  {
    title: "What I've learned after trying to write for two weeks",
    href: "/two-weeks-writing",
    postDate: new Date("2024-10-22"),
  },
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
