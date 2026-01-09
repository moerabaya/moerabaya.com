"use client";

import Image from "next/image";
import GrabIcon from "@/assets/icons/grab-icon.svg";
import XIcon from "@/assets/icons/x-icon.svg";
import { AnimatedText, Button } from "components";
import useGlobalization from "hooks/useGlobalization";
import { useTranslations } from "next-intl";

import Meta from "@/components/Meta";

const jobs = (
  globalization: ReturnType<typeof useGlobalization>,
  t: ReturnType<typeof useTranslations>
) => {
  const { locale } = globalization;
  const dateLocale = locale === "ar" ? "ar-EG" : locale;
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    year: "numeric",
  };
  return [
    {
      date: `${new Date(2024, 6, 1).toLocaleDateString(
        dateLocale,
        options
      )} - ${t("about.experience.present")}`,
      title: t("about.experience.seniorEngineer"),
      location: t("about.experience.eindhoven"),
      company: "Sendcloud",
      role: t("about.experience.fullTime"),
    },
    {
      date: `${new Date(2023, 1, 1).toLocaleDateString(
        dateLocale,
        options
      )} - ${new Date(2024, 6, 1).toLocaleDateString(dateLocale, options)}`,
      title: t("about.experience.seniorSoftwareEngineer"),
      location: t("about.experience.amsterdam"),
      company: "Rodeo Software",
      role: t("about.experience.fullTime"),
    },
    {
      date: `${new Date(2017, 11, 1).toLocaleDateString(
        dateLocale,
        options
      )} - ${new Date(2022, 12, 31).toLocaleDateString(dateLocale, options)}`,
      title: t("about.experience.seniorFrontendEngineer"),
      location: t("about.experience.amman"),
      company: "Cura Healthcare",
      role: t("about.experience.fullTime"),
    },
    {
      date: `${new Date(2015, 6, 1).toLocaleDateString(
        dateLocale,
        options
      )} - ${new Date(2017, 11, 1).toLocaleDateString(dateLocale, options)}`,
      title: t("about.experience.frontendEngineer"),
      location: t("about.experience.amman"),
      company: "Plexable",
      role: t("about.experience.fullTime"),
    },
  ];
};

