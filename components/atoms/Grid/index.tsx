import styled, { css, GridProps } from "styled-components";
import Container from "components/atoms/Container";
import Row from "./Row";
import Col from "./Col";

const Grid = styled(Container)<GridProps>`
  @media (min-width: ${(props) =>
      props.theme.breakpoints.small}) and (max-width: ${(props) =>
      props.theme.breakpoints.medium}) {
    max-width: ${(props) =>
      props.fluid?.includes("sm") ? "100%" : props.theme.screens.small};
  }
  @media (min-width: ${(props) =>
      props.theme.breakpoints.medium}) and (max-width: ${(props) =>
      props.theme.breakpoints.large}) {
    max-width: ${(props) =>
      props.fluid?.includes("md") ? "100%" : props.theme.screens.medium};
  }
  @media (min-width: ${(props) => props.theme.breakpoints.large}) {
    max-width: ${(props) =>
      props.fluid?.includes("lg") ? "100%" : props.theme.screens.large};
  }
  @media (min-width: ${(props) => props.theme.breakpoints.xLarge}) {
    max-width: ${(props) =>
      props.fluid?.includes("xlg") ? "100%" : props.theme.screens.xLarge};
  }
`;

export default Grid;
export { Row, Col };
