import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import styles from "../../styles/components/Menu.module.scss";
import { Project } from '../../../types';
import Cookies from 'universal-cookie';
import consts from "consts"
import Menu from './Menu.styled';
import { BsSun } from 'react-icons/bs';
import { Button } from '../Button';

// type DF = React.FC<{ title?: String }>
export default ({hasReadPermission}: any) => {
  const [isMenuOpen, setIsMenuOpen] = useState<any>(false);
  const projects: Project[] = [];
  const { pathname, asPath } = useRouter();

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
              <Menu.Item>
                <Link href="/">
                  <a>Work</a>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link href="/about">
                  <a>About</a>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link href="/about">
                  <a>Blog</a>
                </Link>
              </Menu.Item>
            </Menu>
          </div>
          <div className="col align-right">
            <Button>
              <BsSun />
            </Button>
          </div>
        </div>
        <ul className="navigation-list">
          <li onClick={() => setIsMenuOpen(false)}><Link href="/" className="animated">Home</Link></li>
          <li onClick={() => setIsMenuOpen(false)}><Link href="/about" className="animated">About</Link></li>
          <li onClick={() => setIsMenuOpen(false)}><Link href="/blog" className="animated">Blog</Link></li>
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
  var title: string = "";
  if(pathname == "/") {
    title = "Mohammed Rabay'a | Engineer";
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
  return <text className=""><strong>Mohammed Rabaya</strong>  &nbsp;|&nbsp;  Engineer</text>;
}
