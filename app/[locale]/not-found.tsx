"use client";

import React from "react";
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
    <div className="flex h-[100vh] items-center justify-center">
      <h1
        ref={titleRef}
        className="text-6xl font-bold"
        style={{
          backgroundPosition: `${spotlightX}px ${spotlightY}px`,
          background: `radial-gradient(circle ${spotlightSize}px at ${spotlightX}px ${spotlightY}px, rgba(255,255,255,1) 0%, rgba(0,0,0,0.8) 100%)`,
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        {getLocalizedString("404", "title")}
      </h1>
    </div>
  );
};

export default NotFound;
