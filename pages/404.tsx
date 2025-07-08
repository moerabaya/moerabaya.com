import useGlobalization from "@/hooks/useGlobalization";
import Head from "next/head";
import React from "react";

const NotFound = () => {
  const { getLocalizedString } = useGlobalization();
  return (
    <>
      <Head>
        <title>{getLocalizedString("404", "title")}</title>
      </Head>
      <div className="page-content coming-soon-container">
        <h1 className="notfound-title">{getLocalizedString("404", "title")}</h1>
      </div>
    </>
  );
};
NotFound.displayName = "NotFound";

export default NotFound;

export async function getStaticProps() {
  return {
    props: {},
  };
}
