// eslint-disable-2024-10-next-line @typescript-eslint/no-require-imports
import createMDX from "@next/mdx";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default withMDX(nextConfig);
