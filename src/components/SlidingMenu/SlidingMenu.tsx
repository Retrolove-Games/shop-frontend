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
  const { items } = useHeaderMenu();
  const isHome = useIsHome();

  const { menuLevel, currentMenuItem, dispatch } = useAppState();

  // First level click
  const handleClick = useCallback(
    (id: string) => {
      if (currentMenuItem !== id) {
        dispatch(setCurrentMenuItem(id));
      } else {
        dispatch(setCurrentMenuItem(""));
      }
    },
    [currentMenuItem]
  );

  // Return to root menu
  const handleReturnHome = useCallback(async () => {
    await navigate("/");
    dispatch(setCurrentMenuItem(""));
  }, []);

  return (
    <Wrapper>
      <Menu level={menuLevel}>
        {items &&
          items.map((item) => {
            const { menu_items_id } = item;
            const hasSubItems = !!menu_items_id?.child_items;

            if (!menu_items_id) {
              return;
            }

            const { id, title, path, child_items } = menu_items_id;

            return (
              <MenuItem key={menu_items_id.id}>
                {(function () {
                  if (hasSubItems) {
                    return (
                      <>
                        <RootElement onClick={() => handleClick(id as string)}>
                          {menu_items_id.title}
                        </RootElement>
                        {/* <FirstSubMenu
                          items={menu_items_id.child_items}
                          isExpanded={currentMenuItem === item.id}
                        /> */}
                      </>
                    );
                  } else {
                    return <Link to={path!}>{title!}</Link>;
                  }
                })()}
              </MenuItem>
            );
          })}
      </Menu>
    </Wrapper>
  );

  /* return (
    <Wrapper>
      <Menu level={menuLevel}>
        {!items &&
          items!.length < 1 &&
          items!.map((item) => {
            const hasSubItems = item.menu_items_id?.child_items?.length > 0;

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
  ); */
};
