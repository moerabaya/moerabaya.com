import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import styles from "../styles/components/Menu.module.scss";
import { Project } from '../types';
import Cookies from 'universal-cookie';
import consts from "consts"

// type DF = React.FC<{ title?: String }>
const Menu = ({hasReadPermission}: any) => {
  const [isMenuOpen, setIsMenuOpen] = useState<any>(false);
  const projects: Project[] = [];
  const { pathname, asPath } = useRouter();

  return (
    <nav className={"main-nav" + (isMenuOpen ? " open" : "")}>
      <div className="container">
        <div className="flex-grid">
          <div className="col">
            {pathname != "/" && <span className={styles["nav-icon-link"]}><Link  href="/" onClick={() => setIsMenuOpen(false)}><Image src={require("../assets/images/portrait.jpg")} alt="" layout="fixed" width={45} height={45} placeholder='blur' style={{display: "none1"}} /></Link></span>}
            <span className="page-title">{renderPageTitle(pathname, projects)}</span>
          </div>
          <div className="col align-right">
            <a className={"McButton" + (isMenuOpen ? " active" : "")} onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}>
              <b></b>
              <b></b>
            </a>
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
export default Menu;
function renderPageTitle(pathname: string, projects: Project[]): React.ReactNode {
  var title: string = "";
  if(pathname == "/") {
    title = "UX, Product Designer | Engineer";
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

