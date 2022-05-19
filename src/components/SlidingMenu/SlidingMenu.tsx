import React, { useState } from "react";
import { Wrapper } from "./SlidingMenu.styles";
import { Menu, MenuItem, SubMenu, SubMenuItem } from "@retrolove-games/ui-menu";
import { FirstSubMenu } from "./FirstSubMenu";
import { Link } from "gatsby";
import { useHeaderMenu } from "@hooks/useHeaderMenu";
import { useMenuState } from "@src/context/MenuContext";
import { setMenuLevel } from "@src/context/MenuContextActions";

type ComponentProps = {};

type ComponentType = React.VFC<ComponentProps>;

export const SlidingMenu: ComponentType = ({ ...props }) => {
  const [expanded, setExpanded] = useState(false);
  const { nodes: menuItems } = useHeaderMenu();
  const { menuLevel, currentItem, currentSubItem, parentElement, dispatch } =
    useMenuState();

  return (
    <Wrapper {...props}>
      <Menu>
        {menuItems.map((item) => (
          <MenuItem key={item.id}>
            <button>{item.label}</button>
            <FirstSubMenu items={item.childItems.nodes} isExpanded={true} />
          </MenuItem>
        ))}
        <MenuItem>
          <button onClick={() => {
            setExpanded(!expanded);
            dispatch(setMenuLevel(menuLevel + 1));
          }}>Konsole</button>
          <SubMenu isExpanded={expanded}>
            <SubMenuItem>
              <Link to="/test/preview">Nintendo</Link>
            </SubMenuItem>
            <SubMenuItem>
              <Link to="/">Sega</Link>
            </SubMenuItem>
            <SubMenuItem>
              <Link to="/">Commodore</Link>
            </SubMenuItem>
            <SubMenuItem>
              <Link to="/">Neo Geo</Link>
            </SubMenuItem>
          </SubMenu>
        </MenuItem>
        <MenuItem>
          <a href="#">Zażółć gęslą jaźń</a>
        </MenuItem>
      </Menu>
      <pre>{menuLevel}</pre>
    </Wrapper>
  );
};
