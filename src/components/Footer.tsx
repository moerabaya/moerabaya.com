import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="footer-contact">
        <div className="footer-col-1">
          {/* <h2 className="footer-heading">Let’s grap a cup of coffee</h2> */}
          <a href="mailto:rabaya.moe@gmail.com">rabaya.moe[at]gmail.com</a>
          &nbsp;
          /
          &nbsp;
          <a href="tel:00962799127281">(962) 799 127 281</a>
          &nbsp;
          /
          &nbsp;
          <a target="_blank" href="https://www.google.com/search?q=Amman%2C+Jordan">Amman, Jordan</a>
        </div>
        <div className="footer-col-2">
          <li className="social-media-item">
            <a target="_blank" href="https://www.facebook.com/moerabaya">facebook</a>
          </li>
          {/* <li className="social-media-item">
            <a target="_blank" href="https://www.instagram.com/moe.rabaya/">instagram</a>
          </li> */}
          <li className="social-media-item">
            <a target="_blank" href="https://dribbble.com/moerabaya">dribbble</a>
          </li>
          <li className="social-media-item">
            <a target="_blank" href="https://www.behance.net/moerabaya">behance</a>
          </li>
          <li className="social-media-item">
            <a target="_blank" href="https://github.com/moerabaya">github</a>
          </li>
        </div>

      </div>

    </footer>
  )
}
export default Footer
