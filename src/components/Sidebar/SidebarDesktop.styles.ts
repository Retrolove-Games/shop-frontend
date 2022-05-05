import { styled, darkTheme } from "@retrolove-games/ui-themes";
import { DESKTOP_MENU_WIDTH } from "@src/constants/layout";

export const Wrapper = styled("div", {
  background: "$whiteDefault",
  borderRight: "solid 1px $redDefault",

  position: "fixed",
  left: "0",
  top: "0",
  zIndex: 6,

  height: "100vh",
  width: DESKTOP_MENU_WIDTH,

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
