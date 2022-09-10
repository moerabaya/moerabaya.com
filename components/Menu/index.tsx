import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import styles from "../../styles/components/Menu.module.scss";
import { Project } from 'types';
import Cookies from 'universal-cookie';
import consts from "consts"
import Menu from './Menu.styled';
import { BsSun } from 'react-icons/bs';
import { Burger, Button } from '../Button';

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
const MenuList = ({hasReadPermission}: any) => {
  const [isMenuOpen, setIsMenuOpen] = useState<any>(false);
  const projects: Project[] = [];
  const { pathname, asPath } = useRouter();

  const renderMenu = () => Pages.map(({path, name}) => (
    <Menu.Item key={name} active={pathname == path}>
      <Link href={path}>
        <Button size="small" as="a">{name}</Button>
      </Link>
    </Menu.Item>
  ));

  const renderInnerMenu = () => Pages.map(({path, name}) => (
    <li key={name} onClick={() => setIsMenuOpen(false)}><Link href={path} className="animated">{name}</Link></li>
  ));

  return (
    <nav className={"main-nav" + (isMenuOpen ? " open" : "")}>
      <div className="container">
        <div className="flex-grid">
          <div className="col">
            {pathname != "/" && <span className={styles["nav-icon-link"]}><Link  href="/" onClick={() => setIsMenuOpen(false)}><Image src={"https://en.gravatar.com/userimage/201100235/e812a2bff97470caf6299b1a96e5cc1e.png?size=150"} alt="Portrait of Mohammed Rabay'a" placeholder='blur' blurDataURL='"https://en.gravatar.com/userimage/201100235/e812a2bff97470caf6299b1a96e5cc1e.png?size=1"' width={45} height={45} style={{margin: 0, borderRadius: "3px"}} /></Link></span>}
            <span className="page-title">{renderPageTitle(pathname, projects)}</span>
          </div>
          <div className="col menu-items">
            <Menu>
              {renderMenu()}
            </Menu>
          </div>
          <div className="col align-right flex-grid">
            <Button size="medium">
              <BsSun />
            </Button>
            <Burger hide={["large", "xlarge"]} size="medium" isActive={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)} />
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
      </div>
    </nav>
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

export default MenuList;