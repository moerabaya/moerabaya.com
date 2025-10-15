import * as fs from "fs/promises";
import path from "path";
import grayMatter from "gray-matter";

import { Project as ProjectInterface } from "types";

import WorkClient from "./WorkClient";

export const getProjects = async (): Promise<ProjectInterface[]> => {
  const projectsDirectory = path.join(
    process.cwd() /* process current directory */,
    "projects"
  );
  const filenames = await fs.readdir(projectsDirectory);

  const files = await Promise.all(
    filenames.map(async (filename) => {
      const filePath = path.join(projectsDirectory, filename);
      const content = await fs.readFile(filePath, "utf8");
      const matter = grayMatter(content);
      return {
        filename,
        matter,
        content,
      };
    })
  );
  const projects = files.map((file) => {
    return {
      ...file.matter.data,
      slug: `work/${file.filename.replace(".mdx", "")}`,
      content: file.content,
    };
  });

  return projects;
};

export default async function Work() {
  const projects = await getProjects();

  return <WorkClient projects={projects} />;
}
