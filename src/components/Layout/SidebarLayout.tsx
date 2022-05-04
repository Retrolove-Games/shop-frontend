import React from "react";
import { useSidebar } from "../../context/SidebarContext";
import { Header } from "@components/Header";
import { Background } from "@components/Background";
import { Sidebar } from "@components/Sidebar";
import { Main } from "./SidebarLayout.styles";

export const SidebarLayout: React.FC = ({ children }) => {
  const { isSidebarOpened, toggleSidebar } = useSidebar();

  return (
    <>
      <Header />
      <Sidebar expanded={isSidebarOpened} onClose={toggleSidebar} />
      <Main data-wide-layout={!isSidebarOpened}>{children}</Main>
      <footer></footer>
      <Background />
    </>
  );
};
