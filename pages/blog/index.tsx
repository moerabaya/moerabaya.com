import { promises as fs } from "fs";
import path from "path";
import Image from "next/legacy/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Post } from "@/types";
import { Text } from "components";
import grayMatter from "gray-matter";
import useGlobalization from "hooks/useGlobalization";

import useFormatter from "@/hooks/useFormatter";
import AnimatedView from "@/components/AnimatedView";
import Meta from "@/components/Meta";

const Blog = ({ posts }: { posts: Post[] }) => {
  const formatter = useFormatter();
  const router = useRouter();
  const filteredPosts = router.query?.slug
    ? posts?.filter(
        (post) => post.category.toLowerCase() === router.query?.slug
      )
    : posts;
  const { getLocalizedString, translate } = useGlobalization();
  const getAllCategories = () => {
    const categories = new Map();
    for (const post of posts) {
      categories.set(post.category, [
        ...(categories?.get(post.category) ?? []),
        post,
      ]);
    }
    return categories;
  };

  const renderCategories = () => {
    const items: JSX.Element[] = [];
    items.push(
      <Link
        href={`/blog`}
        className={`rounded-2xl border-[1px] border-solid border-[#EEEEEE] bg-[#F1F1F1] px-3 py-2 !outline-none hover:border-stone-200 active:bg-stone-200 dark:border-[#202020] dark:bg-stone-900 dark:text-gray-50 dark:hover:border-stone-800 dark:hover:bg-stone-900 dark:active:bg-stone-800 ${
          !router.query?.slug &&
          "cursor-default border-neutral-300 dark:border-neutral-700"
        }`}
      >
        All
      </Link>
    );
    getAllCategories().forEach((_, key) => {
      items.push(
        <Link
          href={`/blog/${key.toString().toLowerCase()}`}
          className={`rounded-3xl border-[1px] border-solid border-[#EEEEEE] bg-[#F1F1F1] px-3 py-2 !outline-none hover:border-stone-200 active:bg-stone-200 dark:border-[#202020] dark:bg-stone-900 dark:text-gray-50 dark:hover:border-stone-800 dark:hover:bg-stone-900 dark:active:bg-stone-800 ${
            router.query?.slug === key.toString().toLowerCase() &&
            "cursor-default border-neutral-300 dark:border-neutral-700"
          }`}
        >
          {key}
        </Link>
      );
    });

    return items;
  };
  return (
    <div className="page-content">
      <Meta
        title={translate("blog.meta-title", "Blog")}
        description="ux, ui, mobile, apps, web, javascript, html, developer, designer, seo, user experience, user interface, products, social media"
      />

      <div className="container mx-auto max-w-4xl px-5 pt-5">
        <AnimatedView>
          <Text
            as="h4"
            textTransform="uppercase"
            className="px-5"
            weight={"bold"}
          >
            {getLocalizedString("blog", "title")}
          </Text>
        </AnimatedView>
        <div className="space-x-3 px-4 pt-4">{renderCategories()}</div>
        <ul className="mx-0 px-0 py-5">
          {filteredPosts?.map((post, index: number) => (
            <AnimatedView key={post.slug} delay={index / 2}>
              <Link
                href={post.slug}
                className="relative mb-4 flex h-[230px] cursor-pointer overflow-hidden rounded-[40px] p-5 transition duration-500 ease-in-out hover:shadow-lg hover:shadow-stone-300 dark:hover:shadow-stone-700 max-md:h-[180px]"
              >
                <Image
                  src={post.image}
                  placeholder="blur"
                  blurDataURL={post.placeholder}
                  layout="fill"
                  objectFit="cover"
                  alt={""}
                />{" "}
                <div className="relative z-10">
                  <span className="-mb-3 inline-block rounded-t-md bg-white p-1 px-3 text-sm text-neutral-500 dark:bg-neutral-950 dark:text-neutral-300">
                    {post.date} . {formatter.timeToRead(post.content)} min read
                  </span>
                  <h2 className="m-0 max-w-lg">
                    <span className="inline-block rounded-md bg-white p-1 px-3 font-medium dark:bg-neutral-950 max-md:text-2xl">
                      {post?.title}
                    </span>
                  </h2>
                </div>
              </Link>
            </AnimatedView>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Blog;

export async function getStaticProps() {
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

  return {
    props: {
      posts,
    },
  };
}
