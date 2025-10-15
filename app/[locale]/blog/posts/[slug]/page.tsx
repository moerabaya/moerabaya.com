import * as fs from "fs/promises";
import path from "path";
import { notFound } from "next/navigation";
import matter from "gray-matter";
import type { Post } from "@/types";
import PostClient from "./PostClient";

interface PostPageProps {
  params: {
    slug: string;
    locale: string;
  };
}

export async function generateStaticParams() {
  const files = await fs.readdir(path.join("posts"));

  return files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));
}

async function getPost(slug: string) {
  try {
    const markdownWithMeta = await fs.readFile(
      path.join("posts", slug + ".mdx"),
      "utf-8"
    );

    const { data: frontMatter, content } = matter(markdownWithMeta);

    return {
      meta: frontMatter as Post,
      content,
    };
  } catch (error) {
    return null;
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  const { meta, content } = post;

  return <PostClient meta={meta} content={content} slug={params.slug} />;
}
