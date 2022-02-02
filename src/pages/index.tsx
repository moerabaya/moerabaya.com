import Footer from 'components/Footer'
import React, { useEffect, useState } from 'react'
// import ScrollBooster from 'scrollbooster'
// import {Helmet} from "react-helmet";
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
              <h1 className="portfolio-section-description">I design/develop user inter­­&shy;faces and engaging product experiences for humans.</h1>
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
                  <a href="https://www.behance.net/gallery/136477127/VENI" target="_blank">
                    Veni Marketplace
                    <span className="work-item-divider"><span className="work-item-divider-text">Veni Marketplace</span></span>
                  </a>
                </h3>
              </li>
              <li className="work-item">
                <h3>
                  <a href="https://www.behance.net/gallery/67105083/SitatByoot" target="_blank">
                    Sitatbyoot
                    <span className="work-item-divider"><span className="work-item-divider-text">Sitatbyoot</span></span>
                  </a>
                </h3>
              </li>
              <li className="work-item">
                <h3>
                  <a href="http://jewemall.com/" target="_blank">
                    Jewemall
                    <span className="work-item-divider"><span className="work-item-divider-text">Jewemall</span></span>
                  </a>
                </h3>
              </li>
              <li className="work-item">
                <h3>
                  <a href="https://www.behance.net/gallery/107017279/Cura-Healthcare" target="_blank">
                    Cura Healthcare
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
var myInterval;

var sitatbyoot = [
  require("../assets/images/projects/sitatbyoot/1/2.jpg"),
  require("../assets/images/projects/sitatbyoot/1/3.jpg")
]
var cura = [
  require("../assets/images/projects/cura/1/2.jpg"),
  require("../assets/images/projects/cura/1/3.jpg"),
  require("../assets/images/projects/cura/1/4.jpg")
]

function loopImages(e: React.MouseEvent<HTMLImageElement, MouseEvent>, type): void {
  var image = e.currentTarget;

  var images = image.getAttribute("data-alt-src");
  
  image.setAttribute('old-src', image.getAttribute("src"));
  
  var alt_src;
  if(type == "sitatbyoot") {
    alt_src = sitatbyoot;
  } else if (type == "cura") {
    alt_src = cura;
  }

  var that = image;
  var i=0;
  if(alt_src && alt_src.length > 0){
    myInterval = setInterval(function(){  // Set an interval
        if(i==alt_src.length){
            i=0;
            that.setAttribute("src", that.getAttribute('old-src'));
        }else{
            that.setAttribute('src', alt_src[i]);
            i++;
        }
    },1000);
  }
}
function clearImages(e: React.MouseEvent<HTMLImageElement, MouseEvent>): void {
  var image = e.currentTarget;
  clearInterval(myInterval);  // Clear the interval
  image.setAttribute('src', image.getAttribute("old-src"));
}

function playVideo(e: React.MouseEvent<HTMLVideoElement, MouseEvent>): void {
  var myVideo = e.currentTarget;
  if (typeof myVideo.loop == 'boolean') { // loop supported
    myVideo.loop = true;
  } else { // loop property not supported
    myVideo.addEventListener('ended', function () {
      this.currentTime = 0;
      this.play();
    }, false);
  }
  myVideo.play();
}

function stopVideo(e: React.MouseEvent<HTMLVideoElement, MouseEvent>): void {
  var myVideo = e.currentTarget;
  myVideo.pause();
  myVideo.currentTime = 0;
}

// export default Home;