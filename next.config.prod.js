// eslint-disable-next-line @typescript-eslint/no-require-imports
import createMDX from "@next/mdx";

export const basePath = "/dan-blog";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  output: "export",
  basePath: basePath,
  assetPrefix: "/dan-blog",
  images: {
    unoptimized: true,
    loader: "custom",
    loaderFile: "/utils/basePathImageLoader.ts",
  },
};

export default withMDX(nextConfig);
