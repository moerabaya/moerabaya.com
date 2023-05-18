import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Head from "next/head";
import Image, { ImageProps } from "next/image";
import { useRouter } from "next/router";
import path from "path";
import { Post } from "../../types";

const ResponsiveImage = (props: ImageProps) => (
  <Image
    // alt={props.alt}
    layout="responsive"
    sizes="100vw"
    objectFit="contain"
    {...props}
  />
);

const components = {
  Image: ResponsiveImage,
};

const Post = ({ mdxSource, meta }: any) => {
  var post: Post;
  const { pathname } = useRouter();

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

      <div className="container">
        {/* <Link href="/blog"><a className="posts-back">{"<" + " Back"}</a></Link>
        <br /> */}
        <Image
          alt={meta.alt}
          src={meta.image}
          placeholder="blur"
          blurDataURL={meta.placeholder}
          width="1200"
          height="400"
          sizes="100% 50%"
          objectFit="contain"
        />
        <h1
          className="post-title"
          dangerouslySetInnerHTML={{ __html: meta?.title }}
        ></h1>
        <h5 className="post-details">
          {meta.date} . {meta.author}
        </h5>

        <div className="content">
          <MDXRemote {...mdxSource} components={components} />
        </div>
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
