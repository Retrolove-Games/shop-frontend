import React from "react";
import { ThemeProvider } from "./src/context/ThemeContext";
import { SidebarProvider } from "./src/context/SidebarContext";
import "@retrolove-games/css-reset";
import "./src/styles/global.css";

export const wrapRootElement = ({ element }) => (
  <SidebarProvider>
    <ThemeProvider>{element}</ThemeProvider>
  </SidebarProvider>
);
