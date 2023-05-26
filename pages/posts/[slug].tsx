import { AnimatedView } from "components/atoms";
import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Head from "next/head";
import Image, { ImageProps } from "next/image";
import { useRouter } from "next/router";
import path from "path";
import "prism-themes/themes/prism-atom-dark.css";
import Prism from "prismjs";
import { useEffect } from "react";
import { Post } from "../../types";

const ResponsiveImage = (props: ImageProps) => (
  // eslint-disable-next-line jsx-a11y/alt-text
  <Image
    width="0"
    height="0"
    sizes="100vw"
    className="w-full h-auto"
    {...props}
  />
);

const components = {
  Image: ResponsiveImage,
};

const Post = ({ mdxSource, meta }: any) => {
  var post: Post;
  const { pathname } = useRouter();
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div className="post-content">
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>{meta.title} - Mohammed Rabay&apos;a</title>

        {/* <!-- Primary Meta Tags --> */}
        <meta name="title" content={meta.title + " | Mohammed Rabay'a"} />
        <meta name="description" content={meta.description} />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:url" content={"https://moerabaya.com/" + pathname} />
        <meta
          property="og:title"
          content={meta.title + " | Mohammed Rabay'a"}
        />
        <meta property="og:description" content={meta.description} />
        <meta
          property="og:image"
          content={
            meta?.metaimage
              ? require(meta?.metaimage)
              : require("../../assets/images/metaimage.png")
          }
        />

        {/* <!-- Twitter --> */}
        <meta
          property="twitter:url"
          content={"https://moerabaya.com/" + pathname}
        />
        <meta
          property="twitter:title"
          content={meta.title + " | Mohammed Rabay'a"}
        />
        <meta property="twitter:description" content={meta.description} />
        <meta
          property="twitter:image"
          content={
            meta?.metaimage
              ? require(meta?.metaimage)
              : require("../../assets/images/metaimage.png")
          }
        />
      </Head>

      <div className="container mx-auto max-w-4xl py-10">
        {/* <Link href="/blog"><a className="posts-back">{"<" + " Back"}</a></Link>
        <br /> */}
        <AnimatedView className="w-full overflow-hidden relative h-[350px]">
          <Image
            alt={meta.alt}
            src={meta.image}
            placeholder="blur"
            blurDataURL={meta.placeholder}
            layout="fill"
            objectFit="cover"
            className="rounded-[50px]"
          />
        </AnimatedView>
        <AnimatedView delay={0.5} className="px-7 pt-4">
          <h2
            className="font-medium"
            dangerouslySetInnerHTML={{ __html: meta?.title }}
          ></h2>
          <h5 className="post-details">
            {meta.date} . {meta.author}
          </h5>

          <div className="content">
            <MDXRemote {...mdxSource} components={components} />
          </div>
        </AnimatedView>
      </div>
    </div>
  );
};

export default Post;

const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".mdx", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

const getStaticProps = async ({ params: { slug } }: any) => {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".mdx"),
    "utf-8"
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);

  return {
    props: {
      meta: frontMatter,
      slug,
      mdxSource,
    },
  };
};

export { getStaticProps, getStaticPaths };
