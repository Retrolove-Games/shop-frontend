import React from "react";
import { Wrapper } from "./SidebarDesktop.styles";

type ComponentProps = {
  expanded: boolean
};

type ComponentType = React.VFC<ComponentProps>;

export const SidebarDesktop: ComponentType = ({ expanded, ...props }) => (
  <Wrapper aria-expanded={expanded} {...props}>
    Cholibka desktop
  </Wrapper>
);
