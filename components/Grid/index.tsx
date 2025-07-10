import Container from "components/Container";
import styled, { css, GridProps } from "styled-components";

import Col from "./Col";
import Row from "./Row";

const Grid = styled(Container)<GridProps>`
  ${(props) =>
    props.fluid?.includes("all")
      ? css`
          max-width: 100%;
        `
      : css`
          @media (min-width: ${props.theme.breakpoints
              .small}) and (max-width: ${props.theme.breakpoints.medium}) {
            max-width: ${props.fluid?.includes("sm")
              ? "100%"
              : props.theme.screens.small};
          }
          @media (min-width: ${props.theme.breakpoints
              .medium}) and (max-width: ${props.theme.breakpoints.large}) {
            max-width: ${props.fluid?.includes("md")
              ? "100%"
              : props.theme.screens.medium};
          }
          @media (min-width: ${props.theme.breakpoints.large}) {
            max-width: ${props.fluid?.includes("lg")
              ? "100%"
              : props.theme.screens.large};
          }
          @media (min-width: ${props.theme.breakpoints.xLarge}) {
            max-width: ${props.fluid?.includes("xlg")
              ? "100%"
              : props.theme.screens.xLarge};
          }
        `}
`;

export default Grid;
export { Col, Row };
