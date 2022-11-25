import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { Project } from "types";
import Cookies from "universal-cookie";
import consts from "consts";
import Menu from "../../molecules/Menu/Menu.styled";
import { BsMoon, BsSun } from "react-icons/bs";
import { Burger } from "../../atoms/Button";
import { ThemeContext } from "templates/ThemeProvider";
import Nav from "./Nav.styled";
import { AnimatedView, Avatar, Button } from "components/atoms";
import navigation from "utils/data/navigation.json";
import useGlobalization from "hooks/useGlobalization";

const Pages = navigation;

const Navigation = ({ hasReadPermission }: any) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const projects: Project[] = [];
  const { pathname, asPath } = useRouter();
  const { theme, setTheme } = useContext(ThemeContext);
  const { locale } = useGlobalization();

  const renderMenu = () =>
    Pages[locale == "ar" ? "ar" : "en"]?.map(({ path, name }) => (
      <Menu.Item key={name} active={pathname == path}>
        <Link href={path}>
          <Button smallCaps={true} size="sm" as="a">
            {name}
          </Button>
        </Link>
      </Menu.Item>
    ));

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
    <Nav isOpen={isOpen}>
      <AnimatedView vertical={"-75"}>
        <div className="flex-grid">
          <div className="col">
            {pathname != "/" && (
              <span>
                <Avatar
                  href="/"
                  onClick={() => setIsOpen(false)}
                  src={
                    "https://en.gravatar.com/userimage/201100235/e812a2bff97470caf6299b1a96e5cc1e.png?size=150"
                  }
                  alt="Portrait of Mohammed Rabay'a"
                  placeholder="blur"
                  blurDataURL='"https://en.gravatar.com/userimage/201100235/e812a2bff97470caf6299b1a96e5cc1e.png?size=1"'
                  size={45}
                />
              </span>
            )}
            <Nav.Title>{renderPageTitle(pathname, projects)}</Nav.Title>
          </div>
          <div className="col menu-items">
            <Menu hide={["sm", "md"]}>{renderMenu()}</Menu>
          </div>
          <div className="col align-right flex-grid">
            <Button
              size="md"
              onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
              style={{ padding: "0.5em", height: "2.5em", width: "2.5em" }}
            >
              {theme == "dark" ? (
                <BsSun size="1.4em" />
              ) : (
                <BsMoon size="1.2em" />
              )}
            </Button>
            <Burger
              hide={["lg", "xlg"]}
              size="md"
              isActive={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
        </div>

        <ul className="navigation-list">
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
