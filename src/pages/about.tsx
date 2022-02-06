import React from 'react'
import { Head } from 'react-static'

export default () => (
  <div className="page-content">
    <Head>
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <title>About - Mohammed Rabay'a</title>
      
      {/* <!-- Primary Meta Tags --> */}
      <meta name="title" content="About | Mohammed Rabay'a" />
      <meta name="description" content="A passionate problem solver with 7+ years of experience working in the field of ux and traditional development." />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:url" content="https://moerabaya.com/about" />
      <meta property="og:title" content="About | Mohammed Rabay'a" />
      <meta property="og:description" content="A passionate problem solver with 7+ years of experience working in the field of ux and traditional development." />
      <meta property="og:image" content={require('../assets/images/metaimage.png')} />

      {/* <!-- Twitter --> */}
      <meta property="twitter:url" content="https://moerabaya.com/about" />
      <meta property="twitter:title" content="About | Mohammed Rabay'a" />
      <meta property="twitter:description" content="A passionate problem solver with 7+ years of experience working in the field of ux and traditional development." />
      <meta property="twitter:image" content={require('../assets/images/metaimage.png')} />
    </Head>
    <div className="container">
      <br />
      <h1>Hi, I'm <strong>Mohammed Rabay'a</strong>.
      <br />
      <br /> A passionate problem solver with {new Date().getFullYear() - 2015}+ years of experience working in the field of ux and traditional development.
      
      <br />
      <br />
      Based in Amman, Jordan and currently designing and creating products in <a target="_blank" href="https://cura.healthcare/"><strong>Cura Healthcare</strong></a></h1>
    </div>
  </div>
)
