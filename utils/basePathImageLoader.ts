import { ImageLoaderProps } from "next/image";
import { basePath } from "@/next.config";

export default function basePathImageLoader({ src, width }: ImageLoaderProps) {
  if (basePath) {
    return `${basePath}${src}?width=${width}`;
  }

  return `${src}?width=${width}`;
}
