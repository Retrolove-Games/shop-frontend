import React from "react";
import { Wrapper, Header } from "./SidebarDesktop.styles";
import { FacebookButton, TwitterButton, CloseButton } from "@components/Button";
import { Toolbox } from "@retrolove-games/ui-toolbox";
import type { ComponentProps } from "./types";

type ComponentType = React.VFC<ComponentProps>;

export const SidebarDesktop: ComponentType = ({
  expanded,
  onClose,
  ...props
}) => (
  <Wrapper aria-expanded={expanded} {...props}>
    <Header>
      <div className="left">
        <Toolbox spacing="lg">
          <FacebookButton />
          <TwitterButton />
        </Toolbox>
      </div>
      <div className="right">
        <CloseButton clickHandler={onClose} />
      </div>
    </Header>
  </Wrapper>
);
