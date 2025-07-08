import { Button, Component } from "components";
import styled from "styled-components";

const ButtonGroup = styled(Component)`
  display: flex;
  flex-wrap: wrap;
  > * {
    margin: 0.5em 0.5em;
  }
`;

export default ButtonGroup;
