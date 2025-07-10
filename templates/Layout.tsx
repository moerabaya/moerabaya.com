import React, { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import useGlobalization from "hooks/useGlobalization";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";

import Footer from "@/components/Footer";

import GlobalStyle from "./GlobalStyle";

const Navigation = dynamic(() => import("@/components/Navigation"), {
  ssr: false,
});
export default function Layout({ children }: React.PropsWithChildren<unknown>) {
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
  }, [footerHeight]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle direction={direction} />
      <div className={`content snappy`}>
        <Navigation />
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
        {pathname !== "/work" && <Footer ref={footerRef} />}
      </div>
    </ThemeProvider>
  );
}
