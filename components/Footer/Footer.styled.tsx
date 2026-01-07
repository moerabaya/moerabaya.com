"use client";

import React, { forwardRef, useEffect, useState } from "react";
import { useWindowScroll } from "react-use";
import { twMerge } from "tailwind-merge";

const footerClasses = [
  "[&_a]:[color:var(--mr-footer-font-color)]",
  "[&_a:visited]:[color:var(--mr-footer-font-color)]",
].join(" ");

export const StyledFooter = forwardRef<
  HTMLElement,
  React.ComponentProps<"footer">
>(({ className, ...props }, ref) => (
  <footer
    ref={ref}
    className={twMerge(
      "fixed bottom-0 left-0 right-0 z-0 bg-black py-8 text-white",
      footerClasses,
      className
    )}
    {...props}
  />
));

StyledFooter.displayName = "StyledFooter";

export const FooterWrapper = forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>
>((props, ref) => {
  const { children } = props;
  const [opacity, setOpacity] = useState(0);
  const scroll = useWindowScroll();

  useEffect(() => {
    const footerHeight = (ref as React.RefObject<HTMLElement>)?.current
      ?.clientHeight;
    const contentHeight = document.body.clientHeight + footerHeight!;
    setOpacity(
      (window.innerWidth <= 700 ? 2 : 1) -
        (contentHeight - (scroll.y + window.innerHeight)) / footerHeight!
    );
  }, [ref, scroll.y]);
  return (
    <StyledFooter ref={ref}>
      <div style={{ opacity }} className="container mx-auto px-5">
        {children}
      </div>
    </StyledFooter>
  );
});

FooterWrapper.displayName = "FooterWrapper";
