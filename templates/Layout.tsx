import useGlobalization from "hooks/useGlobalization";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useRef } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";
import Footer from "../components/organisms/Footer";
import GlobalStyle from "./GlobalStyle";
const Navigation = dynamic(() => import("../components/organisms/Navigation"), {
  ssr: false,
});
export default function Layout({ children, pageProps }: any) {
  const footerRef = useRef<HTMLDivElement>(null);
  const { direction } = useGlobalization();
  const { pathname } = useRouter();
  const [footerHeight, setFooterHeight] = React.useState(0);
  useEffect(() => {
    function handleResize() {
      if (footerRef.current?.clientHeight != footerHeight)
        setFooterHeight(footerRef.current?.clientHeight ?? footerHeight);
    }

    /**
     * Initial sizing.
     */
    handleResize();

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle direction={direction} />
      <div className={`content snappy`}>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;600&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Navigation {...pageProps} />
        <main
          style={{
            marginBottom: pathname !== "/work" ? footerHeight : 0,
            position: "relative",
            zIndex: 10,
            backgroundColor: "var(--background-color)",
            minHeight: "100vh",
          }}
        >
          {children}
        </main>
        {/* <AnimatedView> */}
        {pathname !== "/work" && <Footer ref={footerRef} />}
        {/* </AnimatedView> */}
      </div>
    </ThemeProvider>
  );
}
