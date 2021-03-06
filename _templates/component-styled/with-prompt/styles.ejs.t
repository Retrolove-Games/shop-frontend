---
to: src/components/<%=name%>/<%=name%>.styles.ts
---
import { styled, darkTheme } from "@retrolove-games/ui-themes";

export const Wrapper = styled("div", {
  /**
   * Themes
   */
  [`.${darkTheme} &`]: {},

  /**
   * Variants
   */
  variants: {},
});
