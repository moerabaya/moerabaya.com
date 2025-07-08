import { Text } from "components";
import { promises as fs } from "fs";
import grayMatter from "gray-matter";
import useGlobalization from "hooks/useGlobalization";
import Head from "next/head";
import Image from "next/legacy/image";
import Link from "next/link";
import { useRouter } from "next/router";
import path from "path";
import AnimatedView from "../../components/AnimatedView";
import useFormatter from "../../hooks/useFormatter";

const Blog = ({ posts }: any) => {
  const formatter = useFormatter();
  const router = useRouter();
  const filteredPosts = router.query?.slug
    ? posts?.filter(
        (post: any) => post.category.toLowerCase() === router.query?.slug
      )
    : posts;
  const { getLocalizedString } = useGlobalization();
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
        className={`px-3 py-2 bg-[#F1F1F1] border-[1px] border-[#EEEEEE] dark:border-[#202020] border-solid dark:text-gray-50  hover:border-stone-200 dark:bg-stone-900 dark:hover:bg-stone-900 dark:hover:border-stone-800 active:bg-stone-200 dark:active:bg-stone-800 rounded-2xl !outline-none ${
          !router.query?.slug &&
          "border-neutral-300 dark:border-neutral-700 cursor-default"
        }`}
      >
        All
      </Link>
    );
    getAllCategories().forEach((_, key) => {
      items.push(
        <Link
          href={`/blog/${key.toString().toLowerCase()}`}
          className={`px-3 py-2 bg-[#F1F1F1] border-[1px] border-[#EEEEEE] dark:border-[#202020] border-solid dark:text-gray-50  hover:border-stone-200 dark:bg-stone-900 dark:hover:bg-stone-900 dark:hover:border-stone-800 active:bg-stone-200 dark:active:bg-stone-800 rounded-3xl !outline-none ${
            router.query?.slug === key.toString().toLowerCase() &&
            "border-neutral-300 dark:border-neutral-700 cursor-default"
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
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>Blog - Moe Rabay&apos;a</title>

        {/* <!-- Primary Meta Tags --> */}
        <meta name="title" content="Blog | Moe Rabay'a" />
        <meta
          name="description"
          content="ux, ui, mobile, apps, web, javascript, html, developer, designer, seo, user experience, user interface, products, social media"
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:url" content="https://moerabaya.com/blog" />
        <meta property="og:title" content="Blog | Moe Rabay'a" />
        <meta
          property="og:description"
          content="ux, ui, mobile, apps, web, javascript, html, developer, designer, seo, user experience, user interface, products, social media"
        />
        <meta
          property="og:image"
          content={require("../../assets/images/metaimage.png")}
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:url" content="https://moerabaya.com/blog" />
        <meta property="twitter:title" content="Blog | Moe Rabay'a" />
        <meta
          property="twitter:description"
          content="ux, ui, mobile, apps, web, javascript, html, developer, designer, seo, user experience, user interface, products, social media"
        />
        <meta
          property="twitter:image"
          content={require("../../assets/images/metaimage.png")}
        />
      </Head>
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
        <div className="pt-4 px-4 space-x-3">{renderCategories()}</div>
        <ul className="px-0 mx-0 py-5">
          {filteredPosts?.map((post: any, index: number) => (
            <AnimatedView key={post.slug} delay={index / 2}>
              <Link
                href={post.slug}
                className="flex mb-4 p-5 rounded-[40px] relative overflow-hidden h-[230px] max-md:h-[180px] transition ease-in-out duration-500 hover:shadow-stone-300 dark:hover:shadow-stone-700 hover:shadow-lg cursor-pointer"
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
                  <span className="bg-white p-1 px-3 rounded-t-md -mb-3 text-sm inline-block text-neutral-500 dark:bg-neutral-950 dark:text-neutral-300">
                    {post.date} . {formatter.timeToRead(post.content)} min read
                  </span>
                  <h2 className="max-w-lg m-0">
                    <span className="bg-white p-1 px-3 rounded-md font-medium inline-block dark:bg-neutral-950 max-md:text-2xl">
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
    };
  });

  return {
    props: {
      posts,
    },
  };
}
