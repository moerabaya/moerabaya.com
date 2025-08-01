import React, { useContext, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Logo from "assets/images/logo.svg";
import { AnimatedView } from "components";
import useGlobalization from "hooks/useGlobalization";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { ThemeContext } from "templates/ThemeProvider";
import navigation from "utils/data/navigation.json";

import { Burger } from "@/components/Button";

import Nav from "./Nav.styled";

const Pages = navigation;

type NavigationProps = {
  previous?: string;
  next?: string;
  slug?: string;
  meta?: {
    title?: string;
    description?: string;
    image?: string;
    date?: string;
    tags?: string[];
  };
};

const Navigation = ({ previous, next, ...props }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { pathname } = useRouter();
  const { translate } = useGlobalization();
  const { theme, setTheme } = useContext(ThemeContext);
  const { locale } = useGlobalization();
  const isProject = pathname.split("/")?.[1] === "work" && props.slug;

  const isDark = theme === "dark";

  const renderMenu = () =>
    Pages[locale == "ar" ? "ar" : "en"]?.map(({ path, name }, index) => (
      <Link
        className={`px-4 py-2 ${
          index == 0 &&
          "border-[1px] border-solid border-[#EEEEEE] bg-[#F1F1F1] dark:border-[#202020] dark:bg-stone-900 dark:hover:border-stone-800 dark:active:bg-stone-800"
        } font-regular mx-2 rounded-2xl text-stone-800 active:bg-stone-200 dark:text-stone-50 dark:md:active:bg-stone-900`}
        href={path}
        key={name}
      >
        {name}
      </Link>
    ));

  const Socials = [
    <span
      key={"theme-switch"}
      className={`font-regular relative mx-2 flex w-20 items-center rounded-full border-[1px] border-solid border-[#EEEEEE] bg-[#F1F1F1] px-1 hover:border-stone-200 hover:bg-stone-100 active:bg-stone-200 dark:border-[#202020] dark:bg-stone-900 dark:text-gray-50 dark:hover:border-stone-800 dark:hover:bg-stone-900 dark:active:bg-stone-800`}
    >
      <span
        className={`inline-block h-9 w-9 rounded-full border-[1px] border-solid border-stone-200 bg-[#EAEAEA] transition-transform dark:border-neutral-800 dark:bg-neutral-900 ${
          isDark && "translate-x-[94%] rtl:-translate-x-[94%]"
        }`}
      ></span>
      <button
        className="absolute left-0 flex h-full w-full cursor-pointer items-center justify-between px-2 text-inherit"
        onClick={() => setTheme(isDark ? "light" : "dark")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`mx-[0.1rem] h-6 w-6 ${isDark && "opacity-40"}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`mx-[0.2rem] h-5 w-5 ${!isDark && "opacity-40"}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
          />
        </svg>
      </button>
    </span>,
    <a
      target="_blank"
      href="https://github.com/moerabaya/"
      key="github-url"
      className="font-regular mx-2 rounded-2xl border-[1px] border-solid border-[#EEEEEE] bg-[#F1F1F1] px-2 py-2 hover:border-stone-200 active:bg-stone-200 dark:border-[#202020] dark:bg-stone-900 dark:text-gray-50 dark:hover:border-stone-800 dark:active:bg-stone-800"
    >
      <BsGithub size="26px" />
    </a>,
    <a
      target="_blank"
      href="https://www.linkedin.com/in/moerabaya/"
      key="linkedin-url"
      className="font-regular mx-2 rounded-2xl border-[1px] border-solid border-[#EEEEEE] bg-[#F1F1F1] px-2 py-2 hover:border-stone-200 active:bg-stone-200 dark:border-[#202020] dark:bg-stone-900 dark:text-gray-50 dark:hover:border-stone-800 dark:active:bg-stone-800"
    >
      <BsLinkedin size="26px" className="rounded-md" />
    </a>,
  ];
  const renderInnerMenu = () =>
    Pages[locale == "ar" ? "ar" : "en"].map(({ path, name }, index) => (
      <AnimatedView
        key={name}
        animate={isOpen}
        delay={isOpen ? index * 0.5 : 0}
      >
        <button
          className="block p-5 text-2xl text-inherit"
          onClick={() => setIsOpen(false)}
        >
          <Link href={path} className="animated">
            {name}
          </Link>
        </button>
      </AnimatedView>
    ));
  if (isProject)
    return (
      <Nav isOpen={isOpen} className="text-center">
        <AnimatedView vertical={"-75"} className="h-full">
          <div className="container m-auto flex h-full items-center justify-stretch">
            <div className="flex-1 text-start">
              <Link
                href={"/"}
                className="inline-block rounded-[3px] px-3 py-3 pb-4 align-middle text-xl leading-3 text-neutral-900 hover:bg-neutral-100 dark:text-neutral-50 dark:hover:bg-neutral-900"
                style={{ fontVariant: "all-small-caps" }}
              >
                <svg
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="me-2 mt-[1px] inline-block size-[10px] *:fill-neutral-900 dark:*:fill-neutral-50 max-sm:m-0 max-sm:size-[16px]"
                >
                  <path
                    d="M5.00048 4.05732L8.30048 0.757324L9.24315 1.69999L5.94315 4.99999L9.24315 8.29999L8.30048 9.24266L5.00048 5.94266L1.70048 9.24266L0.757812 8.29999L4.05781 4.99999L0.757812 1.69999L1.70048 0.757324L5.00048 4.05732Z"
                    fill="black"
                  />
                </svg>
                <span className="max-sm:hidden">
                  {translate("navigation.close", "Close")}
                </span>
              </Link>
            </div>
            <span className="me-auto inline-block flex-1 rounded-[3px] px-3 py-3 pb-3 text-center align-middle text-lg leading-3 text-neutral-900 dark:text-neutral-50">
              {props.meta?.title}
            </span>

            <div className="flex flex-1 justify-end gap-3 text-end">
              {previous && (
                <Link
                  href={`/work/${previous}`}
                  className="me- inline-block rounded-[3px] px-3 py-3 pb-4 align-middle text-xl leading-3 text-neutral-900 hover:bg-neutral-100 dark:text-neutral-50 dark:hover:bg-neutral-900"
                  style={{ fontVariant: "all-small-caps" }}
                >
                  <span className="max-sm:hidden">
                    {translate("navigation.previous", "Previous")}
                  </span>
                  <span className="hidden max-sm:inline">
                    {translate("navigation.previous", "Previous")}
                  </span>
                </Link>
              )}
              {next && (
                <Link
                  href={`/work/${next}`}
                  className="inline-block rounded-[3px] px-3 py-3 pb-4 align-middle text-xl leading-3 text-neutral-900 hover:bg-neutral-100 dark:text-neutral-50 dark:hover:bg-neutral-900"
                  style={{ fontVariant: "all-small-caps" }}
                >
                  <span className="max-sm:hidden">
                    {translate("navigation.next", "Next")}
                  </span>
                  <span className="hidden max-sm:inline">
                    {translate("navigation.next", "Next")}
                  </span>
                </Link>
              )}
            </div>
          </div>
        </AnimatedView>
      </Nav>
    );
  return (
    <>
      <Nav isOpen={isOpen} className="text-center">
        <AnimatedView vertical={"-75"} className="h-full">
          <div className="container m-auto h-full">
            <div className="grid grid-cols-3 gap-3">
              <div className="flex items-center">
                <div className="max-sm:hidden">{renderMenu()}</div>
              </div>
              <div className="flex items-center justify-center text-center">
                <Link href="/">
                  <Logo width={60} className="dark:fill-neutral-50" />
                </Link>
              </div>
              <div className="flex items-center justify-end">
                <div className="flex items-stretch justify-end max-sm:hidden">
                  {Socials}
                </div>
                <Burger
                  size="md"
                  isActive={isOpen}
                  className="!hidden max-sm:!block"
                  onClick={() => setIsOpen(!isOpen)}
                />
              </div>
            </div>
            <div className="m-0 flex h-full flex-col">
              <div className="flex flex-1 flex-col items-center justify-center">
                {renderInnerMenu()}
              </div>
              <div className="mt-auto flex items-stretch justify-center pb-10">
                {Socials}
              </div>
            </div>
          </div>
        </AnimatedView>
      </Nav>
    </>
  );
};

export default Navigation;
