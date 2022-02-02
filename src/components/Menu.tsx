import { Link, useLocation } from '@reach/router';
import React, { useEffect, useState } from 'react'
type DF = React.FC<{ title?: String }>
const Menu: DF = ({title}) => {
  const [isMenuOpen, setIsMenuOpen] = useState<any>(false);
  const [pageTitle, setPageTitle] = useState("");
  const location = useLocation();
  useEffect(() => {
    
  }, [])
  return (
    <nav className={"main-nav" + (isMenuOpen ? " open" : "")}>
      <div className="container">
        <div className="flex-grid">
          <div className="col">
            <Link to="/" onClick={() => setIsMenuOpen(false)}><img src={require("../assets/images/portrait.jpg")} alt="" className="nav-icon" /></Link>
            <span className="page-title">{renderPageTitle(location.pathname)}</span>
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
          <li><Link to="/" onClick={() => setIsMenuOpen(false)} className="animated">Home</Link></li>
          <li><Link to="/about" onClick={() => setIsMenuOpen(false)} className="animated">About</Link></li>
          <li><Link to="/blog" onClick={() => setIsMenuOpen(false)} className="animated">Blog</Link></li>
        </ul>
      </div>
    </nav>
  )
}
export default Menu;
function renderPageTitle(pathname: string): React.ReactNode {
  switch (pathname) {
    case "/":
      return "";
      break;
    case "/about":
      return "About";
      break;
    case "/blog":
      return "Blog";
      break;
  }
}

