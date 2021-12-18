import Footer from 'components/Footer'
import React, { useEffect } from 'react'
import ScrollBooster from 'scrollbooster'
import {Helmet} from "react-helmet";
import { useLocation } from '@reach/router';
var Isotope = require('isotope-layout');
require('isotope-masonry-horizontal');

export default () => {
  const location = useLocation();
  var SBRef: any = null;
  var grid: any = null;
  useEffect(() => {
    handleResize();
    var resizedUp = false;

    console.log(location);
    
    function handleResize() {
      if(grid) {
        grid.layout();
      } else {
        setupIsotope();
      }
      
      if(window.innerHeight > 700 && window.innerWidth > 650) {
        if(!resizedUp){
          console.log("break up");
          grid.destroy();
          grid = null;
          setupIsotope();
        }
        resizedUp = true;
      } else {
        if(resizedUp){
          console.log("break down");
          grid.destroy();
          grid = null;
          setupIsotope();
        }
        resizedUp = false;
      }
      if(window.innerWidth > 650) {
        if(SBRef){
          console.log("sbref");
          SBRef.updateMetrics();
        } else {
          setupSB();
        }
      } else {
        if(SBRef){
          SBRef.destroy();
          SBRef = null;
        }
      }
    }
    window.addEventListener('resize', handleResize)
    function setupIsotope(){
      grid = new Isotope( '.work-posts-wrapper', {
        layoutMode: 'masonryHorizontal',
        itemSeletor: '.grid-item',
        masonryHorizontal: {
            rowHeight: window.innerHeight > 700 && window.innerWidth > 650 ? 235 : 167,
            gutter: window.innerHeight > 700 && window.innerWidth > 650 ? 20 : 10
        }
      });
    }
    function setupSB(){
      var viewport: any = document.querySelector('.scroll-wrapper');
      var content: any = document.querySelector(".scroll-wrapper > .scroll-content");

      SBRef = new ScrollBooster({
        viewport,
        content,
        direction: "horizontal",
        scrollMode: 'transform',
        preventDefaultOnEmulateScroll: true,
        textSelection: false,
        emulateScroll: true,
        onWheel: (state: any, event: any) => {
            let offsetX = 0
            if (event.deltaY >= 0 && event.deltaX >= 0)
              offsetX = Math.max(event.deltaY, event.deltaX)
            if (event.deltaY <= 0 && event.deltaX <= 0)
              offsetX = Math.min(event.deltaY, event.deltaX)
            SBRef.scrollOffset.x = -offsetX
            SBRef.scrollOffset.y = -event.deltaY
            // console.log(SBRef);
        }
      })
    }
    return () => {
      // cleanup
    }
  }, [])

  function renderTitle(){
    let params = new URLSearchParams(location.search);
    let title = params.get('title');
    switch(title) {
      case "frontend-engineer":
        return "Frontend Engineer"
        break;
      case "ux-ui-designer":
        return "Ux/Ui Designer"
        break;
      case "full-process-designer":
        return "Full Process Designer"
        break;
      case "visual-product-engineer":
        return "Visual Product Engineer"
        break;
    }

    return "Visual Product Designer";
  }
  return (
    <div>
      
      <div className="page-content">
        <div className="scroll-wrapper">
          <div className="scroll-content">
            <div className="content-inner">
              <div className="portfolio-section-wrapper" id="about">
                <div className="portfolio-section">
                  <div className="portfolio-section-img">
                    <img src={require("../assets/images/portrait.jpg")} alt="" />
                  </div> 
                  <div className="portfolio-section-content">
                    <h1 className="portfolio-section-title">
                      Mohammed<br /> A. Rabaya
                    </h1>
                    <h2 className="portfolio-section-subtitle">

                      {renderTitle()}
                      
                    </h2>
                  </div>
                </div>
                <h2 className="portfolio-section-description">I design/develop user inter­­&shy;faces and engaging product experiences for humans.</h2>
              </div>
              <div className="work-section" id="work">
                <h4 className="work-title">Work</h4>
                <div className="grid work-posts-wrapper">
                  <div className="grid-item work-post grid-item--x2 coming-soon">
                    <a className="work-link" target="_blank">
                      <video poster={require('../assets/images/projects/veni/1.jpg')} onMouseEnter={(e) => playVideo(e)} onMouseLeave={(e) => stopVideo(e)} src={require("../assets/videos/veni/1.mp4")} />
                    </a>
                  </div>
                  <div className="grid-item work-post">
                    <a href="https://www.behance.net/gallery/107017279/Cura-Healthcare" className="work-link" target="_blank">
                      <img className="img-loop"  src={require('../assets/images/projects/cura/1/1.jpg')} onMouseEnter={(e) => loopImages(e, "cura")} onMouseLeave={(e) => clearImages(e)} alt="" />
                    </a>
                  </div>
                  <div className="grid-item work-post grid-item--width2">
                    <a href="https://dribbble.com/shots/6010110-Sitatbyoot" className="work-link" target="_blank">
                      <img src={require("../assets/images/projects/sitatbyoot/2/1.jpg")} alt="" />
                    </a>
                  </div>
                  <div className="grid-item work-post">
                    <a href="https://www.behance.net/gallery/67105083/SitatByoot" className="work-link view-project" target="_blank">
                      <img className="img-loop" src={require("../assets/images/projects/sitatbyoot/1/1.jpg")} onMouseEnter={(e) => loopImages(e, "sitatbyoot")} onMouseLeave={(e) => clearImages(e)} alt="" />
                    </a>
                  </div>
                  <div className="grid-item work-post grid-item--width2 view-site">
                    <a href="https://cura.healthcare/" className="work-link" target="_blank">
                      <img src={require("../assets/images/projects/cura/2/1.jpg")} alt="" />
                    </a>
                  </div>
                  
                  <div className="grid-item work-post grid-item--height2 coming-soon">
                    <a className="work-link">
                      <img src={require("../assets/images/projects/jewemall/1.jpg")} alt="" />
                    </a>
                  </div>
                  <div className="grid-item grid-item--height2 side-work">
                    <h3 className="side-work-title">SIDE WORK</h3>
                  </div>
                  <div className="grid-item work-post view">
                    <a href="https://dribbble.com/shots/6197132-Simple-Messages-App" target="_blank" className="work-link">
                      <img src={require("../assets/images/projects/messaging-app/1.jpg")} alt="" /> 
                    </a>
                  </div>
                  <div className="grid-item work-post view">
                    <a href="https://dribbble.com/shots/10724795-Tiger-Mask" target="_blank" className="work-link">
                      <img src={require("../assets/images/projects/masked-tiger/1.jpg")} alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
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

