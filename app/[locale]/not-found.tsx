"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { useMouse } from "react-use";

import useTheme from "@/hooks/useTheme";

export default function NotFound() {
  const spotlightSize = 300;
  const t = useTranslations();
  const titleRef = React.useRef<HTMLHeadingElement>(null!);
  const { docX, docY, posX, posY } = useMouse(titleRef);
  const { theme } = useTheme();

  // Position spotlight x coordinate based on mouse x, center based on width of spotlight, take into account element x offset
  const spotlightX = docX - spotlightSize / 2 - posX;

  // Position spotlight y coordinate based on mouse y, center based on width of spotlight, take into account element y offset
  const spotlightY = docY - spotlightSize / 2 - posY;

  return (
    <div className="flex h-[100vh] items-center justify-center">
      <h1
        ref={titleRef}
        className="cursor-zoom-in bg-clip-text px-6 text-5xl/[1.1] font-bold selection:text-stone-800 max-sm:text-4xl"
        style={{
          color: "transparent",
          backgroundPosition: `${spotlightX}px ${spotlightY}px`,
          background:
            theme === "light"
              ? `radial-gradient(circle ${spotlightSize}px at ${spotlightX}px ${spotlightY}px, rgba(0,0,0,1) 0%, rgba(0,0,0,0.1) 100%) text`
              : `radial-gradient(circle ${spotlightSize}px at ${spotlightX}px ${spotlightY}px, rgba(255,255,255,1) 0%, rgba(255,255,255,0.05) 100%) text`,
        }}
      >
        {t("404.title")}
      </h1>
    </div>
  );
}
