import Head from "next/head";
import Link from "next/link";
import React from "react";
import { promises as fs } from "fs";
import path from "path";
import grayMatter from "gray-matter";
import Article from "../components/molecules/Article";
import useFormatter from "../hooks/useFormatter";
import AnimatedView from "../components/atoms/AnimatedView";
import { Text } from "components/atoms";
import useGlobalization from "hooks/useGlobalization";

const Blog = ({ posts }: any) => {
  const formatter = useFormatter();
  const { getLocalizedString } = useGlobalization();
  return (
    <div className="page-content">
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>Blog - Mohammed Rabay&apos;a</title>

        {/* <!-- Primary Meta Tags --> */}
        <meta name="title" content="Blog | Mohammed Rabay'a" />
        <meta
          name="description"
          content="ux, ui, mobile, apps, web, javascript, html, developer, designer, seo, user experience, user interface, products, social media"
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:url" content="https://moerabaya.com/blog" />
        <meta property="og:title" content="Blog | Mohammed Rabay'a" />
        <meta
          property="og:description"
          content="ux, ui, mobile, apps, web, javascript, html, developer, designer, seo, user experience, user interface, products, social media"
        />
        <meta
          property="og:image"
          content={require("../assets/images/metaimage.png")}
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:url" content="https://moerabaya.com/blog" />
        <meta property="twitter:title" content="Blog | Mohammed Rabay'a" />
        <meta
          property="twitter:description"
          content="ux, ui, mobile, apps, web, javascript, html, developer, designer, seo, user experience, user interface, products, social media"
        />
        <meta
          property="twitter:image"
          content={require("../assets/images/metaimage.png")}
        />
      </Head>
      <div className="container">
        {/* <h2>Coming soon</h2> */}
        <br />
        <AnimatedView>
          <Text as="h4" p="1em 0" textTransform="uppercase" weight={"bold"}>
            {getLocalizedString("blog", "title")}
          </Text>
        </AnimatedView>
        <ul className="posts-list">
          {posts?.map((post: any, index: number) => (
            <AnimatedView key={post.slug} delay={index}>
              <Link href={post.slug}>
                <Article as="a">
                  <Article.ImageWrapper>
                    <Article.Image
                      src={post.image}
                      placeholder="blur"
                      blurDataURL={post.placeholder}
                      layout="fill"
                      objectFit="cover"
                    />
                  </Article.ImageWrapper>
                  <Article.Content>
                    <Article.Category>{post?.category}</Article.Category>
                    <Article.Title
                      dangerouslySetInnerHTML={{ __html: post?.title }}
                    ></Article.Title>
                    <div>
                      <Article.Text>{post.date}</Article.Text>
                      <Article.Text>.</Article.Text>
                      <Article.Text>
                        {formatter.timeToRead(post.content)} min read
                      </Article.Text>
                    </div>
                    <div>
                      {post?.tags.split(", ").map((item: string) => (
                        <Article.Label key={item}>{item}</Article.Label>
                      ))}
                    </div>
                  </Article.Content>
                </Article>
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
