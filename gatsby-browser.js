import React from "react";
import { ThemeProvider } from "./src/store/ThemeContext";
import { AppStateProvider } from "./src/store/AppStateContext";
import { SidebarLayout } from "./src/components/Layout";
import "@retrolove-games/css-reset";
import "./src/styles/global.css";

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>
    <AppStateProvider>
        <div>
          <SidebarLayout>{element}</SidebarLayout>
        </div>
    </AppStateProvider>
  </ThemeProvider>
);
