import Link from "next/link";

export default function Home() {
  return (
    <div className={`flex flex-col gap-6`}>
      <h1>Posts</h1>
      <ul className="list-disc pl-12">
        <li>
          <Link href="/finally">Finally, I'm writing a blog.</Link>
        </li>
        <li>
          <Link href={"/next"}>My experience with NextJS</Link>
        </li>
      </ul>
    </div>
  );
}
