import React from "react";
import { useSidebar } from "../../context/SidebarContext";
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
          "@lg": "smallDesktop",
          "@xxl": "desktop",
          "@xxxl": "largeDesktop",
        }}
      >
        <Container>{children}</Container>
      </Wrapper>
      <footer></footer>
      <Background />
    </>
  );
};
