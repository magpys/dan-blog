import PostItem from "@/components/PostItem";
import NowBuilding from "@/components/NowBuilding";

type Post = {
  title: string;
  href: string;
  postDate: Date;
};

const posts: Post[] = [
  {
    title: "My philosophy for software development",
    href: "/posts/2024/11/software-development-philosophy-one",
    postDate: new Date("2024-11-05"),
  },
  {
    title: "Retrospectives are the most important Agile meetings",
    href: "/posts/2024/10/retrospectives-are-most-important",
    postDate: new Date("2024-10-29"),
  },
  {
    title: "What I've learned after trying to write for two weeks",
    href: "/posts/2024/10/two-weeks-writing",
    postDate: new Date("2024-10-22"),
  },
  {
    title: `Why I've been avoiding next.js`,
    href: "/posts/2024/10/next",
    postDate: new Date("2024-10-14"),
  },
  {
    title: "The River and the Antler",
    href: "/posts/2025/01/river-and-antler",
    postDate: new Date("2025-01-29"),
  },
];

export default function Home() {
  return (
    <div className={`flex flex-col gap-6`}>
      <NowBuilding />
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
