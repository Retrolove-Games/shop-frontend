import React from "react";
import { SubMenu, SubMenuItem } from "@retrolove-games/ui-menu";
import { Link } from "gatsby";
import { SlidingSubMenu } from "./SlidingSubMenu";
import {
  setMenuLevel,
  setCurrentMenuSubItem,
  setParentMenuLabel,
} from "@src/store/actions/actions";
import { useAppState } from "@src/store/AppStateContext";

import type { MenuItemNode } from "@hooks/useHeaderMenu";

type ComponentProps = {
  isExpanded: boolean;
  items: MenuItemNode[];
};

type ComponentType = React.VFC<ComponentProps>;

export const FirstSubMenu: ComponentType = ({ isExpanded, items }) => {
  const { currentMenuSubItem, parentMenuLabel, dispatch } = useAppState();

  const handleClick = (id: string, label: string) => {
    dispatch(setMenuLevel(1));
    dispatch(setCurrentMenuSubItem(id));
    dispatch(setParentMenuLabel(label));
  };

  const handleReturn = () => {
    dispatch(setMenuLevel(0));
  }

  return (
    <SubMenu isExpanded={isExpanded}>
      {items.map((item) => (
        <SubMenuItem key={item.id}>
          {/*<Link to={item.path}>{item.label}</Link>*/}
          <button onClick={() => handleClick(item.id, item.label)}>
            {item.label}
          </button>
          <SlidingSubMenu
            isHidden={currentMenuSubItem !== item.id}
            parentLabel={parentMenuLabel}
            items={item.childItems.nodes}
            level={1}
            onReturn={handleReturn}
          />
        </SubMenuItem>
      ))}
    </SubMenu>
  );
};
