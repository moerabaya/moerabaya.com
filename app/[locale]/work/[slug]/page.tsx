import * as fs from "fs/promises";
import path from "path";
import { notFound } from "next/navigation";
import matter from "gray-matter";

import { Project as IProject } from "types";

import WorkProjectClient from "./WorkProjectClient";

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

async function getProject(slug: string) {
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

export default async function WorkProjectPage({
  params,
}: WorkProjectPageProps) {
  const project = await getProject(params.slug);

  if (!project) {
    notFound();
  }

  const { meta, content } = project;

  return <WorkProjectClient meta={meta} content={content} slug={params.slug} />;
}
