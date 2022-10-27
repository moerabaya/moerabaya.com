import styled, { css, FlexComponentProps } from "styled-components";
import { Component } from "../";

const FlexComponent = styled(Component)<FlexComponentProps>`
  display: flex;
  ${(props) =>
    props.fullHeight &&
    css`
      min-height: 100vh;
    `}

  ${(props) =>
    props.alignItems &&
    css`
      align-items: ${props.alignItems};
    `}

	${(props) =>
    props.justifyContent &&
    css`
      justify-content: ${props.justifyContent};
    `}
`;

export default FlexComponent;
