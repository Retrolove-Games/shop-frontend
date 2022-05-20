import React from "react";
import { useSidebar } from "@src/store/SidebarContext";
import { Header } from "@components/Header";
import { Background } from "@components/Background";
import { Sidebar } from "@components/Sidebar";
import { Wrapper, Container } from "./SidebarLayout.styles";

export const SidebarLayout: React.FC = ({ children }) => {
  const { isSidebarOpened, toggleSidebar } = useSidebar();

  return (
    <>
      <Header />
      <Sidebar expanded={isSidebarOpened} onClose={toggleSidebar} />
      <Wrapper
        layout={{
          "@initial": "mobile",
          "@xl": "smallDesktop",
          "@xxl": "desktop",
          "@xxxl": "largeDesktop",
        }}
      >
        <Container layout={isSidebarOpened ? "standard" : "expanded"}>{children}</Container>
      </Wrapper>
      <footer></footer>
      <Background />
    </>
  );
};
