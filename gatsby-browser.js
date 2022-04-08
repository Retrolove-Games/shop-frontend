import React from "react";
import { ThemeProvider } from "./src/context/ThemeContext";
import "@retrolove-games/css-reset";
import "./src/styles/global.css"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
);
