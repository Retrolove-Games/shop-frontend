import { styled, darkTheme } from "@retrolove-games/ui-themes";

export const Wrapper = styled("div", {
  position: "fixed",
  left: 0,
  top: 0,
  zIndex: -1,
  width: "100%",
  height: "100%",

  "& .wrapper": {
    display: "none",
  },

  /**
   * Themes
   */
  [`.${darkTheme} &`]: {
    backgroundColor: "$darkDefault",

    "& .image": {
      height: "100%",
      objectPosition: "50% 50%",
    },

    "& .wrapper": {
      display: "block",
      opacity: "0.15",
      filter: "blur(10px)",
      height: "100vh",
    },
  },

  /**
   * Variants
   */
  variants: {},
});
