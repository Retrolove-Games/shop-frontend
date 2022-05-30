import React from "react";
import { ThemeProvider } from "./src/store/ThemeContext";
import { AppStateProvider } from "./src/store/AppStateContext";
import { SidebarLayout } from "./src/components/Layout";
import { ApolloClientProvider } from "./src/apollo/ApolloClientProvider";
import "@retrolove-games/css-reset";
import "./src/styles/global.css";

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>
    <AppStateProvider>
      <ApolloClientProvider>
        <div>
          <SidebarLayout>{element}</SidebarLayout>
        </div>
      </ApolloClientProvider>
    </AppStateProvider>
  </ThemeProvider>
);
