import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react'
import styles from "styles/components/Menu.module.scss";
import { Project } from 'types';
import Cookies from 'universal-cookie';
import consts from "consts"
import Menu from './Menu.styled';
import { BsMoon, BsSun } from 'react-icons/bs';
import { Burger, Button } from '../../atoms/Button';
import { ThemeContext } from 'templates/ThemeProvider';
import Nav from './Nav.styled';

const Pages = [
  {
    name: "Work",
    path: "/"
  },
  {
    name: "About",
    path: "/about"
  },
  {
    name: "Blog",
    path: "/blog"
  }
]
const Navigation = ({hasReadPermission}: any) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const projects: Project[] = [];
  const { pathname, asPath } = useRouter();
  const {theme, setTheme} = useContext(ThemeContext);

  const renderMenu = () => Pages.map(({path, name}) => (
    <Menu.Item key={name} active={pathname == path}>
      <Link href={path}>
        <Button smallCaps={true} size="small" as="a">{name}</Button>
      </Link>
    </Menu.Item>
  ));

  const renderInnerMenu = () => Pages.map(({path, name}) => (
    <li key={name} onClick={() => setIsOpen(false)}>
      <Link href={path} className="animated">{name}</Link>
    </li>
  ));

  return (
    <Nav isOpen={isOpen}>
      <div className="flex-grid">
        <div className="col">
          {pathname != "/" && <span className={styles["nav-icon-link"]}><Link  href="/" onClick={() => setIsOpen(false)}><Image src={"https://en.gravatar.com/userimage/201100235/e812a2bff97470caf6299b1a96e5cc1e.png?size=150"} alt="Portrait of Mohammed Rabay'a" placeholder='blur' blurDataURL='"https://en.gravatar.com/userimage/201100235/e812a2bff97470caf6299b1a96e5cc1e.png?size=1"' width={45} height={45} style={{margin: 0, borderRadius: "3px"}} /></Link></span>}
          <Nav.Title>{renderPageTitle(pathname, projects)}</Nav.Title>
        </div>
        <div className="col menu-items">
          <Menu hide={["small", "medium"]}>
            {renderMenu()}
          </Menu>
        </div>
        <div className="col align-right flex-grid">
          <Button size="medium" onClick={() => setTheme(theme == "dark" ? "light" : "dark")}>
            {theme == "dark" ? <BsSun /> : <BsMoon style={{padding: "0.05em"}} />}
          </Button>
          <Burger hide={["large", "xlarge"]} size="medium" isActive={isOpen} onClick={() => setIsOpen(!isOpen)} />
        </div>
      </div>
      <ul className="navigation-list">
        {renderInnerMenu()}
        {hasReadPermission && <li className="logout"><a onClick={(e) => {
          e.preventDefault()
          const cookies = new Cookies()
          cookies.remove(consts.SiteReadCookie, { path: "/" })
          window.location.href = asPath ?? "/"
        }} className="animated">Logout</a></li>}

      </ul>
    </Nav>
  )
}

function renderPageTitle(pathname: string, projects: Project[]): React.ReactNode {
  let title;
  if(pathname == "/") {
    // title = <><strong>Mohammed Rabaya</strong>  &nbsp;|&nbsp;  Engineer</>;
    title = <>UX, Product Designer | Engineer</>;
  } else if (pathname == "/about") {
    title = "About";
  } else if (pathname.includes("/blog")) {
    title = "Blog";
  }
  projects?.sort((a:any, b:any) => a.index - b.index).map(project => {
    if(pathname.includes(project.slug)) {
      title = project.title;
    }
  })
  return title;
}

export default Navigation;