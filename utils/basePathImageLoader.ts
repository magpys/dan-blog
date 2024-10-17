import { ImageLoaderProps } from "next/image";
import getConfig from "next/config";

export default function basePathImageLoader({ src, width }: ImageLoaderProps) {
  const { basePath } = getConfig();

  if (basePath) {
    return `${basePath}${src}?width=${width}`;
  }

  return `${src}?width=${width}`;
}
