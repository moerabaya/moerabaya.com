import styled from "styled-components";

import Component from "@/components/Component";

const ButtonGroup = styled(Component)`
  display: flex;
  flex-wrap: wrap;
  > * {
    margin: 0.5em 0.5em;
  }
`;

export default ButtonGroup;
