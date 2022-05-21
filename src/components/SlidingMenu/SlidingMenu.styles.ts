import { styled, darkTheme } from "@retrolove-games/ui-themes";

export const Wrapper = styled("div", {
  overflow: "hidden",

  /**
   * Themes
   */
  [`.${darkTheme} &`]: {},

  /**
   * Variants
   */
  variants: {},
});
