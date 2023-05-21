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
          index == 0 && "bg-stone-100"
        } font-medium mx-2 rounded-xl text-gray-400 hover:bg-stone-200`}
        href={path}
        key={name}
      >
        {name}
      </Link>
    ));

  const Socials = [
    <Link
      href=""
      key="github-url"
      className="px-2 py-2 bg-stone-100 font-medium mx-2 rounded-xl text-gray-400 hover:bg-stone-200"
    >
      <BsGithub size="26px" />
    </Link>,
    <Link
      href=""
      key="github-url"
      className="px-2 py-2 bg-stone-100 font-medium mx-2 rounded-xl text-gray-400 hover:bg-stone-200"
    >
      <BsLinkedin size="26px" className="rounded-md" />
    </Link>,
  ];
  const renderInnerMenu = () =>
    Pages[locale == "ar" ? "ar" : "en"].map(({ path, name }, index) => (
      <AnimatedView
        key={name}
        animate={isOpen}
        delay={isOpen ? index * 0.5 : 0}
      >
        <li onClick={() => setIsOpen(false)}>
          <Link href={path} className="animated">
            {name}
          </Link>
        </li>
      </AnimatedView>
    ));

  return (
    <Nav isOpen={isOpen} className="text-center">
      <AnimatedView vertical={"-75"}>
        <div className="container m-auto">
          <div className="grid grid-cols-3 gap-3">
            <div className="flex items-center">{renderMenu()}</div>
            <div className="text-center flex justify-center items-center">
              <Link href="/">
                <Logo width={60} />
              </Link>
            </div>
            <div className="flex items-center justify-end">
              {Socials}
              <Burger
                hide={["lg", "xlg"]}
                size="md"
                isActive={isOpen}
                onClick={() => setIsOpen(!isOpen)}
              />
            </div>
          </div>
          <ul className="hidden">
            {renderInnerMenu()}
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
          </ul>
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
