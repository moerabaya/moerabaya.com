import { style } from "@vanilla-extract/css";

export const nav = style({
  backdropFilter: "blur(25px)",
  position: "fixed",
  width: "100%",
  zIndex: 100,
  height: `${45 + 15}px`,
  padding: "1em 1em",
  overflow: "hidden",
  transition: "0.25s ease height",
  backgroundColor: "var(--mr-nav-background-color)",
  "@media": {
    "(min-width: 500px)": {
      height: "67.5px",
      padding: "12px 35px",
    },
    "(min-width: 768px)": {
      height: "75px !important",
      padding: "15px 35px",
    },
  },
});

export const open = style({
  height: "100% !important",
});
