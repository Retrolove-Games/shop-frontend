import React from "react";
import {
  SlidingSubMenu as SlidingSubMenuWrapper,
  SubMenuItem,
} from "@retrolove-games/ui-menu";
import { Button } from "@retrolove-games/ui-button";
import { Link } from "gatsby";
import type { MenuItemNode } from "@hooks/useHeaderMenu";

type ComponentProps = {
  isHidden: boolean;
  items: MenuItemNode[];
  level: number;
  parentLabel: string;
  onReturn: () => void;
};

type ComponentType = React.VFC<ComponentProps>;

export const SlidingSubMenu: ComponentType = ({
  isHidden,
  items,
  parentLabel,
  level,
  onReturn
}) => {
  return (
    <SlidingSubMenuWrapper level={level} isHidden={isHidden}>
      <li>{parentLabel}</li>
      {items.map((item) => (
        <SubMenuItem key={item.id}>
          {/*<Link to={item.path}>{item.label}</Link>*/}
          <button>{item.label}</button>
        </SubMenuItem>
      ))}
      <li>
        <Button onClick={onReturn} size="medium" shouldFitContainer>
          Powrót
        </Button>
      </li>
    </SlidingSubMenuWrapper>
  );
};
