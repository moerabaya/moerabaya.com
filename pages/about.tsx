import Head from "next/head";
import Image from "next/image";
import { NextPage } from "next/types";
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
      <div className="container mx-auto max-w-3xl text-lg flex my-16">
        <div className="text-2xl">
          <Image
            src={
              "https://en.gravatar.com/userimage/201100235/e812a2bff97470caf6299b1a96e5cc1e.png?size=1000"
            }
            alt="Portrait of Mohammed Rabay'a"
            placeholder="blur"
            blurDataURL='"https://en.gravatar.com/userimage/201100235/e812a2bff97470caf6299b1a96e5cc1e.png?size=1"'
            width={400}
            height={70}
            className="overflow-hidden rounded-3xl"
          />
        </div>
        <div className="ps-8">
          <AnimatedView>
            <h4 className="font-semibold text-xl text-stone-800 dark:text-neutral-50">
              <span>Hola - </span>
              <span>مرحبا</span>
            </h4>
          </AnimatedView>
          <AnimatedView delay={0.75}>
            <h4 className="text-lg text-stone-800 dark:text-neutral-50">
              My name is Mohammed Rabay'a - A product-focused software engineer
              currently based in{" "}
              <strong
                className="font-medium text-red-600"
                style={{
                  background:
                    "linear-gradient(217deg, #ef5350, #f48fb1, #7e57c2, #2196f3, #26c6da, #43a047)",
                  "-webkit-background-clip": "text",
                  "-webkit-text-fill-color": "transparent",
                }}
              >
                Amsterdam
              </strong>
              .
            </h4>
          </AnimatedView>

          <AnimatedView delay={1.5}>
            <h4 className="text-lg text-stone-800 dark:text-neutral-50">
              With over 7 years of experience in designing and build softwares.
              Currently developing products at{" "}
              <a
                target="_blank"
                href="https://getrodeo.io/"
                className="text-violet-600 hover:underline"
                style={{
                  background:
                    "linear-gradient(217deg, #ef5350, #f48fb1, #7e57c2, #2196f3, #26c6da, #43a047)",
                  "-webkit-background-clip": "text",
                  "-webkit-text-fill-color": "transparent",
                }}
                rel="noreferrer"
              >
                <strong>Rodeo Software</strong>
              </a>
              .
            </h4>
          </AnimatedView>
        </div>
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
