// eslint-disable-next-line @typescript-eslint/no-require-imports
import createMDX from "@next/mdx";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  output: "export",
  basePath: "/dan-blog",
  assetPrefix: "/dan-blog",
  images: {
    unoptimized: true,
    loader: "custom",
    loaderFile: "/utils/basePathImageLoader.ts",
  },
};

export default withMDX(nextConfig);
