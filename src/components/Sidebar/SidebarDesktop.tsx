import React from "react";
import {
  Wrapper,
  HeaderWrapper,
  MenuWrapper,
  ToolsWrapper,
} from "./SidebarDesktop.styles";
import { FacebookButton, TwitterButton, CloseButton } from "@components/Button";
import { Toolbox } from "@retrolove-games/ui-toolbox";
import { SlidingMenu } from "@components/SlidingMenu";
import { IconSearch } from "@retrolove-games/ui-icon";
import { Button } from "@retrolove-games/ui-button";
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
    </HeaderWrapper>
    <MenuWrapper
      layout={{
        "@initial": "smallDesktop",
        "@xxl": "desktop",
      }}
    >
      <SlidingMenu />
    </MenuWrapper>
    <ToolsWrapper>
      <Button leftElement={<IconSearch size={"xsmall"} />} shouldFitContainer>
        Szukaj
      </Button>
    </ToolsWrapper>
  </Wrapper>
);
