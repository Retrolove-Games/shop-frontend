import React from "react";
import { Wrapper } from "./SidebarMobile.styles";
import type { ComponentProps } from "./types";

type ComponentType = React.VFC<ComponentProps>;

export const SidebarMobile: ComponentType = ({ expanded, onClose, ...props }) => (
  <Wrapper aria-expanded={expanded} {...props}>
    Cholibka mobile
    <button onClick={onClose}>Close</button>
  </Wrapper>
);
