import styled from "styled-components";
import Component from "components/Component";

const Container = styled(Component)`
  margin: ${(props) => props.m ?? "0px auto"}; // center element in center
  max-width: unset;
  padding: ${(props) => props.p ?? "0 1.75em"}; // center element in center
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
