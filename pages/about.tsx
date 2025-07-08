import fs from "fs";
import grayMatter from "gray-matter";
import useGlobalization, { Globalization } from "hooks/useGlobalization";
import Head from "next/head";
import Image from "next/image";
import { NextPage } from "next/types";
import path from "path";
import { Project } from "types";
import { AnimatedText } from "components";
import GrabIcon from "../assets/icons/grab-icon.svg";
import XIcon from "../assets/icons/x-icon.svg";



const jobs = (globalization: Globalization) => {
  const { translate, locale } = globalization;
  const dateLocale = locale === "ar" ? "ar-EG" : locale;
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    year: "numeric",
  };
  return [
    {
      date: `${new Date(2023, 1, 1).toLocaleDateString(
        dateLocale,
        options
      )} - ${translate("about.experience.present", "Present")}`,
      title: translate(
        "about.experience.seniorSoftwareEngineer",
        "Senior Software Engineer"
      ),
      location: translate(
        "about.experience.amsterdam",
        "Amsterdam, Netherlands"
      ),
      company: "Rodeo Software",
      role: translate("about.experience.fullTime", "Full-time"),
    },
    {
      date: `${new Date(2017, 11, 1).toLocaleDateString(
        dateLocale,
        options
      )} - ${new Date(2022, 12, 31).toLocaleDateString(dateLocale, options)}`,
      title: translate(
        "about.experience.seniorFrontendEngineer",
        "Senior Front-end Engineer"
      ),
      location: translate("about.experience.amman", "Amman, Jordan"),
      company: "Cura Healthcare",
      role: translate("about.experience.fullTime", "Full-time"),
    },
    {
      date: `${new Date(2015, 6, 1).toLocaleDateString(
        dateLocale,
        options
      )} - ${new Date(2017, 11, 1).toLocaleDateString(dateLocale, options)}`,
      title: translate(
        "about.experience.frontendEngineer",
        "Front-end Engineer"
      ),
      location: translate("about.experience.amman", "Amman, Jordan"),
      company: "Plexable",
      role: translate("about.experience.fullTime", "Full-time"),
    },
  ];
};
const About = () => {
  const globalization = useGlobalization();
  const { translate, locale } = globalization;
  if (typeof window !== "undefined")
    window.localStorage.setItem("color-theme", "light");

  return (
    <div className="pt-[70px] max-md:pt-[60px]">
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>About - Moe Rabay&apos;a</title>

        {/* <!-- Primary Meta Tags --> */}
        <meta name="title" content="About | Moe Rabay'a" />
        <meta
          name="description"
          content="A passionate problem solver with 7+ years of experience working in the field of ux and traditional development."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:url" content="https://moerabaya.com/about" />
        <meta property="og:title" content="About | Moe Rabay'a" />
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
        <meta property="twitter:title" content="About | Moe Rabay'a" />
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
          <div className="container mx-auto grid grid-cols-9 gap-7 h-full max-md:gap-4  max-md:grid-cols-5">
            <div className="bg-neutral-100 dark:bg-neutral-900"></div>
            <div className="bg-neutral-100 dark:bg-neutral-900"></div>
            <div className="bg-neutral-100 dark:bg-neutral-900"></div>
            <div className="bg-neutral-100 dark:bg-neutral-900"></div>
            <div className="bg-neutral-100 dark:bg-neutral-900"></div>
            <div className="bg-neutral-100 dark:bg-neutral-900 max-md:hidden"></div>
            <div className="bg-neutral-100 dark:bg-neutral-900 max-md:hidden"></div>
            <div className="bg-neutral-100 dark:bg-neutral-900 max-md:hidden"></div>
            <div className="bg-neutral-100 dark:bg-neutral-900 max-md:hidden"></div>
          </div>
        </div>
        <div className="relative">
          <div className="container mx-auto max-w-5xl pt-16 max-md:py-12 mb-0 px-5 pb-20 max-md:pb-8 max-sm:grid-cols-1 flex flex-wrap items-center justify-between">
            <div className="flex-1 min-w-full relative mx-auto hidden max-sm:block p-5">
              <Image
                src={
                  "https://en.gravatar.com/userimage/201100235/0e21cbd55417f43fa3f5e687fa8b1fb2.png?size=1000"
                }
                alt="Portrait of Moe Rabay'a"
                placeholder="blur"
                blurDataURL='"https://en.gravatar.com/userimage/201100235/0e21cbd55417f43fa3f5e687fa8b1fb2.png?size=1"'
                width={400}
                height={990}
                className="overflow-hidden mb-0 w-full max-md:w-[340px] inline-block"
              />
            </div>
            <div className="ps-[1rem] flex-1 pe-[2rem] max-w-full max-sm:p-[0]">
              <div>
                <span className="w-[100vw] h-[0.5px] bg-[#FF0000] absolute left-0"></span>
                <div className="relative">
                  <XIcon className="absolute -top-[2px] -left-[0.75px]" />
                  <XIcon className="absolute -top-[2px] right-0" />
                </div>
                <div className="relative pt-14 pb-12 max-sm:pt-8 max-sm:pb-6">
                  <XIcon className="absolute -mt-[2px] -left-[0.75px]" />
                  <span className="absolute left-8 top-7 px-[4px] py-[2px] rounded-[4px] bg-[#ECF0FF] text-[#0038FF] font-mono text-[11px]  max-sm:top-[6%] max-sm:left-3">
                    font-weight: bolder
                  </span>
                  <span className="w-[0.5px] h-[100vh] bg-[#FF0000] absolute bottom-0 left-0"></span>
                  <AnimatedText
                    text={translate("about.title", "Moe Rabaya")}
                    type="h2"
                    className={`border-[1px] border-solid border-[#4597F7] max-lg:text-[6.75vw] max-md:text-[3rem]  max-sm:text-[10vw] max-[500px]:text-[12vw] w-[calc(auto + 100px)] ${
                      locale === "ar"
                        ? "text-[5.5rem] leading-[1]"
                        : "text-7xl leading-[0.8]"
                    } leading-[0.8] m-0 uppercase *:!font-extrabold px-0 text-stone-800 dark:text-neutral-50`}
                  />
                  <XIcon className="absolute -mt-[3px] -left-[0.75px]" />
                  <span className="absolute -left-5 bottom-9 px-[4px] py-[2px] rounded-[4px] bg-[#FFECEC] text-[#FF0000] font-mono text-[11px] max-sm:bottom-[10%] max-sm:-left-3">
                    margin-left: -10%
                  </span>

                  <span className="absolute -right-7 bottom-20 px-[4px] py-[2px] rounded-[4px] bg-[#FFEFF9] text-[#DA0592] font-mono text-[11px] max-sm:-right-3 max-sm:bottom-[32%]">
                    padding-top: 2em
                  </span>
                  <GrabIcon className="absolute top-[62%] left-[45%] -translate-x-1/2 -translate-y-1/2" />
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
            <div className="flex-1 relative mx-auto text-center max-sm:hidden">
              <Image
                src={
                  "https://en.gravatar.com/userimage/201100235/0e21cbd55417f43fa3f5e687fa8b1fb2.png?size=1000"
                }
                alt="Portrait of Moe Rabay'a"
                placeholder="blur"
                blurDataURL='"https://en.gravatar.com/userimage/201100235/0e21cbd55417f43fa3f5e687fa8b1fb2.png?size=1"'
                width={400}
                height={990}
                className="overflow-hidden mb-0 w-[292px] max-md:w-[200px] inline-block"
              />
            </div>
          </div>
          <div className="container mx-auto max-w-5xl px-10 text-[1.25em] pb-10 max-md:text-[1.1em] max-sm:px-5 max-[400px]:text-[1.05em]">
            <div>
              {translate(
                "about.about1",
                "A software engineer with over 9+ years of experience, I am currently based in Amsterdam."
              )}
            </div>
            <div className="mt-8 max-[400px]:mt-5">
              {translate(
                "about.about2",
                "I help companies build intuitive softwares and products using state-of-the-art technologies ensuring best practices are applied for smooth user experience and development process."
              )}
            </div>
          </div>
          <div className="container mx-auto max-w-5xl px-10 text-[1.25em] pb-10 max-sm:px-5 flex flex-wrap gap-3">
            <a
              href="mailto:contact@moerabaya.com"
              className="py-[10px] w-[206px] text-center inline-block text-white bg-stone-950 dark:bg-stone-50 dark:text-stone-950 text-[1rem] font-medium rounded-sm max-sm:px-[5px] max-sm:w-[170px] max-[400px]:w-full"
            >
              {translate("about.connect", "Let's connect...")}
            </a>
            <a
              href="/resume.pdf"
              className="py-[10px] w-[206px] inline-block text-center dark:text-white text-stone-950 text-[1rem] font-medium rounded-sm hover:bg-neutral-200 dark:hover:bg-[rgba(255,255,255,0.15)] max-sm:w-[170px] max-[400px]:w-full"
            >
              {translate("footer.downloadResume", "Download Resume")}
            </a>
          </div>
        </div>
        <div className="container mx-auto relative">
          <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
        </div>
      </div>
      <div className="container mx-auto max-w-4xl py-24 max-md:py-14 mb-0 px-5">
        <h4 className="block dark:text-neutral-100 text-neutral-950 font-semibold max-md:text-[1.1rem]">
          {translate("about.experience.title", "Experience")}
        </h4>
        {jobs(globalization).map((item, index) => (
          <div key={`job-${index}`} className="flex flex-wrap pb-8">
            <h4 className="w-[230px] max-md:w-[180px] dark:text-neutral-100 text-neutral-950 text-[1.15rem] max-md:text-[1rem]">
              {item.date}
            </h4>
            <div className="flex-1 min-w-[270px]">
              <h4 className="mt-4 m-0 dark:text-neutral-100 text-neutral-950 text-[1.15rem]  max-md:text-[1rem]">
                {item.title}
              </h4>
              <h6 className="m-0 uppercase font-semibold dark:text-neutral-400 text-neutral-700 mt-[3px] max-md:text-[0.85rem]">
                {item.company} . {item.role}
              </h6>
              <h6 className="m-0 uppercase font-semibold dark:text-neutral-100 text-neutral-950 mt-1 self-baseline max-md:text-[0.85rem] hidden max-md:block">
                {item.location}
              </h6>
            </div>
            <h6 className="m-0 uppercase font-semibold dark:text-neutral-100 text-neutral-950 mt-5 self-baseline max-md:text-[0.85rem] max-md:hidden">
              {item.location}
            </h6>
          </div>
        ))}
      </div>
    </div>
  );
};

About.displayName = "About";

export default About;

export async function getStaticProps() {
  return { props: {} }
}
