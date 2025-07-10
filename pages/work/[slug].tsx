import fs from "fs/promises";
import path from "path";
import React from "react";
import { GetStaticPropsContext } from "next";
import Head from "next/head";
import Image from "next/legacy/image";
import { useRouter } from "next/router";
import Login from "@/templates/Login";
import { AnimatedText } from "components";
import matter from "gray-matter";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import rehypeImgSize from "rehype-img-size";

import { Project as IProject } from "types";

type ProjectProps = {
  meta: IProject;
  slug: string;
  hasReadPermission: { [key: string]: string };
  mdxSource: MDXRemoteSerializeResult;
};

const components = {
  Image,
};
const Project = ({ mdxSource, meta, hasReadPermission }: ProjectProps) => {
  const { pathname, asPath } = useRouter();

  if (!meta) return;
  if (meta.password && !hasReadPermission?.[meta.slug]) {
    return <Login slug={meta.slug} redirectPath={asPath} />;
  }

  const getProjectType = () => meta.project_type?.split(", ");

  return (
    <div className="pt-[75px]">
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>{meta.title} - Moe Rabay&apos;a</title>

        {/* <!-- Primary Meta Tags --> */}
        <meta name="title" content={meta.title + " | Moe Rabay'a"} />
        <meta name="description" content={meta.description} />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:url" content={"https://moerabaya.com/" + pathname} />
        <meta property="og:title" content={meta.title + " | Moe Rabay'a"} />
        <meta property="og:description" content={meta.description} />
        <meta
          property="og:image"
          content={
            meta?.metaimage
              ? require(meta?.metaimage)
              : require("@/assets/images/metaimage.png")
          }
        />

        {/* <!-- Twitter --> */}
        <meta
          property="twitter:url"
          content={"https://moerabaya.com/" + pathname}
        />
        <meta
          property="twitter:title"
          content={meta.title + " | Moe Rabay'a"}
        />
        <meta property="twitter:description" content={meta.description} />
        <meta
          property="twitter:image"
          content={
            meta?.metaimage
              ? require(meta?.metaimage)
              : require("@/assets/images/metaimage.png")
          }
        />
      </Head>

      <div className="container mx-auto px-5 pb-16 pt-28">
        <AnimatedText
          text={meta.description as string}
          className="text-5xl font-[500] leading-[1.15em] max-md:text-[5vw] max-md:leading-[1.2] max-[500px]:text-[8vw]"
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
    });
    prev.push({ params: { slug: filename.replace(".mdx", "") }, locale: "ar" });
    return prev;
  }, []);

  return {
    paths,
    fallback: true,
  };
};

const getStaticProps = async (
  context: GetStaticPropsContext<{ slug: string }>
) => {
  const { params, locale } = context;
  const markdownWithMeta = await fs.readFile(
    path.join("projects", params?.slug + ".mdx"),
    "utf-8"
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [[rehypeImgSize, { dir: "public" }]],
    },
  });

  const projectsDirectory = path.join(
    process.cwd() /* process current directory */,
    "projects"
  );
  const filenames = await fs.readdir(projectsDirectory);
  const current = filenames.indexOf(`${params?.slug}.mdx`);
  const next = filenames[current + 1]?.replace(".mdx", "") ?? null;
  const previous = filenames[current - 1]?.replace(".mdx", "") ?? null;

  const props = {
    meta: frontMatter as IProject,
    slug: params?.slug,
    mdxSource,
    next,
    previous,
  };
  if (locale === "ar") {
    if (process.env.npm_lifecycle_event === "build")
      return {
        notFound: true,
        props,
      };
    return {
      redirect: {
        destination: `/work/${params?.slug}`,
        permanent: false,
      },
      props,
    };
  }

  return {
    props,
  };
};

export { getStaticPaths, getStaticProps };
