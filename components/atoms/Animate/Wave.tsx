import { keyframes } from "styled-components";

const Wave = keyframes`
  0% { transform: rotate( 0.0deg) }
  10% { transform: rotate(18.0deg) }  /* The following five values can be played with to make the waving more or less extreme */
  20% { transform: rotate(-12.0deg) }
  30% { transform: rotate(18.0deg) }
  40% { transform: rotate(-8.0deg) }
  50% { transform: rotate(14.0deg) }
  60% { transform: rotate( 0.0deg) }  /* Reset for the last half to pause */
100% { transform: rotate( 0.0deg) }
`;

export default Wave;
