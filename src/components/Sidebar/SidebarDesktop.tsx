import React from "react";
import { Wrapper, Header } from "./SidebarDesktop.styles";
import { Button } from "@retrolove-games/ui-button";
import { IconClose } from "@retrolove-games/ui-icon";
import type { ComponentProps } from "./types";

type ComponentType = React.VFC<ComponentProps>;

export const SidebarDesktop: ComponentType = ({
  expanded,
  onClose,
  ...props
}) => (
  <Wrapper aria-expanded={expanded} {...props}>
    <Header>
      <Button
        size={"medium"}
        color={"red"}
        onClick={onClose}
        aria-label={"Zamknij menu"}
      >
        <IconClose size={"xsmall"} />
      </Button>
    </Header>
  </Wrapper>
);
