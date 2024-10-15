// eslint-disable-next-line @typescript-eslint/no-require-imports
const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  output: "export",
  basePath: "/dan-blog",
  assetsDir: "/dan-blog/",
  images: { unoptimized: true },
};

module.exports = withMDX(nextConfig);
