import * as fs from "fs/promises";
import path from "path";
import { AppProps } from "next/app";
import { Post } from "@/types";
import grayMatter from "gray-matter";

import BlogClient from "./BlogClient";

export const getPosts = async (): Promise<Post[]> => {
  const postsDirectory = path.join(
    process.cwd() /* process current directory */,
    "posts"
  );
  const filenames = await fs.readdir(postsDirectory);

  const files = await Promise.all(
    filenames.map(async (filename) => {
      const filePath = path.join(postsDirectory, filename);
      const content = await fs.readFile(filePath, "utf8");
      const matter = grayMatter(content);
      return {
        filename,
        matter,
        content,
      };
    })
  );
  const posts = files.map((file) => {
    return {
      ...file.matter.data,
      slug: `posts/${file.filename.replace(".mdx", "")}`,
      content: file.content,
    } as unknown as Post;
  });

  return posts;
};

export default async function Blog({ pageProps }: AppProps) {
  const posts = await getPosts();

  return <BlogClient pageProps={pageProps} posts={posts} />;
}
