import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <ul className="resume-list">
          <li>
            <a className="animated" href="/engineering-resume-2022.pdf" target="_blank">download résumé</a>
          </li>
        </ul>
        <ul className="social-media-list">
          {/* <li className="social-media-item">
            <a className="animated" target="_blank" href="https://www.facebook.com/moerabaya">facebook</a>
          </li> */}
          {/* <li className="social-media-item">
            <a target="_blank" href="https://www.instagram.com/moe.rabaya/">instagram</a>
          </li> */}
          <li className="social-media-item">
            <a className="animated" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/moerabaya/">linkedin</a>
          </li>
          <li className="social-media-item">
            <a className="animated" target="_blank" rel="noreferrer" href="https://dribbble.com/moerabaya">dribbble</a>
          </li>
          <li className="social-media-item">
            <a className="animated" target="_blank" rel="noreferrer" href="https://www.behance.net/moerabaya">behance</a>
          </li>
          <li className="social-media-item">
            <a className="animated" target="_blank" rel="noreferrer" href="https://github.com/moerabaya">github</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
export default Footer
