import * as fs from "fs/promises";
import path from "path";
import Image from "next/legacy/image";
import { notFound } from "next/navigation";
import { AnimatedText } from "@/components";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";

import { Project as IProject } from "types";
import Meta from "@/components/Meta";

interface WorkProjectPageProps {
  params: {
    slug: string;
    locale: string;
  };
}

export async function generateStaticParams() {
  const files = await fs.readdir(path.join("projects"));

  return files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));
}

export async function getProject(slug: string) {
  try {
    const markdownWithMeta = await fs.readFile(
      path.join("projects", slug + ".mdx"),
      "utf-8"
    );

    const { data: frontMatter, content } = matter(markdownWithMeta);

    const projectsDirectory = path.join(process.cwd(), "projects");
    const filenames = await fs.readdir(projectsDirectory);
    const current = filenames.indexOf(`${slug}.mdx`);
    const next = filenames[current + 1]?.replace(".mdx", "") ?? null;
    const previous = filenames[current - 1]?.replace(".mdx", "") ?? null;

    return {
      meta: frontMatter as IProject,
      content,
      next,
      previous,
    };
  } catch {
    return null;
  }
}
const components = {
  Image,
};

export default async function WorkProjectPage({
  params,
}: WorkProjectPageProps) {
  const pageParams = await params;
  const project = await getProject(pageParams.slug);

  if (!project) {
    notFound();
  }

  const { meta, content: source } = project;
  const getProjectType = () => meta.project_type?.split(", ");

  const { content } = await compileMDX<{
    title?: string;
    description?: string;
  }>({
    source,
    // Map MDX custom components. Client components can be passed safely; they are not async themselves.
    components,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [],
        rehypePlugins: [],
      },
    },
  });

  return (
    <div className="pt-[75px]">
      <Meta
        title={meta.title}
        description={meta.description}
        image={meta.metaimage ? require(meta.metaimage) : undefined}
      />

      <div className="container mx-auto px-5 pb-16 pt-28">
        <AnimatedText
          text={meta.description || ""}
          className="text-5xl font-[500] leading-[1.15em] max-md:text-[5vw] max-md:leading-[1.2] max-[500px]:text-[8vw]"
          type="h1"
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
      {content}
    </div>
  );
}
