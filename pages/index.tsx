import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
// import styles from '../styles/app.scss'
import React, { useEffect, useState } from "react";
import { Project } from "../types";
import { GrAppleAppStore } from "react-icons/gr";
import { BsGlobe2 } from "react-icons/bs";
import path from "path";
import fs, { Dirent } from "fs";
import grayMatter from "gray-matter";
import AnimatedText from "../components/atoms/AnimatedText";
import AnimatedView from "../components/atoms/AnimatedView";
import { Grid, Row, Col, Avatar, Button } from "components/atoms/";
import Header from "../components/organisms/Header";
import Icon from "../components/atoms/Icon";
import ButtonGroup from "../components/atoms/ButtonGroup";
import useGlobalization from "hooks/useGlobalization";

interface Props {
  projects: Project[];
}
const Home: NextPage<Props> = ({ projects }: Props) => {
  const [headerAnimateState, setHeaderAniamteState] = useState(false);
  const { getLocalizedString } = useGlobalization();
  useEffect(() => {
    return () => {
      // cleanup
    };
  }, []);

  function WorkItems() {
    var list: any = [];

    projects
      ?.sort((a: any, b: any) => a.index - b.index)
      .map((project: Project, index: number) => {
        list.push(
          <li className={"work-item " + project.slug}>
            <AnimatedView key={project.slug} duration={1.25} vertical="25%">
              <div className="content-media">
                <Image
                  placeholder="blur"
                  layout="responsive"
                  alt=""
                  src={
                    project.cover_photo &&
                    require("../assets/images/projects/" + project.cover_photo)
                  }
                />
              </div>
            </AnimatedView>
            <AnimatedView key={project.slug} duration={1.25} vertical="25%">
              <div className="content-wrapper">
                <h3 className="project-name">{project.title}</h3>
                <h4 className="project-type">{project.project_type}</h4>
                <div className="project-links">
                  {/* <Link href={project.path}> */}
                  {/* <a title='Coming soon!' className='project-link disabled'>Case Study</a> */}
                  {/* </Link> */}
                  {/* <Link href={project.behance}> */}
                  {project.behance ? (
                    <a
                      title="View Project on Behacne"
                      href={project.behance}
                      target="_blank"
                      className="project-link media"
                      rel="noreferrer"
                    >
                      View on Behance
                    </a>
                  ) : (
                    <a title="Coming soon!" className="project-link disabled">
                      Case Study
                    </a>
                  )}

                  {project.appstore && (
                    <a
                      title={`Download ${project.title} App`}
                      href={project.appstore}
                      target="_blank"
                      className="project-link media"
                      rel="noreferrer"
                    >
                      <GrAppleAppStore />
                    </a>
                  )}

                  {project.website && (
                    <a
                      title={`Visit ${project.title}'s website`}
                      href={project.website}
                      target="_blank"
                      className="project-link media"
                      rel="noreferrer"
                    >
                      <BsGlobe2 />
                    </a>
                  )}
                  {/* </Link> */}
                </div>
              </div>
            </AnimatedView>
          </li>
        );
      });
    return <ul className="work-list">{list}</ul>;
  }
  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>{getLocalizedString("title")}</title>

        {/* <!-- Primary Meta Tags --> */}
        <meta
          name="title"
          content={"Mohammed Rabay'a — UX, Product Designer | Senior Engineer"}
        />
        <meta
          name="description"
          content="A product-focused engineer based in Amman, Jordan. Highly skilled in designing and developing interactive and data-driven platforms for both web & mobile experiences."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:url" content="https://moerabaya.com/" />
        <meta
          property="og:title"
          content="Mohammed Rabay'a — UX, Product Designer | Senior Engineer"
        />
        <meta
          property="og:description"
          content="A product-focused engineer based in Amman, Jordan. Highly skilled in designing and developing interactive and data-driven platforms for both web & mobile experiences."
        />
        <meta
          property="og:image"
          content={require("../assets/images/metaimage.png")}
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:url" content="https://moerabaya.com/" />
        <meta
          property="twitter:title"
          content="Mohammed Rabay'a — UX, Product Designer | Senior Engineer"
        />
        <meta
          property="twitter:description"
          content="A product-focused engineer based in Amman, Jordan. Highly skilled in designing and developing interactive and data-driven platforms for both web & mobile experiences."
        />
        <meta
          property="twitter:image"
          content={require("../assets/images/metaimage.png")}
        />
      </Head>

      <Header fullHeight={true}>
        <Grid fluid={["sm", "md"]}>
          <Row fullHeight={true} alignItems="center">
            <Col style={{ marginTop: "-5%" }}>
              <AnimatedView>
                <Avatar
                  href="/about"
                  src={
                    "https://en.gravatar.com/userimage/201100235/e812a2bff97470caf6299b1a96e5cc1e.png?size=150"
                  }
                  alt="Portrait of Mohammed Rabay'a"
                  placeholder="blur"
                  blurDataURL='"https://en.gravatar.com/userimage/201100235/e812a2bff97470caf6299b1a96e5cc1e.png?size=1"'
                  size={45}
                />
              </AnimatedView>
              <h3>
                <AnimatedView>
                  <span>Hi my name is Mohammed 👋</span>
                </AnimatedView>
              </h3>
              <AnimatedText
                text="I design/develop user inter­­faces and engaging product experi­­en­ces for humans."
                type="h1"
                finished={(state: boolean) => setHeaderAniamteState(state)}
              />
              <ButtonGroup style={{ paddingTop: "1em" }}>
                <AnimatedView
                  style={{
                    display: "inline-block",
                    width: "100%",
                    maxWidth: "300px",
                  }}
                  animate={headerAnimateState}
                >
                  <Button size={"lg"} smallCaps alternative layout="full">
                    Checkout past work
                  </Button>
                </AnimatedView>
                <AnimatedView
                  style={{
                    display: "inline-block",
                    width: "100%",
                    maxWidth: "300px",
                  }}
                  animate={headerAnimateState}
                  delay={0.2}
                >
                  <Button size={"lg"} smallCaps layout="full">
                    Lets grab a coffee{" "}
                    <Icon size="1.6em" slot="start">
                      ☕️
                    </Icon>
                  </Button>
                </AnimatedView>
              </ButtonGroup>
            </Col>
          </Row>
        </Grid>
      </Header>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const projectsDirectory = path.join(
    process.cwd() /* process current directory */,
    "projects"
  );
  const filenames = fs.readdirSync(projectsDirectory);

  const files = await Promise.all(
    filenames.map(async (filename: any) => {
      const filePath = path.join(projectsDirectory, filename);
      const content = fs.readFileSync(filePath, "utf8");
      const matter = grayMatter(content);
      return {
        filename,
        matter,
      };
    })
  );

  const projects = files.map((file) => {
    return {
      ...file.matter.data,
      path: `work/${file.filename.replace(".mdx", "")}`,
    };
  });

  return {
    props: {
      projects,
    },
  };
}
