import Head from "next/head";
import { NextPage } from "next/types";
import React from "react";
import AnimatedView from "../components/atoms/AnimatedView";

const About: NextPage<any> = () => {
  return (
    <div className="page-content">
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>About - Mohammed Rabay&apos;a</title>

        {/* <!-- Primary Meta Tags --> */}
        <meta name="title" content="About | Mohammed Rabay'a" />
        <meta
          name="description"
          content="A passionate problem solver with 7+ years of experience working in the field of ux and traditional development."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:url" content="https://moerabaya.com/about" />
        <meta property="og:title" content="About | Mohammed Rabay'a" />
        <meta
          property="og:description"
          content="A passionate problem solver with 7+ years of experience working in the field of ux and traditional development."
        />
        <meta
          property="og:image"
          content={require("../assets/images/metaimage.png")}
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:url" content="https://moerabaya.com/about" />
        <meta property="twitter:title" content="About | Mohammed Rabay'a" />
        <meta
          property="twitter:description"
          content="A passionate problem solver with 7+ years of experience working in the field of ux and traditional development."
        />
        <meta
          property="twitter:image"
          content={require("../assets/images/metaimage.png")}
        />
      </Head>
      <div className="container">
        <br />
        <AnimatedView>
          <h2>
            Hi, I&apos;m <strong>Mohammed Rabay&apos;a</strong>.
          </h2>
        </AnimatedView>
        <br />
        <AnimatedView delay={0.75}>
          <h2>
            A product-focused software engineer with over{" "}
            {new Date().getFullYear() - 2015}+ years of experience working in
            the field of UX and traditional development.
          </h2>
        </AnimatedView>

        <br />
        <br />
        <AnimatedView delay={1.5}>
          <h2>
            Based in Amman, Jordan and currently designing and creating products
            at{" "}
            <a target="_blank" href="https://cura.healthcare/" rel="noreferrer">
              <strong>Cura Healthcare</strong>
            </a>
          </h2>
        </AnimatedView>
      </div>
    </div>
  );
};

About.displayName = "About";

export default About;

export async function getStaticProps() {
  return {
    props: {},
  };
}
