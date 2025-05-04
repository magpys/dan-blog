import fs from "fs";
import path from "path";
import { PostLink } from "@/utils/PostLink";

const POSTS_PATH = path.join(process.cwd(), "app/posts");

export async function getPostsWithMetadata(): Promise<PostLink[]> {
  const postDirs = fs.readdirSync(POSTS_PATH).filter((name) => {
    const fullPath = path.join(POSTS_PATH, name);
    return fs.statSync(fullPath).isDirectory() && fs.existsSync(path.join(fullPath, "metadata.ts"));
  });

  return await Promise.all(
    postDirs.map(async (slug) => {
      const metadataModule = await import(`../app/posts/${slug}/metadata.ts`);
      return { slug, ...metadataModule.metadata };
    }),
  );
}
