import { style } from "@vanilla-extract/css";

export const base = style({
  position: "relative",
  "::before": {
    content: '""',
    position: "absolute",
    display: "block",
    width: "calc(100% - 1em)",
    height: "2px",
    backgroundColor: "var(--mr-text-color)",
    transition: "0.15s linear",
    top: "37.5%",
  },
  "::after": {
    content: '""',
    position: "absolute",
    display: "block",
    width: "calc(100% - 1em)",
    height: "2px",
    backgroundColor: "var(--mr-text-color)",
    transition: "0.15s linear",
    top: "57.5%",
  },
});

export const active = style({
  selectors: {
    "&::before": {
      transform: "rotateZ(45deg) scale(0.9) translate(0.15em,0.15em)",
    },
    "&::after": {
      transform: "rotateZ(-45deg) scale(0.9) translate(0.25em,-0.225em)",
    },
  },
});
