"use client";

import React, { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";
import styled from "styled-components";

export const StyledFooter = styled.footer`
  background: var(--footer-background-color);
  color: var(--footer-font-color);
  padding: 2rem 0;
  position: fixed;
  z-index: 0;
  bottom: 0;
  left: 0;
  right: 0;

  > div {
    transition: 0.25s ease-in-out;
  }

  a {
    color: var(--footer-font-color);
    &:visited {
      color: var(--footer-font-color);
    }
  }
`;

export const FooterWrapper = React.forwardRef<
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
