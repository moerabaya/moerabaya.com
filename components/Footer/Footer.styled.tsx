"use client";

import React, {
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
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
  const { y } = useWindowScroll();
  const [footerHeight, setFooterHeight] = useState<number>(0);

  useEffect(() => {
    if (ref && typeof ref !== "function" && ref.current) {
      setFooterHeight(ref.current.clientHeight);
    }
  }, [ref]);

  const opacity = useMemo(() => {
    if (!footerHeight) return 0;

    const contentHeight = document.body.clientHeight + footerHeight;

    return (
      (window.innerWidth <= 700 ? 2 : 1) -
      (contentHeight - (y + window.innerHeight)) / footerHeight
    );
  }, [y, footerHeight]);

  return (
    <StyledFooter ref={ref}>
      <div style={{ opacity }} className="container mx-auto px-5">
        {children}
      </div>
    </StyledFooter>
  );
});

FooterWrapper.displayName = "FooterWrapper";
