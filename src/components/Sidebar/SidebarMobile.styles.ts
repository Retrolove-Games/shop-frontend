import { styled, darkTheme } from "@retrolove-games/ui-themes";

export const HeaderWrapper = styled("div", {
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
});

export const  MenuWrapper = styled("div", {
  width: "100%",
  paddingTop: "$xl",
});

export const Wrapper = styled("div", {
  background: "$whiteDefault",

  position: "fixed",
  left: "0",
  top: "0",

  height: "100vh",
  width: "100%",

  display: "flex",
  flexDirection: "column",
  flexWrap: "nowrap",
  justifyContent: "flex-start",
  alignContent: "stretch",
  alignItems: "flex-start",

  padding: "$md",

  transition: "transform 0.35s ease-out",
  transform: "translate3d(-100%, 0, 0)",
  zIndex: 6,

  /**
   * Themes
   */
  [`.${darkTheme} &`]: {
    background: "$darkDefault"
  },

  /**
   * States
   */
  "&[aria-expanded='true']": {
    transform: "translate3d(0, 0, 0)",

  },

  /**
   * Variants
   */
  variants: {
    size: {},
  },
});
