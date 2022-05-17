import { styled, darkTheme } from "@retrolove-games/ui-themes";
import { DESKTOP_MENU_WIDTH, DESKTOP_NAVBAR_HEIGHT, MIN_DESKTOP_MENU_WIDTH } from "@src/constants/layout";

export const HeaderWrapper = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  height: DESKTOP_NAVBAR_HEIGHT,
});

export const MenuWrapper = styled("div", {
  display: "flex",
  justifyContent: "center",
  flexGrow: 1,

  "& > *": {
    width: "100%",
    maxWidth: "350px",
  },

  /**
   * Variants
   */
  variants: {
    layout: {
      "smallDesktop": {
        paddingTop: "$lg",
      },
      "desktop": {
        paddingTop: "$xl",
      },
    },
  },
});


export const Wrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",

  background: "$whiteDefault",
  borderRight: "solid 1px $redDefault",

  position: "fixed",
  left: "0",
  top: "0",
  zIndex: 6,

  height: "100vh",
  width: DESKTOP_MENU_WIDTH,
  // minWidth: MIN_DESKTOP_MENU_WIDTH,

  paddingLeft: "$sm",
  paddingRight: "$lg",

  transition: "transform 0.5s ease-out",
  transform: "translate3d(-100%, 0, 0)",

  /**
   * Themes
   */
  [`.${darkTheme} &`]: {
    background: "$darkDefault",
    borderRight: "none",
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
