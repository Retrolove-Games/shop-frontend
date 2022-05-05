import React from "react";
import { Wrapper } from "./SidebarMobile.styles";
import { FacebookButton, TwitterButton, CloseButton } from "@components/Button";
import type { ComponentProps } from "./Sidebar.types";

type ComponentType = React.VFC<ComponentProps>;

export const SidebarMobile: ComponentType = ({ expanded, onClose, ...props }) => (
  <Wrapper aria-expanded={expanded} {...props}>
    <CloseButton clickHandler={onClose} />
  </Wrapper>
);
