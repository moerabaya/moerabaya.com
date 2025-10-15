import * as fs from "fs/promises";
import path from "path";
import { Project } from "@/types";
import grayMatter from "gray-matter";
import HomeClient from "./components/HomeClient";

export const getProjects = async (): Promise<Project[]> => {
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
      };
    })
  );

  const projects = files.map((file) => {
    return {
      ...(file.matter.data as Project),
      slug: file.filename.replace(".mdx", ""),
    };
  });

  return projects;
};

export default async function Home() {
  const projects = await getProjects();

  return <HomeClient projects={projects} />;
}
