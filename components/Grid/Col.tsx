import Component from "components/Component";
import styled, { ColProps, css } from "styled-components";

const Col = styled(Component)<ColProps>`
  padding-left: ${(props) => props.theme.grid.gutter};
  padding-right: ${(props) => props.theme.grid.gutter};

  ${(props) =>
    props.sm &&
    css`
      width: ${100 / (12 / props.sm)}%;
    `};
  ${(props) =>
    props.md &&
    css`
      @media (min-width: ${(props) => props.theme.screens.small}) {
        width: ${100 / (12 / props.md)}%;
      }
    `};
  @media (min-width: ${(props) => props.theme.screens.medium}) {
    ${(props) =>
      props.lg &&
      css`
        width: ${100 / (12 / props.lg)}% !important;
      `}
  }
  @media (min-width: ${(props) => props.theme.screens.large}) {
    ${(props) =>
      props.xl &&
      css`
        width: ${100 / (12 / props.xl)}% !important;
      `}
  }
`;
export default Col;
