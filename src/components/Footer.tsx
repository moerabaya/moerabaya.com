import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <ul className="social-media-list">
          <li className="social-media-item">
            <a className="animated" target="_blank" href="https://www.facebook.com/moerabaya">facebook</a>
          </li>
          {/* <li className="social-media-item">
            <a target="_blank" href="https://www.instagram.com/moe.rabaya/">instagram</a>
          </li> */}
          <li className="social-media-item">
            <a className="animated" target="_blank" href="https://dribbble.com/moerabaya">dribbble</a>
          </li>
          <li className="social-media-item">
            <a className="animated" target="_blank" href="https://www.behance.net/moerabaya">behance</a>
          </li>
          <li className="social-media-item">
            <a className="animated" target="_blank" href="https://github.com/moerabaya">github</a>
          </li>
        </ul>
        

      </div>

    </footer>
  )
}
export default Footer
