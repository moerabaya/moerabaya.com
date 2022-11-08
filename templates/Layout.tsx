import Head from "next/head";
import { ThemeProvider } from "styled-components";
import Footer from "../components/organisms/Footer";
import { theme } from "styles/theme";
import dynamic from "next/dynamic";
import AnimatedView from "../components/atoms/AnimatedView";
import React, {
  HTMLAttributes,
  useEffect,
  useLayoutEffect,
  useRef,
} from "react";
import GlobalStyle from "./GlobalStyle";
import useGlobalization from "hooks/useGlobalization";
const Navigation = dynamic(() => import("../components/organisms/Navigation"), {
  ssr: false,
});
export default function Layout({ children, pageProps }: any) {
  const footerRef = useRef<HTMLDivElement>(null);
  const { direction } = useGlobalization();
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
      <div className={`content`}>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"
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
        <AnimatedView>
          <Navigation {...pageProps} />
        </AnimatedView>
        <main
          style={{
            marginBottom: footerHeight,
            position: "relative",
            zIndex: 10,
            backgroundColor: "var(--background-color)",
            minHeight: "100vh",
          }}
        >
          {children}
        </main>
        {/* <AnimatedView> */}
        <Footer ref={footerRef} />
        {/* </AnimatedView> */}
      </div>
    </ThemeProvider>
  );
}
