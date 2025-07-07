import { Animate, AnimatedText, Text } from "components/atoms/";
import * as fs from "fs/promises";
import grayMatter from "gray-matter";
import useGlobalization from "hooks/useGlobalization";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/legacy/image";
import Link from "next/link";
import path from "path";
import AnimatedView from "../components/atoms/AnimatedView";
import { Project } from "../types";

interface Props {
  projects: Project[];
}
const Home: NextPage<Props> = ({ projects }: Props) => {
  const { getLocalizedString } = useGlobalization();

  function WorkItems() {
    var list: any = [];

    projects
      ?.sort((a: any, b: any) => a.index - b.index)
      .map((project: Project, index: number) => {
        if (index !== 1)
          list.push(
            // eslint-disable-next-line react/jsx-no-duplicate-props
            <Link
              href={`work/${project.slug}`}
              className={`${
                index === 0 ? "col-span-2" : "col-span-1"
              } max-sm:col-span-2`}
            >
              <AnimatedView
                key={project.slug}
                delay={(index === 0 ? 0.5 : 0.25) * (index + 1)}
                duration={0.75}
                vertical="25%"
              >
                {index === 0 && (
                  <Text
                    className="mt-9 ms-9 px-3 pb-4 py-3 text-xl absolute leading-4 font-medium bg-amber-500 text-white rounded-3xl max-sm:text-[0.85em] max-sm:px-2 max-sm:py-1 max-sm:mt-5 max-sm:ms-5"
                    style={{ fontVariant: "all-small-caps" }}
                  >
                    {getLocalizedString("home", "featured")}
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
                  className="overflow-hidden rounded-3xl transition ease-in-out duration-500 hover:shadow-stone-200 hover:shadow-lg cursor-pointer m-0 border-solid border-[1px] border-stone-200 dark:hover:shadow-stone-600 dark:border-stone-600"
                />
              </AnimatedView>
            </Link>
          );
      });
    return (
      <ul className="grid grid-cols-2 gap-4 pb-24 m-0 max-md:pb-10">{list}</ul>
    );
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

      <div className="container max-w-2xl mx-auto py-40 px-9 max-md:py-28 max-sm:px-5">
        <AnimatedView>
          <Image
            src={
              "https://en.gravatar.com/userimage/201100235/e812a2bff97470caf6299b1a96e5cc1e.png?size=150"
            }
            alt="Portrait of Moe Rabay'a"
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
            className="inline-block my-1 max-sm:text-2xl"
          />
          &nbsp;&nbsp;
          <AnimatedView delay={0.6} duration={0.25} vertical="25%">
            <Animate
              as={Text}
              name="wave"
              origin="70% 70%"
              size="1.85em"
              className="-mt-2 max-sm:!text-[1.7em]"
              duration={1500}
            >
              👋
            </Animate>
          </AnimatedView>
        </div>
        <AnimatedText
          text={getLocalizedString("home", "title")}
          type="h2"
          className="m-0 max-sm:text-2xl"
        />
      </div>
      <div className="container max-w-5xl mx-auto px-5">{WorkItems()}</div>
      <div className="py-20 bg-stone-100 dark:bg-neutral-950 px-5 max-md:py-12">
        <div className="container mx-auto max-w-2xl flex items-center justify-between max-sm:flex-col max-sm:w-full">
          <h2 className="font-medium text-stone-800 dark:text-neutral-50 max-md:text-2xl">
            {getLocalizedString("home", "contact-title")}
          </h2>
          <a
            href="mail:contact@moerabaya.com"
            className="px-8 py-3 ms-5 max-md:py-2 max-md:px-6 font-medium text-lg bg-stone-200 hover:bg-neutral-950 hover:text-neutral-50 dark:bg-neutral-900 dark:hover:text-neutral-950 dark:hover:bg-neutral-50 rounded-full max-sm:w-full max-sm:text-center max-sm:mt-5 max-sm:py-3"
          >
            {getLocalizedString("home", "contact-button")}
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  return {
    props: {
      projects: await getProjects(),
    },
  };
}

export const getProjects = async (): Promise<Project[]> => {
  const projectsDirectory = path.join(
    process.cwd() /* process current directory */,
    "projects"
  );
  const filenames = await fs.readdir(projectsDirectory);

  const files = await Promise.all(
    filenames.map(async (filename: any) => {
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
