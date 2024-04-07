import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import fs from "fs/promises";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import matter from "gray-matter";
import Image from "next/image";
import rehypeImgSize from "rehype-img-size";
import Login from "components/templates/Login";
import { AnimatedText } from "components/atoms";
import { Project as IProject } from "types";

type ProjectProps = {
  meta: IProject;
  slug: string;
  hasReadPermission: { [key: string]: string };
  mdxSource: MDXRemoteSerializeResult;
};

const components = {
  // Custom image - here you can customize the image layout: https://nextjs.org/docs/api-reference/next/image#layout
  img: ({ src, height, width, ...rest }: any) => (
    // layout="responsive" makes the image fill the container width wise - I find it looks nicer for blog posts
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image
      layout="responsive"
      src={src}
      height={height}
      width={width}
      {...rest}
    />
  ),
};
const Project = ({ mdxSource, meta, hasReadPermission }: ProjectProps) => {
  const { pathname, asPath } = useRouter();

  if (meta.password && !hasReadPermission?.[meta.slug]) {
    return <Login slug={meta.slug} redirectPath={asPath} />;
  }

  const getProjectType = () => meta.project_type?.split(", ");

  return (
    <div className="pt-[75px]">
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

      <div className="container mx-auto pt-28 pb-16 px-5">
        <AnimatedText
          text={meta.description as string}
          className="text-5xl font-[500] leading-[1.15em] max-md:text-[5vw] max-[500px]:text-[8vw] max-md:leading-[1.2]"
          type={"h1"}
        />
        <div className="pt-14 max-md:text-[1em]">
          <span className="pe-5">{getProjectType()?.[0]}</span>
          <span className="pe-5">x</span>
          <span className="pe-5">{getProjectType()?.[1]}</span>
          {meta.date && !Number.isNaN(new Date(meta.date).getFullYear()) && (
            <>
              <span className="pe-5">|</span>
              <span>{new Date(meta.date).getFullYear()}</span>
            </>
          )}
        </div>
      </div>
      <MDXRemote {...mdxSource} components={components} />
    </div>
  );
};

export default Project;

const getStaticPaths = async () => {
  const files = await fs.readdir(path.join("projects"));

  const paths = files.reduce((prev: object[], filename) => {
    prev.push({
      params: { slug: filename.replace(".mdx", "") },
      locale: "en-US",
    });
    prev.push({ params: { slug: filename.replace(".mdx", "") }, locale: "ar" });
    return prev;
  }, []);

  return {
    paths,
    fallback: true,
  };
};

const getStaticProps = async ({ params, locale, ...rest }: any) => {
  const { slug } = params;
  const markdownWithMeta = await fs.readFile(
    path.join("projects", slug + ".mdx"),
    "utf-8"
  );

  const options: any = [[rehypeImgSize, { dir: "public" }]];
  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: options,
    },
  });

  const projectsDirectory = path.join(
    process.cwd() /* process current directory */,
    "projects"
  );
  const filenames = await fs.readdir(projectsDirectory);
  const current = filenames.indexOf(`${slug}.mdx`);
  const next = filenames[current + 1]?.replace(".mdx", "") ?? null;
  const previous = filenames[current - 1]?.replace(".mdx", "") ?? null;

  console.log(params, rest);

  if (locale === "ar") {
    return {
      redirect: {
        destination: `/work/${slug}`,
        permanent: false,
      },
    };
  }

  return {
    props: {
      meta: frontMatter as IProject,
      slug: slug as string,
      mdxSource,
      next,
      previous,
    },
  };
};

export { getStaticProps, getStaticPaths };

//@ts-ignore
