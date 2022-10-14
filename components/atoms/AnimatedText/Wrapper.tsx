import { ReactElement } from "react";
import styled from "styled-components";

const Wrapper = styled.span`
  /* white-space: nowrap; */
  font-weight: 500;
  line-height: 1em;
`;
// interface WrapperProps {
// 	children: ReactElement;
// }
// Word wrapper
// const Wrapper = (props: WrapperProps) => {
//   // We'll do this to prevent wrapping of words using CSS
//   return <span style={{
// 		whiteSpace: "nowrap"
// 	}} className="word-wrapper">{props.children}</span>;
// };

export default Wrapper;
