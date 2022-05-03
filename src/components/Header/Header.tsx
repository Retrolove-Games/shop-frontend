import React from "react";
import { Wrapper } from "./Header.styles";
import { NavbarMobile, NavbarDesktop } from "@components/Navbar";
import { useSidebar } from "@src/context/SidebarContext";
// @ts-ignore
import { Media } from "gatsby-plugin-fresnel";

type ComponentProps = {};

type ComponentType = React.VFC<ComponentProps>;

export const Header: ComponentType = ({ ...props }) => {
  const { isSidebarOpened, toggleSidebar } = useSidebar();

  const basketCount = 0;

  const sharedProps = React.useMemo(() => ({
    toggleSidebar,
    basketCount,
    isSidebarOpened,
  }), [isSidebarOpened, basketCount]);

  return (
    <Wrapper {...props}>
      <Media lessThan="xl">
        <NavbarMobile {...sharedProps} />
      </Media>
      <Media greaterThanOrEqual="xl">
        <NavbarDesktop {...sharedProps} />
      </Media>
    </Wrapper>
  );
};
