import { ReactElement } from "react";
import styled from "styled-components";


const Wrapper = styled.span`
	white-space: nowrap;
	-webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: black;
	font-weight: bold;
	color: transparent
`
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