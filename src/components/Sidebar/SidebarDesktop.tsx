import React from "react";
import { Wrapper } from "./SidebarDesktop.styles";
import type { ComponentProps } from "./types";

type ComponentType = React.VFC<ComponentProps>;

export const SidebarDesktop: ComponentType = ({ expanded, onClose, ...props }) => (
  <Wrapper aria-expanded={expanded} {...props}>
    Cholibka desktop
  </Wrapper>
);
