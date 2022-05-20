import React from "react";
import { Header } from "@components/Header";
import { Background } from "@components/Background";
import { Sidebar } from "@components/Sidebar";
import { Wrapper, Container } from "./SidebarLayout.styles";
import { useAppState } from "@src/store/AppStateContext";

export const SidebarLayout: React.FC = ({ children }) => {
  // const { isSidebarOpened, toggleSidebar } = useSidebar();
  const { isSidebarOpened, dispatch } = useAppState();

  const toggleSidebar = () => {
    dispatch({type: "TOGGLE_SIDEBAR"});
  }

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
