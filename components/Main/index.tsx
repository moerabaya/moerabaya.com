"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

import Footer from "@/components/Footer";

const Main = ({ children }: React.PropsWithChildren<unknown>) => {
  const [footerHeight, setFooterHeight] = useState(0);
  const footerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

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
    <>
      <main
        style={{
          marginBottom: pathname !== "/work" ? footerHeight : 0,
          position: "relative",
          zIndex: 10,
          backgroundColor: "var(--mr-background-color)",
          minHeight: "100vh",
        }}
      >
        {children}
      </main>
      {pathname !== "/work" && <Footer ref={footerRef} />}
    </>
  );
};

export default Main;
