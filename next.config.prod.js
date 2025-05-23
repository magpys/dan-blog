// eslint-disable-next-line @typescript-eslint/no-require-imports
import createMDX from "@next/mdx";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  output: "export",
  // required for when it is hosted on github pages with an endpoint.
  // basePath: "/dan-blog",
  // assetPrefix: "/dan-blog",
  images: {
    unoptimized: true,
  },
};

export default withMDX(nextConfig);
