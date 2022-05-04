import { styled, darkTheme } from "@retrolove-games/ui-themes";

export const Wrapper = styled("header", {
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 5,

  width: "100%",

  /**
   * Themes
   */
  [`.${darkTheme} &`]: {},

  /**
   * Variants
   */
  variants: {},
});
