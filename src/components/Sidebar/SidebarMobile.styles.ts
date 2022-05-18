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

export const InnerContainer = styled("div", {
  background: "$whiteDefault",
  width: "85%",
  minHeight: "100vh",
  maxHeight: "100vh",
  overflowY: "auto",

  display: "flex",
  flexDirection: "column",
  flexWrap: "nowrap",
  justifyContent: "flex-start",
  alignContent: "stretch",
  alignItems: "flex-start",

  padding: "$md $xl $md $md",

  /**
   * Themes
   */
   [`.${darkTheme} &`]: {
    background: "$darkDefault",
  },
});

export const Wrapper = styled("div", {
  background: "rgba(255, 255, 255, 0)",

  position: "fixed",
  left: "0",
  top: "0",

  height: "100vh",
  width: "100%",

  transition: "transform 0.35s ease-in, background 0.15s ease-out",
  transform: "translate3d(-100%, 0, 0)",
  zIndex: 6,

  /**
   * Themes
   */
  [`.${darkTheme} &`]: {
    background: "rgba(0, 0, 0, 0)",

    "&[aria-expanded='true']": {
      background: "rgba(0, 0, 0, .25)",
    },
  },

  /**
   * States
   */
  "&[aria-expanded='true']": {
    transform: "translate3d(0, 0, 0)",
    background: "rgba(255, 255, 255, .25)",
    transition: "transform 0.35s ease-out, background 0.35s ease-out 0.5s",
  },

  /**
   * Variants
   */
  variants: {
    size: {},
  },
});
