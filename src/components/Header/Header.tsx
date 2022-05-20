import React from "react";
import { Wrapper } from "./Header.styles";
import { NavbarMobile, NavbarDesktop } from "@components/Navbar";
import { MobileDesktop } from "@components/Utils";
import { useAppState } from "@src/store/AppStateContext";
import { toggleSidebar } from "@store/actions/actions";

type ComponentProps = {};

type ComponentType = React.VFC<ComponentProps>;

export const Header: ComponentType = ({ ...props }) => {
  const { isSidebarOpened, dispatch } = useAppState();

  const basketCount = 0;

  const sharedProps = React.useMemo(
    () => ({
      toggleSidebar: () => dispatch(toggleSidebar()),
      basketCount,
      isSidebarOpened,
    }),
    [isSidebarOpened, basketCount]
  );

  return (
    <Wrapper {...props}>
      <MobileDesktop
        mobile={<NavbarMobile {...sharedProps} />}
        desktop={<NavbarDesktop {...sharedProps} />}
      />
    </Wrapper>
  );
};
