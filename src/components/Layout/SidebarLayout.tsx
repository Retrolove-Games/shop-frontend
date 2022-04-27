import React from "react";
import { Header } from "@components/Header";

export const SidebarLayout: React.FC = ({ children }) => (
  <>
    <Header />
    <div>

    </div>
    <main>
      {children}
    </main>
    <footer>

    </footer>
  </>
)
