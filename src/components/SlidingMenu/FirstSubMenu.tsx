import React, { useCallback } from "react";
import { SubMenu, SubMenuItem } from "@retrolove-games/ui-menu";
import { Link, navigate } from "gatsby";
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

  const handleClick = useCallback(({
    id,
    label
  }: {
    id: string;
    label: string;
  }) => {
    dispatch(setMenuLevel(1));
    dispatch(setCurrentMenuSubItem(id));
    dispatch(setParentMenuLabel(label));
  }, []);

  const handleReturn = useCallback((previous: string) => {
    dispatch(setMenuLevel(0));
    navigate(previous);
  }, []);

  return (
    <SubMenu isExpanded={isExpanded}>
      {items.map((item) => {
        const hasSubItems = item.childItems.nodes.length > 0;

        return (
          <SubMenuItem key={item.id}>
            {(function () {
              if (hasSubItems) {
                return (
                  <>
                    <Link to={item.path} onClick={() => handleClick(item)}>
                      {item.label}
                    </Link>
                    <SlidingSubMenu
                      isHidden={currentMenuSubItem !== item.id}
                      parentLabel={parentMenuLabel}
                      items={item.childItems.nodes}
                      level={1}
                      onReturn={() => handleReturn(item.path)}
                    />
                  </>
                );
              } else {
                return <Link to={item.path}>{item.label}</Link>;
              }
            })()}
          </SubMenuItem>
        );
      })}
    </SubMenu>
  );
};
