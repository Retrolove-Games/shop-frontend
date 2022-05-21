import React, { useState } from "react";
import { Wrapper } from "./SlidingMenu.styles";
import { Menu, MenuItem, SubMenu, SubMenuItem } from "@retrolove-games/ui-menu";
import { FirstSubMenu } from "./FirstSubMenu";
import { useHeaderMenu } from "@hooks/useHeaderMenu";
import { useAppState } from "@src/store/AppStateContext";
import { setMenuLevel, setCurrentMenuItem } from "@src/store/actions/actions";

type ComponentProps = {};

type ComponentType = React.VFC<ComponentProps>;

export const SlidingMenu: ComponentType = ({ ...props }) => {
  const { nodes: menuItems } = useHeaderMenu();
  const { menuLevel, currentMenuItem, currentMenuSubItem, parentMenuLabel, dispatch } = useAppState();

  // First level click
  const handleClick = (id: string) => {
    if (currentMenuItem !== id) {
      dispatch(setCurrentMenuItem(id));
    } else {
      dispatch(setCurrentMenuItem(""));
    }
  };

  return (
    <Wrapper {...props}>
      <Menu level={menuLevel}>
        {menuItems.map((item) => (
          <MenuItem key={item.id}>
            <button onClick={() => handleClick(item.id)}>{item.label}</button>
            <FirstSubMenu
              items={item.childItems.nodes}
              isExpanded={currentMenuItem === item.id}
            />
          </MenuItem>
        ))}
      </Menu>
      <pre>
        {menuLevel}
        <br />
        {currentMenuItem}
        <br />
        {currentMenuSubItem}
        <br />
        {parentMenuLabel}
      </pre>
    </Wrapper>
  );
};
