import { Text } from "components/atoms";
import { promises as fs } from "fs";
import grayMatter from "gray-matter";
import useGlobalization from "hooks/useGlobalization";
import Head from "next/head";
import Link from "next/link";
import path from "path";
import AnimatedView from "../components/atoms/AnimatedView";
import Article from "../components/molecules/Article";
import useFormatter from "../hooks/useFormatter";

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
      <div className="container mx-auto max-w-4xl">
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
              <Link
                href={post.slug}
                className="flex py-8 mb-5 rounded-full relative overflow-hidden"
              >
                <div
                  className="absolute top-0 bottom-0 left-0 right-0 z-0"
                  style={{
                    backgroundImage: `url(${post.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: "blur(100px)",
                  }}
                ></div>
                <div className="relative z-10">
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
                  </Article.Content>
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
