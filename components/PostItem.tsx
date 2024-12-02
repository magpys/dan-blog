import Link from "next/link";

export default function PostItem({
  title,
  href,
  postDate,
}: {
  title: string;
  href: string;
  postDate: Date;
}): JSX.Element {
  return (
    <div className="flex gap-6">
      <p className="text-4xl">-</p>
      <div className="flex flex-col">
        <Link href={href}>{title}</Link>
        <p className="text-gray-600 text-md">{postDate.toLocaleDateString('en-GB', { year: "numeric", month: "long", day: "2-digit" })}</p>
      </div>
    </div>
  );
}
