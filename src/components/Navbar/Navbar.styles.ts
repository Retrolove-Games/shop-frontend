import { styled, darkTheme } from "@retrolove-games/ui-themes";

export const Wrapper = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",

  background:
    "linear-gradient(180deg, $whiteDefault 46.75%, rgba(255, 255, 255, 0) 100%)",

  /**
   * Themes
   */
  [`.${darkTheme} &`]: {
    background:
      "linear-gradient(180deg, $darkDefault 46.75%, rgba(37, 34, 32, 0) 100%)",
  },

  /**
   * Variants
   */
  variants: {
    size: {
      mobile: {
        height: "64px",
        paddingLeft: "$sm",
        paddingRight: "$sm",
      },
      desktop: {
        height: "90px",
      },
    },
  },
});

export const Edge = styled("div", {
  flexGrow: 1,
  flexBasis: 0,
  alignSelf: "auto",

  display: "flex",
  flexDirection: "row",
  flexWrap: "nowrap",
  alignContent: "stretch",
  alignItems: "center",

  /**
   * Variants
   */
   variants: {
    align: {
      left: {
        justifyContent: "flex-start",
      },
      right: {
        justifyContent: "flex-end",
      }
    }
  },
});

export const Center = styled("div", {
  flexGrow: 1,
  flexBasis: 0,
  alignSelf: "auto",
  textAlign: "center",

  display: "flex",
  flexDirection: "row",
  flexWrap: "nowrap",
  justifyContent: "center",
  alignContent: "stretch",
  alignItems: "center",
});
