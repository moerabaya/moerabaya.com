import Head from "next/head";
import React from "react";
import { promises as fs } from "fs";
import path from "path";
import grayMatter from "gray-matter";
import useFormatter from "hooks/useFormatter";
import { Text, Grid, Row, Col, Link } from "components/atoms";
import useGlobalization from "hooks/useGlobalization";
import { Project } from "types";
import "swiper/css";
import Image from "next/image";

interface WorkProps {
  projects: Project[];
}
const WorkCarousel = ({ projects }: WorkProps) => {
  const { getLocalizedString } = useGlobalization();
  return (
    <Grid
      fluid={"all"}
      style={{
        scrollSnapType: "y mandatory",
        scrollSnapPointsY: "repeat(300px)",
        maxHeight: "100vh",
        overflowY: "scroll",
      }}
    >
      {projects?.map((project: Project, index: number) => (
        <Row
          alignItems="center"
          style={{
            height: "100vh",
            scrollSnapAlign: "start",
            paddingTop: "4.5em",
            paddingBottom: "2em",
          }}
          direction="row-reverse"
          wrap
          key={project.slug}
        >
          <Col sm={12} md={6}>
            <Text smallCaps style={{ margin: 0, marginBottom: 10 }} as="h1">
              {project.title}
            </Text>
            <Link animated href={`${project.slug}`} smallCaps>
              {getLocalizedString("work", "view")}
            </Link>
          </Col>
          <Col sm={12} md={6} style={{ height: "100%", paddingInlineStart: 0 }}>
            <div
              style={{
                width: "100%",
                position: "relative",
                background: "white",
                height: "100%",
              }}
            >
              <Image
                placeholder="blur"
                alt=""
                layout="fill"
                objectFit="cover"
                src={
                  project.cover_photo &&
                  require(`assets/images/projects/${project.cover_photo}`)
                }
              />
            </div>
          </Col>
        </Row>
      ))}
    </Grid>
  );
};

const Work = ({ projects }: WorkProps) => {
  const formatter = useFormatter();
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
      {/* <pre>{JSON.stringify(projects, null, 2)}</pre> */}
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