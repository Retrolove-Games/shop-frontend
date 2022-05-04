import React from "react";
import { SidebarMobile } from "./SidebarMobile";
import { SidebarDesktop } from "./SidebarDesktop";
import { MobileDesktop } from "@components/Utils";
import type { ComponentProps } from "./types";

type ComponentType = React.VFC<ComponentProps>;

export const Sidebar: ComponentType = ({ expanded, onClose }) => (
  <MobileDesktop
    mobile={<SidebarMobile expanded={expanded} onClose={onClose} />}
    desktop={<SidebarDesktop expanded={expanded} />}
  />
);
