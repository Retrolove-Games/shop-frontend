import React from "react";
import {
  SlidingSubMenu as SlidingSubMenuWrapper,
  SubMenuItem,
  SubMenuLabel,
  SubMenuFooter
} from "@retrolove-games/ui-menu";
import { Button } from "@retrolove-games/ui-button";
import { Link } from "gatsby";
import { IconReturn } from "@retrolove-games/ui-icon";
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
  onReturn,
}) => {
  return (
    <SlidingSubMenuWrapper level={level} isHidden={isHidden}>
      <SubMenuLabel>
        {parentLabel}
      </SubMenuLabel>
      {items.map((item) => (
        <SubMenuItem key={item.id}>
          <Link to={item.path}>{item.label}</Link>
        </SubMenuItem>
      ))}
      <SubMenuFooter>
        <Button onClick={onReturn} size="medium" shouldFitContainer>
          <IconReturn size="xsmall" /> Powrót
        </Button>
      </SubMenuFooter>
    </SlidingSubMenuWrapper>
  );
};
