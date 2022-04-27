import { styled, darkTheme } from "@retrolove-games/ui-themes";

export const Wrapper = styled("header", {
  position: "fixed",
  top: 0,
  left: 0,

  width: "100vw",

  /**
   * Themes
   */
  [`.${darkTheme} &`]: {},

  /**
   * Variants
   */
  variants: {},
});
