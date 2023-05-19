import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
// import styles from '../styles/app.scss'
import { Animate, AnimatedText, Text } from "components/atoms/";
import fs from "fs";
import grayMatter from "gray-matter";
import useGlobalization from "hooks/useGlobalization";
import path from "path";
import { useEffect, useState } from "react";
import AnimatedView from "../components/atoms/AnimatedView";
import { Project } from "../types";

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
        if (index !== 1)
          list.push(
            // eslint-disable-next-line react/jsx-no-duplicate-props
            <li className={`${index === 0 ? "col-span-2" : "col-span-1"}`}>
              <AnimatedView key={project.slug} duration={1.25} vertical="25%">
                {index === 0 && (
                  <Text
                    className="mt-5 ms-5 absolute uppercase font-medium divide-amber-400"
                    size={15}
                  >
                    Featured
                  </Text>
                )}
                <Image
                  placeholder="blur"
                  layout="responsive"
                  alt=""
                  src={
                    project.cover_photo &&
                    require("../assets/images/projects/" + project.cover_photo)
                  }
                  className="overflow-hidden rounded-xl shadow-lg shadow-transparent hover:shadow-stone-200 transition-all cursor-pointer m-0"
                />
              </AnimatedView>
            </li>
          );
      });
    return <ul className="grid grid-cols-2 gap-4 py-6 m-0">{list}</ul>;
  }
  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>{getLocalizedString("title")}</title>

        {/* <!-- Primary Meta Tags --> */}
        <meta name="title" content={getLocalizedString("title")} />
        <meta name="description" content={getLocalizedString("description")} />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:url" content="https://moerabaya.com/" />
        <meta property="og:title" content={getLocalizedString("title")} />
        <meta
          property="og:description"
          content={getLocalizedString("description")}
        />
        <meta
          property="og:image"
          content={require("../assets/images/metaimage.png")}
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:url" content="https://moerabaya.com/" />
        <meta property="twitter:title" content={getLocalizedString("title")} />
        <meta
          property="twitter:description"
          content={getLocalizedString("description")}
        />
        <meta
          property="twitter:image"
          content={require("../assets/images/metaimage.png")}
        />
      </Head>

      <div className="container max-w-xl mx-auto pt-32">
        <AnimatedView>
          <Image
            src={
              "https://en.gravatar.com/userimage/201100235/e812a2bff97470caf6299b1a96e5cc1e.png?size=150"
            }
            alt="Portrait of Mohammed Rabay'a"
            placeholder="blur"
            blurDataURL='"https://en.gravatar.com/userimage/201100235/e812a2bff97470caf6299b1a96e5cc1e.png?size=1"'
            width={70}
            height={70}
            className="rounded-3xl overflow-hidden"
          />
        </AnimatedView>

        <div className="flex items-center">
          <AnimatedText
            text={getLocalizedString("home", "pretitle")}
            type="h2"
            className="inline-block my-1"
          />
          &nbsp;&nbsp;
          <Animate
            as={Text}
            name="wave"
            origin="70% 70%"
            size="1.85em"
            className="-mt-2"
            duration={1500}
          >
            👋
          </Animate>
        </div>
        <AnimatedText
          text={getLocalizedString("home", "title")}
          type="h2"
          finished={(state: boolean) => setHeaderAniamteState(state)}
          className="m-0"
        />
      </div>
      <div className="container max-w-5xl mx-auto">{WorkItems()}</div>
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
