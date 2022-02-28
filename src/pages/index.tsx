import Footer from 'components/Footer'
import React, { useEffect, useState } from 'react'
import { Head } from 'react-static';
// import ScrollBooster from 'scrollbooster'
// var Isotope = require('isotope-layout');
// require('isotope-masonry-horizontal');
type DF = React.FC<{ path?: String }>
export default () => {
  var SBRef: any = null;
  var grid: any = null;
  
  useEffect(() => {
    return () => {
      // cleanup
    }
  }, [])
  return (
    <div className="page-content">
      <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>Mohammed Rabay'a — UX, Product Designer | Senior Engineer</title>
        
        {/* <!-- Primary Meta Tags --> */}
        <meta name="title" content="Mohammed Rabay'a — UX, Product Designer | Senior Engineer" />
        <meta name="description" content="I'm a full process-product designer based in Amman, Jordan. Specialized in creating seamless interactive experiences for web/mobile apps" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:url" content="https://moerabaya.com/" />
        <meta property="og:title" content="Mohammed Rabay'a — UX, Product Designer | Senior Engineer" />
        <meta property="og:description" content="I'm a full process-product designer based in Amman, Jordan. Specialized in creating seamless interactive experiences for web/mobile apps" />
        <meta property="og:image" content={require('../assets/images/metaimage.png')} />

        {/* <!-- Twitter --> */}
        <meta property="twitter:url" content="https://moerabaya.com/" />
        <meta property="twitter:title" content="Mohammed Rabay'a — UX, Product Designer | Senior Engineer" />
        <meta property="twitter:description" content="I'm a full process-product designer based in Amman, Jordan. Specialized in creating seamless interactive experiences for web/mobile apps" />
        <meta property="twitter:image" content={require('../assets/images/metaimage.png')} />
      </Head>
      <header>
        <div className="container">
          <div className="flex-grid">
            <div className="col contact-details">
              <a className="animated" href="mailto:rabaya.moe@gmail.com"><h4>rabaya.moe[at]gmail.com</h4></a>
              <br/>
              <a className="animated" href="tel:00962799127281"><h4>(962) 799 127 281</h4></a>
              &nbsp; &nbsp;
              <a className="animated" target="_blank" href="https://www.google.com/search?q=Amman%2C+Jordan"><h4>Amman, Jordan</h4></a>
            </div>
            <div className="col">
              <h1 className="portfolio-section-description">I design/develop user inter­­&shy;faces and engaging product experi­­en­­&shy;ces for humans.</h1>
            </div>
          </div>
        </div>
      </header>
      <section className="work-section">
        <div className="container">
          <div className="content">
            <h4 className="work-title">Work</h4>
            <ul className="work-list">
              <li className="work-item">
                <h3>
                  <a href="https://www.behance.net/gallery/136725993/Veni-Furniture-marketplace" target="_blank">
                    <span className="text">
                      Veni Marketplace
                    </span>
                    <span className="work-item-divider"><span className="work-item-divider-text">Veni Marketplace</span></span>
                  </a>
                </h3>
              </li>
              <li className="work-item">
                <h3>
                  <a href="https://www.behance.net/gallery/67105083/SitatByoot" target="_blank">
                    <span className="text">
                      Sitatbyoot
                    </span>
                    <span className="work-item-divider"><span className="work-item-divider-text">Sitatbyoot</span></span>
                  </a>
                </h3>
              </li>
              <li className="work-item">
                <h3>
                  <a href="http://jewemall.com/" target="_blank">
                    <span className="text">
                      Jewemall
                    </span>
                    <span className="work-item-divider"><span className="work-item-divider-text">Jewemall</span></span>
                  </a>
                </h3>
              </li>
              <li className="work-item">
                <h3>
                  <a href="https://www.behance.net/gallery/107017279/Cura-Healthcare" target="_blank">
                    <span className="text">
                      Cura Healthcare
                    </span>
                    <span className="work-item-divider"><span className="work-item-divider-text">Cura Healthcare</span></span>
                  </a>
                </h3>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>      

  )
}