import "swiper/css";

import { promises as fs } from "fs";
import path from "path";
import React, { useCallback, useState } from "react";
import Head from "next/head";
import { Col, Grid, Row, Text } from "components";
import grayMatter from "gray-matter";
import useGlobalization from "hooks/useGlobalization";

import { Project as ProjectInterface } from "types";

import Project from "./project";

interface WorkProps {
  projects: ProjectInterface[];
}
const WorkCarousel = ({ projects }: WorkProps) => {
  const [currentProject, setCurrentProject] = useState(1);
  const [itemsScrollTop, setItemsScrollTop] = useState<number[]>([]);
  const handleScroll = (element: React.UIEvent<HTMLDivElement>) => {
    itemsScrollTop.map((item: number, index: number) => {
      if (element.currentTarget.scrollTop >= item) {
        setCurrentProject(index + 1);
      }
    });
  };

  const updateScrollTop = useCallback(
    (scrollTop: number) => {
      if (!itemsScrollTop.includes(scrollTop)) {
        itemsScrollTop.push(scrollTop);
        setItemsScrollTop(itemsScrollTop);
      }
    },
    [itemsScrollTop]
  );

  return (
    <Grid
      fluid={"all"}
      onScroll={handleScroll}
      style={{
        scrollSnapType: "y mandatory",
        scrollSnapPointsY: "repeat(300px)",
        maxHeight: "100vh",
        overflowY: "scroll",
      }}
    >
      {projects?.map((project: ProjectInterface) => (
        <Project
          key={`project-${project.title}`}
          {...project}
          updateScrollTop={updateScrollTop}
        />
      ))}
      <Row
        style={{
          position: "fixed",
          right: "1.25em",
          bottom: "1.25em",
        }}
      >
        <Col style={{ padding: 0, textAlign: "end" }}>
          <Text as={"h4"} smallCaps style={{ margin: 0 }}>
            {currentProject}/{projects.length}
          </Text>
        </Col>
      </Row>
    </Grid>
  );
};

const Work = ({ projects }: WorkProps) => {
  const { getLocalizedString } = useGlobalization();
  return (
    <div>
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
        <meta property="og:title" content="Blog | Moe Rabay'a" />
        <meta
          property="og:description"
          content="ux, ui, mobile, apps, web, javascript, html, developer, designer, seo, user experience, user interface, products, social media"
        />
        <meta property="og:image" content={"assets/images/metaimage.png"} />

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
          content={"assets/images/metaimage.png"}
        />
      </Head>
      <WorkCarousel projects={projects} />
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
