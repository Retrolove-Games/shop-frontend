import React from "react";
import { NavbarMobile } from "@components/Navbar";

export const SidebarLayout: React.FC = ({ children }) => (
  <>
    <header>
      <NavbarMobile />
    </header>
    <div>

    </div>
    <main>
      {children}
    </main>
    <footer>

    </footer>
  </>
)
