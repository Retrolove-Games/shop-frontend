import React from "react";
import { ThemeProvider } from "./src/context/ThemeContext";
import "@retrolove-games/css-reset";

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
);
