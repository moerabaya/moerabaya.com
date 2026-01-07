import Image from "next/legacy/image";
import Link from "next/link";
import { Post } from "@/types";
import { useTranslations } from "next-intl";

import useFormatter from "@/hooks/useFormatter";
import AnimatedView from "@/components/AnimatedView";
import Meta from "@/components/Meta";

type BlogClientProps = {
  posts: Post[];
  category?: string;
};

const BlogClient = ({ category, posts }: BlogClientProps) => {
  const formatter = useFormatter();

  const filteredPosts = category
    ? posts?.filter((post) => post.category.toLowerCase() === category)
    : posts;
  const t = useTranslations();

  return (
    <>
      <Meta
        title={t("blog.meta-title")}
        description="ux, ui, mobile, apps, web, javascript, html, developer, designer, seo, user experience, user interface, products, social media"
        pathname=""
      />
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
    </>
  );
};

export default BlogClient;
