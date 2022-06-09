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
import type { Menu_Items_Menu_Items } from "@src/generated/graphql";

type ComponentProps = {
  isExpanded: boolean;
  items: Menu_Items_Menu_Items[];
  parentSlug: string;
};

type ComponentType = React.VFC<ComponentProps>;

export const FirstSubMenu: ComponentType = ({
  isExpanded,
  items,
  parentSlug,
}) => {
  const { currentMenuSubItem, parentMenuLabel, dispatch } = useAppState();

  const handleClick = useCallback((id: string, title: string) => {
    dispatch(setMenuLevel(1));
    dispatch(setCurrentMenuSubItem(id));
    dispatch(setParentMenuLabel(title));
  }, []);

  const handleReturn = useCallback((previous: string) => {
    dispatch(setMenuLevel(0));
    navigate(previous);
  }, []);

  return (
    <SubMenu isExpanded={isExpanded}>
      {items.map((item) => {
        const { related_menu_items_id } = item;
        const hasSubItems = !!related_menu_items_id?.child_items;

        if (!related_menu_items_id) {
          return;
        }

        const urlTo = `${parentSlug}/${related_menu_items_id.path!}`;

        return (
          <SubMenuItem key={related_menu_items_id.id}>
            {(function () {
              if (hasSubItems) {
                return (
                  <>
                    <Link
                      to={urlTo}
                      onClick={() =>
                        handleClick(
                          related_menu_items_id.id!,
                          related_menu_items_id.title!
                        )
                      }
                    >
                      {related_menu_items_id.title}
                    </Link>
                    {/*<SlidingSubMenu
                      isHidden={currentMenuSubItem !== related_menu_items_id.id}
                      parentLabel={parentMenuLabel}
                      items={related_menu_items_id.child_items}
                      level={1}
                      onReturn={() =>
                        handleReturn(related_menu_items_id.path as string)
                      }
                    />*/}
                  </>
                );
              } else {
                return <Link to={urlTo}>{related_menu_items_id.title}</Link>;
              }
            })()}
          </SubMenuItem>
        );
      })}
    </SubMenu>
  );
};
