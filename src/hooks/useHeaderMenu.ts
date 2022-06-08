import { useStaticQuery, graphql } from "gatsby";
import { Menus } from "@src/generated/graphql";
import type { Directus } from "@src/types/utilty";

export const useHeaderMenu = () => {
  const data = useStaticQuery<Directus<{ menus: [Menus] }>>(
    graphql`
      fragment MenuItems on DirectusData_menu_items {
        title
        path
        id
      }

      query Menu {
        directus {
          menus(
            filter: { name: { _eq: "sidebar" }, status: { _eq: "published" } }
          ) {
            name
            items {
              menu_items_id(sort: ["sort"]) {
                ...MenuItems
                child_items {
                  related_menu_items_id(sort: ["sort"]) {
                    ...MenuItems
                    child_items {
                      related_menu_items_id {
                        ...MenuItems
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  );

  return data.directus.menus[0];
};
