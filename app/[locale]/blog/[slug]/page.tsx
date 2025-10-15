import { AppProps } from "next/app";

import BlogClient from "../BlogClient";
import { getPosts } from "../page";

export async function generateStaticParams() {
  const posts = await getPosts();

  const categories = new Set<string>();
  posts.forEach((post) => {
    categories.add(post.category.toLowerCase());
  });

  return Array.from(categories).map((category) => ({
    slug: category,
  }));
}

export default async function BlogCategoryPage({ pageProps }: AppProps) {
  const posts = await getPosts();

  return <BlogClient pageProps={pageProps} posts={posts} />;
}
