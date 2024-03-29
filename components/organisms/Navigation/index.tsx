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

const Pages = navigation;

const Navigation = ({ hasReadPermission }: any) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const projects: Project[] = [];
  const { pathname, asPath } = useRouter();
  const { theme, setTheme } = useContext(ThemeContext);
  const { locale } = useGlobalization();

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

function renderPageTitle(
  pathname: string,
  projects: Project[]
): React.ReactNode {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { getLocalizedString } = useGlobalization();
  let title;
  if (pathname == "/") {
    // title = <><strong>Mohammed Rabaya</strong>  &nbsp;|&nbsp;  Engineer</>;
    title = <>{getLocalizedString("hero")}</>;
  } else if (pathname == "/about") {
    title = getLocalizedString("About");
  } else if (pathname.includes("/blog")) {
    title = getLocalizedString("About");
  }
  projects
    ?.sort((a: any, b: any) => a.index - b.index)
    .map((project) => {
      if (pathname.includes(project.slug)) {
        title = project.title;
      }
    });
  return title;
}

export default Navigation;
