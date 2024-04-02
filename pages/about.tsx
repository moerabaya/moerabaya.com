import fs from "fs";
import grayMatter from "gray-matter";
import useGlobalization from "hooks/useGlobalization";
import Head from "next/head";
import Image from "next/image";
import { NextPage } from "next/types";
import path from "path";
import styled from "styled-components";
import { Project } from "types";
import { AnimatedText } from "components/atoms";
import GrabIcon from "../assets/icons/grab-icon.svg";
import XIcon from "../assets/icons/x-icon.svg";

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
  const { getLocalizedString, translate, locale } = useGlobalization();
  const dateLocale = locale === "ar" ? "ar-EG" : locale;
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    year: "numeric",
  };
  if (typeof window !== "undefined")
    window.localStorage.setItem("color-theme", "light");

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
      <div className="relative">
        <div className="h-full absolute w-full">
          <div className="container h-full mx-auto grid grid-cols-9 gap-7 h-full">
            <div className="bg-neutral-100 dark:bg-neutral-900"></div>
            <div className="bg-neutral-100 dark:bg-neutral-900"></div>
            <div className="bg-neutral-100 dark:bg-neutral-900"></div>
            <div className="bg-neutral-100 dark:bg-neutral-900"></div>
            <div className="bg-neutral-100 dark:bg-neutral-900"></div>
            <div className="bg-neutral-100 dark:bg-neutral-900"></div>
            <div className="bg-neutral-100 dark:bg-neutral-900"></div>
            <div className="bg-neutral-100 dark:bg-neutral-900"></div>
            <div className="bg-neutral-100 dark:bg-neutral-900"></div>
          </div>
        </div>
        <div className="relative">
          <div className="container mx-auto max-w-5xl flex pt-24 max-md:py-12 mb-0 px-5 pb-6 max-md:pb-8 max-sm:grid-cols-1">
            <div className="ps-[1rem] flex-none pe-[2rem]">
              <div>
                <span className="w-[100vw] h-[0.5px] bg-[#FF0000] absolute left-0"></span>
                <div className="relative">
                  <XIcon className="absolute -top-[2px] -left-[0.75px]" />
                  <XIcon className="absolute -top-[2px] right-0" />
                </div>
                <div className="relative pt-14 pb-12">
                  <XIcon className="absolute -mt-[2px] -left-[0.75px]" />
                  <span className="absolute left-8 top-7 px-[4px] py-[2px] rounded-[4px] bg-[#ECF0FF] text-[#0038FF] font-mono text-[11px]">
                    font-weight: bolder
                  </span>
                  <span className="w-[0.5px] h-[100vh] bg-[#FF0000] absolute bottom-0 left-0"></span>
                  <AnimatedText
                    text={translate("about.title", "Mohammed Rabaya")}
                    type="h2"
                    className={`border-[1px] border-solid border-[#4597F7] w-[490px] ${
                      locale === "ar"
                        ? "text-[5.5rem] leading-[1]"
                        : "text-7xl leading-[0.8]"
                    } leading-[0.8] m-0 uppercase *:!font-extrabold px-0 text-stone-800 dark:text-neutral-50`}
                  />
                  <XIcon className="absolute -mt-[3px] -left-[0.75px]" />
                  <span className="absolute -left-5 bottom-9 px-[4px] py-[2px] rounded-[4px] bg-[#FFECEC] text-[#FF0000] font-mono text-[11px]">
                    margin-left: -10%
                  </span>

                  <span className="absolute -right-7 bottom-20 px-[4px] py-[2px] rounded-[4px] bg-[#FFEFF9] text-[#DA0592] font-mono text-[11px]">
                    padding-top: 2em
                  </span>
                  <GrabIcon className="absolute bottom-[4.5em] left-[14.15em]" />
                  <div className="-mt-1 text-center">
                    <span
                      className="bg-[#4597F7] px-[2.5px] py-[1.25px] text-[8px] rounded-[1.75px] text-[white]"
                      dir={"ltr"}
                    >
                      531 x 154
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-initial relative mx-auto">
              <Image
                src={
                  "https://en.gravatar.com/userimage/201100235/0e21cbd55417f43fa3f5e687fa8b1fb2.png?size=1000"
                }
                alt="Portrait of Mohammed Rabay'a"
                placeholder="blur"
                blurDataURL='"https://en.gravatar.com/userimage/201100235/0e21cbd55417f43fa3f5e687fa8b1fb2.png?size=1"'
                width={400}
                height={990}
                className="overflow-hidden -mt-10 w-[292px]"
              />
            </div>
          </div>
          <div className="container mx-auto max-w-5xl px-10 text-[1.25em] pb-10">
            <div>
              {translate(
                "about.about1",
                "A software engineer with over 9+ years of experience, I am currently based in Amsterdam."
              )}
            </div>
            <div className="mt-8">
              {translate(
                "about.about2",
                "I help companies build intuitive softwares and products using state-of-the-art technologies ensuring best practices are applied for smooth user experience and development process."
              )}
            </div>
          </div>
          <div className="container mx-auto max-w-5xl px-10 text-[1.25em] pb-10">
            <a
              href="mailto:contact@moerabaya.com"
              className="py-[10px] w-[206px] text-center inline-block text-white bg-stone-950 dark:bg-stone-50 dark:text-stone-950 text-[1rem] font-medium rounded-sm"
            >
              {translate("about.connect", "Let's connect...")}
            </a>
            <a
              href="/mohammed-rabaya.pdf"
              className="py-[10px] w-[206px] inline-block ms-4 text-center dark:text-white text-stone-950 text-[1rem] font-medium rounded-sm hover:bg-neutral-200 dark:hover:bg-[rgba(255,255,255,0.15)]"
            >
              {translate("footer.downloadResume", "Download Resume")}
            </a>
          </div>
        </div>
        <div className="container mx-auto relative">
          <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
        </div>
      </div>
      <div className="container mx-auto max-w-4xl pt-24 max-md:py-12 mb-0 px-5 pb-6 max-md:pb-8">
        <h4 className="block dark:text-neutral-100 text-neutral-950">
          {translate("about.experience.title", "Experience")}
        </h4>
        <div className="flex">
          <h4 className="w-[230px] dark:text-neutral-100 text-neutral-950 text-[1.15rem]">
            {new Date("01-01-2023").toLocaleDateString(dateLocale, options)} -{" "}
            {translate("about.experience.present", "Present")}
          </h4>
          <div className="flex-1">
            <h4 className="mt-4 m-0 dark:text-neutral-100 text-neutral-950 text-[1.15rem]">
              {translate(
                "about.experience.seniorSoftwareEngineer",
                "Senior Software Engineer"
              )}
            </h4>
            <h6 className="m-0 uppercase font-semibold dark:text-neutral-400 text-neutral-700 mt-[3px]">
              Rodeo Software .{" "}
              {translate("about.experience.fullTime", "Full-time")}
            </h6>
          </div>
          <h6 className="m-0 uppercase font-semibold dark:text-neutral-100 text-neutral-950 mt-5 self-baseline">
            {translate("about.experience.amsterdam", "Amsterdam, Netherlands")}
          </h6>
        </div>
        <div className="flex mt-20">
          <h4 className="w-[230px] dark:text-neutral-100 text-neutral-950 text-[1.15rem] relative">
            <div className="w-[1px] h-[90px] bg-neutral-800 absolute bottom-[140%] start-2"></div>
            {new Date("11-01-2017").toLocaleDateString(dateLocale, options)} -{" "}
            {new Date("12-31-2022").toLocaleDateString(dateLocale, options)}
          </h4>
          <div className="flex-1">
            <h4 className="mt-4 m-0 dark:text-neutral-100 text-neutral-950 text-[1.15rem]">
              {translate(
                "about.experience.seniorFrontendEngineer",
                "Senior Front-end Engineer"
              )}
            </h4>
            <h6 className="m-0 uppercase font-semibold dark:text-neutral-400 text-neutral-700 mt-[3px]">
              Cura Healthcare .{" "}
              {translate("about.experience.fullTime", "Full-time")}
            </h6>
          </div>
          <h6 className="m-0 uppercase font-semibold dark:text-neutral-100 text-neutral-950 mt-5 self-baseline">
            {translate("about.experience.amman", "Amman, Jordan")}
          </h6>
        </div>
        <div className="flex mt-8 pb-16">
          <h4 className="w-[230px] dark:text-neutral-100 text-neutral-950 text-[1.15rem]">
            {new Date("06-01-2015").toLocaleDateString(dateLocale, options)} -{" "}
            {new Date("11-01-2017").toLocaleDateString(dateLocale, options)}
          </h4>
          <div className="flex-1">
            <h4 className="mt-4 m-0 dark:text-neutral-100 text-neutral-950 text-[1.15rem]">
              {translate(
                "about.experience.frontendEngineer",
                "Front-end Engineer"
              )}
            </h4>
            <h6 className="m-0 uppercase font-semibold dark:text-neutral-400 text-neutral-700 mt-[3px]">
              Plexable . {translate("about.experience.fullTime", "Full-time")}
            </h6>
          </div>
          <h6 className="m-0 uppercase font-semibold dark:text-neutral-100 text-neutral-950 mt-5 self-baseline">
            {translate("about.experience.amman", "Amman, Jordan")}
          </h6>
        </div>
      </div>
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
