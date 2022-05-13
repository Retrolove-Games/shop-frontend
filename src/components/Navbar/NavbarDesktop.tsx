import React from "react";
import { Navbar } from "./Navbar";
import { LogoDesktop } from "@retrolove-games/ui-logo";
import { IconBurger } from "@retrolove-games/ui-icon";
import { LabelGroup } from "@retrolove-games/ui-label-group";
import { Label } from "@retrolove-games/ui-label";
import { NavbarToolbox } from "./NavbarToolbox";
import { Link } from "gatsby";
import type { ComponentType } from "./Navbar.types";

export const NavbarDesktop: ComponentType = ({
  toggleSidebar,
  isSidebarOpened,
}) => {
  return (
    <Navbar size="desktop">
      <Navbar.left>
        <LabelGroup onClick={toggleSidebar}>
          <LabelGroup.left>
              <IconBurger />
          </LabelGroup.left>
          <LabelGroup.right>
            <Label as="span">Menu</Label>
          </LabelGroup.right>
        </LabelGroup>
      </Navbar.left>
      <Navbar.center>
        <Link to="/">
          <LogoDesktop />
        </Link>
      </Navbar.center>
      <Navbar.right>
        <NavbarToolbox />
      </Navbar.right>
    </Navbar>
  );
};
