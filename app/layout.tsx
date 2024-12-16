import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import Script from "next/script";

const montserrat = Montserrat({ subsets: ["latin"] });

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
    <html lang="en" className={montserrat.className}>
      <head>
        <Script
          src="//gc.zgo.at/count.js"
          data-goatcounter="https://magpys.goatcounter.com/count"
          strategy="lazyOnload"
        />
        <title>Magpys</title>
      </head>
      <body className={`antialiased min-h-screen`}>
        <header className={`bg-gray-800 flex items-center justify-between p-6`}>
          <Link href={"/"} className={"flex gap-6 items-center"}>
            <Image
              src={`magpie.png`}
              alt="An iconised magpie"
              width={32}
              height={32}
              unoptimized
            />
            <div
              className={`text-4xl text-orange-400 font-bold hidden sm:block`}
            >
              Magpys
            </div>
          </Link>

          <nav className="flex items-center justify-between gap-6 font-normal">
            <Link href="/">Posts</Link>
            <Link href={"/about"}>About</Link>
          </nav>
        </header>
        <main className="mx-auto p-6 max-w-3xl space-y-6">{children}</main>
      </body>
    </html>
  );
}
