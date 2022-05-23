import React from "react";
import { Wrapper, HeaderWrapper, MenuWrapper } from "./SidebarDesktop.styles";
import { FacebookButton, TwitterButton, CloseButton } from "@components/Button";
import { Toolbox } from "@retrolove-games/ui-toolbox";
import { SlidingMenu } from "@components/SlidingMenu";
import type { ComponentProps } from "./Sidebar.types";

type ComponentType = React.VFC<ComponentProps>;

export const SidebarDesktop: ComponentType = ({
  expanded,
  onClose,
  ...props
}) => (
  <Wrapper aria-expanded={expanded} {...props}>
    <HeaderWrapper>
      <div className="left">
        <Toolbox spacing="lg">
          <FacebookButton />
          <TwitterButton />
        </Toolbox>
      </div>
      <div className="right">
        <CloseButton clickHandler={onClose} />
      </div>
    </HeaderWrapper >
    <MenuWrapper layout={{
      "@initial": "smallDesktop",
      "@xxl": "desktop",
    }}>
      <SlidingMenu />
    </MenuWrapper>
    <div>
      aaa
    </div>
  </Wrapper>
);
