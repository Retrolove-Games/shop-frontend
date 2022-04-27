import React from "react";
import { Navbar } from "./Navbar";
import { LogoDesktop } from "@retrolove-games/ui-logo";
import { Button } from "@retrolove-games/ui-button";
import { IconBurger } from "@retrolove-games/ui-icon";
import { BasketIndicator } from "@components/BasketIndicator";
import { LabelGroup } from "@retrolove-games/ui-label-group";
import { Label } from "@retrolove-games/ui-label";
import { useId } from "react-id-generator";
import type { ComponentType } from "./Navbar.types";

export const NavbarDesktop: ComponentType = ({
  toggleSidebar,
  basketCount,
  isSidebarOpened,
}) => {
  const [htmlId] = useId();

  return (
    <Navbar size="desktop">
      <Navbar.left>
        <LabelGroup as={"div"}>
          <LabelGroup.left>
            <Button
              onClick={toggleSidebar}
              aria-expanded={isSidebarOpened}
              aria-label={"Otwórz menu"}
              color="transparent"
              size="medium"
              id={htmlId}
            >
              <IconBurger />
            </Button>
          </LabelGroup.left>
          <LabelGroup.right>
            <Label htmlFor={htmlId}>Menu</Label>
          </LabelGroup.right>
        </LabelGroup>
      </Navbar.left>
      <Navbar.center>
        <LogoDesktop />
      </Navbar.center>
      <Navbar.right>
        <BasketIndicator>{basketCount}</BasketIndicator>
      </Navbar.right>
    </Navbar>
  );
};
