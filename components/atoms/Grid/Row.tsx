import styled, { css, RowProps } from "styled-components";
import FlexComponent from "../FlexComponent";

const Row = styled(FlexComponent)<RowProps>`
  padding-top: ${(props) => props.theme.grid.padding};
  padding-bottom: ${(props) => props.theme.grid.padding};
  display: flex;
  flex-wrap: ${(props) => (props.wrap ? "wrap" : "nowrap")};
  ${(props) =>
    props.fullHeight &&
    css`
      min-height: 100%;
    `}
`;

export default Row;
