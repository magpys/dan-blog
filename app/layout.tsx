import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Magpys",
  description: "Magpys Blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased min-h-screen`}>
        <header className={`bg-gray-800 flex items-center justify-between p-6`}>
          <Link href={"/"} className={"flex gap-6 items-center"}>
            <Image
              src="/icon.png"
              alt="An iconised magpie"
              width={32}
              height={32}
            />
            <div className={`text-4xl text-orange-400 bold hidden sm:block`}>
              Magpys
            </div>
          </Link>

          <nav className="flex items-center justify-between gap-6">
            <Link href="/">Posts</Link>
            <Link href={"/about"}>About</Link>
          </nav>
        </header>
        <main className="mx-auto p-6 max-w-2xl space-y-6">{children}</main>
      </body>
    </html>
  );
}
