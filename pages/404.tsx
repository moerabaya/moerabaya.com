import React from "react";
import Head from "next/head";
import styles from "@/assets/styles/pages/404.module.scss";
import { useMouse } from "react-use";

import useGlobalization from "@/hooks/useGlobalization";

const NotFound = () => {
  const spotlightSize = 300;

  const { getLocalizedString } = useGlobalization();
  const titleRef = React.useRef(null);
  const { docX, docY, posX, posY } = useMouse(titleRef);

  // Position spotlight x coordinate based on mouse x, center based on width of spotlight, take into account element x offset
  const spotlightX = docX - spotlightSize / 2 - posX;

  // Position spotlight y coordinate based on mouse y, center based on width of spotlight, take into account element y offset
  const spotlightY = docY - spotlightSize / 2 - posY;

  return (
    <>
      <Head>
        <title>{getLocalizedString("404", "title")}</title>
      </Head>
      <div className="flex h-[100vh] items-center justify-center">
        <h1
          ref={titleRef}
          className={styles["page-title"]}
          style={{
            backgroundPosition: `${spotlightX}px ${spotlightY}px`,
          }}
        >
          {getLocalizedString("404", "title")}
        </h1>
      </div>
    </>
  );
};

export default NotFound;
