import { styled, darkTheme } from "@retrolove-games/ui-themes";

export const Wrapper = styled("div", {
  position: "fixed",
  left: 0,
  top: 0,
  zIndex: -1,
  width: "100%",
  height: "100vh",

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

    "& .rain": {
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: 0,
    },

    "& .image-wrapper": {
      display: "block",
      opacity: "0.15",
      filter: "blur(10px)",
      height: "100vh",
      width: "100%",
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: 1,
    },
  },

  /**
   * Variants
   */
  variants: {},
});
