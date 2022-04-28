import React from "react";
import { Navbar } from "./Navbar";
import { LogoMobile } from "@retrolove-games/ui-logo";
import { Button } from "@retrolove-games/ui-button";
import { IconBurger } from "@retrolove-games/ui-icon";
import { BasketIndicator } from "@components/BasketIndicator";
import type { ComponentType } from "./Navbar.types";

export const NavbarMobile: ComponentType = ({
  toggleSidebar,
  isSidebarOpened,
}) => {
  return (
    <Navbar size="mobile">
      <Navbar.left>
        <Button
          onClick={toggleSidebar}
          aria-expanded={isSidebarOpened}
          aria-label={"Otwórz menu"}
          color="transparent"
          size="medium"
        >
          <IconBurger size="small" />
        </Button>
      </Navbar.left>
      <Navbar.center>
        <LogoMobile />
      </Navbar.center>
      <Navbar.right>
        <BasketIndicator>{0}</BasketIndicator>
      </Navbar.right>
    </Navbar>
  );
};
