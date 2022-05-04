import { styled, darkTheme, keyframes } from "@retrolove-games/ui-themes";

const swingInLeft = keyframes({
  "0%": { transform: "rotateY(-70deg)", transformOrigin: "left", opacity: 0 },
  "100%": { transform: "rotateY(0)", transformOrigin: "left", opacity: 1 },
});

export const Wrapper = styled("div", {
  background: "$whiteDefault",

  position: "fixed",
  left: "0",
  top: "0",
  zIndex: 0,

  height: "100vh",
  width: "100%",

  display: "flex",
  flexDirection: "row",
  flexWrap: "nowrap",
  justifyContent: "center",
  alignContent: "center",
  alignItems: "center",

  transition: "0.6s cubic-bezier(0.175, 0.885, 0.320, 1.275)",
  transform: "rotateY(-70deg)",
  transformOrigin: "left",
  opacity: 0,

  /**
   * Themes
   */
  [`.${darkTheme} &`]: {},

  /**
   * States
   */
  "&[aria-expanded='true']": {
    transform: "rotateY(0)",
    transformOrigin: "left",
    opacity: 1,
    zIndex: 6,
  },

  /**
   * Variants
   */
  variants: {
    size: {},
  },
});