const About = () => {
  const globalization = useGlobalization();
  const { locale } = globalization;
  const t = useTranslations();

  // Calculate years of experience since 2015
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - 2015;

  return (
    <div className="pt-[70px] max-md:pt-[60px]">
      <Meta
        title={t("about.meta-title")}
        description={`A passionate problem solver with ${yearsOfExperience}+ years of experience working in the field of ux and traditional development.`}
      />
      <div className="relative">
        <div className="absolute h-full w-full">
          <div className="container mx-auto grid h-full grid-cols-9 gap-7 max-md:grid-cols-5 max-md:gap-4">
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
          <div className="container mx-auto mb-0 flex max-w-5xl flex-wrap items-center justify-between px-5 pb-20 pt-16 max-md:py-12 max-md:pb-8 max-sm:grid-cols-1">
            <div className="relative mx-auto hidden min-w-full flex-1 p-5 max-sm:block">
              <Image
                src={
                  "https://en.gravatar.com/userimage/201100235/0e21cbd55417f43fa3f5e687fa8b1fb2.png?size=1000"
                }
                alt="Portrait of Moe Rabay'a"
                placeholder="blur"
                blurDataURL='"https://en.gravatar.com/userimage/201100235/0e21cbd55417f43fa3f5e687fa8b1fb2.png?size=1"'
                width={400}
                height={990}
                className="mb-0 inline-block w-full overflow-hidden max-md:w-[340px]"
              />
            </div>
            <div className="max-w-full flex-1 pe-[2rem] ps-[1rem] max-sm:p-[0]">
              <div>
                <span className="absolute left-0 h-[0.5px] w-full bg-[#FF0000]"></span>
                <div className="relative">
                  <XIcon className="absolute -left-[0.75px] -top-[2px]" />
                  <XIcon className="absolute -top-[2px] right-0" />
                </div>
                <div className="relative pb-12 pt-14 max-sm:pb-6 max-sm:pt-8">
                  <XIcon className="absolute -left-[0.75px] -mt-[2px]" />
                  <span className="absolute left-8 top-7 rounded-[4px] bg-[#ECF0FF] px-[4px] py-[2px] font-mono text-[11px] text-[#0038FF] max-sm:left-3 max-sm:top-[6%]">
                    font-weight: bolder
                  </span>
                  <span className="absolute bottom-0 left-0 h-[100vh] w-[0.5px] bg-[#FF0000]"></span>
                  <AnimatedText
                    text={t("about.title")}
                    type="h2"
                    className={`w-[calc(auto + 100px)] border-[1px] border-solid border-[#4597F7] max-lg:text-[6.75vw] max-md:text-[3rem] max-sm:text-[10vw] max-[500px]:text-[12vw] ${
                      locale === "ar"
                        ? "text-[5.5rem] leading-[1.1]"
                        : "text-7xl leading-[0.8]"
                    } m-0 px-0 uppercase leading-[0.8] text-stone-800 *:!font-extrabold dark:text-neutral-50`}
                  />
                  <XIcon className="absolute -left-[0.75px] -mt-[3px]" />
                  <span className="absolute -left-5 bottom-9 rounded-[4px] bg-[#FFECEC] px-[4px] py-[2px] font-mono text-[11px] text-[#FF0000] max-sm:-left-3 max-sm:bottom-[10%]">
                    margin-left: -10%
                  </span>

                  <span className="absolute -right-7 bottom-20 rounded-[4px] bg-[#FFEFF9] px-[4px] py-[2px] font-mono text-[11px] text-[#DA0592] max-sm:-right-3 max-sm:bottom-[32%]">
                    padding-top: 2em
                  </span>
                  <GrabIcon className="absolute left-[45%] top-[62%] -translate-x-1/2 -translate-y-1/2" />
                  <div className="-mt-1 text-center">
                    <span
                      className="rounded-[1.75px] bg-[#4597F7] px-[2.5px] py-[1.25px] text-[8px] text-[white]"
                      dir={"ltr"}
                    >
                      531 x 154
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative mx-auto flex-1 text-center max-sm:hidden">
              <Image
                src={
                  "https://en.gravatar.com/userimage/201100235/0e21cbd55417f43fa3f5e687fa8b1fb2.png?size=1000"
                }
                alt="Portrait of Moe Rabay'a"
                placeholder="blur"
                blurDataURL='"https://en.gravatar.com/userimage/201100235/0e21cbd55417f43fa3f5e687fa8b1fb2.png?size=1"'
                width={400}
                height={990}
                className="mb-0 inline-block w-[292px] overflow-hidden max-md:w-[200px]"
              />
            </div>
          </div>
          <div className="container mx-auto max-w-5xl px-10 pb-10 text-[1.25em] max-md:text-[1.1em] max-sm:px-5 max-[400px]:text-[1.05em]">
            <div>{t("about.about1", { years: yearsOfExperience })}</div>
            <div className="mt-8 max-[400px]:mt-5">
              {t("about.about2", {
                years: yearsOfExperience.toLocaleString(locale),
              })}
            </div>
          </div>
          <div className="container mx-auto flex max-w-5xl flex-wrap gap-3 px-10 pb-10 text-[1.25em] max-sm:px-5">
            <Button
              as="a"
              href="mailto:contact@moerabaya.com"
              variant="primary"
            >
              {t("about.connect")}
            </Button>
            <Button as="a" href="/resume.pdf" variant="secondary">
              {t("footer.downloadResume")}
            </Button>
          </div>
        </div>
        <div className="container relative mx-auto">
          <hr className="h-px border-0 bg-gray-200 dark:bg-gray-700" />
        </div>
      </div>
      <div className="container mx-auto mb-0 max-w-4xl px-5 py-24 max-md:py-14">
        <h4 className="block font-semibold text-neutral-950 dark:text-neutral-100 max-md:text-[1.1rem]">
          {t("about.experience.title")}
        </h4>
        {jobs(globalization, t).map((item, index) => (
          <div key={`job-${index}`} className="flex flex-wrap pb-8">
            <h4 className="w-[230px] text-[1.15rem] text-neutral-950 dark:text-neutral-100 max-md:w-[180px] max-md:text-[1rem]">
              {item.date}
            </h4>
            <div className="min-w-[270px] flex-1">
              <h4 className="m-0 mt-4 text-[1.15rem] text-neutral-950 dark:text-neutral-100 max-md:text-[1rem]">
                {item.title}
              </h4>
              <h6 className="m-0 mt-[3px] font-semibold uppercase text-neutral-700 dark:text-neutral-400 max-md:text-[0.85rem]">
                {item.company} . {item.role}
              </h6>
              <h6 className="m-0 mt-1 hidden self-baseline font-semibold uppercase text-neutral-950 dark:text-neutral-100 max-md:block max-md:text-[0.85rem]">
                {item.location}
              </h6>
            </div>
            <h6 className="m-0 mt-5 self-baseline font-semibold uppercase text-neutral-950 dark:text-neutral-100 max-md:hidden max-md:text-[0.85rem]">
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
