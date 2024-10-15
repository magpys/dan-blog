// eslint-disable-next-line @typescript-eslint/no-require-imports
const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
  output: "export",
  basePath: "/dan-blog",
};

module.exports = withMDX(nextConfig);
