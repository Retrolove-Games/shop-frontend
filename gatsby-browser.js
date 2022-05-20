import React from "react";
import { ThemeProvider } from "./src/store/ThemeContext";
import { SidebarProvider } from "./src/store/SidebarContext";
import { AppStateProvider } from "./src/store/AppStateContext";
import "@retrolove-games/css-reset";
import "./src/styles/global.css";

export const wrapRootElement = ({ element }) => (
  <SidebarProvider>
    <ThemeProvider>
      <AppStateProvider>
        {element}
      </AppStateProvider>
    </ThemeProvider>
  </SidebarProvider>
);
