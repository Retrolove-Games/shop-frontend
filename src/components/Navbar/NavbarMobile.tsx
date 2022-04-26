import React from "react";
import { Navbar } from "./Navbar";
import { LogoMobile } from "@retrolove-games/ui-logo";
import { Button } from "@retrolove-games/ui-button";
import { IconBurger, IconBasket } from "@retrolove-games/ui-icon";
import { useSidebar } from "@src/context/SidebarContext";

type ComponentType = React.VFC;

export const NavbarMobile: ComponentType = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <Navbar size="mobile">
      <Navbar.left>
        <Button
          onClick={toggleSidebar}
          aria-expanded={false}
          color="transparent"
          size="medium"
        >
          <IconBurger size="small" />
        </Button>
      </Navbar.left>
      <Navbar.center>
        <LogoMobile />
      </Navbar.center>
      <Navbar.right>World</Navbar.right>
    </Navbar>
  );
};
