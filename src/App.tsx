import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
import { Router } from '@reach/router'
import Dynamic from 'containers/Dynamic'
import './app.scss'
import { Helmet } from 'react-helmet';

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

function App() {
  return (
    <Root>
      <div className="content">
          {HelmetData()}
          <React.Suspense fallback={
          <div className="loading-container">
            <h1 className="loading-title">Loading<div className="dot-flashing"></div></h1>
          </div>}>
            
            <Router>
              {/* <Dynamic path="dynamic" /> */}
              <Routes path="*" />
            </Router>
          </React.Suspense>
      </div>
    </Root>
  )
}

const HelmetData = () => (
  <Helmet>
    <meta charSet="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <title>Mohammed Rabay'a — Visual Product Designer/Developer</title>
    
    {/* <!-- Primary Meta Tags --> */}
    <meta name="title" content="Mohammed Rabay'a — Visual Product Designer/Developer" />
    <meta name="description" content="I'm a full process-product designer based in Amman, Jordan. Specialized in creating seamless interactive experiences for web/mobile apps" />
    <meta name="keywords" content="ux, ui, mobile, apps, web, javascript, html, developer, designer, seo, user experience, user interface, products, social media" />
    <meta name="robots" content="index, follow" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="language" content="English" />
    <meta name="revisit-after" content="30 days" />
    <meta name="author" content="Mohammed Rabay'a" />

    {/* <!-- Open Graph / Facebook --> */}
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://moerabaya.com/" />
    <meta property="og:title" content="Mohammed Rabay'a — Visual Product Designer/Developer" />
    <meta property="og:description" content="I'm a full process-product designer based in Amman, Jordan. Specialized in creating seamless interactive experiences for web/mobile apps" />
    <meta property="og:image" content={require('./assets/images/metaimage.png')} />

    {/* <!-- Twitter --> */}
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://moerabaya.com/" />
    <meta property="twitter:title" content="Mohammed Rabay'a — Visual Product Designer/Developer" />
    <meta property="twitter:description" content="I'm a full process-product designer based in Amman, Jordan. Specialized in creating seamless interactive experiences for web/mobile apps" />
    <meta property="twitter:image" content={require('./assets/images/metaimage.png')} />

    <meta name="google-site-verification" content="hJVMJ83aRWSRioyaMhGvHOHLdFk12JugsEN-cvb8EQ0" />

    <link rel="canonical" href="{{ page.url | replace:'index.html','' | prepend: site.baseurl | prepend: site.url }}" />
    <link rel="alternate" type="application/rss+xml" title="{{ site.title }}" href="{{ '/feed.xml' | prepend: site.baseurl | prepend: site.url }}" />
    <link href="https://fonts.googleapis.com/css?family=Chivo:300,400,700" rel="stylesheet" />

    <link rel="apple-touch-icon" sizes="180x180" href={require('./assets/images/site/apple-touch-icon.png?v=1.1')} />
    <link rel="icon" type="image/png" sizes="32x32" href={require("./assets/images/site/favicon-32x32.png?v=1.1")} />
    <link rel="icon" type="image/png" sizes="16x16" href={require("./assets/images/site/favicon-16x16.png?v=1.1")} />
    <link rel="manifest" href={require("./assets/images/site/site.webmanifest?v=1.1")} />
    <link rel="mask-icon" href={require("./assets/images/site/safari-pinned-tab.svg?v=1.1")} />
    <link rel="shortcut icon" href={require("./assets/images/site/favicon.ico?v=1.1")} />
    <meta name="msapplication-TileColor" content="#da532c" />
    <meta name="theme-color" content="#ffffff"></meta>
  </Helmet>
)

export default App
