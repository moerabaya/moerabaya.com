"use client";

import styled, { css, FlexComponentProps } from "styled-components";

import Component from "@/components/Component";

const FlexComponent = styled(Component).withConfig({
  shouldForwardProp: (prop) => !prop.toString().startsWith("$"),
})<FlexComponentProps>`
  display: flex;
  flex-direction: ${(props) => props.$direction ?? "row"};
  ${(props) =>
    props.$fullHeight &&
    css`
      min-height: 100vh;
    `}

  ${(props) =>
    props.$alignItems &&
    css`
      align-items: ${props.$alignItems};
    `}

	${(props) =>
    props.$justifyContent &&
    css`
      justify-content: ${props.$justifyContent};
    `}
`;

export default FlexComponent;
