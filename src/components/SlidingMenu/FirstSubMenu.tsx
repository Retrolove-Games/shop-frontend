import React, { useState } from "react";
import { SubMenu, SubMenuItem } from "@retrolove-games/ui-menu";
import { Link } from "gatsby";
import type { MenuItemNode } from "@hooks/useHeaderMenu";

type ComponentProps = {
  isExpanded: boolean;
  items: MenuItemNode[];
};

type ComponentType = React.VFC<ComponentProps>;

export const FirstSubMenu: ComponentType = ({ isExpanded, items, ...props }) => {
  return (
    <SubMenu isExpanded={isExpanded}>
      { items.map(item => (
        <SubMenuItem key={item.id}>
          <Link to={item.path}>{item.label}</Link>
        </SubMenuItem>
      ))}
    </SubMenu>
  );
};
