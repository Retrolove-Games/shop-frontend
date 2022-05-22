import React from "react";
import { Wrapper } from "./SlidingMenu.styles";
import { Menu, MenuItem, RootElement } from "@retrolove-games/ui-menu";
import { FirstSubMenu } from "./FirstSubMenu";
import { useHeaderMenu } from "@hooks/useHeaderMenu";
import { useAppState } from "@src/store/AppStateContext";
import { setCurrentMenuItem } from "@src/store/actions/actions";
import { Link } from "gatsby";

type ComponentProps = {};

type ComponentType = React.VFC<ComponentProps>;

export const SlidingMenu: ComponentType = ({ ...props }) => {
  const { nodes: menuItems } = useHeaderMenu();
  const {
    menuLevel,
    currentMenuItem,
    currentMenuSubItem,
    parentMenuLabel,
    dispatch,
  } = useAppState();

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
        {menuItems.map((item) => {
          const hasSubItems = item.childItems.nodes.length > 0;

          return (
            <MenuItem key={item.id}>
              {(function () {
                if (hasSubItems) {
                  return (
                    <>
                      <RootElement onClick={() => handleClick(item.id)}>
                        {item.label}
                      </RootElement>
                      <FirstSubMenu
                        items={item.childItems.nodes}
                        isExpanded={currentMenuItem === item.id}
                      />
                    </>
                  );
                } else {
                  return <Link to={item.path}>{item.label}</Link>;
                }
              })()}
            </MenuItem>
          );
        })}
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
