import Link from "next/link";

export default function PostItem({
  title,
  href,
  postDate,
  tags = [],
}: {
  title: string;
  href: string;
  postDate: Date;
  tags: string[];
}): JSX.Element {
  return (
    <div className="flex gap-6">
      <p className="text-4xl">-</p>
      <div className="flex flex-col">
        <Link href={href}>{title}</Link>
        <div className="flex flex-row gap-3">
          {tags.map((tag) => (
            <p key={`${title}-${tag}`} className={"italic text-sm"}>
              {tag}
            </p>
          ))}
          <p className="italic"></p>
        </div>
        <p className="text-gray-600 text-md">
          {postDate.toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "2-digit" })}
        </p>
      </div>
    </div>
  );
}
