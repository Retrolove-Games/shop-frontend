import { styled } from "@retrolove-games/ui-themes";
import {
  MOBILE_NAVBAR_HEIGHT,
  DESKTOP_NAVBAR_HEIGHT,
  DESKTOP_MENU_WIDTH,
} from "@src/constants/layout";

export const Container = styled("main", {
  width: "100%",
});

export const Wrapper = styled("div", {
  /**
   * Variants
   */
  variants: {
    layout: {
      mobile: {
        paddingTop: MOBILE_NAVBAR_HEIGHT,
        paddingLeft: "$sm",
        paddingRight: "$sm",
      },
      smallDesktop: {
        display: "flex",

        paddingTop: DESKTOP_NAVBAR_HEIGHT,
        paddingLeft: "$md",
        paddingRight: "$md",

        // Container
        [`& ${Container}`]: {
          background: "Green",
        },
      },
      desktop: {
        justifyContent: "end",

        // Container
        [`& ${Container}`]: {
          maxWidth: `calc(100% - ${DESKTOP_MENU_WIDTH})`,
          background: "Red",
        },
      },
      largeDesktop: {
        justifyContent: "center",

        // Container
        [`& ${Container}`]: {
          maxWidth: `calc(100% - ${DESKTOP_MENU_WIDTH} * 2)`,
          background: "Yellow",
        },
      },
    },
  },
});
