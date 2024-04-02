import Logo from "assets/images/logo.svg";
import { AnimatedView } from "components/atoms";
import consts from "consts";
import useGlobalization from "hooks/useGlobalization";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { ThemeContext } from "templates/ThemeProvider";
import { Project } from "types";
import Cookies from "universal-cookie";
import navigation from "utils/data/navigation.json";
import { Burger } from "../../atoms/Button";
import Nav from "./Nav.styled";
import * as fs from "fs/promises";
import path from "path";
import grayMatter from "gray-matter";

const Pages = navigation;

const Navigation = ({ hasReadPermission, previous, next }: any) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { pathname, asPath } = useRouter();
  const { theme, setTheme } = useContext(ThemeContext);
  const { locale } = useGlobalization();
  const isProject = pathname.split("/")?.[1] === "work";

  const renderMenu = () =>
    Pages[locale == "ar" ? "ar" : "en"]?.map(({ path, name }, index) => (
      <Link
        className={`px-4 py-2 ${
          index == 0 && "bg-neutral-200 dark:bg-neutral-900"
        } font-regular mx-2 rounded-2xl text-stone-800 hover:bg-neutral-300 dark:text-neutral-50 dark:md:hover:bg-neutral-800`}
        href={path}
        key={name}
      >
        {name}
      </Link>
    ));

  const Socials = [
    <a
      target="_blank"
      href="https://github.com/moerabaya/"
      key="github-url"
      className="px-2 py-2 bg-neutral-200 font-regular mx-2 rounded-2xl dark:text-gray-50 hover:bg-neutral-300 dark:bg-neutral-900 dark:hover:bg-neutral-800"
    >
      <BsGithub size="26px" />
    </a>,
    <a
      target="_blank"
      href="https://www.linkedin.com/in/moerabaya/"
      key="linkedin-url"
      className="px-2 py-2 bg-neutral-200 font-regular mx-2 rounded-2xl dark:text-gray-50 hover:bg-neutral-300 dark:bg-neutral-900 dark:hover:bg-neutral-800"
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
        <li className="block p-5 text-2xl" onClick={() => setIsOpen(false)}>
          <Link href={path} className="animated">
            {name}
          </Link>
        </li>
      </AnimatedView>
    ));
  if (isProject)
    return (
      <Nav isOpen={isOpen} className="text-center">
        <AnimatedView vertical={"-75"} className="h-full">
          <div className="container m-auto h-full flex items-center">
            <Link
              href={"/"}
              className="dark:text-neutral-50 text-neutral-900 dark:hover:bg-neutral-900 hover:bg-neutral-100 align-middle inline-block text-xl px-3 rounded-[3px] leading-3 py-3 pb-4 me-auto"
              style={{ fontVariant: "all-small-caps" }}
            >
              <svg
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="dark:*:fill-neutral-50 *:fill-neutral-900 inline-block me-2 mt-[1px] max-sm:size-[16px] size-[10px] max-sm:m-0"
              >
                <path
                  d="M5.00048 4.05732L8.30048 0.757324L9.24315 1.69999L5.94315 4.99999L9.24315 8.29999L8.30048 9.24266L5.00048 5.94266L1.70048 9.24266L0.757812 8.29999L4.05781 4.99999L0.757812 1.69999L1.70048 0.757324L5.00048 4.05732Z"
                  fill="black"
                />
              </svg>
              <span className="max-sm:hidden">Close</span>
            </Link>

            {previous && (
              <Link
                href={`/work/${previous}`}
                className="dark:text-neutral-50 text-neutral-900 dark:hover:bg-neutral-900 hover:bg-neutral-100 align-middle inline-block text-xl px-3 rounded-[3px] leading-3 py-3 pb-4 me-"
                style={{ fontVariant: "all-small-caps" }}
              >
                <span className="max-sm:hidden">Previous</span>
                <span className="hidden max-sm:inline">Previous</span>
              </Link>
            )}
            {next && (
              <Link
                href={`/work/${next}`}
                className="dark:text-neutral-50 text-neutral-900 dark:hover:bg-neutral-900 hover:bg-neutral-100 align-middle inline-block text-xl px-3 rounded-[3px] leading-3 py-3 pb-4"
                style={{ fontVariant: "all-small-caps" }}
              >
                <span className="max-sm:hidden">Next</span>
                <span className="hidden max-sm:inline">Next</span>
              </Link>
            )}
          </div>
        </AnimatedView>
      </Nav>
    );
  return (
    <Nav isOpen={isOpen} className="text-center">
      <AnimatedView vertical={"-75"} className="h-full">
        <div className="container m-auto h-full">
          <div className="grid grid-cols-3 gap-3">
            <div className="flex items-center">
              <div className="max-sm:hidden">{renderMenu()}</div>
            </div>
            <div className="text-center flex justify-center items-center">
              <Link href="/">
                <Logo width={60} className="dark:fill-neutral-50" />
              </Link>
            </div>
            <div className="flex items-center justify-end">
              <div className="max-sm:hidden flex items-center justify-end">
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
          <div className="m-0 h-full flex flex-col">
            <div className="flex items-center flex-col justify-center flex-1  ">
              {renderInnerMenu()}
            </div>
            <div className="mt-auto flex items-center pb-10 justify-center">
              {Socials}
            </div>
            {hasReadPermission && (
              <li className="logout">
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    const cookies = new Cookies();
                    cookies.remove(consts.SiteReadCookie, { path: "/" });
                    window.location.href = asPath ?? "/";
                  }}
                  className="animated"
                >
                  Logout
                </a>
              </li>
            )}
          </div>
        </div>
      </AnimatedView>
    </Nav>
  );
};

export default Navigation;
