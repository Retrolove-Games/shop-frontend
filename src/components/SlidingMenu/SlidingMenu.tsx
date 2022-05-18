import React, { useState } from "react";
import { Wrapper } from "./SlidingMenu.styles";
import { Menu, MenuItem, SubMenu, SubMenuItem } from "@retrolove-games/ui-menu";
import { Link } from "gatsby";

type ComponentProps = {};

type ComponentType = React.VFC<ComponentProps>;

export const SlidingMenu: ComponentType = ({ ...props }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Wrapper {...props}>
      <Menu>
        <MenuItem>
          <button onClick={() => setExpanded(!expanded)}>Test</button>
          <SubMenu isExpanded={expanded}>
            <SubMenuItem>
              <Link to="/test/preview">Preview</Link>
            </SubMenuItem>
            <SubMenuItem>
              <Link to="/">Index</Link>
            </SubMenuItem>
            <SubMenuItem>
              <Link to="/">Index 2</Link>
            </SubMenuItem>
            <SubMenuItem>
              <Link to="/">Index 2</Link>
            </SubMenuItem>
            <SubMenuItem>
              <Link to="/">Index 2</Link>
            </SubMenuItem>
            <SubMenuItem>
              <Link to="/">Index 2</Link>
            </SubMenuItem>
            <SubMenuItem>
              <Link to="/">Index 2</Link>
            </SubMenuItem>
            <SubMenuItem>
              <Link to="/">Index 2</Link>
            </SubMenuItem>
            <SubMenuItem>
              <Link to="/">Index 2</Link>
            </SubMenuItem>
            <SubMenuItem>
              <Link to="/">Index 2</Link>
            </SubMenuItem>
            <SubMenuItem>
              <Link to="/">Index 2</Link>
            </SubMenuItem>
            <SubMenuItem>
              <Link to="/">Index 2</Link>
            </SubMenuItem>
            <SubMenuItem>
              <Link to="/">Index 2</Link>
            </SubMenuItem>
          </SubMenu>
        </MenuItem>
        <MenuItem>
          <a href="#">Zażółć gęslą jaźń</a>
        </MenuItem>
      </Menu>
    </Wrapper>
  );
};
