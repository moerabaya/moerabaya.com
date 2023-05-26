import fs from "fs";
import grayMatter from "gray-matter";
import useGlobalization from "hooks/useGlobalization";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { NextPage } from "next/types";
import path from "path";
import styled from "styled-components";
import { Project } from "types";
import AnimatedView from "../components/atoms/AnimatedView";

const RainbowText = styled.a`
  background: linear-gradient(
    217deg,
    #ef5350,
    #f48fb1,
    #7e57c2,
    #2196f3,
    #26c6da,
    #43a047
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
interface Props {
  projects: Project[];
}
const About: NextPage<Props> = ({ projects }: Props) => {
  const { getLocalizedString } = useGlobalization();
  if (typeof window !== "undefined")
    window.localStorage.setItem("color-theme", "light");

  function WorkItems() {
    var list: any = [];

    projects
      ?.sort((a: any, b: any) => a.index - b.index)
      .map((project: Project, index: number) => {
        if (index !== 1)
          list.push(
            // eslint-disable-next-line react/jsx-no-duplicate-props
            <Link href={`work/${project.slug}`}>
              <AnimatedView
                key={project.slug}
                delay={(index === 0 ? 0.5 : 0.25) * (index + 1)}
                duration={0.75}
                vertical="25%"
              >
                <Image
                  placeholder="blur"
                  layout="responsive"
                  alt=""
                  src={
                    project.cover_photo &&
                    require("../assets/images/projects/" + project.cover_photo)
                  }
                  className="overflow-hidden rounded-xl transition ease-in-out duration-500 hover:shadow-stone-200 dark:hover:shadow-stone-700 hover:shadow-md cursor-pointer m-0 border border-solid border-stone-200"
                />
              </AnimatedView>
            </Link>
          );
      });
    return <ul className="grid grid-cols-3 gap-4 m-0">{list}</ul>;
  }
  return (
    <div className="page-content">
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>About - Mohammed Rabay&apos;a</title>

        {/* <!-- Primary Meta Tags --> */}
        <meta name="title" content="About | Mohammed Rabay'a" />
        <meta
          name="description"
          content="A passionate problem solver with 7+ years of experience working in the field of ux and traditional development."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:url" content="https://moerabaya.com/about" />
        <meta property="og:title" content="About | Mohammed Rabay'a" />
        <meta
          property="og:description"
          content="A passionate problem solver with 7+ years of experience working in the field of ux and traditional development."
        />
        <meta
          property="og:image"
          content={require("../assets/images/metaimage.png")}
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:url" content="https://moerabaya.com/about" />
        <meta property="twitter:title" content="About | Mohammed Rabay'a" />
        <meta
          property="twitter:description"
          content="A passionate problem solver with 7+ years of experience working in the field of ux and traditional development."
        />
        <meta
          property="twitter:image"
          content={require("../assets/images/metaimage.png")}
        />
      </Head>
      <div className="container mx-auto max-w-4xl grid grid-cols-4 my-16 mb-0">
        <div className="text-2xl">
          <Image
            src={
              "https://en.gravatar.com/userimage/201100235/0e21cbd55417f43fa3f5e687fa8b1fb2.png?size=1000"
            }
            alt="Portrait of Mohammed Rabay'a"
            placeholder="blur"
            blurDataURL='"https://en.gravatar.com/userimage/201100235/0e21cbd55417f43fa3f5e687fa8b1fb2.png?size=1"'
            width={400}
            height={990}
            className="overflow-hidden rounded-3xl"
          />
        </div>
        <div className="ps-8 col-span-3 mt-4">
          <AnimatedView>
            <h4 className="font-semibold leading-5 text-stone-800 dark:text-neutral-50">
              {getLocalizedString("about", "title")}
            </h4>
          </AnimatedView>
          <AnimatedView delay={0.75}>
            <h4 className="text-lg text-stone-800 leading-6 dark:text-neutral-50">
              My name is Mohammed Rabaya - a Software Engineer with over{" "}
              {new Date().getFullYear() - 2015} years of experience in designing
              and building web and mobile apps. I am currently based in{" "}
              <strong className="font-medium">Amsterdam</strong>, developing
              awesome products for{" "}
              <RainbowText
                target="_blank"
                href="https://getrodeo.io/"
                className="text-violet-600 hover:underline dark:text-red-500"
                rel="noreferrer"
              >
                <strong>Rodeo Software</strong>
              </RainbowText>
              .
            </h4>
          </AnimatedView>
          <div>
            <AnimatedView delay={1} className="inline-block me-3">
              <a
                className={`px-4 py-2 bg-neutral-900 text-neutral-50 dark:bg-neutral-50 dark:text-neutral-900 hover:bg-amber-500 dark:hover:bg-amber-500 rounded-2xl text-base inline-block ml-auto mt-2 transition ease-in-out hover:rounded-full`}
                href={"mail:contact@moerabaya.com"}
              >
                {getLocalizedString("about", "reach-out")}
              </a>
            </AnimatedView>
            <AnimatedView delay={1.25} className="inline-block">
              <Link
                className={`px-4 py-2 bg-neutral-200 hover:bg-neutral-900 hover:text-neutral-50  dark:bg-neutral-900 dark:hover:bg-neutral-800 rounded-2xl text-base inline-block ml-auto mt-2 transition ease-in-out hover:rounded-full`}
                href={"engineering-resume-2022.pdf"}
              >
                {getLocalizedString("about", "download-resume")}
              </Link>
            </AnimatedView>
          </div>
        </div>
      </div>
      <div className="container mx-auto max-w-5xl">
        <hr className="h-px my-6 bg-gray-200 border-0 dark:bg-gray-700" />
      </div>
      <div className="container mx-auto max-w-4xl my-10">
        <h4 className="font-medium text-xl">Recent work</h4>
      </div>
      <div className="container mx-auto max-w-5xl">{WorkItems()}</div>
    </div>
  );
};

About.displayName = "About";

export default About;

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
