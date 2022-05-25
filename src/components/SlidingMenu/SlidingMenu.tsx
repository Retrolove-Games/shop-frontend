import React, { useCallback } from "react";
import { Wrapper } from "./SlidingMenu.styles";
import {
  Menu,
  MenuItem,
  RootElement,
  MenuFooter,
} from "@retrolove-games/ui-menu";
import { Button } from "@retrolove-games/ui-button";
import { IconReturn } from "@retrolove-games/ui-icon";
import { FirstSubMenu } from "./FirstSubMenu";
import { useHeaderMenu } from "@hooks/useHeaderMenu";
import { useAppState } from "@src/store/AppStateContext";
import { setCurrentMenuItem } from "@src/store/actions/actions";
import { Link, navigate } from "gatsby";
import { useIsHome } from "@hooks/useIsHome";

type ComponentProps = {};

type ComponentType = React.VFC<ComponentProps>;

export const SlidingMenu: ComponentType = () => {
  const { nodes: menuItems } = useHeaderMenu();
  const isHome = useIsHome();

  const {
    menuLevel,
    currentMenuItem,
    dispatch,
  } = useAppState();

  // First level click
  const handleClick = useCallback((id: string) => {
    if (currentMenuItem !== id) {
      dispatch(setCurrentMenuItem(id));
    } else {
      dispatch(setCurrentMenuItem(""));
    }
  }, [currentMenuItem]);

  // Return to root menu
  const handleReturnHome = useCallback(async () => {
    await navigate("/");
    dispatch(setCurrentMenuItem(""));
  }, []);

  return (
    <Wrapper>
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
        {!isHome && (
          <MenuFooter>
            <Button
              onClick={handleReturnHome}
              size="medium"
              leftElement={<IconReturn size="xsmall" />}
              shouldFitContainer
            >
              Powrót
            </Button>
          </MenuFooter>
        )}
      </Menu>
    </Wrapper>
  );
};
