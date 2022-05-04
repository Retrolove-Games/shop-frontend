import { styled, darkTheme } from "@retrolove-games/ui-themes";

export const Main = styled("main", {

});

export const Sidebar = styled("div", {
  backgroundColor: "$whiteDefault",

  [`.${darkTheme} &`]: {
    backgroundColor: "$darkDefault",
  }
});
