import Head from "next/head";
import Link from "next/link";
import React from "react";
import { promises as fs } from "fs";
import path from "path";
import grayMatter from "gray-matter";
import Article from "components/molecules/Article";
import useFormatter from "hooks/useFormatter";
import AnimatedView from "components/atoms/AnimatedView";
import { Text, Grid, Row } from "components/atoms";
import useGlobalization from "hooks/useGlobalization";
import { Project } from "types";

interface WorkProps {
  projects: Project[];
}
const WorkCarousel = ({ projects }: WorkProps) => {
  return (
    <Grid fluid={"all"} style={{ height: "100vh" }}>
      {projects?.map((project: Project, index: number) => (
        <AnimatedView key={project.slug} delay={index * 0.5}>
          <Row>{project.title}</Row>
        </AnimatedView>
      ))}
    </Grid>
  );
};

const Work = ({ projects }: WorkProps) => {
  const formatter = useFormatter();
  const { getLocalizedString } = useGlobalization();
  return (
    <div className="page-content">
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>
          {getLocalizedString("work", "title")} - {getLocalizedString("name")}
        </title>

        {/* <!-- Primary Meta Tags --> */}
        <meta
          name="title"
          content={`${getLocalizedString(
            "work",
            "title"
          )} - ${getLocalizedString("name")}`}
        />
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
          content={require("assets/images/metaimage.png")}
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:url" content="https://moerabaya.com/blog" />
        <meta
          property="twitter:title"
          content={`${getLocalizedString(
            "work",
            "title"
          )} - ${getLocalizedString("name")}`}
        />
        <meta
          property="twitter:description"
          content="ux, ui, mobile, apps, web, javascript, html, developer, designer, seo, user experience, user interface, products, social media"
        />
        <meta
          property="twitter:image"
          content={require("assets/images/metaimage.png")}
        />
      </Head>
      {/* <h2>Coming soon</h2> */}
      <WorkCarousel projects={projects} />
      <pre>{JSON.stringify(projects, null, 2)}</pre>
    </div>
  );
};

export default Work;

export async function getStaticProps() {
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

  return {
    props: {
      projects,
    },
  };
}
