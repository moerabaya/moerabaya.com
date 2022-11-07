import styled from "styled-components";
import Component from "components/atoms/Component";

const Container = styled(Component)`
  margin: 0 auto;
  max-width: unset;
  @media (min-width: ${(props) =>
      props.theme.breakpoints.small}) and (max-width: ${(props) =>
      props.theme.breakpoints.medium}) {
    max-width: ${(props) => props.theme.screens.small};
  }
  @media (min-width: ${(props) =>
      props.theme.breakpoints.medium}) and (max-width: ${(props) =>
      props.theme.breakpoints.large}) {
    max-width: ${(props) => props.theme.screens.medium};
  }
  @media (min-width: ${(props) => props.theme.breakpoints.large}) {
    max-width: ${(props) => props.theme.screens.large};
  }
  @media (min-width: ${(props) => props.theme.breakpoints.xLarge}) {
    max-width: ${(props) => props.theme.screens.xLarge};
  }
`;
export default Container;
